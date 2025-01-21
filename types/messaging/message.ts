export type MessageType = "Incoming" | "Outgoing";

export interface ChatMessage {
  id?: string;
  type: MessageType;
  value: string;
  timeSent: string;
  dateSent: Date;
}

export interface GroupedMessage {
  date: Date;
  messages: ChatMessage[];
}
