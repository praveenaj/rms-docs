<h1 id="rms-rest-api-audit-trail">audit trail</h1>

The RMS Audit Trail details changes made to a reservation.

<a href="https://helpcentre.rmscloud.com/reservation-screen/reservation-audit-trail">Find out more</a>

## getReservationsAuditTrails

<a id="opIdgetReservationsAuditTrails"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/auditTrail/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/auditTrail/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/auditTrail/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/auditTrail/search',
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

r = requests.post('https://restapi8.rmscloud.com/auditTrail/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/auditTrail/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/auditTrail/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/auditTrail/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auditTrail/search`

*Retrieve Reservation audit information*

> Body parameter

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

<h3 id="getreservationsaudittrails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[auditTrailSearch](#schemaaudittrailsearch)|true|Function to search a list of reservations audit trails|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getreservationsaudittrails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationsaudittrails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[auditTrailBasic](#schemaaudittrailbasic)]|false|none|[Used:<br>POST /auditTrail/search<br>POST /auditTrail/rates/search]|
|» createdDate|string(date-time)|false|none|none|
|» entityId|string|false|none|none|
|» fieldModified|string|false|none|none|
|» fieldModifiedId|integer(int32)|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» holdId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» newValue|string|false|none|none|
|» oldValue|string|false|none|none|
|» reason|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» username|string|false|none|none|
|» view|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAuditTrailsForRates

<a id="opIdgetAuditTrailsForRates"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/auditTrail/rates/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/auditTrail/rates/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "auditTrailIdFrom": 1610828,
  "auditTrailIdTo": 1610828,
  "dateFrom": "2023-03-13 00:00:00",
  "dateTo": "2023-03-14 00:00:00",
  "rateIds": [
    2490
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/auditTrail/rates/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/auditTrail/rates/search',
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

r = requests.post('https://restapi8.rmscloud.com/auditTrail/rates/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/auditTrail/rates/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/auditTrail/rates/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/auditTrail/rates/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auditTrail/rates/search`

*Retrieve Rates audit information*

> Body parameter

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

<h3 id="getaudittrailsforrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[auditTrailRateSearch](#schemaaudittrailratesearch)|true|Function to search a list of Rate audit trails|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getaudittrailsforrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getaudittrailsforrates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[auditTrailBasic](#schemaaudittrailbasic)]|false|none|[Used:<br>POST /auditTrail/search<br>POST /auditTrail/rates/search]|
|» createdDate|string(date-time)|false|none|none|
|» entityId|string|false|none|none|
|» fieldModified|string|false|none|none|
|» fieldModifiedId|integer(int32)|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» holdId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» newValue|string|false|none|none|
|» oldValue|string|false|none|none|
|» reason|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» username|string|false|none|none|
|» view|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

