import { useContext } from "react";
import { BaseButton } from "../components/button/BaseButton";
import { PageStateContext } from "./App";

const WelcomePage = () => {
    const { page, setPage } = useContext(PageStateContext);

    const onClickCarUse = () => {
        setPage(2);
    }
    return (
        <>
            <BaseButton onClick={onClickCarUse} isSubmit={false}>車を使う</BaseButton>
        </>
    )
}
export default WelcomePage;