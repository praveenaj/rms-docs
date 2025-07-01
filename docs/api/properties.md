<h1 id="rms-rest-api-properties">properties</h1>

The term Property is used to identify a particular place of business.

<a href="https://helpcentre.rmscloud.com/setup/add-a-new-property">Find out more</a>

## getProperties

<a id="opIdgetProperties"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties',
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

r = requests.get('https://restapi8.rmscloud.com/properties', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties`

*Retrieve a list of property details*

<h3 id="getproperties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelType|query|string|false|Only these fields will be returned|
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
    "propertiesLite": false
  },
  {
    "propertiesBasic": false
  },
  {
    "guestFull": false
  }
]
```

<h3 id="getproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_7](#schemainline_response_200_7)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesCreditCardFees

<a id="opIdgetPropertiesCreditCardFees"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/properties/creditCards/fees/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/properties/creditCards/fees/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "cardIds": [
    3
  ],
  "propertyIds": [
    0,
    1
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/creditCards/fees/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/properties/creditCards/fees/search',
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

r = requests.post('https://restapi8.rmscloud.com/properties/creditCards/fees/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/properties/creditCards/fees/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/creditCards/fees/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/properties/creditCards/fees/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /properties/creditCards/fees/search`

*Retrieve the credit card fees associated with any RMS property*

> Body parameter

```json
{
  "cardIds": [
    3
  ],
  "propertyIds": [
    0,
    1
  ]
}
```

<h3 id="getpropertiescreditcardfees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[creditCardFeeSearch](#schemacreditcardfeesearch)|true|Search object that can be passed to return a search result|

> Example responses

> 200 Response

```json
[
  {
    "cardId": 3,
    "cardName": "Amex",
    "gatewayTransactionFee": 10,
    "glCodeId": 37,
    "merchantFeeNoGreaterThan": 0,
    "merchantFeePercentage": 0,
    "propertyId": 1
  }
]
```

<h3 id="getpropertiescreditcardfees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiescreditcardfees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditCardFee](#schemacreditcardfee)]|false|none|[Used:<br>GET /properties/{id}/creditCards/fees<br>POST /properties/creditCards/fees/search]|
|» cardId|integer(int32)|false|none|none|
|» cardName|string|false|none|none|
|» gatewayTransactionFee|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» merchantFeeNoGreaterThan|number(currency)|false|none|none|
|» merchantFeePercentage|number(currency)|false|none|none|
|» propertyid|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesGrouping

<a id="opIdgetPropertiesGrouping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/grouping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/grouping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/grouping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/grouping',
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

r = requests.get('https://restapi8.rmscloud.com/properties/grouping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/grouping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/grouping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/grouping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/grouping`

*Retrieve a list of grouping available to properties*

<h3 id="getpropertiesgrouping-parameters">Parameters</h3>

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

<h3 id="getpropertiesgrouping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesgrouping-responseschema">Response Schema</h3>

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

## getPropertiesById

<a id="opIdgetPropertiesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}`

*Retrieve a properties details by id*

<h3 id="getpropertiesbyid-parameters">Parameters</h3>

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
    "propertiesLite": false
  },
  {
    "propertiesBasic": false
  },
  {
    "guestFull": false
  }
]
```

<h3 id="getpropertiesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_7](#schemainline_response_200_7)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesAcknowledgementQuestions

<a id="opIdgetPropertiesAcknowledgementQuestions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/acknowledgementQuestions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/acknowledgementQuestions`

*Retrieve the acknowledgement Question associated with a property*

<h3 id="getpropertiesacknowledgementquestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "acknowledgementQuestion1": "Do you declare you have not been overseas in the past 14 days?",
    "acknowledgementQuestion2": "Do you declare you have not been interstate in the past 14 days?",
    "acknowledgementQuestion3": "Do you declare you are not required to be in self-isolation/self-quarantine?",
    "acknowledgementQuestion4": "Do you declare you have not previously been diagnosed with COVID-19?",
    "acknowledgementQuestion5": "Do you declare to the best of you knowledge, you have not been in close contact with a person who has a reported or suspected case of coronavirus (COVID-19) in the past 14 days?",
    "acknowledgementQuestion6": "Do you declare you have not been in a COVID-19 hotspot (as defined by the Chief Health Officer) in the past 14 days?",
    "acknowledgementQuestion7": "Do you declare you have not had a fever, cough, sore throat, shortness of breath or other cold/flu-like symptoms in the last 72 hours and are otherwise well?",
    "acknowledgementQuestion8": "Do yu declare you are healthy?",
    "acknowledgementQuestion9": "Do you declare you have not been in contact with anyone unhealthy?",
    "acknowledgementQuestion10": "Do you declare you have no symptons of sickness?"
  }
]
```

<h3 id="getpropertiesacknowledgementquestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesacknowledgementquestions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[covidAckowledgement](#schemacovidackowledgement)]|false|none|none|
|» acknowledgementQuestion1|string|false|none|none|
|» acknowledgementQuestion2|string|false|none|none|
|» acknowledgementQuestion3|string|false|none|none|
|» acknowledgementQuestion4|string|false|none|none|
|» acknowledgementQuestion5|string|false|none|none|
|» acknowledgementQuestion6|string|false|none|none|
|» acknowledgementQuestion7|string|false|none|none|
|» acknowledgementQuestion8|string|false|none|none|
|» acknowledgementQuestion9|string|false|none|none|
|» acknowledgementQuestion10|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesAddons

<a id="opIdgetPropertiesAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/addOnType \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/addOnType HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/addOnType',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/addOnType',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/addOnType', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/addOnType', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/addOnType");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/addOnType", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/addOnType`

