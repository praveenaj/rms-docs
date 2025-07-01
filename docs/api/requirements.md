<h1 id="rms-rest-api-requirements">requirements</h1>

Retrieve a list of requirements

<a href="https://helpcentre.rmscloud.com/accounting-setup/create-a-requirement">Find out more</a>

## createARequirement

<a id="opIdcreateARequirement"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/requirements/master \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/requirements/master HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 35212,
  "name": "11am Check-out",
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "code": "",
  "description": "",
  "feeType": "PerPeriod",
  "groupingId\"": 0,
  "guestFacingRequirement": false,
  "inactive": false,
  "monitorRequirement": false,
  "note": "",
  "quantity": 1,
  "requiredDaily": false,
  "showInHousekeepersReport": false,
  "sameDayRequirement": false,
  "sundryId": 0,
  "unitPrice": 0,
  "useSundryAmount": false,
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "secondPerAdult": 16,
  "secondPerChild": 12,
  "secondPerInfant": 5,
  "secondUnitPrice": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/master',
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

result = RestClient.post 'https://restapi8.rmscloud.com/requirements/master',
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

r = requests.post('https://restapi8.rmscloud.com/requirements/master', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/requirements/master', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/master");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/requirements/master", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /requirements/master`

*Create a new Requirement*

> Body parameter

```json
{
  "id": 35212,
  "name": "11am Check-out",
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "code": "",
  "description": "",
  "feeType": "PerPeriod",
  "groupingId\"": 0,
  "guestFacingRequirement": false,
  "inactive": false,
  "monitorRequirement": false,
  "note": "",
  "quantity": 1,
  "requiredDaily": false,
  "showInHousekeepersReport": false,
  "sameDayRequirement": false,
  "sundryId": 0,
  "unitPrice": 0,
  "useSundryAmount": false,
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "secondPerAdult": 16,
  "secondPerChild": 12,
  "secondPerInfant": 5,
  "secondUnitPrice": 0
}
```

<h3 id="createarequirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[requirementMasterCreation](#schemarequirementmastercreation)|true|requirementMasterCreation|

> Example responses

> 201 Response

```json
[
  {
    "id": 35212,
    "name": "11am Check-out",
    "chargeDailyIncludeToDate": false,
    "chargeRequiredDaily": false,
    "code": "",
    "description": "",
    "feeType": "PerPeriod",
    "groupingId\"": 0,
    "guestFacingRequirement": false,
    "inactive": false,
    "monitorRequirement": false,
    "note": "",
    "quantity": 1,
    "requiredDaily": false,
    "showInHousekeepersReport": false,
    "sameDayRequirement": false,
    "sundryId": 0,
    "unitPrice": 0,
    "useSundryAmount": false,
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "secondPerAdult": 16,
    "secondPerChild": 12,
    "secondPerInfant": 5,
    "secondUnitPrice": 0
  }
]
```

<h3 id="createarequirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="createarequirement-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementMasterCreation](#schemarequirementmastercreation)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» amount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» guestFacingRequirement|boolean|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» note|string|false|none|none|
|» perAdult|number(decimal)|false|none|none|
|» perChild|number(decimal)|false|none|none|
|» perInfant|number(decimal)|false|none|none|
|» secondPerAdult|number(decimal)|false|none|none|
|» secondPerChild|number(decimal)|false|none|none|
|» secondPerInfant|number(decimal)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|
|» sameDayRequirement|boolean|false|none|none|
|» showInHousekeepersReport|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» unitPrice|number(decimal)|false|none|none|
|» useSundryAmount|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriod|
|feeType|PerPerson|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirements

<a id="opIdgetRequirements"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements/master/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements/master/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/master/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements/master/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/requirements/master/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements/master/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/master/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements/master/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements/master/{id}`

*Retrieve a list of requirements by Id*

<h3 id="getrequirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 35212,
    "name": "11am Check-out",
    "chargeDailyIncludeToDate": false,
    "chargeRequiredDaily": false,
    "code": "",
    "description": "",
    "feeType": "PerPeriod",
    "groupingId\"": 0,
    "guestFacingRequirement": false,
    "inactive": false,
    "monitorRequirement": false,
    "note": "",
    "quantity": 1,
    "requiredDaily": false,
    "showInHousekeepersReport": false,
    "sameDayRequirement": false,
    "sundryId": 0,
    "unitPrice": 0,
    "useSundryAmount": false,
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "secondPerAdult": 16,
    "secondPerChild": 12,
    "secondPerInfant": 5,
    "secondUnitPrice": 0
  }
]
```

<h3 id="getrequirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementMasterCreation](#schemarequirementmastercreation)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» amount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» guestFacingRequirement|boolean|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» note|string|false|none|none|
|» perAdult|number(decimal)|false|none|none|
|» perChild|number(decimal)|false|none|none|
|» perInfant|number(decimal)|false|none|none|
|» secondPerAdult|number(decimal)|false|none|none|
|» secondPerChild|number(decimal)|false|none|none|
|» secondPerInfant|number(decimal)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|
|» sameDayRequirement|boolean|false|none|none|
|» showInHousekeepersReport|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» unitPrice|number(decimal)|false|none|none|
|» useSundryAmount|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriod|
|feeType|PerPerson|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateARequirement

<a id="opIdupdateARequirement"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/requirements/master/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/requirements/master/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 35212,
  "name": "11am Check-out",
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "code": "",
  "description": "",
  "feeType": "PerPeriod",
  "groupingId\"": 0,
  "guestFacingRequirement": false,
  "inactive": false,
  "monitorRequirement": false,
  "note": "",
  "quantity": 1,
  "requiredDaily": false,
  "showInHousekeepersReport": false,
  "sameDayRequirement": false,
  "sundryId": 0,
  "unitPrice": 0,
  "useSundryAmount": false,
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "secondPerAdult": 16,
  "secondPerChild": 12,
  "secondPerInfant": 5,
  "secondUnitPrice": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/master/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/requirements/master/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/requirements/master/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/requirements/master/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/master/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/requirements/master/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /requirements/master/{id}`

*Update an existing Requirement*

> Body parameter

```json
{
  "id": 35212,
  "name": "11am Check-out",
  "chargeDailyIncludeToDate": false,
  "chargeRequiredDaily": false,
  "code": "",
  "description": "",
  "feeType": "PerPeriod",
  "groupingId\"": 0,
  "guestFacingRequirement": false,
  "inactive": false,
  "monitorRequirement": false,
  "note": "",
  "quantity": 1,
  "requiredDaily": false,
  "showInHousekeepersReport": false,
  "sameDayRequirement": false,
  "sundryId": 0,
  "unitPrice": 0,
  "useSundryAmount": false,
  "perAdult": 0,
  "perChild": 0,
  "perInfant": 0,
  "secondPerAdult": 16,
  "secondPerChild": 12,
  "secondPerInfant": 5,
  "secondUnitPrice": 0
}
```

<h3 id="updatearequirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[requirementMasterCreation](#schemarequirementmastercreation)|true|requirementMasterCreation|

> Example responses

> 200 Response

```json
[
  {
    "id": 35212,
    "name": "11am Check-out",
    "chargeDailyIncludeToDate": false,
    "chargeRequiredDaily": false,
    "code": "",
    "description": "",
    "feeType": "PerPeriod",
    "groupingId\"": 0,
    "guestFacingRequirement": false,
    "inactive": false,
    "monitorRequirement": false,
    "note": "",
    "quantity": 1,
    "requiredDaily": false,
    "showInHousekeepersReport": false,
    "sameDayRequirement": false,
    "sundryId": 0,
    "unitPrice": 0,
    "useSundryAmount": false,
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "secondPerAdult": 16,
    "secondPerChild": 12,
    "secondPerInfant": 5,
    "secondUnitPrice": 0
  }
]
```

<h3 id="updatearequirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatearequirement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementMasterCreation](#schemarequirementmastercreation)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» amount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» guestFacingRequirement|boolean|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» note|string|false|none|none|
|» perAdult|number(decimal)|false|none|none|
|» perChild|number(decimal)|false|none|none|
|» perInfant|number(decimal)|false|none|none|
|» secondPerAdult|number(decimal)|false|none|none|
|» secondPerChild|number(decimal)|false|none|none|
|» secondPerInfant|number(decimal)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|
|» sameDayRequirement|boolean|false|none|none|
|» showInHousekeepersReport|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» unitPrice|number(decimal)|false|none|none|
|» useSundryAmount|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriod|
|feeType|PerPerson|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getSearchRequirements

<a id="opIdgetSearchRequirements"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements',
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

r = requests.get('https://restapi8.rmscloud.com/requirements', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements`

*Retrieve a list of all requirements*

<h3 id="getsearchrequirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 7,
    "name": "Chapagne & Chochlates",
    "amount": 30,
    "chargeDailyIncludeToDate": false,
    "ChargeRequiredDaily": false,
    "Code": "A129e",
    "groupingId": 2,
    "inactive": false,
    "monitorRequirement": false,
    "note": "Make sure you check inventory for stock",
    "quantity": 2,
    "requiredDaily": false,
    "showInHouseKeepersReport": true,
    "sundryId": 8,
    "secondUnitPrice": 30,
    "secondAdultAmount": 0,
    "secondChildAmount": 0,
    "secondInfantAmount": 0,
    "unitPrice": 15,
    "useSundryAmount": true
  }
]
```

<h3 id="getsearchrequirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getsearchrequirements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirement](#schemarequirement)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» amount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» note|string|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|
|» showInHousekeepersReport|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» secondUnitPrice|number(decimal)|false|none|none|
|» secondAdultAmount|number(decimal)|false|none|none|
|» secondChildAmount|number(decimal)|false|none|none|
|» secondInfantAmount|number(decimal)|false|none|none|
|» unitPrice|number(decimal)|false|none|none|
|» useSundryAmount|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementsById

<a id="opIdgetRequirementsById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/requirements/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements/{id}`

