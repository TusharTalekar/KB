import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = ({ products }) => {
  const { categoryName } = useParams();
  // console.log(products);
  const a = products[categoryName] || [];
  const categoryProducts = Object.values(a);
  console.log(categoryProducts);


  return (
    <div className="font-sans p-8">
      <Link to="/" className="text-yellow-500">Back...</Link>
      <h1 className="text-3xl font-bold text-yellow-600">{categoryName}</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {categoryProducts.map((product) => (
          <div key={product.name} className="bg-white p-4 rounded shadow-md text-center">
            <Link to={`/${categoryName}/${product.name.split(" ").join("_")}`}>
              <img src={product.image} alt={product.name} className="h-60 m-auto object-cover mb-2" />
              <p className="font-bold">{product.name}</p>
              <p className="text-green-500">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPage;