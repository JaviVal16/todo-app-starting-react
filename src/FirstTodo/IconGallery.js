import React from "react";
import { ReactComponent as NothingSVG } from './nothing.svg';
import { ReactComponent as FlechaSVG } from './Flecha.svg';

const iconGallery = {
    "nothing": <NothingSVG />,
    "flecha": <FlechaSVG />
}

function IconGallery({ type }) {
    return (
        <span
            className={`icon-${type}`}
        >
            {iconGallery[type]}
        </span>
    );
}

export { IconGallery };