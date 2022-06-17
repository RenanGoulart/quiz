// import React from 'react';
// import Radio from './Components/Radio';

// const questions = [
//   {
//     sentence: 'Qual método é utilizado para criar componentes?',
//     options: [
//       'React.makeComponent()',
//       'React.createComponent()',
//       'React.createElement()',
//     ],
//     answer: 'React.createElement()',
//     id: 'p1',
//   },
//   {
//     sentence: 'Como importamos um componente externo?',
//     options: [
//       'import Component from "./Component"',
//       'require("./Component")',
//       'import "./Component"',
//     ],
//     answer: 'import Component from "./Component"',
//     id: 'p2',
//   },
//   {
//     sentence: 'Qual hook não é nativo?',
//     options: ['useEffect()', 'useFetch()', 'useCallback()'],
//     answer: 'useFetch()',
//     id: 'p3',
//   },
//   {
//     sentence: 'Qual palavra deve ser utilizada para criarmos um hook?',
//     options: ['set', 'get', 'use'],
//     answer: 'use',
//     id: 'p4',
//   },
// ];

// const App = () => {
//   const [answers, setAnswers] = React.useState(
//     questions.reduce((acc, answer) => {
//       return { ...acc, [answer.id]: '' };
//     }, {}),
//   );
//   const [slide, setSlide] = React.useState(0);
//   const [result, setResult] = React.useState(null);

//   function handleChange({ target }) {
//     setAnswers({ ...answers, [target.id]: target.value });
//   }

//   function compareResult() {
//     const correct = questions.filter(
//       ({ id, answer }) => answers[id] === answer,
//     );
//     setResult(`Você acertou: ${correct.length} de ${questions.length}.`);
//   }

//   function handleNext() {
//     if (slide < questions.length - 1) {
//       setSlide(slide + 1);
//     } else {
//       setSlide(slide + 1);
//       compareResult();
//     }
//   }

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//       }}
//     >
//       {questions.map((question, index) => (
//         <Radio
//           active={slide === index}
//           onChange={handleChange}
//           value={answers[question.id]}
//           key={question.id}
//           {...question}
//         />
//       ))}
//       {result ? <p>{result}</p> : <button onClick={handleNext}>Próxima</button>}
//     </form>
//   );
// };

// export default App;