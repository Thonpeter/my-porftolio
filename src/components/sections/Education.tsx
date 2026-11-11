'use client';

const education = {
  degree: 'BSc in Computer Science',
  institution: 'University of Nairobi',
  period: '2019 — 2024',
  honors: 'Second Class Honors (Upper Division)',
  thesis: 'Decentralized Students eVoting System using Blockchain',
};

const certifications = [
  { title: 'Introduction to DHIS2', issuer: 'DHIS2 Academy', year: '2025' },
  { title: 'Algorand Blockchain Developer', issuer: 'Algorand Foundation', year: '2024' },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Education
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Academic credentials & certifications.
          </p>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                {education.degree} <span className="text-neutral-400 font-normal">· {education.institution}</span>
              </h3>
              <span className="text-xs font-mono text-neutral-500 shrink-0">
                {education.period}
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">{education.honors}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Thesis: <span className="italic">{education.thesis}</span>
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
              Certifications
            </h4>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-baseline justify-between text-sm"
                >
                  <span className="text-neutral-800 dark:text-neutral-200">
                    {cert.title} <span className="text-xs text-neutral-400">({cert.issuer})</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
