const demoImage =
  "https://res.cloudinary.com/stark-and-nfly/image/upload/v1780586906/one-bedroom-premium-houseboat-alleppey_n6fvfp.jpg";

export const boatData = {
  'royal-lotus': {
    name: 'Royal Lotus Premium',
    type: 'Luxury',
    bedrooms: 2,
    price: '₹12,000',
    image: demoImage,
    images: [
      demoImage,
      demoImage,
      demoImage,
      demoImage,
      demoImage
    ],

    desc: 'Experience the beauty of Alappuzha backwaters aboard our luxury houseboat. Cruise through Vembanad Lake, narrow village canals, paddy fields, and coconut-lined waterways while enjoying authentic Kerala hospitality and freshly prepared traditional cuisine.',

    amenities: [
      '2 Air Conditioned Bedrooms',
      'Private Upper Deck',
      'Attached Bathrooms',
      'Traditional Kerala Meals',
      'Welcome Drink',
      'Tea & Evening Snacks',
      'Dining Area',
      'Experienced Crew',
      'Life Jackets',
      'TV',
      'Wi-Fi (Limited Areas)',
      'Fishing Experience'
    ],

    itinerary: [
      { time: '12:00 PM', event: 'Check-in at Alleppey Finishing Point' },
      { time: '01:00 PM', event: 'Traditional Kerala Lunch' },
      { time: '02:00 PM', event: 'Cruise through Vembanad Backwaters' },
      { time: '04:00 PM', event: 'Tea & Kerala Snacks' },
      { time: '06:00 PM', event: 'Anchoring as per Government Rules' },
      { time: '07:30 PM', event: 'Dinner on Board' },
      { time: '08:00 AM', event: 'Breakfast' },
      { time: '09:00 AM', event: 'Checkout' },
    ],

    packages: [
      {
        label: 'Day Cruise',
        price: '₹6,000',
        dur: '11 AM - 5 PM',
        inc: 'Lunch + Tea'
      },
      {
        label: 'Overnight Cruise',
        price: '₹12,000',
        dur: '12 PM - 9 AM',
        inc: 'All Meals'
      },
      {
        label: '2 Nights Package',
        price: '₹22,000',
        dur: '2 Nights 3 Days',
        inc: 'All Meals'
      },
    ],
  },
  'honeymoon-blossom': {
    name: 'Blossom Honeymoon',
    type: 'Honeymoon',
    bedrooms: 1,
    price: '₹9,500',
    image: demoImage,
    images: [
      demoImage,
      demoImage,
      demoImage,
      demoImage,
      demoImage
    ],

    desc: 'A romantic honeymoon houseboat in Alleppey designed for couples seeking privacy, stunning sunset views, candlelight dining, and memorable moments amidst Kerala’s serene backwaters.',

    amenities: [
      'Air Conditioned Bedroom',
      'Flower Decoration',
      'Private Dining',
      'Candlelight Dinner',
      'Welcome Drink',
      'Honeymoon Cake',
      'Attached Bathroom',
      'Private Deck',
      'Life Jackets',
      'Dedicated Crew'
    ],

    itinerary: [
      { time: '12:00 PM', event: 'Welcome & Check-in' },
      { time: '01:00 PM', event: 'Lunch for Couple' },
      { time: '02:30 PM', event: 'Village Backwater Cruise' },
      { time: '04:00 PM', event: 'Tea & Snacks' },
      { time: '06:00 PM', event: 'Sunset Views' },
      { time: '07:30 PM', event: 'Candlelight Dinner' },
      { time: '08:00 AM', event: 'Breakfast' },
      { time: '09:00 AM', event: 'Checkout' },
    ],

    packages: [
      {
        label: 'Day Cruise',
        price: '₹5,000',
        dur: '11 AM - 5 PM',
        inc: 'Lunch + Tea'
      },
      {
        label: 'Overnight Honeymoon',
        price: '₹9,500',
        dur: '12 PM - 9 AM',
        inc: 'All Meals'
      },
      {
        label: '2 Nights Honeymoon',
        price: '₹17,500',
        dur: '2 Nights',
        inc: 'All Meals + Decoration'
      },
    ],
  },
}