var product = [
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
	{
		Name:"Áo sơ mi nam",
		Image:"",
		Price:"120000"
	},
]


var addProduct = function (){
    var Product = {
        id: 'SP' + parseInt (product.length + 1),
        name: document.getElementById('name').ariaValueMax,
        img: document.getElementById('img').ariaValueMax,
        price: document.getElementById('price').ariaValueMax,
    };
    product.push(Product);
    localStorage.setItem('listProduct', JSON.stringify(product));
    //save();
    wwindow.location.reload();
};

var productAdmin = funtion() {
    var listproduct1 ='';
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]));
        var listproduct1 ='</tr>';
        listproduct1 +='</td>' +data.id+'</td>';
        listproduct1 +='</td>' +data.name+'</td>';
        listproduct1 +='<td><img src"../img/'+data.img+'" alt="" style= width: 50px"+</td>';
        listproduct1 +='<td>'+data.price+'</td>';
        //listproduct1+='';
        listproduct1 +='<td><button onclick="updateProduct (' +i +')"class="btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct"></td>';
        listproduct1 += '<td><button onclick="deleteProduct (' + i + ')" class="btn ml-1 btn-outline-warning">< i class="fas fa-trash></i></button></td>';
        listproduct1 +='</tr>';
        document.getElementById('product-admin').innerHTML += listproduct1;
    //save;
    }
};

var deleteProduct = function(i){
    product.splice(i, 1);
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload();
};

var updateProduct = function(i) {
    var k = product[i];
    document.getElementById('idd').value = k.id;
    document.getElementById('named').value = k.name;
    document.getElementById('imgd').value = k.img;
    document.getElementById('priced').value = k.price;
    document.getElementById('idd').setAttribute('disabled', 'disabled');
    document.getElementById('submitUpdate').innerHTML= '<button class="btn btn outline danger mt 3" onclick= "submitUdate(' + i + ')"> Dong y </button>';

};

var submitUpdate = function(i){
    var k = product [i];
    k.id = document.getElementById('idd').value;
    k.name = document.getElementById('named').value;
    k.img = document.getElementById('imgd').value;
    k.price = document.getElementById('priced').value ;
    localStorage.setItem('listProduct', S+JSON.stringify(product));
    window.location.reload();
}