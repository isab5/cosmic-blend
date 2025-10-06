"use client";
import styles from './contact.module.css';
import { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(
            `Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
        );
        setForm({ name: '', email: '', message: '' });
    }

    return (
        <div className={styles.cosmicBg}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contact the Cosmic Blend Devoloper</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.field}
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        className={styles.field}
                        type="email"
                        name="email"
                        placeholder="Your e-mail"
                        required
                        value={form.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className={styles.field}
                        name="message"
                        placeholder="Your message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">Send Message</button>
                </form>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Follow Me</h4>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/isaj333j6?igsh=MWMxd2Q5OGdvOGJiNg==" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://github.com/isab5" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}