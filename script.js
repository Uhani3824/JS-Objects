//Question 1
let car1={
    make: "Honda",
    model: "Civic",
    year: "2019"
}

console.log("Car1 Details:\n")
console.log("Make:",car1.make)
console.log("Model:",car1.model)
console.log("Year:",car1.year)

let car2={
    make:"Toyota",
    model:"Camry",
    year:"2020"
}

console.log("Car2 Details:\n")
console.log("Make:",car2.make)
console.log("Model:",car2.model)
console.log("Year",car2.year)

let car3={
    make:"Ford",
    model:"Mustang",
    year:"2018"
}

console.log("Car3 Details:\n")
console.log("Make:",car3.make)
console.log("Model:",car3.model)
console.log("Year:",car3.year)

//Question 2
//Part 1
const book={};

const title=prompt("Enter title of book:");
const author = prompt("Enter the author of the book:");
const pages = prompt("Enter the number of pages in the book:");

book.title = title;
book.author = author;
book.pages = pages;

console.log("Book Details:");
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Number of Pages: " + book.pages);

//Part 2
const people = [
    { name: "Ali", age: 20 },
    { name: "Bobby", age: 15 },
    { name: "Charlie", age: 80 },
  ];

  function findOldestPerson(people) {
    if (people.length === 0) {
      return "No people in the array";
    }
  
    let oldestName = "";
    let oldestAge = -1;
  
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      const age = person.age;
  
      if (age > oldestAge) {
        oldestAge = age;
        oldestName = person.name;
      }
    }
  
    return oldestName;
  }

  const oldestPerson=findOldestPerson(people);

  console.log("The oldest person is:"+oldestPerson);

  //Part 3
  const movies=[];

  for(let i=0;i<3;i++)
  {
    const title=prompt(`Enter the title of movie ${i + 1}:`);
    const director =prompt(`Enter the director of movie ${i + 1}:`);
    const year =prompt(`Enter the year of movie ${i + 1}:`);

    const movie = {
        title: title,
        director: director,
        year: parseInt(year),
      };

      movies.push(movie);
  }

  movies.sort(function(a, b) {
    return a.year - b.year;
  });

  console.log(movies);

//Part 4
  const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 15 },
    { name: "Item 3", price: 5 },
  ];
 
  function calculateTotalPrice(items)
  {
    let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    totalPrice += item.price;
  }

  return totalPrice;
  }

  totalPrice=calculateTotalPrice(items);

  console.log("The total price of items is:"+totalPrice);
