export default function Card(props) {
  const {
    title,
    image,
    description,
    link
  } = props;

  return (
    <div className="flex justify-center items-center h-80 mt-20">
      <div className="m-auto col-span-2 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 ">
        <div className="ml-5 mt-5 mb-5 font-bold text-gray-700 hover:text-red-400">
          <a href="/">
            <p>&larr; BACK</p>
          </a>
        </div>
        <div className="flex justify-center px-2 mt-5 mx-3 my-2 text-sm font-medium text-gray-400">
          <img className="w-[300px] h-[300px] rounded-full shadow-xl object-cover" src={image || "/android-chrome-512x512.png"} />
        </div>

        <div className="mt-5 p-5">
          <div className="flex flex-wrap justify-center items-center font-bold text-2xl text-gray-700">
            <h1>{title || "Title" }</h1>
          </div>
        </div>

        <div className="mr-5 ml-5 p-5 max-w-prose">
          <div className="flex flex-wrap justify-center items-center text-sm text-gray-700">
            <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }</p>
          </div>
        </div>

        <div className="mb-5 border-t border-gray-50">
          <div className="flex flex-wrap justify-center items-center">
            <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-3 px-10 border border-red-700 rounded">
              <a href={link || "/"}>
                GO
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}