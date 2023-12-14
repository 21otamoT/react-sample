import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
// import App from './App'; //デフォルトのファイル
// import Parent from './components/ContainerSample'
// import Page from './components/ContextSample'
// import Counter from './components/useStateSample'; //カウントボタン
//import Counter from './components/useReducerSample'; //カウントボタン
// import {Parent} from './components/useCallback' ;
// import {Clock} from "./components/Clock";
// import ImageUploader from "./components/useRef";
import Custom from './components/custom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <Custom />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
