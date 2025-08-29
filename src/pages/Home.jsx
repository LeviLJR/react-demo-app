import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import { Section } from "../components/Section";
import { PostList } from "../components/PostList";

export function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    let isMounted = true;
    getPosts()
      .then((data) => {
        if (!isMounted) return;

        setPosts(data);
        setFiltered(data);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message || "Error finding data");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const filtered = search.trim().toLowerCase();
    setFiltered(
      filtered
        ? posts.filter((it) => it.title.toLowerCase().includes(filtered))
        : posts
    );
  }, [search, posts]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-10">
      <Section
        header={
          <input
            className="w-full p-2 focus:outline-none border-b-1 border-zinc-400 focus:border-blue-500"
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        }
      >
        <PostList items={filtered} onItemClick={(post) => navigate(`/detail/${post.id}`)}/>
      </Section>
    </div>
  );
}
