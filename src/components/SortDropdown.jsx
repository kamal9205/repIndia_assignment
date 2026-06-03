export default function SortDropdown({
  sort,
  setSort,
}) {
  return (
    <select
      value={sort}
      onChange={(e) =>
        setSort(e.target.value)
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
      <option value="">
        Sort By Price
      </option>

      <option value="low">
        Low to High
      </option>

      <option value="high">
        High to Low
      </option>
    </select>
  );
}