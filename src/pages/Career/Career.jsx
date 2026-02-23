import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, DollarSign, 
  Send, X, CheckCircle, Award, Users,
  ChevronRight, Home, Sparkles, Heart,
  GraduationCap, Calendar, FileText,
  Download, Upload, BookOpen, Target,
  TrendingUp, Shield, Coffee, Globe,
  Mail, Phone, Linkedin, Twitter,
  ArrowRight, Building2, UserCheck,
  Filter, Search, Star, Bookmark
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    noticePeriod: '',
    expectedSalary: '',
    coverLetter: '',
    resume: null,
    linkedin: '',
    portfolio: ''
  });

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase, count: 8 },
    { id: 'engineering', name: 'Engineering', icon: Users, count: 3 },
    { id: 'sales', name: 'Sales & Marketing', icon: TrendingUp, count: 2 },
    { id: 'production', name: 'Production', icon: Target, count: 2 },
    { id: 'quality', name: 'Quality Control', icon: Shield, count: 1 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'sidhpur', name: 'Sidhpur' },
    { id: 'ahmedabad', name: 'Ahmedabad' },
    { id: 'remote', name: 'Remote' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Mechanical Engineer',
      department: 'engineering',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹8-12 LPA',
      posted: '2 days ago',
      applicants: 24,
      description: 'We are looking for an experienced Mechanical Engineer to lead our design and development team for industrial machinery projects.',
      responsibilities: [
        'Lead the design and development of new industrial machinery',
        'Review and optimize existing mechanical systems',
        'Coordinate with production team for manufacturing feasibility',
        'Prepare technical documentation and specifications',
        'Mentor junior engineers and conduct design reviews'
      ],
      requirements: [
        'B.E./B.Tech in Mechanical Engineering',
        '5-8 years of experience in industrial machinery design',
        'Proficiency in CAD software (SolidWorks, AutoCAD)',
        'Strong knowledge of manufacturing processes',
        'Experience with project management'
      ],
      benefits: [
        'Competitive salary with annual performance bonus',
        'Health insurance for self and family',
        'Professional development opportunities',
        'Flexible working hours',
        'Transportation allowance'
      ]
    },
    {
      id: 2,
      title: 'Production Supervisor',
      department: 'production',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹4-6 LPA',
      posted: '1 week ago',
      applicants: 18,
      description: 'Seeking a dedicated Production Supervisor to oversee our manufacturing operations and ensure quality standards.',
      responsibilities: [
        'Supervise daily production activities',
        'Ensure quality standards and safety protocols',
        'Manage production schedules and workforce',
        'Coordinate with maintenance team',
        'Prepare production reports'
      ],
      requirements: [
        'Diploma/Degree in Mechanical/Production Engineering',
        '3-5 years of experience in manufacturing',
        'Knowledge of lean manufacturing principles',
        'Strong leadership and communication skills',
        'Problem-solving abilities'
      ],
      benefits: [
        'Performance-based incentives',
        'Medical insurance coverage',
        'Provident fund benefits',
        'Annual bonus',
        'Training programs'
      ]
    },
    {
      id: 3,
      title: 'Quality Control Engineer',
      department: 'quality',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3.5-5 LPA',
      posted: '3 days ago',
      applicants: 12,
      description: 'Looking for a detail-oriented Quality Control Engineer to ensure our products meet the highest standards.',
      responsibilities: [
        'Conduct quality inspections at various stages',
        'Document and analyze quality metrics',
        'Implement quality improvement initiatives',
        'Coordinate with production team',
        'Handle customer complaints and feedback'
      ],
      requirements: [
        'B.E./B.Tech in Mechanical Engineering',
        '2-4 years of QC experience in manufacturing',
        'Knowledge of quality tools and techniques',
        'ISO standards familiarity',
        'Attention to detail'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance',
        'Performance bonus',
        'Professional certifications support',
        'Career growth opportunities'
      ]
    },
    {
      id: 4,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'Ahmedabad',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹4-7 LPA + Incentives',
      posted: '5 days ago',
      applicants: 31,
      description: 'Seeking a dynamic Sales Engineer to promote our industrial machinery and build client relationships.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Present technical proposals to clients',
        'Negotiate contracts and close deals',
        'Provide technical support to customers',
        'Maintain relationships with existing clients'
      ],
      requirements: [
        'B.E./B.Tech in Mechanical Engineering',
        '2-5 years of sales experience in industrial sector',
        'Strong communication and presentation skills',
        'Willingness to travel',
        'Technical aptitude'
      ],
      benefits: [
        'Attractive commission structure',
        'Company vehicle allowance',
        'Mobile and travel reimbursement',
        'Health insurance',
        'Incentive trips'
      ]
    },
    {
      id: 5,
      title: 'Junior Design Engineer',
      department: 'engineering',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹2.5-3.5 LPA',
      posted: '1 week ago',
      applicants: 45,
      description: 'Great opportunity for fresh graduates to start their career in industrial machinery design.',
      responsibilities: [
        'Assist in creating 3D models and drawings',
        'Modify existing designs as per requirements',
        'Prepare bill of materials',
        'Support senior engineers in projects',
        'Document design changes'
      ],
      requirements: [
        'B.E./B.Tech in Mechanical Engineering',
        'Knowledge of CAD software',
        'Basic understanding of manufacturing',
        'Eager to learn and grow',
        'Good academic record'
      ],
      benefits: [
        'Mentorship program',
        'Learning opportunities',
        'Performance-based growth',
        'Health insurance',
        'Friendly work environment'
      ]
    },
    {
      id: 6,
      title: 'Marketing Coordinator',
      department: 'sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3-4.5 LPA',
      posted: '2 weeks ago',
      applicants: 28,
      description: 'Looking for a creative Marketing Coordinator to handle digital presence and marketing campaigns.',
      responsibilities: [
        'Manage social media accounts',
        'Create marketing content',
        'Coordinate trade show participation',
        'Handle email marketing campaigns',
        'Track marketing analytics'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing/Communications',
        '1-3 years of marketing experience',
        'Content creation skills',
        'Social media expertise',
        'Basic design skills'
      ],
      benefits: [
        'Work from home option',
        'Flexible schedule',
        'Performance bonus',
        'Learning budget',
        'Health insurance'
      ]
    },
    {
      id: 7,
      title: 'CNC Programmer',
      department: 'production',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹3.5-5 LPA',
      posted: '4 days ago',
      applicants: 15,
      description: 'Seeking an experienced CNC Programmer to handle our advanced machining centers.',
      responsibilities: [
        'Create and optimize CNC programs',
        'Set up and operate CNC machines',
        'Troubleshoot programming issues',
        'Maintain tooling inventory',
        'Train operators on new programs'
      ],
      requirements: [
        'ITI/Diploma in Mechanical',
        '3-6 years of CNC programming experience',
        'Knowledge of G-code and CAM software',
        'Understanding of cutting tools',
        'Problem-solving skills'
      ],
      benefits: [
        'Overtime pay',
        'Shift allowance',
        'Medical benefits',
        'Skill development programs',
        'Annual bonus'
      ]
    },
    {
      id: 8,
      title: 'HR Executive',
      department: 'sales',
      location: 'Sidhpur',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-4.5 LPA',
      posted: '1 week ago',
      applicants: 22,
      description: 'Looking for an HR Executive to manage recruitment and employee engagement activities.',
      responsibilities: [
        'Handle recruitment and onboarding',
        'Manage employee records',
        'Coordinate training programs',
        'Handle employee queries',
        'Assist in policy implementation'
      ],
      requirements: [
        'MBA/PGDM in HR',
        '2-4 years of HR experience',
        'Good communication skills',
        'Knowledge of labor laws',
        'Proficient in MS Office'
      ],
      benefits: [
        'Professional development',
        'Health insurance',
        'Work-life balance',
        'Friendly culture',
        'Performance bonus'
      ]
    }
  ];

  // Filter jobs
  const filteredJobs = jobOpenings.filter(job => {
    if (selectedDepartment !== 'all' && job.department !== selectedDepartment) return false;
    if (selectedLocation !== 'all' && job.location.toLowerCase() !== selectedLocation) return false;
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload PDF or Word document only');
        return;
      }
      setFormData({ ...formData, resume: file });
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setApplicationStatus('success');
      setTimeout(() => {
        setIsApplyModalOpen(false);
        setApplicationStatus(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          currentCompany: '',
          noticePeriod: '',
          expectedSalary: '',
          coverLetter: '',
          resume: null,
          linkedin: '',
          portfolio: ''
        });
      }, 2000);
    } catch (error) {
      setApplicationStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const perks = [
    { icon: Heart, title: 'Health Insurance', description: 'Medical coverage for you and family' },
    { icon: GraduationCap, title: 'Learning & Development', description: 'Continuous learning opportunities' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Flexible working hours' },
    { icon: TrendingUp, title: 'Growth Opportunities', description: 'Clear career progression path' },
    { icon: Award, title: 'Performance Bonuses', description: 'Rewards for exceptional work' },
    { icon: Globe, title: 'Global Exposure', description: 'Work on international projects' }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Briefcase, value: '8', label: 'Open Positions' },
    { icon: Coffee, value: '95%', label: 'Employee Satisfaction' }
  ];

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
                <Sparkles size={14} />
                <span>Join Our Team</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                Build Your <span className="font-bold text-[#D4AF37]">Career</span> With Us
              </h1>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Join a team of innovative engineers and professionals shaping the future of industrial machinery
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-light text-slate-900 mb-3">
                Why <span className="font-bold text-[#D4AF37]">Join Us?</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We offer more than just a job - we offer a career with growth, learning, and great benefits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-slate-100 hover:border-[#D4AF37] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">{perk.title}</h3>
                    <p className="text-sm text-slate-500">{perk.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search jobs by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#D4AF37] outline-none transition-colors text-sm rounded-lg"
                  />
                </div>

                {/* Department Filter */}
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-[#D4AF37] outline-none"
                >
                  <option value="all">All Departments</option>
                  <option value="engineering">Engineering</option>
                  <option value="sales">Sales & Marketing</option>
                  <option value="production">Production</option>
                  <option value="quality">Quality Control</option>
                </select>

                {/* Location Filter */}
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-[#D4AF37] outline-none"
                >
                  <option value="all">All Locations</option>
                  <option value="sidhpur">Sidhpur</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
            </motion.div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-slate-500">
                Showing <span className="font-medium text-slate-900">{filteredJobs.length}</span> open positions
              </p>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredJobs.map((job, index) => {
                const isSaved = savedJobs.includes(job.id);
                const department = departments.find(d => d.id === job.department);
                
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-slate-100 hover:border-[#D4AF37] transition-all p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                              <span className="flex items-center gap-1">
                                <Building2 size={12} />
                                {department?.name}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <GraduationCap size={12} />
                                {job.experience}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign size={12} />
                                {job.salary}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSaveJob(job.id)}
                          className={`p-2 rounded-lg border transition-colors ${
                            isSaved 
                              ? 'bg-[#D4AF37] border-[#D4AF37] text-white' 
                              : 'border-slate-200 text-slate-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                          }`}
                        >
                          <Bookmark size={18} fill={isSaved ? 'white' : 'none'} />
                        </button>
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="px-4 py-2 border border-slate-200 text-slate-600 hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-lg text-sm font-medium transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleApplyClick(job)}
                          className="px-4 py-2 bg-[#D4AF37] text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                        Posted {job.posted}
                      </span>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">
                        {job.applicants} applicants
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-slate-400" size={24} />
                </div>
                <p className="text-slate-500 mb-2">No jobs found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="text-[#D4AF37] text-sm font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Job Details Modal */}
        <AnimatePresence>
          {selectedJob && !isApplyModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedJob(null)} />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-light text-slate-900">
                      {selectedJob.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} />
                        {departments.find(d => d.id === selectedJob.department)?.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {selectedJob.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Experience</p>
                      <p className="text-sm font-medium text-slate-900">{selectedJob.experience}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Salary</p>
                      <p className="text-sm font-medium text-slate-900">{selectedJob.salary}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Job Type</p>
                      <p className="text-sm font-medium text-slate-900">{selectedJob.type}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Posted</p>
                      <p className="text-sm font-medium text-slate-900">{selectedJob.posted}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Job Description</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{selectedJob.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedJob.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => {
                        handleApplyClick(selectedJob);
                        setSelectedJob(null);
                      }}
                      className="flex-1 bg-[#D4AF37] text-white py-3 rounded-xl font-medium hover:bg-slate-900 transition-colors"
                    >
                      Apply for this Position
                    </button>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-3 border border-slate-200 rounded-xl font-medium text-slate-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Application Form Modal */}
        <AnimatePresence>
          {isApplyModalOpen && selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setIsApplyModalOpen(false)} />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-100 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-light text-slate-900">
                        Apply for <span className="font-bold text-[#D4AF37]">{selectedJob.title}</span>
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Fill in your details below. Resume is optional.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsApplyModalOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmitApplication} className="p-6 space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Experience & Current Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Years of Experience *
                      </label>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                      >
                        <option value="">Select experience</option>
                        <option value="fresher">Fresher (0 years)</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Current Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.currentCompany}
                        onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="Current/Last company"
                      />
                    </div>
                  </div>

                  {/* Notice Period & Expected Salary */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Notice Period *
                      </label>
                      <select
                        required
                        value={formData.noticePeriod}
                        onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                      >
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediate</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                        <option value="45">45 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Expected Salary *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.expectedSalary}
                        onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="e.g., 5 LPA"
                      />
                    </div>
                  </div>

                  {/* Resume Upload - Optional */}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Resume (Optional - PDF or Word, max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center w-full p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-[#D4AF37] transition-colors cursor-pointer group"
                      >
                        <div className="text-center">
                          <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2 group-hover:text-[#D4AF37] transition-colors" />
                          <p className="text-sm text-slate-500">
                            {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Cover Letter / Why join us? (Optional)
                    </label>
                    <textarea
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Professional Links */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        LinkedIn Profile (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Portfolio/Website (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#D4AF37] outline-none transition-colors text-sm"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#D4AF37] text-white py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-slate-900'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Application
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {applicationStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 text-green-600 text-sm p-4 rounded-xl flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Application submitted successfully! We'll review and get back to you soon.
                    </motion.div>
                  )}

                  {applicationStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 text-red-500 text-sm p-4 rounded-xl flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      Failed to submit application. Please try again.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.a
          href="mailto:careers@armaneng.com"
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#D4AF37] rounded-full shadow-lg flex items-center justify-center text-white z-40 hover:bg-slate-900 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Mail size={24} />
        </motion.a>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;