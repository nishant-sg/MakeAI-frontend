import "./Playground.css";
import NetworkDesigner from "../components/NetworkDesigner";

function Playground() {
  return (
    <div className="Playground">
      <NetworkDesigner />
      <div className="nn-desc">
        <h1>Neural Network</h1>
        <p>This is just a representation of a neural network</p>

        <br />
        <p>
          The number of neurons is not the actual number of neurons,Kindly refer
          to the number at the bottom of each layer. Choose the type of layer,
          and the activation function by selecting the correct option, Increase
          or Decrease the number of layers
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />

        <p></p>
      </div>
    </div>
  );
}

export default Playground;
