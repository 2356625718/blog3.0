import { Service } from "egg";

export default class ExperienceService extends Service {
  public async getExperience() {
    const { service } = this;
    try {
      await service.database.connect();
      let data: any = await service.database.query("select * from experience");
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
