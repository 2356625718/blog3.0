import { Service } from "egg";
const mysql = require("mysql");

export default class Database extends Service {
  private conn;
  public connect() {
    try {
      this.conn = mysql.createConnection(this.config.mysql);
      this.conn.connect();
    } catch (e) {
      console.error(e);
    }
  }

  //增删改查
  public async query(sql: String, params?) {
    try {
      return new Promise((resolve, reject) => {
        this.conn.query(sql, params, (err, data) => {
          if (err) reject(err);
          resolve(JSON.parse(JSON.stringify(data)));
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}
