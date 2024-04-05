import "./ProductPage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import SimiliarItems from "../../components/SimiliarItems/SimiliarItems";
import Comments from "../../components/Comments/Comments";
import NavBar from "../../components/NavBar/NavBar";


function ProductPage() {
  return (
    <main className="product-page">
      <SearchBar />
      <ProductCard />
      <SimiliarItems />
      <Comments />
      <NavBar />
    </main>
  );
}

export default ProductPage;
