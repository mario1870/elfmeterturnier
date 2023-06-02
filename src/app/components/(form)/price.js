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
    <motion.div className="flex flex-col items-center justify-center pt-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
      <h1 className="text-3xl md:text-5xl font-bold">
        <p className='text-base'>{text}</p>
        {(price / 100).toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR'
        })}
      </h1>
    </motion.div>
  );
}
