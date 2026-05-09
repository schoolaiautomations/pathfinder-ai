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
    <div class="profile-grid">
      <div><span class="label">Name:</span> ${studentName}</div>
      <div><span class="label">Education:</span> ${formData.educationLevel || "—"}</div>
      <div><span class="label">Board:</span> ${formData.board || "—"}</div>
      <div><span class="label">Location:</span> ${location || "—"}</div>
      <div><span class="label">Interests:</span> ${formData.interests.length ? formData.interests.join(", ") : "—"}</div>
      <div><span class="label">Skills:</span> ${formData.skills.length ? formData.skills.join(", ") : "—"}</div>
      <div><span class="label">Career Dream:</span> ${formData.careerDream || "—"}</div>
      <div><span class="label">Performance:</span> ${formData.performance || "—"}</div>
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
      border-bottom: 3px solid #7c3aed;
      padding-bottom: 24px;
      margin-bottom: 32px;
    }
    .header h1 {
      font-size: 28px;
      color: #7c3aed;
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
      color: #7c3aed;
      margin: 28px 0 16px;
      border-left: 4px solid #7c3aed;
      padding-left: 12px;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 24px;
      font-size: 14px;
      background: #f8f7ff;
      padding: 16px 20px;
      border-radius: 12px;
      margin-bottom: 8px;
    }
    .profile-grid .label {
      font-weight: 600;
      color: #7c3aed;
    }

    .match-card {
      background: #f8f7ff;
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
      background: linear-gradient(135deg, #7c3aed, #a855f7);
      color: #fff;
      font-weight: 700;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .match-info { flex: 1; }
    .match-info h3 { font-size: 16px; font-weight: 700; }
    .match-info p { font-size: 13px; color: #666; margin-top: 2px; }
    .match-score {
      font-size: 28px;
      font-weight: 800;
      color: #7c3aed;
      flex-shrink: 0;
    }
    .progress-bar {
      height: 6px;
      background: #e2ddf5;
      border-radius: 3px;
      margin-top: 12px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #7c3aed, #a855f7);
      border-radius: 3px;
    }

    .roadmap-tree {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
    .roadmap-title {
      font-weight: 700;
      color: #7c3aed;
      font-size: 15px;
      margin-bottom: 16px;
    }
    .roadmap-timeline {
      padding-left: 12px;
      border-left: 2px solid #e2ddf5;
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
      border: 3px solid #7c3aed;
      border-radius: 50%;
    }
    .step-content h4 {
      font-size: 14px;
      font-weight: 700;
      color: #1a1a2e;
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
      color: #d97706;
      background: #fef3c7;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
    }
    .institutes {
      color: #7c3aed;
      background: #f3f0ff;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
    }
    .final-step {
      margin-bottom: 0;
    }
    .final-node {
      left: -32px;
      top: 0;
      width: 22px;
      height: 22px;
      background: #7c3aed;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
    .final-title {
      color: #7c3aed !important;
    }

    .insights-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .insight-card {
      background: #f8f7ff;
      border-radius: 12px;
      padding: 16px 20px;
    }
    .insight-card h3 {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
      color: #1a1a2e;
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
      color: #aaa;
    }

    .no-print { margin: 24px auto 0; text-align: center; }
    .no-print button {
      background: linear-gradient(135deg, #7c3aed, #a855f7);
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
        border-left-color: #e2ddf5 !important;
      }
      .step-node {
        border-color: #7c3aed !important;
      }
      .final-node {
        background-color: #7c3aed !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .duration {
        background-color: #fef3c7 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .institutes {
        background-color: #f3f0ff !important;
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
    <p>Generated by Wabi Career Guidance · This report is for guidance purposes only. Developed by Neeli Sivasai, For more information contact +91 9441114167 or +91 9110392014</p>
  </div>

  <div class="no-print">
    <button onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    // Auto-trigger print dialog after content loads
    printWindow.onload = () => {
      setTimeout(() => printWindow.print(), 300);
    };
  }
}
