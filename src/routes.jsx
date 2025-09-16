import React from "react";
import { createHashRouter } from "react-router-dom";

import AppMain from "./AppMain";
import Call from "./components/call.layout";
import Fishing from "./components/fishing.layout";
import Wounded from "./components/wounded.layout";
import Training from "./components/training.layout";
import Navigator from "./components/navigator.layout";

// Router Configuration
const router = createHashRouter([
  {
    path: "/",
    element: <AppMain />,
    children: [
      { path: "training", element: <Training /> },
      { path: "call", element: <Call /> },
      { path: "fishing", element: <Fishing /> },
      { path: "navigator", element: <Navigator /> },
      { path: "wounded", element: <Wounded /> },
    ],
  },
]);

export default router;
