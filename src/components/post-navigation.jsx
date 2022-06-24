import React from 'react';

export const PostNavigation = () => {
  return (
    <div className="page-nav">
      <nav className="page-nav__inner">
        <p className="page-nav__btn page-nav__btn-back">
          <svg
            width="9"
            height="9"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.24316 3.59766L6.52246 5.32715V6.66699L0.930664 4.07617V3.07812L6.52246 0.494141V1.83398L2.24316 3.59766Z"
              fill="white"
            />
          </svg>
        </p>
        <p className="page-nav__btn">1</p>
        <p className="page-nav__btn page-nav__btn-active ">2</p>
        <p className="page-nav__btn">3</p>
        <p className="page-nav__btn page-nav__btn-next">
          <svg
            width="9"
            height="9"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.77734 3.55664L0.258789 1.78613V0.487305L6.09668 3.07129V4.06934L0.258789 6.66016V5.34766L4.77734 3.55664Z"
              fill="white"
            />
          </svg>
        </p>
      </nav>
    </div>
  );
};
