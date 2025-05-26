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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = parseFile;
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const logger_1 = require("../logger");
const shapefactory_1 = require("../factories/shapefactory");
const validateErrors_1 = require("../errors/validateErrors");
function parseFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const shapes = [];
        const rl = readline_1.default.createInterface({
            input: fs_1.default.createReadStream(path),
            crlfDelay: Infinity
        });
        try {
            for (var _d = true, rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), _a = rl_1_1.done, !_a; _d = true) {
                _c = rl_1_1.value;
                _d = false;
                const line = _c;
                const trimmed = line.trim();
                if (!trimmed)
                    continue;
                const [id, type, ...params] = trimmed.split(/\s+/);
                try {
                    const shape = shapefactory_1.ShapeFactory.create(type, id, params);
                    shapes.push(shape);
                }
                catch (err) {
                    if (err instanceof validateErrors_1.ValidationError) {
                        logger_1.logger.error({ id, type, params }, err.message);
                    }
                    else {
                        logger_1.logger.error(err);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = rl_1.return)) yield _b.call(rl_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return shapes;
    });
}
