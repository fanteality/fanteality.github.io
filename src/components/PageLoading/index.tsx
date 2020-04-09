import React from 'react';
import './index.scss';
export default () => {
    return (
        <div className="blog_loading">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
            >
                <rect x="0" y="7.6416" width="4" height="14.7168" fill="#FF6700" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="30; 40; 30" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="-10; 0; -10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
                <rect x="8" y="5.1416" width="4" height="19.7168" fill="#FF6700" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="30; 40; 30" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="-10; 0; -10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
                <rect x="16" y="7.3584" width="4" height="15.2832" fill="#FF6700" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="height" attributeType="XML" values="30; 40; 30" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="y" attributeType="XML" values="-10; 0; -10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                </rect>
            </svg>
        </div>
    );
};
