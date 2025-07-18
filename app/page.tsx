'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Lightbulb, Leaf, Building2, Home, Zap, ChevronRight, Handshake } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Crafting Modern Architecture",
      subtitle: "For A Better Future",
      description: "Professional solutions for innovative and sustainable design, ensuring your vision comes to life with precision and excellence."
    },
    {
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Innovative Design Solutions",
      subtitle: "That Inspire",
      description: "Creating spaces that blend functionality with aesthetic excellence, transforming how people live and work."
    },
    {
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Sustainable Architecture",
      subtitle: "For Tomorrow",
      description: "Building environmentally conscious structures that contribute to a sustainable future while maintaining design excellence."
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "NFM Cabinet",
      category: "commercial",
      image: "/Projects/Commercial/Cabinet NFM - Douala.png",
      location: "Douala, Cameroon",
      year: "2025",
    },
    {
      id: 2,
      title: "Bonambappe Chiefdom",
      category: "public",
      image: "/Projects/Public/Chefferie Bonambappe.png",
      location: "Bonambappe, Cameroon",
      year: "2025",
    },
    {
      id: 3,
      title: "Residential complex",
      category: "residential",
      image: "/Projects/Residential/Complexe Bafoussam.png",
      location: "Bafoussam, Cameroon",
      year: "2025"
    }
  ];

  const keyDifferentiators = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Anthropo-Centric",
      description: "Designing spaces that prioritize human experience and well-being"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable",
      description: "Environmentally conscious design solutions for a better tomorrow"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaborative",
      description: "Partnership approach with every client throughout the entire process"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative",
      description: "Cutting-edge design and technology integration in every project"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
                <br />
                <span className="text-brown-300">{heroSlides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-neutral-200 leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/projects" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-brown-900 inline-flex items-center">
                  View Our Work
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Welcome to ASANTE
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              We are a forward-thinking architectural firm dedicated to creating innovative, 
              sustainable, and functional spaces that enhance communities and improve quality of life. 
              Our multidisciplinary approach combines architectural expertise with cutting-edge technology 
              to deliver projects that are not only visually stunning but also environmentally responsible.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Why Choose ASANTE
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and sustainability sets us apart 
              in the architectural industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-brown-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brown-700 transition-colors">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brown-900 mb-4">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Explore our portfolio of innovative architectural solutions that blend 
              form, function, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-brown-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brown-900 mb-2 group-hover:text-brown-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600">{project.location} • {project.year}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
                Comprehensive Architectural Services
              </h2>
              <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
                From initial concept to final construction, we provide end-to-end 
                architectural services tailored to your unique needs and vision.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900">Architectural Design</h4>
                    <p className="text-neutral-600">Complete design services from concept to construction</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900">Interior Architecture</h4>
                    <p className="text-neutral-600">Seamless integration of interior and exterior spaces</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900">Sustainable Design</h4>
                    <p className="text-neutral-600">Environmentally conscious solutions for modern living</p>
                  </div>
                </div>
              </div>
              
              <Link href="/services" className="btn-primary">
                Explore All Services
              </Link>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Architectural Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
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
            <Link href="/contact" className="bg-white text-brown-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown-900 transition-colors">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}