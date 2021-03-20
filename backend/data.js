import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'pragati',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'lovey',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'apple',
        category: 'fruit',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'tata',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'banana',
        category: 'fruit',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'tata',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'mango',
        category: 'fruit',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'lamao',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'grapes',
        category: 'fruit',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 20,
        brand: 'Neera',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'papaya',
        category: 'fruit',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 10,
        brand: 'Prada',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'strawberry',
        category: 'fruit',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Anaaz',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;