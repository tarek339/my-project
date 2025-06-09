import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("home");
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>
    </div>
  );
};

export default Hero;
