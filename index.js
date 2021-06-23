$(function(){
    page1();
    $("#btn2").click(page2)
    $("#btn1").click(page1)
  })
  
  function page1(){
    $("#btn1").attr('disabled','disabled');
    $("#btn2").removeAttr('disabled');
    $.ajax ({
        url:"https://reqres.in/api/users",
        method:"GET",
        success: function(response){
            console.log(response);
            var temp = $("#user");
            temp.empty();
            for (var i = 0; i <=6; i++){
                var rec = response.data[i]
                temp.append(`<div class = "list"><p>${rec.id}</p><h3><span>Email:</span> ${rec.email}</h3><h4><span>first name:</span>${rec.first_name}</h4><h4><span>last name:</span>${rec.last_name}</h4><p><img src="'${rec.last_name}'" alt=""><p></div><br>`)
            }
        }
    })
  }
  function page2(){
    $("#btn2").attr('disabled','disabled');
    $("#btn1").removeAttr('disabled');
    $.ajax ({
        url:"https://reqres.in/api/users?page=2",
        method:"GET",
        success: function(response){
            console.log(response);
            var temp = $("#user");
            temp.empty();
            for (var i = 0; i <= 6; i++){
                var rec = response.data[i]
                temp.append(`<div class = "list"><p>${rec.id}</p><h3><span>Email:</span> ${rec.email}</h3><h4><span>first name:</span>${rec.first_name}</h4><h4><span>last name:</span>${rec.last_name}</h4><p><img src="${rec.last_name}" alt=""><p></div><br>`)
            }
        }
    })
  }