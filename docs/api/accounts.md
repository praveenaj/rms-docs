<h1 id="rms-rest-api-accounts">accounts</h1>

View the account settings configured in RMS

## postAccountsSearch

<a id="opIdpostAccountsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/accounts/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/accounts/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountClass": "POS",
  "accountEntityIds": [
    1,
    3
  ],
  "propertyIds": [
    1
  ],
  "ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/accounts/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/accounts/search',
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

r = requests.post('https://restapi8.rmscloud.com/accounts/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/accounts/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/accounts/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/accounts/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /accounts/search`

*Retrieve account information*

This endpoint does not support reservation accounts.<br> For reservation accounts, use the /reservations/search endpoint.<br> For POS and Cash, the accountEntityId is equivalent to the propertyIds account.

> Body parameter

```json
{
  "accountClass": "POS",
  "accountEntityIds": [
    1,
    3
  ],
  "propertyIds": [
    1
  ],
  "ids": []
}
```

<h3 id="postaccountssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[accountsSearch](#schemaaccountssearch)|true|Retrieve account details|

> Example responses

> 200 Response

```json
[
  {
    "id": 379272,
    "accountClass": "TravelAgent",
    "propertyId": 3,
    "accountEntityId": 3012
  },
  {
    "id": 379293,
    "accountClass": "Guest",
    "propertyId": 5,
    "accountEntityId": 165544
  }
]
```

<h3 id="postaccountssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[accountsSearchResponse](#schemaaccountssearchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getForeignExchangeRates

<a id="opIdgetForeignExchangeRates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/accounting/foreignExchangeRates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/accounting/foreignExchangeRates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/accounting/foreignExchangeRates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/accounting/foreignExchangeRates',
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

r = requests.get('https://restapi8.rmscloud.com/accounting/foreignExchangeRates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/accounting/foreignExchangeRates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/accounting/foreignExchangeRates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/accounting/foreignExchangeRates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /accounting/foreignExchangeRates`

*Retrieve a clients foreign exchange rates this is a test*

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "code": "USD",
    "description": "US Dollars",
    "exchangeRate": 1.5,
    "propertyId": 1,
    "Symbol": "$"
  }
]
```

<h3 id="getforeignexchangerates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getforeignexchangerates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[foreignExchangeRates](#schemaforeignexchangerates)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» description|string|false|none|none|
|» exchangeRate|integer(decimal)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» Symbol|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postForeignExchangeRates

<a id="opIdpostForeignExchangeRates"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/accounting/foreignExchangeRates \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/accounting/foreignExchangeRates HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 1,
  "code": "USD",
  "description": "US Dollars",
  "exchangeRate": 1.5,
  "propertyId": 1,
  "Symbol": "$"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/accounting/foreignExchangeRates',
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

result = RestClient.post 'https://restapi8.rmscloud.com/accounting/foreignExchangeRates',
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

r = requests.post('https://restapi8.rmscloud.com/accounting/foreignExchangeRates', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/accounting/foreignExchangeRates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/accounting/foreignExchangeRates");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/accounting/foreignExchangeRates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /accounting/foreignExchangeRates`

*Add a new foreign exchange rate to RMS*

> Body parameter

```json
{
  "id": 1,
  "code": "USD",
  "description": "US Dollars",
  "exchangeRate": 1.5,
  "propertyId": 1,
  "Symbol": "$"
}
```

<h3 id="postforeignexchangerates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[foreignExchangeRates](#schemaforeignexchangerates)|false|Body to pass to Add or update the foreign Exchange Rates in RMS|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "code": "USD",
    "description": "US Dollars",
    "exchangeRate": 1.5,
    "propertyId": 1,
    "Symbol": "$"
  }
]
```

<h3 id="postforeignexchangerates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postforeignexchangerates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[foreignExchangeRates](#schemaforeignexchangerates)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» description|string|false|none|none|
|» exchangeRate|integer(decimal)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» Symbol|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putForeignExchangeRates

<a id="opIdputForeignExchangeRates"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 1,
  "code": "USD",
  "description": "US Dollars",
  "exchangeRate": 1.5,
  "propertyId": 1,
  "Symbol": "$"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/accounting/foreignExchangeRates/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /accounting/foreignExchangeRates/{id}`

*Update an existing a new foreign exchange rate to RMS*

> Body parameter

```json
{
  "id": 1,
  "code": "USD",
  "description": "US Dollars",
  "exchangeRate": 1.5,
  "propertyId": 1,
  "Symbol": "$"
}
```

<h3 id="putforeignexchangerates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[foreignExchangeRates](#schemaforeignexchangerates)|false|Body to pass to Add or update the foreign Exchange Rates in RMS|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "code": "USD",
    "description": "US Dollars",
    "exchangeRate": 1.5,
    "propertyId": 1,
    "Symbol": "$"
  }
]
```

<h3 id="putforeignexchangerates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="putforeignexchangerates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[foreignExchangeRates](#schemaforeignexchangerates)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» description|string|false|none|none|
|» exchangeRate|integer(decimal)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» Symbol|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