*Retrieve the addons associated with a property*

<h3 id="getpropertiesaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 50,
    "name": "Car Park",
    "propertyId": 1
  }
]
```

<h3 id="getpropertiesaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[addOnCategory](#schemaaddoncategory)]|false|none|[Used:<br>GET /properties/{id}/addOnType]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» propertyId|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesAttributes

<a id="opIdgetPropertiesAttributes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/attributes \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/attributes HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/attributes',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/attributes',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/attributes', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/attributes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/attributes");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/attributes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/attributes`

*Retrieve the attributes associated with a property*

<h3 id="getpropertiesattributes-parameters">Parameters</h3>

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

<h3 id="getpropertiesattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesattributes-responseschema">Response Schema</h3>

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

## getPropertiescategories

<a id="opIdgetPropertiescategories"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/categories \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/categories HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/categories',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/categories',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/categories', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/categories', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/categories");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/categories", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/categories`

*Retrieve the categories associated with a property*

<h3 id="getpropertiescategories-parameters">Parameters</h3>

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
    "categoryLite": false
  },
  {
    "categoryBasic": false
  },
  {
    "categoryFull": false
  }
]
```

<h3 id="getpropertiescategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_1](#schemainline_response_200_1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertyCreditCards

<a id="opIdgetPropertyCreditCards"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/creditCards \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/creditCards HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/creditCards',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/creditCards',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/creditCards', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/creditCards', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/creditCards");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/creditCards", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/creditCards`

*Retrieve the credit cards associated with an RMS property*

<h3 id="getpropertycreditcards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 5,
    "name": "Visa"
  }
]
```

<h3 id="getpropertycreditcards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertycreditcards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditCard](#schemacreditcard)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertyCreditCardFees

<a id="opIdgetPropertyCreditCardFees"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/creditCards/fees \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/creditCards/fees HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/creditCards/fees',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/creditCards/fees',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/creditCards/fees', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/creditCards/fees', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/creditCards/fees");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/creditCards/fees", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/creditCards/fees`

*Retrieve the credit card fees associated with an RMS property*

<h3 id="getpropertycreditcardfees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "cardId": 3,
    "cardName": "Amex",
    "gatewayTransactionFee": 10,
    "glCodeId": 37,
    "merchantFeeNoGreaterThan": 0,
    "merchantFeePercentage": 0,
    "propertyId": 1
  }
]
```

