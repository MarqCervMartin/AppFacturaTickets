//import libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Form, Item, Input, Picker, Label } from 'native-base';
import { useFormik } from 'formik';

//create a component
const Perfil = () => {
    const { values, isSubmitting, setFieldValue, handleSubmit, errors } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            birthday: '',
            country: '',
        },
        onSubmit: values => {
            alert('Todo ok');
            console.log(values);
        },
        validate: values => {
            const errors = {};
            console.log(values)
            if(!values.name || values.name.length < 3) errors.name = "Nombre invalido";
            if(!values.phone || values.phone.length < 3) errors.phone = "Telefono invalido";

            return errors;
        }
    });
    console.log(errors);
  return(
    <View style={styles.container}>
      <Form>
          <Item error={errors.name ? true: false}>
              <Label>Nombre</Label>
              <Input value={values.name} onChangeText={ text => setFieldValue('name', text)}/>
              <Text>{errors.name ? errors.name : ''}</Text>
          </Item>
          <Item error={errors.phone ? true: false}>
              <Label>Phone</Label>
              <Input value={values.phone} onChangeText={ text => setFieldValue('phone', text)}/>
              <Text>{errors.phone ? errors.phone : ''}</Text>
          </Item>
          <Item>
              <Label>Fecha nacimiento</Label>
              <Input value={values.birthday} onChangeText={ text => setFieldValue('birthday', text)}/>
          </Item>
          <Item>
              <Label>Pais</Label>
              <Picker onValueChange={ value => setFieldValue('country', value)} selectedValue={ values.country }>
                  <Picker.Item label="Mexico" value="Mexico"/>
                  <Picker.Item label="Colombia" value="Colombia"/>
                  <Picker.Item label="España" value="España"/>
                  <Picker.Item label="Peru" value="Peru"/>

              </Picker>
          </Item>
          <Button onPress = {handleSubmit}>
              <Text>Enviar</Text>
          </Button>
      </Form>
    </View>
  );
}

//define your styles
const styles = StyleSheet.create({
  container: {
      margin: 10
  },
})

//make this component available to the app
export default Perfil;