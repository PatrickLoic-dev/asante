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
      title: "NFM Cabinet",
      category: "commercial",
      image: "/Projects/Commercial/Cabinet NFM - Douala.png",
      location: "Douala, Cameroon",
      year: "2025",
      description: "A modern office space designed for efficiency and professionalism.",
      area: "N/A",
      client: "Cabinet NFM",
      featured: true
    },
    {
      id: 2,
      title: "Ejara Office",
      category: "commercial",
      image: "/Projects/Commercial/Ejara Akwa.png",
      location: "Akwa, Douala, Cameroon",
      year: "2025",
      description: "A vibrant commercial building located in the heart of Akwa.",
      area: "250 m² / 160 m²",
      client: "Ejara",
      featured: false
    },
    {
      id: 3,
      title: "CPA Facade",
      category: "commercial",
      image: "/Projects/Commercial/Facade CPA - Douala.png",
      location: "Douala, Cameroon",
      year: "2025",
      description: "A sleek and modern facade renovation for CPA.",
      area: "123 m²",
      client: "CPA",
      featured: false
    },
    {
      id: 4,
      title: "Parking Building",
      category: "commercial",
      image: "/Projects/Commercial/Immeuble parking Bonanjo.png",
      location: "Bonanjo, Douala, Cameroon",
      year: "2025",
      description: "A multi-level parking structure in the business district of Bonanjo.",
      area: "900 m²",
      client: "City of Douala",
      featured: true
    },
    {
      id: 5,
      title: "Relooking and Rebranding - AFG",
      category: "commercial",
      image: "/Projects/Commercial/Relooking AFG.png",
      location: "Douala, Cameroon",
      year: "2025",
      description: "A complete makeover of the AFG building to enhance its aesthetic appeal.",
      area: "N/A",
      client: "AFG",
      featured: false
    },
    {
      id: 6,
      title: "XCAPE",
      category: "commercial",
      image: "/Projects/Commercial/XCAPE - Douala.png",
      location: "Douala, Cameroon",
      year: "2025",
      description: "A dynamic and innovative commercial space for XCAPE.",
      area: "N/A",
      client: "XCAPE",
      featured: false
    },
    {
      id: 7,
      title: "Bonambappe Chiefdom",
      category: "public",
      image: "/Projects/Public/Chefferie Bonambappe.png",
      location: "Bonambappe, Cameroon",
      year: "2025",
      description: "A cultural and administrative center for the Bonambappe community.",
      area: "1700 m²",
      client: "Bonambappe Community",
      featured: true
    },
    {
      id: 8,
      title: "Deido Chiefdom",
      category: "public",
      image: "/Projects/Public/Chefferie Deido.png",
      location: "Deido, Douala, Cameroon",
      year: "2025",
      description: "A traditional and modernized chefferie for the Deido community.",
      area: "N/A",
      client: "Deido Community",
      featured: false
    },
    {
      id: 9,
      title: "CPDM Party House",
      category: "public",
      image: "/Projects/Public/Maison RDPC Yabassi.png",
      location: "Yabassi, Cameroon",
      year: "2025",
      description: "A political and cultural hub for the RDPC in Yabassi.",
      area: "N/A",
      client: "RDPC",
      featured: false
    },
    {
      id: 10,
      title: "Residential complex",
      category: "residential",
      image: "/Projects/Residential/Complexe Bafoussam.png",
      location: "Bafoussam, Cameroon",
      year: "2025",
      description: "A modern residential complex in the heart of Bafoussam.",
      area: "10,000 m²",
      client: "Private Client",
      featured: true
    },
    {
      id: 11,
      title: "Complex story building project",
      category: "residential",
      image: "/Projects/Residential/Complexe Bonapriso.png",
      location: "Bonapriso, Douala, Cameroon",
      year: "2025",
      description: "A luxurious residential complex in Bonapriso.",
      area: "700 m²",
      client: "Private Client",
      featured: false
    },
    {
      id: 12,
      title: "R+3 Building",
      category: "residential",
      image: "/Projects/Residential/R+3 Yassa.png",
      location: "Yassa, Douala, Cameroon",
      year: "2025",
      description: "A multi-story residential building in Yassa.",
      area: "500 m²",
      client: "Private Client",
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