// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-primary">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
}
