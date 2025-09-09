export interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    rating: number;
    status: string;
    image: string;
}

export const productsData: Product[] = [
    { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, price: 65, rating: 5, status: 'INSTOCK', image: 'bamboo-watch.jpg' },
    { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61, price: 72, rating: 4, status: 'INSTOCK', image: 'black-watch.jpg' },
    { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2, price: 79, rating: 3, status: 'LOWSTOCK', image: 'blue-band.jpg' },
    { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25, price: 29, rating: 5, status: 'INSTOCK', image: 'blue-t-shirt.jpg' },
    { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73, price: 15, rating: 4, status: 'INSTOCK', image: 'bracelet.jpg' },
    { id: 6, code: 'p345n2346', name: 'Brown Purse', category: 'Accessories', quantity: 0, price: 120, rating: 4, status: 'OUTOFSTOCK', image: 'brown-purse.jpg' },
    { id: 7, code: 'z567z1453', name: 'Chakra Bracelet', category: 'Accessories', quantity: 5, price: 32, rating: 3, status: 'LOWSTOCK', image: 'chakra-bracelet.jpg' },
    { id: 8, code: 'acvx872vc', name: 'Galaxy Earrings', category: 'Accessories', quantity: 23, price: 34, rating: 5, status: 'INSTOCK', image: 'galaxy-earrings.jpg' },
    { id: 9, code: 'tx125ck42', name: 'Game Controller', category: 'Electronics', quantity: 2, price: 99, rating: 4, status: 'LOWSTOCK', image: 'game-controller.jpg' },
    { id: 10, code: 'gwuby345v', name: 'Gaming Set', category: 'Electronics', quantity: 63, price: 299, rating: 3, status: 'INSTOCK', image: 'gaming-set.jpg' },
    { id: 11, code: 'abc123def', name: 'Wireless Headphones', category: 'Electronics', quantity: 45, price: 89, rating: 5, status: 'INSTOCK', image: 'wireless-headphones.jpg' },
    { id: 12, code: 'def456ghi', name: 'Smartphone Case', category: 'Accessories', quantity: 78, price: 25, rating: 4, status: 'INSTOCK', image: 'smartphone-case.jpg' },
    { id: 13, code: 'ghi789jkl', name: 'Running Shoes', category: 'Fitness', quantity: 12, price: 120, rating: 5, status: 'LOWSTOCK', image: 'running-shoes.jpg' },
    { id: 14, code: 'jkl012mno', name: 'Denim Jacket', category: 'Clothing', quantity: 34, price: 85, rating: 4, status: 'INSTOCK', image: 'denim-jacket.jpg' },
    { id: 15, code: 'mno345pqr', name: 'Laptop Stand', category: 'Electronics', quantity: 8, price: 45, rating: 3, status: 'LOWSTOCK', image: 'laptop-stand.jpg' },
    { id: 16, code: 'pqr678stu', name: 'Yoga Mat', category: 'Fitness', quantity: 56, price: 35, rating: 4, status: 'INSTOCK', image: 'yoga-mat.jpg' },
    { id: 17, code: 'stu901vwx', name: 'Leather Wallet', category: 'Accessories', quantity: 0, price: 55, rating: 4, status: 'OUTOFSTOCK', image: 'leather-wallet.jpg' },
    { id: 18, code: 'vwx234yza', name: 'Bluetooth Speaker', category: 'Electronics', quantity: 23, price: 75, rating: 5, status: 'INSTOCK', image: 'bluetooth-speaker.jpg' },
    { id: 19, code: 'yza567bcd', name: 'Hoodie', category: 'Clothing', quantity: 67, price: 45, rating: 4, status: 'INSTOCK', image: 'hoodie.jpg' },
    { id: 20, code: 'bcd890efg', name: 'Dumbbells Set', category: 'Fitness', quantity: 15, price: 95, rating: 4, status: 'LOWSTOCK', image: 'dumbbells-set.jpg' },
    { id: 21, code: 'efg123hij', name: 'Sunglasses', category: 'Accessories', quantity: 42, price: 65, rating: 5, status: 'INSTOCK', image: 'sunglasses.jpg' },
    { id: 22, code: 'hij456klm', name: 'Tablet Cover', category: 'Electronics', quantity: 31, price: 28, rating: 3, status: 'INSTOCK', image: 'tablet-cover.jpg' },
    { id: 23, code: 'klm789nop', name: 'Tennis Racket', category: 'Fitness', quantity: 7, price: 85, rating: 4, status: 'LOWSTOCK', image: 'tennis-racket.jpg' },
    { id: 24, code: 'nop012qrs', name: 'Summer Dress', category: 'Clothing', quantity: 28, price: 65, rating: 5, status: 'INSTOCK', image: 'summer-dress.jpg' },
    { id: 25, code: 'qrs345tuv', name: 'USB Cable', category: 'Electronics', quantity: 89, price: 12, rating: 3, status: 'INSTOCK', image: 'usb-cable.jpg' },
    { id: 26, code: 'tuv678wxy', name: 'Resistance Bands', category: 'Fitness', quantity: 45, price: 18, rating: 4, status: 'INSTOCK', image: 'resistance-bands.jpg' },
    { id: 27, code: 'wxy901zab', name: 'Necklace', category: 'Accessories', quantity: 0, price: 120, rating: 5, status: 'OUTOFSTOCK', image: 'necklace.jpg' },
    { id: 28, code: 'zab234cde', name: 'Wireless Mouse', category: 'Electronics', quantity: 33, price: 35, rating: 4, status: 'INSTOCK', image: 'wireless-mouse.jpg' },
    { id: 29, code: 'cde567fgh', name: 'Jeans', category: 'Clothing', quantity: 52, price: 75, rating: 4, status: 'INSTOCK', image: 'jeans.jpg' },
    { id: 30, code: 'fgh890ijk', name: 'Jump Rope', category: 'Fitness', quantity: 19, price: 15, rating: 3, status: 'LOWSTOCK', image: 'jump-rope.jpg' },
    { id: 31, code: 'ijk123lmn', name: 'Ring', category: 'Accessories', quantity: 14, price: 200, rating: 5, status: 'LOWSTOCK', image: 'ring.jpg' },
    { id: 32, code: 'lmn456opq', name: 'Keyboard', category: 'Electronics', quantity: 26, price: 120, rating: 4, status: 'INSTOCK', image: 'keyboard.jpg' },
    { id: 33, code: 'opq789rst', name: 'T-Shirt', category: 'Clothing', quantity: 73, price: 25, rating: 4, status: 'INSTOCK', image: 't-shirt.jpg' },
    { id: 34, code: 'rst012uvw', name: 'Foam Roller', category: 'Fitness', quantity: 8, price: 25, rating: 3, status: 'LOWSTOCK', image: 'foam-roller.jpg' },
    { id: 35, code: 'uvw345xyz', name: 'Earrings', category: 'Accessories', quantity: 37, price: 45, rating: 4, status: 'INSTOCK', image: 'earrings.jpg' },
    { id: 36, code: 'xyz678abc', name: 'Monitor Stand', category: 'Electronics', quantity: 12, price: 65, rating: 4, status: 'LOWSTOCK', image: 'monitor-stand.jpg' },
    { id: 37, code: 'abc901def', name: 'Sweater', category: 'Clothing', quantity: 41, price: 55, rating: 4, status: 'INSTOCK', image: 'sweater.jpg' },
    { id: 38, code: 'def234ghi', name: 'Medicine Ball', category: 'Fitness', quantity: 6, price: 35, rating: 3, status: 'LOWSTOCK', image: 'medicine-ball.jpg' },
    { id: 39, code: 'ghi567jkl', name: 'Watch Band', category: 'Accessories', quantity: 29, price: 18, rating: 4, status: 'INSTOCK', image: 'watch-band.jpg' },
    { id: 40, code: 'jkl890mno', name: 'Webcam', category: 'Electronics', quantity: 18, price: 85, rating: 4, status: 'LOWSTOCK', image: 'webcam.jpg' },
    { id: 41, code: 'mno123pqr', name: 'Shorts', category: 'Clothing', quantity: 62, price: 35, rating: 4, status: 'INSTOCK', image: 'shorts.jpg' },
    { id: 42, code: 'pqr456stu', name: 'Pull-up Bar', category: 'Fitness', quantity: 4, price: 45, rating: 4, status: 'LOWSTOCK', image: 'pull-up-bar.jpg' },
    { id: 43, code: 'stu789vwx', name: 'Belt', category: 'Accessories', quantity: 51, price: 30, rating: 3, status: 'INSTOCK', image: 'belt.jpg' },
    { id: 44, code: 'vwx012yza', name: 'External Hard Drive', category: 'Electronics', quantity: 22, price: 95, rating: 5, status: 'INSTOCK', image: 'external-hard-drive.jpg' },
    { id: 45, code: 'yza345bcd', name: 'Blazer', category: 'Clothing', quantity: 16, price: 120, rating: 5, status: 'LOWSTOCK', image: 'blazer.jpg' },
    { id: 46, code: 'bcd678efg', name: 'Kettlebell', category: 'Fitness', quantity: 9, price: 55, rating: 4, status: 'LOWSTOCK', image: 'kettlebell.jpg' },
    { id: 47, code: 'efg901hij', name: 'Scarf', category: 'Accessories', quantity: 44, price: 20, rating: 3, status: 'INSTOCK', image: 'scarf.jpg' },
    { id: 48, code: 'hij234klm', name: 'Printer', category: 'Electronics', quantity: 7, price: 150, rating: 4, status: 'LOWSTOCK', image: 'printer.jpg' },
    { id: 49, code: 'klm567nop', name: 'Skirt', category: 'Clothing', quantity: 38, price: 45, rating: 4, status: 'INSTOCK', image: 'skirt.jpg' },
    { id: 50, code: 'nop890qrs', name: 'Yoga Block', category: 'Fitness', quantity: 25, price: 12, rating: 3, status: 'INSTOCK', image: 'yoga-block.jpg' }
    ]; 