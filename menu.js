let yashas = JSON.parse(localStorage.getItem("cart1")) || [];

    async function showData() {
        // let response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"); 
        let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await response.json();
        console.log(data);

        appendItems(data.categories)
        console.log(data.categories)
    }

    showData();

    function appendItems(items_array) {
        items_array.forEach(function(item) {
             
            console.log(item)
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = item.strCategoryThumb;

            let name = document.createElement("h2");
            name.innerText = item.strCategory;

            let price = document.createElement("h1");
            price = (Math.random() * 501) + 100;
            price = Math.floor(price);

            let btn = document.createElement("button");
            btn.textContent = "Add to Cart";
            btn.addEventListener("click", function() {
                showCart()
            });

            div.append(img, name, price,btn);
            wall.append(div);

            function showCart() {
                yashas.push(item);
                localStorage.setItem("cart1",JSON.stringify(yashas));
                 window.location.href = "cart.html"
            }

        });
    }