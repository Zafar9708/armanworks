// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
//   const [activeItem, setActiveItem] = useState('home');
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Scroll hide/show functionality
//   useEffect(() => {
//     const controlNavbar = () => {
//       if (typeof window !== 'undefined') {
//         const currentScrollY = window.scrollY;

//         // Hide navbar when scrolling down, show when scrolling up
//         if (currentScrollY > lastScrollY && currentScrollY > 50) {
//           setShowNavbar(false);
//         } else {
//           setShowNavbar(true);
//         }

//         setLastScrollY(currentScrollY);
//       }
//     };

//     window.addEventListener('scroll', controlNavbar);

//     // Cleanup function
//     return () => {
//       window.removeEventListener('scroll', controlNavbar);
//     };
//   }, [lastScrollY]);

//   const toggleMobileDropdown = (name) => {
//     setOpenMobileDropdown(openMobileDropdown === name ? null : name);
//   };

//   // Company info dropdown items with > icon
//   const companyInfoItems = [
//     { name: '› COMPANY PROFILE', href: '/about-profile' },
//     { name: '› MANUFACTURING FACILITIES', href: '/about-manufacturing' },
//     { name: '› DESIGN AND STRUCTURE', href: '/about-design' },
//     { name: '› SERVICES', href: '/about-services' },
//     { name: '› OUR NETWORK', href: '/about-network' }
//   ];

//   // Products dropdown items - SEPARATED
//   const productsItems = [
//     { name: '› GRAIN', href: '/products-grain' },
//     { name: '› SPICES & SEEDS CLEANING MACHINERY', href: '/products-spices' },
//     // { name: '› PROCESSING MACHINERY', href: '/products-machinery' },
//     { name: '› MACHINERY DAAL PLANT', href: '/products-daal' },
//     { name: '› SORTEX PLANT ACCESSORIES', href: '/products-sortex' }
//   ];

//   // Contact dropdown items
//   const contactItems = [
//     { name: '› CONTACT', href: '/contact' },
//     { name: '› CAREER', href: '/career' }
//   ];

//   return (
//     <>
//       {/* Main Navbar - with scroll hide */}
//       <nav className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${
//         showNavbar ? 'translate-y-0' : '-translate-y-full'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">

//             {/* Logo and Company Info - Left Side - REDUCED SPACING */}
//             <div className="flex items-center space-x-3">
//               <div className="flex-shrink-0">
//                 <img 
//                   className="h-32 w-32 md:h-32 md:w-32 mt-3 object-contain -ml-6" 
//                   src="/logo.png" 
//                   alt="Arman Engineering" 
//                 />
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <span className="text-gray-950 text-base md:text-lg  lg:text-xl -ml-14 font-bold uppercase tracking-wide whitespace-nowrap">
//                   ARMAN ENGINEERING WORKS
//                 </span>
//                 <span className="text-[10px] md:text-xs text-gray-600 font-semibold  -ml-14 uppercase tracking-wider whitespace-nowrap">
//                   AN ISO 9001 : 2010 CERTIFIED COMPANY
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation - Right Side - REDUCED SPACING */}
//             <div className="hidden lg:flex items-center space-x-1">

//               {/* HOME - Corner Accent Animation */}
//               <div className="flex items-center">
//                 <a 
//                   href="#home" 
//                   onClick={() => setActiveItem('home')}
//                   className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${
//                     activeItem === 'home' 
//                       ? 'text-gray-900' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className="relative z-10">HOME</span>

//                   {/* Corner Accent Animation - Consistent for all */}
//                   {activeItem === 'home' && (
//                     <>
//                       <span 
//                         className="absolute inset-0 animate-expandIn"
//                         style={{ backgroundColor: '#FAF1E6' }}
//                       ></span>
//                       <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                       <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                     </>
//                   )}

//                   {/* Hover Line - Black */}
//                   <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                 </a>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* ABOUT US with Dropdown - Corner Accent Animation */}
//               <div 
//                 className="flex items-center"
//                 onMouseEnter={() => setOpenDropdown('about')}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={() => setActiveItem('about')}
//                     className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide flex items-center space-x-0.5 group overflow-hidden ${
//                       activeItem === 'about' 
//                         ? 'text-gray-900' 
//                         : 'text-gray-700 hover:text-gray-900'
//                     }`}
//                   >
//                     <span className="relative z-10">ABOUT US</span>
//                     <svg 
//                       className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>

