import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-600">About Page</h1>
        <p className="text-gray-700">
          This project demonstrates reusable components and navigation.
        </p>
        <div className="flex space-x-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </div>
    </main>
  );
}
