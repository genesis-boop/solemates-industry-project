import "./ProductPage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import SimiliarItems from "../../components/SimiliarItems/SimiliarItems";
import Comments from "../../components/Comments/Comments";


function ProductPage() {
  return (
    <main className="product-page">
      <SearchBar />
      <ProductCard />
      <SimiliarItems />
      <Comments />
    </main>
  );
}

export default ProductPage;
