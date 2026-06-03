import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";


import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";
import ProductSkeleton from "../components/ProductSkeleton";


export default function ProductListing() {
  const dispatch = useDispatch();

  const { products, loading } =
    useSelector(
      (state) => state.products
    );

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

 
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);


  let filtered = [...products];

  filtered = filtered.filter((p) =>
  p.title
    .toLowerCase()
    .includes(debouncedSearch.toLowerCase())
  );

  if (category !== "All") {
    filtered = filtered.filter(
      (p) =>
        p.category === category
    );
  }

  if (sort === "low") {
    filtered.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filtered.sort(
      (a, b) => b.price - a.price
    );
  }

  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  const PER_PAGE = 10;

  const start =
    (currentPage - 1) *
    PER_PAGE;

  const currentProducts =
    filtered.slice(
      start,
      start + PER_PAGE
    );

  const totalPages = Math.ceil(
    filtered.length / PER_PAGE
  );

  if (loading) {
    return (
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
      >
        {[...Array(8)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            category={category}
            setCategory={setCategory}
          />

          <SortDropdown
            sort={sort}
            setSort={setSort}
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2
            className="
      text-2xl
      font-bold
      text-white
    "
          >
            Products
          </h2>

          <span
            className="
      px-4
      py-2
      bg-slate-800
      rounded-xl
      text-slate-300
    "
          >
            {filtered.length} Products
          </span>
        </div>
        {currentProducts.length === 0 ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
    flex
    flex-col
    items-center
    justify-center
    py-20
    text-center
  "
          >
            <div className="text-7xl mb-4">
              🔍
            </div>

            <h2
              className="
      text-3xl
      font-bold
      text-white
    "
            >
              No Products Found
            </h2>

            <p
              className="
      text-slate-400
      mt-2
    "
            >
              No results found for
              <span className="text-violet-400">
                {" "}
                "{search}"
              </span>
            </p>

            <p
              className="
      text-slate-500
      mt-3
    "
            >
              Try changing your search or filter criteria.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSort("");
                setCurrentPage(1);
              }}
              className="
      mt-6
      px-6
      py-3
      rounded-xl
      bg-violet-600
      text-white
      hover:bg-violet-500
      transition-all
      duration-300
    "
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <div
            className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-8
    "
          >
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={
            setCurrentPage
          }
        />
      </div>
    </div>
  );
}