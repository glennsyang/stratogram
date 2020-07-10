import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
//import ImageFluid from "../components/imagefluid"
import ImageFixed from "../components/imagefixed"

const IndexPage = ({ data }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" />

      <section id="hero" className="flex items-center bg-gray-200">
        <div className="flex flex-col w-full max-w-3xl xl:mwx-w-5xl mx-auto bg-blue-100">
          <h2 className="text-2xl font-hairline tracking-widest text-center">
            S_G
          </h2>
          <h3 className="text-xl font-hairline tracking-widest text-strato-blue text-center">
            STRAGEGIC_DESIGN
          </h3>
        </div>
      </section>

      <section id="one">
        <div className="flex flex-row bg-white">

          <div className="p-8 text-center text-strato-gray leading-tight">
            <h2 className="text-2xl font-hairline tracking-widest uppercase mb-8">
              {title}
            </h2>
            <p className="text-xl font-hairline tracking-wide">
              CONTENT CREATION
            </p>
            <p className="text-xl font-hairline tracking-wide">
              LAYERED &amp; TAILORED
            </p>
            <p className="text-xl font-hairline tracking-wide">
              FOR YOU
            </p>
            <ul className="text-xl font-hairline tracking-wide leading-none my-4">
              <li>ORIGINAL PHOTOGRAPHY</li>
              <li>MUSIC PRODUCTION</li>
              <li>AUDIO ENGINEERING</li>
              <li>VOICE OVER</li>
              <li>VIDEOGRPAHY</li>
              <li>ANIMATION</li>
              <li>VIDEO EDITING</li>
              <li>COPYWRITING</li>
              <li>SCRIPT WRITING</li>
            </ul>
            <p className="text-xl font-hairline tracking-wide">
              WE COMBINE THESE FORMS
            </p>
            <p className="text-xl font-hairline tracking-wide">
              TO DELIVER INSPIRED CONTENT
            </p>
            <p className="text-xl font-hairline tracking-wide">
              THAT DELIVERS YOUR MESSAGE
            </p>
          </div>

          <div className="bg-blue-600 px-10">

          </div>

          <div className="p-8 text-center text-strato-gray leading-tight">
            <h2 className="text-2xl font-hairline tracking-widest mb-12">
              STRATO_
            </h2>
            <p className="text-xl font-hairline tracking-wide">
              LAYER FILM OR COATING
            </p>
            <p className="text-xl font-hairline tracking-wide">
              A COMBINING FORM
            </p>
            <h2 className="text-2xl font-hairline tracking-widest my-12">
              GRAM_
            </h2>
            <p className="text-xl font-hairline tracking-wide">
              A WRITING OR RECORD
            </p>
            <p className="text-xl font-hairline tracking-wide">
              A UNIQUE MESSAGE
            </p>
          </div>

        </div>
      </section>

      <section id="two" className="px-4 py-6">
        <div className="flex flex-row justify-around bg-white">
          <Img fluid={data.file.childImageSharp.fluid} alt="A corgi smiling happily" />
          <ImageFixed imgName="Photo Icon.jpg" imgAlt="Photo Icon" imgClass="h-48 w-full object-contain bg-blue-100" />
          <ImageFixed imgName="Audio Icon.jpg" imgAlt="Audio Icon" imgClass="h-full w-full object-cover bg-red-100" />
          <ImageFixed imgName="Video Icon.jpg" imgAlt="Video Icon" imgClass="h-full w-full object-cover bg-purple-100" />
          <ImageFixed imgName="Word Icon.jpg" imgAlt="Word Icon" imgClass="h-full w-full object-cover bg-teal-100" />
        </div>
      </section>

      <section id="portfolio" className="flex justify-center bg-strato-blue">
        <h2 className="text-6xl font-black text-white">
          Portfolio
        </h2>
        <Img />
      </section>

    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "Audio Icon.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage