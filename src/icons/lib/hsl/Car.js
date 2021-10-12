import React from 'react';
import '../Colors.css';

const Car = ({className, heightStyle}) => {
  return (
    <svg height={heightStyle} viewBox="0 0 283.46 283.46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className='HslBlue' d="M272.575,118.119l-15.963,4.105c11.859,8.666,16.42,25.085,16.42,36.488v41.96
        c0,10.947-8.209,20.524-21.437,22.805v24.173c0,3.648-3.192,5.473-6.841,5.473H220.58c-3.193,0-6.385-1.825-6.385-5.473v-20.069
        c-19.155,0.913-46.066,2.737-72.519,2.737c-26.908,0-52.906-1.824-72.518-2.737v20.069c0,3.648-3.193,5.473-6.386,5.473H38.599
        c-3.648,0-6.841-1.825-6.841-5.473v-24.173c-12.77-2.28-20.979-11.858-20.979-22.805v-41.96c0-11.402,5.016-27.822,16.875-36.488
        l-16.875-4.105c-6.841-1.824-11.402-7.298-10.49-14.139c0.455-6.841,7.297-11.859,15.051-11.402l24.173,4.561l16.418-29.19
        c6.841-12.771,12.315-18.7,28.735-21.436c17.788-2.28,31.014-4.105,57.011-4.105c25.542,0,40.136,1.825,57.925,4.105
        c16.418,2.736,21.892,8.666,28.734,21.436l16.418,29.19l23.718-4.561c7.297-0.456,14.596,4.561,15.051,11.402
        C284.433,110.822,279.872,116.295,272.575,118.119z M84.208,158.712l-49.714-5.017v12.771c0,6.385,5.93,10.49,12.314,10.49h25.543
        c6.384,0,11.858-4.105,11.858-10.49V158.712z M49.546,116.751c27.366,3.649,62.028,5.473,93.955,5.473
        c30.101,0,61.115-0.912,91.218-5.473l-20.981-42.873c-3.648-7.754-7.753-10.946-15.963-12.77
        c-15.963-3.193-31.014-4.105-56.099-4.105s-39.223,0.913-55.187,4.105c-8.209,1.824-12.315,5.017-15.963,12.77L49.546,116.751z
         M250.226,153.694l-48.802,5.017v7.754c0,6.385,5.472,10.49,11.859,10.49h24.628c6.386,0,12.315-4.105,12.315-10.49V153.694z"/>
    </svg>
  );
};

export default Car;