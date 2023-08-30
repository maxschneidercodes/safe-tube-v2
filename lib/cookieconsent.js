import { getCookie } from "./cookies";

export default function getConsentCookie() {
  if (window) {
    const consentCookie = getCookie("cookie_consent_level");
    return JSON.parse(consentCookie);
  }
}

export function checkIfFunctionalityCookiesAreAccepted() {
  const cookie = getConsentCookie();
  return cookie.functionality;
}
