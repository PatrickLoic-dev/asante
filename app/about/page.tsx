import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Calendar, Building, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ASANTE ARTSY - Our Story & Team | Architecture Firm Cameroon',
  description: 'Learn about ASANTE ARTSY, a leading architectural firm in Cameroon founded in 2012. Meet our expert team of architects and engineers delivering innovative, sustainable design solutions across Africa.',
  keywords: [
    'about ASANTE ARTSY',
    'architectural firm history',
    'Cameroon architects',
    'architectural team',
    'Mandessi Kwelle architect',
    'Emmanuelle Koupelle architect',
    'architectural expertise',
    'sustainable design team',
    'ONAC architects Cameroon',
    'architectural consultancy',
    'building design experts',
    'construction professionals'
  ],
  openGraph: {
    title: 'About ASANTE ARTSY - Our Story & Expert Team',
    description: 'Founded in 2012, ASANTE ARTSY is a leading architectural firm in Cameroon. Meet our expert team of ONAC-certified architects and engineers delivering innovative, sustainable design solutions.',
    url: 'https://www.asanteartsy.com/about',
    siteName: 'ASANTE ARTSY',
    images: [
      {
        url: '/Team/Mandessi Kwelle.jpg',
        width: 1200,
        height: 630,
        alt: 'ASANTE ARTSY Team - Expert Architects in Cameroon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ASANTE ARTSY - Our Story & Expert Team',
    description: 'Founded in 2012, meet our expert team of ONAC-certified architects delivering innovative, sustainable design solutions across Cameroon and Africa.',
    images: ['/Team/Mandessi Kwelle.jpg'],
  },
  alternates: {
    canonical: 'https://www.asanteartsy.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3', label: 'Years Experience' },
    { number: '10+', label: 'Happy Clients' }
  ];

  const team = [
    {
      name: "Mandessi Kwelle",
      role: "Principal Architect & Co-Founder",
      image: "/Team/Mandessi Kwelle.jpg",
      bio: "With strong experience in sustainable architecture and urban planning, Mandessi leads our design vision with a focus on environmental responsibility and community impact.",
      education: "Architecte (Cameroun) ONAC 494",
    },
    {
      name: "Emmanuelle Karell Koupelle",
      role: "Principal Architect & Co-Founder",
      image: "/Team/Emmanuelle Koupelle.jpeg",
      bio: "Emmanuelle specializes in innovative residential and commercial design solutions, bringing a unique blend of technical expertise and creative vision to every project.",
      education: "Architecte (Cameroun) ONAC 395",
    },
    {
      name: "Cedric Arnaud Koupelle",
      role: "Associate Architect",
      image: "/Team/Cedric Koupelle.jpg",
      bio: "Cedric ensures seamless project execution while creating beautiful interior spaces that complement our architectural designs. His attention to detail is unmatched.",
      education: "Architecte (Cameroun) ONAC 397",
    },
    {
      name: "Kave-Ike Ngodi Penda",
      role: "Electrotechnical Engineer",
      image: "/Team/Ngodi Penda Kave-Ike.jpeg",
      bio: "Kave-Ike brings expertise in electrotechnical engineering, ensuring our projects integrate cutting-edge technology and sustainable energy solutions.",
      education: "Expert Junior KNX (Cameroun)",
    },
    {
      name: "Collins Ytembe Siake",
      role: "Civil Engineer",
      image: "/Team/Siake Collins.jpeg",
      bio: "Collins contributes his expertise in structural engineering, ensuring the durability and safety of our architectural projects.",
      education: "ONIGC 2774",
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
                About <span className="text-brown-600">ASANTE ARTSY</span>
              </h1>
              <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
                Founded in September 2012, ASANTE ARTSY has established itself as a leading architectural firm
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
                alt="ASANTE ARTSY Studio"
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
                ASANTE ARTSY ARTSY was born from a vision to create architecture that not only serves its immediate
                purpose but also contributes positively to the broader community and environment. Co-led by
                Mandessi Kwelle, and Karell Koupele, a visionary in innovative design, the firm embodies a commitment
                to accessible, sustainable, and community-focused architecture.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Since its inception, ASANTE ARTSY has grown from a small studio into a multidisciplinary team of
                architects, engineers, and designers who share a passion for creating spaces that inspire and
                endure. Our projects span across residential, commercial, and public sectors, each reflecting
                our dedication to innovation, sustainability, and excellence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At ASANTE ARTSY, we believe that architecture is more than just buildings—it’s about creating
                environments that enhance lives, foster connections, and stand as a testament to thoughtful
                design. Our team works closely with clients to understand their unique needs and aspirations,
                ensuring that every project is a true reflection of their vision.
              </p>
              <p className="text-lg leading-relaxed">
                Today, ASANTE ARTSY continues to push the boundaries of architectural design, integrating
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
                    <h4 className="font-semibold text-brown-900 mb-2">Accreditations</h4>
                    <p className="text-neutral-600">{member.education}</p>
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