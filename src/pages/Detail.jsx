import { useNavigate, useParams } from "react-router";
import { getCommentsByPostId, getPostById } from "../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Section } from "../components/Section";
import { PostCard } from "../components/PostCard";
import { CommentList } from "../components/CommentList";
import { Button } from "../components/button";

export function Detail() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getPostById(id)
      .then(setPost)
      .catch((err) => {
        setError(err.message || `Error finding post`);
      })
      .finally(() => {
        setLoadingPost(false);
      });
  }, [id]);

  useEffect(() => {
    setLoadingComments(true);
    setLoadingPost(true);
    getCommentsByPostId(id)
      .then(setComments)
      .catch((err) => setError(err.message || `Error finding post ${id}`))
      .finally(() => setLoadingComments(false));
  }, [id]);

  if (loadingPost) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!post) return <p className="text-center">Publication not found.</p>;

  return (
    <div>
      <div>
        <Section
          header="Post"
          right={
            <Button onClick={() => navigate(-1)} variant="default">
              Go back
            </Button>
          }
        >
          <PostCard post={post} as="div" />
        </Section>
        <Section header="Comments">
          {loadingComments ? (
            <p className="text-center">Loading comments…</p>
          ) : (
            <CommentList items={comments} />
          )}
        </Section>
      </div>
    </div>
  );
}
