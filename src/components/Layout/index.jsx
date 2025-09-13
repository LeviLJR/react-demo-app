import { Outlet, useLocation } from "react-router";
import { Heart } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../Button";

export function Layout() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const redirectTo = user ? "/" : "/login";

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <header className="pb-12">
        <nav className="absolute flex w-full justify-between pr-6 items-end">
          <a
            href={redirectTo}
            className="tracking-[0.22em] [text-shadow:-1px_1px_0_#4d2323,-1.5px_1.5px_0_#ffffff,-2px_2px_3px_#000] bg-[radial-gradient(45%_80%_at_50%_50%,_theme(colors.red.500)_0%,_theme(colors.red.900)_100%)] rounded-r-md rounded-bl-md font-bold font-heading text-white text-lg px-6 pt-2 pb-3"
          >
            youbloom
          </a>
          {user && (
            <Button onClick={logout} variant="default">
              Sign out
            </Button>
          )}
        </nav>
      </header>
      <Outlet />
      <footer className="pb-6">
        <span className="flex items-center justify-center">
          Made with&nbsp;
          <Heart fill="black" size={18} stroke="none" />
          &nbsp;by Levi!
        </span>
      </footer>
    </div>
  );
}
