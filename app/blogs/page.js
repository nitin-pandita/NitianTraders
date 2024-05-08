"use client";
import blogPostsData from "../../data/blogPostsData.js";
import GreenCross from "../../components/GreenCross";
import Link from "next/link";
function BlogPost() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <div className="h-full text-black">
      <div className="bg-gray-900  w-full p-36 relative">
        <div className="flex justify-center text-white text-2xl">
          <p>Blogs</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>Blogs</span>
          </p>
        </div>
        <GreenCross />
        <div className="animate-moveleftbounce absolute left-40 bottom-[-50px] z-20">
          {" "}
          <img
            src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape1.png"
            alt=""
          />
        </div>
      </div>

      <article className="relative max-w-7xl mx-auto">
        <section className="text-center">
          <p className="mt-12 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-8">
            The stock market operates as a network of exchanges where stocks
            (pieces of ownership in businesses) are bought and sold. It serves
            as a critical barometer for the overall health of an economy,
            reflecting investor sentiment and the performance of companies and
            industries.
          </p>
        </section>
        <section className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {blogPostsData.map((post, index) => (
            <section
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <section className="flex-shrink-0">
                <img
                  className="h-48 w-full objectcover"
                  src={post.imageUrl}
                  alt=""
                />
              </section>
              <section className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
                <section className="flex-1">
                  <Link
                    href={{
                      pathname: "/blog-post",
                      query: { href: post.href },
                    }}
                  >
                    {/* Wrap the content inside Link */}
                    <div className="block mt-2">
                      <p className="text-xl font-semibold hover:text-green-700 text-white duration-500">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </section>
                <section className="mt-6 flex items-center">
                  <section className="flex-shrink-0">
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </section>
                  <section className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {post.author.name}
                    </p>
                    <section className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          ))}
        </section>
      </article>
    </div>
  );
}

export default BlogPost;
