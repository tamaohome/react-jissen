import { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) => {
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    // 最初のページ
    pages.push(1);

    // 左側のドット
    if (shouldShowLeftDots) {
      pages.push("...");
    } else if (leftSiblingIndex > 2) {
      for (let i = 2; i < leftSiblingIndex; i++) {
        pages.push(i);
      }
    }

    // 現在のページ前後
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // 右側のドット
    if (shouldShowRightDots) {
      pages.push("...");
    } else if (rightSiblingIndex < totalPages - 1) {
      for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
        pages.push(i);
      }
    }

    // 最後のページ
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, siblingCount]);

  if (totalPages === 1) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center gap-2">
      {/* 前へボタン */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="前へ"
        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
      >
        <FaChevronLeft size={16} />
      </button>

      {/* ページ番号 */}
      <div className="flex gap-1">
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="px-3 py-2 text-slate-700">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                aria-label={`ページ ${page} へ移動`}
                className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-all ${
                  currentPage === page
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 次へボタン */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="次へ"
        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
      >
        <FaChevronRight size={16} />
      </button>
    </nav>
  );
};
