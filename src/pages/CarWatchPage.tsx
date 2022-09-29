import { useContext } from 'react';
import { BaseButton } from '../components/button/BaseButton';
import { BaseFooter } from '../components/footer/BaseFooter';
import { BaseHeader } from '../components/header/BaseHeader';

import { PageStateContext } from './App';



function CarWatchPage() {
    const { page, setPage } = useContext(PageStateContext);
    const onClickBack = () => {
        setPage(2);
    }
    return (
        <>
            <BaseHeader>
                <BaseButton onClick={onClickBack} isSubmit={false}>戻る</BaseButton>
            </BaseHeader>
            <h1>車を見る</h1>
            <BaseFooter />
        </>
    )
}
export default CarWatchPage;