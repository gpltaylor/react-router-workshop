export const NAVIGATE_TO = "NAVIGATE_TO";
export const NAVIGATE_RESET = "NAVIGATE_RESET";

export const navigateTo = (navigateTo) => {
  return { type: NAVIGATE_TO, navigateTo };
}

export const reset = (navigateTo) => {
  return { type: NAVIGATE_RESET };
}