// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportContent from '../../../app/controller/content';
import ExportIndex from '../../../app/controller/index';
import ExportPage from '../../../app/controller/page';

declare module 'egg' {
  interface IController {
    content: ExportContent;
    index: ExportIndex;
    page: ExportPage;
  }
}
