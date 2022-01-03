var user = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(user);

 function submitOrder() {

    let userDetailss = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("add").value,
        city: document.getElementById("city").value,
        pin: document.getElementById("pin").value
    };

    if(name.value == "" || phone.value == "" || add.value == "" || city.value == "" || pin.value == "") {
        alert("Fill form");
        return false;
    } else {
        true;
    }

    user.push(userDetailss);
    console.log(user);

    localStorage.setItem("userData", JSON.stringify(user));

    // ===================================================

// function submitOrder() {

    setTimeout(function() {
        alert("Your Order Accepted");
    },0);

    setTimeout(function() {
        alert("Your Order is being cooked");
    },3000);

    setTimeout(function() {
        alert("Your Order is Ready");
    },8000);

    setTimeout(function() {
        alert("Your Order is out for delivery");
    },10000);

    setTimeout(function() {
        alert("Your Order Delivered");
    },12000);

 }