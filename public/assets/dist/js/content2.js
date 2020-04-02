var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  
  Morris.Area({
    element: "morris-line-chart",
    data: [
      {
        m: "2015-01", // <-- valid timestamp strings
        a: 10000000
      },
      {
        m: "2015-02",
        a: 7000000
      },
      {
        m: "2015-03",
        a: 8000000
      },
      {
        m: "2015-04",
        a: 6000000
      },
      {
        m: "2015-05",
        a: 9000000
      },
      {
        m: "2015-06",
        a: 6500000
      },
      {
        m: "2015-07",
        a: 7000000
      },
      {
        m: "2015-08",
        a: 8000000
      },
      {
        m: "2015-09",
        a: 9000000
      },
      {
        m: "2015-10",
        a: 7500000
      },
      {
        m: "2015-11",
        a: 6500000
      },
      {
        m: "2015-12",
        a: 3500000
      }
    ],
    lineColors: ["#a5d9c7"],
    xkey: "m",
    ykeys: ["a"],
    labels: ["Sales"],
    pointSize: 0,
    lineWidth: 0,
    fillOpacity: 1,
    resize: true,
    behaveLikeLine: true,
    gridLineColor: "#e0e0e0",
    hideHover: "auto",
    xLabelFormat: function(x) {
      // <--- x.getMonth() returns valid index
      var month = months[x.getMonth()];
      return month;
    },
    dateFormat: function(x) {
      var month = months[new Date(x).getMonth()];
      return month;
    }
  });

$("#table_inventory").DataTable({
  scrollY: "250px",
  fixedHeader: true,
  scrollCollapse: true,
  paging: true,
  searching: true,
  info: true
});
