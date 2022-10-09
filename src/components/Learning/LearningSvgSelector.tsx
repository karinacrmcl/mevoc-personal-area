import React from 'react';
import anim from './Stages/Animations.module.scss';

export function LearningSvgSelector({ id }: { id: string }) {
  switch (id) {
    case 'keyboard':
      return (
        <svg
          width="72"
          height="71"
          viewBox="0 0 72 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8132 19.2141C12.6472 19.5681 10.7039 21.2672 9.77279 23.6237L9.49951 24.3215V35.7499V47.1783L9.7323 47.8357C10.127 48.9178 10.7039 49.909 11.3214 50.5259C11.6452 50.8495 12.708 51.6081 13.0926 51.7901C13.9225 52.1845 14.2059 52.2756 15.1168 52.4273C15.9974 52.579 17.88 52.5992 36.6753 52.5587C58.8309 52.5284 57.4139 52.5587 58.8005 52.0531C59.9543 51.6283 61.2701 50.5158 62.009 49.3325C62.4341 48.6448 62.5656 48.3414 62.7984 47.4817C62.9806 46.8142 62.9907 46.2074 62.9907 35.8005C62.9907 25.2722 62.9806 24.7969 62.7883 24.0889C62.4341 22.7539 61.8875 21.8538 60.845 20.8728C60.1163 20.2053 59.4989 19.8209 58.3855 19.3759C57.8795 19.1737 57.677 19.1737 36.5741 19.1535C24.8536 19.1433 15.0662 19.1737 14.8132 19.2141ZM57.3329 22.4707C58.345 22.8247 59.094 23.5124 59.509 24.4732C59.6912 24.9081 59.7013 25.2621 59.7013 35.851V46.7737L59.4584 47.2794C59.1041 48.0177 58.3046 48.756 57.5758 49.0291L56.9685 49.2516L36.068 49.2314L15.1675 49.201L14.6108 48.9178C13.6493 48.4223 13.1128 47.7649 12.8193 46.7232C12.627 46.0152 12.6371 25.5351 12.8294 24.807C13.1229 23.6945 14.0946 22.764 15.3092 22.4404C15.9367 22.2684 17.0804 22.2583 36.4222 22.2786C55.1568 22.2988 56.9078 22.319 57.3329 22.4707Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M19.5501 29.1962C19.0643 29.2468 18.4064 29.8637 18.3153 30.3694C18.2039 30.9762 18.3456 31.5123 18.7201 31.8764C18.9023 32.0584 19.1655 32.2404 19.2869 32.2809C19.6817 32.382 22.6776 32.3719 22.9812 32.2506C23.7099 31.9775 24.1553 31.0875 23.9427 30.3492C23.8719 30.1469 23.6593 29.8132 23.467 29.6109C23.1735 29.3277 23.0015 29.2367 22.5764 29.1861C22.0298 29.1254 20.208 29.1254 19.5501 29.1962Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M29.6411 29.2167C28.791 29.3684 28.376 29.8842 28.376 30.8045C28.376 31.3709 28.4063 31.4518 28.7606 31.826C29.2262 32.3418 29.5197 32.3924 31.5743 32.3418C32.9812 32.3115 33.1128 32.2912 33.386 32.0788C34.2565 31.4012 34.2565 30.137 33.3962 29.4796C33.0318 29.1965 32.9812 29.1965 31.5338 29.1661C30.714 29.156 29.8638 29.1762 29.6411 29.2167Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M39.7115 29.2165C38.335 29.4592 37.9301 31.1988 39.0536 32.0787C39.3471 32.3012 39.4179 32.3113 41.2499 32.3113C43.011 32.3113 43.1527 32.3012 43.426 32.0989C43.8106 31.8157 44.1648 31.1786 44.1648 30.7639C44.1648 30.2784 43.8207 29.6817 43.3855 29.4188C43.0414 29.2064 42.8794 29.1862 41.5434 29.1659C40.7337 29.1558 39.9038 29.1761 39.7115 29.2165Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M49.7217 29.2165C49.0334 29.3581 48.416 30.0964 48.416 30.7639C48.416 31.1786 48.7703 31.8157 49.1549 32.0989C49.4281 32.3012 49.5698 32.3113 51.3411 32.3113C53.1427 32.3113 53.2439 32.3012 53.5172 32.0888C54.418 31.3707 54.3876 30.0762 53.4564 29.4188C53.173 29.2165 53.001 29.1862 51.6144 29.1659C50.7743 29.1457 49.9241 29.1659 49.7217 29.2165Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M19.1149 39.4109C17.9509 40.0177 18.0218 41.8179 19.2364 42.3236C19.9448 42.6169 20.6837 42.4248 21.1493 41.8078C21.5035 41.3426 21.544 40.402 21.2201 39.9672C20.7141 39.2794 19.8133 39.0367 19.1149 39.4109Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M27.8295 39.4312C27.3538 39.7447 27.1108 40.2201 27.1108 40.8572C27.1108 41.5349 27.3942 41.9697 28.0218 42.2732C28.4266 42.4653 28.6493 42.4754 36.1998 42.4754C44.9244 42.4754 44.5296 42.5058 45.0863 41.7371C45.6126 41.0089 45.4406 40.1088 44.641 39.502L44.2969 39.2391H36.2099C28.4266 39.2391 28.1129 39.2492 27.8295 39.4312Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
          <path
            d="M51.8069 39.4312C51.3514 39.7043 51.1793 39.947 51.0376 40.4628C50.8959 40.9887 50.9465 41.2921 51.2806 41.7776C51.898 42.6979 53.1935 42.6979 53.8716 41.7574C54.651 40.6954 53.902 39.2391 52.5862 39.2391C52.3028 39.2391 51.989 39.3099 51.8069 39.4312Z"
            fill="#C4C3CA"
            fillOpacity="0.7"
          />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7531 15.7424L19.1781 11.3174C19.411 11.0832 19.5416 10.7664 19.5416 10.4362C19.5416 10.1059 19.411 9.78913 19.1781 9.55493C19.0619 9.43777 18.9237 9.34477 18.7714 9.28131C18.619 9.21785 18.4557 9.18518 18.2906 9.18518C18.1256 9.18518 17.9622 9.21785 17.8099 9.28131C17.6576 9.34477 17.5193 9.43777 17.4031 9.55493L12.1031 14.8549C11.986 14.9711 11.893 15.1094 11.8295 15.2617C11.7661 15.414 11.7334 15.5774 11.7334 15.7424C11.7334 15.9074 11.7661 16.0708 11.8295 16.2231C11.893 16.3755 11.986 16.5137 12.1031 16.6299L17.4031 21.9924C17.5199 22.1083 17.6585 22.1999 17.8108 22.2621C17.9631 22.3243 18.1261 22.3559 18.2906 22.3549C18.4552 22.3559 18.6182 22.3243 18.7705 22.2621C18.9228 22.1999 19.0613 22.1083 19.1781 21.9924C19.411 21.7582 19.5416 21.4414 19.5416 21.1112C19.5416 20.7809 19.411 20.4641 19.1781 20.2299L14.7531 15.7424Z"
            fill="#9999A1"
          />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5376 14.8549L13.2376 9.55493C13.1214 9.43777 12.9832 9.34477 12.8308 9.28131C12.6785 9.21785 12.5151 9.18518 12.3501 9.18518C12.1851 9.18518 12.0217 9.21785 11.8694 9.28131C11.7171 9.34477 11.5788 9.43777 11.4626 9.55493C11.2298 9.78913 11.0991 10.1059 11.0991 10.4362C11.0991 10.7664 11.2298 11.0832 11.4626 11.3174L15.8876 15.7424L11.4626 20.1674C11.2298 20.4016 11.0991 20.7184 11.0991 21.0487C11.0991 21.3789 11.2298 21.6957 11.4626 21.9299C11.5794 22.0458 11.7179 22.1374 11.8702 22.1996C12.0225 22.2618 12.1856 22.2934 12.3501 22.2924C12.5146 22.2934 12.6777 22.2618 12.83 22.1996C12.9823 22.1374 13.1208 22.0458 13.2376 21.9299L18.5376 16.6299C18.6548 16.5137 18.7478 16.3755 18.8112 16.2231C18.8747 16.0708 18.9074 15.9074 18.9074 15.7424C18.9074 15.5774 18.8747 15.414 18.8112 15.2617C18.7478 15.1094 18.6548 14.9711 18.5376 14.8549Z"
            fill="#9999A1"
          />
        </svg>
      );

    case 'checkmark':
      return (
        <svg
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
          className={anim.svg}
        >
          <g
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className={anim.circle}
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path
              className={anim.tick}
              d="M6.5 13.5L10 17 l8.808621-8.308621"
            />
          </g>
        </svg>
      );

    default:
      return null;
  }
}