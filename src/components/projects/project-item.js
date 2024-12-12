import { useState } from "react";
import { Link } from "react-router-dom";
import { TagToggle } from "../label/label";
import "./project-item.css";

export default function ProjectItem({ info }) {
  // Default state
  const [isHovered, setHover] = useState(false);

  return (
    <div
      className="sample"
      id="sample-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={info.image} alt={info.title} />
      <div className={`overlay ${isHovered ? "active" : "inactive"}`}>
        <h3>{info.title}</h3>
        <div className="btn-links">
          {info.videoUrl ? (
            <Link to={info.videoUrl}>
              <svg
                width="85"
                height="40"
                viewBox="0 0 85 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="figma"
              >
                <g clipPath="url(#clip0_12_231)">
                  <rect width="85" height="40" rx="20" fill="#5384ce" />
                  <path
                    d="M28.7512 23.1816L31.3693 15.0469H33.2629L29.6945 25H28.4162L28.7512 23.1816ZM26.3312 15.0469L28.9289 23.1816L29.2844 25H27.9992L24.4445 15.0469H26.3312ZM36.0768 17.6035V25H34.4225V17.6035H36.0768ZM34.3131 15.6621C34.3131 15.4115 34.3951 15.2041 34.5592 15.04C34.7278 14.8714 34.9602 14.7871 35.2564 14.7871C35.5481 14.7871 35.7783 14.8714 35.9469 15.04C36.1155 15.2041 36.1998 15.4115 36.1998 15.6621C36.1998 15.9082 36.1155 16.1133 35.9469 16.2773C35.7783 16.4414 35.5481 16.5234 35.2564 16.5234C34.9602 16.5234 34.7278 16.4414 34.5592 16.2773C34.3951 16.1133 34.3131 15.9082 34.3131 15.6621ZM42.4932 23.4688V14.5H44.1475V25H42.6504L42.4932 23.4688ZM37.6807 21.3838V21.2402C37.6807 20.6797 37.7467 20.1693 37.8789 19.709C38.0111 19.2441 38.2025 18.8454 38.4531 18.5127C38.7038 18.1755 39.0091 17.918 39.3691 17.7402C39.7292 17.5579 40.1348 17.4668 40.5859 17.4668C41.0326 17.4668 41.4245 17.5534 41.7617 17.7266C42.099 17.8997 42.3861 18.1481 42.623 18.4717C42.86 18.7907 43.0492 19.1735 43.1904 19.6201C43.3317 20.0622 43.432 20.5544 43.4912 21.0967V21.5547C43.432 22.0833 43.3317 22.5664 43.1904 23.0039C43.0492 23.4414 42.86 23.8197 42.623 24.1387C42.3861 24.4577 42.0967 24.7038 41.7549 24.877C41.4176 25.0501 41.0234 25.1367 40.5723 25.1367C40.1257 25.1367 39.7223 25.0433 39.3623 24.8564C39.0068 24.6696 38.7038 24.4076 38.4531 24.0703C38.2025 23.7331 38.0111 23.3366 37.8789 22.8809C37.7467 22.4206 37.6807 21.9215 37.6807 21.3838ZM39.3281 21.2402V21.3838C39.3281 21.721 39.3577 22.0355 39.417 22.3271C39.4808 22.6188 39.5788 22.8763 39.7109 23.0996C39.8431 23.3184 40.014 23.4915 40.2236 23.6191C40.4378 23.7422 40.693 23.8037 40.9893 23.8037C41.363 23.8037 41.6706 23.7217 41.9121 23.5576C42.1536 23.3936 42.3428 23.1725 42.4795 22.8945C42.6208 22.612 42.7165 22.2975 42.7666 21.9512V20.7139C42.7393 20.445 42.6823 20.1943 42.5957 19.9619C42.5137 19.7295 42.402 19.5267 42.2607 19.3535C42.1195 19.1758 41.944 19.0391 41.7344 18.9434C41.5293 18.8431 41.2855 18.793 41.0029 18.793C40.7021 18.793 40.4469 18.8568 40.2373 18.9844C40.0277 19.112 39.8545 19.2874 39.7178 19.5107C39.5856 19.734 39.4876 19.9938 39.4238 20.29C39.36 20.5863 39.3281 20.903 39.3281 21.2402ZM49.2309 25.1367C48.684 25.1367 48.1895 25.0479 47.7475 24.8701C47.31 24.6878 46.9363 24.4349 46.6264 24.1113C46.321 23.7878 46.0863 23.4072 45.9223 22.9697C45.7582 22.5322 45.6762 22.0605 45.6762 21.5547V21.2812C45.6762 20.7025 45.7605 20.1784 45.9291 19.709C46.0977 19.2396 46.3324 18.8385 46.6332 18.5059C46.934 18.1686 47.2895 17.9111 47.6996 17.7334C48.1098 17.5557 48.5541 17.4668 49.0326 17.4668C49.5613 17.4668 50.0238 17.5557 50.4203 17.7334C50.8168 17.9111 51.1449 18.1618 51.4047 18.4854C51.669 18.8044 51.865 19.1849 51.9926 19.627C52.1247 20.069 52.1908 20.5566 52.1908 21.0898V21.7939H46.476V20.6113H50.5639V20.4814C50.5548 20.1852 50.4955 19.9072 50.3861 19.6475C50.2813 19.3877 50.1195 19.1781 49.9008 19.0186C49.682 18.859 49.3904 18.7793 49.0258 18.7793C48.7523 18.7793 48.5085 18.8385 48.2943 18.957C48.0847 19.071 47.9092 19.2373 47.768 19.4561C47.6267 19.6748 47.5173 19.9391 47.4398 20.249C47.3669 20.5544 47.3305 20.8984 47.3305 21.2812V21.5547C47.3305 21.8783 47.3738 22.179 47.4604 22.457C47.5515 22.7305 47.6837 22.9697 47.8568 23.1748C48.03 23.3799 48.2396 23.5417 48.4857 23.6602C48.7318 23.7741 49.0121 23.8311 49.3266 23.8311C49.723 23.8311 50.0762 23.7513 50.3861 23.5918C50.696 23.4323 50.9649 23.2067 51.1928 22.915L52.0609 23.7559C51.9014 23.9883 51.6941 24.2116 51.4389 24.4258C51.1837 24.6354 50.8715 24.8063 50.5023 24.9385C50.1378 25.0706 49.7139 25.1367 49.2309 25.1367ZM53.2615 21.3838V21.2266C53.2615 20.6934 53.339 20.1989 53.4939 19.7432C53.6489 19.2829 53.8722 18.8841 54.1639 18.5469C54.4601 18.2051 54.8201 17.9408 55.2439 17.7539C55.6723 17.5625 56.1554 17.4668 56.6932 17.4668C57.2355 17.4668 57.7186 17.5625 58.1424 17.7539C58.5708 17.9408 58.9331 18.2051 59.2293 18.5469C59.5255 18.8841 59.7511 19.2829 59.9061 19.7432C60.061 20.1989 60.1385 20.6934 60.1385 21.2266V21.3838C60.1385 21.917 60.061 22.4115 59.9061 22.8672C59.7511 23.3229 59.5255 23.7217 59.2293 24.0635C58.9331 24.4007 58.573 24.665 58.1492 24.8564C57.7254 25.0433 57.2446 25.1367 56.7068 25.1367C56.1645 25.1367 55.6792 25.0433 55.2508 24.8564C54.827 24.665 54.4669 24.4007 54.1707 24.0635C53.8745 23.7217 53.6489 23.3229 53.4939 22.8672C53.339 22.4115 53.2615 21.917 53.2615 21.3838ZM54.909 21.2266V21.3838C54.909 21.7165 54.9432 22.0309 55.0115 22.3271C55.0799 22.6234 55.187 22.8831 55.3328 23.1064C55.4786 23.3298 55.6655 23.5052 55.8934 23.6328C56.1212 23.7604 56.3924 23.8242 56.7068 23.8242C57.0122 23.8242 57.2765 23.7604 57.4998 23.6328C57.7277 23.5052 57.9145 23.3298 58.0604 23.1064C58.2062 22.8831 58.3133 22.6234 58.3816 22.3271C58.4546 22.0309 58.491 21.7165 58.491 21.3838V21.2266C58.491 20.8984 58.4546 20.5885 58.3816 20.2969C58.3133 20.0007 58.2039 19.7386 58.0535 19.5107C57.9077 19.2829 57.7208 19.1051 57.493 18.9775C57.2697 18.8454 57.0031 18.7793 56.6932 18.7793C56.3833 18.7793 56.1144 18.8454 55.8865 18.9775C55.6632 19.1051 55.4786 19.2829 55.3328 19.5107C55.187 19.7386 55.0799 20.0007 55.0115 20.2969C54.9432 20.5885 54.909 20.8984 54.909 21.2266Z"
                    fill="#e0cfb5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_231">
                    <rect width="85" height="40" rx="20" fill="#e0cfb5" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          ) : null}

          {info.repo ? (
            <Link to={info.repo}>
              <svg
                width="90"
                height="40"
                viewBox="0 0 90 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="figma"
              >
                <g clipPath="url(#clip0_12_231)">
                  <rect width="90" height="40" rx="20" fill="#65558F" />
                  <path
                    d="M32.7939 19.9141V23.7148C32.6527 23.9017 32.4316 24.1068 32.1309 24.3301C31.8346 24.5488 31.4404 24.738 30.9482 24.8975C30.4561 25.057 29.8431 25.1367 29.1094 25.1367C28.485 25.1367 27.9131 25.0319 27.3936 24.8223C26.874 24.6081 26.4251 24.2959 26.0469 23.8857C25.6732 23.4756 25.3838 22.9766 25.1787 22.3887C24.9736 21.7962 24.8711 21.1217 24.8711 20.3652V19.6748C24.8711 18.9229 24.9645 18.2529 25.1514 17.665C25.3428 17.0726 25.6162 16.5713 25.9717 16.1611C26.3271 15.751 26.7555 15.4411 27.2568 15.2314C27.7627 15.0173 28.3346 14.9102 28.9727 14.9102C29.7884 14.9102 30.4629 15.0469 30.9961 15.3203C31.5339 15.5892 31.9486 15.9629 32.2402 16.4414C32.5319 16.9199 32.7165 17.4668 32.7939 18.082H31.1123C31.0576 17.7357 30.9505 17.4258 30.791 17.1523C30.6361 16.8789 30.4128 16.6647 30.1211 16.5098C29.834 16.3503 29.4603 16.2705 29 16.2705C28.6035 16.2705 28.2549 16.3457 27.9541 16.4961C27.6533 16.6465 27.4027 16.8675 27.2021 17.1592C27.0062 17.4508 26.8581 17.8063 26.7578 18.2256C26.6576 18.6449 26.6074 19.1234 26.6074 19.6611V20.3652C26.6074 20.9121 26.6644 21.3975 26.7783 21.8213C26.8968 22.2451 27.0654 22.6029 27.2842 22.8945C27.5075 23.1862 27.7786 23.4072 28.0977 23.5576C28.4167 23.7035 28.7767 23.7764 29.1777 23.7764C29.5697 23.7764 29.891 23.7445 30.1416 23.6807C30.3923 23.6123 30.5905 23.5326 30.7363 23.4414C30.8867 23.3457 31.0029 23.2546 31.085 23.168V21.1924H29.0137V19.9141H32.7939ZM36.3939 17.6035V25H34.7396V17.6035H36.3939ZM34.6303 15.6621C34.6303 15.4115 34.7123 15.2041 34.8764 15.04C35.045 14.8714 35.2774 14.7871 35.5736 14.7871C35.8653 14.7871 36.0954 14.8714 36.2641 15.04C36.4327 15.2041 36.517 15.4115 36.517 15.6621C36.517 15.9082 36.4327 16.1133 36.2641 16.2773C36.0954 16.4414 35.8653 16.5234 35.5736 16.5234C35.2774 16.5234 35.045 16.4414 34.8764 16.2773C34.7123 16.1133 34.6303 15.9082 34.6303 15.6621ZM41.6893 17.6035V18.8066H37.5193V17.6035H41.6893ZM38.7225 15.792H40.3699V22.9561C40.3699 23.1839 40.4018 23.3594 40.4656 23.4824C40.534 23.6009 40.6274 23.6807 40.7459 23.7217C40.8644 23.7627 41.0034 23.7832 41.1629 23.7832C41.2768 23.7832 41.3862 23.7764 41.491 23.7627C41.5958 23.749 41.6801 23.7354 41.7439 23.7217L41.7508 24.9795C41.6141 25.0205 41.4546 25.057 41.2723 25.0889C41.0945 25.1208 40.8895 25.1367 40.657 25.1367C40.2788 25.1367 39.9438 25.0706 39.6521 24.9385C39.3605 24.8018 39.1326 24.5807 38.9686 24.2754C38.8045 23.9701 38.7225 23.5645 38.7225 23.0586V15.792ZM44.6877 14.5V25H43.0471V14.5H44.6877ZM44.4006 21.0283L43.8674 21.0215C43.8719 20.5111 43.9426 20.0394 44.0793 19.6064C44.2206 19.1735 44.4165 18.7975 44.6672 18.4785C44.9224 18.1549 45.2277 17.9066 45.5832 17.7334C45.9387 17.5557 46.3329 17.4668 46.7658 17.4668C47.1304 17.4668 47.4585 17.5169 47.7502 17.6172C48.0464 17.7174 48.3016 17.8792 48.5158 18.1025C48.73 18.3213 48.8918 18.6084 49.0012 18.9639C49.1151 19.3148 49.1721 19.7432 49.1721 20.249V25H47.5178V20.2354C47.5178 19.8799 47.4654 19.5973 47.3605 19.3877C47.2603 19.1781 47.1122 19.0277 46.9162 18.9365C46.7202 18.8408 46.481 18.793 46.1984 18.793C45.9022 18.793 45.6402 18.8522 45.4123 18.9707C45.189 19.0892 45.0021 19.251 44.8518 19.4561C44.7014 19.6611 44.5874 19.8981 44.51 20.167C44.437 20.4359 44.4006 20.723 44.4006 21.0283ZM55.3902 23.2568V17.6035H57.0445V25H55.4859L55.3902 23.2568ZM55.6227 21.7188L56.1764 21.7051C56.1764 22.2018 56.1217 22.6598 56.0123 23.0791C55.9029 23.4938 55.7343 23.8561 55.5064 24.166C55.2786 24.4714 54.9869 24.7106 54.6314 24.8838C54.276 25.0524 53.8499 25.1367 53.3531 25.1367C52.9931 25.1367 52.6627 25.0843 52.3619 24.9795C52.0611 24.8747 51.8014 24.7129 51.5826 24.4941C51.3684 24.2754 51.2021 23.9906 51.0836 23.6396C50.9651 23.2887 50.9059 22.8695 50.9059 22.3818V17.6035H52.5533V22.3955C52.5533 22.6644 52.5852 22.89 52.649 23.0723C52.7128 23.25 52.7994 23.3936 52.9088 23.5029C53.0182 23.6123 53.1458 23.6898 53.2916 23.7354C53.4374 23.7809 53.5924 23.8037 53.7564 23.8037C54.2258 23.8037 54.595 23.7126 54.8639 23.5303C55.1373 23.3434 55.331 23.0928 55.4449 22.7783C55.5634 22.4639 55.6227 22.1107 55.6227 21.7188ZM58.8398 14.5H60.4873V23.4209L60.3301 25H58.8398V14.5ZM65.3135 21.2334V21.377C65.3135 21.9238 65.252 22.4274 65.1289 22.8877C65.0104 23.3434 64.8281 23.7399 64.582 24.0771C64.3405 24.4144 64.0397 24.6764 63.6797 24.8633C63.3242 25.0456 62.9118 25.1367 62.4424 25.1367C61.9821 25.1367 61.5811 25.0501 61.2393 24.877C60.8975 24.7038 60.6104 24.4577 60.3779 24.1387C60.1501 23.8197 59.9655 23.4391 59.8242 22.9971C59.6829 22.555 59.5827 22.0674 59.5234 21.5342V21.0762C59.5827 20.5384 59.6829 20.0508 59.8242 19.6133C59.9655 19.1712 60.1501 18.7907 60.3779 18.4717C60.6104 18.1481 60.8952 17.8997 61.2324 17.7266C61.5742 17.5534 61.973 17.4668 62.4287 17.4668C62.9027 17.4668 63.3197 17.5579 63.6797 17.7402C64.0443 17.9225 64.3473 18.1823 64.5889 18.5195C64.8304 18.8522 65.0104 19.2487 65.1289 19.709C65.252 20.1693 65.3135 20.6774 65.3135 21.2334ZM63.666 21.377V21.2334C63.666 20.9007 63.6387 20.5885 63.584 20.2969C63.5293 20.0007 63.4382 19.7409 63.3105 19.5176C63.1875 19.2943 63.0189 19.1188 62.8047 18.9912C62.5951 18.859 62.333 18.793 62.0186 18.793C61.7269 18.793 61.4762 18.8431 61.2666 18.9434C61.057 19.0436 60.8815 19.1803 60.7402 19.3535C60.599 19.5267 60.4873 19.7272 60.4053 19.9551C60.3278 20.1829 60.2754 20.429 60.248 20.6934V21.9307C60.2891 22.2725 60.3757 22.5869 60.5078 22.874C60.6445 23.1566 60.8359 23.3844 61.082 23.5576C61.3281 23.7262 61.6449 23.8105 62.0322 23.8105C62.3376 23.8105 62.5951 23.749 62.8047 23.626C63.0143 23.5029 63.1807 23.332 63.3037 23.1133C63.4313 22.89 63.5225 22.6302 63.5771 22.334C63.6364 22.0378 63.666 21.7188 63.666 21.377Z"
                    fill="#e0cfb5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_231">
                    <rect width="90" height="40" rx="20" fill="#e0cfb5" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          ) : null}

          {info.url ? (
            <Link to={info.url}>
              <svg
                width="86"
                height="40"
                viewBox="0 0 86 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="figma"
              >
                <g clipPath="url(#clip0_12_231)">
                  <rect width="86" height="40" rx="20" fill="#2d996e" />
                  <path
                    d="M28.3578 25H26.2318L26.2455 23.6396H28.3578C28.973 23.6396 29.488 23.5052 29.9027 23.2363C30.322 22.9674 30.6365 22.5824 30.8461 22.0811C31.0603 21.5798 31.1674 20.9827 31.1674 20.29V19.75C31.1674 19.2122 31.1059 18.736 30.9828 18.3213C30.8643 17.9066 30.6866 17.5579 30.4496 17.2754C30.2172 16.9928 29.9301 16.7786 29.5883 16.6328C29.251 16.487 28.8614 16.4141 28.4193 16.4141H26.1908V15.0469H28.4193C29.0801 15.0469 29.684 15.1585 30.2309 15.3818C30.7777 15.6006 31.2494 15.9173 31.6459 16.332C32.0469 16.7467 32.3546 17.2435 32.5688 17.8223C32.7829 18.401 32.89 19.0482 32.89 19.7637V20.29C32.89 21.0055 32.7829 21.6527 32.5688 22.2314C32.3546 22.8102 32.0469 23.307 31.6459 23.7217C31.2449 24.1318 30.7663 24.4486 30.2104 24.6719C29.6589 24.8906 29.0414 25 28.3578 25ZM27.182 15.0469V25H25.4662V15.0469H27.182ZM37.8094 25.1367C37.2625 25.1367 36.768 25.0479 36.326 24.8701C35.8885 24.6878 35.5148 24.4349 35.2049 24.1113C34.8995 23.7878 34.6648 23.4072 34.5008 22.9697C34.3367 22.5322 34.2547 22.0605 34.2547 21.5547V21.2812C34.2547 20.7025 34.339 20.1784 34.5076 19.709C34.6762 19.2396 34.9109 18.8385 35.2117 18.5059C35.5125 18.1686 35.868 17.9111 36.2781 17.7334C36.6883 17.5557 37.1326 17.4668 37.6111 17.4668C38.1398 17.4668 38.6023 17.5557 38.9988 17.7334C39.3953 17.9111 39.7234 18.1618 39.9832 18.4854C40.2475 18.8044 40.4435 19.1849 40.5711 19.627C40.7033 20.069 40.7693 20.5566 40.7693 21.0898V21.7939H35.0545V20.6113H39.1424V20.4814C39.1333 20.1852 39.074 19.9072 38.9646 19.6475C38.8598 19.3877 38.698 19.1781 38.4793 19.0186C38.2605 18.859 37.9689 18.7793 37.6043 18.7793C37.3309 18.7793 37.087 18.8385 36.8729 18.957C36.6632 19.071 36.4878 19.2373 36.3465 19.4561C36.2052 19.6748 36.0958 19.9391 36.0184 20.249C35.9454 20.5544 35.909 20.8984 35.909 21.2812V21.5547C35.909 21.8783 35.9523 22.179 36.0389 22.457C36.13 22.7305 36.2622 22.9697 36.4354 23.1748C36.6085 23.3799 36.8182 23.5417 37.0643 23.6602C37.3104 23.7741 37.5906 23.8311 37.9051 23.8311C38.3016 23.8311 38.6548 23.7513 38.9646 23.5918C39.2745 23.4323 39.5434 23.2067 39.7713 22.915L40.6395 23.7559C40.4799 23.9883 40.2726 24.2116 40.0174 24.4258C39.7622 24.6354 39.45 24.8063 39.0809 24.9385C38.7163 25.0706 38.2924 25.1367 37.8094 25.1367ZM43.802 19.1074V25H42.1545V17.6035H43.7063L43.802 19.1074ZM43.5354 21.0283L42.9748 21.0215C42.9748 20.5111 43.0386 20.0394 43.1662 19.6064C43.2938 19.1735 43.4807 18.7975 43.7268 18.4785C43.9729 18.1549 44.2782 17.9066 44.6428 17.7334C45.0119 17.5557 45.438 17.4668 45.9211 17.4668C46.2583 17.4668 46.566 17.5169 46.8439 17.6172C47.1265 17.7129 47.3703 17.8656 47.5754 18.0752C47.785 18.2848 47.9445 18.5537 48.0539 18.8818C48.1678 19.21 48.2248 19.6064 48.2248 20.0713V25H46.5773V20.2148C46.5773 19.8548 46.5227 19.5723 46.4133 19.3672C46.3085 19.1621 46.1558 19.0163 45.9553 18.9297C45.7593 18.8385 45.5246 18.793 45.2512 18.793C44.9413 18.793 44.677 18.8522 44.4582 18.9707C44.244 19.0892 44.0686 19.251 43.9318 19.4561C43.7951 19.6611 43.6949 19.8981 43.6311 20.167C43.5673 20.4359 43.5354 20.723 43.5354 21.0283ZM48.1223 20.5908L47.3498 20.7617C47.3498 20.3151 47.4113 19.8936 47.5344 19.4971C47.662 19.096 47.8466 18.7451 48.0881 18.4443C48.3342 18.139 48.6372 17.8997 48.9973 17.7266C49.3573 17.5534 49.7697 17.4668 50.2346 17.4668C50.6128 17.4668 50.9501 17.5192 51.2463 17.624C51.5471 17.7243 51.8023 17.8838 52.0119 18.1025C52.2216 18.3213 52.3811 18.6061 52.4904 18.957C52.5998 19.3034 52.6545 19.7227 52.6545 20.2148V25H51.0002V20.208C51.0002 19.8343 50.9455 19.5449 50.8361 19.3398C50.7313 19.1348 50.5809 18.9935 50.385 18.916C50.189 18.834 49.9543 18.793 49.6809 18.793C49.4257 18.793 49.2001 18.8408 49.0041 18.9365C48.8127 19.0277 48.6509 19.1576 48.5188 19.3262C48.3866 19.4902 48.2863 19.6794 48.218 19.8936C48.1542 20.1077 48.1223 20.3402 48.1223 20.5908ZM54.1354 21.3838V21.2266C54.1354 20.6934 54.2128 20.1989 54.3678 19.7432C54.5227 19.2829 54.746 18.8841 55.0377 18.5469C55.3339 18.2051 55.6939 17.9408 56.1178 17.7539C56.5462 17.5625 57.0292 17.4668 57.567 17.4668C58.1093 17.4668 58.5924 17.5625 59.0162 17.7539C59.4446 17.9408 59.8069 18.2051 60.1031 18.5469C60.3993 18.8841 60.6249 19.2829 60.7799 19.7432C60.9348 20.1989 61.0123 20.6934 61.0123 21.2266V21.3838C61.0123 21.917 60.9348 22.4115 60.7799 22.8672C60.6249 23.3229 60.3993 23.7217 60.1031 24.0635C59.8069 24.4007 59.4469 24.665 59.023 24.8564C58.5992 25.0433 58.1184 25.1367 57.5807 25.1367C57.0383 25.1367 56.553 25.0433 56.1246 24.8564C55.7008 24.665 55.3408 24.4007 55.0445 24.0635C54.7483 23.7217 54.5227 23.3229 54.3678 22.8672C54.2128 22.4115 54.1354 21.917 54.1354 21.3838ZM55.7828 21.2266V21.3838C55.7828 21.7165 55.817 22.0309 55.8854 22.3271C55.9537 22.6234 56.0608 22.8831 56.2066 23.1064C56.3525 23.3298 56.5393 23.5052 56.7672 23.6328C56.9951 23.7604 57.2662 23.8242 57.5807 23.8242C57.886 23.8242 58.1503 23.7604 58.3736 23.6328C58.6015 23.5052 58.7883 23.3298 58.9342 23.1064C59.08 22.8831 59.1871 22.6234 59.2555 22.3271C59.3284 22.0309 59.3648 21.7165 59.3648 21.3838V21.2266C59.3648 20.8984 59.3284 20.5885 59.2555 20.2969C59.1871 20.0007 59.0777 19.7386 58.9273 19.5107C58.7815 19.2829 58.5947 19.1051 58.3668 18.9775C58.1435 18.8454 57.8769 18.7793 57.567 18.7793C57.2571 18.7793 56.9882 18.8454 56.7604 18.9775C56.537 19.1051 56.3525 19.2829 56.2066 19.5107C56.0608 19.7386 55.9537 20.0007 55.8854 20.2969C55.817 20.5885 55.7828 20.8984 55.7828 21.2266Z"
                    fill="#e0cfb5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_231">
                    <rect width="86" height="40" rx="20" fill="#e0cfb5" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          ) : null}
        </div>
        <p>{info.description}</p>
        <div className="tech-stack">
          {info.tech &&
            info.tech.map((skill, index) => (
              <TagToggle key={index} tech={skill} />
            ))}
        </div>
      </div>
    </div>
  );
}
