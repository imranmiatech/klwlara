// export type Item = {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   price: number;
// };

// export const data: Item[] = [
//   {
//     id: 1,
//     image: "https://picsum.photos/200/200?random=1",
//     title: "Modern Wooden Chair",
//     description: "Comfortable wooden chair with ergonomic design.",
//     price: 49.99,
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/200/200?random=2",
//     title: "Elegant Sofa Set",
//     description: "Luxury 3-seater sofa with plush cushions.",
//     price: 299.99,
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/200/200?random=3",
//     title: "Glass Coffee Table",
//     description: "Modern coffee table with tempered glass top.",
//     price: 89.99,
//   },
//   // … add all 50 items here
// ];
// export const data: Item[] = [
//   {
//     id: 1,
//     image: "https://picsum.photos/200/200?random=1",
//     title: "Modern Wooden Chair",
//     description: "Comfortable wooden chair with ergonomic design.",
//     price: 49.99,
//     category: "New Furnishings",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/200/200?random=2",
//     title: "Elegant Sofa Set",
//     description: "Luxury 3-seater sofa with plush cushions.",
//     price: 299.99,
//     category: "New Furnishings",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/200/200?random=3",
//     title: "Glass Coffee Table",
//     description: "Modern coffee table with tempered glass top.",
//     price: 89.99,
//     category: "New Decor",
//   },
//   {
//     id: 4,
//     image: "https://picsum.photos/200/200?random=4",
//     title: "Vintage Armchair",
//     description: "Classic armchair with vintage style.",
//     price: 159.99,
//     category: "Vintage & Sourced",
//   },
//   {
//     id: 5,
//     image: "https://picsum.photos/200/200?random=5",
//     title: "Wall Art Set",
//     description: "Set of 3 decorative wall art prints.",
//     price: 79.99,
//     category: "New Decor",
//   },
//   // … continue adding all 50 items with appropriate categories
// ];
// export type Item = {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
// };

