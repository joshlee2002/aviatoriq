export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Self-hosted: login URL points to our own local login page.
export const getLoginUrl = () => {
  return `${window.location.origin}/api/auth/login`;
};