*Retrieve requirement by ID*

<h3 id="getrequirementsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 7,
    "name": "Chapagne & Chochlates",
    "amount": 30,
    "chargeDailyIncludeToDate": false,
    "ChargeRequiredDaily": false,
    "Code": "A129e",
    "groupingId": 2,
    "inactive": false,
    "monitorRequirement": false,
    "note": "Make sure you check inventory for stock",
    "quantity": 2,
    "requiredDaily": false,
    "showInHouseKeepersReport": true,
    "sundryId": 8,
    "secondUnitPrice": 30,
    "secondAdultAmount": 0,
    "secondChildAmount": 0,
    "secondInfantAmount": 0,
    "unitPrice": 15,
    "useSundryAmount": true
  }
]
```

<h3 id="getrequirementsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirement](#schemarequirement)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» amount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» note|string|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» requiredDaily|boolean|false|none|none|
|» showInHousekeepersReport|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» secondUnitPrice|number(decimal)|false|none|none|
|» secondAdultAmount|number(decimal)|false|none|none|
|» secondChildAmount|number(decimal)|false|none|none|
|» secondInfantAmount|number(decimal)|false|none|none|
|» unitPrice|number(decimal)|false|none|none|
|» useSundryAmount|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementsGrouping

<a id="opIdgetRequirementsGrouping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/grouping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements/grouping',
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

r = requests.get('https://restapi8.rmscloud.com/requirements/grouping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/grouping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements/grouping`

