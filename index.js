function nextProduct(){
    productId++;
    var response;
    fetch('https://fakestoreapi.com/products/'+productId)
            .then(res=>res.json())
            .then(response=>{
                document.getElementById("viewproductId").innerHTML = response.id;
                document.getElementById("viewproductTitle").innerHTML = response.title;
                document.getElementById("viewproductPrice").innerHTML = response.price;
                document.getElementById("viewproductDescription").innerHTML = response.description;
                document.getElementById("viewproductCategory").innerHTML = response.category;
                document.getElementById("viewproductPic").src = response.image;
                document.getElementById("viewproductRating").innerHTML = response.rating.rate;
                document.getElementById("viewproductSell").innerHTML = response.rating.count;
            })
   
}

let productId = 0;

let nextBtn = document.getElementById("viewNextBtn");
nextBtn.addEventListener("click", nextProduct);

nextProduct();