export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
        bg-white
        p-5
        rounded-2xl
        shadow-md
        mb-8
        grid
        md:grid-cols-3
        gap-4
      "
    />
  );
}