*Retrieve a list of grouping available to requirements*

<h3 id="getrequirementsgrouping-parameters">Parameters</h3>

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

<h3 id="getrequirementsgrouping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsgrouping-responseschema">Response Schema</h3>

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

## getRequirementsImages

<a id="opIdgetRequirementsImages"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements/{id}/images \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements/{id}/images HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/{id}/images',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements/{id}/images',
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

r = requests.get('https://restapi8.rmscloud.com/requirements/{id}/images', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements/{id}/images', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/{id}/images");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements/{id}/images", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements/{id}/images`

*Retrieve the image URL's associated with a requirement*

<h3 id="getrequirementsimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
  }
]
```

<h3 id="getrequirementsimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsimages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementImage](#schemarequirementimage)]|false|none|none|
|» url:|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementValidationDates

<a id="opIdgetRequirementValidationDates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/requirements/{id}/validationDates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/requirements/{id}/validationDates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/requirements/{id}/validationDates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/requirements/{id}/validationDates',
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

r = requests.get('https://restapi8.rmscloud.com/requirements/{id}/validationDates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/requirements/{id}/validationDates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/requirements/{id}/validationDates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/requirements/{id}/validationDates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /requirements/{id}/validationDates`

*Retrieve a requirements availability validation rules*

<h3 id="getrequirementvalidationdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "arrivingOnMonday": true,
    "arrivingOnTuesday": true,
    "arrivingOnWednesday": true,
    "arrivingOnThursday": false,
    "arrivingOnFriday": false,
    "arrivingOnSaturday": false,
    "arrivingOnSunday": false,
    "reservationMadeFromDate": "2020-02-16 00:00:00",
    "reservationMadeToDate": "2020-03-19 00:00:00",
    "reservationsMadePermanentFlag": false,
    "reservationsStayingFromDate": "1900-00-00 00:00:00",
    "reservationsStayingToDate": "1900-00-00 00:00:00",
    "reservationsStayingPermanentFlag": true
  }
]
```

<h3 id="getrequirementvalidationdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementvalidationdates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementValidationDates](#schemarequirementvalidationdates)]|false|none|none|
|» arrivingOnMonday|boolean|false|none|none|
|» arrivingOnTuesday|boolean|false|none|none|
|» arrivingOnWednesday|boolean|false|none|none|
|» arrivingOnThursday|boolean|false|none|none|
|» arrivingOnFriday|boolean|false|none|none|
|» arrivingOnSaturday|boolean|false|none|none|
|» arrivingOnSunday|boolean|false|none|none|
|» reservationMadeFromDate|string(date-time)|false|none|none|
|» reservationMadeToDate|string(date-time)|false|none|none|
|» reservationMadePermanentFlag|boolean|false|none|If this is set to true then the default date value will be returned for reservationMadeFromDate and reservationMadeToDate|
|» reservationStayingFromDate|string(date-time)|false|none|none|
|» reservationStayingToDate|string(date-time)|false|none|none|
|» reservationStayingPermanentlyFlag|boolean|false|none|If this is set to true then the default date value will be returned for reservationsStayingFromDate and reservationsStayingToDate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

