import WhySpectrumCreated from "../_blogs/WhySpectrumCreated";
import OrganicFarmingSupportFarmers from "../_blogs/OrganicFarmingSupportFarmers";
import BuildingZeroWasteEcosystems from "../_blogs/BuildingZeroWasteEcosystems";
import TransparentMarketLinkagesForFarmers from "../_blogs/TransparentMarketLinkagesForFarmers";
import FarmerCollectivesAndRuralGrowth from "../_blogs/FarmerCollectivesAndRuralGrowth";
import ScalingRegenerativeFarmingInIndia from "../_blogs/ScalingRegenerativeFarmingInIndia";
import DigitalVillagePlaybookForFarmers from "../_blogs/DigitalVillagePlaybookForFarmers";
import ClimateChangeImpactOnIndianAgriculture from "../_blogs/ClimateChangeImpactOnIndianAgriculture";
import CompleteGuideToSustainableAgricultureIndia from "../_blogs/CompleteGuideToSustainableAgricultureIndia";
import CostOfLogisticsInIndiaVsGlobalMarket from "../_blogs/CostOfLogisticsInIndiaVsGlobalMarket";
import BestCropsToGrowInDifferentSeasonsInIndia from "../_blogs/BestCropsToGrowInDifferentSeasonsInIndia";
import EmpoweringFarmersThroughInnovation from "../_blogs/EmpoweringFarmersThroughInnovation";
import CompleteGuideToSustainableAgriculture from "../_blogs/CompleteGuideToSustainableAgriculture";
import ZeroWasteFarmingChangingIndianAgriculture from "../_blogs/ZeroWasteFarmingChangingIndianAgriculture";
import TransformingIndianSustainableAgriculture from "../_blogs/TransformingIndianSustainableAgriculture";
import FutureOfAgriIntelligence from "../_blogs/FutureOfAgriIntelligence";
import PostHarvestLossIndiaTaurusOrganic from "../_blogs/PostHarvestLossIndiaTaurusOrganic";
import FarmersLowMarginsIndiaTaurusOrganic from "../_blogs/FarmersLowMarginsIndiaTaurusOrganic";
import LowEfficientLogisticsIndiaTaurusOrganic from "../_blogs/LowEfficientLogisticsIndiaTaurusOrganic";
import { blogData } from "../../_data/blogs";

export function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blogs = {
    "why-spectrum-agriculture-was-created": <WhySpectrumCreated />,
    "organic-farming-support-for-farmers": <OrganicFarmingSupportFarmers />,
    "building-zero-waste-farm-ecosystems": <BuildingZeroWasteEcosystems />,
    "transparent-market-linkages-for-farmers": <TransparentMarketLinkagesForFarmers />,
    "farmer-collectives-and-rural-growth": <FarmerCollectivesAndRuralGrowth />,
    "scaling-regenerative-farming-in-india": <ScalingRegenerativeFarmingInIndia />,
    "digital-village-playbook-for-farmers": <DigitalVillagePlaybookForFarmers />,
    "climate-change-impact-on-indian-agriculture": <ClimateChangeImpactOnIndianAgriculture />,
    "complete-guide-to-sustainable-agriculture-india": <CompleteGuideToSustainableAgricultureIndia />,
    "cost-of-logistics-in-india-vs-global-market": <CostOfLogisticsInIndiaVsGlobalMarket />,
    "best-crops-to-grow-in-different-seasons-in-india": <BestCropsToGrowInDifferentSeasonsInIndia />,
    "empowering-farmers-through-innovation": <EmpoweringFarmersThroughInnovation />,
    "complete-guide-to-sustainable-agriculture": <CompleteGuideToSustainableAgriculture />,
    "zero-waste-farming-changing-indian-agriculture": <ZeroWasteFarmingChangingIndianAgriculture />,
    "transforming-indian-sustainable-agriculture": <TransformingIndianSustainableAgriculture />,
    "future-of-agri-intelligence": <FutureOfAgriIntelligence />,
    "post-harvest-loss-india-taurus-organic": <PostHarvestLossIndiaTaurusOrganic />,
    "why-farmers-get-lower-margins-india-taurus-organic": <FarmersLowMarginsIndiaTaurusOrganic />,
    "low-efficient-logistics-india-taurus-organic": <LowEfficientLogisticsIndiaTaurusOrganic />,
  };

  return blogs[slug] || <h1>Blog Not Found</h1>;
}