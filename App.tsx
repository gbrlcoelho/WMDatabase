import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<StatusBar
					backgroundColor={"transparent"}
					translucent
					barStyle={"light-content"}
				/>
				<View>
					<Text>Hello World!</Text>
				</View>
			</GestureHandlerRootView>
		</>
	);
};

export default App;
