export const boatData = {
  'royal-lotus': {
    name: 'Royal Lotus', type: 'Luxury', bedrooms: 2, price: '₹12,000',
    desc: 'The Royal Lotus is our flagship luxury houseboat — a masterpiece of traditional Kerala craftsmanship combined with modern comforts. Hand-woven bamboo and coir interiors, private upper deck, and personalized service make this the ultimate backwater experience.',
    amenities: ['2 AC Bedrooms','Private Upper Deck','Attached Bathrooms','Kerala Cuisine Chef','Daily Housekeeping','Life Jackets','Solar Power','Fresh Water Supply','LED TV','Wi-Fi (limited)','Bonfire on Deck','Fishing Rods'],
    itinerary: [
      { time: '12:00 PM', event: 'Boarding & Welcome Drink' },
      { time: '1:00 PM', event: 'Lunch – Traditional Kerala Sadhya' },
      { time: '2:00 PM', event: 'Cruise through Vembanad Lake' },
      { time: '4:00 PM', event: 'Evening Tea & Snacks' },
      { time: '6:30 PM', event: 'Sunset Views & Deck Time' },
      { time: '7:30 PM', event: 'Kerala BBQ / Dinner' },
      { time: '9:00 AM', event: 'Breakfast (next day)' },
      { time: '9:30 AM', event: 'Checkout at Finishing Point' },
    ],
    packages: [
      { label: 'Day Cruise', price: '₹6,000', dur: '10 AM – 5 PM', inc: 'Lunch + Tea' },
      { label: 'Overnight', price: '₹12,000', dur: '12 PM – 9 AM', inc: 'All Meals' },
      { label: 'Two Nights', price: '₹22,000', dur: '2 Nights 3 Days', inc: 'All Meals + BBQ' },
    ],
  },
  'honeymoon-blossom': {
    name: 'Blossom Retreat', type: 'Honeymoon', bedrooms: 1, price: '₹9,500',
    desc: 'A dreamy sanctuary crafted for couples. The Blossom Retreat features floral décor, rose-petal arrangements, a private sun deck, candlelight dinner, and special honeymoon amenities for an unforgettable romantic escape on Kerala\'s magical backwaters.',
    amenities: ['AC Master Bedroom','Rose Petal Décor','Private Sun Deck','Candlelight Dinner','Welcome Champagne','Honeymoon Cake','Attached Bathroom','Chef on Board','Life Jackets','Special Turndown Service'],
    itinerary: [
      { time: '12:00 PM', event: 'Boarding – Rose Petal Welcome' },
      { time: '1:00 PM', event: 'Romantic Lunch for Two' },
      { time: '2:30 PM', event: 'Backwater Cruise & Photography' },
      { time: '4:30 PM', event: 'High Tea on Deck' },
      { time: '6:30 PM', event: 'Sunset Champagne' },
      { time: '7:30 PM', event: 'Candlelight Dinner' },
      { time: '9:00 AM', event: 'Breakfast (next day)' },
      { time: '9:30 AM', event: 'Checkout' },
    ],
    packages: [
      { label: 'Day Romantic', price: '₹5,000', dur: '10 AM – 5 PM', inc: 'Lunch + Cake' },
      { label: 'Honeymoon Night', price: '₹9,500', dur: '12 PM – 9 AM', inc: 'All Meals + Cake' },
      { label: 'Couple Deluxe', price: '₹17,500', dur: '2 Nights', inc: 'All + Spa Voucher' },
    ],
  },
}