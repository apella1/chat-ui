import Link from "next/link";
import { ReactNode } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <aside className="flex w-full basis-1/12">
        <div className="flex w-full flex-col bg-gray-800 px-4 py-8">
          <div className="self-center">
            <RiChatSmile2Line className="text-4xl text-purple-600" />
          </div>
          <div className="flex flex-col space-y-8 self-center pt-32">
            <Link href={"/chat"} aria-label="Messages">
              <TiMessages className="text-2xl text-purple-600" />
            </Link>
            <Link href={"/chat/settings"} aria-label="Settings">
              <MdOutlineSettings className="text-2xl text-purple-600" />
            </Link>
          </div>
        </div>
      </aside>
      <section className="basis-11/4 flex h-screen w-full flex-col overflow-y-auto">
        {children}
      </section>
    </main>
  );
}
