import React from 'react';
import './index.scss';
export default () => {
    return (
        <div className="blog_loading">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="0" y="7.6416" width="10" height="14.7168" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="height" attributeType="XML" values="90; 40; 90" begin="0s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="15; 0; 15" begin="0s" dur="0.9s" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="19" y="5.1416" width="10" height="19.7168" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="height" attributeType="XML" values="90; 40; 90" begin="0.15s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="15; 0; 15" begin="0.15s" dur="0.9s" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="38" y="7.3584" width="10" height="15.2832" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="height" attributeType="XML" values="90; 40; 90" begin="0.3s" dur="0.9s" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML" values="15; 0; 15" begin="0.3s" dur="0.9s" repeatCount="indefinite"></animate>
                    </rect>
                </svg>
        </div>
    );
};
