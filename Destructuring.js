//Destructuring helps to make the code cleaner and Reusable
//Below demo code shows how destructuring works in Array and Objects
const DispatchItems = ['Detergent Soap', 'Detergent Liquid', 'Dishwash Liquid','Fragrant Soap'];
const [firstItem,secondItem, thirdItem,fourthItem] = DispatchItems;
//Accessing the ArrayElements directly by the Destructuring element names
console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);
console.log(fourthItem);//Destructuring makes easy to accessing the Array Elements

//Destructuring in object
const ProductionItems =
{
    ItemName : "100g soap",
    ItemQty : "100 box",
    ItemPrice : 50
};
const {ItemName , ItemQty , ItemPrice} = ProductionItems;
console.log(ItemName);//Destructuring the Keys in objects , the variables name provided exactly as a key names
console.log(ItemPrice);
console.log(ItemQty);//Accessing the Object Values by Destructuring 
