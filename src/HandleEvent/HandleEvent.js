import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleEvent = () => {
        alert("Quốc Anh")
    }

    showMessage = (mess) => {
        alert(`Hello ${mess}`)
    }

    render() {
        let name = 'Nam'
        return (
            <div>
                <h5>Cách bắt sự kiện cách 1</h5>
                <button onClick={this.handleEvent}>Click vào chơi</button>
                <h5>Cách bắt sự kiện cách 2</h5>
                <button onClick={(event) => {
                    // event.target.style.backgroundColor = "red"
                    // event sẽ trả về thẻ button
                    alert({name});
                    this.showMessage("Như")
                    }}>Click vào chơi</button>
            </div>
        )
    }
}
