import { useNavigate, useSearchParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  
  return (
    <div>
      <button>
        <a href="/">Login</a>
      </button>
      {user && (
        <span>
          <h1>Home Page</h1>
        </span>
      )}
    </div>
  );
}
