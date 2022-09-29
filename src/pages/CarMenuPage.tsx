import { useContext } from "react";
import { BaseButton } from "../components/button/BaseButton";
import { PageStateContext } from "./App";

function CarMenuPage() {
    const { page, setPage } = useContext(PageStateContext);
    const onClickNewRoot = () => {
        setPage(3);
    }
    const onClickExistRoot = () => {
        setPage(4);
    }
    const onClickCarWatch = () => {
        setPage(5);
    }
    const onClickEnd = () => {
        setPage(6);
    }

    return (
        <>
            <BaseButton onClick={onClickNewRoot} isSubmit={false}>
                新規ルート作成
            </BaseButton>
            <BaseButton onClick={onClickExistRoot} isSubmit={false}>
                既存ルート選択
            </BaseButton>
            <BaseButton onClick={onClickCarWatch} isSubmit={false}>
                車の現在地確認
            </BaseButton>
            <BaseButton onClick={onClickEnd} isSubmit={false}>
                車を解放s
            </BaseButton>
        </>
    )
}
export default CarMenuPage;