import jsPDF from "jspdf";
import type { LearningRoadmap, RoadmapFormData } from "./roadmap-data";

export function generateRoadmapPdf(roadmap: LearningRoadmap, formData: RoadmapFormData | null) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 18;
      // Add subtle header on continuation pages
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`${roadmap.careerGoal} — Career Roadmap (Wabi Career Guidance)`, margin, 10);
      doc.setDrawColor(230, 230, 230);
      doc.line(margin, 12, pageWidth - margin, 12);
    }
  };

  // ─── Header & Title ────────────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(90, 90, 90);
  doc.text("WABI CAREER GUIDANCE · LEARNING ROADMAP", margin, y);
  y += 7;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(15, 15, 15);
  const titleLines = doc.splitTextToSize(`How to become a ${roadmap.careerGoal}`, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 8 + 2;

  // Metadata badges
  if (formData) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`Location: ${formData.location}  |  Current Stage: ${formData.currentClass}`, margin, y);
    y += 6;
  }

  // Summary Box
  doc.setFillColor(248, 248, 248);
  doc.setDrawColor(225, 225, 225);
  doc.roundedRect(margin, y, contentWidth, 18, 2, 2, "FD");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  const summaryLines = doc.splitTextToSize(roadmap.summary, contentWidth - 8);
  doc.text(summaryLines, margin + 4, y + 6);
  y += 24;

  // ─── SECTION 1: Academic Pathway ───────────────────────────────────────────
  if (roadmap.academicPathway) {
    checkPageBreak(25);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("1. Academic Pathway (Chronological Stages)", margin, y);
    y += 6;

    // Step 1: Intermediate Streams
    if (roadmap.academicPathway.intermediateOptions?.length > 0) {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text("Stage 1: Class 11–12 (Intermediate / +2) Stream Options", margin, y);
      y += 5;

      roadmap.academicPathway.intermediateOptions.forEach((opt) => {
        const descLines = doc.splitTextToSize(opt.description, contentWidth - 10);
        const boxHeight = 12 + descLines.length * 4;
        checkPageBreak(boxHeight + 4);

        doc.setFillColor(252, 252, 252);
        doc.setDrawColor(230, 230, 230);
        doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, "FD");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(15, 15, 15);
        doc.text(`${opt.name} (${opt.duration})`, margin + 3, y + 5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        doc.text(descLines, margin + 3, y + 9);

        const subjectsText = `Subjects: ${opt.subjects.join(", ")}`;
        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(subjectsText, margin + 3, y + boxHeight - 2);

        y += boxHeight + 3;
      });
      y += 2;
    }

    // Step 2: Entrance Exams
    if (roadmap.academicPathway.keyExams?.length > 0) {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text("Stage 2: Entrance & Competitive Exams to Write", margin, y);
      y += 5;

      roadmap.academicPathway.keyExams.forEach((exam) => {
        const descLines = doc.splitTextToSize(exam.description, contentWidth - 10);
        const unlocksText = exam.forCourses?.length ? `Unlocks Admission To: ${exam.forCourses.join(" | ")}` : "";
        const boxHeight = 14 + descLines.length * 4 + (unlocksText ? 5 : 0);
        checkPageBreak(boxHeight + 4);

        doc.setFillColor(250, 250, 250);
        doc.setDrawColor(220, 220, 220);
        doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, "FD");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(10, 10, 10);
        doc.text(`${exam.name}   [When: ${exam.when}]`, margin + 3, y + 5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(70, 70, 70);
        doc.text(descLines, margin + 3, y + 9);

        if (unlocksText) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8);
          doc.setTextColor(20, 20, 20);
          doc.text(unlocksText, margin + 3, y + boxHeight - 2.5);
        }

        y += boxHeight + 3;
      });
      y += 2;
    }

    // Step 3: Degree Programs
    if (roadmap.academicPathway.degreeOptions?.length > 0) {
      checkPageBreak(15);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text("Stage 3: Degree & College Programs to Pursue", margin, y);
      y += 5;

      roadmap.academicPathway.degreeOptions.forEach((deg) => {
        const descLines = doc.splitTextToSize(deg.description, contentWidth - 10);
        const boxHeight = 12 + descLines.length * 4;
        checkPageBreak(boxHeight + 4);

        doc.setFillColor(252, 252, 252);
        doc.setDrawColor(230, 230, 230);
        doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, "FD");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(15, 15, 15);
        doc.text(`${deg.name} (${deg.type} · ${deg.duration})`, margin + 3, y + 5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(80, 80, 80);
        doc.text(descLines, margin + 3, y + 9);

        const subjectsText = `Core Subjects: ${deg.subjects.join(", ")}`;
        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(subjectsText, margin + 3, y + boxHeight - 2);

        y += boxHeight + 3;
      });
      y += 4;
    }
  }

  // ─── SECTION 2: Learning Roadmap Phases ─────────────────────────────────────
  if (roadmap.phases && roadmap.phases.length > 0) {
    checkPageBreak(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("2. Step-by-Step Learning Roadmap", margin, y);
    y += 6;

    roadmap.phases.forEach((phase, idx) => {
      const descLines = doc.splitTextToSize(phase.description, contentWidth - 12);
      const skillsText = `Skills: ${phase.skills?.join(", ") || "N/A"}`;
      const skillsLines = doc.splitTextToSize(skillsText, contentWidth - 12);
      const milestoneText = phase.milestone ? `Milestone: ${phase.milestone}` : "";

      const boxHeight = 14 + descLines.length * 4 + skillsLines.length * 4 + (milestoneText ? 5 : 0);
      checkPageBreak(boxHeight + 4);

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(215, 215, 215);
      doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(10, 10, 10);
      doc.text(`Phase ${idx + 1}: ${phase.title}  (${phase.duration})`, margin + 4, y + 5.5);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(70, 70, 70);
      doc.text(descLines, margin + 4, y + 10);

      const skillsY = y + 10 + descLines.length * 4;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(30, 30, 30);
      doc.text(skillsLines, margin + 4, skillsY);

      if (milestoneText) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(90, 90, 90);
        doc.text(milestoneText, margin + 4, y + boxHeight - 2.5);
      }

      y += boxHeight + 4;
    });
    y += 4;
  }

  // ─── SECTION 3: Hobbies to Develop ─────────────────────────────────────────
  if (roadmap.hobbies && roadmap.hobbies.length > 0) {
    checkPageBreak(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("3. Recommended Hobbies to Develop", margin, y);
    y += 6;

    roadmap.hobbies.forEach((h) => {
      const reasonLines = doc.splitTextToSize(h.reason, contentWidth - 10);
      const boxHeight = 8 + reasonLines.length * 4;
      checkPageBreak(boxHeight + 3);

      doc.setFillColor(250, 250, 250);
      doc.setDrawColor(230, 230, 230);
      doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(20, 20, 20);
      doc.text(`• ${h.hobby}`, margin + 3, y + 4.5);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      doc.text(reasonLines, margin + 6, y + 8.5);

      y += boxHeight + 2.5;
    });
    y += 4;
  }

  // ─── SECTION 4: Scholarships & Financial Aid Exams ─────────────────────────
  if (roadmap.scholarships && roadmap.scholarships.length > 0) {
    checkPageBreak(22);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("4. Scholarships & Financial Aid Exams", margin, y);
    y += 6;

    roadmap.scholarships.forEach((s) => {
      const eligLines = doc.splitTextToSize(`Eligibility: ${s.eligibility}`, contentWidth - 10);
      const examLines = doc.splitTextToSize(`Exam/Selection: ${s.examOrSelection}  |  When to Apply: ${s.whenToApply}`, contentWidth - 10);
      const boxHeight = 12 + eligLines.length * 4 + examLines.length * 4;
      checkPageBreak(boxHeight + 4);

      doc.setFillColor(252, 252, 252);
      doc.setDrawColor(225, 225, 225);
      doc.roundedRect(margin, y, contentWidth, boxHeight, 1.5, 1.5, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(15, 15, 15);
      doc.text(`${s.name} (${s.provider}) — Grant: ${s.benefits}`, margin + 3, y + 5);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(70, 70, 70);
      doc.text(eligLines, margin + 3, y + 9);

      const examY = y + 9 + eligLines.length * 4;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(90, 90, 90);
      doc.text(examLines, margin + 3, examY);

      y += boxHeight + 3;
    });
    y += 4;
  }

  // ─── SECTION 5: Future Outlook & Opportunities ─────────────────────────────
  if (roadmap.futureOutlook) {
    checkPageBreak(25);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("5. Future Outlook & Industry Opportunities", margin, y);
    y += 6;

    const fo = roadmap.futureOutlook;
    const aiImpactLines = doc.splitTextToSize(`AI Impact: ${fo.aiImpact}`, contentWidth - 8);
    const boxHeight = 22 + aiImpactLines.length * 4;
    checkPageBreak(boxHeight + 4);

    doc.setFillColor(248, 248, 248);
    doc.setDrawColor(220, 220, 220);
    doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(20, 20, 20);
    doc.text(`Demand Trend: ${fo.demandTrend}   |   Salary Range: ${fo.salaryRange}`, margin + 4, y + 5);
    doc.text(`Job Security: ${fo.jobSecurity}`, margin + 4, y + 9.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text(aiImpactLines, margin + 4, y + 14);

    if (fo.topRecruiters?.length) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      doc.text(`Top Recruiters: ${fo.topRecruiters.join(", ")}`, margin + 4, y + boxHeight - 2.5);
    }

    y += boxHeight + 6;
  }

  // ─── SECTION 5: Similar Professions ─────────────────────────────────────────
  if (roadmap.similarProfessions && roadmap.similarProfessions.length > 0) {
    checkPageBreak(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(10, 10, 10);
    doc.text("5. Similar Career Alternatives", margin, y);
    y += 6;

    roadmap.similarProfessions.forEach((p) => {
      checkPageBreak(12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(20, 20, 20);
      doc.text(`• ${p.title}`, margin + 2, y + 4);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      doc.text(`${p.reason} (Shared: ${p.overlap})`, margin + 6, y + 8);
      y += 11;
    });
    y += 4;
  }

  // ─── AI Disclaimer ─────────────────────────────────────────────────────────
  checkPageBreak(18);
  doc.setFillColor(254, 249, 235);
  doc.setDrawColor(245, 215, 130);
  doc.roundedRect(margin, y, contentWidth, 14, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(160, 90, 10);
  doc.text("Disclaimer: AI Guidance & Human Consultation Recommended", margin + 3, y + 4.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(130, 80, 20);
  doc.text("This roadmap is generated by AI. Always consult a certified career counselor before making major educational decisions.", margin + 3, y + 9.5);

  // Trigger instant direct file download in browser
  const filename = `${roadmap.careerGoal.replace(/[^a-zA-Z0-9]/g, "_")}_Career_Roadmap.pdf`;
  doc.save(filename);
}
