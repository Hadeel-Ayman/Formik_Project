import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './style';
import FormFile from './src/screen/formScreen/FormFile';
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <FormFile />

      </View>
    </TouchableWithoutFeedback>
  );
}
