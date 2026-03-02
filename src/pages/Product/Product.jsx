// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Search, X, Send, Phone, Mail, MapPin, Star, IndianRupee,
//   MessageCircle, FileText, Download, Users, Award, Clock,
//   Shield, Truck, HeadphonesIcon, ThumbsUp, Calendar, Briefcase,
//   AlertCircle, Wind, Package, Fan, Cpu, Cog, Filter, Hammer,
//   Move, Factory, Settings, Grid, List, ChevronRight, Box, Gem,
//   ChevronRight as ChevronRightIcon, Home, Compass
// } from 'lucide-react';
// import Footer from '../../components/home/Footer';
// import Navbar from '../../components/home/Navbar';

// const ProductsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('separator');
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
//   const [selectedPriceProduct, setSelectedPriceProduct] = useState(null);
//   const [brochureLoading, setBrochureLoading] = useState(null);

//   const categories = [
//     { id: 'separator', name: 'Gravity Separators', icon: Wind, count: 3, color: 'bg-blue-500' },
//     { id: 'processing', name: 'Food Processing', icon: Cpu, count: 1, color: 'bg-green-500' },
//     { id: 'mill', name: 'Mill Machines', icon: Cog, count: 2, color: 'bg-purple-500' },
//     { id: 'conveyor', name: 'Conveyors', icon: Move, count: 1, color: 'bg-orange-500' },
//     { id: 'classifier', name: 'Air Classifiers', icon: Filter, count: 1, color: 'bg-cyan-500' },
//     { id: 'cleaning', name: 'Cleaning Plants', icon: Factory, count: 1, color: 'bg-emerald-500' },
//     { id: 'destoner', name: 'Destoners', icon: Hammer, count: 1, color: 'bg-red-500' },
//     { id: 'pump', name: 'Centrifugal Fans', icon: Fan, count: 1, color: 'bg-indigo-500' },
//     { id: 'pneumatic', name: 'Pneumatic', icon: Settings, count: 1, color: 'bg-pink-500' },
//     { id: 'sealing', name: 'Sealing Machines', icon: Package, count: 1, color: 'bg-amber-500' }
//   ];

