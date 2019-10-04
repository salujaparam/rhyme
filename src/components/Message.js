import React from 'react'
import Title from './Title'
import img from '../images/default.jpg'
import styles from '../css/message.module.css'

export default function Message() {
    return (
        <section>
            <Title title="Message from" subtitle="the principal" className={styles.title} />
            <div className={styles.contain}>
                <img src={img} alt="Principal" className={styles.image} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>
        </section>
    )
}
