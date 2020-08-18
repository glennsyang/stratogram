import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Layout from '../components/layout'
import SEO from '../components/seo'
//import Img from "gatsby-image"
//import ImageFluid from '../components/imagefluid'
import ImageFixed from '../components/imagefixed'
import honeycomb_image from '../images/Honeycomb Layer Small.png'

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 2.4,
      ease: "easeInOut",
    }
  },
}

const IndexPage = ({ data }) => {
  const { title } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" />

      <section id="hero" className="bg-white hero-image">
        <div className="flex flex-row justify-evenly p-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <ImageFixed imgName="Strato_Gram Lettering Minimalist (S only).jpg" imgAlt="Letter S" />
          </motion.div>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <ImageFixed imgName="Strato_Gram Lettering Minimalist (G only).jpg" imgAlt="Letter G" />
          </motion.div>
        </div>
        <motion.h1 className="text-xl font-bold tracking-widest text-strato-blue text-center"
          initial={{ position: 'relative', top: -250 }}
          animate={{ top: -10 }}
          transition={{ delay: 0.2, duration: 1.8 }}
        >
          STRAGEGIC_DESIGN
        </motion.h1>
      </section>

      <section id="one">
        <div className="flex flex-row justify-evenly container mx-auto">

          <motion.div className="p-8 text-center text-strato-gray leading-tight"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
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
          </motion.div>

          <motion.div className="flex blueprint-image pl-10 pr-20"
            variants={mainVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mt-20">
              <img src={honeycomb_image} alt="Honeycomb" className="h-40" />
              <img src={honeycomb_image} alt="Honeycomb" className="h-40 -mt-3 -ml-2" />
            </div>
            <div className="-ml-20 mt-4">
              <img src={honeycomb_image} alt="Honeycomb" className="h-40" />
            </div>
            <div className="-ml-20 mt-20">
              <img src={honeycomb_image} alt="Honeycomb" className="h-40" />
              <img src={honeycomb_image} alt="Honeycomb" className="h-40 -ml-16 -mt-6" />
              <img src={honeycomb_image} alt="Honeycomb" className="h-40 -ml-4 -mt-10" />
            </div>
          </motion.div>

          <motion.div className="p-8 text-center text-strato-gray leading-tight"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
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
          </motion.div>

        </div>
      </section>

      <section id="two" className="px-4 py-6">
        <div className="flex flex-row justify-around bg-white">
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