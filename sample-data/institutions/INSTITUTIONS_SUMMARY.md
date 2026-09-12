# NonStateActor Institution Data - Summary

## Overview
This directory contains JSON sample data for 13 agricultural/livestock sector institutions supporting farmers in Zambia and the broader African region.

## Institutions List

### Development Agencies (2)
1. **GIZ** - German development agency focusing on sustainable agriculture and climate-smart practices
2. **InternationalDonor-FAO** - UN Food & Agriculture Organization (retained from previous setup)

### Zambian Companies (4)
3. **Zambeef** - Zambia's largest integrated meat company (cattle procurement and processing)
4. **TradeKings** - Zambian food manufacturing company (wheat, maize, soybeans)
5. **Shoprite** - African retail giant supporting smallholder vegetable farmers
6. **Zamgoat** - Zambia-Saudi Arabia joint venture for goat export

### Middle East Livestock/Meat Companies (3)
7. **Oasis-Livestock** - UAE livestock trader specializing in cattle import from Zambia
8. **Hedges-Wholesalers** - UAE halal meat importer (goat meat focus)
9. **AlBashayer-Meat** - Oman livestock and meat importer (cattle)

### Middle East Dairy Companies (3)
10. **AlAin-Dairy** - UAE dairy company with operations in Zambia (dairy cattle)
11. **Almarai** - Saudi Arabia's largest dairy producer (international expansion)
12. **Camelicious** - UAE camel milk company (innovative camel dairy farming)

### International Trade (1)
29. **COFCO-Group** - Chinese agriculture conglomerate (soybeans, grains export)

### Farmer Organizations & NGOs (9)
30. **Farmer Organisation Support Programme (FOSUP)** - Focuses on strengthening small-scale farmer organizations through networking, training, advocacy, and lobbying, with a goal of sustainable, member-based, and profitable farming.
31. **Small Scale Farmers Development Agency (SAFADA)** - A farmer-based organization addressing social and economic challenges, including the "family farmer advancement support initiative" to connect farmers with the private sector.
32. **Enterprise Zambia Challenge Fund (EZCF)** - Implemented by Self Help Africa, this project connects smallholder farmers to quality inputs, processing facilities, and stable markets to increase income and resilience.
33. **Zambia Agriculture Value Chain Facility (ZAVCF)** - Supported by the EU and European Investment Bank to increase access to finance for agri-SMEs and smallholder farmers, specifically targeting women-led enterprises.
34. **Food and Agriculture Organization (FAO) Zambia** - Supports the government and farmers by promoting sustainable, climate-resilient agricultural practices and providing technical assistance.
35. **SIFAZ Matching Grant Facility (FAO)** - A program designed to support the commercialization of smallholder farmers and cooperatives through funding for mechanization and input acquisition.
36. **Eastern and Southern Africa Small Scale Farmers’ Forum (ESAFF)** - Works on improving social accountability and supporting food security in Southern Africa.
37. **Farmers cmk (CBO)** - A non-profit focusing on empowering youth and women in farming to generate income, using organic fertilizers and fostering sustainable activities.
38. **Cotton Association of Zambia & Cotton Board of Zambia** - Involved in supporting the cotton sector in partnership with regional stakeholders.

### Additional Farmer Organizations & NGOs (8)
39. **Zambia National Farmers Union (ZNFU)** - Represents and advocates for the interests of Zambian farmers at national and international levels.
40. **WeForest** - Focuses on reforestation and sustainable land use practices to combat deforestation and climate change.
41. **Heifer International Zambia** - Focuses on empowering smallholder farmers (particularly women) through livestock management (goats, chickens), dairy production, and sustainable crop cultivation.
42. **Self Help Africa** - Implements projects like the Enterprise Zambia Challenge Fund, which connects farmers to market opportunities and agricultural inputs.
43. **Empowering Farmers Foundation** - A Zambian NGO focusing on poverty reduction through training in agro-processing, education, and health initiatives to ensure climate-resilient farming.
44. **Farmer Organization Support Programme (FOSUP)** - A civil society organization providing capacity building to smallholder farmers to increase productivity and create sustainable farmers' organizations.
45. **People in Need (PIN)** - Supports sustainable farming through climate change adaptation strategies, such as promoting biogas technology for eco-fertilizer production, and teaching biochar techniques for water retention.
46. **People's Process on Housing and Poverty in Zambia (PPHPZ)** - Trains young farmers in climate-smart techniques, including black soldier fly farming for livestock feed and drip irrigation.
47. **One Acre Fund** - Provides asset-based financing and agriculture training to smallholder farmers to reduce hunger and increase prosperity.
48. **Zambia Iowa Agriculture Partners (ZIAP)** - Partners Zambian farmers with Iowa agricultural expertise to improve farming practices and market access.
49. **iDE** - Supports Zambia's small-scale farmers through agricultural advice, smart water management, and mobile technology solutions to increase market access and farm household incomes.

