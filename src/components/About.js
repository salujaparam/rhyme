import React from 'react'
import Classes from './Classes'
import StyledHero from './StyledHero'
import Message from './Message'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    aboutImage:file(relativePath: {eq:"activities.jpg"}){
      childImageSharp{
        fluid(maxWidth: 600){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
    const {aboutImage} = useStaticQuery(query);
    return (
        <div>
            <StyledHero img={aboutImage.childImageSharp.fluid} />
            <Message />
            <Classes />
        </div>
    )
}

export default About