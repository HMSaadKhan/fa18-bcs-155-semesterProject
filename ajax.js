$(function(){
  loadData();
 
})
function loadData(){
  $.ajax ({
      url:"http://localhost:4000/api/merch",
      method:"GET",
      success: function(response){
          console.log(response);
          var temp = $("#user");
          temp.empty();
          for (var i = 0; i < response.length; i++){
              var rec = response[i];
                  
              temp.append(`<div class = "list"><p>${rec.id}</p><h3><span>Email:</span> ${rec.Name}`)
          }
      }
  })
}