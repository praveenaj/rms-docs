<h1 id="rms-rest-api-companies">companies</h1>

A Company is a business that can be added and used in RMS for Reservations, Accounts Receivable and the Corporate Portal.

<a href="https://helpcentre.rmscloud.com/setup/setup-a-company">Find out more</a>

## getCompanies

<a id="opIdgetCompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies',
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

r = requests.get('https://restapi8.rmscloud.com/companies', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies`

*Retrieve a list of companies*

<h3 id="getcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|modifiedSince|query|string(date-time)|false|Limit results to records created or modified since this date (property local time)|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|

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
    "CompanyLite": false
  },
  {
    "CompanyBasic": false
  },
  {
    "CompanyFull": false
  }
]
```

<h3 id="getcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_2](#schemainline_response_200_2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateCompany

<a id="opIdupdateCompany"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/companies \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/companies HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies',
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

result = RestClient.put 'https://restapi8.rmscloud.com/companies',
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

r = requests.put('https://restapi8.rmscloud.com/companies', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies`

*Update an existing company*

> Body parameter

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

<h3 id="updatecompany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[companyBasic](#schemacompanybasic)|true|Company object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updatecompany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="updatecompany-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyBasic](#schemacompanybasic)]|false|none|[Used:<br>GET /companies<br>GET /companies/{id}<br>]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» acn|string|false|none|Australian Company Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» averageIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMaster|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» contact|string|false|none|none|
|» contactPosition|string|false|none|none|
|» countryid|integer(int32)|false|none|none|
|» creditHold|boolean|false|none|none|
|» creditLimit|number(decimal)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» notes|string|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» reservationTypeId|integer(int32)|false|none|none|
|» sendArToHeadOffice|string|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» totalIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addCompany

<a id="opIdaddCompany"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies',
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

r = requests.post('https://restapi8.rmscloud.com/companies', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies`

*Add a new company*

> Body parameter

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

<h3 id="addcompany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[companyBasic](#schemacompanybasic)|true|Company object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="addcompany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="addcompany-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyBasic](#schemacompanybasic)]|false|none|[Used:<br>GET /companies<br>GET /companies/{id}<br>]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» acn|string|false|none|Australian Company Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» averageIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMaster|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» contact|string|false|none|none|
|» contactPosition|string|false|none|none|
|» countryid|integer(int32)|false|none|none|
|» creditHold|boolean|false|none|none|
|» creditLimit|number(decimal)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» notes|string|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» reservationTypeId|integer(int32)|false|none|none|
|» sendArToHeadOffice|string|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» totalIncome|number(currency)|false|none|This field is informational, any changes made will not be honoured|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyRatesAssignments

<a id="opIdgetCompanyRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{companyId}/rates/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{companyId}/rates/assignments`

*Retrieve rates assigned to a company*

<h3 id="getcompanyratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|integer(int32)|true|The Id of the relevant company|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getcompanyratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="getcompanyratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companiesRatesAssignmentsFull](#schemacompaniesratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» rateName|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postCompanyRatesAssignments

<a id="opIdpostCompanyRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 7,
  "fromDate": "2024-08-02 00:00:00",
  "propertyId": 1,
  "rateId": 1,
  "toDate": "2024-12-02 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments',
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

r = requests.post('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{companyId}/rates/{rateId}/assignments`

*Assign rates to a company*

> Body parameter

```json
{
  "id": 7,
  "fromDate": "2024-08-02 00:00:00",
  "propertyId": 1,
  "rateId": 1,
  "toDate": "2024-12-02 00:00:00"
}
```

<h3 id="postcompanyratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|integer(int32)|true|The Id of the relevant company|
|rateId|path|integer(int32)|true|The Id of the rate|
|body|body|[ratesAssignmentsBasic](#schemaratesassignmentsbasic)|true|Assign rates for travelAgent, wholeSaler or Company|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postcompanyratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postcompanyratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companiesRatesAssignmentsFull](#schemacompaniesratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» rateName|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putCompanyRatesAssignments

<a id="opIdputCompanyRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 7,
  "fromDate": "2024-08-02 00:00:00",
  "propertyId": 1,
  "rateId": 1,
  "toDate": "2024-12-02 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}',
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

r = requests.put('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies/{companyId}/rates/{rateId}/assignments/{assignmentId}`

*Update a rate assignment for a company*

> Body parameter

```json
{
  "id": 7,
  "fromDate": "2024-08-02 00:00:00",
  "propertyId": 1,
  "rateId": 1,
  "toDate": "2024-12-02 00:00:00"
}
```

<h3 id="putcompanyratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|integer(int32)|true|The Id of the relevant company|
|rateId|path|integer(int32)|true|The Id of the rate|
|assignmentId|path|integer(int32)|true|The Id of the relevant rate assignment|
|body|body|[ratesAssignmentsBasic](#schemaratesassignmentsbasic)|true|Assign rates for travelAgent, wholeSaler or Company|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="putcompanyratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="putcompanyratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companiesRatesAssignmentsFull](#schemacompaniesratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» rateName|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteCompanyRatesAssignments

<a id="opIddeleteCompanyRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}',
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

r = requests.delete('https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/companies/{companyId}/rates/{rateId}/assignments/{assignmentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /companies/{companyId}/rates/{rateId}/assignments/{assignmentId}`

*Delete a rate assignment for a company*

<h3 id="deletecompanyratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|integer(int32)|true|The Id of the relevant company|
|rateId|path|integer(int32)|true|The Id of the rate|
|assignmentId|path|integer(int32)|true|The Id of the relevant rate assignment|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deletecompanyratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[successResult](#schemasuccessresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postCompanyAccountId

<a id="opIdpostCompanyAccountId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount?propertyId=0',
{
  method: 'POST',

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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount',
  params: {
  'propertyId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount', params={
  'propertyId': '0'
}, headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount?propertyId=0");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/{id}/createPropertyAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{id}/createPropertyAccount`

*If a Company has never charged back to their account id before at a particular property, it will not exist in RMS. This feature will allow you to create an account id for the specified Copmapny id at a specified property*

<h3 id="postcompanyaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "accountClass": "Guest",
    "id": 12345,
    "propertyId": 1
  }
]
```

<h3 id="postcompanyaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postcompanyaccountid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountBasic](#schemaaccountbasic)]|false|none|[Used:<br>GET /agents/{id}/accounts<br>POST /agents/{id}/createPropertyAccount<br>GET /companies/{id}/accounts<br>POST /companies/{id}/createPropertyAccount<br>GET /guests/{id}/accounts<br>POST /guests/{id}/createPropertyAccount]|
|» accountClass|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyGroupings

<a id="opIdgetCompanyGroupings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/grouping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/grouping',
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

r = requests.get('https://restapi8.rmscloud.com/companies/grouping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/grouping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/grouping`

*Retrieve a list of grouping available to companies*

<h3 id="getcompanygroupings-parameters">Parameters</h3>

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

<h3 id="getcompanygroupings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanygroupings-responseschema">Response Schema</h3>

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

## postCompanySearch

<a id="opIdpostCompanySearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/search',
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

r = requests.post('https://restapi8.rmscloud.com/companies/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/search`

*Perfrom an advanced search for companies*

> Body parameter

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

<h3 id="postcompanysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|
|modelType|query|string|false|Only these fields will be returned|
|body|body|[advancedSearchRequest](#schemaadvancedsearchrequest)|true|Search object that can be passed to return a search result|

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
]
```

<h3 id="postcompanysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postcompanysearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyFull](#schemacompanyfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» acn|string|false|none|Australian Company Number|
|» accountId|integer(int32)|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» averageIncome|number(currency)|false|none|none|
|» bookingSource|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» branch|string|false|none|none|
|» city|string|false|none|none|
|» cityMaster|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» competitorMaster|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» contact|string|false|none|none|
|» contactPosition|string|false|none|none|
|» country|string|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditHold|boolean|false|none|none|
|» creditLimit|number(decimal)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» hideRateFromCorrespondence|boolean|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» lastVisit|string(date-time)|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» sendARToHeadOffice|string|false|none|none|
|» state|string|false|none|none|
|» totalIncome|number(currency)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyById

<a id="opIdgetCompanyById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}`

*Retrieve a company's details*

<h3 id="getcompanybyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "CompanyLite": false
  },
  {
    "CompanyBasic": false
  },
  {
    "CompanyFull": false
  }
]
```

<h3 id="getcompanybyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_2](#schemainline_response_200_2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## patchCompanies

<a id="opIdpatchCompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/companies/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/companies/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/companies/{id}',
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

r = requests.patch('https://restapi8.rmscloud.com/companies/{id}', headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/companies/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/companies/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /companies/{id}`

*Update an existing company without the need to pass a whole object*

> Body parameter

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

<h3 id="patchcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[companyPatch](#schemacompanypatch)|false|Company Patch|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="patchcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="patchcompanies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyFull](#schemacompanyfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» acn|string|false|none|Australian Company Number|
|» accountId|integer(int32)|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» averageIncome|number(currency)|false|none|none|
|» bookingSource|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» branch|string|false|none|none|
|» city|string|false|none|none|
|» cityMaster|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» competitorMaster|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» contact|string|false|none|none|
|» contactPosition|string|false|none|none|
|» country|string|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditHold|boolean|false|none|none|
|» creditLimit|number(decimal)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» hideRateFromCorrespondence|boolean|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» lastVisit|string(date-time)|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» sendARToHeadOffice|string|false|none|none|
|» state|string|false|none|none|
|» totalIncome|number(currency)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyAccounts

<a id="opIdgetCompanyAccounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id}/accounts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id}/accounts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/accounts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}/accounts',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}/accounts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}/accounts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/accounts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}/accounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/accounts`

*Retrieve an AccountId associated with A Company*

<h3 id="getcompanyaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "accountClass": "Guest",
    "id": 12345,
    "propertyId": 1
  }
]
```

<h3 id="getcompanyaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanyaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountBasic](#schemaaccountbasic)]|false|none|[Used:<br>GET /agents/{id}/accounts<br>POST /agents/{id}/createPropertyAccount<br>GET /companies/{id}/accounts<br>POST /companies/{id}/createPropertyAccount<br>GET /guests/{id}/accounts<br>POST /guests/{id}/createPropertyAccount]|
|» accountClass|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyAccountsReceivable

<a id="opIdgetCompanyAccountsReceivable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id}/accountsReceivable \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id}/accountsReceivable HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}/accountsReceivable',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}/accountsReceivable', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/accountsReceivable");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}/accountsReceivable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/accountsReceivable`

*Retrieve Accounts Receivable info associated with A Company*

<h3 id="getcompanyaccountsreceivable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "creditHold": true,
    "creditLimit": 0,
    "creditTerms": 0,
    "groupingId": 0,
    "id": 0,
    "propertyId": 0
  }
]
```

<h3 id="getcompanyaccountsreceivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanyaccountsreceivable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditHoldBasic](#schemacreditholdbasic)]|false|none|[Used:<br>GET /companies/{id}/accountsReceivable<br>POST /companies/{id}/accountsReceivable<br>PUT /companies/{id}/accountsReceivable/{arId}<br>GET /travelAgents/{id}/accountsReceivable<br>POST /travelAgents/{id}/accountsReceivable<br>PUT /travelAgents/{id}/accountsReceivable/{arId}]|
|» creditHold|boolean|false|none|none|
|» creditLimit|number(currency)|false|none|none|
|» creditTerms|integer(int32)|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postCompanyAccountsReceivablearId

<a id="opIdpostCompanyAccountsReceivablearId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/{id}/accountsReceivable \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/{id}/accountsReceivable HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "creditHold": true,
  "creditLimit": 0,
  "creditTerms": 0,
  "groupingId": 0,
  "id": 0,
  "propertyId": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/{id}/accountsReceivable',
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

r = requests.post('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/{id}/accountsReceivable', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/accountsReceivable");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/{id}/accountsReceivable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{id}/accountsReceivable`

*Create Accounts Receivable info associated with A Company*

> Body parameter

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

<h3 id="postcompanyaccountsreceivablearid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[creditHoldBasic](#schemacreditholdbasic)|true|Function to create an credit Hold record.|

> Example responses

> 200 Response

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

<h3 id="postcompanyaccountsreceivablearid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[creditHoldBasic](#schemacreditholdbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putCompanyAccountsReceivable

<a id="opIdputCompanyAccountsReceivable"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "creditHold": true,
  "creditLimit": 0,
  "creditTerms": 0,
  "groupingId": 0,
  "id": 0,
  "propertyId": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}',
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

r = requests.put('https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/companies/{id}/accountsReceivable/{arId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies/{id}/accountsReceivable/{arId}`

*Update Accounts Receivable info associated with A Company*

> Body parameter

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

<h3 id="putcompanyaccountsreceivable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|arId|path|integer(int32)|true|The Id of the Accounts Receivable Record|
|body|body|[creditHoldBasic](#schemacreditholdbasic)|true|Function to create an credit Hold record.|

> Example responses

> 200 Response

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

<h3 id="putcompanyaccountsreceivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[creditHoldBasic](#schemacreditholdbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyContacts

<a id="opIdgetCompanyContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id}/contacts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/contacts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}/contacts',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}/contacts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/contacts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/contacts`

*Retrieve a company's contacts*

<h3 id="getcompanycontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getcompanycontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanycontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateCompanyContacts

<a id="opIdupdateCompanyContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/companies/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/companies/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/contacts',
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

result = RestClient.put 'https://restapi8.rmscloud.com/companies/{id}/contacts',
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

r = requests.put('https://restapi8.rmscloud.com/companies/{id}/contacts', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/companies/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/contacts");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/companies/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies/{id}/contacts`

*Update a company's contacts*

> Body parameter

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

<h3 id="updatecompanycontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[contact](#schemacontact)|true|Contact object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="updatecompanycontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatecompanycontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addCompanyContacts

<a id="opIdaddCompanyContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/contacts',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/{id}/contacts',
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

r = requests.post('https://restapi8.rmscloud.com/companies/{id}/contacts', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/contacts");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{id}/contacts`

*Create a company's contact*

> Body parameter

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

<h3 id="addcompanycontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[contact](#schemacontact)|true|Contact object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="addcompanycontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="addcompanycontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyNotes

<a id="opIdgetCompanyNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id}/notes \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id}/notes HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/notes',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}/notes',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}/notes', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}/notes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/notes");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}/notes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/notes`

*Retrieve a company's notes*

<h3 id="getcompanynotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 12,
    "propertyId": 1,
    "note": "Do not give suites to employees",
    "billingNote": "500 DLLS MAX. Maybe?"
  }
]
```

<h3 id="getcompanynotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanynotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[notesResponse](#schemanotesresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» billingNote|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postCompanyNotes

<a id="opIdpostCompanyNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/companies/{id}/notes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/companies/{id}/notes HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/notes',
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

result = RestClient.post 'https://restapi8.rmscloud.com/companies/{id}/notes',
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

r = requests.post('https://restapi8.rmscloud.com/companies/{id}/notes', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/companies/{id}/notes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/notes");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/companies/{id}/notes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /companies/{id}/notes`

*Add company notes*

> Body parameter

```json
{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}
```

<h3 id="postcompanynotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[notes](#schemanotes)|true|Company Notes|

> Example responses

> 200 Response

```json
[
  {
    "id": 12,
    "propertyId": 1,
    "note": "Do not give suites to employees",
    "billingNote": "500 DLLS MAX. Maybe?"
  }
]
```

<h3 id="postcompanynotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postcompanynotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[notesResponse](#schemanotesresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» billingNote|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateCompanyNotes

<a id="opIdupdateCompanyNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/companies/{id}/notes/{noteId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/companies/{id}/notes/{noteId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}',
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

r = requests.put('https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/companies/{id}/notes/{noteId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /companies/{id}/notes/{noteId}`

*Update a company's note*

> Body parameter

```json
{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}
```

<h3 id="updatecompanynotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|noteId|path|integer|true|The ID of the note|
|body|body|[notes](#schemanotes)|true|Company Notes|

> Example responses

> 200 Response

```json
[
  {
    "id": 12,
    "propertyId": 1,
    "note": "Do not give suites to employees",
    "billingNote": "500 DLLS MAX. Maybe?"
  }
]
```

<h3 id="updatecompanynotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatecompanynotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[notesResponse](#schemanotesresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» billingNote|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCompanyRates

<a id="opIdgetCompanyRates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/companies/{id}/rates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/companies/{id}/rates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/companies/{id}/rates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/companies/{id}/rates',
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

r = requests.get('https://restapi8.rmscloud.com/companies/{id}/rates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/companies/{id}/rates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/companies/{id}/rates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/companies/{id}/rates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /companies/{id}/rates`

*Retrieve a company's rates*

<h3 id="getcompanyrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "fromDate": "2023-05-31 00:00:00",
    "id": 1416,
    "name": "Testing Rate",
    "propertyId": 1,
    "toDate": "2023-08-31 00:00:00"
  }
]
```

<h3 id="getcompanyrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcompanyrates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[chargeTypeLite](#schemachargetypelite)]|false|none|[Used:<br>GET /companies/{id}/rates<br>]|
|» fromDate|string(date-time)|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» toDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

