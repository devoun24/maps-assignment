var mymap = L.map('map').setView([29.155, -81.865], 8.00);

  L.tileLayer('https://api.mapbox.com/styles/v1/devoun24/cjoym6zc71gg02rmhpeuyto53/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2b3VuMjQiLCJhIjoiY2pveWx3bnRpMDBoaTNrbzFwNzFsMGlvMiJ9.tXgkC4n6J0V_Yr8NY7otSQ',
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  minZoom: 8
}).addTo(mymap);

var gainesville = L.marker([29.626769, -82.340301]).addTo(mymap);
  gainesville.bindPopup("<b>Gainesville Sun</b><br>The Sun covers Gainesville and North-Central Florida.");

var ocala = L.marker([29.169582, -82.158755]).addTo(mymap);
  ocala.bindPopup("<b>The Star-Banner</b><br>The Star-Banner serves Marion county and surrounding communities.");

var orlando = L.marker([28.551394, -81.378696]).addTo(mymap);
  orlando.bindPopup("<b>Orlando Sentinel</b><br>The Sentinel is the primary newspaper of Orlando and serves Central Florida.");

var daytona = L.marker([29.229254, -81.049258]).addTo(mymap);
  daytona.bindPopup("<b>The Daytona Beach News-Journal</b><br>The News-Journal is a Florida daily newspaper serving Volusia and Flagler counties.");