//   const products = [
//     // GRAVITY SEPARATORS (3 products)
//     {
//       id: 1,
//       name: "5 HP Automatic Gravity Separator",
//       category: "separator",
//       price: "2,65,000",
//       priceUnit: "Piece",
//       description: "Arman Powder Coated 5 HP Automatic Gravity Separator, 20 ton/day capacity",
//       fullDescription: "This automatic gravity separator is designed for separating any kinds of kernels and granular products with nearly the same size according to the specific gravity. Ideal for grain processing industries.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
//       images: 2,
//       specs: {
//         power: "5 HP",
//         electricConnection: "Single Phase",
//         operationMode: "Automatic",
//         capacity: "20 ton/day",
//         material: "SS 304",
//         surfaceFinish: "Powder Coated",
//         brand: "Arman",
//         automationGrade: "Automatic"
//       },
//       highlights: ["High Efficiency", "Low Maintenance", "Precision Separation"],
//       icon: Wind,
//       rating: 4.8,
//       reviews: 45,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 2,
//       name: "3 HP Automatic Gravity Separator",
//       category: "separator",
//       price: "2,75,000",
//       priceUnit: "Piece",
//       description: "Powder Coated Single Phase 3 HP Automatic Gravity Separator, 20 ton/day",
//       fullDescription: "This 3 HP automatic gravity separator offers efficient separation of granular products based on specific gravity. Features single phase connection and powder coated finish for durability.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         power: "3 HP",
//         electricConnection: "Single Phase",
//         operationMode: "Automatic",
//         capacity: "20 ton/day",
//         material: "SS 304",
//         surfaceFinish: "Powder Coated"
//       },
//       highlights: ["Energy Efficient", "Compact Design", "Easy Operation"],
//       icon: Wind,
//       rating: 4.7,
//       reviews: 38,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 3,
//       name: "5 Fan Gravity Separator",
//       category: "separator",
//       price: "3,05,000",
//       priceUnit: "Piece",
//       description: "Automatic Powder Coated 5 Fan Gravity Separator, 80 ton/day capacity",
//       fullDescription: "High-capacity gravity separator with 5 fans for enhanced separation efficiency. Ideal for large-scale grain processing operations requiring high throughput.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
//       images: 1,
//       specs: {
//         power: "7 HP",
//         electricConnection: "Three Phase",
//         operationMode: "Automatic",
//         capacity: "80 ton/day",
//         material: "MS",
//         surfaceFinish: "Powder Coated",
//         machineType: "Automatic"
//       },
//       highlights: ["High Capacity", "5 Fan System", "Industrial Grade"],
//       icon: Wind,
//       rating: 4.9,
//       reviews: 52,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 4,
//       name: "Automatic Food Processing Plant",
//       category: "processing",
//       price: "8,50,000",
//       priceUnit: "Piece",
//       description: "Mild Steel Automatic Food Processing Plant, 100 kg/hr capacity",
//       fullDescription: "Complete food processing solution for grinding applications. Features automatic operation, mild steel construction, and 10 HP motor power.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         capacity: "100 kg/hr",
//         automationGrade: "Automatic",
//         application: "Grinding",
//         material: "Mild Steel",
//         power: "10 HP",
//         frequency: "50Hz",
//         voltage: "240V"
//       },
//       highlights: ["High Output", "Versatile Application", "Durable Construction"],
//       icon: Cpu,
//       rating: 4.6,
//       reviews: 28,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 5,
//       name: "Automatic Drum Cap Sealing Machine",
//       category: "sealing",
//       price: "25,000",
//       priceUnit: "Piece",
//       description: "Automatic Drum Cap Sealing Machine, 100 caps/min capacity",
//       fullDescription: "Electric driven automatic drum cap sealing machine for industrial packaging. Features 2 HP power, 240V voltage, and EN8 material grade construction.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
//       images: 1,
//       specs: {
//         automationGrade: "Automatic",
//         drivenType: "Electric",
//         capacity: "100 caps/min",
//         voltage: "240V",
//         materialGrade: "EN8",
//         material: "Mild Steel",
//         power: "2 HP",
//         frequency: "50Hz"
//       },
//       highlights: ["High Speed", "Precision Sealing", "Easy Operation"],
//       icon: Package,
//       rating: 4.5,
//       reviews: 18,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 6,
//       name: "Automatic Flour Mill Plant",
//       category: "mill",
//       price: "8,50,000",
//       priceUnit: "Piece",
//       description: "50 HP Automatic Flour Mill Plant, 1000 kg/hr capacity",
//       fullDescription: "High-capacity automatic flour mill plant for commercial applications. Features 50 HP motor, three phase connection, and mild steel construction.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         capacity: "1000 kg/hr",
//         motorPower: "50 HP",
//         operationMode: "Automatic",
//         material: "Mild Steel",
//         electricityConnection: "Three Phase",
//         usageApplication: "Commercial",
//         frequency: "50Hz",
//         voltage: "420V"
//       },
//       highlights: ["High Capacity", "Commercial Grade", "Energy Efficient"],
//       icon: Cog,
//       rating: 4.8,
//       reviews: 64,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 7,
//       name: "Mild Steel Flat Belt Conveyor",
//       category: "conveyor",
//       price: "8,500",
//       priceUnit: "Meter",
//       minOrder: "50 Meter",
//       description: "Mild Steel Flat Belt Conveyor, Load Capacity: 400 kg",
//       fullDescription: "Flat belt conveyor for packaging applications. Features 400 kg load capacity, automatic operation, and mild steel construction.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
//       images: 1,
//       specs: {
//         type: "Flat Belt Conveyor",
//         loadCapacity: "400 kg",
//         usageApplication: "Packaging",
//         automationGrade: "Automatic",
//         frequency: "50Hz",
//         material: "Mild Steel"
//       },
//       highlights: ["Durable Construction", "Smooth Operation", "Low Maintenance"],
//       icon: Move,
//       rating: 4.6,
//       reviews: 32,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 8,
//       name: "Air Classifier Machine",
//       category: "classifier",
//       price: "2,85,000",
//       priceUnit: "Piece",
//       description: "Air Classifier Machine, 500 kg/hr capacity for paddy",
//       fullDescription: "An air classifier is an industrial machine that separates dry powder materials into fine and coarse fractions based on their size and shape. It uses air currents and centrifugal force to sort particles, typically in closed-circuit grinding systems.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         capacity: "500 kg/hr",
//         material: "Mild Steel",
//         classifierApplication: "Paddy",
//         automationGrade: "Automatic",
//         voltage: "240V",
//         motor: "2 HP"
//       },
//       highlights: ["Precision Separation", "Energy Efficient", "Low Maintenance"],
//       icon: Filter,
//       rating: 4.7,
//       reviews: 23,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 9,
//       name: "Fully Automatic Sortex Cleaning Plant",
//       category: "cleaning",
//       price: "45,00,000",
//       priceUnit: "Piece",
//       description: "Fully Automatic Sortex Cleaning Plant, 4 Ton capacity",
//       fullDescription: "Complete cleaning solution with 80 HP power, three phase connection, and automatic operation. Ideal for industrial cleaning applications.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
//       images: 1,
//       specs: {
//         usageApplication: "Cleaning",
//         typeOfMachines: "Cleaning Machine",
//         automationGrade: "Automatic",
//         capacity: "4 Ton",
//         material: "Mild Steel",
//         power: "80 HP",
//         powerSource: "AC",
//         voltage: "440V",
//         phase: "Three Phase",
//         frequency: "50Hz"
//       },
//       highlights: ["High Capacity", "Fully Automatic", "Industrial Grade"],
//       icon: Factory,
//       rating: 4.9,
//       reviews: 41,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 10,
//       name: "Automatic Dal Mill Machine",
//       category: "mill",
//       price: "1,80,000",
//       priceUnit: "Piece",
//       description: "Automatic Dal Mill Machine, Single Phase, 200 kg/hr capacity",
//       fullDescription: "Automatic dal mill machine for all pulses processing. Features 3 HP motor, SS 304 construction, and 70% head pulses recovery.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         capacity: "200 kg/hr",
//         operationMode: "Automatic",
//         typeOfPulses: "All Pulses",
//         electricityConnection: "Single Phase",
//         motorPower: "3 HP",
//         material: "SS 304",
//         powerConsumption: "2 Kwh",
//         headPulsesRecovery: "70%"
//       },
//       highlights: ["High Recovery", "SS 304 Construction", "Versatile"],
//       icon: Cog,
//       rating: 4.7,
//       reviews: 36,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 11,
//       name: "Automatic Vibro Destoner Machine",
//       category: "destoner",
//       price: "2,55,000",
//       priceUnit: "Piece",
//       description: "MS Powder Coated Automatic Vibro Destoner Machine, Three Phase, 2 Ton/Day",
//       fullDescription: "Vibro destoner machine for industrial applications. Features 2 HP motor, three phase connection, and powder coated finish.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
//       images: 1,
//       specs: {
//         capacity: "2 Ton/day",
//         operationMode: "Automatic",
//         electricityConnection: "Three Phase",
//         motorPower: "2 HP",
//         material: "MS",
//         voltage: "420 V",
//         surfaceFinish: "Powder Coated",
//         usageApplication: "Industrial"
//       },
//       highlights: ["Efficient Separation", "Durable Construction", "Low Maintenance"],
//       icon: Hammer,
//       rating: 4.6,
//       reviews: 29,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 12,
//       name: "5 HP Industrial Centrifugal Fan",
//       category: "pump",
//       price: "55,000",
//       priceUnit: "Piece",
//       description: "Wall Mounted 5 HP Industrial Centrifugal Fan, For Commercial Use",
//       fullDescription: "Centrifugal fan with 3 kW motor power, 10 Bar pressure, and 1200 RPM speed. Ideal for commercial ventilation applications.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
//       images: 1,
//       specs: {
//         motorPower: "3 kW",
//         type: "Centrifugal Fan",
//         bladeMaterial: "Mild Steel",
//         pressure: "10 Bar",
//         mountingType: "Wall",
//         electricCurrentType: "AC",
//         fanSpeed: "1200 RPM",
//         usageApplication: "Commercial"
//       },
//       highlights: ["High Airflow", "Wall Mountable", "Industrial Grade"],
//       icon: Fan,
//       rating: 4.5,
//       reviews: 17,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     },
//     {
//       id: 13,
//       name: "Hydraulic Pneumatic Equipment",
//       category: "pneumatic",
//       price: "85,000",
//       priceUnit: "Piece",
//       description: "Hydraulic Pneumatic Equipment, Capacity: 100kg/hr",
//       fullDescription: "Hydraulic systems with the potential to handle heavier loads and produce more work than pneumatic systems. Features 10 Ton max force.",
//       image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
//       images: 1,
//       specs: {
//         material: "Mild Steel",
//         capacity: "100kg/hr",
//         automationGrade: "Automatic",
//         maxForce: "10 Ton",
//         type: "Hydraulic"
//       },
//       highlights: ["High Force", "Reliable Performance", "Industrial Grade"],
//       icon: Settings,
//       rating: 4.6,
//       reviews: 21,
//       soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
//     }
//   ];

