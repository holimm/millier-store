export const mockDelay = (ms = 180): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
