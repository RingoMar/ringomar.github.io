"use client";
import { convertColor } from "@/lib/ftcSDK/helpers";

interface chatmessage {
  username: string;
  time: Date;
  colour: string;
  message: string;
}

interface VirtualChatListProps {
  messages: chatmessage[];
}

export function VirtualChatList({ messages }: VirtualChatListProps) {
  return (
    <div className="overflow-hidden">
      <div>
        {messages.map((chat, index) => (
          <div key={index}>
            <ChatLine {...chat} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ChatLineProps extends chatmessage {}

export function ChatLine({ username, time, colour, message }: ChatLineProps) {
  return (
    <div className="flex h-5 flex-row items-center gap-x-1 p-1 text-nowrap">
      <span className="text-xs text-neutral-500 tabular-nums">{time.toLocaleTimeString()}</span>

      <span className="font-bold" style={{ color: `hls(${String(convertColor(colour))})` }}>
        {username}
        <span className="text-white">:</span>
      </span>
      <span>{message}</span>
    </div>
  );
}
