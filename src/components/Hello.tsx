import React, { useEffect, useState } from 'react';
import '../index.css';
import {Modal} from './Modal';

const Hello = ({ value }) => {
  const [count, setCount] = useState(value);
  const [showModal, setShowModal] = useState(false);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  const onReset = () => setCount(0);

  const getIcon = () => {
    const iconMap = {
      zero: '🤘',
      positive: '🙊',
      negative: '😑',
    };

    if (count === 0) return iconMap.zero;
    return count > 0 ? iconMap.positive : iconMap.negative;
  };

  useEffect(() => {
    if (count > 10) {
      setShowModal(true);
    }
  }, [count]);

  return (
    <>
      <h1>
        {count} {getIcon()}
      </h1>
      <div className="button-container">
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>BUG 👻++</button>
        <button onClick={onReset}>0</button>
      </div>

      {showModal && (
        <Modal
          title="!Demasiados bugs!"
          message="Reiniciar soluciona todo 😉."
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Hello;