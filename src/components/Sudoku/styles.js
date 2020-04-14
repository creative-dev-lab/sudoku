import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sudokuItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatlist: {
        marginTop: 50,
        width: '80%',
        borderColor: '#333',
        borderWidth: 1
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    eachItemContainer: {
        flex: 1,
        alignSelf: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    itemText: {
        color: '#333',
        fontSize: 18,
        textAlign: 'center'
    },
    pickerContainer: {
        flex: 1,
    }
})