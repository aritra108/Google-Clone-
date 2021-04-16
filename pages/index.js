import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

export default function Home() {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer transition duration-100 ease-in" />
          <Avatar url="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </header>

      <form
        className="flex flex-col items-center flex-grow mt-24 w-4/5"
        onSubmit={search}
      >
        <Image
          src="https://cdn4.iconfinder.com/data/icons/google-3/1000/Google_2015_logo-512.png"
          height={100}
          width={300}
        />
        <div className="flex items-center w-full mt-5 px-5 py-3 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full  border border-gray-200 sm:max-w-lg lg:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
