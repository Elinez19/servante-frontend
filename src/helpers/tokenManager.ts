import { encrypt, decrypt } from "./helpers.encryptDecrypt";
import { Tokens } from "@/types/auth";

/**
 * Token storage keys
 */
export const TOKEN_KEYS = {
  ACCESS_TOKEN: "ServanteAccessToken",
  REFRESH_TOKEN: "ServanteRefreshToken",
} as const;

/**
 * Safely stores tokens in localStorage with encryption
 */
export const storeTokens = (tokens: Tokens): void => {
  if (typeof window === "undefined") return;

  try {
    const encryptedAccessToken = encrypt(tokens.accessToken);
    const encryptedRefreshToken = encrypt(tokens.refreshToken);

    if (encryptedAccessToken && encryptedRefreshToken) {
      localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, encryptedAccessToken);
      localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN, encryptedRefreshToken);
    }
  } catch (error) {
    console.error("Failed to store tokens:", error);
  }
};

/**
 * Safely retrieves and decrypts tokens from localStorage
 */
export const getTokens = (): Tokens | null => {
  if (typeof window === "undefined") return null;

  try {
    const encryptedAccessToken = localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
    const encryptedRefreshToken = localStorage.getItem(
      TOKEN_KEYS.REFRESH_TOKEN
    );

    if (!encryptedAccessToken || !encryptedRefreshToken) {
      return null;
    }

    const accessToken = decrypt(encryptedAccessToken);
    const refreshToken = decrypt(encryptedRefreshToken);

    if (!accessToken || !refreshToken) {
      // Clean up corrupted tokens
      clearTokens();
      return null;
    }

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Failed to retrieve tokens:", error);
    clearTokens();
    return null;
  }
};

/**
 * Safely retrieves only the access token
 */
export const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;

  try {
    const encryptedToken = localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
    if (!encryptedToken) return null;

    const token = decrypt(encryptedToken);
    if (!token) {
      localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
      return null;
    }

    return token;
  } catch (error) {
    console.error("Failed to retrieve access token:", error);
    localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
    return null;
  }
};

/**
 * Safely retrieves only the refresh token
 */
export const getRefreshToken = (): string | null => {
  if (typeof window === "undefined") return null;

  try {
    const encryptedToken = localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN);
    if (!encryptedToken) return null;

    const token = decrypt(encryptedToken);
    if (!token) {
      localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
      return null;
    }

    return token;
  } catch (error) {
    console.error("Failed to retrieve refresh token:", error);
    localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
    return null;
  }
};

/**
 * Updates only the access token (used after refresh)
 */
export const updateAccessToken = (accessToken: string): void => {
  if (typeof window === "undefined") return;

  try {
    const encryptedToken = encrypt(accessToken);
    if (encryptedToken) {
      localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, encryptedToken);
    }
  } catch (error) {
    console.error("Failed to update access token:", error);
  }
};

/**
 * Clears all tokens from localStorage
 */
export const clearTokens = (): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
  } catch (error) {
    console.error("Failed to clear tokens:", error);
  }
};

/**
 * Checks if user has valid tokens
 */
export const hasValidTokens = (): boolean => {
  const tokens = getTokens();
  return tokens !== null && !!tokens.accessToken && !!tokens.refreshToken;
};

/**
 * Checks if tokens exist (regardless of validity)
 */
export const hasTokens = (): boolean => {
  if (typeof window === "undefined") return false;

  return (
    localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN) !== null &&
    localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN) !== null
  );
};
