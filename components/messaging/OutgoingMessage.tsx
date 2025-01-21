import { ChatMessage } from "@/types/messaging/message";

export default function OutgoingMessage({ message }: { message: ChatMessage }) {
  return (
    <div
      className="flex max-w-[50%] flex-col self-end rounded-l-xl rounded-br-xl bg-amber-200 p-2"
      role="listitem"
      aria-label="Outgoing message"
    >
      <p className="text-xs">{message.value}</p>
      <p className="self-end text-[8px]">{message.timeSent}</p>
    </div>
  );
}
