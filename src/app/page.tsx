import { Coffee, Github, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Recycling from './components/Recyling';
import Hazardous from './components/Hazardous';
import Branches from './components/Branches';
import Compost from './components/Compost';
import Garbage from './components/Garbage';
import { promises as fs } from 'fs';
import { ReactNode } from 'react';
import Next from './components/Next';

export default async function Home() {

  const today = new Date();

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const weekNumber = getWeekNumber(today);

  const file = await fs.readFile(process.cwd() + '/src/app/data/2023.json', 'utf8');
  const data = JSON.parse(file);

  const week = data.find((week: any) => week.id === weekNumber);

  const renderIcons = (week: { collection: string[] }) => {
    const collections: { [key: string]: ReactNode } = {
      hazardous: <Hazardous key='hazardous' className='w-20 h-20 lg:w-48 lg:h-48' />,
      branches: <Branches key='branches' className='w-20 h-20 lg:w-48 lg:h-48' />,
      recycling: <Recycling key='recycling' className='w-20 h-20 lg:w-48 lg:h-48' />,
      compost: <Compost key='compost' className='w-20 h-20 lg:w-48 lg:h-48' />,
      garbage: <Garbage key='garbage' className='w-20 h-20 lg:w-48 lg:h-48' />,
      next: <Next key='next' className='w-20 h-20 lg:w-48 lg:h-48' />,
    };
  
    const icons: ReactNode[] = [];
  
    week.collection.forEach((item) => {
      if (collections[item]) {
        icons.push(collections[item]);
      }
    });
  
    return icons;
  };
  
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-20'>
      <div className='absolute right-0 top-0 mt-5 mr-5 flex space-x-4'>
      <Link href='/about'>
        <HelpCircle size={40} />
        <span className='sr-only'>About</span>
      </Link>
      <a href="https://github.com/PatrickJoannisse/chelsea-material-collection-calendar"><Github size={40} /><span className='sr-only'>Github</span></a>
      </div>
      <header className='text-center space-y-4'>
        <h1 className='text-3xl font-extrabold'>What&apos;s this week?</h1>
      </header>
      <main className='text-center'>
        <div className='grid gap-8 w-full'>
          {renderIcons(week)}
        </div>
      </main>
      <footer className='text-center'>
        <p className=''>Made with <Coffee className='inline' /> by <br />Patrick Joannisse</p>
      </footer>
    </div>
  )
}
