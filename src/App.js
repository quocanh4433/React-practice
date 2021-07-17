import FunctionComponent  from "./component/FunctionComponent";
import ClassComponent from "./component/ClassComponent";
import HomeComponent from "./component/Baitap-Layout-Component/HomeComponent";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StyleComponent from "./StyleComponent/StyleComponent";
import State from "./State/State";

function App() {
  return (
    <div className="App">
      {/* Component example  */}
      {/* ========================================== */}
      {/* <FunctionComponent />
      <FunctionComponent></FunctionComponent>
      <ClassComponent />
      <HomeComponent/> */}
      {/* Databiding  */}
      {/* ================================================= */}
      {/* <Databinding /> */}
      {/* Handle Event */}
      {/* ========================================================== */}
      <h1>Handel Envent</h1>
      <HandleEvent/>
      <hr></hr>
      {/* Style component */}
      {/* ========================================================== */}
      <h1>Style cho Component</h1>
      <StyleComponent/>
      <hr></hr>
      {/* State */}
      {/* ========================================================== */}
      <h1>State</h1>
      <State/>
      <hr></hr>
    </div>
  );
}

export default App;
