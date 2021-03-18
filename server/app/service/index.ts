import { Service } from 'egg'
import { formatTime } from "../utils/util_func"

export default class Index extends Service {
  //获取头部文章
  public async getHead () {
    try {
      let data: any = await this.app.mysql.query("select * from page where p_show = 1")
      return data;
    } catch (e) {
      console.error(e)
    }
  }
  //获取最新文章
  public async getNew () {
    try {
      let data: any = await this.app.mysql.query("select * from page order by p_time DESC limit 8;")
      formatTime(data)
      return data;
    } catch (e) {
      console.error(e)
    }
  }

  //获取最热门文章
  public async getHot () {
    try {
      let data: any = await this.app.mysql.query("select * from page order by p_view DESC limit 8;")
      formatTime(data)
      return data;
    } catch (e) {
      console.error(e)
    }
  }

  //按步长依次获取文章
  public async getAllStep (start) {
    try {
      let end = start + 7
      let data: any = await this.app.mysql.query("select * from page where p_id between ? and ?", [start, end])
      formatTime(data)
      return data;
    } catch (e) {
      console.error(e)
    }
  }
}


