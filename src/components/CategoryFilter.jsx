
import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoryFilter = ({ selected, onSelect, className }) => {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "mystery", label: "Mystery & Thriller" },
    { value: "romance", label: "Romance" },
    { value: "sci-fi", label: "Science Fiction" },
    { value: "biography", label: "Biography" },
    { value: "self-help", label: "Self-Help" },
    { value: "history", label: "History" },
    { value: "cooking", label: "Cooking" },
    { value: "children", label: "Children's Books" },
    { value: "academic", label: "Academic" },
  ];

  const selectedCategory = categories.find(cat => cat.value === selected);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`bg-white/20 border-white/30 text-white hover:bg-white/30 ${className}`}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          {selectedCategory?.label || "All Categories"}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white border-gray-200 shadow-lg">
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.value}
            onClick={() => onSelect(category.value)}
            className={`cursor-pointer hover:bg-amber-50 ${
              selected === category.value ? "bg-amber-100 text-amber-800 font-medium" : ""
            }`}
          >
            {category.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilter;
