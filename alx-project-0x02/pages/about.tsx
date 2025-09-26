import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">About Page</h1>
      <p className="text-gray-700">
        This project demonstrates a reusable Button component with different sizes and shapes.
      </p>

      <div className="flex space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </main>
  );
}
