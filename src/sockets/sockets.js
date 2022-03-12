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
    socket.on("profile", ({ userId, token }) => {
      try {
        if (userProfile) clearInterval(userProfile);

        userProfile = setInterval(async () => {
          const { data } = await axios.get(`${API_URL_BASIC}/user/${userId}`, {
            headers: { token },
          });
          io.emit("getUserProfile", data);
        }, 1000);
      } catch (error) {
        return;
      }
    });

    // userMarketList
    socket.on("userMarketList", ({ userId, token }) => {
      try {
        if (eachMarket) clearInterval(eachMarket);

        eachMarket = setInterval(async () => {
          const { data } = await axios.get(
            `${API_URL_BASIC}/market/${userId}`,
            {
              headers: { token },
            }
          );
          io.emit("eachMarket", data);
        }, 1000);
      } catch (error) {
        return;
      }
    });
  });

  app.set("io", io);
};
