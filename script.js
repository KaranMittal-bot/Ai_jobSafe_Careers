const jobs = [
  {
    id: 1,
    icon: "🩺",
    title: "Nurse / Nurse Practitioner",
    sector: "Healthcare",
    category: "healthcare",
    type: "safe",
    desc: "Clinical care requiring split-second judgment, physical skill, and emotional presence in unpredictable environments.",
    safetyScore: 95,
    growthScore: 90,
    demandScore: 95,
    tags: ["Empathy", "Clinical Judgment", "Physical Care", "Crisis Response"],
    why: "Nurses operate in chaotic, dynamic environments where every patient is unique. AI can assist with diagnostics but cannot hold a patient's hand, adapt to unexpected emergencies, or carry legal/ethical accountability. BLS projects 1.9 million healthcare openings annually through 2033.",
    skills: ["Patient assessment & vital monitoring", "Emotional intelligence & bedside manner", "Emergency response & clinical judgment", "Collaboration with doctors and care teams"],
    howToStart: ["Pursue a BSN (Bachelor of Science in Nursing)", "Look into accelerated nursing programs if switching fields", "Volunteer at a hospital or clinic for early experience", "Consider specializations: ICU, pediatric, mental health"],
    stats: { growth: "12.6%", salary: "$82K–$130K", openings: "1.9M/yr", risk: "Very Low" }
  },
  {
    id: 2,
    icon: "🧠",
    title: "Mental Health Therapist",
    sector: "Healthcare / Psychology",
    category: "healthcare",
    type: "safe",
    desc: "Therapy depends on trust, empathy, and nuanced human connection — impossible to automate authentically.",
    safetyScore: 93,
    growthScore: 88,
    demandScore: 90,
    tags: ["Emotional Intelligence", "Trust", "Non-verbal Cues", "Ethics"],
    why: "The therapeutic alliance — the bond between practitioner and client — is the foundation of effective treatment. McKinsey identifies social and emotional skills as the hardest to automate and fastest-growing in demand. Mental health counselors show 22.1% projected growth through 2032.",
    skills: ["Active listening and empathy", "Evidence-based therapeutic modalities (CBT, DBT)", "Crisis intervention", "Cultural competency"],
    howToStart: ["Master's degree in counseling, psychology, or social work", "Accumulate supervised clinical hours for licensure", "Specialize in areas like trauma, addiction, or youth", "Explore telehealth platforms as a growing entry point"],
    stats: { growth: "22.1%", salary: "$55K–$110K", openings: "High", risk: "Very Low" }
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI / Machine Learning Engineer",
    sector: "Technology",
    category: "tech",
    type: "growing",
    desc: "The architects of AI itself — designing, training, and refining the systems that automate other jobs.",
    safetyScore: 80,
    growthScore: 98,
    demandScore: 97,
    tags: ["Python", "Model Training", "Strategic Thinking", "System Design"],
    why: "AI tools can generate code but can't design the strategy, set objectives, or take responsibility for what AI systems do. Engineers who build and govern AI are the most demanded and best paid professionals of the next decade. Even as AI writes more code, human oversight is essential.",
    skills: ["Machine learning frameworks (PyTorch, TensorFlow)", "Mathematics: linear algebra, statistics, probability", "System architecture and model evaluation", "Ethics and AI safety principles"],
    howToStart: ["Computer science or math degree, or self-taught via Coursera/fast.ai", "Build a portfolio on GitHub with ML projects", "Specialize in a domain: NLP, computer vision, RL", "Learn prompt engineering — it's a real, valuable skill now"],
    stats: { growth: "40%+", salary: "$120K–$220K", openings: "Surging", risk: "Low" }
  },
  {
    id: 4,
    icon: "🔐",
    title: "Cybersecurity Analyst",
    sector: "Technology",
    category: "tech",
    type: "growing",
    desc: "AI detects threats but humans interpret complex attacks, make judgment calls, and outsmart adversarial humans.",
    safetyScore: 85,
    growthScore: 92,
    demandScore: 93,
    tags: ["Threat Analysis", "Incident Response", "Human Adversaries", "Ethics"],
    why: "Cyberattacks are launched by humans using creative, evolving tactics that require human strategic thinking to counter. Projections show 33% job growth through 2033. AI assists with detection — but can't replace the analyst who interprets the real-world context of an attack.",
    skills: ["Network security and threat modeling", "Incident response and forensics", "Penetration testing", "Security certifications: CISSP, CEH, CompTIA Security+"],
    howToStart: ["Study for CompTIA Security+ as a first certification", "Platforms like TryHackMe and HackTheBox for practice", "Computer science degree or cybersecurity bootcamps", "Participate in CTF (Capture The Flag) competitions"],
    stats: { growth: "33%", salary: "$90K–$160K", openings: "High", risk: "Low" }
  },
  {
    id: 5,
    icon: "⚡",
    title: "Electrician",
    sector: "Skilled Trades",
    category: "trades",
    type: "safe",
    desc: "Physical problem-solving in unpredictable real-world environments — robots still can't replace this.",
    safetyScore: 90,
    growthScore: 85,
    demandScore: 88,
    tags: ["Physical Dexterity", "Problem-Solving", "Safety Regulation", "Adaptability"],
    why: "BLS projects 11% employment growth for electricians through 2033 — nearly twice the national average. Electrification of industry, AI data centers, and smart buildings creates massive demand. No two jobs are alike; licensed humans must legally verify critical safety steps that machines cannot.",
    skills: ["Electrical code knowledge (NEC)", "Wiring, circuit installation, troubleshooting", "Reading blueprints and technical diagrams", "Physical safety and lockout/tagout procedures"],
    howToStart: ["Enroll in an electrician apprenticeship (4–5 years, earn while learning)", "Community college programs in electrical technology", "Obtain journeyman and master electrician licenses", "Specialize in EV charging, solar, or smart systems"],
    stats: { growth: "11%", salary: "$60K–$110K", openings: "80K/yr", risk: "Very Low" }
  },
  {
    id: 6,
    icon: "🚰",
    title: "Plumber",
    sector: "Skilled Trades",
    category: "trades",
    type: "safe",
    desc: "Tactile, judgement-heavy work in messy, unique environments where automation consistently fails.",
    safetyScore: 91,
    growthScore: 82,
    demandScore: 85,
    tags: ["Manual Dexterity", "Problem Diagnosis", "Adaptability", "Licensing"],
    why: "Plumbing requires spatial reasoning, physical dexterity, and real-time judgment across wildly different environments. Every job is different. Licensing requirements ensure a human must be accountable. With aging infrastructure and construction booms, demand is growing steadily.",
    skills: ["Pipe fitting and installation", "Diagnosing complex leaks and blockages", "Code compliance and permit processes", "Customer communication and estimation"],
    howToStart: ["Union apprenticeship programs are the gold standard", "Trade school programs in plumbing (1–2 years)", "Earn journeyman and master plumber licenses", "Consider specializing in gas lines, green plumbing, or commercial"],
    stats: { growth: "6%", salary: "$55K–$100K", openings: "Strong", risk: "Very Low" }
  },
  {
    id: 7,
    icon: "⚖️",
    title: "Lawyer / Legal Counsel",
    sector: "Law & Governance",
    category: "law",
    type: "safe",
    desc: "Legal reasoning, advocacy, ethics, and client trust require a licensed human accountable under the law.",
    safetyScore: 88,
    growthScore: 75,
    demandScore: 80,
    tags: ["Ethical Judgment", "Advocacy", "Accountability", "Negotiation"],
    why: "AI tools are being used for document review and research, but courts require human counsel. Legal strategy, advocacy, client empathy, and ethical responsibility cannot be automated. Lawyers score 100/100 on AI resistance, with only 29% automation likelihood. Use AI as your paralegal.",
    skills: ["Legal research and brief writing", "Negotiation and litigation", "Ethical judgment and client counseling", "Specialization: IP, criminal, corporate, immigration"],
    howToStart: ["Strong undergraduate GPA + LSAT preparation", "3-year JD program at law school", "Internships and clerkships to build experience", "Consider tech law, AI regulation, and data privacy — booming fields"],
    stats: { growth: "8%", salary: "$80K–$200K+", openings: "Stable", risk: "Low" }
  },
  {
    id: 8,
    icon: "🎨",
    title: "Art Director / Creative Director",
    sector: "Creative",
    category: "creative",
    type: "hybrid",
    desc: "Strategy, taste, brand vision, and team leadership require human creativity and cultural intelligence.",
    safetyScore: 72,
    growthScore: 70,
    demandScore: 74,
    tags: ["Creative Vision", "Brand Strategy", "Cultural Insight", "Leadership"],
    why: "AI generates visuals but lacks taste, intent, cultural context, and the ability to build long-term brand vision. Art directors use AI as a tool — but clients need humans who understand their story, market, and audience at a deep level. The creative directors who adopt AI become far more powerful.",
    skills: ["Visual storytelling and design principles", "Brand strategy and identity systems", "Managing designers, copywriters, and photographers", "AI tool proficiency (Midjourney, Adobe Firefly) as a force multiplier"],
    howToStart: ["Portfolio is king — build work, not just credentials", "Graphic design, fine arts, or communications degree helpful", "Start as a designer or content creator, grow to art direction", "Learn AI tools deeply — use them to 10x your output"],
    stats: { growth: "6%", salary: "$75K–$160K", openings: "Moderate", risk: "Medium" }
  },
  {
    id: 9,
    icon: "🏗️",
    title: "Civil / Structural Engineer",
    sector: "Engineering",
    category: "trades",
    type: "safe",
    desc: "Complex system integration, site judgment, and legal accountability keep engineers essential.",
    safetyScore: 84,
    growthScore: 80,
    demandScore: 82,
    tags: ["Complex Systems", "Safety Accountability", "Site Judgment", "Regulation"],
    why: "Civil engineers show 6.9% projected growth through 2033, with stronger growth in emerging tech specializations. AI can simulate models, but engineers interpret real-world constraints, make safety-critical calls, and carry professional liability. Infrastructure spending is at historic highs.",
    skills: ["Structural analysis and design", "AutoCAD, BIM, and simulation software", "Project management and contractor coordination", "Environmental and regulatory compliance"],
    howToStart: ["Civil or structural engineering degree (4 years)", "Pursue Professional Engineer (PE) license", "Specialize in sustainable design, earthquake engineering, or smart infrastructure", "Internships with construction firms and government agencies"],
    stats: { growth: "6.9%", salary: "$75K–$140K", openings: "Steady", risk: "Low" }
  },
  {
    id: 10,
    icon: "🎓",
    title: "Teacher / Professor",
    sector: "Education",
    category: "human",
    type: "safe",
    desc: "Education is fundamentally human — mentorship, motivation, and live adaptation to student needs.",
    safetyScore: 80,
    growthScore: 72,
    demandScore: 78,
    tags: ["Mentorship", "Adaptability", "Motivation", "Human Development"],
    why: "AI can deliver content, but cannot build the trust, model behavior, read the room, and inspire the way a great teacher does. Experienced instructors who integrate AI tools will be more effective than ever. STEM, special education, and vocational teachers face especially high demand.",
    skills: ["Subject expertise + pedagogical skill", "Classroom management and differentiation", "Incorporating EdTech and AI learning tools", "Assessment design and feedback loops"],
    howToStart: ["Teaching degree or subject-matter expertise + credential program", "Consider community college pathways for faster entry", "Specialize in high-demand areas: STEM, special ed, ESL", "Private tutoring, online courses, and EdTech roles also growing"],
    stats: { growth: "5–8%", salary: "$50K–$95K", openings: "Consistent", risk: "Low" }
  },
  {
    id: 11,
    icon: "🧬",
    title: "Data Scientist",
    sector: "Technology",
    category: "tech",
    type: "hybrid",
    desc: "Interprets data through business context and judgment — not just computation but meaning-making.",
    safetyScore: 74,
    growthScore: 85,
    demandScore: 87,
    tags: ["Statistical Modeling", "Business Judgment", "Storytelling", "Domain Expertise"],
    why: "Pure data processing is automatable, but data scientists who understand the business, ask the right questions, and translate findings into decisions are irreplaceable. The key is domain expertise + data skills. AI handles computation; humans provide context, strategy, and communication.",
    skills: ["Python/R, SQL, and data visualization", "Machine learning and statistical modeling", "Business acumen and stakeholder communication", "Domain expertise in a specific industry"],
    howToStart: ["Statistics, CS, or any STEM degree with data focus", "Bootcamps (DataCamp, Coursera, Kaggle) as supplements", "Build a portfolio with real datasets", "Pair data skills with deep knowledge of one industry (healthcare, finance, climate)"],
    stats: { growth: "35%", salary: "$95K–$165K", openings: "High", risk: "Low-Med" }
  },
  {
    id: 12,
    icon: "🌍",
    title: "Urban / Environmental Planner",
    sector: "Government & Policy",
    category: "law",
    type: "safe",
    desc: "Community engagement, political navigation, and on-the-ground judgment define this human-centered field.",
    safetyScore: 82,
    growthScore: 77,
    demandScore: 78,
    tags: ["Community Engagement", "Policy", "Systems Thinking", "Ethics"],
    why: "Planning decisions require understanding of community values, political dynamics, and ethical trade-offs that AI cannot resolve. With climate change driving urban adaptation, demand for planners is growing. Real-world field assessment and public meetings cannot be automated.",
    skills: ["GIS mapping and spatial analysis", "Public policy and stakeholder engagement", "Environmental impact assessment", "Grant writing and government processes"],
    howToStart: ["Urban planning, public policy, or geography degree", "Master's in Urban Planning (MURP) for senior roles", "Internships with city governments or NGOs", "Specialize in climate resilience or transportation — high-growth niches"],
    stats: { growth: "4–7%", salary: "$60K–$110K", openings: "Stable", risk: "Low" }
  },
  {
    id: 13,
    icon: "🏋️",
    title: "Physical Therapist",
    sector: "Healthcare",
    category: "healthcare",
    type: "safe",
    desc: "Hands-on rehabilitation combining touch, observation, and motivational coaching — deeply human work.",
    safetyScore: 90,
    growthScore: 82,
    demandScore: 87,
    tags: ["Physical Touch", "Motivation", "Observation", "Personalization"],
    why: "Physical therapy requires hands-on manual techniques, reading subtle physical responses, and motivating patients through pain and discouragement. Aging populations and increased sports participation are driving demand. Robots can't replicate the nuanced physical feedback that guides treatment.",
    skills: ["Anatomy, physiology, and biomechanics", "Manual therapy and exercise prescription", "Patient motivation and coaching", "Specializations: sports, neuro, pediatric, geriatric"],
    howToStart: ["Bachelor's in kinesiology, biology, or health science", "Doctor of Physical Therapy (DPT) — 3 additional years", "Clinical internships during program", "High job placement rate post-graduation"],
    stats: { growth: "17%", salary: "$75K–$125K", openings: "Very High", risk: "Very Low" }
  },
  {
    id: 14,
    icon: "🎭",
    title: "UX Researcher / Designer",
    sector: "Technology / Creative",
    category: "creative",
    type: "hybrid",
    desc: "Understanding human behavior and designing for real people requires genuine empathy and observation.",
    safetyScore: 76,
    growthScore: 80,
    demandScore: 82,
    tags: ["Human Empathy", "Behavioral Insight", "Usability", "Systems Thinking"],
    why: "AI can analyze user data but can't conduct a nuanced interview, read body language during testing, or make ethical calls about how a product should treat people. As AI products multiply, the demand for humans who ensure they're usable and ethical is actually increasing.",
    skills: ["User interviews and usability testing", "Wireframing and prototyping (Figma)", "Behavioral psychology basics", "Translating research into design decisions"],
    howToStart: ["Psychology, design, HCI, or any analytical field", "Online bootcamps from Google UX Design Certificate", "Build a portfolio with real case studies", "Network on LinkedIn, contribute to open-source design projects"],
    stats: { growth: "13%", salary: "$80K–$140K", openings: "Growing", risk: "Low-Med" }
  },
  {
    id: 15,
    icon: "🧑‍⚕️",
    title: "Physician / Surgeon",
    sector: "Healthcare",
    category: "healthcare",
    type: "safe",
    desc: "Diagnosis, surgery, and patient relationships demand licensed human judgment and accountability.",
    safetyScore: 92,
    growthScore: 80,
    demandScore: 90,
    tags: ["Diagnosis", "Surgery", "Legal Accountability", "Patient Relationships"],
    why: "AI assists with diagnostics but liability, complex decision-making, and the patient relationship remain with physicians. Surgery requires real-time tactile judgment. Physician shortages in the US are growing — demand far exceeds supply through 2030+.",
    skills: ["Medical knowledge across specialties", "Diagnostic reasoning under uncertainty", "Surgical technique (for surgeons)", "Communication and empathy with patients and families"],
    howToStart: ["Pre-med undergraduate + MCAT", "4-year medical school + 3–7 year residency", "Consider PA or NP paths for faster entry into medicine", "Specialize in high-demand areas: primary care, psychiatry, geriatrics"],
    stats: { growth: "3–7%", salary: "$210K–$400K+", openings: "Strong", risk: "Very Low" }
  },
  {
    id: 16,
    icon: "🌱",
    title: "Sustainability / Climate Consultant",
    sector: "Environment & Policy",
    category: "law",
    type: "growing",
    desc: "Navigating the intersection of science, policy, and business strategy in one of the fastest-growing fields.",
    safetyScore: 79,
    growthScore: 92,
    demandScore: 89,
    tags: ["Systems Thinking", "Policy", "Science", "Stakeholder Engagement"],
    why: "Sustainability demands are exploding — every major corporation now needs ESG strategy. This field requires deep domain expertise, stakeholder negotiation, and cross-disciplinary judgment that AI cannot replicate. It's also a new enough field that skilled humans are scarce and valued.",
    skills: ["Life cycle assessment and carbon accounting", "ESG reporting frameworks (GRI, TCFD, CSRD)", "Stakeholder engagement and change management", "Climate science and environmental policy"],
    howToStart: ["Environmental science, economics, policy, or engineering background", "Master's in sustainability or environmental management", "Certifications: LEED, GRI, CDP reporting", "Internships with corporations, NGOs, or government agencies"],
    stats: { growth: "25%+", salary: "$65K–$140K", openings: "Booming", risk: "Low" }
  }
];

