import { ChatMessage } from "./message";
import { User } from "./user";

export type ChatStatus = "ACTIVE" | "ARCHIVED";

export interface Chat {
  recipient: User;
  lastMessage: ChatMessage;
  unreadCount?: number;
  isTyping?: boolean;
  createdAt?: Date;
  status?: ChatStatus;
}
