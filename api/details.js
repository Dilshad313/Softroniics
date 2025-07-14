let url=window.location.href;
console.log(url);

let urlParams = new URLSearchParams(url.split("?")[1]);
console.log(urlParams);

let id = urlParams.get("id");
console.log(id);
let data;

async function getDtails(){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    data = await res.json();
    console.log(data);


document.getElementById("container2").innerHTML = `
    <div id="container1" style="display: flex; justify-content: center; align-items: center; gap: 50px; margin-left: 30px; margin-top: 30px;">
        <div id="image">
            <img id="img1" src="${data.image}" alt="${data.title}" width="300px" height="300px">
        </div>
        <div id="productDetails" style="display: flex; flex-direction: column; gap: 20px;" font-size="20px">
            <div id="brand">${data.category}</div>
            <div id="title">${data.title}</div>
            <div id="price">Price: $${data.price}</div>
            <div id="offer">${data.description}% offer</div>
            <div id="rating">Rating: ${data.rating.rate} (${data.rating.count})</div>
        </div>
    </div><br>
    <div id="btns" style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-left: 30px; margin-top: 30px;">
        <button id="buy" style="background-color:green; color: white; width: 200px; height: 40px; border:none;">Buy Now</button>
        <button id="add" onClick="Addtocart()" style="background-color:red; color: white; width: 200px; height: 40px; border:none;">Add to cart</button>
    </div>`
}

getDtails()