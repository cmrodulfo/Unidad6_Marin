import React, { useState } from "react";
import {
    Box, Center, Input,
    FormControl,
    FormHelperText,
    FormLabel,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react'




export const Form = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleNombre = (e) => setNombre(e.target.value)
    const handleApellido = (e) => setApellido(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleTelefono = (e) => setTelefono(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleConfPassword = (e) => setConfPassword(e.target.value)

    const [messageError, setMessageError] = useState('')

    const validationForm = () => {
        const passwordRegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{};':\"\\|,.<>/?])(?=.*[a-z])(?=.*[0-9]).{8,}$/
        const alfabetRegExp = /[a-zA-Z]/
        const emailRegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const phoneRegExp = /^\+?\(?\d{2,4}\)?[\d\s-]{3,}$/

        const validFirstName = validationInput(nombre, alfabetRegExp)
        const validLastName = validationInput(apellido, alfabetRegExp)
        const validPhone = validationInput(telefono, phoneRegExp)
        const validEmail = validationInput(email, emailRegExp)
        const validPassword = validationInput(password, passwordRegExp)
        const validConfPassword = validationInput(confPassword, passwordRegExp)

        console.log('Nombre' + validFirstName)
        console.log('Apellido' + validLastName)
        console.log('telefono' + validPhone)
        console.log('email' + validEmail)
        console.log('password' + validPassword)
        console.log('confpassword' + validConfPassword)
        if (validFirstName && validLastName && validPhone && validEmail && validPassword && validConfPassword) {
            setMessageError('Formulario Enviado')
        }
        else setMessageError('Debe completar todos los campos')
    }

    const validationInput = (data, regExp) => {
        //console.log(data);

        if (data == "") {
            return false
        }
        else if (!regExp.test(data)) {
            return false
        }
        else {
            return true
        }

    }



    console.log(messageError)


    const [show, setShow] = React.useState(false)
    const handleClickShow = () => setShow(!show)

    return (
        <>
            <Box w='100vw' h='auto' bg='blue.200' align='center' pt='60px'>

                <Text as='h2'>
                    Formulario de Registro
                </Text>

                <Center maxW='85vh'>

                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input value={nombre} placeholder='Nombre' bg='withe' onChange={handleNombre} />

                        <FormLabel>Apellido</FormLabel>
                        <Input value={apellido} placeholder='Apellido' bg='withe' onChange={handleApellido} />

                        <FormLabel>Correo Electrónico</FormLabel>
                        <Input value={email} tipe='email' placeholder='email@email.com' bg='withe' onChange={handleEmail} />

                        <FormLabel>Teléfono</FormLabel>
                        <Input value={telefono} type='tel' placeholder='Teléfono' bg='withe' onChange={handleTelefono} />

                        <FormLabel>Contraseña</FormLabel>

                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Ingrese Password'
                            bg='white'
                            value={password}
                            onChange={handlePassword}
                        />

                        <FormLabel>Confirme su Contraseña</FormLabel>
                        
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirme Password'
                            bg='white'
                            value={confPassword}
                            onChange={handleConfPassword}
                        />

                        <FormHelperText>
                            Su contraseña debe tener al menos 1 mayuscula, 1 caracterr especial, letras y numeros.
                        </FormHelperText>

                        <Stack direction='column' align='center'>

                            <Button w='4rem' h='1.75rem' size='sm' onClick={handleClickShow} mt='5px'>
                                {show ? 'Ocultar' : 'Mostrar'}
                            </Button>

                            <Button colorScheme='blue' onClick={validationForm} >Enviar</Button>
                        </Stack>

                        <FormHelperText>
                            {messageError}.
                        </FormHelperText>

                    </FormControl>

                </Center>
            </Box>
        </>
    )
}