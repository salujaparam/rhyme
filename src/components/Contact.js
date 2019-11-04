import React from 'react'
import Title from './Title'
import styles from '../css/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.center}>
            <Title title="Get in touch" subtitle="with us" />
            <div>
                <p>We provide vaious facilities such as Transport Facility, Assesment Cards for your child, Parents Orientation and more. Contact us to know more.</p>
                <p>Call Us: +91 73659 89080, +91 98322 44137</p>
            </div>
        </div>
    )
}
