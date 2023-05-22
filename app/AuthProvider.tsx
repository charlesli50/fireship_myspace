// an object that wraps the entire layout
// exports children to entire tree, any component can recieve if item is a session thingy

"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
