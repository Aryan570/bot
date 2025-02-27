import Chat from '../components/Chat';

export default function Home() {
  return (
    <div className="max-h-screen h-screen">
      <header className="bg-slate-100 shadow p-4">
        <h1 className="text-xl font-bold text-center text-slate-600">CDP Assistant</h1>
        <p className="text-center text-gray-600">
          Ask me about Segment, mParticle, Lytics, or Zeotap
        </p>
      </header>
      <main className='h-5/6'>
        <Chat />
      </main>
    </div>
  );
}
