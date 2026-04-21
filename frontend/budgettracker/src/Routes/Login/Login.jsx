import { useState } from 'react';
import styles from './Login.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    let [login, setLogin] = useState(true);

    function registerLoginChanger() {
        setLogin(!login)
    }

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '' || emailRegex.test(value)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    return (
        <div className={styles.loginBody}>
            <div className={styles.loginBox}>



                {/* Belepes */}

                <div style={{display:login?'block':'none'}}>
                    <h2>Belépés</h2>

                    <TextField
                        required
                        fullWidth 
                        id="outlined-required-email"
                        label="E-mail cím"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailError ? "Érvénytelen e-mail formátum" : ""}
                        sx={{
                            input: { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputLabel-root.Mui-focused': { 
                                color: emailError ? '#f44336' : 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { 
                                    borderColor: emailError ? '#f44336' : 'white' 
                                },
                                '&:hover fieldset': { borderColor: 'lightgray' },
                                '&.Mui-focused fieldset': { 
                                    borderColor: emailError ? '#f44336' : 'white' 
                                },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                backgroundColor: '#454040',
                                padding: '0 8px',
                            },
                            '& .MuiFormHelperText-root': {
                                color: '#f44336',
                            }
                        }}
                    />
                    <br/>
                    <br/>
                    <FormControl
                        required
                        fullWidth
                        sx={{
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'lightgray' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                backgroundColor: '#454040',
                                padding: '0 8px',
                            },
                            '& .MuiSvgIcon-root': { color: 'white' }
                        }} 
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Jelszó</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Jelszó"
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button
                        variant="contained"
                        sx={{ 
                            backgroundColor: '#E6F082',
                            color: '#000',
                            '&:hover': {
                            backgroundColor: '#D8D365',
                            },
                        }}
                    >Belépés</Button>

                    <div className={styles.register}>
                        <p>Nincs még fiókja?⠀</p>
                        <p onClick={registerLoginChanger} style={{cursor:"pointer"}}> <u>Regisztráció</u> </p>
                    </div>
                </div>

                

                {/* Regisztracio */}

                <div style={{display:login?'none':'block'}}>
                    <h2>Regisztráció</h2>

                    <TextField
                        required
                        fullWidth 
                        id="outlined-required fullWidth"
                        label="Teljes név"
                        sx={{
                            input: { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'lightgray' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                backgroundColor: '#454040',
                                padding: '0 8px',
                            },
                        }}
                    />
                    <br/>
                    <br/>
                    <TextField
                        required
                        fullWidth 
                        id="outlined-required-email"
                        label="E-mail cím"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailError ? "Érvénytelen e-mail formátum" : ""}
                        sx={{
                            input: { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputLabel-root.Mui-focused': { 
                                color: emailError ? '#f44336' : 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { 
                                    borderColor: emailError ? '#f44336' : 'white' 
                                },
                                '&:hover fieldset': { borderColor: 'lightgray' },
                                '&.Mui-focused fieldset': { 
                                    borderColor: emailError ? '#f44336' : 'white' 
                                },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                backgroundColor: '#454040',
                                padding: '0 8px',
                            },
                            '& .MuiFormHelperText-root': {
                                color: '#f44336',
                            }
                        }}
                    />
                    <br/>
                    <br/>
                    <FormControl
                        required
                        fullWidth
                        sx={{
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'lightgray' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                backgroundColor: '#454040',
                                padding: '0 8px',
                            },
                            '& .MuiSvgIcon-root': { color: 'white' }
                        }} 
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Jelszó</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Jelszó"
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button
                        variant="contained"
                        sx={{ 
                            backgroundColor: '#E6F082',
                            color: '#000',
                            '&:hover': {
                            backgroundColor: '#D8D365',
                            },
                        }}
                    >Regisztráció</Button>

                    <div className={styles.register}>
                        <p>Már van fiókja?⠀</p>
                        <p onClick={registerLoginChanger} style={{cursor:"pointer"}}> <u>Belépés</u> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}