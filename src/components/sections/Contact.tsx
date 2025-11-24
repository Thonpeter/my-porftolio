'use client';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'thonawangjr@gmail.com',
    href: 'mailto:thonawangjr@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+211 920592410',
    href: 'tel:+211920592410',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Juba, South Sudan',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/thon-peter',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Thonpeter',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.98', 'end 0.02'],
  });

  // Content stays fully visible almost the entire time, only subtle fade at very edges
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [30, 0, 0, -30]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        reset();
      } else {
        // Handle specific error cases
        if (result.error === 'SMTP_NOT_CONFIGURED') {
          toast.error(
            <div>
              <p className="font-semibold">Email service not configured.</p>
              <p className="text-sm">Please contact me directly at thonawangjr@gmail.com</p>
            </div>,
            { autoClose: 8000 }
          );
        } else {
          toast.error(result.message || 'Failed to send message. Please try again or contact me directly via email.');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Network error. Please check your connection and try again, or contact me directly at thonawangjr@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      style={{ 
        opacity: inView ? 1 : opacity,
        y: inView ? 0 : y 
      }}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-gray-900/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 glass rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600"
                    >
                      <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 transition-colors duration-300">
                        <Icon className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-300" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-gray-800 dark:text-white font-semibold">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-indigo-600 dark:text-indigo-400"
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 glass text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 glass text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 glass text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.section>
  );
}

