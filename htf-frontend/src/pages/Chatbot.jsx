import React from "react";

const Chatbot = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="w-full h-15 p-1  bg-gray-800 shadow-md rounded-xl rounded-bl-none rounded-br-none">
          <div className="flex p-2 align-middle items-center">
            <div className="p-2 md:hidden rounded-full mr-1  text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
            {/* <div className="border rounded-full border-white p-1/2">
                        <img className="w-14 h-14 rounded-full" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png" alt="avatar"/>
                    </div> */}
            <div className="flex-grow p-2">
              <div className="text-md text-center text-gray-50 font-semibold">
                {" "}
                Krishi Mitra Chat
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-grow bg-gray-100 dark:bg-gray-900 my-2 p-2 overflow-y-auto">
          <div className="flex justify-end">
            <div className="flex items-end w-auto bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
              <div className="p-2">
                <div className="text-gray-200">
                  Hello ? How Can i help you ?
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-end w-3/4 bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
              <div className="p-2">
                <div className="text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex items-end w-3/4 bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 max-w-xl md:w-auto">
              <div className="p-2">
                <div className="text-gray-200 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end w-3/4">
            {/* <img className="w-8 h-8 m-3 rounded-full" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png" alt="avatar"/>   */}
            <div className="p-3 bg-purple-300 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-bl-none sm:w-3/4 md:w-3/6">
              <div className="text-xs text-gray-100 hidden dark:text-gray-200">
                Rey Jhon A. Baqurin
              </div>
              <div className="text-gray-700 dark:text-gray-200">
                Hello po ang pogi niyo
              </div>
              <div className="text-xs text-gray-400">just now</div>
            </div>
          </div>
        </div>
        <div className="h-15 flex flex-col-reverse  p-3 rounded-xl rounded-tr-none rounded-tl-none  bg-gray-800">
          <div className="flex items-center">
            <div className="search-chat flex flex-grow p-2">
              <input
                className="input  text-gray-200 text-sm p-5 focus:outline-none  bg-gray-800  flex-grow rounded-l-md"
                type="text"
                placeholder="Type your message ..."
              />
              <div className="bg-gray-800 dark:text-gray-200  flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
