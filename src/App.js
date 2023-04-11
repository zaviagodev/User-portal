import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="p-6">
      <p className='pb-4'>
        For English, please click <a href="#eng" className='underline'>here</a>
      </p>
      <h1 className="text-3xl font-bold">
        Hallo Welt! Ich bin ein React-App!
      </h1>
      <h1 className="text-3xl font-bold pt-96" id="eng">
        Hello World! I am a React App!
      </h1>
    </div>
  )
}