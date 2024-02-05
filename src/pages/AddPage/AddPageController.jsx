import { useNavigate } from "react-router-dom";
import AddPageView from "./AddPageView";
import Model from "./AddPageModel";
import { v4 } from "uuid";

const AddPageController = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    newPost.id = v4();

    Model.createPost(newPost).then(() => navigate("/"));
  };
  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