<h3 id="getpropertycreditcardfees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertycreditcardfees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditCardFee](#schemacreditcardfee)]|false|none|[Used:<br>GET /properties/{id}/creditCards/fees<br>POST /properties/creditCards/fees/search]|
|» cardId|integer(int32)|false|none|none|
|» cardName|string|false|none|none|
|» gatewayTransactionFee|number(currency)|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» merchantFeeNoGreaterThan|number(currency)|false|none|none|
|» merchantFeePercentage|number(currency)|false|none|none|
|» propertyid|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesCurrencies

<a id="opIdgetPropertiesCurrencies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/currency \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/currency HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/currency',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/currency',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/currency', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/currency', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/currency");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/currency", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/currency`

*Retrieve the currencies accepted for a property*

<h3 id="getpropertiescurrencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "primaryCurrencyId": 0,
    "primaryCurrencySymbol": "string",
    "primaryCurrencyName": "string",
    "PrimaryCurrencyDescription": "string",
    "secondaryCurrencyId": 0,
    "secondaryCurrencySymbol": "string",
    "secondaryCurrencyName": "string",
    "secondaryCurrencyDescription": "string"
  }
]
```

<h3 id="getpropertiescurrencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiescurrencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[currency](#schemacurrency)]|false|none|none|
|» primaryCurrencyId|integer(int32)|false|none|none|
|» primaryCurrencySymbol|string|false|none|none|
|» primaryCurrencyName|string|false|none|none|
|» PrimaryCurrencyDescription|string|false|none|none|
|» secondaryCurrencyId|integer(int32)|false|none|none|
|» secondaryCurrencySymbol|string|false|none|none|
|» secondaryCurrencyName|string|false|none|none|
|» secondaryCurrencyDescription|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesDiscounts

<a id="opIdgetPropertiesDiscounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/discounts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/discounts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/discounts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/discounts',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/discounts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/discounts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/discounts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/discounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/discounts`

*Retrieve the discounts associated with a property*

<h3 id="getpropertiesdiscounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

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

<h3 id="getpropertiesdiscounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesdiscounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[discountLite](#schemadiscountlite)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesIbePoliciesAndSettings

<a id="opIdgetPropertiesIbePoliciesAndSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/policiesAndSettings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/policiesAndSettings`

*Retrieve the ibe policies and settings associated with a property*

<h3 id="getpropertiesibepoliciesandsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
{
  "businessFacilities": "This isn't a place for business.",
  "carParking": "No specific car parking information provided.",
  "description": "Rachel's Ritzy Resort is a class above the rest!!!",
  "features": "Party-friendly environment, suitable for groups.",
  "petPolicy": "No pets allowed.",
  "terms": "Standard terms apply.",
  "thingsToDo": "PARTY!",
  "cancellationPolicy": "Standard cancellation policy applies.",
  "userDefined1": "The Thing #1",
  "userDefined2": "The Thing #2",
  "userDefined3": "The Thing #3",
  "userDefined4": "The Thing #4",
  "userDefined5": "The Thing #5",
  "allowGroupBookings": true,
  "childrenAllowed": true,
  "currency": "AUD",
  "currencySymbol": "$",
  "defaultArrivalTime": "1900-01-01T15:00:00Z",
  "defaultDepartTime": "1900-01-02T11:00:00Z",
  "gatewayId": 4,
  "latitude": "Not provided",
  "longitude": "Not provided",
  "maxChildAge": "3",
  "maxInfantAge": "3 years",
  "minAgeRequiredToBook": 21,
  "petsAllowed": true,
  "redirectionURL": "Not applicable",
  "smokingAllowed": true,
  "maxGroupBookings": 4,
  "googleAnalyticsCode": "UA-3404912-1"
}
```

<h3 id="getpropertiesibepoliciesandsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[propertiesIbePoliciesAndSettings](#schemapropertiesibepoliciesandsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesImages

<a id="opIdgetPropertiesImages"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/images \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/images HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/images',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/images',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/images', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/images', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/images");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/images", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/images`

