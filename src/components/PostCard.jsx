export function PostCard({ post, onClick, as: Tag = "li" }) {
  const clickable = typeof onClick === "function";
  return (
    <Tag
      className={`rounded-lg border p-4 shadow-sm hover:shadow-md transition {onClick ? "cursor-pointer hover:bg-gray-50" : ""}`}
      role={clickable ? "button" : undefined}
      onClick={onClick}
      aria-label={post?.title}
    >
      <h1 className="font-medium text-gray-900">{post?.title ?? "Untitled"}</h1>
      {post?.body && (
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.body}</p>
      )}
    </Tag>
  );
}
