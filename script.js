function showDetail(name, desc, size, material, price){

document.getElementById("modal").style.display="flex";

document.getElementById("productName").innerText=name;
document.getElementById("productDesc").innerText=desc;
document.getElementById("productSize").innerText=size;
document.getElementById("productMaterial").innerText=material;
document.getElementById("productPrice").innerText=
Number(price).toLocaleString("id-ID");

const waNumber = "6281234567890";

const message =
`Halo, saya ingin memesan produk:

${name}

Harga: Rp${Number(price).toLocaleString("id-ID")}

Apakah masih tersedia?`;

document.getElementById("waButton").href=
`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

window.onclick=function(e){
let modal=document.getElementById("modal");

if(e.target==modal){
modal.style.display="none";
}
}