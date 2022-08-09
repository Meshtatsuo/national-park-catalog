import { useMemo } from "react"

export const DOTS = "...";

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount =1,
    currentPage,
}) => {
    const paginationRange = useMemo(() => {
        // TODO: IMPLEMENT LOGIC
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const range = (start, end) => {
            let length = end - start + 1;
            return Array.from({ length }, (_, idx) => idx + start);
        }

        const totalPageNumbers = siblingCount + 5;

        // If number pages is less than the number of pages we want to show in the component, return the range.
        if(totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        
        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;


        // No left dots to show, but show right dots
        if (!showLeftDots && showRightDots){
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }

        // Show left dots, but don't show right dots
        if (showLeftDots && !showRightDots){
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        // Show both left and right dots
        if(showLeftDots && showRightDots){
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
}