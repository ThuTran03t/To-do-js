var product = [{											
	id: 'SP1',											
	name: 'Áo dài thêu họa tiết 111111',											
	img: 'https://quyennguyen.vn/wp-content/uploads/2020/10/ao-dai-mau-trang-ADT92.jpg',											
	price: 122000,											
	},											
	{											
	id: 'SP2',											
	name: 'Áo dài truyền thống',											
	img: 'https://image.thanhnien.vn/w1024/Uploaded/2022/pcwvovbb/2022_08_26/ao-dai-3-2961.jpeg',											
	price: 400000,											
	},											
	{											
	id: 'SP3',											
	name: 'Áo dài',											
	img: 'https://huyenthai.vn/wp-content/uploads/2019/12/ao-dai-theu-3D-HT03-huyen-thai-3.jpg',											
	price: 350000,											
	},											
	{											
	id: 'SP4',											
	name: 'Áo dài hiện đại',											
	img: 'https://i1.wp.com/www.hienthaoshop.com/wp-content/uploads/2017/09/ao-dai-vietnam-sky-blue-double-layers.jpg?fit=800%2C945&ssl=1',											
	price: 564000,											
	},											
	{											
	id: 'SP5',											
	name: 'Áo dài hiện đại',											
	img: 'https://huyenthai.vn/wp-content/uploads/2019/12/ao-dai-theu-3D-HT03-huyen-thai-3.jpg',											
	price: 654000,											
	},											
	{											
	id: 'SP6',											
	name: 'Áo dài hiện đại',											
	img: 'https://image.thanhnien.vn/w1024/Uploaded/2022/pcwvovbb/2022_08_26/ao-dai-3-2961.jpeg',											
	price: 123000,											
	},											
	{											
	id: 'SP7',											
	name: 'Áo dài hiện đại',											
	img: 'https://image.thanhnien.vn/w1024/Uploaded/2022/pcwvovbb/2022_08_26/ao-dai-3-2961.jpeg',											
	price: 345000,											
	},											
	{											
	id: 'SP8',			
	name: 'Áo dài hiện đại',
	img: 'https://image.thanhnien.vn/w1024/Uploaded/2022/pcwvovbb/2022_08_26/ao-dai-3-2961.jpeg',							
	price: 258000,							
	},							
];																				
function Save() {							
localStorage.setItem('listProduct', JSON.stringify(product));							
}							
//lấy sản phẩm							
function load() {							
product = JSON.parse(localStorage.getItem('listProduct'));							
}							
//xuất sản phẩm ra html							
if (localStorage.getItem('listProduct') != null) {							
load();							
}							
var listLocal = function() {							
var listproduct = '';							
for (var i in product) {							
var data = JSON.parse(JSON.stringify(product[i]));							
							
var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';							
listproduct += '<div class="card product p-2" styte="width:auto">';							
listproduct += '<img class="card-img-top" src="' + data.img + '" alt="...">';							
listproduct += '<div class="card-title product-title text-center h5" > + data.name +	</div>';							
listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +data.id +	'" data-name=" '+ data.name +' " data-img=" '+ data.img +'	" data-price=" '+ data.price +' " onclick=tks()">';
	listproduct += '<a>';							
	listproduct += '<i class="fas fa-cart-plus"></i>';							
	listproduct += '</a>';							
	listproduct += '</span>';							
	listproduct += '</div>';
	listproduct += '</div>';							
								
	document.getElementById('banchay').innerHTML += listproduct;							
	}							
	Save();							
	};							
	listLocal();							
	localStorage.clear();						