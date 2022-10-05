import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Entypo } from '@expo/vector-icons';


const FormFile = () => {
    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email('Invalid Email')
            .required('Email is required'),
        password: Yup
            .string()
            .required('Password is required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
    })

    const onSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm({ values: '' })
    }

    const [show, setShow] = useState(true);

    const onPressIcon = () => {
        setShow((item) => !item);
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, touched }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.txt}>Email</Text>
                            <TextInput
                                name="email"
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                errors={errors.email} />
                            {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                        </View>
                    
                        <Text style={styles.txt}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                name="password"
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={show}
                                errors={errors.password} />
                            {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                            <TouchableOpacity onPress={onPressIcon} style={styles.icon}>
                                <Entypo name={show === false ? 'eye' : 'eye-with-line'} size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={styles.submit}>
                            <Text style={styles.text} onPress={handleSubmit} disabled={isSubmitting}>Submit</Text>
                        </TouchableOpacity>

                    </>
                )}
            </Formik>
        </View>
    )
}

export default FormFile;