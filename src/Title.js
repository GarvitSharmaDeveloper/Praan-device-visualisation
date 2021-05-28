import React from 'react'
import "./Title.css"
import {useHistory} from 'react-router-dom'

const Title = ({mode}) => {

    const history = useHistory()

    return (
        <div className="title-container">

            <div className = {mode?"background-light":"background-dark"}></div>

            <div className="col1">
                <div className = {mode?"title-logo-light":"title-logo-dark"}></div>
                <div className="title-info" style = {{color:mode?'black':'white'}}>
                    <p>
                        Praan was founded with the goal of reverting the environment to what it used to be several decades ago.
                    </p>

                    <p style={{ marginTop: '-10px' }}>
                        WHAT WE DO
                    </p>

                    <p style={{ marginTop: '-10px' }}>
                        We’re a deep tech company using patent-pending technology to purify ambient air in cities without the use of any filters. We use scientific first principles along with cutting edge hardware and software to make clean air accessible to all.
                    </p>
                </div>

                <div style={{ width: '50%' }}>
                    <div className="know-more" onClick = {()=>history.push("/knowmore")}>
                    </div>
                </div>

            </div>

            <div className = "col2">

            </div>
        </div >
    )
}

export default Title
