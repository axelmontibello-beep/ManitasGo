import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

function Bone({ className }: SkeletonProps) {
  return (
    <div className={cn("bg-[#F3F4F6] rounded animate-pulse", className)} />
  );
}

export function SkeletonTaskCard() {
  return (
    <div className="border border-[#E5E8EB] rounded-lg p-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Bone className="h-5 w-24 rounded-full" />
        <Bone className="h-8 w-8 rounded-full" />
      </div>
      <Bone className="h-5 w-3/4" />
      <Bone className="h-4 w-1/2" />
      <div className="flex justify-between items-center mt-1">
        <Bone className="h-4 w-28" />
        <div className="flex gap-3">
          <Bone className="h-8 w-8 rounded-full" />
          <Bone className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonTaskCard key={i} />
      ))}
    </div>
  );
}
