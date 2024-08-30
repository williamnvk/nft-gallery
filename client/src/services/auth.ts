import { getApiUrl } from "@/utils/api";

export const loginWithWallet = async (wallet: string) => {
  try {
    const response = await fetch(getApiUrl() + `/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wallet }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
