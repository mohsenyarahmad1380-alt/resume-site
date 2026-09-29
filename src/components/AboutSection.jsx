import { useTranslation } from "react-i18next";

// ─── آیکون‌های SVG ساده و سبک (بدون نیاز به پکیج اضافی) ───
const icons = {
  user: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  calendar: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  map: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  mail: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  graduation: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  download: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

// ─── کلیدهای اطلاعات شخصی (ترتیب نمایش) ───
const infoKeys = ["name", "age", "location", "email", "education", "status"];

// ─── آیکون متناظر هر کلید ───
const infoIcons = {
  name: icons.user,
  age: icons.calendar,
  location: icons.map,
  email: icons.mail,
  education: icons.graduation,
  status: icons.check,
};

function AboutSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  // ─── خواندن لیست ابزارها از JSON ───
  const tools = t("about.tools.items", { returnObjects: true });

  return (
    <section id="about" className="bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── عنوان بخش ── */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-3">
            {t("about.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            {t("about.sectionSubtitle")}
          </p>
          {/* خط تزئینی زیر عنوان */}
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* ── محتوای اصلی: دو ستون در دسکتاپ ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── ستون راست: عکس + ابزارها ── */}
          <div className="order-1 flex flex-col items-center">

            {/* عکس پروفایل */}
            <div className="
              w-48 h-48 sm:w-64 sm:h-64
              rounded-2xl overflow-hidden
              shadow-xl shadow-blue-500/10
              border-4 border-blue-100
              mb-8
            ">
              {/* اگه عکس واقعی داری، <img> رو جایگزین کن */}
              <div className="
                w-full h-full bg-gradient-to-br from-blue-100 to-orange-100
                flex items-center justify-center
              ">
                <span className="text-7xl sm:text-8xl">👨‍💻</span>
              </div>
            </div>

            {/* ابزارهای اصلی */}
            <div className="w-full max-w-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                {t("about.tools.title")}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      bg-blue-50 text-blue-700
                      text-xs sm:text-sm font-semibold
                      px-3 py-1.5 sm:px-4 sm:py-2
                      rounded-lg border border-blue-100
                      hover:bg-blue-100 transition-colors duration-200
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── ستون چپ: متن + اطلاعات ── */}
          <div className={`order-2 ${isRTL ? "lg:text-right" : "lg:text-left"}`}>

            {/* متن معرفی */}
            <p className="text-gray-600 text-sm sm:text-base leading-loose mb-8">
              {t("about.bio")}
            </p>

            {/* جدول اطلاعات شخصی */}
            <div className="
              bg-gray-50 rounded-2xl p-5 sm:p-6
              border border-gray-100 mb-8
            ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoKeys.map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    {/* آیکون */}
                    <span className="
                      w-8 h-8 rounded-lg
                      bg-blue-100 text-blue-600
                      flex items-center justify-center
                      shrink-0
                    ">
                      {infoIcons[key]}
                    </span>
                    {/* متن */}
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 font-medium">
                        {t(`about.info.${key}`)}
                      </p>
                      <p className="text-sm text-gray-800 font-semibold truncate">
                        {t(`about.info.${key}Value`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;