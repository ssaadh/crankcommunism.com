import type { NextPage } from "next";
import { useEffect, useState } from "react";

import PatreonPost from "@/components/components/patreon/patreon-post";
import CTAButton from "@/components/ui2/variants/patreon";

const PatreonLatestPosts: NextPage = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/patreon/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const thedata = await response.json();
        setPosts(thedata.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialPosts) {
      fetchData();
    } else {
      setPosts(initialPosts);
      setLoading(false);
    }
  }, [initialPosts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="px-2 py-6 group md:p-1 lg:p-2">
      <CTAButton />
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => (
          <PatreonPost
            key={index}
            title={post.attributes.title}
            content={post.attributes.content}
            embed_data={post.attributes.embed_data}
            embed_url={post.attributes.embed_url}
            published_at={post.attributes.published_at}
            url={post.attributes.url}
            is_paid={post.attributes.is_paid}
            is_public={post.attributes.is_public}
          />
        ))}
    </div>
  );
};

export default PatreonLatestPosts;