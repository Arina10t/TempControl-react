import { useState } from 'react';
import './App.css';

function App() {

	const [value, setValue] = useState(0);
	const [colour, setColour] = useState('');

	const plusValue = () => {
		const newValue = value + 1;

		if (newValue > 13){
			setColour('warm');
		} else if (newValue > 26 ){
			setColour('hot');
		} else if (newValue < 0) {
			setColour('cold');
		} else if (newValue >=0 && newValue < 13) {
			setColour('');
		}

		setValue(newValue);
	}

	const minusValue = () => {
		const newValue = value - 1;

		if (newValue > 13 && newValue < 26){
			setColour('warm');
		} else if (newValue > 26 ){
			setColour('hot');
		} else if (newValue < 0) {
			setColour('cold');
		} else if (newValue >=0 && newValue < 13) {
			setColour('');
		}

		setValue(newValue);
	}

  return (
    <div className="container">
			<div className='box'>
				{/* <div className='temp-value-box'> */}
					<div className={`temp-value ${colour}`}>
						{value}°C
					</div>
				{/* </div> */}
				
				<div className='button-box'>
					<button onClick={() => plusValue()}>+</button>
					<button onClick={() => minusValue()}>-</button>
				</div>
			</div>
    </div>
  );
}

export default App;
