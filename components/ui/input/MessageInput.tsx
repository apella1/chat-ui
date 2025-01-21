"use client";

import { FormEvent, useState } from "react";
import { GrAttachment, GrMicrophone, GrSend } from "react-icons/gr";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage(message);
    }
  };

  return (
    <form
      className="flex w-full justify-between space-x-8 rounded-md bg-white p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-grow items-center space-x-2">
        <button aria-label="Record voice message" type="button">
          <GrMicrophone className="text-xl text-purple-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type Message..."
          className="flex-grow outline-none"
          aria-label="Message input"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Attach file" type="button">
          <GrAttachment className="text-xl text-purple-600" />
        </button>
        <button className="" aria-label="Send message" type="submit">
          <GrSend className="text-xl text-purple-600" />
        </button>
      </div>
    </form>
  );
}
