import "./post.scss";

import { Link } from "@mui/material";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          {/* <MoreHorizIcon /> */}
        </div>
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  );
};

export default Post;
