export function CommentCard({ comment }) {
  return (
    <li className="rounded-lg border p-4 shadow-sm bg-white">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-medium text-gray-900">{comment?.name}</p>
        <span className="text-xs text-gray-500">{comment?.email}</span>
      </div>
      <p className="mt-2 whitespace-pre-line text-gray-700">{comment?.body}</p>
    </li>
  );
}
