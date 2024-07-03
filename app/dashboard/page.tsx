import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '...',
}

export default function Page() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="mb-20 text-center text-4xl font-bold">Dashboard</h1>
      Dashboard Home...
    </div>
  );
}
