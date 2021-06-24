$(function () {
  showHomeData();
  $("#user").on("click", ".btn-danger", deleteData);

  $("#user").on("click", ".nav-link", showData);
  
  $("#addBtn").click(addData);
  $("#Clothing").click(showClothing);
  $("#Acessories").click(showAcessories);
  $("#3DModel").click(show3DModel);
  $("#Home").click(showHomeData);
  
  
});


function addData() {
  var Name = $("#Name").val();
  var Anime = $("#Anime").val();
  var Type = $("#Type").val();
  var Price = $("#Price").val();
  var Description = $("#Descprition").val();
  var Image = $("#Image").val();
  $.ajax({
    url: "http://localhost:4000/api/merch/",
    method: "PUT",
    data: { Name, Anime, Type, Price, Description, Image },
    success: function (response) {
      console.log(response);
      showHomeData();
    },
  });
}



function deleteData() {
  var btn = $(this);
  var parentDiv = btn.closest(".users");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $("#footer").removeClass("fixed-bottom");
  $.ajax({
    url: "http://localhost:4000/api/merch/" + id,
    method: "DELETE",
    success: function (response) {
    location.reload;
    },
  });
}
function showHomeData() {
  $.ajax({
    url: "http://localhost:4000/api/merch",
    method: "GET",
    success: function (response) {
      console.log(response);
      $("#footer").removeClass("fixed-bottom");
      var temp = $("#user");
      temp.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        temp.append(
          `<a class="nav-link" id="fulldata"><div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button></br>
          </a>`
          );
      
 
        }
    },
  });
}
function show3DModel() {
  $.ajax({
    url: "http://localhost:4000/api/merch",
    method: "GET",
    success: function (response) {
      console.log(response);
      $("#footer").removeClass("fixed-bottom");
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="3D Model")
        temp.append(
          `<a class="nav-link" id="fulldata"><div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button></a>`
        );
      
 
      }
    },
  });
}
function showClothing() {
  $.ajax({
    url: "http://localhost:4000/api/merch",
    method: "GET",
    success: function (response) {
      console.log(response);
      $("#footer").removeClass("fixed-bottom");
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="Clothing")
        temp.append(
          `<a class="nav-link" id="fulldata"><div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button></a>`
        );
       
       
      }
    },
  });
}



function showAcessories() {
  $.ajax({
    url: "http://localhost:4000/api/merch",
    method: "GET",
    success: function (response) {
      console.log(response);
      var temp = $("#user");
      temp.empty();
      $("#footer").removeClass("fixed-bottom");
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="Acessories")
        temp.append(
          `<a class="nav-link" id="fulldata"><div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button></a>`
        );
       
      }
    },
  });
}

function showData() {
  var btn = $(this);
  var parentDiv = btn.closest(".users");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url: "http://localhost:4000/api/merch/"+id,
    method: "GET",
    success: function (rec) {
      console.log(rec);
      var temp = $("#user");
      temp.empty();
      temp.append(
          `<div class="d-flex justify-content-between" data-id="${rec._id}">
          <div><img src="${rec.Image}" alt="image"></div> 
          <div> <h2>${rec.Name}</h2>
          <div class="text-success"><h1> Rs. ${rec.Price}</div>
          <div> Anime: ${rec.Anime}
          <div><h2> Description: </h2><p>${rec.Description} 
          <div> <button class="btn btn-warning btn-lg buybtn float-right">Buy</button></br>`
          );
      $("#footer").addClass("fixed-bottom");
      $("#addbtn").hide();
       
        
      },
    });
  }
  
 









