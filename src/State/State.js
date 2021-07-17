import React, { Component } from 'react'

export default class State extends Component {

    // isLogin = false;
    userName = "Quốc Anh";


    /**
    Thuộc tính State
    + Là thuộc tính có sẵn trong react class component, dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác 
    (click, keydown, keyup, blur,....)
     */
    state = { // State là một object
        isLogin: false,
        fsize: 15,
        imgSrc: "./img/CarBasic/products/red-car.jpg"
    }

    renderLogin = () => {
        if (this.state.isLogin) {
            return <span style={{ color: "white", fontWeight: "bold" }}>{this.userName}</span>
        }
        return <button className="btn btn-success" onClick={() => {
            this.handleLogin();
        }}>Đăng Nhập</button>
    }

    handleLogin = async () => {
        // this.state.isLogin = true;  KHÔNG ĐƯỢC GÁN GIÁ TRỊ STATE TRỰC TIẾP
        // MÀ PHẢI THÔNG QUA PHƯƠNG THỨC SETSTATE 

        /**
         * this.setState(newState)
         * 
         * + Phương thức này do react Class component  cung cấp để thay đổi giá trị của state
         * + setState được gọi thì giao diện sẽ render lại (hàm render sẽ chạy lại)  
         * + SetStage là phương thức bất đồng bộ
         */

        let newState = {
            isLogin: true,
        }
        // Nếu muốn kiểm tra giá trị isLogin chính xác thì cần đặt vào this.setState(newState)

        // Có 2 cách kiểm tra

        // CÁCH 1: dùng async và await
        await this.setState(newState)
        console.log(this.state.isLogin)

        // Cách 2: dùng callback
        // this.setState(newState, () => {{
        //     console.log(this.state.isLogin) 
        // }});

    }
    handleChangeColor = (color) => {
        this.setState({
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">

                            {/* CÁCH 1: Không thường sử dụng, được sử dụng cho dữ liệu ngắn sẽ tốt hơn*/}
                            {/* {this.isLogin ?
                                <span style={{color:"white", fontWeight:"bold"}}>{this.userName}</span> :
                                <button className="btn btn-success">Đăng Nhập</button>} */}

                            {/* CÁCH 2: Được sử dụng nhiều hơn*/}
                            {this.renderLogin()}
                        </div>
                    </div>
                </nav>
                <hr />


                {/* Bài tập thay đổi pohng chữ */}
                {/* ==================================================== */}

                <h3>Bài tập tăng giảm phong chữ</h3>
                <p style={{fontSize:`${this.state.fsize}px`}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorum fugiat provident qui distinctio quam nihil
                    eveniet voluptatum quisquam quas praesentium, fuga, voluptatibus nostrum beatae debitis, quidem excepturi. Modi,
                    repudiandae?
                </p>
                <button className="btn btn-success mr-2" onClick={()=> {
                    this.setState({
                        fsize: this.state.fsize + 2,
                    })

                }}>+</button>
                <button className="btn btn-danger" onClick={()=>{
                    this.setState({
                        fsize: this.state.fsize - 2,
                    })
                }}>-</button>
                <hr/>


                {/* Bài tập thay đổi màu xe  */}
                {/* ============================================== */}
                <h3>Bài tập thay đổi màu xe</h3>

                <div className="row">
                    <div className="col-6">
                        <img src={this.state.imgSrc} className="w-100" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button style={{background: "red"}} className="btn text-white" onClick={() => {
                                    this.handleChangeColor("red")
                                }}>Red</button>
                            </div>
                            <div className="col-3">
                                <button style={{background: "silver"}} className="btn text-white" onClick={() => {
                                    this.handleChangeColor("silver")
                                }}>Silver</button>
                            </div>
                            <div className="col-3">
                                <button style={{background: "black"}} className="btn text-white" onClick={() => {
                                    this.handleChangeColor("black")
                                }}>Black</button>
                            </div>
                            <div className="col-3">
                                <button style={{background: "gray"}} className="btn text-white" onClick={() => {
                                    this.handleChangeColor("steel")
                                }}>Gray</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
