"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const resources = [
  {
    title: "JEE Main Mathematics Guide",
    category: "Mathematics",
    type: "PDF",
    size: "15.2 MB",
    downloads: "12.5K",
    rating: 4.8,
    description: "Comprehensive guide covering all JEE Main mathematics topics with solved examples and practice problems."
  },
  {
    title: "Physics Concepts & Formulas",
    category: "Physics",
    type: "PDF",
    size: "22.1 MB",
    downloads: "8.9K",
    rating: 4.6,
    description: "Essential physics concepts, formulas, and derivations for competitive exams."
  },
  {
    title: "Chemistry Periodic Table",
    category: "Chemistry",
    type: "Interactive",
    size: "5.3 MB",
    downloads: "15.2K",
    rating: 4.9,
    description: "Interactive periodic table with detailed element information and properties."
  },
  {
    title: "English Grammar Mastery",
    category: "English",
    type: "PDF",
    size: "18.7 MB",
    downloads: "6.8K",
    rating: 4.5,
    description: "Complete English grammar guide with exercises and examples."
  },
  {
    title: "Computer Science Basics",
    category: "Computer Science",
    type: "Video Series",
    size: "2.1 GB",
    downloads: "4.2K",
    rating: 4.7,
    description: "Video series covering programming fundamentals and computer science concepts."
  },
  {
    title: "General Knowledge 2025",
    category: "General Knowledge",
    type: "PDF",
    size: "31.4 MB",
    downloads: "9.1K",
    rating: 4.4,
    description: "Updated general knowledge material for competitive exams and interviews."
  }
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesFilter = filter === "all" || resource.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = resource.title.toLowerCase().includes(search.toLowerCase()) ||
                         resource.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 neon-text">Resource Hub</h2>
        <p className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto">
          Access free, high-quality study materials, eBooks, and resources to support your learning journey
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search Resources</label>
            <input 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3" 
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all" className="text-black">All Categories</option>
              <option value="mathematics" className="text-black">Mathematics</option>
              <option value="physics" className="text-black">Physics</option>
              <option value="chemistry" className="text-black">Chemistry</option>
              <option value="english" className="text-black">English</option>
              <option value="computer science" className="text-black">Computer Science</option>
              <option value="general knowledge" className="text-black">General Knowledge</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,158,255,0.3)]"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs bg-[var(--primary)]/20 text-[var(--primary)]">
                {resource.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80">
                {resource.type}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
            <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{resource.description}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Size:</span>
                <span>{resource.size}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Downloads:</span>
                <span>{resource.downloads}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Rating:</span>
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{resource.rating}/5</span>
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors text-sm font-medium">
                Download
              </button>
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-sm">
                Preview
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}


