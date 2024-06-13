import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Login from '../pages/Login'
import Bemvindo from "../pages/Bemvindo";
import register from "../pages/register";
import brochure from "../pages/brochure";
import CadastroProduct from "../pages/brochureProduct";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="catalago" component={brochure}/>
        </Tab.Navigator>
    )
}

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Bem-vindo"
            component={Bemvindo}
            options={{headerShown: false}}/>
            
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false}}/>
            
            <Stack.Screen
            name="Register"
            component={register}
            options={{ headerShown: false}}/>

            <Stack.Screen
            name="Brochure"
            component={brochure}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name="CadastroProduct"
            component={CadastroProduct}
            options={{headerShow: false}}/>
        </Stack.Navigator>
);
}