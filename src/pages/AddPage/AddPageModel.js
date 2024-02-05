import axios from "axios";

export default class AddPageModel {
  static async createPost(newPost) {
    try {
      await axios.post("http://localhost:4500/posts", newPost);
    } catch (error) {
      console.log(error);
    }
  }
}
