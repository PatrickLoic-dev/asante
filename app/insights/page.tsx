'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  const featuredArticle = {
    id: 1,
    title: "The Future of Sustainable Architecture: Trends and Innovations",
    excerpt: "Exploring how emerging technologies and materials are reshaping the way we approach environmentally conscious design in modern architecture.",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Sustainability"
  };

  const articles = [
    {
      id: 2,
      title: "Biophilic Design: Bringing Nature into Modern Spaces",
      excerpt: "How incorporating natural elements into architectural design can improve well-being and create more harmonious living environments.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Design Trends"
    },
    {
      id: 3,
      title: "Smart Building Technologies: The Connected Future",
      excerpt: "Examining how IoT, AI, and automation are transforming building operations and enhancing user experiences in commercial spaces.",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 4,
      title: "Adaptive Reuse: Breathing New Life into Historic Buildings",
      excerpt: "Case studies and strategies for successfully transforming historic structures into modern, functional spaces while preserving their character.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Park",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Historic Preservation"
    },
    {
      id: 5,
      title: "The Psychology of Space: How Architecture Affects Behavior",
      excerpt: "Understanding the relationship between built environments and human psychology to create spaces that promote well-being and productivity.",
      image: "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Psychology"
    },
    {
      id: 6,
      title: "Modular Construction: Efficiency Meets Quality",
      excerpt: "Exploring the benefits and challenges of modular construction methods and their impact on project timelines and sustainability.",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Construction"
    },
    {
      id: 7,
      title: "Urban Planning for Climate Resilience",
      excerpt: "Strategies for designing cities and communities that can adapt to and mitigate the effects of climate change through thoughtful planning.",
      image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Rodriguez",
      date: "February 10, 2024",
      readTime: "8 min read",
      category: "Urban Planning"
    }
  ];

  const categories = [
    "All Articles",
    "Sustainability",
    "Design Trends",
    "Technology",
    "Historic Preservation",
    "Psychology",
    "Construction",
    "Urban Planning"
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-6">
              Design <span className="text-brown-600">Insights</span>
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Explore the latest trends, innovations, and thought leadership in architecture 
              and design. Our team shares insights on sustainable practices, emerging technologies, 
              and the future of built environments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="bg-brown-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-brown-200 text-brown-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-neutral-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Link href={`/insights/${featuredArticle.id}`} className="btn-primary inline-flex items-center w-fit">
                  Read Article
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-brown-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white text-brown-800 rounded-full font-semibold hover:bg-brown-800 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-neutral-700">
              Stay informed with our latest insights and industry perspectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{article.date}</span>
                    <Link 
                      href={`/insights/${article.id}`} 
                      className="text-brown-600 hover:text-brown-800 font-semibold inline-flex items-center transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-brown-900 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest articles, project updates, 
              and industry insights directly in your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-brown-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brown-300"
              />
              <button
                type="submit"
                className="bg-brown-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}