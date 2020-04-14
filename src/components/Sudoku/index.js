import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native'
import { Picker } from '@react-native-community/picker'
import Modal from '../Modal'
import { sudoku } from '../../consts'
import styles from './styles'

export default function Sudoku() {
    const [dataSource, setDataSource] = useState()
    const [picker1, setPicker1] = useState()
    const [picker2, setPicker2] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const deplyData = () => {
            let su_arr1 = sudoku.split(' ')
            setDataSource(su_arr1)
        }

        deplyData();
    }, [])

    const checkItem = (index, subIndex) => {
        console.log('item clicked=', index + " " + subIndex);
        if (index === 6 && subIndex === 0) {

            setModalVisible(true)
        }
        if (index === 13 && subIndex === 1) {
            alert('item clicked')
        }
    }

    const selectValue = () => {
        setModalVisible(false)
    }

    const sudokuItem = (item, index) => {
        const values = item.item.split('');
        return (
            <View style={styles.sudokuItemContainer}>
                <View style={[styles.rowContainer, index % 3 === 0 ? { marginTop: 20 } : { marginTop: 0 }]}>
                    <TouchableOpacity style={styles.eachItemContainer} onPress={() => checkItem(item.index, 0)}>
                        <Text style={styles.itemText}>{values[0] === '0' ? ' ' : values[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItemContainer} onPress={() => checkItem(item.index, 1)}>
                        <Text style={styles.itemText}>{values[1] === '0' ? ' ' : values[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachItemContainer} onPress={() => checkItem(item.index, 2)}>
                        <Text style={styles.itemText}>{values[2] === '0' ? ' ' : values[2]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={dataSource}
                    renderItem={sudokuItem}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.flatlist}
                />
                <Modal
                    visible={modalVisible}
                    title={'Choose a Digit'}
                    onClose={() => setModalVisible(false)}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={picker1}
                            onValueChange={(itemValue, itemIndex) => setPicker1(itemValue)} >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                        <Button title="Select" onPress={selectValue} />
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}