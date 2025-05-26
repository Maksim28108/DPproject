import { parseFile } from './parsers/fileparser';

async function main() {
  const shapes = await parseFile('data/shapes.txt');
  console.log('Parsed shapes:', shapes);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});