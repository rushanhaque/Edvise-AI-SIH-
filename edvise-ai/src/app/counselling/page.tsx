"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CounsellingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    educationLevel: "",
    interests: [],
    location: "",
    budget: "",
    careerGoals: "",
    subjects: [],
    learningStyle: "",
    timeCommitment: "",
    familyBackground: "",
    strengths: []
  });
  const [chatLoading, setChatLoading] = useState(false);
  const [chatReply, setChatReply] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);

  const steps = [
    {
      title: "Education Background",
      questions: [
        { id: "educationLevel", label: "Current Education Level", type: "select", options: ["Class 9-10", "Class 11-12", "Undergraduate", "Postgraduate", "Working Professional"] },
        { id: "subjects", label: "Favorite Subjects (Select all that apply)", type: "multiselect", options: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Economics", "History", "Literature", "Art", "Sports"] }
      ]
    },
    {
      title: "Interests & Goals",
      questions: [
        { id: "interests", label: "Areas of Interest (Select all that apply)", type: "multiselect", options: ["Engineering", "Medicine", "Arts & Humanities", "Commerce", "Agriculture", "Technology", "Defense", "Civil Services", "Research", "Entrepreneurship"] },
        { id: "careerGoals", label: "Career Aspirations", type: "textarea", placeholder: "Describe your career goals and aspirations..." }
      ]
    },
    {
      title: "Personal Preferences",
      questions: [
        { id: "location", label: "Preferred Location", type: "select", options: ["Anywhere in India", "Metro Cities", "Tier-2 Cities", "Rural Areas", "Specific State"] },
        { id: "budget", label: "Budget Range for Education", type: "select", options: ["Free/Government Funded", "Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000 - ₹5,00,000", "Above ₹5,00,000"] }
      ]
    },
    {
      title: "Learning Style",
      questions: [
        { id: "learningStyle", label: "Preferred Learning Style", type: "select", options: ["Visual Learning", "Auditory Learning", "Kinesthetic Learning", "Reading/Writing", "Mixed Approach"] },
        { id: "timeCommitment", label: "Available Study Time", type: "select", options: ["2-4 hours daily", "4-6 hours daily", "6-8 hours daily", "Weekends only", "Flexible schedule"] }
      ]
    },
    {
      title: "Background Information",
      questions: [
        { id: "familyBackground", label: "Family Background", type: "select", options: ["First Generation Learner", "Parents have basic education", "Parents are graduates", "Parents are postgraduates", "Prefer not to specify"] },
        { id: "strengths", label: "Your Strengths (Select all that apply)", type: "multiselect", options: ["Problem Solving", "Communication", "Leadership", "Creativity", "Analytical Thinking", "Teamwork", "Time Management", "Adaptability"] }
      ]
    }
  ];

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const callChatAPI = async (updatedMessages: { role: 'user' | 'assistant'; content: string }[]) => {
    try {
      setChatLoading(true);
      const res = await fetch('/api/counselling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, messages: updatedMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      setChatReply(data.reply as string);
      setMessages([...updatedMessages, { role: 'assistant', content: data.reply as string }]);
    } catch (e) {
      setChatReply('Sorry, something went wrong. Please try again.');
    } finally {
      setChatLoading(false);
    }
  };

  const submitForRecommendations = async () => {
    const initial = [...messages, { role: 'user', content: 'Generate a comprehensive personalised counselling response.' }];
    setMessages(initial);
    await callChatAPI(initial);
  };

  const sendUserMessage = async (content: string) => {
    const updated = [...messages, { role: 'user', content }];
    setMessages(updated);
    await callChatAPI(updated);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 neon-text">AI-Powered Counselling</h2>
        <p className="text-[var(--text-muted)] text-lg">Get personalized recommendations based on your profile</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-[var(--text-muted)] mb-2">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass rounded-2xl p-8">
        <motion.h3 
          className="text-2xl font-semibold mb-6 text-center"
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].title}
        </motion.h3>

        <div className="space-y-6">
          {steps[currentStep].questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3"
            >
              <label className="block text-lg font-medium">{question.label}</label>
              
              {question.type === 'select' && (
                <select 
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-base"
                  value={formData[question.id as keyof typeof formData] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value)}
                >
                  <option value="" className="text-black">Select an option</option>
                  {question.options?.map((option) => (
                    <option key={option} value={option} className="text-black">{option}</option>
                  ))}
                </select>
              )}

              {question.type === 'multiselect' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {question.options?.map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-3 bg-[var(--card-bg)] rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[var(--primary)] bg-transparent border-white/30 rounded focus:ring-[var(--primary)]"
                        checked={(formData[question.id as keyof typeof formData] as string[])?.includes(option) || false}
                        onChange={(e) => {
                          const current = (formData[question.id as keyof typeof formData] as string[]) || [];
                          if (e.target.checked) {
                            handleInputChange(question.id, [...current, option]);
                          } else {
                            handleInputChange(question.id, current.filter(item => item !== option));
                          }
                        }}
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'textarea' && (
                <textarea
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-base min-h-24 resize-none"
                  placeholder={question.placeholder}
                  value={formData[question.id as keyof typeof formData] || ''}
                  onChange={(e) => handleInputChange(question.id, e.target.value)}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
          >
            Previous
          </button>
          
          {currentStep === steps.length - 1 ? (
            <button onClick={submitForRecommendations} className="px-8 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-60" disabled={chatLoading}>
              {chatLoading ? 'Generating…' : 'Get My Recommendations'}
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors"
            >
              Next Step
            </button>
          )}
        </div>

        {(
          <div className="mt-8 glass rounded-2xl p-0 overflow-hidden">
            <div className="px-6 pt-4 pb-3 text-sm text-[var(--text-muted)] border-b border-white/10">AI Chatbot</div>
            <div className="max-h-[40vh] overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`text-base leading-7 ${m.role === 'assistant' ? 'text-white/90' : 'text-[var(--foreground)]/80'}`}>
                  <div className={`inline-block rounded-xl px-4 py-3 ${m.role === 'assistant' ? 'bg-white/5' : 'bg-white/10'}`}>
                    <pre className="whitespace-pre-wrap">{m.content}</pre>
                  </div>
                </div>
              ))}
              {chatReply && !messages.length && (
                <div className="text-base leading-7 text-white/90">
                  <div className="inline-block rounded-xl px-4 py-3 bg-white/5">
                    <pre className="whitespace-pre-wrap">{chatReply}</pre>
                  </div>
                </div>
              )}
              {chatLoading && <div className="text-sm text-[var(--text-muted)]">Thinking…</div>}
            </div>
            <ChatInput onSend={sendUserMessage} disabled={chatLoading} />
          </div>
        )}
      </div>
    </main>
  );
}

function ChatInput({ onSend, disabled }: { onSend: (text: string) => void; disabled?: boolean }) {
  const [text, setText] = useState("");
  return (
    <form
      className="flex items-center gap-2 p-3 border-t border-white/10"
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim() || disabled) return;
        onSend(text.trim());
        setText("");
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask for colleges, scholarships, plan…"
        className="flex-1 bg-transparent border border-white/15 rounded-lg px-4 py-2 text-base"
      />
      <button disabled={disabled} className="px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg disabled:opacity-50">Send</button>
    </form>
  );
}


