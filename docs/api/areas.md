<h1 id="rms-rest-api-areas">areas</h1>

An area is the represents the physcial room/site/cabin etc within a category

<a href="https://helpcentre.rmscloud.com/area-info/setup-an-area">Find out more</a>

## getAreas

<a id="opIdgetAreas"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas',
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

r = requests.get('https://restapi8.rmscloud.com/areas', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas`

*Retrieve a list of areas*

<br> <br> Max occupants can be set at a category level and at an Area Level. When calculating max occupants adults and children do count toward max occupants, but infants do not.

<h3 id="getareas-parameters">Parameters</h3>

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
    "areaLite": false
  },
  {
    "areaBasic": false
  },
  {
    "areaFull": false
  }
]
```

<h3 id="getareas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200](#schemainline_response_200)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreasCleanStatuses

<a id="opIdgetAreasCleanStatuses"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/cleanStatuses \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/cleanStatuses HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/cleanStatuses',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/cleanStatuses',
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

r = requests.get('https://restapi8.rmscloud.com/areas/cleanStatuses', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/cleanStatuses', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/cleanStatuses");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/cleanStatuses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/cleanStatuses`

*Return a list of system default area clean statuses*

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "vacantClean"
  },
  {
    "id": 1,
    "name": "vacantDirty"
  },
  {
    "id": 2,
    "name": "vacantInspect"
  },
  {
    "id": 3,
    "name": "occupied"
  },
  {
    "id": 4,
    "name": "maintenance"
  }
]
```

<h3 id="getareascleanstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[areaCleanStatuses](#schemaareacleanstatuses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreasCleanStatusesCustom

<a id="opIdgetAreasCleanStatusesCustom"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/cleanStatuses/custom?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/cleanStatuses/custom?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/cleanStatuses/custom?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/cleanStatuses/custom',
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

r = requests.get('https://restapi8.rmscloud.com/areas/cleanStatuses/custom', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/cleanStatuses/custom', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/cleanStatuses/custom?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/cleanStatuses/custom", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/cleanStatuses/custom`

*Return custom area clean statuses for a property*

<h3 id="getareascleanstatusescustom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "status1",
    "dirty": false
  },
  {
    "id": 2,
    "name": "status2",
    "dirty": false
  },
  {
    "id": 3,
    "name": "status3",
    "dirty": true
  }
]
```

<h3 id="getareascleanstatusescustom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[areaCleanStatusesCustom](#schemaareacleanstatusescustom)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postAreaSearch

<a id="opIdpostAreaSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/areas/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/areas/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "areaNames": [
    "01 012",
    "01 013"
  ],
  "categoryIds": [
    4,
    5,
    6
  ],
  "cleanStatuses": [
    "VacantClean",
    "VacantDirty"
  ],
  "createdFrom": "2019-11-17 00:00:00",
  "createdTo": "2019-11-29 00:00:00",
  "extensions": [
    "101",
    "302a"
  ],
  "externalReferences": [
    "Cal",
    "10a"
  ],
  "guestDescriptions": [
    "room 4",
    "room 5"
  ],
  "idFrom": 10,
  "ids": [
    4,
    12,
    15
  ],
  "idTo": 20,
  "inactive": true,
  "interconnecting": false,
  "keyNumbers": [
    "11a",
    "12a"
  ],
  "modifiedFrom": "2020-11-29 00:00:00",
  "modifiedTo": "2020-12-02 00:00:00",
  "propertyIds": [
    1,
    3,
    4
  ],
  "reservationIds": [
    10,
    20
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/areas/search',
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

r = requests.post('https://restapi8.rmscloud.com/areas/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/areas/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/areas/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /areas/search`

*Perform an advanced area search*

> Body parameter

```json
{
  "areaNames": [
    "01 012",
    "01 013"
  ],
  "categoryIds": [
    4,
    5,
    6
  ],
  "cleanStatuses": [
    "VacantClean",
    "VacantDirty"
  ],
  "createdFrom": "2019-11-17 00:00:00",
  "createdTo": "2019-11-29 00:00:00",
  "extensions": [
    "101",
    "302a"
  ],
  "externalReferences": [
    "Cal",
    "10a"
  ],
  "guestDescriptions": [
    "room 4",
    "room 5"
  ],
  "idFrom": 10,
  "ids": [
    4,
    12,
    15
  ],
  "idTo": 20,
  "inactive": true,
  "interconnecting": false,
  "keyNumbers": [
    "11a",
    "12a"
  ],
  "modifiedFrom": "2020-11-29 00:00:00",
  "modifiedTo": "2020-12-02 00:00:00",
  "propertyIds": [
    1,
    3,
    4
  ],
  "reservationIds": [
    10,
    20
  ]
}
```

