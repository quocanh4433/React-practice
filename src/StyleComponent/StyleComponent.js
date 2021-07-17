import React, { Component } from 'react'
import style  from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render() {
        return (
            <div>
                <h5>Cách 1: Css bằng Style module</h5>
                <p className={`${style["font-bold"]} ${style["text-green"]}`}>Style Component</p>
                <h5>Cách 2: Css Internal</h5>
                <p style={ // Dấu ngoặc này là databiding
                    {paddingTop: "10px", color:"blue", fontSize:"50px"} // Được xem là object nên nó sẽ có 2 dấu ngoăc {}
                    }>Style Component</p>
                <h5>Cách 3: Css bằng cách viết SASS</h5>

            </div>
        )
    }
}
