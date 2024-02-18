"use client";

//flex h-12 w-12 shrink-0 items-center justify-center p-2 my-2 [&>span]:w-auto [&>svg]:hidden

export function Logo() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center p-2 my-2 [&>span]:w-auto ">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    </div>
  );
}
