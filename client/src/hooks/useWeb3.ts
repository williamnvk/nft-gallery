"use client";

export default function useWeb3() {
  const connectWallet = async (callback: (acc: string) => Promise<void>) => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar conexão com a carteira
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        callback(account);
      } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
      }
    } else {
      console.error("MetaMask não está instalada");
    }
  };

  return { connectWallet };
}
