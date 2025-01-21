import ChatsView from "@/components/ChatsView";
import MessagesView from "@/components/MessagesView";
import ActiveUserCard from "@/components/ui/cards/ActiveUserCard";
import MessageInput from "@/components/ui/input/MessageInput";
import { ChatMessage } from "@/types/messaging/message";
import { CiCirclePlus, CiEdit, CiMenuKebab, CiSearch } from "react-icons/ci";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const messages: ChatMessage[] = [
  {
    value: "Good morning, how are you?",
    type: "Incoming",
    timeSent: "10:01",
    dateSent: new Date(2025, 0, 11),
  },
  {
    value:
      "Good morning, I am doing so well. Did you catch last night's game? I heard a lot of things happened.",
    type: "Outgoing",
    timeSent: "10:01",
    dateSent: new Date(2025, 0, 11),
  },
  {
    value:
      "No, I did not. Tell me about it. Where were you when you watched the match. I guess for yesterday's game you must have been out of the house",
    type: "Incoming",
    timeSent: "10:01",
    dateSent: new Date(2025, 0, 12),
  },
  {
    value: "Yes. I had to be at the house.",
    type: "Outgoing",
    timeSent: "10:01",
    dateSent: new Date(2025, 0, 13),
  },
];

export default function Chat() {
  return (
    <main className="flex h-screen overflow-hidden">
      <aside className="flex w-full basis-1/4">
        <div className="flex w-full">
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
                  <CiEdit className="text-xl" />
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
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
                <p className="h-9 w-9 rounded-full bg-gray-300"></p>
              </div>
            </section>
            <section className="flex w-full flex-col space-y-4 p-4">
              <p className="text-sm font-medium text-blue-600">All Messages</p>
              <ChatsView />
            </section>
          </article>
          <div className="h-screen border-l bg-gray-300"></div>
        </div>
      </aside>
      <section className="flex h-screen w-full basis-3/4 flex-col overflow-y-auto">
        <header className="flex w-full items-center justify-between p-4">
          <div className="w-[20%]">
            <ActiveUserCard />
          </div>
          <div className="flex items-center space-x-4">
            <button aria-label="Search messages">
              <CiSearch />
            </button>
            <button aria-label="View user options">
              <CiMenuKebab />
            </button>
          </div>
        </header>
        <hr className="bg-gray-600" />
        <section className="flex h-full flex-col bg-default-chat-bg bg-cover">
          <div className="flex-grow p-4">
            <MessagesView messages={messages} />
          </div>
          <div className="items-end p-4">
            <MessageInput />
          </div>
        </section>
      </section>
    </main>
  );
}
