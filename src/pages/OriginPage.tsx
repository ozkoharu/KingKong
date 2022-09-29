import { useContext, createContext } from "react";
import { Map } from "../components/map";
import AddRoutePage from "./AddRoutePage";
import { PageStateContext } from "./App";
import CarMenuPage from "./CarMenuPage";
import CarWatchPage from "./CarWatchPage";
import DestinationMapPage from "./DestinationMapPage";
import EndPage from "./EndPage";
import ExistsRoutePage from "./ExistsRoutePage";
import RouteSavePage from "./RouteSavePage";
import WelcomePage from "./WelcomePage";




const OriginPage: React.FC = () => {
    const { page, setPage } = useContext(PageStateContext)

    if (page === 1) {
        return (
            <>
                <WelcomePage />
            </>
        )
    } else if (page === 2) {
        return (
            <>
                <CarMenuPage />
            </>
        )
    } else if (page === 3) {
        return (
            <>
                <DestinationMapPage />
            </>
        )
    } else if (page === 4) {
        return (
            <>
                <ExistsRoutePage />
            </>
        )
    } else if (page === 5) {
        return (
            <>
                <AddRoutePage />
            </>
        )
    } else if (page === 6) {
        return (
            <>
                <RouteSavePage />
            </>
        )
    } else if (page === 7) {
        return (
            <>
                <CarWatchPage />
            </>
        )
    } else if (page === 8) {
        return (
            <>
                <EndPage />
            </>
        )
    }

    return (
        <>
            <WelcomePage />
        </>
    )
}
export default OriginPage;