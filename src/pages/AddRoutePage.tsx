import { useContext } from "react";
import { BaseButton } from "../components/button/BaseButton";
import { BaseFooter } from "../components/footer/BaseFooter";
import { BaseHeader } from "../components/header/BaseHeader";

import { PageStateContext } from "./App";

function AddRoutePage() {
    const { page, setPage } = useContext(PageStateContext);
    const onClickSave = () => {
        setPage(9);
    }
    return (
        <>
            <BaseHeader>
                <h1>軽油追加ページ</h1>
                <BaseButton onClick={onClickSave} isSubmit={false} >
                    経路確定
                </BaseButton>
            </BaseHeader>
            <BaseFooter />
        </>
    )
}
export default AddRoutePage;