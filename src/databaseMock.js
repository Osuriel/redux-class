const products = [
  {
    id: '1',
    title: "Guitar",
    price: 47999
  },
  {
    id: '2',
    title: "Microphone",
    price: 17999
  },
  {
    id: '3',
    title: "Piano",
    price: 79999
  }
];

const users = [
  {
    id: '123',
    userName: 'JS007',
    name: "John Smith",
    city: "New York",
    pass: '1234',
  },
  {
    id: '223',
    userName: 'MBaker',
    name: "Mary Baker",
    city: "Chicago",
    pass: '1234',
  },
  {
    id: '323',
    userName: 'not_batman',
    name: "Bruce Wayne",
    city: "Gotham",
    pass: '1234',
  },
];

export const fetchItems = () => products;

export const fetchUsers = () => users;