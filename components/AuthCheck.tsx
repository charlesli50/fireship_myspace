//uses session to see if logged in

"use client";

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log(session, status);

  // current status is unautheticated, loading, or authenticated
  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
