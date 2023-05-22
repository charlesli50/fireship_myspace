// exports a few posts
// import getServerSession, await getServerSession for whether or not user is signed in

const posts = [
  {
    title: "Introduction to Programming",
    slug: "introduction-to-programming",
    content:
      "In this post, we will explore the basics of programming and discuss key concepts such as variables, control flow, and functions.",
  },
  {
    title: "The Art of Writing",
    slug: "the-art-of-writing",
    content:
      "Discover the essential techniques and strategies to improve your writing skills, from grammar and punctuation to style and voice.",
  },
  {
    title: "Exploring the Universe",
    slug: "exploring-the-universe",
    content:
      "Embark on a journey through space as we delve into the wonders of the universe, from galaxies and black holes to the search for extraterrestrial life.",
  },
  {
    title: "Healthy Eating Habits",
    slug: "healthy-eating-habits",
    content:
      "Learn about the importance of maintaining a balanced diet, along with practical tips for incorporating nutritious foods into your daily meals.",
  },
  {
    title: "Mastering Chess Strategies",
    slug: "mastering-chess-strategies",
    content:
      "Unleash your inner grandmaster as we delve into advanced chess tactics, strategic planning, and common openings to improve your game.",
  },
];

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
