


(async () => {
   let response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://www.shazam.com/shazam/v2/en-US/UA/web/-/tracks/country-chart-UA?pageSize=200&startFrom=0"
  );

   data = await response.json();
  let chart1 = data.chart;
  for (var i = 0; i < chart1.length; i++) {
    let ch =chart1[i];
    let j = i+1;
    let st = "Номер в чарте "+j+"  :"+ch.url;
    let link = ch.url;
    console.log("Номер в чарте "+j+"  :"+ ch.url);
    document.getElementsByClassName("wrap")[0].innerHTML = document.getElementsByClassName("wrap")[0].innerHTML +'<p>'+'<a href="'+link+'">'+st+'</a>'+'</p>';
  }
  return console.log(chart1);

})();
