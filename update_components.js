const fs = require('fs');
const path = require('path');

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

const components = [
  "WhySpectrumCreated", // 0
  "OrganicFarmingSupportFarmers", // 1
  "BuildingZeroWasteEcosystems", // 2
  "TransparentMarketLinkagesForFarmers", // 3
  "FarmerCollectivesAndRuralGrowth", // 4
  "ScalingRegenerativeFarmingInIndia", // 5
  "DigitalVillagePlaybookForFarmers", // 6
  "ClimateChangeImpactOnIndianAgriculture", // 7
  "CompleteGuideToSustainableAgricultureIndia", // 8
  "CostOfLogisticsInIndiaVsGlobalMarket", // 9
  "BestCropsToGrowInDifferentSeasonsInIndia", // 10
  "EmpoweringFarmersThroughInnovation", // 11
  "CompleteGuideToSustainableAgriculture", // 12
  "ZeroWasteFarmingChangingIndianAgriculture", // 13
  "TransformingIndianSustainableAgriculture", // 14
  "FutureOfAgriIntelligence", // 15
  "PostHarvestLossIndiaTaurusOrganic", // 16
  "FarmersLowMarginsIndiaTaurusOrganic", // 17
  "LowEfficientLogisticsIndiaTaurusOrganic" // 18
];

const blogsDir = 'c:/Vinay/Projects/Drum Next New Website/drum-next-port/app/blogs/_blogs';

components.forEach((comp, index) => {
  const mapIndex = index % 12;
  const mapItem = fileMap[mapIndex];
  
  const filePath = path.join(blogsDir, `${comp}.jsx`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has correct import (e.g. WhySpectrumCreated)
  // Wait, if we just replace `import crowd1 from "@/public/images/home/gallery/pic1.jpg";`
  // with the new import, and `<Image src={crowd1}` with `<Image src={mapItem.varName}`
  
  // Replace import
  content = content.replace(
    /import crowd1 from ["']@\/public\/images\/home\/gallery\/pic1\.jpg["'];?/g,
    `import ${mapItem.varName} from '@/public/images/home/blog/${mapItem.img}';`
  );

  // If it was already replaced manually, remove the old commented out import just in case
  content = content.replace(/\/\/ import crowd1 from ["']@\/public\/images\/home\/gallery\/pic1\.jpg["'];?/g, '');

  // Replace src
  content = content.replace(/src=\{crowd1\}/g, `src={${mapItem.varName}}`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${comp}.jsx to use ${mapItem.img}`);
});

console.log("All components updated.");
