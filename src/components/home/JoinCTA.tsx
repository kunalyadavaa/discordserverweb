import React from 'react';
import { siteConfig } from '../../config/site';

export function JoinCTA() {
  return (
    <section className="container mx-auto px-4">
      <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Become part of our growing community and start making connections today
        </p>
        <a
          href={siteConfig.social.discord}
          className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
        >
          {siteConfig.content.joinButtonText}
        </a>
      </div>
    </section>
  );
}