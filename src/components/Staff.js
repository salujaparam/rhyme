import React from 'react'
import styles from '../css/players.module.css'
import staff from '../constants/staff'

const Staff = () => {
    return (
        <section className={styles.services}>
            <div className={styles.center}>
                {
                    staff.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <h4>{item.name}</h4>
                                <img src={item.image} alt={item.name} className={styles.crop} />
                                <p>{item.about}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Staff