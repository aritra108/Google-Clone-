import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://cdn4.iconfinder.com/data/icons/google-3/1000/Google_2015_logo-512.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form
          className="flex-grow flex items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-md max-w-3xl hover:shadow-lg focus-within:shadow-lg"
          onSubmit={search}
        >
          <input
            type="text"
            ref={searchInputRef}
            defaultValue={router.query.term}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = null)}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        </form>

        <Avatar
          url="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="ml-auto"
        />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
