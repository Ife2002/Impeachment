const { createClient } = require('@supabase/supabase-js');

// Replace with your Supabase URL and API key
const supabaseUrl = 'https://fsiceufysqoedzvyjlyn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaWNldWZ5c3FvZWR6dnlqbHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3ODI4NzAsImV4cCI6MjAxNTM1ODg3MH0.k7tBA7SIPzkQVr4X69aGV8HOgj7LXhZyV0lF2XXkQRQ';

const supabase = createClient(supabaseUrl, supabaseKey);

const data = {
    "students": [
      {"mat_number": "ENG1905665", "email": "david.adeleye@eng.uniben.edu"},
      {"mat_number": "ENG1910309", "email": "anslem.adjayen@eng.uniben.edu"},
      {"mat_number": "ENG1905666", "email": "philemon.aghator@eng.uniben.edu"},
      {"mat_number": "ENG1904878", "email": "progress.ahanor@eng.uniben.edu"},
      {"mat_number": "ENG1905667", "email": "samuel.aigbata@eng.uniben.edu"},
      {"mat_number": "ENG1905669", "email": "esteem.airiohodion@eng.uniben.edu"},
      {"mat_number": "ENG1904904", "email": "pius.benjamin@eng.uniben.edu"},
      {"mat_number": "ENG1909092", "email": "progress.popoola@eng.uniben.edu"},
      {
        "mat_number": "ENG1905740",
        "email": "oluwamurewa.salami@eng.uniben.edu"
      },
      {
        "mat_number": "ENG1905682",
        "email": "onyinye.udogaranya@eng.uniben.edu"
      },
      {
        "mat_number": "ENG1805515",
        "email": "emmanuel.ugusevbaye@eng.uniben.edu"
      },
      {"mat_number": "ENG1905677", "email": "ife.asiadiachi@eng.uniben.edu"},
      {"mat_number": "ENG1905671", "email": "michael.akpoyovware@eng.uniben.edu"},
      {"mat_number": "ENG1905672", "email": "joshua.aleogena@eng.uniben.edu"},
      {"mat_number": "ENG1905673", "email": "emmanuel.alisigwe@eng.uniben.edu"},
      {"mat_number": "ENG1905674", "email": "gift.aliyu@eng.uniben.edu"},
      {"mat_number": "ENG1905676", "email": "aanuoluwapo.arigbanla@eng.uniben.edu"},
      {"mat_number": "ENG1905679", "email": "burata.barizigaorage@eng.uniben.edu"},
      {"mat_number": "ENG1909103", "email": "eloho.barthoorona@eng.uniben.edu"},
      {"mat_number": "ENG1905680", "email": "okichukwu.chigbo@eng.uniben.edu"},
      {"mat_number": "ENG1905681", "email": "emmanuel.chukwudebelu@eng.uniben.edu"},
      {"mat_number": "ENG1805476", "email": "victor.dania@eng.uniben.edu"},
      {"mat_number": "ENG1905683", "email": "jessica.danodhomo@eng.uniben.edu"},
      {"mat_number": "ENG1905728", "email": "chiwenizu.davidonwuchekwu@eng.uniben.edu"},
      {"mat_number": "ENG1905684", "email": "aniekan.dickson@eng.uniben.edu"},
      {"mat_number": "ENG1905685", "email": "harrison.ebikpoja@eng.uniben.edu"},
      {"mat_number": "ENG1905686", "email": "jubilee.efenedo@eng.uniben.edu"},
      {"mat_number": "ENG1905689", "email": "festus.ekuruemu@eng.uniben.edu"},
      {"mat_number": "ENG1905540", "email": "oghenevwede.emomine@eng.uniben.edu"},
      {"mat_number": "ENG1905690", "email": "jacob.emonena@eng.uniben.edu"},
      {"mat_number": "ENG1905691", "email": "eshiomakhale.eshikhogie@eng.uniben.edu"},
      {"mat_number": "ENG1905693", "email": "chukwuka.ezeobi@eng.uniben.edu"},
      {"mat_number": "ENG1905706", "email": "godstime.iribhogbe@eng.uniben.edu"},
      {"mat_number": "ENG1805483", "email": "nosakhare.henrydaniel@eng.uniben.edu"},
      {"mat_number": "ENG1905694", "email": "james.ibezim@eng.uniben.edu"},
      {"mat_number": "ENG1905695", "email": "oluwapamulerin.ibironke@eng.uniben.edu"},
      {"mat_number": "ENG1905696", "email": "blessed.igberase@eng.uniben.edu"},
      {"mat_number": "ENG1905697", "email": "jahswill.ighodalo@eng.uniben.edu"},
      {"mat_number": "ENG1905698", "email": "afam.ikade@eng.uniben.edu"},
      {"mat_number": "ENG1905699", "email": "sunday.ikechukwu@eng.uniben.edu"},
      {"mat_number": "ENG1905700", "email": "jeffery.ikhane@eng.uniben.edu"},
      {"mat_number": "ENG1905702", "email": "blessed.ikponwonsa@eng.uniben.edu"},
      {"mat_number": "ENG1805486", "email": "owen.imarhiagbe@eng.uniben.edu"},
      {"mat_number": "ENG1905703", "email": "anthony.imhanmuokor@eng.uniben.edu"},
      {"mat_number": "ENG1905704", "email": "success.imhoenegamhe@eng.uniben.edu"},
      {"mat_number": "ENG1905705", "email": "darlington.iribhogbe@eng.uniben.edu"},
      {"mat_number": "ENG1905707", "email": "ekinadose.irowachristopher@eng.uniben.edu"},
      {"mat_number": "ENG1905708", "email": "ebinehita.iseghohime@eng.uniben.edu"},
      {"mat_number": "ENG1909114", "email": "emmanuel.iyare@eng.uniben.edu"},
      {"mat_number": "ENG1905709", "email": "tochukwu.izuka@eng.uniben.edu"},
      {"mat_number": "ENG1909201", "email": "chibuike.jajawachukwu@eng.uniben.edu"},
      {"mat_number": "ENG1905710", "email": "john.kalu@eng.uniben.edu"},
      {"mat_number": "ENG1905711", "email": "precious.martins@eng.uniben.edu"},
      {"mat_number": "ENG1905712", "email": "ojorumi.monyeemina@eng.uniben.edu"},
      {"mat_number": "ENG1905713", "email": "ubasinachi.moses@eng.uniben.edu"},
      {"mat_number": "ENG2011090", "email": "great.ndah@eng.uniben.edu"},
      {"mat_number": "ENG1803197", "email": "victor.nwabueze@eng.uniben.edu"},
      {"mat_number": "ENG1905714", "email": "chibuike.nwaigwe@eng.uniben.edu"},
      {"mat_number": "ENG1905715", "email": "david.nwajei@eng.uniben.edu"},
      {"mat_number": "ENG1905716", "email": "godwin.odemwingie@eng.uniben.edu"},
      {"mat_number": "ENG1905717", "email": "eromosele.odigie@eng.uniben.edu"},
      {"mat_number": "ENG1905719", "email": "joseph.ofasere@eng.uniben.edu"},
      {"mat_number": "ENG1905720", "email": "jeremiah.offia@eng.uniben.edu"},
      {"mat_number": "ENG1905721", "email": "timothy.ogbode@eng.uniben.edu"},
      {"mat_number": "ENG1806499", "email": "john.ogbue@eng.uniben.edu"},
      {"mat_number": "ENG1810810", "email": "ohiole.ojeanor@eng.uniben.edu"},
      {"mat_number": "ENG1905722", "email": "oluwaseyi.oke@eng.uniben.edu"},
      {"mat_number": "ENG1905723", "email": "trust.okoedo@eng.uniben.edu"},
      {"mat_number": "ENG1805502", "email": "david.okonji@eng.uniben.edu"},
      {"mat_number": "ENG1905724", "email": "faithful.okpor@eng.uniben.edu"},
      {"mat_number": "ENG1905725", "email": "destiny.okundaye@eng.uniben.edu"},
      {"mat_number": "ENG1905726", "email": "yinka.oladimesi@eng.uniben.edu"},
      {"mat_number": "ENG1909082", "email": "godstime.omagbitse@eng.uniben.edu"},
      {"mat_number": "ENG1905727", "email": "oreva.omawudhoho@eng.uniben.edu"},
      {"mat_number": "ENG1909083", "email": "miracle.omijie@eng.uniben.edu"},
      {"mat_number": "ENG1809164", "email": "david.onwuchekwa@eng.uniben.edu"},
      {"mat_number": "ENG1905730", "email": "nwankonobi.orisakwe@eng.uniben.edu"},
      {"mat_number": "ENG1905731", "email": "chioma.orji@eng.uniben.edu"},
      {"mat_number": "ENG1905732", "email": "godwin.orumwense@eng.uniben.edu"},
      {"mat_number": "ENG1905733", "email": "matilda.osagie@eng.uniben.edu"},
      {"mat_number": "ENG1905734", "email": "joel.osagumwenro@eng.uniben.edu"},
      {"mat_number": "ENG1905735", "email": "success.osaretin@eng.uniben.edu"},
      {"mat_number": "ENG1905736", "email": "clarence.osawe@eng.uniben.edu"},
      {"mat_number": "ENG1905737", "email": "emmanuel.osayamen@eng.uniben.edu"},
      {"mat_number": "ENG1905738", "email": "gloria.osesiamhe@eng.uniben.edu"},
      {"mat_number": "ENG1905739", "email": "vitalis.omaghbitse@eng.uniben.edu"},
      {"mat_number": "ENG1909078", "email": "daniel.okike@eng.uniben.edu"},
      {"mat_number": "ENG1905741", "email": "prosper.ugiagbe@eng.uniben.edu"},
      {"mat_number": "ENG1909097", "email": "cornelius.ugiagbeodia@eng.uniben.edu"},
      {"mat_number": "ENG1905570", "email": "emmanuel.uzoekwe@eng.uniben.edu"},
      {"mat_number": "ENG1905742", "email": "ivan.wetan@eng.uniben.edu"},
      {"mat_number": "ENG1905743", "email": "nosakhare.wilfred@eng.uniben.edu"},
      {"mat_number": "ENG1904950", "email": "daniel.onuchukwu@eng.uniben.edu"}
    ]
  };

async function insertData() {
  const { data: insertedData, error } = await supabase.from('mte_students').upsert(data.students);

  if (error) {
    console.error('Error inserting data:', error.message);
  } else {
    console.log('Data inserted successfully:', insertedData);
  }
}

// insertData();

// function findDuplicateMatNumbers(data) {
//     const matNumberSet = new Set();
//     const duplicateMatNumbers = [];
  
//     for (const student of data.students) {
//       const matNumber = student.email;
  
//       if (matNumberSet.has(matNumber)) {
//         // Duplicate mat number found
//         duplicateMatNumbers.push(matNumber);
//       } else {
//         matNumberSet.add(matNumber);
//       }
//     }
  
//     return duplicateMatNumbers;
//   }
  
//   const duplicates = findDuplicateMatNumbers(data);
  
//   if (duplicates.length > 0) {
//     console.log(data.students.length)
//     console.log("Mat numbers with duplicates:", duplicates);
//   } else {
//     console.log(data.students.length)
//     console.log("No duplicate mat numbers found.");
//   }
