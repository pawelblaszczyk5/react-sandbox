import React, {ReactNode} from 'react';

const test = <h1>test</h1>;

export const Header = ({children = test, color}: { children?: ReactNode, color: string }) => {
  return (
    <h1 style={{backgroundColor: color}}>
      {children}
    </h1>
  );
};
