import { createContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("user") ?? {});
  useEffect(() => {
    cookies.set("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
