// 1000<900, 500<25, 500>not discount

// 993/1200*100

let price=600
if(price>1000){
    console.log("Discount is 10%");
    let j=(10/100)*1000;
    console.log("RS:",1000-j);
}
else if(price>500)
{
    console.log("Discount is 5% RS:475");
    let j=(5/100)*500;
    console.log("RS:",500-j)
}

else{
    console.log("Not Discount !!!")
}