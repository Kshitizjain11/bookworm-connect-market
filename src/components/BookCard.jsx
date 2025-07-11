
import { Heart, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BookCard = ({ book }) => {
  const getConditionColor = (condition) => {
    switch (condition) {
      case "Excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "Very Good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Good":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Fair":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/20 overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={3/4}>
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {/* Condition Badge */}
        <Badge
          className={`absolute top-2 left-2 ${getConditionColor(book.condition)} font-medium border`}
        >
          {book.condition}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-1">by {book.author}</p>
          </div>

          {/* Seller Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {book.seller.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{book.seller.name}</p>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">{book.seller.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">{book.seller.distance}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-3">
        {/* Pricing */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-3">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Rent/week</p>
              <p className="text-lg font-bold text-amber-600">${book.rentPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Buy</p>
              <p className="text-lg font-bold text-green-600">${book.buyPrice}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-2">
          <div className="flex space-x-2">
            <Button 
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-lg transition-all duration-200 hover-scale"
              size="sm"
            >
              Rent
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all duration-200 hover-scale"
              size="sm"
            >
              Buy
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-gray-200 hover:bg-gray-50 transition-all duration-200 hover-scale"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Chat
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-gray-200 hover:bg-gray-50 transition-all duration-200 hover-scale"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
