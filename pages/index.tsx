/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { TwitchPlayer, TwitchChat } from "react-twitch-embed";

import { MainLayout } from "@/layouts/layout";
import { Button } from "@/components/ui/button";

// import TwitchEmbed from "@/components/twitch-player";
import Reddit from "@/components/front_page/reddit";
import Patreon from "@/components/front_page/patreon";
import InstagramPosts from "@/components/front_page/instagram";
import Discord from "@/components/front_page/discord";

import TopSection from "@/components/front_page/top-section";

import Link from "next/link";
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  Paragraph,
} from "@/components/typography";
import { Icons } from "@/components/icons";
import Image from "next/image";
import heroImgPortrait from "@/public/images/hero-portrait.png";
import heroImgLandscape from "@/public/images/hero-landscape.png";
import useAxios from "@/axios";

import YT from "@/components/front_page/youtube";
import YoutubePlaylist from "@/components/front_page/youtube-playlist";

import Row1 from "@/components/front_page/row-1";
import Row2 from "@/components/front_page/row-2";
import Row3 from "@/components/front_page/row-3";
import Row4 from "@/components/front_page/row-4";
import Row5 from "@/components/front_page/row-5";

const Home: NextPage = () => {
  const router = useRouter();
  const api = useAxios();

  return (
    <MainLayout>
      <div>
        <div className="relative bg-accent -z-20 before:block before:absolute before:inset-0 before:bg-scanlines before:-z-10">
          <HeadingH1 className="fixed top-0 left-0 -indent-[500%] overflow-hidden bg-wordmark bg-no-repeat bg-center bg-[length:90%_auto] 2xl:bg-[length:1400px_auto] w-full h-[540px] -z-10">
            Crank Communism
          </HeadingH1>

          <Image
            src="/screenshots/UnelectableAirwaves_banner-title-2.png"
            alt=""
            height={856}
            width={2295}
            className="w-full h-[428px] object-cover relative -z-40 mix-blend-luminosity"
            quality={10}
          />
        </div>

        {/* <TopSection /> */}

        {/* content */}
        <div className="mx-auto max-w-7xl">
          <Row0 />
          {/* content after top header parts */}

          {/* end one row */}
          {/* <Row1 /> */}
          {/* <Row3 /> */}
          {/* <Row2 /> */}
          {/* <Row4 /> */}
          <Row5 />
          <div className="grid grid-cols-1 border-t bg-primary border-stone-400 dark:border-stone-600">
            <div className="px-2 py-6 border-b group md:p-2 lg:p-4 border-stone-400 dark:border-stone-600 md:border-b-0 md:border-r hover:bg-scanlines hover:bg-accent">
              <HeadingH3 className="text-base group-hover:text-background group-hover:font-bold">
                Latest Patreon Post
              </HeadingH3>
              <div className="patreon-container">
                {/* <Discord /> */}
                <Patreon />
              </div>
            </div>
          </div>
          {/* end one row */}
          <div className="grid grid-cols-1 border-t bg-primary border-stone-400 dark:border-stone-600">
            <div className="px-2 py-6 border-b group md:p-8 lg:p-12 border-stone-400 dark:border-stone-600 md:border-b-0 md:border-r hover:bg-scanlines hover:bg-accent">
              <HeadingH3 className="text-base group-hover:text-background group-hover:font-bold">
                Recent Reddit Posts
              </HeadingH3>
              <div className="grid grid-cols-1 border-t bg-primary border-stone-400 dark:border-stone-600">
                {/* <Reddit /> */}
              </div>
            </div>
          </div>
          {/* end one row */}
          <div className="grid grid-cols-1 border-t bg-primary border-stone-400 dark:border-stone-600">
            <div className="px-2 py-6 border-b group md:p-8 lg:p-12 border-stone-400 dark:border-stone-600 md:border-b-0 md:border-r hover:bg-scanlines hover:bg-accent">
              <HeadingH3 className="text-base group-hover:text-background group-hover:font-bold">
                Recent Instagram Posts
              </HeadingH3>
              <div className="grid grid-cols-1 border-t bg-primary border-stone-400 dark:border-stone-600">
                {/* <InstagramPosts lightwidgetHtml="1a2d6c9700de5c6eb43fb26d39765627" /> */}
              </div>
            </div>
          </div>
          {/* end one row */}
        </div>
        {/* end .max-w-7xl.mx-auto */}
      </div>
      {/* overall one */}
    </MainLayout>
  );
};

export default Home;

// use
{
  /*
<HeadingH1>what up</HeadingH1>
<HeadingH2>what up</HeadingH2>
<HeadingH3>what up</HeadingH3>
<HeadingH4>what up</HeadingH4>
<HeadingH5>what up</HeadingH5>
<Paragraph>what up</Paragraph>
<TypographyLarge>TypographyLarge</TypographyLarge>
<TypographySmall>small</TypographySmall>
<TypographyMuted>small</TypographyMuted>
<Button variant="outline">Button</Button>
*/
}
