import { Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StartPage from '../StartPage/StartPage';

const Bmi = () => {

  const [getWeight, setWeight] = useState("");
  const [getFeet, setFeet] = useState("");
  const [getInches, setInches] = useState("");
  const [getBmi, setBmi] = useState<any>(0);

  function calculateBMI(weight: number, heightFeet: number, heightInches: number) {
    // Convert height to meters
    var heightMeters = (heightFeet * 0.3048) + (heightInches * 0.0254);

    // Calculate BMI using metric units (weight in kg, height in meters)
    return weight / (heightMeters * heightMeters);
  }

  const handleSubmit = () => {
    const heightFeet = parseInt(getFeet);
    const heightInches = parseInt(getInches);
    const weight = parseInt(getWeight);
    var heightMeters = (heightFeet * 0.3048) + (heightInches * 0.0254);
    // Calculate BMI using metric units (weight in kg, height in meters)
    const bmiResult = weight / (heightMeters * heightMeters);
    setBmi(bmiResult);
    Keyboard.dismiss();
  }

  return (
    <>
    <SafeAreaView>
      <Image source={require('../img/headerB.png')} style={{ width: "100%" }} />
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          <Text>Weight</Text>
          <TextInput maxLength={4} onChangeText={setWeight} placeholder='Enter Weight' keyboardType='numeric' style={{  borderWidth: 1, padding: 10, width: "100%",  }} />
        </SafeAreaView>
        <SafeAreaView style={styles.subContainer}>
          <Text>Height</Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <TextInput maxLength={2} onChangeText={setFeet} placeholder='Feet' keyboardType='numeric' style={{ width: 100, borderWidth: 1, padding: 10 }} />
            <TextInput maxLength={2} onChangeText={setInches} placeholder='Inches' keyboardType='numeric' style={{ width: 100, borderWidth: 1, padding: 10 }} />
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.subContainer}>
          <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#588d54", padding: 20, width: "100%", borderRadius: 10 }}>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Press Here</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: 5, paddingTop: 20, paddingBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Your BMI</Text>
        <Text style={{ fontWeight: "bold", fontSize: 22,  color: `${getBmi == 0 ? "white" : isNaN(getBmi) ? "white" : getBmi < 18.5 ? "orange" : getBmi < 24.9 ? "green" : getBmi < 29.9 ? "red" : "#aa0000"}`}}>{getBmi == 0 ? " " : getBmi < 18.5 ? "Underwight" : getBmi < 24.9 ? "Normal weight" : getBmi < 29.9 ? "Overweight" : getBmi > 29.9 && "Obesity"}</Text>
          <View style={{ backgroundColor: `${getBmi == 0 ? "white" : isNaN(getBmi) ? "white" : getBmi < 18.5 ? "orange" : getBmi < 24.9 ? "green" : getBmi < 29.9 ? "red" : "#aa0000"}`, display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", borderColor: "#588d54", borderWidth: 1, height: 130, width: 130, borderRadius: 100, }}>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>{isNaN(getBmi) ? " " : getBmi.toFixed(2)}</Text>
          </View>
        </SafeAreaView>
        <SafeAreaView style={{ backgroundColor: "#e0f8be", padding: 20, width: 250, alignSelf: "center", borderRadius: 10 }}>
          <Text style={{ fontWeight: "bold" }}>BMI Categories:</Text>
          <Text>{`Underweight = <18.5`}</Text>
          <Text>{`Normal weight = 18.5–24.9`}</Text>
          <Text>{`Overweight = 25–29.9`}</Text>
          <Text>{`Obesity = BMI of 30 or greater`}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>

    <StartPage/>
    </>
  )
}

export default Bmi

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  subContainer: {
    display: 'flex', flexDirection: 'column', gap: 2
  }
})