import React from 'react'
import StyledHero from './StyledHero'
import Banner from './Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/home.module.css'
import Staff from './Staff'

const Home = ({title, description}) => {
    return (
        <div>
            <StyledHero home="true">
                <Banner title="Rhyme Time" info={description}>
                    <button className={styles.btn}>
                        <AniLink className={styles.link} fade to="/about">
                            know more about us
                        </AniLink>
                    </button>
                </Banner>
            </StyledHero>
            <Staff />
        </div>
    )
}

export default Home