*Retrieve the image URL's associated with a property*

<h3 id="getpropertiesimages-parameters">Parameters</h3>

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

<h3 id="getpropertiesimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesimages-responseschema">Response Schema</h3>

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

## getposEndOfDay

<a id="opIdgetposEndOfDay"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/posEndOfDay \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/posEndOfDay HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/posEndOfDay',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/posEndOfDay',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/posEndOfDay', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/posEndOfDay', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/posEndOfDay");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/posEndOfDay", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/posEndOfDay`

*Retrieve the Pont Of Sale end of day date associated with a property*

<h3 id="getposendofday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "posEndOfDay": "2021-06-18 00:00:00",
    "propertyId": 1
  }
]
```

<h3 id="getposendofday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getposendofday-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesPosEndOfDay](#schemapropertiesposendofday)]|false|none|none|
|» posEndOfDay|string(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putposEndOfDay

<a id="opIdputposEndOfDay"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/properties/{id}/posEndOfDay \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/properties/{id}/posEndOfDay HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "posEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/posEndOfDay',
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

result = RestClient.put 'https://restapi8.rmscloud.com/properties/{id}/posEndOfDay',
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

r = requests.put('https://restapi8.rmscloud.com/properties/{id}/posEndOfDay', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/properties/{id}/posEndOfDay', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/posEndOfDay");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/properties/{id}/posEndOfDay", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /properties/{id}/posEndOfDay`

*Update the Pont Of Sale end of day date associated with a property*

> Body parameter

```json
{
  "posEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}
```

<h3 id="putposendofday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[propertiesPosEndOfDayUpdate](#schemapropertiesposendofdayupdate)|true|Body to pass to update a properties pos end of day date|

> Example responses

> 200 Response

```json
[
  {
    "posEndOfDay": "2021-06-18 00:00:00",
    "propertyId": 1
  }
]
```

<h3 id="putposendofday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="putposendofday-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesPosEndOfDay](#schemapropertiesposendofday)]|false|none|none|
|» posEndOfDay|string(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## geteBanquetEndOfDay

<a id="opIdgeteBanquetEndOfDay"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/eBanquetEndOfDay`

*Retrieve the eBanquet end of day date associated with a property*

<h3 id="getebanquetendofday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "eBanquetEndOfDay": "2021-06-18 00:00:00",
    "propertyId": 1
  }
]
```

<h3 id="getebanquetendofday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getebanquetendofday-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesEBanquetEndOfDay](#schemapropertiesebanquetendofday)]|false|none|none|
|» eBanquetEndOfDay|string(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## puteBanquetEndOfDay

<a id="opIdputeBanquetEndOfDay"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "eBanquetEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay',
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

result = RestClient.put 'https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay',
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

r = requests.put('https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/properties/{id}/eBanquetEndOfDay", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /properties/{id}/eBanquetEndOfDay`

*Update the eBanquet end of day date associated with a property*

> Body parameter

```json
{
  "eBanquetEndOfDay": "2021-06-18 00:00:00",
  "propertyId": 1
}
```

<h3 id="putebanquetendofday-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[propertiesEBanquetEndOfDayUpdate](#schemapropertiesebanquetendofdayupdate)|true|Body to pass to update a properties Ebanquet end of day date|

> Example responses

> 200 Response

```json
[
  {
    "eBanquetEndOfDay": "2021-06-18 00:00:00",
    "propertyId": 1
  }
]
```

<h3 id="putebanquetendofday-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="putebanquetendofday-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesEBanquetEndOfDay](#schemapropertiesebanquetendofday)]|false|none|none|
|» eBanquetEndOfDay|string(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPropertiesAccountingSettings

<a id="opIdgetPropertiesAccountingSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/settings/accounting \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/settings/accounting HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/settings/accounting',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/settings/accounting',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/settings/accounting', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/settings/accounting', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/settings/accounting");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/settings/accounting", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/settings/accounting`

*Retrieve the accounting settings associated with a property*

<h3 id="getpropertiesaccountingsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "TaxOption": "TaxInclusive",
    "allowPOSChargeToRoom": true,
    "maxPOSAmountForStay": 0,
    "posAccountId": 131353,
    "cashAccountId": 124752,
    "allowSplitAccounts": true,
    "allowedAccountTypes": {
      "accommodation": true,
      "extras": true,
      "gas": true,
      "electricity": true,
      "water": true,
      "pabx": true
    },
    "postToAccommodationAccount": {
      "accommodation": true,
      "extras": false,
      "gas": false,
      "electricity": false,
      "water": false,
      "pabx": true
    }
  }
]
```

<h3 id="getpropertiesaccountingsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertiesaccountingsettings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[propertiesAccounting](#schemapropertiesaccounting)]|false|none|none|
|» taxOption|string|false|none|none|
|» allowPOSChargeToRoom|boolean|false|none|none|
|» MaxPOSAmountForStay|number(currency)|false|none|none|
|» posAccountId|integer(int32)|false|none|none|
|» cashAccountId|integer(int32)|false|none|none|
|» allowSplitAccounts|boolean|false|none|none|
|» allowedAccountTypes|[propertiesAccounting_allowedAccountTypes](#schemapropertiesaccounting_allowedaccounttypes)|false|none|none|
|»» accommodation|boolean|false|none|none|
|»» extras|boolean|false|none|none|
|»» gas|boolean|false|none|none|
|»» electricity|boolean|false|none|none|
|»» water|boolean|false|none|none|
|»» pabx|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taxOption|TaxInclusive|
|taxOption|TaxExclusive|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeAdditionals

<a id="opIdgetIbeAdditionals"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/additionals \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/additionals HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/additionals',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/additionals',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/additionals', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/additionals', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/additionals");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/additionals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/additionals`

*Retrieve the additionals enabled with the RMS IBE (Internet Booking Engine) for a property e.g. Pets, adults, children etc*

<h3 id="getibeadditionals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "maxChildAge": 11,
    "maxInfantAge": 5,
    "showAdditionalCharge1": true,
    "showAdditionalCharge2": true,
    "showAdditionalCharge3": false,
    "showAdditionalCharge4": false,
    "showAdditionalCharge5": false,
    "showAdditionalCharge6": false,
    "showAdditionalCharge7": false,
    "showChildren": true,
    "showInfants": false
  }
]
```

<h3 id="getibeadditionals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibeadditionals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ibeAdditional](#schemaibeadditional)]|false|none|[Used: GET /properties/{id}/ibe/additionals]|
|» maxChildAge|integer(int32)|false|none|none|
|» maxInfantAge|integer(int32)|false|none|none|
|» showAdditionalCharge1|boolean|false|none|none|
|» showAdditionalCharge2|boolean|false|none|none|
|» showAdditionalCharge3|boolean|false|none|none|
|» showAdditionalCharge4|boolean|false|none|none|
|» showAdditionalCharge5|boolean|false|none|none|
|» showAdditionalCharge6|boolean|false|none|none|
|» showAdditionalCharge7|boolean|false|none|none|
|» showChildren|boolean|false|none|none|
|» showInfants|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeAddons

<a id="opIdgetIbeAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/addOnType", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/addOnType`

*Retrieve the add-ons associated with the RMS IBE (Internet Booking Engine) for a property e.g. Roll Out Beds, Bicycles for hire etc*

<h3 id="getibeaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 50,
    "name": "Car Park",
    "propertyId": 1
  }
]
```

<h3 id="getibeaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibeaddons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[addOnTypeLite](#schemaaddontypelite)]|false|none|[Used:<br>GET /properties/{id}/ibe/addOnType (End Point comment out)]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» propertyId|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeBookingSources

<a id="opIdgetIbeBookingSources"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/bookingSources", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/bookingSources`

