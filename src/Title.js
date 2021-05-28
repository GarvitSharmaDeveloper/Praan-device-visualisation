import React from 'react'
import "./Title.css"

const Title = () => {
    return (
        <div className="title-container">

            <div className="background"></div>

            <div className="col1">
                <div className="title-logo"></div>
                <div className="title-info">
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
                    <div className="know-more">
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Title
