
import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LocationFilter = ({ selected, onSelect, className }) => {
  const locations = [
    { value: "all", label: "All Areas" },
    { value: "downtown", label: "Downtown" },
    { value: "uptown", label: "Uptown" },
    { value: "suburbs", label: "Suburbs" },
    { value: "university", label: "University Area" },
    { value: "business", label: "Business District" },
    { value: "residential", label: "Residential" },
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
          {selectedLocation?.label || "All Areas"}
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
