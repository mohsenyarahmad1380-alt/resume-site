import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

    const stats = [
    { number: "۲۰+", key: "hero.stats.projects" },
    { number: "۳+", key: "hero.stats.experience" },
    { number: "۱۵+", key: "hero.stats.clients" },
  ];
  
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-linear-to-br from-gray-900 via-blue-950 to-gray-900
        overflow-hidden px-4 sm:px-6 py-20 md:py-0
      "
    >
      {/* المان‌های تزئینی */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ستون متن */}
          <div
            className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"} order-2 lg:order-1`}
          >
            <p className="text-orange-400 text-sm sm:text-base font-semibold mb-2">
              {t("hero.greeting")}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              {t("hero.name")}
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-blue-400 font-bold mb-6">
              {t("hero.title")}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="
                  bg-orange-500 hover:bg-orange-600 text-white font-bold
                  px-8 py-3.5 rounded-xl transition-all duration-300
                  hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5
                "
              >
                {t("hero.ctaProjects")}
              </a>
              <a
                href="#contact"
                className="
                  border-2 border-blue-400 text-blue-400
                  hover:bg-blue-400 hover:text-white font-bold
                  px-8 py-3.5 rounded-xl transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                {t("hero.ctaContact")}
              </a>
            </div>

            {/* آمار */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {t(stat.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ستون تصویر */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className="
              w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80
              rounded-full bg-linear-to-br from-blue-500 to-orange-500
              p-1 shadow-2xl shadow-blue-500/20
            "
            >
              <div
                className="
                w-full h-full rounded-full bg-gray-900
                flex items-center justify-center
              "
              >
                <span className="text-6xl sm:text-7xl md:text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* فلش پایین */}
      <a
        href="#about"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          text-white/40 hover:text-white transition-colors
          animate-bounce md:hidden
        "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}

export default HeroSection;
