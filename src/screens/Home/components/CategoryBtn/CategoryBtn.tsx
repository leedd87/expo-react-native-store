import { Button, useTheme } from '@ui-kitten/components';
import { useState } from 'react';

interface CategoryBtnProps {
  item: string;
  onPress: (category: string) => void;
  isSelected: boolean;
}

export const CategoryBtn = ({
  item,
  onPress,
  isSelected,
}: CategoryBtnProps) => {
  const theme = useTheme();
  const onPressBtn = (item: string) => {
    onPress(item);
  };
  return (
    <Button
      onPress={() => onPressBtn(item)}
      style={{
        backgroundColor: isSelected
          ? theme['color-primary-600']
          : theme['color-primary-500'],
      }}
    >
      {item}
    </Button>
  );
};
