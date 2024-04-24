import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    container: {
        backgroundColor: "green",
        width: "100%",
        top: "0%",
        position: "absolute",
        height: 99,
        textAlign:"center"
    }
});

const Navbar = () => {

    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <Text>Navbar</Text>
        </View>
    );
};

export default Navbar;