import { Controller } from "egg";

export default class LoginController extends Controller {
  //登录
  public async login() {
    const { ctx, service } = this;
    let data = ctx.request.body;
    if (await service.login.checkExist(data.user)) {
      //已有账号
      let user = await service.login.getUser(data.user);
      //检查密码
      if (user.user_pwd === data.pwd) {
        ctx.set("Content-Type", "application/json;charset=utf-8");
        ctx.body = {
          user: user,
          status: 200,
        };
      } else {
        ctx.set("Content-Type", "application/json;charset=utf-8");
        ctx.body = {
          status: 0,
          msg: "password is error",
        };
      }
    } else {
      //新注册
      let user = await service.login.addUser(data);
      ctx.set("Content-Type", "application/json;charset=utf-8");
      ctx.body = {
        user: user,
        status: 200,
      };
    }
  }
}
