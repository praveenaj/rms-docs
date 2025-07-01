<h1 id="rms-rest-api-discounts">discounts</h1>

A Discount can be used to reduce the price of a Rate or Sundry by the predefined value.

<a href="https://helpcentre.rmscloud.com/setup-discounts/discount">Find out more</a>

## getDiscounts

<a id="opIdgetDiscounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/discounts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/discounts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/discounts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/discounts',
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

r = requests.get('https://restapi8.rmscloud.com/discounts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/discounts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/discounts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/discounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /discounts`

*Retrieve a list of active discounts*

<h3 id="getdiscounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|modelType|query|string|false|Only these fields will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "10% Discount"
  }
]
```

<h3 id="getdiscounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_3](#schemainline_response_200_3)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getDiscountValidationOptions

<a id="opIdgetDiscountValidationOptions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/discounts/{id}/validationOptions \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/discounts/{id}/validationOptions HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/discounts/{id}/validationOptions',
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

result = RestClient.get 'https://restapi8.rmscloud.com/discounts/{id}/validationOptions',
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

r = requests.get('https://restapi8.rmscloud.com/discounts/{id}/validationOptions', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/discounts/{id}/validationOptions', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/discounts/{id}/validationOptions");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/discounts/{id}/validationOptions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /discounts/{id}/validationOptions`

*Retrieve the validation options associated to a single discounts*

<h3 id="getdiscountvalidationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getdiscountvalidationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getdiscountvalidationoptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountValidation](#schemadiscountvalidation)]|false|none|none|
|» discountid|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» categoryIds|[integer]|false|none|These are the Category ID's these validation options apply to|
|» validationDates|[discountValidationSearchDates](#schemadiscountvalidationsearchdates)|false|none|none|
|»» propertyIds|[integer]|false|none|These are the property ID's these validation options apply to|
|»» rateIds|[integer]|false|none|none|
|»» reservationMadeFromDate|string(date-time)|false|none|none|
|»» reservationMadeToDate|string(date-time)|false|none|none|
|»» reservationMadePermanentFlag|boolean|false|none|none|
|»» reservationStayingFromDate|string(date-time)|false|none|none|
|»» reservationStayingToDate|string(date-time)|false|none|none|
|»» reservationStayingPermanentFlag|boolean|false|none|none|
|»» arrivingOnMonday|boolean|false|none|none|
|»» arrivingOnTuesday|boolean|false|none|none|
|»» arrivingOnWednesday|boolean|false|none|none|
|»» arrivingOnThursday|boolean|false|none|none|
|»» arrivingOnFriday|boolean|false|none|none|
|»» arrivingOnSaturday|boolean|false|none|none|
|»» arrivingOnSunday|boolean|false|none|none|
|»» applyingOnMonday|boolean|false|none|none|
|»» applyingOnTuesday|boolean|false|none|none|
|»» applyingOnWednesday|boolean|false|none|none|
|»» applyingOnThursday|boolean|false|none|none|
|»» applyingOnFriday|boolean|false|none|none|
|»» applyingOnSaturday|boolean|false|none|none|
|»» applyingOnSunday|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postDiscountValidationOptionsSearch

<a id="opIdpostDiscountValidationOptionsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/discounts/validationOptions/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/discounts/validationOptions/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/discounts/validationOptions/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/discounts/validationOptions/search',
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

r = requests.post('https://restapi8.rmscloud.com/discounts/validationOptions/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/discounts/validationOptions/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/discounts/validationOptions/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/discounts/validationOptions/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /discounts/validationOptions/search`

*Perform an advanced discount validation search*

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="postdiscountvalidationoptionssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[discountValidationSearch](#schemadiscountvalidationsearch)|true|Body to pass to look up a list of discount validation options|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postdiscountvalidationoptionssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements passed|Inline|

<h3 id="postdiscountvalidationoptionssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountValidation](#schemadiscountvalidation)]|false|none|none|
|» discountid|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» categoryIds|[integer]|false|none|These are the Category ID's these validation options apply to|
|» validationDates|[discountValidationSearchDates](#schemadiscountvalidationsearchdates)|false|none|none|
|»» propertyIds|[integer]|false|none|These are the property ID's these validation options apply to|
|»» rateIds|[integer]|false|none|none|
|»» reservationMadeFromDate|string(date-time)|false|none|none|
|»» reservationMadeToDate|string(date-time)|false|none|none|
|»» reservationMadePermanentFlag|boolean|false|none|none|
|»» reservationStayingFromDate|string(date-time)|false|none|none|
|»» reservationStayingToDate|string(date-time)|false|none|none|
|»» reservationStayingPermanentFlag|boolean|false|none|none|
|»» arrivingOnMonday|boolean|false|none|none|
|»» arrivingOnTuesday|boolean|false|none|none|
|»» arrivingOnWednesday|boolean|false|none|none|
|»» arrivingOnThursday|boolean|false|none|none|
|»» arrivingOnFriday|boolean|false|none|none|
|»» arrivingOnSaturday|boolean|false|none|none|
|»» arrivingOnSunday|boolean|false|none|none|
|»» applyingOnMonday|boolean|false|none|none|
|»» applyingOnTuesday|boolean|false|none|none|
|»» applyingOnWednesday|boolean|false|none|none|
|»» applyingOnThursday|boolean|false|none|none|
|»» applyingOnFriday|boolean|false|none|none|
|»» applyingOnSaturday|boolean|false|none|none|
|»» applyingOnSunday|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

