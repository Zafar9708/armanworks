import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Cpu, Activity, Shield, Plus, Wind, Cog, Filter, Move, Factory, Hammer, Fan, Settings, Package, Star, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductsShowcase = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    // GRAVITY SEPARATORS (3 products)
    {
      id: 1,
      name: "5 HP Automatic Gravity Separator",
      category: "separator",
      categoryName: "Gravity Separators",
      price: "2,65,000",
      priceUnit: "Piece",
      description: "Arman Powder Coated 5 HP Automatic Gravity Separator, 20 ton/day capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      specs: {
        power: "5 HP",
        capacity: "20 ton/day",
        material: "SS 304"
      },
      highlights: ["High Efficiency", "Low Maintenance", "Precision Separation"],
      icon: Wind,
      rating: 4.8
    },
    {
      id: 2,
      name: "3 HP Automatic Gravity Separator",
      category: "separator",
      categoryName: "Gravity Separators",
      price: "2,75,000",
      priceUnit: "Piece",
      description: "Powder Coated Single Phase 3 HP Automatic Gravity Separator, 20 ton/day",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      specs: {
        power: "3 HP",
        capacity: "20 ton/day",
        material: "SS 304"
      },
      highlights: ["Energy Efficient", "Compact Design", "Easy Operation"],
      icon: Wind,
      rating: 4.7
    },
    {
      id: 3,
      name: "5 Fan Gravity Separator",
      category: "separator",
      categoryName: "Gravity Separators",
      price: "3,05,000",
      priceUnit: "Piece",
      description: "Automatic Powder Coated 5 Fan Gravity Separator, 80 ton/day capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      specs: {
        power: "7 HP",
        capacity: "80 ton/day",
        material: "MS"
      },
      highlights: ["High Capacity", "5 Fan System", "Industrial Grade"],
      icon: Wind,
      rating: 4.9
    },
    {
      id: 4,
      name: "Automatic Food Processing Plant",
      category: "processing",
      categoryName: "Food Processing",
      price: "8,50,000",
      priceUnit: "Piece",
      description: "Mild Steel Automatic Food Processing Plant, 100 kg/hr capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      specs: {
        capacity: "100 kg/hr",
        power: "10 HP",
        material: "Mild Steel"
      },
      highlights: ["High Output", "Versatile Application", "Durable Construction"],
      icon: Cpu,
      rating: 4.6
    },
    {
      id: 5,
      name: "Automatic Drum Cap Sealing Machine",
      category: "sealing",
      categoryName: "Sealing Machines",
      price: "25,000",
      priceUnit: "Piece",
      description: "Automatic Drum Cap Sealing Machine, 100 caps/min capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      specs: {
        capacity: "100 caps/min",
        power: "2 HP",
        material: "Mild Steel"
      },
      highlights: ["High Speed", "Precision Sealing", "Easy Operation"],
      icon: Package,
      rating: 4.5
    },
    {
      id: 6,
      name: "Automatic Flour Mill Plant",
      category: "mill",
      categoryName: "Mill Machines",
      price: "8,50,000",
      priceUnit: "Piece",
      description: "50 HP Automatic Flour Mill Plant, 1000 kg/hr capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      specs: {
        capacity: "1000 kg/hr",
        power: "50 HP",
        material: "Mild Steel"
      },
      highlights: ["High Capacity", "Commercial Grade", "Energy Efficient"],
      icon: Cog,
      rating: 4.8
    },
    {
      id: 7,
      name: "Mild Steel Flat Belt Conveyor",
      category: "conveyor",
      categoryName: "Conveyors",
      price: "8,500",
      priceUnit: "Meter",
      description: "Mild Steel Flat Belt Conveyor, Load Capacity: 400 kg",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      specs: {
        loadCapacity: "400 kg",
        type: "Flat Belt",
        material: "Mild Steel"
      },
      highlights: ["Durable Construction", "Smooth Operation", "Low Maintenance"],
      icon: Move,
      rating: 4.6
    },
    {
      id: 8,
      name: "Air Classifier Machine",
      category: "classifier",
      categoryName: "Air Classifiers",
      price: "2,85,000",
      priceUnit: "Piece",
      description: "Air Classifier Machine, 500 kg/hr capacity for paddy",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      specs: {
        capacity: "500 kg/hr",
        motor: "2 HP",
        material: "Mild Steel"
      },
      highlights: ["Precision Separation", "Energy Efficient", "Low Maintenance"],
      icon: Filter,
      rating: 4.7
    },
    {
      id: 9,
      name: "Fully Automatic Sortex Cleaning Plant",
      category: "cleaning",
      categoryName: "Cleaning Plants",
      price: "45,00,000",
      priceUnit: "Piece",
      description: "Fully Automatic Sortex Cleaning Plant, 4 Ton capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      specs: {
        capacity: "4 Ton",
        power: "80 HP",
        material: "Mild Steel"
      },
      highlights: ["High Capacity", "Fully Automatic", "Industrial Grade"],
      icon: Factory,
      rating: 4.9
    },
    {
      id: 10,
      name: "Automatic Dal Mill Machine",
      category: "mill",
      categoryName: "Mill Machines",
      price: "1,80,000",
      priceUnit: "Piece",
      description: "Automatic Dal Mill Machine, Single Phase, 200 kg/hr capacity",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      specs: {
        capacity: "200 kg/hr",
        power: "3 HP",
        material: "SS 304"
      },
      highlights: ["High Recovery", "SS 304 Construction", "Versatile"],
      icon: Cog,
      rating: 4.7
    },
    {
      id: 11,
      name: "Automatic Vibro Destoner Machine",
      category: "destoner",
      categoryName: "Destoners",
      price: "2,55,000",
      priceUnit: "Piece",
      description: "MS Powder Coated Automatic Vibro Destoner Machine, Three Phase, 2 Ton/Day",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      specs: {
        capacity: "2 Ton/day",
        power: "2 HP",
        material: "MS"
      },
      highlights: ["Efficient Separation", "Durable Construction", "Low Maintenance"],
      icon: Hammer,
      rating: 4.6
    },
    {
      id: 12,
      name: "5 HP Industrial Centrifugal Fan",
      category: "pump",
      categoryName: "Centrifugal Fans",
      price: "55,000",
      priceUnit: "Piece",
      description: "Wall Mounted 5 HP Industrial Centrifugal Fan, For Commercial Use",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      specs: {
        motorPower: "3 kW",
        fanSpeed: "1200 RPM",
        material: "Mild Steel"
      },
      highlights: ["High Airflow", "Wall Mountable", "Industrial Grade"],
      icon: Fan,
      rating: 4.5
    },
    {
      id: 13,
      name: "Hydraulic Pneumatic Equipment",
      category: "pneumatic",
      categoryName: "Pneumatic",
      price: "85,000",
      priceUnit: "Piece",
      description: "Hydraulic Pneumatic Equipment, Capacity: 100kg/hr",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      specs: {
        capacity: "100kg/hr",
        maxForce: "10 Ton",
        material: "Mild Steel"
      },
      highlights: ["High Force", "Reliable Performance", "Industrial Grade"],
      icon: Settings,
      rating: 4.6
    }
  ];

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, products.length));
  };

  const handleCardClick = (productId) => {
    navigate('/products');
  };

  const getCategoryColor = (category) => {
    const colors = {
      separator: 'bg-blue-500',
      processing: 'bg-green-500',
      mill: 'bg-purple-500',
      conveyor: 'bg-orange-500',
      classifier: 'bg-cyan-500',
      cleaning: 'bg-emerald-500',
      destoner: 'bg-red-500',
      pump: 'bg-indigo-500',
      pneumatic: 'bg-pink-500',
      sealing: 'bg-amber-500'
    };
    return colors[category] || 'bg-slate-500';
  };

  return (
    <div className="min-h-screen bg-[#F8F8F7] font-sans py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-center">
            OUR <span className="text-[#D4AF37]">PRODUCTS</span>
          </h2>
          <div className="mt-6 flex items-center justify-center w-full">
            <div className="h-[2px] w-24 bg-[#D4AF37]"></div>
          </div>
          <p className="text-slate-500 text-center max-w-2xl mt-8 text-sm md:text-base">
            Discover our comprehensive range of industrial machinery including gravity separators,
            food processing plants, conveyors, classifiers, and more.
          </p>
        </div>

        {/* Products Grid - Borderless Square Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product, index) => {
            const Icon = product.icon;
            const categoryColor = getCategoryColor(product.category);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCardClick(product.id)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group cursor-pointer bg-white hover:shadow-2xl transition-all duration-500"
              >
                {/* Square Image Container */}
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content - Clean, No Borders */}
                <div className="p-6 space-y-4">
                  {/* Category and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${categoryColor} bg-opacity-10 flex items-center justify-center`}>
                        <Icon className={categoryColor.replace('bg-', 'text-')} size={16} />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase">
                        {product.categoryName}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-base md:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs Chips - Minimal */}
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <div key={i} className="bg-slate-50 px-3 py-1.5">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-[10px] font-bold text-slate-700">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-xl md:text-2xl font-black text-[#D4AF37]">₹{product.price}</span>
                    <span className="text-[10px] text-slate-400 ml-1">/{product.priceUnit}</span>
                  </div>

                  {/* View Details - Appears on Hover */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      y: hoveredProduct === product.id ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="bg-[#D4AF37] hover:bg-slate-900 text-white font-black text-xs tracking-[0.2em] px-12 py-5 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl group"
            >
              LOAD MORE 
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>
          </div>
        )}

        {/* Products Count */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Showing {visibleProducts.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;