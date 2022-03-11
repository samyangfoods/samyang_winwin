import axios from "axios";
import { Server } from "socket.io";

const { API_URL_BASIC } = process.env;

export const setSocketIo = (httpServer, app) => {
  const io = new Server(httpServer, {
    path: "/socket.io",
  });

  io.on("connection", (socket) => {
    console.log("Socket is wokring..".rainbow, socket.id);
    let eachMarket;
    let userProfile;

    // profile
    socket.on("profile", (userInfo) => {
      if (userProfile) clearInterval(userProfile);

      userProfile = setInterval(async () => {
        const { data } = await axios.get(
          `${API_URL_BASIC}/user/${userInfo.userId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        io.emit("getUserProfile", data);
      }, 1000);
    });

    // userMarketList
    socket.on("userMarketList", () => {
      if (eachMarket) clearInterval(eachMarket);

      eachMarket = setInterval(async () => {
        const { data } = await axios.get(`${API_URL_BASIC}/market`);
        io.emit("eachMarket", data);
      }, 1000);
    });
  });

  app.set("io", io);
};
