const API_URL = "https://5f871d4b49ccbb0016176fe1.mockapi.io/ai";

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
}
var id;
function save() {
    let hotel = [];
    callAPI("hotels", "GET", null).then((res) => {
        hotel = res.data;})
    for ( let i = 0; i < hotel.length; i++){
        id = i;
    }
    var name = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    var img = document.getElementById("imgproduct").value;
    let image = img.split("\\")[2];
    if (name | detail | note | (price != "")) {
        var oneProduct = {
            id: id,
            name: name,
            price: price,
            note: note,
            detail: detail,
            img: "images/" + image,
        };
        callAPI("hotels","POST", oneProduct).then((response) => {
            show();
            alert("Thanh cong");
        });
    } else {
        reset();
    }
}
function show(){
  var hotels=[];
  callAPI("hotels","GET",null).then((res)=>{
    hotels=res.data;
    let row="";
    for(i in hotels){
      row+="<tr>";
      row+="<td>"+hotels[i].id+"</td>";
      row+="<td>"+hotels[i].name+"</td>";
      row+="<td>"+"<img src=' "+ hotels[i].img+ "'style='with:80px; height:80px;'>"+"</td>";
      row+="<td>"+hotels[i].price+"</td>";
      row+="<td>"+hotels[i].note +"</td>";
      row+="<td>" +'<button type="button" onclick="editsp(${i})" class="btn btn-success"> Edit</button>'+"</td>";
      row+="<td>" +
      '<button type="button" onclick="deletesp(${i})" class="btn btn-danger">Delete</button>'+"</td>";

    }
    document.getElementById("tab").innerHTML=row;

  });
}
function editsp(id){
  document.getElementById("huy").style.display="block";
  document.getElementById("themmoi").style.display="none";
  document.getElementById("divAddHotel").style.display="block";
  callAPI('hotels/${id}',"GET",null).then((res)=>{
    let hotel;
    hotel=res.data;
    console.log(hotel);
    var name=document.getElementById("nameproduct").value=hotel.name;
  var name=document.getElementById("priceproduct").value=hotel.price;
  var name=document.getElementById("noteproduct").value=hotel.note;
  var name=document.getElementById("detailproduct").value=hotel.detail;
  });
  document.getElementById("ok").style.display="none";
  document.getElementById("edit").style.display="block";
  document.getElementById(
    "edit"
  ).innerHTML='<button type="button" onclick="editok(${id}) "class="btn-success">save</button>';
}
function editok(id){
  document.getElementById("huy").style.display="none";
  document.getElementById("themmoi").style.display="block";
document.getElementById("divAddHotel").style.display="none";
  var name=document.getElementById("nameproduct").value;
  var name=document.getElementById("priceproduct").value;
  var name=document.getElementById("noteproduct").value;
  var name=document.getElementById("detailproduct").value;
  let img=document.getElementById("imgproduct").value;
  var image=img.split("\\")[2];

  var oneProduct={
    id:id,
    name:name,
    price:price,
    note:note,
    detail:detail,
    img:"images/"+image,
  }
  callAPI("hotels","PUT",oneProduct).then((response) =>{
    show();
    alert("Thêm phòng thành công");
  });
  if
  (document.getElementById("edit").style.display="block"){
    document.getElementById("edit").style.display="none";
    document.getElementById("ok").style.display="block";

  }else{
    document.getElementById("edit").style.display="none";
    document.getElementById("ok").style.display="block";
  }
  reset();
}
function deletesp(id){
  var r=confirm("bạn có chắc muốn xóa sản phẩm?");
  if (r===true){
    callAPI("hotels","DELETE",null).then((response) =>{
      show();
      alert("Thêm phòng thành công");
    });

  } else{
    window.location.href="adminHotel.html";
  }
}
function reset(){
  document.getElementById("nameproduct").value="";
  document.getElementById("priceproduct").value="";
  document.getElementById("noteproduct").value="";
  document.getElementById("detailproduct").value="";
  document.getElementById("imgproduct").value="";

}