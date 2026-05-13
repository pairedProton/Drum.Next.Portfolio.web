const fs = require('fs');

const fileMap = [
  { img: 'why_spectrum_created.png', varName: 'whySpectrumCreated' },
  { img: 'organic_farming.png', varName: 'OrganicFarming' },
  { img: 'zero_waste.png', varName: 'zeroWaste' },
  { img: 'market_linkage.png', varName: 'marketLinkage' },
  { img: 'farmer_collective.png', varName: 'farmerColective' },
  { img: 'regenerative_farming.png', varName: 'regenerativeFarming' },
  { img: 'digital_village.png', varName: 'digitalVillage' },
  { img: 'climate_change.png', varName: 'climateChange' },
  { img: 'sustainable_agri_guide.png', varName: 'sustainableAgri' },
  { img: 'logistics_cost.png', varName: 'logisticsCost' },
  { img: 'best_crops_seasons.png', varName: 'bestCrops' },
  { img: 'empowering_farmers.png', varName: 'empoweringFarmers' }
];

let blogsJs = fs.readFileSync('c:/Vinay/Projects/Drum Next New Website/drum-next-port/app/_data/blogs.js', 'utf8');

// Replace all imports with a clean block
let importsBlock = fileMap.map(f => `import ${f.varName} from '@/public/images/home/blog/${f.img}'`).join('\n');
blogsJs = blogsJs.replace(/^import.*?from '@\/public\/images\/home\/blog\/.*?\.png'.*?(\r?\n|\r)/gm, '');
blogsJs = importsBlock + '\n\n' + blogsJs.replace(/^\s+/, '');

// Now replace image: ".*" or image: varName in each object sequentially
let objIndex = 0;
blogsJs = blogsJs.replace(/image:\s*[\"'].*?[\"']|image:\s*[a-zA-Z0-9_]+/g, (match) => {
  const mapIndex = objIndex % 12;
  const varName = fileMap[mapIndex].varName;
  objIndex++;
  return 'image: ' + varName;
});

fs.writeFileSync('c:/Vinay/Projects/Drum Next New Website/drum-next-port/app/_data/blogs.js', blogsJs);
console.log('blogs.js updated.');
