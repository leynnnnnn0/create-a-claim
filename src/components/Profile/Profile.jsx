import "./Profile.css";
import image from "../Data/black.jpg";
import { userStore } from "../../Store/userStore";

const Profile = () => {
  const { currentUser } = userStore();

  return (
    <div className="profile">
      <div className="info">
        <div className="about-user">
          {currentUser.length !== 0 && (
            <>
              <span>Name: {currentUser.name}</span>
              <span>Email: {currentUser.email}</span>
              <span>Username: {currentUser.username}</span>
              <span>Phone: {currentUser.phone}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
