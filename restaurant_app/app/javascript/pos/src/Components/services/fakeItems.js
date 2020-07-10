let items = [
  {
    id: 0,
    name: "Sirloin",
    price: 20,
  },
  {
    id: 1,
    name: "Bolognese",
    price: 20,
  },
  {
    id: 2,
    name: "Coke",
    price: 20,
  },
  {
    id: 3,
    name: "Fanta",
    price: 20,
  },
];

const getItems = () => {
  return items;
};

const getItem = (id) => {
  return items.find((i) => i._id === id);
};

// const saveItem = (item) => {
//   let itemInDb = items.find((m) => m._id === item._id) || {};
//   itemInDb.name = item.name;
//   itemInDb.genre = genresAPI.genres.find((g) => g._id === item.genreId);
//   itemInDb.numberInStock = item.numberInStock;
//   itemInDb.dailyRentalRate = item.dailyRentalRate;

//   if (!itemInDb._id) {
//     itemInDb._id = Date.now();
//     items.push(itemInDb);
//   }

//   return itemInDb;
// };

const deleteItem = (id) => {
  let itemInDb = items.find((m) => m._id === id);
  items.splice(items.indexOf(itemInDb), 1);
  return itemInDb;
};

module.exports = {
  getItems,
  getItem,
  // saveItem,
  deleteItem,
};
