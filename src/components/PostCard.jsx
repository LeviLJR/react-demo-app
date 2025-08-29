export function PostCard({ post, onClick, as = "li" }) {
  const Tag = as;
  return (
    <Tag
      className={`rounded-lg border p-4 shadow-sm hover:shadow-md transition {onClick ? "cursor-pointer hover:bg-gray-50" : ""}`}
      onClick={onClick}
      aria-label={post?.title}
    >
      <h3 className="font-medium text-gray-900">{post?.title ?? "Untitled"}</h3>
      {post?.body && (
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.body}</p>
      )}
    </Tag>
  );
}