const typeLabels = {
  safe: { label: "High Safety", cls: "badge-safe", colorCls: "safe" },
  growing: { label: "High Growth", cls: "badge-growing", colorCls: "growing" },
  hybrid: { label: "Hybrid Role", cls: "badge-hybrid", colorCls: "hybrid" }
};

let currentFilter = "all";
let currentSearch = "";

function render() {
  const grid = document.getElementById("grid");
  const filtered = jobs.filter(j => {
    const matchFilter = currentFilter === "all" || j.category === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || j.title.toLowerCase().includes(q) || j.sector.toLowerCase().includes(q) || j.tags.some(t => t.toLowerCase().includes(q)) || j.category.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">No careers found matching "<strong>${currentSearch}</strong>" — try a different keyword.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(j => {
    const t = typeLabels[j.type];
    return `
    <div class="card ${t.colorCls}" onclick="openModal(${j.id})">
      <div class="card-header">
        <span class="card-icon">${j.icon}</span>
        <span class="safety-badge ${t.cls}">${t.label}</span>
      </div>
      <h3>${j.title}</h3>
      <div class="card-sector">${j.sector}</div>
      <p>${j.desc}</p>

      <div class="meter-row">
        <span class="meter-label">AI Safety</span>
        <div class="meter-track"><div class="meter-fill fill-${t.colorCls}" style="width:${j.safetyScore}%"></div></div>
        <span class="meter-pct">${j.safetyScore}%</span>
      </div>
      <div class="meter-row">
        <span class="meter-label">Growth</span>
        <div class="meter-track"><div class="meter-fill fill-${t.colorCls}" style="width:${j.growthScore}%"></div></div>
        <span class="meter-pct">${j.growthScore}%</span>
      </div>
      <div class="meter-row">
        <span class="meter-label">Demand</span>
        <div class="meter-track"><div class="meter-fill fill-${t.colorCls}" style="width:${j.demandScore}%"></div></div>
        <span class="meter-pct">${j.demandScore}%</span>
      </div>

      <div class="card-tags">
        ${j.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function openModal(id) {
  const j = jobs.find(x => x.id === id);
  if (!j) return;
  const t = typeLabels[j.type];
  document.getElementById("modal-body").innerHTML = `
    <div class="modal-icon">${j.icon}</div>
    <h2>${j.title}</h2>
    <div class="modal-sector">${j.sector} · <span class="safety-badge ${t.cls}" style="display:inline-flex">${t.label}</span></div>

    <div class="modal-section-title">Why It's AI-Resistant</div>
    <p>${j.why}</p>

    <div class="modal-section-title">Key Statistics</div>
    <div class="modal-stats">
      <div class="modal-stat-box">
        <div class="val">${j.stats.growth}</div>
        <div class="lbl">Job Growth</div>
      </div>
      <div class="modal-stat-box">
        <div class="val blue">${j.stats.salary}</div>
        <div class="lbl">Salary Range</div>
      </div>
      <div class="modal-stat-box">
        <div class="val">${j.stats.openings}</div>
        <div class="lbl">Job Openings</div>
      </div>
      <div class="modal-stat-box">
        <div class="val">${j.stats.risk}</div>
        <div class="lbl">Automation Risk</div>
      </div>
    </div>

    <div class="modal-section-title">Core Skills Needed</div>
    <ul class="modal-list">
      ${j.skills.map(s => `<li>${s}</li>`).join('')}
    </ul>

    <div class="modal-section-title">How To Get Started</div>
    <ul class="modal-list">
      ${j.howToStart.map(s => `<li>${s}</li>`).join('')}
    </ul>
  `;
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e.target === document.getElementById("modal")) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

document.getElementById("search").addEventListener("input", e => {
  currentSearch = e.target.value;
  render();
});

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModalDirect(); });

render();