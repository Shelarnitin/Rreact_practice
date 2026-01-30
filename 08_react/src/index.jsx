import {CreateRoot} from "react-dom/client";

import {App} from "./App.jsx"

const root = CreateRoot(document.getElementById('root'));
root.render(<App/>)