*Retrieve the booking sources associated with the RMS IBE (Internet Booking Engine) for a property*

<h3 id="getibebookingsources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "Return Guest"
  }
]
```

<h3 id="getibebookingsources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibebookingsources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[itemLite](#schemaitemlite)]|false|none|[Used:GET /properties/{id}/ibe/bookingSources]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeCreditCards

<a id="opIdgetIbeCreditCards"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/creditCard", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/creditCard`

*Retrieve the credit cards associated with the RMS IBE (Internet Booking Engine) for a property*

<h3 id="getibecreditcards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 5,
    "name": "Visa"
  }
]
```

<h3 id="getibecreditcards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibecreditcards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditCard](#schemacreditcard)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeFees

<a id="opIdgetIbeFees"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/fees \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/fees HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/fees',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/fees',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/fees', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/fees', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/fees");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/fees", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/fees`

*Retrieve the fee's associated with a reservation made via the RMS IBE (Internet Booking Engine) for a property*

<h3 id="getibefees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "creditCardCommission": 2.66,
    "onlineReservationFee": 1.5,
    "sundryId": 2
  }
]
```

<h3 id="getibefees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibefees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ibeReservationFees](#schemaibereservationfees)]|false|none|none|
|» creditCardCommission|integer(decimal)|false|none|This value represents a percentage of the total rate.|
|» onlineReservationFee|integer(decimal)|false|none|none|
|» sundryId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbePolicies

<a id="opIdgetIbePolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/policies \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/policies HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/policies',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/policies',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/policies', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/policies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/policies");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/policies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/policies`

