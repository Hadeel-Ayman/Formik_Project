import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        height: 43,
        marginVertical: 10,
        paddingHorizontal: 10,
        position: 'relative'
    },
    txt: {
        fontWeight: 'bold'
    },
    submit: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#3C67AF',
        width: 151,
        alignSelf: 'center',
        height: 44,
        borderRadius: 15
    },
    text: {
        color: '#fff'
    },
    icon: {
        alignItems: 'center',
        width: '15%',
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
        top: 19
    },
    inputContainer:{
        marginVertical:10
    }
})
export default styles;