import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="p-8 min-h-screen flex flex-col items-center">
      <Image
        src="/profile.jpg"
        alt="Akassnidi Karunanithi"
        width={160}
        height={160}
        className="rounded-full"
      />
      <h1 className="text-4xl mt-4 font-bold">Akassnidi Karunanithi</h1>
      <p className="text-lg text-gray-400">
        Senior System Engineer | Cloud Learner | DevOps Explorer
      </p>
      <p className="mt-4 max-w-xl text-center">
        Passionate engineer with 2.11 years in Release Management, Monitoring, and Application Support. Actively learning Cloud & DevOps while solving real-world eCommerce tech problems.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/career">
          <span className="bg-blue-600 px-4 py-2 rounded-lg">Career</span>
        </Link>
        <Link href="/passion">
          <span className="bg-purple-600 px-4 py-2 rounded-lg">Passion Works</span>
        </Link>
      </div>
      <div className="mt-6 flex gap-4 text-blue-300">
        <a href="mailto:akashnidiofficial@gmail.com">Email</a>
        <a
          href="https://linkedin.com/in/akassnidi-karunanithi-123617202"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.credly.com/users/akassnidi-karunanithi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Credly
        </a>
      </div>
    </main>
  );
}
