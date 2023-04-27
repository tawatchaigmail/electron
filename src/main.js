import React from "react";
import { createRoot } from "react-dom/client";
import eello from "./hindex";

const container = document.getElementById("root");
const root = createRoot(container);
 root.render(<eello />);