import { useState } from 'react';
import { Keyboard, Platform, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardView, TextInputContainer, AddWrapper, Container, Wrapper, Title } from './styles';
import Task from './src/components/Task';

export default function App() {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask('');
  }

  const comleteTask = (index:number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Today`s tasks</Title>

        <View>
            {taskItems.map((item, index)=> {
                return (
                  <TouchableOpacity key={index} onPress={() => comleteTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }
        </View>
      </Wrapper>

      <KeyboardView behavior={Platform.OS ==="ios" ? "padding" : "height"}>
      <TextInputContainer placeholder="Write a task" value={task} onChangeText={(text: string) => setTask(text)} />
      <TouchableOpacity onPress={()=> handleAddTask()}>
        <AddWrapper>
          <Text>+</Text>
        </AddWrapper>
      </TouchableOpacity>
    </KeyboardView>
    </Container>
  );
}
