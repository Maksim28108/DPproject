"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileparser_1 = require("./parsers/fileparser");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const shapes = yield (0, fileparser_1.parseFile)('data/shapes.txt');
        console.log('Parsed shapes:', shapes);
    });
}
main().catch(err => {
    console.error(err);
    process.exit(1);
});
