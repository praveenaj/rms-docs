<h1 id="rms-rest-api-rates">rates</h1>

Rates determine the pricing used on a reservation and can be setup to calculate based on a variety of factors including day of the week, number of guests or length of stay. <br><br>Additional rate options include dynamic pricing adjustments based on occupancy and time, packages, additional guests and derived rates.

<a href="https://helpcentre.rmscloud.com/rate-setup/rates-overview">Find out more</a>

## getRateTypes

<a id="opIdgetRateTypes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates`

*Retrieve a list of rates*

<h3 id="getratetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "ratesLite": false
  },
  {
    "ratesFull": false
  }
]
```

<h3 id="getratetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_8](#schemainline_response_200_8)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## post__rates_configurations_search

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/configurations/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/configurations/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "rateIds": [],
  "propertyIds": [
    1,
    3
  ],
  "agentId": 2673
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/configurations/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/configurations/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/configurations/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/configurations/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/configurations/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/configurations/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/configurations/search`

*Retrieve Rate Type Configuration*

rateId or agentId will be required. If only the agentId is supplied the response will include assigned rate types for the specified agentId.

> Body parameter

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

<h3 id="post__rates_configurations_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ratesConfigurationsSearch](#schemaratesconfigurationssearch)|true|Retrieve Rate Type Configuration|

> Example responses

> 200 Response

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

<h3 id="post__rates_configurations_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ratesConfigurationsSearchResponse](#schemaratesconfigurationssearchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRateTypesById

<a id="opIdgetRateTypesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/{id}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates/{id}`

*Retrieve a rates information*

<h3 id="getratetypesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|modelType|query|string|false|Only these fields will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "ratesLite": false
  },
  {
    "ratesFull": false
  }
]
```

<h3 id="getratetypesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_8](#schemainline_response_200_8)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRateElements

<a id="opIdgetRateElements"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rateElements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rateElements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rateElements',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rateElements',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rateElements', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rateElements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rateElements");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rateElements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rateElements`

*Retrieve a list of rate elements*

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "code": "RE1",
    "description": "Rate Element 1"
  }
]
```

<h3 id="getrateelements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_9](#schemainline_response_200_9)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRatesGrouping

<a id="opIdgetRatesGrouping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/grouping',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates/grouping',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates/grouping', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/grouping");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates/grouping`

*Retrieve a list of grouping available to rates types*

