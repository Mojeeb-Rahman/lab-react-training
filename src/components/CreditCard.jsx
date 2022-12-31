import { useEffect, useState } from 'react';

import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/mastercard.png';

function cardNumberHide(number) {
  let hideNum = [];
  for (let i = 1; i <= number.length; i++) {
    if (i <= number.length - 4) {
      i % 4 === 0 ? hideNum.push('• ') : hideNum.push('•');
    } else {
      hideNum.push(number[i - 1]);
    }
  }
  return hideNum.join('');
}

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div>
        {type === 'Visa' && <img src={visa} alt="logo" />}
        {type === 'Master Card' && <img src={masterCard} alt="logo" />}
      </div>
      <div>
        <h4>{cardNumberHide(number)}</h4>
        <p>
          <span>
            Expires{' '}
            {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth} /
            {expirationYear.toString().substring(2)}
          </span>
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;

// import visaImage from './../assets/images/visa.png';
// import masterCardImage from './../assets/images/master-card.svg';

// const normalizeNumber = (value) => {
// return String(value).padStart(2, '0').slice(-2);
// };

// const censorCreditCardNumber = (value) => {
// return `•••• `.repeat(3) + value.slice(-4);
// };

// const CreditCard = (props) => {
// return (
// <div style={{ color: props.color, backgroundColor: props.bgColor }}>
// <span>{props.type}</span>
// <img
// src={props.type === 'Visa' ? visaImage : masterCardImage}
// alt={props.type}
// />
// <h4>{censorCreditCardNumber(props.number)}</h4>
// <span>
// Expires {normalizeNumber(props.expirationMonth)}/
// {normalizeNumber(props.expirationYear)} {props.bank}
// </span>
// <br />
// <span>{props.owner}</span>
// </div>
// );
// };

// export default CreditCard;
