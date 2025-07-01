<h1 id="rms-rest-api-webhooks">webhooks</h1>

You can subscribe to specified webhooks by providing an endpoint, where once the event occurs will receive a web request for your subscription with the basic object. <br><br> You can subscribe to any of the following Webhooks: Area Status (clean, dirty, etc), guest creation, guest modification, mealplan creation, mealplan modification, reservation creation, reservation modification, reservation status updates (Exclusive to; unconfirmed, confirmed, arrived, departed, cancelled), account balance modification.

## GetWebhookSubsciptions

<a id="opIdGetWebhookSubsciptions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/webhooks?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/webhooks?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/webhooks?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/webhooks',
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

r = requests.get('https://restapi8.rmscloud.com/webhooks', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/webhooks', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/webhooks?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/webhooks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /webhooks`

*Retrieve a list of your webhook subscriptions*

<h3 id="getwebhooksubsciptions-parameters">Parameters</h3>

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
    "id": 1,
    "endpoint": "https://endpoint/webhooks",
    "entityType": "reservation",
    "action": "creation",
    "subAction": "",
    "propertyId": 0,
    "modelType": "lite",
    "entityFilterType": "",
    "entityFilterTypeId": "",
    "headers": [
      {
        "key": "X-API-KEY",
        "value": "WATER"
      },
      {
        "key": "Authorization",
        "value": "Basic YXSSS"
      }
    ]
  }
]
```

<h3 id="getwebhooksubsciptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="getwebhooksubsciptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[webhookSubscriptionResponse](#schemawebhooksubscriptionresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» endpoint|string|false|none|none|
|» entityType|string|false|none|none|
|» action|string|false|none|none|
|» subAction|string|false|none|none|
|» propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|» modelType|string|false|none|The basic, lite or full reservation response (default is basic)|
|» entityFilterType|string|false|none|Used to specify the agent|
|» entityFilterTypeId|integer(int32)|false|none|Used to specify the agentId|
|» headers|[[webhookSubscriptionResponse_headers](#schemawebhooksubscriptionresponse_headers)]|false|none|none|
|»» key|string|false|none|none|
|»» value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|reservation|
|entityType|guest|
|entityType|area|
|entityType|mealPlan|
|entityType|groupAllotment|
|entityType|rateType|
|entityType|agent|
|action|creation|
|action|delete|
|action|modification|
|action|statusModification|
|subAction|unconfirmed|
|subAction|confirmed|
|subAction|arrived|
|subAction|departed|
|subAction|cancelled|
|subAction|preCheckIn|
|subAction|areaVacantClean|
|entityFilterType|agent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postWebhookSubscriptions

<a id="opIdpostWebhookSubscriptions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/webhooks \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/webhooks HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/webhooks',
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

result = RestClient.post 'https://restapi8.rmscloud.com/webhooks',
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

r = requests.post('https://restapi8.rmscloud.com/webhooks', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/webhooks', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/webhooks");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/webhooks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /webhooks`

*Subscribe to a specific event*

**Endpoint Requirements**:<br>Standard ports only<br>HTTPS onlyPublicly accessible URL<br>A 200 OK response is expected to confirm successful receipt of the notification. If a failure response is returned, the system will not retry the notification.<br><br>**Information**:<br> -Webhook events are not triggered in the training database.<br>-In multi-property databases, rmsClientId represents the parent ID.<br>-For guest webhooks, use propertyId: 0 unless the guest record is explicitly assigned to a specific property. By default, guest records are shared across all properties in an enterprise (multi-property) database.<br>-For accountBalanceModification webhooks, a valid propertyId must be specified (e.g., propertyId: 1). Events will not trigger if propertyId is set to 0.<br>-Headers:You can define custom key-value pairs for headers. If set on a subscription, these custom headers will override the default Basic Auth header (which uses the agent ID and password encoded in Base64).<br><br>Refer to the webhook subscription schema for supported event types, including:<br>Reservations<br>Guests<br>Group Allotments<br>Area cleanStatus<br>...and more

> Body parameter

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}
```

<h3 id="postwebhooksubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[webhooks_body](#schemawebhooks_body)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterTypeId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}
```

<h3 id="postwebhooksubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|[webhookSubscriptionResponse](#schemawebhooksubscriptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putWebhookSubscriptions

<a id="opIdputWebhookSubscriptions"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/webhooks/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/webhooks/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/webhooks/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/webhooks/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/webhooks/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/webhooks/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/webhooks/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/webhooks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /webhooks/{id}`

*Update an existing webhook subscription*

> Body parameter

```json
{
  "endpoint": "https://endpoint/webhooks",
  "entityType": "reservation",
  "action": "creation",
  "subAction": "",
  "propertyId": 0,
  "modelType": "lite",
  "entityFilterType": "",
  "entityFilterId": "",
  "headers": [
    {
      "key": "X-API-KEY",
      "value": "WATER"
    },
    {
      "key": "Authorization",
      "value": "Basic YXSSS"
    }
  ]
}
```

<h3 id="putwebhooksubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[webhookSubscription](#schemawebhooksubscription)|true|Webhook object that can be passed to subscribe for property updates|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "endpoint": "https://endpoint/webhooks",
    "entityType": "reservation",
    "action": "creation",
    "subAction": "",
    "propertyId": 0,
    "modelType": "lite",
    "entityFilterType": "",
    "entityFilterTypeId": "",
    "headers": [
      {
        "key": "X-API-KEY",
        "value": "WATER"
      },
      {
        "key": "Authorization",
        "value": "Basic YXSSS"
      }
    ]
  }
]
```

<h3 id="putwebhooksubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="putwebhooksubscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[webhookSubscriptionResponse](#schemawebhooksubscriptionresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» endpoint|string|false|none|none|
|» entityType|string|false|none|none|
|» action|string|false|none|none|
|» subAction|string|false|none|none|
|» propertyId|integer(int32)|false|none|If you pass the value '0' as the property ID in a central database it will act against every property ID wthin the database|
|» modelType|string|false|none|The basic, lite or full reservation response (default is basic)|
|» entityFilterType|string|false|none|Used to specify the agent|
|» entityFilterTypeId|integer(int32)|false|none|Used to specify the agentId|
|» headers|[[webhookSubscriptionResponse_headers](#schemawebhooksubscriptionresponse_headers)]|false|none|none|
|»» key|string|false|none|none|
|»» value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|reservation|
|entityType|guest|
|entityType|area|
|entityType|mealPlan|
|entityType|groupAllotment|
|entityType|rateType|
|entityType|agent|
|action|creation|
|action|delete|
|action|modification|
|action|statusModification|
|subAction|unconfirmed|
|subAction|confirmed|
|subAction|arrived|
|subAction|departed|
|subAction|cancelled|
|subAction|preCheckIn|
|subAction|areaVacantClean|
|entityFilterType|agent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postWebhookReservationRoomMoves

<a id="opIdpostWebhookReservationRoomMoves"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/webhooks/{id} \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/webhooks/{id} HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/webhooks/{id}',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/webhooks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/webhooks/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/webhooks/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/webhooks/{id}");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/webhooks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /webhooks/{id}`

*Delete an existing webhook subscription*

<h3 id="postwebhookreservationroommoves-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

<h3 id="postwebhookreservationroommoves-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

