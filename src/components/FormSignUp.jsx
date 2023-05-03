import { useState } from "react"
import Button from "@mui/material/Button"
import { FormGroup, TextField } from "@mui/material"
import Switch from "@mui/material/Switch"
import FormControl from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

function FormSignUp({handleSubmit}) {
	const [name, setName] = useState('')
	const [ lasName, setLastname] = useState('')
	const [ email, setEmail] = useState('')
	const [ prom, setProm] = useState(true)
	const [ nov, setNov] = useState(true)

	const [errors, setErrors] = useState({
		name: {
			error: false,
			message: 'Deben ser al menos tres caracteres'
		}
	})

	function validarNombre(nombre) {
		if(nombre.length >= 3) {
			return {name: {error: false, message: ''}}
		} else {
			return {name: {error: true, message: 'Deben ser al menos tres caracteres'}}
		}
	}
	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			handleSubmit({name, lasName, email, prom, nov})
		}}>

			<TextField id="name" label="Nombre" variant="outlined" fullWidth margin="normal" onChange={(e) => {
				console.log(e.target.value);
				setName(e.target.value)
			}} value={ name } error={errors.name.error} helperText={errors.name.error ? errors.name.message : ''} onBlur={(e) => {
				setErrors(validarNombre(e.target.value));
			}} />
			<TextField id="lastName" label="Apellidos" variant="outlined" fullWidth margin="normal" onChange={(e) => {
				setLastname(e.target.value)
			}} value={ lasName }/>
			<TextField id="email" label="email" variant="outlined" fullWidth margin="normal" onChange={(e) => {
				setEmail(e.target.value)
			}} value={ email }/>
			
			<FormGroup>
				<FormControlLabel control={ <Switch checked={prom} onChange={(e) => {
					setProm(e.target.checked)
					console.log(e.target.checked);
				}} /> } label="Prommociones"/>
				<FormControlLabel control={ <Switch checked={nov} onChange={(e) => {
					setNov(e.target.checked)
					console.log(e.target.checked);
				}}/> } label="Novedades"/>
			</FormGroup>
			
			<Button variant="contained" type="submit">
				Registrarse
			</Button>
		</form>
	)
}

export default FormSignUp
