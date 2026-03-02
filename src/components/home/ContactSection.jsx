// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';

// const ContactSection = () => {
//   const whatsappNumber = "919898898219";
//   const message = encodeURIComponent("Hello! I am interested in your processing plant solutions.");

//   return (
//     <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           {/* --- Left Side: Contact Info (Centered on Mobile) --- */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10"
//           >
//             <div>
//               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
//                 GET IN <span className="text-[#D4AF37]">TOUCH</span>
//               </h2>
//               <p className="text-slate-500 max-w-md mx-auto lg:mx-0">
//                 Have a project in mind? Our team of experts is ready to help you scale your processing facility with precision engineering.
//               </p>
//             </div>

//             <div className="space-y-8 w-full">
//               {/* Address */}
//               <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
//                 <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Office Address</h4>
//                   <p className="text-slate-600 text-sm leading-relaxed">
//                     State Highway No. 41, Industrial Area,<br /> Patan, Gujarat - 384151
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
//                 <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
//                   <p className="text-slate-600 font-medium text-lg">+91 98988 98219</p>
//                 </div>
//               </div>

//               {/* WhatsApp CTA */}
//               <div className="pt-4">
//                 <motion.a 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={`https://wa.me/${whatsappNumber}?text=${message}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all"
//                 >
//                   <MessageCircle size={20} fill="white" />
//                   <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">Chat on WhatsApp</span>
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//           {/* --- Right Side: Contact Form --- */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-[#FBFBFB] p-6 md:p-10 border border-slate-100 shadow-sm rounded-sm"
//           >
//             <form className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div className="space-y-1">
//                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
//                   <input 
//                     type="email" 
//                     className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
//                     placeholder="name@company.com"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
//                 <input 
//                   type="tel" 
//                   className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
//                   placeholder="+91 00000 00000"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requirement Description</label>
//                 <textarea 
//                   rows="4" 
//                   className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm resize-none"
//                   placeholder="How can we assist you?"
//                 ></textarea>
//               </div>

//               <motion.button 
//                 whileHover={{ backgroundColor: '#B8952E' }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-[#D4AF37] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[11px] transition-colors shadow-md mt-4"
//               >
//                 Send Message
//                 <Send size={14} />
//               </motion.button>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const whatsappNumber = "919898898219";
  const whatsappMessage = encodeURIComponent("Hello! I am interested in your processing plant solutions.");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Prepare data for API
    const apiData = {
      fullName: formData.fullName,
      companyName: '', // Not collected in this form, sending empty string
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      productName: "Contact Form Inquiry" // Default value
    };

    try {
      const response = await fetch('https://arman-backend-cwew.onrender.com/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 3000);
      } else {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
        
        // Auto clear error after 5 seconds
        setTimeout(() => setSubmitError(''), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
      
      // Auto clear error after 5 seconds
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Side: Contact Info (Centered on Mobile) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                GET IN <span className="text-[#D4AF37]">TOUCH</span>
              </h2>
              <p className="text-slate-500 max-w-md mx-auto lg:mx-0">
                Have a project in mind? Our team of experts is ready to help you scale your processing facility with precision engineering.
              </p>
            </div>

            <div className="space-y-8 w-full">
              {/* Address */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    State Highway No. 41, Industrial Area,<br /> Patan, Gujarat - 384151
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
                  <p className="text-slate-600 font-medium text-lg">+91 98988 98219</p>
                  <p className="text-slate-600 font-medium text-lg">+91 9998551985</p>

                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle size={20} fill="white" />
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">Chat on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FBFBFB] p-6 md:p-10 border border-slate-100 shadow-sm rounded-sm"
          >
            {/* Success Message */}
            {submitSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-2">THANK YOU!</h3>
                <p className="text-slate-500 text-sm">
                  Your message has been sent successfully. We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Message */}
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-sm">
                    <p className="text-red-600 text-xs font-bold text-center">{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requirement Description</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm resize-none"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ backgroundColor: '#B8952E' }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-[#D4AF37] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[11px] transition-colors shadow-md mt-4 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;