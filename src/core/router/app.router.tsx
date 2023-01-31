import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimalsContextProvider } from "@/pods/context/context.component";

import { KittiesScene } from "@/scenes";
import { PuppiesScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <AnimalsContextProvider>
      <HashRouter>
        <Routes>
          <Route path={switchRoutes.kitties} element={<KittiesScene />}></Route>
          <Route path={switchRoutes.puppies} element={<PuppiesScene />}></Route>
        </Routes>
      </HashRouter>
    </AnimalsContextProvider>
  );
};
