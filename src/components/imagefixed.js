import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ImageFixed = ({ imgName, imgAlt, imgClass }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed(height: 200) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fixed.originalName === imgName
      )
      if (!image) {
        console.log("ImageFixed return null")
        return null
      }
      return <Img fixed={image.node.fixed} alt={imgAlt} className={imgClass} />
    }}
  />
)
export default ImageFixed