<h3 id="postareasearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|
|body|body|[areaSearchRequest](#schemaareasearchrequest)|true|Object to pass to perform an advanced areas search|

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
    "areaLite": false
  },
  {
    "areaBasic": false
  },
  {
    "areaFull": false
  }
]
```

<h3 id="postareasearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements passed|[inline_response_200](#schemainline_response_200)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreasById

<a id="opIdgetAreasById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}`

*Retrieve an Area by id*

<h3 id="getareasbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|areaName|query|string|false|The name of the area to return|
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
    "areaLite": false
  },
  {
    "areaBasic": false
  },
  {
    "areaFull": false
  }
]
```

<h3 id="getareasbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200](#schemainline_response_200)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreaAttributesById

<a id="opIdgetAreaAttributesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/attributes \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/attributes HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/attributes',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/attributes',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/attributes', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/attributes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/attributes");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/attributes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/attributes`

*Retrieve the attributes associated with an area*

<h3 id="getareaattributesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "associatedTo": "Property",
    "availableToIbe": true,
    "id": 1,
    "name": "Minibar"
  }
]
```

<h3 id="getareaattributesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getareaattributesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[attributeFull](#schemaattributefull)]|false|none|[Used:<br>GET /areas/{id}/attributes<br>GET /attributes<br>GET /categories/{id}/attributes<br>GET /properties/{id}/attributes<br>]|
|» associatedTo|string|false|none|none|
|» availableToIbe|boolean|false|none|Only Applies to Property and category attributes|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getattributesByAreaIds

<a id="opIdgetattributesByAreaIds"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/areas/attributes/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/areas/attributes/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    10
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/attributes/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/areas/attributes/search',
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

r = requests.post('https://restapi8.rmscloud.com/areas/attributes/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/areas/attributes/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/attributes/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/areas/attributes/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /areas/attributes/search`

*Pass an array of area Id's to retrieve the attributes associated with an area*

> Body parameter

```json
{
  "ids": [
    10
  ]
}
```

<h3 id="getattributesbyareaids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ids](#schemaids)|true|Object to pass to perform an advanced search|

> Example responses

> 200 Response

```json
[
  {
    "areaId": 5,
    "attributes": [
      {
        "id": 1,
        "name": "Minibar",
        "associatedTo": "Property",
        "availableToIbe": true
      }
    ],
    "categoryId": 1,
    "propertyId": 1
  }
]
```

