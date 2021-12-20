import React from 'react'
import Container from './components/Container';
import MyButton from './components/MyButton'

function App() {
  return (
    <div>
      <Container col={1} />
      <Container col={2} />
      <Container col={3} />
      <Container col={12} />
      <MyButton big color={10}>
        Big
      </MyButton>
      <MyButton big padding color={10}>
        Big
      </MyButton>
      <MyButton big margin padding color={10}>
        Big
      </MyButton>

      <MyButton margin padding color={10}>
        Small
      </MyButton>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1M0DKpt-LHDB7XObcOd9Z9o8ikdrH4Nif&ehbc=2E312F" width="640" height="480"></iframe>

      {/* <iframe src="https://www.google.com/maps/d/embed?mid=1EphZJO9ZocUx0yGGQmrlQuJPCO7NKiFT&ehbc=2E312F" width="640" height="480"></iframe> */}
    </div>
  );
}

export default App;
