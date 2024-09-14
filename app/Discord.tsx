"use client";

import { useLanyard } from "react-use-lanyard";

const USER_ID = "862571259963768842";

const getStatusText = (status: string) => {
  switch (status) {
    case "online":
      return "I'm currently online";
    case "idle":
      return "I'm currently idle";
    case "dnd":
      return "I'm currently online";
    default:
      return "I'm currently offline";
  }
};

export default function Discord() {
  const { status: lanyard } = useLanyard({
    userId: USER_ID,
    socket: true,
  });

  return (
    <>
        {getStatusText(lanyard?.discord_status || "offline")}
    </>
  );
}