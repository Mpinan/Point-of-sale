const tables = [
  {
    id: 0,
    number: 1,
    items: [
      { id: 0, name: "Sirloin", price: 20 },
      {
        id: 1,
        name: "Coke",
        price: 20,
      },
    ],
  },
  { id: 1, number: 2, items: [] },
  { id: 2, number: 3, items: [] },
  { id: 3, number: 4, items: [] },
  { id: 4, number: 5, items: [] },
  { id: 5, number: 6, items: [] },
  { id: 6, number: 7, items: [] },
  { id: 7, number: 8, items: [] },
];

const getTables = () => {
  return tables;
};

const getTable = (id) => {
  return tables.find((i) => i._id === id);
};

// const saveTable = (table) => {
//   let tableInDb = tables.find((m) => m._id === table._id) || {};
//   tableInDb.name = table.name;
//   tableInDb.genre = genresAPI.genres.find((g) => g._id === table.genreId);
//   tableInDb.numberInStock = table.numberInStock;
//   tableInDb.dailyRentalRate = table.dailyRentalRate;

//   if (!tableInDb._id) {
//     tableInDb._id = Date.now();
//     tables.push(tableInDb);
//   }

//   return tableInDb;
// };

const deleteTable = (id) => {
  let tableInDb = tables.find((m) => m._id === id);
  tables.splice(tables.indexOf(tableInDb), 1);
  return tableInDb;
};

module.exports = {
  getTables,
  getTable,
  // saveTable,
  deleteTable,
};
