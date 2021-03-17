import { Controller } from 'egg'

export default class Index extends Controller {
  //获取头部文章
  public async getHead () {
    let { ctx, service } = this
    let data = await service.index.getHead()
    ctx.set("Content-Type", "application/json;charset=utf-8")
    console.log(data)
    ctx.body = {
      status: 200,
      msg: data
    }
  }
  //获取最新文章
  public async getNew () {
    let { ctx, service } = this
    let data = await service.index.getNew()
    ctx.set("Content-Type", "application/json;charset=utf-8")
    ctx.body = {
      status: 200,
      msg: data
    }
  }
  //获取最热门文章
  public async getHot () {
    let { ctx, service } = this
    let data = await service.index.getHot()
    ctx.set("Content-Type", "application/json;charset=utf-8")
    ctx.body = {
      status: 200,
      msg: data
    }
  }
}