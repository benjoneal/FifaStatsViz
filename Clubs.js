var nationality = ["Argentina", "Portugal", "Brazil", "Spain", "Belguim",
  "Belguim", "Crotia", "Uraguay", "Spain", "Slovenia"];
var wage = [565.0, 405.0, 290.0, 260.0, 355.0, 340.0,
  420.0, 455.0, 380.0, 94.0];

var trace1 = {
  x: nationality,
  y: wage,
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Nationality vs Wage of the Top 10 Players in FIFA 19",
  xaxis: { title: "Nationality" },
  yaxis: { title: "Wage (in Euros)" }
};

Plotly.newPlot("bar-plot", data, layout);