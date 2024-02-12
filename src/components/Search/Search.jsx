import { userStore } from "../../Store/userStore";
import "./Search.css"
const Search = () => {
    const {setQuery, query, checkUser} = userStore();

  return (
    <div className="search">
      <div className="basic-search">
        <h3>Basic Search</h3>
        <form className="input-box">
          <input type="text" value={query} onChange={(e) => setQuery(e)}/>
          <p>Email</p>
          <button className="search-button" onClick={(e) => checkUser(e)}>Search</button>
        </form>
      </div>
      <div className="advance-search">
        <h3>Advance Search</h3>
        <form className="input-box grid">
          <div>
            <input type="name" />
            <p>First Name</p>
          </div>
          <div>
            <input type="name" />
            <p>Last Name</p>
          </div>
          <div>
            <input type="name" />
            <p>Username</p>
          </div>
          <div>
            <input type="number" />
            <p>Phone</p>
          </div>
          <button className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search