import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { HStack } from '@/components/ui/hstack';
import { Ionicons } from '@expo/vector-icons';

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Location() {
  const [showDrawer, setShowDrawer] = React.useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access gallery denied');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      console.log(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      console.log('Camera opened');
    } else {
      console.log('Camera permission denied');
    }
  };

  return (
    <>
      <Button onPress={() => setShowDrawer(true)}>
        <ButtonText>Show Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        size="sm"
        anchor="bottom"
      >
        <DrawerBackdrop />
        <DrawerContent style={{ height: '30vh' }}>
          <DrawerHeader>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Options</Text>
          </DrawerHeader>
          <DrawerBody>
            <HStack>
              <TouchableOpacity onPress={pickImage}>
                <Card
                  size="lg"
                  variant="filled"
                  className="m-3 flex items-center justify-center"
                >
                  <Ionicons name="image" size={40} />

                  <Text>Select from Gallery</Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCamera}>
                <Card
                  size="lg"
                  variant="filled"
                  className="m-3 flex items-center justify-center"
                >
                  <Ionicons name="image" size={40} />

                  <Text>Select from Gallery</Text>
                </Card>
              </TouchableOpacity>
            </HStack>
          </DrawerBody>
          <DrawerFooter>
            {/* <Button onPress={() => setShowDrawer(false)}>
              <ButtonText>Close</ButtonText>
            </Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
