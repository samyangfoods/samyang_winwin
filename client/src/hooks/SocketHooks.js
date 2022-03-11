import { useCallback } from "react";
import { io } from "socket.io-client";
import { socketUrl } from "./UrlSetting";

let socket;

const useSocket = () => {
  const disconnect = useCallback(() => {
    if (socket) {
      console.log("Websocket is now disconnected.");
      socket.disconnect();
      socket = undefined;
    }
  }, []);

  if (!socket) {
    socket = io(`${socketUrl}`);
    console.log("Websocket is now connected.", socket.id);
  }

  return [socket, disconnect];
};

export default useSocket;