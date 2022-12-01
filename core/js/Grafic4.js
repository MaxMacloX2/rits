/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic area chart example
 *
 *  Demo JS code for basic area chart [light theme]
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------

var EchartsAreaBasicLight4 = (function () {
    //
    // Setup module components
    //
  
    // Basic area chart
    var _areaBasicLightExample = function () {
      if (typeof echarts == "undefined") {
        console.warn("Warning - echarts.min.js is not loaded.");
        return;
      }
  
      // Define element
      var area_basic_element = document.getElementById("area_basic4");
  
      //
      // Charts configuration
      //
  
      if (area_basic_element) {
        // Initialize chart
        var area_basic = echarts.init(area_basic_element);
  
        //
        // Chart config
        //
  
        // Options
        area_basic.setOption({
          // Define colors
          color: ["#0D1D41", "#00B2E2", "#5ab1ef", "#ffb980", "#d87a80"],
  
          // Global text styles
          textStyle: {
            fontFamily: "Roboto, Arial, Verdana, sans-serif",
            fontSize: 13,
          },
  
          // Chart animation duration
          animationDuration: 750,
  
          // Setup grid
          grid: {
            left: 0,
            right: 40,
            top: 35,
            bottom: 0,
            containLabel: true,
          },
  
          // Add legend
          legend: {
            data: ["Importacion", "Exportacion"],
            itemHeight: 8,
            itemGap: 20,
          },
  
          // Add tooltip
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(0,0,0,0.75)",
            padding: [10, 15],
            textStyle: {
              fontSize: 13,
              fontFamily: "Roboto, sans-serif",
            },
          },
  
          // Horizontal axis
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: [
                "09/16/2022",
                "09/17/2022",
                "09/19/2022",
                "09/20/2022",
                "09/21/2022",
                "09/22/2022",
                "09/23/2022",
              ],
  
              axisLabel: {
                color: "#333",
              },
              axisLine: {
                lineStyle: {
                  color: "#999",
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#eee",
                  type: "dashed",
                },
              },
            },
          ],
  
          // Vertical axis
          yAxis: [
            {
              type: "value",
              axisLabel: {
                color: "#333",
              },
              axisLine: {
                lineStyle: {
                  color: "#999",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "#eee",
                },
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.1)", "rgba(0,0,0,0.01)"],
                },
              },
            },
          ],
  
          // Add series
          series: [
            {
              name: "Importacion",
              type: "line",
              data: [1000, 3120, 2100, 4554, 9260, 8300, 7100],
              areaStyle: {
                normal: {
                  opacity: 0.25,
                },
              },
              smooth: true,
              symbolSize: 7,
              itemStyle: {
                normal: {
                  borderWidth: 2,
                },
              },
            },
            {
              name: "Exportacion",
              type: "line",
              smooth: true,
              symbolSize: 7,
              itemStyle: {
                normal: {
                  borderWidth: 2,
                },
              },
              areaStyle: {
                normal: {
                  opacity: 0.25,
                },
              },
              data: [4730, 182, 434, 791, 390, 30, 10],
            },
          ],
        });
      }
  
      //
      // Resize charts
      //
  
      // Resize function
      var triggerChartResize = function () {
        area_basic_element && area_basic.resize();
      };
  
      // On sidebar width change
      var sidebarToggle = document.querySelectorAll(".sidebar-control");
      if (sidebarToggle) {
        sidebarToggle.forEach(function (togglers) {
          togglers.addEventListener("click", triggerChartResize);
        });
      }
  
      // On window resize
      var resizeCharts;
      window.addEventListener("resize", function () {
        clearTimeout(resizeCharts);
        resizeCharts = setTimeout(function () {
          triggerChartResize();
        }, 200);
      });
    };
  
    //
    // Return objects assigned to module
    //
  
    return {
      init: function () {
        _areaBasicLightExample();
      },
    };
  })();
  
  // Initialize module
  // ------------------------------
  
  document.addEventListener("DOMContentLoaded", function () {
    EchartsAreaBasicLight4.init();
  });