'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; success: boolean } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback({
          text: 'Message received. I will reply to you as soon as possible.',
          success: true,
        });
        reset();
      } else {
        setFeedback({
          text: result.message || 'Could not send through form. Please write directly to thonawangjr@gmail.com',
          success: false,
        });
      }
    } catch {
      setFeedback({
        text: 'Network issue. Please email directly at thonawangjr@gmail.com',
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column - Direct Channels */}
        <div className="md:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Available for software engineering roles, educational technology initiatives, curriculum development, and technical consulting.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Direct Email
              </span>
              <a
                href="mailto:thonawangjr@gmail.com"
                className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                thonawangjr@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Phone / WhatsApp
              </span>
              <a
                href="tel:+211920592410"
                className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +211 920 592 410
              </a>
            </div>

            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Location
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                Juba, South Sudan (UTC+2)
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Profiles & Code
            </span>
            <div className="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href="https://github.com/Thonpeter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/thon-peter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Quiet Minimalist Form */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="e.g. Sarah Miller"
                  className="w-full px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="name@organization.org"
                  className="w-full px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Subject (Optional)
              </label>
              <input
                type="text"
                {...register('subject')}
                placeholder="Project consultation / Engineering opportunity"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                {...register('message', { required: 'Message cannot be empty' })}
                placeholder="Briefly describe what you're working on or want to discuss..."
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-950 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {feedback && (
              <p
                className={`text-sm mt-3 ${
                  feedback.success
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-amber-600 dark:text-amber-400'
                }`}
              >
                {feedback.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
