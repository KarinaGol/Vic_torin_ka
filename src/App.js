import "./App.css";
import React from "react";
 
const questions = [
    {
      title: "Как называется самая известная смотровая площадка Москвы?",
      variants: ["Воробьевы горы", "Красная площадь", "Кремль"],
      correct: 0,
    },
    {
      title: "Какую вершину сложно покорить?",
      variants: ["Дыхтау", "Эльбрус", "Эверест"],
      correct: 1,
    },
    {
      title: "Назовите главную телебашню России?",
      variants: ["Чайка", "Орион", "Останкино"],
      correct: 2,
    },
    {
      title: "Назовите страну, которая с востока на запад занимает 11 часовых поясов?",
      variants: ["Россия", "Австралия", "Аргентина"],
      correct: 0,
    },
    {
      title: "Площадь какой области соответствует сложенной вместе территории Бельгии и Нидерландов?",
      variants: ["Тамбовская", "Белгородская", "Ульяновская"],
      correct: 0,
    },
    {
      title: "Самая большая по площади страна в мире?",
      variants: ["Америка", "Россия", "Япония"],
      correct: 1,
    },
    {
      title: "Самый «вытянутый» город России, длина которого достигает до 65 км.?",
      variants: ["Волгоград", "Вологда", "Москва"],
      correct: 0,
    },
    {
      title: "В какой город нужно отправиться, чтобы увидеть легендарный крейсер Аврора?",
      variants: ["Карелия", "Казань", "Санкт-Петербург"],
      correct: 2,
    },
  ];
  
  function Result({ correct }) {
    return (
      <div className="result">
        <img src="https://w-dog.ru/wallpapers/8/10/417840188604469/prazdnik-podarok-korobka-bant-lenta-syurpriz.jpg" alt="" />
        <h2>
          Вы отгадали {correct} ответа из 8
        </h2>
          <a href="/">
          <button>Попробовать снова</button>
          </a>
      </div>
    );
  }
  
  function Game({currentQuestions, onClickVariant, step}) {
  
    const percent = Math.round(step / questions.length * 100)
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>
        <h1>{currentQuestions.title}</h1>
        <ul>
          {
          currentQuestions.variants.map((el, index) => {
            return (
              <li onClick = {() => onClickVariant(index)} key = {index}>
              {el} 
              </li>
            )
          })
        }
        </ul>
      </>
    );
      }
  
  
  function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const currentQuestions = questions[step];
  const onClickVariant = (index) => {
  setStep(step + 1);
  if(index === currentQuestions.correct) {
    setCorrect(correct + 1);
  }
  }
    
    return (
      <div className="App">
        {
          step < questions.length ?
          (<Game currentQuestions={currentQuestions} onClickVariant={onClickVariant}/>) :
          (<Result correct={correct}/> )
        }
       
        </div>
    );
      } 
  
  export default App;
  