import { useRouter } from "next/router";
import { Link } from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = +router.query.start || 0;

  return (
    <div className="flex justify-evenly max-w-lg mb-10 text-blue-700">
      {startIndex >= 10 && (
        <a href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex-grow flex flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </a>
      )}

      <a href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex-grow flex flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </a>
    </div>
  );
};

export default PaginationButtons;
