
import { useState } from "react";
import { Heart, MessageCircle, Phone, MapPin, Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  condition: string;
  distance: string;
  seller: string;
  rating: number;
  image: string;
  forRent: boolean;
  forSale: boolean;
  rentPrice?: number;
  tags: string[];
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const savings = book.originalPrice ? book.originalPrice - book.price : 0;
  const savingsPercentage = book.originalPrice ? Math.round((savings / book.originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden hover-scale">
      <div className="relative">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {book.forRent && (
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
              <Clock className="w-3 h-3 mr-1" />
              Rent ${book.rentPrice}
            </Badge>
          )}
          {book.forSale && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              <DollarSign className="w-3 h-3 mr-1" />
              Buy ${book.price}
            </Badge>
          )}
        </div>

        {/* Condition badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-700">
            {book.condition}
          </Badge>
        </div>

        {/* Like button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>

        {/* Savings badge */}
        {savingsPercentage > 0 && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-red-500 text-white">
              Save {savingsPercentage}%
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 line-clamp-1 group-hover:text-amber-600 transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {book.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-amber-200 text-amber-700">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            {book.forSale && (
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-green-600">${book.price}</span>
                {book.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${book.originalPrice}</span>
                )}
              </div>
            )}
            {book.forRent && book.forSale && <span className="text-gray-400">•</span>}
            {book.forRent && (
              <span className="text-lg font-semibold text-blue-600">${book.rentPrice}/week</span>
            )}
          </div>
        </div>

        {/* Seller info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs">
                {book.seller.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm text-gray-800">{book.seller}</p>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">{book.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {book.distance}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
            <MessageCircle className="h-4 w-4 mr-1" />
            Chat
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
