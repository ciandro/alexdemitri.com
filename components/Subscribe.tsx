'use client';

import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');

    // TODO: Replace with your actual email subscription service endpoint
    // Examples: Mailchimp, ConvertKit, EmailOctopus, etc.
    try {
      // Placeholder for actual implementation
      console.log('Subscribe email:', email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      setMessage('Thanks for subscribing! Check your email to confirm.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Stay Updated
        </h2>
        <p className="text-medium-gray text-lg">
          Subscribe to receive new posts and updates directly to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                     disabled:bg-gray-100 disabled:cursor-not-allowed
                     text-base"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-3 bg-accent text-white font-medium rounded-md
                     hover:bg-accent-light transition-colors
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </form>

      {status === 'idle' && (
        <p className="text-xs text-medium-gray mt-6 text-center">
          No spam, unsubscribe at any time.
        </p>
      )}
    </div>
  );
}
