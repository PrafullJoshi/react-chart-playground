import React, { useEffect } from "react";
import c3 from "c3";
import 'c3/c3.css'

function C3StaticScreen() {

  useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        type: "line",
      },
    });
    chart1();
  }, []);

  const chart1 = () => {
    c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        axes: {
          data2: 'y2'
        },
        types: {
          data2: 'bar' // ADD
        }
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle'
          }
        },
        y2: {
          show: true,
          label: {
            text: 'Y2 Label',
            position: 'outer-middle'
          }
        }
      }
  });
  }
  return (
    <div>
      <div id="chart" />
      <div id="chart1" />
    </div>
    
  );
}

export default C3StaticScreen;