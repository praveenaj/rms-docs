---
title: RMS REST API v1.4.37.1
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="rms-rest-api">RMS REST API v1.4.37.1</h1>

## Overview

The RMS REST API provides a comprehensive interface for seamless data exchange with the RMS property management system. This API allows you to extract information, update existing data, and create new records directly in the RMS database.

This documenation is based on the [Official documentation](https://restapidocs.rmscloud.com) by RMS.

## Documentation Structure

This repository contains comprehensive documentation for the RMS REST API:

- `/docs/api/` - Contains individual markdown files for each API endpoint:
  - `account-types.md` - Account type definitions
  - `accounts.md` - Account management
  - `agents.md` - Travel agent management
  - `areas.md` - Room/site/dock management
  - `attributes.md` - Property attributes
  - `audit-trail.md` - Audit trail records
  - `availability-push.md` - Availability push notifications
  - `availability.md` - Availability checking
  - `booking-sources.md` - Booking source definitions
  - `boomgates.md` - Boom gate management
  - `cancellation-policies.md` - Cancellation policy definitions
  - `categories.md` - Room/site/dock type categories
  - `companies.md` - Company management
  - `connecting-and-authentication.md` - API authentication
  - `countries.md` - Country definitions
  - `credit-notes.md` - Credit note management
  - `discounts.md` - Discount definitions
  - `dwelling.md` - Dwelling management
  - `finance.md` - Financial operations
  - `gl-account-codes.md` - General ledger account codes
  - `group-allotments.md` - Group booking management
  - `guest-status.md` - Guest status definitions
  - `guest-types.md` - Guest type definitions
  - `guests.md` - Guest management
  - `health-check.md` - API health check
  - `idtypes.md` - ID type definitions
  - `inventory-grouping.md` - Inventory group management
  - `invoices.md` - Invoice management
  - `labels.md` - Label definitions
  - `loyalty.md` - Loyalty program management
  - `mandatory-fields.md` - Mandatory field definitions
  - `market-segments.md` - Market segment definitions
  - `market-types.md` - Market type definitions
  - `master.md` - Master data management
  - `meal-plan.md` - Meal plan definitions
  - `membership-types.md` - Membership type definitions
  - `message-centre.md` - Message center management
  - `origins.md` - Origin definitions
  - `payment-modes.md` - Payment mode definitions
  - `properties.md` - Property management
  - `rates.md` - Rate management
  - `reasons.md` - Reason code definitions
  - `relationships.md` - Relationship definitions
  - `reports.md` - Report generation
  - `requirements.md` - Requirement definitions
  - `reservation-types.md` - Reservation type definitions
  - `reservations.md` - Reservation management
  - `restrictions.md` - Restriction management
  - `rmspay.md` - Payment processing
  - `security-profiles.md` - Security profile management
  - `special-events.md` - Special event management
  - `sundries.md` - Sundry item management
  - `titles.md` - Title definitions
  - `traces.md` - Trace management
  - `transactions.md` - Transaction management
  - `transfers.md` - Transfer management
  - `users.md` - User management
  - `vip-codes.md` - VIP code definitions
  - `webhooks.md` - Webhook management

- `/docs/models/` - Contains schema definitions:
  - `schema.md` - Comprehensive data model documentation

Each API endpoint documentation includes:
- Available methods (GET, POST, PUT, DELETE)
- Required parameters
- Response formats
- Example requests and responses
- Error codes

## Key Features

- Extract vital information from RMS
- Update existing data in the system
- Create new records in real-time
- Enhance website functionality
- Send targeted marketing campaigns
- Reward loyal customers with personalized offers
- Consolidate data for comprehensive reporting
- Analyze trends and patterns for decision-making
- Integrate with point-of-sale systems

## Getting Started

1. Contact `apisupport@rmscloud.com` for approval
2. Once approved, purchase the [API Developers Kit](https://rmscloud.com/developers) which includes:
   - Kick-off call to review the RMS REST API
   - API Keys
   - SBX Database for developing your integration
   - API Support

## Certification Process

Becoming a certified partner offers numerous benefits:
1. Demonstrate your integration to RMS Partnership Team
2. Complete a successful 30-day customer pilot
3. Submit REST API Certification Form(s)
4. Create customer-facing help documentation
5. Complete Marketing Forms

## Integration Guidelines

1. For creating reservations via REST, ensure that RMSOnline is activated
2. Any reference to a number as 'no' in RMS will be called 'id' in the API
3. The term 'Made' in RMS will be referred to as 'Created' in the API
4. Default mandatory fields will be identified, but clients can configure their own
5. Examples are shown in order of Basic, Full, Lite with Basic returned by default
6. All code is written in lower camelCase
7. Dates are formatted as `YEAR-MONTH-DAY HOUR:MINUTE` (e.g., "2016-08-22 19:25:00")
8. For PUT requests, first perform a GET request on the Full Object, make changes, then PUT
9. When using POST, always pass 'id' as '0' to create the next available record

## Common API Endpoints

Here are some of the most commonly used API endpoints:

- **Authentication**: `/docs/api/connecting-and-authentication.md`
- **Reservations**: `/docs/api/reservations.md`
- **Guests**: `/docs/api/guests.md`
- **Properties**: `/docs/api/properties.md`
- **Rates**: `/docs/api/rates.md`
- **Transactions**: `/docs/api/transactions.md`
- **Availability**: `/docs/api/availability.md`

## Frequently Asked Questions

- **Why can't I see the name of an object in my call?**
  We only return the 'id' for most table references. To retrieve additional data, pass that 'id' via the appropriate GET call.

- **How can I find the Room Number?**
  Any reference to Room No, Site No, or Dock No will be referred to as Area.

- **How can I find the name of the room types?**
  Any reference to Room Type, Site Type, or Dock Type will be referred to as Category.

- **What time zone are the timestamps returned in?**
  All date/time references are returned in the local property time, except for modifiedDate for group allotments, travel agents, and wholesalers, which are returned in UTC.

- **Is there a limit to how many records are returned?**
  GET functions return a default limit of 100 records, ordered by the 'id' field. This limit can be increased, and/or multiple calls can be performed using the offset parameter.

- **Why is my guest returned with an Account Id of '0'?**
  If a guest has never charged back to their account id before, it will not exist in RMS. Use the call '/guests/createAccountId' to create an Account id for a guest.

- **Why are my online notifications not triggering?**
  The REST API will not trigger online notifications. For internal or external emails to guests, set up triggered correspondence.

- **What do I do if I am returned an ID with the value of '0'?**
  If a value of 0 is returned, this is equivalent to Null.

## Error Handling

- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **406**: Not Acceptable

## Rate Limiting

To ensure optimal performance, rate limiting is implemented on API endpoints:

- **/rates/rateAdjustment:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute
- **/reservations/id/regoaccess:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute
- **/reservations/id/dailyRevenue:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute
- **/api/healthcheck:** maxRequests: 20, timeFrame: 1 minute, blockDuration: 1 minute
- **/transactions/search:** maxRequests: 20, timeFrame: 1 minute, throttle: true
- **/authToken:** maxRequests: 25, timeFrame: 1 minute, blockDuration: 1 minute
- **/guests\*:** maxRequests: 150, timeFrame: 1 minute, blockDuration: 1 minute
- **/reservations/search\*:** maxRequests: 60, timeFrame: 10 seconds, blockDuration: 1 minute
- **/availableAreas\*:** maxRequests: 40, timeFrame: 10 seconds, blockDuration: 1 minute
- **/reservations\*:** maxRequests: 100, timeFrame: 10 seconds, blockDuration: 1 minute, methods: GET
- **/availabilityrategrid\*:** maxRequests: 50, timeFrame: 10 seconds, blockDuration: 1 minute
- **/areas\*:** maxRequests: 30, timeFrame: 10 seconds, blockDuration: 1 minute
- **/rates/rateQuote\*:** maxRequests: 40, timeFrame: 10 seconds, blockDuration: 1 minute
- **/reports\*:** maxRequests: 60, timeFrame: 1 minute, throttle: true

### Failed Request Limits

**/authtoken:**
- maxRequests: 30
- timeFrame: 1 minute
- blockDuration: 1 hour
- responseCode: 400

**/\*:**
- maxRequests: 60
- timeFrame: 1 minute
- blockDuration: 1 hour
- responseCodes: 401, 403

### Throttling
If the request rate exceeds the configured limit, additional requests beyond the allowed number will be blocked, but remaining requests will still be processed.

## API Documentation

- [Three column format](https://restapidocs.rmscloud.com/)
- [Postman](https://restapidocs.rmscloud.com/postman_collection.json)
- [Swagger](https://app.swaggerhub.com/apis-docs/RMSHospitality/RMS_REST_API/)
- [Letting APIs](https://app.swaggerhub.com/apis-docs/RMSHospitality/Letting_API/)
- [VGS_CC_Handling](https://app.swaggerhub.com/apis-docs/RMSHospitality/VGS_CC_Handling/)
- [High Level RMS Relationship Schema](https://restapidocs.rmscloud.com/images/rms-schema.png)

## Base URLs

- [https://restapi8.rmscloud.com/](https://restapi8.rmscloud.com/)
- [https://betarestapi8.rmscloud.com/](https://betarestapi8.rmscloud.com/)
- [https://restapi9.rmscloud.cn/](https://restapi9.rmscloud.cn/)
- [https://restapi11.rmscloud.com/](https://restapi11.rmscloud.com/)
- [https://betarestapi11.rmscloud.com/](https://betarestapi11.rmscloud.com/)
- [https://restapi12.rmscloud.com/](https://restapi12.rmscloud.com/)
- [https://betarestapi12.rmscloud.com/](https://betarestapi12.rmscloud.com/)
- [https://restapi13.rmscloud.com/](https://restapi13.rmscloud.com/)
- [https://betarestapi13.rmscloud.com/](https://betarestapi13.rmscloud.com/)
- [https://restapi14.rmscloud.com/](https://restapi14.rmscloud.com/)
- [https://betarestapi14.rmscloud.com/](https://betarestapi14.rmscloud.com/)

## Authentication

API Key (api_key)
- Parameter Name: **authtoken**, in: header.