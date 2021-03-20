import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.get("/indexHead", controller.index.getHead);
  router.get("/indexNew", controller.index.getNew);
  router.get("/indexHot", controller.index.getHot);
  router.get("/indexAll", controller.index.getAllStep);
  router.get("/addLike", controller.content.addLike);
  router.get("/addView", controller.content.addView);
  router.get("/searchTag", controller.page.searchTag);
  router.get("/searchContent", controller.index.getSearch);
};
