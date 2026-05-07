let menu = [
  {name:"Cheese Burger", price:149, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"},
  {name:"Veg Burger", price:99, img:"https://images.unsplash.com/photo-1550317138-10000687a72b"},
  {name:"Chicken Burger", price:179, img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  {name:"Double Patty Burger", price:219, img:"https://tse1.mm.bing.net/th/id/OIP.UYC96Xsn2LabUgQyc5EiSAHaHa?pid=Api&P=0&h=180"},
  {name:"Spicy Burger", price:159, img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add"},
  {name:"French Fries", price:79, img:"https://images.unsplash.com/photo-1576107232684-1279f390859f"},
  {name:"Peri Peri Fries", price:99, img:"https://images.unsplash.com/photo-1541599540903-216a46ca1dc0"},
  {name:"Cheese Fries", price:129, img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90"},
  {name:"Loaded Fries", price:149, img:"https://tse4.mm.bing.net/th/id/OIP.r59S8EcOeppSvmnNlJFt4AHaEK?pid=Api&P=0&h=180",height:"70vh"},
  {name:"Curly Fries", price:109, img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90"},
  {name:"Veg Wrap", price:119, img:"https://tse3.mm.bing.net/th/id/OIP.hPnNoLaS20-kYNTIbEDZ7wHaFi?pid=Api&P=0&h=180"},
  {name:"Chicken Wrap", price:149, img:"https://i.pinimg.com/originals/c5/c2/0e/c5c20ecbf74ef43df34c3ab6a9fd6c4e.png"},
  {name:"Paneer Burger", price:169, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"},
  {name:"BBQ Burger", price:189, img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  {name:"Maharaja Burger", price:249, img:"https://tse1.mm.bing.net/th/id/OIP.eBurypK2xaaqJGFP20CdagHaFl?pid=Api&P=0&h=180"},
  {name:"Fanta", price:49, img:"https://tse2.mm.bing.net/th/id/OIP.krn-onnswIRtRaCFhvEJiAHaHa?pid=Api&P=0&h=180"},
  {name:"Coke", price:59, img:"https://tse3.mm.bing.net/th/id/OIP.rqYa_H1QuL_A0mH-jRbWaQHaHa?pid=Api&P=0&h=180"},
  {name:"Pepsi", price:59, img:"https://tse3.mm.bing.net/th/id/OIP.Poc5eIIVpiYUOiBf61VLKwHaJQ?pid=Api&P=0&h=180"},
  {name:"Orange Juice", price:89, img:"https://duulp0xsp2qmz.cloudfront.net/flex-northspoon239/media/images/63b7abd7e0281_6b4b61f84f6cff0dc46236e30824d1a4.jpg"},
  {name:"Milkshake", price:129, img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699"},
  {name:"Combo 1", price:199, img:"https://tse1.mm.bing.net/th/id/OIP.7Xo4V0OwH6PXxr2lSeyKTwHaE7?pid=Api&P=0&h=180"},
  {name:"Combo 2", price:219, img:"https://tse4.mm.bing.net/th/id/OIP.SeedMcYPz2eazMrJzZPC9AHaE7?pid=Api&P=0&h=180"},
  {name:"Combo 3", price:249, img:"https://img.pikbest.com/backgrounds/20250224/delicious-burger-fries-and-coke-combo-ready-to-eat_11553470.jpg!bwr800"},
  {name:"Family Combo", price:399, img:"https://tse2.mm.bing.net/th/id/OIP.-byanv8o8FkWsIeiYJ2NQAHaHa?pid=Api&P=0&h=180"},
  
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];
function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user && pass){
    localStorage.setItem("user", user);
    window.location.href = "index.html";
  }else{
    alert("Please fill all fields");
  }
}

// GO MENU
function goMenu(){
  window.location.href = "menu.html";
}

// CHECKOUT PAGE
function checkout(){
  window.location.href = "checkout.html";
}

// LOAD MENU ITEMS
if(document.getElementById("menu")){

  let container = document.getElementById("menu");

  menu.forEach((item,index)=>{

    container.innerHTML += `

      <div class="card">

        <img src="${item.img}">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <button onclick="addCart(${index})">
          Add to Cart
        </button>

      </div>
    `;
  });
}

// ADD TO CART
function addCart(index){

  cart.push(menu[index]);

  localStorage.setItem("cart",JSON.stringify(cart));

  showCart();
}

// REMOVE ITEM
function removeItem(index){

  cart.splice(index,1);

  localStorage.setItem("cart",JSON.stringify(cart));

  showCart();
}

// SHOW CART
function showCart(){

  let cartItems = document.getElementById("cartItems");

  let total = 0;

  if(cartItems){

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

      total += item.price;

      cartItems.innerHTML += `

        <li class="cart-item">

          ${item.name} - ₹${item.price}

          <button class="remove-btn"
            onclick="removeItem(${index})">

            Remove

          </button>

        </li>
      `;
    });

    if(document.getElementById("total")){
      document.getElementById("total").innerText = total;
    }

    if(document.getElementById("finalTotal")){
      document.getElementById("finalTotal").innerText = total;
    }
  }
}

// PLACE ORDER
function placeOrder(){

  alert("🎉 Order Placed Successfully!");

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}

// DARK MODE
function toggleDark(){

  document.body.classList.toggle("dark");
}

// INIT
showCart();

