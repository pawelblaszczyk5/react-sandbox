import React, {ReactNode} from 'react';
import './Header.css';

const test = <h1>test</h1>;

export const Header = ({children = test, color}: { children?: ReactNode, color: string }) => {
  return (
    <h1 className="Header" style={{backgroundColor: color}}>
      {children}
    </h1>
  );
};
