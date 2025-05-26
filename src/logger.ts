// import pino from 'pino';
// import path from 'path';
// import fs from 'fs';

// const logDir = path.resolve(__dirname, '../logs');
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir);
// }

// const fileStream = pino.destination(path.join(logDir, 'app.log'));

// export const logger = pino(
//   {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true,
//         translateTime: 'yyyy-mm-dd HH:MM:ss',
//       },
//     },
//     level: process.env.LOG_LEVEL || 'info',
//   },

//   fileStream
// );


import pino from 'pino';
import path from 'path';
import fs from 'fs';

// 1) Папка для логов
const logDir = path.resolve(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// 2) Поток в файл (чистый JSON)
const fileStream = pino.destination(path.join(logDir, 'app.log'));

export const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    // больше не указываем transport:… тут
  },
  fileStream
);
