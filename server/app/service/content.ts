import { Service } from "egg";

export default class Content extends Service {
  //喜欢+1
  public async addLike(id) {
    try {
      await this.app.mysql.query(
        "UPDATE page set p_like = p_like + 1 WHERE p_id = ?;",
        [id]
      );
      return;
    } catch (e) {
      console.error(e);
    }
  }

  //观看+1
  public async addView(id) {
    try {
      await this.app.mysql.query(
        "UPDATE page set p_view = p_view+ 1 WHERE p_id = ?;",
        [id]
      );
      return;
    } catch (e) {
      console.error(e);
    }
  }
}
