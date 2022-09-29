import React, { useState } from "react";
import { createContext } from "react";
import { LatLng } from "leaflet";
import OriginPage from "./OriginPage";
import { Map } from "../components/map";


export const PageStateContext = createContext({} as {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
});
export const LocationPoint = createContext({} as {
  point: LatLng[]
  setPoint: React.Dispatch<React.SetStateAction<LatLng[]>>
  poly: LatLng[][]
  setPoly: React.Dispatch<React.SetStateAction<LatLng[][]>>
})

function App() {
  const [page, setPage] = useState(0);
  const [point, setPoint] = useState<LatLng[]>([]);
  const [poly, setPoly] = useState<LatLng[][]>([[]]);
  return (
    <>
      <LocationPoint.Provider value={{ point, setPoint, poly, setPoly }}>
        <PageStateContext.Provider value={{ page, setPage }}>
          <OriginPage />
        </PageStateContext.Provider>
      </LocationPoint.Provider>
    </>
  )

}
export default App;