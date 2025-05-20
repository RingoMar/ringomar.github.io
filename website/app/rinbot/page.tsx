import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rinbot | Ringo Mar",
};

const rinbot = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="flex flex-col">
          <Image src="/rinbot.jpg" width={500} height={600} className="mb-4 w-full rounded-lg lg:mb-0" alt="Landing Image" />
          <p className="mt-1 text-sm dark:text-gray-400">
            Art Credit:{" "}
            <a href="http://twitch.tv/zaquelle" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              Zaquelle
            </a>
            !
          </p>
        </div>
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Rin Bot</h2>
          <p className="mb-8 lg:text-xl">A true passion project, this chatbot has evolved through countless forms—from an early AI predating Open AI, to a web scraper, to a versatile arcade bot to utility bot still active today.</p>
          <div className="mb-6 border-t border-b border-gray-200 py-8 dark:border-gray-700">
            <div className="flex">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-6 w-6 fill-teal-600 dark:fill-teal-300" viewBox="0 0 48 48">
                  <polygon points="16,32 21.095,31.994 32,16 26.958,16"></polygon>
                  <path d="M11.841,22.68c0.627-0.366,1.153-0.94,1.159-1.665C13,21.01,13,13,13,13c0-0.552,0.448-1,1-1h2V8h-2 c-2.761,0-5,2.239-5,5v5.838C9,20.726,7.792,22.403,6,23l0,0v2l0,0c1.792,0.597,3,2.274,3,4.162V35c0,2.761,2.239,5,5,5h2v-4h-2 c-0.552,0-1-0.448-1-1c0,0,0-8.011,0-8.016c-0.006-0.725-0.532-1.298-1.158-1.663C11.353,25.035,10,24,10,24 S11.352,22.966,11.841,22.68z"></path>
                  <path d="M36.159,22.68c-0.627-0.366-1.153-0.94-1.159-1.665C35,21.01,35,13,35,13c0-0.552-0.448-1-1-1h-2V8 h2c2.761,0,5,2.239,5,5v5.838c0,1.888,1.208,3.565,3,4.162l0,0v2l0,0c-1.792,0.597-3,2.274-3,4.162V35c0,2.761-2.239,5-5,5h-2v-4h2 c0.552,0,1-0.448,1-1c0,0,0-8.011,0-8.016c0.006-0.725,0.532-1.298,1.158-1.663C36.647,25.035,38,24,38,24 S36.648,22.966,36.159,22.68z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Discord Bot</h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">A multi-functional, Python-based Discord bot that was previously connected to a Python-based Twitch bot, now serving as a utility and games bot.</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Starting off as a <a href="https://github.com/Cog-Creators/Red-DiscordBot/tree/master" className="text-blue-500 dark:text-blue-300">Red (v2) Discord Bot</a>, which I tore apart to learn about functions, connections, architectures, and the design of large programs. Now running on my Raspberry Pi 'server', this bot evolved over time even after the Discord.py creator shut down their project only to make a shocking comeback with slash commands & more.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-6 w-6 fill-purple-600 dark:fill-purple-300" viewBox="0 0 48 48">
                  <path fill="#FFF" d="M12 32L12 8 39 8 39 26 33 32 24 32 18 38 18 32z"></path>
                  <path d="M9,5l-3,7.123V38h9v5h5l5-5h7l10-10V5H9z M38,26l-5,5h-9l-5,5v-5h-6V9h25V26z"></path>
                  <path d="M32 25h-5V15h5V25zM24 25h-5V15h5V25z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Twitch Bot</h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">My first programming project ever in 2017, a Twitch bot, began as a simple tool to spam emotes in a given channel whenever there was a new subscriber inspired by the chat culture and other users' bots I observed, and it has since evolved into a true testament to my growth as a programmer, adapting and transforming with each new language I learned. </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Growing from its initial Python version to other major versions; a Go (Golang) rewrite, then to a TypeScript implementation with a Golang database, and now, in 2025, it thrives as a modern, utility chat bot built on TypeScript and SQL, capable of handling a wide range of tasks far beyond its original emote-spamming roots, reflecting my journey and the adaptability of code in the ever-changing world
                  of programming.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Using the bots mean that you agree to our{" "}
            <Link href="/terms-of-service" className="text-blue-500 dark:text-blue-300">
              Terms of Service
            </Link>
            . If you've enjoyed my work thank you.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default rinbot;
