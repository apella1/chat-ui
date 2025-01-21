import IncomingMessage from "./messaging/IncomingMessage";
import OutgoingMessage from "./messaging/OutgoingMessage";

export default function MessagesView() {
  return (
    <section className="flex flex-col space-y-2">
      <IncomingMessage />
      <OutgoingMessage />
    </section>
  );
}
