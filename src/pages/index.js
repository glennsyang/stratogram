import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"
import ImageFluid from "../components/imagefluid"

const IndexPage = () => {
  const { title } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" />

      <section id="hero" className="hero-image flex items-center py-8 sm:py-32">
        <div className="flex flex-col w-full max-w-3xl xl:mwx-w-5xl m-auto text-white">
          <h2 className="text-6xl font-black my-6">
            {title}
          </h2>
          <div className="w-full font-serif">
            <p className="text-lg font-semibold">
              STRATO:<span className="pl-1 font-normal italic">layer, coating, sheet, film; stratus; a combining form; word-forming element referring to layers or layering, from Latin 'a spreading'.</span>
            </p>
            <p className="text-lg font-semibold mt-3">
              GRAM:<span className="pl-1 font-normal italic">something written or recorded in a special way; from Greek 'thing written, a letter of the alphabet' denoting a novelty message.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="one" className="p-4">
        <div className="flex flex-row">
          <ImageFluid imgName="Video Icon (Red Black Line).png" imgAlt="Video Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Audio Icon (Red Black Line).png" imgAlt="Audio Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Photo Icon (Red Black Line).png" imgAlt="Photo Icon" imgClass="h-full w-full object-cover" />
          <ImageFluid imgName="Word Icon (Red Black Line).png" imgAlt="Word Icon" imgClass="h-full w-full object-cover" />
        </div>
      </section>

      <section id="portfolio" className="flex justify-center bg-gray-700 py-8">
        <h2 className="text-6xl font-black text-white">
          Portfolio
        </h2>
        <Img />
      </section>

    </Layout>
  )
}

export default IndexPage
