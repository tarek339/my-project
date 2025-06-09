import { getUserLocale } from "@/services/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const { de, en } = await import("../../messages/index");

  return {
    locale,
    messages: locale === "de" ? de : en,
  };
});
