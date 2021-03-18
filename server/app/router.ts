import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router } = app;
  router.get('/indexHead', controller.index.getHead)
  router.get('/indexNew', controller.index.getNew)
  router.get('/indexHot', controller.index.getHot)
  router.get('/indexAll', controller.index.getAllStep)
};