//                     {/* Corner Accent Animation - Consistent for all */}
//                     {activeItem === 'about' && (
//                       <>
//                         <span 
//                           className="absolute inset-0 animate-expandIn"
//                           style={{ backgroundColor: '#FAF1E6' }}
//                         ></span>
//                         <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                         <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                       </>
//                     )}

//                     {/* Hover Line - Black */}
//                     <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                   </button>

//                   {/* Dropdown - Coming from Left with > icons */}
//                   <div 
//                     className={`absolute top-full left-0 mt-1 w-64 rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top-left ${
//                       openDropdown === 'about' 
//                         ? 'opacity-100 scale-y-100 visible' 
//                         : 'opacity-0 scale-y-0 invisible'
//                     }`}
//                     style={{ backgroundColor: '#FAF1E6' }}
//                   >
//                     <div className="relative">
//                       <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45" style={{ backgroundColor: '#FAF1E6' }}></div>

//                       {companyInfoItems.map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.href}
//                           className="block px-4 py-2 text-[11px] text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-all duration-200 uppercase tracking-wide font-medium group/item"
//                         >
//                           <span className="flex items-center space-x-1.5">
//                             <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform duration-200">›</span>
//                             <span>{item.name.substring(2)}</span>
//                           </span>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* PRODUCTS with Dropdown - Corner Accent Animation */}
//               <div 
//                 className="flex items-center"
//                 onMouseEnter={() => setOpenDropdown('products')}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={() => setActiveItem('products')}
//                     className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide flex items-center space-x-0.5 group overflow-hidden ${
//                       activeItem === 'products' 
//                         ? 'text-gray-900' 
//                         : 'text-gray-700 hover:text-gray-900'
//                     }`}
//                   >
//                     <span className="relative z-10">PRODUCTS</span>
//                     <svg 
//                       className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${openDropdown === 'products' ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>

//                     {/* Corner Accent Animation - Consistent for all */}
//                     {activeItem === 'products' && (
//                       <>
//                         <span 
//                           className="absolute inset-0 animate-expandIn"
//                           style={{ backgroundColor: '#FAF1E6' }}
//                         ></span>
//                         <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                         <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                       </>
//                     )}

//                     {/* Hover Line - Black */}
//                     <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                   </button>

//                   {/* Dropdown - Coming from Left with > icons */}
//                   <div 
//                     className={`absolute top-full left-0 mt-1 w-80 rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top-left ${
//                       openDropdown === 'products' 
//                         ? 'opacity-100 scale-y-100 visible' 
//                         : 'opacity-0 scale-y-0 invisible'
//                     }`}
//                     style={{ backgroundColor: '#FAF1E6' }}
//                   >
//                     <div className="relative">
//                       <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45" style={{ backgroundColor: '#FAF1E6' }}></div>

//                       {productsItems.map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.href}
//                           className="block px-4 py-2.5 text-[11px] text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-all duration-200 uppercase tracking-wide font-medium group/item"
//                         >
//                           <span className="flex items-center space-x-1.5">
//                             <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform duration-200">›</span>
//                             <span className="leading-relaxed">{item.name.substring(2)}</span>
//                           </span>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* CLIENT - Corner Accent Animation */}
//               <div className="flex items-center">
//                 <a 
//                   href="/client" 
//                   onClick={() => setActiveItem('client')}
//                   className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${
//                     activeItem === 'client' 
//                       ? 'text-gray-900' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className="relative z-10">CLIENT</span>

//                   {/* Corner Accent Animation - Consistent for all */}
//                   {activeItem === 'client' && (
//                     <>
//                       <span 
//                         className="absolute inset-0 animate-expandIn"
//                         style={{ backgroundColor: '#FAF1E6' }}
//                       ></span>
//                       <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                       <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                     </>
//                   )}

//                   {/* Hover Line - Black */}
//                   <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                 </a>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* GALLERY - Corner Accent Animation */}
//               <div className="flex items-center">
//                 <a 
//                   href="/gallery" 
//                   onClick={() => setActiveItem('gallery')}
//                   className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${
//                     activeItem === 'gallery' 
//                       ? 'text-gray-900' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className="relative z-10">GALLERY</span>

//                   {/* Corner Accent Animation - Consistent for all */}
//                   {activeItem === 'gallery' && (
//                     <>
//                       <span 
//                         className="absolute inset-0 animate-expandIn"
//                         style={{ backgroundColor: '#FAF1E6' }}
//                       ></span>
//                       <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                       <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                     </>
//                   )}

