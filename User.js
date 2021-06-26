$(function () {
 
    $("#signupform").hide();
    $("#loginform").hide();
    $("#login").click(showlogin);
    $("#Signup").click(showsignup);
    $("#submit").click(addUser);
    $("#loginsubmit").click(checkUser);
  });



  function showsignup() {
    var temp = $("#user");
    temp.empty();
    $("#signupform").show();
    $("#loginform").hide();
    $("#footer").addClass("fixed-bottom");
  }
  function showlogin() {
    $("#signupform").hide();
    var temp = $("#user");
    temp.empty();
    $("#loginform").show();
    $("#footer").addClass("fixed-bottom");
  }
  
 function enableBuy() {
   
    $(".buybtn").removeAttr("disabled");
  }

  function addUser() {
    var Name = $("#signupName").val();
    var Email = $("#signupEmail").val();
    var Password = $("#signupPassword").val();
     
    $.ajax({
      url: "http://localhost:4000/api/users/register",
      method: "POST",
      data: { Name, Email,Password },
      success: function (response) {
        console.log(response.data)
       alert("Registered Successfulyy");
      },
      error: function (response) {
   
        alert("Email Already Existed");
      },
    });
  }
  
  function checkUser() {
    var Email = $("#loginEmail").val();
    var Password = $("#loginPassword").val();
    $.ajax({
      url: "http://localhost:4000/api/users/login",
      method: "POST",
      data: { Email,Password },
      success: function (response) {
        getuserrole();
        alert("Logged in Successfully");
     

      },
      error: function (response) {
        console.log(response)
        alert("Entered Email or Password is incorrect");
      },
    });
  }


  function getuserrole() {
    $.ajax({
      url: "http://localhost:4000/api/users",
      method: "GET",
      success: function (response) {
        console.log(response);
        var temp = $("#user");
        temp.empty();
        
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
           
              
             if(rec.Role==="admin" && rec.Email==="")
             {
             console.log("hello admin");
             }
        
   
          }
      },
    });
  }