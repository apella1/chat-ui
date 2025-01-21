import IncomingMessage from "./messaging/IncomingMessage";
import OutgoingMessage from "./messaging/OutgoingMessage";

export default function MessagesView() {
  return (
    <section className="flex flex-col space-y-2">
      <IncomingMessage
        message={{
          value: "Good morning, how are you?",
          type: "string",
          timeSent: "10:01",
        }}
      />
      <OutgoingMessage
        message={{
          value:
            "Good morning, I am doing so well. Did you catch last night's game? I heard a lot of things happened.",
          type: "string",
          timeSent: "10:01",
        }}
      />
      <IncomingMessage
        message={{
          value:
            "No, I did not. Tell me about it. Where were you when you watched the match. I guess for yesterday's game you must have been out of the house",
          type: "string",
          timeSent: "10:01",
        }}
      />
      <OutgoingMessage
        message={{
          value: "Yes. I had to be at the house.",
          type: "string",
          timeSent: "10:01",
        }}
      />
    </section>
  );
}
