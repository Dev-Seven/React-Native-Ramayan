import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  S3Client,
  S3,
  AbortMultipartUploadCommand,
  ListObjectsCommand,
  ListBucketsCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3({
  credentials: {
    accessKeyId: "AKIA36UHMNFYPMSKMLFO",
    secretAccessKey: "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",
  },
  region: "ap-south-1",
});
const params = {
  Bucket: "sgsramayana",
  Delimiter: "/",
  Prefix: "/Balakanda/audio/",
};

export const DataContext = createContext({
  statusBarColor: "",
  setStatusBarColor: () => {},
});
export const LanguageContext = createContext({
  currentLanguage: "",
  setLanguage: () => {},
});

export const PlayerContext = createContext({
  currentTrack: "",
  setCurrentTrack: () => {},
});

export function DataProvider({ children }) {
  const [statusBarColor, setStatusBarColor] = useState("#ffffff");

  const getShlockList = async () => {
    try {
      console.log("GetList Called");

      s3.listObjects(params, (err, data) => {
        if (err) {
          console.log("AWS ERROR", err);
        }
        console.log("AWS DATA", data);
      });
      // command;
      // const result = await client.send(command);
      // if (result) {
      //   console.log(result);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getShlockList();
    return () => {};
  }, []);
  return (
    <DataContext.Provider
      value={{
        statusBarColor: statusBarColor,
        setStatusBarColor: setStatusBarColor,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState("en");

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState({});

  return (
    <PlayerContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}
