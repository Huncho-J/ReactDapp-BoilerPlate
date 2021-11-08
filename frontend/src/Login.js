import { Button, Container, Heading, Box, Stack} from "@chakra-ui/react"
import { useMoralis } from "react-moralis";

const Signup = () => {
    return (
      <Box>
      <Button>SSSSS</Button>
      </Box>
    );
  }

export const Login =() => {
  const { authenticate, isAuthenticated,isAuthenticating,logout } = useMoralis();
return(
 <Stack>
 <Button  isLoading={isAuthenticating} onClick={() => authenticate()}>Connect with MetaMask</Button>
 <Signup />
 </Stack>
);
}
