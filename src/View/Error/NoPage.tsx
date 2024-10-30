import { useTranslation } from "react-i18next";

function NoPage() {
    const {t} = useTranslation();
  return (
    <div>{t('NoPage')}</div>
  )
}


export default NoPage
