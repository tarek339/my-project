"use client";

import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const ChangeLanguage = () => {
  const locale = useLocale();
  const [lang, setLang] = useState(locale);

  function onChange() {
    if (locale === "en") {
      setUserLocale("de");
    }
    if (locale === "de") {
      setUserLocale("en");
    }
  }

  useEffect(() => {
    if (locale === "en") {
      setLang("DE");
    }
    if (locale === "de") {
      setLang("EN");
    }
  }, [locale]);

  return (
    <div>
      <button onClick={onChange} className="bg-amber-500 p-2 rounded-md">
        {lang}
      </button>
    </div>
  );
};

export default ChangeLanguage;
