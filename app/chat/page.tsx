import ChatCard from "@/components/ui/cards/ChatCard";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { TiEdit, TiMessages } from "react-icons/ti";

export default function Chat() {
  return (
    <main className="flex h-screen">
      <aside className="flex w-full basis-1/4">
        <div className="flex w-full basis-1/4 flex-col bg-gray-800 px-4 py-8">
          <div className="self-center">
            <RiChatSmile2Line className="text-4xl text-purple-600" />
          </div>
          <div className="flex flex-col space-y-8 self-center pt-32">
            <button aria-label="Messages">
              <TiMessages className="text-2xl text-purple-600" />
            </button>
            <button aria-label="Settings">
              <MdOutlineSettings className="text-2xl text-purple-600" />
            </button>
          </div>
        </div>
        <div className="flex w-full basis-3/4">
          <article className="w-full">
            <section className="flex w-full items-center justify-between p-4">
              <h2 className="text-sm font-medium">
                Messages <span className="text-purple-600">(14)</span>
              </h2>
              <div className="flex items-center space-x-4">
                <button aria-label="Search messages">
                  <CiSearch className="text-xl" />
                </button>
                <button aria-label="New message">
                  <TiEdit className="text-xl" />
                </button>
              </div>
            </section>
            <hr className="bg-gray-300" />
            <section className="flex flex-col space-y-4 p-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center space-x-1 text-xs text-green-600">
                  <span>
                    <CiCirclePlus className="text-base font-semibold" />
                  </span>
                  <span>Online Now</span>
                </p>
                <p className="flex items-center space-x-1 text-xs text-gray-800">
                  <span>See All</span>
                  <span>
                    <IoChevronForwardCircleOutline className="text-base font-semibold" />
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
            <section className="flex w-full flex-col space-y-4 p-4">
              <p className="text-sm">All Messages</p>
              <div className="flex w-full flex-col space-y-4">
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
              </div>
            </section>
          </article>
          <div className="h-screen border-l bg-gray-300"></div>
        </div>
      </aside>
      <section className="w-full basis-2/3"></section>
    </main>
  );
}
