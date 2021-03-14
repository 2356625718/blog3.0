// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportDatabase from '../../../app/service/database';
import ExportExperience from '../../../app/service/experience';
import ExportLogin from '../../../app/service/login';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    database: AutoInstanceType<typeof ExportDatabase>;
    experience: AutoInstanceType<typeof ExportExperience>;
    login: AutoInstanceType<typeof ExportLogin>;
  }
}
