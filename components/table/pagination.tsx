import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { setPageIndex } from "@/app/lib/store/capsuleSlice";

function generatePagination(currentIndex: number, lastIndex: number) {
  const pages = [];
  let curr = currentIndex - 2;

  // Adjust start position if too low
  while (curr < 1) {
    curr++;
  }

  // Add first group of numbers
  for (let i = 0; i < 3; i++) {
    if (curr <= lastIndex) {
      pages.push(curr++);
    }
  }

  // Add ellipsis and end pages if there's a gap
  if (curr < lastIndex - 1) {
    pages.push("...");
    pages.push(lastIndex - 1);
    pages.push(lastIndex);
  } else if (curr <= lastIndex) {
    // Fill in any remaining numbers without gap
    while (curr <= lastIndex) {
      pages.push(curr++);
    }
  }

  return pages;
}

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const dispatch = useAppDispatch();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const lastPage = table.getPageCount();
  const pages = generatePagination(currentPage, lastPage);

  const updatePageIndex = (index: number) => {
    dispatch(setPageIndex(index));
  };

  const previousPage = () => {
    if (table.getCanPreviousPage()) {
      dispatch(setPageIndex(currentPage - 2));
    }
  };
  const nextPage = () => {
    if (table.getCanNextPage()) {
      dispatch(setPageIndex(currentPage));
    }
  };

  console.log(pages);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-start text-sm font-medium">
          Page {currentPage} of {lastPage}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => updatePageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={previousPage}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        {pages.map((value, index) => (
          <Button
            variant={`${currentPage === value ? "default" : "outline"}`}
            className="h-8 w-8 p-0"
            onClick={() => {
              if (typeof value === "number") {
                updatePageIndex(value - 1);
              }
            }}
            disabled={value === "..."}
            key={index}
          >
            <span className="sr-only">Go to previous page</span>
            {value}
          </Button>
        ))}
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={nextPage}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => updatePageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
