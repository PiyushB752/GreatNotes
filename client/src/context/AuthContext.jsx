import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadUser =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          if (!token) {
            setLoading(false);
            return;
          }

          const userData =
            await getCurrentUser();

          setUser(userData);
        } catch (error) {
          localStorage.removeItem(
            "token"
          );
        } finally {
          setLoading(false);
        }
      };

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "token"
    );
    setUser(null);
    window.location.href =
      "/login";
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);