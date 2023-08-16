// @ts-nocheck
import Airtable from "airtable";
import ActivityCard from "@/components/ActivityCard";
import Link from "next/link";
import Dialog from "@/components/Modal";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});
const base = Airtable.base("appANDjQ0QYeCVVis");
const table_blog = base("Blog");
const table_new_releases = base("New Releases");

async function getData() {
  const blog_records = await table_blog.select().all();
  const new_releases_records = await table_new_releases.select().all();
  console.log(blog_records, new_releases_records);
  return { posts: blog_records, new_releases: new_releases_records };
}

type Props = {
  searchParams: Record<string, string | null | undefined>;
};

export default async function Home({ searchParams }: Props) {
  const data = await getData();
  return (
    <main className="p-8 bg-gray-900 text-white ">
      {/* New Releases */}
      <section className="">
        <h3 className="my-4 text-xl">New Releases:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.new_releases.map((release) => {
            return (
              <div className="p-8 border rounded ">
                 {release.fields.Image && release.fields.Image.length > 0 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="shadow object-cover w-full  mb-2 h-[200px] rounded"
                  
                  src={release.fields.Image[0].url}
                  alt="Activity"
                />
              )}
                <p>Artist: {release.fields["Artist"]}</p>
                <p>Album Title: {release.fields["Album Title"]}</p>
                <p className="my-8">{release.fields["Notes"]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Blog */}
      <section>
        <h3 className="my-4 text-xl">Blog:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.posts.map((post) => {
            return (
              <div className="border rounded p-10">
                <h3 className="text-xl my-4">{post.fields["Blog Title"]}</h3>
                <p>{post.fields.Content}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
