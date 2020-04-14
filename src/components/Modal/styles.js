import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        padding: 20,
        marginTop: 150,
        marginBottom: 150,
    },
    content: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 5,
        borderWidth: 1,
        padding: 20,
        width: '100%'
    },
    header: {
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginHorizontal: -20,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    }
});
