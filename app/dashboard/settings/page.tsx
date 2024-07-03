import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
  description: '...',
}

export default function Page() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="mb-20 text-center text-4xl font-bold">Settings</h1>
      ...
    </div>
  );
}
