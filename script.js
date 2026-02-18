
function login() {
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;

    if(phone === "admin" && pass === "1234") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "home.html";
    }
}

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
}

function goCart() {
    window.location.href = "cart.html";
}

// SHOW CART
if(document.getElementById("cartList")) {
    let list = document.getElementById("cartList");
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ৳" + item.price;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: ৳" + total;
}
