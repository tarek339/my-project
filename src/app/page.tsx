export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen  gap-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 border-2 border-primary w-sm h-24"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 border-2 border-primary w-sm h-24"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 border-2 border-primary w-sm h-24"></div>
    </div>
  );
}
