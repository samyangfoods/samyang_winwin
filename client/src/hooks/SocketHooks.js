import { useCallback } from "react";
import { io } from "socket.io-client";
import { socketUrl } from "./UrlSetting";

let socket;

const useSocket = () => {
  const disconnect = useCallback(() => {
    if (socket) {
      console.log("Socket Hooks: Websocket is now disconnected.");
      socket.disconnect();
      socket = undefined;
    }
  }, []);

  if (!socket) {
    socket = io(`${socketUrl}`, {
      // transports: ["websocket"],
    });
    if (socket) {
      console.log("Socket Hooks: Websocket is now connected.");
    }
  }

  return [socket, disconnect];
};

export default useSocket;
