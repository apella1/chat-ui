import { GrAttachment, GrMicrophone, GrSend } from "react-icons/gr";

export default function MessageInput() {
  return (
    <section className="flex w-full justify-between space-x-8 rounded-md bg-white p-4">
      <div className="flex flex-grow items-center space-x-2">
        <button>
          <GrMicrophone className="text-xl text-purple-600" />
        </button>
        <input
          type="text"
          placeholder="Type Message..."
          className="flex-grow outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <GrAttachment className="text-xl text-purple-600" />
        </button>
        <button>
          <GrSend className="text-xl text-purple-600" />
        </button>
      </div>
    </section>
  );
}
