import { useState, useEffect } from "react";
import { Filter, Grid, List, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import CategoryFilter from "@/components/CategoryFilter";
import LocationFilter from "@/components/LocationFilter";

const Browse = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");

  // Sample books data
  const allBooks = [
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
    },
    // Add more books for demo
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      condition: "Very Good",
      rentPrice: 7,
      buyPrice: 18,
      image: "/placeholder.svg",
      seller: {
        name: "Alex P.",
        rating: 4.9,
        distance: "1.2 km away"
      },
      category: "sci-fi",
      location: "university"
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      condition: "Good",
      rentPrice: 4,
      buyPrice: 14,
      image: "/placeholder.svg",
      seller: {
        name: "Lisa K.",
        rating: 4.7,
        distance: "2.8 km away"
      },
      category: "fiction",
      location: "suburbs"
    }
  ];

  const conditions = ["Excellent", "Very Good", "Good", "Fair"];

  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || book.location === selectedLocation;
    const matchesPrice = book.buyPrice >= priceRange[0] && book.buyPrice <= priceRange[1];
    const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(book.condition);
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice && matchesCondition;
  });

  const handleConditionChange = (condition, checked) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition]);
    } else {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Books
            </h1>
            <p className="text-gray-600 text-lg">
              Discover amazing books from your local community
            </p>
          </div>

          {/* Search and Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search books, authors, genres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <CategoryFilter 
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                />
                <LocationFilter
                  selected={selectedLocation}
                  onSelect={setSelectedLocation}
                />
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* View Mode and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <span className="text-gray-600 ml-4">
                  {filteredBooks.length} books found
                </span>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="relevant">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="distance">Nearest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-80 space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Filters</h3>
                  
                  {/* Price Range */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100}
                        step={1}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    {/* Condition */}
                    <div>
                      <h4 className="font-medium mb-3">Condition</h4>
                      <div className="space-y-2">
                        {conditions.map((condition) => (
                          <div key={condition} className="flex items-center space-x-2">
                            <Checkbox
                              id={condition}
                              checked={selectedConditions.includes(condition)}
                              onCheckedChange={(checked) => 
                                handleConditionChange(condition, checked)
                              }
                            />
                            <label htmlFor={condition} className="text-sm">
                              {condition}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Books Grid/List */}
            <div className="flex-1">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBooks.map((book) => (
                    <Card key={book.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex gap-6">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-24 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">{book.title}</h3>
                              <p className="text-gray-600">by {book.author}</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {book.condition}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {book.seller.name.charAt(0)}
                                </span>
                              </div>
                              <span className="text-sm text-gray-700">{book.seller.name}</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs text-gray-600 ml-1">{book.seller.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {book.seller.distance}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2">
                            <div className="flex space-x-4">
                              <div>
                                <span className="text-sm text-gray-500">Rent: </span>
                                <span className="font-bold text-amber-600">${book.rentPrice}/week</span>
                              </div>
                              <div>
                                <span className="text-sm text-gray-500">Buy: </span>
                                <span className="font-bold text-green-600">${book.buyPrice}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                                Rent
                              </Button>
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                Buy
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
              
              {filteredBooks.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Filter className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
