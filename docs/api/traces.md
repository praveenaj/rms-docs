<h1 id="rms-rest-api-traces">traces</h1>

To add, edit and remove traces

## getTraces

<a id="opIdgetTraces"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/traces \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/traces HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces',
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

result = RestClient.get 'https://restapi8.rmscloud.com/traces',
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

r = requests.get('https://restapi8.rmscloud.com/traces', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/traces', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/traces", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /traces`

*Get List of Traces*

<h3 id="gettraces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "tracesTemplateId": 3,
    "description": "An almost identical trace",
    "longDescription": "For reasons. That are long",
    "entityType": "Reservation",
    "entityId": 214653,
    "departmentId": 1,
    "fromDate": "2023-03-24 00:00:00",
    "toDate": "2023-03-24 00:00:00",
    "dateType": "DateRange",
    "completed": false,
    "completedId": 0,
    "createdId": 189,
    "dueDate": "2023-03-24 00:00:00",
    "modifiedId": 189,
    "modifiedDate": "2023-03-25 08:45:20",
    "userId": 0,
    "repeatFrequency": "Week",
    "repeatEvery": {
      "daysOfWeek": [
        "monday",
        "wednesday"
      ]
    }
  }
]
```

<h3 id="gettraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="gettraces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[traces](#schematraces)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesTemplateId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» longDescription|string|false|none|none|
|» entityType|string|false|none|none|
|» entityId|integer(int32)|false|none|none|
|» departmentID|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» dateType|string|false|none|none|
|» completed|boolean|false|none|none|
|» completeId|integer(int32)|false|none|none|
|» createdID|integer(int32)|false|none|none|
|» dueDate|string(date-time)|false|none|none|
|» modifiedId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» repeatFrequency|string|false|none|none|
|» repeatEvery|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|
|»»» daysOfWeek|[string]|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|
|»»» daysOfMonth|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postTraces

<a id="opIdpostTraces"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/traces \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/traces HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces',
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

result = RestClient.post 'https://restapi8.rmscloud.com/traces',
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

r = requests.post('https://restapi8.rmscloud.com/traces', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/traces', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/traces", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /traces`

*Add a new trace*

> Body parameter

```json
{
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}
```

<h3 id="posttraces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tracesRequest](#schematracesrequest)|true|Object to pass for traces|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "tracesTemplateId": 3,
    "description": "An almost identical trace",
    "longDescription": "For reasons. That are long",
    "entityType": "Reservation",
    "entityId": 214653,
    "departmentId": 1,
    "fromDate": "2023-03-24 00:00:00",
    "toDate": "2023-03-24 00:00:00",
    "dateType": "DateRange",
    "completed": false,
    "completedId": 0,
    "createdId": 189,
    "dueDate": "2023-03-24 00:00:00",
    "modifiedId": 189,
    "modifiedDate": "2023-03-25 08:45:20",
    "userId": 0,
    "repeatFrequency": "Week",
    "repeatEvery": {
      "daysOfWeek": [
        "monday",
        "wednesday"
      ]
    }
  }
]
```

<h3 id="posttraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="posttraces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[traces](#schematraces)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesTemplateId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» longDescription|string|false|none|none|
|» entityType|string|false|none|none|
|» entityId|integer(int32)|false|none|none|
|» departmentID|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» dateType|string|false|none|none|
|» completed|boolean|false|none|none|
|» completeId|integer(int32)|false|none|none|
|» createdID|integer(int32)|false|none|none|
|» dueDate|string(date-time)|false|none|none|
|» modifiedId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» repeatFrequency|string|false|none|none|
|» repeatEvery|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|
|»»» daysOfWeek|[string]|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|
|»»» daysOfMonth|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putTraces

<a id="opIdputTraces"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/traces/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/traces/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/traces/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/traces/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/traces/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/traces/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /traces/{id}`

*Update an existing trace*

> Body parameter

