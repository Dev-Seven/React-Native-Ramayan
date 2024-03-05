import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import sn from "./sn.json";
import kn from "./kn.json";
import bn from "./bn.json";
import tm from "./tm.json";
import tl from "./tl.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: en,
    sn: sn,
    kn: kn,
    bn: bn,
    tm: tm,
    tl: tl,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
