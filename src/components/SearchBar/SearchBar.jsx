import "./SearchBar.scss";
import searchBar from "../../assets/images/Product_Community/Similar-Items/Searchbar.svg"
import logo from "../../assets/images/Product_Community/Similar-Items/Logo1.svg"

function SearchBar() {
  return (
    <div className="search-bar">
      <img className="logo" src={logo} alt="Logo" />
      <img className="search" src={searchBar} alt="search bar" />
    </div>
  );
}

export default SearchBar;
