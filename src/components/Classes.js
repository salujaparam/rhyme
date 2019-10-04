import React from 'react'
import classes from '../constants/classes'
import styles from '../css/classes.module.css'
import Title from './Title'

export default function Classes() {
    return (
        <div>
            <Title title="Classes and " subtitle="Curriculum" className={styles.title}/>
            {classes.map((item, index) => {
                return (
                    <article key={index} className={styles.contain}>
                        <img src={item.img} alt={item.class} />
                        <div>
                            <h2 className={styles.class}>{item.class}</h2>
                            <h4 className={styles.age}>{item.ageGroup} yrs</h4>
                            <p>{item.description}</p>
                            {item.class !== classes[classes.length -1].class ? <hr /> : null}
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
