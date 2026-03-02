// components/RequestQuoteModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, CheckCircle, MessageCircle } from 'lucide-react';

const RequestQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const whatsappNumber = "919898898219"; // Without + sign for URL
  const whatsappMessage = encodeURIComponent("Hello! I am interested in your processing plant solutions.");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://arman-backend-cwew.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setIsSubmitted(true);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            product: '',
            quantity: '',
            message: ''
          });
          setError('');
        }, 3000);
      } else {
        setIsLoading(false);
        setError(data.message || 'Failed to submit. Please try again.');
        
        // Auto clear error after 5 seconds
        setTimeout(() => setError(''), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      setError('Network error. Please check your connection and try again.');
      
      // Auto clear error after 5 seconds
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[100]"
          />

          {/* Modal - Made taller with max-height and scrolling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white w-full max-w-2xl shadow-2xl overflow-hidden rounded-sm max-h-[90vh] flex flex-col">
              
              {isSubmitted ? (
                /* Success State */
                <div className="p-12 text-center flex-1 overflow-y-auto">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-3">THANK YOU!</h3>
                  <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                    Your enquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="bg-[#D4AF37] text-white px-10 py-3 font-bold tracking-[0.15em] uppercase text-xs hover:bg-slate-900 transition-colors rounded-sm"
                  >
                    Close
                  </motion.button>
                </div>
              ) : (
                /* Form - Scrollable content */
                <>
                  {/* Header - Fixed at top */}
                  <div className="bg-[#FBFBFB] p-6 border-b border-slate-100 flex-shrink-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                          REQUEST A <span className="text-[#D4AF37]">QUOTE</span>
                        </h2>
                        <p className="text-slate-500 text-sm mt-1 max-w-md">
                          Fill in your details and we'll get back to you within 24 hours
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <X size={20} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-sm">
                      <p className="text-red-600 text-xs font-bold text-center">{error}</p>
                    </div>
                  )}

                  {/* Scrollable Form Body */}
                  <div className="p-6 bg-white overflow-y-auto flex-1">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Personal Information Section */}
                      <div>
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 pb-1 border-b border-slate-200">
                          PERSONAL INFORMATION
                        </h3>
                        
                        {/* Name Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Full Name <span className="text-[#D4AF37]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm"
                            placeholder="Enter your name"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Email Address <span className="text-[#D4AF37]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm"
                            placeholder="name@company.com"
                          />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Phone Number <span className="text-[#D4AF37]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        {/* Company Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm"
                            placeholder="Your Company (Optional)"
                          />
                        </div>
                      </div>

                      {/* Product Details Section */}
                      <div>
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 pb-1 border-b border-slate-200">
                          PRODUCT DETAILS
                        </h3>

                        {/* Product Selection */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Product/Service Interested In <span className="text-[#D4AF37]">*</span>
                          </label>
                          <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm appearance-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23999\'%3E%3Cpath strokeLinecap=\'round\' strokeLinejoin=\'round\' strokeWidth=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                          >
                            <option value="">Select a product</option>
                            <option value="gravity-separator">Gravity Separator</option>
                            <option value="dal-mill">Dal Mill Plant</option>
                            <option value="rice-mill">Rice Mill Plant</option>
                            <option value="flour-mill">Flour Mill Plant</option>
                            <option value="oil-mill">Oil Mill Plant</option>
                            <option value="conveyor">Conveyor System</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Quantity Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Quantity Required
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm rounded-sm"
                            placeholder="e.g., 1 unit, 100 kg, etc. (Optional)"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-1 mb-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Additional Message <span className="text-[#D4AF37]">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full bg-[#FBFBFB] border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm resize-none rounded-sm"
                            placeholder="Tell us more about your requirements..."
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ backgroundColor: '#B8952E' }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-[#D4AF37] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[11px] transition-colors shadow-md ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            SENDING...
                          </>
                        ) : (
                          <>
                            SEND REQUEST
                            <Send size={14} />
                          </>
                        )}
                      </motion.button>

                      {/* WhatsApp Option */}
                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-4 text-slate-400 text-[10px] font-black tracking-widest">OR</span>
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[11px] hover:bg-[#20BA5C] transition-colors shadow-md"
                      >
                        <MessageCircle size={18} fill="white" />
                        CHAT ON WHATSAPP
                      </motion.a>

                      {/* Contact Info */}
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Phone size={12} />
                            +91 9898898219
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail size={12} />
                            info@armaneng.com
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RequestQuoteModal;