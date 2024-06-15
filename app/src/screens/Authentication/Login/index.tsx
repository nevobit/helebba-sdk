import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{
        paddingHorizontal: 15,
        paddingTop: 20,
        height: '100%'
    }} >
      <Text style={{
        color: "#000",
        fontWeight: '600',
        fontSize: 22
      }} >Te damos la bienvenida a Helebba</Text>
      <Text>Introduce tus credenciales para entrar.</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
            fontSize: 13,
            marginBottom: 5
        }}>Correo electronico</Text>
        <TextInput style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "rgba(0,0,0,0.3)",
            height: 40
        }} />
      </View>

      <TouchableOpacity style={{
        marginTop: 40,
        backgroundColor: '#1971ea',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
            color: '#fff'
        }} >Iniciar sesion</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "rgba(0,0,0,0.3)",
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 'auto'
      }}>
        <Text>Iniciar sesion con Google</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <Text>Aun no tienes una cuenta? Registrate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login