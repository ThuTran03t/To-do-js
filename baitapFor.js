const courseList = document.querySelector('#add');
courseList.addEventListener('click',Add);
function Add(){
    var pname = frm.product.value;
    var img = frm.img.value;
    var price =frm.price.value;
    var image = img.slice(12);
    var html = `
            <div class="card">
            <img class="card-img-top" src="./img/${image} alt="Card image cap " style="height: 350px">
            <div class="card-body">
                <h5 class="card-title">${pname}</h5>
                <p class="card-text" id="price">${price}</p>
                <a href="#" class="btn btn-success">Đặt mua</a>
                </div>
                </div>
         `;

    var app = document.querySelector('.row');
    app.innerHTML +=html;


}