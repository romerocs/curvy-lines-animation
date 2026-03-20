import './App.css';

import { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledPath = styled.path<{ $animate?: boolean, $duration?: number, $dashoffset?: string }>`
  
  stroke-dashoffset: ${props => props.$dashoffset || '1'}px;
  stroke-dasharray: 1px 1000px;

  ${props => props.$animate && `
    animation-name: animatePath;
    animation-duration: ${props.$duration}ms;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    animation-fill-mode: forwards;
  `}

    @keyframes animatePath {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayAnimation(ms: number, fn: Function) {
  await sleep(ms);

  fn();
}

const BottomRight = ({ shouldAnimate, staticBg }: { shouldAnimate: boolean, staticBg?: boolean }) => {
  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);
  const [path3ShouldAnimate, setPath3ShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

        setTimeout(() => {
          setPath3ShouldAnimate(true);
        }, 75);
      }, 75);
    }, 0);

    //    return () => clearTimeout(timeout);
  }, [shouldAnimate]);

  return <g>
    <StyledPath $animate={path1ShouldAnimate} $duration={2000} $dashoffset={staticBg ? '0' : '1'} className="path-1" d="M1157 836C1157 761.222 1245.43 716 1370 716" stroke={staticBg ? '#ffffff' : '#FB84B9'} strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path2ShouldAnimate} $duration={2500} className="path-2" d="M1009 836C1009 667.749 1158.87 566 1370 566" stroke="#FDB5D5" strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path3ShouldAnimate} $duration={3000} $dashoffset={staticBg ? '0' : '1'} className="path-3" d="M862 836C862 576.146 1072.89 419 1370 419" stroke={staticBg ? '#ffffff' : '#FDD8E9'} strokeWidth="150" pathLength="1" />
  </g>
};

const Center = ({ shouldAnimate, staticBg }: { shouldAnimate: boolean, staticBg?: boolean }) => {
  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);
  const [path3ShouldAnimate, setPath3ShouldAnimate] = useState<boolean>(false);

  const duration = 3000;

  useEffect(() => {

    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

        setTimeout(() => {
          setPath3ShouldAnimate(true);
        }, 150);
      }, 150);
    }, 0);
  }, [shouldAnimate]);

  return <g>
    <StyledPath $animate={path1ShouldAnimate} $duration={duration} $dashoffset={staticBg ? '0' : '1'} className="path-1" d="M689 -16.5C835.949 217.938 741.051 322.426 538.452 465.601C416.756 551.603 292.983 735.222 319.303 905" stroke={staticBg ? '#ffffff' : '#FDD8E9'} strokeWidth="150" strokeLinecap="square" pathLength="1" />
    <StyledPath $animate={path2ShouldAnimate} $duration={duration} $dashoffset={staticBg ? '0' : '1'} className="path-2" d="M815.001 -94.5C961.95 139.938 906.099 383.325 703.5 526.5C581.804 612.502 408.5 752.5 484 959" stroke={staticBg ? '#ffffff' : '#FDB5D5'} strokeWidth="150" strokeLinecap="square" pathLength="1" />
    <StyledPath $animate={path3ShouldAnimate} $duration={duration} $dashoffset={staticBg ? '0' : '1'} className="path-3" d="M940 -173C1153 170 1008 492.282 811 631.5C694 722 544 779.5 654.5 983" stroke={staticBg ? '#ffffff' : '#FB84B9'} strokeWidth="150" strokeLinecap="square" pathLength="1" />
  </g>
}

const LeftTop = ({ shouldAnimate, staticBg }: { shouldAnimate: boolean, staticBg?: boolean }) => {
  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);
  const [path3ShouldAnimate, setPath3ShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

        setTimeout(() => {
          setPath3ShouldAnimate(true);
        }, 150);
      }, 150);
    }, 0);
  }, [shouldAnimate]);

  return <g>
    <StyledPath $animate={path1ShouldAnimate} $duration={2000} $dashoffset={staticBg ? '0' : '1'} className="path-1" d="M666.95 518.322C512.092 565.132 337.864 442.001 277.8 243.299C251.865 157.5 270.968 35.9999 277.8 -40" stroke={staticBg ? '#ffffff' : '#FDD8E9'} strokeWidth="150" pathLength="1" />

    <StyledPath $animate={path2ShouldAnimate} $duration={2500} $dashoffset={staticBg ? '0' : '1'} className="path-2" d="M710.479 660.372C477.996 730.648 221.893 563.861 138.458 287.842C108.592 189.042 118.872 67.4999 125 -26" stroke={staticBg ? '#ffffff' : '#FDB5D5'} strokeWidth="150" pathLength="1" />

    <StyledPath $animate={path3ShouldAnimate} $duration={3000} $dashoffset={staticBg ? '0' : '1'} className="path-3" d="M564.5 824.836C315.466 807.027 81.8696 615.096 -3.80824 331.66C-37.9042 218.865 -27 78.5 -27 -27" stroke={staticBg ? '#ffffff' : '#FB84B9'} strokeWidth="150" pathLength="1" />

  </g>
}

const TopRight = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);
  const [path3ShouldAnimate, setPath3ShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

        setTimeout(() => {
          setPath3ShouldAnimate(true);
        }, 150);
      }, 150);
    }, 0);
  }, [shouldAnimate]);

  return <g>
    <StyledPath $animate={path1ShouldAnimate} $duration={2000} className="path-1" d="M1114.09 -38.2216C1114.09 43.5 1021.34 78.4692 896.846 73.92" stroke="#FDB5D5" strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path2ShouldAnimate} $duration={2500} className="path-2" d="M1261.99 -32.817C1255.84 135.321 1102.36 231.53 891.368 223.82" stroke="#FA85B9" strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path3ShouldAnimate} $duration={3000} className="path-3" d="M1408.89 -27.4488C1399.4 232.232 1182.91 381.572 886 370.722" stroke="#F6559D" strokeWidth="150" pathLength="1" />
  </g>
}

const CenterTop = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);
  const [path3ShouldAnimate, setPath3ShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

        setTimeout(() => {
          setPath3ShouldAnimate(true);
        }, 150);
      }, 150);
    }, 0);

  }, [shouldAnimate]);

  return <g>
    <StyledPath $animate={path1ShouldAnimate} $duration={3000} className="path-1" d="M374.08 337.265C439 296.5 522.47 351.398 586.528 458.24" stroke="#F6559D" strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path2ShouldAnimate} $duration={3000} className="path-2" d="M297.976 210.331C445 125 597.5 195 715.177 381.107" stroke="#FA85B9" strokeWidth="150" pathLength="1" />
    <StyledPath $animate={path3ShouldAnimate} $duration={3000} className="path-3" d="M222.386 84.2557C445.252 -49.3662 688.475 50.7018 841.253 305.517" stroke="#FDB5D5" strokeWidth="150" pathLength="1" />
  </g>
}

const LeftBottom = ({ shouldAnimate }: { shouldAnimate: boolean }) => {

  const [path1ShouldAnimate, setPath1ShouldAnimate] = useState<boolean>(false);
  const [path2ShouldAnimate, setPath2ShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    setTimeout(() => {
      setPath1ShouldAnimate(true);

      setTimeout(() => {
        setPath2ShouldAnimate(true);

      }, 150);
    }, 0);
  }, [shouldAnimate]);

  return <g>
    <StyledPath $duration={3000} $animate={path1ShouldAnimate} className="path-1" d="M-237.572 475C-69.3216 475.199 32.2501 625.188 31.9998 836.32" stroke="#FA85B9" strokeWidth="150" pathLength="1" />
    <StyledPath $duration={3000} $animate={path2ShouldAnimate} className="path-2" d="M-237.398 328C22.4557 328.308 179.352 539.389 179 836.494" stroke="#F6559D" strokeWidth="150" pathLength="1"></StyledPath>
  </g>
}

function App() {
  const [bottomRightShouldAnimate, setBottomRightShouldAnimate] = useState<boolean>(false);
  const [centerShouldAnimate, setCenterShouldAnimate] = useState<boolean>(false);
  const [leftTopShouldAnimate, setLeftTopShouldAnimate] = useState<boolean>(false);
  const [topRightShouldAnimate, setTopRightShouldAnimate] = useState<boolean>(false);
  const [centerTopShouldAnimate, setCenterTopShouldAnimate] = useState<boolean>(false);
  const [leftBottomShouldAnimate, setLeftBottomShouldAnimate] = useState<boolean>(false);
  const [singleCenterLineShouldAnimate, setSingleCenterLineShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    const runAnimation = async () => {
      setBottomRightShouldAnimate(true);
      setCenterShouldAnimate(true);
      setLeftTopShouldAnimate(true);
      setTopRightShouldAnimate(true);
      setCenterTopShouldAnimate(true);
      setLeftBottomShouldAnimate(true);

      delayAnimation(500, () => setSingleCenterLineShouldAnimate(true));
    };

    runAnimation();

  }, [bottomRightShouldAnimate]);

  return (
    <>

      <svg viewBox="0 0 1280 832" fill="none" preserveAspectRatio="xMidYMid slice">
        <g clipPath="url(#clip0_1_2)">
          <rect width="1280" height="832" fill="white"></rect>
          <g id="fill">
            <path id="background" d="M1280 832L1280 0L0 -5.59506e-05L-3.63679e-05 832L1280 832Z" fill="#F6559D" />
            <StyledPath d="M 730,840 L 850,710" stroke="#F6559D" strokeWidth="75" $animate={singleCenterLineShouldAnimate} $duration={3000} pathLength="1" />
            <StyledPath d="M 1250,840 L 1260,820" stroke="#F6559D" strokeWidth="100" $duration={3000} $animate={true} pathLength="1" />
            <LeftBottom shouldAnimate={leftBottomShouldAnimate} />
            <CenterTop shouldAnimate={centerTopShouldAnimate} />
            <TopRight shouldAnimate={topRightShouldAnimate} />
            <LeftTop staticBg={true} shouldAnimate={false} />
            <LeftTop shouldAnimate={leftTopShouldAnimate} />
            <Center staticBg={true} shouldAnimate={false} />
            <Center shouldAnimate={centerShouldAnimate} />
            <BottomRight staticBg={true} shouldAnimate={false} />
            <BottomRight shouldAnimate={bottomRightShouldAnimate} />

          </g>
          <g id="track">
            <path id="Ellipse_1_(Stroke)" d="M104 836.405C104.09 760.566 92.9801 693.094 72.9961 635.5" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Ellipse_1_(Stroke)_2" d="M362.899 259.291C417.42 238.213 473.532 250.937 518.945 277.927C543.391 292.456 566.328 311.74 587.5 334.365" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Vector_2_(Stroke)" d="M752.548 -56.3327C820 60 849.446 175.5 803 286.5C756.554 397.5 690 445 581.736 526.85C530.542 563.028 476.691 621.71 439.076 690.049C401.33 758.625 383.579 830.045 393.418 893.51L404.907 967.625L256.679 990.604L245.188 916.49C228.707 810.177 259.682 704.898 307.667 617.719C355.781 530.304 424.665 454.175 495.168 404.351C598.64 331.229 654.424 280.477 675.619 229.824C692.727 188.938 693.037 131.156 625.452 23.3327L585.62 -40.2157L712.715 -119.881L752.548 -56.3327Z" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Ellipse_1_(Stroke)_3" d="M1370 494C1233.9 494 1124.79 530.035 1051.39 588.658C979.698 645.914 937 728.426 937 836H787C787 683.721 849.749 557.731 957.781 471.451C1064.1 386.538 1208.99 344 1370 344V494Z" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Subtract" d="M1079.49 398.125C1144.97 224.688 1141.65 8.61212 1004.14 -212.83L964.309 -276.969L836.456 -197.572L836.031 -197.31L836.295 -196.884L875.861 -133.17C1065.03 171.448 936.245 450.54 767.427 569.843L766.106 570.777L766.088 570.789L764.806 571.78C749.644 583.508 736.464 592.85 722.656 602.527C708.849 612.205 694.411 622.22 676.747 635.287C646.501 657.662 612.97 684.971 587.021 719.598C559.824 755.89 540.923 800.241 540.387 854.203C539.868 906.51 556.675 961.062 588.15 1019.03L623.939 1084.94L624.178 1085.38L756.438 1013.56L756.877 1013.32L720.849 946.972C697.075 903.189 691.195 874.239 691.379 855.702C691.547 838.82 696.741 824.983 707.856 810.151C720.218 793.655 739.218 776.901 766.55 756.683C774.419 750.862 784.55 743.685 795.606 735.875" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Exclude" d="M767.716 570.251L766.395 571.186L766.383 571.193L766.378 571.196L765.111 572.176C749.94 583.911 736.753 593.258 722.943 602.937C709.134 612.615 694.702 622.627 677.044 635.689C646.808 658.057 613.325 685.331 587.421 719.897C560.277 756.119 541.421 800.369 540.887 854.208C540.369 906.403 557.14 960.871 588.59 1018.79L624.377 1084.7L756.198 1013.12L720.409 947.21C696.61 903.38 690.694 874.346 690.879 855.697C691.048 838.693 696.287 824.755 707.455 809.852C719.863 793.294 738.911 776.506 766.252 756.28C774.126 750.456 784.263 743.276 795.317 735.467L795.726 735.178L796.303 735.995L795.894 736.283C784.837 744.094 774.71 751.268 766.847 757.085C739.525 777.297 720.573 794.015 708.256 810.451C697.195 825.211 692.045 838.947 691.879 855.707C691.696 874.132 697.54 902.997 721.288 946.733L757.555 1013.52L756.677 1014L623.978 1086.05L623.499 1085.18L587.711 1019.27C556.21 961.254 539.366 906.617 539.887 854.198C540.424 800.114 559.37 755.661 586.62 719.298C612.614 684.611 646.193 657.267 676.449 634.885C694.12 621.813 708.563 611.794 722.369 602.118C736.176 592.442 749.348 583.105 764.5 571.385L765.782 570.394L765.796 570.383L765.816 570.369L767.138 569.435L769.112 568.03M1116.39 100.507C1116.34 100.13 1116.3 99.7524 1116.26 99.375M1189.08 -38.2217C1189.08 23.3919 1158.96 68.9211 1117.19 98.7129C1117.24 99.0918 1117.28 99.4718 1117.32 99.8506C1159.53 69.9128 1190.09 24.0054 1190.09 -38.2217V-39.2227" stroke="#430A23" strokeWidth="2" strokeLinecap="square"></path>
            <path id="Ellipse_1_(Stroke)_4" d="M1370 791C1315.37 791 1275.81 801.132 1252.83 813.727C1231.42 825.466 1232 833.836 1232 836H1082C1082 763.386 1126.8 711.757 1180.74 682.19C1233.11 653.48 1300.06 641 1370 641V791Z" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Ellipse_3_(Stroke)" d="M294.693 642.657C193.477 566.251 111.001 452.268 67.9832 309.958C53.8095 263.069 48.2606 207.598 46.7869 147.748C45.2542 85.5019 47.9998 31.3695 47.9998 -26.9999H-102C-102 20.1307 -104.706 88.9307 -103.167 151.44C-101.569 216.347 -95.522 287.456 -75.5998 353.361C-18.9792 540.671 98.7712 694.976 246.108 791.61" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Ellipse_1_(Stroke)_5" d="M680 218.183C633.015 171.335 582.63 138.405 531.908 119.499C470.351 96.555 406.332 92.8526 340.5 113" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
            <path id="Ellipse_5_(Stroke)" d="M482.751 413.431C426.901 375.763 376.733 311.384 349.592 221.598C340.397 191.179 338.155 149.689 340.429 101.511C342.728 52.7885 348.688 9.10956 352.499 -33.2849L203.102 -46.715C200.081 -13.1097 193.072 41.9616 190.595 94.4389C188.093 147.46 189.268 209.621 206.009 265.001C236.804 366.878 297.25 457.524 374.083 519.342" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>

            <path id="Subtract_2" d="M1281.6 347.447C1288 343.158 1294.29 338.731 1300.45 334.163C1411.81 251.701 1479.27 127.802 1484.84 -24.6738L1484.88 -25.6729L1332.98 -31.2236L1332.94 -30.2246C1329.02 76.98 1283.48 157.593 1210 212.009C1182.73 232.202 1150.88 249.276 1114.9 262.607" stroke="#430A23" strokeWidth="3" strokeLinecap="square"></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="1280" height="832" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default App
