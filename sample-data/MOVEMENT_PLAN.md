# Plan for Restructuring Sample Data Directory

## Current Structure
```
wwwroot/sample-data/
├── institutions/
│   ├── AlAin-Dairy/
│   │   ├── alerts.json
│   │   ├── authcomponent.json
│   │   └── ... (30 files total)
│   ├── AlBashayer-Meat/
│   ├── ... (other institution directories)
│   └── INSTITUTIONS_SUMMARY.md
└── weather.json
```

## Target Structure
```
wwwroot/sample-data/
├── {countries}/
│   ├── {institutionType}/
│   │   ├── {InstitionName}/
│   │   │   ├── alerts.json
│   │   │   ├── authcomponent.json
│   │   │   └── ... (30 files total)
│   │   └── ... (other institutions)
│   └── ... (other institution types)
└── ... (other countries)
```

## Mapping Strategy

### Countries Identification
Based on institution origins:
1. **Zambia** - Local companies, farmer organizations, NGOs
2. **UAE** - Middle East livestock, meat, and dairy companies
3. **Oman** - Livestock/meat companies
4. **Saudi Arabia** - Livestock companies and dairy companies
5. **China** - International trade companies

### Institution Types Identification (Simplified as Requested):
1. Company (for trading, processing, and other business companies)
2. Livestock Processor (for livestock and meat companies)
3. Dairy Processor (for dairy companies)

## Detailed Mapping Plan

### Zambia Institutions
**Company** (trading, processing, and other business companies):
- Zambeef → wwwroot/sample-data/Zambia/Company/Zambeef/
- TradeKings → wwwroot/sample-data/Zambia/Company/TradeKings/
- Shoprite → wwwroot/sample-data/Zambia/Company/Shoprite/
- Zamgoat → wwwroot/sample-data/Zambia/Company/Zamgoat/
- GIZ → wwwroot/sample-data/Zambia/Company/GIZ/
- InternationalDonor-FAO → wwwroot/sample-data/Zambia/Company/InternationalDonor-FAO/
- COFCO-Group → wwwroot/sample-data/Zambia/Company/COFCO-Group/

**Livestock Processor** (for livestock and meat companies):
- Oasis-Livestock → wwwroot/sample-data/Zambia/LivestockProcessor/Oasis-Livestock/
- Hedges-Wholesalers → wwwroot/sample-data/Zambia/LivestockProcessor/Hedges-Wholesalers/
- AlBashayer-Meat → wwwroot/sample-data/Zambia/LivestockProcessor/AlBashayer-Meat/

**Dairy Processor** (for dairy companies):
- AlAin-Dairy → wwwroot/sample-data/Zambia/DairyProcessor/AlAin-Dairy/
- Almarai → wwwroot/sample-data/Zambia/DairyProcessor/Almarai/
- Camelicious → wwwroot/sample-data/Zambia/DairyProcessor/Camelicious/

**Farmer Organizations & NGOs:**
- Farmer Organisation Support Programme (FOSUP) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/FOSUP/
- Small Scale Farmers Development Agency (SAFADA) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/SAFADA/
- Enterprise Zambia Challenge Fund (EZCF) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/EZCF/
- Zambia Agriculture Value Chain Facility (ZAVCF) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/ZAVCF/
- Food and Agriculture Organization (FAO) Zambia → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/FAOZambia/
- SIFAZ Matching Grant Facility (FAO) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/SIFAZ/
- Eastern and Southern Africa Small Scale Farmers’ Forum (ESAFF) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/ESAFF/
- Farmers cmk (CBO) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/Farmerscmk/
- Cotton Association of Zambia & Cotton Board of Zambia → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/CottonAssociationZambia/

**Additional Farmer Organizations & NGOs:**
- Zambia National Farmers Union (ZNFU) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/ZNFU/
- WeForest → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/WeForest/
- Heifer International Zambia → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/HeiferInternationalZambia/
- Self Help Africa → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/SelfHelpAfrica/
- Empowering Farmers Foundation → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/EmpoweringFarmersFoundation/
- Farmer Organization Support Programme (FOSUP) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/FOSUPCivilSociety/
- People in Need (PIN) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/PeopleInNeed/
- People's Process on Housing and Poverty in Zambia (PPHPZ) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/PHPHZ/
- One Acre Fund → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/OneAcreFund/
- Zambia Iowa Agriculture Partners (ZIAP) → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/ZIAP/
- iDE → wwwroot/sample-data/Zambia/FarmerOrganizationsNGOs/iDE/

### UAE Institutions
**Livestock Processor** (for livestock and meat companies):
- Oasis-Livestock → wwwroot/sample-data/UAE/LivestockProcessor/Oasis-Livestock/
- Hedges-Wholesalers → wwwroot/sample-data/UAE/LivestockProcessor/Hedges-Wholesalers/

**Dairy Processor** (for dairy companies):
- AlAin-Dairy → wwwroot/sample-data/UAE/DairyProcessor/AlAin-Dairy/
- Almarai → wwwroot/sample-data/UAE/DairyProcessor/Almarai/
- Camelicious → wwwroot/sample-data/UAE/DairyProcessor/Camelicious/

### Oman Institutions
**Livestock Processor** (for livestock and meat companies):
- AlBashayer-Meat → wwwroot/sample-data/Oman/LivestockProcessor/AlBashayer-Meat/

### Saudi Arabia Institutions
**Dairy Processor** (for dairy companies):
- Almarai (also listed under UAE, but has Saudi operations) → wwwroot/sample-data/SaudiArabia/DairyProcessor/Almarai/

### China Institutions
**Company** (trading, processing, and other business companies):
- COFCO-Group → wwwroot/sample-data/China/Company/COFCO-Group/

## Implementation Steps

### Phase 1: Preparation
1. Backup current sample-data directory
2. Create target directory structure
3. Verify all institution directories exist in source

### Phase 2: Data Migration
For each institution:
1. Create target directory path: wwwroot/sample-data/{country}/{institutionType}/{institutionName}/
2. Copy all 30 JSON files from source to target
3. Verify file integrity (check counts match)
4. Log any discrepancies

### Phase 3: Validation
1. Verify all files copied correctly
2. Check that no files were missed
3. Confirm directory structure matches plan
4. Update documentation references if needed

### Phase 4: Cleanup
1. Once validation is complete, remove old directories
2. Keep backup for safety period
3. Update any configuration references if applicable

## Special Considerations

### Duplicate Institution Names
- Almarai appears in both UAE and Saudi Arabia sections - will need to determine if these represent different entities or if one should be primary
- FOSUP appears twice in the list - need to verify if these are the same or different organizations

### File Naming Consistency
All institutions should have the same 30 JSON files:
- alerts.json
- authcomponent.json
- authstate.json
- centralfarmersystem.json
- circulareconomy.json
- climatesmartag.json
- collectionpoints.json
- consent.json
- contractfarming.json
- dashboard.json
- deliverymanagement.json
- farmergroups.json
- farmers.json
- financialmanagement.json
- genderinclusion.json
- gismapping.json
- inputdistributions.json
- inputinventory.json
- internationaltrade.json
- livestocktraceability.json
- marketprices.json
- monitoring.json
- ordermanagement.json
- producetracking.json
- projects.json
- quickactions.json
- reporting.json
- supplychainactors.json
- trainings.json
- valuechain.json

## Estimated Effort
- 30 institutions × 30 files = 900 files to move
- Estimated time: 2-3 hours for execution
- Validation: 30-60 minutes