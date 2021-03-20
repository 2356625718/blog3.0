import { Controller } from "egg";

export default class Content extends Controller {
  //喜欢+1
  public async addLike() {
    let { ctx, service } = this;
    await service.content.addLike(ctx.query.id);
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.body = {
      status: 200,
    };
  }

  //观看+1
  public async addView() {
    let { ctx, service } = this;
    await service.content.addView(ctx.query.id);
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.body = {
      status: 200,
    };
  }
}
