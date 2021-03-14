import { Controller } from 'egg'

//学习打卡数据请求
export default class ExperienctController extends Controller {
  public async getExperience () {
    let { ctx, service } = this
    let data = await service.experience.getExperience()
    ctx.set('Content-Type', 'application/json;charset=utf-8')
    console.log("ok")
    ctx.body = {
      status: 200,
      msg: data
    }
  }
}