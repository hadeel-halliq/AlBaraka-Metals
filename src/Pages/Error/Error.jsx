import {useEffect} from 'react';

const Error = () => {

    useEffect(() => {
        document.title = "الصفحة غير موجودة | معادن البركة";
    }, []);

    return (
        <>
            <h1>Error 404</h1>
        </>
    )
}

export default Error;