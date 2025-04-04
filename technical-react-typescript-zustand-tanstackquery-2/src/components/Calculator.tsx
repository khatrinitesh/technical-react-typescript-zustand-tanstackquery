// Calculator.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCalculatorStore } from '../store/useCalculatorStore';

// Calculator component
const Calculator: React.FC = () => {
  const {
    currentInput,
    result,
    setCurrentInput,
    appendToInput,
    calculate,
    reset,
  } = useCalculatorStore();

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      reset();
    } else {
      appendToInput(value);
    }
  };

  return (
    <div style={styles.calculatorContainer}>
      <div style={styles.displayContainer}>
        <motion.div
          style={styles.display}
          key={result}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          {result}
        </motion.div>
        <motion.div
          style={styles.currentInput}
          key={currentInput}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          {currentInput}
        </motion.div>
      </div>
      <div style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((btn) => (
          <motion.button
            key={btn}
            style={styles.button}
            onClick={() => handleButtonClick(btn)}
            whileTap={{ scale: 0.9 }}
          >
            {btn}
          </motion.button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <motion.button
            key={btn}
            style={styles.button}
            onClick={() => handleButtonClick(btn)}
            whileTap={{ scale: 0.9 }}
          >
            {btn}
          </motion.button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <motion.button
            key={btn}
            style={styles.button}
            onClick={() => handleButtonClick(btn)}
            whileTap={{ scale: 0.9 }}
          >
            {btn}
          </motion.button>
        ))}
        {['C', '0', '=', '+'].map((btn) => (
          <motion.button
            key={btn}
            style={styles.button}
            onClick={() => handleButtonClick(btn)}
            whileTap={{ scale: 0.9 }}
          >
            {btn}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    width: '280px',
    margin: '0 auto',
  },
  displayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: '20px',
  },
  display: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  currentInput: {
    fontSize: '24px',
    color: '#aaa',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '100%',
  },
  button: {
    padding: '20px',
    fontSize: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Calculator;
