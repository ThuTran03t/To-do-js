var man= [
    {
        id:1,
        name:"The Cosmo (Đen) Quần short kaki",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://ragus.vn/wp-content/uploads/2019/01/ao-so-mi-nam-tay-dai-co-tru-linen-routine-7.jpg"
    },
    {
        id:2,
        name:"Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "389.000",
        image: "https://cf.shopee.vn/file/22a2d2cdc458b9f99a24d120f3fb84dd"
    },
    {
        id:3,
        name:"The Cosmo (Đen) Quần short kaki",
        code: "TC1025011BA",
        price: "290.000",
        image: "https://ragus.vn/wp-content/uploads/2018/12/Qu%E1%BA%A7n-short-v%E1%BA%A3i-Routine-slim-c%E1%BA%A1p-chun-sau.jpg"
    },
    {
        id:4,
        name:"The Cosmo (Đen) Quần short kaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://ragus.vn/wp-content/uploads/2019/01/ao-so-mi-nam-tay-dai-co-tru-linen-routine-7.jpg"
    }

];
var women = [
    {
        id:1,
        name:"Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://i.pinimg.com/originals/d5/32/4f/d5324fdb57c0e7f502df8db9733162eb.jpg"
    },
    {
        id:2,
        name:"Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://i.pinimg.com/736x/34/e0/5a/34e05a3b76814c2c4f134907c595d83a.jpg"
    },
    {
        id:3,
        name:"Áo khoác",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://cf.shopee.vn/file/23bf620863c6d9fae5fa0da517f89e64"
    },
    {
        id:4,
        name:"Áo thun Mỹ",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://dosityna.com/wp-content/uploads/2019/03/4b18d884b0b852e60ba9.jpg"
    }
]
function listProducts(){
    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+man[i].image+'" class="card-img-top" alt="..."> <br>' 
        
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+man[i].name+'</h5>';
        demo += '<p class="card-text"> '+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
 

    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+women[i].image+'" class="card-img-top" alt="...">'
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+women[i].name+'</h5>';
        demo += '<p class="card-text"> '+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}
