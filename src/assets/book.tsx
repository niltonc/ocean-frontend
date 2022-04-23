import { SVGProps } from 'react';

const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.25C0 .905.28.625.625.625h3.75A3.127 3.127 0 0 1 7.5 3.75v8.75a.625.625 0 0 1-1.25 0A1.252 1.252 0 0 0 5 11.25H.625A.625.625 0 0 1 0 10.625V1.25Zm6.25 9.085V3.75c0-.497-.198-.974-.549-1.326a1.88 1.88 0 0 0-1.326-.549H1.25V10H5c.442 0 .873.117 1.25.335Z"
      fill="#00B9FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.165 1.54a3.125 3.125 0 0 1 2.21-.915h3.75c.345 0 .625.28.625.625v9.375c0 .345-.28.625-.625.625H8.75A1.25 1.25 0 0 0 7.5 12.5a.625.625 0 0 1-1.25 0V3.75c0-.829.329-1.624.915-2.21Zm.335 8.795A2.495 2.495 0 0 1 8.75 10h3.75V1.875H9.375A1.875 1.875 0 0 0 7.5 3.75v6.585Z"
      fill="#00B9FF"
    />
  </svg>
);

export default Book;
