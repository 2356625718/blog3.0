// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCrypto from '../../../app/middleware/crypto';

declare module 'egg' {
  interface IMiddleware {
    crypto: typeof ExportCrypto;
  }
}
