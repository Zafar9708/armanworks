import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, 
  Facebook, Linkedin, Instagram, Twitter,
 MessageCircle,
  CheckCircle, Award, 
  Navigation, Compass, Copy, ExternalLink,
  ArrowRight, Sparkles, Building2,
  AlertCircle, Star, ThumbsUp,
  Car, Train, Plane, Bike,  Navigation2,
  Info,  Users, Target
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState('car');
  const [showDirections, setShowDirections] = useState(false);

  // Main Location - Sidhpur (Your only office)
  const officeLocation = {
    name: 'Arman Engineering',
    fullAddress: 'State Highway No. 41, Industrial Area, Sujanpur - Sidhpur, Patan, Gujarat 384151',
    address: 'State Highway No. 41, Industrial Area',
    area: 'Sujanpur - Sidhpur',
    city: 'Patan',
    state: 'Gujarat',
    pincode: '384151',
    landmark: 'Near Sidhpur Industrial Estate',
    lat: 23.9164,
    lng: 72.3716,
    phone: '+91 99985 51985',
    phone2: '+91 2767 123456',
    email: 'info@armaneng.com',
    email2: 'sales@armaneng.com',
    hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
    sunday: 'Sunday: Closed'
  };

  const encodedAddress = encodeURIComponent(officeLocation.fullAddress);
  
  // Professional Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  
  // Fallback map URL (works without API key)
  const fallbackMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674!2d${officeLocation.lng}!3d${officeLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzU5LjAiTiA3MsKwMjInMTcuOCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`;

  // Directions from major cities
  const directions = {
    fromAhmedabad: {
      byCar: 'Take NH47 towards Mehsana → Unjha → Sidhpur. Turn right at SH41, continue 2km to Industrial Area.',
      byTrain: 'Take a train to Sidhpur Railway Station (2km from our office). Auto-rickshaws available.',
      byBus: 'GSRTC buses available from Ahmedabad to Sidhpur. Get off at Sidhpur bus stand.'
    },
    fromMehsana: {
      byCar: 'Take SH41 towards Unjha → Sidhpur. Continue straight to Industrial Area.',
      byTrain: 'Take a train to Sidhpur Railway Station. Auto-rickshaws available from station.'
    },
    fromPalanpur: {
      byCar: 'Take NH27 to Unjha → Sidhpur. Turn right at SH41.',
      byTrain: 'Train available to Sidhpur Railway Station via Unjha.'
    }
  };

  // Nearby landmarks
  const landmarks = [
    { name: 'Sidhpur Railway Station', distance: '2 km', time: '5 mins' },
    { name: 'Sidhpur Bus Stand', distance: '2.5 km', time: '7 mins' },
    { name: 'Unjha City', distance: '12 km', time: '20 mins' },
    { name: 'Mehsana City', distance: '35 km', time: '45 mins' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transportModes = [
    { id: 'car', icon: Car, label: 'By Car' },
    { id: 'train', icon: Train, label: 'By Train' },
    { id: 'bus', icon: Plane, label: 'By Bus' },
    { id: 'auto', icon: Bike, label: 'Auto/Bike' }
  ];

  const quickStats = [
    { icon: MapPin, value: 'Sidhpur', label: 'Industrial Area' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Target, value: '50+', label: 'Projects' }
  ];

  const features = [
    { icon: ThumbsUp, text: 'Free Site Visit' },
    { icon: Navigation, text: 'Easy to Locate' },
    { icon: Star, text: '5 Star Rating' },
    { icon: Clock, text: 'Quick Response' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Clean & Professional */}
        <section className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles size={14} />
                <span>Visit Our Facility</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4">
                Get <span className="font-bold text-[#D4AF37]">Directions</span> to Our Office
              </h1>
              
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Located in Sidhpur Industrial Area. Use the interactive map and directions below to find us easily.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Column - Office Info (2/5 width) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Main Office Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  {/* Header with Location Name */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6">
                    <h2 className="text-xl font-medium text-white flex items-center gap-2">
                      <Building2 size={20} className="text-[#D4AF37]" />
                      {officeLocation.name}
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">{officeLocation.landmark}</p>
                  </div>

                  {/* Contact Details */}
                  <div className="p-6 space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400 mb-1">Complete Address</p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {officeLocation.address}<br />
                          {officeLocation.area}<br />
                          {officeLocation.city}, {officeLocation.state} - {officeLocation.pincode}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => copyToClipboard(officeLocation.fullAddress)}
                            className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-slate-600 transition-colors flex items-center gap-1"
                          >
                            <Copy size={12} />
                            {copied ? 'Copied!' : 'Copy Address'}
                          </button>
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-[#D4AF37] text-white px-3 py-1.5 rounded-lg hover:bg-slate-900 transition-colors flex items-center gap-1"
                          >
                            <Navigation size={12} />
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400 mb-1">Phone Numbers</p>
                        <a href={`tel:${officeLocation.phone}`} className="text-sm text-slate-700 hover:text-[#D4AF37] block mb-1">
                          {officeLocation.phone}
                        </a>
                        <a href={`tel:${officeLocation.phone2}`} className="text-sm text-slate-700 hover:text-[#D4AF37] block">
                          {officeLocation.phone2}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400 mb-1">Email Addresses</p>
                        <a href={`mailto:${officeLocation.email}`} className="text-sm text-slate-700 hover:text-[#D4AF37] block mb-1">
                          {officeLocation.email}
                        </a>
                        <a href={`mailto:${officeLocation.email2}`} className="text-sm text-slate-700 hover:text-[#D4AF37] block">
                          {officeLocation.email2}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400 mb-1">Working Hours</p>
                        <p className="text-sm text-slate-700">{officeLocation.hours}</p>
                        <p className="text-xs text-slate-500">{officeLocation.sunday}</p>
                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                          Open Now (Mon-Sat)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="border-t border-slate-100 p-6 bg-slate-50">
                    <p className="text-xs font-medium text-slate-400 mb-3">Quick Actions</p>
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href={`tel:${officeLocation.phone}`}
                        className="bg-white border border-slate-200 hover:border-[#D4AF37] text-slate-700 hover:text-[#D4AF37] p-3 rounded-lg text-xs font-medium transition-colors flex flex-col items-center gap-1"
                      >
                        <Phone size={16} />
                        Call
                      </a>
                      <a
                        href={`https://wa.me/919998551985`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-slate-200 hover:border-green-500 text-slate-700 hover:text-green-500 p-3 rounded-lg text-xs font-medium transition-colors flex flex-col items-center gap-1"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </a>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-500 p-3 rounded-lg text-xs font-medium transition-colors flex flex-col items-center gap-1"
                      >
                        <Navigation size={16} />
                        Navigate
                      </a>
                    </div>
                  </div>
                </div>

                {/* Nearby Landmarks */}
               

                {/* Features */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                            <Icon size={12} className="text-[#D4AF37]" />
                          </div>
                          <span className="text-xs text-slate-600">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-sm font-medium text-slate-900 mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-[#1877f2]' },
                      { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0a66c2]' },
                      { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
                      { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-[#1da1f2]' }
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 ${social.color} hover:text-white transition-all`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={16} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Map & Directions (3/5 width) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 space-y-6"
              >
                {/* Map Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Compass size={18} className="text-[#D4AF37]" />
                      <h3 className="font-medium text-slate-900">Interactive Map</h3>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  
                  <div className="relative h-[400px] w-full">
                    <iframe
                      title="Arman Engineering Location"
                      src={fallbackMapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                    
                    {/* Location Marker Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-slate-700">You are here</span>
                    </div>

                    {/* Direction Button Overlay */}
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => setShowDirections(!showDirections)}
                        className="bg-white shadow-lg rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Navigation2 size={16} />
                        {showDirections ? 'Hide Directions' : 'Show Directions'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Directions Panel */}
                <AnimatePresence>
                  {showDirections && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center gap-2">
                          <Navigation2 size={20} className="text-[#D4AF37]" />
                          How to Reach Us
                        </h3>

                        {/* Transport Mode Selector */}
                        <div className="flex gap-2 mb-6">
                          {transportModes.map((mode) => {
                            const Icon = mode.icon;
                            return (
                              <button
                                key={mode.id}
                                onClick={() => setSelectedTransport(mode.id)}
                                className={`flex-1 p-3 rounded-lg border transition-all flex flex-col items-center gap-1 ${
                                  selectedTransport === mode.id
                                    ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37]'
                                    : 'border-slate-200 text-slate-500 hover:border-slate-300'
                                }`}
                              >
                                <Icon size={20} />
                                <span className="text-xs">{mode.label}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Directions Content */}
                        <div className="space-y-4">
                          {/* From Ahmedabad */}
                          <div className="bg-slate-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                              From Ahmedabad (120 km)
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {selectedTransport === 'car' && directions.fromAhmedabad.byCar}
                              {selectedTransport === 'train' && directions.fromAhmedabad.byTrain}
                              {selectedTransport === 'bus' && directions.fromAhmedabad.byBus}
                              {selectedTransport === 'auto' && 'Auto-rickshaws available from Sidhpur Railway Station (2 km). Approximate fare: ₹50-70.'}
                            </p>
                          </div>

                          {/* From Mehsana */}
                          <div className="bg-slate-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                              From Mehsana (35 km)
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {selectedTransport === 'car' && directions.fromMehsana.byCar}
                              {selectedTransport === 'train' && directions.fromMehsana.byTrain}
                              {selectedTransport === 'bus' && 'Frequent GSRTC buses available from Mehsana to Sidhpur (30-40 mins).'}
                              {selectedTransport === 'auto' && 'Share autos available from Mehsana to Sidhpur (₹80-100).'}
                            </p>
                          </div>

                          {/* From Palanpur */}
                          <div className="bg-slate-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                              From Palanpur (65 km)
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {selectedTransport === 'car' && directions.fromPalanpur.byCar}
                              {selectedTransport === 'train' && directions.fromPalanpur.byTrain}
                              {selectedTransport === 'bus' && 'Direct buses available from Palanpur to Sidhpur (approx 1.5 hours).'}
                              {selectedTransport === 'auto' && 'Take a train to Sidhpur station, then auto to our facility.'}
                            </p>
                          </div>

                          {/* Local Transport */}
                          <div className="bg-[#D4AF37]/5 p-4 rounded-xl border border-[#D4AF37]/20">
                            <h4 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
                              <Info size={16} className="text-[#D4AF37]" />
                              Local Transport Options
                            </h4>
                            <ul className="text-sm text-slate-600 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                                <span>Auto-rickshaws available from Sidhpur Railway Station (₹50-70)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                                <span>City buses from Sidhpur bus stand to Industrial Area (₹10-15)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                                <span>Taxi services available - call us for pickup arrangements</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#D4AF37] text-white py-3 rounded-xl font-medium hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                          >
                            <Navigation size={16} />
                            Start Navigation
                          </a>
                          <a
                            href="tel:+919998551985"
                            className="flex-1 border border-slate-200 text-slate-700 py-3 rounded-xl font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-2"
                          >
                            <Phone size={16} />
                            Call for Help
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h2 className="text-xl font-light text-slate-900 mb-1">
                    Send a <span className="font-bold text-[#D4AF37]">Message</span>
                  </h2>
                  <p className="text-sm text-slate-500 mb-6">
                    We'll get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Full Name *"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email Address *"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Phone Number *"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject (e.g., Site Visit)"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Tell us about your requirements... *"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#D4AF37] text-white py-3.5 font-medium rounded-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    {/* Form Status */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 text-green-600 text-sm p-4 rounded-xl flex items-center gap-2"
                      >
                        <CheckCircle size={16} />
                        Message sent successfully! We'll contact you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 text-red-500 text-sm p-4 rounded-xl flex items-center gap-2"
                      >
                        <AlertCircle size={16} />
                        Failed to send message. Please try again or call us directly.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Banner */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Need Help Finding Us?{' '}
                    <span className="font-bold text-[#D4AF37]">Call Us</span>
                  </h3>
                  <p className="text-sm text-slate-400">
                    Our team can guide you with directions or arrange a pickup
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="tel:+919998551985"
                    className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} />
                    +91 99985 51985
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Action Button */}
        <motion.a
          href="https://wa.me/919998551985"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;