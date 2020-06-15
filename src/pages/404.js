import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/404_image.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO
        title="404: Not found"
      />
      <div className="bg-white">
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold text-center p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
