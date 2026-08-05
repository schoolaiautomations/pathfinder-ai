import type { CareerReport, FormData } from "./career-data";

/**
 * Generates a clean, standalone HTML report and opens it in a new window
 * for printing / saving as PDF.
 */
export function downloadReportAsPDF(report: CareerReport, formData: FormData) {
  const studentName = formData.name || "Student";
  const location = [formData.city, formData.state, formData.country].filter(Boolean).join(", ");
  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const matchesHTML = report.matches
    .map(
      (m, i) => `
      <div class="match-card">
        <div class="match-header">
          <div class="match-rank">${i + 1}</div>
          <div class="match-info">
            <h3>${m.name}</h3>
            <p>${m.why}</p>
          </div>
          <div class="match-score">${m.score}%</div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${m.score}%"></div>
        </div>
        ${m.roadmap && m.roadmap.length > 0 ? `
        <div class="roadmap-tree">
          <div class="roadmap-title">Pathway to ${m.name}</div>
          <div class="roadmap-timeline">
            ${m.roadmap.map(step => `
              <div class="roadmap-step">
                <div class="step-node"></div>
                <div class="step-content">
                  <h4>${step.stage}</h4>
                  <p>${step.description}</p>
                  <div class="step-meta">
                    <span class="duration">⏱️ ${step.duration}</span>
                    ${step.institutes && step.institutes.length > 0 ? `<span class="institutes">🎓 ${step.institutes.join(", ")}</span>` : ""}
                  </div>
                </div>
              </div>
            `).join('')}
            <div class="roadmap-step final-step">
              <div class="step-node final-node">💼</div>
              <div class="step-content">
                <h4 class="final-title">${m.name}</h4>
                <p>Destination Reached</p>
              </div>
            </div>
          </div>
        </div>
        ` : ""}
      </div>`
    )
    .join("\n");

  const insightItems = [
    { title: "📚 Study Roadmap", body: report.insights.studyRoadmap },
    { title: "📍 Where to Study", body: report.insights.whereToStudy },
    { title: "🏆 Skills to Build", body: report.insights.skillsToBuild },
    { title: "💼 Salary & Demand", body: report.insights.salaryAndDemand },
    { title: "📈 What to Study Next", body: report.insights.whatToStudyNext },
    { title: "❤️ Parent Guidance", body: report.insights.parentGuidance },
  ];

  const insightsHTML = insightItems
    .map(
      (item) => `
      <div class="insight-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>`
    )
    .join("\n");

  const profileHTML = `
    <div class="profile-container">
      <div class="profile-section-title">📋 Student Details & Preferences</div>
      <div class="profile-grid">
        <div><span class="label">Name:</span> ${studentName}</div>
        <div><span class="label">Phone:</span> ${formData.phone_number || "—"}</div>
        <div><span class="label">Date of Birth:</span> ${formData.dob || "—"}</div>
        <div><span class="label">Gender:</span> ${formData.gender || "—"}</div>
        <div><span class="label">Location:</span> ${location || "—"}</div>
        <div><span class="label">Education Level:</span> ${formData.educationLevel || "—"}</div>
        <div><span class="label">Section:</span> ${formData.section || "—"}</div>
        <div><span class="label">Board:</span> ${formData.board || "—"}</div>
        <div><span class="label">School/College:</span> ${formData.schoolName || "—"}</div>
        <div><span class="label">Academic Performance:</span> ${formData.performance || "—"}</div>
        <div><span class="label">Father's Profession:</span> ${formData.fatherProfession || "—"}</div>
        <div><span class="label">Mother's Profession:</span> ${formData.motherProfession || "—"}</div>
        <div><span class="label">Favorite Subjects:</span> ${formData.favoriteSubjects?.length ? formData.favoriteSubjects.join(", ") : "—"}</div>
        <div><span class="label">Difficult Subjects:</span> ${formData.difficultSubjects?.length ? formData.difficultSubjects.join(", ") : "—"}</div>
        <div><span class="label">Interests:</span> ${formData.interests?.length ? formData.interests.join(", ") : "—"}</div>
        <div><span class="label">Custom Interests:</span> ${formData.customInterests || "—"}</div>
        <div><span class="label">Skills:</span> ${formData.skills?.length ? formData.skills.join(", ") : "—"}</div>
        <div><span class="label">Hobbies:</span> ${formData.hobbies || "—"}</div>
        <div><span class="label">Achievements:</span> ${formData.achievements || "—"}</div>
        <div><span class="label">Projects:</span> ${formData.projects || "—"}</div>
        <div><span class="label">Career Dream:</span> ${formData.careerDream || "—"}</div>
        <div><span class="label">Preferred Career Type:</span> ${formData.careerType || "—"}</div>
        <div><span class="label">Study Location:</span> ${formData.studyLocation || "—"}</div>
        <div><span class="label">Study Mode:</span> ${formData.studyMode || "—"}</div>
        <div><span class="label">Financial Considerations:</span> ${formData.financial || "—"}</div>
        <div><span class="label">Parent Expectations:</span> ${formData.parentExpectations || "—"}</div>
        <div><span class="label">Careers Not Wanted:</span> ${formData.notWanted || "—"}</div>
      </div>
    </div>
  `;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Career Report - ${studentName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      color: #1a1a2e;
      background: #fff;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .header {
      text-align: center;
      border-bottom: 3px solid #000;
      padding-bottom: 24px;
      margin-bottom: 32px;
    }
    .header h1 {
      font-size: 28px;
      color: #000;
      margin-bottom: 4px;
    }
    .header .subtitle {
      font-size: 18px;
      color: #444;
    }
    .header .date {
      font-size: 13px;
      color: #888;
      margin-top: 8px;
    }

    .section-title {
      font-size: 20px;
      font-weight: 700;
      color: #000;
      margin: 28px 0 16px;
      border-left: 4px solid #000;
      padding-left: 12px;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 24px;
      font-size: 14px;
      background: #f4f4f5;
      padding: 16px 20px;
      border-radius: 12px;
      margin-bottom: 8px;
      border: 1px solid #e4e4e7;
    }
    .profile-grid .label {
      font-weight: 600;
      color: #000;
    }

    .match-card {
      background: #fafafa;
      border: 1px solid #e4e4e7;
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 12px;
    }
    .match-header {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .match-rank {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: #000;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .match-info { flex: 1; }
    .match-info h3 { font-size: 16px; font-weight: 700; color: #000; }
    .match-info p { font-size: 13px; color: #555; margin-top: 2px; }
    .match-score {
      font-size: 28px;
      font-weight: 800;
      color: #000;
      flex-shrink: 0;
    }
    .progress-bar {
      height: 6px;
      background: #e4e4e7;
      border-radius: 3px;
      margin-top: 12px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: #000;
      border-radius: 3px;
    }

    .roadmap-tree {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
    .roadmap-title {
      font-weight: 700;
      color: #000;
      font-size: 15px;
      margin-bottom: 16px;
    }
    .roadmap-timeline {
      padding-left: 12px;
      border-left: 2px solid #d4d4d8;
      margin-left: 8px;
    }
    .roadmap-step {
      position: relative;
      padding-left: 20px;
      margin-bottom: 24px;
    }
    .step-node {
      position: absolute;
      left: -27px;
      top: 2px;
      width: 12px;
      height: 12px;
      background: #fff;
      border: 3px solid #000;
      border-radius: 50%;
    }
    .step-content h4 {
      font-size: 14px;
      font-weight: 700;
      color: #000;
    }
    .step-content p {
      font-size: 13px;
      color: #555;
      margin-top: 4px;
    }
    .step-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
      font-size: 12px;
    }
    .duration {
      color: #27272a;
      background: #e4e4e7;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .institutes {
      color: #000;
      background: #f4f4f5;
      border: 1px solid #e4e4e7;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .final-step {
      margin-bottom: 0;
    }
    .final-node {
      left: -32px;
      top: 0;
      width: 22px;
      height: 22px;
      background: #000;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #fff;
    }
    .final-title {
      color: #000 !important;
    }

    .insights-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .insight-card {
      background: #fafafa;
      border: 1px solid #e4e4e7;
      border-radius: 12px;
      padding: 16px 20px;
    }
    .insight-card h3 {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
      color: #000;
    }
    .insight-card p {
      font-size: 13px;
      color: #555;
      line-height: 1.5;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      font-size: 12px;
      color: #888;
    }

    .no-print { margin: 24px auto 0; text-align: center; }
    .no-print button {
      background: #000;
      color: #fff;
      border: none;
      padding: 12px 32px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    .no-print button:hover { opacity: 0.9; }

    @media print {
      body { padding: 20px; }
      .no-print { display: none !important; }
      .match-card, .insight-card, .profile-grid {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .match-rank {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .progress-fill {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .roadmap-timeline {
        border-left-color: #d4d4d8 !important;
      }
      .step-node {
        border-color: #000 !important;
      }
      .final-node {
        background-color: #000 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .duration {
        background-color: #e4e4e7 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .institutes {
        background-color: #f4f4f5 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 AI Career Report</h1>
    <div class="subtitle">${studentName}'s Personalised Career Path</div>
    <div class="date">Generated on ${today}</div>
  </div>

  <div class="section-title">Student Profile</div>
  ${profileHTML}

  <div class="section-title">Top Career Matches</div>
  ${matchesHTML}

  <div class="section-title">Personalised Insights</div>
  <div class="insights-grid">
    ${insightsHTML}
  </div>

  <div class="footer">
    <p>Generated by Wabi Career Guidance · This report is for guidance purposes only. Developed by Neeli Sivasai, For more information contact +91 9441114167 (N Srinivas) or +91 9110392014 (K Raviteja) - (Certified Career Councellors)</p>
  </div>

  <div class="no-print">
    <button onclick="window.print()">🖨️ Print / Save AI Report PDF</button>
  </div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => printWindow.print(), 300);
    };
  }
}

/**
 * Generates a clean PDF of the raw student form submission (all filled data before AI analysis)
 */
export function downloadFormPreviewAsPDF(formData: FormData) {
  const studentName = formData.name || "Student";
  const location = [formData.city, formData.state, formData.country].filter(Boolean).join(", ");
  const today = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      title: "👤 1. Basic Details",
      items: [
        { label: "Student Name", value: formData.name },
        { label: "Phone Number", value: formData.phone_number },
        { label: "Date of Birth", value: formData.dob },
        { label: "Gender", value: formData.gender },
        { label: "Location", value: location },
        { label: "Father's Profession", value: formData.fatherProfession },
        { label: "Mother's Profession", value: formData.motherProfession },
      ],
    },
    {
      title: "🎓 2. Academic Background",
      items: [
        { label: "Current Class / Education Level", value: formData.educationLevel },
        { label: "Section", value: formData.section },
        { label: "Board / Curriculum", value: formData.board },
        { label: "School / College Name", value: formData.schoolName },
        { label: "Academic Performance", value: formData.performance },
        { label: "Favorite Subjects", value: formData.favoriteSubjects?.length ? formData.favoriteSubjects.join(", ") : "None" },
        { label: "Difficult Subjects", value: formData.difficultSubjects?.length ? formData.difficultSubjects.join(", ") : "None" },
      ],
    },
    {
      title: "💡 3. Interests & Custom Hobbies",
      items: [
        { label: "Selected Interests", value: formData.interests?.length ? formData.interests.join(", ") : "None" },
        { label: "Custom Interests", value: formData.customInterests },
      ],
    },
    {
      title: "🛠️ 4. Skills, Hobbies & Achievements",
      items: [
        { label: "Current Skills", value: formData.skills?.length ? formData.skills.join(", ") : "None" },
        { label: "Hobbies", value: formData.hobbies },
        { label: "Achievements & Certificates", value: formData.achievements },
        { label: "Projects Done", value: formData.projects },
      ],
    },
    {
      title: "🎯 5. Career Preferences & Dreams",
      items: [
        { label: "Career Dream", value: formData.careerDream },
        { label: "Preferred Career Type", value: formData.careerType },
        { label: "Preferred Study Location", value: formData.studyLocation },
        { label: "Preferred Study Mode", value: formData.studyMode },
        { label: "Financial Considerations", value: formData.financial },
        { label: "Parent Expectations", value: formData.parentExpectations },
        { label: "Careers NOT Wanted", value: formData.notWanted },
      ],
    },
  ];

  const sectionsHTML = sections
    .map(
      (sec) => `
      <div class="form-section">
        <h2 class="form-section-title">${sec.title}</h2>
        <div class="form-grid">
          ${sec.items
            .map(
              (it) => `
            <div class="form-field">
              <span class="field-label">${it.label}</span>
              <span class="field-value">${it.value || "—"}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Student Form Submission - ${studentName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      color: #111827;
      background: #fff;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #000;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .header h1 { font-size: 26px; color: #000; }
    .header .subtitle { font-size: 15px; color: #4b5563; margin-top: 4px; }
    .header .date { font-size: 12px; color: #6b7280; margin-top: 6px; }

    .form-section {
      margin-bottom: 24px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 18px 20px;
    }
    .form-section-title {
      font-size: 16px;
      font-weight: 700;
      color: #000;
      margin-bottom: 14px;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 6px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 20px;
    }
    .form-field {
      display: flex;
      flex-direction: column;
    }
    .field-label {
      font-size: 11px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .field-value {
      font-size: 13px;
      font-weight: 700;
      color: #111827;
      margin-top: 2px;
      word-break: break-word;
    }

    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      font-size: 11px;
      color: #9ca3af;
    }
    .no-print { margin: 24px auto 0; text-align: center; }
    .no-print button {
      background: #000;
      color: #fff;
      border: none;
      padding: 12px 32px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
    @media print {
      body { padding: 15px; }
      .no-print { display: none !important; }
      .form-section { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📋 Student Form Submission (Filled Form Data)</h1>
    <div class="subtitle">Wabi Career Guidance · ${studentName}'s Filled Answers Preview</div>
    <div class="date">Submitted on ${today}</div>
  </div>

  ${sectionsHTML}

  <div class="footer">
    <p>Wabi Career Guidance · For assistance contact +91 9441114167 / +91 9110392014</p>
  </div>

  <div class="no-print">
    <button onclick="window.print()">🖨️ Print / Save Form Answers PDF</button>
  </div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => printWindow.print(), 300);
    };
  }
}
