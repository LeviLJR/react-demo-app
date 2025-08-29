import { useNavigate } from "react-router";

export function Detail(){
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return(
    <div>
      <nav> 
        <a href="/">Home</a>
      </nav>
    </div>
  )
}