import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-bold text-indigo-600">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}
