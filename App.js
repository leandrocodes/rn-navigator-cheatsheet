import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Main from './src/Main'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Main></Main>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
