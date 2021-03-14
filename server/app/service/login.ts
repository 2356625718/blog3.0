import { Service } from 'egg'

interface User {
  user: string,
  pwd: string
}

export default class Login extends Service {
  //判断该用户是否存在
  public async checkExist (name: string) {
    const { service } = this
    await service.database.connect()
    let data:any = await service.database.query("select * from user where user_name = ?", [name])
    return data.length === 0 ? false : true
  }
  //获取已注册用户信息
  public async getUser (name: string) {
    const { service } = this
    let date = new Date()
    await service.database.query("update user set user_last_login = ? where user_name = ?", [date, name])
    let data:any = await service.database.query("select * from user where user_name = ?", [name])
    return data[0]
  }

  //新注册用户
  public async addUser (data: User) {
    const { service } = this
    let date = new Date()
    await service.database.query("insert into user(user_name, user_pwd, user_last_login) values(?, ?, ?)", [data.user, data.pwd, date])
    let res:any = await service.database.query("select * from user where user_name = ?", [data.user])
    return res[0]
  }
}