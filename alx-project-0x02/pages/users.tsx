import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: UserProps[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <main>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Users Page</h1>
        {users.length === 0 ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
