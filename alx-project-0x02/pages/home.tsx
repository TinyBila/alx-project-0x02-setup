import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content of card 1." },
    { title: "Card 2", content: "This is the content of card 2." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-2 text-gray-700">Below are some reusable card examples:</p>

      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add New Post
      </button>

      {/* Render cards dynamically */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
    </main>
  );
}
