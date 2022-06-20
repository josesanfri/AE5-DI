import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CalculadoraIMC } from './components/CalculadoraIMC';

export class App extends Component {
  render() {
    return (
      <View style={styles.colorPrimario}>
        <View style={styles.seccionTitulo}>
          <Text style={[{ fontSize: 32 }, styles.colorSecundario]}>Calculadora IMC</Text>
        </View>
        <View style={styles.seccionComponente}>
          <CalculadoraIMC />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[{ fontSize: 32 }, styles.seccionDescripcion]}>Created for 2n DAM</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  colorPrimario: {
    backgroundColor: '#6a1b9a',
    flex: 1,
  },
  seccionTitulo: {
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  colorSecundario: {
    color: '#ff1744',
  },
  seccionComponente: {
    flex: 2,
    borderRadius: 5,
  },
  seccionDescripcion: {
    fontSize: 18,
    color: 'grey',
  }
});

export default App;