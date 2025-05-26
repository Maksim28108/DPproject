"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const logDir = path_1.default.resolve(__dirname, '../logs');
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir);
}
const fileStream = pino_1.default.destination(path_1.default.join(logDir, 'app.log'));
exports.logger = (0, pino_1.default)({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss',
        },
    },
    level: process.env.LOG_LEVEL || 'info',
}, fileStream);
