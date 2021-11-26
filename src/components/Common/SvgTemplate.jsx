import React from "react";

const SvgTemplate = (props) => {
  switch (props.id) {
    case "settings":
      return (
        <svg
          className="icon icon--settings"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5369 5.84992L12.4531 6.48092C12.5139 6.81222 12.5538 7.15072 12.5538 7.50011C12.5538 7.84934 12.5139 8.18784 12.4531 8.51916L13.5369 9.15011C13.9796 9.40783 14.1312 9.9786 13.8757 10.425L12.9501 12.0417C12.6945 12.488 12.1284 12.641 11.6857 12.3833L10.5907 11.7459C10.0792 12.1849 9.49763 12.5439 8.85126 12.7747V13.5666C8.85126 14.0821 8.43686 14.5 7.92558 14.5H6.07433C5.56321 14.5 5.14881 14.0821 5.14881 13.5666V12.7747C4.50244 12.5439 3.92091 12.1849 3.40929 11.7459L2.3144 12.3833C1.87163 12.641 1.30553 12.488 1.04993 12.0417L0.124333 10.425C-0.131251 9.9786 0.0204445 9.40783 0.463133 9.15011L1.54694 8.51916C1.48619 8.18784 1.4463 7.84934 1.4463 7.50011C1.4463 7.15072 1.48619 6.81222 1.54694 6.48092L0.463133 5.84992C0.0204445 5.59223 -0.131251 5.02132 0.124333 4.57504L1.04993 2.95842C1.30553 2.51196 1.87163 2.35894 2.3144 2.61677L3.40929 3.25421C3.92091 2.81499 4.50244 2.45618 5.14881 2.22547V1.43341C5.14881 0.917987 5.56321 0.500092 6.07433 0.500092H7.92558C8.43686 0.500092 8.85126 0.917987 8.85126 1.43341V2.22547C9.49763 2.45618 10.0792 2.81499 10.5907 3.25421L11.6857 2.61677C12.1284 2.35894 12.6945 2.51196 12.9501 2.95842L13.8757 4.57504C14.1312 5.02132 13.9796 5.59223 13.5369 5.84992ZM12.8427 4.63746L12.3799 3.82913C12.252 3.60606 11.969 3.52944 11.7477 3.65837L10.4618 4.40701C9.80905 3.66462 8.92702 3.13208 7.92558 2.9271V1.90004C7.92558 1.6423 7.71838 1.43341 7.4628 1.43341H6.5372C6.28152 1.43341 6.07433 1.6423 6.07433 1.90004V2.9271C5.07297 3.13208 4.19094 3.66462 3.5383 4.40701L2.2524 3.65837C2.031 3.52944 1.74796 3.60606 1.62012 3.82913L1.1574 4.63746C1.02956 4.86068 1.10542 5.1462 1.32672 5.27499L2.6178 6.02659C2.46401 6.49078 2.37188 6.98356 2.37188 7.50011C2.37188 8.01652 2.46401 8.50924 2.6178 8.97354L1.32672 9.72507C1.10542 9.85402 1.02956 10.1394 1.1574 10.3626L1.62012 11.1708C1.74796 11.394 2.031 11.4705 2.2524 11.3416L3.53822 10.5931C4.19094 11.3355 5.07297 11.868 6.07433 12.073V13.1001C6.07433 13.3578 6.28152 13.5666 6.5372 13.5666H7.4628C7.71838 13.5666 7.92558 13.3578 7.92558 13.1001V12.073C8.92702 11.868 9.80905 11.3355 10.4618 10.5931L11.7477 11.3416C11.969 11.4705 12.252 11.394 12.3799 11.1708L12.8427 10.3626C12.9705 10.1394 12.8946 9.85402 12.6733 9.72507L11.3822 8.97354C11.5361 8.50924 11.6281 8.01652 11.6281 7.50011C11.6281 6.98356 11.5361 6.49078 11.3822 6.02659L12.6733 5.27499C12.8946 5.1462 12.9705 4.86068 12.8427 4.63746ZM7 9.83328C5.72193 9.83328 4.68595 8.78867 4.68595 7.50011C4.68595 6.21127 5.72193 5.16666 7 5.16666C8.27798 5.16666 9.31404 6.21127 9.31404 7.50011C9.31404 8.78867 8.27798 9.83328 7 9.83328ZM7 6.10002C6.23321 6.10002 5.61161 6.72683 5.61161 7.50011C5.61161 8.2732 6.23321 8.89991 7 8.89991C7.76678 8.89991 8.38838 8.2732 8.38838 7.50011C8.38838 6.72683 7.76678 6.10002 7 6.10002Z"
            fill="white"
          />
        </svg>
      );
    case "dialog":
      return (
        <svg
          className="icon icon--dialog"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14.4999C7.48839 14.4999 6.98962 14.4537 6.50472 14.3734L3.00005 16.5001V12.9596C1.17274 11.6767 -1.00136e-05 9.70951 -1.00136e-05 7.49994C-1.00136e-05 3.63404 3.58176 0.499972 8 0.499972C12.4183 0.499972 16 3.63404 16 7.49994C16 11.3661 12.4183 14.4999 8 14.4999ZM8 1.50014C4.13401 1.50014 0.999998 4.18641 0.999998 7.49994C0.999998 9.53322 2.18285 11.3268 3.98764 12.4121L3.9561 14.7313L6.30987 13.3165C6.85203 13.432 7.41612 13.5 8 13.5C11.866 13.5 15.0001 10.8138 15.0001 7.49994C15.0001 4.18641 11.866 1.50014 8 1.50014ZM11.5 7.00002H4.50001C4.22387 7.00002 3.99999 6.77605 3.99999 6.50006C3.99999 6.22379 4.22387 6 4.50001 6H11.5C11.7761 6 12 6.22379 12 6.50006C12 6.77605 11.7761 7.00002 11.5 7.00002ZM5.50002 9.00002H10.5C10.7762 9.00002 11.0001 9.22385 11.0001 9.49999C11.0001 9.77627 10.7762 10.0001 10.5 10.0001H5.50002C5.22382 10.0001 5.00001 9.77627 5.00001 9.49999C5.00001 9.22385 5.22382 9.00002 5.50002 9.00002Z"
            fill="white"
          />
        </svg>
      );
    default:
      return <svg className="empty"></svg>;
  }
};

export default SvgTemplate;
