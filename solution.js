/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const doubleValue = (objArray) => {
  return objArray.map(({ quantity, price }) => {
    return {
      quantity: quantity * 2,
      price: price * 2,
    };
  });
};

const filterByCondition = (objArray) => {
  return objArray.filter(({ quantity, price }) => {
    return quantity > 2 && price > 300;
  });
};

const totalValue = (objArray) => {
  return objArray.reduce((acc, { quantity, price }) => {
    return acc + quantity * price;
  }, 0);
};

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const expectedReturnString =
  'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

const stringConverter = (str) => {
  return str.split(/[- ]+/).join(' ').trim().toLowerCase();
};

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
];

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
  { uuid: 1, role: 'manager', name: null },
  { uuid: 2, role: 'associate', name: 'test' },
  { uuid: 3, role: null, name: 'test3' },
  { uuid: 4, role: 'engineer', name: null },
  { uuid: 5, role: null, name: 'test5' },
  { uuid: 6, role: 'pm', name: null },
];

const mergeTwoArray = (first, second) => {
  const map = {};
  [...first, ...second].forEach(({ uuid, role, name }) => {
    if (!map[uuid]) {
      map[uuid] = {
        uuid,
        ...{ role: role ? role : null },
        ...{ name: name ? name : null },
      };
    } else {
      map[uuid] = {
        ...map[uuid],
        //conditional add properties to object
        ...(role && { role: role ? role : null }),
        ...(name && { name: name ? name : null }),
      };
    }
  });

  //if you are using object instead of map, there is no need to sort
  return Object.values(map);
};

console.log(mergeTwoArray(first, second));
