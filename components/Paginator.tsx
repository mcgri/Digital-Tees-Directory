import Link from "next/link";

interface PaginatorProps {
  previousPage: number;

  nextPage: number;
}
//TODO: Paginator needs logic to disable links if no previous or next page
const Paginator = ({ previousPage, nextPage }: PaginatorProps) => {
  return (
    <div className="flex justify-center gap-2">
      <Link
        href={`${previousPage}`}
        className="dtd-button text-sm py-3 px-5 gap-3 w-full md:w-32 justify-center duration-150 bg-white/80 hover:bg-white/90"
      >
        <span>Previous</span>
      </Link>
      <Link
        href={`${nextPage}`}
        className="dtd-button text-sm py-3 px-5 gap-3 w-full md:w-32 justify-center duration-150 bg-white/90 hover:bg-white/90"
      >
        <span>Next</span>
      </Link>
    </div>
  );
};
export default Paginator;
