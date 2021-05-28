import React, { useEffect } from 'react'
import Plot from 'react-plotly.js';
import "./Visualization.css"

const Visualization = ({mode}) => {

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


    var p1 = {
        x: x,
        y: y1,
        name: 'p1',
        type: 'scatter'
    };

    var p25 = {
        x: x,
        y: y2,
        yaxis: 'y2',
        name: 'p25',
        type: 'scatter'
    };

    var p10 = {
        x: x,
        y: y3,
        name: 'p10',
        yaxis: 'y3',
        type: 'scatter'
    };

    var data = [p1, p25, p10];

    var layout = {
        height: window.innerWidth / 3.2,
        width: window.innerWidth / 3.2,
        yaxis: { domain: [0, 0.33] },
        legend: { traceorder: 'reversed' },
        yaxis2: { domain: [0.33, 0.66] },
        yaxis3: { domain: [0.66, 1] },
        plot_bgcolor: !mode?"#121212":'white',
        paper_bgcolor: !mode?"#121212":'white',
    };




    if (x.length)
        return (

            <div className="vis-container" style = {{backgroundColor:mode?'white':'#121212', color: mode?'black':'white', transition:'1s', marginTop:'-50px'}}>

                <div className="col1">
                    <div className = "vis-heading">Visualisation</div>

                
                    <div className="title-info" style = {{color:mode?'black':'white', marginTop:'10px'}}>
                    By referring to the given data, Charts given below compare the 3 locations’ data throughout the day while comparing the pm1, pm2.5, and pm10 values separately and time-series graph with the pm readings overlaid.
                    </div>

              
                </div> 
                <div style = {{fontSize:'0.01em'}}>.</div>


                <div style = {{marginTop:'300px',display:'flex',flexDirection:"column",width:'300px',marginLeft:'40%'}}>
                    <label htmlFor="date">Select Date</label>
                    <input type="date" />

                    <label htmlFor="date" style = {{marginTop:'40px'}}>Select Start Time</label>
                    <input type="time" />

                    <label htmlFor="date" style = {{marginTop:'40px'}}>Select End Time</label>
                    <input type="time" />
                </div>                

                <div style = {{marginTop:'100px'}}>
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

                
            </div>
        )

    return <></>
}

export default Visualization
