"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = {
    progress: 68,
    completedTasks: 12,
    totalTasks: 18,
    streak: 7,
    achievements: 5
  };

  const recentActivities = [
    { action: "Completed Math Quiz", time: "2 hours ago", type: "quiz" },
    { action: "Downloaded Physics Guide", time: "1 day ago", type: "resource" },
    { action: "Connected with Mentor", time: "2 days ago", type: "mentorship" },
    { action: "Updated Profile", time: "3 days ago", type: "profile" }
  ];

  const upcomingDeadlines = [
    { title: "JEE Main Registration", date: "Dec 15, 2024", priority: "high" },
    { title: "Scholarship Application", date: "Dec 20, 2024", priority: "medium" },
    { title: "College Application", date: "Jan 5, 2025", priority: "high" }
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 neon-text">Your Dashboard</h2>
        <p className="text-[var(--text-muted)] text-xl">Track your progress and stay on top of your goals</p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">📊</div>
            <div className="text-2xl font-bold text-[var(--primary)]">{stats.progress}%</div>
          </div>
          <div className="text-sm text-[var(--text-muted)]">Overall Progress</div>
          <div className="h-2 bg-white/10 rounded-full mt-2">
            <div className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" style={{ width: `${stats.progress}%` }} />
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">✅</div>
            <div className="text-2xl font-bold text-green-400">{stats.completedTasks}/{stats.totalTasks}</div>
          </div>
          <div className="text-sm text-[var(--text-muted)]">Tasks Completed</div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">🔥</div>
            <div className="text-2xl font-bold text-orange-400">{stats.streak}</div>
          </div>
          <div className="text-sm text-[var(--text-muted)]">Day Streak</div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">🏆</div>
            <div className="text-2xl font-bold text-yellow-400">{stats.achievements}</div>
          </div>
          <div className="text-sm text-[var(--text-muted)]">Achievements</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex space-x-1 mb-6">
          {["overview", "progress", "activities", "deadlines"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[var(--primary)]/20 text-[var(--primary)]'
                  : 'text-[var(--text-muted)] hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[var(--card-bg)] rounded-lg">
                    <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                      {activity.type === 'quiz' && '📝'}
                      {activity.type === 'resource' && '📚'}
                      {activity.type === 'mentorship' && '👨‍🏫'}
                      {activity.type === 'profile' && '👤'}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-[var(--text-muted)]">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[var(--card-bg)] rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{deadline.title}</div>
                      <div className="text-xs text-[var(--text-muted)]">{deadline.date}</div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      deadline.priority === 'high' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {deadline.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-xl p-4">
                <h4 className="font-medium mb-3">Mathematics</h4>
                <div className="h-2 bg-white/10 rounded-full mb-2">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }} />
                </div>
                <div className="text-sm text-[var(--text-muted)]">75% Complete</div>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="font-medium mb-3">Physics</h4>
                <div className="h-2 bg-white/10 rounded-full mb-2">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }} />
                </div>
                <div className="text-sm text-[var(--text-muted)]">60% Complete</div>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="font-medium mb-3">Chemistry</h4>
                <div className="h-2 bg-white/10 rounded-full mb-2">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '45%' }} />
                </div>
                <div className="text-sm text-[var(--text-muted)]">45% Complete</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "activities" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">All Activities</h3>
            <div className="space-y-3">
              {[...recentActivities, ...recentActivities].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[var(--card-bg)] rounded-lg">
                  <div className="w-10 h-10 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                    {activity.type === 'quiz' && '📝'}
                    {activity.type === 'resource' && '📚'}
                    {activity.type === 'mentorship' && '👨‍🏫'}
                    {activity.type === 'profile' && '👤'}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-[var(--text-muted)]">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "deadlines" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">All Deadlines</h3>
            <div className="space-y-3">
              {[...upcomingDeadlines, ...upcomingDeadlines].map((deadline, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[var(--card-bg)] rounded-lg">
                  <div>
                    <div className="font-medium">{deadline.title}</div>
                    <div className="text-sm text-[var(--text-muted)]">{deadline.date}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded text-sm ${
                      deadline.priority === 'high' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {deadline.priority}
                    </span>
                    <button className="px-3 py-1 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded text-sm">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
