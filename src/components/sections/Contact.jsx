import { useRef, useState } from "react";
import {
    FaCheck,
    FaCopy,
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaPaperPlane,
    FaWhatsapp,
} from "react-icons/fa";
import { WHATSAPP_URL } from "../../constants/contact.js";

const EMAIL = "vedantmh48@gmail.com";

export default function Contact() {
    const formRef = useRef(null);
    const [formStatus, setFormStatus] = useState({ type: "", text: "" });
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setFormStatus({ type: "success", text: "Email address copied to your clipboard." });
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
            setFormStatus({ type: "error", text: "Could not copy the address. Use the email link instead." });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const name = form.contactName.value.trim();
        const email = form.contactEmail.value.trim();
        const subject = form.contactSubject.value.trim();
        const message = form.contactMessage.value.trim();

        if (!name || !email || !subject || !message) {
            setFormStatus({ type: "error", text: "Please fill in all fields." });
            return;
        }

        const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;
        setFormStatus({ type: "success", text: "Opening your email client..." });
        form.reset();
    };

    return (
        <section className="contact" id="contact" data-section="08">
            <div className="container">
                <div className="contact-section-header" data-reveal>
                    <p className="section-label center"><span className="label-index">08</span>Let's Connect</p>
                    <h2 className="section-title center">
                        Have a project in mind?
                        <em className="accent-gradient">Let's talk.</em>
                    </h2>
                    <p className="contact-subtitle">
                        Tell me what you are building, and let&apos;s make something meaningful together.
                    </p>
                </div>

                <div className="contact-modern-grid">
                    <div className="contact-info-panel" data-reveal>
                        <div className="contact-status-card">
                            <span className="pulse-dot" aria-hidden="true"></span>
                            <div>
                                <strong>Available for new projects</strong>
                                <small>Have a question or idea? I&apos;d love to hear from you.</small>
                            </div>
                        </div>

                        <div className="contact-methods">
                            <div className="contact-method-card">
                                <span className="method-icon-wrap"><FaEnvelope aria-hidden="true" /></span>
                                <div className="method-details">
                                    <span className="method-label">Email</span>
                                    <a className="method-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                    <span className="method-sub">Best for project inquiries</span>
                                </div>
                                <button
                                    type="button"
                                    className={`method-action-btn${copied ? " is-copied" : ""}`}
                                    onClick={handleCopyEmail}
                                    aria-label="Copy email address"
                                >
                                    {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                                    {copied ? "Copied" : "Copy"}
                                </button>
                            </div>
                            <a className="contact-method-card" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                <span className="method-icon-wrap whatsapp"><FaWhatsapp aria-hidden="true" /></span>
                                <span className="method-details">
                                    <span className="method-label">WhatsApp</span>
                                    <span className="method-value">Start a conversation</span>
                                    <span className="method-sub">Message me directly</span>
                                </span>
                                <span className="method-action-btn link">Chat ↗</span>
                            </a>
                        </div>

                        <div className="contact-social-section">
                            <span className="social-section-title">Find me online</span>
                            <div className="contact-social-row">
                                <a className="contact-social-chip" href="https://github.com/vedantmh48-cpu" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="chip-icon" aria-hidden="true" /> GitHub <span className="chip-arrow">↗</span>
                                </a>
                                <a className="contact-social-chip" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="chip-icon" aria-hidden="true" /> LinkedIn <span className="chip-arrow">↗</span>
                                </a>
                                <a className="contact-social-chip" href="https://www.instagram.com/v1dant_14/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="chip-icon" aria-hidden="true" /> Instagram <span className="chip-arrow">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel" data-reveal>
                        <div className="contact-form-card">
                            <div className="form-card-header">
                                <h3>Send a message</h3>
                                <p>Share a few details and I&apos;ll get back to you.</p>
                            </div>
                            <form ref={formRef} onSubmit={handleSubmit} className="modern-contact-form">
                                <div className="form-grid-2">
                                    <div className="form-field">
                                        <label htmlFor="contactName">Name</label>
                                        <input type="text" id="contactName" name="contactName" placeholder="Your name" required />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="contactEmail">Email</label>
                                        <input type="email" id="contactEmail" name="contactEmail" placeholder="you@email.com" required />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" id="contactSubject" name="contactSubject" placeholder="What can I help with?" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="contactMessage">Message</label>
                                    <textarea id="contactMessage" name="contactMessage" rows="5" placeholder="Tell me about your project..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary contact-submit-btn" data-cursor="button">
                                    Send Message <FaPaperPlane aria-hidden="true" />
                                </button>
                                {formStatus.text && (
                                    <p className={`form-status-banner ${formStatus.type}`} role={formStatus.type === "error" ? "alert" : "status"}>
                                        {formStatus.text}
                                    </p>
                                )}
                                <p className="form-privacy-note">This opens your email app to send the message directly.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
