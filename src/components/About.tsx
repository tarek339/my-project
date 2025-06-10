import { useTranslations } from "next-intl";
import React from "react";
import SlideIn from "./shared/animations/SlideIn";

const About = () => {
  const t = useTranslations("about");

  return (
    <div className="m-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-4 ">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>
      <SlideIn direction="fromLeft">
        <div className="bg-gray-100 p-4 rounded shadow w-1/4">
          <h2 className="text-xl text-blue-500 font-semibold mb-2">
            Hello World
          </h2>
          <p className="text-blue-500">Hello World</p>
        </div>
      </SlideIn>

      <SlideIn show>
        <div className="bg-gray-100 rounded shadow w-1/4 h-7"></div>
      </SlideIn>
    </div>
  );
};

export default About;
