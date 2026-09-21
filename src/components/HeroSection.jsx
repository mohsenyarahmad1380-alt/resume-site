import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();
  return <h1 className="font-vazir text-3xl">{t('hero.title')}</h1>;
}

export default HeroSection;