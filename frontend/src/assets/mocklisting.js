import room1 from '../assets/room1.jpeg';
import room2 from '../assets/room2.jpeg';
import room3 from '../assets/room3.jpeg';
import room4 from '../assets/room4.jpeg';
import '../components/Style.css'; 

const mockListings = [
    {
      id: 1,
      imageUrl: room1,
      hostName: 'Hung',
      title: 'Hung Phang',
      description: 'Enjoy a bright and comfortable studio in downtown.',
      bedType: 'Queen bed',
      price: '$670 month'
      // ... other listing properties
    },
    {
      id: 2,
      imageUrl: room2,
      hostName: 'Huy',
      title: 'Duc Dang',
      description: 'Spacious two-bedroom with great city views.',
      bedType: 'Double bed',
      price: '$788 month'
      // ... other listing properties
    },
    {
      id: 3,
      imageUrl: room3,
      hostName: 'Superman',
      title: 'Superman',
      description: 'Spacious two-bedroom with great city views.',
      bedType: 'Two double beds',
      price: '$788 month'
      // ... other listing properties
    },
  
    {
      id: 4,
      imageUrl: room4,
      hostName: 'Wendy',
      title: 'Wendy Nguyen',
      description: 'Two Comfortable and cosy bedrooms; Near the Center City',
      bedType: 'Queen bed',
      price: '$800 month'
      // ... other listing properties
    },
    // ... more mock listings
];

export default mockListings