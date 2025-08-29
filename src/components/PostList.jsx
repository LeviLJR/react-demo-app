import { PostCard } from "./PostCard";

export function PostList({ items = [], onItemClick }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-gray-500">No items found.</p>;
  }

  return (
    <ul className="grid gap-3">
      {items.map((post) => (
        <PostCard
          key={post.id ?? post.title}
          post={post}
          onClick={onItemClick ? () => onItemClick(post) : undefined}
        />
      ))}
    </ul>
  );
}


