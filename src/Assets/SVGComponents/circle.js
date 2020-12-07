import React from 'react';

// import { Container } from './styles';

export function Circle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
      <circle id="Elipse_1" data-name="Elipse 1" cx="15" cy="15" r="15" transform="translate(1 1)" fill="none" stroke="#161615" strokeMiterlimit="10" strokeWidth="2"/>
    </svg>
  );
}

export function CircleLightPink(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
      <circle id="Elipse_4" data-name="Elipse 4" cx="15" cy="15" r="15" transform="translate(1 1)" fill="none" stroke="#ffa3a3" strokeMiterlimit="10" strokeWidth="2"/>
    </svg>
  );
}

export function CirclePink(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
      <circle id="Elipse_1" data-name="Elipse 1" cx="15" cy="15" r="15" transform="translate(1 1)" fill="none" stroke="#e04876" strokeMiterlimit="10" strokeWidth="2"/>
    </svg>
  );
}

export function CircleWhite(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
      <circle id="Elipse_1" data-name="Elipse 1" cx="15" cy="15" r="15" transform="translate(1 1)" fill="none" stroke="#FFFFFF" strokeMiterlimit="10" strokeWidth="2"/>
      <clipPath id="elipse">
        <circle id="Elipse_1" data-name="Elipse 1" cx="15" cy="15" r="15" transform="translate(1 1)" fill="none" stroke="#FFFFFF" strokeMiterlimit="10" strokeWidth="2"/>
      </clipPath>
      <g clipPath="url(#elipse)"><rect height="100%" width="100%" fill="#FFFFFF"></rect></g>
    </svg>
  );
}