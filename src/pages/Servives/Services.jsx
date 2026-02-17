import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Factory, Wheat, Droplets, Wind, Package,
  Fan, Building2, Cpu, Shield, Settings, Zap, ArrowRight,
  X, Send, Phone, Mail, Box, LayoutGrid, Cog, Filter, Gauge, Hammer,
  Move, Eye, Star, Clock, Award, Users, TrendingUp, CheckCircle,
  FileText, Download, MapPin, Globe,
  Search, Grid, List, Layers, Compass, Target, PenTool,
  IndianRupee, MessageCircle, FileDown, Calendar, CircleCheckBig,
  Briefcase, Truck, HeadphonesIcon, Wrench, ThumbsUp, HeartHandshake,
  Trophy, Leaf, TrendingUp as TrendUp, Sun, Moon, Menu,
  Quote, Sparkles, Rocket, Gem, Diamond, Crown, Medal,
  ThumbsUp as ThumbUp, CheckCircle2, HelpCircle, BookOpen,
  UserCheck, Clock3, ShieldCheck, Heart, Star as StarIcon
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [selectedPriceService, setSelectedPriceService] = useState(null);
  const [brochureLoading, setBrochureLoading] = useState(null);

  const services = [
    {
      id: 1,
      name: "Dal Mills Plant Installation Services",
      category: "plant",
      price: "1,80,000",
      priceUnit: "unit",
      description: "Being one of the best organizations, we are offering Dal Mills Plant Installation Services. This service is executed by our skilled professionals using high grade tools and advanced technology.",
      fullDescription: "Being one of the best organizations, we are offering Dal Mills Plant Installation Services. This service is executed by our skilled professionals using high grade tools and advanced technology. Our professionals check all the quality parameters associated to this service and perform the service in the best possible manner. We offer this service as per the requirements of our clients. Further, the offered service is highly demanded by our clients for its cost-effectiveness and promptness features.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      specs: {
        serviceMode: "Offline",
        paymentMode: "Offline/Online",
        serviceDuration: "As Per Project",
        requirementType: "One Time"
      },
      features: [
        "PLC Control System",
        "Auto Moisture Control",
        "Dust Collection System",
        "Safety Sensors",
        "Energy Efficient Motors",
        "Low Maintenance Design"
      ],
      applications: ["Chana Dal", "Tur Dal", "Urad Dal", "Moong Dal", "Masoor Dal"],
      icon: Factory,
      capacity: "30-100 TPD",
      power: "50-150 HP",
      warranty: "2 Years",
      rating: 4.8,
      reviews: 124,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat",
      highlights: ["Cost-effective", "Prompt Service", "Quality Assured"]
    },
    {
      id: 2,
      name: "Rice Mill Plant Installation Services",
      category: "plant",
      price: "8,00,000",
      priceUnit: "unit",
      description: "We are engaged in offering a qualitative Rice Mill Plant Installation Services to our valuable clients. We offer this service in an excellent manner within a scheduled time-frame.",
      fullDescription: "We are engaged in offering a qualitative Rice Mill Plant Installation Services to our valuable clients. We offer this service in an excellent manner within a scheduled time-frame. The offered service is performed by our highly qualified professionals using excellent grade tools and advanced technology. Owing to its perfect execution and flawlessness, this service is widely appreciated by our precious clients. Further, we provide this service as per the requirements of our clients at most affordable price.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      specs: {
        serviceMode: "Offline",
        paymentMode: "Offline/Online",
        serviceDuration: "As Per Project",
        requirementType: "One Time"
      },
      features: [
        "Laser Sorters",
        "Rubber Roll Shellers",
        "Friction Polishers",
        "Grading Tables",
        "Auto Packing System",
        "High Recovery Rate"
      ],
      applications: ["Parboiled Rice", "Raw Rice", "Basmati Rice", "Broken Rice"],
      icon: Factory,
      capacity: "50-200 TPD",
      power: "75-200 HP",
      warranty: "2 Years",
      rating: 4.9,
      reviews: 156,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat",
      highlights: ["Perfect Execution", "Affordable Price", "Timely Delivery"]
    },
    {
      id: 3,
      name: "Flour Mill Plant Installation Service",
      category: "plant",
      price: "8,00,000",
      priceUnit: "User",
      description: "We are a unique name in the industry to provide our precious clients the best quality Flour Mill Plant Installation Service.",
      fullDescription: "We are a unique name in the industry to provide our precious clients the best quality Flour Mill Plant Installation Service. The provided service is carried out by our skilled team of professionals in the best possible manner. While performing this service, our experts ensure that the offered service delivers precision results and is within the budget to attain maximum clients' satisfaction. Moreover, this service is widely acknowledged by our valuable clients for its flawlessness and hassle free execution.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      specs: {
        serviceMode: "Offline",
        paymentMode: "Offline/Online",
        serviceDuration: "As Per Project",
        requirementType: "One Time"
      },
      features: [
        "Chilled Rollers",
        "Plansifter System",
        "Purifier Unit",
        "Bran Finisher",
        "Pneumatic Conveying",
        "High Extraction Rate"
      ],
      applications: ["Wheat Flour", "Maize Flour", "Gram Flour", "Rice Flour"],
      icon: Factory,
      capacity: "25-150 TPD",
      power: "40-180 HP",
      warranty: "2 Years",
      rating: 4.7,
      reviews: 98,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat",
      highlights: ["Precision Results", "Budget-friendly", "Hassle-free"]
    },
    {
      id: 4,
      name: "Oil Mill Plant Installation Services",
      category: "plant",
      price: "8,00,000",
      priceUnit: "User",
      description: "We are the leading organization to offer our precious clients an optimum quality Oil Mill Plant Installation Services.",
      fullDescription: "We are the leading organization to offer our precious clients an optimum quality Oil Mill Plant Installation Services. This service is carried out under the strict supervision of our experts using the best grade tools and advanced techniques. Our skilled professionals ensure the clients that the service, provided by us is highly reliable and executed in an excellent manner. The offered service is performed within a stipulated time-frame. Furthermore, this service can be availed by our precious clients at budget-friendly prices.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      specs: {
        serviceMode: "Offline",
        paymentMode: "Offline/Online",
        serviceDuration: "As per Project",
        requirementType: "One Time"
      },
      features: [
        "Kettle Cooker",
        "Expeller Press",
        "Filter Press",
        "Refining Kettle",
        "Solvent Extraction",
        "High Yield Output"
      ],
      applications: ["Groundnut Oil", "Sunflower Oil", "Soybean Oil", "Mustard Oil"],
      icon: Factory,
      capacity: "10-100 TPD",
      power: "30-150 HP",
      warranty: "2 Years",
      rating: 4.6,
      reviews: 87,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat",
      highlights: ["Highly Reliable", "Expert Supervision", "Budget-friendly"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "25+ Years Excellence",
      description: "Decades of industry leadership with proven track record",
      color: "from-amber-500 to-yellow-500",
      stats: "450+ Projects"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Highly skilled engineers with specialized expertise",
      color: "from-blue-500 to-indigo-500",
      stats: "50+ Engineers"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Assured",
      description: "ISO 9001 certified processes and rigorous testing",
      color: "from-emerald-500 to-teal-500",
      stats: "100% Quality"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Commitment to project timelines and deadlines",
      color: "from-purple-500 to-pink-500",
      stats: "98% On-time"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      color: "from-red-500 to-orange-500",
      stats: "Instant Response"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Client Satisfaction",
      description: "Building lasting relationships through trust",
      color: "from-cyan-500 to-blue-500",
      stats: "100% Satisfaction"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "In-depth discussion of requirements and site survey",
      icon: <Phone className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Customized layout and engineering drawings",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      step: "03",
      title: "Fabrication",
      description: "In-house manufacturing with quality control",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-amber-500"
    },
    {
      step: "04",
      title: "Installation",
      description: "Expert on-site installation by our team",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      step: "05",
      title: "Commissioning",
      description: "Testing, calibration, and operator training",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and technical support",
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: "bg-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Shreeji Dal Mills",
      comment: "Excellent service and professional installation. The team completed the project ahead of schedule and the plant is performing exceptionally well.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Amit Shah",
      company: "Gokul Rice Industries",
      comment: "Arman Engineering delivered exactly what they promised. The automated rice mill has increased our production by 40%. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Suresh Gupta",
      company: "Gupta Flour Mills",
      comment: "Outstanding technical support and after-sales service. They've been our trusted partner for over 10 years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Prakash Mehta",
      company: "Mehta Oil Industries",
      comment: "The oil mill installation was flawless. Their team's expertise and professionalism are unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : services.filter(s => s.category === selectedCategory &&
      (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())));

  const handleGetPrice = (service) => {
    setSelectedPriceService(service);
    setIsPriceModalOpen(true);
  };

  const handleWhatsApp = (service) => {
    const message = encodeURIComponent(`Hello, I'm interested in ${service.name} (₹${service.price}/${service.priceUnit}). Please share more details.`);
    window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
  };

  const handleBrochureDownload = (service) => {
    setBrochureLoading(service.id);

    setTimeout(() => {
      const content = `${service.name}\n\n${service.fullDescription}\n\nSPECIFICATIONS:\n• Capacity: ${service.capacity}\n• Power: ${service.power}\n• Warranty: ${service.warranty}\n• Service Mode: ${service.specs.serviceMode}\n• Payment Mode: ${service.specs.paymentMode}\n• Service Duration: ${service.specs.serviceDuration}\n• Requirement Type: ${service.specs.requirementType}\n\nKEY FEATURES:\n${service.features.map(f => `• ${f}`).join('\n')}\n\nAPPLICATIONS:\n${service.applications.map(a => `• ${a}`).join('\n')}\n\nFor more information, contact:\nArman Engineering Works\nSidhpur, Gujarat\nPhone: +91 9998551985\nEmail: arman@enggyahoo.com`;

      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${service.name.replace(/ /g, '_')}_brochure.txt`;
      a.click();

      setBrochureLoading(null);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay'
            }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium mb-6">
                <Gem size={18} />
                <span className="tracking-wider">PREMIUM ENGINEERING SERVICES</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Complete Plant <br />
                <span className="font-bold text-[#D4AF37]">Installation Solutions</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
                End-to-end solutions for dal mills, rice mills, flour mills, and oil mills.
                Professional installation with advanced technology and guaranteed performance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "450+", label: "Projects", icon: Briefcase },
                  { value: "25+", label: "Years", icon: Calendar },
                  { value: "150+", label: "Experts", icon: Users },
                  { value: "100%", label: "Satisfaction", icon: ThumbsUp }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg">
                        <Icon className="text-[#D4AF37]" size={20} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Balanced Cards */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                <Diamond size={16} /> Our Premium Services <Diamond size={16} />
              </span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Professional Plant <span className="font-bold">Installation Solutions</span>
              </h2>
              <p className="text-slate-500">
                Comprehensive turnkey solutions for grain processing plants, delivered with precision and expertise
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm rounded-lg"
                />
              </div>
            </div>

            {/* Services Grid */}
            {/* Services Grid - With Full Description and Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className="flex flex-col">
                      {/* Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                              <Icon className="text-[#D4AF37]" size={16} />
                            </div>
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Plant Installation</span>
                          </div>
                          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full">
                            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                            <span className="text-xs font-bold text-slate-700">{service.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                          {service.name}
                        </h3>

                        {/* Full Description */}
                        <p className="text-sm text-slate-600 mb-4">
                          {service.fullDescription}
                        </p>

                        {/* Service Specifications Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-slate-50 rounded-lg">
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Mode</p>
                            <p className="text-sm font-semibold text-slate-700">{service.specs.serviceMode}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment Mode</p>
                            <p className="text-sm font-semibold text-slate-700">{service.specs.paymentMode}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Duration</p>
                            <p className="text-sm font-semibold text-slate-700">{service.specs.serviceDuration}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Requirement Type</p>
                            <p className="text-sm font-semibold text-slate-700">{service.specs.requirementType}</p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-[#D4AF37]">₹{service.price}</span>
                          <span className="text-sm text-slate-400 ml-1">/{service.priceUnit}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleGetPrice(service)}
                            className="flex-1 bg-[#D4AF37] text-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-slate-900 transition-colors rounded-lg flex items-center justify-center gap-1"
                          >
                            <IndianRupee size={14} />
                            Get Price
                          </button>
                          <button
                            onClick={() => handleBrochureDownload(service)}
                            disabled={brochureLoading === service.id}
                            className="flex-1 border border-slate-200 text-slate-600 px-3 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors rounded-lg flex items-center justify-center gap-1 disabled:opacity-50"
                          >
                            {brochureLoading === service.id ? (
                              <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <>
                                <FileText size={14} />
                                Brochure
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleWhatsApp(service)}
                            className="flex-1 bg-green-600 text-white px-3 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-green-700 transition-colors rounded-lg flex items-center justify-center gap-1"
                          >
                            <MessageCircle size={14} />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Premium Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                <Crown size={16} /> Why Choose Us <Crown size={16} />
              </span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                The <span className="font-bold">Arman Engineering</span> Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color}`}></div>
                    <span className="text-sm font-semibold text-slate-700">{item.stats}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process - Timeline with Connecting Lines */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                <Rocket size={16} /> Our Process <Rocket size={16} />
              </span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Systematic <span className="font-bold">Installation Approach</span>
              </h2>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-transparent transform -translate-x-1/2 hidden lg:block"></div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                  >
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white`}>
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-[#D4AF37]">{step.step}</span>
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-500">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Empty Space for Alignment */}
                    <div className="flex-1 hidden lg:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Premium Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                <Quote size={16} /> Client Testimonials <Quote size={16} />
              </span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                What Our <span className="font-bold">Clients Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 text-[#D4AF37]/10">
                    <Quote size={48} />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-slate-600 mb-6 relative z-10">"{testimonial.comment}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-400">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-light text-white mb-6">
                Ready to Start Your <span className="font-bold text-[#D4AF37]">Project?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Get in touch with our engineering team for a detailed consultation and customized solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#D4AF37] text-slate-900 px-10 py-4 font-bold hover:bg-white transition-colors rounded-xl flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Request Consultation
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919998551985', '_blank')}
                  className="bg-green-600 text-white px-10 py-4 font-bold hover:bg-green-700 transition-colors rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price Modal */}
        <AnimatePresence>
          {isPriceModalOpen && selectedPriceService && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPriceModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-md rounded-xl overflow-hidden shadow-2xl relative z-10"
              >
                <div className="relative h-40">
                  <img
                    src={selectedPriceService.image}
                    alt={selectedPriceService.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsPriceModalOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{selectedPriceService.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{selectedPriceService.fullDescription}</p>
                  <div className="mb-4 p-5 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">Price</p>
                    <p className="text-3xl font-bold text-[#D4AF37]">
                      ₹{selectedPriceService.price}
                      <span className="text-sm text-slate-400 ml-1">/{selectedPriceService.priceUnit}</span>
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 mb-5">Sold by: <span className="font-semibold text-slate-700">{selectedPriceService.soldBy}</span></p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setIsPriceModalOpen(false);
                        setIsContactOpen(true);
                      }}
                      className="flex-1 bg-slate-900 text-white py-3 text-sm font-bold hover:bg-[#D4AF37] transition-colors rounded-lg"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => handleWhatsApp(selectedPriceService)}
                      className="flex-1 bg-green-600 text-white py-3 text-sm font-bold hover:bg-green-700 transition-colors rounded-lg flex items-center justify-center gap-1"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact Modal - EXACTLY as you wanted */}
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsContactOpen(false)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-2xl relative overflow-hidden shadow-2xl"
              >
                <div className="bg-slate-900 p-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black mb-2">Get Quote</h3>
                      <p className="text-slate-400 text-sm">Fill the form and our team will respond within 24 hours</p>
                    </div>
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                      Requirement Details *
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full border border-slate-200 p-4 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold resize-none"
                      placeholder="Describe your requirements, capacity, timeline..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-slate-900 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Submit Request
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.open('https://wa.me/919998551985', '_blank');
                      }}
                      className="flex-1 bg-green-600 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;