// lib/fleet-data.ts

export type FleetCategoryId =
  | "super-luxury"
  | "luxury"
  | "suv-muv"
  | "sedan"
  | "mini-vans"
  | "coaches";

export type FleetCategory = {
  id: FleetCategoryId;
  label: string;
  tagline: string;
};

export type FleetCar = {
  id: string;
  name: string;
  category: FleetCategoryId;
  seating: string;
  doors: string;
  luggage: string;
  image?: string;
};

export const CATEGORIES: FleetCategory[] = [
  {
    id: "super-luxury",
    label: "Super Luxury Cars",
    tagline: "Rolls Royce & Hummer for the most exclusive movements.",
  },
  {
    id: "luxury",
    label: "Luxury Cars",
    tagline: "Mercedes-Benz luxury range for business, events & more.",
  },
  {
    id: "suv-muv",
    label: "SUV / MUV",
    tagline: "Premium SUVs & MUVs for family, group & leisure travel.",
  },
  {
    id: "sedan",
    label: "Sedan",
    tagline: "Smart, efficient sedans for everyday corporate mobility.",
  },
  {
    id: "mini-vans",
    label: "Mini Vans",
    tagline: "High-comfort vans for crew, artists & intimate groups.",
  },
  {
    id: "coaches",
    label: "Coaches",
    tagline: "Mini & large coaches for conferences, weddings & tours.",
  },
];

export const FLEET_CARS: FleetCar[] = [
  // SUPER LUXURY (2)
  {
    id: "rolls-royce",
    name: "Rolls Royce",
    category: "super-luxury",
    seating: "3+1",
    doors: "4",
    luggage: "2",
    image: "/Super Luxury Cars-1.webp",
  },
  {
    id: "hummer",
    name: "Hummer",
    category: "super-luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/Super Luxury Cars-2.webp",
  },

  // LUXURY (6)
  {
    id: "mb-s-class",
    name: "Mercedes Benz S Class",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Luxury Cars-1.webp",
  },
  {
    id: "mb-gls",
    name: "Mercedes Benz GLS",
    category: "luxury",
    seating: "5+1",
    doors: "4",
    luggage: "2",
    image: "/Luxury Cars-2.webp",
  },
  {
    id: "mb-v-class",
    name: "Mercedes Benz V Class",
    category: "luxury",
    seating: "5+1",
    doors: "4",
    luggage: "4",
    image: "/Luxury Cars-3.webp",
  },
  {
    id: "mb-gle",
    name: "Mercedes Benz GLE",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/Luxury Cars-4.webp",
  },
  {
    id: "mb-e-class",
    name: "Mercedes Benz E Class",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Luxury Cars-5.webp",
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "luxury",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    image: "/Luxury Cars-6.webp",
  },

  // SUV / MUV (3)
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    category: "suv-muv",
    seating: "6+1",
    doors: "4",
    luggage: "2",
    image: "/SUV_MUV-1.webp",
  },
  {
    id: "hycross",
    name: "Toyota Hycross",
    category: "suv-muv",
    seating: "6+1",
    doors: "4",
    luggage: "2",
    image: "/SUV_MUV-2.webp",
  },
  {
    id: "innova-crysta",
    name: "Toyota Crysta",
    category: "suv-muv",
    seating: "6+1",
    doors: "4",
    luggage: "2",
    image: "/SUV_MUV-3.webp",
  },

  // SEDAN (3)
  {
    id: "ciaz",
    name: "Maruti Ciaz",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Sedan-1.webp",
  },
  {
    id: "honda-city",
    name: "Honda City",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Sedan-2.webp",
  },
  {
    id: "dzire",
    name: "Maruti Swift Dzire",
    category: "sedan",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    image: "/Sedan-3.jpg",
  },

  // MINI VANS (5)
  {
    id: "toyota-coaster",
    name: "Toyota Coaster",
    category: "mini-vans",
    seating: "13+1",
    doors: "1",
    luggage: "9",
    image: "/Mini Vans-1.webp",
  },
  {
    id: "toyota-commuter",
    name: "Toyota Commuter",
    category: "mini-vans",
    seating: "9+1",
    doors: "1",
    luggage: "4",
    image: "/Mini Vans-2.webp",
  },
  {
    id: "luxury-foton",
    name: "Luxury Foton",
    category: "mini-vans",
    seating: "7+1",
    doors: "1",
    luggage: "4",
    image: "/Mini Vans-3.webp",
  },
  {
    id: "standard-foton",
    name: "Standard Foton",
    category: "mini-vans",
    seating: "8+1",
    doors: "1",
    luggage: "4",
    image: "/Mini Vans-4.webp",
  },
  {
    id: "urbania",
    name: "Urbania",
    category: "mini-vans",
    seating: "15+1",
    doors: "1",
    luggage: "NA",
    image: "/Mini Vans-5.webp",
  },

  // COACHES (3)
  {
    id: "volvo-9600",
    name: "Volvo 9600",
    category: "coaches",
    seating: "42+1",
    doors: "1",
    luggage: "30",
    image: "/Coaches-1.webp",
  },
  {
    id: "43-seater",
    name: "43 Seater Bus",
    category: "coaches",
    seating: "42+1",
    doors: "1",
    luggage: "25",
    image: "/Coaches-2.webp",
  },
  {
    id: "27-seater",
    name: "27 Seater Bus",
    category: "coaches",
    seating: "26+1",
    doors: "1",
    luggage: "15",
    image: "/Coaches-3.webp",
  },
];

export function getCarById(id: string) {
  return FLEET_CARS.find((car) => car.id === id);
}
