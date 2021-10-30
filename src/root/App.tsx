import Timeline from "@mui/lab/Timeline";
import React from "react";
import Event from "../components/Event";
import { events } from "../components/events";

function App() {
  return (
    <main>
      <Timeline position="alternate">
        {events.map((props, index) => (
          <Event {...props} position={index} />
        ))}
      </Timeline>
    </main>
  );
}

export default App;
