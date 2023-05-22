// THIS IS AN ABOUT PAGE
// It is static(about page will never change)
// metadata is being populated on the server side for SEO optimization
// Simple About thingy

export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company.",
};

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is my social media test project company thingy majigy</p>
    </main>
  );
}
