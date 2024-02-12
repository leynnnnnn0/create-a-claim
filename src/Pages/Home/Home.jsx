import "./Home.css"
import Nav from "../../components/Navigation/Nav"
import { userStore } from "../../Store/userStore"
import { useEffect } from "react";

const Home = () => {
  return (
      <div className="home">
          <div className="nav-section">
              <Nav/>
          </div>
    </div>
  )
}

export default Home