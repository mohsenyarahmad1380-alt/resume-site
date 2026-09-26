import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* اسم / لوگو */}
        <div className="font-bold text-lg text-text-primary font-vazir">
          {t("nav.logo", "رزومه")}
        </div>

        {/* لینک‌ها */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#projects"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </a>
        </div>
        {/* دکمه سوییچ زبان */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1.5 rounded-lg border border-border text-sm text-text-primary hover:bg-primary-light transition-colors"
        >
          {i18n.language === "fa" ? "EN" : "فا"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
