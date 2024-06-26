import type { NextPage } from "next";

import Patreon from "@/components/components/patreon/patreon";

import SocialButton from "@/components/ui2/social-button";
import { HeadingH3, Paragraph } from "@/components/typography";
import Image from "next/image";

const PatreonRow: NextPage = ({ posts = null, buttons, sideImage }) => {
  return (
    <div className="grid grid-cols-1 border-t xl:grid-cols-5 bg-primary border-stone-4000 dark:border-stone-600">
      <div className="items-center justify-center hidden col-span-1 p-0 border-b xl:flex xl:col-span-2 group lg:p-8 lg:p-12 border-stone-400 dark:border-stone-600 md:border-b-0 bg-scanlines">
        <Image
          src={sideImage.url || ""}
          width={365}
          height={720}
          alt={sideImage.alternativeText || ""}
          className="items-center justify-center w-full"
        />
      </div>
      <div className="col-span-1 px-2 py-6 border-b md:border-r xl:col-span-3 group md:p-8 lg:p-12 border-stone-400 dark:border-stone-600 md:border-b-0 bg-scanlines">
        <HeadingH3 className="p-0 m-0 group-hover:font-bold">
          Latest Patreon Posts
        </HeadingH3>
        <div className="grid grid-cols-1 bg-primary border-stone-400 dark:border-stone-600">
          <Patreon posts={posts} buttons={buttons} />
        </div>
      </div>
    </div>
  );
};

export default PatreonRow;
