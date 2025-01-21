import { ChatMessage } from "@/types/messaging/message";
import IncomingMessage from "./messaging/IncomingMessage";
import OutgoingMessage from "./messaging/OutgoingMessage";

function groupMessagesByDate(
  messages: ChatMessage[],
): Record<string, Array<ChatMessage>> {
  return messages.reduce(
    (grouped, message) => {
      const dateKey = message.dateSent.toISOString().split("T")[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(message);
      return grouped;
    },
    {} as Record<string, Array<ChatMessage>>,
  );
}

export default function MessagesView({
  messages,
}: {
  messages: ChatMessage[];
}) {
  const groupedMessages = Object.entries(groupMessagesByDate(messages));

  return (
    <section>
      {groupedMessages.map((msgGroup) => (
        <div key={msgGroup[0]} className="flex flex-col space-y-2">
          <time className="my-2 self-center rounded-xl bg-white p-2 text-xs">
            {msgGroup[0]}
          </time>
          {msgGroup[1].map((msg) =>
            msg.type === "Incoming" ? (
              <IncomingMessage message={msg} key={msg.timeSent} />
            ) : (
              <OutgoingMessage message={msg} key={msg.timeSent} />
            ),
          )}
        </div>
      ))}
    </section>
  );
}
