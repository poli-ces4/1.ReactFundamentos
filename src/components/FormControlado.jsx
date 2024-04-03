import { useState } from 'react';

const FormControlado = () => {
	const [formulario, setFormulario] = useState({ email: '', password: '' });
	const { email, password } = formulario;
	const handler = e => {
		const { name, value } = e.target;
		setFormulario({ ...formulario, [name]: value });
	};
	/*
	const handlerEmail = e => {
		setFormulario({ ...formulario, email: e.target.value });
	};
	const handlerPassword = e => {
		setFormulario({ ...formulario, password: e.target.value });
	};
    */
	return (
		<div>
			<input type='text' name='email' value={email} onChange={handler} />
			<input
				type='password'
				name='password'
				value={password}
				onChange={handler}
			/>
		</div>
	);
};

export default FormControlado;
