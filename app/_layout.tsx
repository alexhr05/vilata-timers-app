// import { Stack } from "expo-router";
// import './global.css';

// export default function RootLayout() {
//   return <Stack />;
// }
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  return( 
    <>
    <StatusBar />
      <Stack 
      >
          
          <Stack.Screen
            name = "(tabs)"
            options={{
              headerShown:false  
            }}
          />
         

      </Stack>
    </>
    );
}