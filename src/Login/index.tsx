import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    FormHelperText,
    Box,
  } from '@chakra-ui/react'
export default function Login(){
    return(

        <Box 
        
        borderRadius={4}
display={'flex'}
justifyContent={'center'}
alignItems={'center'}     
height={'100vh'}   >
        <Container backgroundColor={'white'}  
        padding={50}
        borderRadius={5}
         centerContent>  
 
<FormControl >
<FormLabel as='legend'
textAlign={'center'}
fontSize={'25'}
padding={13}
margin={'top'}

>Formulário de Login</FormLabel>
<Box  
display={'flex'}

flexDirection={'column'}
justifyContent={'space-between'}
padding={12}
flexWrap={'wrap'}
>
    <Box  >
 
  <Input type='email'
  placeholder='Inserir email'
    borderRadius={6}
    fontSize={25}
     border={'none'}
     margin={'25'}

  isRequired/>
  </Box>
  <Box >
  
  <Input type='password' 
  placeholder='Inserir senha'
  borderRadius={6}
  fontSize={25}
  border={'none'}
  margin={'25'}
  isRequired/>
  </Box>

  <Button  mt={4}
            
            colorScheme='blue'
            cursor={'pointer'}
            fontSize={20}
            borderRadius={6}
           color={'#FFFFFF'}
            padding={'9'}
            background={'#3182CE'}
            border={'none'}
            display={'block'}
           
            
            >
                Entrar
                </Button>
                </Box>
</FormControl>

</Container>
</Box>
    )
}