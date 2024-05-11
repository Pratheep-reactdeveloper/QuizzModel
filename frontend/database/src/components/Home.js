import React, { useState } from 'react';
import './Home.css'; // Import your CSS file for animations
import { Card, Button } from 'react-bootstrap';

function Home() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["J.K. Rowling", "Stephen King", "Harper Lee", "Mark Twain"],
            correctAnswer: "Harper Lee"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },

        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correctAnswer: "William Shakespeare"
            },
            
            {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            correctAnswer: "Paris"
            },
            
            {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correctAnswer: "Leonardo da Vinci"
            },
            
            {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            correctAnswer: "H2O"
            },
            
            {
            question: "Which country is famous for the sport of cricket?",
            options: ["India", "Brazil", "Russia", "China"],
            correctAnswer: "India"
            },
            
            {
            question: "Who is known as the father of modern physics?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            correctAnswer: "Albert Einstein"
            },
            
            {
            question: "Which city hosted the 2016 Summer Olympics?",
            options: ["Tokyo", "Rio de Janeiro", "London", "Beijing"],
            correctAnswer: "Rio de Janeiro"
            }
            
            
            
            
            
            
        // Add more questions here...
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleAnswerOptionClick = (option) => {
        setSelectedOption(option);

        if (option === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setTimeout(() => setCurrentQuestion(nextQuestion), 1000); // Delay for 1 second before moving to the next question
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption('');
    };

    return (
        <div className='container text-center mt-5'>
            <h1>Quizz</h1>
            {showScore ? (
                <div className='score-section mb-4'>
                    <h2>Your Score: {score} out of {questions.length}</h2>
                    <Button variant="primary" onClick={resetQuiz}>Restart Quiz</Button>
                </div>
            ) : (
                <div className='question-section mb-4'>
                    <Card style={{ width: '18rem', margin: '0 auto', marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Question {currentQuestion + 1}</Card.Title>
                            <Card.Text>{questions[currentQuestion].question}</Card.Text>
                        </Card.Body>
                    </Card>
                    <div className='answer-options'>
                        {questions[currentQuestion].options.map((option, index) => (
                            <Button key={index} onClick={() => handleAnswerOptionClick(option)}
                                className={`btn ${selectedOption === option ? 
                                    (option === questions[currentQuestion].correctAnswer ? 'btn-success' : 'btn-danger') 
                                    : 'btn-success'}`}
                                style={{ marginBottom: '10px' }}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
