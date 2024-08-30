"use client";

import { useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState<null | string>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar conexão com a carteira
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAccount(account);
      } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
      }
    } else {
      console.error("MetaMask não está instalada");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Conectar MetaMask</button>
      {account}
    </div>
  );
};

export default ConnectWallet;
