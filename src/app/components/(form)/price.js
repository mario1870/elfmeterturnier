import { motion } from 'framer-motion';

export default function Price(props) {
  const price = props.price;

  let text;

  if (price === "3000") {
    text = "Männermannschaft: ";
  } else if (price === "2000") {
    text = "Damenmannschaft: ";
  } else {
    text = "default text";
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4" >
      <h1 className="text-3xl md:text-5xl font-bold">
        <p className='text-base'>{text}</p>
        {(price / 100).toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR'
        })}
      </h1>
    </div>
  );
}
