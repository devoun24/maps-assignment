var mymap = L.map('map').setView([27.960, -82.913], 6.00);

  L.tileLayer('https://api.mapbox.com/styles/v1/devoun24/cjoym6zc71gg02rmhpeuyto53/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2b3VuMjQiLCJhIjoiY2pveWx3bnRpMDBoaTNrbzFwNzFsMGlvMiJ9.tXgkC4n6J0V_Yr8NY7otSQ',
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 6
}).addTo(mymap);


for ( let i = 0; i < parks.length; i++ ) {
  L.marker( [ parks[i].latitude, parks[i].longitude ] )
  .bindPopup( '<h3>' + parks[i].placeName + '</h3>' + '<p>' +
      parks[i].descrip + '</p>')
  .addTo( mymap );
}
