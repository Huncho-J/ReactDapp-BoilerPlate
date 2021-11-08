import { Button,Box, Stack} from "@chakra-ui/react"
import { useMoralis } from "react-moralis";

const Component = () => {
    return (
      <Box>
      <Button>Test</Button>
      </Box>
    );
  }

export const Login =() => {
  const { authenticate,isAuthenticating} = useMoralis();
return(
 <Stack>
 <Button  isLoading={isAuthenticating} onClick={() => authenticate()}>Connect with MetaMask</Button>
 <Component />
 </Stack>
);
}
