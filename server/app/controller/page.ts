import { Controller } from "egg";

export default class Page extends Controller {
  //搜索标签相同的文章
  public async searchTag() {
    let { ctx, service } = this;
    let data = await service.page.searchTag(ctx.query.tag);
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.body = {
      status: 200,
      msg: data,
    };
  }
}
