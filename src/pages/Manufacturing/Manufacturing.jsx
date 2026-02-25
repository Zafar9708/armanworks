import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, Factory, X, Building2, 
  Shield, Target, Clock, Users, MapPin, HardHat,
  Award, CheckCircle, ArrowUpRight, Maximize2,
  Wrench, Settings, Gauge, Layers, FileText,
  Phone, Mail, Calendar, Download, Image as ImageIcon
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ManufacturingFacilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const facilities = [
    {
      id: 1,
      name: "Precision Fabrication Division",
      description: "Advanced metal fabrication unit equipped with state-of-the-art CNC plasma cutting and robotic welding systems for high-precision component manufacturing.",
      image: "https://www.edgarindustries.com/wp-content/uploads/light_to_heavy_fabrication_large.jpg",
      area: "12,500 sq.ft",
      capacity: "150 tons/month",
      workforce: 48,
      equipment: ["CNC Plasma", "Robotic Welders", "Press Brakes", "Plate Rolls"],
      certifications: ["ISO 9001", "ASME"],
      established: "2010"
    },
    {
      id: 2,
      name: "Assembly & Integration Hub",
      description: "Dedicated assembly line for complete turnkey projects with modular workstations and comprehensive testing facilities.",
      image: "https://www.cementl.com/wp-content/uploads/2024/09/2vertical-roller-mill-solution-process-flow.webp",
      area: "15,000 sq.ft",
      capacity: "8 systems/month",
      workforce: 52,
      equipment: ["Overhead Cranes", "Conveyor Systems", "Test Rigs", "Alignment Tools"],
      certifications: ["ISO 9001"],
      established: "2015"
    },
    {
      id: 3,
      name: "Quality Assurance Laboratory",
      description: "Climate-controlled metrology lab with advanced inspection equipment ensuring micron-level accuracy for all manufactured components.",
      image: "https://swanispice.com/assets/images/quality-assurance-2.png",
      area: "3,200 sq.ft",
      accuracy: "±0.001mm",
      workforce: 12,
      equipment: ["CMM", "Laser Trackers", "Spectrometers", "Hardness Testers"],
      certifications: ["NABL", "ISO 17025"],
      established: "2020"
    },
    {
      id: 4,
      name: "CNC Machining Center",
      description: "High-precision machining facility with multi-axis CNC machines for complex component manufacturing.",
      image: "https://www.millscnc.co.uk/wp-content/uploads/2022/04/Mills-Volz-DVF-5000-2-2048x1371-1-875x625.jpeg",
      area: "8,500 sq.ft",
      machines: "15 units",
      workforce: 28,
      equipment: ["5-Axis CNC", "VMCs", "CNC Lathes", "EDM"],
      certifications: ["ISO 9001"],
      established: "2023"
    },
    {
      id: 5,
      name: "Heavy Fabrication Bay",
      description: "Specialized facility for heavy structural components with advanced material handling and welding capabilities.",
      image: "https://jaypee-hew.com/wp-content/uploads/2013/07/Picture25.jpg",
      area: "10,000 sq.ft",
      capacity: "200 tons/month",
      workforce: 35,
      equipment: ["Heavy Cranes", "Positioners", "Submerged Arc", "Shot Blasting"],
      certifications: ["ISO 3834"],
      established: "2025"
    },
    {
      id: 6,
      name: "R&D & Prototyping Lab",
      description: "Innovation center dedicated to developing new manufacturing processes and product improvements.",
      image: "https://i0.wp.com/www.protoshop.in/wp-content/uploads/2024/02/DPLabCompressed-scaled.webp?fit=1024%2C512&ssl=1",
      area: "4,000 sq.ft",
      projects: "8-10 annually",
      workforce: 15,
      equipment: ["3D Printers", "CAD/CAM", "Simulation Software", "Test Benches"],
      certifications: ["ISO 9001"],
      established: "2026"
    }
  ];

  // Equipment images array with names
  const equipmentImages = [
    { id: 1, name: "Laser Cutting Machine", src: "https://niceengineering.in/wp-content/uploads/2021/11/facility01.jpg" },
    { id: 2, name: "CNC Turret Punch Press", src: "https://cdn.shopify.com/s/files/1/0612/1019/8116/files/JFY_products_punching_pi_MT300E-2-1024x683.png?v=1760543130" },
    { id: 3, name: "Plasma Cutting Machine", src: "https://www.ibelltools.com/cdn/shop/files/IBLP60ProMain_665x700.jpg?v=1740047355" },
    { id: 4, name: "CNC Turning Machine", src: "https://www.cncmasters.com/wp-content/uploads/2023/03/Lathe.jpg" },
    { id: 5, name: "CNC Press Brake", src: "https://5.imimg.com/data5/UE/AL/BX/SELLER-2361754/cnc-press-brake-india.jpeg" },
    { id: 6, name: "CNC Bending Machine", src: "https://cpimg.tistatic.com/10309206/b/4/3-Phase-CNC-Bending-Machine-Automation-Grade-Fully-automatic.jpeg" },
    { id: 7, name: "Plate Roller", src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Plate_Roll.jpg" },
    { id: 8, name: "CNC Duct Forming Machine", src: "https://www.mytcnc.com/wp-content/uploads/2022/07/Spiral-Duct-Machine.png" },
    { id: 9, name: "Laser Welding Machine", src: "https://www.shen-chong.com/wp-content/uploads/2024/08/handheld-laser-welding-machine.jpg" },
    { id: 10, name: "Rooter Balancing Machine", src: "https://vtm.group/wp-content/uploads/2025/07/9a710.jpg" },
    { id: 11, name: "Power Press Machine", src: "https://5.imimg.com/data5/SELLER/Default/2023/12/373092019/AZ/NY/YA/143133929/100-ton-c-type-power-press-machine.jpg" },
    { id: 12, name: "Iron Worker Machine", src: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZJ/UO/YR/2469737/hiw-165-ton-hydraulic-multipurpose-iron-worker-machine.JPG" },
    { id: 13, name: "Spout Welding Machine", src: "https://image.made-in-china.com/202f0j00DZkocCrIbibQ/Whistling-Kettle-Spout-Welding-Machine-Stainless-Steel-Kettle-Lug-Ear-Spot-Welder.webp" },
    { id: 14, name: "Threading Machine", src: "https://niceengineering.in/wp-content/uploads/2021/11/facility09.jpg" },
    { id: 15, name: "MIG Welding Machine", src: "https://5.imimg.com/data5/EV/TG/MY-14456517/mig-250-amps-three-phase-welding-machine.png" },
    // { id: 16, name: "Power Press Machine", src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800" }
  ];

  const stats = [
    { icon: Building2, value: "53,200", label: "Total Sq.Ft", suffix: "ft²" },
    { icon: Users, value: "190", label: "Skilled Workforce", suffix: "+" },
    { icon: Award, value: "8", label: "Certifications", suffix: "" },
    { icon: Clock, value: "28", label: "Years Experience", suffix: "" }
  ];

  const capabilities = [
    { name: "CNC Machining", accuracy: "±0.005mm", capacity: "15 machines" },
    { name: "Fabrication", accuracy: "±0.1mm", capacity: "350 tons/month" },
    { name: "Welding", accuracy: "ASME Std", capacity: "12 stations" },
    { name: "Assembly", accuracy: "Modular", capacity: "8 systems/month" },
    { name: "Quality Control", accuracy: "ISO 17025", capacity: "100% inspection" },
    { name: "R&D", accuracy: "Innovation", capacity: "10 projects/year" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans">
        
        {/* HEADER SECTION */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-slate-500 mb-8"
            >
              <Home size={16} />
              <ChevronRight size={14} />
              <span className="text-slate-700">Manufacturing Facilities</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold mb-6">
                  OUR INFRASTRUCTURE
                </div>
                <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6">
                  Manufacturing
                  <span className="block font-bold text-[#D4AF37]">Excellence Center</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  A 53,200 square foot integrated manufacturing campus designed for 
                  precision engineering, quality assurance, and efficient production 
                  of turnkey industrial solutions.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="border-l-3 border-[#D4AF37] pl-4">
                      <stat.icon className="text-[#D4AF37] mb-2" size={24} />
                      <div className="text-2xl font-bold text-slate-900">
                        {stat.value}<span className="text-sm font-normal text-slate-400 ml-1">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="h-48 bg-slate-200 overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2x4SB8ae-SjF4B3SFw-7uf2-S0uipgvTcQ&s"
                      alt="Facility"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="h-64 bg-slate-200 overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS32Fh0beY0MeRh3zmqw-BLewe9HhBHMU-VQ&s"
                      alt="CNC"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 bg-slate-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                      alt="Fabrication"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="h-48 bg-slate-200 overflow-hidden">
                    <img 
                      src="https://www.architectmagazine.com/wp-content/uploads/sites/5/2025/06/09c53e039086419a907cefa62d8e0f5f.jpg?w=551"
                      alt="Quality"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT GALLERY SECTION - NEW */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-light text-slate-900 mb-4">
                Our <span className="font-bold text-[#D4AF37]">Equipment Gallery</span>
              </h2>
              <p className="text-slate-500">
                State-of-the-art machinery for precision manufacturing and fabrication
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipmentImages.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (item.id % 4) * 0.1 }}
                  className="group relative aspect-square overflow-hidden cursor-pointer bg-slate-50"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with name and icon on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm font-medium mb-2">{item.name}</p>
                      <div className="flex items-center gap-2 text-[#D4AF37]">
                        <Maximize2 size={16} />
                        <span className="text-xs">Click to view full</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES OVERVIEW */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-light text-slate-900 mb-4">
                Technical <span className="font-bold text-[#D4AF37]">Capabilities</span>
              </h2>
              <p className="text-slate-500">
                Advanced manufacturing technologies and processes delivering precision engineering solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-slate-100"
                >
                  <h3 className="font-bold text-slate-900 mb-3">{item.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Accuracy</span>
                      <span className="font-medium text-[#D4AF37]">{item.accuracy}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Capacity</span>
                      <span className="font-medium text-slate-700">{item.capacity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES GRID */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-light text-slate-900 mb-2">
                  Specialized <span className="font-bold text-[#D4AF37]">Divisions</span>
                </h2>
                <p className="text-slate-500">Six integrated manufacturing units working in synergy</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-slate-900 transition-colors">
                <Download size={16} />
                Download Brochure
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white border border-slate-200 hover:border-[#D4AF37] transition-all cursor-pointer"
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center gap-2 text-white text-sm font-medium">
                        View Details <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-2">
                      <MapPin size={12} />
                      <span>Est. {facility.established}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                      {facility.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>{facility.area}</span>
                      <span>•</span>
                      <span>{facility.workforce} Workers</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & STANDARDS */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-light text-slate-900 mb-4">
                  Quality <span className="font-bold text-[#D4AF37]">Certifications</span>
                </h2>
                <p className="text-slate-500 mb-8">
                  Our commitment to quality is validated by international certifications and accreditations
                </p>
                
                <div className="space-y-4">
                  {[
                    { standard: "ISO 9001:2010", desc: "Quality Management Systems" },
                    { standard: "ISO 3834-2", desc: "Welding Quality Requirements" },
                    { standard: "ISO 17025", desc: "Testing Laboratory Competence" },
                    { standard: "ASME Section IX", desc: "Welding Qualifications" }
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                        <CheckCircle size={14} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{cert.standard}</h4>
                        <p className="text-sm text-slate-500">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: "Safety First", value: "Zero Accidents" },
                  { icon: Target, label: "Quality Focus", value: "Six Sigma" },
                  { icon: Gauge, label: "Efficiency", value: "98% OEE" },
                  { icon: Users, label: "Training", value: "Certified Staff" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 text-center border border-slate-100">
                    <item.icon className="mx-auto mb-3 text-[#D4AF37]" size={32} />
                    <div className="text-sm font-medium text-slate-500 mb-1">{item.label}</div>
                    <div className="font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="bg-slate-900 p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-light text-white mb-4">
                    Schedule a <span className="font-bold text-[#D4AF37]">Facility Tour</span>
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Experience our manufacturing capabilities firsthand. Schedule a guided tour of our facilities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center">
                        <Phone size={18} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Call Us</div>
                        <div className="font-medium">+91 9898898219</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center">
                        <Mail size={18} className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Email</div>
                        <div className="font-medium">sales@armanengineering.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#D4AF37] text-white py-4 px-6 font-medium hover:bg-[#c09a2c] transition-colors flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Schedule Tour
                  </button>
                  <button className="border border-white text-white py-4 px-6 font-medium hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Get Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITY DETAIL MODAL */}
        <AnimatePresence>
          {selectedFacility && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/70"
              onClick={() => setSelectedFacility(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative max-w-4xl w-full bg-white max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="h-80 overflow-hidden">
                  <img 
                    src={selectedFacility.image}
                    alt={selectedFacility.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 text-[#D4AF37] text-sm font-medium mb-4">
                    <HardHat size={16} />
                    <span>Established {selectedFacility.established}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {selectedFacility.name}
                  </h3>

                  <p className="text-slate-500 mb-8">
                    {selectedFacility.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 text-center">
                      <div className="text-sm text-slate-500 mb-1">Area</div>
                      <div className="font-bold text-slate-900">{selectedFacility.area}</div>
                    </div>
                    <div className="bg-slate-50 p-4 text-center">
                      <div className="text-sm text-slate-500 mb-1">Workforce</div>
                      <div className="font-bold text-slate-900">{selectedFacility.workforce}</div>
                    </div>
                    <div className="bg-slate-50 p-4 text-center">
                      <div className="text-sm text-slate-500 mb-1">Capacity</div>
                      <div className="font-bold text-slate-900">{selectedFacility.capacity || selectedFacility.machines || selectedFacility.accuracy}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Key Equipment</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFacility.equipment.map((item, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-100 text-sm text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedFacility.certifications && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-3">Certifications</h4>
                      <div className="flex gap-2">
                        {selectedFacility.certifications.map((cert, i) => (
                          <span key={i} className="px-3 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IMAGE FULLSCREEN MODAL - NEW */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">Close</span>
                  <X size={20} />
                </button>
                
                <img
                  src={selectedImage.src}
                  alt={selectedImage.name}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-medium">{selectedImage.name}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default ManufacturingFacilities;