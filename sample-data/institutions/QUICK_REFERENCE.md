# Quick Reference - Institution Sample Data

## File Count per Institution: 30 files each

## Sample Farmers by Institution

| Institution | Sample Farmer | District | Primary Crop | Farm Size |
|------------|---------------|----------|--------------|-----------|
| **NGO-ActionAid** | Mariatu Kamara | Bombali | Rice | 2.5 ha |
| **NGO-CARE** | Adama Koroma | Bo | Vegetables | 0.8 ha |
| **Government-MinistryAgric** | Ibrahim Sankoh | Kambia | Rice | 5.2 ha |
| **Cooperative-FarmerUnion** | Abdul Kamara | Pujehun | Cocoa | 4.5 ha |
| **InternationalDonor-FAO** | Foday Mansaray | Tonkolili | Rice (NERICA) | 6.0 ha |

## Farmer ID Patterns

```
NGO-ActionAid:          F-AA-001, F-AA-002, F-AA-003
NGO-CARE:               F-CARE-001, F-CARE-002, F-CARE-003
Government-MinistryAgric: F-GOV-001, F-GOV-002, F-GOV-003
Cooperative-FarmerUnion:  F-COOP-001, F-COOP-002
InternationalDonor-FAO:   F-FAO-001, F-FAO-002
```

## All 28 Service Files

```json
alerts.json                    - Notifications and warnings
authcomponent.json             - Authentication components
authstate.json                 - User session states
centralfarmersystem.json       - Centralized farmer registry
circulareconomy.json           - Waste recycling activities
climatesmartag.json            - Climate adaptation practices
collectionpoints.json          - Produce collection centers
consent.json                   - Data sharing permissions
contractfarming.json           - Buyer contracts
dashboard.json                 - Performance metrics
deliverymanagement.json        - Produce deliveries
farmergroups.json              - Farmer cooperatives
farmers.json                   - Farmer profiles
financialmanagement.json       - Financial transactions
genderinclusion.json           - Gender programs
gismapping.json                - Farm geolocation
inputdistributions.json        - Input distributions
inputinventory.json            - Input stock levels
internationaltrade.json        - Export activities
livestocktraceability.json     - Animal tracking
marketprices.json              - Commodity prices
monitoring.json                - Farm visits
ordermanagement.json           - Input orders
producetracking.json           - Harvest tracking
projects.json                  - Development projects
quickactions.json              - UI quick actions
reporting.json                 - Generated reports
supplychainactors.json         - Buyers/suppliers/logistics
trainings.json                 - Training programs
valuechain.json                - Value chain activities
```

## Quick Access Paths

```bash
# NGO-ActionAid
cd institutions/NGO-ActionAid

# NGO-CARE
cd institutions/NGO-CARE

# Government
cd institutions/Government-MinistryAgric

# Cooperative
cd institutions/Cooperative-FarmerUnion

# FAO
cd institutions/InternationalDonor-FAO
```

## Validation Command

```bash
# Validate all JSON files
for file in institutions/*/*.json; do
  python3 -m json.tool "$file" > /dev/null && echo "✓ $file" || echo "✗ $file"
done
```

---
**Total Files:** 150 JSON files  
**All Validated:** ✅ Yes  
**Ready for Use:** ✅ Yes
