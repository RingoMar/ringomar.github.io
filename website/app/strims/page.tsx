import React from "react";
import Image from "next/image";

export default function ReplySystemPR() {
  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-12">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Strims GG Reply System</h1>
          <p className="text-gray-600 dark:text-gray-200">Right-click, slash command, and banner support.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800">
            <div className="flex aspect-video w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-400">
                <Image src="/reply.png" width={800} height={400} alt="Image Preview" />
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Added Features</h2>

          <div className="divide-y divide-gray-300 rounded-xl border border-gray-300 bg-white shadow dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
            <div className="space-y-4 p-6">
              <h3 className="text-lg font-semibold">Reply Functionality in Chat</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-200">
                <li>Core reply system with metadata that tags each message with an ID (user, message, IDs).</li>
                <li>Displays a reply container above the chat input when active.</li>
              </ul>
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-lg font-semibold">Reply Options</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-200">
                <li>Right click a user's name to start a reply and target a message.</li>
                <li>Right click a reply banner target to scroll the original message into view.</li>
                <li>
                  Added <code className="rounded bg-gray-100 px-1 py-0.5 text-blue-800 dark:bg-gray-800 dark:text-blue-200">/reply &lt;username&gt; &lt;message&gt;</code> to quickly reply to the latest message from that user.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Right Click Menu</h2>
          <div className="space-y-3 rounded-xl border border-gray-300 bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-200">Right Click a user's name to reply to them.</p>
            <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
              <div className="flex aspect-video w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                <span className="text-gray-500 dark:text-gray-400">
                  <Image src="/reply-right-click.gif" width={800} height={400} alt="Right Click menu" unoptimized/>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Reply Command</h2>
          <div className="space-y-3 rounded-xl border border-gray-300 bg-white p-6 shadow dark:border-gray-600 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-200">
              Use the command <code className="rounded bg-gray-100 px-1 py-0.5 text-blue-800 dark:bg-gray-800 dark:text-blue-200">/reply &lt;username&gt; &lt;message&gt;</code> to reply quickly to a recent message
            </p>
            <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
              <div className="flex aspect-video w-full items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                <span className="text-gray-500 dark:text-gray-400">
                  <Image src="/reply-slash-command.gif" width={800} height={400} alt="Slash command" unoptimized />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
