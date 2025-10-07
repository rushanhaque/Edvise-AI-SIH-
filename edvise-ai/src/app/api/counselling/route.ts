import { NextRequest, NextResponse } from "next/server";

// Simple recommendation engine to emulate an AI chatbot response without external keys
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      educationLevel,
      interests = [],
      location,
      budget,
      careerGoals,
      subjects = [],
      learningStyle,
      timeCommitment,
      familyBackground,
      strengths = [],
      messages = [], // optional chat transcript: {role: 'user'|'assistant', content: string}[]
    } = body ?? {};

    const lines: string[] = [];
    lines.push("Thanks for sharing your details. Here is a personalised plan:");

    if (educationLevel) {
      lines.push(`- Current level: ${educationLevel}.`);
    }
    if (interests.length) {
      lines.push(`- Interests: ${interests.join(", ")}.`);
    }
    if (subjects.length) {
      lines.push(`- Strong subjects: ${subjects.join(", ")}.`);
    }
    if (careerGoals) {
      lines.push(`- Goal: ${careerGoals}`);
    }
    if (budget) {
      lines.push(`- Budget preference: ${budget}.`);
    }
    if (location) {
      lines.push(`- Preferred location: ${location}.`);
    }
    if (learningStyle) {
      lines.push(`- Learning style: ${learningStyle}.`);
    }
    if (timeCommitment) {
      lines.push(`- Time commitment: ${timeCommitment}.`);
    }
    if (familyBackground) {
      lines.push(`- Background: ${familyBackground}.`);
    }
    if (strengths.length) {
      lines.push(`- Key strengths: ${strengths.join(", ")}.`);
    }

    // Heuristic suggestions
    const recs: string[] = [];
    const isSTEM = subjects.some((s: string) => ["Mathematics","Physics","Chemistry","Computer Science"].includes(s));
    const likesMed = interests.includes("Medicine");
    const likesEng = interests.includes("Engineering");
    const likesGov = interests.includes("Civil Services");

    if (likesEng && isSTEM) {
      recs.push("Consider B.Tech programs in CSE/ECE/ME. Prepare for JEE Main + relevant state CETs.");
    }
    if (likesMed) {
      recs.push("Explore MBBS/BAMS/Pharmacy pathways. Prepare for NEET UG; add Biology-focused study blocks.");
    }
    if (likesGov) {
      recs.push("Start a UPSC foundation plan: NCERT 6–12, daily current affairs, and CSAT practice.");
    }
    if (interests.includes("Commerce")) {
      recs.push("Look at B.Com/BBA programs; add CA/CS/CMA prep depending on interest.");
    }
    if (interests.includes("Technology")) {
      recs.push("Build projects in web/AI; complete a 12-week roadmap with GitHub portfolio and 2 hackathons.");
    }
    if (!recs.length) {
      recs.push("Based on your inputs, we will craft a balanced plan focusing on foundational skills and exploration modules for 4–6 weeks.");
    }

    const schedule: string[] = [];
    schedule.push("Weekly plan:");
    schedule.push("- 3 days: Core subject study (2 hrs/day)");
    schedule.push("- 2 days: Practice tests + review (1.5 hrs/day)");
    schedule.push("- 1 day: Project/Portfolio work (2 hrs)");
    schedule.push("- 1 day: Rest/Reflection + goal check (30 mins)");

    const lastUser = Array.isArray(messages)
      ? [...messages].reverse().find((m: any) => m?.role === 'user')?.content ?? ''
      : '';

    // Simple intent routing based on user's latest message
    const wantsColleges = /college|branch|btech|mbbs|admission|cut ?off/i.test(lastUser);
    const wantsScholar = /scholarship|fee|financial|aid|grant/i.test(lastUser);
    const wantsMentor = /mentor|mentorship|guidance|expert/i.test(lastUser);
    const wantsExams = /exam|neet|jee|upsc|schedule|tracker|test/i.test(lastUser);
    const wantsPlan = /plan|path|roadmap|what should i do|how/i.test(lastUser);

    const sections: string[] = [];
    sections.push(lines.join("\n"));

    const addColleges = () => {
      const list: string[] = [];
      if (likesEng && isSTEM) {
        list.push(
          "Engineering: Top public options — IITs, NITs, IIITs; state options — JNTU (TS/AP), VTU (KA), MAKAUT (WB). Use JoSAA/CSAB + state counselling."
        );
      }
      if (likesMed) {
        list.push(
          "Medicine: Government colleges via NEET UG; look at AIIMS, JIPMER; state quota counselling through MCC/state portals."
        );
      }
      if (!list.length) list.push("General colleges: Prefer NAAC A/A+ or NIRF top-200; check govt. fee waivers.");
      sections.push(["College suggestions:", ...list.map((l) => `• ${l}`)].join("\n"));
    };

    const addScholarships = () => {
      const sch: string[] = [
        "National: NSP (Central Sector Scheme), INSPIRE (STEM), Pragati/Saksham (AICTE)",
        "State: EWS/OBC/SC/ST scholarships via respective state portals",
        "Private: Sitaram Jindal, Kotak, Google STEP (for CS pathways)",
      ];
      if (budget?.toLowerCase().includes('free') || budget?.toLowerCase().includes('government')) {
        sch.unshift("Target Govt colleges with fee <= ₹10k/sem and hostel subsidies");
      }
      sections.push(["Scholarship recommendations:", ...sch.map((s) => `• ${s}`)].join("\n"));
    };

    const addMentorship = () => {
      const m: string[] = [
        "Find mentor in chosen field; schedule 2 calls/month",
        "Shadow one project or research task; document outcomes",
        "Join a peer group for weekly accountability",
      ];
      sections.push(["Mentorship plan:", ...m.map((x) => `• ${x}`)].join("\n"));
    };

    const addExamTracker = () => {
      const e: string[] = [
        "Create tracker (Notion/Sheets): syllabus topics, mock scores, weak areas",
        "Milestones: Monthly full-length mock; weekly chapter tests",
        "Resources: NTA/JAB practice (JEE), NMC sample papers (NEET), PYQs",
      ];
      sections.push(["Exam tracker:", ...e.map((x) => `• ${x}`)].join("\n"));
    };

    const addRoadmap = () => {
      const r: string[] = [
        "Month 1–2: Foundation refresh + skill audit",
        "Month 3–4: Exam prep + 1 portfolio project",
        "Month 5–6: Applications (colleges/scholarships) + mock interviews",
        "Ongoing: Weekly reflection + mentor feedback loop",
      ];
      sections.push(["6-month pathway:", ...r.map((x) => `• ${x}`)].join("\n"));
    };

    // Decide what to include
    if (wantsColleges) addColleges();
    if (wantsScholar) addScholarships();
    if (wantsMentor) addMentorship();
    if (wantsExams) addExamTracker();
    if (wantsPlan || (!wantsColleges && !wantsScholar && !wantsMentor && !wantsExams)) {
      // Provide comprehensive output by default
      addColleges();
      addScholarships();
      addMentorship();
      addExamTracker();
      addRoadmap();
    }

    sections.push("Ask me to refine colleges for your state, or generate a daily timetable.");

    return NextResponse.json({ reply: sections.join("\n\n") });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


