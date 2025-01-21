export type MessageType = "Incoming" | "Outgoing";

export interface ChatMessage {
  type: MessageType;
  value: string;
  timeSent: string;
  dateSent: Date;
}

export interface GroupedMessage {
  date: Date;
  messages: ChatMessage[];
}
