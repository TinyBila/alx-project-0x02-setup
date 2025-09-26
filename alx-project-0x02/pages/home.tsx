import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-2 text-gray-700">
        Below are some reusable card examples:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
        <Card title="Card 4" content="This is the content of card 4." />
      </div>
    </main>
  );
}
