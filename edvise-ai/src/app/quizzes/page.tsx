"use client";
import { useState } from "react";

export default function QuizzesPage() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);

  const quizzes = [
    {
      title: "Math Basics",
      questions: [
        { q: "What is 15 + 27?", options: ["40", "42", "41", "43"], correct: 1 },
        { q: "What is 8 × 7?", options: ["54", "56", "58", "60"], correct: 1 },
      ]
    },
    {
      title: "Science Concepts",
      questions: [
        { q: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], correct: 0 },
        { q: "What planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], correct: 1 },
      ]
    }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Interactive Quizzes</h2>
      
      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{quizzes[currentQuiz].title}</h3>
          <div className="text-sm text-[var(--text-muted)]">Score: {score}</div>
        </div>
        
        <div className="space-y-4">
          {quizzes[currentQuiz].questions.map((question, qIndex) => (
            <div key={qIndex} className="p-4 bg-[var(--card-bg)] rounded-xl">
              <div className="font-medium mb-3">{question.q}</div>
              <div className="grid grid-cols-2 gap-2">
                {question.options.map((option, oIndex) => (
                  <button
                    key={oIndex}
                    className="p-3 text-left bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => {
                      if (oIndex === question.correct) {
                        setScore(score + 1);
                      }
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 mt-6">
          <button 
            onClick={() => setCurrentQuiz(Math.max(0, currentQuiz - 1))}
            className="px-4 py-2 bg-white/10 rounded-lg"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentQuiz(Math.min(quizzes.length - 1, currentQuiz + 1))}
            className="px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

