$(function() {
  "use strict";
  //This is for the Notification top right
  $.toast({
    heading: "Welcome Admin",
    text: "Qerja! Qerja! Qerja!",
    position: "top-right",
    loaderBg: "#ff6849",
    icon: "info",
    hideAfter: 3500,
    stack: 3
  });

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
  Morris.Area({
    element: "morris-area-chart2",
    data: [
      {
        period: "2010",
        SiteA: 0,
        SiteB: 0
      },
      {
        period: "2011",
        SiteA: 130,
        SiteB: 100
      },
      {
        period: "2012",
        SiteA: 80,
        SiteB: 60
      },
      {
        period: "2013",
        SiteA: 70,
        SiteB: 200
      },
      {
        period: "2014",
        SiteA: 180,
        SiteB: 150
      },
      {
        period: "2015",
        SiteA: 105,
        SiteB: 90
      },
      {
        period: "2016",
        SiteA: 250,
        SiteB: 150
      }
    ],
    xkey: "period",
    ykeys: ["SiteA", "SiteB"],
    labels: ["Site A", "Site B"],
    pointSize: 0,
    fillOpacity: 0.4,
    pointStrokeColors: ["#b4becb", "#01c0c8"],
    behaveLikeLine: true,
    gridLineColor: "#e0e0e0",
    lineWidth: 0,
    smooth: false,
    hideHover: "auto",
    lineColors: ["#b4becb", "#01c0c8"],
    resize: true
  });
});
// sparkline
var sparklineLogin = function() {
  $("#sales1").sparkline([20, 40, 30], {
    type: "pie",
    height: "90",
    resize: true,
    sliceColors: ["#01c0c8", "#7d5ab6", "#ffffff"]
  });
  $("#sparkline2dash").sparkline([6, 10, 9, 11, 9, 10, 12], {
    type: "bar",
    height: "154",
    barWidth: "4",
    resize: true,
    barSpacing: "10",
    barColor: "#25a6f7"
  });
};
var sparkResize;

$(window).resize(function(e) {
  clearTimeout(sparkResize);
  sparkResize = setTimeout(sparklineLogin, 500);
});
sparklineLogin();
