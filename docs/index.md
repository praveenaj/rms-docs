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

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction

      **Introduction to the RMS REST API: Simplified for Seamless Integration**

  Welcome to the RMS REST API, your gateway to a world of seamless data exchange! Whether you're looking to extract vital information, update existing data, or create new records, our API has got you covered. It's like having a direct line to the RMS database, giving you the power to access and manage your data whenever you need it.

  **What Can You Do with Our API?**
  The possibilities are endless! Here are just a few ways you can use our API to enhance your operations:
  - Enhance your website's functionality
  - Send targeted marketing campaigns
  - Reward loyal customers with personalized offers
  - Consolidate data for comprehensive reporting
  - Analyze trends and patterns for informed decision-making
  - Integrate with your point-of-sale system
  - And much more!

  **How to Get Started**
  Getting access to our API is easy. Just follow these simple steps:
  1. Contact `apisupport@rmscloud.com` for approval
  2. Once approved, purchase the [API Developers Kit](https://rmscloud.com/developers):
     - Kick-off call to review the RMS REST API
     - API Keys
     - SBX Database for developing your integration
     - API Support

  **Certification**
  Once your development is complete, here are the steps for becoming a certified partner:
  - Demonstration of your integration to RMS Partnership Team
  - A successful 30-day customer pilot.
  - Complete REST API Certification Form(s)
  - Create a customer-facing help article
  - Complete Marketing Forms

  Although certification is not required, becoming a certified partner offers numerous benefits including enhancing partnership credibility, enabling both internal and customer-facing teams, access to marketing campaigns, and presence on RMS Cloud Module Market and Partners Page.

  **Integration Guidelines Made Easy**
  We've laid out some simple guidelines to help you along the way:
  1. To create **reservations via REST**, please have the customer contact our sales team to ensure that RMSOnline is activated.
  2. In the API, any reference to a number as 'no' in RMS will be called 'id'.
  3. The term 'Made' in RMS will be referred to as 'Created' in the API.
  4. Default mandatory fields will be identified, but clients can configure their own mandatory fields.
  5. All examples will be shown in the order of Basic, Full, Lite. The Basic object will be returned by default.
  6. All code will be written in lower camelCase.
  7. Dates will be formatted as `YEAR-MONTH-DAY HOUR:MINUTE` (e.g., "2016-08-22 19:25:00").
  8. When performing a PUT request, first perform a GET request on the Full Object, make your changes, and then perform the PUT request with the entire object. Any blank fields will be changed to 'Null'.
  9. When using the POST function, always pass 'id' as '0' to create the next available record.

  **Got Questions? We've Got Answers!**<br>
  Check out our FAQs for answers to common queries about using our API. From handling room numbers to managing rate limits, we've got you covered.
  - Q: Why can’t I see the name of an object in my call?<br>
    A: We will only return the 'id' for most table references. To retrieve additional data, you need to pass that 'id' via the appropriate GET call.
  - Q: How can I find the Room Number?<br>
    A: Any reference to Room No, Site No, or Dock No will be referred to as Area.
  - Q: How can I find the name of the room types?<br>
    A: Any reference to Room Type, Site Type, or Dock Type will be referred to as Category.
  - Q: What time zone are the timestamps returned in?<br>
    A: All date/time references are returned in the local property time, with the exception of modifiedDate for group allotments, travel agents, and wholesalers, which are returned in UTC.
  - Q: Is there a limit to how many records are returned?<br>
    A: GET functions return a default limit of 100 records, ordered by the 'id' field. This limit can be increased, and/or multiple calls can be performed using the offset parameter.
  - Q: Why is my guest returned with an Account Id of '0'?<br>
    A: If a guest has never charged back to their account id before, it will not exist in RMS. Use the call '/guests/createAccountId' to create an Account id for a guest.
  - Q: Why are my online notifications not triggering?<br>
    A: The REST API will not trigger online notifications. If you need to send internal or external emails to guests, this must be set up as triggered correspondence. [Triggered Correspondence](https://helpcentre.rmscloud.com/triggered-correspondence-setup/triggered-correspondence).
  - Q: What do I do if I am returned an ID with the value of '0', e.g., marketSegmentID: 0?<br>
    A: If a value of 0 is returned, this is equivalent to Null.

  **Error Handling Made Simple**
  We've made sure that error responses are easy to understand, so you can quickly troubleshoot any issues that arise.
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
  - 406: Not Acceptable

  **Rate Limiting for Optimal Performance**
  To keep things running smoothly, we've implemented rate limiting on our API endpoints. But don't worry – we've made sure it's easy to work with.<br><br>
  **/rates/rateAdjustment:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/reservations/id/regoaccess:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/reservations/id/dailyRevenue:** maxRequests: 30, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/api/healthcheck:** maxRequests: 20, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/transactions/search:** maxRequests: 20, timeFrame: 1 minute, throttle: true<br>
  **/authToken: maxRequests:** 25, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/guests\*: maxRequests:** 150, timeFrame: 1 minute, blockDuration: 1 minute<br>
  **/reservations/search\*:** maxRequests: 60, timeFrame: 10 seconds, blockDuration: 1 minute<br>
  **/availableAreas\*: maxRequests:** 40, timeFrame: 10 seconds, blockDuration: 1 minute<br>
  **/reservations\*: maxRequests:** 100, timeFrame: 10 seconds, blockDuration: 1 minute, methods: GET<br>
  **/availabilityrategrid\*:** maxRequests: 50, timeFrame: 10 seconds, blockDuration: 1 minute<br>
  **/areas\*: maxRequests:** 30, timeFrame: 10 seconds, blockDuration: 1 minute<br>
  **/rates/rateQuote\*:** maxRequests: 40, timeFrame: 10 seconds, blockDuration: 1 minute<br>
  **/reports\*:** maxRequests: 60, timeFrame: 1 minute, throttle: true<br><br>
  **failedRequestLimits:**<br>
  /authtoken:<br>
    maxRequests: 30<br>
    timeFrame: 1 minute<br>
    blockDuration: 1 hour<br>
    responseCode: 400<br>
      If more than 30 requests are made in 1 minute, the API will block further requests for 1 hour. <br>
      When blocked, the server will return a 400 response code (likely indicating a "Bad Request" or limit exceeded).<br><br>
  **/\*:**<br>
    maxRequests: 60<br>
    timeFrame: 1 minute<br>
    blockDuration: 1 hour<br>
    responseCodes: <br>
      - 401<br>
      - 403<br>
      If this limit is exceeded, the API will block further requests for 1 hour.<br>
      The response codes for blocked requests can be 401 (Unauthorized) or 403 (Forbidden), indicating access denial.<br><br>
**Throttling:**<br>
    If the request rate exceeds the configured limit, any additional requests beyond the allowed number will be blocked.<br>
    However, remaining requests (those that don’t exceed the rate) will still be processed.<br><br>
  **And Remember, It's All in JSON**
  Our API exclusively uses JSON format for data exchange, so you can rest assured that your data is in good hands.
  - [Three column format](https://restapidocs.rmscloud.com/)
  - [Postman](https://restapidocs.rmscloud.com/postman_collection.json)
  - [Swagger](https://app.swaggerhub.com/apis-docs/RMSHospitality/RMS_REST_API/)
  - [Letting APIs](https://app.swaggerhub.com/apis-docs/RMSHospitality/Letting_API/)
  - [VGS_CC_Handling](https://app.swaggerhub.com/apis-docs/RMSHospitality/VGS_CC_Handling/)
  - [High Level RMS Relationship Schema](https://restapidocs.rmscloud.com/images/rms-schema.png)


Base URLs:

* <a href="https://restapi8.rmscloud.com/">https://restapi8.rmscloud.com/</a>

* <a href="https://betarestapi8.rmscloud.com/">https://betarestapi8.rmscloud.com/</a>

* <a href="https://restapi9.rmscloud.cn/">https://restapi9.rmscloud.cn/</a>

* <a href="https://restapi11.rmscloud.com/">https://restapi11.rmscloud.com/</a>

* <a href="https://betarestapi11.rmscloud.com/">https://betarestapi11.rmscloud.com/</a>

* <a href="https://restapi12.rmscloud.com/">https://restapi12.rmscloud.com/</a>

* <a href="https://betarestapi12.rmscloud.com/">https://betarestapi12.rmscloud.com/</a>

* <a href="https://restapi13.rmscloud.com/">https://restapi13.rmscloud.com/</a>

* <a href="https://betarestapi13.rmscloud.com/">https://betarestapi13.rmscloud.com/</a>

* <a href="https://restapi14.rmscloud.com/">https://restapi14.rmscloud.com/</a>

* <a href="https://betarestapi14.rmscloud.com/">https://betarestapi14.rmscloud.com/</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **authtoken**, in: header.