//                   {/* Hover Line - Black */}
//                   <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                 </a>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* BLOG - Corner Accent Animation */}
//               <div className="flex items-center">
//                 <a 
//                   href="/blog" 
//                   onClick={() => setActiveItem('blog')}
//                   className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${
//                     activeItem === 'blog' 
//                       ? 'text-gray-900' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className="relative z-10">BLOG</span>

//                   {/* Corner Accent Animation - Consistent for all */}
//                   {activeItem === 'blog' && (
//                     <>
//                       <span 
//                         className="absolute inset-0 animate-expandIn"
//                         style={{ backgroundColor: '#FAF1E6' }}
//                       ></span>
//                       <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                       <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                     </>
//                   )}

//                   {/* Hover Line - Black */}
//                   <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                 </a>
//                 {/* Vertical Line - Medium */}
//                 <span className="w-px h-8 bg-gray-300 mx-1"></span>
//               </div>

//               {/* CONTACT - Corner Accent Animation with Phone & Quote STACKED - TWO LINES FOR PHONE */}
//               <div 
//                 className="flex items-center"
//                 onMouseEnter={() => setOpenDropdown('contact')}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={() => setActiveItem('contact')}
//                     className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide flex items-center space-x-0.5 group overflow-hidden ${
//                       activeItem === 'contact' 
//                         ? 'text-gray-900' 
//                         : 'text-gray-700 hover:text-gray-900'
//                     }`}
//                   >
//                     <span className="relative z-10">CONTACT</span>
//                     <svg 
//                       className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${openDropdown === 'contact' ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>

//                     {/* Corner Accent Animation - Consistent for all */}
//                     {activeItem === 'contact' && (
//                       <>
//                         <span 
//                           className="absolute inset-0 animate-expandIn"
//                           style={{ backgroundColor: '#FAF1E6' }}
//                         ></span>
//                         <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
//                         <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
//                       </>
//                     )}

//                     {/* Hover Line - Black */}
//                     <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
//                   </button>

//                   {/* Contact Dropdown - ONLY Contact & Career Items */}
//                   <div 
//                     className={`absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top-left ${
//                       openDropdown === 'contact' 
//                         ? 'opacity-100 scale-y-100 visible' 
//                         : 'opacity-0 scale-y-0 invisible'
//                     }`}
//                     style={{ backgroundColor: '#FAF1E6' }}
//                   >
//                     <div className="relative">
//                       <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45" style={{ backgroundColor: '#FAF1E6' }}></div>

//                       {/* Contact Items with > icon - ONLY these two items */}
//                       {contactItems.map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.href}
//                           className="block px-4 py-2 text-[11px] text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-all duration-200 uppercase tracking-wide font-medium group/item"
//                         >
//                           <span className="flex items-center space-x-1.5">
//                             <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform duration-200">›</span>
//                             <span>{item.name.substring(2)}</span>
//                           </span>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* PHONE NUMBERS & REQUEST QUOTE - STACKED WITH TWO LINES FOR PHONE NUMBERS */}
//                 <div className="flex flex-col items-end ml-2 pl-2 border-l-2 border-gray-300">
//                   {/* Phone Numbers - TWO SEPARATE LINES as requested */}
//                   <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group whitespace-nowrap">
//                     <svg className="w-3 h-3 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     <span className="text-[11px] font-medium">+91 9898898219</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group whitespace-nowrap">
//                     <svg className="w-3 h-3 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     <span className="text-[11px] font-medium">+91 9998551985</span>
//                   </div>

//                   {/* Request Quote Button */}
//                   <button className="bg-gray-800 text-white px-3 py-1  -mr-4 rounded-md text-[10px] font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider mt-2">
//                     REQUEST QUOTE
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
//               >
//                 <svg
//                   className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   {isOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu - Opens from Left Side - Moved OUTSIDE the nav element */}
//       <div 
//         className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="h-full overflow-y-auto">
//           {/* Mobile Menu Header */}
//           <div className="p-4 border-b" style={{ backgroundColor: '#FAF1E6' }}>
//             <div className="flex items-center space-x-2">
//               <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
//               <div className="flex flex-col">
//                 <span className="text-gray-800 font-bold uppercase text-xs tracking-wide">
//                   ARMAN ENGINEERING WORKS
//                 </span>
//                 <span className="text-[10px] text-gray-600 font-semibold uppercase tracking-wider">
//                   ISO 9001:2010 CERTIFIED
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Navigation Items */}
//           <div className="p-3 space-y-1">
//             {/* HOME */}
//             <a 
//               href="#home" 
//               className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//               style={{ backgroundColor: '#FAF1E6' }}
//               onClick={() => setIsOpen(false)}
//             >
//               HOME
//             </a>

