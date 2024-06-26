import type { NextPage, GetStaticProps } from "next";
import { MainLayout } from "@/layouts/layout";
import { HeadingH1 } from "@/components/typography";
import { links } from "@/lib/links";
import { Button } from "@/components/ui/button";

import { siteConfig, siteLinks } from "@/lib/SSRLayout";

const Privacy: NextPage = (props) => {
  return (
    <MainLayout
      headerLinks={props.headerLinks}
      footerLinks={props.footerLinks}
      title={props.siteConfig.title}
    >
      {/* TODO: add head */}
      {/* TODO: refactor Links into Dynamic Zones */}
      <div className="container px-4">
        <HeadingH1 className="my-8">Privacy Policy</HeadingH1>
        <p>
          To be honest. I&apos;m not collecting anything besides Plausible soon.
          For Plausible, I can&apos;t track a user long term even if I wanted
          to. The open source code base shows that. There&apos;s no cookies or
          anything.
        </p>
        <p>Below is stuff I found online to copy paste into places like this</p>
        <p>
          We are committed to protecting your personal information and your
          right to privacy. If you have any questions or concerns about our
          policy, or our practices with regards to your personal information,
          please contact us.
        </p>
        <p>
          This Privacy Policy governs the privacy policies and practices of our
          Website, located at PrivacyPolicies.com. Please read our Privacy
          Policy carefully as it will help you make informed decisions about
          sharing your personal information with us.
        </p>
        <p>Last updated privacy policy on January 2024.</p>
        <h3>Information We Collect</h3>
        <p>
          As a Visitor, you can browse our Website to find out more about our
          Website. You are not required to provide us with any personal
          information as a Visitor.
        </p>
        <p>
          We collect your personal information when you register with us
          (&quot;User&quot;), when you express an interest in obtaining
          information about us or our products and services, when you
          participate in activities on our Website Site (such as using our
          builder) or otherwise contacting us.
        </p>
        <p>
          Generally, you control the amount and type of information you provide
          to us when using our Website. The personal information that we collect
          depends on the context of your interaction with us and the Website,
          the choices you make and the products and features you use. The
          personal information we collect can include the following:
        </p>
        <h3>Name, Email Address and Contact Data</h3>
        <p>
          Payment Information. If you choose to buy one of our Policy, we
          collect payment information through our payment processor. All payment
          information is securely stored by our payment processor and we do not
          have access to your sensitive information, such as credit card number
          or security code.
        </p>
        <p>
          Business Information. If you choose to create a Policy on our Website,
          we may ask specific information related to your business in order to
          create the Policy.
        </p>
        <h4>Automatically Collected Information</h4>
        <p>
          When you use our Website, we automatically collect certain computer
          information by the interaction of your mobile phone or web browser
          with our Website. Such information is typically considered
          non-personal information. We also collect the following:
        </p>
        <h3>Cookies</h3>
        <p>
          Our Website uses &quot;Cookies&quot; to identify the areas of our
          Website that you have visited. A Cookie is a small piece of data
          stored on your computer or mobile device by your web browser. We use
          Cookies to personalize the Content that you see on our Website. Most
          web browsers can be set to disable the use of Cookies. However, if you
          disable Cookies, you may not be able to access functionality on our
          Website correctly or at all. We never place Personally Identifiable
          Information in Cookies.
        </p>
        <h3>Third Party Tracking Tools</h3>
        <p>
          We also use third party tracking tools to improve the performance and
          features of our Website. These third party tracking tools are designed
          to collect only non-personal information about your use of our
          Website. However, you understand that such tools are created and
          managed by parties outside our control. As such, we are not
          responsible for what information is actually captured by such third
          parties or how such third parties use and protect that information.
        </p>
        <h3>Log Information</h3>
        <p>
          We automatically receive information from your web browser or mobile
          device. This information includes the name of the website from which
          you entered our Website, if any, as well as the name of the website to
          which you&apos;re headed when you leave our website. This information
          also includes the IP address of your computer/proxy server that you
          use to access the Internet, your Internet Website provider name, web
          browser type, type of mobile device, and computer operating system. We
          use all of this information to analyze trends among our Users to help
          improve our Website.
        </p>
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

export default Privacy;
