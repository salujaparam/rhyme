import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import styles from '../css/activities.module.css'

const query = graphql`
{
    images:allFile(filter: {relativeDirectory: {eq: "durgaPuja"}}){
      edges{
        node{
          childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default function Sports() {
    const {images} = useStaticQuery(query);
    return (
        <div className={styles.imgContainer}>
            {images.edges.map((node, index) => {
                console.log(node.node)
                return <Img fluid={node.node.childImageSharp.fluid} key={index} className={styles.img} alt="durga puja" />
            })}
        </div>
    )
}
