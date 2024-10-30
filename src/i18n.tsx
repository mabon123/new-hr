import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation file
import translationEnglish from "./Translation/English/translation.json"
import translationKhmer from "./Translation/Khmer/translation.json"


const resources = {
    en: {
        translation: translationEnglish
    },
    kh:{
        translation: translationKhmer,
    }
}

i18next.use(initReactI18next).init({
    resources,
    lng:"en", //default language
});

export default i18next;