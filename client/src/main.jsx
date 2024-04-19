import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import "./index.css";
import Share from "./components/Share";
import Hero from "./components/Hero";
import { Polygon } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Digilocker from "./components/Digilocker";
import Dashboard from "./components/Dashboard"
import ShareService from "./components/ShareService";
import Track from "./components/Track";
import Revoke from "./components/Revoke";
import Grantaccess from "./components/Grantaccess";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Hero/>}/>
      <Route path='/shareService' element={<ShareService/>}/>
      <Route path='/shareService/share' element={<Share/>}/>
      <Route path='/digilocker' element={<Digilocker/>}/>
      <Route path='/digilocker/dashboard' element={<Dashboard/>}/>
      <Route path='/track' element={<Track/>}/>
      <Route path='/revoke' element={<Revoke/>}/>
      <Route path='/revoke/grant' element={<Grantaccess/>}/>
    </Route>
  )
)

// const customChain = {
//   chainId: 51, // Chain ID for XinFin Apothem Testnet
//   rpc: ["https://rpc.apothem.network"], // RPC endpoint for XinFin Apothem Testnet

//   nativeCurrency: {
//     decimals: 18,
//     name: "XDC",
//     symbol: "XDC",
//   },
//   shortName: "xdc-testnet", // Display value shown in the wallet UI
//   slug: "xinfin-testnet", // Display value shown in the wallet UI
//   testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
//   chain: "XinFin", // Name of the network
//   name: "XinFin Apothem Testnet", // Name of the network
// };
const customChain = {
  chainId: 80002, 
  rpc: ["https://80002.rpc.thirdweb.com"], 
 
  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "Polygon",
    symbol: "MATIC",
  },
  shortName: "czkevm", // Display value shown in the wallet UI
  slug: "consensys", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Polygon", // Name of the network
  name: "Polygon Amoy Testnet", // Name of the network
};




root.render(

      <ThirdwebProvider
        clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
        activeChain = {customChain}
      >
        <RouterProvider router={router}/>
      </ThirdwebProvider>

);
