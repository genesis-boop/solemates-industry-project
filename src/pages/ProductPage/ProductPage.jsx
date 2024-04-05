import "./ProductPage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
function ProductPage() {
  return (
    <main className="product-page">
      <SearchBar />
      <ProductCard />
    </main>
  );
}

export default ProductPage;
