<h1 id="rms-rest-api-availability">availability</h1>

This section includes calls to retrieve properties Rates & Availability that can be viewed and managed on the Rate Manager Chart within RMS. Each call is unique and has details of its requirements and functionality

<a href="https://helpcentre.rmscloud.com/rate-manager/rate-manager-rates-and-availability">Find out more</a>

## getAvailabilityRateGrid

<a id="opIdgetAvailabilityRateGrid"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/availabilityRateGrid \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/availabilityRateGrid HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availabilityRateGrid',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/availabilityRateGrid',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/availabilityRateGrid', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/availabilityRateGrid', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/availabilityRateGrid");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/availabilityRateGrid", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /availabilityRateGrid`

*Retrieve a properties availability and rate information to present in a calendar grid*

**Rate Calculation**<br>Retrieves the base rate values for each room type and date, without considering pax details or availability constraints. This endpoint provides raw rate data and does not account for dynamic pricing or booking restrictions.<br><br>This call supports retrieving up to 14 days of availability per request. However, you may issue multiple calls in parallel, as long as they remain within the defined rate limits. (Refer to the rate limiting section of the documentation for details.)<br> <br>**Use Case**<br>Intended to be used for presenting in a calendar grid.<br> <br>**AgentID**<br>The agentId parameter in this call refers to the ID of an existing distribution channel the property is connected to.To retrieve a list of connected channels, use the GET /onlineAgents endpoint. Confirm with the client which channel should be used, then include that channel’s ID in the agentId field of this call.<br> <br>**RateID**<br>To determine the correct rateId for a given agent, use the GET /agents/{id}/rates endpoint.<br> <br>**Estimated Rates**<br>If the includeEstimatedRates parameter is set to true, the response will include an estimated rate value.<br>Note that this may differ from the final quote returned by a booking check. Estimated rates can be identified in the response by the flag estimatedRate: true.<br>(This property is only returned if includeEstimatedRates is set to true.)

> Body parameter

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

<h3 id="getavailabilityrategrid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeEstimatedRates|query|boolean|false|When set to true this option will return an estimated rate value, this value may not reflect the same value as the final quote check. Estimated rates can be identified in the response by the value 'estimatedRate: True'|
|body|body|[availabilityRateGridRequest](#schemaavailabilityrategridrequest)|true|Object to pass to retrieve availability rate grid request|

> Example responses

> 200 Response

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

<h3 id="getavailabilityrategrid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[availabilityRateGridResponse](#schemaavailabilityrategridresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRateGrid

<a id="opIdgetRateGrid"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/grid \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/grid HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/grid',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/rates/grid',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/rates/grid', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/grid', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/rates/grid");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/grid", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/grid`

*Retrieve a properties availability and rate information based on pax for an itinerary*

**Rate Calculation**<br>Returns rate values based on the specified pax. Does not validate that the provided agentId has access to the specified rates and room categories. Rates may vary depending on the number and type of pax, as well as the property's pricing rules. While the returned rates may be valid for the selected room category, they are not guaranteed to be bookable — for example, if the request does not satisfy minimum or maximum night stay requirements.<br> <br>**Use Case**<br>Intended to be used for an itinerary with specific stay dates.<br> <br>**AgentID**<br>The agentId parameter in this call refers to the ID of an existing distribution channel the property is connected to.To retrieve a list of connected channels, use the GET /onlineAgents endpoint. Confirm with the client which channel should be used, then include that channel’s ID in the agentId field of this call.<br> <br>**RateID**<br>To determine the correct rateId for a given agent, use the GET /agents/{id}/rates endpoint.<br> <br>**Estimated Rates**<br>If the includeEstimatedRates parameter is set to true, the response will include an estimated rate value.<br>Note that this may differ from the final quote returned by a booking check. Estimated rates can be identified in the response by the flag estimatedRate: true.<br>(This property is only returned if includeEstimatedRates is set to true.)<br><br>**Allotment Association ID**<br>Used to return availability for a Group, Travel Agent, or Wholesaler when combined with the ID of the corresponding allotment set in the Group Allotment ID field.

