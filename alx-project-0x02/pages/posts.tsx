import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <main>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-purple-600">Posts Page</h1>
        <p className="text-gray-700">Here is where posts will be displayed.</p>
      </div>
    </main>
  );
}
