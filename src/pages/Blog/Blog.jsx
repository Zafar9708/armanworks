import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Calendar, User, Clock, Tag,
  ChevronRight, Home, Sparkles, Share2,
  Heart, MessageCircle, Bookmark, Search,
  ArrowRight, Twitter, Linkedin, Facebook,
  Mail, Eye, ThumbsUp, Download, Printer,
  Grid, List, X, AlertCircle, CheckCircle,
  Wheat, Droplets, Leaf, Factory, ArrowLeft
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen, count: 12 },
    { id: 'rice', name: 'Rice Mill', icon: Wheat, count: 3 },
    { id: 'flour', name: 'Flour Mill', icon: Droplets, count: 3 },
    { id: 'pulse', name: 'Pulse/Dal Mill', icon: Leaf, count: 3 },
    { id: 'oil', name: 'Oil Mill', icon: Factory, count: 3 }
  ];

  const blogPosts = [
    // Rice Mill Industry Posts
    {
      id: 1,
      title: 'How to Get Started in the Rice Mill Industry: Complete Guide 2026',
      slug: 'how-to-start-rice-mill-industry',
      excerpt: 'A comprehensive guide to starting your own rice mill business. Learn about setup costs, machinery requirements, licenses, and profitable strategies.',
      content: `
        <h2>Introduction to Rice Mill Industry</h2>
        <p>The rice milling industry is one of the largest and most essential agro-based industries in India. With India being the second-largest producer of rice in the world, the rice mill industry offers tremendous opportunities for entrepreneurs. This comprehensive guide will walk you through everything you need to know about starting a successful rice mill business.</p>

        <h2>Market Potential and Opportunity</h2>
        <p>India produces over 120 million metric tons of rice annually, with a significant portion requiring processing. The demand for processed rice continues to grow both domestically and internationally. With proper planning and execution, a rice mill can generate substantial profits while serving a essential need.</p>

        <h2>Types of Rice Mills</h2>
        <h3>1. Modern Automatic Rice Mill</h3>
        <p>Fully automated mills with capacities ranging from 2-10 tons per hour. Investment: ₹1-5 crore depending on capacity.</p>
        
        <h3>2. Semi-Automatic Rice Mill</h3>
        <p>Medium-scale operations with capacities of 1-2 tons per hour. Investment: ₹50 lakhs - 1 crore.</p>
        
        <h3>3. Mini Rice Mill</h3>
        <p>Small-scale operations suitable for rural areas. Investment: ₹10-25 lakhs.</p>

        <h2>Essential Machinery Required</h2>
        <ul>
          <li><strong>Pre-Cleaner:</strong> Removes impurities like stones, dust, and straw</li>
          <li><strong>De-stoner:</strong> Separates stones from paddy</li>
          <li><strong>Huller/Sheller:</strong> Removes husk from paddy</li>
          <li><strong>Paddy Separator:</strong> Separates brown rice from unhulled paddy</li>
          <li><strong>Whitener/Polisher:</strong> Removes bran layer and polishes rice</li>
          <li><strong>Grader/Sorter:</strong> Sorts rice by size and quality</li>
          <li><strong>Color Sorter:</strong> Removes discolored grains (optional but recommended)</li>
          <li><strong>Packaging Machine:</strong> For final packaging</li>
        </ul>

        <h2>Licenses and Registrations Required</h2>
        <ul>
          <li>Company Registration (Proprietorship/Partnership/Pvt Ltd)</li>
          <li>GST Registration</li>
          <li>FSSAI License (for food business)</li>
          <li>MSME/Udyog Aadhar Registration</li>
          <li>Pollution Control Board Clearance</li>
          <li>Factory License under Factories Act</li>
          <li>BIS Certification (optional but recommended)</li>
          <li>Trade License from Local Municipality</li>
        </ul>

        <h2>Location Requirements</h2>
        <p>Choose a location with:</p>
        <ul>
          <li>Proximity to paddy growing areas</li>
          <li>Good road connectivity for transport</li>
          <li>Availability of adequate electricity (3-phase connection)</li>
          <li>Water availability for processing</li>
          <li>Minimum 5000-10000 sq ft area (varies by scale)</li>
          <li>Nearby labor availability</li>
        </ul>

        <h2>Raw Material Sourcing</h2>
        <p>Establish relationships with:</p>
        <ul>
          <li>Local farmers through farmer producer organizations (FPOs)</li>
          <li>Agricultural produce market committees (APMCs)</li>
          <li>Government procurement agencies</li>
          <li>Direct purchase from mandis</li>
        </ul>

        <h2>Cost Breakdown (For Medium Scale Mill - 2 TPH)</h2>
        <ul>
          <li>Land and Building: ₹30-40 lakhs</li>
          <li>Plant and Machinery: ₹50-60 lakhs</li>
          <li>Electrical Installation: ₹5-8 lakhs</li>
          <li>Working Capital (3 months): ₹15-20 lakhs</li>
          <li>Licenses and Registrations: ₹1-2 lakhs</li>
          <li>Miscellaneous: ₹2-3 lakhs</li>
          <li><strong>Total Investment: ₹1-1.5 crore approximately</strong></li>
        </ul>

        <h2>Profit Margins and Returns</h2>
        <p>A well-run rice mill can expect:</p>
        <ul>
          <li>Gross Profit Margin: 15-20%</li>
          <li>Net Profit Margin: 8-12%</li>
          <li>Payback Period: 3-5 years</li>
          <li>ROI: 15-20% annually</li>
        </ul>

        <h2>Additional Revenue Streams</h2>
        <ul>
          <li><strong>Rice Bran:</strong> Sold to oil extraction units</li>
          <li><strong>Rice Husk:</strong> Used as fuel or sold to paper/board industry</li>
          <li><strong>Broken Rice:</strong> Sold to food processing industries</li>
          <li><strong>Rice Polish:</strong> Used in animal feed</li>
        </ul>

        <h2>Common Challenges and Solutions</h2>
        <h3>Challenge 1: Power Fluctuations</h3>
        <p><strong>Solution:</strong> Install power backup and voltage stabilizers</p>
        
        <h3>Challenge 2: Seasonal Raw Material Availability</h3>
        <p><strong>Solution:</strong> Build adequate storage and maintain relationships with multiple suppliers</p>
        
        <h3>Challenge 3: Quality Consistency</h3>
        <p><strong>Solution:</strong> Invest in quality testing equipment and train staff</p>
        
        <h3>Challenge 4: Competition</h3>
        <p><strong>Solution:</strong> Focus on niche markets, better quality, and value-added products</p>

        <h2>Success Tips from Industry Experts</h2>
        <ul>
          <li>Start with contract milling for established brands to learn the ropes</li>
          <li>Invest in automation to reduce labor dependency</li>
          <li>Build strong relationships with local farmers</li>
          <li>Focus on quality consistency rather than just quantity</li>
          <li>Explore export opportunities for premium varieties</li>
          <li>Stay updated with government schemes and subsidies</li>
        </ul>

        <h2>Government Subsidies and Support</h2>
        <p>The government offers various subsidies under:</p>
        <ul>
          <li>PMFME Scheme: 35% subsidy on plant and machinery (max ₹10 lakhs)</li>
          <li>MSME Subsidies: Up to 25% for technology upgradation</li>
          <li>State-Specific Subsidies: Varies by state</li>
          <li>Bank Loans under Priority Sector Lending</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Starting a rice mill requires significant investment but offers stable returns with proper planning and execution. Focus on quality, build strong relationships, and stay updated with market trends. With India's growing population and export opportunities, the rice mill industry presents a promising venture for aspiring entrepreneurs.</p>
      `,
      category: 'rice',
      image: 'https://shardaassociates.in/wp-content/uploads/2026/01/Add-a-heading-70.jpg',
      thumbnail: 'https://shardaassociates.in/wp-content/uploads/2026/01/Add-a-heading-70.jpg',
      author: 'Rajesh Patel',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      authorRole: 'Rice Mill Consultant',
      date: '2024-03-15',
      readTime: '12 min read',
      views: 1245,
      likes: 89,
      comments: 23,
      tags: ['Rice Mill', 'Agro Industry', 'Food Processing', 'Business Guide']
    },
    {
      id: 2,
      title: 'Modern Rice Mill Automation: Technology Trends in 2026',
      excerpt: 'Discover the latest automation technologies transforming rice mills. From color sorters to IoT-enabled monitoring systems.',
      category: 'rice',
      image: 'https://gfmdhaka.com/public/images/news/20250714145051-photo-1200X470.gif',
      thumbnail: 'https://gfmdhaka.com/public/images/news/20250714145051-photo-1200X470.gif',
      author: 'Amit Shah',
      date: '2024-03-10',
      readTime: '8 min read',
      views: 876,
      likes: 56,
      comments: 12,
      tags: ['Automation', 'Technology', 'Rice Mill']
    },
    {
      id: 3,
      title: 'Rice Mill Quality Control: Ensuring Premium Grade Output',
      excerpt: 'Learn about quality control measures, testing procedures, and standards for producing high-quality rice.',
      category: 'rice',
      image: 'https://www.skrmindia.com/images/quality_contril_img.webp',
      thumbnail: 'https://www.skrmindia.com/images/quality_contril_img.webp',
      author: 'Priya Mehta',
      date: '2024-03-05',
      readTime: '10 min read',
      views: 654,
      likes: 43,
      comments: 8,
      tags: ['Quality Control', 'Rice Mill', 'Standards']
    },

    // Flour Mill Industry Posts
    {
      id: 4,
      title: 'How to Get Started in the Flour Mill Industry: Complete Guide 2024',
      slug: 'how-to-start-flour-mill-industry',
      excerpt: 'Everything you need to know about starting a flour mill business. From wheat procurement to marketing finished products.',
      content: `
        <h2>Introduction to Flour Mill Industry</h2>
        <p>The flour milling industry is a cornerstone of the food processing sector in India. With wheat being a staple food across most of India, the demand for quality flour (atta) is consistently high. This guide provides comprehensive information for entrepreneurs looking to enter the flour mill business.</p>

        <h2>Market Analysis</h2>
        <p>India produces approximately 110 million metric tons of wheat annually. The organized flour milling sector processes about 10-15% of this, leaving tremendous opportunity for growth. The rise in branded flour consumption and changing consumer preferences toward packaged flour has created new opportunities.</p>

        <h2>Types of Flour Mills</h2>
        
        <h3>1. Commercial Roller Flour Mill</h3>
        <p>Large-scale operations processing 50-200 tons per day. Investment: ₹5-20 crore.</p>
        
        <h3>2. Medium-Scale Flour Mill</h3>
        <p>Processing 10-50 tons per day. Investment: ₹1-5 crore.</p>
        
        <h3>3. Mini Flour Mill</h3>
        <p>Small-scale operations processing 1-5 tons per day. Investment: ₹10-50 lakhs.</p>
        
        <h3>4. Chakkı (Atta) Mill</h3>
        <p>Traditional stone-grinding mills for local consumption. Investment: ₹2-10 lakhs.</p>

        <h2>Essential Machinery</h2>
        <ul>
          <li><strong>Wheat Cleaner:</strong> Removes impurities, stones, and dust</li>
          <li><strong>Scourer:</strong> Removes outer layers and cleans wheat</li>
          <li><strong>Conditioning System:</strong> Moisture treatment for optimal milling</li>
          <li><strong>Roller Mills:</strong> Core milling equipment with multiple break rolls</li>
          <li><strong>Plan Sifters:</strong> Separates flour by particle size</li>
          <li><strong>Purifiers:</strong> Improves flour quality</li>
          <li><strong>Bran Finisher:</strong> Recovers flour from bran</li>
          <li><strong>Mixing and Blending Systems:</strong> For consistent quality</li>
          <li><strong>Packaging Line:</strong> Automatic weighing and packaging</li>
        </ul>

        <h2>Licenses Required</h2>
        <ul>
          <li>FSSAI License (Mandatory for food business)</li>
          <li>GST Registration</li>
          <li>Factory License</li>
          <li>MSME Registration</li>
          <li>Pollution Control Board Clearance</li>
          <li>BIS Certification for packaged products</li>
          <li>Trade License</li>
          <li>Weights and Measures License</li>
        </ul>

        <h2>Location Selection</h2>
        <p>Ideal location should have:</p>
        <ul>
          <li>Proximity to wheat-producing areas</li>
          <li>Good road/rail connectivity</li>
          <li>Industrial power connection (minimum 100 HP for medium scale)</li>
          <li>Water availability</li>
          <li>Area requirement: 5000-20000 sq ft depending on scale</li>
          <li>Distance from residential areas (pollution norms)</li>
        </ul>

        <h2>Raw Material Procurement</h2>
        <p>Source wheat from:</p>
        <ul>
          <li>Local mandis and APMCs</li>
          <li>Direct from farmers through contract farming</li>
          <li>Government procurement agencies (FCI, State Warehousing)</li>
          <li>Traders and commission agents</li>
        </ul>

        <h2>Investment Breakdown (Medium Scale - 20 TPD)</h2>
        <ul>
          <li>Land and Building: ₹50-60 lakhs</li>
          <li>Plant and Machinery: ₹80-90 lakhs</li>
          <li>Electrical and Installation: ₹10-12 lakhs</li>
          <li>Raw Material Stock: ₹20-25 lakhs</li>
          <li>Packaging Materials: ₹5-8 lakhs</li>
          <li>Working Capital: ₹15-20 lakhs</li>
          <li>Licenses and Miscellaneous: ₹3-5 lakhs</li>
          <li><strong>Total Investment: ₹1.8-2.2 crore</strong></li>
        </ul>

        <h2>Product Range</h2>
        <ul>
          <li><strong>Whole Wheat Flour (Atta):</strong> Primary product</li>
          <li><strong>Refined Flour (Maida):</strong> For bakery industry</li>
          <li><strong>Semolina (Suji/Rava):</strong> For breakfast and sweets</li>
          <li><strong>Bran:</strong> Used in animal feed</li>
          <li><strong>Wheat Germ:</strong> High-value nutritional product</li>
          <li><strong>Specialty Flours:</strong> Multigrain, gluten-free, etc.</li>
        </ul>

        <h2>Profit Margins</h2>
        <ul>
          <li>Gross Margin: 15-20%</li>
          <li>Net Margin: 8-12%</li>
          <li>ROI: 15-18% annually</li>
          <li>Payback Period: 4-6 years</li>
        </ul>

        <h2>Marketing Strategies</h2>
        <h3>B2B Sales:</h3>
        <ul>
          <li>Supply to biscuit and bakery manufacturers</li>
          <li>Contract manufacturing for brands</li>
          <li>Supply to hotels and restaurants</li>
          <li>Industrial users (papad, snack manufacturers)</li>
        </ul>

        <h3>B2C Sales:</h3>
        <ul>
          <li>Own brand in local markets</li>
          <li>Supply to kirana stores and supermarkets</li>
          <li>Online sales through e-commerce</li>
          <li>Institutional sales (hostels, canteens)</li>
        </ul>

        <h2>Quality Parameters</h2>
        <ul>
          <li>Moisture content: 12-14%</li>
          <li>Ash content: 0.5-1.0%</li>
          <li>Protein content: 10-12%</li>
          <li>Gluten content: 8-10%</li>
          <li>Falling number: 250-350 seconds</li>
          <li>Color and appearance</li>
        </ul>

        <h2>Common Challenges</h2>
        <ul>
          <li><strong>Price Fluctuations:</strong> Hedge through futures trading</li>
          <li><strong>Quality Variation:</strong> Blend different lots for consistency</li>
          <li><strong>Power Costs:</strong> Install energy-efficient equipment</li>
          <li><strong>Competition:</strong> Focus on quality and branding</li>
          <li><strong>Seasonality:</strong> Build adequate storage capacity</li>
        </ul>

        <h2>Government Support</h2>
        <ul>
          <li>PMFME Scheme: 35% subsidy on machinery (max ₹10 lakhs)</li>
          <li>State food processing policies</li>
          <li>Export incentives under MEIS</li>
          <li>Bank loans under priority sector</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The flour mill industry offers stable returns with growing demand. Success depends on quality consistency, efficient operations, and strong distribution networks. Start small, focus on a specific market segment, and gradually expand based on experience and capital availability.</p>
      `,
      category: 'flour',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg',
      thumbnail: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg',
      author: 'Suresh Yadav',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      authorRole: 'Flour Mill Expert',
      date: '2024-03-12',
      readTime: '11 min read',
      views: 987,
      likes: 67,
      comments: 15,
      tags: ['Flour Mill', 'Wheat Processing', 'Food Business']
    },
    {
      id: 5,
      title: 'Wheat Procurement Strategies for Flour Mills',
      excerpt: 'Learn effective strategies for wheat procurement, storage management, and quality assessment.',
      category: 'flour',
      image: 'https://content.jdmagicbox.com/comp/koppal/n8/9999p8534.8534.181222163159.a8n8/catalogue/shri-venkatalaxmi-agro-foods-ltd-koppal-rice-flour-manufacturers-1ehuc971dm.jpg',
      thumbnail: 'https://content.jdmagicbox.com/comp/koppal/n8/9999p8534.8534.181222163159.a8n8/catalogue/shri-venkatalaxmi-agro-foods-ltd-koppal-rice-flour-manufacturers-1ehuc971dm.jpg',
      author: 'Amit Shah',
      date: '2024-03-08',
      readTime: '7 min read',
      views: 543,
      likes: 34,
      comments: 6,
      tags: ['Procurement', 'Wheat', 'Supply Chain']
    },
    {
      id: 6,
      title: 'Value-Added Products from Flour Mills',
      excerpt: 'Explore opportunities in specialty flours, fortified products, and ready-to-eat mixes.',
      category: 'flour',
      image: 'https://storage.googleapis.com/torg-cms-media/media/original_images/How_Is_Flour_Manufactured.png',
      thumbnail: 'https://storage.googleapis.com/torg-cms-media/media/original_images/How_Is_Flour_Manufactured.png',
      author: 'Priya Mehta',
      date: '2024-03-03',
      readTime: '9 min read',
      views: 432,
      likes: 28,
      comments: 5,
      tags: ['Value Addition', 'Product Development']
    },

    // Pulse/Dal Mill Industry Posts
    {
      id: 7,
      title: 'How to Get Started in the Pulse/Dal Mill Industry: Complete Guide 2024',
      slug: 'how-to-start-pulse-dal-mill-industry',
      excerpt: 'Comprehensive guide to starting a dal mill. Learn about processing different pulses, machinery requirements, and market opportunities.',
      content: `
        <h2>Introduction to Pulse/Dal Mill Industry</h2>
        <p>India is the largest producer and consumer of pulses globally. The dal milling industry plays a crucial role in processing various pulses like tur, moong, chana, urad, and masoor. With growing protein awareness, the demand for quality dal continues to rise.</p>

        <h2>Market Overview</h2>
        <p>India produces 25-30 million tons of pulses annually. However, there's still a gap between production and consumption, leading to imports. This presents opportunities for dal millers to process both domestic and imported pulses.</p>

        <h2>Types of Pulses Processed</h2>
        <ul>
          <li><strong>Tur (Arhar) Dal:</strong> Most consumed, price-sensitive</li>
          <li><strong>Chana Dal:</strong> Second most popular, stable market</li>
          <li><strong>Moong Dal:</strong> Premium product, growing demand</li>
          <li><strong>Urad Dal:</strong> Popular in South India</li>
          <li><strong>Masoor Dal:</strong> Price-sensitive, imported variety</li>
          <li><strong>Matar (Peas):</strong> Seasonal processing</li>
        </ul>

        <h2>Scale of Operations</h2>
        
        <h3>1. Large-Scale Dal Mill</h3>
        <p>Capacity: 10-20 tons/day. Investment: ₹2-4 crore</p>
        
        <h3>2. Medium-Scale Dal Mill</h3>
        <p>Capacity: 5-10 tons/day. Investment: ₹1-2 crore</p>
        
        <h3>3. Small-Scale Dal Mill</h3>
        <p>Capacity: 2-5 tons/day. Investment: ₹25-50 lakhs</p>
        
        <h3>4. Mini Dal Mill</h3>
        <p>Capacity: 0.5-2 tons/day. Investment: ₹5-15 lakhs</p>

        <h2>Essential Machinery</h2>
        <ul>
          <li><strong>Pre-Cleaner:</strong> Removes impurities and foreign matter</li>
          <li><strong>Grading Machine:</strong> Sorts pulses by size</li>
          <li><strong>Pitting Machine:</strong> Creates pits for oil penetration</li>
          <li><strong>Oil Mixer:</strong> Applies edible oil for better splitting</li>
          <li><strong>Conditioning Unit:</strong> Temperature and moisture control</li>
          <li><strong>Dal Mill Machine:</strong> Core processing unit</li>
          <li><strong>Gravity Separator:</strong> Separates dal from husk</li>
          <li><strong>Polisher:</strong> Improves appearance and shine</li>
          <li><strong>Color Sorter:</strong> Removes discolored grains</li>
          <li><strong>Packaging Unit:</strong> Weighing and sealing</li>
        </ul>

        <h2>Processing Steps</h2>
        <ol>
          <li><strong>Cleaning:</strong> Remove stones, dust, and impurities</li>
          <li><strong>Grading:</strong> Size-based separation</li>
          <li><strong>Pitting:</strong> Create micro-cracks for oil absorption</li>
          <li><strong>Oil Application:</strong> Mix 0.1-0.2% edible oil</li>
          <li><strong>Conditioning:</strong> Rest for 8-12 hours</li>
          <li><strong>Milling:</strong> Split pulses into dal</li>
          <li><strong>Separation:</strong> Remove husk and broken pieces</li>
          <li><strong>Polishing:</strong> Add shine and appearance</li>
          <li><strong>Grading:</strong> Separate whole dal from broken</li>
          <li><strong>Packaging:</strong> Final packing and sealing</li>
        </ol>

        <h2>Licenses Required</h2>
        <ul>
          <li>FSSAI License (Mandatory)</li>
          <li>GST Registration</li>
          <li>Factory License</li>
          <li>MSME Registration</li>
          <li>Pollution Control Clearance</li>
          <li>Trade License</li>
          <li>Warehousing License (if applicable)</li>
        </ul>

        <h2>Location Requirements</h2>
        <ul>
          <li>Near pulse-producing areas or major markets</li>
          <li>Good road connectivity</li>
          <li>Industrial power connection (50-100 HP)</li>
          <li>Water availability for processing</li>
          <li>Area: 3000-10000 sq ft</li>
          <li>Storage space for raw and finished goods</li>
        </ul>

        <h2>Investment Breakdown (Medium Scale - 5 TPD)</h2>
        <ul>
          <li>Land and Building: ₹30-40 lakhs</li>
          <li>Plant and Machinery: ₹40-50 lakhs</li>
          <li>Electrical Installation: ₹5-8 lakhs</li>
          <li>Raw Material Stock: ₹15-20 lakhs</li>
          <li>Working Capital: ₹10-15 lakhs</li>
          <li>Licenses and Misc: ₹2-3 lakhs</li>
          <li><strong>Total Investment: ₹1-1.5 crore</strong></li>
        </ul>

        <h2>Profit Margins</h2>
        <ul>
          <li>Processing Margin: ₹200-400 per quintal</li>
          <li>Gross Margin: 10-15%</li>
          <li>Net Margin: 5-8%</li>
          <li>ROI: 12-15% annually</li>
          <li>Payback Period: 4-5 years</li>
        </ul>

        <h2>By-Products and Additional Revenue</h2>
        <ul>
          <li><strong>Dal Husk:</strong> Sold as cattle feed</li>
          <li><strong>Broken Dal:</strong> Used in snacks and papad industry</li>
          <li><strong>Powder:</strong> Used in food processing</li>
          <li><strong>Custom Milling:</strong> Process for traders</li>
        </ul>

        <h2>Quality Parameters</h2>
        <ul>
          <li>Moisture content: 10-12%</li>
          <li>Split percentage: >85%</li>
          <li>Oil content: Minimal</li>
          <li>Color: Uniform and bright</li>
          <li>Broken percentage: <5%</li>
          <li>Foreign matter: <1%</li>
        </ul>

        <h2>Marketing Channels</h2>
        <ul>
          <li>Wholesale to local arhatiyas</li>
          <li>Supply to branded pulse companies</li>
          <li>Own brand for retail</li>
          <li>Institutional sales (hostels, canteens)</li>
          <li>Export to Middle East and US (for premium quality)</li>
          <li>Online platforms (Amazon, Flipkart)</li>
        </ul>

        <h2>Government Support</h2>
        <ul>
          <li>PMFME Scheme: 35% subsidy on machinery</li>
          <li>NABARD loans for agro-processing</li>
          <li>State subsidies for food processing</li>
          <li>Price Support Scheme (PSS) for procurement</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Dal milling is a stable business with consistent demand. Success depends on efficient processing, quality consistency, and managing price fluctuations. Start with one or two pulse varieties and expand based on market response.</p>
      `,
      category: 'pulse',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg',
      thumbnail: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg',
      author: 'Rajesh Patel',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      authorRole: 'Dal Mill Specialist',
      date: '2024-03-14',
      readTime: '13 min read',
      views: 1123,
      likes: 78,
      comments: 19,
      tags: ['Dal Mill', 'Pulse Processing', 'Food Business']
    },
    {
      id: 8,
      title: 'Optimizing Dal Mill Efficiency: Tips from Industry Veterans',
      excerpt: 'Expert tips on improving dal mill efficiency, reducing breakage, and maximizing recovery.',
      category: 'pulse',
      image: 'https://www.nextechagrisolutions.com/blog/wp-content/uploads/2021/10/Optimize-Your-Rice-Mill-Plant-For-Better-Efficiency.png',
      thumbnail: 'https://www.nextechagrisolutions.com/blog/wp-content/uploads/2021/10/Optimize-Your-Rice-Mill-Plant-For-Better-Efficiency.png',
      author: 'Suresh Yadav',
      date: '2024-03-09',
      readTime: '8 min read',
      views: 654,
      likes: 45,
      comments: 11,
      tags: ['Efficiency', 'Operations', 'Tips']
    },
    {
      id: 9,
      title: 'Understanding Pulse Quality Parameters',
      excerpt: 'Complete guide to pulse quality assessment, grading standards, and price determinants.',
      category: 'pulse',
      image: 'https://projectreportbank.com/wp-content/uploads/2021/09/Pulse_Dal_Mill_Project_Report_eBook_Cover-800x800.webp',
      thumbnail: 'https://projectreportbank.com/wp-content/uploads/2021/09/Pulse_Dal_Mill_Project_Report_eBook_Cover-800x800.webp',
      author: 'Priya Mehta',
      date: '2024-03-04',
      readTime: '7 min read',
      views: 432,
      likes: 29,
      comments: 7,
      tags: ['Quality', 'Grading', 'Standards']
    },

    // Oil Mill Industry Posts
    {
      id: 10,
      title: 'How to Get Started in the Oil Mill Industry: Complete Guide 2024',
      slug: 'how-to-start-oil-mill-industry',
      excerpt: 'Comprehensive guide to starting an oil mill. Covering edible oil extraction, refining, and marketing strategies.',
      content: `
        <h2>Introduction to Oil Mill Industry</h2>
        <p>The edible oil industry in India is one of the largest in the world, with annual consumption exceeding 25 million tons. Despite this, India imports over 60% of its edible oil requirements, presenting a massive opportunity for domestic oil millers.</p>

        <h2>Types of Oilseeds Processed</h2>
        <ul>
          <li><strong>Groundnut:</strong> Premium oil, popular in many regions</li>
          <li><strong>Mustard/Rapeseed:</strong> Second largest, strong demand</li>
          <li><strong>Soybean:</strong> Largest volume, primarily in central India</li>
          <li><strong>Sunflower:</strong> Growing demand, health perception</li>
          <li><strong>Sesame:</strong> Premium oil for niche markets</li>
          <li><strong>Cottonseed:</strong> Large volume, mainly in Gujarat/Maharashtra</li>
          <li><strong>Rice Bran:</strong> Emerging segment, high potential</li>
        </ul>

        <h2>Scale of Operations</h2>
        
        <h3>1. Large Solvent Extraction Plant</h3>
        <p>Capacity: 100-500 tons/day. Investment: ₹10-50 crore</p>
        
        <h3>2. Medium Expeller Mill</h3>
        <p>Capacity: 10-50 tons/day. Investment: ₹2-8 crore</p>
        
        <h3>3. Small Expeller Mill</h3>
        <p>Capacity: 2-10 tons/day. Investment: ₹50 lakhs - 2 crore</p>
        
        <h3>4. Mini Oil Mill (Ghani/Kolhu)</h3>
        <p>Capacity: 0.5-2 tons/day. Investment: ₹10-30 lakhs</p>

        <h2>Essential Machinery</h2>
        <h3>For Expeller Mills:</h3>
        <ul>
          <li><strong>Seed Cleaner:</strong> Removes impurities</li>
          <li><strong>Seed Cracker:</strong> Breaks seeds for better extraction</li>
          <li><strong>Conditioner:</strong> Heat and moisture treatment</li>
          <li><strong>Expeller:</strong> Main oil extraction machine</li>
          <li><strong>Filter Press:</strong> Filters crude oil</li>
          <li><strong>Cake Breaker:</strong> Breaks oil cake for sale</li>
        </ul>

        <h3>For Refining (Additional):</h3>
        <ul>
          <li><strong>Degumming Unit:</strong> Removes gums</li>
          <li><strong>Neutralizer:</strong> Removes free fatty acids</li>
          <li><strong>Bleaching Unit:</strong> Removes color</li>
          <li><strong>Deodorizer:</strong> Removes odor</li>
          <li><strong>Winterization Unit:</strong> For specific oils</li>
          <li><strong>Packaging Line:</strong> Bottling and sealing</li>
        </ul>

        <h2>Processing Steps (Expeller Method)</h2>
        <ol>
          <li><strong>Cleaning:</strong> Remove stones, metal, and impurities</li>
          <li><strong>De-hulling:</strong> Remove outer cover (for some seeds)</li>
          <li><strong>Crushing:</strong> Break seeds into smaller pieces</li>
          <li><strong>Conditioning:</strong> Heat treatment at 80-100°C</li>
          <li><strong>Expelling:</strong> Mechanical extraction of oil</li>
          <li><strong>Filtration:</strong> Remove solids from crude oil</li>
          <li><strong>Refining:</strong> (Optional) Produce refined oil</li>
          <li><strong>Packaging:</strong> Final product packing</li>
        </ol>

        <h2>Solvent Extraction Method</h2>
        <p>For higher recovery from oil cakes:</p>
        <ol>
          <li>Expeller cake preparation</li>
          <li>Solvent (Hexane) extraction</li>
          <li>Desolventizing</li>
          <li>Oil and solvent separation</li>
          <li>Crude oil refining</li>
        </ol>

        <h2>Licenses Required</h2>
        <ul>
          <li>FSSAI License (Mandatory for edible oil)</li>
          <li>GST Registration</li>
          <li>Factory License</li>
          <li>MSME Registration</li>
          <li>Pollution Control Board Clearance</li>
          <li>BIS Certification (for packaged oil)</li>
          <li>AGMARK (optional but recommended)</li>
          <li>Trade License</li>
          <li>Explosives License (for solvent plants)</li>
        </ul>

        <h2>Location Requirements</h2>
        <ul>
          <li>Near oilseed-producing areas</li>
          <li>Good road/rail connectivity</li>
          <li>Industrial power connection (50-500 HP)</li>
          <li>Adequate water supply</li>
          <li>Area: 5000-50000 sq ft</li>
          <li>Distance from residential areas (pollution norms)</li>
          <li>Storage silos for seeds and oil</li>
        </ul>

        <h2>Investment Breakdown (Medium Scale - 20 TPD)</h2>
        <ul>
          <li>Land and Building: ₹60-80 lakhs</li>
          <li>Plant and Machinery: ₹80-90 lakhs</li>
          <li>Electrical Installation: ₹10-15 lakhs</li>
          <li>Raw Material Stock: ₹25-30 lakhs</li>
          <li>Working Capital: ₹20-25 lakhs</li>
          <li>Packaging Materials: ₹5-8 lakhs</li>
          <li>Licenses and Misc: ₹5-7 lakhs</li>
          <li><strong>Total Investment: ₹2-2.5 crore</strong></li>
        </ul>

        <h2>Profit Margins</h2>
        <ul>
          <li>Processing Margin: ₹5-10 per kg</li>
          <li>Gross Margin: 12-18%</li>
          <li>Net Margin: 6-10%</li>
          <li>ROI: 15-20% annually</li>
          <li>Payback Period: 4-6 years</li>
        </ul>

        <h2>By-Products Revenue</h2>
        <ul>
          <li><strong>Oil Cake/Meal:</strong> Sold to cattle feed industry</li>
          <li><strong>De-oiled Cake:</strong> Higher value for solvent plants</li>
          <li><strong>Hulls/Husks:</strong> Used as fuel or filler</li>
          <li><strong>Soap Stock:</strong> Sold to soap manufacturers</li>
          <li><strong>Wax:</strong> From rice bran oil processing</li>
        </ul>

        <h2>Quality Parameters</h2>
        <ul>
          <li>FFA (Free Fatty Acids): <0.5% for refined oil</li>
          <li>Moisture: <0.1%</li>
          <li>Peroxide Value: <10 meq/kg</li>
          <li>Color: As per standards (Lowibond scale)</li>
          <li>Sediment: None</li>
          <li>Flash Point: >250°C</li>
        </ul>

        <h2>Marketing Channels</h2>
        <ul>
          <li>Bulk supply to packers and refiners</li>
          <li>Own brand for retail</li>
          <li>Supply to hotels and restaurants</li>
          <li>Institutional sales (hostels, canteens)</li>
          <li>Export opportunities</li>
          <li>Online sales through e-commerce</li>
        </ul>

        <h2>Government Support</h2>
        <ul>
          <li>National Mission on Edible Oils (NMEO)</li>
          <li>PMFME Scheme for food processing</li>
          <li>State subsidies for agro-processing</li>
          <li>NABARD loans for oil mills</li>
          <li>Export incentives under MEIS</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The oil mill industry offers significant opportunities given India's huge import dependence. Success requires efficient operations, quality consistency, and managing price volatility. Consider starting with expeller-pressed "cold-pressed" oils for the premium health-conscious segment.</p>
      `,
      category: 'oil',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg',
      thumbnail: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg',
      author: 'Amit Shah',
      authorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100',
      authorRole: 'Oil Mill Consultant',
      date: '2024-03-13',
      readTime: '14 min read',
      views: 1345,
      likes: 92,
      comments: 24,
      tags: ['Oil Mill', 'Edible Oil', 'Food Processing']
    },
    {
      id: 11,
      title: 'Mustard Oil: Traditional Wisdom Meets Modern Processing',
      excerpt: 'Exploring the growing market for mustard oil, processing techniques, and quality standards.',
      category: 'oil',
      image: 'https://i.ytimg.com/vi/r62qJ-K5b2A/maxresdefault.jpg',
      thumbnail: 'https://i.ytimg.com/vi/r62qJ-K5b2A/maxresdefault.jpg',
      author: 'Rajesh Patel',
      date: '2024-03-07',
      readTime: '8 min read',
      views: 765,
      likes: 51,
      comments: 13,
      tags: ['Mustard Oil', 'Processing']
    },
    {
      id: 12,
      title: 'Rice Bran Oil: The Healthy Alternative',
      excerpt: 'Understanding the potential of rice bran oil, extraction challenges, and market opportunities.',
      category: 'oil',
      image: 'https://www.nandtengitech.com/images/sunflower/sunflower-production-img-4.png',
      thumbnail: 'https://www.nandtengitech.com/images/sunflower/sunflower-production-img-4.png',
      author: 'Priya Mehta',
      date: '2024-03-02',
      readTime: '7 min read',
      views: 543,
      likes: 36,
      comments: 9,
      tags: ['Rice Bran Oil', 'Health']
    }
  ];

  // About Us content for the blog
  const aboutCompany = {
    title: 'About Arman Engineering',
    description: 'With over 15 years of experience in the agro-processing industry, Arman Engineering has established itself as a trusted partner for entrepreneurs looking to start or expand their milling operations. Our team of experts brings practical, hands-on knowledge to every project.',
    mission: 'To empower entrepreneurs with the knowledge and technology needed to build successful food processing businesses.',
    expertise: [
      'Rice Mill Plants',
      'Flour Mill Plants',
      'Dal Mill Plants',
      'Oil Mill Plants',
      'Turnkey Project Solutions',
      'Consultancy Services'
    ],
    stats: {
      projects: '50+',
      clients: '100+',
      years: '15+',
      satisfaction: '98%'
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false;
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribeStatus('success');
    setEmail('');
    setTimeout(() => setSubscribeStatus(null), 3000);
  };

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleSave = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId));
    } else {
      setSavedPosts([...savedPosts, postId]);
    }
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <BookOpen size={14} />
                <span>Industry Insights</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Knowledge <span className="font-bold text-[#D4AF37]">Hub</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Expert guides, industry insights, and practical advice for the agro-processing industry
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Company Strip */}
        <section className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-light text-slate-900 mb-2">
                  <span className="font-bold text-[#D4AF37]">Arman Engineering</span> Blog
                </h2>
                <p className="text-sm text-slate-500 max-w-2xl">
                  {aboutCompany.description}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#D4AF37]">{aboutCompany.stats.projects}</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="text-center">
                  <div className="text-lg font-bold text-[#D4AF37]">{aboutCompany.stats.clients}</div>
                  <div className="text-xs text-slate-400">Clients</div>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="text-center">
                  <div className="text-lg font-bold text-[#D4AF37]">{aboutCompany.stats.years}</div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Search */}
                  <div className="bg-white rounded-xl border border-slate-100 p-4">
                    <h3 className="text-sm font-medium text-slate-900 mb-3">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white rounded-xl border border-slate-100 p-4">
                    <h3 className="text-sm font-medium text-slate-900 mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                              selectedCategory === cat.id
                                ? 'bg-[#D4AF37] text-white'
                                : 'hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            <span className="flex items-center gap-2 text-sm">
                              <Icon size={14} />
                              {cat.name}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                              selectedCategory === cat.id
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {cat.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-light mb-2">
                      Subscribe to our <span className="font-bold text-[#D4AF37]">Newsletter</span>
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Get the latest industry insights and guides directly in your inbox.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#D4AF37] outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#D4AF37] text-white py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                    {subscribeStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-green-400 mt-2 flex items-center gap-1"
                      >
                        <CheckCircle size={12} />
                        Thanks for subscribing!
                      </motion.p>
                    )}
                  </div>

                  {/* Featured Posts */}
                  <div className="bg-white rounded-xl border border-slate-100 p-4">
                    <h3 className="text-sm font-medium text-slate-900 mb-3">Popular Posts</h3>
                    <div className="space-y-3">
                      {blogPosts.slice(0, 3).map(post => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="w-full flex gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                        >
                          <img src={post.thumbnail} alt={post.title} className="w-12 h-12 rounded-lg object-cover" />
                          <div className="flex-1 text-left">
                            <h4 className="text-xs font-medium text-slate-900 line-clamp-2">{post.title}</h4>
                            <p className="text-[10px] text-slate-400 mt-1">{post.readTime}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                {/* View Toggle and Results */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm text-slate-500">
                    Showing <span className="font-medium text-slate-900">{filteredPosts.length}</span> articles
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' ? 'bg-[#D4AF37] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' ? 'bg-[#D4AF37] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>

                {/* Blog Posts Grid/List */}
                <div className={`grid ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 gap-6' 
                    : 'grid-cols-1 gap-4'
                }`}>
                  {filteredPosts.map((post, index) => {
                    const category = categories.find(c => c.id === post.category);
                    const isLiked = likedPosts.includes(post.id);
                    const isSaved = savedPosts.includes(post.id);

                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group bg-white rounded-xl border border-slate-100 hover:border-[#D4AF37] transition-all overflow-hidden ${
                          viewMode === 'list' ? 'flex' : ''
                        }`}
                      >
                        {/* Image */}
                        <div className={`relative overflow-hidden ${
                          viewMode === 'grid' ? 'h-48' : 'w-48 h-32'
                        }`}>
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1">
                              {category && <category.icon size={10} />}
                              {category?.name}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`p-5 flex-1`}>
                          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar size={10} />
                              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Author and Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img
                                src={post.authorImage}
                                alt={post.author}
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="text-xs font-medium text-slate-700">{post.author}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleLike(post.id)}
                                className={`p-1.5 rounded-full transition-colors ${
                                  isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'
                                }`}
                              >
                                <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} />
                              </button>
                              <button
                                onClick={() => handleSave(post.id)}
                                className={`p-1.5 rounded-full transition-colors ${
                                  isSaved ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-[#D4AF37]'
                                }`}
                              >
                                <Bookmark size={14} fill={isSaved ? 'currentColor' : 'none'} />
                              </button>
                              <button
                                onClick={() => handleShare(post)}
                                className="p-1.5 rounded-full text-slate-400 hover:text-[#D4AF37] transition-colors"
                              >
                                <Share2 size={14} />
                              </button>
                              <button
                                onClick={() => setSelectedPost(post)}
                                className="p-1.5 rounded-full text-slate-400 hover:text-[#D4AF37] transition-colors"
                              >
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="text-slate-400" size={24} />
                    </div>
                    <p className="text-slate-500 mb-2">No articles found</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="text-[#D4AF37] text-sm font-medium hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-light text-slate-900 mb-2">
                Essential <span className="font-bold text-[#D4AF37]">Startup Guides</span>
              </h2>
              <p className="text-sm text-slate-500">
                Complete guides to help you start your milling business
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {blogPosts.filter(p => p.id % 3 === 1).map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPost(guide)}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-20">
                    <img src={guide.thumbnail} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative p-6">
                    <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mb-3">
                      {guide.category === 'rice' && <Wheat className="w-5 h-5 text-[#D4AF37]" />}
                      {guide.category === 'flour' && <Droplets className="w-5 h-5 text-[#D4AF37]" />}
                      {guide.category === 'pulse' && <Leaf className="w-5 h-5 text-[#D4AF37]" />}
                      {guide.category === 'oil' && <Factory className="w-5 h-5 text-[#D4AF37]" />}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2 line-clamp-2">{guide.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">{guide.readTime}</p>
                    <span className="text-[#D4AF37] text-xs font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                      Read Guide
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedPost(null)} />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10"
              >
                {/* Header Image */}
                <div className="relative h-64">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === selectedPost.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title and Meta */}
                  <h1 className="text-3xl font-light text-slate-900 mb-4">
                    {selectedPost.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={selectedPost.authorImage}
                        alt={selectedPost.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{selectedPost.author}</p>
                        <p className="text-xs text-slate-400">{selectedPost.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(selectedPost.date).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {selectedPost.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {selectedPost.views} views
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share and Actions */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLike(selectedPost.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          likedPosts.includes(selectedPost.id)
                            ? 'bg-red-50 text-red-500'
                            : 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500'
                        }`}
                      >
                        <Heart size={16} fill={likedPosts.includes(selectedPost.id) ? 'currentColor' : 'none'} />
                        <span className="text-sm">{selectedPost.likes + (likedPosts.includes(selectedPost.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
                        <MessageCircle size={16} />
                        <span className="text-sm">{selectedPost.comments}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(selectedPost)}
                        className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                      <button className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
                        <Download size={16} />
                      </button>
                      <button className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
                        <Printer size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Related Posts */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-medium text-slate-900 mb-4">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {blogPosts
                        .filter(p => p.category === selectedPost.category && p.id !== selectedPost.id)
                        .slice(0, 2)
                        .map(post => (
                          <button
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="flex gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                          >
                            <img src={post.thumbnail} alt={post.title} className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex-1 text-left">
                              <h4 className="text-sm font-medium text-slate-900 line-clamp-2">{post.title}</h4>
                              <p className="text-xs text-slate-400 mt-1">{post.readTime}</p>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Ready to Start Your <span className="font-bold text-[#D4AF37]">Milling Business?</span>
                  </h3>
                  <p className="text-sm text-slate-400">
                    Get expert consultation on machinery, setup, and operations
                  </p>
                </div>
                <a
                  href="/contact"
                  className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-slate-900 transition-colors flex items-center gap-2"
                >
                  Talk to Our Experts
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;