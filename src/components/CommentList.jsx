import { CommentCard } from "./CommentCard";

export function CommentList({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-gray-500">No comments.</p>;
  }

  return (
    <ul className="grid gap-3">
      {items.map((c) => (
        <CommentCard key={c.id ?? c.email ?? c.name} comment={c} />
      ))}
    </ul>
  );
}
