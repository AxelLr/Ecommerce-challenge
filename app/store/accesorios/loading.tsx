import Skeleton from "../../../lib/components/skeleton/Skeleton";

export default function Loading() {
  return (
    <main className="shop-grid py-7">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[16rem]" />
      ))}
    </main>
  );
}
