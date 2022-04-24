import axios from "axios";
import { Server } from "socket.io";

const API_URL_BASIC = "http://api.samyangfoods.site/api";

//TODO: 최적화 필요 --> 모든 정보를 한 번만 연결해서 받아올 수 있도록.
// 프로필, 소매점 목록 시 각각 연결되고 있음 --> 한 번의 연결로 해결할 수 있도록 하고, 서버 부담 최소로 줄이기
export const setSocketIo = (httpServer, app) => {
  if (!API_URL_BASIC) throw new Error("API_URL_BASIC is required!!");

  const io = new Server(httpServer, {
    path: "/socket.io",
  });

  io.on("connection", (socket) => {
    console.log(socket.id, "Socket is working..".rainbow);
    let eachMarket;
    let eachPromotion;
    let userProfile;

    // main
    socket.on("main", ({ token }) => {
      try {
        if (eachPromotion) clearInterval(eachPromotion);
        console.log("Token from sockets", token);
        eachPromotion = setInterval(async () => {
          const { data } = await axios.get(`${API_URL_BASIC}/promotion`, {
            headers: { token },
          });

          io.emit("getPromotionList", data);
        }, 1000);
      } catch (error) {
        console.log("Error on the main socket", error);
      }
    });

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
        console.log("Error on the profile socket", error);
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
        console.log("Error on the marketlist socket", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(socket.id, "Socket disconnected..".rainbow);
      if (userProfile) clearInterval(userProfile);
      if (eachMarket) clearInterval(eachMarket);
      if (eachPromotion) clearInterval(eachPromotion);
    });
  });

  app.set("io", io);
};
