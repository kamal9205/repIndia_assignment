export default function ProductSkeleton() {
  return (
    <div
      className="
        bg-slate-900
        rounded-3xl
        overflow-hidden
        animate-pulse
      "
    >
      <div className="h-72 bg-slate-800" />

      <div className="p-5">
        <div className="h-6 bg-slate-800 rounded mb-4" />

        <div className="h-4 w-24 bg-slate-800 rounded mb-6" />

        <div className="flex justify-between">
          <div className="h-8 w-24 bg-slate-800 rounded" />

          <div className="h-8 w-16 bg-slate-800 rounded" />
        </div>
      </div>
    </div>
  );
}