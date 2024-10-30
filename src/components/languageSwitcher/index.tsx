// import { useTranslation } from 'react-i18next';
import { useTranslation } from "react-i18next";
import khFlag from "../../assets/kh.svg";
// import enFlag from "../../assets/en.svg";
import usFlag from "../../assets/us.svg";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = () => {
    const newLanguage = i18n.language === "en" ? "kh" : "en";
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div>
      <button onClick={switchLanguage} className="cursor-pointer">
        {i18n.language === "en" ? (
          <img
            src={usFlag}
            alt="Cambodia"
            style={{ width: "30px", height: "20px" }}
            className="h-4 w-4 text-gray-600 dark:text-white"
          />
        ) : (
          <img
            src={khFlag}
            alt="US"
            style={{ width: "30px", height: "20px" }}
            className="h-4 w-4 text-gray-600 dark:text-white"
          />
        )}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
