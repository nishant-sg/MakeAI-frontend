import "./NetworkDesigner.css";
import React, { useState, useEffect, useCallback } from "react";
function Nueron() {
  return <div className="Nueron"></div>;
}

function Layer() {
  const [neurons, setNeurons] = useState(1);
  return (
    <div className="Layer">
      <div className="NeuronIncrementor">
        <button
          onClick={() => {
            setNeurons(neurons - 1);
          }}
        >
          -
        </button>
        <input
          value={neurons}
          onChange={(e) => {
            setNeurons(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setNeurons(neurons + 1);
          }}
        >
          +
        </button>
      </div>
      {Array.from({ length: neurons }, (_, i) => (
        <Nueron />
      ))}
    </div>
  );
}

function NetworkDesigner() {
  const [layers, setLayers] = useState(2);
  const h = 500;
  let w = 300;

  const [network, setNetwork] = useState([
    { layer: 1, neuron: 10, actualNeurons: 1024 },
    { layer: 2, neuron: 7, actualNeurons: 128 },
  ]);
  const [graph, setGraph] = useState([{ a: 0, b: 100, c: 0, d: 200 }]);
  let newele;
  var paths = [];
  var neuron_controller = [];
  // useEffect(() => {
  for (let i = 0; i < network.length - 1; i++) {
    for (let x = 0; x < network[i].neuron; x++) {
      for (let y = 0; y < network[i + 1].neuron; y++) {
        // let y = 2
        let x1 = network[i].layer * 100 + 15;
        let y1 =
          (h - (network[i].neuron - 1) * Math.min(50, h / network[i].neuron)) /
            2 +
          x * Math.min(50, h / network[i].neuron + 1);
        let x2 = network[i + 1].layer * 100 - 15;
        let y2 =
          (h -
            (network[i + 1].neuron - 1) *
              Math.min(50, h / network[i + 1].neuron)) /
            2 +
          y * Math.min(50, h / network[i + 1].neuron + 1);
        newele = { a: x1, b: y1, c: x2, d: y2 };
        // w = Math.max(w, y1 + 100, y2 + 100);
        paths.push(
          <path
            d={
              "M " +
              newele.a.toString() +
              " " +
              newele.b.toString() +
              " L " +
              newele.c.toString() +
              " " +
              newele.d.toString()
            }
            stroke="#D3D3D3"
          />
        );
      }
    }
  }
  const getneuronsize = (e) => {
    if (e >= 1024) {
      return 10;
    } else if (e >= 512) {
      return 9;
    } else if (e >= 256) {
      return 8;
    } else if (e >= 128) {
      return 7;
    } else if (e >= 64) {
      return 6;
    } else if (e >= 32) {
      return 5;
    } else if (e >= 16) {
      return 4;
    } else if (e >= 8) {
      return 3;
    } else if (e >= 4) {
      return 2;
    } else {
      return 1;
    }
  };
  const decreaseNeuron = (e) => {
    setNetwork((prevState) => {
      const newState = prevState.map((obj) => {
        let a = network[e].actualNeurons;
        a = a - 1;
        console.log(e);
        let b = getneuronsize(a);
        if (obj.layer === e + 1) {
          return { ...obj, neuron: b, actualNeurons: a };
        }
        return obj;
      });
      return newState;
    });
  };
  const increaseNeuron = (e) => {
    setNetwork((prevState) => {
      const newState = prevState.map((obj) => {
        let a = network[e].actualNeurons;
        a = a + 1;
        console.log(e);
        let b = getneuronsize(a);
        if (obj.layer === e + 1) {
          return { ...obj, neuron: b, actualNeurons: a };
        }
        return obj;
      });

      return newState;
    });
  };
  const setNeuron = (e, d) => {
    setNetwork((prevState) => {
      const newState = prevState.map((obj) => {
        console.log(e);
        let b = getneuronsize(d);
        if (obj.layer === e + 1) {
          return { ...obj, neuron: b, actualNeurons: d };
        }
        return obj;
      });
      return newState;
    });
  };

  useEffect(() => {
    const w1 = document.getElementById("board");
    w1.style.width = w;
    console.log(w);
  }, [w]);
  return (
    <div className="NetworkDesigner">
      <svg className="board" id="board" width={w} height={h}>
        {paths}
        {network.map((element, index) =>
          Array.from({ length: element.neuron }, (_, i) => (
            <circle
              cx={element.layer * 100}
              cy={
                (h - (element.neuron - 1) * Math.min(50, h / element.neuron)) /
                  2 +
                i * Math.min(50, h / element.neuron + 1)
              }
              fill="#0096FF"
              r="15"
            />
          ))
        )}
      </svg>
      <div className="neuron-controller">
        {Array.from({ length: network.length }, (_, i) => (
          <div className="neuron-controller-div">
            <div>
              <select
                id="activation-function"
                name="activation-function"
                size="1"
              >
                <option value="Dense">Dense</option>
                <option value="Convolution">Convolution</option>
                <option value="Max Pooling">Max Pooling</option>
              </select>
            </div>
            <div className="neuron-controller-functions">
              <button
                onClick={() => {
                  decreaseNeuron(i);
                  console.log(network[i].actualNeurons);
                }}
              >
                -
              </button>
              <input
                value={network[i].actualNeurons}
                onChange={(e) => {
                  setNeuron(i, Number(e.target.value));
                }}
              />
              <button
                onClick={() => {
                  increaseNeuron(i);
                  console.log(network[i].actualNeurons);
                }}
              >
                +
              </button>
            </div>
            <div>
              <select
                id="activation-function"
                name="activation-function"
                size="1"
              >
                <option value="Sigmoid">Sigmoid</option>
                <option value="Linear">Linear</option>
                <option value="Relu">Relu</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="NeuronIncrementor">
        <button
          onClick={() => {
            if (layers > 2) {
              setLayers(layers - 1);
              setNetwork(network.slice(0, -1));
              w = (layers - 1) * 100 + 100;
              const w1 = document.getElementById("board");
              w1.style.width = w;
              console.log(w);
            }
          }}
        >
          -
        </button>
        <input
          value={layers}
          onChange={(e) => {
            if (Number(e.target.value) >= 2 && Number(e.target.value) < 10) {
              setLayers(Number(e.target.value));
            }
          }}
        />
        <button
          onClick={() => {
            if (layers < 9) {
              setLayers(layers + 1);
              setNetwork([
                ...network,
                { layer: network.length + 1, neuron: 7, actualNeurons: 128 },
              ]);
              w = (layers + 1) * 100 + 100;
              const w1 = document.getElementById("board");
              w1.style.width = w;
              console.log(w);
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default NetworkDesigner;
