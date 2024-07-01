import Skeleton from "@/lib/components/skeleton/Skeleton";

const Loading = () => {
  return (
    <main className="p-4 md:p-[3rem] w-full">
      <Skeleton className="w-full h-[26rem]" />
    </main>
  );
};
export default Loading;
