let user = [];
let temp=``;
const uimaker=()=>{
    user.map((item)=>{
        temp +=`
        <div>
            <img src="${item.productImg}" alt="" id="img">
            <h5>${item.productName}</h5>
            <h6>${item.productPrice}</h6>
            <p>${item.productDetail}</p>
        </div>        
        `
    })
    document.getElementById("output").innerHTML= temp ;
}

document.querySelector(".form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let product = {
        productImg : document.getElementById("product").value,
        productName : document.getElementById("productname").value,
        productPrice : document.getElementById("price").value,
        productDetail : document.getElementById("descrition").value,
    };

    user.push(product);
    uimaker();
})