import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, PenTool, Box, Activity, 
  CheckCircle2, Cpu, Ruler, Monitor, PencilRuler,
  Compass, Layers, Database, ChevronLeft, X, Send, 
  Phone, Mail, MapPin, Settings, GitBranch, 
  Gauge, Eye, Target, Award, Users, Clock,
  FileText, Download, Maximize2, Minimize2,
  Grid3x3, Box as BoxIcon, Wind, Zap, Shield, Trello,
  Rocket, Sparkles, Lightbulb, Circle, Square, Triangle,
  Image as ImageIcon, AlertCircle
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const DesignAndStructure = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('technical');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  // Handle image load errors
  const handleImageError = (phaseId) => {
    setImageErrors(prev => ({ ...prev, [phaseId]: true }));
  };

  // Fallback images for each phase (using reliable CDN images)
  const fallbackImages = {
    "01": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    "02": "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop",
    "03": "https://images.unsplash.com/photo-1581092160562-40aa08e6afa5?w=800&auto=format&fit=crop"
  };

  const designPhases = [
    {
      id: "01",
      title: "Conceptual Design",
      subtitle: "Foundation & Vision",
      description: "Transforming requirements into comprehensive design blueprints with 3D visualization and flow analysis.",
      longDescription: "We provide a basic model for baseline evaluation and identify the desires and aspirations of each customer type in terms of how they communicate with the design under various conditions. We provide an accurate production forecast, future looks, fundamental understanding of the scope of developments, that includes marketability, labor needs and expected costs.",
      icon: Eye,
      color: "#D4AF37",
      bgGradient: "from-amber-50 to-orange-50",
      metrics: [
        { label: "Accuracy", value: "99.5%", icon: Gauge },
        { label: "Projects", value: "250+", icon: GitBranch },
        { label: "Timeline", value: "2-3 Weeks", icon: Clock }
      ],
      deliverables: [
        "3D Conceptual Models",
        "Flow Diagrams & P&ID",
        "Equipment Specifications",
        "Utility Requirements",
        "Cost Estimates"
      ],
      technologies: ["AutoCAD", "SolidWorks", "Revit", "Navisworks"],
      image: "https://www.hatchwise.com/external/wp-content/uploads/2021/08/process_chart.png",
      // Adding high-quality backup images
      backupImages: [
        "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: "02",
      title: "Preliminary Engineering",
      subtitle: "Development & Planning",
      description: "Comprehensive planning and layout solutions ensuring every aspect is carefully considered before detailed engineering.",
      longDescription: "To have your dream project, we are preparing ourselves adequately by providing comprehensive planning and layout solutions. We ensure every aspect of your project is carefully considered before moving to detailed engineering. Our team collaborates with you to determine the exact requirements.",
      icon: GitBranch,
      color: "#2D5A82",
      bgGradient: "from-blue-50 to-indigo-50",
      metrics: [
        { label: "Coverage", value: "100%", icon: Target },
        { label: "Reviews", value: "3-Stage", icon: Trello },
        { label: "Optimization", value: "95%", icon: Zap }
      ],
      deliverables: [
        "Conceptual Layouts",
        "Equipment Arrangement",
        "Technical Specifications",
        "Data Sheets",
        "Initial Cost Analysis"
      ],
      technologies: ["Plant 3D", "AutoCAD P&ID", "Navisworks", "BIM 360"],
      image: "https://cirdev.s3.us-west-1.amazonaws.com/cir/1758187950327Preliminary-Engineering.png",
      backupImages: [
        "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3862629/pexels-photo-3862629.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: "03",
      title: "Detail Engineering",
      subtitle: "Execution & Precision",
      description: "Complete project engineering with detailed equipment designation, structural analysis, and installation planning.",
      longDescription: "Our expert engineers create a detailed outline of the project ensuring every component is precisely engineered for optimal performance, longevity, and safety. We cover all analyses before launch, including structural integrity, equipment specifications, and installation methodologies.",
      icon: Settings,
      color: "#D4AF37",
      bgGradient: "from-amber-50 to-yellow-50",
      metrics: [
        { label: "Precision", value: "±0.01mm", icon: Ruler },
        { label: "Drawings", value: "500+", icon: FileText },
        { label: "Checks", value: "Multi-level", icon: Shield }
      ],
      deliverables: [
        "Detailed Specifications",
        "Structural Analysis",
        "Fabrication Drawings",
        "Installation Manuals",
        "Quality Control Plans"
      ],
      technologies: ["ANSYS", "STAAD Pro", "ETABS", "Tekla"],
      image: "https://madathara.in/wp-content/uploads/2024/08/Slide2-fotor-2024081419233-2-1024x683.jpg",
      backupImages: [
        "https://images.pexels.com/photos/3862626/pexels-photo-3862626.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const features = [
    {
      icon: BoxIcon,
      title: "3D Visualization",
      description: "Virtual walkthroughs and realistic renderings before construction begins",
      stat: "100%",
      statLabel: "Clarity",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&auto=format&fit=crop"
    },
    {
      icon: Ruler,
      title: "Precision Engineering",
      description: "Micron-level accuracy in all design specifications",
      stat: "±0.01mm",
      statLabel: "Tolerance",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Structural Integrity",
      description: "25% safety margin above rated load capacity",
      stat: "25%",
      statLabel: "Safety Buffer",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e6afa5?w=400&auto=format&fit=crop"
    },
    {
      icon: Cpu,
      title: "Smart Analysis",
      description: "FEA and CFD simulations for optimal performance",
      stat: "99.9%",
      statLabel: "Accuracy",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAFBFC] font-sans">
        
        {/* HERO SECTION - ARCHITECTURAL */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Background Pattern with proper opacity */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{ 
                   backgroundImage: 'linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)',
                   backgroundSize: '50px 50px'
                 }}>
            </div>
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-slate-400 mb-8"
            >
              <Home size={16} />
              <ChevronRight size={14} />
              <span className="text-slate-600">Design & Engineering</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 mb-8 rounded-sm">
                  <PenTool size={16} className="text-[#D4AF37]" />
                  <span className="text-xs font-bold text-[#D4AF37] tracking-wider">ENGINEERING EXCELLENCE</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight">
                  Where <span className="font-black text-[#D4AF37]">Design</span><br />
                  Meets Structure
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl">
                  From conceptual sketches to detailed engineering drawings, 
                  our integrated design approach ensures every project is built 
                  on a foundation of precision and innovation.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "450+", label: "Projects Engineered" },
                    { value: "28", label: "Years Experience" },
                    { value: "100%", label: "ISO Certified" }
                  ].map((stat, index) => (
                    <div key={index} className="border-l-2 border-[#D4AF37] pl-4">
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Abstract Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-square relative">
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="w-full h-full border-2 border-[#D4AF37]/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-[15%] animate-spin-slower">
                    <div className="w-full h-full border-2 border-slate-200 rounded-full"></div>
                  </div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-[30%] bg-white shadow-2xl rounded-sm flex items-center justify-center">
                    <div className="text-center">
                      <BoxIcon size={40} className="mx-auto mb-2 text-[#D4AF37]" />
                      <div className="text-xs font-bold text-slate-500">3D MODEL</div>
                    </div>
                  </div>

                  {/* Floating Labels */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-lg text-xs font-bold text-slate-600 rounded-sm"
                  >
                    BIM LEVEL 2
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="absolute -bottom-4 right-0 bg-white px-4 py-2 shadow-lg text-xs font-bold text-slate-600 rounded-sm"
                  >
                    ISO 19650
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID - WITH IMAGES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">CAPABILITIES</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Integrated <span className="font-black">Engineering Solutions</span>
              </h2>
              <p className="text-slate-500">
                Comprehensive design capabilities backed by advanced technology and decades of expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100 rounded-lg overflow-hidden"
                >
                  {/* Background Image with proper opacity */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <feature.icon className="text-[#D4AF37] mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-2xl font-black text-[#D4AF37]">{feature.stat}</span>
                    <span className="text-xs text-slate-500 font-medium">{feature.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN PHASES - INTERACTIVE TIMELINE */}
        <section className="py-20 bg-[#FAFBFC]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">PROCESS</span>
              <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                Three-Phase <span className="font-black">Engineering Approach</span>
              </h2>
            </div>

            {/* Phase Navigation */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex bg-white p-2 rounded-full shadow-lg">
                {designPhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`relative px-8 py-4 text-sm font-bold transition-all rounded-full ${
                      activePhase === index 
                        ? 'text-white' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {activePhase === index && (
                      <motion.div
                        layoutId="activePhase"
                        className="absolute inset-0 bg-[#D4AF37] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{phase.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phase Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left - Content */}
                  <div className="p-12 lg:p-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-[#D4AF37]/10 flex items-center justify-center rounded-xl">
                        {React.createElement(designPhases[activePhase].icon, { 
                          size: 32, 
                          className: "text-[#D4AF37]" 
                        })}
                      </div>
                      <div>
                        <div className="text-sm text-[#D4AF37] font-bold mb-1">
                          PHASE {designPhases[activePhase].id}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{designPhases[activePhase].subtitle}</div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-6 text-slate-900">{designPhases[activePhase].title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {designPhases[activePhase].longDescription}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {designPhases[activePhase].metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-4 bg-slate-50 rounded-xl">
                          <metric.icon className="mx-auto mb-2 text-[#D4AF37]" size={20} />
                          <div className="font-black text-lg text-slate-900">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-bold mb-3 text-slate-900">Key Deliverables</h4>
                      <div className="space-y-2">
                        {designPhases[activePhase].deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 size={16} className="text-[#D4AF37] flex-shrink-0" />
                            <span className="text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right - Visual (Improved) */}
                  <div className="relative h-full min-h-[600px] overflow-hidden bg-slate-100">
                    {/* Image with error handling */}
                    {!imageErrors[designPhases[activePhase].id] ? (
                      <img 
                        src={designPhases[activePhase].image}
                        alt={designPhases[activePhase].title}
                        className="absolute inset-0 w-full h-full object-contain p-8"
                        onError={() => handleImageError(designPhases[activePhase].id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon size={48} className="mx-auto mb-4 text-slate-300" />
                          <p className="text-slate-400 mb-4">Image unavailable</p>
                          <div className="grid grid-cols-2 gap-4 p-8">
                            {designPhases[activePhase].backupImages.map((backupImg, idx) => (
                              <img 
                                key={idx}
                                src={backupImg}
                                alt={`Backup ${idx + 1}`}
                                className="w-full h-32 object-cover rounded-lg shadow-md"
                                onError={(e) => e.target.style.display = 'none'}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Subtle gradient overlay - removed heavy opacity */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30 pointer-events-none"></div>
                    
                    {/* Tech Stack */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h4 className="text-sm font-bold mb-3 text-slate-900">TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {designPhases[activePhase].technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full text-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4AF37] text-sm font-bold tracking-widest">TECHNOLOGY</span>
                <h2 className="text-4xl font-light text-slate-900 mt-4 mb-6">
                  Advanced <span className="font-black">Design Tools</span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We leverage industry-leading software and technologies to deliver 
                  precise, optimized, and constructible designs.
                </p>

                <div className="space-y-6">
                  {[
                    { cat: "CAD Software", tools: "AutoCAD, SolidWorks, CATIA, Revit" },
                    { cat: "Analysis Tools", tools: "ANSYS, STAAD Pro, ETABS, CFD" },
                    { cat: "BIM Platform", tools: "Revit, Navisworks, BIM 360" },
                    { cat: "Visualization", tools: "3ds Max, Lumion, Twinmotion" }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-slate-100 pb-4">
                      <div className="text-xs font-bold text-slate-400 mb-2">{item.cat}</div>
                      <div className="font-medium text-slate-700">{item.tools}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "AutoCAD", users: "15+ Seats", color: "from-red-50 to-red-100" },
                  { name: "SolidWorks", users: "10+ Seats", color: "from-blue-50 to-blue-100" },
                  { name: "ANSYS", users: "5+ Seats", color: "from-green-50 to-green-100" },
                  { name: "Revit", users: "8+ Seats", color: "from-purple-50 to-purple-100" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${item.color} p-6 text-center rounded-xl hover:shadow-lg transition-shadow cursor-default`}
                  >
                    <div className="font-black text-lg mb-1 text-slate-900">{item.name}</div>
                    <div className="text-sm text-[#D4AF37] font-bold">{item.users}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-light text-white mb-6 leading-tight">
                Ready to Start Your <span className="font-black text-[#D4AF37]">Design Journey?</span>
              </h2>
              <p className="text-slate-400 mb-12 text-lg">
                Let's discuss your project requirements and create a design that sets the foundation for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D4AF37] text-slate-900 px-10 py-4 font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-lg"
                >
                  <Send size={18} />
                  Submit Requirements
                </button>
                <button className="border border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center gap-2 rounded-lg">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT MODAL - IMPROVED */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              />

              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white w-full max-w-2xl relative overflow-hidden rounded-2xl shadow-2xl"
              >
                {/* Header */}
                <div className="bg-slate-900 p-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-light mb-2">
                        Engineering <span className="font-black text-[#D4AF37]">Consultation</span>
                      </h3>
                      <p className="text-slate-400 text-sm">Share your requirements and our team will respond within 24 hours</p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-slate-900"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                        Company
                      </label>
                      <input 
                        type="text" 
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-slate-900"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-slate-900"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-slate-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                      Project Type
                    </label>
                    <select className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-slate-900">
                      <option>Food Processing Plant</option>
                      <option>Grain Storage Facility</option>
                      <option>Material Handling System</option>
                      <option>Custom Equipment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                      Project Requirements *
                    </label>
                    <textarea 
                      rows="4" 
                      required
                      className="w-full border border-slate-200 p-4 focus:border-[#D4AF37] outline-none transition-colors resize-none rounded-lg text-slate-900"
                      placeholder="Describe your project requirements, capacity, timeline, etc."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-3 rounded-lg"
                  >
                    <Send size={18} />
                    Submit Engineering Request
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Our team will review your requirements and get back to you within 24 hours
                  </p>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />

      {/* Add keyframe animations for spinner */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 12s linear infinite;
        }
      `}</style>
    </>
  );
};

export default DesignAndStructure;