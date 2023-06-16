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
  const w = 800;

  const [network, setNetwork] = useState([
    { layer: 1, neuron: 10 },
    { layer: 2, neuron: 7 },
    { layer: 3, neuron: 7 },
    { layer: 4, neuron: 7 },
    { layer: 5, neuron: 4 },
  ]);
  const [graph, setGraph] = useState([{ a: 0, b: 100, c: 0, d: 200 }]);
  let newele;
  var paths = [];
  // useEffect(()=>{
  for (let i = 0; i < network.length - 1; i++) {
    for (let x = 0; x < network[i].neuron; x++) {
      for (let y = 0; y < network[i + 1].neuron; y++) {
        // let y = 2
        let x1 = network[i].layer * 100 + 15;
        let y1 =
          (h - (network[i].neuron - 1) * Math.min(60, h / network[i].neuron)) /
            2 +
          x * Math.min(60, h / network[i].neuron + 1);
        let x2 = network[i + 1].layer * 100 - 15;
        let y2 =
          (h -
            (network[i + 1].neuron - 1) *
              Math.min(60, h / network[i + 1].neuron)) /
            2 +
          y * Math.min(60, h / network[i + 1].neuron + 1);
        newele = { a: x1, b: y1, c: x2, d: y2 };
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
            stroke="#191970	"
          />
        );
      }
    }
  }
  console.log("graph", paths.length);
  // },[])

  return (
    <div className="NetworkDesigner">
      <div className="NeuronIncrementor">
        <button
          onClick={() => {
            setLayers(layers - 1);
            setNetwork(network.slice(0, -1));
          }}
        >
          -
        </button>
        <input
          value={layers}
          onChange={(e) => {
            setLayers(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            setLayers(layers + 1);
            setNetwork([...network, { layer: network.length + 1, neuron: 4 }]);
          }}
        >
          +
        </button>
      </div>
      <svg className="board" width={w} height={h}>
        {paths}
        {network.map((element, index) =>
          Array.from({ length: element.neuron }, (_, i) => (
            <circle
              cx={element.layer * 100}
              cy={
                (h - (element.neuron - 1) * Math.min(60, h / element.neuron)) /
                  2 +
                i * Math.min(60, h / element.neuron + 1)
              }
              fill="#0096FF"
              r="15"
            />
          ))
        )}
      </svg>
    </div>
  );
}

export default NetworkDesigner;
