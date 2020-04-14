import React from 'react';
import { Modal, Text, View } from 'react-native';
import styles from './styles';

export default function Modal({ children, onClose, title, ...rest }) {
    return (
        <Modal
            animationType="slide"
            presentationStyle="overFullScreen"
            transparent
            {...rest}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    );
}