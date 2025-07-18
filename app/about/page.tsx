'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Calendar, Building, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '25+', label: 'Awards Won' },
    { number: '8', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' }
  ];

  const team = [
    {
      name: "Mandessi KWELLE",
      role: "Principal Architect & Co-Founder",
      image: "/Team/Mandessi Kwelle.jpg",
      bio: "With over 20 years of experience in sustainable architecture and urban planning, Sarah leads our design vision with a focus on environmental responsibility and community impact.",
      education: "M.Arch, Harvard Graduate School of Design",
      specialties: ["Sustainable Design", "Urban Planning", "Residential Architecture"]
    },
    {
      name: "Emmanuelle Karell KOUPELLE",
      role: "Principal Architect & Co-Founder",
      image: "/Team/Emmanuelle Koupelle.jpeg",
      bio: "Michael specializes in innovative residential and commercial design solutions, bringing a unique blend of technical expertise and creative vision to every project.",
      education: "M.Arch, MIT School of Architecture",
      specialties: ["Commercial Design", "Mixed-Use Development", "Adaptive Reuse"]
    },
    {
      name: "Cedric Arnaud KOUPELLE",
      role: "Associate Architect",
      image: "/Team/Cedric Koupelle.jpg",
      bio: "Emily ensures seamless project execution while creating beautiful interior spaces that complement our architectural designs. Her attention to detail is unmatched.",
      education: "B.Arch, UC Berkeley",
      specialties: ["Interior Architecture", "Project Management", "Client Relations"]
    },
    {
      name: "Kave-Ike NGODI PENDA",
      role: "Electrotechnical Engineer",
      image: "/Team/Ngodi Penda Kave-Ike.jpeg",
      bio: "David brings expertise in public architecture and institutional projects, with a passion for creating spaces that serve communities and enhance public life.",
      education: "M.Arch, Columbia GSAPP",
      specialties: ["Public Architecture", "Institutional Design", "Community Planning"]
    },
    {
      name: "Collins YTEMBE SIAKE",
      role: "Civil Engineer",
      image: "/Team/Siake Collins.jpeg",
      bio: "David brings expertise in public architecture and institutional projects, with a passion for creating spaces that serve communities and enhance public life.",
      education: "M.Arch, Columbia GSAPP",
      specialties: ["Public Architecture", "Institutional Design", "Community Planning"]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge design technologies and methodologies to create forward-thinking architectural solutions."
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility is at the core of every project, ensuring a positive impact on our planet's future."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with clients, communities, and consultants throughout the design process."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of design quality and professional service in every project we undertake."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-6">
                About <span className="text-brown-600">ASANTE</span>
              </h1>
              <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
                Founded in September 2012, ASANTE has established itself as a leading architectural firm 
                specializing in sustainable, innovative design solutions that enhance communities 
                and improve quality of life.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-brown-800 mb-2">{stat.number}</div>
                    <div className="text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ASANTE Studio"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="text-xl leading-relaxed mb-6">
                ASANTE was born from a vision to create architecture that not only serves its immediate 
                purpose but also contributes positively to the broader community and environment. Our founder, 
                Sarah Johnson, established the firm with the belief that great architecture should be accessible, 
                sustainable, and deeply connected to the people who inhabit it.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we have grown from a small studio to a multidisciplinary team of architects, 
                designers, and project managers, all united by a shared commitment to design excellence and 
                environmental stewardship. Our projects span residential, commercial, and public sectors, 
                each reflecting our core values of innovation, sustainability, and community engagement.
              </p>
              <p className="text-lg leading-relaxed">
                Today, ASANTE continues to push the boundaries of architectural design, integrating 
                cutting-edge technology with time-tested principles to create spaces that inspire, 
                function beautifully, and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-neutral-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brown-900 mb-4">{value.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together decades of experience 
              and a shared passion for exceptional design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brown-900 mb-2">{member.name}</h3>
                  <p className="text-brown-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-neutral-700 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-brown-900 mb-2">Education</h4>
                    <p className="text-neutral-600">{member.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">
                Our Design Philosophy
              </h2>
              <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
                We believe that great architecture emerges from the intersection of human needs, 
                environmental responsibility, and aesthetic excellence.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-2">Human-Centered Design</h4>
                    <p className="text-neutral-700">Every space we create is designed with the end user in mind, prioritizing comfort, functionality, and well-being.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-2">Contextual Integration</h4>
                    <p className="text-neutral-700">Our designs respond thoughtfully to their surroundings, enhancing rather than disrupting the existing environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brown-800 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-2">Timeless Quality</h4>
                    <p className="text-neutral-700">We create architecture that transcends trends, focusing on enduring beauty and lasting value.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Design Process"
                width={300}
                height={400}
                className="rounded-lg object-cover h-full"
              />
              <div className="space-y-4">
                <Image
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Architecture Detail"
                  width={300}
                  height={190}
                  className="rounded-lg object-cover w-full"
                />
                <Image
                  src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sustainable Design"
                  width={300}
                  height={190}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-brown-200 mb-8 max-w-3xl mx-auto">
            Ready to start your architectural journey? We'd love to hear about your project 
            and explore how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brown-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown-900 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}