```json
{
  "tracesTemplateId": 3,
  "description": "An almost identical trace",
  "longDescription": "For reasons. That are long",
  "entityType": "Reservation",
  "entityId": 214653,
  "departmentId": 1,
  "fromDate": "2023-03-24 00:00:00",
  "toDate": "2023-03-24 00:00:00",
  "dateType": "DateRange",
  "completed": false,
  "completedId": 0,
  "createdId": 189,
  "dueDate": "2023-03-24 00:00:00",
  "modifiedId": 189,
  "modifiedDate": "2023-03-25 08:45:20",
  "userId": 0,
  "repeatFrequency": "Week",
  "repeatEvery": {
    "daysOfWeek": [
      "monday",
      "wednesday"
    ]
  }
}
```

<h3 id="puttraces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[tracesRequest](#schematracesrequest)|true|Object to pass for traces|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "tracesTemplateId": 3,
    "description": "An almost identical trace",
    "longDescription": "For reasons. That are long",
    "entityType": "Reservation",
    "entityId": 214653,
    "departmentId": 1,
    "fromDate": "2023-03-24 00:00:00",
    "toDate": "2023-03-24 00:00:00",
    "dateType": "DateRange",
    "completed": false,
    "completedId": 0,
    "createdId": 189,
    "dueDate": "2023-03-24 00:00:00",
    "modifiedId": 189,
    "modifiedDate": "2023-03-25 08:45:20",
    "userId": 0,
    "repeatFrequency": "Week",
    "repeatEvery": {
      "daysOfWeek": [
        "monday",
        "wednesday"
      ]
    }
  }
]
```

<h3 id="puttraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="puttraces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[traces](#schematraces)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesTemplateId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» longDescription|string|false|none|none|
|» entityType|string|false|none|none|
|» entityId|integer(int32)|false|none|none|
|» departmentID|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» dateType|string|false|none|none|
|» completed|boolean|false|none|none|
|» completeId|integer(int32)|false|none|none|
|» createdID|integer(int32)|false|none|none|
|» dueDate|string(date-time)|false|none|none|
|» modifiedId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» repeatFrequency|string|false|none|none|
|» repeatEvery|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|
|»»» daysOfWeek|[string]|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|
|»»» daysOfMonth|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteTrace

<a id="opIddeleteTrace"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/traces/{id} \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/traces/{id} HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/{id}',
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

result = RestClient.delete 'https://restapi8.rmscloud.com/traces/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/traces/{id}', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/traces/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/{id}");
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
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/traces/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /traces/{id}`

*Delete an existing trace*

<h3 id="deletetrace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

<h3 id="deletetrace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTracesDepartments

<a id="opIdgetTracesDepartments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/traces/departments \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/traces/departments HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/departments',
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

result = RestClient.get 'https://restapi8.rmscloud.com/traces/departments',
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

r = requests.get('https://restapi8.rmscloud.com/traces/departments', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/traces/departments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/departments");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/traces/departments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /traces/departments`

*Retrieve a list of departments*

<h3 id="gettracesdepartments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "accommodation"
  }
]
```

<h3 id="gettracesdepartments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettracesdepartments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[departments](#schemadepartments)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTracesTemplates

<a id="opIdgetTracesTemplates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/traces/templates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/traces/templates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/templates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/traces/templates',
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

r = requests.get('https://restapi8.rmscloud.com/traces/templates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/traces/templates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/templates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/traces/templates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /traces/templates`

*Retrieve a list of trace templates*

