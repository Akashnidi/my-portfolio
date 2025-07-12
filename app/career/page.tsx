export default function CareerPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Professional Journey</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Senior System Engineer, Infosys Equinox (Dec 2024 – Present)</h2>
          <p className="text-gray-400">Managing incidents, monitoring AWS, testing APIs, and automating ticket flows.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">System Engineer, Infosys Equinox (Dec 2022 – Dec 2024)</h2>
          <p className="text-gray-400">Handled 200+ deployments, tool admin, eCommerce support, release management.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Graduate Engineer Trainee, Voltech (Oct 2021 – May 2022)</h2>
          <p className="text-gray-400">Commissioned numerical relays and control systems.</p>
        </li>
      </ul>
      <h2 className="text-2xl mt-8 font-bold">Certifications & Tools</h2>
      <ul className="list-disc ml-6 text-gray-300">
        <li>AWS Cloud Practitioner (2024-2027)</li>
        <li>GCP Associate (2024-2027)</li>
        <li>Jira, GitHub, Bitbucket, Jenkins, Instana, Pingdom, ServiceNow</li>
      </ul>
    </main>
  );
}
