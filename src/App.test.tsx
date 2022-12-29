import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
//import { JasmineAllureInterface } from 'allure-jasmine/dist/src/JasmineAllureReporter';
//import { allure } from 'jasmine-allure-reporter'
// export {}
// declare global {
//   //   const allure: JasmineAllureInterface;
//     var allure: JasmineAllureInterfacee;
//   }
  
describe('tests', () => {
  test('renders learn react link', () => {
    //expect(allure).toBeDefined()
    allure.epic('meow')
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument()
  }); 
})

