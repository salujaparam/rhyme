import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <h1>
                    <AniLink className={styles.title} fade to="/">Rhyme Time</AniLink>
                </h1>
                <ul className={`${styles.navLinks}`}>
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={item.path}>
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
