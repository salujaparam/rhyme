import React from 'react'
import StyledHero from './StyledHero'
import {useStaticQuery, graphql} from 'gatsby'
import Title from './Title';
// import styles from '../css/fee.module.css'

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
        <Title title="Fee" subtitle="structure" />
        <h4 style={{textAlign: 'center'}}>Will be updated Soon...</h4>
      </div>
    )
}
