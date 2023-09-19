import React from 'react';

interface ICartProps {
  mobile?: boolean;
}

export const Cart: React.FC<ICartProps> = ({ mobile }) => {
  if (mobile) {
    return (
      <div className="relative top-[0.3rem]">
        <div className="after:bg-white after:content-['2'] after:text-main-blue after:text-xs after:flex after:justify-center after:items-center after:font-semibold after:w-4 after:h-4 after:absolute after:bottom-[1.2rem] after:left-[1.1rem] after:rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M15.877 23.2135C16.4785 23.2135 17.0555 22.9746 17.4808 22.5492C17.9062 22.1238 18.1451 21.5469 18.1451 20.9454C18.1451 20.3438 17.9062 19.7669 17.4808 19.3416C17.0555 18.9162 16.4785 18.6772 15.877 18.6772C15.2754 18.6772 14.6985 18.9162 14.2732 19.3416C13.8478 19.7669 13.6089 20.3438 13.6089 20.9454C13.6089 21.5469 13.8478 22.1238 14.2732 22.5492C14.6985 22.9746 15.2754 23.2135 15.877 23.2135ZM7.93849 23.2135C8.54004 23.2135 9.11695 22.9746 9.54231 22.5492C9.96767 22.1238 10.2066 21.5469 10.2066 20.9454C10.2066 20.3438 9.96767 19.7669 9.54231 19.3416C9.11695 18.9162 8.54004 18.6772 7.93849 18.6772C7.33694 18.6772 6.76003 18.9162 6.33467 19.3416C5.90931 19.7669 5.67035 20.3438 5.67035 20.9454C5.67035 21.5469 5.90931 22.1238 6.33467 22.5492C6.76003 22.9746 7.33694 23.2135 7.93849 23.2135ZM22.7245 7.24918C23.0076 7.24005 23.2761 7.12117 23.4731 6.91767C23.6702 6.71418 23.7803 6.44203 23.7803 6.15877C23.7803 5.87551 23.6702 5.60336 23.4731 5.39987C23.2761 5.19637 23.0076 5.07749 22.7245 5.06836H21.4192C20.3963 5.06836 19.5117 5.77829 19.2894 6.77627L17.8684 13.1747C17.6462 14.1727 16.7616 14.8826 15.7386 14.8826H7.21949L5.58416 8.33902H16.1821C16.4625 8.32623 16.7272 8.20581 16.9212 8.00283C17.1151 7.79985 17.2233 7.52992 17.2233 7.24918C17.2233 6.96844 17.1151 6.69851 16.9212 6.49553C16.7272 6.29255 16.4625 6.17213 16.1821 6.15934H5.58416C5.25263 6.15924 4.92544 6.23473 4.62747 6.38007C4.32949 6.5254 4.06858 6.73676 3.86456 6.99808C3.66054 7.25939 3.51878 7.56379 3.45006 7.88811C3.38134 8.21244 3.38747 8.54817 3.46798 8.86977L5.10331 15.4111C5.2212 15.8831 5.49353 16.3021 5.87698 16.6015C6.26044 16.9009 6.73299 17.0635 7.21949 17.0634H15.7386C16.7312 17.0636 17.6941 16.7252 18.4683 16.1041C19.2426 15.4831 19.7819 14.6165 19.9971 13.6476L21.4192 7.24918H22.7245Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative mr-[2.25rem]">
        <div className="after:bg-main-blue after:content-['2'] after:text-white after:flex after:justify-center after:items-center after:text-xs after:font-semibold after:w-4 after:h-4 after:absolute after:bottom-[1rem] after:left-[1.1rem] after:rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    );
  }
};
