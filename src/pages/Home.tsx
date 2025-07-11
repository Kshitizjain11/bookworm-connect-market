
import { useState } from "react";
import { Search, MapPin, Heart, MessageCircle, Phone, Star, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import BookCard from "@/components/BookCard";
import CategoryFilter from "@/components/CategoryFilter";
import LocationFilter from "@/components/LocationFilter";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 15,
      originalPrice: 25,
      condition: "Like New",
      distance: "2.3 km",
      seller: "Sarah M.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      forRent: true,
      forSale: true,
      rentPrice: 5,
      tags: ["Fiction", "Philosophy"]
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 18,
      originalPrice: 28,
      condition: "Good",
      distance: "1.8 km",
      seller: "Mike D.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
      forRent: true,
      forSale: true,
      rentPrice: 6,
      tags: ["Self-Help", "Psychology"]
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      price: 12,
      originalPrice: 20,
      condition: "Very Good",
      distance: "3.1 km",
      seller: "Emma L.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      forRent: true,
      forSale: false,
      rentPrice: 4,
      tags: ["Romance", "Historical Fiction"]
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Books Available", value: "25,000+" },
    { icon: Users, label: "Active Users", value: "12,000+" },
    { icon: TrendingUp, label: "Books Rented", value: "8,500+" },
    { icon: Star, label: "Average Rating", value: "4.8" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Your Next
              <span className="block text-yellow-300">Great Read</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Buy, sell, and rent books from your neighbors. Connect with fellow book lovers and build your personal library affordably.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    placeholder="Search books, authors, or genres..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 bg-white/20 border-white/30 text-white placeholder-white/70 text-lg"
                  />
                </div>
                <div className="flex gap-2">
                  <CategoryFilter 
                    selected={selectedCategory} 
                    onSelect={setSelectedCategory}
                    className="h-14"
                  />
                  <LocationFilter 
                    selected={selectedLocation} 
                    onSelect={setSelectedLocation}
                    className="h-14"
                  />
                  <Button size="lg" className="h-14 px-8 bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-semibold">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/browse">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Books
                </Button>
              </Link>
              <Link to="/sell">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  List Your Books
                </Button>
              </Link>
              <Link to="/clubs">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  <Users className="mr-2 h-5 w-5" />
                  Join Book Clubs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Books Near You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing books from your local community. All verified sellers with ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BookCard book={book} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/browse">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8">
                View All Books
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose BookConnect?</h2>
            <p className="text-xl text-gray-600">Your local book community marketplace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Direct Chat & Calls</h3>
                <p className="text-gray-600 mb-6">Connect directly with sellers and buyers through our integrated chat and calling system. Arrange meetups safely.</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">In-App Communication</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Local Discovery</h3>
                <p className="text-gray-600 mb-6">Find books near you with our smart location-based search. Save on shipping and support your local community.</p>
                <Badge variant="secondary" className="bg-green-100 text-green-700">Nearby Books</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reading Communities</h3>
                <p className="text-gray-600 mb-6">Join book clubs, share reviews, and discover your next favorite read through our community features.</p>
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">Book Clubs</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Book Journey?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of book lovers who are buying, selling, and sharing their favorite reads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8">
                Get Started Free
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-700 px-8">
                Explore Books
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
