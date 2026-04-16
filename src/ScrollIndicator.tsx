
import styled from 'styled-components';


const StyledSVG = styled.svg<{ $isVisible: boolean }>`
    position: fixed;
    z-index: 2;
    color: black;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    animation-name: bounce;
    animation-duration: 750ms;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.631, 0.101, 0.364, 0.919);
    opacity: ${props => props.$isVisible ? 1 : 0};
    transition: opacity 350ms linear;
    
    @keyframes bounce {
      from {
        translate: -50% -50%;
      }
      to {
        translate: -50% calc(-50% + 50px);
      }
    }
`;

export default function ScrollIndicator({ isVisible }: { isVisible: boolean }) {
  return <StyledSVG $isVisible={isVisible} width="150" height="150" viewBox="0 0 24 24" fill="#FB84B9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path vectorEffect="non-scaling-stroke" d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" /></StyledSVG>
}