# Institution Sample Data - Sierra Leone Farmer Support Programs

This directory contains comprehensive JSON sample data for **5 institutions** supporting farmers in Sierra Leone, covering **28 mock services**.

## Institutions

### 1. NGO-ActionAid
**Focus:** Women empowerment and rice farming
- **Location:** Bombali and Port Loko Districts
- **Key Beneficiaries:** Mariatu Kamara, Aminata Bangura, Isatu Conteh
- **Primary Crops:** Rice, Groundnuts
- **Programs:** Women in Rice Farming Initiative
- **Farmer Groups:** 3 groups, 156 total members (106 women)

### 2. NGO-CARE
**Focus:** Nutrition-sensitive agriculture and vegetable farming
- **Location:** Bo and Kenema Districts
- **Key Beneficiaries:** Adama Koroma, Hawa Mansaray, Tenneh Kamara
- **Primary Crops:** Vegetables (Tomatoes, Cabbage, Leafy greens)
- **Programs:** Nutrition-Sensitive Agriculture for Women
- **Farmer Groups:** 3 groups, 234 total members (183 women)

### 3. Government-MinistryAgric
**Focus:** National rice self-sufficiency and policy implementation
- **Location:** Multiple districts (Kambia, Koinadugu, nationwide)
- **Key Farmers:** Ibrahim Sankoh, Kadiatu Turay
- **Primary Crops:** Rice, Cassava
- **Programs:** National Rice Self-Sufficiency Program
- **Scale:** 12,450 registered farmers

### 4. Cooperative-FarmerUnion
**Focus:** Fair trade cocoa and cooperative marketing
- **Location:** Pujehun and Bonthe Districts
- **Key Members:** Abdul Kamara, Sia Bangura
- **Primary Crops:** Cocoa, Coffee, Palm oil
- **Programs:** Fair Trade Cocoa Expansion
- **Cooperative:** 680 members, Fair Trade certified

### 5. InternationalDonor-FAO
**Focus:** Climate-smart agriculture and technical research
- **Location:** Tonkolili, Bombali, Koinadugu Districts
- **Key Beneficiaries:** Foday Mansaray, Rugiatu Koroma
- **Primary Crops:** Rice (NERICA varieties), Certified Seeds
- **Programs:** Climate-Resilient Agriculture and Food Systems
- **Beneficiaries:** 1,250 farmers

## Mock Services (28 Files per Institution)

Each institution directory contains 28 JSON files representing these services:

1. **alerts.json** - AlertService: Notifications and warnings
2. **authcomponent.json** - AuthComponentService: Authentication components
3. **authstate.json** - AuthenticationStateProvider: User session states
4. **centralfarmersystem.json** - CentralFarmerSystem: Centralized farmer registry
5. **circulareconomy.json** - CircularEconomyService: Waste recycling activities
6. **climatesmartag.json** - ClimateSmartAgricultureService: Climate adaptation practices
7. **collectionpoints.json** - CollectionPointService: Produce collection centers
8. **consent.json** - ConsentService: Data sharing permissions
9. **contractfarming.json** - ContractFarmingService: Buyer contracts
10. **dashboard.json** - DashboardService: Performance metrics
11. **deliverymanagement.json** - DeliveryManagementService: Produce deliveries
12. **farmergroups.json** - Farmer groups and cooperatives
13. **farmers.json** - FarmerService: Farmer profiles
14. **financialmanagement.json** - FinancialManagementService: Financial transactions
15. **genderinclusion.json** - GenderInclusionService: Gender programs
16. **gismapping.json** - GisMappingService: Farm geolocation data
17. **inputdistributions.json** - InputService: Input distribution records
18. **inputinventory.json** - InputService: Input stock levels
19. **internationaltrade.json** - InternationalTradeService: Export activities
20. **livestocktraceability.json** - LivestockTraceabilityService: Animal tracking
21. **marketprices.json** - MarketPriceService: Commodity prices
22. **monitoring.json** - MonitoringService: Farm visit records
23. **ordermanagement.json** - OrderManagementService: Input orders
24. **producetracking.json** - ProduceTrackingService: Harvest tracking
25. **projects.json** - ProjectService: Development projects
26. **quickactions.json** - QuickActionsService: UI quick actions
27. **reporting.json** - ReportingService: Generated reports
28. **supplychainactors.json** - SupplyChainActorService: Buyers, suppliers, logistics
29. **trainings.json** - TrainingService: Training programs
30. **valuechain.json** - ValueChainManagementService: Value chain activities

## Data Characteristics

- **Realistic names:** Common Sierra Leonean surnames (Kamara, Sesay, Koroma, Bangura, Turay, Conteh, Mansaray, Sankoh, Jalloh)
- **Authentic locations:** Real districts and chiefdoms
- **Appropriate crops:** Rice, Cassava, Groundnuts, Cocoa, Coffee, Vegetables
- **Consistent data:** Farmer IDs match across all service files
- **Sample size:** 2-5 records per file
- **Valid JSON:** All files validated

## File Structure

```
institutions/
├── NGO-ActionAid/                  (30 files)
├── NGO-CARE/                       (30 files)
├── Government-MinistryAgric/       (30 files)
├── Cooperative-FarmerUnion/        (30 files)
└── InternationalDonor-FAO/         (30 files)
```

**Total:** 150 JSON files

## Usage

These files serve as sample data for testing and demonstration of the farmer support system across different institution types, from NGOs to government agencies to international donors and cooperatives.

## Data Consistency Examples

Farmer IDs are consistent across files within each institution:
- NGO-ActionAid: F-AA-001, F-AA-002, F-AA-003
- NGO-CARE: F-CARE-001, F-CARE-002, F-CARE-003
- Government: F-GOV-001, F-GOV-002, F-GOV-003
- Cooperative: F-COOP-001, F-COOP-002
- FAO: F-FAO-001, F-FAO-002

All references (in alerts, deliveries, monitoring, etc.) use these consistent IDs.

---
*Generated for the NonStateActor Agricultural Support Platform*
*Sierra Leone Context - January 2024*
