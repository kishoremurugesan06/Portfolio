import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#e01020', '#ff1a2e', '#0a0a12', '#ffffff']
      });
    } catch {
      // ignore
    }

    // Prepare formatted mailto link
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'N/A'}\n\nMessage:\n${formData.message}`
    )}`;

    // Try Netlify Form submission if hosted on Netlify
    try {
      const encode = (data) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      }).catch(() => {});
    } catch {
      // ignore
    }

    // Launch mail client so message is directly prepared for sending
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 8000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="finale">
          <h2 className="finale-title" id="finaleTitle">
            <span className="line"><span className="line-inner">Let's build</span></span>
            <span className="line"><span className="line-inner"><em>something great.</em></span></span>
          </h2>
          <p className="finale-sub">
            Have an opportunity, enterprise project in mind, or want to collaborate? Reach out — I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct channels card */}
          <div className="contact-card">
            <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div>
                <div className="l">Call / SMS</div>
                <div className="v">{personal.phone}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${personal.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.855L0 24l6.334-1.491A11.926 11.926 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.516-5.16-1.415l-.37-.219-3.76.886.924-3.65-.24-.382A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <div className="l">WhatsApp</div>
                <div className="v">{personal.phone}</div>
              </div>
            </a>

            <a href={`mailto:${personal.email}`} className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="l">Email</div>
                <div className="v">{personal.email}</div>
              </div>
            </a>
          </div>

          {/* Social block & Strengths */}
          <div className="social-block">
            <div className="h">Find me online</div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {personal.linkedinUsername}
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {personal.githubUsername}
            </a>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '.7rem',
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: 'var(--red)',
                marginTop: '16px'
              }}
            >
              Strengths
            </div>
            <div className="strengths">
              {personal.strengths.map((str, idx) => (
                <span className="tag" key={idx}>
                  {str}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="max-w-[900px] mx-auto mt-10 p-8 rounded-2xl bg-white border border-[rgba(10,10,20,0.08)] shadow-[0_4px_12px_rgba(10,10,20,0.05)]">
          <h3 className="font-display font-bold text-lg text-ink mb-2">Send a Message</h3>
          <p className="text-sm text-ink-soft mb-6">
            Feel free to send a direct inquiry. I'll get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="p-5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium flex items-start gap-3 animate-in fade-in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-green-600 mt-0.5 shrink-0">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <div className="font-bold text-green-900 mb-0.5">Message Ready &amp; Prepared!</div>
                <div>Your email client has been launched with your inquiry addressed to <strong>{personal.email}</strong>. Simply click Send!</div>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Hidden Netlify field for seamless automated hosting deployment */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,10,20,0.12)] bg-[#fafafd] text-ink text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,10,20,0.12)] bg-[#fafafd] text-ink text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,10,20,0.12)] bg-[#fafafd] text-ink text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,10,20,0.12)] bg-[#fafafd] text-ink text-sm focus:outline-none focus:border-red-500 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? 'Preparing Message...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 ml-1">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
