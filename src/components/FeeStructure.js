import React from 'react'
import StyledHero from './StyledHero'
import {useStaticQuery, graphql} from 'gatsby'

const query = graphql`
  {
    aboutImage:file(relativePath: {eq:"admissionss.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 600){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function FeeStructure() {
    const {aboutImage} = useStaticQuery(query);
    return (
        <div>
            <StyledHero img={aboutImage.childImageSharp.fluid} />
            <h1>Fee Structure</h1>
        </div>
    )
}
