import { useState } from 'react';

const Views = () => {
	const [amount, setAmount] = useState(0);
	const [cost] = useState(10);
	return (
		<>
			<button onClick={() => setAmount(amount + 1)}>Me gusta {amount}</button>
			<p>{cost}</p>
		</>
	);
};

export default Views;
