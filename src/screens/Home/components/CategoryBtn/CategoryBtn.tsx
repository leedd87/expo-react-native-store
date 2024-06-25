import { Button, useTheme } from '@ui-kitten/components';
import { useState } from 'react';

interface CategoryBtnProps {
  item: string;
  onPress: (category: string) => void;
}

export const CategoryBtn = ({ item, onPress }: CategoryBtnProps) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(false);
  const onPressBtn = (item: string) => {
    onPress(item);
    setSelectedCategory(!selectedCategory);
  };
  return (
    <Button
      onPress={() => onPressBtn(item)}
      style={{
        backgroundColor: selectedCategory
          ? theme['color-primary-600']
          : theme['color-primary-500'],
      }}
    >
      {item}
    </Button>
  );
};
