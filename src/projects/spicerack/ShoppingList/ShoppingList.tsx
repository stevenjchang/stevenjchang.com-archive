import { useState } from 'react';
import { Stack, Checkbox } from '@chakra-ui/react';

const Row = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      Chili
      <Checkbox
        isChecked={checked}
        size="md"
        colorScheme="red"
        defaultChecked
        onChange={(e) => {
          setChecked((bool) => !bool);
          console.log('onChange ==>');
        }}
      />
      <h1>state: {checked.toString()}</h1>
    </div>
  );
};

export const ShoppingList = () => {
  return (
    <>
      list
      <Stack>
        <Row />
      </Stack>
    </>
  );
};
