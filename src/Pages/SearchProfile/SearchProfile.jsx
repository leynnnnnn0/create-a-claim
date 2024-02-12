import "./SearchProfile.css"
import Nav from "../../components/Navigation/Nav"
import Search from "../../components/Search/Search"
import Profile from "../../components/Profile/Profile"
import { userStore } from "../../Store/userStore.js"
import { useEffect } from "react"
const SearchProfile = () => {
    const store = userStore();
    useEffect(() => {
        store.fetchUserData()
    
}, [])
    return (
      <div className="search-profile">
          <div className="nav-section">
              <Nav/>
          </div> 
          <div className="search-section">
              <Search />
              <Profile/>
          </div>
    </div>
  )
}

export default SearchProfile