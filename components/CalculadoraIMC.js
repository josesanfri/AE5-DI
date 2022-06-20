import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export class CalculadoraIMC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peso: 0,
            altura: 0,
            resultado: '',
            color: 'yellow',
        }
    }

    guardaPeso = (unPeso) => {
        this.setState({ peso: unPeso })
    }

    guardaAltura = (unaAltura) => {
        this.setState({ altura: unaAltura })
    }

    guardaResultado = (unResultado) => {
        this.setState({ resultado: unResultado })
    }

    guardaColor = (unColor) => {
        this.setState({ color: unColor })
    }

    // Realiza los cálculos del IMC, y selecciona un mensaje a mostrar al usuario.
    calculaIMC = () => {
        // 1. Compruebo que se hayan rellenado los datos.
        if (this.state.peso > 0 && this.state.altura > 0) {
            // 2. Ejecuto la fórmula indicada
            let calculoImc = this.state.peso / Math.pow(this.state.altura, 2);
            let resultado = ''
            console.log("calculoImc=" + calculoImc);
            // 3. Averiguo el mensaje que voy a mostrar
            if (calculoImc < 18.5) {
                resultado = "Peso insuficiente";
            } else if (calculoImc >= 18.5 && calculoImc < 25) {
                resultado = "Peso normal";
            } else if (calculoImc >= 25 && calculoImc < 27) {
                resultado = "Sobrepeso grado 1";
            } else if (calculoImc >= 27 && calculoImc < 30) {
                resultado = "Sobrepeso grado 2";
            } else if (calculoImc >= 30 && calculoImc < 35) {
                resultado = "Obesidad tipo 1";
            } else if (calculoImc >= 35 && calculoImc < 40) {
                resultado = "Obesidad tipo 2";
            } else if (calculoImc >= 40 && calculoImc < 50) {
                resultado = "Obesidad tipo 3";
            } else if (calculoImc >= 50) {
                resultado = "Obesidad tipo 4";
            } else {
                resultado = "ERROR";
            }

            this.guardaColor('green');
            if (calculoImc > 27) {
                let nuevoColor = (calculoImc >= 40 ? 'red' : 'orange');
                this.guardaColor(nuevoColor);
            }

            this.guardaResultado(resultado);

        } else {
            //this.setState({ resultado: ''})
            this.guardaResultado('')
        }

    }

    render() {
        return (
            <View style={[styles.seccionFormulario, { backgroundColor: 'white', flex: 1 }]}>
                <View style={{ padding: 5, margin: 5 }}>
                    <Text style={[{ fontSize: 32 }, styles.colorSecundario]}>Datos</Text>
                </View>
                <View>
                    <View>
                        <Input
                            label='PESO'
                            labelStyle={{ color: 'blue' }}
                            placeholder='Introduce el peso'
                            keyboardType='decimal-pad'
                            onChangeText={this.guardaPeso}
                        ></Input>
                    </View>
                    <View>
                        <Input
                            label='ALTURA'
                            labelStyle={{ color: 'blue' }}
                            placeholder='Introduce la altura'
                            keyboardType='decimal-pad'
                            onChangeText={this.guardaAltura}
                        ></Input>
                    </View>
                </View>
                <Button
                    title='Calcular IMC'
                    type='outline'
                    raised={true}
                    onPress={this.calculaIMC}>
                </Button>
                <View style={{ margin: 5, padding: 5, }}>
                    <Text>Resultado</Text>
                    <Text style={{ color: this.state.color }}>
                        {this.state.resultado}
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    seccionFormulario: {
        margin: 5,
        padding: 5,
    },
    colorSecundario: {
        color: '#ff1744'
    }
});