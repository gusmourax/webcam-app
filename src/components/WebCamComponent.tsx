import React from 'react';
import Webcam from 'react-webcam';

const WebCamComponent: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: window.innerHeight
            }}
        >
            <Webcam
                autoPlay={true}
                audio={false}
                videoConstraints={{
                    width: window.innerWidth,
                    height: window.innerHeight
                }}
            />
        </div>
    )

}

export default WebCamComponent;