## Data Structure

Each institution has **30 JSON files** containing realistic sample data:

1. alerts.json - System alerts and notifications
2. authcomponent.json - Component access permissions
3. authstate.json - Authentication state
4. centralfarmersystem.json - Central farmer database info
5. circulareconomy.json - Circular economy activities
6. climatesmartag.json - Climate-smart agriculture practices
7. collectionpoints.json - Produce/livestock collection centers
8. consent.json - Farmer consent records
9. contractfarming.json - Contract farming agreements
10. dashboard.json - Dashboard widgets/metrics
11. deliverymanagement.json - Delivery scheduling
12. farmergroups.json - Farmer cooperative groups
13. farmers.json - Individual farmer records
14. financialmanagement.json - Financial transactions
15. genderinclusion.json - Gender inclusion initiatives
16. gismapping.json - GIS mapping data
17. inputdistributions.json - Input distribution records
18. inputinventory.json - Input inventory levels
19. internationaltrade.json - International trade transactions
20. livestocktraceability.json - Livestock traceability records
21. marketprices.json - Market price information
22. monitoring.json - Project monitoring data
23. ordermanagement.json - Order management
24. producetracking.json - Produce tracking
25. projects.json - Project information
26. quickactions.json - Quick action buttons
27. reporting.json - Reports generated
28. supplychainactors.json - Supply chain participants
29. trainings.json - Training sessions
30. valuechain.json - Value chain analysis

## Data Focus by Institution Type

### Livestock Companies (Cattle)
- **Zambeef**: Zambian cattle, beef production, local market + export
- **Oasis-Livestock**: Export-quality cattle to UAE markets
- **AlBashayer-Meat**: Cattle export to Oman

### Livestock Companies (Goats)
- **Zamgoat**: Boer, Kalahari Red, Savanna goats for Saudi export
- **Hedges-Wholesalers**: Halal-certified goat meat for UAE

### Dairy Companies
- **AlAin-Dairy**: Holstein, Ayrshire dairy cattle (UAE standards)
- **Almarai**: Holstein Friesian, Jersey Cross (high production)
- **Camelicious**: Dromedary camels for milk production

### Crop/Food Processing
- **TradeKings**: Wheat, maize, soybeans procurement
- **Shoprite**: Vegetables (tomatoes, cabbage, onions, carrots)
- **COFCO-Group**: Soybeans, sunflower, wheat for Chinese market

### Development
- **GIZ**: Climate-smart agriculture, women's empowerment, training
- **InternationalDonor-FAO**: Integrated farming programs, nutrition

## Zambian Context

All data includes authentic Zambian:
- **Districts**: Lusaka, Chongwe, Katete, Chipata, Lundazi, Mkushi, Chisamba, Kabwe, Monze
- **Names**: Mulenga, Banda, Tembo, Phiri, Mwanza, Sakala, Chilufya, Zulu, Mumba
- **Locations**: Chiefdoms, villages, and actual geographic coordinates
- **Currency**: ZMW (Zambian Kwacha) for local transactions, USD for exports
- **Phone Numbers**: +260 country code format

## Export Destinations

- **Saudi Arabia**: Zamgoat (live goats)
- **UAE**: Oasis-Livestock (cattle), Hedges-Wholesalers (goat meat), Almarai/AlAin-Dairy (dairy)
- **Oman**: AlBashayer-Meat (cattle, beef)
- **China**: COFCO-Group (soybeans, grains)
- **Regional**: Angola, DRC, Malawi, Zimbabwe

## Total Statistics

- **Total Institutions**: 30
- **Total JSON Files**: 900 (30 institutions × 30 files each)
- **Removed Old Folders**: 4 (Cooperative-FarmerUnion, Government-MinistryAgric, NGO-ActionAid, NGO-CARE)
- **Retained Folder**: 1 (InternationalDonor-FAO)

## Usage

This data supports the NonStateActor application in helping farmers across Zambia by:
- Connecting farmers with commercial buyers (local and international)
- Tracking livestock from farm to export
- Managing contracts and payments
- Providing market price information
- Supporting climate-smart agriculture adoption
- Enabling gender inclusion and youth programs
- Facilitating international trade

---

*Created: January 19, 2025*  
*For: NonStateActor App - Zambia Farmer Support Platform*
