import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Send, MapPin, Calendar, Briefcase,
  Users, Package, Cog, Factory, Home, Image,
  Camera, Eye, Heart, Share2, Download,
  ChevronLeft, ChevronRight, Wrench, Sparkles,
  Grid, LayoutGrid, Instagram, Facebook, Linkedin,
  Phone, Mail, Clock, Award, Shield, Truck,
  Maximize2, Minimize2, Play, Pause
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedImages, setLikedImages] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'All Photos', icon: Image, count: 24 },
    { id: 'factory', name: 'Factory', icon: Factory, count: 8 },
    { id: 'machines', name: 'Machinery', icon: Cog, count: 10 },
    { id: 'installation', name: 'Installation', icon: Wrench, count: 6 },
    { id: 'team', name: 'Team', icon: Users, count: 4 },
    { id: 'products', name: 'Products', icon: Package, count: 12 }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Main Manufacturing Unit",
      category: "factory",
      description: "State-of-the-art manufacturing facility with advanced machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      date: "2024-01-15",
      location: "Sidhpur, Gujarat",
      likes: 45,
      views: 234
    },
    {
      id: 2,
      title: "CNC Machining Center",
      category: "machines",
      description: "Precision CNC machines for accurate component manufacturing",
      image: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=600",
      date: "2024-01-20",
      location: "Sidhpur, Gujarat",
      likes: 38,
      views: 189
    },
    {
      id: 3,
      title: "Assembly Line",
      category: "factory",
      description: "Modular assembly line for turnkey projects",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
      date: "2024-02-05",
      location: "Sidhpur, Gujarat",
      likes: 29,
      views: 156
    },
    {
      id: 4,
      title: "Quality Control Lab",
      category: "factory",
      description: "Advanced quality testing and measurement laboratory",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
      date: "2024-02-10",
      location: "Sidhpur, Gujarat",
      likes: 42,
      views: 278
    },
    {
      id: 5,
      title: "Welding Workshop",
      category: "factory",
      description: "Advanced welding and fabrication unit",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      date: "2024-02-15",
      location: "Sidhpur, Gujarat",
      likes: 31,
      views: 167
    },
    {
      id: 6,
      title: "5 HP Gravity Separator",
      category: "machines",
      description: "High-capacity gravity separator installed at client site",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      date: "2024-03-01",
      location: "Rajkot, Gujarat",
      likes: 52,
      views: 312
    },
    {
      id: 7,
      title: "Rice Mill Plant",
      category: "machines",
      description: "Complete rice mill installation with color sorter",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      date: "2024-03-05",
      location: "Ahmedabad, Gujarat",
      likes: 47,
      views: 289
    },
    {
      id: 8,
      title: "Flour Mill Plant",
      category: "machines",
      description: "Automatic flour mill with pneumatic system",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      date: "2024-03-10",
      location: "Surat, Gujarat",
      likes: 35,
      views: 198
    },
    {
      id: 9,
      title: "Oil Mill Plant",
      category: "machines",
      description: "Edible oil extraction and refining plant",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      date: "2024-03-15",
      location: "Baroda, Gujarat",
      likes: 28,
      views: 145
    },
    {
      id: 10,
      title: "Plant Installation at Site",
      category: "installation",
      description: "Ongoing installation of dal mill plant",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
      date: "2024-03-20",
      location: "Jaipur, Rajasthan",
      likes: 41,
      views: 234
    },
    {
      id: 11,
      title: "Equipment Installation",
      category: "installation",
      description: "Installing gravity separator at client facility",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
      date: "2024-03-25",
      location: "Indore, MP",
      likes: 33,
      views: 167
    },
    {
      id: 12,
      title: "Commissioning Process",
      category: "installation",
      description: "Final testing and commissioning of rice mill",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
      date: "2024-04-01",
      location: "Nagpur, Maharashtra",
      likes: 27,
      views: 145
    },
    {
      id: 13,
      title: "Engineering Team",
      category: "team",
      description: "Our dedicated team of engineers at work",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      date: "2024-04-05",
      location: "Sidhpur, Gujarat",
      likes: 56,
      views: 378
    },
    {
      id: 14,
      title: "Quality Control Team",
      category: "team",
      description: "Quality inspection before dispatch",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      date: "2024-04-10",
      location: "Sidhpur, Gujarat",
      likes: 44,
      views: 267
    },
    {
      id: 15,
      title: "Industrial Expo 2024",
      category: "products",
      description: "Showcasing our products at Ahmedabad Industrial Expo",
      image: "https://images.unsplash.com/photo-1540575467064-2e8d188d2d34?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1540575467064-2e8d188d2d34?auto=format&fit=crop&q=80&w=600",
      date: "2024-02-20",
      location: "Ahmedabad, Gujarat",
      likes: 62,
      views: 412
    },
    {
      id: 16,
      title: "Gravity Separator Close-up",
      category: "products",
      description: "Detailed view of our gravity separator",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      date: "2024-04-08",
      location: "Sidhpur, Gujarat",
      likes: 34,
      views: 198
    },
    {
      id: 17,
      title: "Conveyor System",
      category: "products",
      description: "Industrial belt conveyor system",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      date: "2024-04-12",
      location: "Sidhpur, Gujarat",
      likes: 26,
      views: 145
    }
  ];

  // Filter images
  const filteredImages = galleryImages.filter(img => {
    if (selectedCategory !== 'all' && img.category !== selectedCategory) return false;
    if (searchQuery && !img.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !img.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedYear !== 'all' && !img.date.includes(selectedYear)) return false;
    return true;
  });

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(filteredImages[index]);
    setIsLightboxOpen(true);
  };

  const handlePrevious = () => {
    const newIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleLike = (imageId) => {
    if (likedImages.includes(imageId)) {
      setLikedImages(likedImages.filter(id => id !== imageId));
    } else {
      setLikedImages([...likedImages, imageId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsContactModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const stats = [
    { icon: Camera, value: '500+', label: 'Photos' },
    { icon: Award, value: '15+', label: 'Years' },
    { icon: Shield, value: '100%', label: 'Quality' },
    { icon: Truck, value: '50+', label: 'Projects' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Minimal */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium mb-4">
                <Sparkles size={16} />
                <span>GALLERY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                Capturing <span className="font-bold text-[#D4AF37]">Excellence</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                A visual journey through our manufacturing facility, projects, and team
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Filters Bar */}
            <div className="mb-8">
              {/* Search and View Toggle */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm rounded-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* View Toggle */}
                  <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    {isGridView ? <LayoutGrid size={18} /> : <Grid size={18} />}
                  </button>

                  {/* Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                      showFilters ? 'bg-[#D4AF37] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filters
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-2">Year</label>
                          <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:border-[#D4AF37] outline-none"
                          >
                            <option value="all">All Years</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-2">Quick Actions</label>
                          <button
                            onClick={() => {
                              setSelectedCategory('all');
                              setSearchQuery('');
                              setSelectedYear('all');
                            }}
                            className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-100 transition-colors"
                          >
                            Reset Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        isActive 
                          ? 'bg-[#D4AF37] text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Icon size={14} />
                      <span>{cat.name}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-white text-slate-600'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-slate-500">
                Showing <span className="font-medium text-slate-900">{filteredImages.length}</span> photos
              </p>
            </div>

            {/* Gallery Grid */}
            <motion.div 
              className={`grid gap-6 ${
                isGridView 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
              layout
            >
              {filteredImages.map((image, index) => {
                const isLiked = likedImages.includes(image.id);
                const category = categories.find(c => c.id === image.category);

                return (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group"
                  >
                    <div 
                      className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={image.thumbnail}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-3 left-3 right-3">
                            <p className="text-white text-sm font-medium line-clamp-2">{image.title}</p>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700 flex items-center gap-1">
                            {category && <category.icon size={10} />}
                            {image.category}
                          </span>
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(image.id);
                          }}
                          className={`absolute top-3 right-3 p-1.5 rounded-full transition-colors ${
                            isLiked 
                              ? 'bg-red-500 text-white' 
                              : 'bg-black/50 text-white hover:bg-red-500'
                          }`}
                        >
                          <Heart size={14} fill={isLiked ? 'white' : 'none'} />
                        </button>

                        {/* Image Stats */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {image.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={12} />
                            {image.likes + (isLiked ? 1 : 0)}
                          </span>
                        </div>
                      </div>

                      {/* Image Info - Visible in list view */}
                      {!isGridView && (
                        <div className="p-4">
                          <h3 className="font-medium text-slate-900 mb-1">{image.title}</h3>
                          <p className="text-sm text-slate-500 line-clamp-2">{image.description}</p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <MapPin size={10} />
                              {image.location.split(',')[0]}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={10} />
                              {new Date(image.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* No Results */}
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="text-slate-400" size={24} />
                </div>
                <p className="text-slate-500 mb-2">No photos found</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedYear('all'); }}
                  className="text-[#D4AF37] text-sm font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-light text-slate-900 mb-3">
                Interested in our <span className="font-bold text-[#D4AF37]">work?</span>
              </h2>
              <p className="text-slate-500 mb-6">
                Schedule a visit to our facility or request more information about our projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#D4AF37] text-white px-6 py-3 font-medium hover:bg-slate-900 transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Contact Us
                </button>
                <a
                  href="https://wa.me/919998551985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.447-1.273.606-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.087.276.072.378-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.174.087.289.13.332.202.043.072.043.418-.101.823z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && selectedImage && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
            >
              <div className="relative w-full max-w-6xl max-h-[90vh] mx-4" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Navigation */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute -bottom-24 left-0 right-0 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium mb-1">{selectedImage.title}</h3>
                      <p className="text-sm text-white/70 mb-2">{selectedImage.description}</p>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {selectedImage.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(selectedImage.date).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLike(selectedImage.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedImages.includes(selectedImage.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-red-500'
                        }`}
                      >
                        <Heart size={16} fill={likedImages.includes(selectedImage.id) ? 'white' : 'none'} />
                      </button>
                      
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied!');
                        }}
                        className="p-2 bg-white/20 rounded-full hover:bg-[#D4AF37] transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                      
                      <a
                        href={selectedImage.image}
                        download
                        className="p-2 bg-white/20 rounded-full hover:bg-[#D4AF37] transition-colors"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="absolute bottom-4 right-4 text-white/50 text-sm">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/60"
                onClick={() => setIsContactModalOpen(false)}
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white w-full max-w-lg relative rounded-lg shadow-xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-light text-slate-900">
                      Get in <span className="font-bold text-[#D4AF37]">Touch</span>
                    </h3>
                    <button
                      onClick={() => setIsContactModalOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Message *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:border-[#D4AF37] outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] text-white py-3 font-medium hover:bg-slate-900 transition-colors rounded-lg flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 text-center">
                      Or contact us directly
                    </p>
                    <div className="flex justify-center gap-4 mt-3">
                      <a href="tel:+919998551985" className="text-slate-600 hover:text-[#D4AF37] transition-colors">
                        <Phone size={18} />
                      </a>
                      <a href="mailto:info@armaneng.com" className="text-slate-600 hover:text-[#D4AF37] transition-colors">
                        <Mail size={18} />
                      </a>
                      <a href="https://wa.me/919998551985" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#D4AF37] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.447-1.273.606-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.087.276.072.378-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.011.477 1.184.564.174.087.289.13.332.202.043.072.043.418-.101.823z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
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

export default GalleryPage;