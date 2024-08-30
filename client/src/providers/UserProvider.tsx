"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { loginWithWallet } from "@/services/auth";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

interface InitialState {
  wallet: string | null;
  jwt: string | null;
  isLoggedIn: boolean;
}

interface UserSessionProviderState extends InitialState {
  setWallet: (wallet: string) => void;
  setAccessToken: (jwt: string) => void;
  resetUser: () => void;
  getAccessToken: () => string;
}

export type Actions =
  | { type: "SET_WALLET"; payload: string }
  | { type: "SET_JWT"; payload: string }
  | { type: "RESET_USER" };

export const initialState: UserSessionProviderState = {
  wallet: null,
  jwt: null,
  isLoggedIn: false,
  setWallet: () => {},
  setAccessToken: () => {},
  resetUser: () => {},
  getAccessToken: () => "",
};

export const UserSessionContext =
  createContext<UserSessionProviderState>(initialState);

function reducer(state: UserSessionProviderState, action: Actions) {
  switch (action.type) {
    case "RESET_USER":
      return initialState;

    case "SET_WALLET":
      return {
        ...state,
        wallet: action.payload,
      };

    case "SET_JWT":
      return {
        ...state,
        jwt: action.payload,
      };

    default:
      throw new Error("No action specified");
  }
}

export const UserSessionProvider: FC<{
  children: ReactNode;
  storage?: (
    key: string,
    initialValue: string
  ) => [string, (value: Function | string) => void];
}> = ({ children, storage = useLocalStorage }) => {
  const [userSession, setUserSession] = storage(
    "@user",
    JSON.stringify(initialState)
  );

  const [state, dispatch] = useReducer(reducer, JSON.parse(userSession));

  useEffect(() => {
    setUserSession(JSON.stringify(state));
  }, [state, setUserSession]);

  const setWallet = (wallet: string) => {
    dispatch({ type: "SET_WALLET", payload: wallet });
  };

  const setAccessToken = (jwt: string) => {
    dispatch({ type: "SET_JWT", payload: jwt });
  };

  function resetUser() {
    dispatch({ type: "RESET_USER" });
  }

  const isLoggedIn = useMemo(() => {
    return !!(state.wallet && state.jwt);
  }, [state]);

  const getAccessToken = useCallback(() => {
    return isLoggedIn ? state.jwt || "" : "";
  }, [isLoggedIn, state.jwt]);

  return (
    <UserSessionContext.Provider
      value={{
        ...state,
        setWallet,
        resetUser,
        setAccessToken,
        isLoggedIn,
        getAccessToken,
      }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};