//             {/* ABOUT US Mobile Dropdown */}
//             <div className="border-b border-gray-100 pb-1">
//               <button
//                 onClick={() => toggleMobileDropdown('about')}
//                 className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//                 style={{ backgroundColor: openMobileDropdown === 'about' ? '#FAF1E6' : 'transparent' }}
//               >
//                 <span>ABOUT US</span>
//                 <svg 
//                   className={`w-3.5 h-3.5 transition-transform duration-300 ${openMobileDropdown === 'about' ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {openMobileDropdown === 'about' && (
//                 <div className="ml-3 mt-1 space-y-0.5">
//                   {companyInfoItems.map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.href}
//                       className="flex items-center space-x-2 px-3 py-2 text-[11px] text-gray-600 hover:bg-white rounded-lg transition-all duration-200 uppercase tracking-wide"
//                       style={{ backgroundColor: '#FAF1E6' }}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <span className="text-gray-500">›</span>
//                       <span>{item.name.substring(2)}</span>
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* PRODUCTS Mobile Dropdown */}
//             <div className="border-b border-gray-100 pb-1">
//               <button
//                 onClick={() => toggleMobileDropdown('products')}
//                 className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//                 style={{ backgroundColor: openMobileDropdown === 'products' ? '#FAF1E6' : 'transparent' }}
//               >
//                 <span>PRODUCTS</span>
//                 <svg 
//                   className={`w-3.5 h-3.5 transition-transform duration-300 ${openMobileDropdown === 'products' ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {openMobileDropdown === 'products' && (
//                 <div className="ml-3 mt-1 space-y-0.5">
//                   {productsItems.map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.href}
//                       className="flex items-center space-x-2 px-3 py-2 text-[11px] text-gray-600 hover:bg-white rounded-lg transition-all duration-200 uppercase tracking-wide leading-relaxed"
//                       style={{ backgroundColor: '#FAF1E6' }}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <span className="text-gray-500">›</span>
//                       <span>{item.name.substring(2)}</span>
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* CLIENT */}
//             <a 
//               href="#client" 
//               className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               CLIENT
//             </a>

//             {/* GALLERY */}
//             <a 
//               href="#gallery" 
//               className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               GALLERY
//             </a>

//             {/* BLOG */}
//             <a 
//               href="#blog" 
//               className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               BLOG
//             </a>

//             {/* CONTACT Mobile Dropdown */}
//             <div className="border-b border-gray-100 pb-1">
//               <button
//                 onClick={() => toggleMobileDropdown('contact')}
//                 className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
//                 style={{ backgroundColor: openMobileDropdown === 'contact' ? '#FAF1E6' : 'transparent' }}
//               >
//                 <span>CONTACT</span>
//                 <svg 
//                   className={`w-3.5 h-3.5 transition-transform duration-300 ${openMobileDropdown === 'contact' ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {openMobileDropdown === 'contact' && (
//                 <div className="ml-3 mt-1 space-y-0.5">
//                   {contactItems.map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.href}
//                       className="flex items-center space-x-2 px-3 py-2 text-[11px] text-gray-600 hover:bg-white rounded-lg transition-all duration-200 uppercase tracking-wide"
//                       style={{ backgroundColor: '#FAF1E6' }}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <span className="text-gray-500">›</span>
//                       <span>{item.name.substring(2)}</span>
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Phone Numbers & Quote - TWO LINES */}
//             <div className="mt-3 px-3 py-3 bg-gray-100 rounded-lg">
//               <div className="flex items-center space-x-2 text-gray-700 mb-2">
//                 <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span className="text-xs font-medium">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-700 mb-3">
//                 <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span className="text-xs font-medium">+91 98765 43211</span>
//               </div>