// export const data: Item[] = [
//   { id: 1, image: "https://picsum.photos/200/200?random=1", title: "Modern Wooden Chair", description: "Comfortable wooden chair with ergonomic design.", price: 49.99, category: "New Furnishings" },
//   { id: 2, image: "https://picsum.photos/200/200?random=2", title: "Elegant Sofa Set", description: "Luxury 3-seater sofa with plush cushions.", price: 299.99, category: "New Furnishings" },
//   { id: 3, image: "https://picsum.photos/200/200?random=3", title: "Glass Coffee Table", description: "Modern coffee table with tempered glass top.", price: 89.99, category: "New Decor" },
//   { id: 4, image: "https://picsum.photos/200/200?random=4", title: "Vintage Armchair", description: "Classic armchair with vintage style.", price: 159.99, category: "Vintage & Sourced" },
//   { id: 5, image: "https://picsum.photos/200/200?random=5", title: "Wall Art Set", description: "Set of 3 decorative wall art prints.", price: 79.99, category: "New Decor" },
//   { id: 6, image: "https://picsum.photos/200/200?random=6", title: "Leather Armchair", description: "Premium leather armchair for living room.", price: 199.99, category: "New Furnishings" },
//   { id: 7, image: "https://picsum.photos/200/200?random=7", title: "Bookshelf Organizer", description: "Wooden bookshelf with 5 shelves for storage.", price: 79.99, category: "New Furnishings" },
//   { id: 8, image: "https://picsum.photos/200/200?random=8", title: "Floor Lamp", description: "Tall LED floor lamp for ambient lighting.", price: 59.99, category: "New Decor" },
//   { id: 9, image: "https://picsum.photos/200/200?random=9", title: "Office Desk", description: "Modern desk with metal frame and wooden top.", price: 129.99, category: "New Furnishings" },
//   { id: 10, image: "https://picsum.photos/200/200?random=10", title: "Ergonomic Desk Chair", description: "Comfortable chair with lumbar support.", price: 89.99, category: "New Furnishings" },
//   { id: 11, image: "https://picsum.photos/200/200?random=11", title: "Round Wooden Stool", description: "Small stool perfect for kitchen or bar.", price: 29.99, category: "New Furnishings" },
//   { id: 12, image: "https://picsum.photos/200/200?random=12", title: "Outdoor Patio Chair", description: "Weather-resistant chair for outdoor seating.", price: 59.99, category: "New Furnishings" },
//   { id: 13, image: "https://picsum.photos/200/200?random=13", title: "Corner Sofa", description: "Space-saving L-shaped corner sofa.", price: 349.99, category: "New Furnishings" },
//   { id: 14, image: "https://picsum.photos/200/200?random=14", title: "Storage Ottoman", description: "Multifunctional ottoman with hidden storage.", price: 69.99, category: "New Furnishings" },
//   { id: 15, image: "https://picsum.photos/200/200?random=15", title: "Modern TV Stand", description: "TV stand with shelves for media devices.", price: 119.99, category: "New Furnishings" },
//   { id: 16, image: "https://picsum.photos/200/200?random=16", title: "Wall-mounted Shelf", description: "Minimalist shelf for decorative items.", price: 39.99, category: "New Decor" },
//   { id: 17, image: "https://picsum.photos/200/200?random=17", title: "Recliner Chair", description: "Comfortable recliner for relaxing at home.", price: 199.99, category: "New Furnishings" },
//   { id: 18, image: "https://picsum.photos/200/200?random=18", title: "Bedside Table", description: "Small table for bedroom essentials.", price: 49.99, category: "New Furnishings" },
//   { id: 19, image: "https://picsum.photos/200/200?random=19", title: "Bookshelf Ladder", description: "Decorative ladder shelf for books or plants.", price: 59.99, category: "New Decor" },
//   { id: 20, image: "https://picsum.photos/200/200?random=20", title: "Coffee Table Set", description: "Two-piece nesting tables for living room.", price: 99.99, category: "New Decor" },
//   { id: 21, image: "https://picsum.photos/200/200?random=21", title: "Modern Rug", description: "Soft and stylish rug for any room.", price: 79.99, category: "New Decor" },
//   { id: 22, image: "https://picsum.photos/200/200?random=22", title: "Accent Chair", description: "Stylish chair to enhance room decor.", price: 129.99, category: "New Furnishings" },
//   { id: 23, image: "https://picsum.photos/200/200?random=23", title: "Pendant Light", description: "Modern ceiling pendant light fixture.", price: 59.99, category: "New Decor" },
//   { id: 24, image: "https://picsum.photos/200/200?random=24", title: "Bar Stool", description: "High stool for kitchen or bar counter.", price: 49.99, category: "New Furnishings" },
//   { id: 25, image: "https://picsum.photos/200/200?random=25", title: "Fabric Sofa", description: "Comfortable fabric sofa with cushions.", price: 249.99, category: "New Furnishings" },
//   { id: 26, image: "https://picsum.photos/200/200?random=26", title: "TV Wall Mount", description: "Adjustable mount for flat-screen TVs.", price: 39.99, category: "New Decor" },
//   { id: 27, image: "https://picsum.photos/200/200?random=27", title: "Wooden Side Table", description: "Compact side table for living room.", price: 44.99, category: "New Furnishings" },
//   { id: 28, image: "https://picsum.photos/200/200?random=28", title: "Standing Mirror", description: "Full-length mirror for bedroom or hallway.", price: 89.99, category: "New Decor" },
//   { id: 29, image: "https://picsum.photos/200/200?random=29", title: "Desk Organizer", description: "Keep your workspace neat and tidy.", price: 19.99, category: "New Decor" },
//   { id: 30, image: "https://picsum.photos/200/200?random=30", title: "Bean Bag Chair", description: "Soft bean bag for casual seating.", price: 69.99, category: "New Furnishings" },
//   { id: 31, image: "https://picsum.photos/200/200?random=31", title: "Dining Chair Set", description: "Set of 4 modern dining chairs.", price: 159.99, category: "New Furnishings" },
//   { id: 32, image: "https://picsum.photos/200/200?random=32", title: "Wall Clock", description: "Minimalist wall clock with quartz movement.", price: 29.99, category: "New Decor" },
//   { id: 33, image: "https://picsum.photos/200/200?random=33", title: "Laptop Stand", description: "Ergonomic stand for laptops and notebooks.", price: 24.99, category: "New Decor" },
//   { id: 34, image: "https://picsum.photos/200/200?random=34", title: "Curtain Set", description: "Elegant curtains for bedroom or living room.", price: 49.99, category: "New Decor" },
//   { id: 35, image: "https://picsum.photos/200/200?random=35", title: "Desk Lamp", description: "LED lamp for reading and studying.", price: 39.99, category: "New Decor" },
//   { id: 36, image: "https://picsum.photos/200/200?random=36", title: "Accent Rug", description: "Small decorative rug for entryway or room.", price: 59.99, category: "New Decor" },
//   { id: 37, image: "https://picsum.photos/200/200?random=37", title: "Storage Cabinet", description: "Multi-purpose cabinet for home organization.", price: 129.99, category: "New Furnishings" },
//   { id: 38, image: "https://picsum.photos/200/200?random=38", title: "Outdoor Bench", description: "Durable bench for garden or patio.", price: 149.99, category: "New Furnishings" },
//   { id: 39, image: "https://picsum.photos/200/200?random=39", title: "Wall Art Set", description: "Set of 3 decorative wall art prints.", price: 79.99, category: "New Decor" },
//   { id: 40, image: "https://picsum.photos/200/200?random=40", title: "Folding Chair", description: "Portable folding chair for extra seating.", price: 29.99, category: "New Furnishings" },
//   { id: 41, image: "https://picsum.photos/200/200?random=41", title: "Storage Basket", description: "Woven basket for home organization.", price: 24.99, category: "New Decor" },
//   { id: 42, image: "https://picsum.photos/200/200?random=42", title: "Accent Table Lamp", description: "Stylish lamp for bedroom or living room.", price: 49.99, category: "New Decor" },
//   { id: 43, image: "https://picsum.photos/200/200?random=43", title: "Reclining Sofa", description: "Comfortable sofa with reclining function.", price: 399.99, category: "New Furnishings" },
//   { id: 44, image: "https://picsum.photos/200/200?random=44", title: "Wall Shelf Set", description: "Set of 3 floating shelves for decoration.", price: 59.99, category: "New Decor" },
//   { id: 45, image: "https://picsum.photos/200/200?random=45", title: "Accent Pillow Set", description: "Pack of 4 decorative pillows.", price: 29.99, category: "New Decor" },
//   { id: 46, image: "https://picsum.photos/200/200?random=46", title: "Desk Organizer Set", description: "Set of desk organizers for office supplies.", price: 34.99, category: "New Decor" },
//   { id: 47, image: "https://picsum.photos/200/200?random=47", title: "Floor Cushion", description: "Soft floor cushion for extra seating.", price: 49.99, category: "New Furnishings" },
//   { id: 48, image: "https://picsum.photos/200/200?random=48", title: "Filing Cabinet", description: "Metal cabinet for documents and files.", price: 119.99, category: "New Furnishings" },
//   { id: 49, image: "https://picsum.photos/200/200?random=49", title: "Decorative Vase", description: "Elegant vase for flowers and decoration.", price: 39.99, category: "New Decor" },
//   { id: 50, image: "https://picsum.photos/200/200?random=50", title: "Standing Coat Rack", description: "Practical coat rack for entryway.", price: 59.99, category: "New Furnishings" },
// ];
export interface Item {
  name: string;
  category: string;
  sku: string;
  securedProduct: boolean;
  availability: string;
  price: {
    current: number;
    original: number;
  };
  pickupOnly: string;
  messageNow: boolean;
  description: string;
  sourcingStory: string;
  dimensions: string;
  materials: string;
  condition: string;
  images: string[]; // array of image URLs (4 images per product)
}


