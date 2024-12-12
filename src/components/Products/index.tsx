import { useState } from "react";
import ProductCard from "./ProductCard";

// Product Mock Up Models
const products_item = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    product_name: `Product Name ${i + 1}`,
    product_price: 130000 + i * 5000,
    product_description: `Description for Product ${i + 1}`,
    product_category: `Category ${i + 1}`,
    echo_points: 4 + (i % 5),
    echo_materials: 3 + (i % 4),
    image: "https://via.placeholder.com/200",
}));

const Products = () => {
    const itemsPerPage = 10; 
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products_item.length / itemsPerPage);
    const paginatedProducts = products_item.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="px-6 py-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet Our Products</h2>

            {/* Product Grid */}
            <div className="grid grid-cols-5 gap-6 max-w-screen-xl mx-auto">
                {paginatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        product_name={product.product_name}
                        product_description={product.product_description}
                        product_category={product.product_category}
                        echo_points={product.echo_points}
                        echo_materials={product.echo_materials}
                        image={product.image}
                        product_price={product.product_price}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                            i + 1 === currentPage
                                ? "bg-green-600 text-white"
                                : "bg-white border border-gray-300 text-gray-700 hover:bg-green-600 hover:text-white"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Products;