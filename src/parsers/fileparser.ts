import fs from "fs";
import readline from "readline";
import { logger } from "../logger";
import { ShapeFactory } from "../factories/shapefactory";
import { ValidationError } from "../errors/validateErrors";

export async function parseFile(path: string) {
  const shapes = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const [id, type, ...params] = trimmed.split(/\s+/);
    try {
      const shape = ShapeFactory.create(type, id, params);
      shapes.push(shape);
    } catch (err: any) {
      if (err instanceof ValidationError) {
        logger.error({ id, type, params }, err.message);
      } else {
        logger.error(err);
      }
    }
  }

  return shapes;
}