*Retrieve the policies, information and Descriptions associated with a property*

<h3 id="getibepolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "businessFacilities": "This section will outline Business Facilities.",
    "carParking": "There is a charge for extra vehicles, daily parking and other space consuming devices which accompany travelers, except for those which are exempt from extra charges.",
    "cancellationPolicy": "CANCELLATION POLICY - cancellation is free of charge up to 48 hours prior to 2pm on your arrival date. Any booking modifications, including date changes and/or a full cancellation of your booking made within 48 hours of 2pm on your arrival date will incur a charge of the first night booked. Any booking modifications requested after check in must occur at least 48 hours prior to the change taking place to avoid any charges. NO SHOW POLICY - Failure to arrive at the property, on the booked check-in date, will be treated as a no-show and will incur the first night charge. Please note the remainder of the booking will be cancelled.",
    "description": "Rachel's Ritzy Resort is a class above the rest!!!",
    "directions": "Travel Directions for guests. For easiest access to the property the best route to follow to arrive safely is the most direct route which comes in from the south, as this is the only route which provides road access, although many of you may wish to take the scenic alternative",
    "features": "This section will outline Property Features.",
    "petPolicy": "Those pets which have returned from the taxidermist and now exhibit none of their former feral aromas or lifestyle are most welcome.  These beasts must be restrained at all times and are not allowed outside at any time without close attentive supervision.",
    "terms": "AFTER-HOURS ARRIVALS - reception hours are from 8am to 6pm daily. If you are arriving outside of these hours, please contact the lodge at least 24 hours prior to 2pm on your arrival date to arrange an after-hours key collection. CHECK-IN POLICY - The person who's name the room was booked under must be present and part of the travelling party staying at the lodge. THIRD PARTY PAYMENT POLICY - If any room nights or additional charges are to be paid for by a third party, or anyone else other than the person who's name the booking was made under, the lodge must be notified more than 48 hours prior to 2pm on your arrival date.",
    "thingsToDo": "Outlines things to do at the property."
  }
]
```

<h3 id="getibepolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibepolicies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[policy](#schemapolicy)]|false|none|none|
|» businessFacilities|any|false|none|none|
|» carParking|any|false|none|none|
|» cancellationPolicy|any|false|none|none|
|» description|any|false|none|none|
|» directions|any|false|none|none|
|» features|any|false|none|none|
|» petPolicy|any|false|none|none|
|» terms|any|false|none|none|
|» thingsToDo|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeRequirements

<a id="opIdgetIbeRequirements"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/requirements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/requirements',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/requirements',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/requirements', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/requirements");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/requirements`

