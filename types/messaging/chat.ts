import { ChatMessage } from "./message";
import { User } from "./user";

export interface Chat {
  recipient: User;
  lastMessage: ChatMessage;
}
