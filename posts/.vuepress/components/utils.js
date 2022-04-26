export const platformCheck = (platformName) => {
  platformName = platformName.toLowerCase();
  const ua = navigator.userAgent.toLowerCase();
  switch (platformName) {
    case "qq":
      return ua.includes("qq/");
    case "wechat":
      return ua.includes("micromessenger");
    default:
      return false;
  }
};
