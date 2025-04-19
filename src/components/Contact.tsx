import React, { useState } from 'react';
import { Mail, Send, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID from environment variable
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear any previous errors when user makes changes
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setError(null);
  //   setIsSubmitted(true);

  // }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send email using EmailJS with environment variables
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'arethibala@gmail.com',
        }
      );
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email sending failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Interested in commissioning a piece, purchasing a print, or collaborating on a project? 
              Fill out the form or reach out directly using the contact information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-terracotta" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">arethibala@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-medium text-gray-900">Follow On Instagram</h3>
                <a 
                  href="https://www.instagram.com/art__ethi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta/80 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="flex space-x-6 mb-6 text-sm">
                <span className="text-gray-900"><strong>114</strong> posts</span>
                <span className="text-gray-900"><strong>323</strong> followers</span>
                <span className="text-gray-900"><strong>198</strong> following</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src="https://images.pexels.com/photos/6469342/pexels-photo-6469342.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Instagram post" 
                  className="w-full aspect-square object-cover rounded-md hover:opacity-90 transition-opacity"
                />
                <img 
                  src="https://images.pexels.com/photos/13090647/pexels-photo-13090647.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Instagram post" 
                  className="w-full aspect-square object-cover rounded-md hover:opacity-90 transition-opacity"
                />
                <img 
                  src="https://images.pexels.com/photos/10421787/pexels-photo-10421787.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Instagram post" 
                  className="w-full aspect-square object-cover rounded-md hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-cream p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-medium text-green-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md">
                <p className="font-medium">Thank you for your message!</p>
                <p className="mt-1">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
                    {error}
                  </div>
                )}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  >
                    <option value="">Select a subject</option>
                    <option value="Commission">Commission Inquiry</option>
                    <option value="Purchase">Purchase Artwork</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center transition-colors"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;