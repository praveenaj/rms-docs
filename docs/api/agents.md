<h1 id="rms-rest-api-agents">agents</h1>

There are three different types of Agents; Online Agents, Travel Agents and Wholesalers. <br><br> <b>Online Travel Agents</b> are retail websites providing online booking services to customers. These retail websites can be manually managed by properties or connected directly with the RMS Channel Manager for automation. <br><br> <b>Travel Agents</b> and <b>Wholesalers</b> are a business that can be added and used in RMS for Reservations, Accounts Receivable and the Corporate Portal.

<a href="https://helpcentre.rmscloud.com/travel-agent-info">Find out more</a>

## postAgentSearch

<a id="opIdpostAgentSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/agents/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/agents/search HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/agents/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/agents/search',
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

r = requests.post('https://restapi8.rmscloud.com/agents/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/agents/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/agents/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /agents/search`

*Perform an advanced search for all agent types; Online Agents, Travel Agents, Wholesalers & Group Allotments*

<Due to agents being associated with multiple properties operating in different time zones, the modified dates for these records will be returned in UTC

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

<h3 id="postagentsearch-parameters">Parameters</h3>

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
]
```

<h3 id="postagentsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postagentsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentFull](#schemaagentfull)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» accountId|integer(int32)|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» agentType|string|false|none|none|
|» availableToFranchise|boolean|false|none|none|
|» billingNote|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» chargeBack|boolean|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» cityMasterName|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» competitorMasterName|string|false|none|none|
|» countryId|string|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditHold|boolean|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» franchiseId|integer(int32)|false|none|none|
|» glCodeID|integer(int32)|false|none|none|
|» iataNumber|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» inActive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» modifiedById|integer|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» name|string|false|none|none|
|» notes|string|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|agentType|travelAgent|
|agentType|onlineAgent|
|agentType|wholeSaler|
|agentType|groupAllotment|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAgentRatesAssignments

<a id="opIdgetAgentRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments',
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

r = requests.get('https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/agents/{agentId}/rates/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /agents/{agentId}/rates/assignments`

*Retrieve rates assigned to a travel agent or wholesaler*

