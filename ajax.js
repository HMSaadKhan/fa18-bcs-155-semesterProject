$(function(){
  loadData();
 $("#user").on("click",".btn-danger",deleteData)
});

function deleteData(){
  var btn = $(this);
  var parentDiv = btn.closest(".users");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax ({
    
      url:"http://localhost:4000/api/merch/"+id,
      method:"DELETE",
      success: function(response){
          loadData();
      }
  })
}
function  loadData(){
  $.ajax ({
      url:"http://localhost:4000/api/merch",
      method:"GET",
      success: function(response){
          console.log(response);
          var temp = $("#user");
          temp.empty();
          for (var i = 0; i < response.length; i++){
              var rec = response[i];
                  
              temp.append(`<div class="d-flex justify-content-center users" data-id="${rec._id}"><h3> ${rec.Name}</h3><button  class="btn btn-danger btn-sm float-right">Delete Button</button></div>`)
          }
      }
  })
}