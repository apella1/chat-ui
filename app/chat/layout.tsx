"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { RiChatSmile2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const chatPage = "/chat";
  const settingsPage = "/chat/settings";
  const pathname = usePathname();

  return (
    <main className="flex h-screen overflow-hidden">
      <aside className="flex w-fit flex-col bg-gray-800 px-4 py-8">
        <div className="self-center">
          <RiChatSmile2Line className="text-4xl text-purple-600" />
        </div>
        <div className="flex flex-col space-y-8 self-center pt-32">
          <Link
            href={chatPage}
            aria-label="Messages"
            className={`${pathname === chatPage ? "" : ""}`}
          >
            <TiMessages className="text-2xl text-purple-600" />
          </Link>
          <Link
            href={settingsPage}
            aria-label="Settings"
            className={`${pathname === settingsPage ? "" : ""}`}
          >
            <MdOutlineSettings className="text-2xl text-purple-600" />
          </Link>
        </div>
      </aside>
      <section className="flex h-screen w-full flex-grow flex-col overflow-y-auto">
        {children}
      </section>
    </main>
  );
}
