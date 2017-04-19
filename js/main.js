//   //
//   // document.getElementById("countryList").addEventListener("click",displayCountryList);
//   //
//   // function displayCountryList(){
//   //
//   //   document.getElementById("countryList").innerHTML = "working";
//   //     var countryDiv = document.createElement("div");
//   //
//   //     countryDiv.id = 'countryDivId';
//   //     countryDiv.style.width = "200px";
//   //     countryDiv.style.height = "300px";
//   //     countryDiv.style.background = "#77a4d4";
//   //
//   //
//   // }
//
//
// $(document).ready(function(){
//   $('#countryList').click(function(){
//       $('#listOfCountry').toggle();
//
//       var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//              // Typical action to be performed when the document is ready:
//              var response = xhttp.responseText;
//              response = JSON.parse(response);
//             var countries = response.countries;
//
//             var output = "";
//              for(var i =0; i<countries.length; i++){
//                output +=  '<img src =' + countries[i].image + '>' +
//
//                          '<button class="name">' + countries[i].name + '</button>' +
//                          '<hr>;'
//              }
//
//              document.getElementById('listOfCountry').innerHTML = output;
//
//           }
//         };
//
//         xhttp.open("GET", "countryList.json", true);
//         xhttp.send();
//   });


});
