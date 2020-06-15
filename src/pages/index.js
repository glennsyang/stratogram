import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"
import ImageFluid from "../components/imagefluid"

const IndexPage = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" />

      <div className="flex flex-col w-full max-w-3xl xl:mwx-w-5xl m-auto min-h-screen">
        <h1 className="text-4xl font-semibold py-4">Welcome to {title}</h1>
        <p className="text-lg italic">{description}</p>
        <div className="flex flex-row">
          <ImageFluid imgName="Video Icon (Red Black Line).png" imgAlt="Video Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Audio Icon (Red Black Line).png" imgAlt="Audio Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Photo Icon (Red Black Line).png" imgAlt="Photo Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Word Icon (Red Black Line).png" imgAlt="Word Icon" imgClass="h-full w-full object-cover" />
        </div>
        <Img></Img>
      </div>
    </Layout>
  )
}

export default IndexPage
