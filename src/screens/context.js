import React from 'react';
const initialState = {
  Games: [],
  Athletics: [],
  Gymnastics: [],
  Dance: [],
  Swimming: [],
  Zumba: [],
  Skipping: [],
  Jumping: [],
  Exercises: [],
  others: [],
};
export const TakeHolidayContext = React.createContext(null);
export default function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TakeHolidayContext.Provider value={{state, setState}}>
      {props.children}
    </TakeHolidayContext.Provider>
  );
}
