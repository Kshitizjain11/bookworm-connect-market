
import { useState } from "react";
import { Search, Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import BookCard from "@/components/BookCard";
import CategoryFilter from "@/components/CategoryFilter";
import LocationFilter from "@/components/LocationFilter";
import Navbar from "@/components/Navbar";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const books = [
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
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      price: 20,
      originalPrice: 30,
      condition: "Good",
      distance: "4.2 km",
      seller: "Alex K.",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      forRent: false,
      forSale: true,
      rentPrice: 0,
      tags: ["Science Fiction", "Adventure"]
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      price: 14,
      originalPrice: 22,
      condition: "Like New",
      distance: "1.5 km",
      seller: "Lisa R.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
      forRent: true,
      forSale: true,
      rentPrice: 5,
      tags: ["Biography", "Education"]
    },
    {
      id: 6,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 13,
      originalPrice: 18,
      condition: "Very Good",
      distance: "2.8 km",
      seller: "John P.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      forRent: true,
      forSale: true,
      rentPrice: 4,
      tags: ["Mystery", "Thriller"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search books, authors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white border-gray-300 text-gray-800"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <CategoryFilter 
                selected={selectedCategory} 
                onSelect={setSelectedCategory}
                className="h-12 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              />
              <LocationFilter 
                selected={selectedLocation} 
                onSelect={setSelectedLocation}
                className="h-12 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              />
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 border-gray-300"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="mt-4 animate-fade-in">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="flex gap-2">
                      <Input placeholder="Min" className="h-10" />
                      <Input placeholder="Max" className="h-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
                      <option>Any Condition</option>
                      <option>Like New</option>
                      <option>Very Good</option>
                      <option>Good</option>
                      <option>Fair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                    <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
                      <option>All Books</option>
                      <option>For Sale Only</option>
                      <option>For Rent Only</option>
                      <option>Both Sale & Rent</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full h-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {books.length} Books Available
          </h1>
          <div className="text-sm text-gray-600">
            Sorted by: Relevance
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {books.map((book, index) => (
              <Card key={book.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-2">by {book.author}</p>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-green-600">${book.price}</span>
                        {book.forRent && (
                          <span className="text-lg font-semibold text-blue-600">${book.rentPrice}/week</span>
                        )}
                        <span className="text-sm text-gray-500">{book.condition}</span>
                        <span className="text-sm text-gray-500">{book.distance} away</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                            Contact Seller
                          </Button>
                          <Button variant="outline" size="sm">
                            Add to Wishlist
                          </Button>
                        </div>
                        <div className="text-sm text-gray-600">
                          Seller: {book.seller} ⭐ {book.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
