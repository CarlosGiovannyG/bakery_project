import { RESTDataSource } from "apollo-datasource-rest";
import urls from "../serves";

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = urls.allUsers;
  }

  async oneUser() {
    return await this.get("/");
  }
}

export default UsersApi;
