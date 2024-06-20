import type { NextPage, GetStaticProps } from "next";
import { MainLayout } from "@/layouts/layout";
import { HeadingH1 } from "@/components/typography";
import { links } from "@/lib/links";
import { Button } from "@/components/ui/button";

import { getStrapi } from "@/lib/getStrapi";
import { siteConfig, siteLinks } from "@/lib/SSRLayout";

const Label: NextPage = (props) => {
  return (
    <MainLayout
      headerLinks={props.headerLinks}
      footerLinks={props.footerLinks}
      title={props.siteConfig.title}
    >
      {/* TODO: add head */}
      {/* TODO: refactor Links into Dynamic Zones */}
      <div className="container px-4">
        <HeadingH1 className="my-8">Label</HeadingH1>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // CONFIG
  const SiteConfigObj = await siteConfig();

  // LINKS -- Header and footer links
  const { headerLinks, footerLinks } = await siteLinks();

  // Props
  return {
    props: {
      siteConfig: { ...SiteConfigObj },
      headerLinks,
      footerLinks,
    },
  };
};

export default Label;
