import type { NextPage } from "next";

import TwitterProfile from "@/components/components/twitter/twitter-profile";
import Soundcloud from "@/components/components/soundcloud/soundcloud";

const TwitterSoundcloudRow: NextPage = ({
  twitterProfile,
  darkMode,
  height,
  tracks,
}) => {
  return (
    <div className="grid grid-cols-1 border-t bg-primary lg:grid-cols-2 border-stone-400 dark:border-stone-600">
      <div className="px-2 py-6 border-b group md:p-8 lg:p-12 border-stone-400 dark:border-stone-600 md:border-b-0 bg-scanlines">
        <TwitterProfile
          profile={twitterProfile}
          darkMode={darkMode}
          height={height}
        />
      </div>

      <Soundcloud tracks={tracks} />
    </div>
  );
};

export default TwitterSoundcloudRow;
