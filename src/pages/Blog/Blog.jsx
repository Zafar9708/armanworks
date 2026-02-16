import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      category: "Engineering",
      title: "Optimizing Recovery Rates in Modern Daal Mill Plants",
      excerpt: "How precision-engineered emery rollers and proper conditioning can reduce grain breakage by up to 15%...",
      date: "Oct 12, 2025",
      readTime: "6 min read",
      author: "Technical Team",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
    },
    {
      id: 2,
      category: "Maintenance",
      title: "Preventive Maintenance for Bucket Elevators",
      excerpt: "A comprehensive checklist for belt tensioning, bearing lubrication, and wear-liner inspection to ensure zero downtime...",
      date: "Sep 28, 2025",
      readTime: "8 min read",
      author: "Service Head",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
    },
    {
      id: 3,
      category: "Technology",
      title: "The Role of Aspiration Systems in Spice Purity",
      excerpt: "Understanding the physics of air-flow in removing dust and light impurities from high-value seeds like Cumin and Sesame...",
      date: "Aug 15, 2025",
      readTime: "5 min read",
      author: "Design Engineer",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans">
        
        {/* --- REFINED BLOG HEADER --- */}
        <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Knowledge Center</span>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tight mb-4">Industrial Insights</h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
              Expert articles on machinery fabrication, plant erection, and the latest trends in grain processing technology.
            </p>
          </div>
        </section>

        {/* --- FEATURED ARTICLE --- */}
        <section className="py-16 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 aspect-video overflow-hidden bg-slate-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200" 
                  alt="Featured Post" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  <span className="px-2 py-1 border border-[#D4AF37]">Featured</span>
                  <span className="text-slate-400">Plant Design</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  Modern Layout Strategies for Vertical Grain Storage & Erection
                </h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  Learn how gravity-flow designs can reduce energy consumption by 20% compared to traditional horizontal processing lines. We break down the structural requirements for multi-floor erection.
                </p>
                <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:text-[#D4AF37] transition-colors">
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- BLOG GRID --- */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-3 gap-12">
              {posts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-6">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                      <span className="flex items-center gap-1 text-[#D4AF37]"><Tag size={12}/> {post.category}</span>
                      <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                        <User size={12} /> {post.author}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEWSLETTER (PROFESSIONAL VERSION) --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <div className="max-w-2xl mx-auto">
              <BookOpen className="text-[#D4AF37] mx-auto mb-6" size={32} />
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Subscribe to Technical Updates</h2>
              <p className="text-slate-500 text-sm font-light mb-8">
                Get monthly engineering guides, maintenance checklists, and project highlights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Business Email Address" 
                  className="flex-1 px-6 py-4 text-sm border border-slate-200 outline-none focus:border-[#D4AF37]" 
                />
                <button className="bg-slate-900 text-white px-10 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-[#D4AF37] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default BlogPage;