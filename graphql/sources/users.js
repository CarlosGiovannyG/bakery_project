import { RESTDataSource } from "apollo-datasource-rest";
import { allUsers } from "../serves";

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = allUsers;
  }

  async oneUser() {
    return await this.get("/");
  }

  async RegisterUsers(credencials) {
    credencials = new Object(credencials);
    return await this.post("/register", credencials);
  }
}

export default UsersApi;
