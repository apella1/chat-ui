import { ChatMessage } from "@/types/messaging/message";

export default function IncomingMessage({ message }: { message: ChatMessage }) {
  return (
    <div
      className="flex w-fit max-w-[50%] flex-col rounded-r-xl rounded-bl-xl bg-white p-2"
      role="listitem"
      aria-label="Incoming message"
    >
      <p className="text-xs">{message.value}</p>
      <p className="self-end text-[8px]">{message.timeSent}</p>
    </div>
  );
}
