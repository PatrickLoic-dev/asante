import Image from 'next/image';
import Link from 'next/link';
import { Building2, Home, Leaf, Users, Zap, Compass, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architectural Services | ASANTE ARTSY - Design, Planning & Construction',
  description: 'Comprehensive architectural services in Cameroon including design, interior architecture, sustainable solutions, project management, and feasibility studies. Expert architects delivering exceptional results.',
  keywords: [
    'architectural services Cameroon',
    'building design services',
    'interior architecture',
    'sustainable design',
    'project management',
    'construction administration',
    'master planning',
    'feasibility studies',
    'architectural consultancy',
    'LEED certification',
    'energy modeling',
    'architectural documentation',
    'design development',
    'construction planning'
  ],
  openGraph: {
    title: 'Architectural Services | ASANTE ARTSY - Complete Design Solutions',
    description: 'Comprehensive architectural services from concept to completion. Expert design, sustainable solutions, project management, and construction administration across Cameroon and Africa.',
    url: 'https://www.asanteartsy.com/services',
    siteName: 'ASANTE ARTSY',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'ASANTE ARTSY Architectural Services - Complete Design Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architectural Services | ASANTE ARTSY - Complete Design Solutions',
    description: 'Comprehensive architectural services from concept to completion. Expert design, sustainable solutions, and project management across Cameroon and Africa.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.asanteartsy.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Architectural Design",
      description: "Complete design services from initial concept through construction documentation, ensuring your vision is realized with precision and creativity.",
      features: [
        "Conceptual Design Development",
        "Schematic Design",
        "Design Development",
        "Construction Documentation",
        "3D Visualization & Rendering"
      ],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Interior Architecture",
      description: "Seamless integration of interior spaces with architectural vision, creating cohesive environments that enhance daily life and work experiences.",
      features: [
        "Space Planning & Layout",
        "Material & Finish Selection",
        "Custom Millwork Design",
        "Lighting Design Integration",
        "Furniture & Fixture Coordination"
      ],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Design",
      description: "Environmentally conscious solutions that minimize environmental impact while maximizing energy efficiency and occupant comfort.",
      features: [
        "LEED Certification Support",
        "Energy Modeling & Analysis",
        "Renewable Energy Integration",
        "Sustainable Material Selection",
        "Water Conservation Systems"
      ],
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project coordination and construction administration to ensure seamless execution from design through completion.",
      features: [
        "Construction Administration",
        "Contractor Coordination",
        "Quality Control & Inspection",
        "Budget & Schedule Management",
        "Client Communication & Updates"
      ],
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Master Planning",
      description: "Comprehensive planning services for large-scale developments, campus design, and urban planning initiatives.",
      features: [
        "Site Analysis & Programming",
        "Zoning & Regulatory Compliance",
        "Infrastructure Planning",
        "Phased Development Strategies",
        "Community Engagement"
      ],
      image: "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Feasibility Studies",
      description: "Comprehensive analysis to evaluate project viability, including site assessment, regulatory review, and financial modeling.",
      features: [
        "Site Assessment & Analysis",
        "Regulatory & Zoning Review",
        "Cost Estimation & Budgeting",
        "Timeline Development",
        "Risk Assessment & Mitigation"
      ],
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Programming",
      description: "We begin by understanding your needs, goals, and vision through comprehensive consultation and site analysis."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team develops initial design concepts that respond to your requirements while considering site constraints and opportunities."
    },
    {
      step: "03",
      title: "Design Development",
      description: "We refine the chosen concept, developing detailed drawings and specifications while maintaining close collaboration with you."
    },
    {
      step: "04",
      title: "Documentation",
      description: "Complete construction documents are prepared, ensuring all technical requirements are clearly communicated to contractors."
    },
    {
      step: "05",
      title: "Construction Administration",
      description: "We oversee the construction process, providing guidance and ensuring the project is built according to design intent."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-6">
              Our <span className="text-brown-600">Services</span>
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Comprehensive architectural services from concept to completion. We provide 
              end-to-end solutions tailored to your unique needs and vision, ensuring 
              exceptional results at every stage of your project.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-brown-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-brown-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-neutral-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brown-600 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className="btn-secondary inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Our Design Process
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              A collaborative approach that ensures your vision is realized through 
              careful planning, creative design, and meticulous execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-brown-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-4">{step.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Project Specializations
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              We bring expertise across diverse project types, from intimate residential 
              spaces to large-scale commercial and public developments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Residential</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Custom Homes</li>
                <li>• Multi-Family Housing</li>
                <li>• Renovations & Additions</li>
                <li>• Luxury Estates</li>
                <li>• Affordable Housing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Commercial</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Office Buildings</li>
                <li>• Retail Spaces</li>
                <li>• Mixed-Use Developments</li>
                <li>• Hospitality Projects</li>
                <li>• Industrial Facilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Public & Institutional</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Educational Facilities</li>
                <li>• Healthcare Buildings</li>
                <li>• Cultural Centers & Chiefdoms</li>
                <li>• Government Buildings</li>
                <li>• Community Centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-brown-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive architectural services can bring 
            your vision to life. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brown-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
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