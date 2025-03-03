import { Button, ButtonText } from '@/components/ui/button';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from '@/components/ui/input';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { VStack } from '@/components/ui/vstack';
import { useBottomPadding } from '@/hooks/useBottomNavigationPadding';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const ReceiptHistory = () => {
  const bottomPadding = useBottomPadding();
  const [selectedValue, setSelectedValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = () => {
    if (!selectedValue) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      console.log('Submitted value:', selectedValue);
      setSelectedValue('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <VStack className="w-full  p-4">
          {/* Select Component with Validation */}
          <FormControl isInvalid={isInvalid} isRequired>
            <FormControlLabel>
              <FormControlLabelText>Select an option</FormControlLabelText>
            </FormControlLabel>
            <Select onValueChange={(value) => setSelectedValue(value)}>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem label="UI Designing" value="ui" isDisabled />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>

            {/* Helper Text */}
            <FormControlHelper>
              <FormControlHelperText>
                Please select an option before submitting.
              </FormControlHelperText>
            </FormControlHelper>

            {/* Error Message */}
            {isInvalid && (
              <FormControlError>
                <FormControlErrorIcon />
                <FormControlErrorText>
                  Selection is required.
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
          <FormControl isInvalid={false} isRequired>
            <FormControlLabel>
              <FormControlLabelText>Enter Text</FormControlLabelText>
            </FormControlLabel>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={true}
              isReadOnly={false}
            >
              <InputField placeholder="Enter Text here..." />
            </Input>
          </FormControl>
          {/* Button Row */}
          <HStack className="mt-4">
            <Button size="lg" variant="outline" action="positive">
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              className="ml-2"
              size="lg"
              variant="solid"
              action="primary"
              onPress={handleSubmit}
            >
              <ButtonText className="text-white">Submit</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
});

export default ReceiptHistory;
