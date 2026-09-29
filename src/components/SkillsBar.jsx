import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// رنگ‌ها جدا از ترجمه (چون وابسته به زبان نیستن)
const colors = [
  "from-orange-400 to-red-500",
  "from-yellow-400 to-orange-500",
  "from-cyan-400 to-blue-500",
  "from-teal-400 to-emerald-500",
  "from-purple-400 to-indigo-500",
  "from-pink-400 to-rose-500",
];

function SkillsBar() {
  const { t, i18n } = useTranslation();
  const [animate, setAnimate] = useState(false);

  // گرفتن آرایه مهارت‌ها از فایل ترجمه
  const skills = t("skills", { returnObjects: true });
  const isRTL = i18n.language === "fa";

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full max-w-2xl mx-auto p-6"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* عنوان */}
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
        {t("skills.title")}
        <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
      </h2>

      {/* لیست مهارت‌ها */}
      <div className="space-y-5">
        {skills.items.map((skill, i) => (
          <div key={i}>
            {/* نام و درصد */}
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>

            {/* نوار پیشرفت */}
            <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${colors[i % colors.length]} transition-all duration-1000 ease-out`}
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                  transitionDelay: `${i * 150}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsBar;