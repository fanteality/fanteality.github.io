import React, { ReactElement, useEffect, useState } from 'react';
interface Iprop {
    delay: number;
    children: ReactElement | string;
}
export default (props: Iprop) => {
    const [canRender, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, props.delay);
    }, [props]);

    return canRender ? <>{props.children}</> : null;
};
