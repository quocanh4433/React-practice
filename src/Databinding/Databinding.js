import React, { Component } from 'react'

export default class Databinding extends Component {

    // Thuộc tính
    name = "Khải";
    img = "https://picsum.photos/200/300"

    // Phương thức
    renderCard = () => {
        let product = {
            id: 1,
            name : "Iphone",
            price: 1000,
            img: "https://picsum.photos/200/300"
        }
        return <div>
            <p>{product.id}</p>
            <p>{product.name}</p> 
            <p>{product.price}</p>
            <p>{product.tenhocvien}</p>
            <img src={product.img}  alt="" />
        </div>
    }
    render() {
        // Khai baod biến, hàm (Khai báo sẽ có từ khóa let var và được khai báo trong hàm và phương thức)
        let tenhocvien = 'Quốc Anh'
        // tenhocvien chỉ sử dụng trong hàm render này 
        return (
            <div>
                <h4 className="bg-dark text-white">Cách binding một biến</h4>
                <div>
                    {tenhocvien}
                </div> 
                <h4>Cách binding một thuộc tính</h4>
                <div>
                    {this.name}
                </div>
                <h4>Cách binding một thuộc tính</h4>
                <div>
                    <img src={this.img}  alt="" />
                </div>
                <h4>Cách binding một phương thức</h4>
                <hr></hr>
                {this.renderCard()}
            </div>
        )
    }
}
