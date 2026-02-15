import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Factory, Wheat, Droplets, Wind, Package, 
  Fan, Building2, Cpu, Shield, Settings, Zap, ArrowRight, 
  X, Send, Phone, Mail, Box, LayoutGrid, Cog, Filter, Gauge, Hammer,
  Move, Eye, Star, Clock, Award, Users, TrendingUp, CheckCircle,
  FileText, Download, Share2, Bookmark, Heart, MapPin, Globe,
  Sun, Moon, Menu, XCircle, AlertCircle, Info, Plus, Minus,
  Search, Sliders, Grid, List, Layers, Compass, Target, PenTool
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: LayoutGrid, count: 19 },
    { id: 'plant', name: 'Plant Installation', icon: Factory, count: 5 },
    { id: 'separator', name: 'Separators', icon: Wind, count: 4 },
    { id: 'processing', name: 'Food Processing', icon: Cpu, count: 4 },
    { id: 'conveyor', name: 'Conveyors', icon: Move, count: 2 },
    { id: 'mill', name: 'Mill Machines', icon: Cog, count: 4 }
  ];

  const products = [
    // Plant Installation Services
    {
      id: 1,
      name: "Dal Mills Plant Installation",
      category: "plant",
      description: "Complete turnkey installation for dal processing plants with automated systems",
      longDescription: "Our comprehensive dal mill installation service includes everything from site survey to final commissioning. We design and install complete processing lines for all types of pulses including chana, tur, urad, and moong dal.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["30-100 Ton Capacity", "Fully Automated", "Energy Efficient", "Low Maintenance"],
      features: ["PLC Control System", "Auto Moisture Control", "Dust Collection", "Safety Sensors"],
      icon: Factory,
      capacity: "30-100 TPD",
      power: "50-150 HP",
      warranty: "2 Years",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Rice Mill Plant Installation",
      category: "plant",
      description: "Modern rice mill installation with precision sorting and polishing units",
      longDescription: "State-of-the-art rice milling solutions featuring pre-cleaners, de-stoners, huskers, polishers, and color sorters. Suitable for both parboiled and raw rice processing.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["Parboiled & Raw Rice", "Color Sorters", "Auto Packing", "High Recovery"],
      features: ["Laser Sorters", "Rubber Roll Shellers", "Friction Polishers", "Grading Tables"],
      icon: Factory,
      capacity: "50-200 TPD",
      power: "75-200 HP",
      warranty: "2 Years",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Flour Mill Plant Installation",
      category: "plant",
      description: "Complete flour milling solutions for wheat, maize, and grains",
      longDescription: "Advanced flour milling systems with pneumatic conveying, plansifters, purifiers, and rollermills. Designed for optimal extraction rates and flour quality.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Pneumatic System", "Plansifters", "Purifiers", "High Extraction"],
      features: ["Chilled Rollers", "Plansifter", "Purifier", "Bran Finisher"],
      icon: Factory,
      capacity: "25-150 TPD",
      power: "40-180 HP",
      warranty: "2 Years",
      rating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      name: "Oil Mill Plant Installation",
      category: "plant",
      description: "Edible oil extraction and refining plant installation",
      longDescription: "Complete oil milling solutions including seed preparation, expelling, solvent extraction, and refining. Suitable for groundnut, sunflower, soybean, and mustard.",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200",
      specs: ["Expeller Press", "Solvent Extraction", "Refinery Unit", "High Yield"],
      features: ["Kettle Cooker", "Expeller", "Filter Press", "Refining Kettle"],
      icon: Factory,
      capacity: "10-100 TPD",
      power: "30-150 HP",
      warranty: "2 Years",
      rating: 4.6,
      reviews: 87
    },

    // Gravity Separators
    {
      id: 5,
      name: "5 HP Automatic Gravity Separator",
      category: "separator",
      description: "High-capacity gravity separator for precise material separation",
      longDescription: "Advanced gravity separator with auto-deck cleaning and variable frequency drive. Ideal for separating grains by specific gravity.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["5 HP Motor", "Auto Deck Cleaning", "2-3 TPH Capacity", "Precision Control"],
      features: ["VFD Control", "Auto Cleaning", "Dual Deck", "Dust Proof"],
      icon: Wind,
      capacity: "2-3 TPH",
      power: "5 HP",
      warranty: "1 Year",
      rating: 4.8,
      reviews: 67
    },
    {
      id: 6,
      name: "3 HP Automatic Gravity Separator",
      category: "separator",
      description: "Compact gravity separator for medium-scale operations",
      longDescription: "Space-efficient gravity separator perfect for medium-scale processing units. Features adjustable deck angle and air flow.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["3 HP Motor", "Variable Speed", "1-2 TPH Capacity", "Compact Design"],
      features: ["Adjustable Deck", "Digital Controls", "Low Noise", "Easy Clean"],
      icon: Wind,
      capacity: "1-2 TPH",
      power: "3 HP",
      warranty: "1 Year",
      rating: 4.7,
      reviews: 45
    },
    {
      id: 7,
      name: "5 Fan Gravity Separator",
      category: "separator",
      description: "Multi-fan system for enhanced separation efficiency",
      longDescription: "High-performance separator with 5 independent fans for precise air control. Achieves superior separation accuracy.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["5 Independent Fans", "Precision Control", "High Purity", "Energy Efficient"],
      features: ["Zone Control", "Auto Balance", "Remote Monitoring", "Smart Sensors"],
      icon: Wind,
      capacity: "3-4 TPH",
      power: "7.5 HP",
      warranty: "1 Year",
      rating: 4.9,
      reviews: 89
    },

    // Food Processing Plant
    {
      id: 8,
      name: "Automatic Food Processing Plant",
      category: "processing",
      description: "Fully automated food processing solutions for various applications",
      longDescription: "Complete food processing solutions including cleaning, grading, sorting, and packaging. Customizable for different food products.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["PLC Controlled", "Multi-Grain Processing", "Dust Free", "High Capacity"],
      features: ["Touch Screen", "Remote Access", "Auto Calibration", "Data Logging"],
      icon: Cpu,
      capacity: "5-50 TPH",
      power: "20-100 HP",
      warranty: "2 Years",
      rating: 4.8,
      reviews: 112
    },

    // Durm Seal Machine
    {
      id: 9,
      name: "Automatic Drum Cap Sealing Machine",
      category: "processing",
      description: "High-speed automatic drum sealing for industrial packaging",
      longDescription: "Industrial drum sealing system with automatic cap feeding and hermetic sealing. Ensures tamper-proof packaging.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Auto Feed", "Hermetic Seal", "20-30 Drums/Hour", "Digital Control"],
      features: ["Cap Sorter", "Torque Control", "Date Printer", "Safety Guard"],
      icon: Package,
      capacity: "20-30 drums/hr",
      power: "2 HP",
      warranty: "1 Year",
      rating: 4.6,
      reviews: 34
    },

    // Flour Mill Plant
    {
      id: 10,
      name: "Automatic Flour Mill Plant",
      category: "mill",
      description: "Complete flour milling solutions with modern automation",
      longDescription: "Fully automatic flour mill with pneumatic conveying and plansifter technology. Produces high-quality refined flour.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["50-200 TPD", "PLC System", "High Extraction", "Low Power"],
      features: ["Auto Roller Mill", "Plansifter", "Purifier", "Bran Duster"],
      icon: Cog,
      capacity: "50-200 TPD",
      power: "100-300 HP",
      warranty: "2 Years",
      rating: 4.9,
      reviews: 203
    },

    // Belt Conveyor
    {
      id: 11,
      name: "Mild Steel Flat Belt Conveyor",
      category: "conveyor",
      description: "Durable flat belt conveyor for material handling",
      longDescription: "Heavy-duty belt conveyor for bulk material handling. Available in various lengths and widths to suit your requirements.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["MS Construction", "Custom Length", "Variable Speed", "Heavy Duty"],
      features: ["Anti-Slip Belt", "Safety Rails", "Emergency Stop", "Auto Tracking"],
      icon: Move,
      capacity: "10-50 TPH",
      power: "3-15 HP",
      warranty: "1 Year",
      rating: 4.7,
      reviews: 76
    },

    // Air Classifier
    {
      id: 12,
      name: "Air Classifier Machine",
      category: "separator",
      description: "Precision air classification for fine particle separation",
      longDescription: "Advanced air classifier for precise particle size separation. Ideal for flour, starch, and mineral applications.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Air-Wash System", "Dust Collection", "Fine Separation", "Adjustable Cut Point"],
      features: ["Cyclone Collector", "Bag Filter", "Rotary Valve", "Blower System"],
      icon: Wind,
      capacity: "1-5 TPH",
      power: "10-30 HP",
      warranty: "1 Year",
      rating: 4.8,
      reviews: 56
    },

    // Cleaning Plant
    {
      id: 13,
      name: "Fully Automatic Sortex Cleaning Plant",
      category: "processing",
      description: "Advanced sortex cleaning with color sorting technology",
      longDescription: "Complete cleaning plant with pre-cleaner, de-stoner, and color sorter. Ensures impurity-free final product.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["Color Sorters", "Magnetic Separator", "Dust Control", "High Accuracy"],
      features: ["CCD Cameras", "Air Ejectors", "LED Lighting", "Self Clean"],
      icon: Filter,
      capacity: "5-20 TPH",
      power: "15-40 HP",
      warranty: "2 Years",
      rating: 4.9,
      reviews: 145
    },

    // Mill Machine
    {
      id: 14,
      name: "Automatic Dal Mill Machine",
      category: "mill",
      description: "High-efficiency dal milling with de-husking and splitting",
      longDescription: "Complete dal milling unit with emery rollers for de-husking and splitting. High yield and low breakage.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Emery Roll", "Auto Feed", "High Yield", "Less Breakage"],
      features: ["Grading Screens", "Aspirator", "Polisher", "Destoner"],
      icon: Cog,
      capacity: "1-5 TPH",
      power: "20-50 HP",
      warranty: "1 Year",
      rating: 4.7,
      reviews: 89
    },

    // Destoner Machine
    {
      id: 15,
      name: "Automatic Vibro Destoner Machine",
      category: "separator",
      description: "Vibratory destoner for stone and impurity removal",
      longDescription: "High-efficiency destoner using vibratory motion and air classification to remove stones and heavy impurities.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Vibratory Deck", "Adjustable Air", "Stone Free Output", "Low Maintenance"],
      features: ["Rubber Balls", "Screen Deck", "Air Control", "Vibration Adjustment"],
      icon: Hammer,
      capacity: "2-10 TPH",
      power: "2-5 HP",
      warranty: "1 Year",
      rating: 4.6,
      reviews: 67
    },

    // Centrifugal Pump
    {
      id: 16,
      name: "5 HP Industrial Centrifugal Fan",
      category: "processing",
      description: "High-pressure centrifugal fan for industrial applications",
      longDescription: "Industrial centrifugal fan for pneumatic conveying and dust collection systems. High pressure and airflow.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["5 HP Motor", "High CFM", "Industrial Grade", "Low Noise"],
      features: ["Balanced Impeller", "V-Belt Drive", "Inlet Guide", "Weather Cover"],
      icon: Fan,
      capacity: "1000-5000 CFM",
      power: "5 HP",
      warranty: "1 Year",
      rating: 4.5,
      reviews: 43
    },

    // Pneumatic Equipment
    {
      id: 17,
      name: "Hydraulic Pneumatic Equipment",
      category: "processing",
      description: "Complete hydraulic and pneumatic systems for automation",
      longDescription: "Custom hydraulic and pneumatic systems for industrial automation. Includes cylinders, valves, and control panels.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["Custom Design", "High Pressure", "Auto Control", "Leak Proof"],
      features: ["PLC Integration", "Pressure Sensors", "Flow Control", "Safety Valves"],
      icon: Settings,
      capacity: "Custom",
      power: "As Required",
      warranty: "1 Year",
      rating: 4.7,
      reviews: 38
    },

    // Dal Mill Plant
    {
      id: 18,
      name: "30 Ton Automatic Dal Mill Plant",
      category: "plant",
      description: "Complete 30 ton per day automatic dal mill installation",
      longDescription: "Compact dal mill plant with 30 TPD capacity. Includes all equipment from cleaning to packaging.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      specs: ["30 TPD Capacity", "Fully Automatic", "Low Maintenance", "Compact Design"],
      features: ["Pre-Cleaner", "Destoner", "Emery Roll", "Grading"],
      icon: Factory,
      capacity: "30 TPD",
      power: "75 HP",
      warranty: "2 Years",
      rating: 4.8,
      reviews: 92
    },

    // Elevator Box
    {
      id: 19,
      name: "Elevator Top Bottom Box",
      category: "conveyor",
      description: "Heavy-duty elevator boxes for bucket elevators",
      longDescription: "Fabricated elevator boxes with wear-resistant lining. Suitable for bucket elevators in grain handling applications.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      specs: ["MS Fabrication", "Wear Resistant", "Custom Size", "Heavy Duty"],
      features: ["Wear Plates", "Inspection Door", "Boot Take-up", "Head Flanges"],
      icon: Box,
      capacity: "Custom",
      power: "N/A",
      warranty: "1 Year",
      rating: 4.5,
      reviews: 27
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : products.filter(p => p.category === selectedCategory && 
                         (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase())));

  // Get top products by rating
  const topProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F7FA] text-slate-800 font-sans  selection:bg-[#D4AF37] selection:text-white">
        
        {/* Hero Section with Parallax Effect */}
        <section className="relative min-h-[70vh] bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
              opacity: 0.3
            }}></div>
            <div className="absolute inset-0 opacity-30"
                 style={{
                   backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 1px)',
                   backgroundSize: '40px 40px'
                 }}>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-20 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl py-32"
            >
              <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase mb-8">
                <Compass size={14} /> <ChevronRight size={12} /> INDUSTRIAL SOLUTIONS
              </div>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-8">
                ENGINEERED <br />FOR <span className="text-[#D4AF37]">EXCELLENCE</span>
              </h1>
              <p className="max-w-2xl text-xl text-slate-300 font-light leading-relaxed mb-12">
                Complete range of grain processing equipment and turnkey plant installations. 
                Backed by 25+ years of engineering expertise.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-12 max-w-2xl">
                {[
                  { value: '25+', label: 'Years Experience', icon: Clock },
                  { value: '450+', label: 'Projects Delivered', icon: Target },
                  { value: '100%', label: 'Client Satisfaction', icon: Award }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center">
                        <Icon className="text-[#D4AF37]" size={20} />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                        <p className="text-[8px] font-black text-slate-400 tracking-wider uppercase">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[8px] font-black text-white/50 tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex items-center justify-between mb-20">
              <div>
                <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">Top Rated</span>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter mt-4">
                  Featured <span className="text-slate-300">Products</span>
                </h2>
              </div>
              <div className="flex gap-2">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#D4AF37]"></div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {topProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white border border-slate-200 hover:border-[#D4AF37] transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-black text-slate-900 flex items-center gap-1">
                        <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                        {product.rating}
                      </div>

                      {/* Quick View Button */}
                      <button 
                        onClick={() => handleQuickView(product)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#D4AF37] hover:text-white"
                      >
                        <Eye size={16} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="text-[#D4AF37]" size={18} />
                        <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase">
                          {categories.find(c => c.id === product.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Key Specs */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="text-slate-400">Capacity</span>
                          <span className="font-black text-slate-900">{product.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="text-slate-400">Power</span>
                          <span className="font-black text-slate-900">{product.power}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button 
                          onClick={() => handleQuickView(product)}
                          className="text-[9px] font-black text-slate-400 hover:text-[#D4AF37] tracking-wider uppercase transition-colors flex items-center gap-1"
                        >
                          Quick View <Eye size={10} />
                        </button>
                        <button 
                          onClick={() => setIsContactOpen(true)}
                          className="text-[9px] font-black text-[#D4AF37] hover:text-slate-900 tracking-wider uppercase transition-colors flex items-center gap-1"
                        >
                          Inquiry <ArrowRight size={10} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Filter & Products Grid */}
        <section className="py-32 bg-[#F4F7FA]">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">Our Range</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mt-4 mb-6">
                Complete Product <span className="text-slate-300">Portfolio</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Explore our comprehensive range of industrial equipment and turnkey solutions
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-white p-8 mb-16 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold text-slate-900"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`group px-5 py-3 text-[9px] font-black tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-50 text-slate-500 hover:bg-[#D4AF37] hover:text-white'
                        }`}
                      >
                        <Icon size={12} />
                        {category.name}
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                          selectedCategory === category.id ? 'bg-white/20' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* View Toggle */}
                <div className="flex gap-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-colors ${
                      viewMode === 'grid' ? 'bg-[#D4AF37] text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-colors ${
                      viewMode === 'list' ? 'bg-[#D4AF37] text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery + viewMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-24 bg-white">
                    <AlertCircle className="mx-auto text-slate-300 mb-4" size={48} />
                    <p className="text-slate-400 text-lg">No products found matching your criteria</p>
                    <button 
                      onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
                      className="mt-6 text-[#D4AF37] text-xs font-black tracking-wider uppercase hover:underline"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className={viewMode === 'grid' 
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
                    : "space-y-4"
                  }>
                    {filteredProducts.map((product, index) => {
                      const Icon = product.icon;
                      return viewMode === 'grid' ? (
                        // Grid View
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="group bg-white border border-slate-200 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                          <div className="relative h-64 overflow-hidden">
                            <img 
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                            
                            {/* Tags */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="bg-[#D4AF37] text-white text-[8px] font-black px-3 py-1.5 tracking-widest">
                                FEATURED
                              </span>
                              {product.rating >= 4.8 && (
                                <span className="bg-slate-900 text-white text-[8px] font-black px-3 py-1.5 tracking-widest">
                                  BESTSELLER
                                </span>
                              )}
                            </div>

                            {/* Quick Actions */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#D4AF37] hover:text-white">
                                <Bookmark size={16} />
                              </button>
                              <button 
                                onClick={() => handleQuickView(product)}
                                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#D4AF37] hover:text-white"
                              >
                                <Eye size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <Icon className="text-[#D4AF37]" size={20} />
                                <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase">
                                  {categories.find(c => c.id === product.category)?.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                                <span className="text-xs font-black text-slate-900">{product.rating}</span>
                                <span className="text-[8px] text-slate-400">({product.reviews})</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">
                              {product.name}
                            </h3>
                            
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                              {product.description}
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                              {product.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-[9px] font-bold text-slate-600">
                                  <CheckCircle size={10} className="text-[#D4AF37]" />
                                  <span className="truncate">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Specs Table */}
                            <div className="grid grid-cols-3 gap-2 mb-8 p-4 bg-slate-50">
                              <div className="text-center">
                                <p className="text-[8px] font-black text-slate-400 tracking-wider">CAPACITY</p>
                                <p className="text-xs font-black text-slate-900">{product.capacity}</p>
                              </div>
                              <div className="text-center border-x border-slate-200">
                                <p className="text-[8px] font-black text-slate-400 tracking-wider">POWER</p>
                                <p className="text-xs font-black text-slate-900">{product.power}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-[8px] font-black text-slate-400 tracking-wider">WARRANTY</p>
                                <p className="text-xs font-black text-slate-900">{product.warranty}</p>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                              <button 
                                onClick={() => handleQuickView(product)}
                                className="text-[9px] font-black text-slate-400 hover:text-[#D4AF37] tracking-wider uppercase transition-colors flex items-center gap-1"
                              >
                                View Details <Eye size={12} />
                              </button>
                              <button 
                                onClick={() => setIsContactOpen(true)}
                                className="text-[9px] font-black text-[#D4AF37] hover:text-slate-900 tracking-wider uppercase transition-colors flex items-center gap-1 group"
                              >
                                Get Quote <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        // List View
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="group bg-white border border-slate-200 hover:border-[#D4AF37] transition-all duration-500 p-6"
                        >
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-48 h-48 overflow-hidden">
                              <img 
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <Icon className="text-[#D4AF37]" size={18} />
                                  <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase">
                                    {categories.find(c => c.id === product.category)?.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                                  <span className="text-xs font-black text-slate-900">{product.rating}</span>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-black text-slate-900 mb-2">
                                {product.name}
                              </h3>
                              
                              <p className="text-sm text-slate-500 mb-4">
                                {product.longDescription}
                              </p>

                              <div className="flex flex-wrap gap-6 mb-4">
                                <div>
                                  <p className="text-[8px] font-black text-slate-400">CAPACITY</p>
                                  <p className="text-sm font-black text-slate-900">{product.capacity}</p>
                                </div>
                                <div>
                                  <p className="text-[8px] font-black text-slate-400">POWER</p>
                                  <p className="text-sm font-black text-slate-900">{product.power}</p>
                                </div>
                                <div>
                                  <p className="text-[8px] font-black text-slate-400">WARRANTY</p>
                                  <p className="text-sm font-black text-slate-900">{product.warranty}</p>
                                </div>
                              </div>

                              <div className="flex gap-4">
                                <button 
                                  onClick={() => handleQuickView(product)}
                                  className="text-[9px] font-black text-slate-400 hover:text-[#D4AF37] tracking-wider uppercase transition-colors"
                                >
                                  View Details
                                </button>
                                <button 
                                  onClick={() => setIsContactOpen(true)}
                                  className="text-[9px] font-black text-[#D4AF37] hover:text-slate-900 tracking-wider uppercase transition-colors flex items-center gap-1"
                                >
                                  Get Quote <ArrowRight size={12} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
               style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, #2D5A82 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }}>
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">Why Us</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mt-4">
                Engineered for <span className="text-slate-300">Excellence</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "25+ Years",
                  desc: "Of engineering excellence and innovation",
                  color: "#D4AF37"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Senior engineers with decades of experience",
                  color: "#2D5A82"
                },
                {
                  icon: Shield,
                  title: "Quality Assured",
                  desc: "ISO 9001 certified manufacturing",
                  color: "#D4AF37"
                },
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  desc: "Commitment to project timelines",
                  color: "#2D5A82"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group text-center p-8 border border-slate-100 hover:border-[#D4AF37] transition-all duration-500"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-500">
                      <Icon size={32} className="text-slate-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }}>
          </div>

          <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">Get Started</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-6 mb-8">
                Ready to Transform <br />Your <span className="text-[#D4AF37]">Production?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Let's discuss your requirements and find the perfect solution for your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="group bg-[#D4AF37] text-slate-900 px-12 py-5 text-xs font-black tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 relative overflow-hidden"
                >
                  <span className="relative z-10">Request Quote</span>
                </button>
                <button className="group border-2 border-white/20 text-white px-12 py-5 text-xs font-black tracking-[0.3em] uppercase hover:border-[#D4AF37] transition-all duration-300">
                  Download Brochure
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-16 pt-16 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center gap-3">
                    <Phone size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-bold text-white">+91 98XXX XXXXX</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-bold text-white">sales@amran.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin size={18} className="text-[#D4AF37]" />
                    <span className="text-sm font-bold text-white">Sidhpur, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick View Modal */}
        <AnimatePresence>
          {isQuickViewOpen && selectedProduct && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              />

              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              >
                <button 
                  onClick={() => setIsQuickViewOpen(false)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="h-96 md:h-full bg-slate-100">
                    <img 
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <selectedProduct.icon className="text-[#D4AF37]" size={20} />
                      <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase">
                        {categories.find(c => c.id === selectedProduct.category)?.name}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-slate-500 mb-6">
                      {selectedProduct.longDescription}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-slate-50">
                      <div className="text-center">
                        <p className="text-[8px] font-black text-slate-400 tracking-wider">CAPACITY</p>
                        <p className="text-sm font-black text-slate-900">{selectedProduct.capacity}</p>
                      </div>
                      <div className="text-center border-x border-slate-200">
                        <p className="text-[8px] font-black text-slate-400 tracking-wider">POWER</p>
                        <p className="text-sm font-black text-slate-900">{selectedProduct.power}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[8px] font-black text-slate-400 tracking-wider">WARRANTY</p>
                        <p className="text-sm font-black text-slate-900">{selectedProduct.warranty}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <h4 className="text-sm font-black text-slate-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle size={14} className="text-[#D4AF37]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button 
                        onClick={() => {setIsQuickViewOpen(false); setIsContactOpen(true);}}
                        className="flex-1 bg-slate-900 text-white py-4 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#D4AF37] transition-colors"
                      >
                        Get Quote
                      </button>
                      <button className="w-14 h-14 border-2 border-slate-200 hover:border-[#D4AF37] transition-colors flex items-center justify-center">
                        <Download size={18} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact Modal */}
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
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
                className="bg-white w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 relative overflow-hidden shadow-2xl"
              >
                {/* Left Side */}
                <div className="bg-slate-900 p-12 hidden md:flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                       style={{
                         backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 1px)',
                         backgroundSize: '30px 30px'
                       }}>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-white">Get in <br/>Touch</h3>
                    <div className="h-1 w-12 bg-[#D4AF37] mb-8"></div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-10">
                      Request information about our products or get a custom quote for your specific requirements.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center">
                          <Phone size={18} className="text-[#D4AF37]" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Sales & Support</p>
                          <p className="text-sm font-black text-white">+91 9998551985</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center">
                          <Mail size={18} className="text-[#D4AF37]" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Email</p>
                          <p className="text-sm font-black text-white">arman@enggyahoo.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center">
                          <MapPin size={18} className="text-[#D4AF37]" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Location</p>
                          <p className="text-sm font-black text-white">Sidhpur, India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-slate-800">
                      <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">Amran Engineering Works © 2026</p>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-10 md:p-14 relative bg-white">
                  <button 
                    onClick={() => setIsContactOpen(false)}
                    className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>

                  <h4 className="text-2xl font-black text-slate-900 mb-2">Product Inquiry</h4>
                  <p className="text-xs text-slate-400 mb-8">Fill the form and our team will respond within 24 hours</p>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent" 
                        placeholder="John Smith" 
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent" 
                        placeholder="john@company.com" 
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Product of Interest</label>
                      <select className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent">
                        <option>Select a product</option>
                        {products.slice(0, 10).map(p => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Message *</label>
                      <textarea 
                        rows="3" 
                        required 
                        className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent resize-none" 
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full mt-8 bg-slate-900 text-white py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 group"
                    >
                      Send Inquiry <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
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