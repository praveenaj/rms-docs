
# Schemas

<h2 id="tocS_authTokenRequest">authTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenrequest"></a>
<a id="schema_authTokenRequest"></a>
<a id="tocSauthtokenrequest"></a>
<a id="tocsauthtokenrequest"></a>

```json
{
  "agentId": 123,
  "agentPassword": "xxx",
  "clientId": 345,
  "clientPassword": "xxx",
  "useTrainingDatabase": false,
  "moduleType": [
    "kiosk"
  ]
}

```

Used:<br>POST /authToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|integer(int32)|true|none|none|
|agentPassword|string|true|none|none|
|clientId|integer(int32)|true|none|Request the Live credentials for this from the client|
|clientPassword|string|true|none|Request the Live credentials for this from the client, when requesting this use the wording 'Web Service password'|
|moduleType|[string]|true|none|none|
|useTrainingDatabase|boolean|false|none|When set to 'True' this will allow you to connect to a copy of the customers data instead of their production data|

<h2 id="tocS_authTokenResponse">authTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenresponse"></a>
<a id="schema_authTokenResponse"></a>
<a id="tocSauthtokenresponse"></a>
<a id="tocsauthtokenresponse"></a>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2lkIjoiMTUiLCJjbGlk",
  "expiryDate": "2024-07-13 00:14:42",
  "rmsClientId": 11281,
  "allowedProperties": [
    {
      "clientName": "API Test Database",
      "clientId": 11281
    },
    {
      "clientName": "Test property 1",
      "clientId": 11282
    },
    {
      "clientName": "Test property 2",
      "clientId": 11283
    },
    {
      "clientName": "Test property 3",
      "clientId": 11284
    }
  ]
}

```

Used:<br>POST /authToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedProperties|[[allowedProperties](#schemaallowedproperties)]|false|none|[Not Used]|
|expiryDate|string(date-time)|false|none|none|
|rmsClientId|integer(int32)|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_allowedProperties">allowedProperties</h2>
<!-- backwards compatibility -->
<a id="schemaallowedproperties"></a>
<a id="schema_allowedProperties"></a>
<a id="tocSallowedproperties"></a>
<a id="tocsallowedproperties"></a>

```json
{
  "clientName": "string",
  "clientId": 0
}

```

Not Used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientName|string|false|none|none|
|clientId|integer(int32)|false|none|none|

<h2 id="tocS_accountsSearch">accountsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaaccountssearch"></a>
<a id="schema_accountsSearch"></a>
<a id="tocSaccountssearch"></a>
<a id="tocsaccountssearch"></a>

```json
{
  "accountClass": "POS",
  "accountEntityIds": [
    1,
    3
  ],
  "propertyIds": [
    1
  ],
  "ids": []
}

```

Used:<br>POST /accountSearch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountClass|string|true|none|none|
|accountEntityIds|[integer]|false|none|none|
|propertyIds|[integer]|false|none|none|
|ids|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountClass|POS|
|accountClass|Cash|
|accountClass|Company|
|accountClass|TravelAgent|
|accountClass|Guest|

<h2 id="tocS_accountsSearchResponse">accountsSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountssearchresponse"></a>
<a id="schema_accountsSearchResponse"></a>
<a id="tocSaccountssearchresponse"></a>
<a id="tocsaccountssearchresponse"></a>

```json
[
  {
    "id": 379272,
    "accountClass": "TravelAgent",
    "propertyId": 3,
    "accountEntityId": 3012
  },
  {
    "id": 379293,
    "accountClass": "Guest",
    "propertyId": 5,
    "accountEntityId": 165544
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|accountClass|string|false|none|none|
|propertyId|integer|false|none|none|
|accountEntityId|integer|false|none|none|

<h2 id="tocS_foreignExchangeRates">foreignExchangeRates</h2>
<!-- backwards compatibility -->
<a id="schemaforeignexchangerates"></a>
<a id="schema_foreignExchangeRates"></a>
<a id="tocSforeignexchangerates"></a>
<a id="tocsforeignexchangerates"></a>

```json
{
  "id": 1,
  "code": "USD",
  "description": "US Dollars",
  "exchangeRate": 1.5,
  "propertyId": 1,
  "Symbol": "$"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|exchangeRate|integer(decimal)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|Symbol|string|false|none|none|

<h2 id="tocS_accountTypes">accountTypes</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttypes"></a>
<a id="schema_accountTypes"></a>
<a id="tocSaccounttypes"></a>
<a id="tocsaccounttypes"></a>

```json
{
  "id": 1,
  "name": "test"
}

```

Used:<br>GET /accountTypes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_advancedSearchRequest">advancedSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsearchrequest"></a>
<a id="schema_advancedSearchRequest"></a>
<a id="tocSadvancedsearchrequest"></a>
<a id="tocsadvancedsearchrequest"></a>

```json
{
  "ids": [
    12,
    5,
    702
  ],
  "idFrom": 6,
  "idTo": 12,
  "accountIds": [
    1242,
    5985,
    702
  ],
  "agentType": "onlineAgent",
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "externalReferenceId": "65148",
  "iataNumber": "6568GH",
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "name": "RMS Book Now",
  "userDefined1": "String 20",
  "userDefined2": "String 50",
  "userDefined3": "String 50",
  "userDefined4": "String 50",
  "userDefined5": "String 50"
}

```

Used:<br>POST /agents/search<br>POST /companies/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[integer]|false|none|none|
|agentType|string|false|none|none|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|externalReferenceId|string|false|none|none|
|iataNumber|string|false|none|none|
|idFrom|integer(int32)|false|none|none|
|idTo|integer(int32)|false|none|none|
|ids|[integer]|false|none|none|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|name|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|agentType|travelAgent|
|agentType|onlineAgent|
|agentType|wholeSaler|
|agentType|groupAllotment|

<h2 id="tocS_agentFull">agentFull</h2>
<!-- backwards compatibility -->
<a id="schemaagentfull"></a>
<a id="schema_agentFull"></a>
<a id="tocSagentfull"></a>
<a id="tocsagentfull"></a>

```json
{
  "abn": "tr34937874937",
  "address1": "Level 4, 1230 Nepean Hwy",
  "address2": "",
  "address3": "",
  "agentType": "onlineAgent",
  "availableToFranchise": false,
  "billingNote": "Always address bills to Bianca",
  "bookingSourceId": 7,
  "chargeBack": false,
  "city": "Cheltenham",
  "cityMasterId": 1,
  "cityMasterName": "Bangkok",
  "competitorMasterId": 2,
  "competitorMasterName": "Need Group",
  "countryId": 2,
  "createdById": 45,
  "createdDate": "2018-09-13 00:00:00",
  "creditHold": false,
  "email": "fake@test.com.au",
  "externalRefId": 4,
  "fax": "25654 54568",
  "franchiseId": 0,
  "glCodeID": 8,
  "iatnNumber": "t895",
  "id": 3,
  "inactive": false,
  "inactiveReason": "out of business",
  "industryMasterId": 4,
  "marketSegmentId": 3,
  "modifiedById": 6,
  "modifiedDate": "2018-09-27 00:00:00",
  "name": "GuestLink",
  "notes": "Office is on holidays in July",
  "parentId": 1,
  "phone": "03 1234 56987",
  "postcode": "2364a",
  "salesSource": "Bega",
  "state": "Vic",
  "subMarketSegmentId": 1,
  "tradingAs": "Company",
  "userDefined1": "string 20",
  "userDefined2": "string 50",
  "userDefined3": "string 50",
  "userDefined4": "string 50",
  "userDefined5": "string 50"
}

```

Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abn|string|false|none|Australian Business Number|
|accountId|integer(int32)|false|none|none|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|agentType|string|false|none|none|
|availableToFranchise|boolean|false|none|none|
|billingNote|string|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|chargeBack|boolean|false|none|none|
|city|string|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|cityMasterName|string|false|none|none|
|competitorMasterId|integer(int32)|false|none|none|
|competitorMasterName|string|false|none|none|
|countryId|string|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|creditHold|boolean|false|none|none|
|email|string|false|none|none|
|externalRefId|string|false|none|none|
|fax|string|false|none|none|
|franchiseId|integer(int32)|false|none|none|
|glCodeID|integer(int32)|false|none|none|
|iataNumber|string|false|none|none|
|id|integer(int32)|false|none|none|
|inActive|boolean|false|none|none|
|inactiveReason|string|false|none|none|
|industryMasterId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|modifiedById|integer|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|parentId|integer(int32)|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|salesSource|string|false|none|none|
|state|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|tradingAs|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|agentType|travelAgent|
|agentType|onlineAgent|
|agentType|wholeSaler|
|agentType|groupAllotment|

<h2 id="tocS_travelAgentsRatesAssignmentsFull">travelAgentsRatesAssignmentsFull</h2>
<!-- backwards compatibility -->
<a id="schematravelagentsratesassignmentsfull"></a>
<a id="schema_travelAgentsRatesAssignmentsFull"></a>
<a id="tocStravelagentsratesassignmentsfull"></a>
<a id="tocstravelagentsratesassignmentsfull"></a>

```json
{
  "id": 7,
  "travelAgentId": 1,
  "fromDate": "2024-08-02 00:00:00",
  "toDate": "2024-12-02 00:00:00",
  "rateId": 1,
  "rateName": "BAR",
  "propertyId": 1,
  "propertyName": "Test Property 1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|travelAgentsId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|rateId|integer(int32)|false|none|none|
|rateName|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|

<h2 id="tocS_ratesAssignmentsBasic">ratesAssignmentsBasic</h2>
<!-- backwards compatibility -->
<a id="schemaratesassignmentsbasic"></a>
<a id="schema_ratesAssignmentsBasic"></a>
<a id="tocSratesassignmentsbasic"></a>
<a id="tocsratesassignmentsbasic"></a>

```json
{
  "id": 7,
  "fromDate": "2024-08-02 00:00:00",
  "propertyId": 1,
  "rateId": 1,
  "toDate": "2024-12-02 00:00:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rateId|integer(int32)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_successResult">successResult</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresult"></a>
<a id="schema_successResult"></a>
<a id="tocSsuccessresult"></a>
<a id="tocssuccessresult"></a>

```json
{
  "success": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_agentAllotments">agentAllotments</h2>
<!-- backwards compatibility -->
<a id="schemaagentallotments"></a>
<a id="schema_agentAllotments"></a>
<a id="tocSagentallotments"></a>
<a id="tocsagentallotments"></a>

```json
[
  {
    "name": "Travel Agent Allotments 05da6737-92ce-4db0-ac82-8a",
    "groupAllotmentId": 4175,
    "groupOptionId": 192,
    "availableFor": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "daysBeforeRelease": 1,
    "releaseDate": "1900-01-01 00:00:00",
    "releaseMethod": "DaysBefore",
    "discountId": 0,
    "discountReasonId": 0,
    "doNotSellAboveAllotment": false,
    "fromDate": "2026-08-25 00:00:00",
    "groupStatus": "NotSet",
    "guaranteed": true,
    "setPermanently": false,
    "toDate": "2026-08-28 00:00:00",
    "categoryAllotment": [
      {
        "propertyId": 1,
        "categoryId": 20,
        "categoryName": "Studio",
        "allotment": 1,
        "allotmentId": 99266,
        "fromDate": "2026-08-25 00:00:00",
        "toDate": "2026-08-28 00:00:00"
      },
      {
        "propertyId": 1,
        "categoryId": 23,
        "categoryName": "One Bedroom Suite",
        "allotment": 2,
        "allotmentId": 99283,
        "fromDate": "2026-08-25 00:00:00",
        "toDate": "2026-08-28 00:00:00"
      }
    ],
    "allowUpgradesOutsideofAllotments": false,
    "holdOriginalSuiteTypeAvailabilityCount": false,
    "reportingADR": [
      {
        "categoryId": 20,
        "reportingADR": 0
      },
      {
        "categoryId": 23,
        "reportingADR": 0
      }
    ]
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|availableFor|[string]|false|none|none|
|daysBeforeRelease|integer(int32)|false|none|none|
|releaseDate|string(date-time)|false|none|none|
|releaseMethod|string|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|doNotSellAboveAllotment|boolean|false|none|none|
|fromDate|string(date-time)|false|none|none|
|groupStatus|string|false|none|none|
|guaranteed|boolean|false|none|none|
|setPermanently|boolean|false|none|none|
|toDate|string(date-time)|false|none|none|
|categoryAllotment|[[agentAllotments_categoryAllotment](#schemaagentallotments_categoryallotment)]|false|none|none|
|allowUpgradesOutsideofAllotments|boolean|false|none|none|
|holdOriginalSuiteTypeAvailabilityCount|boolean|false|none|none|
|reportingADR|[[agentAllotments_reportingADR](#schemaagentallotments_reportingadr)]|false|none|none|

<h2 id="tocS_accountBasic">accountBasic</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbasic"></a>
<a id="schema_accountBasic"></a>
<a id="tocSaccountbasic"></a>
<a id="tocsaccountbasic"></a>

```json
{
  "accountClass": "Guest",
  "id": 12345,
  "propertyId": 1
}

```

Used:<br>GET /agents/{id}/accounts<br>POST /agents/{id}/createPropertyAccount<br>GET /companies/{id}/accounts<br>POST /companies/{id}/createPropertyAccount<br>GET /guests/{id}/accounts<br>POST /guests/{id}/createPropertyAccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountClass|string|false|none|none|
|id|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_agentsIdCommissions">agentsIdCommissions</h2>
<!-- backwards compatibility -->
<a id="schemaagentsidcommissions"></a>
<a id="schema_agentsIdCommissions"></a>
<a id="tocSagentsidcommissions"></a>
<a id="tocsagentsidcommissions"></a>

```json
{
  "agentId": 2673,
  "sundryId": 1373,
  "collectType": "property",
  "commissionType": "UsePercentage",
  "commission": 10,
  "includeServiceChargesInCalculation": true,
  "commissions": [
    {
      "sundryId": 1444,
      "commissionType": "UseTotalDollarAmount",
      "propertyId": 1,
      "includeServiceChargesInCommissionCalculation": false,
      "rateCommissions": [
        {
          "rateTypeId": 1439,
          "rateName": "My Derived Rate",
          "collectType": "property",
          "commission": 5,
          "noGreaterThan": 500,
          "multiplier": 0
        },
        {
          "rateTypeId": 1433,
          "rateName": "BAR USD",
          "collectType": "property",
          "commission": 8,
          "noGreaterThan": 500,
          "multiplier": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|integer|false|none|none|
|sundryId|integer|false|none|none|
|collectType|string|false|none|none|
|commissionType|string|false|none|none|
|commission|number(float)|false|none|none|
|includeServiceChargesInCalculation|boolean|false|none|none|
|commissions|[[agentsIdCommissions_commissions](#schemaagentsidcommissions_commissions)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|collectType|property|
|collectType|agent|
|commissionType|UsePercentage|
|commissionType|UseDailyDollarAmount|
|commissionType|NoCommission|
|commissionType|UseTotalDollarAmount|

<h2 id="tocS_travelAgentRateBasic">travelAgentRateBasic</h2>
<!-- backwards compatibility -->
<a id="schematravelagentratebasic"></a>
<a id="schema_travelAgentRateBasic"></a>
<a id="tocStravelagentratebasic"></a>
<a id="tocstravelagentratebasic"></a>

```json
{
  "countryId": 7,
  "fromDate": "2018-08-02 00:00:00",
  "propertyId": 1,
  "propertyName": "Property 1",
  "rateId": 1,
  "rateName": "BAR",
  "toDate": "2019-12-02 00:00:00",
  "town": "Melbourne"
}

```

Used:<br>GET /agents/{id}/rates<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|rateId|integer(int32)|false|none|none|
|rateName|string|false|none|none|
|toDate|string(date-time)|false|none|none|
|town|string|false|none|none|

<h2 id="tocS_auditTrailSearch">auditTrailSearch</h2>
<!-- backwards compatibility -->
<a id="schemaaudittrailsearch"></a>
<a id="schema_auditTrailSearch"></a>
<a id="tocSaudittrailsearch"></a>
<a id="tocsaudittrailsearch"></a>

```json
{
  "auditTrailIdFrom": 1,
  "auditTrailIdTo": 10,
  "dateFrom": "2020-09-27 00:00:00",
  "dateTo": "2020-09-28 00:00:00",
  "fieldModified": "depart",
  "propertyIds": [
    1,
    2
  ],
  "reservationIds": [
    1234,
    1546
  ]
}

```

Used:<br>POST /auditTrail/search<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditTrailIdFrom|integer(int32)|false|none|none|
|auditTrailIdTo|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|fieldModified|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|rateIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldModified|Arrive|
|fieldModified|Depart|
|fieldModified|Category|
|fieldModified|Area|
|fieldModified|Adults|
|fieldModified|Children|
|fieldModified|Infants|
|fieldModified|RateType|
|fieldModified|Company|
|fieldModified|Status|
|fieldModified|Surname|
|fieldModified|Given|
|fieldModified|Mobile|
|fieldModified|Email|
|fieldModified|Email2|

<h2 id="tocS_auditTrailBasic">auditTrailBasic</h2>
<!-- backwards compatibility -->
<a id="schemaaudittrailbasic"></a>
<a id="schema_auditTrailBasic"></a>
<a id="tocSaudittrailbasic"></a>
<a id="tocsaudittrailbasic"></a>

```json
{
  "createdDate": "2020-09-01 00:00:00",
  "entityId": "5",
  "fieldModified": "room",
  "fieldModifiedId": "3",
  "guestId": 55895,
  "holdId": 0,
  "id": 12435,
  "newValue": "3",
  "oldValue": "12",
  "reason": "room upgrade",
  "reservationId": 12685,
  "userId": 8,
  "username": "test",
  "view": "Reservation"
}

```

Used:<br>POST /auditTrail/search<br>POST /auditTrail/rates/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|string(date-time)|false|none|none|
|entityId|string|false|none|none|
|fieldModified|string|false|none|none|
|fieldModifiedId|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|holdId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|newValue|string|false|none|none|
|oldValue|string|false|none|none|
|reason|string|false|none|none|
|reservationId|integer(int32)|false|none|none|
|userId|integer(int32)|false|none|none|
|username|string|false|none|none|
|view|string|false|none|none|

<h2 id="tocS_auditTrailRateSearch">auditTrailRateSearch</h2>
<!-- backwards compatibility -->
<a id="schemaaudittrailratesearch"></a>
<a id="schema_auditTrailRateSearch"></a>
<a id="tocSaudittrailratesearch"></a>
<a id="tocsaudittrailratesearch"></a>

```json
{
  "auditTrailIdFrom": 1610828,
  "auditTrailIdTo": 1610828,
  "dateFrom": "2023-03-13 00:00:00",
  "dateTo": "2023-03-14 00:00:00",
  "rateIds": [
    2490
  ]
}

```

Used:<br>POST /auditTrail/rates/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditTrailIdFrom|integer(int32)|false|none|none|
|auditTrailIdTo|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|propertyIds|[integer]|false|none|none|
|rateIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|

<h2 id="tocS_areaLite">areaLite</h2>
<!-- backwards compatibility -->
<a id="schemaarealite"></a>
<a id="schema_areaLite"></a>
<a id="tocSarealite"></a>
<a id="tocsarealite"></a>

```json
{
  "categoryId": 3,
  "id": 7,
  "name": "Room 3",
  "propertyId": 1
}

```

Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /categories/{id}/areas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_areaBasic">areaBasic</h2>
<!-- backwards compatibility -->
<a id="schemaareabasic"></a>
<a id="schema_areaBasic"></a>
<a id="tocSareabasic"></a>
<a id="tocsareabasic"></a>

```json
{
  "categoryId": 2,
  "cleanStatus": "Clean",
  "description": "Spacious, bright and outward facing rooms measuring 300 m2 and totally refurbished. The room comes with a modern, fully equipped bathroom finished in top quality bronze coloured ceramics and an independent entrance.",
  "extension": "101",
  "guestDescription": "",
  "id": 7,
  "inactive": true,
  "interconnecting": true,
  "keyNo1": "",
  "keyNo2": "",
  "name": "Room 3",
  "maxOccupants": 4,
  "propertyId": 1
}

```

Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /areas/{id}/interconnecting<br>GET /categories/{id}/areas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|cleanStatus|string(enum - Vacant Dirty - Vacant Clean - Occupied - Vacant Inspect - Maintenance)|false|none|none|
|description|string|false|none|none|
|extension|string|false|none|none|
|guestDescription|string|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|interconnecting|boolean|false|none|none|
|keyNo1|string|false|none|none|
|keyNo2|string|false|none|none|
|name|string|false|none|none|
|maxOccupants|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_areaFull">areaFull</h2>
<!-- backwards compatibility -->
<a id="schemaareafull"></a>
<a id="schema_areaFull"></a>
<a id="tocSareafull"></a>
<a id="tocsareafull"></a>

```json
{
  "addressLine1": "16 Yonge Street",
  "addressLine2": "West",
  "addressLine3": " Northshier",
  "areaStats": true,
  "categoryId": 2,
  "cleanStatus": "Clean",
  "createdDate": "2018-09-27 00:00:00",
  "customCleanStatusId": 1,
  "description": "Spacious, bright and outward facing rooms measuring 300 m2 and totally refurbished. The room comes with a modern, fully equipped bathroom finished in top quality bronze coloured ceramics and an independent entrance.",
  "extension": "101",
  "externalRef": "Ie29374",
  "glCodeId": null,
  "googleMapLink": null,
  "guestDescription": null,
  "id": 7,
  "inactive": true,
  "interconnecting": true,
  "keyNo1": null,
  "keyNo2": null,
  "name": "Room 3",
  "maxOccupants": 4,
  "modifiedDate": null,
  "postcode": "3015",
  "printStatement": true,
  "propertyId": 1,
  "state": "NSW",
  "statisticsStatus": true,
  "town": "Atlanta",
  "userDefined1": "string 100",
  "userDefined2": "string 20",
  "userDefined3": "string 20",
  "userDefined4": "string 20",
  "userDefined5": "string 20",
  "userDefined6": "string 20",
  "userDefined7": "string 20",
  "userDefined8": "string 20",
  "userDefined9": "string 20",
  "userDefined10": "string 20"
}

```

Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /areas/{id}/interconnecting<br>GET /categories/{id}/areas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|areaStats|boolean|false|none|none|
|categoryId|integer(int32)|false|none|none|
|cleanStatus|string|false|none|none|
|createdDate|string(date-time)|false|none|none|
|customCleanStatusId|integer(int32)|false|none|none|
|description|string|false|none|none|
|extension|string|false|none|none|
|externalRef|string|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|googleMapLink|string|false|none|none|
|guestDescription|string|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|interconnecting|boolean|false|none|none|
|keyNumber1|string|false|none|none|
|keyNumber2|string|false|none|none|
|name|string|false|none|none|
|maxOccupants|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|postcode|string|false|none|none|
|printStatement|boolean|false|none|none|
|propertyId|integer(int32)|false|none|none|
|state|string|false|none|none|
|statisticsStatus|boolean|false|none|none|
|town|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|

<h2 id="tocS_areaCleanStatuses">areaCleanStatuses</h2>
<!-- backwards compatibility -->
<a id="schemaareacleanstatuses"></a>
<a id="schema_areaCleanStatuses"></a>
<a id="tocSareacleanstatuses"></a>
<a id="tocsareacleanstatuses"></a>

```json
[
  {
    "id": 0,
    "name": "vacantClean"
  },
  {
    "id": 1,
    "name": "vacantDirty"
  },
  {
    "id": 2,
    "name": "vacantInspect"
  },
  {
    "id": 3,
    "name": "occupied"
  },
  {
    "id": 4,
    "name": "maintenance"
  }
]

```

Return a list of system default area clean statuses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|vacantClean|
|name|vacantDirty|
|name|vacantInspect|
|name|occupied|
|name|maintenance|

<h2 id="tocS_areaCleanStatusesCustom">areaCleanStatusesCustom</h2>
<!-- backwards compatibility -->
<a id="schemaareacleanstatusescustom"></a>
<a id="schema_areaCleanStatusesCustom"></a>
<a id="tocSareacleanstatusescustom"></a>
<a id="tocsareacleanstatusescustom"></a>

```json
[
  {
    "id": 1,
    "name": "status1",
    "dirty": false
  },
  {
    "id": 2,
    "name": "status2",
    "dirty": false
  },
  {
    "id": 3,
    "name": "status3",
    "dirty": true
  }
]

```

Return custom area clean statuses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|dirty|boolean|false|none|none|

<h2 id="tocS_areaSearchRequest">areaSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaareasearchrequest"></a>
<a id="schema_areaSearchRequest"></a>
<a id="tocSareasearchrequest"></a>
<a id="tocsareasearchrequest"></a>

```json
{
  "areaNames": [
    "01 012",
    "01 013"
  ],
  "categoryIds": [
    4,
    5,
    6
  ],
  "cleanStatuses": [
    "VacantClean",
    "VacantDirty"
  ],
  "createdFrom": "2019-11-17 00:00:00",
  "createdTo": "2019-11-29 00:00:00",
  "extensions": [
    "101",
    "302a"
  ],
  "externalReferences": [
    "Cal",
    "10a"
  ],
  "guestDescriptions": [
    "room 4",
    "room 5"
  ],
  "idFrom": 10,
  "ids": [
    4,
    12,
    15
  ],
  "idTo": 20,
  "inactive": true,
  "interconnecting": false,
  "keyNumbers": [
    "11a",
    "12a"
  ],
  "modifiedFrom": "2020-11-29 00:00:00",
  "modifiedTo": "2020-12-02 00:00:00",
  "propertyIds": [
    1,
    3,
    4
  ],
  "reservationIds": [
    10,
    20
  ]
}

```

Used:<br>POST /areas/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaNames|[string]|false|none|none|
|categoryIds|[integer]|false|none|none|
|cleanStatuses|[string]|false|none|Valid Reservation Status|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|extensions|[string]|false|none|none|
|externalReferences|[string]|false|none|none|
|guestDescriptions|[string]|false|none|none|
|idFrom|integer(int32)|false|none|none|
|ids|[integer]|false|none|none|
|idTo|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|interconnecting|boolean|false|none|none|
|keyNumbers|[string]|false|none|none|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|propertyIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|

<h2 id="tocS_attributeFull">attributeFull</h2>
<!-- backwards compatibility -->
<a id="schemaattributefull"></a>
<a id="schema_attributeFull"></a>
<a id="tocSattributefull"></a>
<a id="tocsattributefull"></a>

```json
{
  "associatedTo": "Property",
  "availableToIbe": true,
  "id": 1,
  "name": "Minibar"
}

```

Used:<br>GET /areas/{id}/attributes<br>GET /attributes<br>GET /categories/{id}/attributes<br>GET /properties/{id}/attributes<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedTo|string|false|none|none|
|availableToIbe|boolean|false|none|Only Applies to Property and category attributes|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ids">ids</h2>
<!-- backwards compatibility -->
<a id="schemaids"></a>
<a id="schema_ids"></a>
<a id="tocSids"></a>
<a id="tocsids"></a>

```json
{
  "ids": [
    10
  ]
}

```

Used:<br>POST /areas/requirements/search<br>POST /areas/attributes/search<br>POST /areas/configuration/search<br>POST /categories/requirements/search<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|

<h2 id="tocS_attributeCollection">attributeCollection</h2>
<!-- backwards compatibility -->
<a id="schemaattributecollection"></a>
<a id="schema_attributeCollection"></a>
<a id="tocSattributecollection"></a>
<a id="tocsattributecollection"></a>

```json
{
  "areaId": 5,
  "attributes": [
    {
      "id": 1,
      "name": "Minibar",
      "associatedTo": "Property",
      "availableToIbe": true
    }
  ],
  "categoryId": 1,
  "propertyId": 1
}

```

Used:<br>POST /areas/attributes/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer(int32)|false|none|none|
|attributes|[[attributes](#schemaattributes)]|false|none|[Not Used]|
|categoryId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_attributes">attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
[
  {
    "id": 1,
    "name": "Minibar",
    "associatedTo": "Property",
    "availableToIbe": true
  },
  {
    "id": 2,
    "name": "Balcony",
    "associatedTo": "Property",
    "availableToIbe": true
  }
]

```

Not Used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|associatedTo|string|false|none|none|
|availableToIbe|boolean|false|none|Only Applies to Property and category attributes|

<h2 id="tocS_areaConfiguration">areaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaareaconfiguration"></a>
<a id="schema_areaConfiguration"></a>
<a id="tocSareaconfiguration"></a>
<a id="tocsareaconfiguration"></a>

```json
{
  "childrenAllowed": "Not Set",
  "expiryDate": "2020-10-27 00:00:00",
  "floor": "B3",
  "id": 1,
  "latitude": "-37.840935",
  "length": 20,
  "longitude": "144.946457",
  "name": "room 5",
  "numberOfBedrooms": 1,
  "numberOfFullBaths": 1,
  "numberOfHalfBaths": 0,
  "numberOfShowers": 1,
  "petsAllowed": true,
  "smokingAllowed": true,
  "squareMeters": 300,
  "width": 15
}

```

Used:<br>GET /areas/{id}/configuration<br>GET /areas/configuration/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childrenAllowed|boolean|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|floor|string|false|none|none|
|id|integer(int32)|false|none|none|
|latitude|string|false|none|none|
|length|number|false|none|none|
|longitude|string|false|none|none|
|name|string|false|none|none|
|numberOfBedrooms|integer(int32)|false|none|none|
|numberOfFullBaths|integer(int32)|false|none|none|
|numberOfHalfBaths|integer(int32)|false|none|none|
|numberOfShowers|integer(int32)|false|none|none|
|petsAllowed|string|false|none|none|
|smokingAllowed|string|false|none|none|
|squareMeters|number|false|none|none|
|width|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|petsAllowed|notSet|
|petsAllowed|true|
|petsAllowed|false|
|smokingAllowed|notSet|
|smokingAllowed|true|
|smokingAllowed|false|

<h2 id="tocS_grouping">grouping</h2>
<!-- backwards compatibility -->
<a id="schemagrouping"></a>
<a id="schema_grouping"></a>
<a id="tocSgrouping"></a>
<a id="tocsgrouping"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_areaDwelling">areaDwelling</h2>
<!-- backwards compatibility -->
<a id="schemaareadwelling"></a>
<a id="schema_areaDwelling"></a>
<a id="tocSareadwelling"></a>
<a id="tocsareadwelling"></a>

```json
{
  "dwellingLength": [
    {
      "id": 3,
      "name": "6 ft"
    },
    {
      "id": 4,
      "name": "7 ft"
    }
  ],
  "dwellingSlide": [
    {
      "id": 7,
      "name": "Double decker"
    },
    {
      "id": 8,
      "name": "Single decker"
    }
  ],
  "dwellingType": [
    {
      "id": 1,
      "name": "Passenger"
    },
    {
      "id": 2,
      "name": "Tourist"
    }
  ]
}

```

Used:<br>GET /areas/{id}/dwellings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dwellingLength|[[dwellingLength](#schemadwellinglength)]|false|none|none|
|dwellingSlide|[[dwellingSlide](#schemadwellingslide)]|false|none|none|
|dwellingType|[[dwellingType](#schemadwellingtype)]|false|none|none|

<h2 id="tocS_dwellingLength">dwellingLength</h2>
<!-- backwards compatibility -->
<a id="schemadwellinglength"></a>
<a id="schema_dwellingLength"></a>
<a id="tocSdwellinglength"></a>
<a id="tocsdwellinglength"></a>

```json
{
  "id": 3,
  "name": "6 ft"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_dwellingSlide">dwellingSlide</h2>
<!-- backwards compatibility -->
<a id="schemadwellingslide"></a>
<a id="schema_dwellingSlide"></a>
<a id="tocSdwellingslide"></a>
<a id="tocsdwellingslide"></a>

```json
{
  "id": 1,
  "name": "Passenger"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_dwellingType">dwellingType</h2>
<!-- backwards compatibility -->
<a id="schemadwellingtype"></a>
<a id="schema_dwellingType"></a>
<a id="tocSdwellingtype"></a>
<a id="tocsdwellingtype"></a>

```json
{
  "id": 7,
  "name": "Double decker"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_image">image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "caption": "Bathroom",
  "displayOrder": 5,
  "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|url:|string|false|none|none|

<h2 id="tocS_guestBasic">guestBasic</h2>
<!-- backwards compatibility -->
<a id="schemaguestbasic"></a>
<a id="schema_guestBasic"></a>
<a id="tocSguestbasic"></a>
<a id="tocsguestbasic"></a>

```json
{
  "id": 0,
  "addressLine1": "1540 Amsterdam Avenue",
  "addressLine2": "south",
  "addressLine3": "Westingham",
  "birthday": "1999-07-24 00:00:00",
  "companyId": 1,
  "countryId": 1,
  "edmFilter1OptOut": true,
  "edmFilter2OptOut": true,
  "edmFilter3OptOut": true,
  "email": "test@rms.com.au",
  "email2": "test@rms.com.au",
  "emailOptOut": true,
  "guestAccountId": 1234,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham",
  "languageSpoken": "French Canadian",
  "marketingOptOut": true,
  "mobile": "+614 586 659 77",
  "nationalityId": 7,
  "notes": "This is a nice guest",
  "passportId": "E1234569",
  "phoneAH": "03 1245 6564",
  "phoneOptOut": true,
  "postcode": "1234E",
  "privacyOptIn": true,
  "propertyId": "1",
  "smsOptOut": true,
  "state": "Victoria",
  "title": "Dr.",
  "town": "Diggers",
  "userDefined1": "Computer IP",
  "userDefined2": "Mums address",
  "userDefined3": "Phone",
  "userDefined4": "Spare keys",
  "userDefined5": "Calanders",
  "userDefined6": "Tissues",
  "userDefined7": "Bottles",
  "userDefined8": "Headsets",
  "userDefined9": "Pancakes",
  "userDefined10": "Lip balm",
  "userDefined11": "breakfast",
  "userDefined12": "stationary kit",
  "userDefined13": true,
  "userDefined14": false,
  "userDefined15": "2018-08-25 17:25:00",
  "userDefined16": "2018-09-25 13:25:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|birthday|string(date-time)|false|none|none|
|companyId|integer(int32)|false|none|none|
|countryId|integer(int32)|false|none|none|
|edmFilter1OptOut|boolean|false|none|none|
|edmFilter2OptOut|boolean|false|none|none|
|edmFilter3OptOut|boolean|false|none|none|
|email|string|false|none|none|
|email2|string|false|none|none|
|emailOptOut|boolean|false|none|none|
|guestAccountId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|
|languageSpokenId|integer(int32)|false|none|none|
|marketingOptOut|boolean|false|none|none|
|mobile|string|false|none|none|
|nationalityId|integer(int32)|false|none|none|
|notes|string|false|none|none|
|passportId|string|false|none|none|
|phoneAH|string|false|none|none|
|phoneOptOut|boolean|false|none|none|
|postcode|string|false|none|none|
|privacyOptIn|boolean|false|none|none|
|propertyId|integer(int32)|false|none|none|
|smsOptOut|boolean|false|none|none|
|state|string|false|none|none|
|title|string|false|none|none|
|town|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|string|false|none|none|
|userDefined12|string|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|boolean|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|userDefined16|string(date-time)|false|none|none|

<h2 id="tocS_requirementBasic">requirementBasic</h2>
<!-- backwards compatibility -->
<a id="schemarequirementbasic"></a>
<a id="schema_requirementBasic"></a>
<a id="tocSrequirementbasic"></a>
<a id="tocsrequirementbasic"></a>

```json
{
  "amount": 30,
  "adultAmount": 0,
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "childAmount": 0,
  "code": "A129e",
  "feeType": "PerPeriodFee",
  "groupingId": 2,
  "id": 7,
  "infantAmount": 0,
  "secondUnitPrice\"": 0,
  "secondAdultAmount\"": 16,
  "secondChildAmount\"": 12,
  "secondInfantAmount\"": 5,
  "masterRequirementId": 7,
  "monitorRequirement": false,
  "name": "Chapagne & Chochlates",
  "note": "Make sure you check inventory for stock",
  "quantity": 2,
  "requiredDaily": false,
  "showInHouseKeepersReport": true,
  "sundryId": 8,
  "unitPrice": 15,
  "useSundryAmount": true
}

```

Used:<br>GET /areas/{id}/requirements<br>GET /areas/requirements/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(decimal)|false|none|none|
|adultAmount|number(decimal)|false|none|none|
|chargeDailyIncludeToDate|boolean|false|none|none|
|chargeRequiredDaily|boolean|false|none|none|
|childAmount|number(decimal)|false|none|none|
|code|string|false|none|none|
|feeType|string|false|none|none|
|groupingId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|infantAmount|number(decimal)|false|none|none|
|masterRequirementId|integer(int32)|false|none|none|
|monitorRequirement|boolean|false|none|none|
|name|string|false|none|none|
|note|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|
|showInHousekeepersReport|boolean|false|none|none|
|sundryId|integer(int32)|false|none|none|
|secondUnitPrice|number(decimal)|false|none|none|
|secondAdultAmount|number(decimal)|false|none|none|
|secondChildAmount|number(decimal)|false|none|none|
|secondInfantAmount|number(decimal)|false|none|none|
|unitPrice|number(decimal)|false|none|none|
|useSundryAmount|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriodFee|
|feeType|PerPersonFee|

<h2 id="tocS_availabilityRateGridRequest">availabilityRateGridRequest</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityrategridrequest"></a>
<a id="schema_availabilityRateGridRequest"></a>
<a id="tocSavailabilityrategridrequest"></a>
<a id="tocsavailabilityrategridrequest"></a>

```json
{
  "agentId": 1,
  "categoryIds": [
    4,
    3
  ],
  "dateFrom": "2019-11-17 00:00:00",
  "dateTo": "2019-11-29 00:00:00",
  "propertyId": 1,
  "rateIds": [
    1380,
    1159
  ]
}

```

Used:<br>POST /availabilityRateGrid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|integer(int32)|false|none|none|
|categoryIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|A maximum of 14 days worth of data can be returned|
|dateTo|string(date-string)|false|none|A maximum of 14 days worth of data can be returned|
|propertyId|integer(int32)|false|none|none|
|rateIds|[integer]|false|none|none|

<h2 id="tocS_availabilityRateGridResponse">availabilityRateGridResponse</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityrategridresponse"></a>
<a id="schema_availabilityRateGridResponse"></a>
<a id="tocSavailabilityrategridresponse"></a>
<a id="tocsavailabilityrategridresponse"></a>

```json
{
  "categories": [
    {
      "billingCategoryId": 0,
      "categoryId": 4,
      "name": "Deluxe 004",
      "rates": [
        {
          "dayBreakdown": [
            {
              "availableAreas": 5,
              "closedOnArrival": false,
              "closedOnDeparture": false,
              "dailyRate": 5418,
              "maxStay": 0,
              "minStay": 0,
              "minStayOnArrival": 0,
              "theDate": "2023-08-15 00:00:00",
              "stopSell": false
            }
          ],
          "name": "Testing Rate",
          "personBase": 0,
          "rateId": 1416
        }
      ]
    }
  ]
}

```

Used:<br>POST /availabilityRateGrid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[availabilityRateCategory](#schemaavailabilityratecategory)]|false|none|[Not Used.]|

<h2 id="tocS_availabilityRateCategory">availabilityRateCategory</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityratecategory"></a>
<a id="schema_availabilityRateCategory"></a>
<a id="tocSavailabilityratecategory"></a>
<a id="tocsavailabilityratecategory"></a>

```json
{
  "billingCategoryId": 0,
  "categoryId": 0,
  "name": "string",
  "rates": [
    {
      "dayBreakdown": [
        {
          "availableAreas": 5,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 5418,
          "estimatedRate": false,
          "maxStay": 0,
          "minStay": 0,
          "minStayOnArrival": 0,
          "stopSell": false,
          "theDate": "2023-08-15 00:00:00"
        }
      ],
      "name": "string",
      "personBase": 0,
      "rateId": 0
    }
  ]
}

```

Not Used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingCategoryId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|name|string|false|none|none|
|rates|[[availabilityRateRate](#schemaavailabilityraterate)]|false|none|[Not Used.]|

<h2 id="tocS_availabilityRateRate">availabilityRateRate</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityraterate"></a>
<a id="schema_availabilityRateRate"></a>
<a id="tocSavailabilityraterate"></a>
<a id="tocsavailabilityraterate"></a>

```json
{
  "dayBreakdown": [
    {
      "availableAreas": 5,
      "closedOnArrival": false,
      "closedOnDeparture": false,
      "dailyRate": 5418,
      "estimatedRate": false,
      "maxStay": 0,
      "minStay": 0,
      "minStayOnArrival": 0,
      "stopSell": false,
      "theDate": "2023-08-15 00:00:00"
    }
  ],
  "name": "string",
  "personBase": 0,
  "rateId": 0
}

```

Not Used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayBreakdown|[[dayBreakdown](#schemadaybreakdown)]|false|none|[Used:<br>POST /availabilityRateGrid]|
|name|string|false|none|none|
|personBase|integer(int32)|false|none|none|
|rateId|integer(int32)|false|none|none|

<h2 id="tocS_dayBreakdown">dayBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemadaybreakdown"></a>
<a id="schema_dayBreakdown"></a>
<a id="tocSdaybreakdown"></a>
<a id="tocsdaybreakdown"></a>

```json
{
  "availableAreas": 5,
  "closedOnArrival": false,
  "closedOnDeparture": false,
  "dailyRate": 5418,
  "estimatedRate": false,
  "maxStay": 0,
  "minStay": 0,
  "minStayOnArrival": 0,
  "stopSell": false,
  "theDate": "2023-08-15 00:00:00"
}

```

Used:<br>POST /availabilityRateGrid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableAreas|integer(int32)|false|none|none|
|closedOnArrival|boolean|false|none|none|
|closedOnDeparture|boolean|false|none|none|
|dailyRate|number(currency)|false|none|none|
|estimatedRate|boolean|false|none|none|
|maxStay|integer(int32)|false|none|none|
|minStay|integer(int32)|false|none|none|
|minStayOnArrival|integer(int32)|false|none|none|
|stopSell|boolean|false|none|none|
|theDate|string(date)|false|none|none|

<h2 id="tocS_rateGridRequest">rateGridRequest</h2>
<!-- backwards compatibility -->
<a id="schemarategridrequest"></a>
<a id="schema_rateGridRequest"></a>
<a id="tocSrategridrequest"></a>
<a id="tocsrategridrequest"></a>

```json
{
  "adults": 2,
  "agentId": 0,
  "allotmentAssociationId": "GroupAllotment",
  "arrival": "2023-08-15",
  "categoryIds": [
    4
  ],
  "children": 0,
  "departure": "2023-08-16",
  "groupAllotmentId": 2625,
  "includeEstimatedRates": false,
  "includeHouseUseForAllotments": true,
  "includeZeroRates": true,
  "infants": 0,
  "rateIds": [
    1416
  ]
}

```

Used:<br>POST /rates/grid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|integer|false|none|none|
|agentId|integer(int32)|false|none|none|
|allotmentAssociationId|string|false|none|none|
|arrival|string(date-time)|true|none|none|
|categoryIds|[integer]|true|none|none|
|children|integer(int32)|false|none|none|
|departure|string(date-string)|true|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|includeEstimatedRates|boolean|false|none|none|
|includeHouseUseForAllotments|boolean|false|none|none|
|includeZeroRates|boolean|false|none|none|
|infants|integer(int32)|false|none|none|
|rateIds|[integer]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allotmentAssociationId|NotSet|
|allotmentAssociationId|TravelAgent|
|allotmentAssociationId|Wholesaler|
|allotmentAssociationId|GroupAllotment|

<h2 id="tocS_availabilityGridRequest">availabilityGridRequest</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitygridrequest"></a>
<a id="schema_availabilityGridRequest"></a>
<a id="tocSavailabilitygridrequest"></a>
<a id="tocsavailabilitygridrequest"></a>

```json
{
  "propertyId": 0,
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z",
  "removeDirtyRoomsFromAvailabilityForToday": true,
  "roomStatistics": "ignore",
  "availabilityFilter": "house",
  "agentId": 0,
  "allotmentId": 0,
  "allotmentAssociationId": "NotSet"
}

```

Used:<br>POST /availabilityGrid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|A maximum of 90 days worth of data can be returned|
|dateTo|string(date-time)|false|none|A maximum of 90 days worth of data can be returned|
|removeDirtyRoomsFromAvailabilityForToday|boolean|false|none|Will remove any dirty areas from todays availability|
|roomStatistics|string|false|none|none|
|availabilityFilter|string|false|none|none|
|agentId|integer(int32)|false|none|none|
|allotmentId|integer(int32)|false|none|none|
|allotmentAssociationId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|roomStatistics|ignore|
|roomStatistics|true|
|roomStatistics|false|
|availabilityFilter|house|
|availabilityFilter|full|
|allotmentAssociationId|NotSet|
|allotmentAssociationId|TravelAgent|
|allotmentAssociationId|Wholesaler|

<h2 id="tocS_availabilityGridResponse">availabilityGridResponse</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitygridresponse"></a>
<a id="schema_availabilityGridResponse"></a>
<a id="tocSavailabilitygridresponse"></a>
<a id="tocsavailabilitygridresponse"></a>

```json
{
  "categories": [
    {
      "availability": [
        {
          "count": 7,
          "theDate": "2021-11-05"
        },
        {
          "count": 8,
          "theDate": "2021-11-06"
        }
      ],
      "id": 4,
      "name": ""
    },
    {
      "availability": [
        {
          "count": 13,
          "theDate": "2021-11-05"
        },
        {
          "count": 5,
          "theDate": "2021-11-06"
        }
      ],
      "id": 5,
      "name": ""
    }
  ]
}

```

Used:<br>POST /availabilityGrid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[availabilityCategory](#schemaavailabilitycategory)]|false|none|[Not Used.]|

<h2 id="tocS_availabilityCategory">availabilityCategory</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitycategory"></a>
<a id="schema_availabilityCategory"></a>
<a id="tocSavailabilitycategory"></a>
<a id="tocsavailabilitycategory"></a>

```json
{
  "availability": [
    {
      "count": 0,
      "theDate": "2019-08-24"
    }
  ],
  "id": 0,
  "name": "string"
}

```

Not Used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[[availabilityDate](#schemaavailabilitydate)]|false|none|[Not Used.]|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_availabilityDate">availabilityDate</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitydate"></a>
<a id="schema_availabilityDate"></a>
<a id="tocSavailabilitydate"></a>
<a id="tocsavailabilitydate"></a>

```json
{
  "count": 0,
  "theDate": "2019-08-24"
}

```

Not Used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|theDate|string(date)|false|none|none|

<h2 id="tocS_addOnAvailabilityRequest">addOnAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddonavailabilityrequest"></a>
<a id="schema_addOnAvailabilityRequest"></a>
<a id="tocSaddonavailabilityrequest"></a>
<a id="tocsaddonavailabilityrequest"></a>

```json
{
  "addOnTypeIds": [
    50,
    51
  ],
  "dateFrom": "2019-11-17 00:00:00",
  "dateTo": "2019-11-29 00:00:00"
}

```

Used:<br>POST /availableAddOns

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnTypeIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|A maximum of 14 days worth of data can be returned|
|dateTo|string(date-string)|false|none|A maximum of 14 days worth of data can be returned|

<h2 id="tocS_addOnArea">addOnArea</h2>
<!-- backwards compatibility -->
<a id="schemaaddonarea"></a>
<a id="schema_addOnArea"></a>
<a id="tocSaddonarea"></a>
<a id="tocsaddonarea"></a>

```json
{
  "addOnType": "Car Park",
  "addOnTypeId": 2,
  "id": 50,
  "name": "Car Park"
}

```

Used:<br>POST /availableAddOns

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnType|string|false|none|none|
|addOnTypeId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_availableAreaRequest">availableAreaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaavailablearearequest"></a>
<a id="schema_availableAreaRequest"></a>
<a id="tocSavailablearearequest"></a>
<a id="tocsavailablearearequest"></a>

```json
{
  "categoryIds": [
    4,
    3
  ],
  "dateFrom": "2023-11-17 00:00:00",
  "dateTo": "2023-11-29 00:00:00",
  "dwelling": {
    "lengthId": 1,
    "slideId": 2,
    "typeId": 2
  },
  "propertyId": 0,
  "useDefaultTimes": true
}

```

Used:<br>POST /availableAreas<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|A maximum of 14 days worth of data can be returned|
|dateTo|string(date-string)|false|none|A maximum of 14 days worth of data can be returned|
|dwelling|[availableAreaRequest_dwelling](#schemaavailablearearequest_dwelling)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|useDefaultTimes|boolean|false|none|If passed in as True, the default category times will be used as the time portion of the dateFrom and dateTo values.|

<h2 id="tocS_rateGridRequestFacility">rateGridRequestFacility</h2>
<!-- backwards compatibility -->
<a id="schemarategridrequestfacility"></a>
<a id="schema_rateGridRequestFacility"></a>
<a id="tocSrategridrequestfacility"></a>
<a id="tocsrategridrequestfacility"></a>

```json
{
  "adults": 2,
  "agentId": 1,
  "categoryIds": [
    9
  ],
  "children": 0,
  "dateFrom": "2023-02-10 06:00:00",
  "dateTo": "2023-02-10 06:30:00",
  "infants": 0,
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|integer(int32)|false|none|none|
|agentId|integer(int32)|false|none|none|
|categoryIds|[integer]|false|none|none|
|children|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|A maximum of 1 days worth of data can be returned|
|dateTo|string(date-string)|false|none|A maximum of 1 days worth of data can be returned|
|infants|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_rateGridFacility">rateGridFacility</h2>
<!-- backwards compatibility -->
<a id="schemarategridfacility"></a>
<a id="schema_rateGridFacility"></a>
<a id="tocSrategridfacility"></a>
<a id="tocsrategridfacility"></a>

```json
{
  "timeIncrement": 15,
  "facilities": [
    {
      "rateId": 1159,
      "rateName": "OTA Rate [Main]",
      "categoryId": 9,
      "categoryName": "Deluxe 009",
      "areas": [
        {
          "areaId": 36,
          "areaName": "01 036",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 37,
          "areaName": "01 037",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 107,
          "areaName": "01 107",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 109,
          "areaName": "01 109",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 110,
          "areaName": "01 110",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 111,
          "areaName": "01 111",
          "availability": [
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 400,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        }
      ]
    },
    {
      "rateId": 1420,
      "rateName": "Facility hourly",
      "categoryId": 9,
      "categoryName": "Deluxe 009",
      "areas": [
        {
          "areaId": 36,
          "areaName": "01 036",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 37,
          "areaName": "01 037",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 107,
          "areaName": "01 107",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 109,
          "areaName": "01 109",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 110,
          "areaName": "01 110",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        },
        {
          "areaId": 111,
          "areaName": "01 111",
          "availability": [
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:00:00",
              "dateTo": "2023-02-10 06:15:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:15:00",
              "dateTo": "2023-02-10 06:30:00"
            },
            {
              "available": true,
              "rate": 2.5,
              "dateFrom": "2023-02-10 06:30:00",
              "dateTo": "2023-02-10 06:45:00"
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeIncrement|integer(int32)|false|none|none|
|facilities|[[rateGridRateFacility](#schemarategridratefacility)]|false|none|none|

<h2 id="tocS_rateGridRateFacility">rateGridRateFacility</h2>
<!-- backwards compatibility -->
<a id="schemarategridratefacility"></a>
<a id="schema_rateGridRateFacility"></a>
<a id="tocSrategridratefacility"></a>
<a id="tocsrategridratefacility"></a>

```json
{
  "rateId": 0,
  "rateName": "string",
  "categoryId": 0,
  "categoryName": "string",
  "areas": [
    {
      "areaId": 0,
      "areaName": "string",
      "availability": [
        {
          "available": true,
          "rate": 0,
          "dateFrom": "2019-08-24T14:15:22Z",
          "dateTo": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateId|integer(int32)|false|none|none|
|rateName|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|areas|[[rateGridItemFacilityArea](#schemarategriditemfacilityarea)]|false|none|none|

<h2 id="tocS_rateGridItemFacilityArea">rateGridItemFacilityArea</h2>
<!-- backwards compatibility -->
<a id="schemarategriditemfacilityarea"></a>
<a id="schema_rateGridItemFacilityArea"></a>
<a id="tocSrategriditemfacilityarea"></a>
<a id="tocsrategriditemfacilityarea"></a>

```json
{
  "areaId": 0,
  "areaName": "string",
  "availability": [
    {
      "available": true,
      "rate": 0,
      "dateFrom": "2019-08-24T14:15:22Z",
      "dateTo": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer(int32)|false|none|none|
|areaName|string|false|none|none|
|availability|[[rateGridItemFacility](#schemarategriditemfacility)]|false|none|none|

<h2 id="tocS_rateGridItemFacility">rateGridItemFacility</h2>
<!-- backwards compatibility -->
<a id="schemarategriditemfacility"></a>
<a id="schema_rateGridItemFacility"></a>
<a id="tocSrategriditemfacility"></a>
<a id="tocsrategriditemfacility"></a>

```json
{
  "available": true,
  "rate": 0,
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|none|
|rate|number(currency)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|

<h2 id="tocS_rateGridARIPushResponse">rateGridARIPushResponse</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse"></a>
<a id="schema_rateGridARIPushResponse"></a>
<a id="tocSrategridaripushresponse"></a>
<a id="tocsrategridaripushresponse"></a>

```json
{
  "areaId": null,
  "clientId": 11282,
  "categories": [
    {
      "categoryId": 1,
      "rates": [
        {
          "rateId": 1159,
          "personBase": 2,
          "dayBreakdown": [
            {
              "availableAreas": 0,
              "closedOnArrival": false,
              "closedOnDeparture": false,
              "dailyRate": 395,
              "dateFrom": "2024-06-29",
              "dateTo": "2024-06-29",
              "minStay": 0,
              "minStayOnArrival": 0,
              "maxStay": 0,
              "stopSell": false
            }
          ],
          "additionals": {
            "adults": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "children": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "infants": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "adultsBase": {
              "includeInBase": true,
              "personBase": 2
            },
            "childrenBase": {
              "includeInBase": false,
              "personBase": 0
            },
            "infantsBase": {
              "includeInBase": false,
              "personBase": 0
            }
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|string¦null|false|none|none|
|clientId|integer|false|none|none|
|categories|[[rateGridARIPushResponse_categories](#schemarategridaripushresponse_categories)]|false|none|none|

<h2 id="tocS_rateGridARIPushResponseVersion2">rateGridARIPushResponseVersion2</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponseversion2"></a>
<a id="schema_rateGridARIPushResponseVersion2"></a>
<a id="tocSrategridaripushresponseversion2"></a>
<a id="tocsrategridaripushresponseversion2"></a>

```json
{
  "areaId": null,
  "clientId": 11282,
  "timestamp": "2025-02-11 23:58:50Z",
  "categoryRates": [
    {
      "categoryId": 1,
      "rateId": 1447,
      "dayBreakdown": [
        {
          "personBase": 3,
          "availableAreas": 5,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 333,
          "dateFrom": "2025-02-15",
          "dateTo": "2025-02-15",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 1
        },
        {
          "personBase": 5,
          "availableAreas": 5,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 320,
          "dateFrom": "2025-02-16",
          "dateTo": "2025-02-16",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 0
        },
        {
          "personBase": 4,
          "availableAreas": 3,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-17",
          "dateTo": "2025-02-17",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        },
        {
          "personBase": 4,
          "availableAreas": 1,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-18",
          "dateTo": "2025-02-18",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        },
        {
          "personBase": 4,
          "availableAreas": 0,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-19",
          "dateTo": "2025-02-19",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        }
      ]
    },
    {
      "categoryId": 2,
      "rateId": 1447,
      "dayBreakdown": [
        {
          "personBase": 3,
          "availableAreas": 1,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 333,
          "dateFrom": "2025-02-15",
          "dateTo": "2025-02-19",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 3
        }
      ]
    }
  ],
  "additionals": [
    {
      "additionalId": 1,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3.33
        },
        {
          "additionalCount": 2,
          "amount": 3.34
        },
        {
          "additionalCount": 3,
          "amount": 3.35
        },
        {
          "additionalCount": 4,
          "amount": 3.36
        },
        {
          "additionalCount": 5,
          "amount": 3.37
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 1.11
        },
        {
          "additionalCount": 2,
          "amount": 1.12
        },
        {
          "additionalCount": 3,
          "amount": 1.13
        },
        {
          "additionalCount": 4,
          "amount": 1.14
        },
        {
          "additionalCount": 5,
          "amount": 1.15
        }
      ],
      "infants": [],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 3
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": null
    },
    {
      "additionalId": 2,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3
        },
        {
          "additionalCount": 2,
          "amount": 6
        },
        {
          "additionalCount": 3,
          "amount": 9
        },
        {
          "additionalCount": 4,
          "amount": 12
        },
        {
          "additionalCount": 5,
          "amount": 15
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 2
        },
        {
          "additionalCount": 2,
          "amount": 4
        },
        {
          "additionalCount": 3,
          "amount": 6
        },
        {
          "additionalCount": 4,
          "amount": 8
        },
        {
          "additionalCount": 5,
          "amount": 10
        }
      ],
      "infants": [
        {
          "additionalCount": 1,
          "amount": 1
        },
        {
          "additionalCount": 2,
          "amount": 1
        },
        {
          "additionalCount": 3,
          "amount": 1
        },
        {
          "additionalCount": 4,
          "amount": 1
        },
        {
          "additionalCount": 5,
          "amount": 20
        }
      ],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 4
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": {
        "includeInBase": false,
        "personBase": 0
      }
    },
    {
      "additionalId": 3,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3.33
        },
        {
          "additionalCount": 2,
          "amount": 3.34
        },
        {
          "additionalCount": 3,
          "amount": 3.35
        },
        {
          "additionalCount": 4,
          "amount": 3.36
        },
        {
          "additionalCount": 5,
          "amount": 3.37
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 1.11
        },
        {
          "additionalCount": 2,
          "amount": 1.12
        },
        {
          "additionalCount": 3,
          "amount": 1.13
        },
        {
          "additionalCount": 4,
          "amount": 1.14
        },
        {
          "additionalCount": 5,
          "amount": 1.15
        }
      ],
      "infants": [],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 3
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": null
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer¦null|false|none|none|
|clientId|integer|false|none|none|
|timestamp|string(date-time)|false|none|none|
|categoryRates|[[rateGridARIPushResponseVersion2_categoryRates](#schemarategridaripushresponseversion2_categoryrates)]|false|none|none|
|additionals|[[rateGridARIPushResponseVersion2_additionals](#schemarategridaripushresponseversion2_additionals)]|false|none|none|

<h2 id="tocS_bookingSourceBasic">bookingSourceBasic</h2>
<!-- backwards compatibility -->
<a id="schemabookingsourcebasic"></a>
<a id="schema_bookingSourceBasic"></a>
<a id="tocSbookingsourcebasic"></a>
<a id="tocsbookingsourcebasic"></a>

```json
{
  "code": "4 goh",
  "id": 1,
  "inactive": true,
  "name": "Return Guest"
}

```

Used:<br>GET /bookingSources<br>GET /properties/{id}/ibe/bookingSources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_boomgatesHistory">boomgatesHistory</h2>
<!-- backwards compatibility -->
<a id="schemaboomgateshistory"></a>
<a id="schema_boomgatesHistory"></a>
<a id="tocSboomgateshistory"></a>
<a id="tocsboomgateshistory"></a>

```json
{
  "accessNumber": "632283",
  "theDate": "2024-07-23 16:00:33",
  "boomgateId": 1,
  "comment": "Gate",
  "valid": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessNumber|string|true|none|none|
|theDate|string(date-time)|true|none|none|
|boomgateId|integer|true|none|none|
|comment|string|true|none|none|
|valid|boolean|true|none|none|

<h2 id="tocS_regoAccess">regoAccess</h2>
<!-- backwards compatibility -->
<a id="schemaregoaccess"></a>
<a id="schema_regoAccess"></a>
<a id="tocSregoaccess"></a>
<a id="tocsregoaccess"></a>

```json
{
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "areaId": 95,
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "reservationId": 211897,
  "status": "In"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accessNumber|string|false|none|none|
|accessZone|string|false|none|none|
|areaId|integer(int32)|false|none|none|
|zoneId|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|note|string|false|none|none|
|regoNumber|string|false|none|none|
|reservationId|integer(int32)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<h2 id="tocS_zones">zones</h2>
<!-- backwards compatibility -->
<a id="schemazones"></a>
<a id="schema_zones"></a>
<a id="tocSzones"></a>
<a id="tocszones"></a>

```json
{
  "id": 1,
  "name": "North Park"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_regoAccessSearchRequest">regoAccessSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregoaccesssearchrequest"></a>
<a id="schema_regoAccessSearchRequest"></a>
<a id="tocSregoaccesssearchrequest"></a>
<a id="tocsregoaccesssearchrequest"></a>

```json
{
  "expirationDateFrom": "2019-01-16 00:00:00",
  "userType": "AlternateUser"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDateFrom|string(date-time)|false|none|none|
|userType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|Reservation|
|userType|AlternateUser|
|userType|PassUser|

<h2 id="tocS_regoAccessArrayResponse">regoAccessArrayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregoaccessarrayresponse"></a>
<a id="schema_regoAccessArrayResponse"></a>
<a id="tocSregoaccessarrayresponse"></a>
<a id="tocsregoaccessarrayresponse"></a>

```json
{
  "reservationId": 163577,
  "regoAccess": null,
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "area_id": 34,
  "arrivalDate": "2018-09-22 14:00:00",
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "status": "In"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|id|integer|false|none|none|
|accessNumber|string|false|none|none|
|accessZone|string|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|zoneId|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|note|string|false|none|none|
|regoNumber|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<h2 id="tocS_cancellationPolicy">cancellationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpolicy"></a>
<a id="schema_cancellationPolicy"></a>
<a id="tocScancellationpolicy"></a>
<a id="tocscancellationpolicy"></a>

```json
{
  "code": "c21",
  "description": "Coolangatta 21",
  "id": 1,
  "makeCancellationNoteMandatory": true,
  "nonCancellationPeriodInHours": 48,
  "shortDescription": "Coolangatta the bestest place evs"
}

```

Used:<br>POST /cancellationPolicies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|description|string|false|none|none|
|id|integer(int32)|false|none|none|
|makeCancellationNoteMandatory|boolean|false|none|none|
|nonCancellationPeriodInHours|integer(int32)|false|none|none|
|shortDescription|string|false|none|none|

<h2 id="tocS_cancellationPoliciesRules">cancellationPoliciesRules</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpoliciesrules"></a>
<a id="schema_cancellationPoliciesRules"></a>
<a id="tocScancellationpoliciesrules"></a>
<a id="tocscancellationpoliciesrules"></a>

```json
[
  {
    "propertyId": 1,
    "description": "Cancellation property1",
    "mandatoryCancellationNote": true,
    "voidRateCharges": true,
    "periodMethod": "DaysFromArrival",
    "rule1": {
      "feeType": "Sundry",
      "period": 15,
      "sundryId": 1431,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 0
    },
    "rule2": {
      "feeType": "FirstXNights",
      "period": 10,
      "sundryId": 0,
      "firstXNights": 1,
      "amount": 0,
      "percentage": 0
    },
    "rule3": {
      "feeType": "AmountOrPercentage",
      "period": 5,
      "sundryId": 1357,
      "firstXNights": 0,
      "amount": 25,
      "percentage": 0
    },
    "rule4": {
      "feeType": "AmountOrPercentage",
      "period": 0,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 100
    }
  },
  {
    "propertyId": 0,
    "description": "You can cancel half a day before. Cause so.",
    "mandatoryCancellationNote": false,
    "voidRateCharges": true,
    "periodMethod": "HoursFromArrival",
    "rule1": {
      "feeType": "FirstXNights",
      "period": 3,
      "sundryId": 0,
      "firstXNights": 1,
      "amount": 0,
      "percentage": 0
    },
    "rule2": {
      "feeType": "FirstXNights",
      "period": 6,
      "sundryId": 0,
      "firstXNights": 3,
      "amount": 0,
      "percentage": 0
    },
    "rule3": {
      "feeType": "AmountOrPercentage",
      "period": 9,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 50,
      "percentage": 0
    },
    "rule4": {
      "feeType": "AmountOrPercentage",
      "period": 12,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 20
    }
  }
]

```

Used:<br> GET /cancellationPoliciesRules

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|false|none|none|
|description|string|false|none|none|
|mandatoryCancellationNote|boolean|false|none|none|
|voidRateCharges|boolean|false|none|none|
|periodMethod|string|false|none|none|
|rule1|[cancellationPoliciesRules_rule1](#schemacancellationpoliciesrules_rule1)|false|none|none|
|rule2|[cancellationPoliciesRules_rule1](#schemacancellationpoliciesrules_rule1)|false|none|none|
|rule3|[cancellationPoliciesRules_rule1](#schemacancellationpoliciesrules_rule1)|false|none|none|
|rule4|[cancellationPoliciesRules_rule1](#schemacancellationpoliciesrules_rule1)|false|none|none|

<h2 id="tocS_categoryLite">categoryLite</h2>
<!-- backwards compatibility -->
<a id="schemacategorylite"></a>
<a id="schema_categoryLite"></a>
<a id="tocScategorylite"></a>
<a id="tocscategorylite"></a>

```json
{
  "id": 1,
  "name": "Queen Bedroom",
  "propertyId": 1
}

```

Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_categoryBasic">categoryBasic</h2>
<!-- backwards compatibility -->
<a id="schemacategorybasic"></a>
<a id="schema_categoryBasic"></a>
<a id="tocScategorybasic"></a>
<a id="tocscategorybasic"></a>

```json
{
  "allowBookingByCategory": true,
  "availableToIbe": true,
  "categoryClass": "Accommodation",
  "categoryTypeGroupingId": 4,
  "defaultArrivalTime": "14:00:00",
  "defaultDepartureTime": "10:00:00",
  "glCodeId": 9,
  "id": 1,
  "inactive": false,
  "interconnecting": false,
  "longDescription": "LUXURY WATER FRONT LIVING! With the finest of fixtures and fittings .....",
  "name": "Queen Bedroom",
  "numberOfAreas": 35,
  "maxOccupantsPerCategory": 6,
  "maxOccupantsPerCategoryType": 32,
  "propertyId": 1
}

```

Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowBookingByCategory|boolean|false|none|none|
|availableToIbe|boolean|false|none|none|
|categoryClass|string|false|none|none|
|categoryTypeGroupingId|integer(int32)|false|none|none|
|defaultArrivalTime|string(time)|false|none|none|
|defaultDepartureTime|string(time)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|interconnecting|boolean|false|none|none|
|longDescription|string|false|none|none|
|name|string|false|none|none|
|numberOfAreas|integer(int32)|false|none|none|
|maxOccupantsPerCategory|integer(int32)|false|none|none|
|maxOccupantsPerCategoryType|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_categoryFull">categoryFull</h2>
<!-- backwards compatibility -->
<a id="schemacategoryfull"></a>
<a id="schema_categoryFull"></a>
<a id="tocScategoryfull"></a>
<a id="tocscategoryfull"></a>

```json
{
  "allowBookingByCategory": true,
  "allowMultipleReservationsOverTheSameTime": true,
  "allowOverbooking": true,
  "availableToKiosk": true,
  "availableToIbe": true,
  "billingCategoryId": 0,
  "categoryClass": "Accommodation",
  "categoryManagerId": 6,
  "categoryTypeGroupingId": 4,
  "code": "2dr",
  "code2": "99brd",
  "code3": "tw25",
  "dynamicPricingGroupingId": 9,
  "glCodeId": 9,
  "guestDescription": "Waterfront Room",
  "headline": "Cheap room",
  "id": 1,
  "inactive": false,
  "includeOnHouseKeepersReport": false,
  "interconnecting": false,
  "inventoryGrouping": false,
  "longDescription": "LUXURY WATER FRONT LIVING! With the finest of fixtures and fittings .....",
  "maxOccupantsPerCategory": 6,
  "maxOccupantsPerCategoryType": 32,
  "minimumOccupantsPerRoom": 2,
  "minNightlyRate": 35.26,
  "modifiedDate": "10:00:00",
  "name": "Queen Bedroom",
  "numberOfAreas": 35,
  "numberOfBedrooms": 1,
  "numberOfFullBaths": 1,
  "numberOfHalfBaths": 0,
  "numberOfOverbookingsAllowed": 4,
  "numberOfRoomsToHoldFromIBE": 1,
  "numberOfShowers": 1,
  "propertyId": 1,
  "rentalPerSqrMtr": 354,
  "userDefined1": "String 500",
  "userDefined2": "String 500",
  "userDefined3": "String 500",
  "userDefined4": "String 500",
  "userDefined5": "String 500",
  "userDefined6": "String 500",
  "userDefined7": "String 500",
  "userDefined8": "String Max",
  "userDefined9": "String Max"
}

```

Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowBookingByCategory|boolean|false|none|none|
|allowMultipleReservationsOverTheSameTime|boolean|false|none|none|
|allowOverbooking|boolean|false|none|none|
|availableToKiosk|boolean|false|none|none|
|availableToIbe|boolean|false|none|This setting determines the number of Rooms held back from availability to any connected Online Travel Agents within this Category. Holding back Rooms provides a contingency for avoiding multiple bookings being made online simultaneously for your last available Room. RMS recommends setting this to a minimum of 1. Where only one Room exists within the Category this figure will be ignored.|
|billingCategoryId|integer(int32)|false|none|none|
|categoryClass|string|false|none|none|
|categoryManagerId|integer(int32)|false|none|none|
|categoryTypeGroupingId|integer(int32)|false|none|none|
|code|string|false|none|none|
|code2|string|false|none|none|
|code3|string|false|none|none|
|dynamicPricingGroupingId|integer(int32)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|guestDescription|string|false|none|none|
|headline|string|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|includeOnHouseKeepersReport|boolean|false|none|none|
|interconnecting|boolean|false|none|none|
|interconnectingAreaId|[integer]|false|none|none|
|inventoryGrouping|boolean|false|none|none|
|longDescription|string|false|none|none|
|maxOccupantsPerCategory|integer(int32)|false|none|none|
|maxOccupantsPerCategoryType|integer(int32)|false|none|none|
|minimumOccupantsPerRoom|integer(int32)|false|none|none|
|minNightlyRate|number(currency)|false|none|none|
|modifiedDate|string(time)|false|none|none|
|name|string|false|none|none|
|numberOfAreas|integer(int32)|false|none|none|
|numberOfBedrooms|integer(int32)|false|none|none|
|numberOfFullBaths|integer(int32)|false|none|none|
|numberOfHalfBaths|integer(int32)|false|none|none|
|numberOfOverbookingsAllowed|integer(int32)|false|none|none|
|numberOfRoomsToHoldFromIBE|integer(int32)|false|none|none|
|numberOfShowers|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rentalPerSqrMtr|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|

<h2 id="tocS_categoryHousekeeping">categoryHousekeeping</h2>
<!-- backwards compatibility -->
<a id="schemacategoryhousekeeping"></a>
<a id="schema_categoryHousekeeping"></a>
<a id="tocScategoryhousekeeping"></a>
<a id="tocscategoryhousekeeping"></a>

```json
[
  {
    "categoryId": 10,
    "housekeepingTasks": [
      {
        "taskId": 1,
        "name": "Pre Arrival Check"
      },
      {
        "taskId": 2,
        "name": "Departure"
      },
      {
        "taskId": 3,
        "name": "Supervisor Inspection"
      }
    ],
    "bedConfiguration": [
      {
        "bedConfigurationId": 3,
        "name": "King",
        "quantity": 1
      }
    ],
    "customAreaCleanStatuses": [
      {
        "id": 1,
        "name": "Status 1",
        "minutes": 0
      },
      {
        "id": 2,
        "name": "Status 2",
        "minutes": 30
      },
      {
        "id": 3,
        "name": "Status 3",
        "minutes": 60
      }
    ]
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|housekeepingTasks|[[categoryHousekeeping_housekeepingTasks](#schemacategoryhousekeeping_housekeepingtasks)]|false|none|none|
|bedConfiguration|[[categoryHousekeeping_bedConfiguration](#schemacategoryhousekeeping_bedconfiguration)]|false|none|none|
|customAreaCleanStatus|[[categoryHousekeeping_customAreaCleanStatus](#schemacategoryhousekeeping_customareacleanstatus)]|false|none|none|

<h2 id="tocS_discountLite">discountLite</h2>
<!-- backwards compatibility -->
<a id="schemadiscountlite"></a>
<a id="schema_discountLite"></a>
<a id="tocSdiscountlite"></a>
<a id="tocsdiscountlite"></a>

```json
{
  "id": 1,
  "name": "10% Discount"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_categoriesDwellingOptions">categoriesDwellingOptions</h2>
<!-- backwards compatibility -->
<a id="schemacategoriesdwellingoptions"></a>
<a id="schema_categoriesDwellingOptions"></a>
<a id="tocScategoriesdwellingoptions"></a>
<a id="tocscategoriesdwellingoptions"></a>

```json
{
  "dwellingLength": [
    {
      "id": 2,
      "name": "20 ft"
    }
  ],
  "dwellingSlide": [
    {
      "id": 3,
      "name": "Driver and Passenger"
    }
  ],
  "dwellingType": [
    {
      "id": 1,
      "name": "Tent"
    },
    {
      "id": 2,
      "name": "Airstream"
    }
  ]
}

```

Not Used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|dwellingLength|[[dwellingLength](#schemadwellinglength)]|false|none|none|
|dwellingSlide|[[dwellingSlide](#schemadwellingslide)]|false|none|none|
|dwellingType|[[dwellingType](#schemadwellingtype)]|false|none|none|

<h2 id="tocS_categoryOnlineOptions">categoryOnlineOptions</h2>
<!-- backwards compatibility -->
<a id="schemacategoryonlineoptions"></a>
<a id="schema_categoryOnlineOptions"></a>
<a id="tocScategoryonlineoptions"></a>
<a id="tocscategoryonlineoptions"></a>

```json
{
  "availableToIBE": true,
  "headline": "Cheap room",
  "id": 5,
  "minimumOccupantsPerRoom": 2,
  "numberOfBedrooms": 1,
  "numberOfFullBaths": 1,
  "numberOfHalfBaths": 0,
  "numberOfRoomsToHoldFromIBE": 1,
  "numberOfShowers": 1
}

```

Used:<br>GET /categories/{id}/onlineOptions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableToIBE|boolean|false|none|This setting determines the number of Rooms held back from availability to any connected Online Travel Agents within this Category. Holding back Rooms provides a contingency for avoiding multiple bookings being made online simultaneously for your last available Room. RMS recommends setting this to a minimum of 1. Where only one Room exists within the Category this figure will be ignored.|
|headline|string|false|none|none|
|id|integer(int32)|false|none|none|
|minimumOccupantsPerRoom|integer(int32)|false|none|none|
|numberOfBedrooms|integer(int32)|false|none|none|
|numberOfFullBaths|integer(int32)|false|none|none|
|numberOfHalfBaths|integer(int32)|false|none|none|
|numberOfRoomsToHoldFromIBE|integer(int32)|false|none|none|
|numberOfShowers|integer(int32)|false|none|none|

<h2 id="tocS_taxes">taxes</h2>
<!-- backwards compatibility -->
<a id="schemataxes"></a>
<a id="schema_taxes"></a>
<a id="tocStaxes"></a>
<a id="tocstaxes"></a>

```json
{
  "id": 3,
  "name": "Exclusive 10% Tax"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_requirementsByCategory">requirementsByCategory</h2>
<!-- backwards compatibility -->
<a id="schemarequirementsbycategory"></a>
<a id="schema_requirementsByCategory"></a>
<a id="tocSrequirementsbycategory"></a>
<a id="tocsrequirementsbycategory"></a>

```json
{
  "categoryId": 5,
  "requirements": [
    {
      "amount": 30,
      "id": 7,
      "masterRequirementId": 7,
      "name": "Chapagne & Chochlates",
      "quantity": 2,
      "requiredDaily": false
    }
  ]
}

```

Used:<br>POST /categories/requirements/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|requirements|[[requirementLite](#schemarequirementlite)]|false|none|none|

<h2 id="tocS_requirementLite">requirementLite</h2>
<!-- backwards compatibility -->
<a id="schemarequirementlite"></a>
<a id="schema_requirementLite"></a>
<a id="tocSrequirementlite"></a>
<a id="tocsrequirementlite"></a>

```json
{
  "amount": 30,
  "id": 7,
  "masterRequirementId": 7,
  "name": "Chapagne & Chochlates",
  "quantity": 2,
  "requiredDaily": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(decimal)|false|none|none|
|id|integer(int32)|false|none|none|
|masterRequirementId|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|

<h2 id="tocS_companyLite">companyLite</h2>
<!-- backwards compatibility -->
<a id="schemacompanylite"></a>
<a id="schema_companyLite"></a>
<a id="tocScompanylite"></a>
<a id="tocscompanylite"></a>

```json
{
  "id": 78,
  "name": "Mians"
}

```

Used:<br>GET /companies<br>GET /companies/{id}<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_companyBasic">companyBasic</h2>
<!-- backwards compatibility -->
<a id="schemacompanybasic"></a>
<a id="schema_companyBasic"></a>
<a id="tocScompanybasic"></a>
<a id="tocscompanybasic"></a>

```json
{
  "id": 78,
  "name": "Mians",
  "abn": "123A 2596 5E89",
  "acn": "5986 9856 569 6",
  "address1": "25",
  "address2": "fake street",
  "address3": "north",
  "address4": "ftizfield",
  "averageIncome": "52000",
  "bookingSourceId": 986,
  "cityMasterId": 235,
  "code": "12A",
  "competitorMasterId": 3,
  "contact": "Wayne",
  "countryid": 2,
  "creditHold": true,
  "creditLimit": "986",
  "email": "fake@email.com.au",
  "fax": "03 4569 4569",
  "given": "bob",
  "inactive": false,
  "inactiveReason": "Old Account",
  "notes": "This is a note",
  "parentId": 784,
  "phone": "03 5986 4875",
  "postcode": "0425",
  "reservationTypeId": 45,
  "sendArToHeadOffice": true,
  "state": "Victoria",
  "surname": "hobbs",
  "title": "Mr",
  "totalIncome": 23.56,
  "tradingAs": "Melb Corp",
  "userDefined1": "String 20",
  "userDefined2": "String 50",
  "userDefined3": "String 50",
  "userDefined4": "String 50",
  "userDefined5": "String 50",
  "webAddress": "www.melbcorp.com"
}

```

Used:<br>GET /companies<br>GET /companies/{id}<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|abn|string|false|none|Australian Business Number|
|acn|string|false|none|Australian Company Number|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|averageIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|bookingSourceId|integer(int32)|false|none|none|
|city|string|false|none|none|
|cityMaster|string|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|code|string|false|none|none|
|competitorMasterId|integer(int32)|false|none|none|
|contact|string|false|none|none|
|contactPosition|string|false|none|none|
|countryid|integer(int32)|false|none|none|
|creditHold|boolean|false|none|none|
|creditLimit|number(decimal)|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|given|string|false|none|none|
|inactive|boolean|false|none|none|
|inactiveReason|string|false|none|none|
|notes|string|false|none|none|
|parentId|integer(int32)|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|reservationTypeId|integer(int32)|false|none|none|
|sendArToHeadOffice|string|false|none|none|
|state|string|false|none|none|
|surname|string|false|none|none|
|totalIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|tradingAs|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|webAddress|string|false|none|none|

<h2 id="tocS_companyFull">companyFull</h2>
<!-- backwards compatibility -->
<a id="schemacompanyfull"></a>
<a id="schema_companyFull"></a>
<a id="tocScompanyfull"></a>
<a id="tocscompanyfull"></a>

```json
{
  "id": 78,
  "name": "Mians",
  "abn": "123A 2596 5E89",
  "acn": "5986 9856 569 6",
  "accountId": 18001,
  "address1": "25",
  "address2": "fake street",
  "address3": "north",
  "averageIncome": "52000",
  "bookingSource": "AusCorp",
  "bookingSourceId": 986,
  "branch": " dellas",
  "city": "ftizfield",
  "cityMaster": "NSW",
  "cityMasterId": 235,
  "code": "12A",
  "competitorMaster": "Rex Group",
  "competitorMasterId": 3,
  "contact": "Wayne",
  "contactPosition": "Lodge Manager",
  "country": "ukraine",
  "createdById": 5,
  "createdDate": "2018-09-27 16:00:00",
  "creditHold": true,
  "creditLimit": "986",
  "email": "fake@email.com.au",
  "fax": "03 4569 4569",
  "hideRateFromCorrespondence": false,
  "inactive": false,
  "inactiveReason": "Old Account",
  "industryMasterId": 25,
  "lastVisit": "2018-09-25 17:25:00",
  "modifiedById": 85,
  "modifiedDate": "2019-09-25 17:25:00",
  "notes": "This is a note",
  "numberOfVisits": 56,
  "parentId": 784,
  "phone": "03 5986 4875",
  "postcode": "0425",
  "resType": "Staff",
  "resTypeId": 45,
  "sendArToHeadOffice": true,
  "state": "Victoria",
  "totalIncome": 23.56,
  "tradingAs": "Melb Corp",
  "userDefined1": "String 20",
  "userDefined2": "String 50",
  "userDefined3": "String 50",
  "userDefined4": "String 50",
  "userDefined5": "String 50",
  "webAddress": "www.melbcorp.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|abn|string|false|none|Australian Business Number|
|acn|string|false|none|Australian Company Number|
|accountId|integer(int32)|false|none|none|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|averageIncome|number(currency)|false|none|none|
|bookingSource|string|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|branch|string|false|none|none|
|city|string|false|none|none|
|cityMaster|string|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|code|string|false|none|none|
|competitorMaster|string|false|none|none|
|competitorMasterId|integer(int32)|false|none|none|
|contact|string|false|none|none|
|contactPosition|string|false|none|none|
|country|string|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|creditHold|boolean|false|none|none|
|creditLimit|number(decimal)|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|hideRateFromCorrespondence|boolean|false|none|none|
|inactive|boolean|false|none|none|
|inactiveReason|string|false|none|none|
|industryMasterId|integer(int32)|false|none|none|
|lastVisit|string(date-time)|false|none|none|
|modifiedById|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|notes|string|false|none|none|
|numberOfVisits|integer(int32)|false|none|none|
|parentId|integer(int32)|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|resType|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|sendARToHeadOffice|string|false|none|none|
|state|string|false|none|none|
|totalIncome|number(currency)|false|none|none|
|tradingAs|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|webAddress|string|false|none|none|

<h2 id="tocS_companiesRatesAssignmentsFull">companiesRatesAssignmentsFull</h2>
<!-- backwards compatibility -->
<a id="schemacompaniesratesassignmentsfull"></a>
<a id="schema_companiesRatesAssignmentsFull"></a>
<a id="tocScompaniesratesassignmentsfull"></a>
<a id="tocscompaniesratesassignmentsfull"></a>

```json
{
  "id": 7,
  "companyId": 1,
  "fromDate": "2024-08-02 00:00:00",
  "toDate": "2024-12-02 00:00:00",
  "rateId": 1,
  "rateName": "BAR",
  "propertyId": 1,
  "propertyName": "Test Property 1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|rateId|integer(int32)|false|none|none|
|rateName|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|

<h2 id="tocS_companyPatch">companyPatch</h2>
<!-- backwards compatibility -->
<a id="schemacompanypatch"></a>
<a id="schema_companyPatch"></a>
<a id="tocScompanypatch"></a>
<a id="tocscompanypatch"></a>

```json
{
  "address1": "123 Main St",
  "address2": "Apt 4B",
  "address3": "",
  "city": "Springfield",
  "postcode": "12345",
  "countryid": 1,
  "state": "IL",
  "abn": "123456789",
  "accounttypeid": 2,
  "acn": "987654321",
  "averageincome": 55000,
  "billingnote": "Billing cycle is monthly",
  "bookingsourceid": 3,
  "citymasterid": 4,
  "code": "SPR001",
  "contact": "John Doe",
  "contactposition": "Manager",
  "credithold": false,
  "competitormasterid": 5,
  "creditlimit": 10000,
  "email": "john.doe@example.com",
  "fax": "123-456-7890",
  "given": "John",
  "hideratefromcorrespondence": true,
  "inactive": false,
  "industrymasterid": 6,
  "markettypeid": 7,
  "name": "Doe Enterprises",
  "notes": "Preferred customer",
  "phone": "123-456-7890",
  "reservationTypeId": 8,
  "sendartoheadoffice": true,
  "surname": "Doe",
  "totalincome": 120000,
  "tradingas": "Doe & Co.",
  "userdefined1": "Custom Field 1",
  "userdefined2": "Custom Field 2",
  "userdefined3": "Custom Field 3",
  "userdefined4": "Custom Field 4",
  "userdefined5": "Custom Field 5",
  "userrepid": 9
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|city|string|false|none|none|
|postcode|string|false|none|none|
|countryid|integer(integer)|false|none|none|
|state|string|false|none|none|
|abn|string|false|none|none|
|accounttypeid|integer(integer)|false|none|none|
|acn|string|false|none|none|
|averageincome|number|false|none|none|
|billingnote|string|false|none|none|
|bookingsourceid|integer(integer)|false|none|none|
|citymasterid|integer(integer)|false|none|none|
|code|string|false|none|none|
|contact|string|false|none|none|
|contactposition|string|false|none|none|
|credithold|boolean|false|none|none|
|competitormasterid|integer(integer)|false|none|none|
|creditlimit|number|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|given|string|false|none|none|
|hideratefromcorrespondence|boolean|false|none|none|
|inactive|boolean|false|none|none|
|industrymasterid|integer(integer)|false|none|none|
|markettypeid|integer(integer)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|phone|string|false|none|none|
|reservationTypeId|integer(integer)|false|none|none|
|sendartoheadoffice|boolean|false|none|none|
|surname|string|false|none|none|
|totalincome|number|false|none|none|
|tradingas|string|false|none|none|
|userdefined1|string|false|none|none|
|userdefined2|string|false|none|none|
|userdefined3|string|false|none|none|
|userdefined4|string|false|none|none|
|userdefined5|string|false|none|none|
|userrepid|integer(integer)|false|none|none|

<h2 id="tocS_creditHoldBasic">creditHoldBasic</h2>
<!-- backwards compatibility -->
<a id="schemacreditholdbasic"></a>
<a id="schema_creditHoldBasic"></a>
<a id="tocScreditholdbasic"></a>
<a id="tocscreditholdbasic"></a>

```json
{
  "creditHold": true,
  "creditLimit": 0,
  "creditTerms": 0,
  "groupingId": 0,
  "id": 0,
  "propertyId": 0
}

```

Used:<br>GET /companies/{id}/accountsReceivable<br>POST /companies/{id}/accountsReceivable<br>PUT /companies/{id}/accountsReceivable/{arId}<br>GET /travelAgents/{id}/accountsReceivable<br>POST /travelAgents/{id}/accountsReceivable<br>PUT /travelAgents/{id}/accountsReceivable/{arId}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditHold|boolean|false|none|none|
|creditLimit|number(currency)|false|none|none|
|creditTerms|integer(int32)|false|none|none|
|groupingId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_contact">contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|city|string|false|none|none|
|contactType|string|false|none|none|
|countryId|integer(int32)|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|given|string|false|none|none|
|groupingId|integer(int32)|false|none|none|
|mobile|string|false|none|none|
|modifiedById|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|pager|string|false|none|none|
|phoneAh|string|false|none|none|
|phoneBh|string|false|none|none|
|position|string|false|none|none|
|postcode|string|false|none|none|
|referenceId|string|false|none|none|
|relationship|integer(int32)|false|none|none|
|state|string|false|none|none|
|surname|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_notesResponse">notesResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotesresponse"></a>
<a id="schema_notesResponse"></a>
<a id="tocSnotesresponse"></a>
<a id="tocsnotesresponse"></a>

```json
{
  "id": 12,
  "propertyId": 1,
  "note": "Do not give suites to employees",
  "billingNote": "500 DLLS MAX. Maybe?"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|note|string|false|none|none|
|billingNote|string|false|none|none|

<h2 id="tocS_notes">notes</h2>
<!-- backwards compatibility -->
<a id="schemanotes"></a>
<a id="schema_notes"></a>
<a id="tocSnotes"></a>
<a id="tocsnotes"></a>

```json
{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|note|string|false|none|none|

<h2 id="tocS_chargeTypeLite">chargeTypeLite</h2>
<!-- backwards compatibility -->
<a id="schemachargetypelite"></a>
<a id="schema_chargeTypeLite"></a>
<a id="tocSchargetypelite"></a>
<a id="tocschargetypelite"></a>

```json
{
  "fromDate": "2023-05-31 00:00:00",
  "id": 1416,
  "name": "Testing Rate",
  "propertyId": 1,
  "toDate": "2023-08-31 00:00:00"
}

```

Used:<br>GET /companies/{id}/rates<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "ISOCountryCode": "AND",
  "id": 4,
  "name": "Andorra"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ISOCountryCode|string|false|none|none|
|id|integer|false|none|RMS static ID|
|name|string|false|none|none|

<h2 id="tocS_creditNote">creditNote</h2>
<!-- backwards compatibility -->
<a id="schemacreditnote"></a>
<a id="schema_creditNote"></a>
<a id="tocScreditnote"></a>
<a id="tocscreditnote"></a>

```json
{
  "id": 3,
  "name": "Coke Can",
  "assigned": true,
  "costPrice": 1,
  "currencyView": "Local Currency",
  "gLCodeName": "Accommodation Revenue",
  "gLCodeId": 0,
  "grouping": "Group 1",
  "groupingId": 1,
  "hasTaxes": true,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|assigned|boolean|false|none|none|
|costPrice|number(currency)|false|none|none|
|currencyView|string|false|none|none|
|gLCodeName|string|false|none|none|
|gLCodeId|integer(int32)|false|none|none|
|grouping|string|false|none|none|
|groupingId|integer(int32)|false|none|none|
|hasTaxes|boolean|false|none|none|
|inactive|boolean|false|none|none|
|secondCurrency|number(currency)|false|none|none|
|unitPrice|number(currency)|false|none|none|

<h2 id="tocS_discountBasic">discountBasic</h2>
<!-- backwards compatibility -->
<a id="schemadiscountbasic"></a>
<a id="schema_discountBasic"></a>
<a id="tocSdiscountbasic"></a>
<a id="tocsdiscountbasic"></a>

```json
{
  "id": 1,
  "name": "10% Discount",
  "availableToIbe": true,
  "description": "Customers will recieve 10% off total booking",
  "maximumNightStay": 0,
  "minimumNightStay": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|availableToIbe|boolean|false|none|none|
|description|string|false|none|none|
|maximumNightStay|integer(int32)|false|none|none|
|minimumNightStay|integer(int32)|false|none|none|

<h2 id="tocS_discountFull">discountFull</h2>
<!-- backwards compatibility -->
<a id="schemadiscountfull"></a>
<a id="schema_discountFull"></a>
<a id="tocSdiscountfull"></a>
<a id="tocsdiscountfull"></a>

```json
[
  {
    "availableToMembers": true,
    "glCodeId": 0,
    "glCodeType": "string",
    "discountType": "Percentage",
    "percentage": {
      "percentage": 0,
      "noGreaterThan": 0,
      "includePackage": true,
      "includeAdditionals": true,
      "appliesToTotalRate": true
    },
    "amount": {
      "amount": 0
    },
    "bogo": {
      "buyXNights": 0,
      "getXNights": 0,
      "getXNightsCycles": 0,
      "includeAdditionals": true
    },
    "totalOverride": {
      "firstXNights": 0,
      "totalCharge": 0,
      "includeAdditionals": true,
      "maxAdults": 0,
      "maxChildren": 0
    },
    "nightlyRateOverride": {
      "firstXNights": 0,
      "totalCharge": 0,
      "includeAdditionals": true
    },
    "availableToIbe": true,
    "description": "string",
    "minimumNightStay": 0,
    "maximumNightStay": 0,
    "id": 0,
    "name": "string"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountFull_inner](#schemadiscountfull_inner)]|false|none|none|

<h2 id="tocS_discountValidation">discountValidation</h2>
<!-- backwards compatibility -->
<a id="schemadiscountvalidation"></a>
<a id="schema_discountValidation"></a>
<a id="tocSdiscountvalidation"></a>
<a id="tocsdiscountvalidation"></a>

```json
{
  "discountId": 63,
  "name": "Validation Options Test",
  "propertyIds": [
    1,
    3
  ],
  "categoryIds": [
    1,
    29,
    52
  ],
  "validationDates": [
    {
      "propertyIds": [
        1,
        3
      ],
      "rateIds": [
        1119,
        1421,
        1425
      ],
      "reservationMadeFromDate": "2022-07-21 23:59:00",
      "reservationMadeToDate": "2022-09-05 23:59:59",
      "reservationMadePermanentFlag": false,
      "reservationStayingFromDate": "2022-07-21 23:59:00",
      "reservationStayingToDate": "2022-10-31 23:59:59",
      "reservationStayingPermanentFlag": false,
      "arrivingOnMonday": true,
      "arrivingOnTuesday": true,
      "arrivingOnWednesday": true,
      "arrivingOnThursday": true,
      "arrivingOnFriday": true,
      "arrivingOnSaturday": true,
      "arrivingOnSunday": true,
      "applyingOnMonday": true,
      "applyingOnTuesday": true,
      "applyingOnWednesday": true,
      "applyingOnThursday": true,
      "applyingOnFriday": true,
      "applyingOnSaturday": true,
      "applyingOnSunday": true
    },
    {
      "propertyIds": [
        1,
        3
      ],
      "rateIds": [
        1417
      ],
      "reservationMadeFromDate": "2048-09-14 00:00:00",
      "reservationMadeToDate": "2048-09-15 23:59:59",
      "reservationMadePermanentFlag": true,
      "reservationStayingFromDate": "2048-09-14 00:00:00",
      "reservationStayingToDate": "2048-09-14 23:59:59",
      "reservationStayingPermanentFlag": false,
      "arrivingOnMonday": true,
      "arrivingOnTuesday": true,
      "arrivingOnWednesday": true,
      "arrivingOnThursday": true,
      "arrivingOnFriday": true,
      "arrivingOnSaturday": true,
      "arrivingOnSunday": true,
      "applyingOnMonday": true,
      "applyingOnTuesday": true,
      "applyingOnWednesday": true,
      "applyingOnThursday": true,
      "applyingOnFriday": true,
      "applyingOnSaturday": true,
      "applyingOnSunday": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discountid|integer(int32)|false|none|none|
|name|string|false|none|none|
|categoryIds|[integer]|false|none|These are the Category ID's these validation options apply to|
|validationDates|[discountValidationSearchDates](#schemadiscountvalidationsearchdates)|false|none|none|

<h2 id="tocS_discountValidationSearchDates">discountValidationSearchDates</h2>
<!-- backwards compatibility -->
<a id="schemadiscountvalidationsearchdates"></a>
<a id="schema_discountValidationSearchDates"></a>
<a id="tocSdiscountvalidationsearchdates"></a>
<a id="tocsdiscountvalidationsearchdates"></a>

```json
{
  "propertyIds": [
    0
  ],
  "rateIds": [
    0
  ],
  "reservationMadeFromDate": "2019-08-24T14:15:22Z",
  "reservationMadeToDate": "2019-08-24T14:15:22Z",
  "reservationMadePermanentFlag": true,
  "reservationStayingFromDate": "2019-08-24T14:15:22Z",
  "reservationStayingToDate": "2019-08-24T14:15:22Z",
  "reservationStayingPermanentFlag": true,
  "arrivingOnMonday": true,
  "arrivingOnTuesday": true,
  "arrivingOnWednesday": true,
  "arrivingOnThursday": true,
  "arrivingOnFriday": true,
  "arrivingOnSaturday": true,
  "arrivingOnSunday": true,
  "applyingOnMonday": true,
  "applyingOnTuesday": true,
  "applyingOnWednesday": true,
  "applyingOnThursday": true,
  "applyingOnFriday": true,
  "applyingOnSaturday": true,
  "applyingOnSunday": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyIds|[integer]|false|none|These are the property ID's these validation options apply to|
|rateIds|[integer]|false|none|none|
|reservationMadeFromDate|string(date-time)|false|none|none|
|reservationMadeToDate|string(date-time)|false|none|none|
|reservationMadePermanentFlag|boolean|false|none|none|
|reservationStayingFromDate|string(date-time)|false|none|none|
|reservationStayingToDate|string(date-time)|false|none|none|
|reservationStayingPermanentFlag|boolean|false|none|none|
|arrivingOnMonday|boolean|false|none|none|
|arrivingOnTuesday|boolean|false|none|none|
|arrivingOnWednesday|boolean|false|none|none|
|arrivingOnThursday|boolean|false|none|none|
|arrivingOnFriday|boolean|false|none|none|
|arrivingOnSaturday|boolean|false|none|none|
|arrivingOnSunday|boolean|false|none|none|
|applyingOnMonday|boolean|false|none|none|
|applyingOnTuesday|boolean|false|none|none|
|applyingOnWednesday|boolean|false|none|none|
|applyingOnThursday|boolean|false|none|none|
|applyingOnFriday|boolean|false|none|none|
|applyingOnSaturday|boolean|false|none|none|
|applyingOnSunday|boolean|false|none|none|

<h2 id="tocS_discountValidationSearch">discountValidationSearch</h2>
<!-- backwards compatibility -->
<a id="schemadiscountvalidationsearch"></a>
<a id="schema_discountValidationSearch"></a>
<a id="tocSdiscountvalidationsearch"></a>
<a id="tocsdiscountvalidationsearch"></a>

```json
{
  "ids": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|

<h2 id="tocS_dwellingTypesPropertyRestriction">dwellingTypesPropertyRestriction</h2>
<!-- backwards compatibility -->
<a id="schemadwellingtypespropertyrestriction"></a>
<a id="schema_dwellingTypesPropertyRestriction"></a>
<a id="tocSdwellingtypespropertyrestriction"></a>
<a id="tocsdwellingtypespropertyrestriction"></a>

```json
{
  "dwellingId": 0,
  "dwellingName": "string",
  "groupingId": 0,
  "grouping": "string",
  "propertyRestrictions": [
    {
      "propertyId": 0,
      "maximum": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dwellingId|integer|false|none|none|
|dwellingName|string|false|none|none|
|groupingId|integer|false|none|none|
|grouping|string|false|none|none|
|propertyRestrictions|[[dwellingTypesPropertyRestriction_propertyRestrictions](#schemadwellingtypespropertyrestriction_propertyrestrictions)]|false|none|none|

<h2 id="tocS_towing">towing</h2>
<!-- backwards compatibility -->
<a id="schematowing"></a>
<a id="schema_towing"></a>
<a id="tocStowing"></a>
<a id="tocstowing"></a>

```json
{
  "id": 7,
  "name": "Sedan"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_financialInterfaceSetup">financialInterfaceSetup</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacesetup"></a>
<a id="schema_financialInterfaceSetup"></a>
<a id="tocSfinancialinterfacesetup"></a>
<a id="tocsfinancialinterfacesetup"></a>

```json
{
  "propertyId": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_financialInterfaceSetupResponse">financialInterfaceSetupResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacesetupresponse"></a>
<a id="schema_financialInterfaceSetupResponse"></a>
<a id="tocSfinancialinterfacesetupresponse"></a>
<a id="tocsfinancialinterfacesetupresponse"></a>

```json
{
  "propertyId": 0,
  "additionalInterface": [
    {
      "interface1": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "interface2": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "interface3": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "interface4": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "advancesLedger": [
    {
      "lessCreditsRefunded": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "lessCreditsUsed": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "plusNewCredits": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "guestLedger": [
    {
      "plusNewReservationCharges": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "lessPaidBalances": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "cityLedger": [
    {
      "lessCreditsUsed": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "lessPaidBalances": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "plusNewBalances": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "plusNewCredits": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "receipts": [
    {
      "cash": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "cheque": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "directCredit": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "directCredit2": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "otherCash": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "stats": [
    {
      "availableRooms": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "noShowRooms": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "occupiedRooms": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "outOfOrderRooms": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "totalRoomsInProperty": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "options": [
    {
      "amortiseTaxes": true,
      "serviceChargeNonTaxable": true
    }
  ],
  "cards": [
    {
      "cardId": 0,
      "name": "string",
      "card": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "eftPos": [
        {
          "code": "string",
          "description": "string"
        }
      ]
    }
  ],
  "periods": [
    {
      "fromDate": "2019-08-24T14:15:22Z",
      "toDate": "2019-08-24T14:15:22Z",
      "postingDate": "2019-08-24T14:15:22Z",
      "period": 0,
      "year": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|additionalInterface|[[financialInterfaceAdditional](#schemafinancialinterfaceadditional)]|false|none|none|
|advancesLedger|[[financialInterfaceAdvancesLedger](#schemafinancialinterfaceadvancesledger)]|false|none|none|
|guestLedger|[[financialInterfaceGuestLedger](#schemafinancialinterfaceguestledger)]|false|none|none|
|cityLedger|[[financialInterfaceCityLedger](#schemafinancialinterfacecityledger)]|false|none|none|
|receipts|[[financialInterfaceReceipts](#schemafinancialinterfacereceipts)]|false|none|none|
|stats|[[financialInterfaceStats](#schemafinancialinterfacestats)]|false|none|none|
|options|[[financialInterfaceOptionsTaxes](#schemafinancialinterfaceoptionstaxes)]|false|none|none|
|cards|[[financialInterfaceCardDetail](#schemafinancialinterfacecarddetail)]|false|none|none|
|periods|[[financialInterfacePeriods](#schemafinancialinterfaceperiods)]|false|none|none|

<h2 id="tocS_financialInterfaceAdditional">financialInterfaceAdditional</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfaceadditional"></a>
<a id="schema_financialInterfaceAdditional"></a>
<a id="tocSfinancialinterfaceadditional"></a>
<a id="tocsfinancialinterfaceadditional"></a>

```json
{
  "interface1": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "interface2": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "interface3": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "interface4": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interface1|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|interface2|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|interface3|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|interface4|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceCodeDesc">financialInterfaceCodeDesc</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacecodedesc"></a>
<a id="schema_financialInterfaceCodeDesc"></a>
<a id="tocSfinancialinterfacecodedesc"></a>
<a id="tocsfinancialinterfacecodedesc"></a>

```json
{
  "code": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_financialInterfaceAdvancesLedger">financialInterfaceAdvancesLedger</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfaceadvancesledger"></a>
<a id="schema_financialInterfaceAdvancesLedger"></a>
<a id="tocSfinancialinterfaceadvancesledger"></a>
<a id="tocsfinancialinterfaceadvancesledger"></a>

```json
{
  "lessCreditsRefunded": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "lessCreditsUsed": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "plusNewCredits": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lessCreditsRefunded|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|lessCreditsUsed|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|plusNewCredits|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceGuestLedger">financialInterfaceGuestLedger</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfaceguestledger"></a>
<a id="schema_financialInterfaceGuestLedger"></a>
<a id="tocSfinancialinterfaceguestledger"></a>
<a id="tocsfinancialinterfaceguestledger"></a>

```json
{
  "plusNewReservationCharges": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "lessPaidBalances": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plusNewReservationCharges|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|lessPaidBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceCityLedger">financialInterfaceCityLedger</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacecityledger"></a>
<a id="schema_financialInterfaceCityLedger"></a>
<a id="tocSfinancialinterfacecityledger"></a>
<a id="tocsfinancialinterfacecityledger"></a>

```json
{
  "lessCreditsUsed": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "lessPaidBalances": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "plusNewBalances": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "plusNewCredits": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lessCreditsUsed|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|lessPaidBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|plusNewBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|plusNewCredits|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceReceipts">financialInterfaceReceipts</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacereceipts"></a>
<a id="schema_financialInterfaceReceipts"></a>
<a id="tocSfinancialinterfacereceipts"></a>
<a id="tocsfinancialinterfacereceipts"></a>

```json
{
  "cash": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "cheque": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "directCredit": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "directCredit2": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "otherCash": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|cheque|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|directCredit|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|directCredit2|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|otherCash|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceStats">financialInterfaceStats</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacestats"></a>
<a id="schema_financialInterfaceStats"></a>
<a id="tocSfinancialinterfacestats"></a>
<a id="tocsfinancialinterfacestats"></a>

```json
{
  "availableRooms": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "noShowRooms": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "occupiedRooms": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "outOfOrderRooms": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "totalRoomsInProperty": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|noShowRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|occupiedRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|outOfOrderRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|totalRoomsInProperty|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfaceOptionsTaxes">financialInterfaceOptionsTaxes</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfaceoptionstaxes"></a>
<a id="schema_financialInterfaceOptionsTaxes"></a>
<a id="tocSfinancialinterfaceoptionstaxes"></a>
<a id="tocsfinancialinterfaceoptionstaxes"></a>

```json
{
  "amortiseTaxes": true,
  "serviceChargeNonTaxable": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amortiseTaxes|boolean|false|none|none|
|serviceChargeNonTaxable|boolean|false|none|none|

<h2 id="tocS_financialInterfaceCardDetail">financialInterfaceCardDetail</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacecarddetail"></a>
<a id="schema_financialInterfaceCardDetail"></a>
<a id="tocSfinancialinterfacecarddetail"></a>
<a id="tocsfinancialinterfacecarddetail"></a>

```json
{
  "cardId": 0,
  "name": "string",
  "card": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "eftPos": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardId|integer(int32)|false|none|none|
|name|string|false|none|none|
|card|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|eftPos|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|

<h2 id="tocS_financialInterfacePeriods">financialInterfacePeriods</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfaceperiods"></a>
<a id="schema_financialInterfacePeriods"></a>
<a id="tocSfinancialinterfaceperiods"></a>
<a id="tocsfinancialinterfaceperiods"></a>

```json
{
  "fromDate": "2019-08-24T14:15:22Z",
  "toDate": "2019-08-24T14:15:22Z",
  "postingDate": "2019-08-24T14:15:22Z",
  "period": 0,
  "year": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|postingDate|string(date-time)|false|none|none|
|period|integer(int32)|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_financialInterfaceTcodes">financialInterfaceTcodes</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacetcodes"></a>
<a id="schema_financialInterfaceTcodes"></a>
<a id="tocSfinancialinterfacetcodes"></a>
<a id="tocsfinancialinterfacetcodes"></a>

```json
{
  "propertyId": 3,
  "entityType": "eftpos"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|entityType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|notSet|
|entityType|glCode|
|entityType|marketSegment|
|entityType|mappings|
|entityType|receipts|
|entityType|creditCards|
|entityType|eftpos|
|entityType|statistics|

<h2 id="tocS_financialInterfaceTcodesResponse">financialInterfaceTcodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinancialinterfacetcodesresponse"></a>
<a id="schema_financialInterfaceTcodesResponse"></a>
<a id="tocSfinancialinterfacetcodesresponse"></a>
<a id="tocsfinancialinterfacetcodesresponse"></a>

```json
{
  "entityTypeId": 6,
  "entityType": "EFTPos",
  "entityId": 3,
  "entity": "Amex",
  "propertyId": 3,
  "t0": "AmexEFTT0",
  "t1": "AmexEFTT1",
  "t2": "AmexEFTT2",
  "t3": "AmexEFTT3",
  "t4": "AmexEFTT4",
  "t5": "AmexEFTT5",
  "t6": "AmexEFTT6",
  "t7": "AmexEFTT7",
  "t8": "AmexEFTT8",
  "t9": "AmexEFTT9"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityTypeId|integer(int32)|false|none|none|
|entityType|string|false|none|none|
|entityId|integer(int32)|false|none|none|
|entity|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|t0|string|false|none|none|
|t1|string|false|none|none|
|t2|string|false|none|none|
|t3|string|false|none|none|
|t4|string|false|none|none|
|t5|string|false|none|none|
|t6|string|false|none|none|
|t7|string|false|none|none|
|t8|string|false|none|none|
|t9|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|notSet|
|entityType|glCode|
|entityType|marketSegment|
|entityType|mappings|
|entityType|receipts|
|entityType|creditCards|
|entityType|eftpos|
|entityType|statistics|

<h2 id="tocS_glCodeBasic">glCodeBasic</h2>
<!-- backwards compatibility -->
<a id="schemaglcodebasic"></a>
<a id="schema_glCodeBasic"></a>
<a id="tocSglcodebasic"></a>
<a id="tocsglcodebasic"></a>

```json
{
  "id": 36,
  "name": "Tips/Restaurant",
  "glCode": "2-1210",
  "groupingId": 12,
  "includeInAccommodationRevenue\"": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|glCode|string|false|none|none|
|groupingId|integer|false|none|none|
|includeInAccommodationRevenue|boolean|false|none|none|

<h2 id="tocS_glCodeCreation">glCodeCreation</h2>
<!-- backwards compatibility -->
<a id="schemaglcodecreation"></a>
<a id="schema_glCodeCreation"></a>
<a id="tocSglcodecreation"></a>
<a id="tocsglcodecreation"></a>

```json
{
  "id": 0,
  "name": "Tips/Restaurant",
  "glCode": "2-1210",
  "groupingId": 12,
  "includeInAccommodationRevenue\"": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|glCode|string|false|none|none|
|groupingId|integer|false|none|none|
|includeInAccommodationRevenue|boolean|false|none|none|

<h2 id="tocS_guestSearch">guestSearch</h2>
<!-- backwards compatibility -->
<a id="schemaguestsearch"></a>
<a id="schema_guestSearch"></a>
<a id="tocSguestsearch"></a>
<a id="tocsguestsearch"></a>

```json
{
  "ids": [
    12,
    5,
    702
  ],
  "idFrom": 6,
  "idTo": 12,
  "accountIds": [
    1242,
    5985,
    702
  ],
  "clientType": "Not Set",
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "email": "john@gmail.com",
  "email2": "apisupport@rmscloud.com",
  "guestPropertyIds": "[1]",
  "given": "steve",
  "includeReservationIds": true,
  "includeSecondaryGuests": false,
  "loyaltyNumber": 3732,
  "membershipNumber": "04903a",
  "mobile": "0412345678",
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyIds": [
    1,
    5,
    2
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "surname": "smith",
  "surnameStartsWith": "S",
  "userDefinedFieldNumber": 1,
  "userDefinedFieldValue": "married"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|idFrom|integer(int32)|false|none|none|
|idTo|integer(int32)|false|none|none|
|accountIds|[integer]|false|none|none|
|clientType|string|false|none|none|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|email|string|false|none|none|
|email2|string|false|none|none|
|given|string|false|none|none|
|guestPropertyIds|[integer]|false|none|none|
|includeReservationIds|boolean|false|none|none|
|includeSecondaryGuests|boolean|false|none|none|
|loyaltyNumber|integer(int32)|false|none|none|
|membershipNumber|string|false|none|none|
|mobile|string|false|none|none|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|propertyIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|
|surname|string|false|none|none|
|surnameStartsWith|string|false|none|none|
|userDefinedFieldNumber|integer(int32)|false|none|none|
|userDefinedFieldValue|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|clientType|notSet|
|clientType|client|
|clientType|owner|

<h2 id="tocS_guestFull">guestFull</h2>
<!-- backwards compatibility -->
<a id="schemaguestfull"></a>
<a id="schema_guestFull"></a>
<a id="tocSguestfull"></a>
<a id="tocsguestfull"></a>

```json
{
  "id": 78,
  "abn": "012 659 65689",
  "addressLine1": "1540 Amsterdam Avenue",
  "addressLine2": "south",
  "addressLine3": "Westingham",
  "agreementDate": "2018-09-25 17:25:00",
  "anniversary": "2015-07-29 00:00:00",
  "arrivedFrom": "San Fran",
  "auxDocumentDate": "2018-09-26 10:25:00",
  "birthday": "1991-08-22 00:00:00",
  "bookingSourceId": 8,
  "blackList": true,
  "businessSegmentId": 9,
  "cardTypeId": 0,
  "ccConsent": true,
  "cityMasterId": 87,
  "companyId": 4,
  "countryArrivalDate": "2018-09-26 10:25:00",
  "countryOfBirthId": 8,
  "countryOfIdId": 8,
  "countryId": 8,
  "createdById": 5,
  "createdDate": "2016-03-02 09:00:56",
  "discountId": 53,
  "edmFilter1OptOut": true,
  "edmFilter2OptOut": true,
  "edmFilter3OptOut": true,
  "email": "test@rms.com.au",
  "email2": "test@rms.com.au",
  "emailOptOut": true,
  "employedInCountry": false,
  "externalRefId": "v1234568",
  "fax": "03 9568 69568",
  "frequentFlyerMembershipTypeId": 0,
  "gender": "X",
  "groupName": "Westinghouse",
  "gstFree": true,
  "guestAccountId": 8,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham",
  "guestStatusId": null,
  "guestTypeId": 1,
  "identificationTypeId": 74,
  "idIssueDate": "2018-09-25 17:25:00",
  "idTypeId": 1,
  "landingPortId": 11,
  "languageSpoken": "French Canadian",
  "languageSpokenId": 2,
  "lastAreaId": 15,
  "lastRateTypeId": 12,
  "lastVisit": "26-06-2016 00:12:00",
  "licenceExpiryDate": "2018-09-25 17:25:00",
  "licenceIssuedDate": "2018-09-25 17:25:00",
  "licenceNumber": "98685p",
  "longTerm": false,
  "loyaltyLevel": "Preetty Loyal",
  "loyaltyMembershipType": "Platinum",
  "loyaltyNumber": "55d",
  "marketingOptOut": true,
  "membershipNumber": "br12345",
  "mobile": "+614 586 659 77",
  "modifiedById": 50,
  "modifiedDate": "2017-07-12 15:12:00",
  "nationalityId": 8,
  "notes": "This is a nice guest",
  "numberOfVisits": 12,
  "otherName": "Smith",
  "passportExpiry": "2018-09-25 17:25:00",
  "passportId": "PT123698",
  "phoneAH": "03 5698 5698",
  "PhoneBH": "03 8986 5458",
  "phoneOptOut": true,
  "placeOfIssue": "Ueganda",
  "position": "CEO",
  "postcode": "1234E",
  "preference": "Clean room",
  "preferredAreaGroupid": null,
  "preferredAreaId": 14,
  "preferredPrintingLanguageId": 7,
  "privacyOptIn": false,
  "proceedingTo": "New York",
  "propertyId": 7,
  "propertyName": "test property",
  "registeredInCountry": false,
  "registrationAddress": "15, urik st",
  "registrationDate": "2017-07-12 15:12:00",
  "registrationNumber": "rrg4e8y7ye",
  "registrationOffice": "Head Office",
  "resTypeId": 8,
  "retailer": false,
  "rvLengthId": 9,
  "rvSlideId": 3,
  "rvTypeId": 2,
  "rvYear": 8,
  "salesPrioritiesId": 5,
  "smsOptOut": true,
  "state": "Victoria",
  "studentId": 246,
  "subResTypeId": 6,
  "subTitleId": 4,
  "tagId": 11,
  "title": "Dr.",
  "totalIncome": 45000,
  "towingId": 2,
  "town": "Bigennsville",
  "turnAwayId": 3,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 20",
  "userDefined11": "String 20",
  "userDefined12": "String 50",
  "userDefined13": true,
  "userDefined14": false,
  "userDefined15": "28-02-2019 00:00:00",
  "userDefined16": "28-02-2019 00:00:00",
  "vipCodesId": 14,
  "visaExpiry": "28-02-2019 00:00:00",
  "visaIssued": "28-02-2019 00:00:00",
  "visaNumber": "Jw123456",
  "visaIssuedPlace": "Paris",
  "visitPurposeId": 1,
  "webAddress": "www.cbf.com.au"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(in32)|false|none|none|
|abn|string|false|none|Australian Business Number|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|agreementDate|string(date-time)|false|none|none|
|anniversary|string|false|none|none|
|arrivedFrom|string|false|none|none|
|auxDocumentDate|string(date-time)|false|none|none|
|birthday|string(date-time)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|blackList|boolean|false|none|none|
|businessSegmentId|integer(int32)|false|none|none|
|cardTypeId|integer(int32)|false|none|none|
|ccConsent|boolean|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|countryArrivalDate|string(date-time)|false|none|none|
|countryOfBirthId|integer(int32)|false|none|none|
|countryOfIdId|integer(int32)|false|none|none|
|countryId|integer(int32)|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|discountId|integer(int32)|false|none|none|
|edmFilter1OptOut|boolean|false|none|none|
|edmFilter2OptOut|boolean|false|none|none|
|edmFilter3OptOut|boolean|false|none|none|
|email|string|false|none|none|
|email2|string|false|none|none|
|emailOptOut|boolean|false|none|none|
|employedInCountry|boolean|false|none|none|
|externalRefId|string|false|none|none|
|fax|string|false|none|none|
|frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|gender|string|false|none|none|
|groupName|string|false|none|none|
|gstFree|boolean|false|none|none|
|guestAccountId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|
|guestStatusId|integer(int32)|false|none|none|
|guestTypeId|integer(int32)|false|none|none|
|identificationTypeId|integer(int32)|false|none|none|
|idIssueDate|string(date-time)|false|none|none|
|idTypeId|integer(int32)|false|none|none|
|landingPortId|integer(int32)|false|none|none|
|languageSpoken|string|false|none|none|
|languageSpokenId|integer(int32)|false|none|none|
|lastAreaId|integer(int32)|false|none|none|
|lastRateTypeId|integer(int32)|false|none|none|
|lastVisitDate|string(date-time)|false|none|none|
|licenceExpiryDate|string(date-time)|false|none|none|
|licenceIssuedDate|string(date-time)|false|none|none|
|licenceNumber|string|false|none|none|
|longTerm|boolean|false|none|none|
|loyaltyLevel|string|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|loyaltyNumber|string|false|none|none|
|marketingOptOut|boolean|false|none|none|
|membershipNumber|string|false|none|none|
|mobile|string|false|none|none|
|modifiedById|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|nationalityId|integer(int32)|false|none|none|
|notes|string|false|none|none|
|numberOfVisits|integer(int32)|false|none|none|
|otherName|string|false|none|none|
|otaLoyaltyNumber|integer(int32)|false|none|none|
|passportExpiry|string(date-time)|false|none|none|
|passportId|string|false|none|none|
|phoneAH|string|false|none|none|
|PhoneBH|string|false|none|none|
|phoneOptOut|boolean|false|none|none|
|placeOfIssue|string|false|none|none|
|position|string|false|none|none|
|postcode|string|false|none|none|
|preference|string|false|none|none|
|preferredAreaGroupid|integer(int32)|false|none|none|
|preferredAreaId|integer(int32)|false|none|none|
|preferredPrintingLanguageId|integer(int32)|false|none|none|
|privacyOptIn|boolean|false|none|none|
|proceedingTo|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|registeredInCountry|boolean|false|none|none|
|registrationAddress|string|false|none|none|
|registrationDate|string(date-time)|false|none|none|
|registrationNumber|string|false|none|none|
|registrationOffice|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|retailer|boolean|false|none|none|
|rvLengthId|integer(int32)|false|none|none|
|rvSlideId|integer(int32)|false|none|none|
|rvTypeId|integer(int32)|false|none|none|
|rvYear|integer(int32)|false|none|none|
|salesPrioritiesId|integer(int32)|false|none|none|
|smsOptOut|boolean|false|none|none|
|state|string|false|none|none|
|studentId|integer(int32)|false|none|none|
|subResTypeId|integer(int32)|false|none|none|
|subTitleId|integer(int32)|false|none|none|
|tagId|integer(int32)|false|none|none|
|title|string|false|none|none|
|totalIncome|integer(decimal)|false|none|none|
|towingId|integer(int32)|false|none|none|
|town|string|false|none|none|
|turnAwayId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|string|false|none|none|
|userDefined12|string|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|boolean|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|userDefined16|string(date-time)|false|none|none|
|vipCodesId|integer(int32)|false|none|none|
|visitPurposeId|integer(int32)|false|none|none|
|visaExpiry|string(date-time)|false|none|none|
|visaIssued|string(date-time)|false|none|none|
|visaIssuedPlace|string|false|none|none|
|visaNumber|string|false|none|none|
|webAddress|string|false|none|none|

<h2 id="tocS_guestLite">guestLite</h2>
<!-- backwards compatibility -->
<a id="schemaguestlite"></a>
<a id="schema_guestLite"></a>
<a id="tocSguestlite"></a>
<a id="tocsguestlite"></a>

```json
{
  "id": 968,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|

<h2 id="tocS_guestPatch">guestPatch</h2>
<!-- backwards compatibility -->
<a id="schemaguestpatch"></a>
<a id="schema_guestPatch"></a>
<a id="tocSguestpatch"></a>
<a id="tocsguestpatch"></a>

```json
{
  "id": 78,
  "abn": "012 659 65689",
  "addressLine1": "1540 Amsterdam Avenue",
  "addressLine2": "south",
  "addressLine3": "Westingham",
  "agreementDate": "2018-09-25 17:25:00",
  "anniversary": "2015-07-25 00:00:00",
  "arrivedFrom": "San Fran",
  "auxDocumentDate": "2018-09-26 10:25:00",
  "birthday": "1991-08-22 00:00:00",
  "bookingSourceId": 8,
  "blackList": true,
  "businessSegmentId": 9,
  "cardTypeId": 0,
  "ccConsent": true,
  "cityMasterId": 87,
  "companyId": 4,
  "countryArrivalDate": "2018-09-26 10:25:00",
  "countryOfBirthId": 8,
  "countryOfIdId": 8,
  "countryId": 8,
  "createdById": 5,
  "createdDate": "2016-03-02 09:00:56",
  "discountId": 53,
  "edmFilter1OptOut": true,
  "edmFilter2OptOut": true,
  "edmFilter3OptOut": true,
  "email": "test@rms.com.au",
  "email2": "test@rms.com.au",
  "emailOptOut": true,
  "employedInCountry": false,
  "externalRefId": "v1234568",
  "fax": "03 9568 69568",
  "frequentFlyerMembershipTypeId": 0,
  "gender": "M",
  "groupName": "Westinghouse",
  "gstFree": true,
  "guestAccountId": 8,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham",
  "guestStatusId": null,
  "guestTypeId": 1,
  "identificationTypeId": 74,
  "idIssueDate": "2018-09-25 17:25:00",
  "idTypeId": 1,
  "landingPortId": 11,
  "languageSpoken": "French Canadian",
  "languageSpokenId": 2,
  "lastAreaId": 15,
  "lastRateTypeId": 12,
  "lastVisit": "26-06-2016 00:12:00",
  "licenceExpiryDate": "2018-09-25 17:25:00",
  "licenceIssuedDate": "2018-09-25 17:25:00",
  "licenceNumber": "98685p",
  "longTerm": false,
  "loyaltyLevel": "Preetty Loyal",
  "loyaltyMembershipType": "Platinum",
  "loyaltyNumber": "55d",
  "marketingOptOut": true,
  "membershipNumber": "br12345",
  "mobile": "+614 586 659 77",
  "modifiedById": 50,
  "modifiedDate": "2017-07-12 15:12:00",
  "nationalityId": 8,
  "notes": "This is a nice guest",
  "otherName": "Smith",
  "otaLoyaltyNumber": "98413",
  "passportExpiry": "2018-09-25 17:25:00",
  "passportId": "PT123698",
  "phoneAH": "03 5698 5698",
  "PhoneBH": "03 8986 5458",
  "phoneOptOut": true,
  "placeOfIssue": "Ueganda",
  "position": "CEO",
  "postcode": "1234E",
  "preference": "Clean room",
  "preferredAreaGroupid": null,
  "preferredAreaId": 14,
  "preferredPrintingLanguageId": 7,
  "privacyOptIn": false,
  "proceedingTo": "New York",
  "propertyId": 7,
  "propertyName": "test property",
  "registeredInCountry": false,
  "registrationAddress": "15, urik st",
  "registrationDate": "2017-07-12 15:12:00",
  "registrationNumber": "rrg4e8y7ye",
  "registrationOffice": "Head Office",
  "resTypeId": 8,
  "retailer": false,
  "salesPrioritiesId": 5,
  "smsOptOut": true,
  "state": "Victoria",
  "studentId": 246,
  "subResTypeId": 6,
  "subTitleId": 4,
  "tagId": 11,
  "title": "Dr.",
  "towingId": 2,
  "town": "Bigennsville",
  "turnAwayId": 3,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 20",
  "userDefined11": "String 20",
  "userDefined12": "String 50",
  "userDefined13": true,
  "userDefined14": false,
  "userDefined15": "28-02-2019 00:00:00",
  "userDefined16": "28-02-2019 00:00:00",
  "vipCodesId": 14,
  "visaExpiry": "28-02-2019 00:00:00",
  "visaIssued": "28-02-2019 00:00:00",
  "visaNumber": "Jw123456",
  "visaIssuedPlace": "Paris",
  "visitPurposeId": 1,
  "webAddress": "www.cbf.com.au"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(in32)|false|none|none|
|abn|string|false|none|Australian Business Number|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|anniversary|string|false|none|none|
|agreementDate|string(date-time)|false|none|none|
|arrivedFrom|string|false|none|none|
|auxDocumentDate|string(date-time)|false|none|none|
|birthday|string(date-time)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|blackList|boolean|false|none|none|
|businessSegmentId|integer(int32)|false|none|none|
|cardTypeId|integer(int32)|false|none|none|
|ccConsent|boolean|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|countryArrivalDate|string(date-time)|false|none|none|
|countryOfBirthId|integer(int32)|false|none|none|
|countryOfIdId|integer(int32)|false|none|none|
|countryId|integer(int32)|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|discountId|integer(int32)|false|none|none|
|edmFilter1OptOut|boolean|false|none|none|
|edmFilter2OptOut|boolean|false|none|none|
|edmFilter3OptOut|boolean|false|none|none|
|email|string|false|none|none|
|email2|string|false|none|none|
|emailOptOut|boolean|false|none|none|
|employedInCountry|boolean|false|none|none|
|externalRefId|string|false|none|none|
|fax|string|false|none|none|
|frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|gender|string|false|none|none|
|groupName|string|false|none|none|
|gstFree|boolean|false|none|none|
|guestAccountId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|
|guestStatusId|integer(int32)|false|none|none|
|guestTypeId|integer(int32)|false|none|none|
|identificationTypeId|integer(int32)|false|none|none|
|idIssueDate|string(date-time)|false|none|none|
|idTypeId|integer(int32)|false|none|none|
|landingPortId|integer(int32)|false|none|none|
|languageSpoken|string|false|none|none|
|languageSpokenId|integer(int32)|false|none|none|
|lastAreaId|integer(int32)|false|none|none|
|lastRateTypeId|integer(int32)|false|none|none|
|lastVisitDate|string(date-time)|false|none|none|
|licenceExpiryDate|string(date-time)|false|none|none|
|licenceIssuedDate|string(date-time)|false|none|none|
|licenceNumber|string|false|none|none|
|longTerm|boolean|false|none|none|
|loyaltyLevel|string|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|loyaltyNumber|string|false|none|none|
|marketingOptOut|boolean|false|none|none|
|membershipNumber|string|false|none|none|
|mobile|string|false|none|none|
|modifiedById|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|nationalityId|integer(int32)|false|none|none|
|notes|string|false|none|none|
|otherName|string|false|none|none|
|otaLoyaltyNumber|integer(int32)|false|none|none|
|passportExpiry|string(date-time)|false|none|none|
|passportId|string|false|none|none|
|phoneAH|string|false|none|none|
|PhoneBH|string|false|none|none|
|phoneOptOut|boolean|false|none|none|
|placeOfIssue|string|false|none|none|
|position|string|false|none|none|
|postcode|string|false|none|none|
|preference|string|false|none|none|
|preferredAreaGroupid|integer(int32)|false|none|none|
|preferredAreaId|integer(int32)|false|none|none|
|preferredPrintingLanguageId|integer(int32)|false|none|none|
|privacyOptIn|boolean|false|none|none|
|proceedingTo|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|registeredInCountry|boolean|false|none|none|
|registrationAddress|string|false|none|none|
|registrationDate|string(date-time)|false|none|none|
|registrationNumber|string|false|none|none|
|registrationOffice|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|retailer|boolean|false|none|none|
|salesPrioritiesId|integer(int32)|false|none|none|
|smsOptOut|boolean|false|none|none|
|state|string|false|none|none|
|studentId|integer(int32)|false|none|none|
|subResTypeId|integer(int32)|false|none|none|
|subTitleId|integer(int32)|false|none|none|
|tagId|integer(int32)|false|none|none|
|title|string|false|none|none|
|towingId|integer(int32)|false|none|none|
|town|string|false|none|none|
|turnAwayId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|string|false|none|none|
|userDefined12|string|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|boolean|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|userDefined16|string(date-time)|false|none|none|
|vipCodesId|integer(int32)|false|none|none|
|visitPurposeId|integer(int32)|false|none|none|
|visaExpiry|string(date-time)|false|none|none|
|visaIssued|string(date-time)|false|none|none|
|visaIssuedPlace|string|false|none|none|
|visaNumber|string|false|none|none|
|webAddress|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|

<h2 id="tocS_guestDwelling">guestDwelling</h2>
<!-- backwards compatibility -->
<a id="schemaguestdwelling"></a>
<a id="schema_guestDwelling"></a>
<a id="tocSguestdwelling"></a>
<a id="tocsguestdwelling"></a>

```json
{
  "lengthId": 8,
  "slideId": 7,
  "typeId": 2,
  "year": "1989",
  "towingId": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthId|integer(int32)|false|none|none|
|slideId|integer(int32)|false|none|none|
|typeId|integer(int32)|false|none|none|
|year|integer(int32)|false|none|none|
|towingId|integer(int32)|false|none|none|

<h2 id="tocS_guestContract">guestContract</h2>
<!-- backwards compatibility -->
<a id="schemaguestcontract"></a>
<a id="schema_guestContract"></a>
<a id="tocSguestcontract"></a>
<a id="tocsguestcontract"></a>

```json
{
  "accountId": 64984,
  "areaId": 4,
  "categoryId": 4,
  "contractNumber": 265,
  "contractType": "Standard",
  "dwellingSalesNumber": 15,
  "ownedFromDate": "2018-09-26 10:25:00",
  "ownedToDate": "2020-09-26 10:25:00",
  "percentageShare": 100,
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|contractId|integer(int32)|false|none|none|
|contractType|string|false|none|none|
|dwellingSalesNumber|integer(int32)|false|none|none|
|ownedFromDate|string(date-time)|false|none|none|
|ownedToDate|string(date-time)|false|none|none|
|percentageShare|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_guestLoyaltyPoints">guestLoyaltyPoints</h2>
<!-- backwards compatibility -->
<a id="schemaguestloyaltypoints"></a>
<a id="schema_guestLoyaltyPoints"></a>
<a id="tocSguestloyaltypoints"></a>
<a id="tocsguestloyaltypoints"></a>

```json
{
  "guestId": 31,
  "points": "500",
  "enrolled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|points|string|false|none|none|
|enrolled|boolean|false|none|none|

<h2 id="tocS_guestArraySearch">guestArraySearch</h2>
<!-- backwards compatibility -->
<a id="schemaguestarraysearch"></a>
<a id="schema_guestArraySearch"></a>
<a id="tocSguestarraysearch"></a>
<a id="tocsguestarraysearch"></a>

```json
{
  "ids": [
    6548,
    2243,
    9879
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|This call is limitied to only allow you to pass 50 guest ID's per call|

<h2 id="tocS_guestContracts">guestContracts</h2>
<!-- backwards compatibility -->
<a id="schemaguestcontracts"></a>
<a id="schema_guestContracts"></a>
<a id="tocSguestcontracts"></a>
<a id="tocsguestcontracts"></a>

```json
{
  "guestId": 564566,
  "contracts": [
    {
      "accountId": 64984,
      "areaId": 4,
      "categoryId": 4,
      "contractNumber": 265,
      "contractType": "Standard",
      "dwellingSalesNumber": 15,
      "ownedFromDate": "2018-09-26 10:25:00",
      "ownedToDate": "2020-09-26 10:25:00",
      "percentageShare": 100,
      "propertyId": 1
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|contracts|[[guestContract](#schemaguestcontract)]|false|none|none|

<h2 id="tocS_correspondenceSignature">correspondenceSignature</h2>
<!-- backwards compatibility -->
<a id="schemacorrespondencesignature"></a>
<a id="schema_correspondenceSignature"></a>
<a id="tocScorrespondencesignature"></a>
<a id="tocscorrespondencesignature"></a>

```json
{
  "caption": "Signature",
  "id": 5,
  "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|none|
|id|integer(int32)|false|none|none|
|url:|string|false|none|none|

<h2 id="tocS_mealCard">mealCard</h2>
<!-- backwards compatibility -->
<a id="schemamealcard"></a>
<a id="schema_mealCard"></a>
<a id="tocSmealcard"></a>
<a id="tocsmealcard"></a>

```json
{
  "id": 72,
  "cardId": "99986a",
  "companyId": 8,
  "expiryDate": "2018-09-25 17:25:00",
  "guestId": 11457,
  "mealsAllowed": "Both",
  "mealsCustom": "Breakfast",
  "propertyId": 1,
  "startingDate": "2018-08-25 17:25:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|cardId|string|false|none|none|
|companyId|integer(int32)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|guestId|integer|false|none|none|
|mealsAllowed|string|false|none|none|
|mealsCustom|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|startingDate|string(date-time)|false|none|none|

<h2 id="tocS_guestIdArraySearch">guestIdArraySearch</h2>
<!-- backwards compatibility -->
<a id="schemaguestidarraysearch"></a>
<a id="schema_guestIdArraySearch"></a>
<a id="tocSguestidarraysearch"></a>
<a id="tocsguestidarraysearch"></a>

```json
{
  "guestIds": [
    6548,
    2243,
    9879
  ],
  "dateFrom": "2019-01-01",
  "dateTo": "2021-08-01"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|

<h2 id="tocS_guestsIdRMSPayPaymentSession">guestsIdRMSPayPaymentSession</h2>
<!-- backwards compatibility -->
<a id="schemaguestsidrmspaypaymentsession"></a>
<a id="schema_guestsIdRMSPayPaymentSession"></a>
<a id="tocSguestsidrmspaypaymentsession"></a>
<a id="tocsguestsidrmspaypaymentsession"></a>

```json
{
  "sessionId": "a62a99d521a545d5a8a4ac16e089e84e",
  "cardSummary": "8431",
  "paymentMethod": "amex",
  "merchantReference": "RMSTEST",
  "cardHolderName": "John Smith",
  "cardId": 0,
  "transactionReference": "H67QJJK27PRRVS65",
  "expiryDate": "3/2030",
  "token": "RMS_E9BCA96E1E|N5N6L8VTVC8QZ375",
  "success": true,
  "surchargeAmount": 12
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|false|none|none|
|cardSummary|string|false|none|none|
|paymentMethod|string|false|none|none|
|merchantReference|string|false|none|none|
|cardHolderName|string|false|none|none|
|cardId|integer|false|none|none|
|transactionReference|string|false|none|none|
|expiryDate|string|false|none|none|
|token|string|false|none|none|
|success|boolean|false|none|none|
|surchargeAmount|number|false|none|none|

<h2 id="tocS_rmsPayTokenRequest">rmsPayTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemarmspaytokenrequest"></a>
<a id="schema_rmsPayTokenRequest"></a>
<a id="tocSrmspaytokenrequest"></a>
<a id="tocsrmspaytokenrequest"></a>

```json
{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}

```

Used:<br>POST /guests/{id}/rmsPayPayment<br>POST /guests/{id}/rmsPayToken<br>POST /guests/{id}/rmsPayToken/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPaymentMethods|[string]|false|none|allowPaymentMethods is an optional field|
|amount|number(currency)|true|none|none|
|currencyCode|string|false|none|none|
|locale|string|false|none|locale is an optional field|
|merchantReference|string|true|none|none|
|notifyURL|string|false|none|none|
|propertyId|integer(int32)|true|none|none|
|redirectURL|string|true|none|none|
|skip3DS|boolean|false|none|none|
|disableCCsurcharge|boolean|false|none|none|

<h2 id="tocS_rmsPayTokenResponse">rmsPayTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemarmspaytokenresponse"></a>
<a id="schema_rmsPayTokenResponse"></a>
<a id="tocSrmspaytokenresponse"></a>
<a id="tocsrmspaytokenresponse"></a>

```json
{
  "success": true,
  "redirectURL": "https://testapp8.rmscloud.com/RMSPay/?sessionId=54f654tyt98yyt8888",
  "message": "Success"
}

```

Used:<br>POST /guests/{id}/rmsPayPayment<br>POST /guests/{id}/rmsPayToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|redirectURL|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_guestsIdRMSPayTokenPreAuthExistingToken">guestsIdRMSPayTokenPreAuthExistingToken</h2>
<!-- backwards compatibility -->
<a id="schemaguestsidrmspaytokenpreauthexistingtoken"></a>
<a id="schema_guestsIdRMSPayTokenPreAuthExistingToken"></a>
<a id="tocSguestsidrmspaytokenpreauthexistingtoken"></a>
<a id="tocsguestsidrmspaytokenpreauthexistingtoken"></a>

```json
{
  "propertyId": 1,
  "merchantReference": "REST1493",
  "token": "RMS_32AFA78637|CV7P4WF9G8J96GV5",
  "amount": 3,
  "reservationId": 216974
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|true|none|none|
|merchantReference|string|true|none|none|
|token|string|true|none|none|
|amount|number|true|none|none|
|reservationId|integer|true|none|none|

<h2 id="tocS_rmsPayTokenSearchRequest">rmsPayTokenSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemarmspaytokensearchrequest"></a>
<a id="schema_rmsPayTokenSearchRequest"></a>
<a id="tocSrmspaytokensearchrequest"></a>
<a id="tocsrmspaytokensearchrequest"></a>

```json
{
  "merchantReference": "string",
  "propertyId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantReference|string|true|none|none|
|propertyId|integer(int32)|true|none|none|

<h2 id="tocS_guestRMSPayToken">guestRMSPayToken</h2>
<!-- backwards compatibility -->
<a id="schemaguestrmspaytoken"></a>
<a id="schema_guestRMSPayToken"></a>
<a id="tocSguestrmspaytoken"></a>
<a id="tocsguestrmspaytoken"></a>

```json
{
  "cardHolderName": "",
  "cardId": 1,
  "cardType": "Visa",
  "description": "Wifes Card",
  "expiryDate": "03/30",
  "lastFourDigitsOfCard": "1000",
  "propertyId": 1,
  "token": "948534hkfdhklfhkwefuhkl",
  "tokenId": 38967,
  "tokenType": "Token"
}

```

Used:<br>POST guests/{id}/rmsPayToken/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolderName|string|false|none|none|
|cardId|integer(int32)|false|none|none|
|cardType|string|false|none|none|
|description|string|false|none|none|
|expiryDate|string|false|none|none|
|lastFourDigitsOfCard|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|token|string|false|none|none|
|tokenId|integer(int32)|false|none|none|
|tokenType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenType|Token|
|tokenType|PreAuth|

<h2 id="tocS_rmsPayTerminals">rmsPayTerminals</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminals"></a>
<a id="schema_rmsPayTerminals"></a>
<a id="tocSrmspayterminals"></a>
<a id="tocsrmspayterminals"></a>

```json
{
  "id": 23,
  "propertyId": "4",
  "propertyName": "(RMSPAY)- Internal DB",
  "stationNumber": "V400m-347312406",
  "description": "RMSPay Termin"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|propertyId|string|true|none|none|
|propertyName|string|true|none|none|
|stationNumber|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_rmsPayTerminalsAbort">rmsPayTerminalsAbort</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalsabort"></a>
<a id="schema_rmsPayTerminalsAbort"></a>
<a id="tocSrmspayterminalsabort"></a>
<a id="tocsrmspayterminalsabort"></a>

```json
{
  "success": true,
  "token": "RMS_122264948|SLXC55WJRLDN2S65",
  "transactionReference": "PYgD001717721634000.SNS7HB9FBVS49W65",
  "cardType": "MasterCard",
  "cardExpiry": "02/28"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|token|string|false|none|none|
|transactionReference|string|false|none|none|
|cardType|string|false|none|none|
|cardExpiry|string|false|none|none|

<h2 id="tocS_rmsPayTerminalsPreAuth">rmsPayTerminalsPreAuth</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalspreauth"></a>
<a id="schema_rmsPayTerminalsPreAuth"></a>
<a id="tocSrmspayterminalspreauth"></a>
<a id="tocsrmspayterminalspreauth"></a>

```json
{
  "propertyId": 4,
  "terminalId": 20,
  "merchantReference": "AB123",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100,
  "amount": 50
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|true|none|none|
|terminalId|integer|true|none|none|
|merchantReference|string|false|none|none|
|notifyURL|string|false|none|none|
|stationNumber|string|true|none|none|
|guestId|integer|true|none|none|
|reservationId|integer|true|none|none|
|amount|integer|true|none|none|

<h2 id="tocS_rmsPayTerminalsTokenResponse">rmsPayTerminalsTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalstokenresponse"></a>
<a id="schema_rmsPayTerminalsTokenResponse"></a>
<a id="tocSrmspayterminalstokenresponse"></a>
<a id="tocsrmspayterminalstokenresponse"></a>

```json
{
  "success": true,
  "token": "RMS_771259547|S8WKS7NPWBM6GVT5",
  "transactionReference": "Tm76001735255452007.W425T5HJ9W5X8N82",
  "cardType": "MasterCard",
  "cardHolderName": "AD YEN-JP",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB123",
  "cardExpiry": "02/28",
  "surchargeAmount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|token|string|false|none|none|
|transactionReference|string|false|none|none|
|cardType|string|false|none|none|
|lastFourDigitsOfCard|integer|false|none|none|
|merchantReference|string|false|none|none|
|cardExpiry|string|false|none|none|
|cardHolderName|string|false|none|none|
|surchargeAmount|integer|false|none|none|

<h2 id="tocS_rmsPayTerminalsSale">rmsPayTerminalsSale</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalssale"></a>
<a id="schema_rmsPayTerminalsSale"></a>
<a id="tocSrmspayterminalssale"></a>
<a id="tocsrmspayterminalssale"></a>

```json
{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "amount": "1",
  "stationNumber": "V400m-347312398",
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "reservationId": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|true|none|none|
|accountId|integer|true|none|none|
|terminalId|integer|true|none|none|
|amount|string|true|none|none|
|stationNumber|string|true|none|none|
|merchantReference|string|false|none|none|
|reservationId|integer|false|none|none|
|notifyURL|string|false|none|none|

<h2 id="tocS_rmsPayTerminalsSaleResponse">rmsPayTerminalsSaleResponse</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalssaleresponse"></a>
<a id="schema_rmsPayTerminalsSaleResponse"></a>
<a id="tocSrmspayterminalssaleresponse"></a>
<a id="tocsrmspayterminalssaleresponse"></a>

```json
{
  "success": true,
  "token": "RMS_753796809|ZDZ4T6D7PGLF6975",
  "transactionReference": "PYgD001724643741003.K779PTXBNTGLNK82",
  "merchantReference": "testMerchantRef",
  "cardType": "MasterCard",
  "cardExpiry": "02/28",
  "cardHolderName": "rms",
  "receiptData": [
    "name=RMS%20Global&key=header1",
    "name=Harrick%20Rd%20PASSED&key=header2",
    "name=CARDHOLDER%20COPY&key=cardholderHeader",
    "key=filler",
    "name=Date&value=26%2f08%2f2024&key=txdate",
    "name=Time&value=13%3a42%3a27&key=txtime",
    "key=filler",
    "name=Card&value=%2a%2a%2a%2a9999&key=pan",
    "name=PAN%20seq.&value=33&key=panSeq",
    "name=Pref.%20name&value=mc%20en%20gbr%20gbp&key=preferredName",
    "name=Card%20type&value=mc&key=cardType",
    "name=Payment%20method&value=mc&key=paymentMethod",
    "name=Payment%20variant&value=mc&key=paymentMethodVariant",
    "name=Entry%20mode&value=Contactless%20chip&key=posEntryMode",
    "key=filler",
    "name=AID&value=A000000004101001&key=aid",
    "name=MID&value=50&key=mid",
    "name=TID&value=V400m-347312398&key=tid",
    "name=PTID&value=79973193&key=ptid",
    "key=filler",
    "name=Auth.%20code&value=123456&key=authCode",
    "name=Tender&value=PYgD001724643741003&key=txRef",
    "name=Reference&value=11207_testMerchantRef&key=mref",
    "key=filler",
    "name=Type&value=GOODS_SERVICES&key=txtype",
    "name=TOTAL&value=%24%204.06&key=totalAmount",
    "key=filler",
    "name=APPROVED&key=approved",
    "key=filler",
    "name=Retain%20for%20your%20records&key=retain",
    "name=Thank%20you&key=thanks"
  ],
  "surchargeAmount": 0,
  "lastFourDigitsOfCard": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|token|string|false|none|none|
|transactionReference|string|false|none|none|
|merchantReference|string|false|none|none|
|cardType|string|false|none|none|
|cardExpiry|string|false|none|none|
|cardHolderName|string|false|none|none|
|receiptData|[string]|false|none|none|
|surchargeAmount|integer(decimal)|false|none|none|
|lastFourDigitsOfCard|string|false|none|none|

<h2 id="tocS_rmsPayTerminalsToken">rmsPayTerminalsToken</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalstoken"></a>
<a id="schema_rmsPayTerminalsToken"></a>
<a id="tocSrmspayterminalstoken"></a>
<a id="tocsrmspayterminalstoken"></a>

```json
{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|true|none|none|
|accountId|integer|true|none|none|
|terminalId|integer|true|none|none|
|merchantReference|string|true|none|none|
|notifyURL|string|false|none|none|
|stationNumber|string|true|none|none|
|guestId|integer|true|none|none|
|reservationId|integer|false|none|none|

<h2 id="tocS_rmsPayTerminalsStatus">rmsPayTerminalsStatus</h2>
<!-- backwards compatibility -->
<a id="schemarmspayterminalsstatus"></a>
<a id="schema_rmsPayTerminalsStatus"></a>
<a id="tocSrmspayterminalsstatus"></a>
<a id="tocsrmspayterminalsstatus"></a>

```json
{
  "success": true,
  "token": "RMS_682233020|ZBDB3J2SH5XBZX65",
  "transactionReference": "Tm76001735255452007.W425T5HJ9W5X8N82",
  "cardType": "Visa",
  "lastFourDigitsOfCard": "0001",
  "cardExpiry": "03/30",
  "surchargeAmount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|token|string|false|none|none|
|transactionReference|string|false|none|none|
|cardType|string|false|none|none|
|lastFourDigitsOfCard|string|false|none|none|
|cardExpiry|string|false|none|none|
|surchargeAmount|integer(decimal)|false|none|none|

<h2 id="tocS_guestTokenSagePay">guestTokenSagePay</h2>
<!-- backwards compatibility -->
<a id="schemaguesttokensagepay"></a>
<a id="schema_guestTokenSagePay"></a>
<a id="tocSguesttokensagepay"></a>
<a id="tocsguesttokensagepay"></a>

```json
{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "relatedSecurityKey": "XXXXXXXXX",
  "relatedTxAuthno": "5555555555",
  "relatedVendorTxCode": "XXXPAYMENT-1556613026-815551635",
  "relatedVPSTxId": "9C7AC5AB-XXXX-XXXX-35B6-DECB9E946D59",
  "token": "erer78er9+er3er6r3fedfr"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolderName|string|false|none|none|
|cardType|string|false|none|none|
|description|string|false|none|none|
|expiryDate|string|false|none|You must pass the date in the fromat MM/YY for it to work|
|lastFourDigitsOfCard|integer|false|none|Day value will be ignored|
|relatedSecurityKey|string|false|none|none|
|relatedTxAuthno|string|false|none|none|
|relatedVendorTxCode|string|false|none|none|
|relatedVPSTxId|string|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_guestToken">guestToken</h2>
<!-- backwards compatibility -->
<a id="schemaguesttoken"></a>
<a id="schema_guestToken"></a>
<a id="tocSguesttoken"></a>
<a id="tocsguesttoken"></a>

```json
{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "merchantReference": "AB12",
  "propertyId": 1,
  "token": "erer78er9+er3er6r3fedfr"
}

```

Used:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolderName|string|false|none|none|
|cardType|string|false|none|none|
|description|string|false|none|none|
|expiryDate|string|false|none|You must pass the date in the fromat MM/YY for it to work|
|lastFourDigitsOfCard|string|false|none|Some gateways only require last 2 digits. in these cases append with ..|
|merchantReference|string|false|none|none|
|propertyId|integer(int32)|false|none|The property ID the reservation is associated to|
|token|string|false|none|none|

<h2 id="tocS_guestsTokenPreAuth">guestsTokenPreAuth</h2>
<!-- backwards compatibility -->
<a id="schemagueststokenpreauth"></a>
<a id="schema_guestsTokenPreAuth"></a>
<a id="tocSgueststokenpreauth"></a>
<a id="tocsgueststokenpreauth"></a>

```json
{
  "cardType": "Visa",
  "cardHolderName": "AD YEN",
  "expiryDate": "03/30",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB12",
  "token": "RMS_XXXXX",
  "propertyId": 1,
  "reservationId": 225540,
  "preAuthAmount": 120,
  "transactionReference": "XXXXXX"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardType|string|false|none|none|
|cardHolderName|string|false|none|none|
|expiryDate|string|false|none|none|
|lastFourDigitsOfCard|string|false|none|none|
|merchantReference|string|false|none|none|
|token|string|false|none|none|
|propertyId|integer|false|none|none|
|reservationId|integer|false|none|none|
|preAuthAmount|number(float)|false|none|none|
|transactionReference|string|false|none|none|

<h2 id="tocS_guestsLoyaltyNightsEnrollment">guestsLoyaltyNightsEnrollment</h2>
<!-- backwards compatibility -->
<a id="schemaguestsloyaltynightsenrollment"></a>
<a id="schema_guestsLoyaltyNightsEnrollment"></a>
<a id="tocSguestsloyaltynightsenrollment"></a>
<a id="tocsguestsloyaltynightsenrollment"></a>

```json
{
  "guestId": 155,
  "loyaltyNumber": "4569"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|loyaltyNumber|string|false|none|none|

<h2 id="tocS_guestLoyaltySpendEnrolment">guestLoyaltySpendEnrolment</h2>
<!-- backwards compatibility -->
<a id="schemaguestloyaltyspendenrolment"></a>
<a id="schema_guestLoyaltySpendEnrolment"></a>
<a id="tocSguestloyaltyspendenrolment"></a>
<a id="tocsguestloyaltyspendenrolment"></a>

```json
{
  "guestId": 155,
  "address1": "15",
  "address2": "somthing rd",
  "given": "Steven",
  "surname": "Peters",
  "postCode": "3045",
  "town": "keilor",
  "state": "Vic",
  "mobile": 61458596548,
  "birthday": "2018-09-27 00:00:00",
  "email": "apisupport@rmscloud.com",
  "loyaltyNumber": "4569"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|address1|string|false|none|none|
|address2|string|false|none|none|
|given|string|false|none|none|
|surname|string|false|none|none|
|postCode|string|false|none|none|
|town|string|false|none|none|
|state|string|false|none|none|
|mobile|string|false|none|none|
|birthday|string(date-time)|false|none|none|
|email|string|false|none|none|
|loyaltyNumber|string|false|none|none|

<h2 id="tocS_guestLoyaltySpend">guestLoyaltySpend</h2>
<!-- backwards compatibility -->
<a id="schemaguestloyaltyspend"></a>
<a id="schema_guestLoyaltySpend"></a>
<a id="tocSguestloyaltyspend"></a>
<a id="tocsguestloyaltyspend"></a>

```json
{
  "activity": "sign up credit",
  "amount": -25,
  "date": "2018-09-27",
  "description": "Credit note 2",
  "totalSpendForCalanderYear": 12632,
  "username": "*hp"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|string|false|none|none|
|amount|number|false|none|none|
|date|string(date-time)|false|none|none|
|description|string|false|none|none|
|totalSpendForCalanderYear|number|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_guestLoyaltySpendBalance">guestLoyaltySpendBalance</h2>
<!-- backwards compatibility -->
<a id="schemaguestloyaltyspendbalance"></a>
<a id="schema_guestLoyaltySpendBalance"></a>
<a id="tocSguestloyaltyspendbalance"></a>
<a id="tocsguestloyaltyspendbalance"></a>

```json
{
  "guestId": 150595,
  "loyaltyNumber": 150595,
  "currentCredit": 0,
  "currentSpend": 0,
  "remainingSpend": 1818.5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|loyaltyNumber|integer(int32)|false|none|none|
|currentCredit|number(currency)|false|none|none|
|currentSpend|number(currency)|false|none|none|
|remainingSpend|number(currency)|false|none|none|

<h2 id="tocS_guestGiftCard">guestGiftCard</h2>
<!-- backwards compatibility -->
<a id="schemaguestgiftcard"></a>
<a id="schema_guestGiftCard"></a>
<a id="tocSguestgiftcard"></a>
<a id="tocsguestgiftcard"></a>

```json
{
  "amount": 10,
  "giftCardId": 2,
  "guestId": 150595,
  "propertId": 1,
  "remainingAmount": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(number)|false|none|none|
|giftCardId|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|propertId|integer(int32)|false|none|none|
|remainingAmount|integer(number)|false|none|none|

<h2 id="tocS_guestCreditSearch">guestCreditSearch</h2>
<!-- backwards compatibility -->
<a id="schemaguestcreditsearch"></a>
<a id="schema_guestCreditSearch"></a>
<a id="tocSguestcreditsearch"></a>
<a id="tocsguestcreditsearch"></a>

```json
{
  "ids": [
    141029,
    149503,
    150595
  ],
  "propertId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_guestCreditSearchResponse">guestCreditSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaguestcreditsearchresponse"></a>
<a id="schema_guestCreditSearchResponse"></a>
<a id="tocSguestcreditsearchresponse"></a>
<a id="tocsguestcreditsearchresponse"></a>

```json
{
  "propertyId": 1,
  "guestId": 141029,
  "amount": 7,
  "remainingAmount": 7,
  "description": "Receipt #283826",
  "accountId": 386,
  "transactionId": 11
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|amount|integer(int32)|false|none|none|
|remainingAmount|integer(int32)|false|none|none|
|description|string|false|none|none|
|accountId|integer(int32)|false|none|none|
|transactionId|integer(int32)|false|none|none|

<h2 id="tocS_guestCredit">guestCredit</h2>
<!-- backwards compatibility -->
<a id="schemaguestcredit"></a>
<a id="schema_guestCredit"></a>
<a id="tocSguestcredit"></a>
<a id="tocsguestcredit"></a>

```json
{
  "accountId": 346613,
  "amount": -50,
  "description": "Credit Note 2022",
  "guestId": 150595,
  "propertId": 1,
  "remainingAmount": -50,
  "transactionId": 223
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|none|
|amount|integer(number)|false|none|none|
|description|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|remainingAmount|integer(number)|false|none|none|
|transactionId|integer(int32)|false|none|none|

<h2 id="tocS_guestMembershipBasic">guestMembershipBasic</h2>
<!-- backwards compatibility -->
<a id="schemaguestmembershipbasic"></a>
<a id="schema_guestMembershipBasic"></a>
<a id="tocSguestmembershipbasic"></a>
<a id="tocsguestmembershipbasic"></a>

```json
{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}

```

Used:<br>GET /guests/{id}/memberships<br>POST /guests/{id}/memberships<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestId|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|membershipTypeId|integer(int32)|false|none|none|
|membershipTypeName|string|false|none|none|
|number|string|false|none|none|

<h2 id="tocS_roles">roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

```json
[
  {
    "id": 1,
    "description": "Capitain"
  },
  {
    "id": 2,
    "description": "Crew"
  },
  {
    "id": 3,
    "description": "Cleaners"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_guestStatus">guestStatus</h2>
<!-- backwards compatibility -->
<a id="schemagueststatus"></a>
<a id="schema_guestStatus"></a>
<a id="tocSgueststatus"></a>
<a id="tocsgueststatus"></a>

```json
{
  "id": 1,
  "name": "Citizen"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_guestTypes">guestTypes</h2>
<!-- backwards compatibility -->
<a id="schemaguesttypes"></a>
<a id="schema_guestTypes"></a>
<a id="tocSguesttypes"></a>
<a id="tocsguesttypes"></a>

```json
{
  "id": 1,
  "name": "Staff"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_groupAllotmentsLite">groupAllotmentsLite</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentslite"></a>
<a id="schema_groupAllotmentsLite"></a>
<a id="tocSgroupallotmentslite"></a>
<a id="tocsgroupallotmentslite"></a>

```json
{
  "id": 1,
  "name": "Wedding"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_groupAllotmentsBasic">groupAllotmentsBasic</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentsbasic"></a>
<a id="schema_groupAllotmentsBasic"></a>
<a id="tocSgroupallotmentsbasic"></a>
<a id="tocsgroupallotmentsbasic"></a>

```json
{
  "id": 1,
  "name": "Wedding",
  "address1": "35 fake street",
  "address2": "West chester",
  "address3": "North",
  "bookingSourceId": 5,
  "city": "Melbourne",
  "cityMasterId": 68,
  "competitorMasterId": 32,
  "countryId": 2,
  "createdById": 23,
  "createdDate": "2018-09-05 13:05:00",
  "email": "test@rscom.au",
  "externalRefId": "b985698",
  "fax": "03 9882 5998",
  "inactive": true,
  "inactiveReason": "Out of business",
  "industryMasterId": 4,
  "marketSegmentId": 3,
  "modifiedDate": "2018-09-05 13:25:00",
  "phone": "+614 555 986 98",
  "postcode": "9568",
  "propertyId": 1,
  "salesSourceId": 1,
  "state": "Vic",
  "subMarketSegmentId": 5,
  "tradingAs": "Webster enco"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|city|string|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|competitorMasterId|integer(int32)|false|none|none|
|countryId|integer(int32)|false|none|none|
|createdById|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|email|string|false|none|none|
|externalRefId|string|false|none|none|
|fax|string|false|none|none|
|inactive|boolean|false|none|none|
|inactiveReason|string|false|none|none|
|industryMasterId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|salesSource|string|false|none|none|
|state|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|tradingAs|string|false|none|none|

<h2 id="tocS_groupAllotmentsAllotments">groupAllotmentsAllotments</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentsallotments"></a>
<a id="schema_groupAllotmentsAllotments"></a>
<a id="tocSgroupallotmentsallotments"></a>
<a id="tocsgroupallotmentsallotments"></a>

```json
[
  {
    "name": "Cheers",
    "availableFor": [
      "tuesday",
      "wednesday",
      "friday"
    ],
    "categoryAllotment": [
      {
        "propertyId": 1,
        "allotment": 10,
        "allotmentId": 1242,
        "categoryId": 1,
        "categoryName": "Deluxe 001",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      },
      {
        "propertyId": 1,
        "allotment": 5,
        "allotmentId": 1243,
        "categoryId": 3,
        "categoryName": "Deluxe 003",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      },
      {
        "propertyId": 1,
        "allotment": 9,
        "allotmentId": 1244,
        "categoryId": 1,
        "categoryName": "Deluxe 001",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      },
      {
        "propertyId": 1,
        "allotment": 5,
        "allotmentId": 1245,
        "categoryId": 2,
        "categoryName": "Deluxe 002",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      }
    ]
  },
  {
    "reportingADR": [
      {
        "categoryId": "4,",
        "reportingADR": 200
      },
      {
        "categoryId": "2,",
        "reportingADR": 200
      }
    ],
    "daysBeforeRelease": 40,
    "discountId": 3,
    "discountReasonId": 2,
    "doNotSellAboveAllotment": true,
    "fromDate": "2019-07-01 00:00:00",
    "groupOptionId": 82,
    "groupStatus": "proposal",
    "guaranteed": true,
    "rateId": 1,
    "setPermanently": false,
    "toDate": "2019-07-03 00:00:00"
  },
  {
    "reportingADR": [
      {
        "categoryId": "6,",
        "reportingADR": 100
      },
      {
        "categoryId": "1,",
        "reportingADR": 100
      }
    ]
  },
  {
    "name": "Special 2",
    "availableFor": [
      "wednesday",
      "friday"
    ],
    "categoryAllotment": [
      {
        "allotment": 6,
        "categoryId": 1,
        "categoryName": "Deluxe 001",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      },
      {
        "allotment": 2,
        "categoryId": 3,
        "categoryName": "Deluxe 003",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      },
      {
        "allotment": 3,
        "categoryId": 4,
        "categoryName": "Deluxe 004",
        "fromDate": "2020-04-07 00:00:00",
        "toDate": "2020-04-07 00:00:00"
      }
    ],
    "daysBeforeRelease": 0,
    "discountId": 0,
    "discountReasonId": 0,
    "doNotSellAboveAllotment": true,
    "fromDate": "2019-07-03 00:00:00",
    "groupStatus": "provisional",
    "guaranteed": false,
    "rateId": 3,
    "releaseDate": "2019-07-03 00:00:00",
    "releaseOptions": "releaseDate",
    "setPermanently": false,
    "toDate": "2019-07-04 00:00:00"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|availableFor|[string]|false|none|none|
|categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|daysBeforeRelease|integer(int32)|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|doNotSellAboveAllotment|boolean|false|none|none|
|fromDate|string(date-time)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupStatus|string|false|none|none|
|guaranteed|boolean|false|none|If true this will detuct fron inventory|
|rateId|integer(int32)|false|none|none|
|releaseDate|string(date-time)|false|none|none|
|releaseOptions|string|false|none|none|
|setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|toDate|string(date-time)|false|none|none|
|reportingADR|[integer]|false|none|none|
|categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<h2 id="tocS_groupAllotmentCategoryAllotment">groupAllotmentCategoryAllotment</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentcategoryallotment"></a>
<a id="schema_groupAllotmentCategoryAllotment"></a>
<a id="tocSgroupallotmentcategoryallotment"></a>
<a id="tocsgroupallotmentcategoryallotment"></a>

```json
{
  "propertyId": 0,
  "allotment": 0,
  "allotmentId": 0,
  "categoryId": 0,
  "categoryName": "string",
  "fromDate": "2019-08-24T14:15:22Z",
  "toDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|allotment|integer(int32)|false|none|none|
|allotmentId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_groupAllotmentDetails">groupAllotmentDetails</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentdetails"></a>
<a id="schema_groupAllotmentDetails"></a>
<a id="tocSgroupallotmentdetails"></a>
<a id="tocsgroupallotmentdetails"></a>

```json
{
  "availableFor": [
    "tuesday",
    "wednesday",
    "friday"
  ],
  "categoryAllotment": [
    {
      "allotment": 10,
      "categoryId": 1,
      "categoryName": "Cat A",
      "fromDate": "2020-04-07 00:00:00",
      "propertyId": 1,
      "toDate": "2020-04-07 00:00:00"
    },
    {
      "allotment": 5,
      "categoryId": 3,
      "categoryName": "Cat C",
      "fromDate": "2020-04-07 00:00:00",
      "propertyId": 1,
      "toDate": "2020-04-07 00:00:00"
    },
    {
      "allotment": 9,
      "categoryId": 1,
      "categoryName": "Cat A",
      "fromDate": "2020-04-07 00:00:00",
      "propertyId": 1,
      "toDate": "2020-04-07 00:00:00"
    },
    {
      "allotment": 5,
      "categoryId": 2,
      "categoryName": "Cat B",
      "fromDate": "2020-04-07 00:00:00",
      "propertyId": 1,
      "toDate": "2020-04-07 00:00:00"
    }
  ],
  "daysBeforeRelease": 40,
  "discountId": 3,
  "discountReasonId": 2,
  "doNotSellAboveAllotment": true,
  "fromDate": "2019-07-01 00:00:00",
  "groupAllotmentId": 0,
  "groupStatus": "proposal",
  "guaranteed": true,
  "name": "Cheers",
  "toDate": "2019-07-03 00:00:00",
  "rateId": 1,
  "releaseDate": "2019-07-03 00:00:00",
  "releaseMethod": "specificDate",
  "setPermanently": false
}

```

Used:<br>POST /groupAllotments/{id}/allotments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableFor|[string]|false|none|none|
|categoryAllotment|[[groupAllotmentCategory](#schemagroupallotmentcategory)]|false|none|[Used:<br>POST /groupAllotments/{id}/allotments]|
|daysBeforeRelease|integer(int32)|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|doNotSellAboveAllotment|boolean|false|none|none|
|fromDate|string(date-time)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupStatus|string|false|none|none|
|guaranteed|boolean|false|none|If true this will detuct fron inventory|
|name|string|true|none|none|
|toDate|string(date-time)|false|none|none|
|rateId|integer(int32)|true|none|none|
|releaseDate|string(date-time)|false|none|none|
|releaseMethod|string|false|none|none|
|setPermanently|boolean|false|none|If this is set to true the date from and to values will be ignored and this allotment will exist forever|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseMethod|daysBefore|
|releaseMethod|specificDate|

<h2 id="tocS_groupAllotmentCategory">groupAllotmentCategory</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentcategory"></a>
<a id="schema_groupAllotmentCategory"></a>
<a id="tocSgroupallotmentcategory"></a>
<a id="tocsgroupallotmentcategory"></a>

```json
{
  "allotment": 2,
  "allotmentId": 7564,
  "categoryId": 4,
  "categoryName": "Test",
  "fromDate": "20-07-2020",
  "propertyId": 1,
  "toDate": "20-08-2020"
}

```

Used:<br>POST /groupAllotments/{id}/allotments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment|integer(int32)|false|none|none|
|allotmentId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|fromDate|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_groupAllotmentCategoryAllotmentUpdates">groupAllotmentCategoryAllotmentUpdates</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentcategoryallotmentupdates"></a>
<a id="schema_groupAllotmentCategoryAllotmentUpdates"></a>
<a id="tocSgroupallotmentcategoryallotmentupdates"></a>
<a id="tocsgroupallotmentcategoryallotmentupdates"></a>

```json
{
  "allotment": 2,
  "allotmentId": 7564,
  "categoryId": 4,
  "fromDate": "20-07-2020",
  "toDate": "20-08-2020",
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment|integer(int32)|false|none|none|
|allotmentId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_groupAllotmentOptionPatch">groupAllotmentOptionPatch</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentoptionpatch"></a>
<a id="schema_groupAllotmentOptionPatch"></a>
<a id="tocSgroupallotmentoptionpatch"></a>
<a id="tocsgroupallotmentoptionpatch"></a>

```json
{
  "availableFor": [
    "Friday",
    "Tuesday"
  ],
  "daysBeforeRelease": 40,
  "discountId": 3,
  "discountReasonId": 2,
  "doNotSellAboveAllotment": false,
  "fromDate": "2019-07-01 00:00:00",
  "groupStatus": "Proposal",
  "guaranteed": false,
  "name": "Special 2",
  "rateId": 1,
  "releaseDate": "2019-07-03 00:00:00",
  "releaseMethod": "specificDate",
  "setPermanently": false,
  "toDate": "2019-07-04 00:00:00",
  "reportingADR": [
    {
      "categoryId": "4,",
      "reportingADR": 200
    },
    {
      "categoryId": "2,",
      "reportingADR": 200
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableFor|[string]|false|none|none|
|daysBeforeRelease|integer(int32)|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|doNotSellAboveAllotment|boolean|false|none|none|
|fromDate|string(date-time)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupStatus|string|false|none|none|
|guaranteed|boolean|false|none|none|
|name|string|false|none|none|
|rateId|integer(int32)|false|none|none|
|releaseDate|string(date-time)|false|none|none|
|releaseMethod|string|false|none|none|
|setPermanently|boolean|false|none|none|
|toDate|string(date-time)|false|none|none|
|reportingADR|[integer]|false|none|none|
|categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|NotSet|
|groupStatus|Proposal|
|groupStatus|Provisional|
|groupStatus|Definite|
|releaseMethod|daysBefore|
|releaseMethod|specificDate|

<h2 id="tocS_groupAllotmentCategoryAllotmentCreation">groupAllotmentCategoryAllotmentCreation</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentcategoryallotmentcreation"></a>
<a id="schema_groupAllotmentCategoryAllotmentCreation"></a>
<a id="tocSgroupallotmentcategoryallotmentcreation"></a>
<a id="tocsgroupallotmentcategoryallotmentcreation"></a>

```json
{
  "allotment": 0,
  "categoryId": 4,
  "fromDate": "20-07-2020",
  "toDate": "20-08-2020"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_groupAllotmentRequirementArray">groupAllotmentRequirementArray</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentrequirementarray"></a>
<a id="schema_groupAllotmentRequirementArray"></a>
<a id="tocSgroupallotmentrequirementarray"></a>
<a id="tocsgroupallotmentrequirementarray"></a>

```json
{
  "amount": 15,
  "id": 66326,
  "masterRequirementId": 6119,
  "name": "Much Cheddar",
  "quantity": 1,
  "requiredDaily": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|id|integer(int32)|false|none|none|
|masterRequirementId|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|

<h2 id="tocS_groupAllotmentRequirementCreation">groupAllotmentRequirementCreation</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentrequirementcreation"></a>
<a id="schema_groupAllotmentRequirementCreation"></a>
<a id="tocSgroupallotmentrequirementcreation"></a>
<a id="tocsgroupallotmentrequirementcreation"></a>

```json
{
  "amount": 0,
  "masterRequirementId": 51339,
  "name": "Super Soft Body Pillow",
  "quantity": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|masterRequirementId|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|integer(int32)|false|none|none|

<h2 id="tocS_groupAllotmentRequirement">groupAllotmentRequirement</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentrequirement"></a>
<a id="schema_groupAllotmentRequirement"></a>
<a id="tocSgroupallotmentrequirement"></a>
<a id="tocsgroupallotmentrequirement"></a>

```json
{
  "amount": 15,
  "id": 66326,
  "masterRequirementId": 6119,
  "name": "Much Cheddar",
  "quantity": 1,
  "requiredDaily": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|id|integer(int32)|false|none|none|
|masterRequirementId|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|

<h2 id="tocS_groupAllotmentsGroupOptionsRates">groupAllotmentsGroupOptionsRates</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentsgroupoptionsrates"></a>
<a id="schema_groupAllotmentsGroupOptionsRates"></a>
<a id="tocSgroupallotmentsgroupoptionsrates"></a>
<a id="tocsgroupallotmentsgroupoptionsrates"></a>

```json
{
  "rateIds": [
    1416,
    1633
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateIds|[integer]|false|none|none|

<h2 id="tocS_allotmentSearch">allotmentSearch</h2>
<!-- backwards compatibility -->
<a id="schemaallotmentsearch"></a>
<a id="schema_allotmentSearch"></a>
<a id="tocSallotmentsearch"></a>
<a id="tocsallotmentsearch"></a>

```json
{
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "fromDate": "2022-09-27 00:00:00",
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyIds": [
    1,
    2
  ],
  "ids": [
    12,
    5,
    702
  ],
  "toDate": "2022-09-27 00:00:00"
}

```

Used:<br>POST /groupAllotments/allotments/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|ids|[integer]|false|none|none|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|propertyIds|[integer]|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_groupAllotmentCompanies">groupAllotmentCompanies</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentcompanies"></a>
<a id="schema_groupAllotmentCompanies"></a>
<a id="tocSgroupallotmentcompanies"></a>
<a id="tocsgroupallotmentcompanies"></a>

```json
{
  "id": 22,
  "name": "APT Group G1 11th & 12th Oct",
  "companyId": 44,
  "companyName": "Mians"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|companyId|integer(int32)|false|none|none|
|companyName|string|false|none|none|

<h2 id="tocS_companyIds">companyIds</h2>
<!-- backwards compatibility -->
<a id="schemacompanyids"></a>
<a id="schema_companyIds"></a>
<a id="tocScompanyids"></a>
<a id="tocscompanyids"></a>

```json
{
  "companyIds": [
    4,
    12,
    15
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyIds|[integer]|false|none|none|

<h2 id="tocS_groupAllotmentTravelAgents">groupAllotmentTravelAgents</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmenttravelagents"></a>
<a id="schema_groupAllotmentTravelAgents"></a>
<a id="tocSgroupallotmenttravelagents"></a>
<a id="tocsgroupallotmenttravelagents"></a>

```json
{
  "id": 0,
  "name": "string",
  "travelAgentId": 0,
  "travelAgentName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|travelAgentName|string|false|none|none|

<h2 id="tocS_groupAllotmentAgentRequest">groupAllotmentAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentagentrequest"></a>
<a id="schema_groupAllotmentAgentRequest"></a>
<a id="tocSgroupallotmentagentrequest"></a>
<a id="tocsgroupallotmentagentrequest"></a>

```json
{
  "agentIds": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentIds|[integer]|false|none|none|

<h2 id="tocS_groupAllotmentWholesalers">groupAllotmentWholesalers</h2>
<!-- backwards compatibility -->
<a id="schemagroupallotmentwholesalers"></a>
<a id="schema_groupAllotmentWholesalers"></a>
<a id="tocSgroupallotmentwholesalers"></a>
<a id="tocsgroupallotmentwholesalers"></a>

```json
{
  "id": 0,
  "name": "string",
  "wholesalerId": 0,
  "wholesalerName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|wholesalerId|integer(int32)|false|none|none|
|wholesalerName|string|false|none|none|

<h2 id="tocS_idTypes">idTypes</h2>
<!-- backwards compatibility -->
<a id="schemaidtypes"></a>
<a id="schema_idTypes"></a>
<a id="tocSidtypes"></a>
<a id="tocsidtypes"></a>

```json
[
  {
    "id": 1,
    "code": "ABC123",
    "shortDescription": "Type 1 Identifier",
    "description": "Detailed description for Type 1 Identifier."
  },
  {
    "id": 2,
    "code": "XYZ456",
    "shortDescription": "Type 2 Identifier",
    "description": "Detailed description for Type 2 Identifier."
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|code|string|false|none|none|
|shortDescription|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_inventoryGroupingsSearch">inventoryGroupingsSearch</h2>
<!-- backwards compatibility -->
<a id="schemainventorygroupingssearch"></a>
<a id="schema_inventoryGroupingsSearch"></a>
<a id="tocSinventorygroupingssearch"></a>
<a id="tocsinventorygroupingssearch"></a>

```json
{
  "propertyId": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_inventoryGroupings">inventoryGroupings</h2>
<!-- backwards compatibility -->
<a id="schemainventorygroupings"></a>
<a id="schema_inventoryGroupings"></a>
<a id="tocSinventorygroupings"></a>
<a id="tocsinventorygroupings"></a>

```json
{
  "id": 1,
  "billingCategoryId": 29,
  "categories": [
    {
      "categoryId": 28,
      "order": 1
    },
    {
      "categoryId": 29,
      "order": 2
    }
  ],
  "description": "Kings & Queens",
  "categoryId": 58,
  "propertyId": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|billingCategoryId|integer(int32)|false|none|none|
|categories|[[inventoryGroupingsCategories](#schemainventorygroupingscategories)]|false|none|none|
|description|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_inventoryGroupingsCategories">inventoryGroupingsCategories</h2>
<!-- backwards compatibility -->
<a id="schemainventorygroupingscategories"></a>
<a id="schema_inventoryGroupingsCategories"></a>
<a id="tocSinventorygroupingscategories"></a>
<a id="tocsinventorygroupingscategories"></a>

```json
[
  {
    "categoryId": 28,
    "order": 1
  },
  {
    "categoryId": 29,
    "order": 2
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|order|integer(int32)|false|none|none|

<h2 id="tocS_invoiceCancel">invoiceCancel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecancel"></a>
<a id="schema_invoiceCancel"></a>
<a id="tocSinvoicecancel"></a>
<a id="tocsinvoicecancel"></a>

```json
{
  "accountId": 361450,
  "invoiceId": 123,
  "propertyId": 1,
  "reasonId": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|none|
|invoiceId|integer(int32)|true|none|none|
|reasonId|integer(int32)|false|none|none|
|propertyId|integer(int32)|true|none|none|

<h2 id="tocS_invoiceCreate">invoiceCreate</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecreate"></a>
<a id="schema_invoiceCreate"></a>
<a id="tocSinvoicecreate"></a>
<a id="tocsinvoicecreate"></a>

```json
{
  "accountId": 5,
  "accountType": "Accomm"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|none|
|accountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|electric|
|accountType|extras|
|accountType|gas|
|accountType|kiosk|
|accountType|membership|
|accountType|pos|
|accountType|pabx|
|accountType|standard|
|accountType|water|

<h2 id="tocS_invoice">invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "id": 1269,
  "accountId": 12990785,
  "accountType": "Accomm",
  "cancelledDate": "1900-00-00 00:00:00",
  "guestId": 9984588,
  "companyId": 0,
  "createdDate": "2018-09-27 00:00:00",
  "invoiceAmount": 100,
  "propertyId": 2,
  "reservationId": 35421
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|accountType|string|false|none|none|
|cancelledDate|string(date-time)|false|none|if this field is populated with a real date then this invoice has been cancelled|
|guestId|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|invoiceAmount|integer(decimal)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|

<h2 id="tocS_invoiceSearch">invoiceSearch</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesearch"></a>
<a id="schema_invoiceSearch"></a>
<a id="tocSinvoicesearch"></a>
<a id="tocsinvoicesearch"></a>

```json
{
  "ids": [
    12,
    5,
    702
  ],
  "accountIds": [
    1242,
    5985,
    702
  ],
  "cancelledFrom": "2018-09-25 00:00:00",
  "cancelledTo": "2018-09-27 00:00:00",
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "propertyId": 1,
  "reservationIds": [
    12426,
    454566,
    646646
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|accountIds|[integer]|false|none|none|
|cancelledFrom|string(date-time)|false|none|none|
|cancelledTo|string(date-time)|false|none|none|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|reservationIds|[integer]|false|none|none|

<h2 id="tocS_invoiceEmail">invoiceEmail</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceemail"></a>
<a id="schema_invoiceEmail"></a>
<a id="tocSinvoiceemail"></a>
<a id="tocsinvoiceemail"></a>

```json
{
  "ids": [
    545456,
    45748
  ],
  "accountId": 6456545,
  "fromEmail": "test@test.com",
  "email": [
    "apisupport@rms.com.au",
    "apisupport@rmscloud.com"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|accountId|integer(int32)|false|none|none|
|fromEmail|string(email)|false|none|This field is optional, if this field is left empty we will send the email from the email configured under propertie options|
|email|[string]|false|none|none|

<h2 id="tocS_labelArea">labelArea</h2>
<!-- backwards compatibility -->
<a id="schemalabelarea"></a>
<a id="schema_labelArea"></a>
<a id="tocSlabelarea"></a>
<a id="tocslabelarea"></a>

```json
{
  "userDefined1": "Bill ID",
  "userDefined2": "Grandmas Name",
  "userDefined3": "Birth country",
  "userDefined4": "Spare key No",
  "userDefined5": "File No",
  "userDefined6": "Refrigerator id",
  "userDefined7": "Owner name",
  "userDefined8": "Ghost name",
  "userDefined9": "Pancake",
  "userDefined10": "Spoons"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|

<h2 id="tocS_labelAccounting">labelAccounting</h2>
<!-- backwards compatibility -->
<a id="schemalabelaccounting"></a>
<a id="schema_labelAccounting"></a>
<a id="tocSlabelaccounting"></a>
<a id="tocslabelaccounting"></a>

```json
{
  "account1": "Accomm",
  "account2": "Extras",
  "gas": "Gas",
  "electricity": "Elec",
  "water": "Water",
  "eftposManual": "EFTPOS",
  "eftposPaymentGateway": "EFTPOS Machine",
  "cash2": "Other Cash",
  "cash3": "Cash 3",
  "cash4": "Cash 4",
  "cash5": "Cash 5",
  "cheque2": "Other Cheque",
  "cheque3": "Cheque 3",
  "cheque4": "Cheque 4",
  "cheque5": "Cheque 5",
  "directCredit": "direct credit",
  "directCredit2": "direct credit 2",
  "directCredit3": "direct credit 3",
  "directCredit4": "direct credit 4",
  "directCredit5": "direct credit 5",
  "tax": "GST"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account1|string|false|none|none|
|account2|string|false|none|none|
|gas|string|false|none|none|
|electricity|string|false|none|none|
|water|string|false|none|none|
|eftposManual|string|false|none|none|
|eftposPaymentGateway|string|false|none|none|
|cash2|string|false|none|none|
|cash3|string|false|none|none|
|cash4|string|false|none|none|
|cash5|string|false|none|none|
|cheque2|string|false|none|none|
|cheque3|string|false|none|none|
|cheque4|string|false|none|none|
|cheque5|string|false|none|none|
|directCredit|string|false|none|none|
|directCredit2|string|false|none|none|
|directCredit3|string|false|none|none|
|directCredit4|string|false|none|none|
|directCredit5|string|false|none|none|
|tax|string|false|none|none|

<h2 id="tocS_labelAdditional">labelAdditional</h2>
<!-- backwards compatibility -->
<a id="schemalabeladditional"></a>
<a id="schema_labelAdditional"></a>
<a id="tocSlabeladditional"></a>
<a id="tocslabeladditional"></a>

```json
{
  "userDefined1": "Fancy Charge 1",
  "userDefined2": "Fancy Charge 2",
  "userDefined3": "Fancy Charge 3",
  "userDefined4": "Fancy Charge 4",
  "userDefined5": "Fancy Charge 5",
  "userDefined6": "Fancy Charge 6",
  "userDefined7": "Fancy Charge 7"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|

<h2 id="tocS_labelAsset">labelAsset</h2>
<!-- backwards compatibility -->
<a id="schemalabelasset"></a>
<a id="schema_labelAsset"></a>
<a id="tocSlabelasset"></a>
<a id="tocslabelasset"></a>

```json
{
  "userDefined1": "Computer",
  "userDefined2": "Gum",
  "userDefined3": "Phone",
  "userDefined4": "Spare keys",
  "userDefined5": "Calanders",
  "userDefined6": "Tissues",
  "userDefined7": "Bottles",
  "userDefined8": "Headsets",
  "userDefined9": "Pancake",
  "userDefined10": "Lip balm"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|

<h2 id="tocS_labelCategory">labelCategory</h2>
<!-- backwards compatibility -->
<a id="schemalabelcategory"></a>
<a id="schema_labelCategory"></a>
<a id="tocSlabelcategory"></a>
<a id="tocslabelcategory"></a>

```json
{
  "userDefined1": "Bill ID",
  "userDefined2": "Grandmas Name",
  "userDefined3": "Birth country",
  "userDefined4": "Spare key No",
  "userDefined5": "File No",
  "userDefined6": "Refrigerator id",
  "userDefined7": "Owner name",
  "userDefined8": "Ghost name",
  "userDefined9": "Pancake"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|

<h2 id="tocS_labelGuest">labelGuest</h2>
<!-- backwards compatibility -->
<a id="schemalabelguest"></a>
<a id="schema_labelGuest"></a>
<a id="tocSlabelguest"></a>
<a id="tocslabelguest"></a>

```json
{
  "userDefined1": "Computer IP",
  "userDefined2": "Mums address",
  "userDefined3": "Phone",
  "userDefined4": "Spare keys",
  "userDefined5": "Calanders",
  "userDefined6": "Tissues",
  "userDefined7": "Bottles",
  "userDefined8": "Headsets",
  "userDefined9": "Pancakes",
  "userDefined10": "Lip balm",
  "userDefined11": "breakfast",
  "userDefined12": "stationary kit",
  "userDefined13": false,
  "userDefined14": true,
  "userDefined15": "2018-08-25 17:25:00",
  "userDefined16": "2018-09-25 13:25:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|string|false|none|none|
|userDefined12|string|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|boolean|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|userDefined16|string(date-time)|false|none|none|

<h2 id="tocS_labelIbe">labelIbe</h2>
<!-- backwards compatibility -->
<a id="schemalabelibe"></a>
<a id="schema_labelIbe"></a>
<a id="tocSlabelibe"></a>
<a id="tocslabelibe"></a>

```json
{
  "accommodation": "Cabin",
  "dock": "Jetty",
  "site": "Site"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodation|string|false|none|none|
|dock|string|false|none|none|
|site|string|false|none|none|

<h2 id="tocS_labelProperty">labelProperty</h2>
<!-- backwards compatibility -->
<a id="schemalabelproperty"></a>
<a id="schema_labelProperty"></a>
<a id="tocSlabelproperty"></a>
<a id="tocslabelproperty"></a>

```json
{
  "userDefined1": "Computer",
  "userDefined2": "Gum",
  "userDefined3": "Phone",
  "userDefined4": "Spare keys",
  "userDefined5": "Calanders"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|

<h2 id="tocS_labelReservation">labelReservation</h2>
<!-- backwards compatibility -->
<a id="schemalabelreservation"></a>
<a id="schema_labelReservation"></a>
<a id="tocSlabelreservation"></a>
<a id="tocslabelreservation"></a>

```json
{
  "userDefined1": "Computer IP",
  "userDefined2": "Mums address",
  "userDefined3": "Phone",
  "userDefined4": "Spare keys",
  "userDefined5": "Calanders",
  "userDefined6": "Tissues",
  "userDefined7": "Bottles",
  "userDefined8": "Headsets",
  "userDefined9": "Pancakes",
  "userDefined10": "Lip balm",
  "userDefined11": false,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2018-08-25 17:25:00",
  "userDefined15": "2018-08-25 17:25:00",
  "userDefined16": "Blank"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|userDefined16|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|userDefined16|Blank|
|userDefined16|true|
|userDefined16|false|

<h2 id="tocS_labelSystem">labelSystem</h2>
<!-- backwards compatibility -->
<a id="schemalabelsystem"></a>
<a id="schema_labelSystem"></a>
<a id="tocSlabelsystem"></a>
<a id="tocslabelsystem"></a>

```json
{
  "abn": "ABN",
  "activity": "Exercise",
  "addOn": "Add Ons",
  "adult": "Adults",
  "area": "Room",
  "arrive": "Arrival",
  "bannedList": "Black List",
  "boat": "Jet Ski",
  "bookingSource": "bkg source",
  "businessSegment": "Business Segment",
  "category": "Room Type",
  "child": "Kids",
  "clientStatus": "Guest Status",
  "client": "Guest",
  "company": "Company",
  "companyUnknown": "Unknown",
  "coordinator1": "Coordinator 1",
  "coordinator2": "Coordinator 2",
  "depart": "Departing",
  "dwelling": "RV",
  "edmFilter1OptOut": "EDM Filter 1 Opt Out",
  "edmFilter2OptOut": "EDM Filter 2 Opt Out",
  "edmFilter3OptOut": "EDM Filter 3 Opt Out",
  "eventName": "Event Name",
  "given": "First",
  "groupName": "Group",
  "hold": "Reserve",
  "housekeeperNote": "Cleaning Note",
  "housekeepingUnitOfTime": "Min",
  "infant": "Infants",
  "loyalty": "Loyalty",
  "maintenance": "Out Of Order",
  "mealPlan": "Meal Plan",
  "occupant": "Occupant",
  "otaRef1": "Online Number",
  "otaRef2": "Customer number",
  "otaRef3": "Channel manager number",
  "postcode": "Zip Code",
  "postalCode": "Postal Sort",
  "privacyOptIn": "Privacy Opt In",
  "rate": "Rate",
  "resNote": "Reservation Notes",
  "resType": "Reservation Type",
  "reservation": "Reservation",
  "state": "State",
  "sundry": "Charges",
  "surname": "Last Name",
  "town": "City",
  "travelAgent": "Agent",
  "voucherNo.": "Voucher Number",
  "wholesaler": "Wholesaler"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abn|string|false|none|none|
|activity|string|false|none|none|
|addOn|string|false|none|none|
|adult|string|false|none|none|
|area|string|false|none|none|
|arrive|string|false|none|none|
|bannedList|string|false|none|none|
|boat|string|false|none|none|
|bookingSource|string|false|none|none|
|businessSegment|string|false|none|none|
|category|string|false|none|none|
|child|string|false|none|none|
|clientStatus|string|false|none|none|
|client|string|false|none|none|
|company|string|false|none|none|
|companyUnknown|string|false|none|none|
|coordinator1|string|false|none|none|
|coordinator2|string|false|none|none|
|depart|string|false|none|none|
|dwelling|string|false|none|none|
|edmFilter1OptOut|string|false|none|none|
|edmFilter2OptOut|string|false|none|none|
|edmFilter3OptOut|string|false|none|none|
|eventName|string|false|none|none|
|given|string|false|none|none|
|groupName|string|false|none|none|
|hold|string|false|none|none|
|housekeeperNote|string|false|none|none|
|housekeepingUnitOfTime|string|false|none|none|
|infant|string|false|none|none|
|loyalty|string|false|none|none|
|maintenance|string|false|none|none|
|mealPlan|string|false|none|none|
|occupant|string|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|postcode|string|false|none|none|
|postalCode|string|false|none|none|
|privacyOptIn|string|false|none|none|
|rate|string|false|none|none|
|resNote|string|false|none|none|
|resType|string|false|none|none|
|reservation|string|false|none|none|
|state|string|false|none|none|
|sundry|string|false|none|none|
|surname|string|false|none|none|
|town|string|false|none|none|
|travelAgent|string|false|none|none|
|voucherNo.|string|false|none|none|
|wholesaler|string|false|none|none|

<h2 id="tocS_loyaltyLevel">loyaltyLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloyaltylevel"></a>
<a id="schema_loyaltyLevel"></a>
<a id="tocSloyaltylevel"></a>
<a id="tocsloyaltylevel"></a>

```json
{
  "id": 1,
  "level": "Bronze",
  "minimumRequiredPoints": 200,
  "multiplier": "1.00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|level|string|false|none|none|
|minimumRequiredPoints|integer(number)|false|none|none|
|multiplier|integer(decimal)|false|none|none|

<h2 id="tocS_master">master</h2>
<!-- backwards compatibility -->
<a id="schemamaster"></a>
<a id="schema_master"></a>
<a id="tocSmaster"></a>
<a id="tocsmaster"></a>

```json
{
  "id": 1,
  "code": "OOL",
  "description": "Coolangatta",
  "shortDescription": "Coolangatta"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|shortDescription|string|false|none|none|

<h2 id="tocS_franchises">franchises</h2>
<!-- backwards compatibility -->
<a id="schemafranchises"></a>
<a id="schema_franchises"></a>
<a id="tocSfranchises"></a>
<a id="tocsfranchises"></a>

```json
{
  "id": 1,
  "name": "Jim's Accommodation"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_mealPlan">mealPlan</h2>
<!-- backwards compatibility -->
<a id="schemamealplan"></a>
<a id="schema_mealPlan"></a>
<a id="tocSmealplan"></a>
<a id="tocsmealplan"></a>

```json
{
  "id": 2,
  "description": "Breakfast",
  "code": "BFST",
  "breakfast": true,
  "lunch": false,
  "dinner": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|description|string|false|none|none|
|code|string|false|none|none|
|breakfast|boolean|false|none|none|
|lunch|boolean|false|none|none|
|dinner|boolean|false|none|none|

<h2 id="tocS_mealPlanSchedulesSearch">mealPlanSchedulesSearch</h2>
<!-- backwards compatibility -->
<a id="schemamealplanschedulessearch"></a>
<a id="schema_mealPlanSchedulesSearch"></a>
<a id="tocSmealplanschedulessearch"></a>
<a id="tocsmealplanschedulessearch"></a>

```json
{
  "reservationIds": [
    17117,
    17118
  ],
  "dateFor": "2022-09-04",
  "dateFrom": "2022-09-01",
  "dateTo": "2022-09-05"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationIds|[integer]|false|none|none|
|dateFor|string(date-time)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|

<h2 id="tocS_mealPlanSchedulesSearchResponse">mealPlanSchedulesSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemamealplanschedulessearchresponse"></a>
<a id="schema_mealPlanSchedulesSearchResponse"></a>
<a id="tocSmealplanschedulessearchresponse"></a>
<a id="tocsmealplanschedulessearchresponse"></a>

```json
{
  "reservationId": 1234,
  "mealPlanId": 12,
  "dates": [
    {
      "theDate": "2023-02-20",
      "mealPlanUpgradeId": 14,
      "startingMeal": "Dinner"
    },
    {
      "theDate": "2023-02-21",
      "mealPlanUpgradeId": 14,
      "startingMeal": ""
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|mealPlanId|integer|false|none|none|
|dates|[[mealPlanSearchResponseDates](#schemamealplansearchresponsedates)]|false|none|none|

<h2 id="tocS_mealPlanSearchResponseDates">mealPlanSearchResponseDates</h2>
<!-- backwards compatibility -->
<a id="schemamealplansearchresponsedates"></a>
<a id="schema_mealPlanSearchResponseDates"></a>
<a id="tocSmealplansearchresponsedates"></a>
<a id="tocsmealplansearchresponsedates"></a>

```json
{
  "theDate": "2019-08-24",
  "mealPlanUpgradeId": 0,
  "startingMeal": "Breakfast"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theDate|string(date)|false|none|none|
|mealPlanUpgradeId|integer|false|none|none|
|startingMeal|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|startingMeal|Breakfast|
|startingMeal|Lunch|
|startingMeal|Dinner|

<h2 id="tocS_membershipType">membershipType</h2>
<!-- backwards compatibility -->
<a id="schemamembershiptype"></a>
<a id="schema_membershipType"></a>
<a id="tocSmembershiptype"></a>
<a id="tocsmembershiptype"></a>

```json
{
  "code": "FF1",
  "membershipType": "FrequentFlyer",
  "level1Code": "Bronze",
  "level2Code": "Silver",
  "level3Code": "Gold",
  "level4Code": "Platinum",
  "level5Code": "Diamond",
  "level6Code": "BETTER THA",
  "level7Code": "",
  "level8Code": "",
  "level9Code": "",
  "level10Code": "",
  "id": 1,
  "name": "Frequent Flyer"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|membershipType|string|false|none|none|
|level1Code|string|false|none|none|
|level2Code|string|false|none|none|
|level3Code|string|false|none|none|
|level4Code|string|false|none|none|
|level5Code|string|false|none|none|
|level6Code|string|false|none|none|
|level7Code|string|false|none|none|
|level8Code|string|false|none|none|
|level9Code|string|false|none|none|
|level10Code|string|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_marketTypes">marketTypes</h2>
<!-- backwards compatibility -->
<a id="schemamarkettypes"></a>
<a id="schema_marketTypes"></a>
<a id="tocSmarkettypes"></a>
<a id="tocsmarkettypes"></a>

```json
{
  "id": 1,
  "name": "Test"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_segment">segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "id": 5,
  "name": "Airlines",
  "code": "AL",
  "inactive": false,
  "shortDescription": "Airlines"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|code|string|false|none|none|
|inactive|boolean|false|none|none|
|shortDescription|string|false|none|none|

<h2 id="tocS_mandatoryField">mandatoryField</h2>
<!-- backwards compatibility -->
<a id="schemamandatoryfield"></a>
<a id="schema_mandatoryField"></a>
<a id="tocSmandatoryfield"></a>
<a id="tocsmandatoryfield"></a>

```json
[
  {
    "entity": "Guest",
    "name": "Given",
    "onCheckin": false,
    "onSave": true
  },
  {
    "entity": "Reservation",
    "name": "Company",
    "onCheckin": true,
    "onSave": true
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|string|false|none|none|
|name|string|false|none|none|
|onCheckin|boolean|false|none|none|
|onSave|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity|Guest|
|entity|Reservation|

<h2 id="tocS_messageCentreGuestPortalNotification">messageCentreGuestPortalNotification</h2>
<!-- backwards compatibility -->
<a id="schemamessagecentreguestportalnotification"></a>
<a id="schema_messageCentreGuestPortalNotification"></a>
<a id="tocSmessagecentreguestportalnotification"></a>
<a id="tocsmessagecentreguestportalnotification"></a>

```json
{
  "Body": "An additonal Guest was added to this reservation",
  "guestId": 138500,
  "header1": "COVID-19 Declaration",
  "propertyId": 1,
  "reservationId": 163706,
  "subject": "COVID-19 Warning"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|header1|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|subject|string|false|none|none|

<h2 id="tocS_messageCentreGuestPortalNotificationResponse">messageCentreGuestPortalNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagecentreguestportalnotificationresponse"></a>
<a id="schema_messageCentreGuestPortalNotificationResponse"></a>
<a id="tocSmessagecentreguestportalnotificationresponse"></a>
<a id="tocsmessagecentreguestportalnotificationresponse"></a>

```json
{
  "id": 15,
  "message": "<p class=\"bold rmsRow\">COVID-19 Declaration</p><br/>An additonal Guest was added to this reservation<br/>",
  "propertyId": 1,
  "subject": "COVID-19 Warning"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|message|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|subject|string|false|none|none|

<h2 id="tocS_agentLite">agentLite</h2>
<!-- backwards compatibility -->
<a id="schemaagentlite"></a>
<a id="schema_agentLite"></a>
<a id="tocSagentlite"></a>
<a id="tocsagentlite"></a>

```json
{
  "id": 3,
  "name": "GuestLink"
}

```

Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_agentBasic">agentBasic</h2>
<!-- backwards compatibility -->
<a id="schemaagentbasic"></a>
<a id="schema_agentBasic"></a>
<a id="tocSagentbasic"></a>
<a id="tocsagentbasic"></a>

```json
{
  "abn": "tr34937874937",
  "address1": "Level 4, 1230 Nepean Hwy",
  "address2": "",
  "address3": "",
  "bookingSourceId": 4,
  "city": "Cheltenham",
  "cityMasterId": 2,
  "competitorMasterId": 8,
  "countryId": 2,
  "email": "fake@test.com.au",
  "externalRefId": "4dfsf",
  "fax": "25654 54568",
  "iataNumber": "5dfddg",
  "id": 3,
  "inactive": false,
  "inactiveReason": "out of business",
  "industryMasterId": 7,
  "marketSegmentId": 2,
  "name": "GuestLink",
  "phone": "03 1234 56987",
  "postcode": "2364a",
  "salesSource": "westmeadows",
  "state": "Vic",
  "subMarketSegmentId": 5,
  "tradingAs": "front",
  "userDefined1": "String 20",
  "userDefined2": "String 50",
  "userDefined3": "String 50",
  "userDefined4": "String 50",
  "userDefined5": "String 50"
}

```

Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abn|string|false|none|Australian Business Number|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|city|string|false|none|none|
|cityMasterId|integer(int32)|false|none|none|
|competitorMasterId|integer(int32)|false|none|none|
|countryId|integer(int32)|false|none|none|
|email|string|false|none|none|
|externalRefId|string|false|none|none|
|fax|string|false|none|none|
|iataNumber|string|false|none|none|
|id|string|false|none|none|
|inactive|boolean|false|none|none|
|inactiveReason|string|false|none|none|
|industryMasterId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|name|string|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|salesSource|string|false|none|none|
|state|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|tradingAs|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|

<h2 id="tocS_origin">origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
{
  "id": 1,
  "code": "AMO",
  "description": "Austrian Main Office on level 3",
  "shortDescription": "Coolangatta the bestest place evs"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|shortDescription|string|false|none|none|

<h2 id="tocS_paymentModes">paymentModes</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmodes"></a>
<a id="schema_paymentModes"></a>
<a id="tocSpaymentmodes"></a>
<a id="tocspaymentmodes"></a>

```json
{
  "billTo": {
    "account1": "company",
    "account2": "client",
    "phone": "company",
    "electricty": "company",
    "gas": "company",
    "water": "company"
  },
  "kiosk": {
    "payAtArrival": "LocalTaxesOnly",
    "payAtDeparture": "NoCharge"
  },
  "inactive": false,
  "id": 7,
  "code": "Accom To Company Pay Own Extras",
  "description": "GREAT PAYMENT MODE"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billTo|[[paymentModesBillTo](#schemapaymentmodesbillto)]|false|none|none|
|kiosk|[[paymentModesKiosk](#schemapaymentmodeskiosk)]|false|none|none|
|inactive|boolean|false|none|none|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_paymentModesBillTo">paymentModesBillTo</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmodesbillto"></a>
<a id="schema_paymentModesBillTo"></a>
<a id="tocSpaymentmodesbillto"></a>
<a id="tocspaymentmodesbillto"></a>

```json
{
  "account1": "string",
  "account2": "string",
  "phone": "string",
  "electricty": "string",
  "gas": "string",
  "water": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account1|string|false|none|none|
|account2|string|false|none|none|
|phone|string|false|none|none|
|electricty|string|false|none|none|
|gas|string|false|none|none|
|water|string|false|none|none|

<h2 id="tocS_paymentModesKiosk">paymentModesKiosk</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmodeskiosk"></a>
<a id="schema_paymentModesKiosk"></a>
<a id="tocSpaymentmodeskiosk"></a>
<a id="tocspaymentmodeskiosk"></a>

```json
{
  "payAtArrival": "NoCharge",
  "payAtDeparture": "NoCharge"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payAtArrival|string|false|none|none|
|payAtDeparture|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payAtArrival|NoCharge|
|payAtArrival|LocalTaxesOnly|
|payAtArrival|FullRateIncAllTaxes|
|payAtDeparture|NoCharge|
|payAtDeparture|AllBalances|
|payAtDeparture|UseBillTo|

<h2 id="tocS_propertiesLite">propertiesLite</h2>
<!-- backwards compatibility -->
<a id="schemapropertieslite"></a>
<a id="schema_propertiesLite"></a>
<a id="tocSpropertieslite"></a>
<a id="tocspropertieslite"></a>

```json
{
  "id": 1,
  "name": "Mexican Shores",
  "inactive": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|inactive|boolean|false|none|none|

<h2 id="tocS_propertiesBasic">propertiesBasic</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesbasic"></a>
<a id="schema_propertiesBasic"></a>
<a id="tocSpropertiesbasic"></a>
<a id="tocspropertiesbasic"></a>

```json
{
  "id": 1,
  "name": "Mexican Shores",
  "accountingDate": "2019-09-25 17:25:00",
  "inactive": true,
  "code": "2598r",
  "rmsClientId": "11281",
  "timeZoneId": "AUS Eastern Standard Time",
  "useSecondaryCurrency": "useDefault"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|accountingDate|string(date-time)|false|none|none|
|inactive|boolean|false|none|none|
|code|string|false|none|none|
|rmsClientId|integer|false|none|none|
|timeZoneId|string|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|

#### Enumerated Values

|Property|Value|
|---|---|
|useSecondaryCurrency|useDefault|
|useSecondaryCurrency|true|
|useSecondaryCurrency|false|

<h2 id="tocS_propertiesFull">propertiesFull</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesfull"></a>
<a id="schema_propertiesFull"></a>
<a id="tocSpropertiesfull"></a>
<a id="tocspropertiesfull"></a>

```json
{
  "id": 1,
  "name": "Mexican Shores",
  "abn": "123 123 15",
  "accountingDate": "2019-09-25 17:25:00",
  "inactive": true,
  "addressLine1": "116",
  "addressLine2": "Harrick Road",
  "addressLine3": "",
  "addressLine4": "",
  "city": "Keilor Park",
  "code": "2598r",
  "country": "Australia",
  "email": "apisupport@rms.com.au",
  "groupingId": 2,
  "latitude": "-37.723050",
  "longitude": "144.845970",
  "mobile": 61412345123,
  "phone": "03 1245 4589",
  "postcode": "32A45",
  "pricingOption": "Use Property",
  "rmsClientId": "11281",
  "state": "Vic",
  "timeZoneId": "AUS Eastern Standard Time",
  "useSecondaryCurrency": "useDefault"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|abn|string|false|none|Australian Business Number|
|accountingDate|string(date-time)|false|none|none|
|inactive|boolean|false|none|none|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|addressLine4|string|false|none|none|
|city|string|false|none|none|
|code|string|false|none|none|
|countryId|integer(int32)|false|none|none|
|email|string|false|none|none|
|groupId|integer(int32)|false|none|none|
|latitude|string|false|none|none|
|longitude|string|false|none|none|
|mobile|string|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|pricingOption|string|false|none|none|
|clientId|integer|false|none|none|
|state|string|false|none|none|
|timeZone|string|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|

#### Enumerated Values

|Property|Value|
|---|---|
|useSecondaryCurrency|useDefault|
|useSecondaryCurrency|true|
|useSecondaryCurrency|false|

<h2 id="tocS_creditCardFeeSearch">creditCardFeeSearch</h2>
<!-- backwards compatibility -->
<a id="schemacreditcardfeesearch"></a>
<a id="schema_creditCardFeeSearch"></a>
<a id="tocScreditcardfeesearch"></a>
<a id="tocscreditcardfeesearch"></a>

```json
{
  "cardIds": [
    3
  ],
  "propertyIds": [
    0,
    1
  ]
}

```

Used:<br>POST /properties/creditCards/fees/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardIds|[integer]|false|none|none|
|propertyIds|[integer]|false|none|none|

<h2 id="tocS_creditCardFee">creditCardFee</h2>
<!-- backwards compatibility -->
<a id="schemacreditcardfee"></a>
<a id="schema_creditCardFee"></a>
<a id="tocScreditcardfee"></a>
<a id="tocscreditcardfee"></a>

```json
{
  "cardId": 3,
  "cardName": "Amex",
  "gatewayTransactionFee": 10,
  "glCodeId": 37,
  "merchantFeeNoGreaterThan": 0,
  "merchantFeePercentage": 0,
  "propertyId": 1
}

```

Used:<br>GET /properties/{id}/creditCards/fees<br>POST /properties/creditCards/fees/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardId|integer(int32)|false|none|none|
|cardName|string|false|none|none|
|gatewayTransactionFee|number(currency)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|merchantFeeNoGreaterThan|number(currency)|false|none|none|
|merchantFeePercentage|number(currency)|false|none|none|
|propertyid|integer(int32)|false|none|none|

<h2 id="tocS_covidAckowledgement">covidAckowledgement</h2>
<!-- backwards compatibility -->
<a id="schemacovidackowledgement"></a>
<a id="schema_covidAckowledgement"></a>
<a id="tocScovidackowledgement"></a>
<a id="tocscovidackowledgement"></a>

```json
{
  "acknowledgementQuestion1": "Do you declare you have not been overseas in the past 14 days?",
  "acknowledgementQuestion2": "Do you declare you have not been interstate in the past 14 days?",
  "acknowledgementQuestion3": "Do you declare you are not required to be in self-isolation/self-quarantine?",
  "acknowledgementQuestion4": "Do you declare you have not previously been diagnosed with COVID-19?",
  "acknowledgementQuestion5": "Do you declare to the best of you knowledge, you have not been in close contact with a person who has a reported or suspected case of coronavirus (COVID-19) in the past 14 days?",
  "acknowledgementQuestion6": "Do you declare you have not been in a COVID-19 hotspot (as defined by the Chief Health Officer) in the past 14 days?",
  "acknowledgementQuestion7": "Do you declare you have not had a fever, cough, sore throat, shortness of breath or other cold/flu-like symptoms in the last 72 hours and are otherwise well?",
  "acknowledgementQuestion8": "Do yu declare you are healthy?",
  "acknowledgementQuestion9": "Do you declare you have not been in contact with anyone unhealthy?",
  "acknowledgementQuestion10": "Do you declare you have no symptons of sickness?"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementQuestion1|string|false|none|none|
|acknowledgementQuestion2|string|false|none|none|
|acknowledgementQuestion3|string|false|none|none|
|acknowledgementQuestion4|string|false|none|none|
|acknowledgementQuestion5|string|false|none|none|
|acknowledgementQuestion6|string|false|none|none|
|acknowledgementQuestion7|string|false|none|none|
|acknowledgementQuestion8|string|false|none|none|
|acknowledgementQuestion9|string|false|none|none|
|acknowledgementQuestion10|string|false|none|none|

<h2 id="tocS_addOnCategory">addOnCategory</h2>
<!-- backwards compatibility -->
<a id="schemaaddoncategory"></a>
<a id="schema_addOnCategory"></a>
<a id="tocSaddoncategory"></a>
<a id="tocsaddoncategory"></a>

```json
{
  "id": 50,
  "name": "Car Park",
  "propertyId": 1
}

```

Used:<br>GET /properties/{id}/addOnType

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|propertyId|integer|false|none|none|

<h2 id="tocS_creditCard">creditCard</h2>
<!-- backwards compatibility -->
<a id="schemacreditcard"></a>
<a id="schema_creditCard"></a>
<a id="tocScreditcard"></a>
<a id="tocscreditcard"></a>

```json
{
  "id": 5,
  "name": "Visa"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "primaryCurrencyId": 0,
  "primaryCurrencySymbol": "string",
  "primaryCurrencyName": "string",
  "PrimaryCurrencyDescription": "string",
  "secondaryCurrencyId": 0,
  "secondaryCurrencySymbol": "string",
  "secondaryCurrencyName": "string",
  "secondaryCurrencyDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryCurrencyId|integer(int32)|false|none|none|
|primaryCurrencySymbol|string|false|none|none|
|primaryCurrencyName|string|false|none|none|
|PrimaryCurrencyDescription|string|false|none|none|
|secondaryCurrencyId|integer(int32)|false|none|none|
|secondaryCurrencySymbol|string|false|none|none|
|secondaryCurrencyName|string|false|none|none|
|secondaryCurrencyDescription|string|false|none|none|

<h2 id="tocS_propertiesIbePoliciesAndSettings">propertiesIbePoliciesAndSettings</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesibepoliciesandsettings"></a>
<a id="schema_propertiesIbePoliciesAndSettings"></a>
<a id="tocSpropertiesibepoliciesandsettings"></a>
<a id="tocspropertiesibepoliciesandsettings"></a>

```json
{
  "businessFacilities": "This isn't a place for business.",
  "carParking": "No specific car parking information provided.",
  "description": "Rachel's Ritzy Resort is a class above the rest!!!",
  "features": "Party-friendly environment, suitable for groups.",
  "petPolicy": "No pets allowed.",
  "terms": "Standard terms apply.",
  "thingsToDo": "PARTY!",
  "cancellationPolicy": "Standard cancellation policy applies.",
  "userDefined1": "The Thing #1",
  "userDefined2": "The Thing #2",
  "userDefined3": "The Thing #3",
  "userDefined4": "The Thing #4",
  "userDefined5": "The Thing #5",
  "allowGroupBookings": true,
  "childrenAllowed": true,
  "currency": "AUD",
  "currencySymbol": "$",
  "defaultArrivalTime": "1900-01-01T15:00:00Z",
  "defaultDepartTime": "1900-01-02T11:00:00Z",
  "gatewayId": 4,
  "latitude": "Not provided",
  "longitude": "Not provided",
  "maxChildAge": "3",
  "maxInfantAge": "3 years",
  "minAgeRequiredToBook": 21,
  "petsAllowed": true,
  "redirectionURL": "Not applicable",
  "smokingAllowed": true,
  "maxGroupBookings": 4,
  "googleAnalyticsCode": "UA-3404912-1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessFacilities|string|false|none|none|
|carParking|string|false|none|none|
|description|string|false|none|none|
|features|string|false|none|none|
|petPolicy|string|false|none|none|
|terms|string|false|none|none|
|thingsToDo|string|false|none|none|
|cancellationPolicy|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|allowGroupBookings|boolean|false|none|none|
|childrenAllowed|boolean|false|none|none|
|currency|string|false|none|none|
|currencySymbol|string|false|none|none|
|defaultArrivalTime|string(date-time)|false|none|none|
|defaultDepartTime|string(date-time)|false|none|none|
|gatewayId|integer|false|none|none|
|latitude|string|false|none|none|
|longitude|string|false|none|none|
|maxChildAge|string|false|none|none|
|maxInfantAge|string|false|none|none|
|minAgeRequiredToBook|integer|false|none|none|
|petsAllowed|boolean|false|none|none|
|redirectionURL|string|false|none|none|
|smokingAllowed|boolean|false|none|none|
|maxGroupBookings|integer|false|none|none|
|googleAnalyticsCode|string|false|none|none|

<h2 id="tocS_propertiesPosEndOfDay">propertiesPosEndOfDay</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesposendofday"></a>
<a id="schema_propertiesPosEndOfDay"></a>
<a id="tocSpropertiesposendofday"></a>
<a id="tocspropertiesposendofday"></a>

```json
{
  "posEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posEndOfDay|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_propertiesPosEndOfDayUpdate">propertiesPosEndOfDayUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesposendofdayupdate"></a>
<a id="schema_propertiesPosEndOfDayUpdate"></a>
<a id="tocSpropertiesposendofdayupdate"></a>
<a id="tocspropertiesposendofdayupdate"></a>

```json
{
  "posEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posEndOfDay|string(date-time)|true|none|none|
|propertyId|integer(int32)|false|none|This field is informational only and not required in the request body|

<h2 id="tocS_propertiesEBanquetEndOfDay">propertiesEBanquetEndOfDay</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesebanquetendofday"></a>
<a id="schema_propertiesEBanquetEndOfDay"></a>
<a id="tocSpropertiesebanquetendofday"></a>
<a id="tocspropertiesebanquetendofday"></a>

```json
{
  "eBanquetEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eBanquetEndOfDay|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|

<h2 id="tocS_propertiesEBanquetEndOfDayUpdate">propertiesEBanquetEndOfDayUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesebanquetendofdayupdate"></a>
<a id="schema_propertiesEBanquetEndOfDayUpdate"></a>
<a id="tocSpropertiesebanquetendofdayupdate"></a>
<a id="tocspropertiesebanquetendofdayupdate"></a>

```json
{
  "eBanquetEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eBanquetEndOfDay|string(date-time)|true|none|none|
|propertyId|integer(int32)|false|none|This field is informational only and not required in the request body|

<h2 id="tocS_propertiesAccounting">propertiesAccounting</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesaccounting"></a>
<a id="schema_propertiesAccounting"></a>
<a id="tocSpropertiesaccounting"></a>
<a id="tocspropertiesaccounting"></a>

```json
{
  "TaxOption": "TaxInclusive",
  "allowPOSChargeToRoom": true,
  "maxPOSAmountForStay": 0,
  "posAccountId": 131353,
  "cashAccountId": 124752,
  "allowSplitAccounts": true,
  "allowedAccountTypes": {
    "accommodation": true,
    "extras": true,
    "gas": true,
    "electricity": true,
    "water": true,
    "pabx": true
  },
  "postToAccommodationAccount": {
    "accommodation": true,
    "extras": false,
    "gas": false,
    "electricity": false,
    "water": false,
    "pabx": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxOption|string|false|none|none|
|allowPOSChargeToRoom|boolean|false|none|none|
|MaxPOSAmountForStay|number(currency)|false|none|none|
|posAccountId|integer(int32)|false|none|none|
|cashAccountId|integer(int32)|false|none|none|
|allowSplitAccounts|boolean|false|none|none|
|allowedAccountTypes|[propertiesAccounting_allowedAccountTypes](#schemapropertiesaccounting_allowedaccounttypes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taxOption|TaxInclusive|
|taxOption|TaxExclusive|

<h2 id="tocS_ibeAdditional">ibeAdditional</h2>
<!-- backwards compatibility -->
<a id="schemaibeadditional"></a>
<a id="schema_ibeAdditional"></a>
<a id="tocSibeadditional"></a>
<a id="tocsibeadditional"></a>

```json
{
  "maxChildAge": 11,
  "maxInfantAge": 5,
  "showAdditionalCharge1": true,
  "showAdditionalCharge2": true,
  "showAdditionalCharge3": false,
  "showAdditionalCharge4": false,
  "showAdditionalCharge5": false,
  "showAdditionalCharge6": false,
  "showAdditionalCharge7": false,
  "showChildren": true,
  "showInfants": false
}

```

Used: GET /properties/{id}/ibe/additionals

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxChildAge|integer(int32)|false|none|none|
|maxInfantAge|integer(int32)|false|none|none|
|showAdditionalCharge1|boolean|false|none|none|
|showAdditionalCharge2|boolean|false|none|none|
|showAdditionalCharge3|boolean|false|none|none|
|showAdditionalCharge4|boolean|false|none|none|
|showAdditionalCharge5|boolean|false|none|none|
|showAdditionalCharge6|boolean|false|none|none|
|showAdditionalCharge7|boolean|false|none|none|
|showChildren|boolean|false|none|none|
|showInfants|boolean|false|none|none|

<h2 id="tocS_addOnTypeLite">addOnTypeLite</h2>
<!-- backwards compatibility -->
<a id="schemaaddontypelite"></a>
<a id="schema_addOnTypeLite"></a>
<a id="tocSaddontypelite"></a>
<a id="tocsaddontypelite"></a>

```json
{
  "id": 50,
  "name": "Car Park",
  "propertyId": 1
}

```

Used:<br>GET /properties/{id}/ibe/addOnType (End Point comment out)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|propertyId|integer|false|none|none|

<h2 id="tocS_itemLite">itemLite</h2>
<!-- backwards compatibility -->
<a id="schemaitemlite"></a>
<a id="schema_itemLite"></a>
<a id="tocSitemlite"></a>
<a id="tocsitemlite"></a>

```json
{
  "id": 1,
  "name": "Return Guest"
}

```

Used:GET /properties/{id}/ibe/bookingSources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ibeReservationFees">ibeReservationFees</h2>
<!-- backwards compatibility -->
<a id="schemaibereservationfees"></a>
<a id="schema_ibeReservationFees"></a>
<a id="tocSibereservationfees"></a>
<a id="tocsibereservationfees"></a>

```json
{
  "creditCardCommission": 2.66,
  "onlineReservationFee": 1.5,
  "sundryId": 2
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditCardCommission|integer(decimal)|false|none|This value represents a percentage of the total rate.|
|onlineReservationFee|integer(decimal)|false|none|none|
|sundryId|integer(int32)|false|none|none|

<h2 id="tocS_policy">policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "businessFacilities": "This section will outline Business Facilities.",
  "carParking": "There is a charge for extra vehicles, daily parking and other space consuming devices which accompany travelers, except for those which are exempt from extra charges.",
  "cancellationPolicy": "CANCELLATION POLICY - cancellation is free of charge up to 48 hours prior to 2pm on your arrival date. Any booking modifications, including date changes and/or a full cancellation of your booking made within 48 hours of 2pm on your arrival date will incur a charge of the first night booked. Any booking modifications requested after check in must occur at least 48 hours prior to the change taking place to avoid any charges. NO SHOW POLICY - Failure to arrive at the property, on the booked check-in date, will be treated as a no-show and will incur the first night charge. Please note the remainder of the booking will be cancelled.",
  "description": "Rachel's Ritzy Resort is a class above the rest!!!",
  "directions": "Travel Directions for guests. For easiest access to the property the best route to follow to arrive safely is the most direct route which comes in from the south, as this is the only route which provides road access, although many of you may wish to take the scenic alternative",
  "features": "This section will outline Property Features.",
  "petPolicy": "Those pets which have returned from the taxidermist and now exhibit none of their former feral aromas or lifestyle are most welcome.  These beasts must be restrained at all times and are not allowed outside at any time without close attentive supervision.",
  "terms": "AFTER-HOURS ARRIVALS - reception hours are from 8am to 6pm daily. If you are arriving outside of these hours, please contact the lodge at least 24 hours prior to 2pm on your arrival date to arrange an after-hours key collection. CHECK-IN POLICY - The person who's name the room was booked under must be present and part of the travelling party staying at the lodge. THIRD PARTY PAYMENT POLICY - If any room nights or additional charges are to be paid for by a third party, or anyone else other than the person who's name the booking was made under, the lodge must be notified more than 48 hours prior to 2pm on your arrival date.",
  "thingsToDo": "Outlines things to do at the property."
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessFacilities|any|false|none|none|
|carParking|any|false|none|none|
|cancellationPolicy|any|false|none|none|
|description|any|false|none|none|
|directions|any|false|none|none|
|features|any|false|none|none|
|petPolicy|any|false|none|none|
|terms|any|false|none|none|
|thingsToDo|any|false|none|none|

<h2 id="tocS_ibeRequirement">ibeRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaiberequirement"></a>
<a id="schema_ibeRequirement"></a>
<a id="tocSiberequirement"></a>
<a id="tocsiberequirement"></a>

```json
{
  "id": 7,
  "name": "Chapagne & Chochlates",
  "displayOrder": 2,
  "excludeFromDeposit": false,
  "longDescription": "Chapagne & Chochlates on arrival in your room"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|excludeFromDeposit|boolean|false|none|none|
|longDescription|string|false|none|none|

<h2 id="tocS_ibeSetting">ibeSetting</h2>
<!-- backwards compatibility -->
<a id="schemaibesetting"></a>
<a id="schema_ibeSetting"></a>
<a id="tocSibesetting"></a>
<a id="tocsibesetting"></a>

```json
{
  "allowGroupBookings": true,
  "childrenAllowed": true,
  "currency": "string",
  "currencySymbol": "string",
  "defaultArrivalTime": "2019-08-24T14:15:22Z",
  "defaultDepartTime": "2019-08-24T14:15:22Z",
  "gatewayID": 0,
  "latitude": "string",
  "longitude": "string",
  "maxChildAge": "string",
  "maxInfantAge": "string",
  "minAgeRequiredToBook": 0,
  "petsAllowed": true,
  "redirectionURL": "string",
  "smokingAllowed": true,
  "MaxGroupBookings": 0,
  "googleAnalyticsCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGroupBookings|boolean|false|none|none|
|childrenAllowed|boolean|false|none|none|
|currency|string|false|none|none|
|currencySymbol|string|false|none|none|
|defaultArrivalTime|string(date-time)|false|none|none|
|defaultDepartTime|string(date-time)|false|none|none|
|gatewayID|integer(int32)|false|none|none|
|latitude|string|false|none|none|
|longitude|string|false|none|none|
|maxChildAge|string|false|none|none|
|maxInfantAge|string|false|none|none|
|minAgeRequiredToBook|integer(int32)|false|none|none|
|petsAllowed|boolean|false|none|none|
|redirectionURL|string|false|none|none|
|smokingAllowed|boolean|false|none|none|
|MaxGroupBookings|integer(int32)|false|none|none|
|googleAnalyticsCode|string|false|none|none|

<h2 id="tocS_propertiesSettingsPayments">propertiesSettingsPayments</h2>
<!-- backwards compatibility -->
<a id="schemapropertiessettingspayments"></a>
<a id="schema_propertiesSettingsPayments"></a>
<a id="tocSpropertiessettingspayments"></a>
<a id="tocspropertiessettingspayments"></a>

```json
{
  "propertyId": 1,
  "gatewayId": "RMSPay",
  "preAuthorizationAmount": 100,
  "preAuthorizationType": "AmountPerNightsStay",
  "preAuthorizationOnCheckInWarning": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|false|none|none|
|gatewayId|string|false|none|none|
|preAuthorizationAmount|number(float)|false|none|none|
|preAuthorizationType|string|false|none|none|
|preAuthorizationOnCheckInWarning|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gatewayId|NotSet|
|gatewayId|eMatters|
|gatewayId|OPayo|
|gatewayId|XCharge|
|gatewayId|Windcave|
|gatewayId|TGate|
|gatewayId|PayPal|
|gatewayId|RMS|
|gatewayId|HDFCBank|
|gatewayId|BrainTree|
|gatewayId|GKSolutions|
|gatewayId|CommBank|
|gatewayId|Stripe|
|gatewayId|RMSVault|
|gatewayId|Payfort|
|gatewayId|Elavon|
|gatewayId|RedDo|
|gatewayId|Tyro|
|gatewayId|BridgePay|
|gatewayId|NGenius|
|gatewayId|OPayoHP|
|gatewayId|MXFiftyOne|
|gatewayId|RMSMerchantFacility|
|gatewayId|Till|
|gatewayId|Wallee|
|gatewayId|RazorPay|
|gatewayId|RMSPay|
|gatewayId|Evo|
|gatewayId|FreedomPay|
|gatewayId|Adyen|
|gatewayId|Shift4|
|gatewayId|PayFast|
|gatewayId|Verifone|
|preAuthorizationType|DefaultPreAuthorizationAmount|
|preAuthorizationType|AmountPerReservation|
|preAuthorizationType|AmountPerNightsStay|
|preAuthorizationType|AmountPerAdult|
|preAuthorizationType|FirstNightAccommodation|
|preAuthorizationType|PercentageOfTotalRate|
|preAuthorizationType|TotalRatePlusAmountPerNight|
|preAuthorizationType|TotalRatePlusPercentageOfTotalRate|

<h2 id="tocS_rateTypeLite">rateTypeLite</h2>
<!-- backwards compatibility -->
<a id="schemaratetypelite"></a>
<a id="schema_rateTypeLite"></a>
<a id="tocSratetypelite"></a>
<a id="tocsratetypelite"></a>

```json
{
  "id": 1,
  "name": "BAR"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_rateTypeFull">rateTypeFull</h2>
<!-- backwards compatibility -->
<a id="schemaratetypefull"></a>
<a id="schema_rateTypeFull"></a>
<a id="tocSratetypefull"></a>
<a id="tocsratetypefull"></a>

```json
{
  "id": 112,
  "name": "Bed & Breakfast.",
  "arrivingOnSunday": true,
  "arrivingOnMonday": true,
  "arrivingOnTuesday": true,
  "arrivingOnWednesday": true,
  "arrivingOnThursday": true,
  "arrivingOnFriday": true,
  "arrivingOnSaturday": true,
  "bestAvailableRate": true,
  "bookingSourceId": 3,
  "cancellationPolicyId": 1,
  "code": "B2",
  "contractedRate": false,
  "discountId": 7,
  "doNotAllowBaseRateToBeOverridden": false,
  "doNotUseAsPromoCode": false,
  "gLAccountCodeId": 32,
  "groupingId": 3,
  "inactive": false,
  "linkedRateTypeId": 4,
  "long Description": "Includes continental buffet breakfast for 2",
  "marketSegmentId": 6,
  "mealPlanId": 2,
  "noDiscountAllowed": true,
  "AdvancePurchaseNights": 30,
  "LastMinuteNights": 0,
  "onlyAvailableToMembers": true,
  "showAvailabilityAsTicksForIbe": false,
  "startEachRatePeriodFromNightOneOnRateTable": true,
  "subMarketSegmentId": 4,
  "rateChargeDescription": "Bed & Breakfast.",
  "rateStructure": "directRate"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|arrivingOnSunday|boolean|false|none|none|
|arrivingOnMonday|boolean|false|none|none|
|arrivingOnTuesday|boolean|false|none|none|
|arrivingOnWednesday|boolean|false|none|none|
|arrivingOnThursday|boolean|false|none|none|
|arrivingOnFriday|boolean|false|none|none|
|arrivingOnSaturday|boolean|false|none|none|
|bestAvailableRate|boolean|false|none|BAR|
|bookingSourceId|integer(int32)|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|code|string|false|none|none|
|contractedRate|boolean|false|none|none|
|discountId|integer(int32)|false|none|none|
|doNotAllowBaseRateToBeOverridden|boolean|false|none|none|
|doNotUseAsPromoCode|boolean|false|none|none|
|gLAccountCodeId|integer(int32)|false|none|none|
|groupingId|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|linkedRateTypeId|integer(int32)|false|none|none|
|long Description|string|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|noDiscountAllowed|boolean|false|none|none|
|AdvancePurchaseNights|integer(int32)|false|none|none|
|LastMinuteNights|integer(int32)|false|none|none|
|onlyAvailableToMembers|boolean|false|none|none|
|showAvailabilityAsTicksForIbe|boolean|false|none|none|
|startEachRatePeriodFromNightOneOnRateTable|boolean|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|rateChargeDescription|string|false|none|none|
|rateStructure|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateStructure|otaRate|
|rateStructure|directRate|

<h2 id="tocS_ratesConfigurationsSearch">ratesConfigurationsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearch"></a>
<a id="schema_ratesConfigurationsSearch"></a>
<a id="tocSratesconfigurationssearch"></a>
<a id="tocsratesconfigurationssearch"></a>

```json
{
  "rateIds": [],
  "propertyIds": [
    1,
    3
  ],
  "agentId": 2673
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateIds|[integer]|false|none|none|
|propertyIds|[integer]|true|none|none|
|agentId|integer|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse">ratesConfigurationsSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse"></a>
<a id="schema_ratesConfigurationsSearchResponse"></a>
<a id="tocSratesconfigurationssearchresponse"></a>
<a id="tocsratesconfigurationssearchresponse"></a>

```json
{
  "rates": [
    {
      "rateId": 1439,
      "propertyId": 1,
      "longDescription": "My Derived Rate Long Description",
      "rateChargeDescription": "My Derived Rate",
      "isDeal": true,
      "cancellationPolicyId": 4,
      "advancePurchaseNights": 3,
      "lastMinuteNights": 1,
      "marketSegmentId": 64,
      "mealPlanId": 4,
      "discountId": 0,
      "bookingSourceId": 200,
      "glCodeId": 23,
      "url": "https://www.google.com/",
      "categories": [
        {
          "categoryId": 1,
          "allYearRound": true
        },
        {
          "categoryId": 4,
          "allYearRound": true
        }
      ],
      "days": [
        {
          "day": "Monday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Tuesday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Wednesday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Thursday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Friday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Saturday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        },
        {
          "day": "Sunday",
          "arrive": true,
          "minimumStay": 2,
          "maximumStay": 0
        }
      ],
      "madeDateWindow": [
        {
          "dateFrom": "2025-01-02 00:00:00",
          "dateTo": "2025-01-31 23:59:00"
        }
      ],
      "deposit": {
        "activationType": "NightOfTheWeek",
        "dayOfWeekConfiguration": {
          "sunday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 200,
            "percentage": 20,
            "amountType": "TotalOrPercent"
          },
          "monday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 100,
            "percentage": 10,
            "amountType": "TotalOrPercent"
          },
          "tuesday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 100,
            "percentage": 10,
            "amountType": "TotalOrPercent"
          },
          "wednesday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 100,
            "percentage": 10,
            "amountType": "TotalOrPercent"
          },
          "thursday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 200,
            "percentage": 20,
            "amountType": "TotalOrPercent"
          },
          "friday": {
            "dueDays": 1,
            "dueDaysType": "PriorToArrival",
            "firstXNights": 1,
            "amountType": "FirstXNights"
          },
          "saturday": {
            "dueDays": 0,
            "dueDaysType": "PriorToArrival",
            "amount": 1000,
            "amountType": "PerWeekOrPart"
          }
        },
        "secondDeposit": {
          "dueDays": 0,
          "dueDaysType": "FromReservationMade",
          "amountType": "AccountBalance"
        }
      }
    },
    {
      "rateId": 1433,
      "propertyId": 1,
      "longDescription": "BAR USD Long Desc",
      "rateChargeDescription": "BAR USD",
      "isDeal": false,
      "cancellationPolicyId": 3,
      "advancePurchaseNights": 7,
      "lastMinuteNights": 3,
      "marketSegmentId": 82,
      "mealPlanId": 2,
      "discountId": 65,
      "bookingSourceId": 9,
      "glCodeId": 389,
      "url": "",
      "categories": [
        {
          "categoryId": 1,
          "dateFrom": "2025-01-01 00:00:00",
          "dateTo": "2025-01-31 23:59:59",
          "allYearRound": false
        },
        {
          "categoryId": 2,
          "allYearRound": true
        }
      ],
      "days": [
        {
          "day": "Monday",
          "arrive": true,
          "minimumStay": 3,
          "maximumStay": 4
        },
        {
          "day": "Tuesday",
          "arrive": true,
          "minimumStay": 3,
          "maximumStay": 4
        }
      ],
      "madeDateWindow": [
        {
          "dateFrom": "2024-12-04 23:59:00",
          "dateTo": "2025-01-01 23:59:00"
        }
      ],
      "deposit": {
        "activationType": "ArrivingOn",
        "dayOfWeekConfiguration": {
          "sunday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 500,
            "percentage": 100,
            "amountType": "TotalOrPercent"
          },
          "monday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 300,
            "percentage": 75,
            "amountType": "TotalOrPercent"
          },
          "saturday": {
            "dueDays": 0,
            "dueDaysType": "FromReservationMade",
            "amount": 0,
            "percentage": 100,
            "amountType": "TotalOrPercent"
          }
        },
        "secondDeposit": {
          "dueDays": 0,
          "dueDaysType": "FromReservationMade",
          "amount": 100,
          "percentage": 10,
          "amountType": "TotalOrPercent"
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rates|[[ratesConfigurationsSearchResponse_rates](#schemaratesconfigurationssearchresponse_rates)]|false|none|none|

<h2 id="tocS_rateElements">rateElements</h2>
<!-- backwards compatibility -->
<a id="schemarateelements"></a>
<a id="schema_rateElements"></a>
<a id="tocSrateelements"></a>
<a id="tocsrateelements"></a>

```json
{
  "id": 1,
  "code": "RE1",
  "description": "Rate Element 1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_rateTable">rateTable</h2>
<!-- backwards compatibility -->
<a id="schemaratetable"></a>
<a id="schema_rateTable"></a>
<a id="tocSratetable"></a>
<a id="tocsratetable"></a>

```json
{
  "id": 21,
  "basedOn": "Night Of Week",
  "cancellationPolicyId": 3,
  "description": "10 Degrees Warmer LS",
  "format": "Nightly",
  "inactive": false,
  "minimumChargePerPeriod": 0,
  "personBase": 2,
  "mondayRate": 375,
  "tuesdayRate": 375,
  "wednesdayRate": 375,
  "thursdayRate": 375,
  "fridayRate": 475,
  "saturdayRate": 475,
  "sundayRate": 375
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|basedOn|string|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|description|string|false|none|none|
|format|string|false|none|none|
|inactive|boolean|false|none|none|
|minimumChargePerPeriod|integer(currency)|false|none|none|
|personBase|integer(int32)|false|none|none|
|mondayRate|integer(currency)|false|none|none|
|tuesdayRate|integer(currency)|false|none|none|
|wednesdayRate|integer(currency)|false|none|none|
|thursdayRate|integer(currency)|false|none|none|
|fridayRate|integer(currency)|false|none|none|
|saturdayRate|integer(currency)|false|none|none|
|sundayRate|integer(currency)|false|none|none|

<h2 id="tocS_rateTablesSearch">rateTablesSearch</h2>
<!-- backwards compatibility -->
<a id="schemaratetablessearch"></a>
<a id="schema_rateTablesSearch"></a>
<a id="tocSratetablessearch"></a>
<a id="tocsratetablessearch"></a>

```json
{
  "ids": [
    1,
    15,
    2
  ],
  "inactive": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|inactive|boolean|false|none|none|

<h2 id="tocS_rateTablesAdditionalsSearch">rateTablesAdditionalsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaratetablesadditionalssearch"></a>
<a id="schema_rateTablesAdditionalsSearch"></a>
<a id="tocSratetablesadditionalssearch"></a>
<a id="tocsratetablesadditionalssearch"></a>

```json
{
  "tableIds": [
    1,
    15,
    2
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableIds|[integer]|false|none|none|

<h2 id="tocS_rateTableAddtionals">rateTableAddtionals</h2>
<!-- backwards compatibility -->
<a id="schemaratetableaddtionals"></a>
<a id="schema_rateTableAddtionals"></a>
<a id="tocSratetableaddtionals"></a>
<a id="tocsratetableaddtionals"></a>

```json
{
  "tableId": 2494,
  "inactive": false,
  "adults": {
    "base": 6,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 20,
      "second": 20,
      "third": 20,
      "fourth": 20,
      "thereafter": 20
    },
    "showOnAccount": false
  },
  "children": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 10,
      "second": 10,
      "third": 10,
      "fourth": 10,
      "thereafter": 10
    },
    "showOnAccount": false
  },
  "infants": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge1": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge2": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge3": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge4": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge5": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge6": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  },
  "rateCharge7": {
    "base": 0,
    "glAccountCodeId": 0,
    "includeInBase": false,
    "minimumNumberAllowed": 0,
    "maximumNumberAllowed": 0,
    "nightly": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "thereafter": 0
    },
    "showOnAccount": false
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableId|integer|false|none|none|
|inactive|boolean|false|none|none|
|adults|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|children|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|infants|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge1|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge2|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge3|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge4|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge5|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge6|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|rateCharge7|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|

<h2 id="tocS_ratePackagesSearch">ratePackagesSearch</h2>
<!-- backwards compatibility -->
<a id="schemaratepackagessearch"></a>
<a id="schema_ratePackagesSearch"></a>
<a id="tocSratepackagessearch"></a>
<a id="tocsratepackagessearch"></a>

```json
{
  "tableIds": [
    1,
    15,
    2
  ],
  "rateIds": [
    1254,
    546
  ],
  "propertyIds": [
    4
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableIds|[integer]|false|none|none|
|rateIds|[integer]|false|none|none|
|propertyIds|[integer]|false|none|Pass in the propertyids to search for packages beloning to property rate rules|

<h2 id="tocS_rateTablePackage">rateTablePackage</h2>
<!-- backwards compatibility -->
<a id="schemaratetablepackage"></a>
<a id="schema_rateTablePackage"></a>
<a id="tocSratetablepackage"></a>
<a id="tocsratetablepackage"></a>

```json
{
  "id": 124,
  "applyCharge": "every",
  "applyChargeOnTheDate": 1,
  "applyChargeOnTheDay": "Monday",
  "makePackageInclusive": false,
  "percentageOfRate": [
    {
      "percentageOfRate": 10,
      "rateFrom": 100,
      "rateTo": 250,
      "useIfRateFallsBetween": true
    }
  ],
  "perPeriodFee": [
    {
      "amount": 10,
      "quantity": 1,
      "unitPrice": 5,
      "useAmountFromSundry": false
    }
  ],
  "perPersonFee": [
    {
      "additionalRateCharge1": 5,
      "additionalRateCharge2": 5,
      "additionalRateCharge3": 5,
      "additionalRateCharge4": 5,
      "additionalRateCharge5": 5,
      "adults": 5,
      "children": 5,
      "infants": 5,
      "minimumChargePerPeriod": 10
    }
  ],
  "postOnNextDay": false,
  "postToExtrasAccount": false,
  "propertyId": 0,
  "showOnAccount": true,
  "showOnHousekeepersReport": false,
  "showOnToDoChart": true,
  "sundryId": 7,
  "startingPeriod": "include",
  "endingPeriod": "exclude"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|applyCharge|string|false|none|none|
|applyChargeOnTheDate|integer(int32)|false|none|none|
|applyChargeOnTheDay|string|false|none|none|
|makePackageInclusive|boolean|false|none|This will include the packaged amount as part of the rate without increasing the overall price|
|percentageOfRate|[[rateTablePackagePercentageOfRate](#schemaratetablepackagepercentageofrate)]|false|none|none|
|perPeriodFee|[[rateTablePackagePerPeriodFee](#schemaratetablepackageperperiodfee)]|false|none|none|
|perPersonFee|[[rateTablePackagePerPersonFee](#schemaratetablepackageperpersonfee)]|false|none|none|
|postOnNextDay|boolean|false|none|none|
|postToExtrasAccount|boolean|false|none|none|
|propertyId|integer(int32)|false|none|This value will be returned if the package belongs to a property rate rule|
|showOnAccount|boolean|false|none|none|
|showOnHousekeepersReport|boolean|false|none|none|
|showOnToDoChart|boolean|false|none|none|
|sundryId|integer(int32)|false|none|none|
|startingPeriod|string|false|none|none|
|endingPeriod|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyCharge|every|
|applyCharge|on the|
|applyChargeOnTheDay|Monday|
|applyChargeOnTheDay|Tuesday|
|applyChargeOnTheDay|Wednesday|
|applyChargeOnTheDay|Thursday|
|applyChargeOnTheDay|Friday|
|applyChargeOnTheDay|Saturday|
|applyChargeOnTheDay|Sunday|
|startingPeriod|include|
|startingPeriod|exclude|
|endingPeriod|include|
|endingPeriod|exclude|

<h2 id="tocS_rateTablePackagePercentageOfRate">rateTablePackagePercentageOfRate</h2>
<!-- backwards compatibility -->
<a id="schemaratetablepackagepercentageofrate"></a>
<a id="schema_rateTablePackagePercentageOfRate"></a>
<a id="tocSratetablepackagepercentageofrate"></a>
<a id="tocsratetablepackagepercentageofrate"></a>

```json
{
  "percentageOfRate": 0,
  "rateFrom": 0,
  "rateTo": 0,
  "useIfRateFallsBetween": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentageOfRate|integer(decimal)|false|none|Calculate a Percentage of the Nightly Rate Less any Discount|
|rateFrom|integer(currency)|false|none|none|
|rateTo|integer(currency)|false|none|none|
|useIfRateFallsBetween|boolean|false|none|none|

<h2 id="tocS_rateTablePackagePerPeriodFee">rateTablePackagePerPeriodFee</h2>
<!-- backwards compatibility -->
<a id="schemaratetablepackageperperiodfee"></a>
<a id="schema_rateTablePackagePerPeriodFee"></a>
<a id="tocSratetablepackageperperiodfee"></a>
<a id="tocsratetablepackageperperiodfee"></a>

```json
{
  "amount": 0,
  "quantity": 0,
  "unitPrice": 0,
  "useAmountFromSundry": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(currency)|false|none|none|
|quantity|integer(int32)|false|none|none|
|unitPrice|integer(currency)|false|none|none|
|useAmountFromSundry|boolean|false|none|none|

<h2 id="tocS_rateTablePackagePerPersonFee">rateTablePackagePerPersonFee</h2>
<!-- backwards compatibility -->
<a id="schemaratetablepackageperpersonfee"></a>
<a id="schema_rateTablePackagePerPersonFee"></a>
<a id="tocSratetablepackageperpersonfee"></a>
<a id="tocsratetablepackageperpersonfee"></a>

```json
{
  "additionalRateCharge1": 0,
  "additionalRateCharge2": 0,
  "additionalRateCharge3": 0,
  "additionalRateCharge4": 0,
  "additionalRateCharge5": 0,
  "adults": 0,
  "children": 0,
  "infants": 0,
  "minimumChargePerPeriod": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalRateCharge1|integer(currency)|false|none|none|
|additionalRateCharge2|integer(currency)|false|none|none|
|additionalRateCharge3|integer(currency)|false|none|none|
|additionalRateCharge4|integer(currency)|false|none|none|
|additionalRateCharge5|integer(currency)|false|none|none|
|adults|integer(currency)|false|none|none|
|children|integer(currency)|false|none|none|
|infants|integer(currency)|false|none|none|
|minimumChargePerPeriod|integer(currency)|false|none|none|

<h2 id="tocS_ratePeriod">ratePeriod</h2>
<!-- backwards compatibility -->
<a id="schemarateperiod"></a>
<a id="schema_ratePeriod"></a>
<a id="tocSrateperiod"></a>
<a id="tocsrateperiod"></a>

```json
{
  "id": 123,
  "cancellationPolicyId": 2,
  "dateFrom": "2019-01-16 00:00:00",
  "dateTo": "2021-01-16 23:59:59",
  "descirption": "Extended",
  "minimumReservationPeriod": 0,
  "noDiscountAllowed": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|descirption|string|false|none|none|
|minimumReservationPeriod|integer(int32)|false|none|none|
|noDiscountAllowed|boolean|false|none|none|

<h2 id="tocS_rateLookupsRequest">rateLookupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaratelookupsrequest"></a>
<a id="schema_rateLookupsRequest"></a>
<a id="tocSratelookupsrequest"></a>
<a id="tocsratelookupsrequest"></a>

```json
{
  "areaIds": [
    12,
    13
  ],
  "categoryIds": [
    4,
    3
  ],
  "rateIds": [
    1380,
    1159
  ],
  "dateFrom": "2019-01-16 00:00:00",
  "dateTo": "2021-01-16 23:59:59",
  "excludeAllYearPeriods": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaIds|[integer]|false|none|none|
|categoryIds|[integer]|false|none|Required if rateIds is not provided. Either rateIds or categoryIds must be included in the request.|
|rateIds|[integer]|false|none|Required if categoryIds is not provided. Either rateIds or categoryIds must be included in the request.|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|excludeAllYearPeriods|boolean|false|none|none|

<h2 id="tocS_rateLookups">rateLookups</h2>
<!-- backwards compatibility -->
<a id="schemaratelookups"></a>
<a id="schema_rateLookups"></a>
<a id="tocSratelookups"></a>
<a id="tocsratelookups"></a>

```json
{
  "areaId": 1,
  "categoryId": 1,
  "rateId": 1282,
  "rateName": "Staff, family & friends",
  "periodId": 372,
  "propertyId": 1,
  "periodFrom": "2017-05-01 00:00:00",
  "periodTo": "2021-01-16 23:59:59",
  "periodDescription": "Low Season",
  "tableId": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|rateId|integer(int32)|false|none|none|
|rateName|string|false|none|none|
|periodId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|periodFrom|string(date-time)|false|none|none|
|periodTo|string(date-time)|false|none|none|
|periodDescription|string|false|none|none|
|tableId|integer(int32)|false|none|none|

<h2 id="tocS_quoteRequest">quoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquoterequest"></a>
<a id="schema_quoteRequest"></a>
<a id="tocSquoterequest"></a>
<a id="tocsquoterequest"></a>

```json
{
  "additional1": 1,
  "additional2": 2,
  "additional3": 1,
  "additional4": 0,
  "additional5": 0,
  "additional6": 2,
  "additional7": 2,
  "adults": 2,
  "agentId": 1,
  "areaId": 1,
  "arrivalDate": "2018-11-01 10:00:00",
  "categoryId": 4,
  "children": 1,
  "departureDate": "2018-11-05 13:25:00",
  "discountId": 2,
  "includeAdditionalsBreakdown": true,
  "ignoreRateRestrictions": false,
  "includeTaxBreakdown": true,
  "infants": 1,
  "propertyId": 1,
  "rateTypeId": 2,
  "secondDiscountId": 2,
  "useIbeDepositRules": true,
  "allotmentAssociationId": "travelAgent",
  "includeAvailableAreas": true
}

```

Used:<br>POST /rates/rateQuote<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional1|integer(int32)|false|none|none|
|additional2|integer(int32)|false|none|none|
|additional3|integer(int32)|false|none|none|
|additional4|integer(int32)|false|none|none|
|additional5|integer(int32)|false|none|none|
|additional6|integer(int32)|false|none|none|
|additional7|integer(int32)|false|none|none|
|adults|integer(int32)|true|none|none|
|agentId|integer(int32)|true|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|categoryId|integer(int32)|true|none|none|
|children|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|discountId|integer(int32)|false|none|none|
|includeAdditionalsBreakdown|boolean|false|none|none|
|ignoreRateRestrictions|boolean|false|none|none|
|includeTaxBreakdown|boolean|false|none|none|
|infants|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rateTypeId|integer(int32)|true|none|none|
|secondDiscountId|integer(int32)|false|none|none|
|useIbeDepositRules|boolean|false|none|none|
|allotmentAssociationId|string|false|none|none|
|includeAvailableAreas|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allotmentAssociationId|TravelAgent|

<h2 id="tocS_quoteResponse">quoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponse"></a>
<a id="schema_quoteResponse"></a>
<a id="tocSquoteresponse"></a>
<a id="tocsquoteresponse"></a>

```json
{
  "baseRate": 1150,
  "baseRateDiscountAmount": 0,
  "baseRateRentalReductionAmount": 0,
  "baseRateTax": 115,
  "categoryId": 4,
  "deposit1Amount": 376.25,
  "deposit1RequiredBy": "2023-06-13 10:10:34",
  "deposit2Amount": 0,
  "deposit2RequiredBy": "0001-01-01 00:00:00",
  "discountAmount": 0,
  "firstNightRate": 1505,
  "package": 240,
  "packageTax": 0,
  "rateBreakdown": [
    {
      "baseRateAmount": 1150,
      "baseRateRaw": 800,
      "currencyCode": "AUD",
      "currencySymbol": "$",
      "displayBaseRate": 800,
      "displayTotalPackage": 240,
      "displayTotalRate": 1505,
      "displayTotalTax": 50,
      "packageAmount": 240,
      "packageBreakdown": [
        {
          "amount": 240,
          "baseIncludesPackageAmount": false,
          "glCodeId": 24,
          "packageFeeType": 1,
          "packageId": 23910,
          "perAdultFee": 20,
          "perChildFee": 0,
          "perExtra4Fee": 20,
          "perExtra5Fee": 40,
          "perExtra6Fee": 0,
          "perExtra7Fee": 0,
          "perExtra8Fee": 0,
          "perInfantFee": 0,
          "auantity": 0,
          "sundryId": 3,
          "sundryName": "B1 B/Fast food",
          "taxBreakdown": [
            {
              "amount": 1,
              "description": "B1 B/Fast food Taxes",
              "packageId": 1,
              "perAdultFee": 10,
              "perInfantFee": 10,
              "perPersonAdditionalTax": true,
              "perPersonPercentage": 0,
              "perPersonPercentageAdditionalPercentage": 0,
              "perPersonPercentageCapped": false,
              "perPersonPercentageCappedAmount": 0,
              "serviceCharge": false,
              "taxExemptionApplied": false,
              "taxId": 3,
              "taxMethod": 0,
              "theDate": "2018-09-03 00:00:00"
            }
          ],
          "totalTax": 30,
          "theDate": "2023-06-15 00:00:00"
        }
      ],
      "additionalsBreakdown": [
        {
          "additionalType": "Adult",
          "amount": 20
        },
        {
          "additionalType": "Child",
          "amount": 20
        }
      ],
      "packageHiddenAmount": 0,
      "packageShownAmount": 240,
      "rateType": "Rate 1",
      "rateTypeId": 3,
      "theDate": "2023-06-15 00:00:00",
      "totalExtras": 350,
      "totalPackage": 240,
      "totalPackageIncludedInBase": 0,
      "totalPackageNotIncludedInBase": 240,
      "totalRate": 1390,
      "taxBreakdown": [
        {
          "amount": 10,
          "description": "10% State Tax"
        },
        {
          "amount": 9,
          "description": "SGST 9"
        }
      ]
    }
  ],
  "secondDiscountAmount": 0,
  "useResDiscountNightly": false,
  "cancellationPolicyId": 1,
  "availableAreas": [
    {
      "id": 13,
      "name": "01 013",
      "categoryId": 4,
      "propertyId": 1,
      "cleanStatus": "Occupied"
    }
  ]
}

```

Used:<br>POST /rates/rateQuote<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseRate|number(currency)|false|none|none|
|baseRateDiscountAmount|number(currency)|false|none|none|
|baseRateRentalReductionAmount|number(currency)|false|none|none|
|baseRateTax|number(currency)|false|none|none|
|cancellationPolicyId|integer(in32)|false|none|none|
|availableAreas|[[quoteResponse_availableAreas](#schemaquoteresponse_availableareas)]|false|none|none|
|categoryId|integer(in32)|false|none|none|
|deposit1Amount|number(currency)|false|none|none|
|deposit1RequiredBy|string(date-time)|false|none|none|
|deposit2Amount|number(currency)|false|none|none|
|deposit2RequiredBy|string(date-time)|false|none|none|
|discountAmount|number(currency)|false|none|none|
|firstNightRate|number(currency)|false|none|none|
|package|number(currency)|false|none|none|
|packageTax|number(currency)|false|none|none|
|rateBreakdown|[[rateBreakdown](#schemaratebreakdown)]|false|none|[Used in Quote Response]|
|secondDiscountAmount|number(currency)|false|none|none|
|useResDiscountNightly|boolean|false|none|none|
|taxBreakdown|[[quoteResponse_taxBreakdown](#schemaquoteresponse_taxbreakdown)]|false|none|none|
|additionalsBreakdown|[[quoteResponse_additionalsBreakdown](#schemaquoteresponse_additionalsbreakdown)]|false|none|none|

<h2 id="tocS_rateBreakdown">rateBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaratebreakdown"></a>
<a id="schema_rateBreakdown"></a>
<a id="tocSratebreakdown"></a>
<a id="tocsratebreakdown"></a>

```json
{
  "baseRateAmount": 0,
  "baseRateRaw": 0,
  "currencyCode": "string",
  "currencySymbol": "string",
  "displayBaseRate": 0,
  "displayTotalPackage": 0,
  "displayTotalRate": 0,
  "displayTotalTax": 0,
  "packageAmount": 0,
  "packageBreakdown": [
    {
      "amount": 0,
      "baseIncludesPackageAmount": true,
      "glCodeId": 0,
      "packageFeeType": 0,
      "packageId": 0,
      "perAdultFee": 0,
      "perChildFee": 0,
      "perExtra4Fee": 0,
      "perExtra5Fee": 0,
      "perExtra6Fee": 0,
      "perExtra7Fee": 0,
      "perExtra8Fee": 0,
      "perInfantFee": 0,
      "auantity": 0,
      "sundryId": 0,
      "sundryName": "string",
      "taxBreakdown": [
        {
          "amount": 0,
          "description": "string",
          "packageId": 0,
          "perAdultFee": 0,
          "perInfantFee": 0,
          "perPersonAdditionalTax": true,
          "perPersonPercentage": 0,
          "perPersonPercentageAdditionalPercentage": 0,
          "perPersonPercentageCapped": true,
          "perPersonPercentageCappedAmount": 0,
          "serviceCharge": true,
          "taxExemptionApplied": true,
          "taxId": 0,
          "taxMethod": 0,
          "theDate": "string"
        }
      ],
      "totalTax": 0,
      "theDate": "2019-08-24T14:15:22Z"
    }
  ],
  "packageHiddenAmount": 0,
  "packageShownAmount": 0,
  "rateType": "string",
  "rateTypeId": 0,
  "theDate": "2019-08-24T14:15:22Z",
  "totalExtras": 0,
  "totalPackage": 0,
  "totalPackageIncludedInBase": 0,
  "totalPackageNotIncludedInBase": 0,
  "totalRate": 0
}

```

Used in Quote Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseRateAmount|number(currency)|false|none|none|
|baseRateRaw|number(currency)|false|none|none|
|currencyCode|string|false|none|none|
|currencySymbol|string|false|none|none|
|displayBaseRate|number(currency)|false|none|none|
|displayTotalPackage|number(currency)|false|none|none|
|displayTotalRate|number(currency)|false|none|none|
|displayTotalTax|number(currency)|false|none|none|
|packageAmount|number(currency)|false|none|none|
|packageBreakdown|[[packageBreakdown](#schemapackagebreakdown)]|false|none|[Used in Rate Breakdown]|
|packageHiddenAmount|number(currency)|false|none|none|
|packageShownAmount|number(currency)|false|none|none|
|rateType|string|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|theDate|string(date-time)|false|none|none|
|totalExtras|number(currency)|false|none|none|
|totalPackage|number(currency)|false|none|none|
|totalPackageIncludedInBase|number(currency)|false|none|none|
|totalPackageNotIncludedInBase|number(currency)|false|none|none|
|totalRate|number(currency)|false|none|none|

<h2 id="tocS_packageBreakdown">packageBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemapackagebreakdown"></a>
<a id="schema_packageBreakdown"></a>
<a id="tocSpackagebreakdown"></a>
<a id="tocspackagebreakdown"></a>

```json
{
  "amount": 0,
  "baseIncludesPackageAmount": true,
  "glCodeId": 0,
  "packageFeeType": 0,
  "packageId": 0,
  "perAdultFee": 0,
  "perChildFee": 0,
  "perExtra4Fee": 0,
  "perExtra5Fee": 0,
  "perExtra6Fee": 0,
  "perExtra7Fee": 0,
  "perExtra8Fee": 0,
  "perInfantFee": 0,
  "auantity": 0,
  "sundryId": 0,
  "sundryName": "string",
  "taxBreakdown": [
    {
      "amount": 0,
      "description": "string",
      "packageId": 0,
      "perAdultFee": 0,
      "perInfantFee": 0,
      "perPersonAdditionalTax": true,
      "perPersonPercentage": 0,
      "perPersonPercentageAdditionalPercentage": 0,
      "perPersonPercentageCapped": true,
      "perPersonPercentageCappedAmount": 0,
      "serviceCharge": true,
      "taxExemptionApplied": true,
      "taxId": 0,
      "taxMethod": 0,
      "theDate": "string"
    }
  ],
  "totalTax": 0,
  "theDate": "2019-08-24T14:15:22Z"
}

```

Used in Rate Breakdown

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|baseIncludesPackageAmount|boolean|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|packageFeeType|integer(int32)|false|none|none|
|packageId|integer(int32)|false|none|none|
|perAdultFee|number(currency)|false|none|none|
|perChildFee|number(currency)|false|none|none|
|perExtra4Fee|number(currency)|false|none|none|
|perExtra5Fee|number(currency)|false|none|none|
|perExtra6Fee|number(currency)|false|none|none|
|perExtra7Fee|number(currency)|false|none|none|
|perExtra8Fee|number(currency)|false|none|none|
|perInfantFee|number(currency)|false|none|none|
|auantity|integer(int32)|false|none|none|
|sundryId|integer(int32)|false|none|none|
|sundryName|string|false|none|none|
|taxBreakdown|[[taxBreakdown](#schemataxbreakdown)]|false|none|[Used in Package Breakdown]|
|totalTax|number(currency)|false|none|none|
|theDate|string(date-time)|false|none|none|

<h2 id="tocS_taxBreakdown">taxBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemataxbreakdown"></a>
<a id="schema_taxBreakdown"></a>
<a id="tocStaxbreakdown"></a>
<a id="tocstaxbreakdown"></a>

```json
{
  "amount": 0,
  "description": "string",
  "packageId": 0,
  "perAdultFee": 0,
  "perInfantFee": 0,
  "perPersonAdditionalTax": true,
  "perPersonPercentage": 0,
  "perPersonPercentageAdditionalPercentage": 0,
  "perPersonPercentageCapped": true,
  "perPersonPercentageCappedAmount": 0,
  "serviceCharge": true,
  "taxExemptionApplied": true,
  "taxId": 0,
  "taxMethod": 0,
  "theDate": "string"
}

```

Used in Package Breakdown

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|description|string|false|none|none|
|packageId|integer(int32)|false|none|none|
|perAdultFee|number(currency)|false|none|none|
|perInfantFee|number(currency)|false|none|none|
|perPersonAdditionalTax|boolean|false|none|'true When A Per Person Percentage Tax Has 'Add Additional %' Ticked|
|perPersonPercentage|integer(int32)|false|none|none|
|perPersonPercentageAdditionalPercentage|integer(int32)|false|none|none|
|perPersonPercentageCapped|boolean|false|none|none|
|perPersonPercentageCappedAmount|number(currency)|false|none|none|
|serviceCharge|boolean|false|none|none|
|taxExemptionApplied|boolean|false|none|none|
|taxId|integer(int32)|false|none|none|
|taxMethod|integer(int32)|false|none|none|
|theDate|string(time-date)|false|none|none|

<h2 id="tocS_rateAdjustmentRequest">rateAdjustmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarateadjustmentrequest"></a>
<a id="schema_rateAdjustmentRequest"></a>
<a id="tocSrateadjustmentrequest"></a>
<a id="tocsrateadjustmentrequest"></a>

```json
{
  "id": 1377,
  "categoryInfo": [
    {
      "basePeople": 2,
      "categoryId": 4,
      "dailyRate": 140,
      "dateFrom": "2020-02-10 00:00:00",
      "dateTo": "2020-02-15 00:00:00",
      "minimumStay": 2
    },
    {
      "basePeople": 2,
      "categoryId": 6,
      "dailyRate": 240,
      "dateFrom": "2020-02-10 00:00:00",
      "dateTo": "2020-02-15 00:00:00",
      "minimumStay": 2
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|categoryInfo|[[rateAdjustmentRequestVariable](#schemarateadjustmentrequestvariable)]|false|none|none|

<h2 id="tocS_rateAdjustmentRequestVariable">rateAdjustmentRequestVariable</h2>
<!-- backwards compatibility -->
<a id="schemarateadjustmentrequestvariable"></a>
<a id="schema_rateAdjustmentRequestVariable"></a>
<a id="tocSrateadjustmentrequestvariable"></a>
<a id="tocsrateadjustmentrequestvariable"></a>

```json
{
  "basePeople": 0,
  "categoryId": 0,
  "dailyRate": 0,
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z",
  "minimumStay": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePeople|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|dailyRate|number(currency)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|minimumStay|integer(int32)|false|none|none|

<h2 id="tocS_propertyRules">propertyRules</h2>
<!-- backwards compatibility -->
<a id="schemapropertyrules"></a>
<a id="schema_propertyRules"></a>
<a id="tocSpropertyrules"></a>
<a id="tocspropertyrules"></a>

```json
{
  "cancellationPolicyId": 0,
  "bookingSourceId": 180,
  "discountId": 97,
  "glCodeId": 39,
  "longDescription": "This is the Long Description",
  "marketSegmentId": 55,
  "mealPlanId": 0,
  "rateChargeDescription": "Test Property1 BAR",
  "advancePurchaseNights": 0,
  "lastMinuteNights": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationPolicyId|integer(int32)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|discountId|integer(int32)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|longDescription|string|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|rateChargeDescription|string|false|none|none|
|advancePurchaseNights|integer(int32)|false|none|none|
|lastMinuteNights|integer(int32)|false|none|none|
|arrivingOnMonday|boolean|false|none|none|
|arrivingOnTuesday|boolean|false|none|none|
|arrivingOnWednesday|boolean|false|none|none|
|arrivingOnThursday|boolean|false|none|none|
|arrivingOnFriday|boolean|false|none|none|
|arrivingOnSaturday|boolean|false|none|none|
|arrivingOnSunday|boolean|false|none|none|

<h2 id="tocS_propertyRulesSearch">propertyRulesSearch</h2>
<!-- backwards compatibility -->
<a id="schemapropertyrulessearch"></a>
<a id="schema_propertyRulesSearch"></a>
<a id="tocSpropertyrulessearch"></a>
<a id="tocspropertyrulessearch"></a>

```json
{
  "propertyIds": [
    1,
    4
  ],
  "rateIds": [
    1276,
    1281
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyIds|[integer]|false|none|none|
|rateIds|[integer]|false|none|none|

<h2 id="tocS_reason">reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
{
  "id": 2,
  "reasonType": "Reservation Cancelled",
  "code": "4",
  "description": "Cancelled by Customer",
  "reason": "Cancelled by Customer"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|reasonType|string|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_relationships">relationships</h2>
<!-- backwards compatibility -->
<a id="schemarelationships"></a>
<a id="schema_relationships"></a>
<a id="tocSrelationships"></a>
<a id="tocsrelationships"></a>

```json
{
  "id": 1,
  "name": "Sister"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_reportAreaIncomeSummaryBuild">reportAreaIncomeSummaryBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportareaincomesummarybuild"></a>
<a id="schema_reportAreaIncomeSummaryBuild"></a>
<a id="tocSreportareaincomesummarybuild"></a>
<a id="tocsreportareaincomesummarybuild"></a>

```json
{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "areaIds": [
    1,
    2
  ],
  "reservationStatusIds": [
    0,
    1,
    2,
    3
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|areaIds|[integer]|false|none|none|
|reservationStatusIds|[integer]|false|none|none|

<h2 id="tocS_reportAreaIncomeSummaryResponse">reportAreaIncomeSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportareaincomesummaryresponse"></a>
<a id="schema_reportAreaIncomeSummaryResponse"></a>
<a id="tocSreportareaincomesummaryresponse"></a>
<a id="tocsreportareaincomesummaryresponse"></a>

```json
{
  "category": "UPC/3 Bedroom",
  "areaId": 38,
  "area": "BUB/UPC/3207/3BR",
  "numberOfReservations": 16,
  "numberOfAdults": 59,
  "numberOfChildren": 4,
  "nights": 203,
  "actualNights": 196,
  "grossRevenue": "126,658.20",
  "nettRevenue": "115,164.11",
  "grossOther": "10,907.90",
  "nettOther": "10,895.42",
  "totalGrossRevenue": "137,566.10",
  "totalNettRevenue": "126,059.53",
  "averageGrossRevenue": "7,916.14",
  "averageNettRevenue": "7,197.76",
  "averageDiscount": "0.00",
  "averageGrossOther": "681.74",
  "averageNettOther": "680.96",
  "averageDailyGrossRevenue": "646.22",
  "averageDailyNettRevenue": "587.57",
  "occupancy": "0.64"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|areaId|integer(int32)|false|none|none|
|area|string|false|none|none|
|numberOfReservations|integer(int32)|false|none|none|
|numberOfAdults|integer(int32)|false|none|none|
|numberOfChildren|integer(int32)|false|none|none|
|nights|integer(int32)|false|none|none|
|actualNights|integer(int32)|false|none|none|
|grossRevenue|string|false|none|none|
|nettRevenue|string|false|none|none|
|grossOther|string|false|none|none|
|nettOther|string|false|none|none|
|totalGrossRevenue|string|false|none|none|
|totalNettRevenue|string|false|none|none|
|averageGrossRevenue|string|false|none|none|
|averageNettRevenue|string|false|none|none|
|averageDiscount|string|false|none|none|
|averageGrossOther|string|false|none|none|
|averageNettOther|string|false|none|none|
|averageDailyGrossRevenue|string|false|none|none|
|averageDailyNettRevenue|string|false|none|none|
|occupancy|string|false|none|none|

<h2 id="tocS_reportsAuditTrail">reportsAuditTrail</h2>
<!-- backwards compatibility -->
<a id="schemareportsaudittrail"></a>
<a id="schema_reportsAuditTrail"></a>
<a id="tocSreportsaudittrail"></a>
<a id="tocsreportsaudittrail"></a>

```json
{
  "propertyIds": [
    1
  ],
  "accountClassifications": [
    "Reservation"
  ],
  "glCodeIds": [],
  "byPostingDate": true,
  "groupBy": "NoGrouping",
  "transactionOption": "ByDate",
  "fromDate": "2023-10-05 00:00:00",
  "toDate": "2023-10-05 23:23:59",
  "transactionIdFrom": 0,
  "transactionIdTo": 0,
  "sortBy": "reservationId"
}

```

Used:<br>POST /reports/auditTrail<br>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyIds|[integer]|false|none|none|
|accountClassifications|[string]|false|none|none|
|glCodeIds|[integer]|false|none|none|
|byPostingDate|boolean|false|none|none|
|groupBy|string|false|none|none|
|transactionOption|string|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|traqnsactionIdFrom|integer(int32)|false|none|none|
|traqnsactionIdTo|integer(int32)|false|none|none|
|sortBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBy|noGrouping|
|groupBy|glCode|
|groupBy|category|
|groupBy|user|
|groupBy|area|
|groupBy|company|
|groupBy|travelAgent|
|groupBy|bookingSource|
|transactionOption|byDate|
|transactionOption|byId|
|sortBy|transactionId|
|sortBy|reservationId|
|sortBy|surname|
|sortBy|glCode|
|sortBy|transactionDate|
|sortBy|area|
|sortBy|studentId|
|sortBy|loyaltyMembershipType|

<h2 id="tocS_reportsAuditTrailResponse">reportsAuditTrailResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportsaudittrailresponse"></a>
<a id="schema_reportsAuditTrailResponse"></a>
<a id="tocSreportsaudittrailresponse"></a>
<a id="tocsreportsaudittrailresponse"></a>

```json
{
  "Data": [
    {
      "propertyId": 1,
      "propertyName": "Test property 1",
      "glCodeId": 40,
      "glCod": "Toni1",
      "postingDate": "2023-10-05 00:00:00",
      "createdDate": "2023-10-05 18:26:08",
      "transactionId": 2492469,
      "reservationId": 216865,
      "accountId": 362486,
      "areaId": 287,
      "guestSurname": "",
      "guestGiven": "",
      "transactionDescription": "Currency Adjustment",
      "taxInvoiceId": 0,
      "userId": 186,
      "debit": 0,
      "credit": 0,
      "loyaltyMembershipType": "",
      "group": ""
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[reportsAuditTrailResponseData](#schemareportsaudittrailresponsedata)]|false|none|none|

<h2 id="tocS_reportsAuditTrailResponseData">reportsAuditTrailResponseData</h2>
<!-- backwards compatibility -->
<a id="schemareportsaudittrailresponsedata"></a>
<a id="schema_reportsAuditTrailResponseData"></a>
<a id="tocSreportsaudittrailresponsedata"></a>
<a id="tocsreportsaudittrailresponsedata"></a>

```json
{
  "propertyId": 0,
  "propertyName": "string",
  "glCodeId": 0,
  "postingDate": "2019-08-24T14:15:22Z",
  "createDate": "2019-08-24T14:15:22Z",
  "transactionId": 0,
  "reservationId": 0,
  "accountId": 0,
  "areaId": 0,
  "guestSurname": "string",
  "guestGiven": "string",
  "transactionDescription": "string",
  "taxInvoiceId": 0,
  "userId": 0,
  "debits": 0,
  "credits": 0,
  "loyaltyMembershipTypeId": 0,
  "group": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|postingDate|string(date-time)|false|none|none|
|createDate|string(date-time)|false|none|none|
|transactionId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|guestSurname|string|false|none|none|
|guestGiven|string|false|none|none|
|transactionDescription|string|false|none|none|
|taxInvoiceId|integer(int32)|false|none|none|
|userId|integer(int32)|false|none|none|
|debits|integer(decimal)|false|none|none|
|credits|integer(decimal)|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|group|string|false|none|none|

<h2 id="tocS_reportsCashChargeBuild">reportsCashChargeBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportscashchargebuild"></a>
<a id="schema_reportsCashChargeBuild"></a>
<a id="tocSreportscashchargebuild"></a>
<a id="tocsreportscashchargebuild"></a>

```json
{
  "dateFrom": "2022-06-01",
  "dateTo": "2022-06-21",
  "groupBy": "Category",
  "propertyIds": [
    1,
    3,
    4
  ],
  "categoryIds": [
    0
  ],
  "groupByProperty": true,
  "excludeOwnerAccountingCharges": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|groupBy|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|categoryIds|[integer]|false|none|none|
|groupByProperty|boolean|false|none|none|
|excludeOwnerAccountingCharges|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBy|bookingSource|
|groupBy|category|
|groupBy|glCode|

<h2 id="tocS_reportsCashChargeResponse">reportsCashChargeResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportscashchargeresponse"></a>
<a id="schema_reportsCashChargeResponse"></a>
<a id="tocSreportscashchargeresponse"></a>
<a id="tocsreportscashchargeresponse"></a>

```json
{
  "propertyId": 1,
  "glCode": "4-1000",
  "glCodeId": 33,
  "description": "Accommodation",
  "totalCharge": 53.1,
  "totalGST": 4.82,
  "gstExclusive": 48.28,
  "gstFreeCharge": 0,
  "fullGSTGST": 4.82,
  "fullGSTCharge": 53.1,
  "concessionalGSTCharge": 0,
  "concessionalGSTGST": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|glCode|string|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|description|string|false|none|none|
|totalCharge|integer(decimal)|false|none|none|
|totalGST|integer(decimal)|false|none|none|
|gstExclusive|integer(decimal)|false|none|none|
|gstFreeCharge|integer(decimal)|false|none|none|
|fullGSTGST|integer(decimal)|false|none|none|
|fullGSTCharge|integer(decimal)|false|none|none|
|concessionalGSTCharge|integer(decimal)|false|none|none|
|concessionalGSTGST|integer(decimal)|false|none|none|

<h2 id="tocS_reportsDebtorsLedgerBuild">reportsDebtorsLedgerBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportsdebtorsledgerbuild"></a>
<a id="schema_reportsDebtorsLedgerBuild"></a>
<a id="tocSreportsdebtorsledgerbuild"></a>
<a id="tocsreportsdebtorsledgerbuild"></a>

```json
{
  "asOfDate": "2022-06-21",
  "groupByProperty": false,
  "groupBy": "Category",
  "propertyIds": [
    1
  ],
  "categoryIds": [],
  "balance": "AgedYDays",
  "balanceAgeX": 12,
  "balanceAgeY": 15,
  "balanceAgeZ": 33,
  "accountClassIds": null,
  "accountTypes": [],
  "includeLongTerm": true,
  "includeNonLongTerm": true,
  "onlyCompanies": false,
  "onlyTravelAgents": false,
  "onlyWholesalers": false,
  "creditDebit": "Both",
  "accountIds": [],
  "excludeFutureReservations": false,
  "clientClassId": 0,
  "excludeTrustChargesForReservationAccounts": false,
  "invoicedTransactionsOnly": false,
  "clientStatusIds": [],
  "onlyNonARDebtors": false,
  "includeTrustBreakdown": false,
  "compareOldAndNew": false,
  "excludeNonInvoicedRepeatCharges": false,
  "includeManagementExpensesBreakdown": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asOfDate|string(date-time)|false|none|none|
|groupByProperty|boolean|false|none|none|
|groupBy|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|categoryIds|[integer]|false|none|none|
|balance|string|false|none|none|
|balanceAgeX|integer(int32)|false|none|none|
|balanceAgeY|integer(int32)|false|none|none|
|balanceAgeZ|integer(int32)|false|none|none|
|accountClassIds|[integer]|false|none|none|
|accountTypes|string|false|none|none|
|includeLongTerm|boolean|false|none|none|
|includeNonLongTerm|boolean|false|none|none|
|onlyCompanies|boolean|false|none|none|
|onlyTravelAgents|boolean|false|none|none|
|onlyWholesalers|boolean|false|none|none|
|creditDebit|string|false|none|none|
|accountIds|[integer]|false|none|none|
|excludeFutureReservations|boolean|false|none|none|
|clientClassId|integer(int32)|false|none|none|
|excludeTrustChargesForReservationAccounts|boolean|false|none|none|
|invoicedTransactionsOnly|boolean|false|none|none|
|clientStatusIds|[integer]|false|none|none|
|onlyNonARDebtors|boolean|false|none|none|
|includeTrustBreakdown|boolean|false|none|none|
|compareOldAndNew|boolean|false|none|none|
|excludeNonInvoicedRepeatCharges|boolean|false|none|none|
|includeManagementExpensesBreakdown|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBy|none|
|groupBy|category|
|groupBy|company|
|groupBy|accountClass|
|groupBy|travelAgent|
|groupBy|companyOverTravelAgentPreference|
|groupBy|travelAgentOverCompanyPrefrence|
|groupBy|AR|
|groupBy|accountsReceivableSummary|
|balance|all|
|balance|current|
|balance|AgedYDays|
|accountTypes|none|
|accountTypes|all|
|accountTypes|reservations|
|accountTypes|guest|
|accountTypes|travelAgent|
|accountTypes|owners|
|creditDebit|all|
|creditDebit|credit|
|creditDebit|debit|

<h2 id="tocS_reportsDebtorsLedgerResponse">reportsDebtorsLedgerResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportsdebtorsledgerresponse"></a>
<a id="schema_reportsDebtorsLedgerResponse"></a>
<a id="tocSreportsdebtorsledgerresponse"></a>
<a id="tocsreportsdebtorsledgerresponse"></a>

```json
{
  "reportData": [
    {
      "accountId": 1,
      "propertyId": 1,
      "reservationId": 0,
      "guestId": 0,
      "credits": 0,
      "current": 0,
      "debits": 8883.18,
      "ageZ": 8751.74,
      "ageY": 0,
      "ageX": 0,
      "total": 8751.74,
      "trustTotal": 0,
      "nonTrustTotal": 0,
      "accountHasIssues": false,
      "group": "",
      "invoiceId": 0,
      "recordType": "NonAR",
      "arCompanyId": 0,
      "arTravelAgentId": 0,
      "managementExpenses": 0,
      "notionalExpenses": 0,
      "sundryExpenses": 8797.89,
      "ownerIncome": -46.15,
      "managementExpensesBreakdown": [
        {
          "breakdownType": "Sundry",
          "reservationId": 0,
          "accountId": 1,
          "amount": 148.5,
          "gst": 13.5
        },
        {
          "breakdownType": "Sundry",
          "reservationId": 0,
          "accountId": 1,
          "amount": 148.5,
          "gst": 13.5
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportData|[[reportsDebtorsLedgerResponseData](#schemareportsdebtorsledgerresponsedata)]|false|none|none|

<h2 id="tocS_reportsDebtorsLedgerResponseData">reportsDebtorsLedgerResponseData</h2>
<!-- backwards compatibility -->
<a id="schemareportsdebtorsledgerresponsedata"></a>
<a id="schema_reportsDebtorsLedgerResponseData"></a>
<a id="tocSreportsdebtorsledgerresponsedata"></a>
<a id="tocsreportsdebtorsledgerresponsedata"></a>

```json
{
  "accountId": 0,
  "propertyId": 0,
  "reservationId": 0,
  "guestId": 0,
  "credits": 0,
  "current": 0,
  "debits": 0,
  "ageZ": 0,
  "ageY": 0,
  "ageX": 0,
  "total": 0,
  "trustTotal": 0,
  "nonTrustTotal": 0,
  "accountHasIssues": true,
  "group": "string",
  "invoiceId": 0,
  "recordType": "string",
  "arCompanyId": 0,
  "arTravelAgentId": 0,
  "managementExpenses": 0,
  "notionalExpenses": 0,
  "sundryExpenses": 0,
  "ownerIncome": 0,
  "managementExpensesBreakdown": [
    {
      "breakdownType": "string",
      "reservationId": 0,
      "accountId": 0,
      "amount": 0,
      "gst": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|credits|integer(decimal)|false|none|none|
|current|integer(decimal)|false|none|none|
|debits|integer(decimal)|false|none|none|
|ageZ|integer(decimal)|false|none|none|
|ageY|integer(decimal)|false|none|none|
|ageX|integer(decimal)|false|none|none|
|total|integer(decimal)|false|none|none|
|trustTotal|integer(decimal)|false|none|none|
|nonTrustTotal|integer(decimal)|false|none|none|
|accountHasIssues|boolean|false|none|none|
|group|string|false|none|none|
|invoiceId|integer(int32)|false|none|none|
|recordType|string|false|none|none|
|arCompanyId|integer(int32)|false|none|none|
|arTravelAgentId|integer(int32)|false|none|none|
|managementExpenses|integer(decimal)|false|none|none|
|notionalExpenses|integer(decimal)|false|none|none|
|sundryExpenses|integer(decimal)|false|none|none|
|ownerIncome|integer(decimal)|false|none|none|
|managementExpensesBreakdown|[[reportsDebtorsLedgerResponseDailyBreakdown](#schemareportsdebtorsledgerresponsedailybreakdown)]|false|none|none|

<h2 id="tocS_reportsDebtorsLedgerResponseDailyBreakdown">reportsDebtorsLedgerResponseDailyBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemareportsdebtorsledgerresponsedailybreakdown"></a>
<a id="schema_reportsDebtorsLedgerResponseDailyBreakdown"></a>
<a id="tocSreportsdebtorsledgerresponsedailybreakdown"></a>
<a id="tocsreportsdebtorsledgerresponsedailybreakdown"></a>

```json
{
  "breakdownType": "string",
  "reservationId": 0,
  "accountId": 0,
  "amount": 0,
  "gst": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakdownType|string|false|none|none|
|reservationId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|amount|integer(decimal)|false|none|none|
|gst|integer(decimal)|false|none|none|

<h2 id="tocS_reportExpensesAreaSummaryBuild">reportExpensesAreaSummaryBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportexpensesareasummarybuild"></a>
<a id="schema_reportExpensesAreaSummaryBuild"></a>
<a id="tocSreportexpensesareasummarybuild"></a>
<a id="tocsreportexpensesareasummarybuild"></a>

```json
{
  "dateFrom": "2021-11-01 00:00:00",
  "dateTo": "2021-12-01 00:00:00",
  "categoryIds": [
    12,
    13
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|categoryIds|[integer]|false|none|none|

<h2 id="tocS_reportExpensesAreaSummaryResponse">reportExpensesAreaSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportexpensesareasummaryresponse"></a>
<a id="schema_reportExpensesAreaSummaryResponse"></a>
<a id="tocSreportexpensesareasummaryresponse"></a>
<a id="tocsreportexpensesareasummaryresponse"></a>

```json
{
  "reportData": [
    {
      "area": "Amazing Grace",
      "ownerName": "Cannon Graham",
      "description": "Income",
      "amount": "422.00"
    },
    {
      "area": "Amazing Grace",
      "ownerName": "Cannon Graham",
      "description": "Management Fee",
      "amount": "-84.36"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportData|[[reportExpensesAreaSummaryResponseReportData](#schemareportexpensesareasummaryresponsereportdata)]|false|none|none|

<h2 id="tocS_reportExpensesAreaSummaryResponseReportData">reportExpensesAreaSummaryResponseReportData</h2>
<!-- backwards compatibility -->
<a id="schemareportexpensesareasummaryresponsereportdata"></a>
<a id="schema_reportExpensesAreaSummaryResponseReportData"></a>
<a id="tocSreportexpensesareasummaryresponsereportdata"></a>
<a id="tocsreportexpensesareasummaryresponsereportdata"></a>

```json
{
  "area": "Amazing Grace",
  "ownerName": "Cannon Graham",
  "description": "Income",
  "amount": "-84.36"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|none|
|ownerName|string|false|none|none|
|description|string|false|none|none|
|amount|string(number)|false|none|none|

<h2 id="tocS_reportsFlash">reportsFlash</h2>
<!-- backwards compatibility -->
<a id="schemareportsflash"></a>
<a id="schema_reportsFlash"></a>
<a id="tocSreportsflash"></a>
<a id="tocsreportsflash"></a>

```json
{
  "propertyIds": [
    1,
    3
  ],
  "runDate": "2025-01-03"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyIds|[integer]|true|none|List of property IDs|
|runDate|string(date)|true|none|The date for which the operation is run (YYYY-MM-DD)|

<h2 id="tocS_reportsFlashResponse">reportsFlashResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportsflashresponse"></a>
<a id="schema_reportsFlashResponse"></a>
<a id="tocSreportsflashresponse"></a>
<a id="tocsreportsflashresponse"></a>

```json
{
  "data": [
    {
      "grouping": "Income",
      "data": [
        {
          "grouping": "",
          "description": "",
          "dayBudget": 0,
          "dayActual": 120,
          "dayLastYear": 48.75,
          "monthBudget": 0,
          "monthActual": 240,
          "monthLastYear": 48.75,
          "yearBudget": 0,
          "yearActual": 14790.27,
          "yearLastYear": 65566.92,
          "glCodeId": 367,
          "glCode": "Some Tax GL Code",
          "glGroupId": 0,
          "todayOnly": false
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[reportsFlashResponse_data_1](#schemareportsflashresponse_data_1)]|false|none|none|

<h2 id="tocS_reportHistoryForecastBuild">reportHistoryForecastBuild</h2>
<!-- backwards compatibility -->
<a id="schemareporthistoryforecastbuild"></a>
<a id="schema_reportHistoryForecastBuild"></a>
<a id="tocSreporthistoryforecastbuild"></a>
<a id="tocsreporthistoryforecastbuild"></a>

```json
{
  "categoryIds": [
    8,
    9
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "operationalRevenue": "gross",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[integer]|false|none|none|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|operationalRevenue|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats|

#### Enumerated Values

|Property|Value|
|---|---|
|operationalRevenue|gross|
|operationalRevenue|nett|
|roomStatistics|on|
|roomStatistics|off|
|roomStatistics|ignore|

<h2 id="tocS_reportHistoryForecast">reportHistoryForecast</h2>
<!-- backwards compatibility -->
<a id="schemareporthistoryforecast"></a>
<a id="schema_reportHistoryForecast"></a>
<a id="tocSreporthistoryforecast"></a>
<a id="tocsreporthistoryforecast"></a>

```json
{
  "accommodationRevenue": 925.88,
  "arrivingRooms": 5,
  "averageRate": 370.24,
  "complementaryRooms": 0,
  "dayUseRooms": 0,
  "departingRooms": 6,
  "foodBeverageRevenue": 0,
  "houseUse": 0,
  "noShow": 0,
  "occupancyPercentage": 16.67,
  "otherRevenue": 668.48,
  "outOfOrderRooms": 1,
  "theDate": "2020-02-25 00:00:00",
  "totalOccupancy": 25
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodationRevenue|integer(decimal)|false|none|none|
|arrivingRooms|integer(int32)|false|none|none|
|averageRate|integer(decimal)|false|none|none|
|complementaryRooms|integer(int32)|false|none|none|
|dayUseRooms|integer(int32)|false|none|none|
|departingRooms|integer(int32)|false|none|none|
|foodBeverageRevenue|integer(decimal)|false|none|none|
|houseUse|integer(int32)|false|none|none|
|noShow|integer(int32)|false|none|none|
|occupancyPercentage|integer(decimal)|false|none|none|
|otherRevenue|integer(decimal)|false|none|none|
|outOfOrderRooms|integer(int32)|false|none|none|
|theDate|string(date-time)|false|none|none|
|totalOccupancy|integer(int32)|false|none|none|

<h2 id="tocS_reportNpnResultsBuild">reportNpnResultsBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportnpnresultsbuild"></a>
<a id="schema_reportNpnResultsBuild"></a>
<a id="tocSreportnpnresultsbuild"></a>
<a id="tocsreportnpnresultsbuild"></a>

```json
{
  "categoryIds": [
    4,
    6
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "npsRating": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "propertyIds": [
    1,
    2
  ],
  "reportBy": "surveyDate"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|npsRating|[integer]|false|none|Pass ratings between the range of 0 to 10|
|propertyIds|[integer]|true|none|none|
|reportBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reportBy|surveyDate|
|reportBy|departDate|

<h2 id="tocS_reportNpnResults">reportNpnResults</h2>
<!-- backwards compatibility -->
<a id="schemareportnpnresults"></a>
<a id="schema_reportNpnResults"></a>
<a id="tocSreportnpnresults"></a>
<a id="tocsreportnpnresults"></a>

```json
{
  "propertyId": 1,
  "totalResponses": 3,
  "responsesRate": 9.68,
  "netPromoterStore": 66.76,
  "service": 9.33,
  "standardOfFacilities": 7.67,
  "site": 9.33,
  "valueForMoney": 8.33,
  "surveyDeatils": [
    {
      "arrivalDate": "2020-06-28 16:37:00",
      "departureDate": "2020-07-01 08:52:50",
      "npsRating": 7,
      "serviceRating": 8,
      "facilityRating": 3,
      "siteRating": 8,
      "valueRating": 8,
      "categoryId": 5,
      "reservationId": 4585654,
      "comments": "Not being allowed to have access to a toilet and shower was very disappointing. Although we are self contained a good size shower would have been wonderful at least once"
    },
    {
      "arrivalDate": "2020-07-01 15:28:00",
      "departureDate": "2020-07-03 10:34:43",
      "npsRating": 10,
      "serviceRating": 10,
      "facilityRating": 10,
      "siteRating": 10,
      "valueRating": 7,
      "categoryId": 4,
      "reservationId": 4215468,
      "comments": "Very comfortable accommodation. Just loved it. Will be back again. Just a bit expensive."
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|totalResponses|integer(int32)|false|none|none|
|responsesRate|integer(int32)|false|none|This value represents a percentage of the response rate.|
|netPromoterStore|integer(decimal)|false|none|none|
|service|integer(decimal)|false|none|none|
|standardOfFacilities|integer(decimal)|false|none|none|
|site|integer(decimal)|false|none|none|
|valueForMoney|integer(decimal)|false|none|none|
|surveyDeatils|[[reportNpnResultsSurveyDeatils](#schemareportnpnresultssurveydeatils)]|false|none|none|

<h2 id="tocS_reportNpnResultsSurveyDeatils">reportNpnResultsSurveyDeatils</h2>
<!-- backwards compatibility -->
<a id="schemareportnpnresultssurveydeatils"></a>
<a id="schema_reportNpnResultsSurveyDeatils"></a>
<a id="tocSreportnpnresultssurveydeatils"></a>
<a id="tocsreportnpnresultssurveydeatils"></a>

```json
{
  "arrivalDate": "2019-08-24T14:15:22Z",
  "departureDate": "2019-08-24T14:15:22Z",
  "npsRating": 0,
  "serviceRating": 0,
  "facilityRating": 0,
  "siteRating": 0,
  "valueRating": 0,
  "categoryId": 0,
  "reservationId": 0,
  "comments": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivalDate|string(date-time)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|npsRating|integer(int32)|false|none|none|
|serviceRating|integer(int32)|false|none|none|
|facilityRating|integer(int32)|false|none|none|
|siteRating|integer(int32)|false|none|none|
|valueRating|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|comments|string|false|none|none|

<h2 id="tocS_reportNightAudit">reportNightAudit</h2>
<!-- backwards compatibility -->
<a id="schemareportnightaudit"></a>
<a id="schema_reportNightAudit"></a>
<a id="tocSreportnightaudit"></a>
<a id="tocsreportnightaudit"></a>

```json
{
  "propertyId": 1,
  "rundate": "2023-01-01"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|rundate|string(date-time)|false|none|none|

<h2 id="tocS_reportNightAuditReport">reportNightAuditReport</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditreport"></a>
<a id="schema_reportNightAuditReport"></a>
<a id="tocSreportnightauditreport"></a>
<a id="tocsreportnightauditreport"></a>

```json
{
  "outstandingGuestBalance": 0,
  "summary": [
    {
      "transactions": [
        {
          "cash": 0,
          "cheque": 0,
          "creditCard": 0,
          "directCredit": 0,
          "directDebit": 0,
          "journal": 0,
          "cashExpense": 0,
          "refund": 0,
          "eftPos": 0
        }
      ],
      "debtorsAnalysis": [
        {
          "advancesLedger": [
            {
              "openingBalance": 0,
              "plusNewCredits": 0,
              "lessCreditsUsed": 0,
              "lessCreditsRefunded": 0,
              "closingBalance": 0
            }
          ],
          "guestLedger": [
            {
              "openingBalance": 0,
              "plusNewReservationCharges": 0,
              "lessPaidBalances": 0,
              "closingBalance": 0
            }
          ],
          "cityLedger": [
            {
              "openingBalance": 0,
              "plusNewCredits": 0,
              "lessCreditsUsed": 0,
              "lessCreditsRefunded": 0,
              "plusNewTransfers": 0,
              "lessPaidBalances": 0,
              "closingBalance": 0
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outstandingGuestBalance|integer(decimal)|false|none|none|
|summary|[[reportNightAuditReportSummary](#schemareportnightauditreportsummary)]|false|none|none|

<h2 id="tocS_reportNightAuditReportSummary">reportNightAuditReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditreportsummary"></a>
<a id="schema_reportNightAuditReportSummary"></a>
<a id="tocSreportnightauditreportsummary"></a>
<a id="tocsreportnightauditreportsummary"></a>

```json
{
  "transactions": [
    {
      "cash": 0,
      "cheque": 0,
      "creditCard": 0,
      "directCredit": 0,
      "directDebit": 0,
      "journal": 0,
      "cashExpense": 0,
      "refund": 0,
      "eftPos": 0
    }
  ],
  "debtorsAnalysis": [
    {
      "advancesLedger": [
        {
          "openingBalance": 0,
          "plusNewCredits": 0,
          "lessCreditsUsed": 0,
          "lessCreditsRefunded": 0,
          "closingBalance": 0
        }
      ],
      "guestLedger": [
        {
          "openingBalance": 0,
          "plusNewReservationCharges": 0,
          "lessPaidBalances": 0,
          "closingBalance": 0
        }
      ],
      "cityLedger": [
        {
          "openingBalance": 0,
          "plusNewCredits": 0,
          "lessCreditsUsed": 0,
          "lessCreditsRefunded": 0,
          "plusNewTransfers": 0,
          "lessPaidBalances": 0,
          "closingBalance": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[reportNightAuditTransactions](#schemareportnightaudittransactions)]|false|none|none|
|debtorsAnalysis|[[reportNightAuditDebtorAnalysis](#schemareportnightauditdebtoranalysis)]|false|none|none|

<h2 id="tocS_reportNightAuditTransactions">reportNightAuditTransactions</h2>
<!-- backwards compatibility -->
<a id="schemareportnightaudittransactions"></a>
<a id="schema_reportNightAuditTransactions"></a>
<a id="tocSreportnightaudittransactions"></a>
<a id="tocsreportnightaudittransactions"></a>

```json
{
  "cash": 0,
  "cheque": 0,
  "creditCard": 0,
  "directCredit": 0,
  "directDebit": 0,
  "journal": 0,
  "cashExpense": 0,
  "refund": 0,
  "eftPos": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash|integer(decimal)|false|none|none|
|cheque|integer(decimal)|false|none|none|
|creditCard|integer(decimal)|false|none|none|
|directCredit|integer(decimal)|false|none|none|
|directDebit|integer(decimal)|false|none|none|
|journal|integer(decimal)|false|none|none|
|cashExpense|integer(decimal)|false|none|none|
|refund|integer(decimal)|false|none|none|
|eftPos|integer(decimal)|false|none|none|

<h2 id="tocS_reportNightAuditDebtorAnalysis">reportNightAuditDebtorAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditdebtoranalysis"></a>
<a id="schema_reportNightAuditDebtorAnalysis"></a>
<a id="tocSreportnightauditdebtoranalysis"></a>
<a id="tocsreportnightauditdebtoranalysis"></a>

```json
{
  "advancesLedger": [
    {
      "openingBalance": 0,
      "plusNewCredits": 0,
      "lessCreditsUsed": 0,
      "lessCreditsRefunded": 0,
      "closingBalance": 0
    }
  ],
  "guestLedger": [
    {
      "openingBalance": 0,
      "plusNewReservationCharges": 0,
      "lessPaidBalances": 0,
      "closingBalance": 0
    }
  ],
  "cityLedger": [
    {
      "openingBalance": 0,
      "plusNewCredits": 0,
      "lessCreditsUsed": 0,
      "lessCreditsRefunded": 0,
      "plusNewTransfers": 0,
      "lessPaidBalances": 0,
      "closingBalance": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancesLedger|[[reportNightAuditAdvancesLedger](#schemareportnightauditadvancesledger)]|false|none|none|
|guestLedger|[[reportNightAuditGuestLedger](#schemareportnightauditguestledger)]|false|none|none|
|cityLedger|[[reportNightAuditCityLedger](#schemareportnightauditcityledger)]|false|none|none|

<h2 id="tocS_reportNightAuditAdvancesLedger">reportNightAuditAdvancesLedger</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditadvancesledger"></a>
<a id="schema_reportNightAuditAdvancesLedger"></a>
<a id="tocSreportnightauditadvancesledger"></a>
<a id="tocsreportnightauditadvancesledger"></a>

```json
{
  "openingBalance": 0,
  "plusNewCredits": 0,
  "lessCreditsUsed": 0,
  "lessCreditsRefunded": 0,
  "closingBalance": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openingBalance|integer(decimal)|false|none|none|
|plusNewCredits|integer(decimal)|false|none|none|
|lessCreditsUsed|integer(decimal)|false|none|none|
|lessCreditsRefunded|integer(decimal)|false|none|none|
|closingBalance|integer(decimal)|false|none|none|

<h2 id="tocS_reportNightAuditGuestLedger">reportNightAuditGuestLedger</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditguestledger"></a>
<a id="schema_reportNightAuditGuestLedger"></a>
<a id="tocSreportnightauditguestledger"></a>
<a id="tocsreportnightauditguestledger"></a>

```json
{
  "openingBalance": 0,
  "plusNewReservationCharges": 0,
  "lessPaidBalances": 0,
  "closingBalance": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openingBalance|integer(decimal)|false|none|none|
|plusNewReservationCharges|integer(decimal)|false|none|none|
|lessPaidBalances|integer(decimal)|false|none|none|
|closingBalance|integer(decimal)|false|none|none|

<h2 id="tocS_reportNightAuditCityLedger">reportNightAuditCityLedger</h2>
<!-- backwards compatibility -->
<a id="schemareportnightauditcityledger"></a>
<a id="schema_reportNightAuditCityLedger"></a>
<a id="tocSreportnightauditcityledger"></a>
<a id="tocsreportnightauditcityledger"></a>

```json
{
  "openingBalance": 0,
  "plusNewCredits": 0,
  "lessCreditsUsed": 0,
  "lessCreditsRefunded": 0,
  "plusNewTransfers": 0,
  "lessPaidBalances": 0,
  "closingBalance": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openingBalance|integer(decimal)|false|none|none|
|plusNewCredits|integer(decimal)|false|none|none|
|lessCreditsUsed|integer(decimal)|false|none|none|
|lessCreditsRefunded|integer(decimal)|false|none|none|
|plusNewTransfers|integer(decimal)|false|none|none|
|lessPaidBalances|integer(decimal)|false|none|none|
|closingBalance|integer(decimal)|false|none|none|

<h2 id="tocS_reportOccupancyBuild">reportOccupancyBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancybuild"></a>
<a id="schema_reportOccupancyBuild"></a>
<a id="tocSreportoccupancybuild"></a>
<a id="tocsreportoccupancybuild"></a>

```json
{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    2,
    3,
    4
  ],
  "dailyBreakdown": false,
  "dateFrom": "2025-03-18T00:00:00Z",
  "dateTo": "2025-03-23T00:00:00Z",
  "dayOfTheWeek": [
    "all"
  ],
  "includeInfantsInOccupantsTotal": true,
  "includeReservationIds": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1
  ],
  "replaceOccupantsWithGuestNights": false,
  "roomStatistics": true,
  "groupBy1": "category",
  "groupBy2": "property"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakdownAdultChildInfants|boolean|false|none|none|
|categoryIds|[integer]|false|none|none|
|dailyBreakdown|boolean|false|none|none|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|dayOfTheWeek|[string]|false|none|none|
|includeInfantsInOccupantsTotal|boolean|false|none|none|
|includeReservationIds|boolean|false|none|This will NOT work if dailyBreakdown is true.|
|includeUniqueGuestCount|boolean|false|none|none|
|propertyIds|[integer]|true|none|none|
|replaceOccupantsWithGuestNights|boolean|false|none|none|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats.|
|groupBy1|string|false|none|none|
|groupBy2|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|roomStatistics|true|
|roomStatistics|false|
|roomStatistics|ignore|
|groupBy1|none|
|groupBy1|category|
|groupBy1|categoryGrouping|
|groupBy1|dayOfWeek|
|groupBy1|property|
|groupBy1|propertyState|
|groupBy2|none|
|groupBy2|category|
|groupBy2|categoryGrouping|
|groupBy2|dayOfWeek|
|groupBy2|property|

<h2 id="tocS_reportOccupancy">reportOccupancy</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancy"></a>
<a id="schema_reportOccupancy"></a>
<a id="tocSreportoccupancy"></a>
<a id="tocsreportoccupancy"></a>

```json
{
  "Breakdown": [
    {
      "categoryId": 2,
      "description": "This value is dependent on the values passed in grouping1 and grouping2",
      "discount": 0,
      "grossAverageRevPOR": 1023.5,
      "netAverageRevPOR": 1023.5,
      "numberOfAreasAvailable": 6,
      "numberOfAreasInMaintenance": 0,
      "numberOfAreasUnused": 2,
      "numberOfAreasUsed": 4,
      "numberOfAreasTotal": 1,
      "occupancyPercentage": 0.666667,
      "occupants": 3,
      "period": "Days",
      "revPar": 682.33,
      "netRevPar": 682.33,
      "totalGrossRevenue": 4094,
      "totalNetRevenue": 4094,
      "theDate": "2025-03-29T08:14:00Z",
      "groupBy1": "Deluxe 002",
      "groupBy2": "Test property 1",
      "propertyId": 1,
      "reservationIds": [
        225989
      ],
      "occupantsBreakdown": "2A 2I"
    },
    {
      "categoryId": 3,
      "description": "Deluxe 003",
      "discount": 0,
      "grossAverageRevPOR": 0,
      "netAverageRevPOR": 0,
      "numberOfAreasAvailable": 66,
      "numberOfAreasInMaintenance": 0,
      "numberOfAreasUnused": 62,
      "numberOfAreasUsed": 4,
      "numberOfAreasTotal": 11,
      "occupancyPercentage": 0.060606,
      "occupants": 4,
      "period": "Days",
      "revPar": 0,
      "netRevPar": 0,
      "totalGrossRevenue": 0,
      "totalNetRevenue": 0,
      "theDate": "2025-03-29T08:14:00Z",
      "groupBy1": "Deluxe 003",
      "groupBy2": "Test property 1",
      "propertyId": 1,
      "reservationIds": [
        226657
      ],
      "occupantsBreakdown": "13A 0.5C 1.5I"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Breakdown|[[reportOccupancy_Breakdown](#schemareportoccupancy_breakdown)]|false|none|none|

<h2 id="tocS_reportOccupancyByAreaBuild">reportOccupancyByAreaBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancybyareabuild"></a>
<a id="schema_reportOccupancyByAreaBuild"></a>
<a id="tocSreportoccupancybyareabuild"></a>
<a id="tocsreportoccupancybyareabuild"></a>

```json
{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    4,
    6
  ],
  "dailyBreakdown": false,
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy1": "Category",
  "groupBy2": "Property",
  "includeInfantsInOccupantsTotal": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1,
    2
  ],
  "replaceOccupantsWithGuestNights": true,
  "roomStatistics": "ignore",
  "excludeOwnerStays": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakdownAdultChildInfants|boolean|false|none|none|
|categoryIds|[integer]|false|none|none|
|dailyBreakdown|boolean|false|none|none|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|groupBy1|string|false|none|none|
|groupBy2|string|false|none|none|
|includeInfantsInOccupantsTotal|boolean|false|none|none|
|includeUniqueGuestCount|boolean|false|none|none|
|propertyIds|[integer]|false|none|none|
|replaceOccupantsWithGuestNights|boolean|false|none|none|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats|
|excludeOwnerStays|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBy1|none|
|groupBy1|category|
|groupBy1|categoryGrouping|
|groupBy1|dayOfWeek|
|groupBy1|property|
|groupBy1|propertyState|
|groupBy2|none|
|groupBy2|category|
|groupBy2|categoryGrouping|
|groupBy2|dayOfWeek|
|groupBy2|property|
|roomStatistics|on|
|roomStatistics|off|
|roomStatistics|ignore|

<h2 id="tocS_reportOccupancyByArea">reportOccupancyByArea</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancybyarea"></a>
<a id="schema_reportOccupancyByArea"></a>
<a id="tocSreportoccupancybyarea"></a>
<a id="tocsreportoccupancybyarea"></a>

```json
{
  "areaId": 1,
  "categroyId": 4,
  "numberOfAreasAvailable": 14,
  "numberOfAreasUnused": 3,
  "numberOfAreasUsed": 11,
  "occupancyPercentage": 21.43,
  "period": "Days",
  "propertyId": 1,
  "totalGrossRevenue": 826.8,
  "totalNetRevenue": 751.93
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer(decimal)|false|none|none|
|categoryId|integer(int32)|false|none|This value is returned based on your grouping options|
|numberOfAreasAvailable|integer(int32)|false|none|none|
|numberOfAreasUnused|integer(int32)|false|none|none|
|numberOfAreasUsed|integer(int32)|false|none|none|
|occupancyPercentage|integer(decimal)|false|none|none|
|period|string|false|none|none|
|propertyId|integer(int32)|false|none|This value is returned based on your grouping options|
|totalGrossRevenue|integer(decimal)|false|none|none|
|totalNetRevenue|integer(decimal)|false|none|none|

<h2 id="tocS_reportOccupancyRevenueComparisonBuild">reportOccupancyRevenueComparisonBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancyrevenuecomparisonbuild"></a>
<a id="schema_reportOccupancyRevenueComparisonBuild"></a>
<a id="tocSreportoccupancyrevenuecomparisonbuild"></a>
<a id="tocsreportoccupancyrevenuecomparisonbuild"></a>

```json
{
  "allReservationsBetween": [
    {
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "allReservationsPriorTo": [
    {
      "reservationsMadePriorToDate": "1900-00-00 00:00:00",
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsMadePriorToDate": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "categoryIds": [
    4,
    5
  ],
  "categoryGroupingIds": [
    1
  ],
  "excludeReservationWithStatusOfOwnerOccupied": false,
  "groupByProperty": false,
  "groupByTravelAgent": true,
  "includeLongTermReservation": true,
  "propertyIds": [
    1
  ],
  "replaceTotalArrivalsAndAvailsNightsWithNettRevPARAndNetRevPOR": false,
  "roomStatistics": "ignore",
  "travelAgentIds": [
    45,
    12
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allReservationsBetween|[[reportOccupancyRevenueComparisonBuildAllReservationsBetween](#schemareportoccupancyrevenuecomparisonbuildallreservationsbetween)]|false|none|none|
|allReservationsPriorTo|[[reportOccupancyRevenueComparisonBuildAllReservationsPriorTo](#schemareportoccupancyrevenuecomparisonbuildallreservationspriorto)]|false|none|none|
|categoryIds|[integer]|false|none|none|
|categoryGroupingIds|[integer]|false|none|none|
|excludeReservationWithStatusOfOwnerOccupied|boolean|false|none|none|
|groupByProperty|boolean|false|none|none|
|groupByTravelAgent|boolean|false|none|none|
|includeLongTermReservation|boolean|false|none|none|
|propertyIds|[integer]|false|none|none|
|replaceTotalArrivalsAndAvailsNightsWithNettRevPARAndNetRevPOR|boolean|false|none|none|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats|
|travelAgentIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|roomStatistics|on|
|roomStatistics|off|
|roomStatistics|ignore|

<h2 id="tocS_reportOccupancyRevenueComparisonBuildAllReservationsBetween">reportOccupancyRevenueComparisonBuildAllReservationsBetween</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancyrevenuecomparisonbuildallreservationsbetween"></a>
<a id="schema_reportOccupancyRevenueComparisonBuildAllReservationsBetween"></a>
<a id="tocSreportoccupancyrevenuecomparisonbuildallreservationsbetween"></a>
<a id="tocsreportoccupancyrevenuecomparisonbuildallreservationsbetween"></a>

```json
{
  "reservationsBetweenStart": "2019-08-24T14:15:22Z",
  "reservationsBetweenEnd": "2019-08-24T14:15:22Z",
  "comparedToReservationsBetweenStart": "2019-08-24T14:15:22Z",
  "comparedToReservationsBetweenEnd": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationsBetweenStart|string(date-time)|false|none|none|
|reservationsBetweenEnd|string(date-time)|false|none|none|
|comparedToReservationsBetweenStart|string(date-time)|false|none|none|
|comparedToReservationsBetweenEnd|string(date-time)|false|none|none|

<h2 id="tocS_reportOccupancyRevenueComparisonBuildAllReservationsPriorTo">reportOccupancyRevenueComparisonBuildAllReservationsPriorTo</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancyrevenuecomparisonbuildallreservationspriorto"></a>
<a id="schema_reportOccupancyRevenueComparisonBuildAllReservationsPriorTo"></a>
<a id="tocSreportoccupancyrevenuecomparisonbuildallreservationspriorto"></a>
<a id="tocsreportoccupancyrevenuecomparisonbuildallreservationspriorto"></a>

```json
{
  "reservationsMadePriorToDate": "2019-08-24T14:15:22Z",
  "reservationsBetweenStart": "2019-08-24T14:15:22Z",
  "reservationsBetweenEnd": "2019-08-24T14:15:22Z",
  "comparedToReservationsMadePriorToDate": "2019-08-24T14:15:22Z",
  "comparedToReservationsBetweenStart": "2019-08-24T14:15:22Z",
  "comparedToReservationsBetweenEnd": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationsMadePriorToDate|string(date-time)|false|none|none|
|reservationsBetweenStart|string(date-time)|false|none|none|
|reservationsBetweenEnd|string(date-time)|false|none|none|
|comparedToReservationsMadePriorToDate|string(date-time)|false|none|none|
|comparedToReservationsBetweenStart|string(date-time)|false|none|none|
|comparedToReservationsBetweenEnd|string(date-time)|false|none|none|

<h2 id="tocS_reportOccupancyRevenueComparison">reportOccupancyRevenueComparison</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancyrevenuecomparison"></a>
<a id="schema_reportOccupancyRevenueComparison"></a>
<a id="tocSreportoccupancyrevenuecomparison"></a>
<a id="tocsreportoccupancyrevenuecomparison"></a>

```json
{
  "title": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|

<h2 id="tocS_reportPaceBuild">reportPaceBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportpacebuild"></a>
<a id="schema_reportPaceBuild"></a>
<a id="tocSreportpacebuild"></a>
<a id="tocsreportpacebuild"></a>

```json
{
  "categoryIds": [
    4,
    6
  ],
  "compareTo": "lastYear",
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy": "Category",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-02-27 00:00:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[integer]|false|none|none|
|compareTo|string|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|deductProjectedCancellationNoShowPercentageFromCurrentValues|boolean|false|none|none|
|groupBy|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats|
|reservationDatePriorTo|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|compareTo|lastYear|
|compareTo|yearBeforeLast|
|compareTo|noComparison|
|compareTo|lastYearAndYearBeforeLast|
|groupBy|none|
|groupBy|category|
|groupBy|categoryGrouping|
|roomStatistics|on|
|roomStatistics|off|
|roomStatistics|ignore|

<h2 id="tocS_reportPace">reportPace</h2>
<!-- backwards compatibility -->
<a id="schemareportpace"></a>
<a id="schema_reportPace"></a>
<a id="tocSreportpace"></a>
<a id="tocsreportpace"></a>

```json
{
  "title": "Pace Report",
  "report": [
    {
      "propertyId": 1,
      "propertyName": "Test property 1",
      "categoryName": "Deluxe 004",
      "categoryId": 4,
      "categoryGroupType": "",
      "categoryGroupTypeId": 0,
      "current": [
        {
          "reservation": 3,
          "nights": 5,
          "grossRevenue": 1048,
          "nettRevenue": 953.33,
          "averageDailyRateGross": 209.6,
          "averageDailyRateNett": 190.67,
          "occupancyPercent": 17.86
        }
      ],
      "previous": [
        {
          "reservation": 19,
          "nights": 27,
          "grossRevenue": 9704,
          "nettRevenue": 8821.81,
          "averageDailyRateGross": 359.41,
          "averageDailyRateNett": 326.73,
          "occupancyPercent": 96.43
        }
      ],
      "variance": [
        {
          "reservation": -16,
          "reservationPercent": -84.2105263157895,
          "nights": 22,
          "nightsPercent": -81.4814814814815,
          "grossRevenue": -8656,
          "grossRevenuePercent": -89.20032976092332,
          "nettRevenue": -7868.48,
          "nettRevenuePercent": -89.193487504265,
          "averageDailyRateGross": -149.81,
          "averageDailyRateGrossPercent": -41.68220138560419,
          "averageDailyRateNett": -136.06,
          "averageDailyRateNettPercent": -41.642946775625134,
          "occupancyPercent": -78.57
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|categoryName|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryGroupType|string|false|none|none|
|categoryGroupTypeId|integer(int32)|false|none|none|
|current|[[reportPaceCurrentPrevious](#schemareportpacecurrentprevious)]|false|none|none|
|previous|[[reportPaceCurrentPrevious](#schemareportpacecurrentprevious)]|false|none|none|
|variance|[[reportPaceVariance](#schemareportpacevariance)]|false|none|none|

<h2 id="tocS_reportPaceCurrentPrevious">reportPaceCurrentPrevious</h2>
<!-- backwards compatibility -->
<a id="schemareportpacecurrentprevious"></a>
<a id="schema_reportPaceCurrentPrevious"></a>
<a id="tocSreportpacecurrentprevious"></a>
<a id="tocsreportpacecurrentprevious"></a>

```json
{
  "reservation": 0,
  "nights": 0,
  "grossRevenue": 0,
  "nettRevenue": 0,
  "averageDailyRateGross": 0,
  "averageDailyRateNett": 0,
  "occupancyPercent": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservation|integer(int32)|false|none|none|
|nights|integer(int32)|false|none|none|
|grossRevenue|integer(int32)|false|none|none|
|nettRevenue|integer(decimal)|false|none|none|
|averageDailyRateGross|integer(decimal)|false|none|none|
|averageDailyRateNett|integer(decimal)|false|none|none|
|occupancyPercent|integer(decimal)|false|none|none|

<h2 id="tocS_reportPaceVariance">reportPaceVariance</h2>
<!-- backwards compatibility -->
<a id="schemareportpacevariance"></a>
<a id="schema_reportPaceVariance"></a>
<a id="tocSreportpacevariance"></a>
<a id="tocsreportpacevariance"></a>

```json
{
  "reservation": 0,
  "reservationPercent": 0,
  "nights": 0,
  "nightsPercent": 0,
  "grossRevenue": 0,
  "grossRevenuePercent": 0,
  "nettRevenue": 0,
  "nettRevenuePercent": 0,
  "averageDailyRateGross": 0,
  "averageDailyRateGrossPercent": 0,
  "averageDailyRateNett": 0,
  "averageDailyRateNettPercent": 0,
  "occupancyPercent": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservation|integer(int32)|false|none|none|
|reservationPercent|integer(decimal)|false|none|none|
|nights|integer(int32)|false|none|none|
|nightsPercent|integer(decimal)|false|none|none|
|grossRevenue|integer(int32)|false|none|none|
|grossRevenuePercent|integer(decimal)|false|none|none|
|nettRevenue|integer(decimal)|false|none|none|
|nettRevenuePercent|integer(decimal)|false|none|none|
|averageDailyRateGross|integer(decimal)|false|none|none|
|averageDailyRateGrossPercent|integer(decimal)|false|none|none|
|averageDailyRateNett|integer(decimal)|false|none|none|
|averageDailyRateNettPercent|integer(decimal)|false|none|none|
|occupancyPercent|integer(decimal)|false|none|none|

<h2 id="tocS_reportParthfinderBuild">reportParthfinderBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportparthfinderbuild"></a>
<a id="schema_reportParthfinderBuild"></a>
<a id="tocSreportparthfinderbuild"></a>
<a id="tocsreportparthfinderbuild"></a>

```json
{
  "propertyId": 2,
  "reportDate": "2022-01-11"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|reportDate|string(date)|false|none|none|

<h2 id="tocS_reportPerformanceIIBuild">reportPerformanceIIBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportperformanceiibuild"></a>
<a id="schema_reportPerformanceIIBuild"></a>
<a id="tocSreportperformanceiibuild"></a>
<a id="tocsreportperformanceiibuild"></a>

```json
{
  "categoryIds": [],
  "comparisonAgainstSameTimeLastYear": true,
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "groupBy": "Category",
  "monthlyBreakdownBy": "grossRevenue",
  "performanceBasedOn": "revenue",
  "propertyIds": [
    1,
    3,
    4
  ],
  "replaceCancellationAndNoShowPercentageWithNettRevPercentage": false,
  "reportType": "company",
  "reportTypeOptionIds": [],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-06-12 00:00:00",
  "showOnlyTop": 10
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryIds|[integer]|false|none|none|
|comparisonAgainstSameTimeLastYear|boolean|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|groupBy2|string|false|none|none|
|monthlyBreakdownBy|string|false|none|none|
|performanceBasedOn|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|replaceCancellationAndNoShowPercentageWithNettRevPercentage|boolean|false|none|none|
|reportType:|string|false|none|none|
|reportTypeOptionIds|[integer]|false|none|This option will allow you to pass the ID that corrosponds with the Report Type you have chosen to filter your reult on. e.g. If your Report Type is Rate Type you could pass your Rate Id's as the reportTypeOptionIds|
|roomStatistics|string|false|none|On = Only Look for Stats On, Off = Only Look for Stats Off, Ignore = We don't Filter on Stats|
|reservationDatePriorTo|string(date-time)|false|none|none|
|showOnlyTop|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBy2|none|
|groupBy2|category|
|groupBy2|categoryGrouping|
|monthlyBreakdownBy|grossRevenue|
|monthlyBreakdownBy|nettRevenue|
|monthlyBreakdownBy|nights|
|performanceBasedOn|revenue|
|performanceBasedOn|nights|
|performanceBasedOn|reservations|
|reportType:|company|
|reportType:|travelAgent|
|reportType:|rateType|
|reportType:|bookingSoruce|
|reportType:|reservationType|
|reportType:|subReservationType|
|reportType:|marketSegment|
|reportType:|subMarketSegment|
|reportType:|groupReservation|
|reportType:|groupAllotment|
|roomStatistics|on|
|roomStatistics|off|
|roomStatistics|ignore|

<h2 id="tocS_reportPerformanceII">reportPerformanceII</h2>
<!-- backwards compatibility -->
<a id="schemareportperformanceii"></a>
<a id="schema_reportPerformanceII"></a>
<a id="tocSreportperformanceii"></a>
<a id="tocsreportperformanceii"></a>

```json
{
  "title": "Pace Report",
  "report": [
    {
      "propertyId": 1,
      "propertyName": "Test property 1",
      "categoryName": "",
      "categoryId": 0,
      "categoryGroupType": "B1 Rooms",
      "categoryGroupTypeId": 22,
      "reportTypeEntity": "company",
      "current": [
        {
          "reservation": 7,
          "cancellationPercent": 0,
          "noShowPercent": 0,
          "averageLeadTime": -0.43,
          "averageLengthOfStay": 1,
          "nights": 7,
          "grossRevenue": 0,
          "nettRevenue": 0,
          "averageDailyRateGross": 0,
          "averageDailyRateNett": 0
        }
      ],
      "previous": [
        {
          "reservation": 0,
          "cancellationPercent": 0,
          "noShowPercent": 0,
          "averageLeadTime": 0,
          "averageLengthOfStay": 0,
          "nights": 0,
          "grossRevenue": 0,
          "nettRevenue": 0,
          "averageDailyRateGross": 0,
          "averageDailyRateNett": 0
        }
      ],
      "variance": [
        {
          "reservation": 7,
          "reservationPercent": 0,
          "cancellationPercent": 0,
          "noShowPercent": 0,
          "averageLeadTime": -0.43,
          "averageLeadTimePercent": 0,
          "averageLengthOfStay": 1,
          "averageLengthOfStayPercent": 0,
          "nights": 7,
          "nightsPercent": 0,
          "grossRevenue": 0,
          "grossRevenuePercent": 0,
          "nettRevenue": 0,
          "nettRevenuePercent": 0,
          "averageDailyRateGross": 0,
          "averageDailyRateGrossPercent": 0,
          "averageDailyRateNett": 0,
          "averageDailyRateNettPercent": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|categoryName|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryGroupType|string|false|none|none|
|categoryGroupTypeId|integer(int32)|false|none|none|
|reportTypeEntity|string|false|none|none|
|current|[[reportPerformanceIICurrentPrevious](#schemareportperformanceiicurrentprevious)]|false|none|none|
|previous|[[reportPerformanceIICurrentPrevious](#schemareportperformanceiicurrentprevious)]|false|none|none|
|variance|[[reportPerformanceIIVariance](#schemareportperformanceiivariance)]|false|none|none|

<h2 id="tocS_reportPerformanceIICurrentPrevious">reportPerformanceIICurrentPrevious</h2>
<!-- backwards compatibility -->
<a id="schemareportperformanceiicurrentprevious"></a>
<a id="schema_reportPerformanceIICurrentPrevious"></a>
<a id="tocSreportperformanceiicurrentprevious"></a>
<a id="tocsreportperformanceiicurrentprevious"></a>

```json
{
  "reservation": 0,
  "cancellationPercent": 0,
  "noShowPercent": 0,
  "averageLeadTime": 0,
  "averageLengthOfStay": 0,
  "nights": 0,
  "grossRevenue": 0,
  "nettRevenue": 0,
  "averageDailyRateGross": 0,
  "averageDailyRateNett": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservation|integer(int32)|false|none|none|
|cancellationPercent|integer(int32)|false|none|none|
|noShowPercent|integer(int32)|false|none|none|
|averageLeadTime|integer(decimal)|false|none|none|
|averageLengthOfStay|integer(int32)|false|none|none|
|nights|integer(int32)|false|none|none|
|grossRevenue|integer(int32)|false|none|none|
|nettRevenue|integer(decimal)|false|none|none|
|averageDailyRateGross|integer(decimal)|false|none|none|
|averageDailyRateNett|integer(decimal)|false|none|none|

<h2 id="tocS_reportPerformanceIIVariance">reportPerformanceIIVariance</h2>
<!-- backwards compatibility -->
<a id="schemareportperformanceiivariance"></a>
<a id="schema_reportPerformanceIIVariance"></a>
<a id="tocSreportperformanceiivariance"></a>
<a id="tocsreportperformanceiivariance"></a>

```json
{
  "reservation": 0,
  "reservationPercent": 0,
  "cancellationPercent": 0,
  "noShowPercent": 0,
  "averageLeadTime": 0,
  "averageLeadTimePercent": 0,
  "averageLengthOfStay": 0,
  "averageLengthOfStayPercent": 0,
  "nights": 0,
  "nightsPercent": 0,
  "grossRevenue": 0,
  "grossRevenuePercent": 0,
  "nettRevenue": 0,
  "nettRevenuePercent": 0,
  "averageDailyRateGross": 0,
  "averageDailyRateGrossPercent": 0,
  "averageDailyRateNett": 0,
  "averageDailyRateNettPercent": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservation|integer(int32)|false|none|none|
|reservationPercent|integer(decimal)|false|none|none|
|cancellationPercent|integer(decimal)|false|none|none|
|noShowPercent|integer(decimal)|false|none|none|
|averageLeadTime|integer(decimal)|false|none|none|
|averageLeadTimePercent|integer(decimal)|false|none|none|
|averageLengthOfStay|integer(decimal)|false|none|none|
|averageLengthOfStayPercent|integer(decimal)|false|none|none|
|nights|integer(int32)|false|none|none|
|nightsPercent|integer(decimal)|false|none|none|
|grossRevenue|integer(int32)|false|none|none|
|grossRevenuePercent|integer(decimal)|false|none|none|
|nettRevenue|integer(decimal)|false|none|none|
|nettRevenuePercent|integer(decimal)|false|none|none|
|averageDailyRateGross|integer(decimal)|false|none|none|
|averageDailyRateGrossPercent|integer(decimal)|false|none|none|
|averageDailyRateNett|integer(decimal)|false|none|none|
|averageDailyRateNettPercent|integer(decimal)|false|none|none|

<h2 id="tocS_reportRevenueAndExpenseBuild">reportRevenueAndExpenseBuild</h2>
<!-- backwards compatibility -->
<a id="schemareportrevenueandexpensebuild"></a>
<a id="schema_reportRevenueAndExpenseBuild"></a>
<a id="tocSreportrevenueandexpensebuild"></a>
<a id="tocsreportrevenueandexpensebuild"></a>

```json
{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "propertyIds": [
    1,
    2
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|propertyIds|[integer]|false|none|none|

<h2 id="tocS_revenueAndExpenseResponse">revenueAndExpenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevenueandexpenseresponse"></a>
<a id="schema_revenueAndExpenseResponse"></a>
<a id="tocSrevenueandexpenseresponse"></a>
<a id="tocsrevenueandexpenseresponse"></a>

```json
{
  "netDueToOwner": "0.00",
  "totalPaymentsOnBehalfOfOwner": "0.00",
  "paymentsOnBehalfOfOwner": [],
  "totalPayouts": "0.00",
  "ownerShare": "0.00",
  "netRevenue": "0.00",
  "totalOperationalExpenses": "0.00",
  "operationalExpenses": [],
  "grossRevenue": "0.00",
  "averageRate": "0.00",
  "occupancyPercent": "0.00",
  "occupancyOwnerStay": 0,
  "occupancyUsed": 0,
  "occupancyAvailable": 0,
  "occupancyMaintenance": 0,
  "occupancyTotalAvailable": 0,
  "ownerId": 22,
  "propertyId": 1,
  "area": "BUB/MAJ/1106/STU",
  "areaId": 34,
  "accountId": 59,
  "holdAmount": "0.00",
  "paidToOwner": "0.00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportData|[[revenueAndExpenseResponseBody](#schemarevenueandexpenseresponsebody)]|false|none|none|

<h2 id="tocS_revenueAndExpenseResponseBody">revenueAndExpenseResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemarevenueandexpenseresponsebody"></a>
<a id="schema_revenueAndExpenseResponseBody"></a>
<a id="tocSrevenueandexpenseresponsebody"></a>
<a id="tocsrevenueandexpenseresponsebody"></a>

```json
{
  "netDueToOwner": "string",
  "totalPaymentsOnBehalfOfOwner": "string",
  "paymentsOnBehalfOfOwner": "string",
  "totalPayouts": "string",
  "ownerShare": "string",
  "netRevenue": "string",
  "totalOperationalExpenses": "string",
  "operationalExpenses": "string",
  "grossRevenue": "string",
  "averageRate": "string",
  "occupancyPercent": "string",
  "occupancyOwnerStay": 0,
  "occupancyUsed": 0,
  "occupancyAvailable": 0,
  "occupancyMaintenance": 0,
  "occupancyTotalAvailable": 0,
  "ownerId": 0,
  "propertyId": 0,
  "area": "string",
  "areaId": 0,
  "accountId": 0,
  "holdAmount": "string",
  "paidToOwner": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|netDueToOwner|string(number)|false|none|none|
|totalPaymentsOnBehalfOfOwner|string(number)|false|none|none|
|paymentsOnBehalfOfOwner|string(array)|false|none|none|
|totalPayouts|string(number)|false|none|none|
|ownerShare|string(number)|false|none|none|
|netRevenue|string(number)|false|none|none|
|totalOperationalExpenses|string(number)|false|none|none|
|operationalExpenses|string(array)|false|none|none|
|grossRevenue|string(number)|false|none|none|
|averageRate|string(number)|false|none|none|
|occupancyPercent|string(number)|false|none|none|
|occupancyOwnerStay|integer(int32)|false|none|none|
|occupancyUsed|integer(int32)|false|none|none|
|occupancyAvailable|integer(int32)|false|none|none|
|occupancyMaintenance|integer(int32)|false|none|none|
|occupancyTotalAvailable|integer(int32)|false|none|none|
|ownerId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|area|string|false|none|none|
|areaId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|holdAmount|string(number)|false|none|none|
|paidToOwner|string(number)|false|none|none|

<h2 id="tocS_reservationBasic">reservationBasic</h2>
<!-- backwards compatibility -->
<a id="schemareservationbasic"></a>
<a id="schema_reservationBasic"></a>
<a id="tocSreservationbasic"></a>
<a id="tocsreservationbasic"></a>

```json
{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|adults|integer(int32)|false|none|none|
|allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|allotmentId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|billingCategoryId|integer(int32)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|children|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|discountId|integer(int32)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|guestId|integer(int32)|false|none|none|
|infants|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|notes|string|false|none|none|
|onlineConfirmationId|integer(int32)|false|none|none|
|otaNotes|string|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|subMarketSegmentId|integer(int32)|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|voucherId|string|false|none|none|
|wholesaleId|integer(int32)|false|none|none|

<h2 id="tocS_reservationStatus">reservationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareservationstatus"></a>
<a id="schema_reservationStatus"></a>
<a id="tocSreservationstatus"></a>
<a id="tocsreservationstatus"></a>

```json
{
  "status": "cancelled",
  "reasonid": 1,
  "cancellationNote": "Change Plans"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Valid Reservation Status|
|reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|cancellationNote|string|false|none|Free type note field used to add optional cancellation note|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<h2 id="tocS_reservationsPatch">reservationsPatch</h2>
<!-- backwards compatibility -->
<a id="schemareservationspatch"></a>
<a id="schema_reservationsPatch"></a>
<a id="tocSreservationspatch"></a>
<a id="tocsreservationspatch"></a>

```json
{
  "reservationIds": [
    219970,
    219971,
    219972
  ],
  "patch": {
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "areaId": 5,
    "areaName": "Room 7",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billing": "Personal Account",
    "billingCategoryId": 0,
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountReasonId": 0,
    "dwellingTypeId": 3,
    "dwellingLengthId": 2,
    "dwellingYear": 1,
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onHold": false,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preArrivalCheckComplete": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Booking.com",
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationIds|[integer]|false|none|none|
|patch|[reservationsPatch_patch](#schemareservationspatch_patch)|false|none|none|

<h2 id="tocS_reservationFull">reservationFull</h2>
<!-- backwards compatibility -->
<a id="schemareservationfull"></a>
<a id="schema_reservationFull"></a>
<a id="tocSreservationfull"></a>
<a id="tocsreservationfull"></a>

```json
{
  "id": 3681,
  "activeMealPlanId": 3,
  "activityId": 25,
  "accountId": 1259,
  "adults": 2,
  "additional1": 1,
  "additional2": 2,
  "additional3": 1,
  "additional4": 0,
  "additional5": 0,
  "additional6": 2,
  "additional7": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmetnId": 12457,
  "areaId": 5,
  "areaName": "Room 7",
  "areaNameLike": "01",
  "arrivalDate": "2016-28-08 13:26:00",
  "attendees": "30",
  "billing": "Personal Account",
  "boatId": 6,
  "bookerContactId": 4,
  "bookingSourceId": 2,
  "bookingSourceName": "Online",
  "businessLostId": 12,
  "businessSegmentId": 9,
  "cancellationPolicyId": 1,
  "cancelledDate": "2016-08-26 12:26:00",
  "cancelledById": 6,
  "cardId": "A698659",
  "categoryId": 19,
  "categoryName": "Super Delux Queen",
  "chargeToRoomLimit": 300,
  "children": 1,
  "companyId": 5,
  "confirmedDate": "2016-08-22 19:25:00",
  "confirmedById": 5,
  "contactId": 9,
  "coordinator1Id": 8,
  "coordinator2Id": 7,
  "createdDate": "2016-08-22 19:25:00",
  "createdById": 35,
  "departureDate": "2019-09-29 09:25:00",
  "deposit": 20,
  "depositDate": "2019-09-29 09:25:00",
  "destinationCodeId": 6,
  "discountId": 0,
  "discountReasonId": 0,
  "dwellingTypeId": "3,",
  "dwellingLengthId": "2,",
  "dwellingYear": "1,",
  "eta": "Wednesday Midnight",
  "eventFinish": "2016-08-29 09:25:00",
  "eventName": "Concert",
  "eventStart": "2019-08-29 09:25:00",
  "externalCancelId": "bcom39658965",
  "externalReservationId": "uy96598568",
  "fixedRes": true,
  "fixedResReason": 1,
  "groupAllotmentId": 7,
  "groupOptionId": 1314,
  "groupReservationId": 96598,
  "groupHeader": true,
  "guestGiven": "Smithers",
  "guestId": 65,
  "guestSurname": "Westingham",
  "housekeepingNote": "housekeeping note",
  "infants": 1,
  "longTerm": true,
  "loyaltyMembershipTypeId": 12,
  "marketSegmentId": 12,
  "mealPlanId": 16,
  "ModifiedDate": "2016-08-22 19:25:00",
  "modifiedById": 50,
  "notes": "This is a note about my reservation",
  "occupantId": 4,
  "onlineConfirmationId": 12986985,
  "originId": 9,
  "otaNotes": "Booking.com - breakdown of pricing, etc",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "paymentModeId": 45,
  "posOnGroupMaster": false,
  "preAuthAmount": 23.56,
  "preAuthCode": "2A",
  "preAuthExpDate": "2016-08-29 09:25:00",
  "propertyId": 1,
  "rateElementId": 1,
  "rateOnGroup": false,
  "rateTypeId": 3,
  "rateTypeName": "Daily",
  "repeatId": 0,
  "resTypeId": 8,
  "reservationType": "Event",
  "secondDeposit": 15,
  "secondDepositDate": "2016-08-29 09:25:00",
  "secondDiscountReasonId": 0,
  "splitReservationId": 12358,
  "status": "Confirmed",
  "subMarketSegmentId": 9,
  "subResTypeId": 5,
  "travelAgentId": 7,
  "travelAgentName": "Bopoking.com",
  "upgradeReasonId": 33,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "voucherId": "B4569856985",
  "wholesalerId": 58
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|activeMealPlanId|integer(int32)|false|none|none|
|activityId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|adults|integer(int32)|false|none|none|
|additional1|integer(int32)|false|none|none|
|additional2|integer(int32)|false|none|none|
|additional3|integer(int32)|false|none|none|
|additional4|integer(int32)|false|none|none|
|additional5|integer(int32)|false|none|none|
|additional6|integer(int32)|false|none|none|
|additional7|integer(int32)|false|none|none|
|allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|allotmentId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|areaName|string|false|none|none|
|areaNameLike|string|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|attendees|string|false|none|none|
|billing|string|false|none|none|
|boatId|integer(int32)|false|none|none|
|bookerContactId|integer(int32)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|bookingSourceName|string|false|none|none|
|businessLostId|integer(int32)|false|none|none|
|businessSegmentId|integer(int32)|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|cancelledDate|string(date-time)|false|none|none|
|cancelledById|integer(int32)|false|none|none|
|cardId|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|chargeToRoomLimit|number(currency)|false|none|none|
|children|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|confirmedDate|string(date-time)|false|none|none|
|confirmedById|integer(int32)|false|none|none|
|contactId|integer(int32)|false|none|none|
|coordinator1Id|integer(int32)|false|none|none|
|coordinator2Id|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdById|integer(int64)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|deposit|number(currency)|false|none|none|
|depositDate|string(date-time)|false|none|none|
|destinationCodeId|integer(int32)|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|dwellingTypeId|integer(int32)|false|none|none|
|dwellingLengthId|integer(int32)|false|none|none|
|eta|string|false|none|none|
|eventFinish|string(date-time)|false|none|none|
|eventName|string|false|none|none|
|eventStart|string(date-time)|false|none|none|
|externalCancelId|string|false|none|none|
|externalReservationId|string|false|none|none|
|fixedRes|boolean|false|none|none|
|fixedResReasonId|integer(int32)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupHeader|boolean|false|none|none|
|groupReservationId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|guestSurname|string|false|none|none|
|housekeepingNote|string|false|none|none|
|infants|integer(int32)|false|none|none|
|longTerm|boolean|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|modifiedById|integer(int64)|false|none|none|
|notes|string|false|none|none|
|occupantId|integer(int32)|false|none|none|
|onlineConfirmationId|integer(int32)|false|none|none|
|originId|integer(int32)|false|none|none|
|otaNotes|string|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|paymentModeId|integer(int32)|false|none|none|
|posOnGroupMaster|boolean|false|none|none|
|preArrivalCheckComplete|boolean|false|none|none|
|preAuthAmount|number(currency)|false|none|none|
|preAuthCode|string|false|none|none|
|preAuthExpDate|number(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rateElementId|integer(int32)|false|none|none|
|rateOnGroup|boolean|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|rateTypeName|string|false|none|none|
|repeatId|integer(int123)|false|none|none|
|resType|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|reservationType|string|false|none|none|
|secondDeposit|number(currency)|false|none|none|
|secondDepositDate|string(date-time)|false|none|none|
|secondDiscountReasonId|integer(int32)|false|none|none|
|splitReservationId|integer(int32)|false|none|none|
|status|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|subResTypeId|integer(int32)|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|travelAgentName|string|false|none|none|
|upgradeReasonId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|voucherId|string|false|none|none|
|wholesalerId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|Normal|
|reservationType|PartOfGhost|
|reservationType|Maintenance|
|reservationType|Blocking|
|reservationType|BedReservation|
|reservationType|Parked|
|reservationType|RoomMoveHeader|
|reservationType|UserDefined|

<h2 id="tocS_reservationSearch">reservationSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationsearch"></a>
<a id="schema_reservationSearch"></a>
<a id="tocSreservationsearch"></a>
<a id="tocsreservationsearch"></a>

```json
{
  "accountIds": [
    12,
    5,
    702
  ],
  "areaIds": [
    1,
    5,
    4
  ],
  "areaNames": [
    "207,208,209"
  ],
  "areaNameLike": "01",
  "arriveFrom": "2018-09-25 00:00:00",
  "arriveTo": "2018-09-27 00:00:00",
  "categoryIds": [
    2,
    5,
    9
  ],
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "departFrom": "2018-09-25 00:00:00",
  "departTo": "2018-09-27 00:00:00",
  "groupReservationIds": [
    1059,
    1045
  ],
  "guestSurname": [
    "Smith",
    "anderson"
  ],
  "guestIds": [
    42,
    459,
    8
  ],
  "includeGroupMasterReservations": "ExcludeGroupMasters",
  "includeInterconnecterSiblings": false,
  "includeRoomMoveHeaders": false,
  "limitProjectedRevenueToDateRange": false,
  "otaReferences": [
    "gh1232",
    "g5444"
  ],
  "propertyCodes": [
    "WCF",
    "TCG"
  ],
  "propertyIds": [
    1,
    3,
    17
  ],
  "reservationIds": [
    124,
    8699,
    2547
  ],
  "roomMoveReservationIds": [
    7589,
    12
  ],
  "listOfStatus": [
    "confirmed",
    "departed"
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "projectedRevenueFromDate": "2018-09-25 00:00:00",
  "projectedRevenueToDate": "2018-09-27 00:00:00",
  "rmsOnlineConfirmationIds": [
    1023456,
    10245985
  ],
  "regoNumbers": [
    "A7T778,ARE895"
  ],
  "reservationIdFrom": 122,
  "reservationIdTo": 125,
  "voucherIds": [
    "A984646,B.com98464564"
  ],
  "userDefined1\"": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[integer]|false|none|none|
|areaIds|[integer]|false|none|none|
|areaNames|[string]|false|none|none|
|areaNameLike|string|false|none|none|
|arriveFrom|string(date-time)|false|none|none|
|arriveTo|string(date-time)|false|none|none|
|categoryIds|[integer]|false|none|none|
|checkOutFrom|string(date-time)|false|none|none|
|checkOutTo|string(date-time)|false|none|none|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|departFrom|string(date-time)|false|none|none|
|departTo|string(date-time)|false|none|none|
|groupReservationIds|[integer]|false|none|none|
|guestSurname|[string]|false|none|none|
|guestIds|[integer]|false|none|none|
|includeGroupMasterReservations|string|false|none|none|
|includeInterconnecterSiblings|boolean|false|none|none|
|includeRoomMoveHeaders|boolean|false|none|none|
|limitProjectedRevenueToDateRange|boolean|false|none|none|
|otaReferences|[string]|false|none|none|
|propertyCodes|[string]|false|none|none|
|propertyIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|
|roomMoveReservationIds|[integer]|false|none|none|
|listOfStatus|[string]|false|none|Valid Reservation Status|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|projectedRevenueFromDate|string(date-time)|false|none|none|
|projectedRevenueToDate|string(date-time)|false|none|none|
|rmsOnlineConfirmationIds|[integer]|false|none|none|
|regoNumbers|[string]|false|none|none|
|reservationIdFrom|integer(int32)|false|none|none|
|reservationIdTo|integer(int32)|false|none|none|
|voucherIds|[string]|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|includeGroupMasterReservations|excludeGroupMasters|
|includeGroupMasterReservations|includeGroupMasters|
|includeGroupMasterReservations|onlyGroupMasters|

<h2 id="tocS_reservationLite">reservationLite</h2>
<!-- backwards compatibility -->
<a id="schemareservationlite"></a>
<a id="schema_reservationLite"></a>
<a id="tocSreservationlite"></a>
<a id="tocsreservationlite"></a>

```json
{
  "id": 3681,
  "accountId": 1259,
  "areaId": 5,
  "arrivalDate": "2017-11-12 02:03:44",
  "cancelledDate": "2017-11-25 17:25:00",
  "categoryId": 19,
  "departureDate": "2017-11-13 14:00:00",
  "guestId": 65,
  "rateTypeId": 3,
  "rateTypeName": "Daily",
  "status": "Confirmed"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|cancelledDate|string(date-time)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|guestId|integer(int32)|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|rateTypeName|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_reservationPatch">reservationPatch</h2>
<!-- backwards compatibility -->
<a id="schemareservationpatch"></a>
<a id="schema_reservationPatch"></a>
<a id="tocSreservationpatch"></a>
<a id="tocsreservationpatch"></a>

```json
{
  "activityId": 25,
  "accountId": 1259,
  "adults": 2,
  "additional1": 1,
  "additional2": 2,
  "additional3": 1,
  "additional4": 0,
  "additional5": 0,
  "additional6": 2,
  "additional7": 2,
  "allotmentAssociationID": "TravelAgent",
  "areaId": 5,
  "areaName": "Room 7",
  "arrivalDate": "2016-28-08 13:26:00",
  "attendees": "30",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billing": "Personal Account",
  "billingCategoryId": 0,
  "boatId": 6,
  "bookerContactId": 4,
  "bookingSourceId": 2,
  "bookingSourceName": "Online",
  "businessLostId": 12,
  "businessSegmentId": 9,
  "cancellationPolicyId": 1,
  "cancelledDate": "2016-08-26 12:26:00",
  "cancelledById": 6,
  "cardId": "A698659",
  "categoryId": 19,
  "categoryName": "Super Delux Queen",
  "children": 1,
  "companyId": 5,
  "confirmedDate": "2016-08-22 19:25:00",
  "confirmedById": 5,
  "contactId": 9,
  "coordinator1Id": 8,
  "coordinator2Id": 7,
  "createdDate": "2016-08-22 19:25:00",
  "createdById": 35,
  "departureDate": "2019-09-29 09:25:00",
  "deposit": 20,
  "depositDate": "2019-09-29 09:25:00",
  "destinationCodeId": 6,
  "discountReasonId": 0,
  "dwellingTypeId": "3,",
  "dwellingLengthId": "2,",
  "dwellingYear": "1,",
  "eta": "Wednesday Midnight",
  "eventFinish": "2016-08-29 09:25:00",
  "eventName": "Concert",
  "eventStart": "2019-08-29 09:25:00",
  "externalCancelId": "bcom39658965",
  "externalReservationId": "uy96598568",
  "fixedRes": true,
  "fixedResReason": 1,
  "groupAllotmentId": 7,
  "groupOptionId": 1314,
  "groupReservationId": 96598,
  "groupHeader": true,
  "guestGiven": "Smithers",
  "guestId": 65,
  "guestSurname": "Westingham",
  "housekeepingNote": "housekeeping note",
  "infants": 1,
  "longTerm": true,
  "loyaltyMembershipTypeId": 12,
  "marketSegmentId": 12,
  "mealPlanId": 16,
  "ModifiedDate": "2016-08-22 19:25:00",
  "modifiedById": 50,
  "notes": "This is a note about my reservation",
  "occupantId": 4,
  "onHold": false,
  "onlineConfirmationId": 12986985,
  "originId": 9,
  "otaNotes": "Booking.com - breakdown of pricing, etc",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "paymentModeId": 45,
  "posOnGroupMaster": false,
  "preArrivalCheckComplete": "false,",
  "preAuthAmount": 23.56,
  "preAuthCode": "2A",
  "preAuthExpDate": "2016-08-29 09:25:00",
  "propertyId": 1,
  "rateOnGroup": false,
  "rateTypeId": 3,
  "rateTypeName": "Daily",
  "resTypeId": 8,
  "reservationType": "Event",
  "secondDeposit": 15,
  "secondDepositDate": "2016-08-29 09:25:00",
  "secondDiscountReasonId": 0,
  "splitReservationId": 12358,
  "status": "Confirmed",
  "subMarketSegmentId": 9,
  "subResTypeId": 5,
  "travelAgentId": 7,
  "travelAgentName": "Bopoking.com",
  "upgradeReasonId": 33,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "voucherId": "B4569856985",
  "wholesalerId": 58
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|adults|integer(int32)|false|none|none|
|additional1|integer(int32)|false|none|none|
|additional2|integer(int32)|false|none|none|
|additional3|integer(int32)|false|none|none|
|additional4|integer(int32)|false|none|none|
|additional5|integer(int32)|false|none|none|
|additional6|integer(int32)|false|none|none|
|additional7|integer(int32)|false|none|none|
|allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|areaId|integer(int32)|false|none|none|
|areaName|string|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|attendees|string|false|none|none|
|baseRateOverride|integer(int32)|false|none|If you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Inclusive Packages or Inclusive Taxes|
|totalRateOverride|integer(int32)|false|none|If you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Exclusive Taxes. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|billing|string|false|none|none|
|billingCategoryId|integer(int32)|false|none|none|
|boatId|integer(int32)|false|none|none|
|bookerContactId|integer(int32)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|bookingSourceName|string|false|none|none|
|businessLostId|integer(int32)|false|none|none|
|businessSegmentId|integer(int32)|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|cancelledDate|string(date-time)|false|none|none|
|cancelledById|integer(int32)|false|none|none|
|cardId|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|children|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|confirmedDate|string(date-time)|false|none|none|
|confirmedById|integer(int32)|false|none|none|
|contactId|integer(int32)|false|none|none|
|coordinator1Id|integer(int32)|false|none|none|
|coordinator2Id|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdById|integer(int64)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|deposit|number(currency)|false|none|none|
|depositDate|string(date-time)|false|none|none|
|destinationCodeId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|dwellingTypeId|integer(int32)|false|none|none|
|dwellingLengthId|integer(int32)|false|none|none|
|dwellingYear|string|false|none|none|
|eta|string|false|none|none|
|eventFinish|string(date-time)|false|none|none|
|eventName|string|false|none|none|
|eventStart|string(date-time)|false|none|none|
|externalCancelId|string|false|none|none|
|externalReservationId|string|false|none|none|
|fixedRes|boolean|false|none|none|
|fixedResReasonId|integer(int32)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupHeader|boolean|false|none|none|
|groupReservationId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|guestSurname|string|false|none|none|
|housekeepingNote|string|false|none|none|
|infants|integer(int32)|false|none|none|
|longTerm|boolean|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|modifiedById|integer(int64)|false|none|none|
|notes|string|false|none|none|
|occupantId|integer(int32)|false|none|none|
|onHold|boolean|false|none|none|
|onlineConfirmationId|integer(int32)|false|none|none|
|originId|integer(int32)|false|none|none|
|otaNotes|string|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|paymentModeId|integer(int32)|false|none|none|
|posOnGroupMaster|boolean|false|none|none|
|preArrivalCheckComplete|boolean|false|none|none|
|preAuthAmount|number(currency)|false|none|none|
|preAuthCode|string|false|none|none|
|preAuthExpDate|number(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rateOnGroup|boolean|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|rateTypeName|string|false|none|none|
|resType|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|reservationType|string|false|none|none|
|secondDeposit|number(currency)|false|none|none|
|secondDepositDate|string(date-time)|false|none|none|
|secondDiscountReasonId|integer(int32)|false|none|none|
|splitReservationId|integer(int32)|false|none|none|
|status|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|subResTypeId|integer(int32)|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|travelAgentName|string|false|none|none|
|upgradeReasonId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|voucherId|string|false|none|none|
|wholesalerId|integer(int32)|false|none|none|

<h2 id="tocS_reservationBasicGroup">reservationBasicGroup</h2>
<!-- backwards compatibility -->
<a id="schemareservationbasicgroup"></a>
<a id="schema_reservationBasicGroup"></a>
<a id="tocSreservationbasicgroup"></a>
<a id="tocsreservationbasicgroup"></a>

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "areaId": 22,
    "arrivalDate": "2020-10-02 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  },
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "areaId": 21,
    "arrivalDate": "2020-10-02 14:00:00",
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|adults|integer(int32)|false|none|none|
|allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|allotmentId|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Inclusive Packages or Inclusive Taxes|
|totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Exclusive Taxes. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|bookingSourceId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|children|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|discountId|integer(int32)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|guestId|integer(int32)|false|none|none|
|infants|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|notes|string|false|none|none|
|onlineConfirmationId|integer(int32)|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|subMarketSegmentId|integer(int32)|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|voucherId|string|false|none|none|
|wholesaleId|integer(int32)|false|none|none|

<h2 id="tocS_reservationsIdCommissions">reservationsIdCommissions</h2>
<!-- backwards compatibility -->
<a id="schemareservationsidcommissions"></a>
<a id="schema_reservationsIdCommissions"></a>
<a id="tocSreservationsidcommissions"></a>
<a id="tocsreservationsidcommissions"></a>

```json
{
  "reservationId": 222130,
  "agentId": 2673,
  "commission": 15,
  "commissionType": "UseDailyDollarAmount",
  "description": "Daily 15.00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|agentId|integer|false|none|none|
|commission|number(float)|false|none|none|
|commissionType|string|false|none|none|
|description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|commissionType|UseAgentCommission|
|commissionType|UsePercentage|
|commissionType|UseDailyDollarAmount|
|commissionType|NoCommission|
|commissionType|UseTotalDollarAmount|

<h2 id="tocS_reservationPencil">reservationPencil</h2>
<!-- backwards compatibility -->
<a id="schemareservationpencil"></a>
<a id="schema_reservationPencil"></a>
<a id="tocSreservationpencil"></a>
<a id="tocsreservationpencil"></a>

```json
{
  "id": 0,
  "areaId": 16,
  "arrivalDate": "2019-10-22 14:00:00",
  "categoryId": 4,
  "departureDate": "2019-10-23 11:00:00",
  "expiryDate": "2019-10-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|areaId|integer(int32)|true|none|none|
|arrivalDate|string(date-time)|true|none|none|
|categoryId|integer(int32)|true|none|none|
|departureDate|string(date-time)|true|none|none|
|expiryDate|string(date-time)|true|none|none|
|guestId|integer(int32)|false|none|If you wish to create a pencil reservation with an existing guest, populate the guestId field and leave the other guest fields blank (If the other guest fields are populated they will be ignored). Alternatively, if you do not have an existing guestId populate the guest values i.e. guestName etc and we will create a guest for you and return the guestId in the response|
|guestEmail|string|false|none|none|
|guestGiven|string|false|none|none|
|guestMobile|string|false|none|none|
|guestSurname|string|true|none|none|
|note|string|false|none|none|
|status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|

<h2 id="tocS_reservationGroupPencil">reservationGroupPencil</h2>
<!-- backwards compatibility -->
<a id="schemareservationgrouppencil"></a>
<a id="schema_reservationGroupPencil"></a>
<a id="tocSreservationgrouppencil"></a>
<a id="tocsreservationgrouppencil"></a>

```json
{
  "id": 0,
  "expiryDate": "2024-09-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil",
  "pencils": [
    {
      "id": 0,
      "areaId": 20,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    },
    {
      "id": 0,
      "areaId": 21,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|guestId|integer(int32)|false|none|If you wish to create a pencil reservation with an existing guest, populate the guestId field and leave the other guest fields blank (If the other guest fields are populated they will be ignored). Alternatively, if you do not have an existing guestId populate the guest values i.e. guestName etc and we will create a guest for you and return the guestId in the response|
|guestEmail|string|false|none|none|
|guestGiven|string|false|none|none|
|guestMobile|string|false|none|none|
|guestSurname|string|false|none|none|
|note|string|false|none|none|
|status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|pencils|[integer]|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|

<h2 id="tocS_reservationGroupPencilResponse">reservationGroupPencilResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationgrouppencilresponse"></a>
<a id="schema_reservationGroupPencilResponse"></a>
<a id="tocSreservationgrouppencilresponse"></a>
<a id="tocsreservationgrouppencilresponse"></a>

```json
{
  "id": 216814,
  "expiryDate": "2024-09-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil",
  "pencils": [
    {
      "id": 216815,
      "areaId": 20,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    },
    {
      "id": 216816,
      "areaId": 21,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|expiryDate|string(date-time)|false|none|none|
|guestId|integer(int32)|false|none|none|
|guestEmail|string|false|none|none|
|guestGiven|string|false|none|none|
|guestMobile|string|false|none|none|
|guestSurname|string|false|none|none|
|note|string|false|none|none|
|status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|pencils|[integer]|false|none|none|
|areaId|integer(int32)|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|departureDate|string(date-time)|false|none|none|

<h2 id="tocS_maintenance">maintenance</h2>
<!-- backwards compatibility -->
<a id="schemamaintenance"></a>
<a id="schema_maintenance"></a>
<a id="tocSmaintenance"></a>
<a id="tocsmaintenance"></a>

```json
{
  "id": 0,
  "areaId": 13,
  "dateFrom": "2023-03-20 10:00:00",
  "dateTo": "2023-03-21 17:30:00",
  "cancelledDate": "1900-01-01",
  "categoryId": 4,
  "notes": "aircon is broken",
  "reasonId": 36
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|areaId|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|cancelledDate|string(date-time)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|note|string|false|none|none|
|reasonId|integer(int32)|false|none|none|

<h2 id="tocS_autoAllocateAreaRequest">autoAllocateAreaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaautoallocatearearequest"></a>
<a id="schema_autoAllocateAreaRequest"></a>
<a id="tocSautoallocatearearequest"></a>
<a id="tocsautoallocatearearequest"></a>

```json
{
  "reservationIds": [
    165654,
    5464564,
    5465465
  ]
}

```

Used:<br>POST /reservations/autoAllocateAreas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationIds|[integer]|false|none|none|

<h2 id="tocS_autoAllocateAreaResponse">autoAllocateAreaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaautoallocatearearesponse"></a>
<a id="schema_autoAllocateAreaResponse"></a>
<a id="tocSautoallocatearearesponse"></a>
<a id="tocsautoallocatearearesponse"></a>

```json
{
  "areaId": 12,
  "errorMessage": "",
  "reservationId": 162630,
  "success": true
}

```

Used:<br>POST /reservations/autoAllocateAreas

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaId|integer(int32)|false|none|none|
|errorMessage|string|false|none|none|
|reservationId|integer(int32)|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_reservationsDailyRatesOverride">reservationsDailyRatesOverride</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdailyratesoverride"></a>
<a id="schema_reservationsDailyRatesOverride"></a>
<a id="tocSreservationsdailyratesoverride"></a>
<a id="tocsreservationsdailyratesoverride"></a>

```json
{
  "reasonId": 41,
  "dailyRates": [
    {
      "theDate": "2025-03-25",
      "baseRate": 160
    },
    {
      "theDate": "2025-03-26",
      "baseRate": 180
    },
    {
      "theDate": "2025-03-27",
      "baseRate": 200
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasonId|integer|false|none|none|
|dailyRates|[[reservationsDailyRatesOverride_dailyRates](#schemareservationsdailyratesoverride_dailyrates)]|false|none|none|

<h2 id="tocS_dailyRateBasicArray">dailyRateBasicArray</h2>
<!-- backwards compatibility -->
<a id="schemadailyratebasicarray"></a>
<a id="schema_dailyRateBasicArray"></a>
<a id="tocSdailyratebasicarray"></a>
<a id="tocsdailyratebasicarray"></a>

```json
[
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 29.25,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 0,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215470,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  },
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 0,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 44,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215471,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  }
]

```

Used:<br>POST /reservations/dailyRates/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalsAmount|number(currency)|false|none|none|
|currency|string|false|none|none|
|discountAmount|number(currency)|false|none|none|
|dynamicAmount|number(currency)|false|none|none|
|exclusiveTax|number(currency)|false|none|none|
|linkedRateAdjustmentAmount|number(currency)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|packageAmount|number(currency)|false|none|none|
|packageAmountIncludedInRateAmount|number(currency)|false|none|none|
|rateAmount|number(currency)|false|none|none|
|rateElement|string|false|none|none|
|ratePeriod|string|false|none|none|
|rateTable|string|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|stayDate|string(date-time)|false|none|none|
|totalRateAmount|number(currency)|false|none|none|
|xNightsDiscount|number(currency)|false|none|none|

<h2 id="tocS_reservationsDiscountOverride">reservationsDiscountOverride</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountoverride"></a>
<a id="schema_reservationsDiscountOverride"></a>
<a id="tocSreservationsdiscountoverride"></a>
<a id="tocsreservationsdiscountoverride"></a>

```json
{
  "percentage": {
    "percentage": 3,
    "noGreaterThan": 12,
    "includePackage": true,
    "includeAdditionals": true,
    "appliestoTotalRate": false
  },
  "amount": {
    "amount": 15
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|[reservationsDiscountOverride_percentage](#schemareservationsdiscountoverride_percentage)|false|none|none|
|amount|[reservationsDiscountOverride_amount](#schemareservationsdiscountoverride_amount)|false|none|none|

<h2 id="tocS_reservationsDiscountsSearch">reservationsDiscountsSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountssearch"></a>
<a id="schema_reservationsDiscountsSearch"></a>
<a id="tocSreservationsdiscountssearch"></a>
<a id="tocsreservationsdiscountssearch"></a>

```json
{
  "categoryId": 4,
  "rateId": 1416,
  "arrivalDate": "2025-08-12",
  "departureDate": "2025-08-14"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer|true|none|none|
|rateId|integer|true|none|none|
|arrivalDate|string(date)|true|none|none|
|departureDate|string(date)|true|none|none|

<h2 id="tocS_reservationsDiscountsSearchResponseFull">reservationsDiscountsSearchResponseFull</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountssearchresponsefull"></a>
<a id="schema_reservationsDiscountsSearchResponseFull"></a>
<a id="tocSreservationsdiscountssearchresponsefull"></a>
<a id="tocsreservationsdiscountssearchresponsefull"></a>

```json
[
  {
    "availableToMembers": false,
    "glCodeId": 238,
    "glCodeType": "UseDefault",
    "discountType": "Percentage",
    "percentage": {
      "percentage": 15,
      "noGreaterThan": 9999,
      "includePackage": false,
      "includeAdditionals": false,
      "appliesToTotalRate": false
    },
    "availableToIbe": false,
    "description": "",
    "minimumNightStay": 0,
    "maximumNightStay": 0,
    "id": 65,
    "name": "15% Discount"
  },
  {
    "availableToMembers": false,
    "glCodeId": 376,
    "glCodeType": "UseDefault",
    "discountType": "Percentage",
    "percentage": {
      "percentage": 20,
      "noGreaterThan": 99999,
      "includePackage": false,
      "includeAdditionals": false,
      "appliesToTotalRate": false
    },
    "availableToIbe": false,
    "description": "",
    "minimumNightStay": 0,
    "maximumNightStay": 0,
    "id": 121,
    "name": "Discount Without Validation Options"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationsDiscountsSearchResponseFull_inner](#schemareservationsdiscountssearchresponsefull_inner)]|false|none|none|

<h2 id="tocS_reservationDocumentation">reservationDocumentation</h2>
<!-- backwards compatibility -->
<a id="schemareservationdocumentation"></a>
<a id="schema_reservationDocumentation"></a>
<a id="tocSreservationdocumentation"></a>
<a id="tocsreservationdocumentation"></a>

```json
{
  "documentName": "Picture.png",
  "documentContent": "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",
  "note": "Logo"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentName|string|false|none|none|
|documentContent|string(base64)|false|none|none|
|note|string|false|none|none|

<h2 id="tocS_reservationPackageArray">reservationPackageArray</h2>
<!-- backwards compatibility -->
<a id="schemareservationpackagearray"></a>
<a id="schema_reservationPackageArray"></a>
<a id="tocSreservationpackagearray"></a>
<a id="tocsreservationpackagearray"></a>

```json
{
  "id": 43196,
  "sundryId": 313,
  "sundryDescription": "Fancy Pants Package",
  "quantity": 2,
  "perAdult": 5,
  "perChild": 5,
  "perInfant": 0,
  "perAdditional1": 0,
  "perAdditional2": 0,
  "perAdditional3": 0,
  "perAdditional4": 0,
  "perAdditional5": 0,
  "showOnccount": false,
  "applyChargeDescription": "On The 1st Period (Determined by Tariff Table - Hourly, Nightly or Daily)"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|sundryId|integer(int32)|false|none|none|
|sundryDescription|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|perAdult|integer(decimal)|false|none|none|
|perChild|integer(decimal)|false|none|none|
|perInfant|integer(decimal)|false|none|none|
|perAdditional1|integer(decimal)|false|none|none|
|perAdditional2|integer(decimal)|false|none|none|
|perAdditional3|integer(decimal)|false|none|none|
|perAdditional4|integer(decimal)|false|none|none|
|perAdditional5|integer(decimal)|false|none|none|
|showOnccount|boolean|false|none|none|
|applyChargeDescription|string|false|none|none|

<h2 id="tocS_reservationsPackagesSearch">reservationsPackagesSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationspackagessearch"></a>
<a id="schema_reservationsPackagesSearch"></a>
<a id="tocSreservationspackagessearch"></a>
<a id="tocsreservationspackagessearch"></a>

```json
{
  "ids": [
    223811,
    223814
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|

<h2 id="tocS_reservationsPackagesResponse">reservationsPackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationspackagesresponse"></a>
<a id="schema_reservationsPackagesResponse"></a>
<a id="tocSreservationspackagesresponse"></a>
<a id="tocsreservationspackagesresponse"></a>

```json
[
  {
    "reservationId": 223811,
    "packages": [
      {
        "id": 43641,
        "sundryId": 1411,
        "sundryDescription": "Luxurious Robe",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 12
      },
      {
        "id": 43640,
        "sundryId": 1410,
        "sundryDescription": "Spa Visit",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 50
      }
    ]
  },
  {
    "reservationId": 223814,
    "packages": [
      {
        "id": 43658,
        "sundryId": 6,
        "sundryDescription": "Restaurant Food",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "On The 1st Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 120
      },
      {
        "id": 43659,
        "sundryId": 111,
        "sundryDescription": "B1 B/fast Bev",
        "quantity": 2,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 6
      },
      {
        "id": 43657,
        "sundryId": 42,
        "sundryDescription": "B1 B/Fast food",
        "quantity": 2,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 50
      }
    ]
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationsPackagesResponse_inner](#schemareservationspackagesresponse_inner)]|false|none|none|

<h2 id="tocS_reservationRequirement">reservationRequirement</h2>
<!-- backwards compatibility -->
<a id="schemareservationrequirement"></a>
<a id="schema_reservationRequirement"></a>
<a id="tocSreservationrequirement"></a>
<a id="tocsreservationrequirement"></a>

```json
{
  "amount": 26.9,
  "dateFrom": "2019-10-23 00:00:00",
  "dateTo": "2019-10-21 00:00:00",
  "quantity": 2,
  "requirementId": 2,
  "secondCurrency": 0,
  "name": "Custom Description",
  "amountOverride": {
    "feeType": "PerPeriod",
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "unitPrice": 12
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(decimal)|false|none|none|
|dateFrom|string(date-time)|true|none|none|
|dateTo|string(date-time)|true|none|none|
|quantity|integer(int32)|true|none|none|
|requirementId|integer(int32)|true|none|none|
|secondaryCurrency|integer(decimal)|false|none|none|
|name|string|false|none|none|
|amountOverride|[[reservationRequirementOverride](#schemareservationrequirementoverride)]|false|none|none|

<h2 id="tocS_reservationRequirementOverride">reservationRequirementOverride</h2>
<!-- backwards compatibility -->
<a id="schemareservationrequirementoverride"></a>
<a id="schema_reservationRequirementOverride"></a>
<a id="tocSreservationrequirementoverride"></a>
<a id="tocsreservationrequirementoverride"></a>

```json
{
  "feeType": "PerPerson",
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "unitPrice": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feeType|string|false|none|none|
|perAdult|integer(decimal)|false|none|none|
|perChild|integer(decimal)|false|none|none|
|perInfant|integer(decimal)|false|none|none|
|unitPrice|integer(decimal)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPerson|
|feeType|PerPeriod|

<h2 id="tocS_reservationsRequirementGetResponse">reservationsRequirementGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationsrequirementgetresponse"></a>
<a id="schema_reservationsRequirementGetResponse"></a>
<a id="tocSreservationsrequirementgetresponse"></a>
<a id="tocsreservationsrequirementgetresponse"></a>

```json
[
  {
    "Id": 67762,
    "dateFrom": "2024-08-28 14:00:00",
    "dateTo": "2024-08-28 14:00:00",
    "quantity": 0,
    "amount": 60,
    "name": "Requirement",
    "reservationId": 216486,
    "secondCurrency": 0,
    "masterRequirementId": 66942
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|quantity|integer|false|none|none|
|amount|number(float)|false|none|none|
|name|string|false|none|none|
|reservationId|integer|false|none|none|
|secondCurrency|number(float)|false|none|none|
|masterRequirementId|integer|false|none|none|

<h2 id="tocS_reservationArraySearch">reservationArraySearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationarraysearch"></a>
<a id="schema_reservationArraySearch"></a>
<a id="tocSreservationarraysearch"></a>
<a id="tocsreservationarraysearch"></a>

```json
{
  "ids": [
    215469
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|This call is limitied to only allow you to pass 50 reservations ID's per call|

<h2 id="tocS_reservationRequirementArray">reservationRequirementArray</h2>
<!-- backwards compatibility -->
<a id="schemareservationrequirementarray"></a>
<a id="schema_reservationRequirementArray"></a>
<a id="tocSreservationrequirementarray"></a>
<a id="tocsreservationrequirementarray"></a>

```json
{
  "amount": 26.9,
  "dateFrom": "2019-10-23 00:00:00",
  "dateTo": "2019-10-21 00:00:00",
  "id": 2,
  "quantity": 2,
  "name": "Early check in online. 12 noon check in.",
  "reservationId": 21548
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(decimal)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|quantity|integer(int32)|false|none|none|
|name|string|false|none|none|
|reservationId|integer(int32)|false|none|none|

<h2 id="tocS_actualAccountArray">actualAccountArray</h2>
<!-- backwards compatibility -->
<a id="schemaactualaccountarray"></a>
<a id="schema_actualAccountArray"></a>
<a id="tocSactualaccountarray"></a>
<a id="tocsactualaccountarray"></a>

```json
[
  {
    "reservationId": 222878,
    "accountId": 380471,
    "accountCurrencyView": "USD",
    "currencyCode": "AUD",
    "secondDepositRequiredByDate": "2024-10-02 01:08:10",
    "secondDeposit": 0,
    "arBalance": 0,
    "accommodationBalance": -75,
    "baseRate": 309,
    "billCategoryType": "",
    "createTotalRate": false,
    "depositRequiredByDate": "2024-09-25 01:08:10",
    "deposit": 116.93,
    "discountAmount": 0,
    "discountId": 0,
    "discountName": "",
    "discountReason": "",
    "electricityBalance": 0,
    "extrasBalance": 0,
    "gasBalance": 0,
    "hideRateOnCorrespondence": false,
    "package": 100,
    "travelAgentCommissionPercentage": 0,
    "travelAgentCommissionAmount": 0,
    "travelAgentCommissionType": "UseAgentCommission",
    "tax": 58.71,
    "taxExemption": "",
    "totalRate": 467.71,
    "upgradeReason": "",
    "waterBalance": 0,
    "phoneBalance": 0,
    "internetBalance": 0
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|accountId|integer|false|none|none|
|accountCurrencyView|string|false|none|none|
|currencyCode|string|false|none|none|
|secondDepositRequiredByDate|string(date-time)|false|none|none|
|secondDeposit|number(float)|false|none|none|
|arBalance|number(float)|false|none|none|
|accommodationBalance|number(float)|false|none|none|
|baseRate|number(float)|false|none|none|
|billCategoryType|string|false|none|none|
|createTotalRate|boolean|false|none|none|
|depositRequiredByDate|string(date-time)|false|none|none|
|deposit|number(float)|false|none|none|
|discountAmount|number(float)|false|none|none|
|discountId|integer|false|none|none|
|discountName|string|false|none|none|
|discountReason|string|false|none|none|
|electricityBalance|number(float)|false|none|none|
|extrasBalance|number(float)|false|none|none|
|gasBalance|number(float)|false|none|none|
|hideRateOnCorrespondence|boolean|false|none|none|
|package|number(float)|false|none|none|
|travelAgentCommissionPercentage|number(float)|false|none|none|
|travelAgentCommissionAmount|number(float)|false|none|none|
|travelAgentCommissionType|string|false|none|none|
|tax|number(float)|false|none|none|
|taxExemption|string|false|none|none|
|totalRate|number(float)|false|none|none|
|upgradeReason|string|false|none|none|
|waterBalance|number(float)|false|none|none|
|phoneBalance|number(float)|false|none|none|
|internetBalance|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|travelAgentCommissionType|UseAgentCommission|
|travelAgentCommissionType|UsePercentage|
|travelAgentCommissionType|UseDailyDollarAmount|
|travelAgentCommissionType|NoCommission|
|travelAgentCommissionType|UseTotalDollarAmount|

<h2 id="tocS_reservationsRateOnGroup">reservationsRateOnGroup</h2>
<!-- backwards compatibility -->
<a id="schemareservationsrateongroup"></a>
<a id="schema_reservationsRateOnGroup"></a>
<a id="tocSreservationsrateongroup"></a>
<a id="tocsreservationsrateongroup"></a>

```json
{
  "rateOnGroup": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateOnGroup|boolean|false|none|none|

<h2 id="tocS_reservationAddOn">reservationAddOn</h2>
<!-- backwards compatibility -->
<a id="schemareservationaddon"></a>
<a id="schema_reservationAddOn"></a>
<a id="tocSreservationaddon"></a>
<a id="tocsreservationaddon"></a>

```json
{
  "id": 55,
  "addOn": "PK1",
  "addOnId": 1,
  "addOnType": "Car Park",
  "addOnTypeId": 3,
  "amount": 36.23,
  "aqppearOnHousekeepersReport": true,
  "chargesRequiredDaily": false,
  "fromDate": "2018-06-12 02:11:00",
  "includeToDate": false,
  "sundryId": 2,
  "useAmountFromSundry": true,
  "toDate": "2018-09-25 17:25:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|addOnName|string|false|none|This field is informational, any changes made will not be honoured|
|addOnId|integer(int32)|false|none|none|
|addOnTypeName|string|false|none|This field is informational, any changes made will not be honoured|
|addOnTypeId|integer(int32)|false|none|none|
|amount|number(currency)|false|none|none|
|appearOnHousekeepersReport|boolean|false|none|none|
|chargesRequiredDaily|boolean|false|none|none|
|fromDate|string(date-time)|false|none|none|
|includeToDate|boolean|false|none|none|
|sundryId|integer(int32)|false|none|none|
|useAmountFromSundry|boolean|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_reservationAuditTrail">reservationAuditTrail</h2>
<!-- backwards compatibility -->
<a id="schemareservationaudittrail"></a>
<a id="schema_reservationAuditTrail"></a>
<a id="tocSreservationaudittrail"></a>
<a id="tocsreservationaudittrail"></a>

```json
{
  "amount": 986,
  "date": "2018-09-25 17:25:00",
  "fieldModified": "Category",
  "newValue": "Deluxe Queen",
  "oldValue": "Single",
  "reason": "Incorrect Entry",
  "username": "Manager",
  "view": "reservation"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(currency)|false|none|none|
|date|string(date-time)|false|none|none|
|fieldModified|string|false|none|none|
|newValue|string|false|none|none|
|oldValue|string|false|none|none|
|reason|string|false|none|none|
|username|string|false|none|none|
|view|string|false|none|none|

<h2 id="tocS_reservationsBedConfigurationsSearch">reservationsBedConfigurationsSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationsbedconfigurationssearch"></a>
<a id="schema_reservationsBedConfigurationsSearch"></a>
<a id="tocSreservationsbedconfigurationssearch"></a>
<a id="tocsreservationsbedconfigurationssearch"></a>

```json
{
  "ids": [
    228156,
    228157
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|

<h2 id="tocS_reservationsBedConfigurationsResponse">reservationsBedConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationsbedconfigurationsresponse"></a>
<a id="schema_reservationsBedConfigurationsResponse"></a>
<a id="tocSreservationsbedconfigurationsresponse"></a>
<a id="tocsreservationsbedconfigurationsresponse"></a>

```json
[
  {
    "reservationId": 228156,
    "bedConfigurations": [
      {
        "quantity": 2,
        "id": 6,
        "name": "Foldaway"
      },
      {
        "quantity": 1,
        "id": 3,
        "name": "King"
      },
      {
        "quantity": 1,
        "id": 5,
        "name": "King Split"
      },
      {
        "quantity": 2,
        "id": 4,
        "name": "Queen"
      },
      {
        "quantity": 1,
        "id": 1,
        "name": "Single"
      },
      {
        "quantity": 1,
        "id": 9,
        "name": "Sofa Bed"
      }
    ]
  },
  {
    "reservationId": 228157,
    "bedConfigurations": [
      {
        "quantity": 1,
        "id": 6,
        "name": "Foldaway"
      },
      {
        "quantity": 1,
        "id": 3,
        "name": "King"
      },
      {
        "quantity": 1,
        "id": 5,
        "name": "King Split"
      },
      {
        "quantity": 1,
        "id": 4,
        "name": "Queen"
      },
      {
        "quantity": 1,
        "id": 1,
        "name": "Single"
      },
      {
        "quantity": 1,
        "id": 9,
        "name": "Sofa Bed"
      }
    ]
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationsBedConfigurationsResponse_inner](#schemareservationsbedconfigurationsresponse_inner)]|false|none|none|

<h2 id="tocS_bedConfiguration">bedConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabedconfiguration"></a>
<a id="schema_bedConfiguration"></a>
<a id="tocSbedconfiguration"></a>
<a id="tocsbedconfiguration"></a>

```json
{
  "id": 1,
  "name": "King",
  "quantity": 2
}

```

Used:<br>GET /reservations/{id}/bedConfiguration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|integer(int32)|false|none|none|

<h2 id="tocS_reservationBillToArray">reservationBillToArray</h2>
<!-- backwards compatibility -->
<a id="schemareservationbilltoarray"></a>
<a id="schema_reservationBillToArray"></a>
<a id="tocSreservationbilltoarray"></a>
<a id="tocsreservationbilltoarray"></a>

```json
{
  "reservationId": 163577,
  "billToInformation": [
    {
      "billToEntityId": 138452,
      "billToEntity": "Guest",
      "accountType": "Account1",
      "description": "Accommodation",
      "invoiced": false
    },
    {
      "billToEntityId": 138452,
      "billToEntity": "Guest",
      "accountType": "Account1",
      "description": "Extras",
      "invoiced": false
    },
    {
      "billToEntityId": 138452,
      "billToEntity": "Guest",
      "accountType": "Pabx",
      "description": "Pabx",
      "invoiced": false
    },
    {
      "billToEntityId": 138452,
      "billToEntity": "Guest",
      "accountType": "Electricity",
      "description": "Electricity",
      "invoiced": false
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|billToInformation|[reservationBillTo](#schemareservationbillto)|false|none|none|

<h2 id="tocS_reservationBillTo">reservationBillTo</h2>
<!-- backwards compatibility -->
<a id="schemareservationbillto"></a>
<a id="schema_reservationBillTo"></a>
<a id="tocSreservationbillto"></a>
<a id="tocsreservationbillto"></a>

```json
{
  "billToEntityId": 0,
  "billToEntity": "string",
  "accountType": "string",
  "description": "string",
  "invoiced": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billToEntityId|integer(int32)|false|none|none|
|billToEntity|string|false|none|none|
|accountType|string|false|none|none|
|description|string|false|none|system label|
|invoiced|string|false|none|none|

<h2 id="tocS_correspondence">correspondence</h2>
<!-- backwards compatibility -->
<a id="schemacorrespondence"></a>
<a id="schema_correspondence"></a>
<a id="tocScorrespondence"></a>
<a id="tocscorrespondence"></a>

```json
{
  "id": 2564,
  "attachment": "consent form.pdf",
  "code": "15a",
  "correspondenceType": "Email",
  "description": "CC Registration",
  "guestId": 103,
  "readDate": "2018-09-25 17:25:00",
  "reservationId": 3503,
  "sentDate": "2018-09-25 17:25:00",
  "userId": 7,
  "userName": "*hp"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|attachment|string|false|none|none|
|code|string|false|none|none|
|correspondenceType|string|false|none|none|
|description|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|readDate|string(date-time)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|sentDate|string(date-time)|false|none|none|
|userId|integer(int32)|false|none|none|
|userName|string|false|none|none|

<h2 id="tocS_existingToken">existingToken</h2>
<!-- backwards compatibility -->
<a id="schemaexistingtoken"></a>
<a id="schema_existingToken"></a>
<a id="tocSexistingtoken"></a>
<a id="tocsexistingtoken"></a>

```json
{
  "reservationId": 198654,
  "existingToken": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|existingToken|boolean|false|none|none|

<h2 id="tocS_guestMovementsSearch">guestMovementsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaguestmovementssearch"></a>
<a id="schema_guestMovementsSearch"></a>
<a id="tocSguestmovementssearch"></a>
<a id="tocsguestmovementssearch"></a>

```json
{
  "guestIds": [
    194076
  ],
  "reservationIds": [],
  "dateFrom": "2023-01-01",
  "dateTo": "2024-09-05"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guestIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|

<h2 id="tocS_guestMovementBasic">guestMovementBasic</h2>
<!-- backwards compatibility -->
<a id="schemaguestmovementbasic"></a>
<a id="schema_guestMovementBasic"></a>
<a id="tocSguestmovementbasic"></a>
<a id="tocsguestmovementbasic"></a>

```json
[
  {
    "id": 194076,
    "guestId": 58202,
    "primaryGuest": true,
    "arrive": "2023-05-27 14:00:00",
    "depart": "2023-05-30 10:30:00",
    "adults": 2,
    "children": 0,
    "reservationId": 214327,
    "doNotSendCorrespondence": false,
    "roleId": 1,
    "role": "Capitain",
    "guestGiven": "Eric",
    "guestSurname": "Cartman"
  },
  {
    "id": 194129,
    "guestId": 153307,
    "primaryGuest": false,
    "arrive": "2023-05-27 14:00:00",
    "depart": "2023-05-30 10:30:00",
    "adults": 2,
    "children": 0,
    "reservationId": 214327,
    "doNotSendCorrespondence": false,
    "roleId": 2,
    "role": "Crew",
    "guestGiven": "Lando",
    "guestSurname": "Norris"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|primaryGuest|boolean|false|none|none|
|arrive|string(date-time)|false|none|none|
|depart|string(date-time)|false|none|none|
|adults|integer(int32)|false|none|none|
|children|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|doNotSendCorrespondace|boolean|false|none|none|
|roleId|integer(int32)|false|none|none|
|role|string|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|

<h2 id="tocS_guestMovementFull">guestMovementFull</h2>
<!-- backwards compatibility -->
<a id="schemaguestmovementfull"></a>
<a id="schema_guestMovementFull"></a>
<a id="tocSguestmovementfull"></a>
<a id="tocsguestmovementfull"></a>

```json
[
  {
    "id": 194076,
    "guestId": 58202,
    "primaryGuest": true,
    "arrive": "2023-05-27 14:00:00",
    "depart": "2023-05-30 10:30:00",
    "adults": 2,
    "children": 0,
    "reservationId": 214327,
    "doNotSendCorrespondence": false,
    "roleId": 1,
    "role": "Captain",
    "guestGiven": "Eric",
    "guestSurname": "Cartman",
    "categoryId": 6,
    "propertyId": 1,
    "propertyName": "Test property 1",
    "rateTypeId": 1159,
    "reservationStatus": "Departed",
    "areaId": 31,
    "areaName": "01 031"
  },
  {
    "id": 194129,
    "guestId": 153307,
    "primaryGuest": false,
    "arrive": "2023-05-27 14:00:00",
    "depart": "2023-05-30 10:30:00",
    "adults": 2,
    "children": 0,
    "reservationId": 214327,
    "doNotSendCorrespondence": false,
    "roleId": 2,
    "role": "Crew",
    "guestGiven": "Lando",
    "guestSurname": "Norris",
    "categoryId": 6,
    "propertyId": 1,
    "propertyName": "Test property 1",
    "rateTypeId": 1159,
    "reservationStatus": "Departed",
    "areaId": 31,
    "areaName": "01 031"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guestId|integer(int32)|false|none|none|
|primaryGuest|boolean|false|none|none|
|arrive|string(date-time)|false|none|none|
|depart|string(date-time)|false|none|none|
|adults|integer(int32)|false|none|none|
|children|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|doNotSendCorrespondence|boolean|false|none|none|
|roleId|integer(int32)|false|none|none|
|role|string|false|none|none|
|guestGiven|string|false|none|none|
|guestSurname|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|propertyName|string|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|reservationStatus|string|false|none|none|
|areaId|integer(int32)|false|none|none|
|areaName|string|false|none|none|

<h2 id="tocS_reservationHold">reservationHold</h2>
<!-- backwards compatibility -->
<a id="schemareservationhold"></a>
<a id="schema_reservationHold"></a>
<a id="tocSreservationhold"></a>
<a id="tocsreservationhold"></a>

```json
{
  "id": 5,
  "holdExpired": true,
  "dateFrom": "2020-10-23 00:00:00",
  "rateId": 1277,
  "dateTo": "2020-10-27 00:00:00"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|holdExpired|boolean|false|none|none|
|dateFrom|string(date)|false|none|none|
|rateId|integer(int32)|false|none|none|
|dateTo|string(date)|false|none|none|

<h2 id="tocS_reservationHoldArray">reservationHoldArray</h2>
<!-- backwards compatibility -->
<a id="schemareservationholdarray"></a>
<a id="schema_reservationHoldArray"></a>
<a id="tocSreservationholdarray"></a>
<a id="tocsreservationholdarray"></a>

```json
{
  "reservationId": 124356,
  "holds": [
    {
      "id": 5,
      "holdExpired": true,
      "dateFrom": "2020-10-23 00:00:00",
      "rateId": 1277,
      "dateTo": "2020-10-27 00:00:00"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|holds|[reservationHold](#schemareservationhold)|false|none|none|

<h2 id="tocS_reservationHousekeepingSearch">reservationHousekeepingSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationhousekeepingsearch"></a>
<a id="schema_reservationHousekeepingSearch"></a>
<a id="tocSreservationhousekeepingsearch"></a>
<a id="tocsreservationhousekeepingsearch"></a>

```json
{
  "fromDate": "2023-04-20",
  "reservationIds": [
    213691,
    213296
  ],
  "toDate": "2023-04-20"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string(date)|false|none|none|
|reservationIds|[integer]|false|none|none|
|toDate|string(date)|false|none|none|

<h2 id="tocS_reservationHousekeepingArray">reservationHousekeepingArray</h2>
<!-- backwards compatibility -->
<a id="schemareservationhousekeepingarray"></a>
<a id="schema_reservationHousekeepingArray"></a>
<a id="tocSreservationhousekeepingarray"></a>
<a id="tocsreservationhousekeepingarray"></a>

```json
{
  "departureClean": false,
  "housekeeperId": 45,
  "housekeeperName": "Hayden Paterson",
  "id": 7,
  "linenChange": true,
  "note": "",
  "taskDate": "2023-04-20 00:00:00",
  "taskName": "Linen Change",
  "taskMinutes": 30,
  "reservationId": 213691
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departureClean|boolean|false|none|none|
|housekeeperId|integer(int32)|false|none|none|
|housekeeperName|string|false|none|none|
|id|integer(int32)|false|none|none|
|linenChange|boolean|false|none|none|
|note|string|false|none|none|
|taskDate|string(date-time)|false|none|none|
|taskName|string|false|none|none|
|taskMinutes|any|false|none|none|
|reservationId|integer(int32)|false|none|none|

<h2 id="tocS_housekeeping">housekeeping</h2>
<!-- backwards compatibility -->
<a id="schemahousekeeping"></a>
<a id="schema_housekeeping"></a>
<a id="tocShousekeeping"></a>
<a id="tocshousekeeping"></a>

```json
{
  "departureClean": true,
  "housekeeperId": 8,
  "housekeeperName": "Jan",
  "id": 8,
  "linenChange": true,
  "note": "dont tuck bed to tight",
  "taskDate": "2020-05-26 00:00:00",
  "taskName": "Departure",
  "taskMinutes": 5,
  "reservationId": 213296
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departureClean|boolean|false|none|none|
|housekeeperId|integer(int32)|false|none|none|
|housekeeperName|string|false|none|none|
|id|integer(int32)|false|none|none|
|linenChange|boolean|false|none|none|
|note|string|false|none|none|
|taskDate|string(date-time)|false|none|none|
|taskName|string|false|none|none|
|taskMinutes|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|

<h2 id="tocS_resetHousekeepingRequest">resetHousekeepingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresethousekeepingrequest"></a>
<a id="schema_resetHousekeepingRequest"></a>
<a id="tocSresethousekeepingrequest"></a>
<a id="tocsresethousekeepingrequest"></a>

```json
{
  "reservationId": 0,
  "resetBedConfig": true
}

```

Used:<br>POST /reservations/{id}/housekeeping/resetSchedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|resetBedConfig|boolean|false|none|none|

<h2 id="tocS_reservationsLinensSearch">reservationsLinensSearch</h2>
<!-- backwards compatibility -->
<a id="schemareservationslinenssearch"></a>
<a id="schema_reservationsLinensSearch"></a>
<a id="tocSreservationslinenssearch"></a>
<a id="tocsreservationslinenssearch"></a>

```json
{
  "ids": [
    228156,
    228157
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationsBedConfigurationsResponse_inner](#schemareservationsbedconfigurationsresponse_inner)]|false|none|none|

<h2 id="tocS_reservationsLinensResponse">reservationsLinensResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationslinensresponse"></a>
<a id="schema_reservationsLinensResponse"></a>
<a id="tocSreservationslinensresponse"></a>
<a id="tocsreservationslinensresponse"></a>

```json
[
  {
    "reservationId": 228156,
    "linens": [
      {
        "linenId": 5,
        "linen": "Bath Mat",
        "quantity": 3
      },
      {
        "linenId": 4,
        "linen": "Bath towel",
        "quantity": 6
      },
      {
        "linenId": 7,
        "linen": "Face Washer",
        "quantity": 4
      },
      {
        "linenId": 8,
        "linen": "Hand Towel",
        "quantity": 2
      },
      {
        "linenId": 6,
        "linen": "King Sheet",
        "quantity": 1
      },
      {
        "linenId": 9,
        "linen": "KING SINGLE SHEET",
        "quantity": 1
      },
      {
        "linenId": 3,
        "linen": "Pillow Slip",
        "quantity": 1
      },
      {
        "linenId": 10,
        "linen": "Pool towel",
        "quantity": 2
      },
      {
        "linenId": 2,
        "linen": "Single Sheet",
        "quantity": 2
      }
    ]
  },
  {
    "reservationId": 228157,
    "linens": [
      {
        "linenId": 5,
        "linen": "Bath Mat",
        "quantity": 2
      },
      {
        "linenId": 4,
        "linen": "Bath towel",
        "quantity": 4
      },
      {
        "linenId": 7,
        "linen": "Face Washer",
        "quantity": 3
      },
      {
        "linenId": 8,
        "linen": "Hand Towel",
        "quantity": 2
      },
      {
        "linenId": 6,
        "linen": "King Sheet",
        "quantity": 1
      },
      {
        "linenId": 9,
        "linen": "KING SINGLE SHEET",
        "quantity": 1
      },
      {
        "linenId": 3,
        "linen": "Pillow Slip",
        "quantity": 1
      },
      {
        "linenId": 10,
        "linen": "Pool towel",
        "quantity": 2
      },
      {
        "linenId": 2,
        "linen": "Single Sheet",
        "quantity": 1
      }
    ]
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationsLinensResponse_inner](#schemareservationslinensresponse_inner)]|false|none|none|

<h2 id="tocS_resLinen">resLinen</h2>
<!-- backwards compatibility -->
<a id="schemareslinen"></a>
<a id="schema_resLinen"></a>
<a id="tocSreslinen"></a>
<a id="tocsreslinen"></a>

```json
{
  "linenId": 4,
  "linen": "Bath towel",
  "quantity": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linenId|integer(int32)|false|none|none|
|linen|string|false|none|none|
|quantity|integer(int32)|false|none|none|

<h2 id="tocS_projectedAccount">projectedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaprojectedaccount"></a>
<a id="schema_projectedAccount"></a>
<a id="tocSprojectedaccount"></a>
<a id="tocsprojectedaccount"></a>

```json
{
  "id": 72,
  "tax": null,
  "total": null,
  "totalTaxExcludingGST": null
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|tax|number(currency)|false|none|none|
|total|number(currency)|false|none|none|
|totalTaxExcludingGST|number(currency)|false|none|none|

<h2 id="tocS_projectedBalance">projectedBalance</h2>
<!-- backwards compatibility -->
<a id="schemaprojectedbalance"></a>
<a id="schema_projectedBalance"></a>
<a id="tocSprojectedbalance"></a>
<a id="tocsprojectedbalance"></a>

```json
{
  "projectedBalance": -133.7
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectedBalance|integer(int32)|false|none|none|

<h2 id="tocS_dailyRate">dailyRate</h2>
<!-- backwards compatibility -->
<a id="schemadailyrate"></a>
<a id="schema_dailyRate"></a>
<a id="tocSdailyrate"></a>
<a id="tocsdailyrate"></a>

```json
{
  "reservationId": 3678,
  "additionalsAmount": 0,
  "currency": "AUD",
  "discountAmount": 29.25,
  "dynamicAmount": 0,
  "exclusiveTax": 0,
  "linkedRateAdjustmentAmount": 0,
  "marketSegmentId": 1,
  "packageAmount": 0,
  "rateAmount": 292.5,
  "rateId": 12,
  "ratePeriod": 7,
  "rateTable": 15,
  "rateTypeId": 15,
  "stayDate": "28-04-2019 12:00:00",
  "totalRateAmount": 800.25,
  "xNightsDiscount": 0,
  "packageAmountIncludedInRateAmount": 20
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|additionalsAmount|number(currency)|false|none|none|
|currency|string|false|none|none|
|discountAmount|number(currency)|false|none|none|
|dynamicAmount|number(currency)|false|none|none|
|exclusiveTax|number(currency)|false|none|none|
|linkedRateAdjustmentAmount|number(currency)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|packageAmount|number(currency)|false|none|none|
|packageAmountIncludedInRateAmount|number(currency)|false|none|none|
|rateAmount|number(currency)|false|none|none|
|rateId|integer(int32)|false|none|none|
|ratePeriod|integer(int32)|false|none|none|
|rateTable|integer(int32)|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|stayDate|string(date-time)|false|none|none|
|totalRateAmount|number(currency)|false|none|none|
|xNightsDiscount|number(currency)|false|none|none|

<h2 id="tocS_reservationsRateQuotes">reservationsRateQuotes</h2>
<!-- backwards compatibility -->
<a id="schemareservationsratequotes"></a>
<a id="schema_reservationsRateQuotes"></a>
<a id="tocSreservationsratequotes"></a>
<a id="tocsreservationsratequotes"></a>

```json
{
  "reservationIds": [
    222898,
    226542
  ],
  "includeTaxBreakdown": true,
  "includeAdditionalsBreakdown": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationIds|[integer]|true|none|List of reservation IDs to retrieve details for.|
|includeTaxBreakdown|boolean|false|none|Whether to include a breakdown of taxes in the response.|
|includeAdditionalsBreakdown|boolean|false|none|Whether to include a breakdown of additional charges in the response.|

<h2 id="tocS_reservationsRateQuotesResponse">reservationsRateQuotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemareservationsratequotesresponse"></a>
<a id="schema_reservationsRateQuotesResponse"></a>
<a id="tocSreservationsratequotesresponse"></a>
<a id="tocsreservationsratequotesresponse"></a>

```json
[
  {
    "baseRate": 620,
    "baseRateDiscountAmount": 0,
    "baseRateRentalReductionAmount": 0,
    "baseRateTax": 155,
    "categoryId": 52,
    "deposit1Amount": 712,
    "deposit1RequiredBy": "2024-09-26 03:51:51",
    "deposit2Amount": 100,
    "deposit2RequiredBy": "2024-09-26 03:51:51",
    "discountAmount": 0,
    "firstNightRate": 356,
    "package": 92,
    "packageTax": 0,
    "rateBreakdown": [
      {
        "theDate": "2028-10-01 00:00:00",
        "baseRateAmount": 310,
        "baseRateRaw": 300,
        "rateType": "BAR USD",
        "rateTypeId": 1433,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 46,
        "packageHiddenAmount": 46,
        "packageShownAmount": 0,
        "displayBaseRate": 300,
        "displayTotalPackage": 46,
        "displayTotalRate": 356,
        "displayTotalTax": 77.5,
        "packageBreakdown": [
          {
            "amount": 40,
            "baseIncludesPackageAmount": false,
            "glCodeId": 24,
            "packageFeeType": 0,
            "packageId": 19400,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 42,
            "sundryName": "B1 B/Fast food",
            "totalTax": 0,
            "theDate": "2028-10-01 00:00:00"
          },
          {
            "amount": 6,
            "baseIncludesPackageAmount": false,
            "glCodeId": 68,
            "packageFeeType": 0,
            "packageId": 19401,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 21,
            "sundryName": "Restaurant Beverages",
            "totalTax": 0,
            "theDate": "2028-10-01 00:00:00"
          }
        ],
        "totalExtras": 10,
        "totalPackage": 46,
        "totalPackageIncludedInBase": 0,
        "totalPackageNotIncludedInBase": 46,
        "totalRate": 356,
        "taxBreakdown": [
          {
            "amount": 31,
            "description": "10% State Tax"
          },
          {
            "amount": 31,
            "description": "Service Charge 10"
          },
          {
            "amount": 15.5,
            "description": "VAT"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 10
          },
          {
            "additionalType": "Child",
            "amount": 0
          }
        ]
      },
      {
        "theDate": "2028-10-02 00:00:00",
        "baseRateAmount": 310,
        "baseRateRaw": 300,
        "rateType": "BAR USD",
        "rateTypeId": 1433,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 46,
        "packageHiddenAmount": 46,
        "packageShownAmount": 0,
        "displayBaseRate": 300,
        "displayTotalPackage": 46,
        "displayTotalRate": 356,
        "displayTotalTax": 77.5,
        "packageBreakdown": [
          {
            "amount": 40,
            "baseIncludesPackageAmount": false,
            "glCodeId": 24,
            "packageFeeType": 0,
            "packageId": 19400,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 42,
            "sundryName": "B1 B/Fast food",
            "totalTax": 0,
            "theDate": "2028-10-02 00:00:00"
          },
          {
            "amount": 6,
            "baseIncludesPackageAmount": false,
            "glCodeId": 68,
            "packageFeeType": 0,
            "packageId": 19401,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 21,
            "sundryName": "Restaurant Beverages",
            "totalTax": 0,
            "theDate": "2028-10-02 00:00:00"
          }
        ],
        "totalExtras": 10,
        "totalPackage": 46,
        "totalPackageIncludedInBase": 0,
        "totalPackageNotIncludedInBase": 46,
        "totalRate": 356,
        "taxBreakdown": [
          {
            "amount": 31,
            "description": "10% State Tax"
          },
          {
            "amount": 31,
            "description": "Service Charge 10"
          },
          {
            "amount": 15.5,
            "description": "VAT"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 10
          },
          {
            "additionalType": "Child",
            "amount": 0
          }
        ]
      }
    ],
    "secondDiscountAmount": 0,
    "useResDiscountNightly": false,
    "cancellationPolicyId": 3,
    "reservationId": 222898
  },
  {
    "baseRate": 400,
    "baseRateDiscountAmount": 0,
    "baseRateRentalReductionAmount": 0,
    "baseRateTax": 40,
    "categoryId": 7,
    "deposit1Amount": 0,
    "deposit1RequiredBy": "2025-03-12 12:47:00",
    "deposit2Amount": 0,
    "deposit2RequiredBy": "2025-03-13 06:47:21",
    "discountAmount": 0,
    "firstNightRate": 550,
    "package": 100,
    "packageTax": 10,
    "rateBreakdown": [
      {
        "theDate": "2025-03-18 00:00:00",
        "baseRateAmount": 400,
        "baseRateRaw": 500,
        "rateType": "BAR AUD Exclusive Tax",
        "rateTypeId": 1447,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 100,
        "packageHiddenAmount": 100,
        "packageShownAmount": 0,
        "displayBaseRate": 400,
        "displayTotalPackage": 100,
        "displayTotalRate": 550,
        "displayTotalTax": 50,
        "packageBreakdown": [
          {
            "amount": 100,
            "baseIncludesPackageAmount": true,
            "glCodeId": 176,
            "packageFeeType": 0,
            "packageId": 43673,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 1,
            "sundryId": 318,
            "sundryName": "Food",
            "totalTax": 10,
            "theDate": "2025-03-18 00:00:00"
          }
        ],
        "totalExtras": 0,
        "totalPackage": 100,
        "totalPackageIncludedInBase": 100,
        "totalPackageNotIncludedInBase": 0,
        "totalRate": 500,
        "taxBreakdown": [
          {
            "amount": 40,
            "description": "10% State Tax"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 0
          },
          {
            "additionalType": "Child",
            "amount": 0
          },
          {
            "additionalType": "Infant",
            "amount": 0
          }
        ]
      }
    ],
    "secondDiscountAmount": 0,
    "useResDiscountNightly": false,
    "cancellationPolicyId": 0,
    "reservationId": 226542
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseRate|number|false|none|none|
|baseRateDiscountAmount|number|false|none|none|
|baseRateRentalReductionAmount|number|false|none|none|
|baseRateTax|number|false|none|none|
|categoryId|integer|false|none|none|
|deposit1Amount|number|false|none|none|
|deposit1RequiredBy|string(date-time)|false|none|none|
|deposit2Amount|number|false|none|none|
|deposit2RequiredBy|string(date-time)|false|none|none|
|discountAmount|number|false|none|none|
|firstNightRate|number|false|none|none|
|package|number|false|none|none|
|packageTax|number|false|none|none|
|rateBreakdown|[[reservationsRateQuotesResponse_rateBreakdown](#schemareservationsratequotesresponse_ratebreakdown)]|false|none|none|
|secondDiscountAmount|number|false|none|none|
|useResDiscountNightly|boolean|false|none|none|
|cancellationPolicyId|integer|false|none|none|
|reservationId|integer|false|none|none|

<h2 id="tocS_dailyRevenue">dailyRevenue</h2>
<!-- backwards compatibility -->
<a id="schemadailyrevenue"></a>
<a id="schema_dailyRevenue"></a>
<a id="tocSdailyrevenue"></a>
<a id="tocsdailyrevenue"></a>

```json
{
  "accommodation": 20,
  "accommodationGst": 2,
  "accommodationTax": 0,
  "foodAndBeverage": 10,
  "foodAndBeverageGst": 1,
  "foodAndBeverageTax": 0,
  "other": 15,
  "otherGst": 1.5,
  "otherTax": 0,
  "theDate": "2019-09-12"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodation|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|accommodationGst|number(currency)|false|none|none|
|accommodationTax|number(currency)|false|none|none|
|foodAndBeverage|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|foodAndBeverageGst|number(currency)|false|none|none|
|foodAndBeverageTax|number(currency)|false|none|none|
|other|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|otherGst|number(currency)|false|none|none|
|otherTax|number(currency)|false|none|none|
|theDate|string(date-time)|false|none|none|

<h2 id="tocS_dailyRevenueArray">dailyRevenueArray</h2>
<!-- backwards compatibility -->
<a id="schemadailyrevenuearray"></a>
<a id="schema_dailyRevenueArray"></a>
<a id="tocSdailyrevenuearray"></a>
<a id="tocsdailyrevenuearray"></a>

```json
{
  "reservationId": 163577,
  "dailyRevenue": [
    {
      "theDate": "2020-12-10 00:00:00",
      "accommodation": 360,
      "accommodationTax": 0,
      "accommodationGST": 32.72,
      "foodAndBeverage": 0,
      "foodAndBeverageTax": 0,
      "foodAndBeverageGST": 0,
      "other": 50,
      "otherTax": 0,
      "otherGST": 4.55
    },
    {
      "theDate": "2020-12-11 00:00:00",
      "accommodation": 0,
      "accommodationTax": 0,
      "accommodationGST": 0,
      "foodAndBeverage": 0,
      "foodAndBeverageTax": 0,
      "foodAndBeverageGST": 0,
      "other": 0,
      "otherTax": 0,
      "otherGST": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer(int32)|false|none|none|
|dailyRevenue|[dailyRevenue](#schemadailyrevenue)|false|none|none|

<h2 id="tocS_transfer">transfer</h2>
<!-- backwards compatibility -->
<a id="schematransfer"></a>
<a id="schema_transfer"></a>
<a id="tocStransfer"></a>
<a id="tocstransfer"></a>

```json
{
  "id": 2654698,
  "amount": 10,
  "carrier": "Big Rigs",
  "confirmationNumber": "ty45986",
  "dropOffLocationId": 1,
  "note": "This is for notes",
  "pax": 10,
  "pickupLocationId": 1,
  "shipFlightNumber": "JQ1234",
  "sundryId": 6,
  "reservationId": 1,
  "theDate": "2020-09-25 17:25:00",
  "transportTypeId": 1,
  "type": "dropOff",
  "useAmountFromSundry": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|amount|integer(currency)|false|none|none|
|carrier|string|false|none|none|
|confirmationNumber|string|false|none|none|
|dropOffLocationId|integer(int32)|false|none|none|
|note|string|false|none|none|
|pax|integer(int32)|false|none|none|
|pickupLocationId|integer(int32)|false|none|none|
|shipFlightNumber|string|false|none|none|
|sundryId|integer(int32)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|theDate|string(date-time)|false|none|none|
|transportTypeId|integer(int32)|false|none|none|
|type|string|false|none|none|
|useAmountFromSundry|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pickUp|
|type|dropOff|

<h2 id="tocS_transferBalance">transferBalance</h2>
<!-- backwards compatibility -->
<a id="schematransferbalance"></a>
<a id="schema_transferBalance"></a>
<a id="tocStransferbalance"></a>
<a id="tocstransferbalance"></a>

```json
{
  "reservationAccountId": 355494,
  "transferType": "toGuestAccount"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationAccountId|integer(int32)|false|none|none|
|transferType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transferType|toGuestAccount|

<h2 id="tocS_actualAccountBasic">actualAccountBasic</h2>
<!-- backwards compatibility -->
<a id="schemaactualaccountbasic"></a>
<a id="schema_actualAccountBasic"></a>
<a id="tocSactualaccountbasic"></a>
<a id="tocsactualaccountbasic"></a>

```json
{
  "accommodationBalance": 26.09,
  "accountCurrencyView": "AUD",
  "accountId": 3168,
  "activeAccounts": 1,
  "arBalance": 300.12,
  "baseRate": 551.67,
  "billCategoryType": "Deluxe Queen",
  "createTotalRate": true,
  "currencyCode": "AUD",
  "deposit": 200,
  "depositRequiredByDate": "2017-08-25 17:30:00",
  "discountAmount": 20,
  "discountId": 7,
  "discountName": "10% Off",
  "discountReason": "Return customer",
  "electricityBalance": 32.58,
  "extrasBalance": 89.36,
  "gasBalance": 45.36,
  "hideRateOnCorrespondence": false,
  "internetBalance": 10,
  "package": 98.32,
  "phoneBalance": 12,
  "reservationId": 123459,
  "secondaryCurrency": {
    "accommodationBalance": 10,
    "arBalance": 0,
    "currencyCode": "USD",
    "electricityBalance": 10,
    "extrasBalance": 15.25,
    "gasBalance": 13.25,
    "internetBalance": 55,
    "phoneBalance": 89.56,
    "waterBalance": 17.26
  },
  "secondDepositRequiredByDate": "25-08-2016 13:26:00",
  "secondDeposit": 100.1,
  "tax": 16.33,
  "taxExemption": "Goverment Official",
  "totalRate": 800,
  "upgradeReason": "He's a good guy",
  "waterBalance": 81.02
}

```

Used:<br>GET /reservations/{id}/actualAccount<br>POST /reservations/{id}/transferBalance<br>POST /reservations/actualAccount/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodationBalance|number(currency)|false|none|none|
|accountCurrencyView|string|false|none|none|
|accountId|integer(int32)|false|none|none|
|activeAccounts|integer(int32)|false|none|none|
|arBalance|number(currency)|false|none|none|
|baseRate|number(currency)|false|none|none|
|billCategoryType|string|false|none|none|
|createTotalRate|boolean|false|none|none|
|currencyCode|string|false|none|none|
|deposit|number(currency)|false|none|none|
|depositRequiredByDate|string(date-time)|false|none|none|
|discountAmount|number(currency)|false|none|none|
|discountId|integer(int32)|false|none|none|
|discountName|string|false|none|none|
|discountReason|string|false|none|none|
|electricityBalance|number(currency)|false|none|none|
|extrasBalance|number(currency)|false|none|none|
|gasBalance|number(currency)|false|none|none|
|hideRateOnCorrespondence|boolean|false|none|none|
|internetBalance|number(currency)|false|none|none|
|package|number(currency)|false|none|none|
|phoneBalance|number(currency)|false|none|none|
|reservationId|integer(int32)|false|none|none|
|secondaryCurrency|[actualAccountBasic_secondaryCurrency](#schemaactualaccountbasic_secondarycurrency)|false|none|none|
|secondDepositRequiredByDate|string(date-time)|false|none|none|
|secondDeposit|number(currency)|false|none|none|
|tax|number(currency)|false|none|none|
|taxExemption|string|false|none|none|
|totalRate|number(currency)|false|none|none|
|upgradeReason|string|false|none|none|
|waterBalance|number(currency)|false|none|none|

<h2 id="tocS_mealPlanSchedulesUpgrade">mealPlanSchedulesUpgrade</h2>
<!-- backwards compatibility -->
<a id="schemamealplanschedulesupgrade"></a>
<a id="schema_mealPlanSchedulesUpgrade"></a>
<a id="tocSmealplanschedulesupgrade"></a>
<a id="tocsmealplanschedulesupgrade"></a>

```json
{
  "dates": [
    {
      "theDate": "2019-08-24",
      "mealPlanUpgradeId": 0,
      "startingMeal": "Breakfast"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dates|[[mealPlanSearchResponseDates](#schemamealplansearchresponsedates)]|false|none|none|

<h2 id="tocS_resType">resType</h2>
<!-- backwards compatibility -->
<a id="schemarestype"></a>
<a id="schema_resType"></a>
<a id="tocSrestype"></a>
<a id="tocsrestype"></a>

```json
{
  "id": 4,
  "name": "Business",
  "inactive": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|inactive|boolean|false|none|none|

<h2 id="tocS_resTypeSub">resTypeSub</h2>
<!-- backwards compatibility -->
<a id="schemarestypesub"></a>
<a id="schema_resTypeSub"></a>
<a id="tocSrestypesub"></a>
<a id="tocsrestypesub"></a>

```json
{
  "id": 2,
  "name": "Local",
  "inactive": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|inactive|boolean|false|none|none|

<h2 id="tocS_reservationsWarnings">reservationsWarnings</h2>
<!-- backwards compatibility -->
<a id="schemareservationswarnings"></a>
<a id="schema_reservationsWarnings"></a>
<a id="tocSreservationswarnings"></a>
<a id="tocsreservationswarnings"></a>

```json
{
  "warnings": [
    {
      "code": "GuestStayOverlap"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warnings|[[reservationsWarnings_warnings](#schemareservationswarnings_warnings)]|false|none|none|

<h2 id="tocS_restrictionsPost">restrictionsPost</h2>
<!-- backwards compatibility -->
<a id="schemarestrictionspost"></a>
<a id="schema_restrictionsPost"></a>
<a id="tocSrestrictionspost"></a>
<a id="tocsrestrictionspost"></a>

```json
[
  {
    "categoryId": 1,
    "rateId": 1159,
    "dateFrom": "2023-10-01",
    "dateTo": "2023-10-02",
    "restrictionType": "minNightsStayOnArrival",
    "minStay": 4
  },
  {
    "categoryId": 1,
    "rateId": 1159,
    "dateFrom": "2023-10-30",
    "dateTo": "2023-10-31",
    "restrictionType": "stopSell"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|rateId|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|restrictionType|string|false|none|none|
|minStay|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|restrictionType|clearCloseToArrival|
|restrictionType|clearCloseToDeparture|
|restrictionType|clearMinNightsOnArrival|
|restrictionType|clearMinNightsStayThroughRes|
|restrictionType|clearStopSell|
|restrictionType|closeToArrival|
|restrictionType|closeToDeparture|
|restrictionType|minNightsStayOnArrival|
|restrictionType|minNightsStayThroughRes|
|restrictionType|stopSell|

<h2 id="tocS_restrictionSearch">restrictionSearch</h2>
<!-- backwards compatibility -->
<a id="schemarestrictionsearch"></a>
<a id="schema_restrictionSearch"></a>
<a id="tocSrestrictionsearch"></a>
<a id="tocsrestrictionsearch"></a>

```json
{
  "agentIds": [
    4,
    5
  ],
  "categoryIds": [
    5,
    4
  ],
  "fromDate": "2020-11-01 00:00:00",
  "inactive": false,
  "rateIds": [
    134,
    1546
  ],
  "toDate": "2020-11-28 00:00:00",
  "restrictionTypes": [
    "stopSell",
    "RateAdjustment"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentIds|[integer]|false|none|none|
|categoryIds|[integer]|false|none|none|
|fromDate|string(date-time)|false|none|none|
|inactive|boolean|false|none|none|
|rateIds|[integer]|false|none|none|
|toDate|string(date-time)|false|none|none|
|restrictionTypes|[string]|false|none|Valid Reservation Status|

<h2 id="tocS_restriction">restriction</h2>
<!-- backwards compatibility -->
<a id="schemarestriction"></a>
<a id="schema_restriction"></a>
<a id="tocSrestriction"></a>
<a id="tocsrestriction"></a>

```json
{
  "id": 16,
  "availableFor": [
    "Monday",
    "Tuesday"
  ],
  "categoryid": 3,
  "createdDate": "2020-09-25 00:00:00",
  "createdById": 4,
  "dateFrom": "2020-09-25 00:00:00",
  "dateTo": "2020-09-28 00:00:00",
  "minimumOccupancyLevelInPercentage": 0,
  "rateId": 1377,
  "setPermanently": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|availableFor|[string]|false|none|none|
|categoryid|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdById|integer(int32)|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|minimumOccupancyLevelInPercentage|integer(int32)|false|none|none|
|rateId|integer(int32)|false|none|none|
|setPermanently|boolean|false|none|none|

<h2 id="tocS_requirementMasterCreation">requirementMasterCreation</h2>
<!-- backwards compatibility -->
<a id="schemarequirementmastercreation"></a>
<a id="schema_requirementMasterCreation"></a>
<a id="tocSrequirementmastercreation"></a>
<a id="tocsrequirementmastercreation"></a>

```json
{
  "id": 35212,
  "name": "11am Check-out",
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "code": "",
  "description": "",
  "feeType": "PerPeriod",
  "groupingId\"": 0,
  "guestFacingRequirement": false,
  "inactive": false,
  "monitorRequirement": false,
  "note": "",
  "quantity": 1,
  "requiredDaily": false,
  "showInHousekeepersReport": false,
  "sameDayRequirement": false,
  "sundryId": 0,
  "unitPrice": 0,
  "useSundryAmount": false,
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "secondPerAdult": 16,
  "secondPerChild": 12,
  "secondPerInfant": 5,
  "secondUnitPrice": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|adultAmount|number(decimal)|false|none|none|
|amount|number(decimal)|false|none|none|
|chargeDailyIncludeToDate|boolean|false|none|none|
|chargeRequiredDaily|boolean|false|none|none|
|childAmount|number(decimal)|false|none|none|
|code|string|false|none|none|
|feeType|string|false|none|none|
|guestFacingRequirement|boolean|false|none|none|
|groupingId|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|infantAmount|number(decimal)|false|none|none|
|monitorRequirement|boolean|false|none|none|
|note|string|false|none|none|
|perAdult|number(decimal)|false|none|none|
|perChild|number(decimal)|false|none|none|
|perInfant|number(decimal)|false|none|none|
|secondPerAdult|number(decimal)|false|none|none|
|secondPerChild|number(decimal)|false|none|none|
|secondPerInfant|number(decimal)|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|
|sameDayRequirement|boolean|false|none|none|
|showInHousekeepersReport|boolean|false|none|none|
|sundryId|integer(int32)|false|none|none|
|unitPrice|number(decimal)|false|none|none|
|useSundryAmount|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriod|
|feeType|PerPerson|

<h2 id="tocS_requirement">requirement</h2>
<!-- backwards compatibility -->
<a id="schemarequirement"></a>
<a id="schema_requirement"></a>
<a id="tocSrequirement"></a>
<a id="tocsrequirement"></a>

```json
{
  "id": 7,
  "name": "Chapagne & Chochlates",
  "amount": 30,
  "chargeDailyIncludeToDate": false,
  "ChargeRequiredDaily": false,
  "Code": "A129e",
  "groupingId": 2,
  "inactive": false,
  "monitorRequirement": false,
  "note": "Make sure you check inventory for stock",
  "quantity": 2,
  "requiredDaily": false,
  "showInHouseKeepersReport": true,
  "sundryId": 8,
  "secondUnitPrice": 30,
  "secondAdultAmount": 0,
  "secondChildAmount": 0,
  "secondInfantAmount": 0,
  "unitPrice": 15,
  "useSundryAmount": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|adultAmount|number(decimal)|false|none|none|
|amount|number(decimal)|false|none|none|
|chargeDailyIncludeToDate|boolean|false|none|none|
|chargeRequiredDaily|boolean|false|none|none|
|childAmount|number(decimal)|false|none|none|
|code|string|false|none|none|
|feeType|string|false|none|none|
|groupingId|integer(int32)|false|none|none|
|inactive|boolean|false|none|none|
|infantAmount|number(decimal)|false|none|none|
|monitorRequirement|boolean|false|none|none|
|note|string|false|none|none|
|quantity|integer(int32)|false|none|none|
|requiredDaily|boolean|false|none|none|
|showInHousekeepersReport|boolean|false|none|none|
|sundryId|integer(int32)|false|none|none|
|secondUnitPrice|number(decimal)|false|none|none|
|secondAdultAmount|number(decimal)|false|none|none|
|secondChildAmount|number(decimal)|false|none|none|
|secondInfantAmount|number(decimal)|false|none|none|
|unitPrice|number(decimal)|false|none|none|
|useSundryAmount|boolean|false|none|none|

<h2 id="tocS_requirementImage">requirementImage</h2>
<!-- backwards compatibility -->
<a id="schemarequirementimage"></a>
<a id="schema_requirementImage"></a>
<a id="tocSrequirementimage"></a>
<a id="tocsrequirementimage"></a>

```json
{
  "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url:|string|false|none|none|

<h2 id="tocS_requirementValidationDates">requirementValidationDates</h2>
<!-- backwards compatibility -->
<a id="schemarequirementvalidationdates"></a>
<a id="schema_requirementValidationDates"></a>
<a id="tocSrequirementvalidationdates"></a>
<a id="tocsrequirementvalidationdates"></a>

```json
{
  "arrivingOnMonday": true,
  "arrivingOnTuesday": true,
  "arrivingOnWednesday": true,
  "arrivingOnThursday": false,
  "arrivingOnFriday": false,
  "arrivingOnSaturday": false,
  "arrivingOnSunday": false,
  "reservationMadeFromDate": "2020-02-16 00:00:00",
  "reservationMadeToDate": "2020-03-19 00:00:00",
  "reservationsMadePermanentFlag": false,
  "reservationsStayingFromDate": "1900-00-00 00:00:00",
  "reservationsStayingToDate": "1900-00-00 00:00:00",
  "reservationsStayingPermanentFlag": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivingOnMonday|boolean|false|none|none|
|arrivingOnTuesday|boolean|false|none|none|
|arrivingOnWednesday|boolean|false|none|none|
|arrivingOnThursday|boolean|false|none|none|
|arrivingOnFriday|boolean|false|none|none|
|arrivingOnSaturday|boolean|false|none|none|
|arrivingOnSunday|boolean|false|none|none|
|reservationMadeFromDate|string(date-time)|false|none|none|
|reservationMadeToDate|string(date-time)|false|none|none|
|reservationMadePermanentFlag|boolean|false|none|If this is set to true then the default date value will be returned for reservationMadeFromDate and reservationMadeToDate|
|reservationStayingFromDate|string(date-time)|false|none|none|
|reservationStayingToDate|string(date-time)|false|none|none|
|reservationStayingPermanentlyFlag|boolean|false|none|If this is set to true then the default date value will be returned for reservationsStayingFromDate and reservationsStayingToDate|

<h2 id="tocS_securityProfile">securityProfile</h2>
<!-- backwards compatibility -->
<a id="schemasecurityprofile"></a>
<a id="schema_securityProfile"></a>
<a id="tocSsecurityprofile"></a>
<a id="tocssecurityprofile"></a>

```json
{
  "id": 1,
  "name": "Manager"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_specialEventsSearch">specialEventsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaspecialeventssearch"></a>
<a id="schema_specialEventsSearch"></a>
<a id="tocSspecialeventssearch"></a>
<a id="tocsspecialeventssearch"></a>

```json
{
  "propertyIds": [
    1,
    3,
    0
  ],
  "fromDate": "2024-01-01",
  "toDate": "2026-01-01",
  "displayWarningForReservations": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyIds|[integer]|false|none|none|
|fromDate|string(date)|false|none|none|
|toDate|string(date)|false|none|none|
|displayWarningForReservations|boolean|false|none|none|

<h2 id="tocS_specialEventsSearchResponse">specialEventsSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspecialeventssearchresponse"></a>
<a id="schema_specialEventsSearchResponse"></a>
<a id="tocSspecialeventssearchresponse"></a>
<a id="tocsspecialeventssearchresponse"></a>

```json
[
  {
    "id": 272,
    "description": "This Is A Special Event",
    "fromDate": "2024-09-04 00:00:05",
    "toDate": "2024-09-30 23:59:59",
    "propertyId": 0,
    "note": "This Is A Note About My Special Event",
    "displayWarningForReservations": true
  },
  {
    "id": 273,
    "description": "New Event 2025",
    "fromDate": "2025-09-18 00:00:05",
    "toDate": "2025-09-23 23:59:59",
    "propertyId": 1,
    "note": "",
    "displayWarningForReservations": true
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[specialEventsSearchResponse_inner](#schemaspecialeventssearchresponse_inner)]|false|none|none|

<h2 id="tocS_sundry">sundry</h2>
<!-- backwards compatibility -->
<a id="schemasundry"></a>
<a id="schema_sundry"></a>
<a id="tocSsundry"></a>
<a id="tocssundry"></a>

```json
{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true,
  "addOn": true,
  "posLite": false,
  "refundable": false,
  "expenseCharge": false,
  "transfers": false,
  "meal": true,
  "externalRefId": "123456789"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|costPrice|number(currency)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|groupingId|integer(int32)|false|none|none|
|gstDivisorOverride|number(decimal)|false|none|none|
|inactive|boolean|false|none|none|
|secondCurrency|integer(int32)|false|none|none|
|unitPrice|number(currency)|false|none|none|
|unassigned|boolean|false|none|none|
|thirdPartyClientId|integer(int32)|false|none|none|
|gstType|string|false|none|none|
|creditNote|boolean|false|none|none|
|addOn|boolean|false|none|none|
|posLite|boolean|false|none|none|
|refundable|boolean|false|none|none|
|expenseCharge|boolean|false|none|none|
|transfers|boolean|false|none|none|
|meal|boolean|false|none|none|
|externalRefId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<h2 id="tocS_sundryCreation">sundryCreation</h2>
<!-- backwards compatibility -->
<a id="schemasundrycreation"></a>
<a id="schema_sundryCreation"></a>
<a id="tocSsundrycreation"></a>
<a id="tocssundrycreation"></a>

```json
{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|costPrice|number(currency)|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|groupingId|integer(int32)|false|none|none|
|gstDivisorOverride|number(decimal)|false|none|none|
|inactive|boolean|false|none|none|
|secondCurrency|integer(int32)|false|none|none|
|unitPrice|number(currency)|false|none|none|
|unassigned|boolean|false|none|none|
|thirdPartyClientId|integer(int32)|false|none|none|
|gstType|string|false|none|none|
|creditNote|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<h2 id="tocS_title">title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
{
  "id": 1,
  "name": "Mr"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_traces">traces</h2>
<!-- backwards compatibility -->
<a id="schematraces"></a>
<a id="schema_traces"></a>
<a id="tocStraces"></a>
<a id="tocstraces"></a>

```json
{
  "id": 3,
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|tracesTemplateId|integer(int32)|false|none|none|
|description|string|false|none|none|
|longDescription|string|false|none|none|
|entityType|string|false|none|none|
|entityId|integer(int32)|false|none|none|
|departmentID|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|dateType|string|false|none|none|
|completed|boolean|false|none|none|
|completeId|integer(int32)|false|none|none|
|createdID|integer(int32)|false|none|none|
|dueDate|string(date-time)|false|none|none|
|modifiedId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|userId|integer(int32)|false|none|none|
|repeatFrequency|string|false|none|none|
|repeatEvery|[oneOf]|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<h2 id="tocS_daysOfWeek">daysOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadaysofweek"></a>
<a id="schema_daysOfWeek"></a>
<a id="tocSdaysofweek"></a>
<a id="tocsdaysofweek"></a>

```json
{
  "daysOfWeek": [
    "Monday"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daysOfWeek|[string]|false|none|none|

<h2 id="tocS_daysOfMonth">daysOfMonth</h2>
<!-- backwards compatibility -->
<a id="schemadaysofmonth"></a>
<a id="schema_daysOfMonth"></a>
<a id="tocSdaysofmonth"></a>
<a id="tocsdaysofmonth"></a>

```json
{
  "daysOfMonth": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daysOfMonth|[integer]|false|none|none|

<h2 id="tocS_tracesRequest">tracesRequest</h2>
<!-- backwards compatibility -->
<a id="schematracesrequest"></a>
<a id="schema_tracesRequest"></a>
<a id="tocStracesrequest"></a>
<a id="tocstracesrequest"></a>

```json
{
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracesTemplateId|integer(int32)|false|none|none|
|description|string|false|none|none|
|longDescription|string|false|none|none|
|entityType|string|false|none|none|
|entityId|integer(int32)|false|none|none|
|departmentID|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|dateType|string|false|none|none|
|completed|boolean|false|none|none|
|completeId|integer(int32)|false|none|none|
|createdID|integer(int32)|false|none|none|
|dueDate|string(date-time)|false|none|none|
|modifiedId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|userId|integer(int32)|false|none|none|
|repeatFrequency|string|false|none|none|
|repeatEvery|[oneOf]|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<h2 id="tocS_departments">departments</h2>
<!-- backwards compatibility -->
<a id="schemadepartments"></a>
<a id="schema_departments"></a>
<a id="tocSdepartments"></a>
<a id="tocsdepartments"></a>

```json
{
  "id": 1,
  "name": "accommodation"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_tracesTemplates">tracesTemplates</h2>
<!-- backwards compatibility -->
<a id="schematracestemplates"></a>
<a id="schema_tracesTemplates"></a>
<a id="tocStracestemplates"></a>
<a id="tocstracestemplates"></a>

```json
{
  "id": 1,
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|tracesType|string|false|none|none|
|description|string|false|none|none|
|inactive|boolean|false|none|none|
|departmentIds|[integer]|false|none|none|
|propertyIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tracesType|guest|
|tracesType|company|
|tracesType|groups|
|tracesType|reservation|
|tracesType|toDo|
|tracesType|travelAgent|

<h2 id="tocS_tracesTemplatesRequest">tracesTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schematracestemplatesrequest"></a>
<a id="schema_tracesTemplatesRequest"></a>
<a id="tocStracestemplatesrequest"></a>
<a id="tocstracestemplatesrequest"></a>

```json
{
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracesType|string|false|none|none|
|description|string|false|none|none|
|inactive|boolean|false|none|none|
|departmentIds|[integer]|false|none|none|
|propertyIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tracesType|guest|
|tracesType|company|
|tracesType|groups|
|tracesType|reservation|
|tracesType|toDo|
|tracesType|travelAgent|

<h2 id="tocS_transactionSearch">transactionSearch</h2>
<!-- backwards compatibility -->
<a id="schematransactionsearch"></a>
<a id="schema_transactionSearch"></a>
<a id="tocStransactionsearch"></a>
<a id="tocstransactionsearch"></a>

```json
{
  "idFrom": 6,
  "idTo": 12,
  "accountType": "extras",
  "accountIds": [
    1242,
    5985,
    702
  ],
  "alwaysReturnReservationId": true,
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "guestIds": [
    78945,
    61478
  ],
  "invoiceIds": [
    89984,
    987978
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyId": 1,
  "receiptIds": [
    222586,
    222587
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "transactionIds": [
    1886832,
    1886833,
    1886834
  ],
  "transDateFrom": "2018-10-25 00:00:00",
  "TransDateTo": "2018-10-27 00:00:00",
  "transactionType": "charge",
  "voidTransaction": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idFrom|integer(int32)|false|none|none|
|idTo|integer(int32)|false|none|none|
|accountType|[accountTypeEnum](#schemaaccounttypeenum)|false|none|none|
|accountIds|[integer]|false|none|none|
|alwaysReturnReservationId|boolean|false|none|none|
|createdFrom|string(date-time)|false|none|none|
|createdTo|string(date-time)|false|none|none|
|guestIds|[integer]|false|none|none|
|invoiceIds|[integer]|false|none|none|
|modifiedFrom|string(date-time)|false|none|none|
|modifiedTo|string(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|receiptIds|[integer]|false|none|none|
|reservationIds|[integer]|false|none|none|
|transactionIds|[integer]|false|none|none|
|transDateFrom|string(date-time)|false|none|none|
|transDateTo|string(date-time)|false|none|none|
|transactionType|string|false|none|none|
|voidTransaction|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionType|charge|
|transactionType|reciept|
|transactionType|voucher|
|transactionType|refund|
|transactionType|creditNote|

<h2 id="tocS_accountTypeEnum">accountTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttypeenum"></a>
<a id="schema_accountTypeEnum"></a>
<a id="tocSaccounttypeenum"></a>
<a id="tocsaccounttypeenum"></a>

```json
"accomm"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string¦null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|accomm|
|*anonymous*|extras|
|*anonymous*|pabx|
|*anonymous*|gas|
|*anonymous*|electric|
|*anonymous*|water|
|*anonymous*|cash|
|*anonymous*|internet|
|*anonymous*|client|
|*anonymous*|agent|
|*anonymous*|owner|
|*anonymous*|ar|
|*anonymous*|notional|
|*anonymous*|holding|
|*anonymous*|null|

<h2 id="tocS_transactionFull">transactionFull</h2>
<!-- backwards compatibility -->
<a id="schematransactionfull"></a>
<a id="schema_transactionFull"></a>
<a id="tocStransactionfull"></a>
<a id="tocstransactionfull"></a>

```json
{
  "id": 9,
  "accountId": 328,
  "accountingDate": "2019-02-16 00:00:00",
  "accountType": "Accommodation",
  "amount": 53.26,
  "comment": "Cleaning",
  "createdDate": "2016-11-28 00:00:00",
  "creditCardMasked": "XXXX-XXXX-XXXX-5322",
  "creditCardType": "Visa",
  "currencyCode": "AUD",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "dollarAction": 0,
  "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
  "exchangeRate": 12.2,
  "fullGst": 86.25,
  "glCodeDescription": "On going",
  "gLCodeGrouping": "Full time stays",
  "glCodeId": 986,
  "invoiceId": 154546,
  "isHiddenPackage": false,
  "linkPointer": 7,
  "linkPointerType": "Ppppp",
  "modifiedDate": "2016-11-28 00:00:00",
  "originalReceiptId": 0,
  "originPropertyId": 1,
  "propertyId": 1,
  "quantity": 1,
  "rateTransactionReservationId": 122354,
  "receiptCurrencyCode": "AUD",
  "receiptType": "CreditCard",
  "sundryId": 9,
  "taxAmount": 0,
  "transactionType": "Receipt",
  "userId": 5,
  "voidTransaction": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|accountType|string|false|none|none|
|amount|number(currency)|false|none|none|
|comment|string|false|none|none|
|createdDate|string(date-time)|false|none|none|
|creditCardMasked|string|false|none|none|
|creditCardType|string|false|none|none|
|currencyCode|string|false|none|none|
|dateOfTransaction|string(date-time)|false|none|none|
|dollarAction|number(currency)|false|none|none|
|exchangeRate|number(decimal)|false|none|none|
|description|string|false|none|none|
|fullGst|number(currency)|false|none|none|
|glCodeDescription|string|false|none|none|
|glCodeGrouping|string|false|none|none|
|glCodeId|integer(int32)|false|none|none|
|invoiceId|integer(int32)|false|none|none|
|isHiddenPackage|boolean|false|none|none|
|linkPointer|integer(int32)|false|none|none|
|linkPointerType|string|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|originPropertyId|integer(int32)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|quantity|integer(int32)|false|none|none|
|rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|receiptCurrencyCode|string|false|none|none|
|receiptType|string|false|none|none|
|secondaryCurrency|number(currency)|false|none|none|
|sundryId|integer(int32)|false|none|none|
|taxAmount|number(currency)|false|none|none|
|transactionType|string|false|none|none|
|unpaidBalance|number(currency)|false|none|none|
|userId|integer(int32)|false|none|none|
|voidTransaction|boolean|false|none|none|

<h2 id="tocS_transactionsAllocationsSearch">transactionsAllocationsSearch</h2>
<!-- backwards compatibility -->
<a id="schematransactionsallocationssearch"></a>
<a id="schema_transactionsAllocationsSearch"></a>
<a id="tocStransactionsallocationssearch"></a>
<a id="tocstransactionsallocationssearch"></a>

```json
{
  "transactionIds": [
    2474929,
    2474927
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionIds|[integer]|false|none|none|

<h2 id="tocS_transactionsAllocation">transactionsAllocation</h2>
<!-- backwards compatibility -->
<a id="schematransactionsallocation"></a>
<a id="schema_transactionsAllocation"></a>
<a id="tocStransactionsallocation"></a>
<a id="tocstransactionsallocation"></a>

```json
[
  {
    "receiptTransactionId": 2474927,
    "destinationTransactionId": 2474921,
    "allocatedDate": "2022-12-15 00:00:00",
    "amount": 1000,
    "glCodeId": 154,
    "allocationType": "NotSet"
  },
  {
    "receiptTransactionId": 2474927,
    "destinationTransactionId": 2474921,
    "allocatedDate": "2022-12-15 00:00:00",
    "amount": -1000,
    "glCodeId": 154,
    "allocationType": "DeAllocateCharge"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiptTransactionId|integer(int32)|false|none|none|
|destinationTransactionId|integer(int32)|false|none|none|
|allocatedDate|string(date-time)|false|none|none|
|glCode|integer(int32)|false|none|none|
|allocationType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allocationType|NotSet|
|allocationType|Alloc_Internal|
|allocationType|Refund|
|allocationType|Expense|
|allocationType|DeAllocateCharge|
|allocationType|DeAllocateReverseReceipt|
|allocationType|DeAllocateOther|
|allocationType|ThirdParty|

<h2 id="tocS_transactionCharge">transactionCharge</h2>
<!-- backwards compatibility -->
<a id="schematransactioncharge"></a>
<a id="schema_transactionCharge"></a>
<a id="tocStransactioncharge"></a>
<a id="tocstransactioncharge"></a>

```json
{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "amount": 26.02,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "originPropertyId": 1,
  "overrideExchangeRate": 22.2,
  "source": "Standard",
  "sundryId": 7,
  "thirdPartyClientId": 0,
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|accountTypeOverride|string|false|none|This is used to override the source and specifiy the accountType for the posted transaction|
|amount|number(currency)|true|none|none|
|comment|string|false|none|This information is only stored in the backend and is not shown in the UI or on the invoice|
|dateOfTransaction|number(date-time)|false|none|none|
|originPropertyId|integer(int32)|false|none|none|
|overrideExchangeRate|number(decimal)|false|none|none|
|source|string|true|none|none|
|sundryId|integer(int32)|true|none|none|
|thirdPartyClientId|integer(int32)|false|none|none|
|useRmsAccountingDateForPostingDate|boolean|false|none|none|
|useSecondaryCurrency|string|false|none|default|

#### Enumerated Values

|Property|Value|
|---|---|
|accountTypeOverride|electric|
|accountTypeOverride|extras|
|accountTypeOverride|gas|
|accountTypeOverride|notSet|
|accountTypeOverride|pabx|
|accountTypeOverride|water|
|source|electric|
|source|extras|
|source|gas|
|source|kiosk|
|source|membership|
|source|pos|
|source|pabx|
|source|standard|
|source|water|
|useSecondaryCurrency|default|
|useSecondaryCurrency|local|
|useSecondaryCurrency|usCurrency|
|useSecondaryCurrency|gbCurrency|
|useSecondaryCurrency|euro|
|useSecondaryCurrency|hongKongDollar|
|useSecondaryCurrency|japaneseYen|
|useSecondaryCurrency|chineseYuan|

<h2 id="tocS_transactionCharges">transactionCharges</h2>
<!-- backwards compatibility -->
<a id="schematransactioncharges"></a>
<a id="schema_transactionCharges"></a>
<a id="tocStransactioncharges"></a>
<a id="tocstransactioncharges"></a>

```json
[
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 5.7,
    "comment": "Beer",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  },
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 25.2,
    "comment": "Pie",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|accountTypeOverride|string|false|none|This is used to override the source and specifiy the accountType for the posted transaction|
|amount|number(currency)|true|none|none|
|comment|string|false|none|This information is only stored in the backend and is not shown in the UI or on the invoice|
|dateOfTransaction|number(date-time)|false|none|none|
|originPropertyId|integer(int32)|false|none|none|
|overrideExchangeRate|number(decimal)|false|none|none|
|source|string|false|none|none|
|sundryId|integer(int32)|true|none|none|
|thirdPartyClientId|integer(int32)|false|none|none|
|useRmsAccountingDateForPostingDate|boolean|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|

#### Enumerated Values

|Property|Value|
|---|---|
|accountTypeOverride|electric|
|accountTypeOverride|extras|
|accountTypeOverride|gas|
|accountTypeOverride|notSet|
|accountTypeOverride|pabx|
|accountTypeOverride|water|
|source|electric|
|source|extras|
|source|gas|
|source|kiosk|
|source|membership|
|source|pos|
|source|pabx|
|source|standard|
|source|water|
|useSecondaryCurrency|default|
|useSecondaryCurrency|local|
|useSecondaryCurrency|usCurrency|
|useSecondaryCurrency|gbCurrency|
|useSecondaryCurrency|euro|
|useSecondaryCurrency|hongKongDollar|
|useSecondaryCurrency|japaneseYen|
|useSecondaryCurrency|chineseYuan|

<h2 id="tocS_transactionsComments">transactionsComments</h2>
<!-- backwards compatibility -->
<a id="schematransactionscomments"></a>
<a id="schema_transactionsComments"></a>
<a id="tocStransactionscomments"></a>
<a id="tocstransactionscomments"></a>

```json
{
  "comments": "Updated Comment"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|

<h2 id="tocS_transactionCreditNote">transactionCreditNote</h2>
<!-- backwards compatibility -->
<a id="schematransactioncreditnote"></a>
<a id="schema_transactionCreditNote"></a>
<a id="tocStransactioncreditnote"></a>
<a id="tocstransactioncreditnote"></a>

```json
{
  "accountId": 7,
  "amount": 26.02,
  "assignedTransactionId": 7,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "sundryId": 7,
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|amount|number(currency)|false|none|none|
|assignedTransactionId|integer(int32)|false|none|none|
|comment|string|false|none|This information is presented on the line below the transaction in the UI and on the invoice|
|dateOfTransaction|number(date-time)|false|none|none|
|description|string|false|none|This will appear against the transaction on the account in the description colum in the UI and on the invoice|
|originPropertyId|integer(int32)|false|none|none|
|overrideExchangeRate|number(decimal)|false|none|none|
|sundryId|integer(int32)|true|none|none|
|source|string|false|none|none|
|useRmsAccountingDateForPostingDate|boolean|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|

#### Enumerated Values

|Property|Value|
|---|---|
|source|electric|
|source|extras|
|source|gas|
|source|kiosk|
|source|membership|
|source|pos|
|source|pabx|
|source|accom|
|source|water|
|useSecondaryCurrency|default|
|useSecondaryCurrency|local|
|useSecondaryCurrency|usCurrency|
|useSecondaryCurrency|gbCurrency|
|useSecondaryCurrency|euro|
|useSecondaryCurrency|hongKongDollar|
|useSecondaryCurrency|japaneseYen|
|useSecondaryCurrency|chineseYuan|

<h2 id="tocS_transactionGuestCreditAndGiftCard">transactionGuestCreditAndGiftCard</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcreditandgiftcard"></a>
<a id="schema_transactionGuestCreditAndGiftCard"></a>
<a id="tocStransactionguestcreditandgiftcard"></a>
<a id="tocstransactionguestcreditandgiftcard"></a>

```json
{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "giftCardId": 89,
  "guestAccountId": 30247,
  "reservationId": 23508
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|accountType|string|true|none|none|
|amount|integer(number)|true|none|none|
|giftCardId|integer(int32)|true|none|none|
|guestAccountId|integer(int32)|true|none|none|
|reservationId|integer(int32)|true|none|none|

<h2 id="tocS_transactionGuestCredit">transactionGuestCredit</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcredit"></a>
<a id="schema_transactionGuestCredit"></a>
<a id="tocStransactionguestcredit"></a>
<a id="tocstransactionguestcredit"></a>

```json
{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "transactionId": 2519489,
  "guestAccountId": 30247,
  "reservationId": 23508
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|accountType|string|true|none|none|
|amount|integer(number)|true|none|none|
|transactionId|integer(int32)|true|none|none|
|guestAccountId|integer(int32)|true|none|none|
|reservationId|integer(int32)|true|none|none|

<h2 id="tocS_transactionGuestCredits">transactionGuestCredits</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcredits"></a>
<a id="schema_transactionGuestCredits"></a>
<a id="tocStransactionguestcredits"></a>
<a id="tocstransactionguestcredits"></a>

```json
{
  "accountId": 378082,
  "accountType": "accomm",
  "reservationId": 221517,
  "creditTransactions": [
    {
      "amount": 10,
      "transactionId": 2520399,
      "guestAccountId": 378301
    },
    {
      "amount": 27,
      "transactionId": 2520400,
      "guestAccountId": 378301
    }
  ]
}

```

array of guestCredits

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(number)|true|none|none|
|accountType|string(string)|true|none|none|
|reservationId|integer(number)|true|none|none|
|creditTransactions|[[transactionGuestCredits_creditTransactions](#schematransactionguestcredits_credittransactions)]|true|none|none|

<h2 id="tocS_transactionGuestCreditsResponse">transactionGuestCreditsResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcreditsresponse"></a>
<a id="schema_transactionGuestCreditsResponse"></a>
<a id="tocStransactionguestcreditsresponse"></a>
<a id="tocstransactionguestcreditsresponse"></a>

```json
[
  {
    "accountingDate": "2024-07-18 00:00:00",
    "creditCardType": "",
    "creditCardMasked": "",
    "currencyCode": "AUD",
    "createdDate": "2024-07-18 05:33:35",
    "fullGst": 0,
    "glCodeGrouping": "Suspense",
    "glCodeDescription": "Suspense Charge",
    "glCodeId": 2,
    "originalReceiptId": 0,
    "propertyId": 1,
    "rateTransactionReservationId": 0,
    "taxAmount": 0,
    "transactionType": "CreditNote",
    "voidTransaction": false,
    "linkPointer": 2520402,
    "linkPointerType": "CreditTransfer",
    "unpaidBalance": -10,
    "isHiddenPackage": false,
    "userId": 186,
    "secondaryCurrency": -10,
    "exchangeRate": 0,
    "modifiedDate": "1900-01-01 00:00:00",
    "id": 2520401,
    "accountId": 378082,
    "accountType": "Accommodation",
    "amount": -10,
    "comment": "",
    "dateOfTransaction": "2024-07-18 00:00:00",
    "sundryId": 0,
    "description": "Transfer Credit from Acc No: 378301",
    "quantity": 0,
    "invoiceId": 0
  },
  {
    "accountingDate": "2024-07-18 00:00:00",
    "creditCardType": "",
    "creditCardMasked": "",
    "currencyCode": "AUD",
    "createdDate": "2024-07-18 05:33:35",
    "fullGst": 0,
    "glCodeGrouping": "Suspense",
    "glCodeDescription": "Suspense Charge",
    "glCodeId": 2,
    "originalReceiptId": 0,
    "propertyId": 1,
    "rateTransactionReservationId": 0,
    "taxAmount": 0,
    "transactionType": "Charge",
    "voidTransaction": false,
    "linkPointer": 2520401,
    "linkPointerType": "CreditTransfer",
    "unpaidBalance": 0,
    "isHiddenPackage": false,
    "userId": 186,
    "secondaryCurrency": 10,
    "exchangeRate": 0,
    "modifiedDate": "1900-01-01 00:00:00",
    "id": 2520402,
    "accountId": 378301,
    "accountType": "Accommodation",
    "amount": 10,
    "comment": "",
    "dateOfTransaction": "2024-07-18 00:00:00",
    "sundryId": 0,
    "description": "Transfer Credit to Res No: 221517 - (Account1)",
    "quantity": 0,
    "invoiceId": 0
  },
  {
    "accountingDate": "2024-07-18 00:00:00",
    "creditCardType": "",
    "creditCardMasked": "",
    "currencyCode": "AUD",
    "createdDate": "2024-07-18 05:33:35",
    "fullGst": 0,
    "glCodeGrouping": "Suspense",
    "glCodeDescription": "Suspense Charge",
    "glCodeId": 2,
    "originalReceiptId": 0,
    "propertyId": 1,
    "rateTransactionReservationId": 0,
    "taxAmount": 0,
    "transactionType": "CreditNote",
    "voidTransaction": false,
    "linkPointer": 2520404,
    "linkPointerType": "CreditTransfer",
    "unpaidBalance": -27,
    "isHiddenPackage": false,
    "userId": 186,
    "secondaryCurrency": -27,
    "exchangeRate": 0,
    "modifiedDate": "1900-01-01 00:00:00",
    "id": 2520403,
    "accountId": 378082,
    "accountType": "Accommodation",
    "amount": -27,
    "comment": "",
    "dateOfTransaction": "2024-07-18 00:00:00",
    "sundryId": 0,
    "description": "Transfer Credit from Acc No: 378301",
    "quantity": 0,
    "invoiceId": 0
  },
  {
    "accountingDate": "2024-07-18 00:00:00",
    "creditCardType": "",
    "creditCardMasked": "",
    "currencyCode": "AUD",
    "createdDate": "2024-07-18 05:33:35",
    "fullGst": 0,
    "glCodeGrouping": "Suspense",
    "glCodeDescription": "Suspense Charge",
    "glCodeId": 2,
    "originalReceiptId": 0,
    "propertyId": 1,
    "rateTransactionReservationId": 0,
    "taxAmount": 0,
    "transactionType": "Charge",
    "voidTransaction": false,
    "linkPointer": 2520403,
    "linkPointerType": "CreditTransfer",
    "unpaidBalance": 0,
    "isHiddenPackage": false,
    "userId": 186,
    "secondaryCurrency": 27,
    "exchangeRate": 0,
    "modifiedDate": "1900-01-01 00:00:00",
    "id": 2520404,
    "accountId": 378301,
    "accountType": "Accommodation",
    "amount": 27,
    "comment": "",
    "dateOfTransaction": "2024-07-18 00:00:00",
    "sundryId": 0,
    "description": "Transfer Credit to Res No: 221517 - (Account1)",
    "quantity": 0,
    "invoiceId": 0
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionGuestCreditsResponse_inner](#schematransactionguestcreditsresponse_inner)]|false|none|none|

<h2 id="tocS_transactionReceipt">transactionReceipt</h2>
<!-- backwards compatibility -->
<a id="schematransactionreceipt"></a>
<a id="schema_transactionReceipt"></a>
<a id="tocStransactionreceipt"></a>
<a id="tocstransactionreceipt"></a>

```json
{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "allowOnlinePayment": false,
  "amount": 26.02,
  "cardId": 2,
  "creditCardAuthorization": "yes",
  "creditCardExpiry": "22/25",
  "creditCardName": "Peter Branden",
  "creditCardNumber": 4569,
  "creditCardTransactionFee": 1,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "exchangeRateId": 0,
  "invoiceId": 23673,
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "receiptType": "CreditCard",
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default",
  "token": "erer78er9+er3er6r3fedfr",
  "transactionReference": "Tr6464g65"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|accountTypeOverride|string|false|none|This is used to override the source and specifiy the accountType for the posted transaction|
|allowOnlinePayment|boolean|false|none|For RMSPay Customers Only - Will proccess the payment via the gateway if to true and a valid RMSPay token is attached to the request|
|amount|number(currency)|true|none|none|
|cardId|integer(int32)|false|none|The cardId refers to the 'id' returned in both the calls 'get/properties/{id}/ibe/creditCard' and '/properties/{id}/creditCards'|
|creditCardAuthorization|string|false|none|This is only required when usuing the receiptType 'creditCard' or 'eftpos')|
|creditCardExpiry|string|false|none|Format must be month/year e.g. 22/28 (This is only required when usuing the receiptType 'creditCard' or 'eftpos)|
|creditCardName|string|false|none|This is only required when usuing the receiptType 'creditCard' or 'eftpos')|
|creditCardNumber|integer|false|none|Only pass the last 4 digits of the credit card (This is only required when usuing the receiptType 'creditCard' or 'eftpos)|
|creditCardTransactionFee|number(currency)|false|none|none|
|chequeNo|string|false|none|none|
|comment|string|false|none|This information is presented on the line below the transaction in the UI and on the invoice|
|dateOfTransaction|number(date-time)|false|none|none|
|description|string|false|none|This will appear against the transaction on the account in the description colum in the UI and on the invoice|
|exchangeRateId|integer(int32)|false|none|none|
|invoiceId|integer(int32)|false|none|none|
|journalId|string|false|none|none|
|originPropertyId|integer(int32)|false|none|none|
|overrideExchangeRate|number(decimal)|false|none|none|
|receiptType|string|true|none|none|
|source|string|true|none|none|
|useRmsAccountingDateForPostingDate|boolean|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|
|token|string|false|none|This field refers to the ‘token’ you would pass in the call guest/id/token <br/><br/> If a token is in the request, the receiptType must be CreditCard and a CardId must be provided. <br/><br/>  The token must also meet the atleast 1 of following criteria: <br/><br/> 1) The accountId is associated with the primary guestId where this token was already associated <br/><br/> 2) The accountId is for the reservation where the primary GuestId already had this token associated. <br/><br/> If none of the above criteria is met, the receipt post will be rejected.|
|transactionReference|string|false|none|This field is so you can provide the paymnet gateway reference number|

#### Enumerated Values

|Property|Value|
|---|---|
|accountTypeOverride|electric|
|accountTypeOverride|extras|
|accountTypeOverride|gas|
|accountTypeOverride|notSet|
|accountTypeOverride|pabx|
|accountTypeOverride|water|
|receiptType|cash|
|receiptType|cash3|
|receiptType|cash4|
|receiptType|cash5|
|receiptType|cashExpense|
|receiptType|creditTransfer|
|receiptType|cheque3|
|receiptType|cheque4|
|receiptType|cheque5|
|receiptType|cheque|
|receiptType|creditCard|
|receiptType|directCredit|
|receiptType|directCredit2|
|receiptType|directCredit3|
|receiptType|directCredit4|
|receiptType|directCredit5|
|receiptType|directCredit6|
|receiptType|directCredit7|
|receiptType|directCredit8|
|receiptType|directCredit9|
|receiptType|directCredit10|
|receiptType|eftpos|
|receiptType|eftposMachine|
|receiptType|existingToken|
|receiptType|forexCash|
|receiptType|giftCard|
|receiptType|guestCredit|
|receiptType|journal|
|receiptType|otherCash(cash2)|
|receiptType|otherCheque(cheque2)|
|receiptType|voucher|
|source|electric|
|source|extras|
|source|gas|
|source|kiosk|
|source|membership|
|source|pos|
|source|pabx|
|source|standard|
|source|water|
|useSecondaryCurrency|default|
|useSecondaryCurrency|local|
|useSecondaryCurrency|usCurrency|
|useSecondaryCurrency|gbCurrency|
|useSecondaryCurrency|euro|
|useSecondaryCurrency|hongKongDollar|
|useSecondaryCurrency|japaneseYen|
|useSecondaryCurrency|chineseYuan|

<h2 id="tocS_transactionRefund">transactionRefund</h2>
<!-- backwards compatibility -->
<a id="schematransactionrefund"></a>
<a id="schema_transactionRefund"></a>
<a id="tocStransactionrefund"></a>
<a id="tocstransactionrefund"></a>

```json
{
  "accountId": 544545,
  "amount": 26.02,
  "allowOnlinePayment": true,
  "assignedTransactionId": 2481628,
  "cardId": 2,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 22.2,
  "receiptType": "CreditCard",
  "source": "Standard",
  "transactionReference": "SSVPQR52TGNG5S82",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}

```

Used:<br>POST /transactions/refund

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|true|none|none|
|allowOnlinePayment|boolean|false|none|none|
|amount|number(currency)|true|none|none|
|assignedTransactionId|integer(int32)|false|none|This field is required with RMSPay - The assigned transaction ID needs to be captured from the response body of the RMSPay receipt. In the RMSPay recceipt response body, it is referred to as 'id'|
|cardId|integer(int32)|false|none|This is the credit card type ID from RMS|
|chequeNo|string|false|none|none|
|comment|string|false|none|This information is presented on the line below the transaction in the UI and on the invoice|
|dateOfTransaction|number(date-time)|false|none|none|
|description|string|false|none|This will appear against the transaction on the account in the description colum in the UI and on the invoice|
|journalId|string|false|none|none|
|originPropertyId|integer(int32)|false|none|none|
|overrideExchangeRate|number(decimal)|false|none|none|
|receiptType|string|true|none|none|
|sundryId|integer(int32)|false|none|none|
|source|string|false|none|none|
|transactionReference|string|false|none|none|
|useRmsAccountingDateForPostingDate|boolean|false|none|none|
|useSecondaryCurrency|string|false|none|useDefault|

#### Enumerated Values

|Property|Value|
|---|---|
|receiptType|cash|
|receiptType|cash3|
|receiptType|cash4|
|receiptType|cash5|
|receiptType|cashExpense|
|receiptType|creditTransfer|
|receiptType|cheque3|
|receiptType|cheque4|
|receiptType|cheque5|
|receiptType|cheque|
|receiptType|creditCard|
|receiptType|directCredit|
|receiptType|directCredit2|
|receiptType|directCredit3|
|receiptType|directCredit4|
|receiptType|directCredit5|
|receiptType|eftpos|
|receiptType|eftposMachine|
|receiptType|existingToken|
|receiptType|journal|
|receiptType|otherCash|
|receiptType|otherCheque|
|receiptType|voucher|
|source|electric|
|source|extras|
|source|gas|
|source|kiosk|
|source|membership|
|source|pos|
|source|pabx|
|source|standard|
|source|water|
|useSecondaryCurrency|default|
|useSecondaryCurrency|local|
|useSecondaryCurrency|usCurrency|
|useSecondaryCurrency|gbCurrency|
|useSecondaryCurrency|euro|
|useSecondaryCurrency|hongKongDollar|
|useSecondaryCurrency|japaneseYen|
|useSecondaryCurrency|chineseYuan|

<h2 id="tocS_transactionreverseReceipt">transactionreverseReceipt</h2>
<!-- backwards compatibility -->
<a id="schematransactionreversereceipt"></a>
<a id="schema_transactionreverseReceipt"></a>
<a id="tocStransactionreversereceipt"></a>
<a id="tocstransactionreversereceipt"></a>

```json
{
  "id": 12345,
  "accountId": 254696,
  "originpropertyId": 0,
  "reasonId": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|The transactionId for the receipt you wish to reverse|
|accountId|integer(int32)|true|none|none|
|originPropertyId|integer(int32)|false|none|none|
|reasonId|integer(int32)|false|none|none|

<h2 id="tocS_transactionVoid">transactionVoid</h2>
<!-- backwards compatibility -->
<a id="schematransactionvoid"></a>
<a id="schema_transactionVoid"></a>
<a id="tocStransactionvoid"></a>
<a id="tocstransactionvoid"></a>

```json
{
  "id": 12345,
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|comment|string|false|none|This information is presented on the line below the transaction in the UI and on the invoice|
|originPropertyId|integer(int32)|false|none|none|
|reasonId|integer(int32)|false|none|none|

<h2 id="tocS_transactionsVoids">transactionsVoids</h2>
<!-- backwards compatibility -->
<a id="schematransactionsvoids"></a>
<a id="schema_transactionsVoids"></a>
<a id="tocStransactionsvoids"></a>
<a id="tocstransactionsvoids"></a>

```json
{
  "ids": [
    2491311,
    2491312
  ],
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|comment|string|false|none|This information is presented on the line below the transaction in the UI and on the invoice|
|originPropertyId|integer(int32)|false|none|none|
|reasonId|integer(int32)|false|none|none|

<h2 id="tocS_transferType">transferType</h2>
<!-- backwards compatibility -->
<a id="schematransfertype"></a>
<a id="schema_transferType"></a>
<a id="tocStransfertype"></a>
<a id="tocstransfertype"></a>

```json
{
  "id": 5,
  "description": "horse back",
  "propertyIds": [
    1,
    3,
    4
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|description|string|false|none|none|
|propertyIds|[integer]|false|none|none|

<h2 id="tocS_userSearch">userSearch</h2>
<!-- backwards compatibility -->
<a id="schemausersearch"></a>
<a id="schema_userSearch"></a>
<a id="tocSusersearch"></a>
<a id="tocsusersearch"></a>

```json
{
  "ids": [
    1,
    595,
    4
  ],
  "idFrom": 6,
  "idTo": 7,
  "departmentIds": [
    4,
    5,
    9
  ],
  "emails": [
    "apisupport@rms.com.au",
    "apisupport@rmscloud.com"
  ],
  "givens": [
    "john",
    "james"
  ],
  "phones": [
    6141245125,
    "04 268 895 14"
  ],
  "securityProfileIds": [
    1,
    2
  ],
  "surnames": [
    "jeeves",
    "gordans"
  ],
  "userNames": [
    "jacobJ",
    "PeterF"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|idFrom|integer(int32)|false|none|none|
|idTo|integer(int32)|false|none|none|
|departmentIds|[integer]|false|none|none|
|emails|[string]|false|none|none|
|givens|[string]|false|none|none|
|phones|[string]|false|none|none|
|securityProfileIds|[integer]|false|none|none|
|surnames|[string]|false|none|none|
|userNames|[string]|false|none|none|

<h2 id="tocS_userProfile">userProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_userProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "departmentId": 8,
  "docuSignUsername": "Harry",
  "email": "harry@rms.com",
  "given": "Harry",
  "inactive": false,
  "limitedUser": false,
  "mobile": 72612358,
  "perferredLanguage": "french",
  "phoneAh": "03 9856 9568",
  "phoneBh": "03 4548 4598",
  "positionId": 9,
  "printProfileId": 6,
  "ssoFederationId": "8g954g4",
  "startupLandingPage": "Availability Chart",
  "surname": "Farfield",
  "title": "Mr",
  "userName": " HarryFarfield",
  "useSmartPrinting": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departmentId|integer(int32)|false|none|none|
|docuSignUsername|string|false|none|none|
|email|string|false|none|none|
|given|string|false|none|none|
|inactive|boolean|false|none|none|
|limitedUser|boolean|false|none|none|
|mobile|string|false|none|none|
|perferredLanguage|string|false|none|none|
|phoneAh|string|false|none|none|
|phoneBh|string|false|none|none|
|positionId|integer(int32)|false|none|none|
|printProfileId|integer(int32)|false|none|none|
|ssoFederationId|string|false|none|none|
|startupLandingPage|string|false|none|none|
|surname|string|false|none|none|
|title|string|false|none|none|
|userName|string|false|none|none|
|useSmartPrinting|boolean|false|none|none|

<h2 id="tocS_itemLiteUser">itemLiteUser</h2>
<!-- backwards compatibility -->
<a id="schemaitemliteuser"></a>
<a id="schema_itemLiteUser"></a>
<a id="tocSitemliteuser"></a>
<a id="tocsitemliteuser"></a>

```json
{
  "id": 1,
  "name": "Manager"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_userSecurityProfileSearch">userSecurityProfileSearch</h2>
<!-- backwards compatibility -->
<a id="schemausersecurityprofilesearch"></a>
<a id="schema_userSecurityProfileSearch"></a>
<a id="tocSusersecurityprofilesearch"></a>
<a id="tocsusersecurityprofilesearch"></a>

```json
{
  "id": [
    1,
    2,
    3
  ],
  "propertyIds": [
    1,
    2
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer]|false|none|none|
|propertyIds|[integer]|false|none|none|

<h2 id="tocS_userSecurityProfile">userSecurityProfile</h2>
<!-- backwards compatibility -->
<a id="schemausersecurityprofile"></a>
<a id="schema_userSecurityProfile"></a>
<a id="tocSusersecurityprofile"></a>
<a id="tocsusersecurityprofile"></a>

```json
{
  "id": 1,
  "categroyIds": [
    4,
    5,
    9,
    10,
    11
  ],
  "name": "Manager",
  "propertyIds": [
    1,
    2
  ],
  "userId": 7
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|categoryIds|[integer]|false|none|none|
|name|string|false|none|none|
|propertyIds|[integer]|false|none|none|
|userId|integer(int32)|false|none|none|

<h2 id="tocS_userAuditTrail">userAuditTrail</h2>
<!-- backwards compatibility -->
<a id="schemauseraudittrail"></a>
<a id="schema_userAuditTrail"></a>
<a id="tocSuseraudittrail"></a>
<a id="tocsuseraudittrail"></a>

```json
{
  "date": "2018-09-25 17:25:00",
  "fieldModified": "Category",
  "newValue": "Deluxe Queen",
  "oldValue": "Single",
  "userId": "Manager"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|string(date-time)|false|none|none|
|fieldModified|string|false|none|none|
|newValue|string|false|none|none|
|oldValue|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_VIPcodes">VIPcodes</h2>
<!-- backwards compatibility -->
<a id="schemavipcodes"></a>
<a id="schema_VIPcodes"></a>
<a id="tocSvipcodes"></a>
<a id="tocsvipcodes"></a>

```json
{
  "id": 1,
  "code": "KC",
  "description": "KC VIP1",
  "shortDescription": "KC VIP"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|shortDescription|string|false|none|none|

<h2 id="tocS_webhookSubscriptionResponse">webhookSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscriptionresponse"></a>
<a id="schema_webhookSubscriptionResponse"></a>
<a id="tocSwebhooksubscriptionresponse"></a>
<a id="tocswebhooksubscriptionresponse"></a>

```json
{
  "id": 1,
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterTypeId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|The basic, lite or full reservation response (default is basic)|
|entityFilterType|string|false|none|Used to specify the agent|
|entityFilterTypeId|integer(int32)|false|none|Used to specify the agentId|
|headers|[[webhookSubscriptionResponse_headers](#schemawebhooksubscriptionresponse_headers)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|reservation|
|entityType|guest|
|entityType|area|
|entityType|mealPlan|
|entityType|groupAllotment|
|entityType|rateType|
|entityType|agent|
|action|creation|
|action|delete|
|action|modification|
|action|statusModification|
|subAction|unconfirmed|
|subAction|confirmed|
|subAction|arrived|
|subAction|departed|
|subAction|cancelled|
|subAction|preCheckIn|
|subAction|areaVacantClean|
|entityFilterType|agent|

<h2 id="tocS_webhookSubscription">webhookSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscription"></a>
<a id="schema_webhookSubscription"></a>
<a id="tocSwebhooksubscription"></a>
<a id="tocswebhooksubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|To specify the basic, lite or full reservation response (default is basic)|
|entityFilterType|string|false|none|Used to specify the agent|
|entityFilterId|integer(int32)|false|none|Used to specify the agentId|
|headers|[[webhookSubscriptionResponse_headers](#schemawebhooksubscriptionresponse_headers)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|reservation|
|entityType|guest|
|entityType|area|
|entityType|mealPlan|
|entityType|groupAllotment|
|entityType|rateType|
|entityType|agent|
|entityType|sundry|
|action|creation|
|action|modification|
|action|statusModification|
|action|deletion|
|action|regoAccessModified|
|action|accountBalanceModification|
|subAction|unconfirmed|
|subAction|confirmed|
|subAction|arrived|
|subAction|departed|
|subAction|cancelled|
|subAction|preCheckIn|
|subAction|areaVacantClean|
|entityFilterType|agent|

<h2 id="tocS_webhookReservationSubscription">webhookReservationSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookreservationsubscription"></a>
<a id="schema_webhookReservationSubscription"></a>
<a id="tocSwebhookreservationsubscription"></a>
<a id="tocswebhookreservationsubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite"
}

```

Used monitor reservation changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|To specify the basic, lite or full reservation response (default is basic)|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|reservation|
|action|creation|
|action|modification|
|action|statusModification|
|action|regoAccessModified|
|action|accountBalanceModification|
|subAction|unconfirmed|
|subAction|confirmed|
|subAction|arrived|
|subAction|departed|
|subAction|cancelled|
|subAction|preCheckIn|
|subAction|noShow|
|subAction|quote|

<h2 id="tocS_webhookGuestSubscription">webhookGuestSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookguestsubscription"></a>
<a id="schema_webhookGuestSubscription"></a>
<a id="tocSwebhookguestsubscription"></a>
<a id="tocswebhookguestsubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "guest",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "full"
}

```

Used monitor guest changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|To specify the basic, lite or full guest response (default is basic)|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|action|creation|
|action|modification|
|action|delete|
|action|idScan|

<h2 id="tocS_webhookMealPlanSubscription">webhookMealPlanSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookmealplansubscription"></a>
<a id="schema_webhookMealPlanSubscription"></a>
<a id="tocSwebhookmealplansubscription"></a>
<a id="tocswebhookmealplansubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "mealPlan",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": ""
}

```

Used monitor meal plan changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|mealPlan|
|action|creation|
|action|modification|
|action|delete|

<h2 id="tocS_webhookGroupAllotmentSubscription">webhookGroupAllotmentSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookgroupallotmentsubscription"></a>
<a id="schema_webhookGroupAllotmentSubscription"></a>
<a id="tocSwebhookgroupallotmentsubscription"></a>
<a id="tocswebhookgroupallotmentsubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "groupAllotment",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": ""
}

```

Used monitor group allotment changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|none|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|groupAllotment|
|action|creation|
|action|modification|
|action|delete|

<h2 id="tocS_webhookAreaSubscription">webhookAreaSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookareasubscription"></a>
<a id="schema_webhookAreaSubscription"></a>
<a id="tocSwebhookareasubscription"></a>
<a id="tocswebhookareasubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "area",
  "action": "statusModification",
  "subAction": "areaVacantDirty",
  "propertyId": 0,
  "modelType": ""
}

```

Used monitor area clean status changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|For customers using customCleanStatuses, the subAction field will be left empty. Instead, you should reference the customCleanStatusId in the webhook event to identify the status|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|area|
|action|statusModification|
|subAction|areaVacantClean|
|subAction|areaVacantDirty|
|subAction|areaOccupied|
|subAction|areaVacantInspect|
|subAction|areaMaintenance|

<h2 id="tocS_webhookRateTypeSubscription">webhookRateTypeSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookratetypesubscription"></a>
<a id="schema_webhookRateTypeSubscription"></a>
<a id="tocSwebhookratetypesubscription"></a>
<a id="tocswebhookratetypesubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "rateType",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite"
}

```

Used monitor rateType changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|Sub action not applicable|
|propertyId|integer(int32)|false|none|Property ID to be passed as 0|
|modelType|string|false|none|To specify the lite or full reservation response (default is lite)|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|rateType|
|action|creation|
|action|modification|

<h2 id="tocS_webhookAgentSubscription">webhookAgentSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhookagentsubscription"></a>
<a id="schema_webhookAgentSubscription"></a>
<a id="tocSwebhookagentsubscription"></a>
<a id="tocswebhookagentsubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "agent",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "agent",
  "entityFilterTypeId": "2673"
}

```

Used monitor travelAgent changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|Sub action not applicable|
|propertyId|integer(int32)|false|none|Property ID to be passed as 0|
|modelType|string|false|none|To specify the basic, lite or full guest response (default is basic)|
|entityFilterType|string|false|none|Used to specify the agent.If not specified, all agents will be subscribed.|
|entityFilterTypeId|integer(int32)|false|none|Used to specify the agentId when using entityFilterType|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|agent|
|action|creation|
|action|modification|
|entityFilterType|agent|

<h2 id="tocS_webhookSundrySubscription">webhookSundrySubscription</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksundrysubscription"></a>
<a id="schema_webhookSundrySubscription"></a>
<a id="tocSwebhooksundrysubscription"></a>
<a id="tocswebhooksundrysubscription"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "sundry",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "basic"
}

```

Used monitor sundry changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|none|
|entityType|string|false|none|none|
|action|string|false|none|none|
|subAction|string|false|none|Sub action not applicable|
|propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|modelType|string|false|none|basic (lite/full not applicable)|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|sundry|
|action|creation|
|action|modification|

<h2 id="tocS_inline_response_200">inline_response_200</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200"></a>
<a id="schema_inline_response_200"></a>
<a id="tocSinline_response_200"></a>
<a id="tocsinline_response_200"></a>

```json
[
  {
    "categoryId": 3,
    "id": 7,
    "name": "Room 3",
    "propertyId": 1
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaLite](#schemaarealite)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /categories/{id}/areas]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaBasic](#schemaareabasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /areas/{id}/interconnecting<br>GET /categories/{id}/areas]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaFull](#schemaareafull)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /areas/{id}/interconnecting<br>GET /categories/{id}/areas]|

<h2 id="tocS_inline_response_200_1">inline_response_200_1</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_1"></a>
<a id="schema_inline_response_200_1"></a>
<a id="tocSinline_response_200_1"></a>
<a id="tocsinline_response_200_1"></a>

```json
[
  {
    "id": 1,
    "name": "Queen Bedroom",
    "propertyId": 1
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[categoryLite](#schemacategorylite)]|false|none|[Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[categoryBasic](#schemacategorybasic)]|false|none|[Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[categoryFull](#schemacategoryfull)]|false|none|[Used:<br>GET /categories<br>GET /categories/{id}<br>GET /properties/{id}/categories]|

<h2 id="tocS_inline_response_200_2">inline_response_200_2</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_2"></a>
<a id="schema_inline_response_200_2"></a>
<a id="tocSinline_response_200_2"></a>
<a id="tocsinline_response_200_2"></a>

```json
[
  {
    "id": 78,
    "name": "Mians"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyLite](#schemacompanylite)]|false|none|[Used:<br>GET /companies<br>GET /companies/{id}<br>]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyBasic](#schemacompanybasic)]|false|none|[Used:<br>GET /companies<br>GET /companies/{id}<br>]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyFull](#schemacompanyfull)]|false|none|none|

<h2 id="tocS_inline_response_200_3">inline_response_200_3</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_3"></a>
<a id="schema_inline_response_200_3"></a>
<a id="tocSinline_response_200_3"></a>
<a id="tocsinline_response_200_3"></a>

```json
[
  {
    "id": 1,
    "name": "10% Discount"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountLite](#schemadiscountlite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountBasic](#schemadiscountbasic)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountFull](#schemadiscountfull)]|false|none|none|

<h2 id="tocS_inline_response_200_4">inline_response_200_4</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_4"></a>
<a id="schema_inline_response_200_4"></a>
<a id="tocSinline_response_200_4"></a>
<a id="tocsinline_response_200_4"></a>

```json
[
  {
    "id": 968,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestLite](#schemaguestlite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestBasic](#schemaguestbasic)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestFull](#schemaguestfull)]|false|none|none|

<h2 id="tocS_inline_response_200_5">inline_response_200_5</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_5"></a>
<a id="schema_inline_response_200_5"></a>
<a id="tocSinline_response_200_5"></a>
<a id="tocsinline_response_200_5"></a>

```json
[
  {
    "id": 1,
    "name": "Wedding"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsLite](#schemagroupallotmentslite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsBasic](#schemagroupallotmentsbasic)]|false|none|none|

<h2 id="tocS_inline_response_200_6">inline_response_200_6</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_6"></a>
<a id="schema_inline_response_200_6"></a>
<a id="tocSinline_response_200_6"></a>
<a id="tocsinline_response_200_6"></a>

```json
[
  {
    "agentLite": false
  },
  {
    "agentBasic": false
  },
  {
    "agentFull": false
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentLite](#schemaagentlite)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentFull](#schemaagentfull)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|

<h2 id="tocS_inline_response_200_7">inline_response_200_7</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_7"></a>
<a id="schema_inline_response_200_7"></a>
<a id="tocSinline_response_200_7"></a>
<a id="tocsinline_response_200_7"></a>

```json
[
  {
    "id": 1,
    "name": "Mexican Shores",
    "inactive": true
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesLite](#schemapropertieslite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesBasic](#schemapropertiesbasic)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesFull](#schemapropertiesfull)]|false|none|none|

<h2 id="tocS_inline_response_200_8">inline_response_200_8</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_8"></a>
<a id="schema_inline_response_200_8"></a>
<a id="tocSinline_response_200_8"></a>
<a id="tocsinline_response_200_8"></a>

```json
[
  {
    "id": 1,
    "name": "BAR"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTypeLite](#schemaratetypelite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTypeFull](#schemaratetypefull)]|false|none|none|

<h2 id="tocS_inline_response_200_9">inline_response_200_9</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_9"></a>
<a id="schema_inline_response_200_9"></a>
<a id="tocSinline_response_200_9"></a>
<a id="tocsinline_response_200_9"></a>

```json
[
  {
    "id": 1,
    "code": "RE1",
    "description": "Rate Element 1"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateElements](#schemarateelements)]|false|none|none|

<h2 id="tocS_inline_response_200_10">inline_response_200_10</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_10"></a>
<a id="schema_inline_response_200_10"></a>
<a id="tocSinline_response_200_10"></a>
<a id="tocsinline_response_200_10"></a>

```json
[
  {
    "id": 3681,
    "accountId": 1259,
    "areaId": 5,
    "arrivalDate": "2017-11-12 02:03:44",
    "cancelledDate": "2017-11-25 17:25:00",
    "categoryId": 19,
    "departureDate": "2017-11-13 14:00:00",
    "guestId": 65,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "status": "Confirmed"
  }
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationLite](#schemareservationlite)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationFull](#schemareservationfull)]|false|none|none|

<h2 id="tocS_inline_response_200_11">inline_response_200_11</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_11"></a>
<a id="schema_inline_response_200_11"></a>
<a id="tocSinline_response_200_11"></a>
<a id="tocsinline_response_200_11"></a>

```json
[
  [
    {
      "id": 194076,
      "guestId": 58202,
      "primaryGuest": true,
      "arrive": "2023-05-27 14:00:00",
      "depart": "2023-05-30 10:30:00",
      "adults": 2,
      "children": 0,
      "reservationId": 214327,
      "doNotSendCorrespondence": false,
      "roleId": 1,
      "role": "Capitain",
      "guestGiven": "Eric",
      "guestSurname": "Cartman"
    },
    {
      "id": 194129,
      "guestId": 153307,
      "primaryGuest": false,
      "arrive": "2023-05-27 14:00:00",
      "depart": "2023-05-30 10:30:00",
      "adults": 2,
      "children": 0,
      "reservationId": 214327,
      "doNotSendCorrespondence": false,
      "roleId": 2,
      "role": "Crew",
      "guestGiven": "Lando",
      "guestSurname": "Norris"
    }
  ]
]

```

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestMovementBasic](#schemaguestmovementbasic)]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestMovementFull](#schemaguestmovementfull)]|false|none|none|

<h2 id="tocS_inline_response_200_12">inline_response_200_12</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200_12"></a>
<a id="schema_inline_response_200_12"></a>
<a id="tocSinline_response_200_12"></a>
<a id="tocsinline_response_200_12"></a>

```json
{
  "Success": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Success|boolean|false|none|none|

<h2 id="tocS_webhooks_body">webhooks_body</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_body"></a>
<a id="schema_webhooks_body"></a>
<a id="tocSwebhooks_body"></a>
<a id="tocswebhooks_body"></a>

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}

```

### Properties

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookSubscription](#schemawebhooksubscription)|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookReservationSubscription](#schemawebhookreservationsubscription)|false|none|Used monitor reservation changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookGuestSubscription](#schemawebhookguestsubscription)|false|none|Used monitor guest changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookMealPlanSubscription](#schemawebhookmealplansubscription)|false|none|Used monitor meal plan changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookGroupAllotmentSubscription](#schemawebhookgroupallotmentsubscription)|false|none|Used monitor group allotment changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookAreaSubscription](#schemawebhookareasubscription)|false|none|Used monitor area clean status changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookRateTypeSubscription](#schemawebhookratetypesubscription)|false|none|Used monitor rateType changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookAgentSubscription](#schemawebhookagentsubscription)|false|none|Used monitor travelAgent changes|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[webhookSundrySubscription](#schemawebhooksundrysubscription)|false|none|Used monitor sundry changes|

<h2 id="tocS_agentAllotments_categoryAllotment">agentAllotments_categoryAllotment</h2>
<!-- backwards compatibility -->
<a id="schemaagentallotments_categoryallotment"></a>
<a id="schema_agentAllotments_categoryAllotment"></a>
<a id="tocSagentallotments_categoryallotment"></a>
<a id="tocsagentallotments_categoryallotment"></a>

```json
{
  "propertyId": 0,
  "categoryId": 0,
  "categoryName": "string",
  "allotment": 0,
  "allotmentId": 0,
  "fromDate": "2019-08-24T14:15:22Z",
  "toDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer(int32)|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|allotment|integer(int32)|false|none|none|
|allotmentId|integer(int32)|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|

<h2 id="tocS_agentAllotments_reportingADR">agentAllotments_reportingADR</h2>
<!-- backwards compatibility -->
<a id="schemaagentallotments_reportingadr"></a>
<a id="schema_agentAllotments_reportingADR"></a>
<a id="tocSagentallotments_reportingadr"></a>
<a id="tocsagentallotments_reportingadr"></a>

```json
{
  "categoryId": 0,
  "reportingADR": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|false|none|none|
|reportingADR|number(float)|false|none|none|

<h2 id="tocS_agentsIdCommissions_rateCommissions">agentsIdCommissions_rateCommissions</h2>
<!-- backwards compatibility -->
<a id="schemaagentsidcommissions_ratecommissions"></a>
<a id="schema_agentsIdCommissions_rateCommissions"></a>
<a id="tocSagentsidcommissions_ratecommissions"></a>
<a id="tocsagentsidcommissions_ratecommissions"></a>

```json
{
  "rateTypeId": 0,
  "rateName": "string",
  "collectType": "property",
  "commission": 0.1,
  "noGreaterThan": 0.1,
  "multiplier": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateTypeId|integer|false|none|none|
|rateName|string|false|none|none|
|collectType|string|false|none|none|
|commission|number(float)|false|none|none|
|noGreaterThan|number(float)|false|none|none|
|multiplier|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|collectType|property|
|collectType|agent|

<h2 id="tocS_agentsIdCommissions_commissions">agentsIdCommissions_commissions</h2>
<!-- backwards compatibility -->
<a id="schemaagentsidcommissions_commissions"></a>
<a id="schema_agentsIdCommissions_commissions"></a>
<a id="tocSagentsidcommissions_commissions"></a>
<a id="tocsagentsidcommissions_commissions"></a>

```json
{
  "sundryId": 0,
  "commissionType": "UsePercentage",
  "propertyId": 0,
  "includeServiceChargesInCommissionCalculation": true,
  "rateCommissions": [
    {
      "rateTypeId": 0,
      "rateName": "string",
      "collectType": "property",
      "commission": 0.1,
      "noGreaterThan": 0.1,
      "multiplier": 0.1
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sundryId|integer|false|none|none|
|commissionType|string|false|none|none|
|propertyId|integer|false|none|none|
|includeServiceChargesInCommissionCalculation|boolean|false|none|none|
|rateCommissions|[[agentsIdCommissions_rateCommissions](#schemaagentsidcommissions_ratecommissions)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|commissionType|UsePercentage|
|commissionType|UseDailyDollarAmount|
|commissionType|NoCommission|
|commissionType|UseTotalDollarAmount|

<h2 id="tocS_availableAreaRequest_dwelling">availableAreaRequest_dwelling</h2>
<!-- backwards compatibility -->
<a id="schemaavailablearearequest_dwelling"></a>
<a id="schema_availableAreaRequest_dwelling"></a>
<a id="tocSavailablearearequest_dwelling"></a>
<a id="tocsavailablearearequest_dwelling"></a>

```json
{
  "lengthId": 0,
  "slideId": 0,
  "typeId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthId|integer(int32)|false|none|none|
|slideId|integer(int32)|false|none|none|
|typeId|integer(int32)|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_dayBreakdown">rateGridARIPushResponse_dayBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_daybreakdown"></a>
<a id="schema_rateGridARIPushResponse_dayBreakdown"></a>
<a id="tocSrategridaripushresponse_daybreakdown"></a>
<a id="tocsrategridaripushresponse_daybreakdown"></a>

```json
{
  "availableAreas": 0,
  "closedOnArrival": true,
  "closedOnDeparture": true,
  "dailyRate": 0.1,
  "dateFrom": "2019-08-24",
  "dateTo": "2019-08-24",
  "minStay": 0,
  "minStayOnArrival": 0,
  "maxStay": 0,
  "stopSell": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableAreas|integer|false|none|none|
|closedOnArrival|boolean|false|none|none|
|closedOnDeparture|boolean|false|none|none|
|dailyRate|number(float)|false|none|none|
|dateFrom|string(date)|false|none|none|
|dateTo|string(date)|false|none|none|
|minStay|integer|false|none|none|
|minStayOnArrival|integer|false|none|none|
|maxStay|integer|false|none|none|
|stopSell|boolean|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_additionals_adults">rateGridARIPushResponse_additionals_adults</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_additionals_adults"></a>
<a id="schema_rateGridARIPushResponse_additionals_adults"></a>
<a id="tocSrategridaripushresponse_additionals_adults"></a>
<a id="tocsrategridaripushresponse_additionals_adults"></a>

```json
{
  "additionalCount": 0,
  "amount": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalCount|integer|false|none|none|
|amount|number(float)|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_additionals_adultsBase">rateGridARIPushResponse_additionals_adultsBase</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_additionals_adultsbase"></a>
<a id="schema_rateGridARIPushResponse_additionals_adultsBase"></a>
<a id="tocSrategridaripushresponse_additionals_adultsbase"></a>
<a id="tocsrategridaripushresponse_additionals_adultsbase"></a>

```json
{
  "includeInBase": true,
  "personBase": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeInBase|boolean|false|none|none|
|personBase|integer|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_additionals">rateGridARIPushResponse_additionals</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_additionals"></a>
<a id="schema_rateGridARIPushResponse_additionals"></a>
<a id="tocSrategridaripushresponse_additionals"></a>
<a id="tocsrategridaripushresponse_additionals"></a>

```json
{
  "adults": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "children": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "infants": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "adultsBase": {
    "includeInBase": true,
    "personBase": 0
  },
  "childrenBase": {
    "includeInBase": true,
    "personBase": 0
  },
  "infantsBase": {
    "includeInBase": true,
    "personBase": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adults|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]¦null|false|none|none|
|children|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]¦null|false|none|none|
|infants|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]¦null|false|none|none|
|adultsBase|[rateGridARIPushResponse_additionals_adultsBase](#schemarategridaripushresponse_additionals_adultsbase)|false|none|none|
|childrenBase|[rateGridARIPushResponse_additionals_adultsBase](#schemarategridaripushresponse_additionals_adultsbase)|false|none|none|
|infantsBase|[rateGridARIPushResponse_additionals_adultsBase](#schemarategridaripushresponse_additionals_adultsbase)|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_rates">rateGridARIPushResponse_rates</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_rates"></a>
<a id="schema_rateGridARIPushResponse_rates"></a>
<a id="tocSrategridaripushresponse_rates"></a>
<a id="tocsrategridaripushresponse_rates"></a>

```json
{
  "rateId": 0,
  "personBase": 0,
  "dayBreakdown": [
    {
      "availableAreas": 0,
      "closedOnArrival": true,
      "closedOnDeparture": true,
      "dailyRate": 0.1,
      "dateFrom": "2019-08-24",
      "dateTo": "2019-08-24",
      "minStay": 0,
      "minStayOnArrival": 0,
      "maxStay": 0,
      "stopSell": true
    }
  ],
  "additionals": {
    "adults": [
      {
        "additionalCount": 0,
        "amount": 0.1
      }
    ],
    "children": [
      {
        "additionalCount": 0,
        "amount": 0.1
      }
    ],
    "infants": [
      {
        "additionalCount": 0,
        "amount": 0.1
      }
    ],
    "adultsBase": {
      "includeInBase": true,
      "personBase": 0
    },
    "childrenBase": {
      "includeInBase": true,
      "personBase": 0
    },
    "infantsBase": {
      "includeInBase": true,
      "personBase": 0
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateId|integer|false|none|none|
|personBase|integer|false|none|none|
|dayBreakdown|[[rateGridARIPushResponse_dayBreakdown](#schemarategridaripushresponse_daybreakdown)]|false|none|none|
|additionals|[rateGridARIPushResponse_additionals](#schemarategridaripushresponse_additionals)|false|none|none|

<h2 id="tocS_rateGridARIPushResponse_categories">rateGridARIPushResponse_categories</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponse_categories"></a>
<a id="schema_rateGridARIPushResponse_categories"></a>
<a id="tocSrategridaripushresponse_categories"></a>
<a id="tocsrategridaripushresponse_categories"></a>

```json
{
  "categoryId": 0,
  "rates": [
    {
      "rateId": 0,
      "personBase": 0,
      "dayBreakdown": [
        {
          "availableAreas": 0,
          "closedOnArrival": true,
          "closedOnDeparture": true,
          "dailyRate": 0.1,
          "dateFrom": "2019-08-24",
          "dateTo": "2019-08-24",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": true
        }
      ],
      "additionals": {
        "adults": [
          {
            "additionalCount": 0,
            "amount": 0.1
          }
        ],
        "children": [
          {
            "additionalCount": 0,
            "amount": 0.1
          }
        ],
        "infants": [
          {
            "additionalCount": 0,
            "amount": 0.1
          }
        ],
        "adultsBase": {
          "includeInBase": true,
          "personBase": 0
        },
        "childrenBase": {
          "includeInBase": true,
          "personBase": 0
        },
        "infantsBase": {
          "includeInBase": true,
          "personBase": 0
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer|false|none|none|
|rates|[[rateGridARIPushResponse_rates](#schemarategridaripushresponse_rates)]|false|none|none|

<h2 id="tocS_rateGridARIPushResponseVersion2_dayBreakdown">rateGridARIPushResponseVersion2_dayBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponseversion2_daybreakdown"></a>
<a id="schema_rateGridARIPushResponseVersion2_dayBreakdown"></a>
<a id="tocSrategridaripushresponseversion2_daybreakdown"></a>
<a id="tocsrategridaripushresponseversion2_daybreakdown"></a>

```json
{
  "personBase": 0,
  "availableAreas": 0,
  "closedOnArrival": true,
  "closedOnDeparture": true,
  "dailyRate": 0.1,
  "dateFrom": "2019-08-24",
  "dateTo": "2019-08-24",
  "minStay": 0,
  "minStayOnArrival": 0,
  "maxStay": 0,
  "stopSell": true,
  "additionalId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personBase|integer|false|none|none|
|availableAreas|integer|false|none|none|
|closedOnArrival|boolean|false|none|none|
|closedOnDeparture|boolean|false|none|none|
|dailyRate|number(float)|false|none|none|
|dateFrom|string(date)|false|none|none|
|dateTo|string(date)|false|none|none|
|minStay|integer|false|none|none|
|minStayOnArrival|integer|false|none|none|
|maxStay|integer|false|none|none|
|stopSell|boolean|false|none|none|
|additionalId|integer|false|none|none|

<h2 id="tocS_rateGridARIPushResponseVersion2_categoryRates">rateGridARIPushResponseVersion2_categoryRates</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponseversion2_categoryrates"></a>
<a id="schema_rateGridARIPushResponseVersion2_categoryRates"></a>
<a id="tocSrategridaripushresponseversion2_categoryrates"></a>
<a id="tocsrategridaripushresponseversion2_categoryrates"></a>

```json
{
  "categoryId": 0,
  "rateId": 0,
  "dayBreakdown": [
    {
      "personBase": 0,
      "availableAreas": 0,
      "closedOnArrival": true,
      "closedOnDeparture": true,
      "dailyRate": 0.1,
      "dateFrom": "2019-08-24",
      "dateTo": "2019-08-24",
      "minStay": 0,
      "minStayOnArrival": 0,
      "maxStay": 0,
      "stopSell": true,
      "additionalId": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer|false|none|none|
|rateId|integer|false|none|none|
|dayBreakdown|[[rateGridARIPushResponseVersion2_dayBreakdown](#schemarategridaripushresponseversion2_daybreakdown)]|false|none|none|

<h2 id="tocS_rateGridARIPushResponseVersion2_adultsBase">rateGridARIPushResponseVersion2_adultsBase</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponseversion2_adultsbase"></a>
<a id="schema_rateGridARIPushResponseVersion2_adultsBase"></a>
<a id="tocSrategridaripushresponseversion2_adultsbase"></a>
<a id="tocsrategridaripushresponseversion2_adultsbase"></a>

```json
{
  "includeInBase": true,
  "personBase": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeInBase|boolean|false|none|none|
|personBase|integer|false|none|none|

<h2 id="tocS_rateGridARIPushResponseVersion2_additionals">rateGridARIPushResponseVersion2_additionals</h2>
<!-- backwards compatibility -->
<a id="schemarategridaripushresponseversion2_additionals"></a>
<a id="schema_rateGridARIPushResponseVersion2_additionals"></a>
<a id="tocSrategridaripushresponseversion2_additionals"></a>
<a id="tocsrategridaripushresponseversion2_additionals"></a>

```json
{
  "additionalId": 0,
  "adults": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "children": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "infants": [
    {
      "additionalCount": 0,
      "amount": 0.1
    }
  ],
  "adultsBase": {
    "includeInBase": true,
    "personBase": 0
  },
  "childrenBase": {
    "includeInBase": true,
    "personBase": 0
  },
  "infantsBase": {
    "includeInBase": true,
    "personBase": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalId|integer|false|none|none|
|adults|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]|false|none|none|
|children|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]|false|none|none|
|infants|[[rateGridARIPushResponse_additionals_adults](#schemarategridaripushresponse_additionals_adults)]|false|none|none|
|adultsBase|[rateGridARIPushResponseVersion2_adultsBase](#schemarategridaripushresponseversion2_adultsbase)|false|none|none|
|childrenBase|[rateGridARIPushResponseVersion2_adultsBase](#schemarategridaripushresponseversion2_adultsbase)|false|none|none|
|infantsBase|[rateGridARIPushResponseVersion2_adultsBase](#schemarategridaripushresponseversion2_adultsbase)|false|none|none|

<h2 id="tocS_cancellationPoliciesRules_rule1">cancellationPoliciesRules_rule1</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpoliciesrules_rule1"></a>
<a id="schema_cancellationPoliciesRules_rule1"></a>
<a id="tocScancellationpoliciesrules_rule1"></a>
<a id="tocscancellationpoliciesrules_rule1"></a>

```json
{
  "feeType": "string",
  "period": 0,
  "sundryId": 0,
  "firstXNights": 0,
  "amount": 0,
  "percentage": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feeType|string|false|none|none|
|period|integer|false|none|none|
|sundryId|integer|false|none|none|
|firstXNights|integer|false|none|none|
|amount|number|false|none|none|
|percentage|number|false|none|none|

<h2 id="tocS_categoryHousekeeping_housekeepingTasks">categoryHousekeeping_housekeepingTasks</h2>
<!-- backwards compatibility -->
<a id="schemacategoryhousekeeping_housekeepingtasks"></a>
<a id="schema_categoryHousekeeping_housekeepingTasks"></a>
<a id="tocScategoryhousekeeping_housekeepingtasks"></a>
<a id="tocscategoryhousekeeping_housekeepingtasks"></a>

```json
{
  "taskId": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskId|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_categoryHousekeeping_bedConfiguration">categoryHousekeeping_bedConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacategoryhousekeeping_bedconfiguration"></a>
<a id="schema_categoryHousekeeping_bedConfiguration"></a>
<a id="tocScategoryhousekeeping_bedconfiguration"></a>
<a id="tocscategoryhousekeeping_bedconfiguration"></a>

```json
{
  "bedConfigurationId": 0,
  "name": "string",
  "quantity": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bedConfigurationId|integer(int32)|false|none|none|
|name|string|false|none|none|
|quantity|string|false|none|none|

<h2 id="tocS_categoryHousekeeping_customAreaCleanStatus">categoryHousekeeping_customAreaCleanStatus</h2>
<!-- backwards compatibility -->
<a id="schemacategoryhousekeeping_customareacleanstatus"></a>
<a id="schema_categoryHousekeeping_customAreaCleanStatus"></a>
<a id="tocScategoryhousekeeping_customareacleanstatus"></a>
<a id="tocscategoryhousekeeping_customareacleanstatus"></a>

```json
{
  "id": 0,
  "name": "string",
  "minutes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|
|minutes|string|false|none|none|

<h2 id="tocS_discountFull_inner">discountFull_inner</h2>
<!-- backwards compatibility -->
<a id="schemadiscountfull_inner"></a>
<a id="schema_discountFull_inner"></a>
<a id="tocSdiscountfull_inner"></a>
<a id="tocsdiscountfull_inner"></a>

```json
{
  "availableToMembers": true,
  "glCodeId": 0,
  "glCodeType": "string",
  "discountType": "Percentage",
  "percentage": {
    "percentage": 0,
    "noGreaterThan": 0,
    "includePackage": true,
    "includeAdditionals": true,
    "appliesToTotalRate": true
  },
  "amount": {
    "amount": 0
  },
  "bogo": {
    "buyXNights": 0,
    "getXNights": 0,
    "getXNightsCycles": 0,
    "includeAdditionals": true
  },
  "totalOverride": {
    "firstXNights": 0,
    "totalCharge": 0,
    "includeAdditionals": true,
    "maxAdults": 0,
    "maxChildren": 0
  },
  "nightlyRateOverride": {
    "firstXNights": 0,
    "totalCharge": 0,
    "includeAdditionals": true
  },
  "availableToIbe": true,
  "description": "string",
  "minimumNightStay": 0,
  "maximumNightStay": 0,
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableToMembers|boolean|false|none|none|
|glCodeId|integer|false|none|none|
|glCodeType|string|false|none|none|
|discountType|string|false|none|none|
|percentage|object|false|none|none|
|» percentage|number|false|none|none|
|» noGreaterThan|number|false|none|none|
|» includePackage|boolean|false|none|none|
|» includeAdditionals|boolean|false|none|none|
|» appliesToTotalRate|boolean|false|none|none|
|amount|object|false|none|none|
|» amount|number|false|none|none|
|bogo|object|false|none|none|
|» buyXNights|integer|false|none|none|
|» getXNights|integer|false|none|none|
|» getXNightsCycles|integer|false|none|none|
|» includeAdditionals|boolean|false|none|none|
|totalOverride|object|false|none|none|
|» firstXNights|integer|false|none|none|
|» totalCharge|number|false|none|none|
|» includeAdditionals|boolean|false|none|none|
|» maxAdults|integer|false|none|none|
|» maxChildren|integer|false|none|none|
|nightlyRateOverride|object|false|none|none|
|» firstXNights|integer|false|none|none|
|» totalCharge|number|false|none|none|
|» includeAdditionals|boolean|false|none|none|
|availableToIbe|boolean|false|none|none|
|description|string|false|none|none|
|minimumNightStay|integer|false|none|none|
|maximumNightStay|integer|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|discountType|Percentage|
|discountType|Amount|
|discountType|BOGO|
|discountType|TotalRateOverride|
|discountType|KidsAndInfantsStayFree|
|discountType|NightlyRateOverride|

<h2 id="tocS_dwellingTypesPropertyRestriction_propertyRestrictions">dwellingTypesPropertyRestriction_propertyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemadwellingtypespropertyrestriction_propertyrestrictions"></a>
<a id="schema_dwellingTypesPropertyRestriction_propertyRestrictions"></a>
<a id="tocSdwellingtypespropertyrestriction_propertyrestrictions"></a>
<a id="tocsdwellingtypespropertyrestriction_propertyrestrictions"></a>

```json
{
  "propertyId": 0,
  "maximum": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyId|integer|false|none|none|
|maximum|integer|false|none|none|

<h2 id="tocS_propertiesAccounting_allowedAccountTypes">propertiesAccounting_allowedAccountTypes</h2>
<!-- backwards compatibility -->
<a id="schemapropertiesaccounting_allowedaccounttypes"></a>
<a id="schema_propertiesAccounting_allowedAccountTypes"></a>
<a id="tocSpropertiesaccounting_allowedaccounttypes"></a>
<a id="tocspropertiesaccounting_allowedaccounttypes"></a>

```json
{
  "accommodation": true,
  "extras": true,
  "gas": true,
  "electricity": true,
  "water": true,
  "pabx": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodation|boolean|false|none|none|
|extras|boolean|false|none|none|
|gas|boolean|false|none|none|
|electricity|boolean|false|none|none|
|water|boolean|false|none|none|
|pabx|boolean|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse_categories">ratesConfigurationsSearchResponse_categories</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_categories"></a>
<a id="schema_ratesConfigurationsSearchResponse_categories"></a>
<a id="tocSratesconfigurationssearchresponse_categories"></a>
<a id="tocsratesconfigurationssearchresponse_categories"></a>

```json
{
  "categoryId": 0,
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z",
  "allYearRound": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer|false|none|none|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|
|allYearRound|boolean|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse_days">ratesConfigurationsSearchResponse_days</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_days"></a>
<a id="schema_ratesConfigurationsSearchResponse_days"></a>
<a id="tocSratesconfigurationssearchresponse_days"></a>
<a id="tocsratesconfigurationssearchresponse_days"></a>

```json
{
  "day": "string",
  "arrive": true,
  "minimumStay": 0,
  "maximumStay": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|none|
|arrive|boolean|false|none|none|
|minimumStay|integer|false|none|none|
|maximumStay|integer|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse_madeDateWindow">ratesConfigurationsSearchResponse_madeDateWindow</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_madedatewindow"></a>
<a id="schema_ratesConfigurationsSearchResponse_madeDateWindow"></a>
<a id="tocSratesconfigurationssearchresponse_madedatewindow"></a>
<a id="tocsratesconfigurationssearchresponse_madedatewindow"></a>

```json
{
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|string(date-time)|false|none|none|
|dateTo|string(date-time)|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday">ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday"></a>
<a id="schema_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday"></a>
<a id="tocSratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday"></a>
<a id="tocsratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday"></a>

```json
{
  "dueDays": 0,
  "dueDaysType": "FromReservationMade",
  "amount": 0,
  "percentage": 0,
  "amountType": "AccountBalance"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dueDays|integer|false|none|none|
|dueDaysType|string|false|none|none|
|amount|number|false|none|none|
|percentage|number|false|none|none|
|amountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dueDaysType|FromReservationMade|
|dueDaysType|PriorToArrival|
|amountType|AccountBalance|
|amountType|TotalOrPercentage|
|amountType|FirstXNights|
|amountType|PerWeekOrPart|

<h2 id="tocS_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_friday">ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_friday</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_friday"></a>
<a id="schema_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_friday"></a>
<a id="tocSratesconfigurationssearchresponse_deposit_dayofweekconfiguration_friday"></a>
<a id="tocsratesconfigurationssearchresponse_deposit_dayofweekconfiguration_friday"></a>

```json
{
  "dueDays": 0,
  "dueDaysType": "FromReservationMade",
  "firstXNights": 0,
  "amountType": "AccountBalance"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dueDays|integer|false|none|none|
|dueDaysType|string|false|none|none|
|firstXNights|integer|false|none|none|
|amountType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dueDaysType|FromReservationMade|
|dueDaysType|PriorToArrival|
|amountType|AccountBalance|
|amountType|TotalOrPercentage|
|amountType|FirstXNights|
|amountType|PerWeekOrPart|

<h2 id="tocS_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration">ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration"></a>
<a id="schema_ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration"></a>
<a id="tocSratesconfigurationssearchresponse_deposit_dayofweekconfiguration"></a>
<a id="tocsratesconfigurationssearchresponse_deposit_dayofweekconfiguration"></a>

```json
{
  "sunday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  },
  "monday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  },
  "tuesday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  },
  "wednesday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  },
  "thursday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  },
  "friday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "firstXNights": 0,
    "amountType": "AccountBalance"
  },
  "saturday": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sunday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|
|monday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|
|tuesday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|
|wednesday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|
|thursday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|
|friday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_friday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_friday)|false|none|none|
|saturday|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|

<h2 id="tocS_ratesConfigurationsSearchResponse_deposit">ratesConfigurationsSearchResponse_deposit</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_deposit"></a>
<a id="schema_ratesConfigurationsSearchResponse_deposit"></a>
<a id="tocSratesconfigurationssearchresponse_deposit"></a>
<a id="tocsratesconfigurationssearchresponse_deposit"></a>

```json
{
  "activationType": "LengthOfStay",
  "dayOfWeekConfiguration": {
    "sunday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    },
    "monday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    },
    "tuesday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    },
    "wednesday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    },
    "thursday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    },
    "friday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "firstXNights": 0,
      "amountType": "AccountBalance"
    },
    "saturday": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    }
  },
  "secondDeposit": {
    "dueDays": 0,
    "dueDaysType": "FromReservationMade",
    "amount": 0,
    "percentage": 0,
    "amountType": "AccountBalance"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationType|string|false|none|none|
|dayOfWeekConfiguration|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration)|false|none|none|
|secondDeposit|[ratesConfigurationsSearchResponse_deposit_dayOfWeekConfiguration_sunday](#schemaratesconfigurationssearchresponse_deposit_dayofweekconfiguration_sunday)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|activationType|LengthOfStay|
|activationType|DaysPriorToArrival|
|activationType|NightOfTheWeek|
|activationType|ArrivingOn|

<h2 id="tocS_ratesConfigurationsSearchResponse_rates">ratesConfigurationsSearchResponse_rates</h2>
<!-- backwards compatibility -->
<a id="schemaratesconfigurationssearchresponse_rates"></a>
<a id="schema_ratesConfigurationsSearchResponse_rates"></a>
<a id="tocSratesconfigurationssearchresponse_rates"></a>
<a id="tocsratesconfigurationssearchresponse_rates"></a>

```json
{
  "rateId": 0,
  "propertyId": 0,
  "longDescription": "string",
  "rateChargeDescription": "string",
  "isDeal": true,
  "cancellationPolicyId": 0,
  "advancePurchaseNights": 0,
  "lastMinuteNights": 0,
  "marketSegmentId": 0,
  "mealPlanId": 0,
  "discountId": 0,
  "bookingSourceId": 0,
  "glCodeId": 0,
  "url": "string",
  "categories": [
    {
      "categoryId": 0,
      "dateFrom": "2019-08-24T14:15:22Z",
      "dateTo": "2019-08-24T14:15:22Z",
      "allYearRound": true
    }
  ],
  "days": [
    {
      "day": "string",
      "arrive": true,
      "minimumStay": 0,
      "maximumStay": 0
    }
  ],
  "madeDateWindow": [
    {
      "dateFrom": "2019-08-24T14:15:22Z",
      "dateTo": "2019-08-24T14:15:22Z"
    }
  ],
  "deposit": {
    "activationType": "LengthOfStay",
    "dayOfWeekConfiguration": {
      "sunday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      },
      "monday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      },
      "tuesday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      },
      "wednesday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      },
      "thursday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      },
      "friday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "firstXNights": 0,
        "amountType": "AccountBalance"
      },
      "saturday": {
        "dueDays": 0,
        "dueDaysType": "FromReservationMade",
        "amount": 0,
        "percentage": 0,
        "amountType": "AccountBalance"
      }
    },
    "secondDeposit": {
      "dueDays": 0,
      "dueDaysType": "FromReservationMade",
      "amount": 0,
      "percentage": 0,
      "amountType": "AccountBalance"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateId|integer|false|none|none|
|propertyId|integer|false|none|none|
|longDescription|string|false|none|none|
|rateChargeDescription|string|false|none|none|
|isDeal|boolean|false|none|none|
|cancellationPolicyId|integer|false|none|none|
|advancePurchaseNights|integer|false|none|none|
|lastMinuteNights|integer|false|none|none|
|marketSegmentId|integer|false|none|none|
|mealPlanId|integer|false|none|none|
|discountId|integer|false|none|none|
|bookingSourceId|integer|false|none|none|
|glCodeId|integer|false|none|none|
|url|string|false|none|none|
|categories|[[ratesConfigurationsSearchResponse_categories](#schemaratesconfigurationssearchresponse_categories)]|false|none|none|
|days|[[ratesConfigurationsSearchResponse_days](#schemaratesconfigurationssearchresponse_days)]|false|none|none|
|madeDateWindow|[[ratesConfigurationsSearchResponse_madeDateWindow](#schemaratesconfigurationssearchresponse_madedatewindow)]|false|none|none|
|deposit|[ratesConfigurationsSearchResponse_deposit](#schemaratesconfigurationssearchresponse_deposit)|false|none|none|

<h2 id="tocS_rateTableAddtionals_adults_nightly">rateTableAddtionals_adults_nightly</h2>
<!-- backwards compatibility -->
<a id="schemaratetableaddtionals_adults_nightly"></a>
<a id="schema_rateTableAddtionals_adults_nightly"></a>
<a id="tocSratetableaddtionals_adults_nightly"></a>
<a id="tocsratetableaddtionals_adults_nightly"></a>

```json
{
  "first": 0.1,
  "second": 0.1,
  "third": 0.1,
  "fourth": 0.1,
  "thereafter": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|number(float)|false|none|none|
|second|number(float)|false|none|none|
|third|number(float)|false|none|none|
|fourth|number(float)|false|none|none|
|thereafter|number(float)|false|none|none|

<h2 id="tocS_rateTableAddtionals_adults">rateTableAddtionals_adults</h2>
<!-- backwards compatibility -->
<a id="schemaratetableaddtionals_adults"></a>
<a id="schema_rateTableAddtionals_adults"></a>
<a id="tocSratetableaddtionals_adults"></a>
<a id="tocsratetableaddtionals_adults"></a>

```json
{
  "base": 0,
  "glAccountCodeId": 0,
  "includeInBase": true,
  "minimumNumberAllowed": 0,
  "maximumNumberAllowed": 0,
  "nightly": {
    "first": 0.1,
    "second": 0.1,
    "third": 0.1,
    "fourth": 0.1,
    "thereafter": 0.1
  },
  "showOnAccount": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|integer|false|none|none|
|glAccountCodeId|integer|false|none|none|
|includeInBase|boolean|false|none|none|
|minimumNumberAllowed|integer|false|none|none|
|maximumNumberAllowed|integer|false|none|none|
|nightly|[rateTableAddtionals_adults_nightly](#schemaratetableaddtionals_adults_nightly)|false|none|none|
|showOnAccount|boolean|false|none|none|

<h2 id="tocS_quoteResponse_availableAreas">quoteResponse_availableAreas</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponse_availableareas"></a>
<a id="schema_quoteResponse_availableAreas"></a>
<a id="tocSquoteresponse_availableareas"></a>
<a id="tocsquoteresponse_availableareas"></a>

```json
{
  "id": 0,
  "name": "string",
  "categoryId": 0,
  "propertyId": 0,
  "cleanStatus": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|categoryId|integer|false|none|none|
|propertyId|integer|false|none|none|
|cleanStatus|string|false|none|none|

<h2 id="tocS_quoteResponse_taxBreakdown">quoteResponse_taxBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponse_taxbreakdown"></a>
<a id="schema_quoteResponse_taxBreakdown"></a>
<a id="tocSquoteresponse_taxbreakdown"></a>
<a id="tocsquoteresponse_taxbreakdown"></a>

```json
{
  "amount": 0,
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_quoteResponse_additionalsBreakdown">quoteResponse_additionalsBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponse_additionalsbreakdown"></a>
<a id="schema_quoteResponse_additionalsBreakdown"></a>
<a id="tocSquoteresponse_additionalsbreakdown"></a>
<a id="tocsquoteresponse_additionalsbreakdown"></a>

```json
{
  "additionalType": "string",
  "amount": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalType|string|false|none|none|
|amount|number(float)|false|none|none|

<h2 id="tocS_reportsFlashResponse_data">reportsFlashResponse_data</h2>
<!-- backwards compatibility -->
<a id="schemareportsflashresponse_data"></a>
<a id="schema_reportsFlashResponse_data"></a>
<a id="tocSreportsflashresponse_data"></a>
<a id="tocsreportsflashresponse_data"></a>

```json
{
  "grouping": "string",
  "description": "string",
  "dayBudget": 0,
  "dayActual": 0,
  "dayLastYear": 0,
  "monthBudget": 0,
  "monthActual": 0,
  "monthLastYear": 0,
  "yearBudget": 0,
  "yearActual": 0,
  "yearLastYear": 0,
  "glCodeId": 0,
  "glCode": "string",
  "glGroupId": 0,
  "todayOnly": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grouping|string|false|none|none|
|description|string|false|none|none|
|dayBudget|number|false|none|none|
|dayActual|number|false|none|none|
|dayLastYear|number|false|none|none|
|monthBudget|number|false|none|none|
|monthActual|number|false|none|none|
|monthLastYear|number|false|none|none|
|yearBudget|number|false|none|none|
|yearActual|number|false|none|none|
|yearLastYear|number|false|none|none|
|glCodeId|integer|false|none|none|
|glCode|string|false|none|none|
|glGroupId|integer|false|none|none|
|todayOnly|boolean|false|none|none|

<h2 id="tocS_reportsFlashResponse_data_1">reportsFlashResponse_data_1</h2>
<!-- backwards compatibility -->
<a id="schemareportsflashresponse_data_1"></a>
<a id="schema_reportsFlashResponse_data_1"></a>
<a id="tocSreportsflashresponse_data_1"></a>
<a id="tocsreportsflashresponse_data_1"></a>

```json
{
  "grouping": "string",
  "data": [
    {
      "grouping": "string",
      "description": "string",
      "dayBudget": 0,
      "dayActual": 0,
      "dayLastYear": 0,
      "monthBudget": 0,
      "monthActual": 0,
      "monthLastYear": 0,
      "yearBudget": 0,
      "yearActual": 0,
      "yearLastYear": 0,
      "glCodeId": 0,
      "glCode": "string",
      "glGroupId": 0,
      "todayOnly": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grouping|string|false|none|none|
|data|[[reportsFlashResponse_data](#schemareportsflashresponse_data)]|false|none|none|

<h2 id="tocS_reportOccupancy_Breakdown">reportOccupancy_Breakdown</h2>
<!-- backwards compatibility -->
<a id="schemareportoccupancy_breakdown"></a>
<a id="schema_reportOccupancy_Breakdown"></a>
<a id="tocSreportoccupancy_breakdown"></a>
<a id="tocsreportoccupancy_breakdown"></a>

```json
{
  "averageLengthOfStay": 0.1,
  "categoryId": 0,
  "description": "string",
  "discount": 0.1,
  "grossAverageRevPOR": 0.1,
  "netAverageRevPOR": 0.1,
  "numberOfAreasAvailable": 0,
  "numberOfAreasInMaintenance": 0,
  "numberOfAreasUnused": 0,
  "numberOfAreasUsed": 0,
  "numberOfAreasTotal": 0,
  "occupancyPercentage": 0.1,
  "occupants": 0.1,
  "period": "Days",
  "revPar": 0.1,
  "netRevPar": 0.1,
  "totalGrossRevenue": 0.1,
  "totalNetRevenue": 0.1,
  "theDate": "2019-08-24T14:15:22Z",
  "groupBy1": "string",
  "groupBy2": "string",
  "propertyId": 0,
  "reservationIds": [
    0
  ],
  "occupantsBreakdown": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageLengthOfStay|number(float)|false|none|none|
|categoryId|integer|false|none|This value is returned based on your grouping options|
|description|string|false|none|This value is dependant on the values passed in grouping1 and grouping2|
|discount|number(float)|false|none|none|
|grossAverageRevPOR|number(float)|false|none|none|
|netAverageRevPOR|number(float)|false|none|none|
|numberOfAreasAvailable|integer|false|none|none|
|numberOfAreasInMaintenance|integer|false|none|none|
|numberOfAreasUnused|integer|false|none|none|
|numberOfAreasUsed|integer|false|none|none|
|numberOfAreasTotal|integer|false|none|none|
|occupancyPercentage|number(float)|false|none|none|
|occupants|number(float)|false|none|none|
|period|string|false|none|none|
|revPar|number(float)|false|none|none|
|netRevPar|number(float)|false|none|none|
|totalGrossRevenue|number(float)|false|none|none|
|totalNetRevenue|number(float)|false|none|none|
|theDate|string(date-time)|false|none|none|
|groupBy1|string|false|none|none|
|groupBy2|string|false|none|none|
|propertyId|integer|false|none|This value is returned based on your grouping options|
|reservationIds|[integer]|false|none|none|
|occupantsBreakdown|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|period|Days|
|period|Weeks|
|period|Months|

<h2 id="tocS_reservationsPatch_patch">reservationsPatch_patch</h2>
<!-- backwards compatibility -->
<a id="schemareservationspatch_patch"></a>
<a id="schema_reservationsPatch_patch"></a>
<a id="tocSreservationspatch_patch"></a>
<a id="tocsreservationspatch_patch"></a>

```json
{
  "activityId": 0,
  "accountId": 0,
  "adults": 0,
  "additional1": 0,
  "additional2": 0,
  "additional3": 0,
  "additional4": 0,
  "additional5": 0,
  "additional6": 0,
  "additional7": 0,
  "allotmentAssociationID": "string",
  "areaId": 0,
  "areaName": "string",
  "arrivalDate": "2019-08-24T14:15:22Z",
  "attendees": "string",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billing": "string",
  "billingCategoryId": 0,
  "boatId": 0,
  "bookerContactId": 0,
  "bookingSourceId": 0,
  "bookingSourceName": "string",
  "businessLostId": 0,
  "businessSegmentId": 0,
  "cancellationPolicyId": 0,
  "cancelledDate": "2019-08-24T14:15:22Z",
  "cancelledById": 0,
  "cardId": "string",
  "categoryId": 0,
  "categoryName": "string",
  "children": 0,
  "companyId": 0,
  "confirmedDate": "2019-08-24T14:15:22Z",
  "confirmedById": 0,
  "contactId": 0,
  "coordinator1Id": 0,
  "coordinator2Id": 0,
  "createdDate": "2019-08-24T14:15:22Z",
  "createdById": 0,
  "departureDate": "2019-08-24T14:15:22Z",
  "deposit": 0,
  "depositDate": "2019-08-24T14:15:22Z",
  "destinationCodeId": 0,
  "discountReasonId": 0,
  "dwellingTypeId": 0,
  "dwellingLengthId": 0,
  "dwellingYear": "string",
  "eta": "string",
  "eventFinish": "2019-08-24T14:15:22Z",
  "eventName": "string",
  "eventStart": "2019-08-24T14:15:22Z",
  "externalCancelId": "string",
  "externalReservationId": "string",
  "fixedRes": true,
  "fixedResReasonId": 0,
  "groupAllotmentId": 0,
  "groupOptionId": 0,
  "groupHeader": true,
  "groupReservationId": 0,
  "guestGiven": "string",
  "guestId": 0,
  "guestSurname": "string",
  "housekeepingNote": "string",
  "infants": 0,
  "longTerm": true,
  "loyaltyMembershipTypeId": 0,
  "marketSegmentId": 0,
  "mealPlanId": 0,
  "modifiedDate": "2019-08-24T14:15:22Z",
  "modifiedById": 0,
  "notes": "string",
  "occupantId": 0,
  "onHold": true,
  "onlineConfirmationId": 0,
  "originId": 0,
  "otaNotes": "string",
  "otaRef1": "string",
  "otaRef2": "string",
  "otaRef3": "string",
  "paymentModeId": 0,
  "posOnGroupMaster": true,
  "preArrivalCheckComplete": true,
  "preAuthAmount": 0,
  "preAuthCode": "string",
  "preAuthExpDate": 0,
  "propertyId": 0,
  "rateOnGroup": true,
  "rateTypeId": 0,
  "rateTypeName": "string",
  "resType": "string",
  "resTypeId": 0,
  "reservationType": "string",
  "secondDeposit": 0,
  "secondDepositDate": "2019-08-24T14:15:22Z",
  "secondDiscountReasonId": 0,
  "splitReservationId": 0,
  "status": "string",
  "subMarketSegmentId": 0,
  "subResTypeId": 0,
  "travelAgentId": 0,
  "travelAgentName": "string",
  "userDefined1": "string",
  "userDefined2": "string",
  "userDefined3": "string",
  "userDefined4": "string",
  "userDefined5": "string",
  "userDefined6": "string",
  "userDefined7": "string",
  "userDefined8": "string",
  "userDefined9": "string",
  "userDefined10": "string",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2019-08-24T14:15:22Z",
  "userDefined15": "2019-08-24T14:15:22Z",
  "voucherId": "string",
  "wholesalerId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|integer(int32)|false|none|none|
|accountId|integer(int32)|false|none|none|
|adults|integer(int32)|false|none|none|
|additional1|integer(int32)|false|none|none|
|additional2|integer(int32)|false|none|none|
|additional3|integer(int32)|false|none|none|
|additional4|integer(int32)|false|none|none|
|additional5|integer(int32)|false|none|none|
|additional6|integer(int32)|false|none|none|
|additional7|integer(int32)|false|none|none|
|allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|areaId|integer(int32)|false|none|none|
|areaName|string|false|none|none|
|arrivalDate|string(date-time)|false|none|none|
|attendees|string|false|none|none|
|baseRateOverride|integer(int32)|false|none|If you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Inclusive Packages or Inclusive Taxes|
|totalRateOverride|integer(int32)|false|none|If you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Exclusive Taxes. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|billing|string|false|none|none|
|billingCategoryId|integer(int32)|false|none|none|
|boatId|integer(int32)|false|none|none|
|bookerContactId|integer(int32)|false|none|none|
|bookingSourceId|integer(int32)|false|none|none|
|bookingSourceName|string|false|none|none|
|businessLostId|integer(int32)|false|none|none|
|businessSegmentId|integer(int32)|false|none|none|
|cancellationPolicyId|integer(int32)|false|none|none|
|cancelledDate|string(date-time)|false|none|none|
|cancelledById|integer(int32)|false|none|none|
|cardId|string|false|none|none|
|categoryId|integer(int32)|false|none|none|
|categoryName|string|false|none|none|
|children|integer(int32)|false|none|none|
|companyId|integer(int32)|false|none|none|
|confirmedDate|string(date-time)|false|none|none|
|confirmedById|integer(int32)|false|none|none|
|contactId|integer(int32)|false|none|none|
|coordinator1Id|integer(int32)|false|none|none|
|coordinator2Id|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|createdById|integer(int64)|false|none|none|
|departureDate|string(date-time)|false|none|none|
|deposit|number(currency)|false|none|none|
|depositDate|string(date-time)|false|none|none|
|destinationCodeId|integer(int32)|false|none|none|
|discountReasonId|integer(int32)|false|none|none|
|dwellingTypeId|integer(int32)|false|none|none|
|dwellingLengthId|integer(int32)|false|none|none|
|dwellingYear|string|false|none|none|
|eta|string|false|none|none|
|eventFinish|string(date-time)|false|none|none|
|eventName|string|false|none|none|
|eventStart|string(date-time)|false|none|none|
|externalCancelId|string|false|none|none|
|externalReservationId|string|false|none|none|
|fixedRes|boolean|false|none|none|
|fixedResReasonId|integer(int32)|false|none|none|
|groupAllotmentId|integer(int32)|false|none|none|
|groupOptionId|integer(int32)|false|none|none|
|groupHeader|boolean|false|none|none|
|groupReservationId|integer(int32)|false|none|none|
|guestGiven|string|false|none|none|
|guestId|integer(int32)|false|none|none|
|guestSurname|string|false|none|none|
|housekeepingNote|string|false|none|none|
|infants|integer(int32)|false|none|none|
|longTerm|boolean|false|none|none|
|loyaltyMembershipTypeId|integer(int32)|false|none|none|
|marketSegmentId|integer(int32)|false|none|none|
|mealPlanId|integer(int32)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|modifiedById|integer(int64)|false|none|none|
|notes|string|false|none|none|
|occupantId|integer(int32)|false|none|none|
|onHold|boolean|false|none|none|
|onlineConfirmationId|integer(int32)|false|none|none|
|originId|integer(int32)|false|none|none|
|otaNotes|string|false|none|none|
|otaRef1|string|false|none|none|
|otaRef2|string|false|none|none|
|otaRef3|string|false|none|none|
|paymentModeId|integer(int32)|false|none|none|
|posOnGroupMaster|boolean|false|none|none|
|preArrivalCheckComplete|boolean|false|none|none|
|preAuthAmount|number(currency)|false|none|none|
|preAuthCode|string|false|none|none|
|preAuthExpDate|number(date-time)|false|none|none|
|propertyId|integer(int32)|false|none|none|
|rateOnGroup|boolean|false|none|none|
|rateTypeId|integer(int32)|false|none|none|
|rateTypeName|string|false|none|none|
|resType|string|false|none|none|
|resTypeId|integer(int32)|false|none|none|
|reservationType|string|false|none|none|
|secondDeposit|number(currency)|false|none|none|
|secondDepositDate|string(date-time)|false|none|none|
|secondDiscountReasonId|integer(int32)|false|none|none|
|splitReservationId|integer(int32)|false|none|none|
|status|string|false|none|none|
|subMarketSegmentId|integer(int32)|false|none|none|
|subResTypeId|integer(int32)|false|none|none|
|travelAgentId|integer(int32)|false|none|none|
|travelAgentName|string|false|none|none|
|userDefined1|string|false|none|none|
|userDefined2|string|false|none|none|
|userDefined3|string|false|none|none|
|userDefined4|string|false|none|none|
|userDefined5|string|false|none|none|
|userDefined6|string|false|none|none|
|userDefined7|string|false|none|none|
|userDefined8|string|false|none|none|
|userDefined9|string|false|none|none|
|userDefined10|string|false|none|none|
|userDefined11|boolean|false|none|none|
|userDefined12|boolean|false|none|none|
|userDefined13|boolean|false|none|none|
|userDefined14|string(date-time)|false|none|none|
|userDefined15|string(date-time)|false|none|none|
|voucherId|string|false|none|none|
|wholesalerId|integer(int32)|false|none|none|

<h2 id="tocS_reservationsDailyRatesOverride_dailyRates">reservationsDailyRatesOverride_dailyRates</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdailyratesoverride_dailyrates"></a>
<a id="schema_reservationsDailyRatesOverride_dailyRates"></a>
<a id="tocSreservationsdailyratesoverride_dailyrates"></a>
<a id="tocsreservationsdailyratesoverride_dailyrates"></a>

```json
{
  "theDate": "2019-08-24",
  "baseRate": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theDate|string(date)|true|none|none|
|baseRate|number|true|none|none|

<h2 id="tocS_reservationsDiscountOverride_percentage">reservationsDiscountOverride_percentage</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountoverride_percentage"></a>
<a id="schema_reservationsDiscountOverride_percentage"></a>
<a id="tocSreservationsdiscountoverride_percentage"></a>
<a id="tocsreservationsdiscountoverride_percentage"></a>

```json
{
  "percentage": 0,
  "noGreaterThan": 0,
  "includePackage": true,
  "includeAdditionals": true,
  "appliesToTotalRate": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|integer(int32)|false|none|none|
|noGreaterThan|integer(int32)|false|none|none|
|includePackage|boolean|false|none|none|
|includeAdditionals|boolean|false|none|none|
|appliesToTotalRate|boolean|false|none|none|

<h2 id="tocS_reservationsDiscountOverride_amount">reservationsDiscountOverride_amount</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountoverride_amount"></a>
<a id="schema_reservationsDiscountOverride_amount"></a>
<a id="tocSreservationsdiscountoverride_amount"></a>
<a id="tocsreservationsdiscountoverride_amount"></a>

```json
{
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int32)|false|none|none|

<h2 id="tocS_reservationsDiscountsSearchResponseFull_inner">reservationsDiscountsSearchResponseFull_inner</h2>
<!-- backwards compatibility -->
<a id="schemareservationsdiscountssearchresponsefull_inner"></a>
<a id="schema_reservationsDiscountsSearchResponseFull_inner"></a>
<a id="tocSreservationsdiscountssearchresponsefull_inner"></a>
<a id="tocsreservationsdiscountssearchresponsefull_inner"></a>

```json
{
  "availableToMembers": true,
  "glCodeId": 0,
  "glCodeType": "string",
  "discountType": "string",
  "percentage": {
    "percentage": 0,
    "noGreaterThan": 0,
    "includePackage": true,
    "includeAdditionals": true,
    "appliesToTotalRate": true
  },
  "availableToIbe": true,
  "description": "string",
  "minimumNightStay": 0,
  "maximumNightStay": 0,
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableToMembers|boolean|false|none|none|
|glCodeId|integer|false|none|none|
|glCodeType|string|false|none|none|
|discountType|string|false|none|none|
|percentage|object|false|none|none|
|» percentage|number|false|none|none|
|» noGreaterThan|number|false|none|none|
|» includePackage|boolean|false|none|none|
|» includeAdditionals|boolean|false|none|none|
|» appliesToTotalRate|boolean|false|none|none|
|availableToIbe|boolean|false|none|none|
|description|string|false|none|none|
|minimumNightStay|integer|false|none|none|
|maximumNightStay|integer|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_reservationsPackagesResponse_inner">reservationsPackagesResponse_inner</h2>
<!-- backwards compatibility -->
<a id="schemareservationspackagesresponse_inner"></a>
<a id="schema_reservationsPackagesResponse_inner"></a>
<a id="tocSreservationspackagesresponse_inner"></a>
<a id="tocsreservationspackagesresponse_inner"></a>

```json
{
  "reservationId": 0,
  "packages": [
    {
      "id": 0,
      "sundryId": 0,
      "sundryDescription": "string",
      "quantity": 0,
      "perAdult": 0,
      "perChild": 0,
      "perInfant": 0,
      "perAdditional1": 0,
      "perAdditional2": 0,
      "perAdditional3": 0,
      "perAdditional4": 0,
      "perAdditional5": 0,
      "showOnccount": true,
      "applyChargeDescription": "string",
      "amount": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|packages|[object]|false|none|none|
|» id|integer|false|none|none|
|» sundryId|integer|false|none|none|
|» sundryDescription|string|false|none|none|
|» quantity|integer|false|none|none|
|» perAdult|number|false|none|none|
|» perChild|number|false|none|none|
|» perInfant|number|false|none|none|
|» perAdditional1|number|false|none|none|
|» perAdditional2|number|false|none|none|
|» perAdditional3|number|false|none|none|
|» perAdditional4|number|false|none|none|
|» perAdditional5|number|false|none|none|
|» showOnccount|boolean|false|none|none|
|» applyChargeDescription|string|false|none|none|
|» amount|number|false|none|none|

<h2 id="tocS_reservationsBedConfigurationsResponse_inner">reservationsBedConfigurationsResponse_inner</h2>
<!-- backwards compatibility -->
<a id="schemareservationsbedconfigurationsresponse_inner"></a>
<a id="schema_reservationsBedConfigurationsResponse_inner"></a>
<a id="tocSreservationsbedconfigurationsresponse_inner"></a>
<a id="tocsreservationsbedconfigurationsresponse_inner"></a>

```json
{
  "reservationId": 0,
  "bedConfigurations": [
    {
      "quantity": 0,
      "id": 0,
      "name": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|bedConfigurations|[object]|false|none|none|
|» quantity|integer|false|none|none|
|» id|integer|false|none|none|
|» name|string|false|none|none|

<h2 id="tocS_reservationsLinensResponse_inner">reservationsLinensResponse_inner</h2>
<!-- backwards compatibility -->
<a id="schemareservationslinensresponse_inner"></a>
<a id="schema_reservationsLinensResponse_inner"></a>
<a id="tocSreservationslinensresponse_inner"></a>
<a id="tocsreservationslinensresponse_inner"></a>

```json
{
  "reservationId": 0,
  "linens": [
    {
      "linenId": 0,
      "linen": "string",
      "quantity": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reservationId|integer|false|none|none|
|linens|[object]|false|none|none|
|» linenId|integer|false|none|none|
|» linen|string|false|none|none|
|» quantity|integer|false|none|none|

<h2 id="tocS_reservationsRateQuotesResponse_packageBreakdown">reservationsRateQuotesResponse_packageBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemareservationsratequotesresponse_packagebreakdown"></a>
<a id="schema_reservationsRateQuotesResponse_packageBreakdown"></a>
<a id="tocSreservationsratequotesresponse_packagebreakdown"></a>
<a id="tocsreservationsratequotesresponse_packagebreakdown"></a>

```json
{
  "amount": 0,
  "baseIncludesPackageAmount": true,
  "glCodeId": 0,
  "packageFeeType": 0,
  "packageId": 0,
  "perAdultFee": 0,
  "perChildFee": 0,
  "perExtra4Fee": 0,
  "perExtra5Fee": 0,
  "perExtra6Fee": 0,
  "perExtra7Fee": 0,
  "perExtra8Fee": 0,
  "perInfantFee": 0,
  "quantity": 0,
  "sundryId": 0,
  "sundryName": "string",
  "totalTax": 0,
  "theDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|none|
|baseIncludesPackageAmount|boolean|false|none|none|
|glCodeId|integer|false|none|none|
|packageFeeType|integer|false|none|none|
|packageId|integer|false|none|none|
|perAdultFee|number|false|none|none|
|perChildFee|number|false|none|none|
|perExtra4Fee|number|false|none|none|
|perExtra5Fee|number|false|none|none|
|perExtra6Fee|number|false|none|none|
|perExtra7Fee|number|false|none|none|
|perExtra8Fee|number|false|none|none|
|perInfantFee|number|false|none|none|
|quantity|integer|false|none|none|
|sundryId|integer|false|none|none|
|sundryName|string|false|none|none|
|totalTax|number|false|none|none|
|theDate|string(date-time)|false|none|none|

<h2 id="tocS_reservationsRateQuotesResponse_additionalsBreakdown">reservationsRateQuotesResponse_additionalsBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemareservationsratequotesresponse_additionalsbreakdown"></a>
<a id="schema_reservationsRateQuotesResponse_additionalsBreakdown"></a>
<a id="tocSreservationsratequotesresponse_additionalsbreakdown"></a>
<a id="tocsreservationsratequotesresponse_additionalsbreakdown"></a>

```json
{
  "additionalType": "string",
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalType|string|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_reservationsRateQuotesResponse_rateBreakdown">reservationsRateQuotesResponse_rateBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemareservationsratequotesresponse_ratebreakdown"></a>
<a id="schema_reservationsRateQuotesResponse_rateBreakdown"></a>
<a id="tocSreservationsratequotesresponse_ratebreakdown"></a>
<a id="tocsreservationsratequotesresponse_ratebreakdown"></a>

```json
{
  "theDate": "2019-08-24T14:15:22Z",
  "baseRateAmount": 0,
  "baseRateRaw": 0,
  "rateType": "string",
  "rateTypeId": 0,
  "currencyCode": "string",
  "currencySymbol": "string",
  "packageAmount": 0,
  "packageHiddenAmount": 0,
  "packageShownAmount": 0,
  "displayBaseRate": 0,
  "displayTotalPackage": 0,
  "displayTotalRate": 0,
  "displayTotalTax": 0,
  "packageBreakdown": [
    {
      "amount": 0,
      "baseIncludesPackageAmount": true,
      "glCodeId": 0,
      "packageFeeType": 0,
      "packageId": 0,
      "perAdultFee": 0,
      "perChildFee": 0,
      "perExtra4Fee": 0,
      "perExtra5Fee": 0,
      "perExtra6Fee": 0,
      "perExtra7Fee": 0,
      "perExtra8Fee": 0,
      "perInfantFee": 0,
      "quantity": 0,
      "sundryId": 0,
      "sundryName": "string",
      "totalTax": 0,
      "theDate": "2019-08-24T14:15:22Z"
    }
  ],
  "totalExtras": 0,
  "totalPackage": 0,
  "totalPackageIncludedInBase": 0,
  "totalPackageNotIncludedInBase": 0,
  "totalRate": 0,
  "taxBreakdown": [
    {
      "amount": 0,
      "description": "string"
    }
  ],
  "additionalsBreakdown": [
    {
      "additionalType": "string",
      "amount": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theDate|string(date-time)|false|none|none|
|baseRateAmount|number|false|none|none|
|baseRateRaw|number|false|none|none|
|rateType|string|false|none|none|
|rateTypeId|integer|false|none|none|
|currencyCode|string|false|none|none|
|currencySymbol|string|false|none|none|
|packageAmount|number|false|none|none|
|packageHiddenAmount|number|false|none|none|
|packageShownAmount|number|false|none|none|
|displayBaseRate|number|false|none|none|
|displayTotalPackage|number|false|none|none|
|displayTotalRate|number|false|none|none|
|displayTotalTax|number|false|none|none|
|packageBreakdown|[[reservationsRateQuotesResponse_packageBreakdown](#schemareservationsratequotesresponse_packagebreakdown)]|false|none|none|
|totalExtras|number|false|none|none|
|totalPackage|number|false|none|none|
|totalPackageIncludedInBase|number|false|none|none|
|totalPackageNotIncludedInBase|number|false|none|none|
|totalRate|number|false|none|none|
|taxBreakdown|[[quoteResponse_taxBreakdown](#schemaquoteresponse_taxbreakdown)]|false|none|none|
|additionalsBreakdown|[[reservationsRateQuotesResponse_additionalsBreakdown](#schemareservationsratequotesresponse_additionalsbreakdown)]|false|none|none|

<h2 id="tocS_actualAccountBasic_secondaryCurrency">actualAccountBasic_secondaryCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaactualaccountbasic_secondarycurrency"></a>
<a id="schema_actualAccountBasic_secondaryCurrency"></a>
<a id="tocSactualaccountbasic_secondarycurrency"></a>
<a id="tocsactualaccountbasic_secondarycurrency"></a>

```json
{
  "accommodationBalance": 0,
  "arBalance": 0,
  "currencyCode": "string",
  "electricityBalance": 0,
  "extrasBalance": 0,
  "gasBalance": 0,
  "internetBalance": 0,
  "phoneBalance": 0,
  "waterBalance": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accommodationBalance|number(currency)|false|none|none|
|arBalance|number(currency)|false|none|none|
|currencyCode|string|false|none|none|
|electricityBalance|number(currency)|false|none|none|
|extrasBalance|number(currency)|false|none|none|
|gasBalance|number(currency)|false|none|none|
|internetBalance|number(currency)|false|none|none|
|phoneBalance|number(currency)|false|none|none|
|waterBalance|number(currency)|false|none|none|

<h2 id="tocS_reservationsWarnings_warnings">reservationsWarnings_warnings</h2>
<!-- backwards compatibility -->
<a id="schemareservationswarnings_warnings"></a>
<a id="schema_reservationsWarnings_warnings"></a>
<a id="tocSreservationswarnings_warnings"></a>
<a id="tocsreservationswarnings_warnings"></a>

```json
{
  "code": "string",
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_specialEventsSearchResponse_inner">specialEventsSearchResponse_inner</h2>
<!-- backwards compatibility -->
<a id="schemaspecialeventssearchresponse_inner"></a>
<a id="schema_specialEventsSearchResponse_inner"></a>
<a id="tocSspecialeventssearchresponse_inner"></a>
<a id="tocsspecialeventssearchresponse_inner"></a>

```json
{
  "id": 0,
  "description": "string",
  "fromDate": "2019-08-24T14:15:22Z",
  "toDate": "2019-08-24T14:15:22Z",
  "propertyId": 0,
  "note": "string",
  "displayWarningForReservations": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|description|string|false|none|none|
|fromDate|string(date-time)|false|none|none|
|toDate|string(date-time)|false|none|none|
|propertyId|integer|false|none|none|
|note|string|false|none|none|
|displayWarningForReservations|boolean|false|none|none|

<h2 id="tocS_transactionGuestCredits_creditTransactions">transactionGuestCredits_creditTransactions</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcredits_credittransactions"></a>
<a id="schema_transactionGuestCredits_creditTransactions"></a>
<a id="tocStransactionguestcredits_credittransactions"></a>
<a id="tocstransactionguestcredits_credittransactions"></a>

```json
{
  "amount": 0,
  "transactionId": 0,
  "guestAccountId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(number)|false|none|none|
|transactionId|integer(number)|false|none|none|
|guestAccountId|integer(number)|false|none|none|

<h2 id="tocS_transactionGuestCreditsResponse_inner">transactionGuestCreditsResponse_inner</h2>
<!-- backwards compatibility -->
<a id="schematransactionguestcreditsresponse_inner"></a>
<a id="schema_transactionGuestCreditsResponse_inner"></a>
<a id="tocStransactionguestcreditsresponse_inner"></a>
<a id="tocstransactionguestcreditsresponse_inner"></a>

```json
{
  "accountingDate": "2019-08-24T14:15:22Z",
  "creditCardType": "string",
  "creditCardMasked": "string",
  "currencyCode": "string",
  "createdDate": "2019-08-24T14:15:22Z",
  "fullGst": 0,
  "glCodeGrouping": "string",
  "glCodeDescription": "string",
  "glCodeId": 0,
  "originalReceiptId": 0,
  "propertyId": 0,
  "rateTransactionReservationId": 0,
  "taxAmount": 0,
  "transactionType": "string",
  "voidTransaction": true,
  "linkPointer": 0,
  "linkPointerType": "string",
  "unpaidBalance": 0,
  "isHiddenPackage": true,
  "userId": 0,
  "secondaryCurrency": 0,
  "exchangeRate": 0,
  "modifiedDate": "2019-08-24T14:15:22Z",
  "id": 0,
  "accountId": 0,
  "accountType": "string",
  "amount": 0,
  "comment": "string",
  "dateOfTransaction": "2019-08-24T14:15:22Z",
  "sundryId": 0,
  "description": "string",
  "quantity": 0,
  "invoiceId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingDate|string(date-time)|false|none|none|
|creditCardType|string(string)|false|none|none|
|creditCardMasked|string(string)|false|none|none|
|currencyCode|string(string)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|fullGst|number(number)|false|none|none|
|glCodeGrouping|string(string)|false|none|none|
|glCodeDescription|string(string)|false|none|none|
|glCodeId|integer(number)|false|none|none|
|originalReceiptId|integer(number)|false|none|none|
|propertyId|integer(number)|false|none|none|
|rateTransactionReservationId|integer(number)|false|none|none|
|taxAmount|number(number)|false|none|none|
|transactionType|string(string)|false|none|none|
|voidTransaction|boolean(boolean)|false|none|none|
|linkPointer|integer(number)|false|none|none|
|linkPointerType|string(string)|false|none|none|
|unpaidBalance|number(number)|false|none|none|
|isHiddenPackage|boolean(boolean)|false|none|none|
|userId|integer(number)|false|none|none|
|secondaryCurrency|number(number)|false|none|none|
|exchangeRate|number(number)|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|id|integer(number)|false|none|none|
|accountId|integer(number)|false|none|none|
|accountType|string(string)|false|none|none|
|amount|number(number)|false|none|none|
|comment|string(string)|false|none|none|
|dateOfTransaction|string(date-time)|false|none|none|
|sundryId|integer(number)|false|none|none|
|description|string(string)|false|none|none|
|quantity|integer(number)|false|none|none|
|invoiceId|integer(number)|false|none|none|

<h2 id="tocS_webhookSubscriptionResponse_headers">webhookSubscriptionResponse_headers</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksubscriptionresponse_headers"></a>
<a id="schema_webhookSubscriptionResponse_headers"></a>
<a id="tocSwebhooksubscriptionresponse_headers"></a>
<a id="tocswebhooksubscriptionresponse_headers"></a>

```json
{
  "key": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