//               <button className="w-full bg-gray-800 text-white px-3 py-2 rounded-md text-[11px] font-semibold hover:bg-gray-900 uppercase tracking-wider">
//                 REQUEST QUOTE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile menu */}
//       {isOpen && (
//         <div 
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Set active item based on current path
  useEffect(() => {
    const path = location.pathname;

    if (path.includes('/about-') || path === '/about' || path === '/about-profile' ||
      path === '/about-manufacturing' || path === '/about-design' ||
      path === '/about-services' || path === '/about-network') {
      setActiveItem('about');
    }
    else if (path.includes('/products-') || path === '/products' ||
      path === '/products-grain' || path === '/products-spices' ||
      path === '/products-daal' || path === '/products-sortex') {
      setActiveItem('products');
    }
    else if (path === '/contact' || path === '/career') {
      setActiveItem('contact');
    }
    else if (path === '/client') {
      setActiveItem('client');
    }
    else if (path === '/gallery') {
      setActiveItem('gallery');
    }
    else if (path === '/blog') {
      setActiveItem('blog');
    }
    else if (path === '/' || path === '/home') {
      setActiveItem('home');
    }
  }, [location.pathname]);

  // Scroll hide/show functionality
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  // Company info dropdown items
  const companyInfoItems = [
    { name: '› COMPANY PROFILE', href: '/about-profile' },
    { name: '› MANUFACTURING FACILITIES', href: '/about-manufacturing' },
    { name: '› DESIGN AND STRUCTURE', href: '/about-design' },
    { name: '› SERVICES', href: '/about-services' },
    { name: '› OUR NETWORK', href: '/about-network' }
  ];

  // Products dropdown items
  const productsItems = [
    // { name: '› GRAVITY SEPARATOR', href: '/products-grain' },
    // { name: '› FOOD PROCESSING PLANT', href: '/products-spices' },
    // { name: '› DRUM SEAL MACHINE', href: '/products-daal' },
    // { name: '› FLOUR MILL PLANT', href: '/products-sortex' },
    // { name: '› BELT CONVEYOR', href: '/products-sortex' },
    // { name: '› AIR CLASSIFIER', href: '/products-sortex' },
    // { name: '› CLEANING PLANT', href: '/products-sortex' },
    // { name: '› MILL MACHINE', href: '/products-sortex' },
    // { name: '› DESTONER MACHINE', href: '/products-sortex' },
    // { name: '› CENTRIFUGAL PUMP', href: '/products-sortex' },
    // { name: '› PNEUMATIC EQUIPMENT ', href: '/products-sortex' }







  ];

  // Contact dropdown items
  const contactItems = [
    { name: '› CONTACT', href: '/contact' },
    { name: '› CAREER', href: '/career' }
  ];

  return (
    <>
      {/* Main Navbar - with scroll hide */}
      <nav className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo and Company Info - Left Side */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-32 w-32 md:h-32 md:w-32 mt-3 object-contain -ml-6 cursor-pointer"
                    src="/logo.png"
                    alt="Arman Engineering"
                  />
                </Link>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-gray-950  text-base md:text-lg lg:text-xl -ml-10 font-bold uppercase tracking-wide whitespace-nowrap">
                  ARMAN ENGINEERING WORKS
                </span>
                <span className="text-[10px] md:text-xs text-gray-600 font-semibold -ml-10 uppercase tracking-wider whitespace-nowrap">
                  AN ISO 9001 : 2010 CERTIFIED COMPANY
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center space-x-1">

              {/* HOME - Corner Accent Animation */}
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={() => setActiveItem('home')}
                  className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${activeItem === 'home'
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  <span className="relative z-10">HOME</span>

                  {/* Corner Accent Animation */}
                  {activeItem === 'home' && (
                    <>
                      <span
                        className="absolute inset-0 animate-expandIn"
                        style={{ backgroundColor: '#FAF1E6' }}
                      ></span>
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                    </>
                  )}

                  {/* Hover Line - Black */}
                  <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                </Link>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* ABOUT US with Dropdown */}
              <div
                className="flex items-center"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="relative">
                  <button
                    onClick={() => setActiveItem('about')}
                    className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide flex items-center space-x-0.5 group overflow-hidden ${activeItem === 'about'
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                      }`}
                  >
                    <span className="relative z-10">ABOUT US</span>
                    <svg
                      className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                    {/* Corner Accent Animation */}
                    {activeItem === 'about' && (
                      <>
                        <span
                          className="absolute inset-0 animate-expandIn"
                          style={{ backgroundColor: '#FAF1E6' }}
                        ></span>
                        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                      </>
                    )}

                    {/* Hover Line */}
                    <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top-left ${openDropdown === 'about'
                        ? 'opacity-100 scale-y-100 visible'
                        : 'opacity-0 scale-y-0 invisible'
                      }`}
                    style={{ backgroundColor: '#FAF1E6' }}
                  >
                    <div className="relative">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45" style={{ backgroundColor: '#FAF1E6' }}></div>

                      {companyInfoItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => {
                            setActiveItem('about');
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-2 text-[11px] text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-all duration-200 uppercase tracking-wide font-medium group/item"
                        >
                          <span className="flex items-center space-x-1.5">
                            <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform duration-200">›</span>
                            <span>{item.name.substring(2)}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* PRODUCTS with Dropdown */}
             <div className="flex items-center">
                <Link
                  to="/products"
                  onClick={() => setActiveItem('client')}
                  className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${activeItem === 'client'
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  <span className="relative z-10">PRODUCTS</span>

                  {/* Corner Accent Animation */}
                  {activeItem === 'product' && (
                    <>
                      <span
                        className="absolute inset-0 animate-expandIn"
                        style={{ backgroundColor: '#FAF1E6' }}
                      ></span>
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                    </>
                  )}

                  {/* Hover Line */}
                  <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                </Link>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* CLIENT */}
              <div className="flex items-center">
                <Link
                  to="/client"
                  onClick={() => setActiveItem('client')}
                  className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${activeItem === 'client'
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  <span className="relative z-10">CLIENT</span>

                  {/* Corner Accent Animation */}
                  {activeItem === 'client' && (
                    <>
                      <span
                        className="absolute inset-0 animate-expandIn"
                        style={{ backgroundColor: '#FAF1E6' }}
                      ></span>
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                    </>
                  )}

                  {/* Hover Line */}
                  <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                </Link>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* GALLERY */}
              <div className="flex items-center">
                <Link
                  to="/gallery"
                  onClick={() => setActiveItem('gallery')}
                  className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${activeItem === 'gallery'
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  <span className="relative z-10">GALLERY</span>

                  {/* Corner Accent Animation */}
                  {activeItem === 'gallery' && (
                    <>
                      <span
                        className="absolute inset-0 animate-expandIn"
                        style={{ backgroundColor: '#FAF1E6' }}
                      ></span>
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                    </>
                  )}

                  {/* Hover Line */}
                  <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                </Link>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* BLOG */}
              <div className="flex items-center">
                <Link
                  to="/blog"
                  onClick={() => setActiveItem('blog')}
                  className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide group overflow-hidden ${activeItem === 'blog'
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  <span className="relative z-10">BLOG</span>

                  {/* Corner Accent Animation */}
                  {activeItem === 'blog' && (
                    <>
                      <span
                        className="absolute inset-0 animate-expandIn"
                        style={{ backgroundColor: '#FAF1E6' }}
                      ></span>
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                    </>
                  )}

                  {/* Hover Line */}
                  <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                </Link>
                {/* Vertical Line */}
                <span className="w-px h-8 bg-gray-300 mx-1"></span>
              </div>

              {/* CONTACT with Dropdown and Phone */}
              <div
                className="flex items-center"
                onMouseEnter={() => setOpenDropdown('contact')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="relative">
                  <button
                    onClick={() => setActiveItem('contact')}
                    className={`relative px-3 py-2 text-xs font-medium transition-all duration-300 uppercase tracking-wide flex items-center space-x-0.5 group overflow-hidden ${activeItem === 'contact'
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                      }`}
                  >
                    <span className="relative z-10">CONTACT</span>
                    <svg
                      className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${openDropdown === 'contact' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>

                    {/* Corner Accent Animation */}
                    {activeItem === 'contact' && (
                      <>
                        <span
                          className="absolute inset-0 animate-expandIn"
                          style={{ backgroundColor: '#FAF1E6' }}
                        ></span>
                        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black animate-scaleIn"></span>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black animate-scaleIn"></span>
                      </>
                    )}

                    {/* Hover Line */}
                    <span className="absolute bottom-0.5 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                  </button>

                  {/* Contact Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top-left ${openDropdown === 'contact'
                        ? 'opacity-100 scale-y-100 visible'
                        : 'opacity-0 scale-y-0 invisible'
                      }`}
                    style={{ backgroundColor: '#FAF1E6' }}
                  >
                    <div className="relative">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45" style={{ backgroundColor: '#FAF1E6' }}></div>

                      {contactItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => {
                            setActiveItem('contact');
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-2 text-[11px] text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-all duration-200 uppercase tracking-wide font-medium group/item"
                        >
                          <span className="flex items-center space-x-1.5">
                            <span className="text-gray-500 group-hover/item:translate-x-1 transition-transform duration-200">›</span>
                            <span>{item.name.substring(2)}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PHONE NUMBERS & REQUEST QUOTE */}
                <div className="flex flex-col items-end ml-2 pl-2 border-l-2 border-gray-300">
                  {/* Phone Numbers */}
                  <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group whitespace-nowrap">
                    <svg className="w-3 h-3 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[11px] font-medium">+91 9898898219</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group whitespace-nowrap">
                    <svg className="w-3 h-3 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[11px] font-medium">+91 9998551985</span>
                  </div>

                  {/* Request Quote Button */}
                  <Link to="/request-quote">
                    <button className="bg-gray-800 text-white px-3 py-1 -mr-4 rounded-md text-[10px] font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider mt-2">
                      REQUEST QUOTE
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="p-4 border-b" style={{ backgroundColor: '#FAF1E6' }}>
            <div className="flex items-center space-x-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              </Link>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold uppercase text-xs tracking-wide">
                  ARMAN ENGINEERING WORKS
                </span>
                <span className="text-[10px] text-gray-600 font-semibold uppercase tracking-wider">
                  ISO 9001:2010 CERTIFIED
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="p-3 space-y-1">
            {/* HOME */}
            <Link
              to="/"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
              style={{ backgroundColor: '#FAF1E6' }}
              onClick={() => {
                setActiveItem('home');
                setIsOpen(false);
              }}
            >
              HOME
            </Link>

            {/* ABOUT US Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-1">
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
                style={{ backgroundColor: openMobileDropdown === 'about' ? '#FAF1E6' : 'transparent' }}
              >
                <span>ABOUT US</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${openMobileDropdown === 'about' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMobileDropdown === 'about' && (
                <div className="ml-3 mt-1 space-y-0.5">
                  {companyInfoItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-[11px] text-gray-600 hover:bg-white rounded-lg transition-all duration-200 uppercase tracking-wide"
                      style={{ backgroundColor: '#FAF1E6' }}
                      onClick={() => {
                        setActiveItem('about');
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-gray-500">›</span>
                      <span>{item.name.substring(2)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* PRODUCTS Mobile Dropdown */}
            <Link
              to="/products"
              className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
              onClick={() => {
                setActiveItem('client');
                setIsOpen(false);
              }}
            >
              PRODUCTS
            </Link>

            {/* CLIENT */}
            <Link
              to="/client"
              className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
              onClick={() => {
                setActiveItem('client');
                setIsOpen(false);
              }}
            >
              CLIENT
            </Link>

            {/* GALLERY */}
            <Link
              to="/gallery"
              className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
              onClick={() => {
                setActiveItem('gallery');
                setIsOpen(false);
              }}
            >
              GALLERY
            </Link>

            {/* BLOG */}
            <Link
              to="/blog"
              className="block px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
              onClick={() => {
                setActiveItem('blog');
                setIsOpen(false);
              }}
            >
              BLOG
            </Link>

            {/* CONTACT Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-1">
              <button
                onClick={() => toggleMobileDropdown('contact')}
                className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:bg-white rounded-lg transition-all duration-200 uppercase text-xs font-medium"
                style={{ backgroundColor: openMobileDropdown === 'contact' ? '#FAF1E6' : 'transparent' }}
              >
                <span>CONTACT</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${openMobileDropdown === 'contact' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMobileDropdown === 'contact' && (
                <div className="ml-3 mt-1 space-y-0.5">
                  {contactItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-[11px] text-gray-600 hover:bg-white rounded-lg transition-all duration-200 uppercase tracking-wide"
                      style={{ backgroundColor: '#FAF1E6' }}
                      onClick={() => {
                        setActiveItem('contact');
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-gray-500">›</span>
                      <span>{item.name.substring(2)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Phone Numbers & Quote */}
            <div className="mt-3 px-3 py-3 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-700 mb-2">
                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs font-medium">+91 9898898219</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 mb-3">
                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs font-medium">+91 9998551985</span>
              </div>

              <Link to="/request-quote" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gray-800 text-white px-3 py-2 rounded-md text-[11px] font-semibold hover:bg-gray-900 uppercase tracking-wider">
                  REQUEST QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;