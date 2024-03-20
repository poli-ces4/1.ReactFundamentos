import { useEffect, useState } from 'react';
console.log('Pre-render');
const LifeCycle = () => {
	console.log('Logic-Render');
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		console.log('UseEffect default');
	});
	useEffect(() => {
		console.log('UseEffect sin dependencias []');
	}, []);
	useEffect(() => {
		console.log('UseEffect con dependencias [counter1]');
	}, [counter1]);

	useEffect(() => {
		console.log('UseEffect con dependencias [counter1,counter2]');
	}, [counter1, counter2]);
	return (
		<div>
			{console.log('return-render')}
			<h2>LifeCycle</h2>
			<h5>Counter 1: {counter1}</h5>
			<h5>Counter 2: {counter2}</h5>
			<button onClick={() => setCounter1(counter1 + 1)}>Counter 1</button>
			<button onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>
		</div>
	);
};

export default LifeCycle;
