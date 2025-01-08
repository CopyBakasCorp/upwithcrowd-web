"use client";

import type { Session } from "next-auth";
import { createContext, useContext, useMemo } from "react";

interface ProvidersProps {
  children: React.ReactNode;
  session: Session | null;
  sessionKey?: number;
}
interface SessionContextProps {
  session: Session | null;
}
export const SessionContext = createContext<SessionContextProps>({
  session: null,
});

export const useSession = () => {
  return useContext(SessionContext);
};

export function SessionProvider({
  children,
  session,
  sessionKey,
}: ProvidersProps) {
  const memoizedSessionKey = useMemo(() => {
    return sessionKey;
  }, [sessionKey]);
  return (
    <SessionContext.Provider key={memoizedSessionKey} value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
}
