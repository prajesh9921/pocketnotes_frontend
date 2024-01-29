import React from 'react';

const SendArrow = (props,{onClick}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        right: 30,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={29}
        viewBox="0 0 35 29"
        fill="none"
        {...props}
      >
        <path
          d="M0 29V18.125L14.5 14.5 0 10.875V0l34.438 14.5L0 29z"
          fill="#ABABAB"
        />
      </svg>
    </div>
  );
};

export default SendArrow;
