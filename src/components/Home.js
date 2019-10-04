import React from 'react'
import StyledHero from './StyledHero'
import Banner from './Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Home = (props) => {
    return (
        <div>
            <StyledHero home="true">
                <Banner title="About" info="Join us">
                    <AniLink fade to="/about">
                        here
                    </AniLink>
                </Banner>
            </StyledHero>
            <p>More coming up</p>
        </div>
    )
}

export default Home