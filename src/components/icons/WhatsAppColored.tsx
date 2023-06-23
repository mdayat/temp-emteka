export function WhatsAppColored({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <g id="whatsapp">
        <path
          id="border"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
          fill="#BFC8D0"
        />
        <path
          id="bg"
          d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
          fill="url(#paint0_linear_9002_311045)"
        />
        <path
          id="border_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
          fill="white"
        />
        <path
          id="phone"
          d="M12.5 9.4994C12.1672 8.83082 11.6565 8.89001 11.1407 8.89001C10.2188 8.89001 8.78125 9.99429 8.78125 12.0495C8.78125 13.7338 9.52345 15.5775 12.0244 18.3356C14.438 20.9974 17.6094 22.3743 20.2422 22.3275C22.875 22.2806 23.4167 20.015 23.4167 19.2498C23.4167 18.9107 23.2062 18.7415 23.0613 18.6955C22.1641 18.265 20.5093 17.4627 20.1328 17.3119C19.7563 17.1612 19.5597 17.3651 19.4375 17.476C19.0961 17.8014 18.4193 18.7603 18.1875 18.976C17.9558 19.1917 17.6103 19.0825 17.4665 19.001C16.9374 18.7887 15.5029 18.1506 14.3595 17.0421C12.9453 15.6713 12.8623 15.1997 12.5959 14.7798C12.3828 14.444 12.5392 14.2379 12.6172 14.1478C12.9219 13.7963 13.3426 13.2535 13.5313 12.9838C13.7199 12.714 13.5702 12.3045 13.4803 12.0495C13.0938 10.9525 12.7663 10.0343 12.5 9.4994Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_9002_311045"
          x1="26.5"
          y1="7"
          x2="4"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5BD066" />
          <stop offset="1" stopColor="#27B43E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
