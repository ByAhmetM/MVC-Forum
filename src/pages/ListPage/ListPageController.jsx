import { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

const ListPageController = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    Model.getPosts().then((data) => setPosts(data));
  }, []);
  return <ListPageView posts={posts} />;
};

export default ListPageController;
