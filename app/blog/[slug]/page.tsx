// blog page ==>
//
//

export const dynamic = "force-dynamic";

interface Post {
  //establish the typescript Post formatting database stuff
  title: string;
  content: string;
  slug: string;
}

//typescript stuff
interface Props {
  //the props the page recieves as a page, id as a param
  params: { slug: string };
}

// generate fetch the content, return it
export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// the actual page, using a different way
export default async function BlogPostPage({ params }: Props) {
  //recieve props/ id from the url
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json() //fetch the list of posts
  );

  const post = posts.find((post) => post.slug === params.slug)!; //find the post that has the slug equal to the url slug

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