//   const currentCategoryProducts = products.filter(p => p.category === selectedCategory);
//   const categoryInfo = categories.find(c => c.id === selectedCategory);

//   const handleGetPrice = (product) => {
//     setSelectedPriceProduct(product);
//     setIsPriceModalOpen(true);
//   };

//   const handleWhatsApp = (product) => {
//     const message = encodeURIComponent(`Hello, I'm interested in ${product.name} (₹${product.price}/${product.priceUnit}). Please share more details.`);
//     window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
//   };

//   const handleBrochureDownload = (product) => {
//     setBrochureLoading(product.id);
//     setTimeout(() => {
//       setBrochureLoading(null);
//       alert(`Brochure for ${product.name} will be downloaded.`);
//     }, 1000);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-white font-sans">

//         {/* Hero Section - Restored */}
//         <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 pt-32 pb-24 overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0" style={{
//               backgroundImage: 'url("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070")',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               mixBlendMode: 'overlay'
//             }}></div>
//           </div>

//           <div className="container mx-auto px-6 lg:px-20 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-4xl"
//             >
//               <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium mb-6">
//                 <Gem size={18} />
//                 <span className="tracking-wider">PREMIUM INDUSTRIAL PRODUCTS</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
//                 Quality <span className="font-bold text-[#D4AF37]">Equipment</span> <br />for Every Industry
//               </h1>
//               <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
//                 Explore our comprehensive range of industrial machinery including gravity separators,
//                 food processing plants, conveyors, classifiers, and more.
//               </p>

//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {[
//                   { value: "50+", label: "Products", icon: Box },
//                   { value: "25+", label: "Years", icon: Calendar },
//                   { value: "1000+", label: "Happy Clients", icon: Users },
//                   { value: "All India", label: "Delivery", icon: MapPin }
//                 ].map((stat, index) => {
//                   const Icon = stat.icon;
//                   return (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-lg">
//                         <Icon className="text-[#D4AF37]" size={20} />
//                       </div>
//                       <div>
//                         <div className="text-xl font-bold text-white">{stat.value}</div>
//                         <div className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Breadcrumb */}
//         <div className="bg-slate-50 border-b border-slate-100 py-4">
//           <div className="container mx-auto px-6 lg:px-20">
//             <div className="flex items-center gap-2 text-sm text-slate-500">
//               <Home size={14} />
//               <ChevronRightIcon size={12} />
//               <span>Products</span>
//               <ChevronRightIcon size={12} />
//               <span className="text-[#D4AF37] font-medium">{categoryInfo?.name}</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content - Sidebar Layout */}
//         <div className="container mx-auto px-6 lg:px-20 py-12">
//           <div className="flex flex-col lg:flex-row gap-8">
            
//             {/* Sidebar - Categories */}
//             <div className="lg:w-72 flex-shrink-0">
//               <div className="sticky top-24">
//                 <div className="mb-6">
//                   <div className="relative">
//                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//                     <input
//                       type="text"
//                       placeholder="Search products..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full pl-12 pr-4 py-3 border-0 bg-slate-50 focus:bg-white transition-colors text-sm outline-none"
//                     />
//                   </div>
//                 </div>

//                 <p className="text-[10px] font-black text-slate-300 uppercase tracking-wider mb-4">Categories</p>
                
//                 <div className="space-y-1">
//                   {categories.map((cat) => {
//                     const Icon = cat.icon;
//                     const isActive = selectedCategory === cat.id;
//                     return (
//                       <button
//                         key={cat.id}
//                         onClick={() => setSelectedCategory(cat.id)}
//                         className={`w-full flex items-center justify-between p-4 transition-all ${
//                           isActive 
//                             ? 'bg-[#D4AF37] text-white' 
//                             : 'hover:bg-slate-50 text-slate-600'
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <Icon size={18} />
//                           <span className="text-sm font-medium">{cat.name}</span>
//                         </div>
//                         <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
//                           {cat.count}
//                         </div>
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <div className="mt-8 p-6 bg-slate-50">
//                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-wider mb-3">Need Help?</p>
//                   <p className="text-xs text-slate-500 mb-4">Our team is here to assist you</p>
//                   <button
//                     onClick={() => setIsContactOpen(true)}
//                     className="w-full bg-slate-900 text-white py-3 text-xs font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
//                   >
//                     <Send size={14} />
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Content - Products */}
//             <div className="flex-1">
              
