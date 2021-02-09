import {testContext} from '../../testContext';
import {useContext} from 'react';

export const ContextTesting = ({text = 'Lorem ipsum'}: { text?: string }) => {
  const test: { color: string } = useContext(testContext);
  return (
    <p style={{color: test.color}}>
      {text}
    </p>
  );
};
