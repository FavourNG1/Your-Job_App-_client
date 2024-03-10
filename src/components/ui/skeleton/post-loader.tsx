import React from "react";

const PostLoader = () => {
  return (
    <div className="py-2 rounded w-[25rem]  animate-pulse dark:bg-my_gray bg-white">
      <div className="flex w-full p-2 space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-900 bg-gray-200"></div>
        <div className="flex py-2 w-full space-y-2">
          <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
          <div className="w-5/6 h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        </div>
      </div>
      <div className="p-4 space-y-2 sm:px-8">
        <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        <div className="w-full h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
        <div className="w-3/4 h-3 rounded dark:bg-gray-900 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default PostLoader;
