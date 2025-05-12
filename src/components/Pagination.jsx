import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const visiblePages = 4;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 my-8">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="text-blue-950 p-2 rounded-full border-[1px] border-blue-700 hover:bg-blue-600 disabled:opacity-50"
      >
        <ArrowLeft />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 rounded-full ${
            page === currentPage
              ? "bg-blue-950 text-white"
              : "bg-blue-200 text-black hover:bg-blue-400"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="text-blue-950 p-2 rounded-full border-[1px] border-blue-700 hover:bg-blue-600 disabled:opacity-50"
      >
        <ArrowRight/>
      </button>
    </div>
  );
};

export default Pagination;
