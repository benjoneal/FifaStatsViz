// get the data from the json file
d3.json("radar.json").then(data => {
  var datacut = data.slice(0,1)
  var playersname = datacut.map((sample) => { 
    return sample.name;
  });
  var playersacc = datacut.map((sample) => { 
    return sample.acceleration;
  });
  var playershot = datacut.map((sample) => { 
    return sample.shotpower;
  });
  var playeragg = datacut.map((sample) => { 
    return sample.aggression;
  });
  var playerpos = datacut.map((sample) => { 
    return sample.positioning;
  });
  var playergk = datacut.map((sample) => { 
    return sample.gkreflexes;
  });
  var datacut2 = data.slice(1,2)
  var playersname2 = datacut2.map((sample) => { 
    return sample.name;
  });
  var playersacc2 = datacut2.map((sample) => { 
    return sample.acceleration;
  });
  var playershot2 = datacut2.map((sample) => { 
    return sample.shotpower;
  });
  var playeragg2 = datacut2.map((sample) => { 
    return sample.aggression;
  });
  var playerpos2 = datacut2.map((sample) => { 
    return sample.positioning;
  });
  var playergk2 = datacut2.map((sample) => { 
    return sample.gkreflexes;
  });
  var datacut3 = data.slice(2,3)
  var playersname3 = datacut3.map((sample) => { 
    return sample.name;
  });
  var playersacc3 = datacut3.map((sample) => { 
    return sample.acceleration;
  });
  var playershot3 = datacut3.map((sample) => { 
    return sample.shotpower;
  });
  var playeragg3 = datacut3.map((sample) => { 
    return sample.aggression;
  });
  var playerpos3 = datacut3.map((sample) => { 
    return sample.positioning;
  });
  var playergk3 = datacut3.map((sample) => { 
    return sample.gkreflexes;
  });
  var datacut4 = data.slice(3,4)
  var playersname4 = datacut2.map((sample) => { 
    return sample.name;
  });
  var playersacc4 = datacut4.map((sample) => { 
    return sample.acceleration;
  });
  var playershot4 = datacut4.map((sample) => { 
    return sample.shotpower;
  });
  var playeragg4 = datacut4.map((sample) => { 
    return sample.aggression;
  });
  var playerpos4 = datacut4.map((sample) => { 
    return sample.positioning;
  });
  var playergk4 = datacut4.map((sample) => { 
    return sample.gkreflexes;
  });
  var datacut5 = data.slice(4,5)
  var playersname5 = datacut5.map((sample) => { 
    return sample.name;
  });
  var playersacc5 = datacut5.map((sample) => { 
    return sample.acceleration;
  });
  var playershot5 = datacut5.map((sample) => { 
    return sample.shotpower;
  });
  var playeragg5 = datacut5.map((sample) => { 
    return sample.aggression;
  });
  var playerpos5 = datacut5.map((sample) => { 
    return sample.positioning;
  });
  var playergk5 = datacut5.map((sample) => { 
    return sample.gkreflexes;
  });
//start adding radar chart code
var mychart = new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["Acceleration", "Shot Power", "Aggression", "Positioning", " GK Reflexes"],
    datasets: [
      {
        label: [playersname],
        fill: true,
        backgroundColor: "rgba(51,230,255,0.2)",
        borderColor: "rgba(51,230,255,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [playersacc, playershot, playeragg, playerpos, playergk]
      }, {
        label: [playersname2],
        fill: true,
        backgroundColor: "rgba(255,76,51,0.2)",
        borderColor: "rgba(255,76,51,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [playersacc2, playershot2, playeragg2, playerpos2, playergk2] },
        {
          label: [playersname3],
          fill: true,
          backgroundColor: "rgba(255,195,0,0.2)",
          borderColor: "rgba(255,195,0,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [playersacc3, playershot3, playeragg3, playerpos3, playergk3] },
          {
            label: [playersname4],
            fill: true,
            backgroundColor: "rgba(51,255,80,0.2)",
            borderColor: "rgba(51,255,80,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [playersacc4, playershot4, playeragg4, playerpos4, playergk4] },
            {
              label: [playersname5],
              fill: true,
              backgroundColor: "rgba(241,255,51,0.2)",
              borderColor: "rgba(241,255,51,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(179,181,198,1)",
              data: [playersacc5, playershot5, playeragg5, playerpos5, playergk5] }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Player Stats'
    }
  }
});
});
