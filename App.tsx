
import React from 'react';
import { TOP_CARDS, JOURNEY_STATIONS, EMOTIONAL_TAGS } from './constants';
import { SummaryCard } from './components/SummaryCard';
import { JourneyMap } from './components/JourneyMap';
import { RoadmapChart } from './components/RoadmapChart';
import { WordCloud } from './components/WordCloud';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      <header className="bg-white shadow-sm border-b border-slate-200 py-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            מפת הדרכים של שלי יוניצמן
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            איך העמיתים שלי רואים אותי היום, ומה המסע קדימה
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {TOP_CARDS.map(card => (
            <SummaryCard key={card.id} data={card} />
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-delayed">
          <div className="h-full">
            <JourneyMap stations={JOURNEY_STATIONS} />
          </div>
          <div className="h-full">
            <RoadmapChart />
          </div>
        </section>

        <section className="animate-fade-in-delayed-more">
           <WordCloud tags={EMOTIONAL_TAGS} />
        </section>
      </main>

      <footer className="text-center text-slate-400 text-sm mt-12 mb-6">
        נוצר באהבה עבור שלי יוניצמן
      </footer>
    </div>
  );
};

export default App;
