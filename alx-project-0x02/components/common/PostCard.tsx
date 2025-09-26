import { PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-4">Posted by User {userId}</p>
    </div>
  );
}
