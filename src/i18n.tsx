/* eslint-disable no-template-curly-in-string */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    name: "First Name",
    age: "Age",
    email: "Email",
    phone: "Phone",
    website: "Website",
  },
  es: {
    name: "Nombre",
    age: "Edad",
    email: "Correo",
    phone: "Teléfono",
    website: "Dirección web",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
