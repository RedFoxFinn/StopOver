import React from 'react';
import '../Colors.css';

const Call = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="5 5 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" strokeWidth="2" stroke="#FFF" className='HslHighlightYellow' d="M29 5c13.255 0 24 10.745 24 24S42.255 53 29 53 5 42.255 5 29 15.745 5 29 5z"/>
      <path fillRule="evenodd" className='HslGreyDark' d="M31.044 30.997c2.548-2.506 5.096-5.549 3.822-6.623-1.638-1.611-3.094-2.685-.182-6.443 2.912-3.759 4.914-.895 6.551.715 1.821 1.79.182 8.771-6.733 15.573-6.916 7.159-13.831 8.949-15.833 6.98-1.638-1.611-4.55-3.579-.728-6.443 3.639-3.043 4.732-1.432 6.37.179 1.273 1.074 4.185-1.253 6.733-3.938z"/>
    </svg>
  );
};

export default Call;