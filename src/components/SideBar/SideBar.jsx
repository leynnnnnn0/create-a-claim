import "./SideBar.css"
import { CiCircleRemove } from "react-icons/ci";
import { sideBarData } from "../Data/sidebarData";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const SideBar = ({handleDisplay}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={handleDisplay}
    >
      <div className="side-bar">
        <CiCircleRemove className="hide-icon" onClick={handleDisplay} />
        <ul className="side-bar-items">
          {sideBarData.map((item, index) => {
            return <Link to={item.to} key={index}>{item.title}</Link>
          })}
        </ul>
      </div>
    </OutsideClickHandler>
  );
}

export default SideBar