<h3 id="getattributesbyareaids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getattributesbyareaids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[attributeCollection](#schemaattributecollection)]|false|none|[Used:<br>POST /areas/attributes/search]|
|» areaId|integer(int32)|false|none|none|
|» attributes|[[attributes](#schemaattributes)]|false|none|[Not Used]|
|»» id|integer(int32)|false|none|none|
|»» name|string|false|none|none|
|»» associatedTo|string|false|none|none|
|»» availableToIbe|boolean|false|none|Only Applies to Property and category attributes|
|» categoryId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putUpdateAreaCleanStatus

<a id="opIdputUpdateAreaCleanStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/areas/{id}/cleanStatus \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/areas/{id}/cleanStatus HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/cleanStatus',
{
  method: 'PUT',

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

result = RestClient.put 'https://restapi8.rmscloud.com/areas/{id}/cleanStatus',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/areas/{id}/cleanStatus', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/areas/{id}/cleanStatus', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/cleanStatus");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/areas/{id}/cleanStatus", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /areas/{id}/cleanStatus`

*Update the clean status of an area*

<h3 id="putupdateareacleanstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|status|query|string|false|Only these statuses will be accepted|
|customCleanStatusId|query|integer(int32)|false|The Id of the customAreaStatus|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|maintenance|
|status|vacantClean|
|status|vacantDirty|
|status|vacantInspect|

<h3 id="putupdateareacleanstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success: true|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreaConfiguration

<a id="opIdgetAreaConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/configuration \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/configuration HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/configuration',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/configuration',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/configuration', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/configuration', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/configuration");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/configuration", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/configuration`

*Retrieve the configuration associated with an area*

<h3 id="getareaconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
{
  "childrenAllowed": "Not Set",
  "expiryDate": "2020-10-27 00:00:00",
  "floor": "B3",
  "id": 1,
  "latitude": "-37.840935",
  "length": 20,
  "longitude": "144.946457",
  "name": "room 5",
  "numberOfBedrooms": 1,
  "numberOfFullBaths": 1,
  "numberOfHalfBaths": 0,
  "numberOfShowers": 1,
  "petsAllowed": true,
  "smokingAllowed": true,
  "squareMeters": 300,
  "width": 15
}
```

<h3 id="getareaconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success: true|[areaConfiguration](#schemaareaconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getConfigurationByAreaIds

<a id="opIdgetConfigurationByAreaIds"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/areas/configuration/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/areas/configuration/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    10
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/configuration/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/areas/configuration/search',
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

r = requests.post('https://restapi8.rmscloud.com/areas/configuration/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/areas/configuration/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/configuration/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/areas/configuration/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /areas/configuration/search`

*Pass an array of area Id's to retrieve the configuration associated with an area*

> Body parameter

```json
{
  "ids": [
    10
  ]
}
```

<h3 id="getconfigurationbyareaids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ids](#schemaids)|true|Object to pass to perform an advanced search|

> Example responses

> 200 Response

```json
[
  {
    "childrenAllowed": "Not Set",
    "expiryDate": "2020-10-27 00:00:00",
    "floor": "B3",
    "id": 1,
    "latitude": "-37.840935",
    "length": 20,
    "longitude": "144.946457",
    "name": "room 5",
    "numberOfBedrooms": 1,
    "numberOfFullBaths": 1,
    "numberOfHalfBaths": 0,
    "numberOfShowers": 1,
    "petsAllowed": true,
    "smokingAllowed": true,
    "squareMeters": 300,
    "width": 15
  }
]
```

<h3 id="getconfigurationbyareaids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getconfigurationbyareaids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaConfiguration](#schemaareaconfiguration)]|false|none|[Used:<br>GET /areas/{id}/configuration<br>GET /areas/configuration/search]|
|» childrenAllowed|boolean|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» floor|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» latitude|string|false|none|none|
|» length|number|false|none|none|
|» longitude|string|false|none|none|
|» name|string|false|none|none|
|» numberOfBedrooms|integer(int32)|false|none|none|
|» numberOfFullBaths|integer(int32)|false|none|none|
|» numberOfHalfBaths|integer(int32)|false|none|none|
|» numberOfShowers|integer(int32)|false|none|none|
|» petsAllowed|string|false|none|none|
|» smokingAllowed|string|false|none|none|
|» squareMeters|number|false|none|none|
|» width|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|petsAllowed|notSet|
|petsAllowed|true|
|petsAllowed|false|
|smokingAllowed|notSet|
|smokingAllowed|true|
|smokingAllowed|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreaGrouping

<a id="opIdgetAreaGrouping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/grouping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/grouping',
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

r = requests.get('https://restapi8.rmscloud.com/areas/grouping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/grouping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/grouping`

*Retrieve a list of grouping available to an area*

<h3 id="getareagrouping-parameters">Parameters</h3>

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

<h3 id="getareagrouping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getareagrouping-responseschema">Response Schema</h3>

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

## getAreaDwellingOptions

<a id="opIdgetAreaDwellingOptions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/dwellings \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/dwellings HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/dwellings',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/dwellings',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/dwellings', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/dwellings', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/dwellings");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/dwellings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/dwellings`

*Get the dwelling options associated with an area*

<h3 id="getareadwellingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "dwellingLength": [
      {
        "id": 3,
        "name": "6 ft"
      },
      {
        "id": 4,
        "name": "7 ft"
      }
    ],
    "dwellingSlide": [
      {
        "id": 7,
        "name": "Double decker"
      },
      {
        "id": 8,
        "name": "Single decker"
      }
    ],
    "dwellingType": [
      {
        "id": 1,
        "name": "Passenger"
      },
      {
        "id": 2,
        "name": "Tourist"
      }
    ]
  }
]
```

<h3 id="getareadwellingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getareadwellingoptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaDwelling](#schemaareadwelling)]|false|none|[Used:<br>GET /areas/{id}/dwellings]|
|» dwellingLength|[[dwellingLength](#schemadwellinglength)]|false|none|none|
|»» id|integer(int32)|false|none|none|
|»» name|string|false|none|none|
|» dwellingSlide|[[dwellingSlide](#schemadwellingslide)]|false|none|none|
|»» id|integer(int32)|false|none|none|
|»» name|string|false|none|none|
|» dwellingType|[[dwellingType](#schemadwellingtype)]|false|none|none|
|»» id|integer(int32)|false|none|none|
|»» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAreaImagesById

<a id="opIdgetAreaImagesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/images \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/images HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/images',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/images',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/images', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/images', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/images");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/images", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/images`

*Retrieve the image URL's associated with a area*

<h3 id="getareaimagesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "caption": "Bathroom",
    "displayOrder": 5,
    "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
  }
]
```

<h3 id="getareaimagesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getareaimagesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[image](#schemaimage)]|false|none|none|
|» caption|string|false|none|none|
|» displayOrder|integer(int32)|false|none|none|
|» url:|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getInterconnectingAreasByAreaId

<a id="opIdgetInterconnectingAreasByAreaId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/interconnecting \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/interconnecting HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/interconnecting',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/interconnecting',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/interconnecting', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/interconnecting', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/interconnecting");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/interconnecting", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/interconnecting`

*Retrieve the interconnecting areas associated with a specified area*

<h3 id="getinterconnectingareasbyareaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "categoryId": 2,
    "cleanStatus": "Clean",
    "description": "Spacious, bright and outward facing rooms measuring 300 m2 and totally refurbished. The room comes with a modern, fully equipped bathroom finished in top quality bronze coloured ceramics and an independent entrance.",
    "extension": "101",
    "guestDescription": "",
    "id": 7,
    "inactive": true,
    "interconnecting": true,
    "keyNo1": "",
    "keyNo2": "",
    "name": "Room 3",
    "maxOccupants": 4,
    "propertyId": 1
  }
]
```

<h3 id="getinterconnectingareasbyareaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getinterconnectingareasbyareaid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[areaBasic](#schemaareabasic)]|false|none|[Return is based on ModelType.<br>Used:<br>GET /areas<br>POST /areas/search<br>GET /areas/{id}<br>GET /areas/{id}/interconnecting<br>GET /categories/{id}/areas]|
|» categoryId|integer(int32)|false|none|none|
|» cleanStatus|string(enum - Vacant Dirty - Vacant Clean - Occupied - Vacant Inspect - Maintenance)|false|none|none|
|» description|string|false|none|none|
|» extension|string|false|none|none|
|» guestDescription|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» interconnecting|boolean|false|none|none|
|» keyNo1|string|false|none|none|
|» keyNo2|string|false|none|none|
|» name|string|false|none|none|
|» maxOccupants|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getOwnerRecordByAreaId

<a id="opIdgetOwnerRecordByAreaId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/owner \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/owner HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/owner',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/owner',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/owner', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/owner', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/owner");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/owner", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/owner`

*Retrieve the owner associated with an area (This is only applicable to properties using owner accounting)*

<h3 id="getownerrecordbyareaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "birthday": "1999-07-24 00:00:00",
    "companyId": 1,
    "countryId": 1,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "guestAccountId": 1234,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "languageSpoken": "French Canadian",
    "marketingOptOut": true,
    "mobile": "+614 586 659 77",
    "nationalityId": 7,
    "notes": "This is a nice guest",
    "passportId": "E1234569",
    "phoneAH": "03 1245 6564",
    "phoneOptOut": true,
    "postcode": "1234E",
    "privacyOptIn": true,
    "propertyId": "1",
    "smsOptOut": true,
    "state": "Victoria",
    "title": "Dr.",
    "town": "Diggers",
    "userDefined1": "Computer IP",
    "userDefined2": "Mums address",
    "userDefined3": "Phone",
    "userDefined4": "Spare keys",
    "userDefined5": "Calanders",
    "userDefined6": "Tissues",
    "userDefined7": "Bottles",
    "userDefined8": "Headsets",
    "userDefined9": "Pancakes",
    "userDefined10": "Lip balm",
    "userDefined11": "breakfast",
    "userDefined12": "stationary kit",
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "2018-08-25 17:25:00",
    "userDefined16": "2018-09-25 13:25:00"
  }
]
```

<h3 id="getownerrecordbyareaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getownerrecordbyareaid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestBasic](#schemaguestbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» mobile|string|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» postcode|string|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» title|string|false|none|none|
|» town|string|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|
|» userDefined10|string|false|none|none|
|» userDefined11|string|false|none|none|
|» userDefined12|string|false|none|none|
|» userDefined13|boolean|false|none|none|
|» userDefined14|boolean|false|none|none|
|» userDefined15|string(date-time)|false|none|none|
|» userDefined16|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementsByAreaId

<a id="opIdgetRequirementsByAreaId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/areas/{id}/requirements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/areas/{id}/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/{id}/requirements',
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

result = RestClient.get 'https://restapi8.rmscloud.com/areas/{id}/requirements',
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

r = requests.get('https://restapi8.rmscloud.com/areas/{id}/requirements', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/areas/{id}/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/{id}/requirements");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/areas/{id}/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /areas/{id}/requirements`

*Retrieve the requirements associated with an area*

<h3 id="getrequirementsbyareaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "amount": 30,
    "adultAmount": 0,
    "chargeDailyIncludeToDate": false,
    "chargeRequiredDaily": false,
    "childAmount": 0,
    "code": "A129e",
    "feeType": "PerPeriodFee",
    "groupingId": 2,
    "id": 7,
    "infantAmount": 0,
    "secondUnitPrice\"": 0,
    "secondAdultAmount\"": 16,
    "secondChildAmount\"": 12,
    "secondInfantAmount\"": 5,
    "masterRequirementId": 7,
    "monitorRequirement": false,
    "name": "Chapagne & Chochlates",
    "note": "Make sure you check inventory for stock",
    "quantity": 2,
    "requiredDaily": false,
    "showInHouseKeepersReport": true,
    "sundryId": 8,
    "unitPrice": 15,
    "useSundryAmount": true
  }
]
```

<h3 id="getrequirementsbyareaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsbyareaid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementBasic](#schemarequirementbasic)]|false|none|[Used:<br>GET /areas/{id}/requirements<br>GET /areas/requirements/search]|
|» amount|number(decimal)|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» masterRequirementId|integer(int32)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» name|string|false|none|none|
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

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriodFee|
|feeType|PerPersonFee|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementsByAreaIds

<a id="opIdgetRequirementsByAreaIds"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/areas/requirements/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/areas/requirements/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    10
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/areas/requirements/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/areas/requirements/search',
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

r = requests.post('https://restapi8.rmscloud.com/areas/requirements/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/areas/requirements/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/areas/requirements/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/areas/requirements/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /areas/requirements/search`

