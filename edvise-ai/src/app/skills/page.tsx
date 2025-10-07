"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    name: "Mathematics",
    currentLevel: 6,
    targetLevel: 9,
    skills: ["Algebra", "Calculus", "Statistics", "Geometry", "Trigonometry"],
    currentSkills: ["Algebra", "Basic Geometry"],
    missingSkills: ["Calculus", "Statistics", "Advanced Trigonometry"]
  },
  {
    name: "Physics",
    currentLevel: 4,
    targetLevel: 8,
    skills: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    currentSkills: ["Basic Mechanics"],
    missingSkills: ["Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
  },
  {
    name: "Chemistry",
    currentLevel: 5,
    targetLevel: 8,
    skills: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"],
    currentSkills: ["Basic Organic Chemistry"],
    missingSkills: ["Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"]
  },
  {
    name: "Computer Science",
    currentLevel: 3,
    targetLevel: 7,
    skills: ["Programming", "Data Structures", "Algorithms", "Database", "Web Development"],
    currentSkills: ["Basic Programming"],
    missingSkills: ["Data Structures", "Algorithms", "Database", "Web Development"]
  },
  {
    name: "English",
    currentLevel: 7,
    targetLevel: 9,
    skills: ["Grammar", "Vocabulary", "Reading Comprehension", "Writing", "Speaking"],
    currentSkills: ["Grammar", "Basic Vocabulary"],
    missingSkills: ["Advanced Vocabulary", "Reading Comprehension", "Writing", "Speaking"]
  },
  {
    name: "General Knowledge",
    currentLevel: 5,
    targetLevel: 8,
    skills: ["Current Affairs", "History", "Geography", "Science & Technology", "Sports"],
    currentSkills: ["Basic History", "Geography"],
    missingSkills: ["Current Affairs", "Science & Technology", "Sports"]
  }
];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const currentCategory = skillCategories[selectedCategory];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 neon-text">Skill Gap Analysis</h2>
        <p className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto">
          Identify your current skills, discover gaps, and get a personalized learning roadmap
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="glass rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-6">Select Skill Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(index)}
              className={`p-4 rounded-xl text-center transition-all ${
                selectedCategory === index
                  ? 'bg-[var(--primary)]/20 border border-[var(--primary)]/40'
                  : 'bg-[var(--card-bg)] border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-2xl mb-2">
                {category.name === 'Mathematics' && '📊'}
                {category.name === 'Physics' && '⚛️'}
                {category.name === 'Chemistry' && '🧪'}
                {category.name === 'Computer Science' && '💻'}
                {category.name === 'English' && '📚'}
                {category.name === 'General Knowledge' && '🌍'}
              </div>
              <div className="text-sm font-medium">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Skill Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6">Current Skill Level</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{currentCategory.name}</span>
                <span className="text-sm text-[var(--text-muted)]">{currentCategory.currentLevel}/10</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-500"
                  style={{ width: `${currentCategory.currentLevel * 10}%` }}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Your Current Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {currentCategory.currentSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6">Target Skill Level</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Target for {currentCategory.name}</span>
                <span className="text-sm text-[var(--text-muted)]">{currentCategory.targetLevel}/10</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-500"
                  style={{ width: `${currentCategory.targetLevel * 10}%` }}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Skills to Develop:</h4>
              <div className="flex flex-wrap gap-2">
                {currentCategory.missingSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-sm rounded-full">
                    + {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Roadmap */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Personalized Learning Roadmap</h3>
          <button
            onClick={() => setShowRoadmap(!showRoadmap)}
            className="px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors"
          >
            {showRoadmap ? 'Hide' : 'Show'} Roadmap
          </button>
        </div>

        {showRoadmap && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-green-300">Week 1-2: Foundation</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>• Review basic concepts</li>
                  <li>• Practice fundamental problems</li>
                  <li>• Take assessment tests</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-yellow-300">Week 3-4: Intermediate</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>• Learn advanced concepts</li>
                  <li>• Solve complex problems</li>
                  <li>• Join study groups</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-blue-300">Week 5-6: Advanced</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>• Master difficult topics</li>
                  <li>• Practice mock tests</li>
                  <li>• Get expert feedback</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-purple-300">Week 7-8: Mastery</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>• Final review and practice</li>
                  <li>• Take final assessments</li>
                  <li>• Celebrate achievements</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}


