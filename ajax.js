$(function () {
  showHomeData();
  $("#user").on("click", ".btn-danger", deleteData);
  $("#user").on("click", ".btn-warning", updateData);
  $("#addBtn").click(addData);
  $("#Clothing").click(showClothing);
  $("#Acessories").click(showAcessories);
  $("#3DModel").click(show3DModel);
  $("#Home").click(showHomeData);
});

function updateData() {
  var Name = $("#Name").val();
  var Anime = $("#Anime").val();
  var Type = $("#Type").val();
  var Price = $("#Price").val();
  var Description = $("#Descprition").val();
  var Image = $("#Image").val();
  console.log(Name);
  console.log(Anime);
  console.log(Type);
  console.log(Price);
  console.log(Description);
  console.log(Image);
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

function addData() {
  var Name = $("#Name").val();
  var Anime = $("#Anime").val();
  var Type = $("#Type").val();
  var Price = $("#Price").val();
  var Description = $("#Descprition").val();
  var Image = $("#Image").val();
  console.log(Name);
  console.log(Anime);
  console.log(Type);
  console.log(Price);
  console.log(Description);
  console.log(Image);
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
  $.ajax({
    url: "http://localhost:4000/api/merch/" + id,
    method: "DELETE",
    success: function (response) {
      showHomeData();
    },
  });
}
function showHomeData() {
  $.ajax({
    url: "http://localhost:4000/api/merch",
    method: "GET",
    success: function (response) {
      console.log(response);
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];

        temp.append(
          `<div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button>`
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
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="3D Model")
        temp.append(
          `<div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button>`
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
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="Clothing")
        temp.append(
          `<div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button>`
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
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        if(rec.Type==="Acessories")
        temp.append(
          `<div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.Image}" alt="image"><p>  ${rec.Name}<p>Price: ${rec.Price} 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button>`
        );
        else
        showEmpty();
      }
    },
  });
}
function showEmpty() {
 
      var temp = $("#user");
      temp.empty();
       temp.append(
          `<div class="d-flex justify-content-center users" >
          <h3>No data avaiable`
        );
      
}