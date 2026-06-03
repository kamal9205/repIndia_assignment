export default function CategoryFilter({
  categories,
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
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
    >
      {categories.map((cat) => (
        <option
          key={cat}
          value={cat}
        >
          {cat}
        </option>
      ))}
    </select>
  );
}