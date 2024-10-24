import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-10 lg:p-16 font-sans">
      <header className="mb-12 flex items-center space-x-4">
      <Image src="/logo.png" alt="Om Labs Logo" width={40} height={40} />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Om Labs</h1>
      </header>

      <main className="space-y-12 max-w-2xl">
        <section>
          <p className="text-lg md:text-xl leading-relaxed">
            Om Labs was founded by Krish Chelikavada and Keon Kim. We're currently exploring agentic solutions for customer intelligence and success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">0xPass / Passport Protocol</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            0xPass (Passport Protocol) is the fastest distributed key management network with sub-second performance.
          </p>
          <Button variant="link" className="text-lg md:text-xl text-blue-600 hover:text-blue-800 p-0 h-auto">
            <a href="https://0xpass.io" target="_blank" rel="noopener noreferrer">
              Learn more at 0xpass.io
            </a>
          </Button>
        </section>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        <p>&copy; 2024 Chennchuu Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;