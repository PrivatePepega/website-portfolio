"use client";

// Environment
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type NavTab = "developer" | "contact";

type MyContextValue = {
  navbarActive: NavTab;
  moveToDeveloper: () => void;
  moveToContact: () => void;
};

const STORAGE_KEY = "navbarActive";
const STORAGE_EVENT = "navbar-active-change";
const DEFAULT_TAB: NavTab = "developer";

// Fallback for browsers where localStorage is blocked (private browsing).
let memoryTab: NavTab = DEFAULT_TAB;

const isNavTab = (value: string | null): value is NavTab =>
  value === "developer" || value === "contact";

const getSnapshot = (): NavTab => {
  try {
    const savedTab = window.localStorage.getItem(STORAGE_KEY);
    return isNavTab(savedTab) ? savedTab : memoryTab;
  } catch {
    return memoryTab;
  }
};

const getServerSnapshot = (): NavTab => DEFAULT_TAB;

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(STORAGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(STORAGE_EVENT, onStoreChange);
  };
};

export const MyContext = createContext<MyContextValue | null>(null);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  // Keeps the active tab in sync with the browser so a reload lands on the same tab.
  const navbarActive = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const moveToTab = useCallback((tab: NavTab) => {
    memoryTab = tab;

    try {
      window.localStorage.setItem(STORAGE_KEY, tab);
    } catch {
      // Persisting is optional, the tab still switches for this session.
    }

    window.dispatchEvent(new Event(STORAGE_EVENT));
  }, []);

  const value = useMemo<MyContextValue>(
    () => ({
      navbarActive,
      moveToDeveloper: () => moveToTab("developer"),
      moveToContact: () => moveToTab("contact"),
    }),
    [navbarActive, moveToTab],
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