//               {/* Category Header */}
//               <div className="mb-8">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className={`w-10 h-10 ${categoryInfo?.color} bg-opacity-10 flex items-center justify-center`}>
//                     {categoryInfo && <categoryInfo.icon className={categoryInfo.color} size={20} />}
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-slate-900">{categoryInfo?.name}</h2>
//                     <p className="text-xs text-slate-400">{currentCategoryProducts.length} products available</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Products Grid - Borderless Square Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {currentCategoryProducts.map((product, index) => {
//                   const Icon = product.icon;
//                   return (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="bg-slate-50 p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
//                     >
//                       {/* Image Area - Square */}
//                       <div className="aspect-square bg-white mb-6 overflow-hidden">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="space-y-4">
//                         {/* Title and Rating */}
//                         <div>
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className="text-base font-bold text-slate-900 line-clamp-1">
//                               {product.name}
//                             </h3>
//                             <div className="flex items-center gap-1 bg-white px-2 py-1">
//                               <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
//                               <span className="text-xs font-bold text-slate-700">{product.rating}</span>
//                             </div>
//                           </div>
//                           <p className="text-xs text-slate-500 line-clamp-2">
//                             {product.fullDescription}
//                           </p>
//                         </div>

//                         {/* Highlights */}
//                         <div className="flex flex-wrap gap-1">
//                           {product.highlights.map((h, i) => (
//                             <span key={i} className="text-[8px] bg-white text-slate-600 px-2 py-1">
//                               {h}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Price */}
//                         <div>
//                           <span className="text-2xl font-black text-[#D4AF37]">₹{product.price}</span>
//                           <span className="text-xs text-slate-400 ml-1">/{product.priceUnit}</span>
//                         </div>

//                         {/* Specs - 2x2 Grid */}
//                         <div className="grid grid-cols-2 gap-2">
//                           {Object.entries(product.specs).slice(0, 4).map(([key, value], i) => (
//                             <div key={i} className="bg-white p-2">
//                               <p className="text-[7px] font-black text-slate-400 uppercase tracking-wider mb-1">
//                                 {key.replace(/([A-Z])/g, ' $1').trim()}
//                               </p>
//                               <p className="text-[9px] font-bold text-slate-700 truncate">{value}</p>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Actions */}
//                         <div className="grid grid-cols-3 gap-2 pt-2">
//                           <button
//                             onClick={() => handleGetPrice(product)}
//                             className="bg-[#D4AF37] text-white py-3 text-[8px] font-black uppercase tracking-wider hover:bg-slate-900 transition-colors flex items-center justify-center gap-1"
//                           >
//                             <IndianRupee size={12} />
//                             Price
//                           </button>
//                           <button
//                             onClick={() => handleBrochureDownload(product)}
//                             disabled={brochureLoading === product.id}
//                             className="bg-white text-slate-600 py-3 text-[8px] font-black uppercase tracking-wider hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center justify-center gap-1 disabled:opacity-50"
//                           >
//                             {brochureLoading === product.id ? (
//                               <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
//                             ) : (
//                               <>
//                                 <FileText size={12} />
//                                 PDF
//                               </>
//                             )}
//                           </button>
//                           <button
//                             onClick={() => handleWhatsApp(product)}
//                             className="bg-green-500 text-white py-3 text-[8px] font-black uppercase tracking-wider hover:bg-green-600 transition-colors flex items-center justify-center gap-1"
//                           >
//                             <MessageCircle size={12} />
//                             Chat
//                           </button>
//                         </div>

//                         {product.minOrder && (
//                           <p className="text-[8px] text-slate-400 text-center bg-white py-2">
//                             Min. Order: {product.minOrder}
//                           </p>
//                         )}
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* No Results */}
//               {currentCategoryProducts.length === 0 && (
//                 <div className="text-center py-20">
//                   <AlertCircle className="mx-auto text-slate-300 mb-4" size={48} />
//                   <p className="text-slate-500 mb-4">No products found in this category</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="bg-slate-900 py-12 mt-12">
//           <div className="container mx-auto px-6 lg:px-20">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { icon: Award, value: "25+", label: "Years" },
//                 { icon: Package, value: "50+", label: "Products" },
//                 { icon: Users, value: "500+", label: "Clients" },
//                 { icon: Shield, value: "100%", label: "Quality" }
//               ].map((stat, i) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={i} className="text-center">
//                     <Icon className="mx-auto text-[#D4AF37] mb-3" size={24} />
//                     <div className="text-2xl font-bold text-white">{stat.value}</div>
//                     <div className="text-xs text-slate-400">{stat.label}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Contact Modal */}
//         <AnimatePresence>
//           {isContactOpen && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setIsContactOpen(false)}
//                 className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
//               />

//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: 40 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 40 }}
//                 className="bg-white w-full max-w-2xl relative overflow-hidden shadow-2xl"
//               >
//                 <div className="bg-slate-900 p-8 text-white">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-2xl font-black mb-2">Get Quote</h3>
//                       <p className="text-slate-400 text-sm">Fill the form and our team will respond within 24 hours</p>
//                     </div>
//                     <button
//                       onClick={() => setIsContactOpen(false)}
//                       className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>

//                 <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
//                   <div className="grid md:grid-cols-2 gap-5">
//                     <div>
//                       <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
//                         placeholder="John Smith"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
//                         Company Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
//                         placeholder="Company Name"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-5">
//                     <div>
//                       <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
//                         Phone *
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
//                       Requirement Details *
//                     </label>
//                     <textarea
//                       rows="4"
//                       required
//                       className="w-full border border-slate-200 p-4 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold resize-none"
//                       placeholder="Describe your requirements..."
//                     />
//                   </div>

//                   <div className="flex gap-4 pt-4">
//                     <button
//                       type="submit"
//                       className="flex-1 bg-slate-900 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
//                     >
//                       <Send size={14} />
//                       Submit Request
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => window.open('https://wa.me/919998551985', '_blank')}
//                       className="flex-1 bg-green-600 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//                     >
//                       <MessageCircle size={14} />
//                       WhatsApp
//                     </button>
//                   </div>
//                 </form>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>

