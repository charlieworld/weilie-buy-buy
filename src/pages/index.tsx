import { useState } from 'react';
import { DateTime } from 'luxon';
import { clone } from 'lodash';

import Head from 'next/head';
import Layout from '@/components/Layout';
import WeilieFooter from '@/components/WeilieFooter';
import rawData from '@/data/data.json';
import { checkWeekDay } from '@/utils/utils';

export default function Home() {
  const [data, setData] = useState(rawData.records);
  const [showRes, setShowRes] = useState(false);
  const handleBuyBuy = () => {
    let tempRecords = clone(data);
    const now = DateTime.now();

    tempRecords = tempRecords.filter((item) => {
      const itemStartDate: string = item['fldXkLphfxkaBCUCs'] as string;
      const itemEndDate: string = item['fldWb5Vt2SaN1qG2B'] as string;
      const itemWeekDate: string = item['fldsw6Xx0iIsmEvYq'] as string;


      const startDate = DateTime.fromISO(itemStartDate);
      const endDate = DateTime.fromISO(itemEndDate);
      if (now < startDate) return false;
      if (endDate < now) return false;
      if (!checkWeekDay(now.weekday, itemWeekDate)) return false;
      return true;
    }); 
    setData(tempRecords);
    setShowRes(true);


  };

  return (
    <>
      <Head>
        <title>Weilie 拜拜 BuyBuy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold text-center">Weilie 拜拜 BuyBuy</h1>
        <div className='flex justify-center'>
        <button className="mt-20 w-32 h-32  shadow-md	bg-slate-50	 rounded-full cursor-pointer text-6xl" onClick={handleBuyBuy}>🔮</button>
        </div>
        {showRes && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Layout>
      
      <WeilieFooter />
    </>
  );
}
