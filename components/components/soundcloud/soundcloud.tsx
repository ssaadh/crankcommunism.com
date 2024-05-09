import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { HeadingH3 } from "@/components/typography";

import SoundCloudPlayer from "@/components/components/soundcloud/soundcloud-player";

import CTAButton from "@/components/ui2/variants/soundcloud";

const Soundcloud: NextPage = ({ tracks = [] }) => {
  return (
    <div className="px-2 py-6 group md:p-8 lg:p-12 hover:bg-scanlines">
      <HeadingH3 className="text-base group-hover:font-bold">
        Featured Songs
      </HeadingH3>
      <CTAButton
        url="https://soundcloud.com/dj-tom-hanks"
        text="Go to SoundCloud Profile"
      />
      {tracks &&
        tracks.length > 0 &&
        tracks.map((item) => (
          <div className="mb-10" key={item.id}>
            <SoundCloudPlayer trackUrl={item.media_url} />
          </div>
        ))}
    </div>
  );
};

export default Soundcloud;