<h3 id="getagentratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|integer(int32)|true|The Id of the relevant travelAgent or wholeSaler|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getagentratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="getagentratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[travelAgentsRatesAssignmentsFull](#schematravelagentsratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» travelAgentsId|integer(int32)|false|none|none|
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

## postAgentRatesAssignments

<a id="opIdpostAgentRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments',
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

result = RestClient.post 'https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments',
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

r = requests.post('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /agents/{agentId}/rates/{rateId}/assignments`

*Assign rates to a travel agent or wholesaler*

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

<h3 id="postagentratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|integer(int32)|true|The Id of the relevant travelAgent or wholeSaler|
|rateId|path|integer(int32)|true|The Id of the rate|
|body|body|[ratesAssignmentsBasic](#schemaratesassignmentsbasic)|true|Assign rates for travelAgent, wholeSaler or Company|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="postagentratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postagentratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[travelAgentsRatesAssignmentsFull](#schematravelagentsratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» travelAgentsId|integer(int32)|false|none|none|
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

## putAgentRatesAssignments

<a id="opIdputAgentRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId} HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}',
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

r = requests.put('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /agents/{agentId}/rates/{rateId}/assignments/{assignmentId}`

*Update a rate assignment for a travel agent or wholesaler*

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

<h3 id="putagentratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|integer(int32)|true|The Id of the relevant travelAgent or wholeSaler|
|rateId|path|integer(int32)|true|The Id of the rate|
|assignmentId|path|integer(int32)|true|The Id of the relevant rate assignment|
|body|body|[ratesAssignmentsBasic](#schemaratesassignmentsbasic)|true|Assign rates for travelAgent, wholeSaler or Company|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="putagentratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="putagentratesassignments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[travelAgentsRatesAssignmentsFull](#schematravelagentsratesassignmentsfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» travelAgentsId|integer(int32)|false|none|none|
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

## deleteAgentRatesAssignments

<a id="opIddeleteAgentRatesAssignments"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}',
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

r = requests.delete('https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/agents/{agentId}/rates/{rateId}/assignments/{assignmentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /agents/{agentId}/rates/{rateId}/assignments/{assignmentId}`

*Delete a rate assignment for a travel agent or wholesaler*

<h3 id="deleteagentratesassignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agentId|path|integer(int32)|true|The Id of the relevant travelAgent or wholeSaler|
|rateId|path|integer(int32)|true|The Id of the rate|
|assignmentId|path|integer(int32)|true|The Id of the relevant rate assignment|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deleteagentratesassignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[successResult](#schemasuccessresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAgentsAllotments

<a id="opIdgetAgentsAllotments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/agents/{id}/allotments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/agents/{id}/allotments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{id}/allotments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/agents/{id}/allotments',
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

r = requests.get('https://restapi8.rmscloud.com/agents/{id}/allotments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/agents/{id}/allotments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{id}/allotments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/agents/{id}/allotments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /agents/{id}/allotments`

*Retrieve a list of travel agent and wholesale allotments; by Id*

<h3 id="getagentsallotments-parameters">Parameters</h3>

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

<h3 id="getagentsallotments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[agentAllotments](#schemaagentallotments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAgentAccounts

<a id="opIdgetAgentAccounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/agents/{id}/accounts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/agents/{id}/accounts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{id}/accounts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/agents/{id}/accounts',
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

r = requests.get('https://restapi8.rmscloud.com/agents/{id}/accounts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/agents/{id}/accounts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{id}/accounts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/agents/{id}/accounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /agents/{id}/accounts`

*Retrieve a Online Agent, Travel Agent or Wholesaler Account id. This information is displayed at a property level*

<h3 id="getagentaccounts-parameters">Parameters</h3>

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

<h3 id="getagentaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getagentaccounts-responseschema">Response Schema</h3>

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

## getAgentsCommissions

<a id="opIdgetAgentsCommissions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/agents/{id}/commissions \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/agents/{id}/commissions HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{id}/commissions',
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

result = RestClient.get 'https://restapi8.rmscloud.com/agents/{id}/commissions',
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

r = requests.get('https://restapi8.rmscloud.com/agents/{id}/commissions', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/agents/{id}/commissions', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{id}/commissions");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/agents/{id}/commissions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /agents/{id}/commissions`

*Retrieve a travelAgent or WholeSalers commissions*

<h3 id="getagentscommissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

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

<h3 id="getagentscommissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[agentsIdCommissions](#schemaagentsidcommissions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postAgentAccountId

<a id="opIdpostAgentAccountId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount?propertyId=0',
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

result = RestClient.post 'https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount',
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

r = requests.post('https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount', params={
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
    $response = $client->request('POST','https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount?propertyId=0");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/agents/{id}/createPropertyAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /agents/{id}/createPropertyAccount`

*If an Agent has never charged back to their account id before at a particular property, it will not exist in RMS. This feature will allow you to create an account id for the specified Agent id at a specified property*

<h3 id="postagentaccountid-parameters">Parameters</h3>

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

<h3 id="postagentaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postagentaccountid-responseschema">Response Schema</h3>

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

## getAgentRatesById

<a id="opIdgetAgentRatesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/agents/{id}/rates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/agents/{id}/rates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/agents/{id}/rates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/agents/{id}/rates',
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

r = requests.get('https://restapi8.rmscloud.com/agents/{id}/rates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/agents/{id}/rates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/agents/{id}/rates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/agents/{id}/rates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /agents/{id}/rates`

*Retrieve a agent's rates*

<h3 id="getagentratesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="getagentratesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getagentratesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[travelAgentRateBasic](#schematravelagentratebasic)]|false|none|[Used:<br>GET /agents/{id}/rates<br>]|
|» countryId|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» rateName|string|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» town|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getOnlineAgents

<a id="opIdgetOnlineAgents"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/onlineAgents?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/onlineAgents?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/onlineAgents?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/onlineAgents',
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

r = requests.get('https://restapi8.rmscloud.com/onlineAgents', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/onlineAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/onlineAgents?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/onlineAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /onlineAgents`

*Retrieve a list of online agents*

<h3 id="getonlineagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|
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

<h3 id="getonlineagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_6](#schemainline_response_200_6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTravelAgents

<a id="opIdgetTravelAgents"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/travelAgents \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents',
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

result = RestClient.get 'https://restapi8.rmscloud.com/travelAgents',
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

r = requests.get('https://restapi8.rmscloud.com/travelAgents', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelAgents`

*Retrieve a list of travel agents*

Due to agents being associated with multiple properties operating in different time zones, the modified dates for these records will be returned in UTC

<h3 id="gettravelagents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|modifiedSince|query|string(date-time)|false|Limit results to records created or modified since this date (property local time)|

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

<h3 id="gettravelagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_6](#schemainline_response_200_6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateTravelAgent

<a id="opIdupdateTravelAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/travelAgents \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents',
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

result = RestClient.put 'https://restapi8.rmscloud.com/travelAgents',
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

r = requests.put('https://restapi8.rmscloud.com/travelAgents', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /travelAgents`

*Update an existing travel agent*

> Body parameter

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

<h3 id="updatetravelagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[agentBasic](#schemaagentbasic)|true|Function to create a travel agent or wholesaler|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updatetravelagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="updatetravelagent-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» iataNumber|string|false|none|none|
|» id|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTravelAgent

<a id="opIdaddTravelAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/travelAgents \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/travelAgents HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents',
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

result = RestClient.post 'https://restapi8.rmscloud.com/travelAgents',
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

r = requests.post('https://restapi8.rmscloud.com/travelAgents', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/travelAgents', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/travelAgents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelAgents`

*Add a new travel agent*

> Body parameter

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

<h3 id="addtravelagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[agentBasic](#schemaagentbasic)|true|Function to create a travel agent or wholesaler|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="addtravelagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="addtravelagent-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» iataNumber|string|false|none|none|
|» id|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTravelAgent

<a id="opIdgetTravelAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/travelAgents/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/travelAgents/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/travelAgents/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/travelAgents/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/travelAgents/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/travelAgents/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelAgents/{id}`

*Retrieve a single Travel Agent*

<h3 id="gettravelagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="gettravelagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettravelagent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» iataNumber|string|false|none|none|
|» id|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## patchTravelAgent

<a id="opIdpatchTravelAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/travelAgents/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/travelAgents/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents/{id}',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/travelAgents/{id}',
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

r = requests.patch('https://restapi8.rmscloud.com/travelAgents/{id}', headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/travelAgents/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/travelAgents/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /travelAgents/{id}`

*Update an existing Travel Agent or Wholesaler without the need to pass a whole object*

> Body parameter

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

<h3 id="patchtravelagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[agentFull](#schemaagentfull)|true|Function to patch travel agent or wholesaler data|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="patchtravelagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="patchtravelagent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentFull](#schemaagentfull)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» accountId|integer(int32)|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» agentType|string|false|none|none|
|» availableToFranchise|boolean|false|none|none|
|» billingNote|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» chargeBack|boolean|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» cityMasterName|string|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» competitorMasterName|string|false|none|none|
|» countryId|string|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditHold|boolean|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» franchiseId|integer(int32)|false|none|none|
|» glCodeID|integer(int32)|false|none|none|
|» iataNumber|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» inActive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» modifiedById|integer|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» name|string|false|none|none|
|» notes|string|false|none|none|
|» parentId|integer(int32)|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|agentType|travelAgent|
|agentType|onlineAgent|
|agentType|wholeSaler|
|agentType|groupAllotment|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAgentAccountsReceivable

<a id="opIdgetAgentAccountsReceivable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable',
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

result = RestClient.get 'https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable',
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

r = requests.get('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelAgents/{id}/accountsReceivable`

*Retrieve Accounts Receivable info associated with an Agent*

<h3 id="getagentaccountsreceivable-parameters">Parameters</h3>

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

<h3 id="getagentaccountsreceivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getagentaccountsreceivable-responseschema">Response Schema</h3>

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

## postAgentAccountsReceivablearId

<a id="opIdpostAgentAccountsReceivablearId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable',
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

result = RestClient.post 'https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable',
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

r = requests.post('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelAgents/{id}/accountsReceivable`

*Create Accounts Receivable info associated with an Agent*

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

<h3 id="postagentaccountsreceivablearid-parameters">Parameters</h3>

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

<h3 id="postagentaccountsreceivablearid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[creditHoldBasic](#schemacreditholdbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putAgentAccountsReceivable

<a id="opIdputAgentAccountsReceivable"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId} HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}',
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

r = requests.put('https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/travelAgents/{id}/accountsReceivable/{arId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /travelAgents/{id}/accountsReceivable/{arId}`

*Update Accounts Receivable info associated with an Agent*

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

<h3 id="putagentaccountsreceivable-parameters">Parameters</h3>

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

<h3 id="putagentaccountsreceivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[creditHoldBasic](#schemacreditholdbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTravelAgentContacts

<a id="opIdgetTravelAgentContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/travelAgents/{id}/contacts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/travelAgents/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

r = requests.get('https://restapi8.rmscloud.com/travelAgents/{id}/contacts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/travelAgents/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/contacts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/travelAgents/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelAgents/{id}/contacts`

*Retrieve a travel agents contacts*

<h3 id="gettravelagentcontacts-parameters">Parameters</h3>

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

<h3 id="gettravelagentcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettravelagentcontacts-responseschema">Response Schema</h3>

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

## updateTravelAgentContacts

<a id="opIdupdateTravelAgentContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/travelAgents/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/travelAgents/{id}/contacts HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

result = RestClient.put 'https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

r = requests.put('https://restapi8.rmscloud.com/travelAgents/{id}/contacts', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/travelAgents/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/contacts");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/travelAgents/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /travelAgents/{id}/contacts`

*Update a travel agents contacts*

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

<h3 id="updatetravelagentcontacts-parameters">Parameters</h3>

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

<h3 id="updatetravelagentcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatetravelagentcontacts-responseschema">Response Schema</h3>

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

## addTravelAgentContacts

<a id="opIdaddTravelAgentContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/travelAgents/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/travelAgents/{id}/contacts HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

result = RestClient.post 'https://restapi8.rmscloud.com/travelAgents/{id}/contacts',
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

r = requests.post('https://restapi8.rmscloud.com/travelAgents/{id}/contacts', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/travelAgents/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/contacts");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/travelAgents/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelAgents/{id}/contacts`

*Create a travel agent contact*

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

<h3 id="addtravelagentcontacts-parameters">Parameters</h3>

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

<h3 id="addtravelagentcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="addtravelagentcontacts-responseschema">Response Schema</h3>

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

## getTravelAgentNotes

<a id="opIdgetTravelAgentNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/travelAgents/{id}/notes \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/travelAgents/{id}/notes HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/notes',
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

result = RestClient.get 'https://restapi8.rmscloud.com/travelAgents/{id}/notes',
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

r = requests.get('https://restapi8.rmscloud.com/travelAgents/{id}/notes', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/travelAgents/{id}/notes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/notes");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/travelAgents/{id}/notes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /travelAgents/{id}/notes`

*Retrieve a Agent's notes*

<h3 id="gettravelagentnotes-parameters">Parameters</h3>

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

<h3 id="gettravelagentnotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettravelagentnotes-responseschema">Response Schema</h3>

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

## postTravelAgentNotes

<a id="opIdpostTravelAgentNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/travelAgents/{id}/notes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/travelAgents/{id}/notes HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/notes',
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

result = RestClient.post 'https://restapi8.rmscloud.com/travelAgents/{id}/notes',
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

r = requests.post('https://restapi8.rmscloud.com/travelAgents/{id}/notes', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/travelAgents/{id}/notes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/notes");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/travelAgents/{id}/notes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /travelAgents/{id}/notes`

*Add Agent notes*

> Body parameter

```json
{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}
```

<h3 id="posttravelagentnotes-parameters">Parameters</h3>

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

<h3 id="posttravelagentnotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="posttravelagentnotes-responseschema">Response Schema</h3>

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

## updateTravelAgentNotes

<a id="opIdupdateTravelAgentNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId} HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}',
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

r = requests.put('https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/travelAgents/{id}/notes/{noteId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /travelAgents/{id}/notes/{noteId}`

*Update a Travel Agent's note*

> Body parameter

```json
{
  "propertyId": 1,
  "note": "Do not give suites to employees"
}
```

<h3 id="updatetravelagentnotes-parameters">Parameters</h3>

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

<h3 id="updatetravelagentnotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatetravelagentnotes-responseschema">Response Schema</h3>

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

## getWholesalers

<a id="opIdgetWholesalers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/wholesalers \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/wholesalers',
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

result = RestClient.get 'https://restapi8.rmscloud.com/wholesalers',
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

r = requests.get('https://restapi8.rmscloud.com/wholesalers', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /wholesalers`

*Retrieve a list of wholesalers*

Due to agents being associated with multiple properties operating in different time zones, the modified dates for these records will be returned in UTC

<h3 id="getwholesalers-parameters">Parameters</h3>

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

<h3 id="getwholesalers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_6](#schemainline_response_200_6)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateWholesaler

<a id="opIdupdateWholesaler"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/wholesalers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/wholesalers',
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

result = RestClient.put 'https://restapi8.rmscloud.com/wholesalers',
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

r = requests.put('https://restapi8.rmscloud.com/wholesalers', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /wholesalers`

*Update an existing wholesaler*

> Body parameter

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

<h3 id="updatewholesaler-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[agentBasic](#schemaagentbasic)|true|Function to create a travel agent or wholesaler|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="updatewholesaler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="updatewholesaler-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» iataNumber|string|false|none|none|
|» id|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addWholesaler

<a id="opIdaddWholesaler"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/wholesalers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/wholesalers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/wholesalers',
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

result = RestClient.post 'https://restapi8.rmscloud.com/wholesalers',
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

r = requests.post('https://restapi8.rmscloud.com/wholesalers', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/wholesalers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/wholesalers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /wholesalers`

*Add a new wholesaler*

> Body parameter

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

<h3 id="addwholesaler-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[agentBasic](#schemaagentbasic)|true|Function to create a travel agent or wholesaler|

> Example responses

> 201 Response

```json
[
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
]
```

<h3 id="addwholesaler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|basic successful operation|Inline|

<h3 id="addwholesaler-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentBasic](#schemaagentbasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /onlineAgents<br>GET /travelAgents<br>GET /wholesalers<br>]|
|» abn|string|false|none|Australian Business Number|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» city|string|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» competitorMasterId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» email|string|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» iataNumber|string|false|none|none|
|» id|string|false|none|none|
|» inactive|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» industryMasterId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» phone|string|false|none|none|
|» postcode|string|false|none|none|
|» salesSource|string|false|none|none|
|» state|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» tradingAs|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getWholesalersContacts

<a id="opIdgetWholesalersContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/wholesalers/{id}/contacts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/wholesalers/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

r = requests.get('https://restapi8.rmscloud.com/wholesalers/{id}/contacts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/wholesalers/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers/{id}/contacts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/wholesalers/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /wholesalers/{id}/contacts`

*Retrieve a wholesalers contacts*

<h3 id="getwholesalerscontacts-parameters">Parameters</h3>

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

<h3 id="getwholesalerscontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getwholesalerscontacts-responseschema">Response Schema</h3>

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

## updateWholesalersContacts

<a id="opIdupdateWholesalersContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/wholesalers/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/wholesalers/{id}/contacts HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

result = RestClient.put 'https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

r = requests.put('https://restapi8.rmscloud.com/wholesalers/{id}/contacts', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/wholesalers/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers/{id}/contacts");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/wholesalers/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /wholesalers/{id}/contacts`

*Update a wholesaler contacts*

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

<h3 id="updatewholesalerscontacts-parameters">Parameters</h3>

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

<h3 id="updatewholesalerscontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatewholesalerscontacts-responseschema">Response Schema</h3>

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

## addWholesalersContacts

<a id="opIdaddWholesalersContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/wholesalers/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/wholesalers/{id}/contacts HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

result = RestClient.post 'https://restapi8.rmscloud.com/wholesalers/{id}/contacts',
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

r = requests.post('https://restapi8.rmscloud.com/wholesalers/{id}/contacts', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/wholesalers/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/wholesalers/{id}/contacts");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/wholesalers/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /wholesalers/{id}/contacts`

*Create a wholesaler contact*

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

<h3 id="addwholesalerscontacts-parameters">Parameters</h3>

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

<h3 id="addwholesalerscontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="addwholesalerscontacts-responseschema">Response Schema</h3>

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

