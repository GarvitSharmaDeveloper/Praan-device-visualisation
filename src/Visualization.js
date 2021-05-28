import React, { useEffect } from 'react'
import Plot from 'react-plotly.js';

const Visualization = () => {

    let res, x = [], y1 = [], y2 = [], y3 = []

    // useEffect(() => {
    // res = require("./res/test_dataset_all.json")
    res = require("./res/deviceC.json")

    let c = 0




    res.map((data) => {
        var t = data.t

        let year = parseInt(t.slice(0, 2)) + 2000
        let month = parseInt(t.slice(3, 5)) - 1
        let date = parseInt(t.slice(6, 8))
        let hours = parseInt(t.slice(9, 11))
        let minutes = parseInt(t.slice(12, 14))
        let seconds = parseInt(t.slice(15, 17))

        if (data.p1 > 1000 || year > 2022 || (month == 2 && date < 15))
            return

        let curDate = new Date(year, month, date, hours, minutes, seconds)
        x.push(curDate)
        y1.push(data.p1)
        y2.push(data.p25)
        y3.push(data.p10)
        c += 1
    })


    var trace1 = {
        x: x,
        y: y1,
        type: 'scatter'
    };

    var trace2 = {
        x: x,
        y: y2,
        yaxis: 'y2',
        type: 'scatter'
    };

    var trace3 = {
        x: x,
        y: y3,
        yaxis: 'y3',
        type: 'scatter'
    };

    var data = [trace1, trace2, trace3];

    var layout = {
        height: window.innerWidth / 3.2,
        width: window.innerWidth / 3.2,
        yaxis: { domain: [0, 0.33] },
        legend: { traceorder: 'reversed' },
        yaxis2: { domain: [0.33, 0.66] },
        yaxis3: { domain: [0.66, 1] }
    };




    if (x.length)
        return (

            <div className="vis-container">

                <div>
                  VISUALIZATIONS
                </div>

                <Plot
                    data={data}
                    layout={layout}
                />
                <Plot
                    data={data}
                    layout={layout}
                />
                <Plot
                    data={data}
                    layout={layout}
                />
            </div>
        )

    return <></>
}

export default Visualization
