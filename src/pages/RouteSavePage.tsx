import React, { useContext, useState } from "react";
import { BaseButton } from "../components/button/BaseButton";
import { BaseFooter } from "../components/footer/BaseFooter";
import { BaseHeader } from "../components/header/BaseHeader";
import BaseTextForm from "../components/inputform/BaseInputForm";

import { PageStateContext } from "./App";

function RouteSavePage() {
    const { page, setPage } = useContext(PageStateContext);
    const [formData, setFormData] = useState("");
    const onClickSave = () => {
        setPage(5);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(() => e.target.value);
    }
    const PostSave = () => {
        //ここで星くんにポストを飛ばす
    }

    return (
        <>
            <BaseHeader>
                <BaseTextForm
                    id="input"
                    name="input"
                    value={formData}
                    onChange={handleChange}
                />
                <BaseButton onClick={onClickSave} isSubmit={false}>
                    経路保存
                </BaseButton>
            </BaseHeader>
            <BaseFooter />
        </>
    )
}
export default RouteSavePage;