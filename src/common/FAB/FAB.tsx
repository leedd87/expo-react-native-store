import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import { Product } from '../../store/features/Products/types';
import { styles } from './styles';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const FAB = ({ iconName, onPress, style }: Props) => {
  return (
    <Button
      style={[style, styles.btnStyle]}
      accessoryLeft={<CustomIcon name={iconName} white />}
      onPress={onPress}
    />
  );
};
