let s = JSON.parse(localStorage.getItem("cart1"));
     console.log(s);

     var x = document.getElementById("wall");
     appendItems(s)

     function appendItems(items_array1) {
         items_array1.forEach(function(item) {
            console.log(item)
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = item.strMealThumb;

            let name = document.createElement("h2");
            name.innerText = item.strMeal;

            let price = document.createElement("h1");
            price = Math.random() * 500;
            price = Math.floor(price);

            let btn = document.createElement("button");
            btn.textContent = "Remove Dish";
            btn.addEventListener("click", function() {
                div.remove();
            });

            div.append(img,name, price, btn);
            x.append(div);

           

         });

       
     }