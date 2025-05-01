import "./Footer.css";
import { useTranslation } from "react-i18next"; // Добавляем

export default function Footer() {
  const { t } = useTranslation(); // Хук перевода

  return (
    <footer className="footer">
      <p className="paragraf">{t("footer")}</p>
    </footer>
  );
}
