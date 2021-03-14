// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportExperience from '../../../app/controller/experience';
import ExportLogin from '../../../app/controller/login';

declare module 'egg' {
  interface IController {
    experience: ExportExperience;
    login: ExportLogin;
  }
}
