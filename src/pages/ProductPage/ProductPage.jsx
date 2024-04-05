import "./ProductPage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import SimiliarItems from "../../components/SimiliarItems/SimiliarItems";
function ProductPage() {
  return (
    <main className="product-page">
      <SearchBar />
      <ProductCard />
      <SimiliarItems />
    </main>
  );
}

export default ProductPage;