<h3 id="getratesgrouping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="getratesgrouping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getratesgrouping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[grouping](#schemagrouping)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRatesTables

<a id="opIdgetRatesTables"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates/tables \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates/tables HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/tables',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates/tables',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates/tables', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates/tables', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/tables");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates/tables", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates/tables`

*Retrieve a list of rate tables*

<h3 id="getratestables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getratestables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getratestables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTable](#schemaratetable)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» basedOn|string|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» format|string|false|none|none|
|» inactive|boolean|false|none|none|
|» minimumChargePerPeriod|integer(currency)|false|none|none|
|» personBase|integer(int32)|false|none|none|
|» mondayRate|integer(currency)|false|none|none|
|» tuesdayRate|integer(currency)|false|none|none|
|» wednesdayRate|integer(currency)|false|none|none|
|» thursdayRate|integer(currency)|false|none|none|
|» fridayRate|integer(currency)|false|none|none|
|» saturdayRate|integer(currency)|false|none|none|
|» sundayRate|integer(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postSearchRatesTables

<a id="opIdpostSearchRatesTables"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/tables/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/tables/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    1,
    15,
    2
  ],
  "inactive": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/tables/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/tables/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/tables/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/tables/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/tables/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/tables/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/tables/search`

*Retrieve a list of rate tables*

> Body parameter

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

<h3 id="postsearchratestables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[rateTablesSearch](#schemaratetablessearch)|true|Object to pass to search for a list of rate tables|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postsearchratestables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postsearchratestables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTable](#schemaratetable)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» basedOn|string|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» format|string|false|none|none|
|» inactive|boolean|false|none|none|
|» minimumChargePerPeriod|integer(currency)|false|none|none|
|» personBase|integer(int32)|false|none|none|
|» mondayRate|integer(currency)|false|none|none|
|» tuesdayRate|integer(currency)|false|none|none|
|» wednesdayRate|integer(currency)|false|none|none|
|» thursdayRate|integer(currency)|false|none|none|
|» fridayRate|integer(currency)|false|none|none|
|» saturdayRate|integer(currency)|false|none|none|
|» sundayRate|integer(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## post__rates_additionals_search

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/additionals/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/additionals/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "tableIds": [
    1,
    15,
    2
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/additionals/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/additionals/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/additionals/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/additionals/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/additionals/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/additionals/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/additionals/search`

*Retrieve a list of rate lookups*

Due to the nature of this call there are three posible responsese depending on the configuration of the additionas against the rate in RMS.

> Body parameter

```json
{
  "tableIds": [
    1,
    15,
    2
  ]
}
```

<h3 id="post__rates_additionals_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rateTablesAdditionalsSearch](#schemaratetablesadditionalssearch)|true|Object to pass to search for a list of rate tables additonasl|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="post__rates_additionals_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="post__rates_additionals_search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTableAddtionals](#schemaratetableaddtionals)]|false|none|none|
|» tableId|integer|false|none|none|
|» inactive|boolean|false|none|none|
|» adults|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|»» base|integer|false|none|none|
|»» glAccountCodeId|integer|false|none|none|
|»» includeInBase|boolean|false|none|none|
|»» minimumNumberAllowed|integer|false|none|none|
|»» maximumNumberAllowed|integer|false|none|none|
|»» nightly|[rateTableAddtionals_adults_nightly](#schemaratetableaddtionals_adults_nightly)|false|none|none|
|»»» first|number(float)|false|none|none|
|»»» second|number(float)|false|none|none|
|»»» third|number(float)|false|none|none|
|»»» fourth|number(float)|false|none|none|
|»»» thereafter|number(float)|false|none|none|
|»» showOnAccount|boolean|false|none|none|
|» children|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» infants|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge1|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge2|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge3|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge4|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge5|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge6|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|
|» rateCharge7|[rateTableAddtionals_adults](#schemaratetableaddtionals_adults)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRatesPackagesSearch

<a id="opIdgetRatesPackagesSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/packages/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/packages/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/packages/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/packages/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/packages/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/packages/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/packages/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/packages/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/packages/search`

*Retrieve a list of rate packages*

> Body parameter

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

<h3 id="getratespackagessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ratePackagesSearch](#schemaratepackagessearch)|true|Object to pass to search for a list of rate tables packages|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getratespackagessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getratespackagessearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateTablePackage](#schemaratetablepackage)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» applyCharge|string|false|none|none|
|» applyChargeOnTheDate|integer(int32)|false|none|none|
|» applyChargeOnTheDay|string|false|none|none|
|» makePackageInclusive|boolean|false|none|This will include the packaged amount as part of the rate without increasing the overall price|
|» percentageOfRate|[[rateTablePackagePercentageOfRate](#schemaratetablepackagepercentageofrate)]|false|none|none|
|»» percentageOfRate|integer(decimal)|false|none|Calculate a Percentage of the Nightly Rate Less any Discount|
|»» rateFrom|integer(currency)|false|none|none|
|»» rateTo|integer(currency)|false|none|none|
|»» useIfRateFallsBetween|boolean|false|none|none|
|» perPeriodFee|[[rateTablePackagePerPeriodFee](#schemaratetablepackageperperiodfee)]|false|none|none|
|»» amount|integer(currency)|false|none|none|
|»» quantity|integer(int32)|false|none|none|
|»» unitPrice|integer(currency)|false|none|none|
|»» useAmountFromSundry|boolean|false|none|none|
|» perPersonFee|[[rateTablePackagePerPersonFee](#schemaratetablepackageperpersonfee)]|false|none|none|
|»» additionalRateCharge1|integer(currency)|false|none|none|
|»» additionalRateCharge2|integer(currency)|false|none|none|
|»» additionalRateCharge3|integer(currency)|false|none|none|
|»» additionalRateCharge4|integer(currency)|false|none|none|
|»» additionalRateCharge5|integer(currency)|false|none|none|
|»» adults|integer(currency)|false|none|none|
|»» children|integer(currency)|false|none|none|
|»» infants|integer(currency)|false|none|none|
|»» minimumChargePerPeriod|integer(currency)|false|none|none|
|» postOnNextDay|boolean|false|none|none|
|» postToExtrasAccount|boolean|false|none|none|
|» propertyId|integer(int32)|false|none|This value will be returned if the package belongs to a property rate rule|
|» showOnAccount|boolean|false|none|none|
|» showOnHousekeepersReport|boolean|false|none|none|
|» showOnToDoChart|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» startingPeriod|string|false|none|none|
|» endingPeriod|string|false|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRatesPeriods

<a id="opIdgetRatesPeriods"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates/periods \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates/periods HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/periods',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates/periods',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates/periods', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates/periods', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/periods");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates/periods", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates/periods`

*Retrieve a list of rate periods*

<h3 id="getratesperiods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 123,
    "cancellationPolicyId": 2,
    "dateFrom": "2019-01-16 00:00:00",
    "dateTo": "2021-01-16 23:59:59",
    "descirption": "Extended",
    "minimumReservationPeriod": 0,
    "noDiscountAllowed": false
  }
]
```

<h3 id="getratesperiods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getratesperiods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ratePeriod](#schemarateperiod)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» descirption|string|false|none|none|
|» minimumReservationPeriod|integer(int32)|false|none|none|
|» noDiscountAllowed|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postSearchLookups

<a id="opIdpostSearchLookups"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/lookups/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/lookups/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/lookups/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/lookups/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/lookups/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/lookups/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/lookups/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/lookups/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/lookups/search`

*Retrieve a list of rate lookups*

> Body parameter

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

<h3 id="postsearchlookups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[rateLookupsRequest](#schemaratelookupsrequest)|true|Rate lookups Request|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postsearchlookups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postsearchlookups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rateLookups](#schemaratelookups)]|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» rateName|string|false|none|none|
|» periodId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» periodFrom|string(date-time)|false|none|none|
|» periodTo|string(date-time)|false|none|none|
|» periodDescription|string|false|none|none|
|» tableId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## post__rates_rateQuote

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/rateQuote \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/rateQuote HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/rateQuote',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/rateQuote',
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

r = requests.post('https://restapi8.rmscloud.com/rates/rateQuote', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/rateQuote', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/rateQuote");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/rateQuote", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/rateQuote`

*Retrieve a price quote for a reservation*

> Body parameter

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

<h3 id="post__rates_ratequote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[quoteRequest](#schemaquoterequest)|true|Rate quote Request|

> Example responses

> 200 Response

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

<h3 id="post__rates_ratequote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[quoteResponse](#schemaquoteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## post__rates_rateQuote_quick

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/rateQuote/quick \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/rateQuote/quick HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/rateQuote/quick',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/rateQuote/quick',
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

r = requests.post('https://restapi8.rmscloud.com/rates/rateQuote/quick', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/rateQuote/quick', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/rateQuote/quick");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/rateQuote/quick", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/rateQuote/quick`

*Retrieve a price quote for a reservation. This mirrors the RMS Quick Quote Screen.*

> Body parameter

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

<h3 id="post__rates_ratequote_quick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[quoteRequest](#schemaquoterequest)|true|Rate quote Request|

> Example responses

> 200 Response

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

<h3 id="post__rates_ratequote_quick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[quoteResponse](#schemaquoteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## post__rates_rateAdjustment

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/rateAdjustment \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/rateAdjustment HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/rateAdjustment',
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
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/rates/rateAdjustment',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/rates/rateAdjustment', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/rateAdjustment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/rateAdjustment");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/rateAdjustment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/rateAdjustment`

*Make an adjustment to a rates value and restriction in RMS*

> Body parameter

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

<h3 id="post__rates_rateadjustment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rateAdjustmentRequest](#schemarateadjustmentrequest)|true|Ability for a rates value and restriction to be updated|

<h3 id="post__rates_rateadjustment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertyRules

<a id="opIdgetPropertyRules"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}',
{
  method: 'GET',

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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.get 'https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rates/{id}/propertyRules/{propertyId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rates/{id}/propertyRules/{propertyId}`

*Retrieve Property Rate Rules*

<h3 id="getpropertyrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|propertyId|path|integer|true|The ID of the Property|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getpropertyrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertyrules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertyRules](#schemapropertyrules)]|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» longDescription|string|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» rateChargeDescription|string|false|none|none|
|» advancePurchaseNights|integer(int32)|false|none|none|
|» lastMinuteNights|integer(int32)|false|none|none|
|» arrivingOnMonday|boolean|false|none|none|
|» arrivingOnTuesday|boolean|false|none|none|
|» arrivingOnWednesday|boolean|false|none|none|
|» arrivingOnThursday|boolean|false|none|none|
|» arrivingOnFriday|boolean|false|none|none|
|» arrivingOnSaturday|boolean|false|none|none|
|» arrivingOnSunday|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postPropertyRules

<a id="opIdpostPropertyRules"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rates/propertyRules/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rates/propertyRules/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyIds": [
    1,
    4
  ],
  "rateIds": [
    1276,
    1281
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rates/propertyRules/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rates/propertyRules/search',
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

r = requests.post('https://restapi8.rmscloud.com/rates/propertyRules/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rates/propertyRules/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rates/propertyRules/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rates/propertyRules/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rates/propertyRules/search`

*Retrieve Property Rate Rules using advanced search*

> Body parameter

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

<h3 id="postpropertyrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[propertyRulesSearch](#schemapropertyrulessearch)|true|Body to pass perfom a search on Property Rate Rules|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postpropertyrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postpropertyrules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertyRules](#schemapropertyrules)]|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» longDescription|string|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» rateChargeDescription|string|false|none|none|
|» advancePurchaseNights|integer(int32)|false|none|none|
|» lastMinuteNights|integer(int32)|false|none|none|
|» arrivingOnMonday|boolean|false|none|none|
|» arrivingOnTuesday|boolean|false|none|none|
|» arrivingOnWednesday|boolean|false|none|none|
|» arrivingOnThursday|boolean|false|none|none|
|» arrivingOnFriday|boolean|false|none|none|
|» arrivingOnSaturday|boolean|false|none|none|
|» arrivingOnSunday|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