> Body parameter

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

<h3 id="getrategrid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rateGridRequest](#schemarategridrequest)|true|Object to pass to search for a list of rates|

> Example responses

> 200 Response

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

<h3 id="getrategrid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[availabilityRateGridResponse](#schemaavailabilityrategridresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRateGridQuick

<a id="opIdgetRateGridQuick"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/grid/quick \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/grid/quick HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/grid/quick',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/rates/grid/quick',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/rates/grid/quick', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/grid/quick', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/rates/grid/quick");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/grid/quick", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/grid/quick`

*Retrieve a properties availability and rate information based on pax for an itinerary. This call mirrors the RMS Quick Quote Screen.*

**Rate Calculation**<br>Returns rate values based on the specified pax. Validates that the provided agentId has access to the specified rates and room categories. Rates may vary depending on the number and type of pax, as well as the property's pricing rules. While the returned rates may be valid for the selected room category, they are not guaranteed to be bookable — for example, if the request does not satisfy minimum or maximum night stay requirements.<br> <br>**Use Case**<br>Intended to be used for an itinerary with specific stay dates.<br> <br>**AgentID**<br>The agentId parameter in this call refers to the ID of an existing distribution channel the property is connected to.To retrieve a list of connected channels, use the GET /onlineAgents endpoint. Confirm with the client which channel should be used, then include that channel’s ID in the agentId field of this call.<br> <br>**RateID**<br>To determine the correct rateId for a given agent, use the GET /agents/{id}/rates endpoint.<br> <br>**Estimated Rates**<br>If the includeEstimatedRates parameter is set to true, the response will include an estimated rate value.<br>Note that this may differ from the final quote returned by a booking check. Estimated rates can be identified in the response by the flag estimatedRate: true.<br>(This property is only returned if includeEstimatedRates is set to true.)<br><br>**Allotment Association ID**<br>Used to return availability for a Group, Travel Agent, or Wholesaler when combined with the ID of the corresponding allotment set in the Group Allotment ID field.

> Body parameter

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

<h3 id="getrategridquick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rateGridRequest](#schemarategridrequest)|true|Object to pass to search for a list of rates|

> Example responses

> 200 Response

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

<h3 id="getrategridquick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[availabilityRateGridResponse](#schemaavailabilityrategridresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAvilablilityGrid

<a id="opIdgetAvilablilityGrid"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/availabilityGrid \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/availabilityGrid HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 0,
  "dateFrom": "2019-08-24T14:15:22Z",
  "dateTo": "2019-08-24T14:15:22Z",
  "removeDirtyRoomsFromAvailabilityForToday": true,
  "roomStatistics": "ignore",
  "availabilityFilter": "house",
  "agentId": 0,
  "allotmentId": 0,
  "allotmentAssociationId": "NotSet"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availabilityGrid',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/availabilityGrid',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/availabilityGrid', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/availabilityGrid', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/availabilityGrid");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/availabilityGrid", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /availabilityGrid`

*Retrieve availability*

> Body parameter

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

