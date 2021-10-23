function addPerson(){
    var firstName = $("#first_name")[0].value;
    var lastName = $("#last_name")[0].value;
    var email = $("#email")[0].value;

    $.ajax({
                 type: "POST",
                 url: "http://localhost:3000/api/auth",
                 data: JSON.stringify({
                                          "firstName": firstName,
                                          "lastName": lastName,
                                          "email": email
                                      }),
                 contentType: "application/json; charset=utf-8",
                 crossDomain: true,
                 dataType: "json",
                 success: function (data, status, jqXHR) {
                    alert("Person added successfully");
                 },
                 error: function (jqXHR, status) {
                     console.log(jqXHR);
                     alert('failed with status code:' + status.code);
                 }
              });
}

function fetchPeople(){
  $.ajax({
                 type: "GET",
                 url: "http://localhost:3000/api/user",
                 contentType: "application/json; charset=utf-8",
                 crossDomain: true,
                 dataType: "json",
                 success: function (users, status, jqXHR) {
                     var tBody = "";
                     $.each(users.users,function(index,user){
                        tBody+="<tr><td>"+user.firstName+"</td><td>"+user.lastName+"</td><td>"+user.email+"</td></tr>";
                     });

                     $("#fetch_people_table thead").empty();
                     $("#fetch_people_table tbody").empty();
                     $("#fetch_people_table thead").append("<th>First Name</th><th>Last Name</th><th>Email</th>");
                     $("#fetch_people_table tbody").append(tBody);
                 },
                 error: function (jqXHR, status) {
                     console.log(jqXHR);
                     alert('failed with status code:' + status.code);
                 }
              });
}