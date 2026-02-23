import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AmranIndustrialBlog = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      date: "14th February 2026",
      title: "How to get started in the Pulse/Dal Mill industry",
      desc: "An end-to-end guide on setting up a high-efficiency milling unit with modern machinery and optimal floor planning.",
      img: "https://4.imimg.com/data4/BX/BO/MY-16736/toor-dal-plant.jpg"
    },
    {
      id: 2,
      date: "12th February 2026",
      title: "How to get started in the Rice Mill industry",
      desc: "Comprehensive insights into paddy processing, whitening, and polishing techniques for premium rice production.",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/7/NH/RW/TG/81343250/fully-automatic-3-ton-plant-complete.jpg"
    },
    {
      id: 3,
      date: "10th February 2026",
      title: "How to get started in the Flour Mill industry",
      desc: "Mastering the art of wheat grinding and sifting with advanced roller mill technology for high-grade flour.",
      img: "https://niceengineering.in/wp-content/uploads/2021/12/flour-mill.jpg"
    },
    {
      id: 4,
      date: "08th February 2026",
      title: "How to get started in the Grain Sorting industry",
      desc: "Utilizing AI-driven color sorters to ensure 99.9% purity and meeting international export quality standards.",
      img: "https://image.made-in-china.com/365f3j00InikLVSEhHqz/Color-Sorter-Sorting-Machine.webp"
    },
    {
      id: 5,
      date: "05th February 2026",
      title: "How to get started in the Besan Mill industry",
      desc: "A technical walkthrough of processing chana dal into fine besan flour with high-speed pulverizers.",
      img: "https://samayagrotech.com/images/besan-mill-plant/500-BESAN.webp"
    },
    {
      id: 6,
      date: "01st February 2026",
      title: "How to get started in the Spice Grinding industry",
      desc: "Engineering solutions for maintaining the aroma and essential oils of spices through low-temperature grinding.",
      img: "https://www.blenderindia.net/wp-content/uploads/2024/07/spice-masala-herbs-grinding-processing-plant-and-machines1.jpg"
    }
  ];

  // Shift only ONE card every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [blogs.length]);

  // Logic to show 3 cards at a time in a loop
  const displayItems = [
    blogs[index % blogs.length],
    blogs[(index + 1) % blogs.length],
    blogs[(index + 2) % blogs.length],
  ];

  const handleReadMore = (blogId) => {
    // You can pass the blog ID as state if needed
    navigate('/blog', { state: { selectedBlog: blogId } });
  };

  return (
    <div className="bg-[#F8F8F7] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Minus className="text-slate-900" size={18} />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-500">Resource Center</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Amran <span className="text-slate-300">Engineering</span> <br /> Blogs.
            </h2>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-slate-200 pl-6 h-12">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Feed</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </header>

        {/* BLOG GRID: One-by-one Transition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayItems.map((blog, idx) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col group h-full"
              >
                {/* Image Section - REMOVED GRAYSCALE */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 border border-slate-200">
                  <motion.img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Meta: Calendar & Date */}
                <div className="flex items-center gap-2 mb-4 text-slate-400">
                  <Calendar size={14} className="text-[#D4AF37]" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{blog.date}</span>
                </div>

                {/* Title - UPDATED TO "How to get started in the..." */}
                <h3 className="text-xl font-black tracking-tight mb-4 group-hover:text-slate-600 transition-colors uppercase leading-tight min-h-[3.5rem]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-2">
                  {blog.desc}
                </p>

                {/* Industrial Gold Read More Link */}
                <div 
                  onClick={() => handleReadMore(blog.id)}
                  className="mt-auto flex items-center gap-3 cursor-pointer group/link"
                >
                  <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#D4AF37] border-b border-[#D4AF37]/30 group-hover/link:border-[#D4AF37] transition-all">
                    Read More
                  </span>
                  <ArrowRight size={16} className="text-[#D4AF37] group-hover/link:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Optional: View All Blogs Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate('/blog')}
            className="group flex items-center gap-4 bg-white border border-slate-200 px-10 py-5 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300"
          >
            <span className="text-xs font-black tracking-widest uppercase">VIEW ALL BLOGS</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmranIndustrialBlog;