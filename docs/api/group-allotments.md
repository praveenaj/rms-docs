<h1 id="rms-rest-api-group-allotments">group allotments</h1>

Group Allotments are blocks of inventory with set rates that can be used by event parties, groups or companies.<br><br> Group Allotments enable individual reservations created by guests attending an event or part of a self-paying tour to access reserved inventory and selected Rate Types. <br><br> Group Allotments can also be used to reserve or guarantee inventory to a regular Tour Group, Company or Travel Agent.

<a href="https://helpcentre.rmscloud.com/group-allotments/create-group-allotments">Find out more</a>

## getGroupAllotments

<a id="opIdgetGroupAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments`

*Retrieve a list of group allotments*

Due to agents being associated with multiple properties operating in different time zones, the modified dates for these records will be returned in UTC

<h3 id="getgroupallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|modifiedSince|query|string(date-time)|false|Limit results to records created or modified since this date (property local time)|
|departureDate|query|string(date-time)|false|Limit results to records departed since this date (property local time)|

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
    "groupAllotmentsLite": false
  },
  {
    "groupAllotmentsBasic": false
  }
]
```

<h3 id="getgroupallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_5](#schemainline_response_200_5)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGroupAllotments

<a id="opIdupdateGroupAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/groupAllotments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/groupAllotments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/groupAllotments',
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

r = requests.put('https://restapi8.rmscloud.com/groupAllotments', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/groupAllotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/groupAllotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /groupAllotments`

*Update an existing group allotment*

> Body parameter

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

<h3 id="updategroupallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[groupAllotmentsBasic](#schemagroupallotmentsbasic)|true|Group Allotment object to be added or updated|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updategroupallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updategroupallotments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsBasic](#schemagroupallotmentsbasic)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGroupAllotments

<a id="opIdaddGroupAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments`

*Add a new group allotment*

> Body parameter

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

<h3 id="addgroupallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[groupAllotmentsBasic](#schemagroupallotmentsbasic)|true|Group Allotment object to be added or updated|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="addgroupallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addgroupallotments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsBasic](#schemagroupallotmentsbasic)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsById

<a id="opIdgetGroupAllotmentsById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}`

*Retrieve a specific group allotment by Id*

<h3 id="getgroupallotmentsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
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
    "groupAllotmentsLite": false
  },
  {
    "groupAllotmentsBasic": false
  }
]
```

<h3 id="getgroupallotmentsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_5](#schemainline_response_200_5)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsIdAllotments

<a id="opIdgetGroupAllotmentsIdAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/allotments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/allotments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/allotments',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/allotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/allotments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/allotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/allotments`

*Retrieve a list of group allotments; allotments by Id*

<h3 id="getgroupallotmentsidallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getgroupallotmentsidallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getgroupallotmentsidallotments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## createAnAllotment

<a id="opIdcreateAnAllotment"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/allotments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/allotments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/allotments',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/allotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/allotments");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/allotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/allotments`

*create an allotment against an existing group allotment*

> Body parameter

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

<h3 id="createanallotment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[groupAllotmentDetails](#schemagroupallotmentdetails)|true|Category Allotment object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="createanallotment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="createanallotment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentDetails](#schemagroupallotmentdetails)]|false|none|[Used:<br>POST /groupAllotments/{id}/allotments]|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategory](#schemagroupallotmentcategory)]|false|none|[Used:<br>POST /groupAllotments/{id}/allotments]|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» name|string|true|none|none|
|» toDate|string(date-time)|false|none|none|
|» rateId|integer(int32)|true|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseMethod|string|false|none|none|
|» setPermanently|boolean|false|none|If this is set to true the date from and to values will be ignored and this allotment will exist forever|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseMethod|daysBefore|
|releaseMethod|specificDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGroupAllotmentsAllotments

<a id="opIdupdateGroupAllotmentsAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allotment": 2,
  "allotmentId": 7564,
  "categoryId": 4,
  "fromDate": "20-07-2020",
  "toDate": "20-08-2020",
  "propertyId": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}',
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

r = requests.put('https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/groupAllotments/{id}/allotments/{allotmentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /groupAllotments/{id}/allotments/{allotmentId}`

*You can use this call to update an existing group allotment. The category allotment method cannot be used to change the category. It can only be used to adjust dates and the number allotted.*

> Body parameter

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

<h3 id="updategroupallotmentsallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|allotmentId|path|integer(int32)|true|The Id of the relevant Allotment|
|body|body|[groupAllotmentCategoryAllotmentUpdates](#schemagroupallotmentcategoryallotmentupdates)|true|Allotment object for Updates|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updategroupallotmentsallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updategroupallotmentsallotments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGroupAllotmentsAllotment

<a id="opIdupdateGroupAllotmentsAllotment"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}',
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

r = requests.put('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /groupAllotments/{id}/groupOptions/{groupOptionId}`

*You can use this call to update an existing group allotment. The category allotment method cannot be used to change the category. It can only be used to adjust dates and the number allotted.*

> Body parameter

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

<h3 id="updategroupallotmentsallotment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentOptionPatch](#schemagroupallotmentoptionpatch)|true|Group Allotment Option object that can be passed to update specified fields|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updategroupallotmentsallotment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updategroupallotmentsallotment-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGroupAllotmentsAllotmentOptions

<a id="opIdupdateGroupAllotmentsAllotmentOptions"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}',
{
  method: 'PATCH',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}',
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

r = requests.patch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}', headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /groupAllotments/{id}/groupOptions/{groupOptionId}`

*You can use this call to update an existing group allotment options.<>*

> Body parameter

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

<h3 id="updategroupallotmentsallotmentoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentOptionPatch](#schemagroupallotmentoptionpatch)|true|Group Allotment Option object that can be passed to update specified fields|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updategroupallotmentsallotmentoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updategroupallotmentsallotmentoptions-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## CreateGroupAllotmentsAllotments

<a id="opIdCreateGroupAllotmentsAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allotment": 0,
  "categoryId": 4,
  "fromDate": "20-07-2020",
  "toDate": "20-08-2020"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/allotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/groupOptions/{groupOptionId}/allotments`

*You can use this call to create a single allotment against a group allotment.*

> Body parameter

```json
{
  "allotment": 0,
  "categoryId": 4,
  "fromDate": "20-07-2020",
  "toDate": "20-08-2020"
}
```

<h3 id="creategroupallotmentsallotments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentCategoryAllotmentCreation](#schemagroupallotmentcategoryallotmentcreation)|true|Allotment object for creation|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="creategroupallotmentsallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="creategroupallotmentsallotments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementsForAGroupAllotment

<a id="opIdgetRequirementsForAGroupAllotment"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/groupOptions/{groupOptionId}/requirements`

*get the requirement associated to a group allotment*

<h3 id="getrequirementsforagroupallotment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|

> Example responses

> 200 Response

```json
[
  {
    "amount": 15,
    "id": 66326,
    "masterRequirementId": 6119,
    "name": "Much Cheddar",
    "quantity": 1,
    "requiredDaily": false
  }
]
```

<h3 id="getrequirementsforagroupallotment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsforagroupallotment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentRequirementArray](#schemagroupallotmentrequirementarray)]|false|none|none|
|» amount|number(currency)|false|none|none|
|» id|integer(int32)|false|none|none|
|» masterRequirementId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## CreateGroupAllotmentsRequirement

<a id="opIdCreateGroupAllotmentsRequirement"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "amount": 0,
  "masterRequirementId": 51339,
  "name": "Super Soft Body Pillow",
  "quantity": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/groupOptions/{groupOptionId}/requirements`

*You can use this call to create a single requirement against a group allotment.*

> Body parameter

```json
{
  "amount": 0,
  "masterRequirementId": 51339,
  "name": "Super Soft Body Pillow",
  "quantity": 1
}
```

<h3 id="creategroupallotmentsrequirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentRequirementCreation](#schemagroupallotmentrequirementcreation)|true|Requirement object for creation|

> Example responses

> 200 Response

```json
[
  {
    "amount": 15,
    "id": 66326,
    "masterRequirementId": 6119,
    "name": "Much Cheddar",
    "quantity": 1,
    "requiredDaily": false
  }
]
```

<h3 id="creategroupallotmentsrequirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="creategroupallotmentsrequirement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentRequirement](#schemagroupallotmentrequirement)]|false|none|none|
|» amount|number(currency)|false|none|none|
|» id|integer(int32)|false|none|none|
|» masterRequirementId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeRequirementToGroupAllotment

<a id="opIdremoveRequirementToGroupAllotment"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId} \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId} HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}',
{
  method: 'DELETE',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.delete 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /groupAllotments/{id}/groupOptions/{groupOptionId}/requirements/{requirementId}`

*Remove a requirement from a group allotment*

<h3 id="removerequirementtogroupallotment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|requirementId|path|integer(int32)|true|The Id of the relevant requirement|

<h3 id="removerequirementtogroupallotment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsGroupOptionsRates

<a id="opIdgetGroupAllotmentsGroupOptionsRates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments`

*get the rates associated to a group allotment*

<h3 id="getgroupallotmentsgroupoptionsrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|

> Example responses

> 200 Response

```json
{
  "rateIds": [
    1416,
    1633
  ]
}
```

<h3 id="getgroupallotmentsgroupoptionsrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[groupAllotmentsGroupOptionsRates](#schemagroupallotmentsgroupoptionsrates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putGroupAllotmentsGroupOptionsRates

<a id="opIdputGroupAllotmentsGroupOptionsRates"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "rateIds": [
    1416,
    1633
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
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

r = requests.put('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments`

*update the rates associated to a group allotment*

> Body parameter

```json
{
  "rateIds": [
    1416,
    1633
  ]
}
```

<h3 id="putgroupallotmentsgroupoptionsrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentsGroupOptionsRates](#schemagroupallotmentsgroupoptionsrates)|true|Get a list of rates assigned to a groupAllotment|

> Example responses

> 200 Response

```json
{
  "rateIds": [
    1416,
    1633
  ]
}
```

<h3 id="putgroupallotmentsgroupoptionsrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[groupAllotmentsGroupOptionsRates](#schemagroupallotmentsgroupoptionsrates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteGroupAllotmentsGroupOptionsRates

<a id="opIddeleteGroupAllotmentsGroupOptionsRates"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "rateIds": [
    1416,
    1633
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
{
  method: 'DELETE',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments',
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

r = requests.delete('https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /groupAllotments/{id}/groupOptions/{groupOptionId}/rates/assignments`

*update the rates associated to a group allotment*

> Body parameter

```json
{
  "rateIds": [
    1416,
    1633
  ]
}
```

<h3 id="deletegroupallotmentsgroupoptionsrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|groupOptionId|path|integer(int32)|true|The Id of the relevant group option id|
|body|body|[groupAllotmentsGroupOptionsRates](#schemagroupallotmentsgroupoptionsrates)|true|Get a list of rates assigned to a groupAllotment|

> Example responses

> 200 Response

```json
{
  "rateIds": [
    1416,
    1633
  ]
}
```

<h3 id="deletegroupallotmentsgroupoptionsrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[groupAllotmentsGroupOptionsRates](#schemagroupallotmentsgroupoptionsrates)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postAllotmentsSearch

<a id="opIdpostAllotmentsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/allotments/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/allotments/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/allotments/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/allotments/search',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/allotments/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/allotments/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/allotments/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/allotments/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/allotments/search`

*Perfrom an advanced search for companies*

> Body parameter

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

<h3 id="postallotmentssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[allotmentSearch](#schemaallotmentsearch)|true|Function to search for an allotment|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postallotmentssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postallotmentssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentsAllotments](#schemagroupallotmentsallotments)]|false|none|none|
|» name|string|false|none|none|
|» availableFor|[string]|false|none|none|
|» categoryAllotment|[[groupAllotmentCategoryAllotment](#schemagroupallotmentcategoryallotment)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» allotment|integer(int32)|false|none|none|
|»» allotmentId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» categoryName|string|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|» daysBeforeRelease|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» doNotSellAboveAllotment|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupStatus|string|false|none|none|
|» guaranteed|boolean|false|none|If true this will detuct fron inventory|
|» rateId|integer(int32)|false|none|none|
|» releaseDate|string(date-time)|false|none|none|
|» releaseOptions|string|false|none|none|
|» setPermanently|boolean|false|none|If this to true the date from and to values will be ignored and this allotment will exist forever|
|» toDate|string(date-time)|false|none|none|
|» reportingADR|[integer]|false|none|none|
|» categoryId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupStatus|proposal|
|groupStatus|provisional|
|groupStatus|definite|
|releaseOptions|daysBeforeRelease|
|releaseOptions|releaseDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsIdCompanies

<a id="opIdgetGroupAllotmentsIdCompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/companies \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/companies HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/companies', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/companies");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/companies`

*Retrieve a list of allowed companies by group allotment Id*

<h3 id="getgroupallotmentsidcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 22,
    "name": "APT Group G1 11th & 12th Oct",
    "companyId": 44,
    "companyName": "Mians"
  }
]
```

<h3 id="getgroupallotmentsidcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getgroupallotmentsidcompanies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentCompanies](#schemagroupallotmentcompanies)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» companyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postGroupAllotmentsIdCompanies

<a id="opIdpostGroupAllotmentsIdCompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/companies \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/companies HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "companyIds": [
    4,
    12,
    15
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/companies', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/companies");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/companies`

*Add allowed companies to a group allotment*

> Body parameter

```json
{
  "companyIds": [
    4,
    12,
    15
  ]
}
```

<h3 id="postgroupallotmentsidcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[companyIds](#schemacompanyids)|true|Company id's|

> Example responses

> 200 Response

```json
[
  {
    "id": 22,
    "name": "APT Group G1 11th & 12th Oct",
    "companyId": 44,
    "companyName": "Mians"
  }
]
```

<h3 id="postgroupallotmentsidcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postgroupallotmentsidcompanies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentCompanies](#schemagroupallotmentcompanies)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» companyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteGroupAllotmentsIdCompanies

<a id="opIddeleteGroupAllotmentsIdCompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/companies \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/companies HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
{
  method: 'DELETE',

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

result = RestClient.delete 'https://restapi8.rmscloud.com/groupAllotments/{id}/companies',
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

r = requests.delete('https://restapi8.rmscloud.com/groupAllotments/{id}/companies', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/groupAllotments/{id}/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/companies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/groupAllotments/{id}/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /groupAllotments/{id}/companies`

*Add allowed companies to a group allotment*

<h3 id="deletegroupallotmentsidcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 22,
    "name": "APT Group G1 11th & 12th Oct",
    "companyId": 44,
    "companyName": "Mians"
  }
]
```

<h3 id="deletegroupallotmentsidcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="deletegroupallotmentsidcompanies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentCompanies](#schemagroupallotmentcompanies)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» companyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsIdTravelAgents

<a id="opIdgetGroupAllotmentsIdTravelAgents"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/travelAgents`

*Retrieve a list of allowed travel agents by group allotment Id*

<h3 id="getgroupallotmentsidtravelagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "travelAgentId": 0,
    "travelAgentName": "string"
  }
]
```

<h3 id="getgroupallotmentsidtravelagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getgroupallotmentsidtravelagents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentTravelAgents](#schemagroupallotmenttravelagents)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postGroupAllotmentsIdTravelAgents

<a id="opIdpostGroupAllotmentsIdTravelAgents"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "agentIds": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/travelAgents`

*Add a travel agent to a group allotment*

> Body parameter

```json
{
  "agentIds": [
    0
  ]
}
```

<h3 id="postgroupallotmentsidtravelagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[groupAllotmentAgentRequest](#schemagroupallotmentagentrequest)|false|Group Allotment travelAgent/wholeSaler to be added or updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "travelAgentId": 0,
    "travelAgentName": "string"
  }
]
```

<h3 id="postgroupallotmentsidtravelagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postgroupallotmentsidtravelagents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentTravelAgents](#schemagroupallotmenttravelagents)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteGroupAllotmentsIdTravelAgents

<a id="opIddeleteGroupAllotmentsIdTravelAgents"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "agentIds": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
{
  method: 'DELETE',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents',
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

r = requests.delete('https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/groupAllotments/{id}/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /groupAllotments/{id}/travelAgents`

*Delete a travel agent from a group allotment*

> Body parameter

```json
{
  "agentIds": [
    0
  ]
}
```

<h3 id="deletegroupallotmentsidtravelagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[groupAllotmentAgentRequest](#schemagroupallotmentagentrequest)|false|Group Allotment travelAgent/wholeSaler to be added or updated|

<h3 id="deletegroupallotmentsidtravelagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGroupAllotmentsIdWholesalers

<a id="opIdgetGroupAllotmentsIdWholesalers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
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

result = RestClient.get 'https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
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

r = requests.get('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /groupAllotments/{id}/wholesalers`

*Retrieve a list of allowed wholesalers by group allotment Id*

<h3 id="getgroupallotmentsidwholesalers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "wholesalerId": 0,
    "wholesalerName": "string"
  }
]
```

<h3 id="getgroupallotmentsidwholesalers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getgroupallotmentsidwholesalers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentWholesalers](#schemagroupallotmentwholesalers)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» wholesalerId|integer(int32)|false|none|none|
|» wholesalerName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postGroupAllotmentsIdWholesalers

<a id="opIdpostGroupAllotmentsIdWholesalers"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "agentIds": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
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

result = RestClient.post 'https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
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

r = requests.post('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /groupAllotments/{id}/wholesalers`

*Add a wholesaler to a group allotment*

> Body parameter

```json
{
  "agentIds": [
    0
  ]
}
```

<h3 id="postgroupallotmentsidwholesalers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[groupAllotmentAgentRequest](#schemagroupallotmentagentrequest)|false|Group Allotment travelAgent/wholeSaler to be added or updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "travelAgentId": 0,
    "travelAgentName": "string"
  }
]
```

<h3 id="postgroupallotmentsidwholesalers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postgroupallotmentsidwholesalers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[groupAllotmentTravelAgents](#schemagroupallotmenttravelagents)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteGroupAllotmentsIdWholesalers

<a id="opIddeleteGroupAllotmentsIdWholesalers"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "agentIds": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
{
  method: 'DELETE',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers',
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

r = requests.delete('https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/groupAllotments/{id}/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /groupAllotments/{id}/wholesalers`

*Delete a wholesaler from a group allotment*

> Body parameter

```json
{
  "agentIds": [
    0
  ]
}
```

<h3 id="deletegroupallotmentsidwholesalers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[groupAllotmentAgentRequest](#schemagroupallotmentagentrequest)|false|Group Allotment travelAgent/wholeSaler to be added or updated|

<h3 id="deletegroupallotmentsidwholesalers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

