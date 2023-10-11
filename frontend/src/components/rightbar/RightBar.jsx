import { useContext } from "react";
import "./rightBar.scss";
import { AuthContext } from "../../context/authContext";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <span>simo blues</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <p>
                <span>simo blues</span>
                changed their cover picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <p>
                <span>simo blues</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <p>
                <span>simo blues</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <p>
                <span>simo blues</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <div className="online" />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <div className="online" />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <div className="online" />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <div className="online" />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="simo.jpg" alt="" />
              <div className="online" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
