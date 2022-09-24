import { StyleSheet, Text, View } from 'react-native';
import Task from './src/components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today`s tasks</Text>

        <View style={styles.items}>
          <Task text='Task 1'/>
          <Task text='Task 2'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper:{
   paddingTop: 80,
   paddingHorizontal: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 22,
  },
  items:{},
});
