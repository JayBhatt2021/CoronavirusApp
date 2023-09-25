/**
 * @file File with the Bottom Navigation Bar component.
 * @author Jay Bhatt
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import COLORS from "../utils/colors";

/**
 * The main theme of the application.
 *
 * @type {{dark: boolean, colors: {border: string, notification: string,
 *       background: string, text: string, card: string, primary: string}}}
 */
const mainTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLORS.applicationBackground,
        background: COLORS.applicationBackground,
    },
};

/**
 * The Bottom Bar Navigation component.
 *
 * @returns {JSX.Element} A component that represents the Bottom Bar.
 * @constructor
 */
const BottomNavigationBar = () => {
    return (
        <NavigationContainer theme={mainTheme}>
            <Tabs />
        </NavigationContainer>
    );
};

export default BottomNavigationBar;