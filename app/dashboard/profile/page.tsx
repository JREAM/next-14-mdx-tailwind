import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: '...',
}


export default function Page() {
  return (
    <div className="m-4 sm:m-8">
      <h1 className="mb-20 text-center text-4xl font-bold">Profile</h1>
      ...
    </div>
  );
}
