import axios from "axios";

export default class PopupModel {
  static async getUserPosts(user) {
    try {
      const res = await axios.get(`http://localhost:4500/posts?user=${user}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