*Pass an array of area Id's to retrieve the requirements associated with an area*

> Body parameter

```json
{
  "ids": [
    10
  ]
}
```

<h3 id="getrequirementsbyareaids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ids](#schemaids)|true|Object to pass to perform an advanced search|

> Example responses

> 200 Response

```json
[
  {
    "amount": 30,
    "adultAmount": 0,
    "chargeDailyIncludeToDate": false,
    "chargeRequiredDaily": false,
    "childAmount": 0,
    "code": "A129e",
    "feeType": "PerPeriodFee",
    "groupingId": 2,
    "id": 7,
    "infantAmount": 0,
    "secondUnitPrice\"": 0,
    "secondAdultAmount\"": 16,
    "secondChildAmount\"": 12,
    "secondInfantAmount\"": 5,
    "masterRequirementId": 7,
    "monitorRequirement": false,
    "name": "Chapagne & Chochlates",
    "note": "Make sure you check inventory for stock",
    "quantity": 2,
    "requiredDaily": false,
    "showInHouseKeepersReport": true,
    "sundryId": 8,
    "unitPrice": 15,
    "useSundryAmount": true
  }
]
```

<h3 id="getrequirementsbyareaids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrequirementsbyareaids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[requirementBasic](#schemarequirementbasic)]|false|none|[Used:<br>GET /areas/{id}/requirements<br>GET /areas/requirements/search]|
|» amount|number(decimal)|false|none|none|
|» adultAmount|number(decimal)|false|none|none|
|» chargeDailyIncludeToDate|boolean|false|none|none|
|» chargeRequiredDaily|boolean|false|none|none|
|» childAmount|number(decimal)|false|none|none|
|» code|string|false|none|none|
|» feeType|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» infantAmount|number(decimal)|false|none|none|
|» masterRequirementId|integer(int32)|false|none|none|
|» monitorRequirement|boolean|false|none|none|
|» name|string|false|none|none|
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

#### Enumerated Values

|Property|Value|
|---|---|
|feeType|PerPeriodFee|
|feeType|PerPersonFee|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

