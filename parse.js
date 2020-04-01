


(async () => {
   let response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://www.shazam.com/shazam/v2/en-US/UA/web/-/tracks/country-chart-UA"
  );

   data = await response.json();
  let chart1 = data.chart;
  for (var i = 0; i < chart1.length; i++) {
    let ch =chart1[i];
    let j = i+1;
    console.log("Номер в чарте "+j+"  :"+ ch.url);
  }
  return console.log(chart1);
})();
