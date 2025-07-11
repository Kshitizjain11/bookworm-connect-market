
import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LocationFilterProps {
  selected: string;
  onSelect: (location: string) => void;
  className?: string;
}

const LocationFilter = ({ selected, onSelect, className }: LocationFilterProps) => {
  const locations = [
    { value: "all", label: "All Locations" },
    { value: "1km", label: "Within 1 km" },
    { value: "5km", label: "Within 5 km" },
    { value: "10km", label: "Within 10 km" },
    { value: "25km", label: "Within 25 km" },
    { value: "50km", label: "Within 50 km" },
  ];

  const selectedLocation = locations.find(loc => loc.value === selected);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`bg-white/20 border-white/30 text-white hover:bg-white/30 ${className}`}
        >
          <MapPin className="h-4 w-4 mr-2" />
          {selectedLocation?.label || "All Locations"}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-white border-gray-200 shadow-lg">
        {locations.map((location) => (
          <DropdownMenuItem
            key={location.value}
            onClick={() => onSelect(location.value)}
            className={`cursor-pointer hover:bg-amber-50 ${
              selected === location.value ? "bg-amber-100 text-amber-800 font-medium" : ""
            }`}
          >
            {location.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationFilter;
