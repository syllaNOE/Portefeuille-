import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import Button from '../components/shared/Button';
import { Send, Mail, Phone, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xyyaezod"); // Replace with your own Formspree form ID
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: t('contact.info.email'),
      href: `mailto:${t('contact.info.email')}`
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: t('contact.info.phone'),
      href: `tel:${t('contact.info.phone').replace(/\s/g, '')}`
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: t('contact.info.linkedin'),
      href: 'https://linkedin.com/in/nouho-sylla'
    }
  ];
  
  return (
    <PageTransition>
      <Section 
        title={t('contact.title')}
        subtitle="Feel free to reach out for collaborations or inquiries"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <span className="text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-text-light text-sm">{item.label}</p>
                    <a 
                      href={item.href}
                      target={item.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Optional Map */}
            <div className="relative h-64 rounded-lg overflow-hidden border border-border bg-background-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722638947!2d2.2770201461828623!3d48.85883773948101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1635683564366!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background-light p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
              
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-success/10 border border-success/30 text-success p-4 rounded-md mb-6"
                >
                  <p className="font-medium">{t('contact.success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                        {t('contact.name')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                        {t('contact.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
                        {t('contact.subject')}
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    <Send size={18} className="mr-2" />
                    {state.submitting ? 'Sending...' : t('contact.send')}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default ContactPage;