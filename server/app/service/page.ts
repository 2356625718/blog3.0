import { Service } from "egg";
import { formatTime } from "../utils/util_func";

export default class Page extends Service {
  public async searchTag(tag) {
    try {
      let data = await this.app.mysql.query(
        "select * from page where p_tag = ?;",
        [tag]
      );
      formatTime(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
