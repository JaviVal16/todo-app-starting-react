import React, { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

function AlertCompleted(props) {
    const [swalProps, setSwalProps] = useState({});
    if (props.AlertCompleted) {
        return (
            <div>
                <button onClick={() => {
                    setSwalProps({
                        show: true,
                        title: 'Basic Usage',
                        text: 'Hello World',
                    });
                }}>
                    Open
                </button>

                <SweetAlert2 {...swalProps} />
            </div>
        );
    }
}

export { AlertCompleted };