"use client";

import { usePathname } from "next/navigation";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  const pathname = usePathname();

  // Auth pages don't need top padding since they don't have the header
  const needsTopPadding =
    pathname !== "/auth/login" && pathname !== "/auth/register";

  return <main className={needsTopPadding ? "pt-16" : ""}>{children}</main>;
}
