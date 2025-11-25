export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'burger' | 'side' | 'drink';
    image: string;
    spicy?: boolean;
    translationKey: string;
}

export const products: Product[] = [
    // Burgers
    {
        id: '1',
        name: 'The Classic Zoal',
        description: 'Our signature beef patty with special Sudanese spice blend, cheese, fresh lettuce, tomato, and onion.',
        price: 8.99,
        category: 'burger',
        image: '/TheClassicZoal.jpg',
        translationKey: 'classicZoal',
    },
    {
        id: '2',
        name: 'Spicy Nile',
        description: 'Double patty with spicy peanut sauce (Dakwa), jalapeños, caramelized onions, and pepper jack cheese.',
        price: 9.99,
        category: 'burger',
        image: '/SpicyNile.jpg',
        spicy: true,
        translationKey: 'spicyNile',
    },
    {
        id: '3',
        name: 'Desert Chicken',
        description: 'Crispy chicken breast with garlic mayo (Toumia), lettuce, and pickles on a toasted brioche bun.',
        price: 8.49,
        category: 'burger',
        image: '/DesertChicken.jpg',
        translationKey: 'desertChicken',
    },
    {
        id: '4',
        name: 'The Sultan',
        description: 'Premium lamb patty with feta cheese, mint yogurt sauce, and grilled eggplant.',
        price: 11.99,
        category: 'burger',
        image: '/images/sultan.jpg',
        translationKey: 'sultan',
    },

    // Sides
    {
        id: '5',
        name: 'Zoal Fries',
        description: 'Crispy fries dusted with our secret spice blend.',
        price: 3.99,
        category: 'side',
        image: '/images/fries.jpg',
        translationKey: 'zoalFries',
    },
    {
        id: '6',
        name: 'Cheesy Dakwa Fries',
        description: 'Fries loaded with cheese sauce and spicy peanut drizzle.',
        price: 5.99,
        category: 'side',
        image: '/images/dakwa-fries.jpg',
        spicy: true,
        translationKey: 'dakwaFries',
    },
    {
        id: '7',
        name: 'Onion Rings',
        description: 'Golden crispy onion rings served with ranch dip.',
        price: 4.49,
        category: 'side',
        image: '/images/onion-rings.jpg',
        translationKey: 'onionRings',
    },

    // Drinks
    {
        id: '8',
        name: 'Hibiscus Fizz (Karkadeh)',
        description: 'Sparkling hibiscus tea with a hint of ginger and lime.',
        price: 3.49,
        category: 'drink',
        image: '/images/karkadeh.jpg',
        translationKey: 'karkadeh',
    },
    {
        id: '9',
        name: 'Baobab Smoothie (Gongoleiz)',
        description: 'Creamy and tangy baobab fruit smoothie.',
        price: 4.99,
        category: 'drink',
        image: '/images/gongoleiz.jpg',
        translationKey: 'gongoleiz',
    },
    {
        id: '10',
        name: 'Classic Cola',
        description: 'Chilled cola with ice.',
        price: 1.99,
        category: 'drink',
        image: '/images/cola.jpg',
        translationKey: 'cola',
    },
];

