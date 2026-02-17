import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Send, Phone, Mail, MapPin, Star,
  MessageCircle, FileText, Download, Users, Award, Clock,
  Shield, Truck, HeadphonesIcon, ThumbsUp, Calendar, Briefcase,
  AlertCircle, Wind, Package, Fan, Cpu, Cog, Filter, Hammer,
  Move, Factory, Settings, Grid, List, ChevronRight, Box, Gem,
  ChevronRight as ChevronRightIcon, Home, Compass, Image,
  Camera, Film, Video, Play, Maximize2, Minimize2, Eye,
  Heart, Share2, ZoomIn, ZoomOut, Download as DownloadIcon,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Link,
  CheckCircle, Circle, Square, Triangle, Hexagon, Layers,
  Grid3x3, Columns, Rows, PanelTop, PanelBottom, PanelLeft,
  PanelRight, FolderOpen, FolderTree, FileImage, FileVideo,
  Files, GalleryHorizontal, GalleryVertical, GalleryThumbnails,
  ChevronLeft, ChevronRight as ChevronRightIcon2,Wrench
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedImages, setLikedImages] = useState([]);

  const categories = [
    { id: 'all', name: 'All Photos', icon: Image, count: 24 },
    { id: 'factory', name: 'Factory Setup', icon: Factory, count: 8 },
    { id: 'machines', name: 'Machines', icon: Cog, count: 10 },
    { id: 'installation', name: 'Installation', icon: Wrench, count: 6 },
    { id: 'team', name: 'Team & Work', icon: Users, count: 4 },
    { id: 'events', name: 'Events', icon: Calendar, count: 3 },
    { id: 'clients', name: 'Client Visits', icon: Briefcase, count: 5 },
    { id: 'products', name: 'Products', icon: Package, count: 12 }
  ];

  const galleryImages = [
    // Factory Setup Images
    {
      id: 1,
      title: "Main Manufacturing Unit",
      category: "factory",
      description: "Our state-of-the-art manufacturing facility with advanced machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      date: "2024-01-15",
      location: "Sidhpur, Gujarat",
      likes: 45,
      views: 234,
      photographer: "Arman Engineering"
    },
    {
      id: 2,
      title: "CNC Machining Center",
      category: "factory",
      description: "Precision CNC machines for accurate component manufacturing",
      image: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=600",
      date: "2024-01-20",
      location: "Sidhpur, Gujarat",
      likes: 38,
      views: 189,
      photographer: "Arman Engineering"
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
      views: 156,
      photographer: "Arman Engineering"
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
      views: 278,
      photographer: "Arman Engineering"
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
      views: 167,
      photographer: "Arman Engineering"
    },

    // Machines Images
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
      views: 312,
      photographer: "Arman Engineering"
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
      views: 289,
      photographer: "Arman Engineering"
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
      views: 198,
      photographer: "Arman Engineering"
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
      views: 145,
      photographer: "Arman Engineering"
    },

    // Installation Images
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
      views: 234,
      photographer: "Arman Engineering"
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
      views: 167,
      photographer: "Arman Engineering"
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
      views: 145,
      photographer: "Arman Engineering"
    },

    // Team & Work Images
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
      views: 378,
      photographer: "Arman Engineering"
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
      views: 267,
      photographer: "Arman Engineering"
    },

    // Events Images
    {
      id: 15,
      title: "Industrial Expo 2024",
      category: "events",
      description: "Showcasing our products at Ahmedabad Industrial Expo",
      image: "https://images.unsplash.com/photo-1540575467064-2e8d188d2d34?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1540575467064-2e8d188d2d34?auto=format&fit=crop&q=80&w=600",
      date: "2024-02-20",
      location: "Ahmedabad, Gujarat",
      likes: 62,
      views: 412,
      photographer: "Arman Engineering"
    },
    {
      id: 16,
      title: "Client Meeting",
      category: "events",
      description: "Discussing project requirements with clients",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      date: "2024-03-12",
      location: "Mumbai, Maharashtra",
      likes: 38,
      views: 234,
      photographer: "Arman Engineering"
    },

    // Client Visits
    {
      id: 17,
      title: "Client Factory Visit",
      category: "clients",
      description: "Client visiting our manufacturing facility",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=600",
      date: "2024-03-18",
      location: "Sidhpur, Gujarat",
      likes: 41,
      views: 256,
      photographer: "Arman Engineering"
    },
    {
      id: 18,
      title: "Site Visit",
      category: "clients",
      description: "Engineers visiting client site for survey",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      date: "2024-03-28",
      location: "Pune, Maharashtra",
      likes: 29,
      views: 178,
      photographer: "Arman Engineering"
    },

    // Products
    {
      id: 19,
      title: "Gravity Separator Close-up",
      category: "products",
      description: "Detailed view of our gravity separator",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      date: "2024-04-08",
      location: "Sidhpur, Gujarat",
      likes: 34,
      views: 198,
      photographer: "Arman Engineering"
    },
    {
      id: 20,
      title: "Conveyor System",
      category: "products",
      description: "Industrial belt conveyor system",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      date: "2024-04-12",
      location: "Sidhpur, Gujarat",
      likes: 26,
      views: 145,
      photographer: "Arman Engineering"
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages.filter(img => 
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : galleryImages.filter(img => 
        img.category === selectedCategory &&
        (img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         img.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
         img.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );

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

  const handleShare = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = (image) => {
    const link = document.createElement('a');
    link.href = image.image;
    link.download = `${image.title.replace(/ /g, '_')}.jpg`;
    link.click();
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Image;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1540575467064-2e8d188d2d34?auto=format&fit=crop&q=80&w=2070")',
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
                <Camera size={18} />
                <span className="tracking-wider">PHOTO GALLERY</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Capturing <span className="font-bold text-[#D4AF37]">Moments</span> <br />of Excellence
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
                Explore our collection of photos showcasing our manufacturing facility, 
                products, installations, team, and events.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "500+", label: "Photos", icon: Image },
                  { value: "50+", label: "Projects", icon: Factory },
                  { value: "100+", label: "Clients", icon: Users },
                  { value: "25+", label: "Years", icon: Calendar }
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
              <span>Gallery</span>
              <ChevronRightIcon size={12} />
              <span className="text-[#D4AF37] font-medium">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* Search and Filter Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 border border-slate-100">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm rounded-xl"
                  />
                </div>
                
                <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                          isActive 
                            ? 'bg-[#D4AF37] text-white shadow-lg' 
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        <Icon size={12} />
                        {cat.name}
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20' : 'bg-white text-slate-600'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-slate-500">
                Showing <span className="text-xl font-bold text-[#D4AF37]">{filteredImages.length}</span> photos
              </p>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  <Grid size={16} className="text-slate-600" />
                </button>
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  <Columns size={16} className="text-slate-600" />
                </button>
              </div>
            </div>

            {/* Gallery Grid - Masonry Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => {
                const CategoryIcon = getCategoryIcon(image.category);
                const isLiked = likedImages.includes(image.id);
                
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div 
                      className="relative aspect-square overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image.thumbnail}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-bold mb-1">{image.title}</p>
                          <p className="text-white/70 text-xs line-clamp-2">{image.description}</p>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#D4AF37] text-white px-2 py-1 rounded-lg text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <CategoryIcon size={10} />
                        {image.category}
                      </div>

                      {/* Like Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(image.id);
                        }}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isLiked 
                            ? 'bg-red-500 text-white' 
                            : 'bg-black/50 text-white hover:bg-red-500'
                        }`}
                      >
                        <Heart size={14} fill={isLiked ? 'white' : 'none'} />
                      </button>
                    </div>

                    {/* Image Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                          {image.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Eye size={12} />
                          {image.views}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <MapPin size={10} />
                            {image.location.split(',')[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {new Date(image.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Heart size={10} className={isLiked ? 'text-red-500 fill-red-500' : ''} />
                            {image.likes + (isLiked ? 1 : 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="text-slate-400" size={32} />
                </div>
                <p className="text-slate-500 mb-4">No photos found matching your criteria</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="text-[#D4AF37] text-sm font-bold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && selectedImage && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLightboxOpen(false)}
                className="absolute inset-0 bg-black/95"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-6xl max-h-[90vh] z-10 mx-4"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  <X size={20} />
                  Close
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors"
                >
                  <ChevronRightIcon2 size={20} />
                </button>

                {/* Image */}
                <div className="bg-black/20 rounded-2xl overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute -bottom-24 left-0 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{selectedImage.description}</p>
                      <div className="flex items-center gap-6 text-xs text-white/50">
                        <span className="flex items-center gap-2">
                          <MapPin size={14} />
                          {selectedImage.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={14} />
                          {new Date(selectedImage.date).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Camera size={14} />
                          {selectedImage.photographer}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleLike(selectedImage.id)}
                        className={`p-3 rounded-full transition-colors ${
                          likedImages.includes(selectedImage.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-red-500'
                        }`}
                      >
                        <Heart size={18} fill={likedImages.includes(selectedImage.id) ? 'white' : 'none'} />
                      </button>
                      <button
                        onClick={() => handleShare(selectedImage)}
                        className="p-3 bg-white/20 rounded-full hover:bg-[#D4AF37] transition-colors"
                      >
                        <Share2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDownload(selectedImage)}
                        className="p-3 bg-white/20 rounded-full hover:bg-[#D4AF37] transition-colors"
                      >
                        <DownloadIcon size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-light text-slate-900 mb-4">
                Want to See More? <span className="font-bold text-[#D4AF37]">Visit Us</span>
              </h2>
              <p className="text-slate-500 mb-8">
                Schedule a visit to our facility to see our operations in person
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#D4AF37] text-white px-8 py-4 font-bold hover:bg-slate-900 transition-colors rounded-xl flex items-center gap-2"
                >
                  <Send size={18} />
                  Contact Us
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919998551985', '_blank')}
                  className="bg-green-600 text-white px-8 py-4 font-bold hover:bg-green-700 transition-colors rounded-xl flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Modal */}
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
                className="bg-white w-full max-w-2xl relative overflow-hidden shadow-2xl rounded-2xl"
              >
                <div className="bg-slate-900 p-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black mb-2">Get in Touch</h3>
                      <p className="text-slate-400 text-sm">Have questions? We'd love to hear from you.</p>
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
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full border border-slate-200 p-4 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold resize-none rounded-xl"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-slate-900 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-[#D4AF37] transition-colors rounded-xl flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://wa.me/919998551985', '_blank')}
                      className="flex-1 bg-green-600 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors rounded-xl flex items-center justify-center gap-2"
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

export default GalleryPage;