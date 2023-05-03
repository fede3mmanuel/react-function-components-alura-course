import Button from "@mui/material/Button"
import { FormGroup, TextField } from "@mui/material"
import Switch from "@mui/material/Switch"
import FormControl from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

function FormSignUp() {
	return (
		<form>

			<TextField id="name" label="Nombre" variant="outlined" fullWidth margin="normal"/>
			<TextField id="lastName" label="Apellidos" variant="outlined" fullWidth margin="normal"/>
			<TextField id="email" label="email" variant="outlined" fullWidth margin="normal"/>
			
			<FormGroup>
				<FormControlLabel control={ <Switch defaultChecked /> } label="Prommociones"/>
				<FormControlLabel control={ <Switch defaultChecked /> } label="Novedades"/>
			</FormGroup>
			
			<Button variant="contained">
				Registrarse
			</Button>
		</form>
	)
}

export default FormSignUp
