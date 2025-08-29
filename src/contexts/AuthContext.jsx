import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();
const validPhones = ['+254712345678']

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (phone) => {
    if (!validPhones.includes(phone)) {
     throw new Error('User not found') 
    } 
    setUser({phone});
    navigate("/");
  };

  const logout = () => {
    setUser(null)
    navigate('/login')
  };

  return (
    <AuthContext value={{ user, isAuthed: !!user, login, logout }}>
      {children}
    </AuthContext>
  );
}

export const useAuth = () => useContext(AuthContext);
