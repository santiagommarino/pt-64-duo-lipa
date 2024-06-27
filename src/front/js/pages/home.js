import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect, useState } from "react";

import { HomeLoggedOff } from "./homeLoggedOff.js";
import { HomeLoggedIn } from "./homeLoggedIn.js";

export const Home = () => {

  const { store, actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    actions.handleFetchUserInfo();
  }, []);

  useEffect(() => {
    setUserInfo(sessionStorage.getItem("userInfo"));
  }, [store.user]);

  return (
    <div className="text-center mt-5">
      {userInfo ? <HomeLoggedIn logout={() => actions.handleLogOut()} /> : <HomeLoggedOff />}
    </div>
  );
}            