<h3 id="gettracestemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "tracesType": "company",
    "description": "Company Trace",
    "inactive": false,
    "departmentIds": [
      1
    ],
    "propertyIds": [
      3
    ]
  }
]
```

<h3 id="gettracestemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettracestemplates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tracesTemplates](#schematracestemplates)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesType|string|false|none|none|
|» description|string|false|none|none|
|» inactive|boolean|false|none|none|
|» departmentIds|[integer]|false|none|none|
|» propertyIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tracesType|guest|
|tracesType|company|
|tracesType|groups|
|tracesType|reservation|
|tracesType|toDo|
|tracesType|travelAgent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postTracesTemplates

<a id="opIdpostTracesTemplates"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/traces/templates \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/traces/templates HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/templates',
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

result = RestClient.post 'https://restapi8.rmscloud.com/traces/templates',
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

r = requests.post('https://restapi8.rmscloud.com/traces/templates', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/traces/templates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/templates");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/traces/templates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /traces/templates`

*Add a new trace*

> Body parameter

```json
{
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}
```

<h3 id="posttracestemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tracesTemplatesRequest](#schematracestemplatesrequest)|true|Object to pass for traces templates|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "tracesTemplateId": 3,
    "description": "An almost identical trace",
    "longDescription": "For reasons. That are long",
    "entityType": "Reservation",
    "entityId": 214653,
    "departmentId": 1,
    "fromDate": "2023-03-24 00:00:00",
    "toDate": "2023-03-24 00:00:00",
    "dateType": "DateRange",
    "completed": false,
    "completedId": 0,
    "createdId": 189,
    "dueDate": "2023-03-24 00:00:00",
    "modifiedId": 189,
    "modifiedDate": "2023-03-25 08:45:20",
    "userId": 0,
    "repeatFrequency": "Week",
    "repeatEvery": {
      "daysOfWeek": [
        "monday",
        "wednesday"
      ]
    }
  }
]
```

<h3 id="posttracestemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="posttracestemplates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[traces](#schematraces)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesTemplateId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» longDescription|string|false|none|none|
|» entityType|string|false|none|none|
|» entityId|integer(int32)|false|none|none|
|» departmentID|integer(int32)|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» toDate|string(date-time)|false|none|none|
|» dateType|string|false|none|none|
|» completed|boolean|false|none|none|
|» completeId|integer(int32)|false|none|none|
|» createdID|integer(int32)|false|none|none|
|» dueDate|string(date-time)|false|none|none|
|» modifiedId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» repeatFrequency|string|false|none|none|
|» repeatEvery|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfWeek](#schemadaysofweek)|false|none|none|
|»»» daysOfWeek|[string]|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[daysOfMonth](#schemadaysofmonth)|false|none|none|
|»»» daysOfMonth|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|guest|
|entityType|company|
|entityType|groups|
|entityType|reservation|
|entityType|toDo|
|entityType|travelAgent|
|dateType|duedate|
|dateType|dateRange|
|repeatFrequency|day|
|repeatFrequency|week|
|repeatFrequency|month|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putTracesTemplates

<a id="opIdputTracesTemplates"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/traces/templates/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/traces/templates/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/traces/templates/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/traces/templates/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/traces/templates/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/traces/templates/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/traces/templates/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/traces/templates/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /traces/templates/{id}`

*Update an existing traces template*

> Body parameter

```json
{
  "tracesType": "company",
  "description": "Company Trace",
  "inactive": false,
  "departmentIds": [
    1
  ],
  "propertyIds": [
    3
  ]
}
```

<h3 id="puttracestemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[tracesTemplatesRequest](#schematracestemplatesrequest)|true|Object to pass for traces templates|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "tracesType": "company",
    "description": "Company Trace",
    "inactive": false,
    "departmentIds": [
      1
    ],
    "propertyIds": [
      3
    ]
  }
]
```

<h3 id="puttracestemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="puttracestemplates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tracesTemplates](#schematracestemplates)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tracesType|string|false|none|none|
|» description|string|false|none|none|
|» inactive|boolean|false|none|none|
|» departmentIds|[integer]|false|none|none|
|» propertyIds|[integer]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tracesType|guest|
|tracesType|company|
|tracesType|groups|
|tracesType|reservation|
|tracesType|toDo|
|tracesType|travelAgent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