export const data: Item[] = 
  [
  {
    "name": "Mid-Century Lounge Chair",
    "category": "New Décor",
    "sku": "0358",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 1050, "original": 1150},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "A beautifully preserved mid-century lounge chair with original upholstery in excellent condition. This piece showcases the clean lines and organic forms characteristic of the era, making it a timeless addition to any living space.",
    "sourcingStory": "Sourced from a Palm Beach estate sale, carefully inspected and cleaned. Frame is solid walnut with original finish showing a natural patina. Cushioning remains supportive.",
    "dimensions": "32\"W *34\"D x 30\"H",
    "materials": "Walnut frame, original upholstery.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=1",
      "https://picsum.photos/200/200?random=2",
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=4"
    ]
  },
  {
    "name": "Teak Sideboard",
    "category": "New Décor",
    "sku": "0412",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 1250, "original": 1350},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "A sleek mid-century teak sideboard with sliding doors and minimalist hardware. Perfect for modern living spaces or dining rooms.",
    "sourcingStory": "Sourced from a Palm Springs estate, refinished lightly to preserve natural teak patina.",
    "dimensions": "60\"W x 18\"D x 30\"H",
    "materials": "Teak wood, brass handles.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=5",
      "https://picsum.photos/200/200?random=6",
      "https://picsum.photos/200/200?random=7",
      "https://picsum.photos/200/200?random=8"
    ]
  },
  {
    "name": "Eames Lounge Chair Replica",
    "category": "New Décor",
    "sku": "0420",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 950, "original": 1100},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "Comfortable lounge chair in classic Eames style, with molded plywood and leather upholstery. Timeless design for any living room.",
    "sourcingStory": "Carefully inspected and professionally cleaned. All joints are secure and finish maintained.",
    "dimensions": "32\"W x 34\"D x 31\"H",
    "materials": "Molded plywood, leather upholstery.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=9",
      "https://picsum.photos/200/200?random=10",
      "https://picsum.photos/200/200?random=11",
      "https://picsum.photos/200/200?random=12"
    ]
  },
  {
    "name": "Walnut Coffee Table",
    "category": "New Décor",
    "sku": "0433",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 650, "original": 750},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "Low-profile walnut coffee table with clean mid-century lines. Perfect for living room setups.",
    "sourcingStory": "Estate sourced from Chicago, restored lightly to maintain original finish.",
    "dimensions": "48\"W x 24\"D x 16\"H",
    "materials": "Walnut wood.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=13",
      "https://picsum.photos/200/200?random=14",
      "https://picsum.photos/200/200?random=15",
      "https://picsum.photos/200/200?random=16"
    ]
  },
  {
    "name": "Vintage Armchair",
    "category": "New Décor",
    "sku": "0441",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 720, "original": 800},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "Comfortable vintage armchair with soft fabric and elegant wooden legs. Ideal for reading corners or bedrooms.",
    "sourcingStory": "Sourced from New York estate, professionally cleaned upholstery and checked frame integrity.",
    "dimensions": "30\"W x 32\"D x 34\"H",
    "materials": "Wood frame, fabric upholstery.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=17",
      "https://picsum.photos/200/200?random=18",
      "https://picsum.photos/200/200?random=19",
      "https://picsum.photos/200/200?random=20"
    ]
  },
  {
    "name": "Mid-Century Bench",
    "category": "New Décor",
    "sku": "0452",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 850, "original": 950},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "Simple and elegant mid-century bench, perfect for entryways or bedrooms.",
    "sourcingStory": "Sourced from a Palm Beach estate, inspected and polished.",
    "dimensions": "50\"W x 16\"D x 18\"H",
    "materials": "Walnut wood, fabric seat.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=21",
      "https://picsum.photos/200/200?random=22",
      "https://picsum.photos/200/200?random=23",
      "https://picsum.photos/200/200?random=24"
    ]
  },
  {
    "name": "Mid-Century Side Table",
    "category": "New Décor",
    "sku": "0460",
    "securedProduct": true,
    "availability": "In Stock",
    "price": {"current": 450, "original": 500},
    "pickupOnly": "Available for local pickup in Oak Ridge, NC. No shipping available.",
    "messageNow": true,
    "description": "Compact side table with tapered legs and minimalist design, ideal for living rooms.",
    "sourcingStory": "Estate sourced, lightly refinished to maintain original character.",
    "dimensions": "20\"W x 20\"D x 22\"H",
    "materials": "Teak wood.",
    "condition": "Excellent vintage condition",
    "images": [
      "https://picsum.photos/200/200?random=25",
      "https://picsum.photos/200/200?random=26",
      "https://picsum.photos/200/200?random=27",
      "https://picsum.photos/200/200?random=28"
    ]
  }
  // ... repeat similarly for items 9–30, incrementing "random" numbers in images
]
