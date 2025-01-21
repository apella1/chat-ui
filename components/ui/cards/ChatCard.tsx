import { Chat } from "@/types/messaging/chat";

const defaultChat: Chat = {
  recipient: {
    name: "Jacob Jones",
    isOnline: true,
  },
  lastMessage: {
    value: "Wow, your latest design is great!",
    timeSent: "10:15",
    type: "Incoming",
    dateSent: new Date(),
  },
};

export default function ChatCard({ chat = defaultChat }: { chat?: Chat }) {
  return (
    <article className="flex w-full space-x-2">
      <div className="h-9 w-9 rounded-full bg-gray-300"></div>
      <section className="flex flex-grow flex-col space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-black">
            {chat.recipient.name}
          </h3>
          <p className="text-xs text-gray-500">{chat.lastMessage.timeSent}</p>
        </div>
        <p className="text-xs text-gray-500">
          {chat.lastMessage.value.length <= 30
            ? chat.lastMessage.value
            : chat.lastMessage.value.slice(0, 30) + "..."}
        </p>
      </section>
    </article>
  );
}
