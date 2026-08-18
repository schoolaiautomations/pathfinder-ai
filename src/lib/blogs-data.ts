export type ResearchStatistic = {
  value: string;
  label: string;
  source: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: "Peer-Reviewed Research" | "Industry & News Analysis" | "Research & Evidence";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  sourceMeta?: {
    publisher: string;
    edition?: string;
    issnOrUrl?: string;
    identifier?: string;
    url?: string;
  };
  isExternal?: boolean;
  externalUrl?: string;
  featured?: boolean;
  tags: string[];
  keyStatistics: ResearchStatistic[];
  surveyAgeDistribution?: {
    ageGroup: string;
    count: number;
    percentage: string;
  }[];
  researchCitations: {
    institution: string;
    year: string;
    finding: string;
  }[];
  content: {
    abstract?: string;
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      callout?: {
        type: "quote" | "stat" | "insight";
        text: string;
        author?: string;
      };
      keyPoints?: string[];
    }[];
    qualityParameters?: {
      parameter: string;
      description: string;
    }[];
    actionableTakeaways: string[];
    conclusion: string;
    academicReferences?: string[];
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "importance-of-career-guidance-and-mentoring-interest-acumen",
    slug: "importance-of-career-guidance-and-mentoring-interest-acumen",
    title: "Importance of Career Guidance and Mentoring on Students Based on Their Interest and Acumen",
    subtitle: "A peer-reviewed empirical study examining student career confusion, the 3 critical academic transition stages, and why 86.8% of students demand interest-and-acumen-based assessment.",
    summary: "Published in the International Journal of Novel Research and Development (IJNRD), this research analyzes survey data on why 89% of students experience career indecision, why 93% are aware of only seven career paths, and how systematic quality assurance in career guidance transforms student outcomes.",
    category: "Peer-Reviewed Research",
    readTime: "8 min read",
    publishedDate: "May 2023",
    featured: true,
    author: {
      name: "Amarnath M., Aravinth T.S., Abhishek Sharma",
      role: "Researchers · IJNRD (ISSN: 2456-4184)",
      avatarInitials: "AA",
    },
    sourceMeta: {
      publisher: "International Journal of Novel Research and Development (IJNRD)",
      edition: "Volume 8, Issue 5 (May 2023)",
      issnOrUrl: "ISSN: 2456-4184",
      identifier: "Paper ID: IJNRD2305138 (pp. b281 - b290)",
      url: "https://www.ijnrd.org/papers/IJNRD2305138.pdf",
    },
    isExternal: true,
    externalUrl: "https://www.ijnrd.org/papers/IJNRD2305138.pdf",
    tags: [
      "IJNRD Research Paper",
      "Interest & Acumen",
      "Career Mentoring",
      "Student Confusion",
      "JMP Statistical Survey",
      "Quality Assurance",
    ],
    keyStatistics: [
      {
        value: "89%",
        label: "Students Confused or Unsure About Career Paths",
        source: "IJNRD Empirical Survey (66% Strongly Agree + 23% Agree)",
      },
      {
        value: "86.8%",
        label: "Students Demand Assessment on Interest & Acumen",
        source: "IJNRD Empirical Data (48.5% Agree + 38.4% Strongly Agree)",
      },
      {
        value: "93%",
        label: "Indian Students Aware of Only 7 Career Options",
        source: "India Today Career Survey Citation",
      },
      {
        value: "3 Stages",
        label: "Critical Guidance Junctures: 10th Std, 12th Std & Degree Level",
        source: "IJNRD Academic Progression Framework",
      },
    ],
    surveyAgeDistribution: [
      { ageGroup: "13 - 15 yrs", count: 6, percentage: "6.0%" },
      { ageGroup: "16 - 18 yrs", count: 15, percentage: "15.0%" },
      { ageGroup: "19 - 21 yrs", count: 32, percentage: "32.0%" },
      { ageGroup: "22 - 23 yrs", count: 40, percentage: "40.0%" },
      { ageGroup: "23+ yrs", count: 7, percentage: "7.0%" },
    ],
    researchCitations: [
      {
        institution: "International Journal of Novel Research and Development (IJNRD)",
        year: "2023",
        finding: "The majority of students feel that existing institutions and traditional schools fail to provide the tailored guidance needed to make informed career decisions.",
      },
      {
        institution: "India Today National Survey",
        year: "2022",
        finding: "93% of Indian students are aware of only seven career options, leading to severe talent misallocation and societal herd mentality.",
      },
      {
        institution: "National Research Centre on the Gifted and Talented",
        year: "2021",
        finding: "Assessment frameworks like 'Interest-A-Lyzer' and 'If I Ran the School' effectively stimulate student self-discovery and reveal hidden abilities.",
      },
      {
        institution: "James W. Pellegrino (Educational Assessment Science)",
        year: "2019",
        finding: "Valid assessments must evaluate what students know, how they reason, and how their intrinsic acumen maps to instructional and career usefulness.",
      },
    ],
    content: {
      abstract: "The importance of career guidance has been increasing over the past few decades due to emerging career options and rapid technological advancement. Quality assurance in career guidance plays a major role in deciding the right career option based on student interest and acumen. Personalized mentoring encourages students to be optimistic, set constructive goals, and focus on the future rather than ruminate on past or present problems. As career guidance is one of the major decisions an individual makes in a lifetime, this study evaluates the systematic methods of delivering career mentorship across three critical stages (10th standard, 12th standard, and college degree level) and analyzes empirical survey data from 100 students using JMP statistical software.",
      introduction: "As human beings, we develop passions for different activities since childhood. Each person's favorite activities, cognitive acumen, and natural talents define their personality, character, and worldview. Although driven by passion, not everyone pursues a career path in fields where they are talented or interested. In India, societal and family pressures heavily constrain students toward a handful of perceived 'safe' careers. After entering fields misaligned with their expertise, students struggle, lose interest, and experience chronic underachievement. While edtech platforms have proliferated, none systematically offer career guidance and mentorship grounded in students' genuine interest and acumen.",
      sections: [
        {
          heading: "The Crisis of Career Regret & The 93% Awareness Trap",
          paragraphs: [
            "In the 21st century, widespread mid-life crises, depression, and mental health struggles stem directly from choosing the wrong career and realizing it too late. A profession in which a person lacks genuine passion or innate ability leads inexorably to regret.",
            "According to a landmark survey cited in the paper, 93% of Indian students are aware of only seven career options. Because the vast majority never take the time or receive the guidance to explore their natural strengths and interests, they land in mismatched jobs and struggle to reach their true potential.",
            "Enabling the next generation to enter fields where they are mentally healthy, fulfilled, and contributing to their fullest capacity uplifts both society and national economic growth.",
          ],
          callout: {
            type: "quote",
            text: "A profession which a person is not really passionate will not take him anywhere except to the land of regret.",
            author: "Amarnath M., Aravinth T.S., Abhishek Sharma (IJNRD, May 2023)",
          },
        },
        {
          heading: "Review of Literature & Theoretical Frameworks",
          paragraphs: [
            "In a long-term mentoring partnership, a mentor assists a mentee in realizing their full professional potential through in-person, group, or modern electronic guidance. In India, the field of career counseling is still in its developing phase and requires rigorous standards and widespread acknowledgment.",
            "In his foundational work 'Knowing What Students Know: The Science and Design of Educational Assessment', James W. Pellegrino emphasizes that advancements in human learning measurement must form the bedrock of valid assessment. The National Research Centre on the Gifted and Talented proposes two proven diagnostic exercises:",
            "1. Interest-A-Lyzer: A questionnaire presenting real and hypothetical scenarios to stimulate self-discovery and focus students' authentic interest areas.",
            "2. 'If I Ran the School': An exercise designed to diagnose underachievement and encourage students to engage with self-selected projects aligned with their passions.",
          ],
          keyPoints: [
            "Mentoring provides psychological scaffolding during high-stakes academic transitions.",
            "Assessment tools must diagnose intrinsic motivation rather than superficial exam scores.",
            "Educational platforms must analyze both cognitive acumen and enduring interest.",
          ],
        },
        {
          heading: "The Research Gap: Societal Pressure & Lack of Modern Awareness",
          paragraphs: [
            "The study identifies a severe gap: students cannot identify emerging modern professions because career options are expanding faster than traditional school curricula.",
            "Furthermore, students face overwhelming peer and societal pressure from parents, neighbors, and teachers who are themselves unaware of modern high-growth professions. This forces students into narrow, hyper-competitive legacy pipelines.",
          ],
        },
        {
          heading: "Research Methodology & Statistical Survey",
          paragraphs: [
            "The authors designed a qualitative and quantitative research questionnaire distributed across 100 students via mobile-friendly digital surveys. The collected dataset was analyzed using JMP statistical software to evaluate student confusion, institutional readiness, and the demand for acumen-based mentoring.",
            "The surveyed age demographic was predominantly young adults preparing for or in higher education (40% aged 22-23, 32% aged 19-21, 15% aged 16-18, 7% aged 23+, and 6% aged 13-15).",
          ],
          callout: {
            type: "stat",
            text: "89% of respondents (66% strongly agree + 23% agree) confirmed experiencing confusion or uncertainty regarding their career trajectory.",
            author: "JMP Statistical Frequency Analysis",
          },
        },
        {
          heading: "Key Empirical Findings",
          paragraphs: [
            "1. Overwhelming Career Confusion: 89% of students experience significant doubt regarding their future career path.",
            "2. Demand for Acumen Assessment: 86.8% of students (48.5% agree + 38.4% strongly agree) demand that students be systematically assessed based on interest and acumen.",
            "3. Institutional Inadequacy: The majority reported that existing school career services fail to deliver the personalized guidance required to make informed decisions.",
          ],
        },
        {
          heading: "The 3 Critical Stages of Career Guidance",
          paragraphs: [
            "The research concludes that career guidance is most vital during three key academic milestone junctures:",
            "1. 10th Standard: Selecting the appropriate academic stream (Science, Commerce, Humanities, or Vocational).",
            "2. 12th Standard: Navigating college entrance exams, higher education choices, and specialized degree fields.",
            "3. College / Degree Level (+3 Years): Bridging theoretical academic study with industry skills, internships, and dynamic professional acumen.",
          ],
        },
      ],
      qualityParameters: [
        {
          parameter: "Effectiveness",
          description: "Delivering measurable clarity and actionable directional outcomes for the student.",
        },
        {
          parameter: "Efficiency",
          description: "Streamlined diagnostic assessment workflows that minimize student fatigue and decision paralysis.",
        },
        {
          parameter: "Equality",
          description: "Providing accessible, unbiased, high-quality guidance regardless of school tier or geography.",
        },
        {
          parameter: "Relevance",
          description: "Continuously updating career pathways to reflect emerging technologies and global industry shifts.",
        },
        {
          parameter: "Sustainability",
          description: "Equipping students with lifelong self-reflection and adaptability to navigate multi-decade careers.",
        },
      ],
      actionableTakeaways: [
        "Engage in structured career exploration at each of the 3 transition stages (Class 10, Class 12, and Degree level).",
        "Utilize multidimensional diagnostic tools that evaluate both Interest (passion) and Acumen (ability).",
        "Expand student and parent awareness beyond the standard 7 career options to eliminate herd conformity.",
        "Implement rigorous quality assurance across all career mentoring tools.",
      ],
      conclusion: "When career guidance is delivered systematically, scientifically, and professionally based on student interest and acumen, we can address the epidemic of student confusion and frustration. Empowering every individual to find their true purpose fosters holistic development, mental well-being, and significant societal growth.",
      academicReferences: [
        "Amarnath M., Aravinth T.S., & Sharma, A. (2023). Importance of career guidance and mentoring on the students based on their interest and acumen. International Journal of Novel Research and Development (IJNRD), 8(5), b281-b290.",
        "Pellegrino, J. W., Chudowsky, N., & Glaser, R. (Eds.). (2001). Knowing what students know: The science and design of educational assessment. National Academies Press.",
        "Arulmani, G., Bakshi, A. J., Leong, F. T. L., & Watts, A. G. (Eds.). (2014). Handbook of career development: International perspectives. Springer.",
        "Gatsby Foundation. (2014). Good career guidance. London: Gatsby Charitable Foundation.",
        "Bimrose, J., Hughes, D., & Collins, A. (2006). Quality assurance mechanisms for information, advice and guidance: A critical review. University of Warwick.",
        "Watts, A. G. (2014). Cross-national reviews of career guidance systems: Overview and reflections. NICEC.",
        "Ryff, C. D., & Singer, B. H. (2008). Know thyself and become what you are: A eudaimonic approach to psychological well-being. Journal of Happiness Studies.",
      ],
    },
  },
  {
    id: "90-percent-indian-students-choose-careers-blindly-india-today",
    slug: "90-percent-indian-students-choose-careers-blindly-india-today",
    title: "90% of Indian Students Choose Careers Blindly: Inside the Career Guidance Crisis",
    subtitle: "A United Nations study reveals only 1 in 10 students receive professional career advice, while 90% drift based on hearsay and outdated templates.",
    summary: "Reported by India Today, this extensive investigative analysis examines a survey of 21,239 students across 14 Indian districts, the Gallup workplace findings on employee disengagement, and how AI-enabled guidance can bridge the massive counseling gap across India.",
    category: "Industry & News Analysis",
    readTime: "6 min read",
    publishedDate: "Sep 28, 2025",
    author: {
      name: "Rishabh Chauhan",
      role: "Education & Career Journalist · India Today",
      avatarInitials: "RC",
    },
    sourceMeta: {
      publisher: "India Today (Education Today)",
      edition: "Special Jobs & Careers Investigation",
      issnOrUrl: "indiatoday.in/education-today",
      identifier: "Story ID: 2794690",
      url: "https://www.indiatoday.in/education-today/jobs-and-careers/story/90-of-indian-students-choose-careers-blindly-sparking-a-crisis-2794690-2025-09-28",
    },
    isExternal: true,
    externalUrl: "https://www.indiatoday.in/education-today/jobs-and-careers/story/90-of-indian-students-choose-careers-blindly-sparking-a-crisis-2794690-2025-09-28",
    tags: [
      "India Today Investigation",
      "UN Study",
      "21,239 Students Survey",
      "Gallup Workplace Data",
      "Employability Crisis",
      "AI Career Counseling",
    ],
    keyStatistics: [
      {
        value: "90%",
        label: "Students Receive Zero Professional Career Advice",
        source: "United Nations Study on Indian Students",
      },
      {
        value: "14%",
        label: "Indian Employees Consider Themselves 'Thriving' at Work",
        source: "Gallup 2024 State of the Global Workplace (Global Avg: 34%)",
      },
      {
        value: "21,239",
        label: "Teenagers Surveyed Across 14 Districts in 7 States",
        source: "National Career Dreams Study (Classes 9 to 12)",
      },
      {
        value: "20-25%",
        label: "Engineering Graduates Estimated Job-Ready for Industry",
        source: "India Skills Report & NASSCOM Benchmarks",
      },
    ],
    researchCitations: [
      {
        institution: "United Nations (UN) Youth Education Study",
        year: "2025",
        finding: "Only 1 in 10 students in India receives professional guidance or is even aware of career counseling services. 41% of private school students and 35% of government school students admit to being completely unsure about post-school courses.",
      },
      {
        institution: "Gallup Global Workplace Research",
        year: "2024",
        finding: "Widespread disengagement and burnout in Indian workplaces are directly rooted in career choices forced by external pressure and lack of personal interest alignment.",
      },
      {
        institution: "India Skills Report / NASSCOM",
        year: "2025",
        finding: "The graduate employability deficit is primarily a career choice misfit at the decision stage, long before candidates ever reach an interview room.",
      },
    ],
    content: {
      introduction: "Are you doing what you once dreamed of in school? For most, the answer is uncertain. In India, the absence of career counseling is not a side issue; it is the issue. A United Nations study reveals that only 10% of students receive expert career advice or are even aware of it. The remaining 90 percent drift—pushed by family suggestions, social pressure, or the lure of outdated 'safe' templates. The result is predictable: careers chosen by accident, not design.",
      sections: [
        {
          heading: "Massive Talent, Minimal Guidance",
          paragraphs: [
            "India possesses the world's largest youth population and one of the largest education systems, yet career counseling is treated as an afterthought. Out of every 100 students, 90 rely on advice from cousins, relatives, or an uncle whose legacy government job is held up as the solitary template.",
            "In a survey of 21,239 students from Classes 9 to 12 across 14 districts in Uttar Pradesh, Madhya Pradesh, Odisha, Gujarat, Punjab, Karnataka, and Rajasthan, data confirmed that access to schooling does not automatically equate to access to clarity.",
            "Millions of untapped capabilities remain trapped in band-aid career paths chosen for comfort rather than aptitude.",
          ],
          callout: {
            type: "quote",
            text: "Without the support of a professional, students chase the shadows of secure employment or trendy professions, instead of pursuing what might ignite their livelihood potential.",
            author: "Ritika Gupta, CEO & Career Counselor, AAera Consultants (cited in India Today)",
          },
        },
        {
          heading: "The Gallup Workplace Connection: Why Indian Professionals Are Unhappy",
          paragraphs: [
            "According to the Gallup 2024 State of the Global Workplace report, only 14% of Indian employees consider themselves to be 'thriving' at work—less than half of the global average of 34%.",
            "Workplace experts attribute this massive dissatisfaction gap directly to career choices misaligned with personal interests and cognitive abilities. When people work out of fear of unemployment rather than genuine engagement, burnout and disengagement become chronic.",
          ],
          callout: {
            type: "stat",
            text: "Only 14% of Indian employees feel fulfilled in their daily work, driven by career misfits chosen in high school.",
            author: "Gallup State of the Global Workplace Report 2024",
          },
        },
        {
          heading: "The Saturated 'Holy Trinity' vs. Sunrise 2025 Careers",
          paragraphs: [
            "Parents frequently push the holy trinity of engineering, medicine, and civil services as if the economy of 2025 were identical to the economy of 1980.",
            "Meanwhile, high-growth modern roles in Artificial Intelligence, renewable green tech, UI/UX design thinking, and climate sustainability are virtually absent from family dinner conversations.",
            "Even in engineering, studies estimate that actual industry job readiness hovers at a paltry 20% to 25%—not because students lack intelligence, but because they entered degrees they neither understood nor enjoyed.",
          ],
          keyPoints: [
            "41% of private school students and 35% of government school students admit to being unsure about course selection.",
            "The student-to-counselor ratio in India is thousands of students to one counselor, or none at all.",
            "Career stress in adult life is overwhelmingly the downstream consequence of a career misfit in adolescence.",
          ],
        },
        {
          heading: "Bridging the Gap: AI and Personalized Skill Mapping",
          paragraphs: [
            "While developed nations like the UK, Australia, and Canada mandate structured aptitude testing, career fairs, and formal grooming before university enrollment, India has historically left it to chance.",
            "The National Education Policy (NEP) 2020 advocates for multidisciplinary and vocational mapping, but technology is the true democratizer. AI-powered platforms and smartphone-accessible skill roadmaps can provide high-quality, personalized diagnostic guidance to students in rural towns and urban metros alike.",
          ],
          callout: {
            type: "insight",
            text: "A student in a tier-3 district with a smartphone should have identical access to personalized career discovery and skill mapping as a student in South Mumbai or South Delhi.",
            author: "Yasir Ali, Career Counselor & Edtech Director",
          },
        },
      ],
      actionableTakeaways: [
        "Do not rely solely on family hearsay or legacy prestige markers when choosing higher education courses.",
        "Undergo systematic aptitude and interest mapping before finalizing Grade 11 streams or college majors.",
        "Explore modern sunrise industries (AI, clean energy, data architecture, design) beyond traditional tracks.",
        "Utilize AI-driven diagnostic roadmaps to bridge the student-to-counselor gap and track progressive milestones.",
      ],
      conclusion: "Career counseling is not an optional luxury—it is as foundational to student success as mathematics or science. If India embraces data-backed, AI-driven guidance, it can convert its youth demographic into a global knowledge powerhouse rather than a demographic crisis.",
    },
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Peer-Reviewed Research",
  "Industry & News Analysis",
] as const;