//         {/* Price Modal */}
//         <AnimatePresence>
//           {isPriceModalOpen && selectedPriceProduct && (
//             <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setIsPriceModalOpen(false)}
//                 className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//               />
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-white w-full max-w-md overflow-hidden shadow-2xl relative z-10"
//               >
//                 <div className="relative h-40">
//                   <img
//                     src={selectedPriceProduct.image}
//                     alt={selectedPriceProduct.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => setIsPriceModalOpen(false)}
//                     className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-slate-900 mb-2">{selectedPriceProduct.name}</h3>
//                   <p className="text-sm text-slate-500 mb-4 line-clamp-2">{selectedPriceProduct.fullDescription}</p>
//                   <div className="mb-4 p-5 bg-[#D4AF37]/5">
//                     <p className="text-xs text-slate-500 mb-1">Price</p>
//                     <p className="text-3xl font-bold text-[#D4AF37]">
//                       ₹{selectedPriceProduct.price}
//                       <span className="text-sm text-slate-400 ml-1">/{selectedPriceProduct.priceUnit}</span>
//                     </p>
//                   </div>
//                   <p className="text-sm text-slate-500 mb-5">Sold by: <span className="font-semibold text-slate-700">{selectedPriceProduct.soldBy}</span></p>
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => {
//                         setIsPriceModalOpen(false);
//                         setIsContactOpen(true);
//                       }}
//                       className="flex-1 bg-slate-900 text-white py-3 text-sm font-bold hover:bg-[#D4AF37] transition-colors"
//                     >
//                       Request Quote
//                     </button>
//                     <button
//                       onClick={() => handleWhatsApp(selectedPriceProduct)}
//                       className="flex-1 bg-green-600 text-white py-3 text-sm font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
//                     >
//                       <MessageCircle size={16} />
//                       WhatsApp
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductsPage;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Send, Phone, Mail, MapPin, Star, IndianRupee,
  MessageCircle, FileText, Download, Users, Award, Clock,
  Shield, Truck, HeadphonesIcon, ThumbsUp, Calendar, Briefcase,
  AlertCircle, Wind, Package, Fan, Cpu, Cog, Filter, Hammer,
  Move, Factory, Settings, Grid, List, ChevronRight, Box, Gem,
  ChevronRight as ChevronRightIcon, Home, Compass
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('separator');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [brochureLoading, setBrochureLoading] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: ''
  });

  const categories = [
    { id: 'separator', name: 'Gravity Separators', icon: Wind, count: 3, color: 'bg-blue-500' },
    { id: 'processing', name: 'Food Processing', icon: Cpu, count: 1, color: 'bg-green-500' },
    { id: 'mill', name: 'Mill Machines', icon: Cog, count: 2, color: 'bg-purple-500' },
    { id: 'conveyor', name: 'Conveyors', icon: Move, count: 1, color: 'bg-orange-500' },
    { id: 'classifier', name: 'Air Classifiers', icon: Filter, count: 1, color: 'bg-cyan-500' },
    { id: 'cleaning', name: 'Cleaning Plants', icon: Factory, count: 1, color: 'bg-emerald-500' },
    { id: 'destoner', name: 'Destoners', icon: Hammer, count: 1, color: 'bg-red-500' },
    { id: 'pump', name: 'Centrifugal Fans', icon: Fan, count: 1, color: 'bg-indigo-500' },
    { id: 'pneumatic', name: 'Pneumatic', icon: Settings, count: 1, color: 'bg-pink-500' },
    { id: 'sealing', name: 'Sealing Machines', icon: Package, count: 1, color: 'bg-amber-500' }
  ];

  const products = [
    // GRAVITY SEPARATORS (3 products)
    {
      id: 1,
      name: "5 HP Automatic Gravity Separator",
      category: "separator",
      price: "2,65,000",
      priceUnit: "Piece",
      description: "Arman Powder Coated 5 HP Automatic Gravity Separator, 20 ton/day capacity",
      fullDescription: "This automatic gravity separator is designed for separating any kinds of kernels and granular products with nearly the same size according to the specific gravity. Ideal for grain processing industries.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      images: 2,
      specs: {
        power: "5 HP",
        electricConnection: "Single Phase",
        operationMode: "Automatic",
        capacity: "20 ton/day",
        material: "SS 304",
        surfaceFinish: "Powder Coated",
        brand: "Arman",
        automationGrade: "Automatic"
      },
      highlights: ["High Efficiency", "Low Maintenance", "Precision Separation"],
      icon: Wind,
      rating: 4.8,
      reviews: 45,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 2,
      name: "3 HP Automatic Gravity Separator",
      category: "separator",
      price: "2,75,000",
      priceUnit: "Piece",
      description: "Powder Coated Single Phase 3 HP Automatic Gravity Separator, 20 ton/day",
      fullDescription: "This 3 HP automatic gravity separator offers efficient separation of granular products based on specific gravity. Features single phase connection and powder coated finish for durability.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        power: "3 HP",
        electricConnection: "Single Phase",
        operationMode: "Automatic",
        capacity: "20 ton/day",
        material: "SS 304",
        surfaceFinish: "Powder Coated"
      },
      highlights: ["Energy Efficient", "Compact Design", "Easy Operation"],
      icon: Wind,
      rating: 4.7,
      reviews: 38,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 3,
      name: "5 Fan Gravity Separator",
      category: "separator",
      price: "3,05,000",
      priceUnit: "Piece",
      description: "Automatic Powder Coated 5 Fan Gravity Separator, 80 ton/day capacity",
      fullDescription: "High-capacity gravity separator with 5 fans for enhanced separation efficiency. Ideal for large-scale grain processing operations requiring high throughput.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      images: 1,
      specs: {
        power: "7 HP",
        electricConnection: "Three Phase",
        operationMode: "Automatic",
        capacity: "80 ton/day",
        material: "MS",
        surfaceFinish: "Powder Coated",
        machineType: "Automatic"
      },
      highlights: ["High Capacity", "5 Fan System", "Industrial Grade"],
      icon: Wind,
      rating: 4.9,
      reviews: 52,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 4,
      name: "Automatic Food Processing Plant",
      category: "processing",
      price: "8,50,000",
      priceUnit: "Piece",
      description: "Mild Steel Automatic Food Processing Plant, 100 kg/hr capacity",
      fullDescription: "Complete food processing solution for grinding applications. Features automatic operation, mild steel construction, and 10 HP motor power.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        capacity: "100 kg/hr",
        automationGrade: "Automatic",
        application: "Grinding",
        material: "Mild Steel",
        power: "10 HP",
        frequency: "50Hz",
        voltage: "240V"
      },
      highlights: ["High Output", "Versatile Application", "Durable Construction"],
      icon: Cpu,
      rating: 4.6,
      reviews: 28,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 5,
      name: "Automatic Drum Cap Sealing Machine",
      category: "sealing",
      price: "25,000",
      priceUnit: "Piece",
      description: "Automatic Drum Cap Sealing Machine, 100 caps/min capacity",
      fullDescription: "Electric driven automatic drum cap sealing machine for industrial packaging. Features 2 HP power, 240V voltage, and EN8 material grade construction.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      images: 1,
      specs: {
        automationGrade: "Automatic",
        drivenType: "Electric",
        capacity: "100 caps/min",
        voltage: "240V",
        materialGrade: "EN8",
        material: "Mild Steel",
        power: "2 HP",
        frequency: "50Hz"
      },
      highlights: ["High Speed", "Precision Sealing", "Easy Operation"],
      icon: Package,
      rating: 4.5,
      reviews: 18,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 6,
      name: "Automatic Flour Mill Plant",
      category: "mill",
      price: "8,50,000",
      priceUnit: "Piece",
      description: "50 HP Automatic Flour Mill Plant, 1000 kg/hr capacity",
      fullDescription: "High-capacity automatic flour mill plant for commercial applications. Features 50 HP motor, three phase connection, and mild steel construction.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        capacity: "1000 kg/hr",
        motorPower: "50 HP",
        operationMode: "Automatic",
        material: "Mild Steel",
        electricityConnection: "Three Phase",
        usageApplication: "Commercial",
        frequency: "50Hz",
        voltage: "420V"
      },
      highlights: ["High Capacity", "Commercial Grade", "Energy Efficient"],
      icon: Cog,
      rating: 4.8,
      reviews: 64,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 7,
      name: "Mild Steel Flat Belt Conveyor",
      category: "conveyor",
      price: "8,500",
      priceUnit: "Meter",
      minOrder: "50 Meter",
      description: "Mild Steel Flat Belt Conveyor, Load Capacity: 400 kg",
      fullDescription: "Flat belt conveyor for packaging applications. Features 400 kg load capacity, automatic operation, and mild steel construction.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      images: 1,
      specs: {
        type: "Flat Belt Conveyor",
        loadCapacity: "400 kg",
        usageApplication: "Packaging",
        automationGrade: "Automatic",
        frequency: "50Hz",
        material: "Mild Steel"
      },
      highlights: ["Durable Construction", "Smooth Operation", "Low Maintenance"],
      icon: Move,
      rating: 4.6,
      reviews: 32,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 8,
      name: "Air Classifier Machine",
      category: "classifier",
      price: "2,85,000",
      priceUnit: "Piece",
      description: "Air Classifier Machine, 500 kg/hr capacity for paddy",
      fullDescription: "An air classifier is an industrial machine that separates dry powder materials into fine and coarse fractions based on their size and shape. It uses air currents and centrifugal force to sort particles, typically in closed-circuit grinding systems.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        capacity: "500 kg/hr",
        material: "Mild Steel",
        classifierApplication: "Paddy",
        automationGrade: "Automatic",
        voltage: "240V",
        motor: "2 HP"
      },
      highlights: ["Precision Separation", "Energy Efficient", "Low Maintenance"],
      icon: Filter,
      rating: 4.7,
      reviews: 23,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 9,
      name: "Fully Automatic Sortex Cleaning Plant",
      category: "cleaning",
      price: "45,00,000",
      priceUnit: "Piece",
      description: "Fully Automatic Sortex Cleaning Plant, 4 Ton capacity",
      fullDescription: "Complete cleaning solution with 80 HP power, three phase connection, and automatic operation. Ideal for industrial cleaning applications.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      images: 1,
      specs: {
        usageApplication: "Cleaning",
        typeOfMachines: "Cleaning Machine",
        automationGrade: "Automatic",
        capacity: "4 Ton",
        material: "Mild Steel",
        power: "80 HP",
        powerSource: "AC",
        voltage: "440V",
        phase: "Three Phase",
        frequency: "50Hz"
      },
      highlights: ["High Capacity", "Fully Automatic", "Industrial Grade"],
      icon: Factory,
      rating: 4.9,
      reviews: 41,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 10,
      name: "Automatic Dal Mill Machine",
      category: "mill",
      price: "1,80,000",
      priceUnit: "Piece",
      description: "Automatic Dal Mill Machine, Single Phase, 200 kg/hr capacity",
      fullDescription: "Automatic dal mill machine for all pulses processing. Features 3 HP motor, SS 304 construction, and 70% head pulses recovery.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        capacity: "200 kg/hr",
        operationMode: "Automatic",
        typeOfPulses: "All Pulses",
        electricityConnection: "Single Phase",
        motorPower: "3 HP",
        material: "SS 304",
        powerConsumption: "2 Kwh",
        headPulsesRecovery: "70%"
      },
      highlights: ["High Recovery", "SS 304 Construction", "Versatile"],
      icon: Cog,
      rating: 4.7,
      reviews: 36,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 11,
      name: "Automatic Vibro Destoner Machine",
      category: "destoner",
      price: "2,55,000",
      priceUnit: "Piece",
      description: "MS Powder Coated Automatic Vibro Destoner Machine, Three Phase, 2 Ton/Day",
      fullDescription: "Vibro destoner machine for industrial applications. Features 2 HP motor, three phase connection, and powder coated finish.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      images: 1,
      specs: {
        capacity: "2 Ton/day",
        operationMode: "Automatic",
        electricityConnection: "Three Phase",
        motorPower: "2 HP",
        material: "MS",
        voltage: "420 V",
        surfaceFinish: "Powder Coated",
        usageApplication: "Industrial"
      },
      highlights: ["Efficient Separation", "Durable Construction", "Low Maintenance"],
      icon: Hammer,
      rating: 4.6,
      reviews: 29,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 12,
      name: "5 HP Industrial Centrifugal Fan",
      category: "pump",
      price: "55,000",
      priceUnit: "Piece",
      description: "Wall Mounted 5 HP Industrial Centrifugal Fan, For Commercial Use",
      fullDescription: "Centrifugal fan with 3 kW motor power, 10 Bar pressure, and 1200 RPM speed. Ideal for commercial ventilation applications.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      images: 1,
      specs: {
        motorPower: "3 kW",
        type: "Centrifugal Fan",
        bladeMaterial: "Mild Steel",
        pressure: "10 Bar",
        mountingType: "Wall",
        electricCurrentType: "AC",
        fanSpeed: "1200 RPM",
        usageApplication: "Commercial"
      },
      highlights: ["High Airflow", "Wall Mountable", "Industrial Grade"],
      icon: Fan,
      rating: 4.5,
      reviews: 17,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    },
    {
      id: 13,
      name: "Hydraulic Pneumatic Equipment",
      category: "pneumatic",
      price: "85,000",
      priceUnit: "Piece",
      description: "Hydraulic Pneumatic Equipment, Capacity: 100kg/hr",
      fullDescription: "Hydraulic systems with the potential to handle heavier loads and produce more work than pneumatic systems. Features 10 Ton max force.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      images: 1,
      specs: {
        material: "Mild Steel",
        capacity: "100kg/hr",
        automationGrade: "Automatic",
        maxForce: "10 Ton",
        type: "Hydraulic"
      },
      highlights: ["High Force", "Reliable Performance", "Industrial Grade"],
      icon: Settings,
      rating: 4.6,
      reviews: 21,
      soldBy: "Arman Engineering Works, Sidhpur, Gujarat"
    }
  ];

  const currentCategoryProducts = products.filter(p => p.category === selectedCategory);
  const categoryInfo = categories.find(c => c.id === selectedCategory);

  const handleGetPrice = (product) => {
    setSelectedProduct(product);
    // Pre-fill the form with product information
    setContactFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      requirement: `I'm interested in ${product.name} (₹${product.price}/${product.priceUnit}). Please share more details and price information.`
    });
    setIsContactOpen(true);
  };

  const handleWhatsApp = (product) => {
    const message = encodeURIComponent(`Hello, I'm interested in ${product.name} (₹${product.price}/${product.priceUnit}). Please share more details.`);
    window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
  };

  const handleBrochureDownload = (product) => {
    setBrochureLoading(product.id);
    setTimeout(() => {
      setBrochureLoading(null);
      alert(`Brochure for ${product.name} will be downloaded.`);
    }, 1000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare the data for API
    const inquiryData = {
      name: contactFormData.name,
      company: contactFormData.company || 'Not provided',
      email: contactFormData.email,
      phone: contactFormData.phone,
      requirement: contactFormData.requirement,
      productName: selectedProduct ? selectedProduct.name : 'General Inquiry',
      productPrice: selectedProduct ? selectedProduct.price : '',
      productUnit: selectedProduct ? selectedProduct.priceUnit : ''
    };

    try {
      const response = await fetch('https://arman-backend-cwew.onrender.com/api/product-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your interest! Our team will contact you soon.' });
        
        // Reset form after 2 seconds and close modal
        setTimeout(() => {
          setIsContactOpen(false);
          setSelectedProduct(null);
          setContactFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            requirement: ''
          });
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeModal = () => {
    setIsContactOpen(false);
    setSelectedProduct(null);
    setContactFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      requirement: ''
    });
    setSubmitStatus(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans">

        {/* Hero Section - Restored */}
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
                <span className="tracking-wider">PREMIUM INDUSTRIAL PRODUCTS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Quality <span className="font-bold text-[#D4AF37]">Equipment</span> <br />for Every Industry
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
                Explore our comprehensive range of industrial machinery including gravity separators,
                food processing plants, conveyors, classifiers, and more.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "50+", label: "Products", icon: Box },
                  { value: "25+", label: "Years", icon: Calendar },
                  { value: "1000+", label: "Happy Clients", icon: Users },
                  { value: "All India", label: "Delivery", icon: MapPin }
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

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100 py-4">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Home size={14} />
              <ChevronRightIcon size={12} />
              <span>Products</span>
              <ChevronRightIcon size={12} />
              <span className="text-[#D4AF37] font-medium">{categoryInfo?.name}</span>
            </div>
          </div>
        </div>

        {/* Main Content - Sidebar Layout */}
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Categories */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-0 bg-slate-50 focus:bg-white transition-colors text-sm outline-none"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-black text-slate-300 uppercase tracking-wider mb-4">Categories</p>
                
                <div className="space-y-1">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center justify-between p-4 transition-all ${
                          isActive 
                            ? 'bg-[#D4AF37] text-white' 
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span className="text-sm font-medium">{cat.name}</span>
                        </div>
                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                          {cat.count}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-slate-50">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-wider mb-3">Need Help?</p>
                  <p className="text-xs text-slate-500 mb-4">Our team is here to assist you</p>
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setContactFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        requirement: ''
                      });
                      setIsContactOpen(true);
                    }}
                    className="w-full bg-slate-900 text-white py-3 text-xs font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Products */}
            <div className="flex-1">
              
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${categoryInfo?.color} bg-opacity-10 flex items-center justify-center`}>
                    {categoryInfo && <categoryInfo.icon className={categoryInfo.color} size={20} />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{categoryInfo?.name}</h2>
                    <p className="text-xs text-slate-400">{currentCategoryProducts.length} products available</p>
                  </div>
                </div>
              </div>

              {/* Products Grid - Borderless Square Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCategoryProducts.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-50 p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                    >
                      {/* Image Area - Square */}
                      <div className="aspect-square bg-white mb-6 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Title and Rating */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-1 bg-white px-2 py-1">
                              <Star size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                              <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2">
                            {product.fullDescription}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1">
                          {product.highlights.map((h, i) => (
                            <span key={i} className="text-[8px] bg-white text-slate-600 px-2 py-1">
                              {h}
                            </span>
                          ))}
                        </div>

                        {/* Price */}
                        <div>
                          <span className="text-2xl font-black text-[#D4AF37]">₹{product.price}</span>
                          <span className="text-xs text-slate-400 ml-1">/{product.priceUnit}</span>
                        </div>

                        {/* Specs - 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(product.specs).slice(0, 4).map(([key, value], i) => (
                            <div key={i} className="bg-white p-2">
                              <p className="text-[7px] font-black text-slate-400 uppercase tracking-wider mb-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                              <p className="text-[9px] font-bold text-slate-700 truncate">{value}</p>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <button
                            onClick={() => handleGetPrice(product)}
                            className="bg-[#D4AF37] text-white py-3 text-[8px] font-black uppercase tracking-wider hover:bg-slate-900 transition-colors flex items-center justify-center gap-1"
                          >
                            <IndianRupee size={12} />
                            Price
                          </button>
                          <button
                            onClick={() => handleBrochureDownload(product)}
                            disabled={brochureLoading === product.id}
                            className="bg-white text-slate-600 py-3 text-[8px] font-black uppercase tracking-wider hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center justify-center gap-1 disabled:opacity-50"
                          >
                            {brochureLoading === product.id ? (
                              <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <>
                                <FileText size={12} />
                                PDF
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleWhatsApp(product)}
                            className="bg-green-500 text-white py-3 text-[8px] font-black uppercase tracking-wider hover:bg-green-600 transition-colors flex items-center justify-center gap-1"
                          >
                            <MessageCircle size={12} />
                            Chat
                          </button>
                        </div>

                        {product.minOrder && (
                          <p className="text-[8px] text-slate-400 text-center bg-white py-2">
                            Min. Order: {product.minOrder}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* No Results */}
              {currentCategoryProducts.length === 0 && (
                <div className="text-center py-20">
                  <AlertCircle className="mx-auto text-slate-300 mb-4" size={48} />
                  <p className="text-slate-500 mb-4">No products found in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-slate-900 py-12 mt-12">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Award, value: "25+", label: "Years" },
                { icon: Package, value: "50+", label: "Products" },
                { icon: Users, value: "500+", label: "Clients" },
                { icon: Shield, value: "100%", label: "Quality" }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="mx-auto text-[#D4AF37] mb-3" size={24} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Modal - Made smaller */}
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-md relative overflow-hidden shadow-2xl"
              >
                <div className="bg-slate-900 p-5 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-black mb-1">
                        {selectedProduct ? 'Get Price Quote' : 'Contact Us'}
                      </h3>
                      <p className="text-slate-400 text-xs">
                        {selectedProduct 
                          ? selectedProduct.name
                          : 'Fill the form and our team will respond within 24 hours'}
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <form className="p-5 space-y-4" onSubmit={handleContactSubmit}>
                  {submitStatus && (
                    <div className={`p-3 text-xs font-bold ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[8px] font-black uppercase tracking-wider text-[#D4AF37] block mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactFormData.name}
                        onChange={handleInputChange}
                        className="w-full border-b border-slate-200 py-2 text-xs focus:border-[#D4AF37] outline-none transition-colors font-bold"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-[8px] font-black uppercase tracking-wider text-[#D4AF37] block mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={contactFormData.company}
                        onChange={handleInputChange}
                        className="w-full border-b border-slate-200 py-2 text-xs focus:border-[#D4AF37] outline-none transition-colors font-bold"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[8px] font-black uppercase tracking-wider text-[#D4AF37] block mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={contactFormData.email}
                        onChange={handleInputChange}
                        className="w-full border-b border-slate-200 py-2 text-xs focus:border-[#D4AF37] outline-none transition-colors font-bold"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-[8px] font-black uppercase tracking-wider text-[#D4AF37] block mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={contactFormData.phone}
                        onChange={handleInputChange}
                        className="w-full border-b border-slate-200 py-2 text-xs focus:border-[#D4AF37] outline-none transition-colors font-bold"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[8px] font-black uppercase tracking-wider text-[#D4AF37] block mb-1">
                      Requirements *
                    </label>
                    <textarea
                      name="requirement"
                      rows="3"
                      required
                      value={contactFormData.requirement}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 p-2 text-xs focus:border-[#D4AF37] outline-none transition-colors font-bold resize-none"
                      placeholder="Describe your requirements..."
                    />
                  </div>

                  {selectedProduct && (
                    <div className="p-2 bg-slate-50 border-l-2 border-[#D4AF37]">
                      <p className="text-[8px] text-slate-500 mb-0.5">Selected Product:</p>
                      <p className="text-xs font-bold text-slate-900 truncate">{selectedProduct.name}</p>
                      <p className="text-[10px] text-[#D4AF37] mt-0.5">₹{selectedProduct.price}/{selectedProduct.priceUnit}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-slate-900 text-white py-3 text-[9px] font-black tracking-wider uppercase hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          Submit
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const product = selectedProduct || { name: 'your inquiry', price: '', priceUnit: '' };
                        const message = encodeURIComponent(
                          `Hello, I'm interested in ${product.name}${product.price ? ` (₹${product.price}/${product.priceUnit})` : ''}. ${contactFormData.requirement}`
                        );
                        window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
                      }}
                      className="flex-1 bg-green-600 text-white py-3 text-[9px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={12} />
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

export default ProductsPage;