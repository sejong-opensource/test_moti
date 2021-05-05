import React from "react";
import imaps from "imap-simple";
import { getUserInfo } from "./user";
import { SettingEmail } from "./SettingMail";

export const Mail = () => {
  const ReceiveMail = async () => {
    const searchCriteria = ["UNSEEN"];
    const fetchOptions = {
      bodies: ["HEADER", "TEXT"],
      markSeen: false,
    };
    const userInfo = getUserInfo();
    const config = {
      imap: {
        user: userInfo.email,
        password: userInfo.password,
        host: "imap.gmail.com",
        port: 993,
        tls: true,
        authTimeout: 3000,
        tlsOptions: {
          rejectUnauthorized: false,
        },
      },
    };
    const connection = await imaps.connect(config);
    await connection.openBox("INBOX");
    const results = await connection.search(searchCriteria, fetchOptions);
    // console.log(results);
    // results.map(result => {
    //   console.log(result.parts[1]);
    // });
    console.log(results[results.length - 1]);
    console.log(results[results.length - 1].parts[1]);
    connection.end();
    return results;
  };

  return (
    <div>
      <SettingEmail />
    </div>
  );
};
