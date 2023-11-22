let String = " ";
function addProduct() {
    let productId = document.getElementById("productId").value;
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    document.getElementById("productIdError").innerHTML = " ";
    document.getElementById("productNameError").innerHTML = " ";
    document.getElementById("productPriceError").innerHTML = " ";

    if(productId == "" || productName == "" || productPrice == ""){
        document.getElementById("productIdError").innerHTML = "Please enter the details";

    }else{
        String += "<tr><td>" + productId + 
        "</td><td>" + productName + 
        "</td><td>" + productPrice + 
        "</td></tr>"
        document.getElementById("tBody").innerHTML = String;
    }
console.log(String);
}