<h3 id="getavilablilitygrid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[availabilityGridRequest](#schemaavailabilitygridrequest)|true|Object to pass to retrieve availability request|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getavilablilitygrid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getavilablilitygrid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[availabilityGridResponse](#schemaavailabilitygridresponse)]|false|none|[Used:<br>POST /availabilityGrid]|
|» categories|[[availabilityCategory](#schemaavailabilitycategory)]|false|none|[Not Used.]|
|»» availability|[[availabilityDate](#schemaavailabilitydate)]|false|none|[Not Used.]|
|»»» count|integer(int32)|false|none|none|
|»»» theDate|string(date)|false|none|none|
|»» id|integer(int32)|false|none|none|
|»» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAvilableAddOns

<a id="opIdgetAvilableAddOns"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/availableAddOns \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/availableAddOns HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "addOnTypeIds": [
    50,
    51
  ],
  "dateFrom": "2019-11-17 00:00:00",
  "dateTo": "2019-11-29 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availableAddOns',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/availableAddOns',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/availableAddOns', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/availableAddOns', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/availableAddOns");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/availableAddOns", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /availableAddOns`

*Retrieve a list of available add-ons for a given add-on Type for a defined date range*

> Body parameter

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

<h3 id="getavilableaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[addOnAvailabilityRequest](#schemaaddonavailabilityrequest)|true|Object to pass to retrieve availble addons|

> Example responses

> 200 Response

```json
[
  {
    "addOnType": "Car Park",
    "addOnTypeId": 2,
    "id": 50,
    "name": "Car Park"
  }
]
```

<h3 id="getavilableaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getavilableaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[addOnArea](#schemaaddonarea)]|false|none|[Used:<br>POST /availableAddOns]|
|» addOnType|string|false|none|none|
|» addOnTypeId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAvilableAreas

<a id="opIdgetAvilableAreas"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/availableAreas \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/availableAreas HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availableAreas',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/availableAreas',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/availableAreas', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/availableAreas', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/availableAreas");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/availableAreas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /availableAreas`

*Retrieve a list of available areas for a given category for a defined date range.*

If no available area is returned this will be due to no continuous area being available in the client's database. <br> <br> Please refer to the Knowledge article for more information: https://helpcentre.rmscloud.com/quote-reservation-troubleshoot/single-area-not-available-in-the-category

> Body parameter

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

<h3 id="getavilableareas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[availableAreaRequest](#schemaavailablearearequest)|true|Object to pass to retrieve availble areas|

> Example responses

> 200 Response

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

<h3 id="getavilableareas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation <br> <br> Please Note - The response body has a field called 'cleanstatus'. This reflects the areas clean status at the time of the call. It does not reflect the clean status for future dates|Inline|

<h3 id="getavilableareas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaLite](#schemaarealite)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /categories/{id}/areas]|
|» categoryId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAvailableFacilities

<a id="opIdgetAvailableFacilities"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/availableFacilities \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/availableFacilities HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availableFacilities',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/availableFacilities',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/availableFacilities', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/availableFacilities', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://restapi8.rmscloud.com/availableFacilities");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/availableFacilities", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /availableFacilities`

*Retrieve a list of available categories for a defined date*

This call allows you to retrieve up to 1 days availability per call, however you can pass multiple calls in parallel within the rate limit restrictions (see rate limiting section of documentation for more info on rate limits). <br> <br> The agent ID in the availabilityrategrid call refers to the ID of existing channels the property is connected too. <br> <br> You will need to use the 'GET/onlineAgents' call to retrieve the list of connected channels at the property, confirm with the client which one they would like to use, then use the ID for that channel in the 'agentId' field of the availabilityrategrid call.

> Body parameter

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

<h3 id="getavailablefacilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rateGridRequestFacility](#schemarategridrequestfacility)|true|Facility rate grid request|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getavailablefacilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getavailablefacilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateGridFacility](#schemarategridfacility)]|false|none|none|
|» timeIncrement|integer(int32)|false|none|none|
|» facilities|[[rateGridRateFacility](#schemarategridratefacility)]|false|none|none|
|»» rateId|integer(int32)|false|none|none|
|»» rateName|string|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» areas|[[rateGridItemFacilityArea](#schemarategriditemfacilityarea)]|false|none|none|
|»»» areaId|integer(int32)|false|none|none|
|»»» areaName|string|false|none|none|
|»»» availability|[[rateGridItemFacility](#schemarategriditemfacility)]|false|none|none|
|»»»» available|boolean|false|none|none|
|»»»» rate|number(currency)|false|none|none|
|»»»» dateFrom|string(date-time)|false|none|none|
|»»»» dateTo|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

