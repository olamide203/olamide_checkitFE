"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-start justify-center p-4 flex-col">
      <h2>Something went wrong!</h2>
      <p className="">{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
