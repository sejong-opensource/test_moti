import React from "react";
import { setUserInfo } from "./user";
type Props = {
  userInfo: {
    email: string;
    password: string;
    host: string;
  };
};
export const SettingEmail = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [host, setHost] = React.useState("");

  return (
    <div>
      <input className="btn_email">asdfasdf</input>
      <input className="btn_email"></input>
      <input className="btn_email"></input>
      <input className="btn_email"></input>
      <input className="btn_email"></input>
    </div>
  );
};
