// src/App.js
import React, { useState, useEffect } from 'react';
import Quiz from './component/Quiz.jsx';

const quizQuestions = [
  { id: 1, question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Madrid'], correctAnswer: 'Paris' },
  { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 'Mars' },
  { id: 3, question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], correctAnswer: 'Pacific' },
  { id: 4, question: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'], correctAnswer: 'William Shakespeare' },
  { id: 5, question: 'Which element has the chemical symbol "O"?', options: ['Oxygen', 'Osmium', 'Gold', 'Hydrogen'], correctAnswer: 'Oxygen' },
  { id: 6, question: 'What is the square root of 64?', options: ['6', '7', '8', '9'], correctAnswer: '8' },
  { id: 7, question: 'Which country is home to the kangaroo?', options: ['India', 'Australia', 'Brazil', 'Canada'], correctAnswer: 'Australia' },
  { id: 8, question: 'Who painted the Mona Lisa?', options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet'], correctAnswer: 'Leonardo da Vinci' },
  { id: 9, question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Silver'], correctAnswer: 'Diamond' },
  { id: 10, question: 'Which gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'], correctAnswer: 'Carbon Dioxide' },
  { id: 11, question: 'What is the currency of Japan?', options: ['Dollar', 'Yen', 'Won', 'Euro'], correctAnswer: 'Yen' },
  { id: 12, question: 'What is the largest planet in our solar system?', options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], correctAnswer: 'Jupiter' },
  { id: 13, question: 'In which year did the Titanic sink?', options: ['1912', '1922', '1932', '1942'], correctAnswer: '1912' },
  { id: 14, question: 'Who is known as the father of computers?', options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'], correctAnswer: 'Charles Babbage' },
  { id: 15, question: 'Which country gifted the Statue of Liberty to the USA?', options: ['Germany', 'France', 'Italy', 'Canada'], correctAnswer: 'France' },
  { id: 16, question: 'What is the largest desert in the world?', options: ['Sahara', 'Gobi', 'Antarctic', 'Kalahari'], correctAnswer: 'Antarctic' },
  { id: 17, question: 'What is the chemical formula for water?', options: ['CO2', 'H2O', 'O2', 'N2'], correctAnswer: 'H2O' },
  { id: 18, question: 'Who was the first man to walk on the moon?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'], correctAnswer: 'Neil Armstrong' },
  { id: 19, question: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswer: 'Nile' },
  { id: 20, question: 'Which city hosted the 2016 Summer Olympics?', options: ['Tokyo', 'London', 'Rio de Janeiro', 'Beijing'], correctAnswer: 'Rio de Janeiro' },
];


const App = () => {
  return(
    <Quiz quest={quizQuestions}/>
  )
}
export default App;

