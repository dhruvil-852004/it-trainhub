import { useActor } from "@caffeineai/core-infrastructure";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createActor } from "../backend";

const SESSION_KEY = "it_trainhub_session";

interface User {
  email: string;
  role: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function useBackendActor() {
  return useActor(createActor);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { actor, isFetching } = useBackendActor();

  // Restore session on mount
  useEffect(() => {
    if (!actor || isFetching) return;

    const storedToken = localStorage.getItem(SESSION_KEY);
    if (!storedToken) return;

    let cancelled = false;
    (async () => {
      try {
        const result = await actor.verifySession(storedToken);
        if (cancelled) return;
        if (result.__kind__ === "ok") {
          setUser({ email: result.ok.email, role: result.ok.role });
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [actor, isFetching]);

  const login = useCallback(
    async (
      email: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      if (!actor)
        return {
          success: false,
          error: "Backend not available. Please try again.",
        };
      try {
        const result = await actor.login(email, password);
        if (result.__kind__ === "ok") {
          localStorage.setItem(SESSION_KEY, result.ok.sessionToken);
          setUser({ email: result.ok.user.email, role: result.ok.user.role });
          setIsAuthenticated(true);
          return { success: true };
        }
        return { success: false, error: result.err };
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Login failed. Please try again.";
        return { success: false, error: message };
      }
    },
    [actor],
  );

  const logout = useCallback(async () => {
    const storedToken = localStorage.getItem(SESSION_KEY);
    if (actor && storedToken) {
      try {
        await actor.logout(storedToken);
      } catch {
        // Proceed with local logout regardless
      }
    }
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
    setIsAuthenticated(false);
  }, [actor]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
