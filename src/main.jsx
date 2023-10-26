import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
ReactDOM.createRoot(document.getElementById('root')).render(
<div>
<RouterProvider router={routes} />
</div>
)
