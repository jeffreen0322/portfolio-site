import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navigation() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleVisibilty = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleVisibilty();
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleVisibilty();
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("project-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleVisibilty();
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  const scrollToOngoing = () => {
    const element = document.getElementById("ongoing-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleVisibilty();
    } else {
      console.warn(`Element with id "${element}" not found`);
    }
  };

  return (
    <div className={`nav-header ${isMenuVisible ? "color-nav" : ""}`}>
      <Link to="/">
        <svg
          width="140"
          height="56"
          viewBox="0 0 70 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M9.86364 0.363636H11.2727V8.68182C11.2727 9.42424 11.1364 10.0549 10.8636 10.5739C10.5909 11.0928 10.2064 11.4867 9.71023 11.7557C9.21402 12.0246 8.62879 12.1591 7.95455 12.1591C7.31818 12.1591 6.75189 12.0436 6.25568 11.8125C5.75947 11.5777 5.36932 11.2443 5.08523 10.8125C4.80114 10.3807 4.65909 9.86742 4.65909 9.27273H6.04545C6.04545 9.60227 6.12689 9.89015 6.28977 10.1364C6.45644 10.3788 6.68371 10.5682 6.97159 10.7045C7.25947 10.8409 7.58712 10.9091 7.95455 10.9091C8.35985 10.9091 8.70455 10.8239 8.98864 10.6534C9.27273 10.483 9.48864 10.233 9.63636 9.90341C9.78788 9.57008 9.86364 9.16288 9.86364 8.68182V0.363636Z"
              fill="#B5C6E0"
            />
          </g>
          <g filter="url(#filter1_d_0_1)">
            <path
              d="M29.6364 0.363636V12H28.2727L21.9318 2.86364H21.8182V12H20.4091V0.363636H21.7727L28.1364 9.52273H28.25V0.363636H29.6364Z"
              fill="#B5C6E0"
            />
          </g>
          <g filter="url(#filter2_d_0_1)">
            <path
              d="M10 0.409091H21.6364V7.43182H20.3864V1.81818H16.4545V7.06818H15.2045V1.81818H11.25V7.52273H10V0.409091Z"
              fill="#E0CFB5"
            />
          </g>
          <path
            d="M25.75 23.4545C25.1023 23.4545 24.5455 23.3712 24.0795 23.2045C23.6136 23.0417 23.2254 22.8258 22.9148 22.5568C22.608 22.2917 22.3636 22.0076 22.1818 21.7045L23.25 20.9545C23.3712 21.1136 23.5246 21.2955 23.7102 21.5C23.8958 21.7083 24.1496 21.8883 24.4716 22.0398C24.7973 22.1951 25.2235 22.2727 25.75 22.2727C26.4545 22.2727 27.036 22.1023 27.4943 21.7614C27.9527 21.4205 28.1818 20.8864 28.1818 20.1591V18.3864H28.0682C27.9697 18.5455 27.8295 18.7424 27.6477 18.9773C27.4697 19.2083 27.2121 19.4148 26.875 19.5966C26.5417 19.7746 26.0909 19.8636 25.5227 19.8636C24.8182 19.8636 24.1856 19.697 23.625 19.3636C23.0682 19.0303 22.6269 18.5455 22.3011 17.9091C21.9792 17.2727 21.8182 16.5 21.8182 15.5909C21.8182 14.697 21.9754 13.9186 22.2898 13.2557C22.6042 12.589 23.0417 12.0739 23.6023 11.7102C24.1629 11.3428 24.8106 11.1591 25.5455 11.1591C26.1136 11.1591 26.5644 11.2538 26.8977 11.4432C27.2348 11.6288 27.4924 11.8409 27.6705 12.0795C27.8523 12.3144 27.9924 12.5076 28.0909 12.6591H28.2273V11.2727H29.5227V20.25C29.5227 21 29.3523 21.6098 29.0114 22.0795C28.6742 22.553 28.2197 22.8996 27.6477 23.1193C27.0795 23.3428 26.447 23.4545 25.75 23.4545ZM25.7045 18.6591C26.2424 18.6591 26.697 18.536 27.0682 18.2898C27.4394 18.0436 27.7216 17.6894 27.9148 17.2273C28.108 16.7652 28.2045 16.2121 28.2045 15.5682C28.2045 14.9394 28.1098 14.3845 27.9205 13.9034C27.7311 13.4223 27.4508 13.0455 27.0795 12.7727C26.7083 12.5 26.25 12.3636 25.7045 12.3636C25.1364 12.3636 24.6629 12.5076 24.2841 12.7955C23.9091 13.0833 23.6269 13.4697 23.4375 13.9545C23.2519 14.4394 23.1591 14.9773 23.1591 15.5682C23.1591 16.1742 23.2538 16.7102 23.4432 17.1761C23.6364 17.6383 23.9205 18.0019 24.2955 18.267C24.6742 18.5284 25.1439 18.6591 25.7045 18.6591ZM37.4773 16.4318V11.2727H38.8182V20H37.4773V18.5227H37.3864C37.1818 18.9659 36.8636 19.3428 36.4318 19.6534C36 19.9602 35.4545 20.1136 34.7955 20.1136C34.25 20.1136 33.7652 19.9943 33.3409 19.7557C32.9167 19.5133 32.5833 19.1496 32.3409 18.6648C32.0985 18.1761 31.9773 17.5606 31.9773 16.8182V11.2727H33.3182V16.7273C33.3182 17.3636 33.4962 17.8712 33.8523 18.25C34.2121 18.6288 34.6705 18.8182 35.2273 18.8182C35.5606 18.8182 35.8996 18.733 36.2443 18.5625C36.5928 18.392 36.8845 18.1307 37.1193 17.7784C37.358 17.4261 37.4773 16.9773 37.4773 16.4318ZM42.1378 23.2727C41.9105 23.2727 41.7079 23.2538 41.5298 23.2159C41.3518 23.1818 41.2287 23.1477 41.1605 23.1136L41.5014 21.9318C41.8272 22.0152 42.1151 22.0455 42.3651 22.0227C42.6151 22 42.8366 21.8883 43.0298 21.6875C43.2268 21.4905 43.4067 21.1705 43.5696 20.7273L43.8196 20.0455L40.5923 11.2727H42.0469L44.456 18.2273H44.5469L46.956 11.2727H48.4105L44.706 21.2727C44.5393 21.7235 44.3329 22.0966 44.0866 22.392C43.8404 22.6913 43.5545 22.9129 43.2287 23.0568C42.9067 23.2008 42.5431 23.2727 42.1378 23.2727ZM53.527 20.1818C52.6861 20.1818 51.9607 19.9962 51.3509 19.625C50.7448 19.25 50.277 18.7273 49.9474 18.0568C49.6217 17.3826 49.4588 16.5985 49.4588 15.7045C49.4588 14.8106 49.6217 14.0227 49.9474 13.3409C50.277 12.6553 50.7353 12.1212 51.3224 11.7386C51.9134 11.3523 52.6027 11.1591 53.3906 11.1591C53.8452 11.1591 54.294 11.2348 54.7372 11.3864C55.1804 11.5379 55.5838 11.7841 55.9474 12.125C56.3111 12.4621 56.6009 12.9091 56.8168 13.4659C57.0327 14.0227 57.1406 14.7083 57.1406 15.5227V16.0909H50.4134V14.9318H55.777C55.777 14.4394 55.6785 14 55.4815 13.6136C55.2884 13.2273 55.0118 12.9223 54.652 12.6989C54.2959 12.4754 53.8755 12.3636 53.3906 12.3636C52.8565 12.3636 52.3944 12.4962 52.0043 12.7614C51.6179 13.0227 51.3205 13.3636 51.1122 13.7841C50.9039 14.2045 50.7997 14.6553 50.7997 15.1364V15.9091C50.7997 16.5682 50.9134 17.1269 51.1406 17.5852C51.3717 18.0398 51.6918 18.3864 52.1009 18.625C52.5099 18.8598 52.9853 18.9773 53.527 18.9773C53.8793 18.9773 54.1974 18.928 54.4815 18.8295C54.7694 18.7273 55.0175 18.5758 55.2259 18.375C55.4342 18.1705 55.5952 17.9167 55.7088 17.6136L57.0043 17.9773C56.8679 18.4167 56.6387 18.803 56.3168 19.1364C55.9948 19.4659 55.5971 19.7235 55.1236 19.9091C54.6501 20.0909 54.1179 20.1818 53.527 20.1818ZM60.5213 14.75V20H59.1804V11.2727H60.4759V12.6364H60.5895C60.794 12.1932 61.1046 11.8371 61.5213 11.5682C61.938 11.2955 62.4759 11.1591 63.1349 11.1591C63.7259 11.1591 64.2429 11.2803 64.6861 11.5227C65.1293 11.7614 65.474 12.125 65.7202 12.6136C65.9664 13.0985 66.0895 13.7121 66.0895 14.4545V20H64.7486V14.5455C64.7486 13.8598 64.5705 13.3258 64.2145 12.9432C63.8584 12.5568 63.3698 12.3636 62.7486 12.3636C62.3205 12.3636 61.938 12.4564 61.6009 12.642C61.2675 12.8277 61.0043 13.0985 60.8111 13.4545C60.6179 13.8106 60.5213 14.2424 60.5213 14.75Z"
            fill="#B5C6E0"
          />
          <g filter="url(#filter3_f_0_1)">
            <path
              d="M24.9318 23.2955C24.2841 23.2955 23.7273 23.2121 23.2614 23.0455C22.7955 22.8826 22.4072 22.6667 22.0966 22.3977C21.7898 22.1326 21.5455 21.8485 21.3636 21.5455L22.4318 20.7955C22.553 20.9545 22.7064 21.1364 22.892 21.3409C23.0777 21.5492 23.3314 21.7292 23.6534 21.8807C23.9792 22.036 24.4053 22.1136 24.9318 22.1136C25.6364 22.1136 26.2178 21.9432 26.6761 21.6023C27.1345 21.2614 27.3636 20.7273 27.3636 20V18.2273H27.25C27.1515 18.3864 27.0114 18.5833 26.8295 18.8182C26.6515 19.0492 26.3939 19.2557 26.0568 19.4375C25.7235 19.6155 25.2727 19.7045 24.7045 19.7045C24 19.7045 23.3674 19.5379 22.8068 19.2045C22.25 18.8712 21.8087 18.3864 21.483 17.75C21.161 17.1136 21 16.3409 21 15.4318C21 14.5379 21.1572 13.7595 21.4716 13.0966C21.786 12.4299 22.2235 11.9148 22.7841 11.5511C23.3447 11.1837 23.9924 11 24.7273 11C25.2955 11 25.7462 11.0947 26.0795 11.2841C26.4167 11.4697 26.6742 11.6818 26.8523 11.9205C27.0341 12.1553 27.1742 12.3485 27.2727 12.5H27.4091V11.1136H28.7045V20.0909C28.7045 20.8409 28.5341 21.4508 28.1932 21.9205C27.8561 22.3939 27.4015 22.7405 26.8295 22.9602C26.2614 23.1837 25.6288 23.2955 24.9318 23.2955ZM24.8864 18.5C25.4242 18.5 25.8788 18.3769 26.25 18.1307C26.6212 17.8845 26.9034 17.5303 27.0966 17.0682C27.2898 16.6061 27.3864 16.053 27.3864 15.4091C27.3864 14.7803 27.2917 14.2254 27.1023 13.7443C26.9129 13.2633 26.6326 12.8864 26.2614 12.6136C25.8902 12.3409 25.4318 12.2045 24.8864 12.2045C24.3182 12.2045 23.8447 12.3485 23.4659 12.6364C23.0909 12.9242 22.8087 13.3106 22.6193 13.7955C22.4337 14.2803 22.3409 14.8182 22.3409 15.4091C22.3409 16.0152 22.4356 16.5511 22.625 17.017C22.8182 17.4792 23.1023 17.8428 23.4773 18.108C23.8561 18.3693 24.3258 18.5 24.8864 18.5ZM36.6591 16.2727V11.1136H38V19.8409H36.6591V18.3636H36.5682C36.3636 18.8068 36.0455 19.1837 35.6136 19.4943C35.1818 19.8011 34.6364 19.9545 33.9773 19.9545C33.4318 19.9545 32.947 19.8352 32.5227 19.5966C32.0985 19.3542 31.7652 18.9905 31.5227 18.5057C31.2803 18.017 31.1591 17.4015 31.1591 16.6591V11.1136H32.5V16.5682C32.5 17.2045 32.678 17.7121 33.0341 18.0909C33.3939 18.4697 33.8523 18.6591 34.4091 18.6591C34.7424 18.6591 35.0814 18.5739 35.4261 18.4034C35.7746 18.233 36.0663 17.9716 36.3011 17.6193C36.5398 17.267 36.6591 16.8182 36.6591 16.2727ZM41.3196 23.1136C41.0923 23.1136 40.8897 23.0947 40.7116 23.0568C40.5336 23.0227 40.4105 22.9886 40.3423 22.9545L40.6832 21.7727C41.009 21.8561 41.2969 21.8864 41.5469 21.8636C41.7969 21.8409 42.0185 21.7292 42.2116 21.5284C42.4086 21.3314 42.5885 21.0114 42.7514 20.5682L43.0014 19.8864L39.7741 11.1136H41.2287L43.6378 18.0682H43.7287L46.1378 11.1136H47.5923L43.8878 21.1136C43.7211 21.5644 43.5147 21.9375 43.2685 22.233C43.0223 22.5322 42.7363 22.7538 42.4105 22.8977C42.0885 23.0417 41.7249 23.1136 41.3196 23.1136ZM52.7088 20.0227C51.8679 20.0227 51.1425 19.8371 50.5327 19.4659C49.9266 19.0909 49.4588 18.5682 49.1293 17.8977C48.8035 17.2235 48.6406 16.4394 48.6406 15.5455C48.6406 14.6515 48.8035 13.8636 49.1293 13.1818C49.4588 12.4962 49.9171 11.9621 50.5043 11.5795C51.0952 11.1932 51.7846 11 52.5724 11C53.027 11 53.4759 11.0758 53.919 11.2273C54.3622 11.3788 54.7656 11.625 55.1293 11.9659C55.4929 12.303 55.7827 12.75 55.9986 13.3068C56.2145 13.8636 56.3224 14.5492 56.3224 15.3636V15.9318H49.5952V14.7727H54.9588C54.9588 14.2803 54.8603 13.8409 54.6634 13.4545C54.4702 13.0682 54.1937 12.7633 53.8338 12.5398C53.4777 12.3163 53.0573 12.2045 52.5724 12.2045C52.0384 12.2045 51.5762 12.3371 51.1861 12.6023C50.7997 12.8636 50.5024 13.2045 50.294 13.625C50.0857 14.0455 49.9815 14.4962 49.9815 14.9773V15.75C49.9815 16.4091 50.0952 16.9678 50.3224 17.4261C50.5535 17.8807 50.8736 18.2273 51.2827 18.4659C51.6918 18.7008 52.1671 18.8182 52.7088 18.8182C53.0611 18.8182 53.3793 18.7689 53.6634 18.6705C53.9512 18.5682 54.1993 18.4167 54.4077 18.2159C54.616 18.0114 54.777 17.7576 54.8906 17.4545L56.1861 17.8182C56.0497 18.2576 55.8205 18.6439 55.4986 18.9773C55.1766 19.3068 54.7789 19.5644 54.3054 19.75C53.8319 19.9318 53.2997 20.0227 52.7088 20.0227ZM59.7031 14.5909V19.8409H58.3622V11.1136H59.6577V12.4773H59.7713C59.9759 12.0341 60.2865 11.678 60.7031 11.4091C61.1198 11.1364 61.6577 11 62.3168 11C62.9077 11 63.4247 11.1212 63.8679 11.3636C64.3111 11.6023 64.6558 11.9659 64.902 12.4545C65.1482 12.9394 65.2713 13.553 65.2713 14.2955V19.8409H63.9304V14.3864C63.9304 13.7008 63.7524 13.1667 63.3963 12.7841C63.0402 12.3977 62.5516 12.2045 61.9304 12.2045C61.5024 12.2045 61.1198 12.2973 60.7827 12.483C60.4493 12.6686 60.1861 12.9394 59.9929 13.2955C59.7997 13.6515 59.7031 14.0833 59.7031 14.5909Z"
              fill="#E0CFB5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0.659088"
              y="0.363647"
              width="14.6136"
              height="19.7954"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_1"
              x="16.4091"
              y="0.363647"
              width="17.2273"
              height="19.6364"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_0_1"
              x="6"
              y="0.409088"
              width="19.6364"
              height="15.1136"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_f_0_1"
              x="17"
              y="7"
              width="52.2713"
              height="20.2954"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_0_1"
              />
            </filter>
          </defs>
        </svg>
      </Link>

      <div className={`nav-showable ${isMenuVisible ? "nav-show" : ""}`}>
        <div className="nav-space">
          <div className="nav-item">
            <button onClick={scrollToAbout} className="nav-btn">
              About Me
            </button>
          </div>
          <div className="nav-item">
            <button onClick={scrollToResume} className="nav-btn">
              Resume
            </button>
          </div>
          <div className="nav-item">
            <button onClick={scrollToProjects} className="nav-btn">
              Projects
            </button>
          </div>
          <div className="nav-item">
            <button onClick={scrollToOngoing} className="nav-btn">
              In Progress
            </button>
          </div>
        </div>
      </div>
      <button className="hamburger-btn nav-item" onClick={toggleVisibilty}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          ></path>
        </svg>
      </button>
    </div>
  );
}
