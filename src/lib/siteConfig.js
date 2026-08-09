const readPublicEnv = (value, fallback = "") => {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
};

const normalizeSiteUrl = (value) => value.replace(/\/+$/, "");
const normalizePhone = (value) => value.replace(/\D/g, "");

const webName = readPublicEnv(process.env.NEXT_PUBLIC_WEB_NAME, "Cinemate");
const webName2 = readPublicEnv(process.env.NEXT_PUBLIC_WEB_NAME2, "Production");
const phone = readPublicEnv(process.env.NEXT_PUBLIC_PHONE, "7982596271");

export const siteConfig = Object.freeze({
  siteUrl: normalizeSiteUrl(
    readPublicEnv(
      process.env.NEXT_PUBLIC_SITE_URL,
      "https://cinemateproduction.com"
    )
  ),
  siteName: `${webName} ${webName2}`.trim(),
  webName,
  webName2,
  description:
    "Cinemate Production provides professional photography, wedding films, fashion shoots, commercial visuals, and event coverage across Delhi NCR and India.",
  phone,
  whatsapp: normalizePhone(
    readPublicEnv(process.env.NEXT_PUBLIC_WHATSAPP, phone)
  ),
  email: readPublicEnv(
    process.env.NEXT_PUBLIC_EMAIL,
    "cinemateproduction@gmail.com"
  ),
  address: readPublicEnv(
    process.env.NEXT_PUBLIC_ADDRESS,
    "We provide professional photography shoots and services across Delhi and all over India."
  ),
  instagram: readPublicEnv(
    process.env.NEXT_PUBLIC_INSTAGRAM,
    "https://www.instagram.com/cinemateproductions/"
  ),
  facebook: readPublicEnv(
    process.env.NEXT_PUBLIC_FACEBOOK || process.env.NEXT_PUBLIC_Facebook,
    "https://www.facebook.com/people/Cinemate-production/61583747432734/"
  ),
  lastModified: readPublicEnv(
    process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED,
    "2026-08-09"
  ),
  emailJs: {
    serviceId: readPublicEnv(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      "service_uo67e3c"
    ),
    templateId: readPublicEnv(
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      "template_0amw4bq"
    ),
    publicKey: readPublicEnv(
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      "KOkedtviI3t_etN54"
    ),
  },
});
