import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect, useState } from "react";

import { HomeLoggedIn } from "./homeLoggedIn.js";
import { HomeLoggedOff } from "./homeLoggedOff.js";

export const Home = () => {

  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    actions.handleFetchUserInfo();
    actions.handleFetchPopularGames();
  }, []);

  useEffect(() => {
    setUserInfo(sessionStorage.getItem("userInfo"));
  }, [store.user]);

  return (
    <div className="text-center">
      {userInfo ? <HomeLoggedIn logout={() => actions.handleLogOut()} /> : <HomeLoggedOff logout={() => actions.handleLogOut()} />}
    </div>
  );
}            
