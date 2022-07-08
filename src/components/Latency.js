import React, { Component, useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket("ws://localhost:55455");

function Latency() {
  const [lat, setLat] = useState(0);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const sent = message.timeStamp;
      client.close();
      const recv = new Date().getTime();
      console.log(sent , recv);
      setLat(recv - sent);
    };
  }, []);
  return <div>{lat} ms</div>;
}

export default Latency;
