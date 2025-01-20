import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { TiEdit, TiMessages } from "react-icons/ti";

export default function Chat() {
  return (
    <main className="flex h-screen">
      <aside className="basis-1/3 flex w-full">
        <div className="bg-gray-800 basis-1/4 w-full flex flex-col py-8 px-4">
          <div className="self-center">
            <RiChatSmile2Line className="text-purple-600 text-4xl" />
          </div>
          <div className="pt-32 flex flex-col space-y-8 self-center">
            <button>
              <TiMessages className="text-purple-600 text-2xl" />
            </button>
            <button>
              <MdOutlineSettings className="text-purple-600 text-2xl" />
            </button>
          </div>
        </div>
        <div className="basis-3/4 w-full flex">
          <article className="w-full">
            <section className="flex justify-between items-center p-4">
              <h2 className="text-sm font-medium">
                Messages <span className="text-purple-600">(14)</span>
              </h2>
              <div className="flex items-center space-x-4">
                <CiSearch className="text-xl" />
                <TiEdit className="text-xl" />
              </div>
            </section>
            <hr className="bg-gray-300" />
            <section className="p-4 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center space-x-1 text-xs text-green-600">
                  <span>
                    <CiCirclePlus className="font-semibold text-base" />
                  </span>
                  <span>Online Now</span>
                </p>
                <p className="flex items-center space-x-1 text-xs text-gray-800">
                  <span>See All</span>
                  <span>
                    <IoChevronForwardCircleOutline className="font-semibold text-base" />
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
                <p className="h-9 w-9 rounded-full bg-gray-400"></p>
              </div>
            </section>
          </article>
          <div className="h-screen bg-gray-300 border-l"></div>
        </div>
      </aside>
      <section className="basis-2/3 w-full"></section>
    </main>
  );
}
