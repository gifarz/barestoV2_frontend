//chart
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

// Dashboard 1 Morris-chart
Morris.Area({
  element: "morris-area-chart",
  data: [
    {
      period: "2010",
      iphone: 50,
      ipad: 80,
      itouch: 20
    },
    {
      period: "2011",
      iphone: 130,
      ipad: 100,
      itouch: 80
    },
    {
      period: "2012",
      iphone: 80,
      ipad: 60,
      itouch: 70
    },
    {
      period: "2013",
      iphone: 70,
      ipad: 200,
      itouch: 140
    },
    {
      period: "2014",
      iphone: 180,
      ipad: 150,
      itouch: 140
    },
    {
      period: "2015",
      iphone: 105,
      ipad: 100,
      itouch: 80
    },
    {
      period: "2016",
      iphone: 250,
      ipad: 150,
      itouch: 200
    }
  ],
  xkey: "period",
  ykeys: ["iphone", "ipad", "itouch"],
  labels: ["Penjualan", "iPad", "iPod Touch"],
  pointSize: 4,
  fillOpacity: 0,
  pointStrokeColors: ["#00bfc7", "#fb9678", "#9675ce"],
  behaveLikeLine: true,
  gridLineColor: "#e0e0e0",
  lineWidth: 2,
  hideHover: "auto",
  lineColors: ["#00bfc7", "#fb9678", "#9675ce"],
  resize: true
});

//datatables
$("#table_ingredient_alert").DataTable({
  scrollY: "250px",
  fixedHeader: true,
  scrollCollapse: true,
  paging: false,
  searching: false,
  info: false
});

$("#table_top_menu").DataTable({
  scrollY: "250px",
  fixedHeader: true,
  scrollCollapse: true,
  paging: false,
  searching: false,
  info: false
});

$("#table_inventory").DataTable({
    scrollY: "250px",
    fixedHeader: true,
    scrollCollapse: true,
    paging: false,
    searching: true,
    info: false
  });

$("#zero_config").DataTable();
