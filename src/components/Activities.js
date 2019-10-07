import React , {Fragment} from 'react'
import StyledHero from './StyledHero'
import { useStaticQuery, graphql } from 'gatsby'
import Title from './Title';
import durgaPuja from '../constants/durgaPuja'
import sports from '../constants/sports'
import styles from '../css/activities.module.css'
// import DurgaPuja from './DurgaPuja';

const query = graphql`
  {
    aboutImage:file(relativePath: {eq:"activitiess.jpg"}){
      childImageSharp{
        fluid(maxWidth: 600){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function Activities() {
    const {aboutImage} = useStaticQuery(query);
    return (
        <Fragment>
            <StyledHero img={aboutImage.childImageSharp.fluid} />
            <Title title="Durga Puja" subtitle="Celebration" />
            <div className={styles.imgContainer}>
            {
              durgaPuja.map((item, index) => {
                return <img src={item} className={styles.img} key={index} alt="durga puja" />
              })
            }
            </div>
            <Title title="Sports" subtitle="Day" />
            <div className={styles.imgContainer}>
            {
              sports.map((item, index) => {
                return <img src={item} className={styles.img} key={index} alt="sports day" />
              })
            }
            </div>
        </Fragment>
    )
}
