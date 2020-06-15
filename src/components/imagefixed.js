import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ImageFixed = ({ props }) => (
    <StaticQuery
        query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed {
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
                edge => edge.node.fixed.originalName === props.imgName
            )
            if (!image) {
                console.log("ImageFixed return null")
                return null
            }
            return <Img fixed={image.node.fixed} alt={props.imgAlt} className={props.imgClass} />
        }}
    />
)
export default ImageFixed
