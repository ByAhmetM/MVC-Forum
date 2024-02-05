import axios from "axios";

export default class ListPageModel {
  static async getPosts() {
    try {
      const res = await axios.get("http://localhost:4500/posts");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
