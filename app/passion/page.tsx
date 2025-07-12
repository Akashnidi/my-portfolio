'use client';

import React from 'react';

export default function PassionPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Passion Works & Learning</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">📘 Cloud Learning</h2>
          <p>Intellipaat Cloud Architect Program – AWS, GCP, Azure (In Progress)</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">🎓 Events & Summits</h2>
          <p>AppViewX SaaS Security Conf 2024, AWS Bangalore 2025, Infosys AI Summit</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">🤝 Volunteering & Side Projects</h2>
          <p>Mentoring juniors and exploring automation and DevOps tools in free time.</p>
        </li>
      </ul>
    </main>
  );
}
