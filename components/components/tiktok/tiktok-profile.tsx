import type { NextPage } from "next";

import { useEffect, useRef } from "react";

const TikTokProfileEmbed: NextPage = ({ profile }) => {
  const tikTokRef = useRef(null); // Create a ref for the blockquote element

  useEffect(() => {
    if (tikTokRef.current) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      tikTokRef.current.appendChild(script); // Append the script to the blockquote element

      return () => {
        // Cleanup the script from the blockquote element
        // tikTokRef.current.removeChild(script);
      };
    }
  }, [profile]); // Empty dependency array ensures this effect runs only once after the initial render

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    profile && (
      <blockquote
        ref={tikTokRef}
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${profile}`}
        data-unique-id={profile}
        data-embed-from="embed_page"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.tiktok.com/@${profile}?refer=creator_embed`}
          >
            @daddytankee
          </a>
        </section>
      </blockquote>
    )
  );
};

export default TikTokProfileEmbed;
