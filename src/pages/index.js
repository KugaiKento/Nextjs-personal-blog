import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";


export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog"});
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog)=>(
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`} legacyBehavior>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
