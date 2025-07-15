'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Lakeside Villa",
      category: "residential",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Lake Tahoe, CA",
      year: "2023",
      description: "A stunning lakeside retreat featuring sustainable materials and panoramic views of the surrounding landscape.",
      area: "4,500 sq ft",
      client: "Private Client",
      featured: true
    },
    {
      id: 2,
      title: "Urban Innovation Center",
      category: "commercial",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "San Francisco, CA",
      year: "2023",
      description: "A cutting-edge workspace designed to foster creativity and collaboration in the heart of the city.",
      area: "25,000 sq ft",
      client: "Tech Startup",
      featured: true
    },
    {
      id: 3,
      title: "Sustainable Community Hub",
      category: "public",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Portland, OR",
      year: "2022",
      description: "A community center built with renewable energy and sustainable materials, serving as a model for green architecture.",
      area: "12,000 sq ft",
      client: "City of Portland",
      featured: true
    },
    {
      id: 4,
      title: "Contemporary Townhouse",
      category: "residential",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Brooklyn, NY",
      year: "2023",
      description: "Modern urban living with emphasis on natural light and green spaces in a dense city environment.",
      area: "3,200 sq ft",
      client: "Young Family",
      featured: false
    },
    {
      id: 5,
      title: "Tech Campus Expansion",
      category: "commercial",
      image: "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Austin, TX",
      year: "2022",
      description: "Expansion of corporate headquarters with focus on employee wellness and collaborative workspaces.",
      area: "50,000 sq ft",
      client: "Fortune 500 Company",
      featured: false
    },
    {
      id: 6,
      title: "Cultural Arts Center",
      category: "public",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Denver, CO",
      year: "2023",
      description: "A vibrant cultural space celebrating local arts and community engagement through thoughtful design.",
      area: "18,000 sq ft",
      client: "Arts Foundation",
      featured: false
    },
    {
      id: 7,
      title: "Eco-Friendly Office Complex",
      category: "commercial",
      image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Seattle, WA",
      year: "2022",
      description: "LEED Platinum certified office building with innovative green technologies and biophilic design elements.",
      area: "35,000 sq ft",
      client: "Green Energy Corp",
      featured: false
    },
    {
      id: 8,
      title: "Luxury Mountain Retreat",
      category: "residential",
      image: "https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Aspen, CO",
      year: "2023",
      description: "Alpine retreat seamlessly integrated with the natural landscape, featuring local materials and stunning views.",
      area: "6,800 sq ft",
      client: "Private Client",
      featured: false
    },
    {
      id: 9,
      title: "Urban Mixed-Use Development",
      category: "commercial",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Chicago, IL",
      year: "2022",
      description: "Mixed-use development combining retail, office, and residential spaces in a vibrant urban setting.",
      area: "120,000 sq ft",
      client: "Real Estate Developer",
      featured: false
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-6">
              Our <span className="text-brown-600">Projects</span>
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Explore our comprehensive portfolio of architectural projects spanning residential, 
              commercial, and public spaces. Each project represents our commitment to innovative 
              design and sustainable construction.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-neutral-700">
              Highlighting our most impactful and innovative architectural solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brown-900 mb-2 group-hover:text-brown-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-3">{project.location} • {project.year}</p>
                <p className="text-neutral-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-brown-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4 md:mb-0">
              All Projects
            </h2>
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-brown-600" />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedFilter === 'all' 
                      ? 'bg-brown-800 text-white' 
                      : 'bg-white text-brown-800 hover:bg-brown-100'
                  }`}
                >
                  All ({projects.length})
                </button>
                <button
                  onClick={() => setSelectedFilter('residential')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedFilter === 'residential' 
                      ? 'bg-brown-800 text-white' 
                      : 'bg-white text-brown-800 hover:bg-brown-100'
                  }`}
                >
                  Residential ({projects.filter(p => p.category === 'residential').length})
                </button>
                <button
                  onClick={() => setSelectedFilter('commercial')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedFilter === 'commercial' 
                      ? 'bg-brown-800 text-white' 
                      : 'bg-white text-brown-800 hover:bg-brown-100'
                  }`}
                >
                  Commercial ({projects.filter(p => p.category === 'commercial').length})
                </button>
                <button
                  onClick={() => setSelectedFilter('public')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedFilter === 'public' 
                      ? 'bg-brown-800 text-white' 
                      : 'bg-white text-brown-800 hover:bg-brown-100'
                  }`}
                >
                  Public ({projects.filter(p => p.category === 'public').length})
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-brown-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-700 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-neutral-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                      <div>
                        <p className="text-xs text-neutral-500">Area</p>
                        <p className="text-sm font-semibold text-brown-900">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Client</p>
                        <p className="text-sm font-semibold text-brown-900">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brown-200 mb-8 max-w-3xl mx-auto">
            Let's work together to create something extraordinary. Our team is ready 
            to bring your architectural vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brown-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown-900 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}