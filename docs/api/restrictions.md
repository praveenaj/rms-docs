<h1 id="rms-rest-api-restrictions">restrictions</h1>

restrictions are rules that can be applied to Rates at various levels the way rates work

<a href="https://helpcentre.rmscloud.com/control-panel-restrictions/control-panel-restrictions">Find out more</a>

## postRestrictions

<a id="opIdpostRestrictions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/restrictions \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/restrictions HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '[
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
]';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/restrictions',
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

result = RestClient.post 'https://restapi8.rmscloud.com/restrictions',
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

r = requests.post('https://restapi8.rmscloud.com/restrictions', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/restrictions', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/restrictions");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/restrictions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /restrictions`

*Add restrictions*

> Body parameter

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

<h3 id="postrestrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[restrictionsPost](#schemarestrictionspost)|true|Object to add restrictions|

<h3 id="postrestrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postRestrictionsSearch

<a id="opIdpostRestrictionsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/restrictions/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/restrictions/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/restrictions/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/restrictions/search',
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

r = requests.post('https://restapi8.rmscloud.com/restrictions/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/restrictions/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/restrictions/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/restrictions/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /restrictions/search`

*Perform an advanced restrictions search*

> Body parameter

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

<h3 id="postrestrictionssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[restrictionSearch](#schemarestrictionsearch)|true|Search object to search for restrictions|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postrestrictionssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements passed|Inline|

<h3 id="postrestrictionssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[restriction](#schemarestriction)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryid|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» minimumOccupancyLevelInPercentage|integer(int32)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» setPermanently|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

