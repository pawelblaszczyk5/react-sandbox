import {useReducer} from 'react';
import './ReducerTesting.css';

interface color {
  r: number,
  g: number,
  b: number
}

export const ReducerTesting = ({color}: { color: color }) => {
  const reducer = (state: color, action: { type: string, addition: boolean }) => {
    const newColor: color = {...state};
    if (action.type === 'r' || action.type === 'g' || action.type === 'b') {
      newColor[action.type] = action.addition ? Math.min(255, newColor[action.type] + 10) : Math.max(0, newColor[action.type] - 10);
    }
    return newColor;
  };

  const [colorState, dispatch] = useReducer(reducer, color);

  return (
    <div className="customFlex">
      <div className="colorTest" style={{backgroundColor: `rgb(${colorState.r},${colorState.g},${colorState.b})`}}/>
      <p>
        {Object.entries(colorState).map((value) => {
          return (
            <>
              {value[0]}: {value[1]}&nbsp;
            </>
          );
        })}
      </p>
      <div>
        {['r', 'g', 'b'].map((element, i) => {
          return (
            <span key={i}>
          <button onClick={() => dispatch({type: element, addition: true})} className="narrower">{element}+</button>
          <button onClick={() => dispatch({type: element, addition: false})}
                  className="narrower">{element}-</button>
          </span>
          );
        })}
      </div>
    </div>
  );
};
