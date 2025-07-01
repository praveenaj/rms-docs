<h1 id="rms-rest-api-sundries">sundries</h1>

Retrieve a list of sundries

<a href="https://helpcentre.rmscloud.com/sundry-charges/setup-a-sundry-charge">Find out more</a>

## getSundries

<a id="opIdgetSundries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/sundries?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/sundries?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/sundries?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/sundries',
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

r = requests.get('https://restapi8.rmscloud.com/sundries', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/sundries', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/sundries?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/sundries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sundries`

*Retrieve a list of sundires*

<h3 id="getsundries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "name": "Coke Can",
    "costPrice": 1,
    "gLCodeId": 0,
    "groupingId": 1,
    "gstDivisorOverride": 5.25,
    "inactive": false,
    "secondCurrency": 0,
    "unitPrice": 2.5,
    "unassigned": false,
    "thirdPartyClientId": 151,
    "gstType": "Full",
    "creditNote": true,
    "addOn": true,
    "posLite": false,
    "refundable": false,
    "expenseCharge": false,
    "transfers": false,
    "meal": true,
    "externalRefId": "123456789"
  }
]
```

<h3 id="getsundries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getsundries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sundry](#schemasundry)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» costPrice|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» gstDivisorOverride|number(decimal)|false|none|none|
|» inactive|boolean|false|none|none|
|» secondCurrency|integer(int32)|false|none|none|
|» unitPrice|number(currency)|false|none|none|
|» unassigned|boolean|false|none|none|
|» thirdPartyClientId|integer(int32)|false|none|none|
|» gstType|string|false|none|none|
|» creditNote|boolean|false|none|none|
|» addOn|boolean|false|none|none|
|» posLite|boolean|false|none|none|
|» refundable|boolean|false|none|none|
|» expenseCharge|boolean|false|none|none|
|» transfers|boolean|false|none|none|
|» meal|boolean|false|none|none|
|» externalRefId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## createSundry

<a id="opIdcreateSundry"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/sundries \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/sundries HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/sundries',
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

result = RestClient.post 'https://restapi8.rmscloud.com/sundries',
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

r = requests.post('https://restapi8.rmscloud.com/sundries', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/sundries', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/sundries");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/sundries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /sundries`

*Create a new sundry*

> Body parameter

```json
{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true
}
```

<h3 id="createsundry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[sundryCreation](#schemasundrycreation)|true|Object to pass to create a sundry|

> Example responses

> 201 Response

```json
[
  {
    "id": 3,
    "name": "Coke Can",
    "costPrice": 1,
    "gLCodeId": 0,
    "groupingId": 1,
    "gstDivisorOverride": 5.25,
    "inactive": false,
    "secondCurrency": 0,
    "unitPrice": 2.5,
    "unassigned": false,
    "thirdPartyClientId": 151,
    "gstType": "Full",
    "creditNote": true
  }
]
```

<h3 id="createsundry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="createsundry-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sundryCreation](#schemasundrycreation)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» costPrice|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» gstDivisorOverride|number(decimal)|false|none|none|
|» inactive|boolean|false|none|none|
|» secondCurrency|integer(int32)|false|none|none|
|» unitPrice|number(currency)|false|none|none|
|» unassigned|boolean|false|none|none|
|» thirdPartyClientId|integer(int32)|false|none|none|
|» gstType|string|false|none|none|
|» creditNote|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getSundriesById

<a id="opIdgetSundriesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/sundries/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/sundries/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/sundries/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/sundries/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/sundries/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/sundries/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/sundries/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/sundries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sundries/{id}`

*Retrieve a list of sundries by id*

<h3 id="getsundriesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "name": "Coke Can",
    "costPrice": 1,
    "gLCodeId": 0,
    "groupingId": 1,
    "gstDivisorOverride": 5.25,
    "inactive": false,
    "secondCurrency": 0,
    "unitPrice": 2.5,
    "unassigned": false,
    "thirdPartyClientId": 151,
    "gstType": "Full",
    "creditNote": true,
    "addOn": true,
    "posLite": false,
    "refundable": false,
    "expenseCharge": false,
    "transfers": false,
    "meal": true,
    "externalRefId": "123456789"
  }
]
```

<h3 id="getsundriesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|full successful operation|Inline|

<h3 id="getsundriesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sundry](#schemasundry)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» costPrice|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» gstDivisorOverride|number(decimal)|false|none|none|
|» inactive|boolean|false|none|none|
|» secondCurrency|integer(int32)|false|none|none|
|» unitPrice|number(currency)|false|none|none|
|» unassigned|boolean|false|none|none|
|» thirdPartyClientId|integer(int32)|false|none|none|
|» gstType|string|false|none|none|
|» creditNote|boolean|false|none|none|
|» addOn|boolean|false|none|none|
|» posLite|boolean|false|none|none|
|» refundable|boolean|false|none|none|
|» expenseCharge|boolean|false|none|none|
|» transfers|boolean|false|none|none|
|» meal|boolean|false|none|none|
|» externalRefId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateSundry

<a id="opIdupdateSundry"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/sundries/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/sundries/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/sundries/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/sundries/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/sundries/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/sundries/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/sundries/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/sundries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /sundries/{id}`

*Update an exisiting sundry*

> Body parameter

```json
{
  "id": 3,
  "name": "Coke Can",
  "costPrice": 1,
  "gLCodeId": 0,
  "groupingId": 1,
  "gstDivisorOverride": 5.25,
  "inactive": false,
  "secondCurrency": 0,
  "unitPrice": 2.5,
  "unassigned": false,
  "thirdPartyClientId": 151,
  "gstType": "Full",
  "creditNote": true
}
```

<h3 id="updatesundry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[sundryCreation](#schemasundrycreation)|true|Object to pass to create a sundry|

> Example responses

> 201 Response

```json
[
  {
    "id": 3,
    "name": "Coke Can",
    "costPrice": 1,
    "gLCodeId": 0,
    "groupingId": 1,
    "gstDivisorOverride": 5.25,
    "inactive": false,
    "secondCurrency": 0,
    "unitPrice": 2.5,
    "unassigned": false,
    "thirdPartyClientId": 151,
    "gstType": "Full",
    "creditNote": true
  }
]
```

<h3 id="updatesundry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updatesundry-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sundryCreation](#schemasundrycreation)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» costPrice|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» gstDivisorOverride|number(decimal)|false|none|none|
|» inactive|boolean|false|none|none|
|» secondCurrency|integer(int32)|false|none|none|
|» unitPrice|number(currency)|false|none|none|
|» unassigned|boolean|false|none|none|
|» thirdPartyClientId|integer(int32)|false|none|none|
|» gstType|string|false|none|none|
|» creditNote|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gstType|NotSet|
|gstType|Rent|
|gstType|Free|
|gstType|Full|
|gstType|Override|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getSundriesGrouping

<a id="opIdgetSundriesGrouping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/sundries/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/sundries/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/sundries/grouping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/sundries/grouping',
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

r = requests.get('https://restapi8.rmscloud.com/sundries/grouping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/sundries/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/sundries/grouping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/sundries/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sundries/grouping`

*Retrieve a list of grouping available to sundries*

<h3 id="getsundriesgrouping-parameters">Parameters</h3>

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

<h3 id="getsundriesgrouping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getsundriesgrouping-responseschema">Response Schema</h3>

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

