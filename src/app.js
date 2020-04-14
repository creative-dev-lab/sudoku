
import React, { Component } from 'react'
import { View } from 'react-native'
import Sudoku from './components/Sudoku';

export class app extends Component {
    render() {
        return (
            <View>
                <Sudoku />
            </View>
        )
    }
}

export default app
