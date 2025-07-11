
import { useState } from "react";
import { Search, MapPin, Users, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
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
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      condition: "Good",
      rentPrice: 5,
      buyPrice: 12,
      image: "/placeholder.svg",
      seller: {
        name: "Sarah M.",
        rating: 4.8,
        distance: "2.3 km away"
      },
      category: "fiction",
      location: "downtown"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      condition: "Excellent",
      rentPrice: 6,
      buyPrice: 15,
      image: "/placeholder.svg",
      seller: {
        name: "John D.",
        rating: 4.9,
        distance: "1.8 km away"
      },
      category: "fiction",
      location: "uptown"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      condition: "Very Good",
      rentPrice: 4,
      buyPrice: 10,
      image: "/placeholder.svg",
      seller: {
        name: "Emma K.",
        rating: 4.7,
        distance: "3.1 km away"
      },
      category: "fiction",
      location: "suburbs"
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      condition: "Good",
      rentPrice: 5,
      buyPrice: 13,
      image: "/placeholder.svg",
      seller: {
        name: "Mike R.",
        rating: 4.6,
        distance: "4.2 km away"
      },
      category: "fiction", 
      location: "downtown"
    }
  ];

  const filteredBooks = featuredBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || book.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Your Local Book Marketplace
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Buy, sell, and rent books from your local community. Connect with fellow book lovers and discover your next great read.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search for books, authors, or genres..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-0 bg-transparent text-lg placeholder:text-gray-500 focus:ring-0"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <CategoryFilter 
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                    className="min-w-[160px]"
                  />
                  <LocationFilter
                    selected={selectedLocation}
                    onSelect={setSelectedLocation}
                    className="min-w-[140px]"
                  />
                  <Button 
                    type="submit"
                    className="h-12 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover-scale"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600 font-medium">Active Book Lovers</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25,000+</h3>
              <p className="text-gray-600 font-medium">Books Available</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9</h3>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Books Near You
              </h2>
              <p className="text-gray-600 text-lg">
                Discover amazing books from your local community
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 sm:mt-0 border-2 border-amber-300 text-amber-700 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl hover-scale"
            >
              View All Books
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">No books found matching your criteria</p>
                <p className="text-gray-400 mt-2">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Book-Loving Community Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start buying, selling, and renting books with people in your neighborhood. 
            It's free, easy, and helps build a stronger reading community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover-scale"
            >
              Start Selling Books
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover-scale"
            >
              Browse Books
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
