const Airtable = require('airtable');
const fs = require('fs');

const TOKEN = 'patX9GJUzMVy5sOq9.eb80ed1ea369aa70aaac3a2e0ad819dbec1a5dbec69a32a19ba059dca519aa0a';

const base = new Airtable({ apiKey: TOKEN }).base('appfjkAAHrPoe6qKa');

const outputData = {
  fields: [
    {
      id: 'fldsw6Xx0iIsmEvYq',
      text: '時間',
    },
    {
      id: 'fldXkLphfxkaBCUCs',
      text: '限定區間（開始）',
    },
    {
      id: 'fldWb5Vt2SaN1qG2B',
      text: '限定區間（結束）',
    },
    {
      id: 'fldsLmSD1wgBvXQQj',
      text: '想把錢錢變成什麼形狀',
    },
    {
      id: 'fldzW0oxdChHdgPda',
      text: '指定消費地點',
    },
    {
      id: 'fldnM6Uwj5qYSVbUb',
      text: '支付方式',
    },
    {
      id: 'fldHmD8LSilK4bYwP',
      text: '哪一張卡',
    },
    {
      id: 'fldVX2bfwWyW3N4fX',
      text: '優惠項目',
    },
    {
      id: 'fld3iiZXPYNf6QYoB',
      text: '優惠內容',
    },
    {
      id: 'fldxoxnec5vjJeOqC',
      text: '折扣％',
    },
    {
      id: 'fld2ohwZDNPDnfO5z',
      text: '積分',
    },
    {
      id: 'fldOzDtbyBFKKoI5N',
      text: '補充說明'
    }
  ],
  records: [],
};

base('2023Q1')
  .select({ returnFieldsByFieldId: true })
  .eachPage(
    function page(records) {
      // This function (`page`) will get called for each page of records.

      const res = records.map((record) => record.fields);
      outputData.records = res;
      try {
        fs.writeFileSync('data.json', JSON.stringify(outputData, null, 2));
        console.log('(3/3) The Data.json has been saved.');
      } catch (err) {
        console.error('An error occurred while writing Data.json.');
      }
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      
    },
  );


