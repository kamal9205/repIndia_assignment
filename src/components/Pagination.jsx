export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center gap-2 mt-8 flex-wrap">
      {[...Array(totalPages)].map(
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}