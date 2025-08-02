// Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

let students = [];

// Add 3 students with their marks
students.push({ name: "Parvesh", phy: 25, math: 30, chem: 50 });
students.push({ name: "Harshit", phy: 85, math: 30, chem: 35 });
students.push({ name: "Rohan", phy: 45, math: 65, chem: 50 });

// Function to calculate total marks of a student
function getTotal(student) {
    return student.phy + student.math + student.chem;
}

// students.forEach(student => {
//     console.log(student.name + "'s total:", getTotal(student));
// });

let least = students[0];
let highest = students[0];

for (let student of students) {
    if (getTotal(student) < getTotal(least)) {
        least = student;
    }
    if (getTotal(student) > getTotal(highest)) {
        highest = student;
    }
}

console.log("Student with least total marks:", least.name, "-", getTotal(least));
console.log("Student with highest total marks:", highest.name, "-", getTotal(highest));



// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle


let obj ={
    length:20,
    width:10,
    perimeter: function(){
        return 2*(this.length+this.width)
    },
    area: function(){
        return (this.length*this.width)
    }
}

console.log(obj.perimeter())
console.log(obj.area())



// Your task is to create an object that can store these items with their respective quantities and prices, 
// and then calculate the total cost of all the items.


let ob = {
  arr: [],
  data: function(nam, quan, pri) {
    let ob = {
      Name: nam,
      Quantity: quan,
      price: pri
    };
    this.arr.push(ob);
  },
  total: function() {
    let tot = 0;
    for (var i = 0; i < this.arr.length; i++) {
      tot += this.arr[i].Quantity * this.arr[i].price;
    }
    console.log(tot);
  }
};

ob.data("Rice", 2, 60);
ob.data("Dal", 3, 50);
ob.data("Salt", 1, 20);
console.log(ob.arr);
ob.total();


// Sales Total

var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];


function totalSales(sales) {
  return sales.map(item => {
    const discount = item.discount || 0; 
    const salePrice = item.original * (1 - discount);
    const total = item.stock * salePrice;
    
    return {
      ...item,
      sale: salePrice,
      total: total
    };
  });
}

console.log(totalSales(sales));