*Retrieve the requirements associated with the RMS IBE (Internet Booking Engine) for a property*

<h3 id="getiberequirements-parameters">Parameters</h3>

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
    "displayOrder": 2,
    "excludeFromDeposit": false,
    "longDescription": "Chapagne & Chochlates on arrival in your room"
  }
]
```

<h3 id="getiberequirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getiberequirements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ibeRequirement](#schemaiberequirement)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» displayOrder|integer(int32)|false|none|none|
|» excludeFromDeposit|boolean|false|none|none|
|» longDescription|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeSettings

<a id="opIdgetIbeSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/ibe/settings \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/ibe/settings HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/ibe/settings',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/ibe/settings',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/ibe/settings', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/ibe/settings', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/ibe/settings");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/ibe/settings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/ibe/settings`

*Retrieve the settings associated with the RMS IBE (Internet Booking Engine) for a property*

<h3 id="getibesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "allowGroupBookings": true,
    "childrenAllowed": true,
    "currency": "string",
    "currencySymbol": "string",
    "defaultArrivalTime": "2019-08-24T14:15:22Z",
    "defaultDepartTime": "2019-08-24T14:15:22Z",
    "gatewayID": 0,
    "latitude": "string",
    "longitude": "string",
    "maxChildAge": "string",
    "maxInfantAge": "string",
    "minAgeRequiredToBook": 0,
    "petsAllowed": true,
    "redirectionURL": "string",
    "smokingAllowed": true,
    "MaxGroupBookings": 0,
    "googleAnalyticsCode": "string"
  }
]
```

<h3 id="getibesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibesettings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ibeSetting](#schemaibesetting)]|false|none|none|
|» allowGroupBookings|boolean|false|none|none|
|» childrenAllowed|boolean|false|none|none|
|» currency|string|false|none|none|
|» currencySymbol|string|false|none|none|
|» defaultArrivalTime|string(date-time)|false|none|none|
|» defaultDepartTime|string(date-time)|false|none|none|
|» gatewayID|integer(int32)|false|none|none|
|» latitude|string|false|none|none|
|» longitude|string|false|none|none|
|» maxChildAge|string|false|none|none|
|» maxInfantAge|string|false|none|none|
|» minAgeRequiredToBook|integer(int32)|false|none|none|
|» petsAllowed|boolean|false|none|none|
|» redirectionURL|string|false|none|none|
|» smokingAllowed|boolean|false|none|none|
|» MaxGroupBookings|integer(int32)|false|none|none|
|» googleAnalyticsCode|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getSettingsPayments

<a id="opIdgetSettingsPayments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/properties/{id}/settings/payments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/properties/{id}/settings/payments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/properties/{id}/settings/payments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/properties/{id}/settings/payments',
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

r = requests.get('https://restapi8.rmscloud.com/properties/{id}/settings/payments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/properties/{id}/settings/payments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/properties/{id}/settings/payments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/properties/{id}/settings/payments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /properties/{id}/settings/payments`

*Retrieve the payment gateway settings for a property*

<h3 id="getsettingspayments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
{
  "propertyId": 1,
  "gatewayId": "RMSPay",
  "preAuthorizationAmount": 100,
  "preAuthorizationType": "AmountPerNightsStay",
  "preAuthorizationOnCheckInWarning": true
}
```

<h3 id="getsettingspayments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[propertiesSettingsPayments](#schemapropertiessettingspayments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

