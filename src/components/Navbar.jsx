
import { useState } from "react";
import { Menu, X, BookOpen, Search, Bell, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              BookConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Home
            </a>
            <a href="/browse" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Browse Books
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Sell Books
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              My Rentals
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Community
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-amber-600 hover:bg-amber-50"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-amber-600 hover:bg-amber-50"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-amber-600 hover:bg-amber-50"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover-scale">
              <Plus className="h-4 w-4 mr-2" />
              List Book
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Home
              </a>
              <a href="/browse" className="text-gray-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Browse Books
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Sell Books
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                My Rentals
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Community
              </a>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Search className="h-5 w-5" />
                  </Button>
                  <div className="relative">
                    <Button variant="ghost" size="icon" className="text-gray-600">
                      <Bell className="h-5 w-5" />
                    </Button>
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                      3
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <User className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  List Book
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
