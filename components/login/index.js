import { useFormik } from 'formik'
import * as yup from 'yup'

import { Container, Box, Input, Button, Text, FormControl, FormLabel, FormHelperText, Link } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { firebaseClient, persistenceMode } from '../../config/firebase/client'
import 'firebase/auth'

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
})

export const Login = () => {
  const formik = useFormik({
    onSubmit: async (values, form) => {
      firebaseClient.auth().setPersistence(persistenceMode)

      try {
        const user = await firebaseClient.auth().signInWithEmailAndPassword(values.email, values.password)
        
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    },
    validationSchema,
    initialValues: {
      email: '',
      password: ''
    }
  })

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box>
        <Text p={4} mt={8}>
          Crie sua agenda compartilhada
        </Text>
      </Box>

    <Box>
      <FormControl id="email" p={4} isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input 
          
          type="email" 
          value={formik.values.email} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && <FormHelperText textColor="#e74c3c">
          {formik.errors.email}
        </FormHelperText>}
      </FormControl>

      <FormControl id="password" p={4} isRequired>
        <FormLabel>Senha</FormLabel>
        <Input 
          
          type="password" 
          value={formik.values.password} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && <FormHelperText textColor="#e74c3c">
          {formik.errors.password}
        </FormHelperText>}
      </FormControl>

      <Box p={4}>
        <Button 
          width="100%" 
          onClick={formik.handleSubmit} 
          isLoading={formik.isSubmitting}
          colorScheme="blue"
        > 
          Entrar
        </Button>
      </Box>
    </Box>

    <Link href="/signup">
      Ainda não possui uma conta? Cadastre-se
    </Link>
    </Container>
  )
}
