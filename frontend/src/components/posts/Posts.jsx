import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "simo blues",
      profilePic: "23528.jpg",
      desc: " hike time",
      img: "simo.jpg",
    },
    {
      id: 2,
      name: "simo blues",
      profilePic: "engineer.jpg",
      desc: " my lovely pet during hike time",
      img: "Penguins.jpg",
    },

    {
      id: 3,
      name: "simo blues",
      profilePic: "book.jpg",
      desc: "straight to library after hike",
      img: "book.jpg",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
