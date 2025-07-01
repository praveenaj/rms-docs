<h1 id="rms-rest-api-connecting-and-authentication">connecting and authentication</h1>

Authentication token and client specific URL for accessing the RMS API

## getClientURL

<a id="opIdgetClientURL"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/clienturl/{rmsClientId} \
  -H 'Accept: application/json'

```

```http
GET https://restapi8.rmscloud.com/clienturl/{rmsClientId} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://restapi8.rmscloud.com/clienturl/{rmsClientId}',
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
  'Accept' => 'application/json'
}

result = RestClient.get 'https://restapi8.rmscloud.com/clienturl/{rmsClientId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://restapi8.rmscloud.com/clienturl/{rmsClientId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://restapi8.rmscloud.com/clienturl/{rmsClientId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/clienturl/{rmsClientId}");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/clienturl/{rmsClientId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clienturl/{rmsClientId}`

*Retrieve the client specific URL for accessing the RMS API*

**Purpose**:<br>This endpoint retrieves the client’s specific baseUrl to be used for all subsequent API calls. By directing traffic to the correct host server from the outset, it avoids unnecessary redirects and reduces the risk of performance issues or failed requests due to incorrect routing. This ensures faster response times and more stable API connectivity.<br><br>**Suggested Refresh Strategy**:<br>It is recommended to refresh the clientUrl just before refreshing the authToken, ensuring that the current clientUrl is used for all API calls, including the token refresh. This ensures that you're always using the most up-to-date client URL for your API interactions.<br><br>**Note**:<br>While it is rare for a client’s URL to change, in the event that it does, please ensure you are refreshing the clientUrl to avoid issues with incorrect routing.

<h3 id="getclienturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rmsClientId|path|integer(int32)|true|Id of RMS Client to retrieve the API Server URL|

> Example responses

> 200 Response

```json
"https://testrestapi2.rmscloud.com"
```

<h3 id="getclienturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|

<aside class="success">
This operation does not require authentication
</aside>

## createAuthToken

<a id="opIdcreateAuthToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/authToken \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://restapi8.rmscloud.com/authToken HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "agentId": 123,
  "agentPassword": "xxx",
  "clientId": 345,
  "clientPassword": "xxx",
  "useTrainingDatabase": false,
  "moduleType": [
    "kiosk"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://restapi8.rmscloud.com/authToken',
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
  'Accept' => 'application/json'
}

result = RestClient.post 'https://restapi8.rmscloud.com/authToken',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://restapi8.rmscloud.com/authToken', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/authToken', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/authToken");
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
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/authToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /authToken`

*Create an authentication token*

For testing purposes, please use the following example format and replace 'Module type' with the one you have been advised for your Live credentials.<br><br>Live agent credentials will not work with the test database '11281'.<br>For Test API credentials please contact apisupport@rmscloud.com<BR>Tokens have an expiry of 24 hours. Token expiry times are displayed in UTC.<br><br> Note: To determine if a database is multi-property, check the rmsClientId in the response of the authToken request.<br>If the rmsClientId matches the clientId for the allowed properties, it is a standalone database.<br>If the rmsClientId differs, it is a multi-property database, and the rmsClientId represents the parentId.<br> [authToken Schema](https://restapidocs.rmscloud.com/images/token1.png)

> Body parameter

```json
{
  "agentId": 123,
  "agentPassword": "xxx",
  "clientId": 345,
  "clientPassword": "xxx",
  "useTrainingDatabase": false,
  "moduleType": [
    "kiosk"
  ]
}
```

<h3 id="createauthtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[authTokenRequest](#schemaauthtokenrequest)|true|"authTokenRequest object needs to be used to create an authorisation token to access propertys data"|

> Example responses

> 201 Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2lkIjoiMTUiLCJjbGlk",
  "expiryDate": "2024-07-13 00:14:42",
  "rmsClientId": 11281,
  "allowedProperties": [
    {
      "clientName": "API Test Database",
      "clientId": 11281
    },
    {
      "clientName": "Test property 1",
      "clientId": 11282
    },
    {
      "clientName": "Test property 2",
      "clientId": 11283
    },
    {
      "clientName": "Test property 3",
      "clientId": 11284
    }
  ]
}
```

> Successful Operation

<h3 id="createauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successful Operation|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|No auth header or blank token in auth header / Token retrieved but is expired > ReadTokenHeaderException / Expired Token Exception|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Invalid Credentials / Insufficient module access / Failure to retrieve connection info from token > InvalidTokenRequest|None|

<aside class="success">
This operation does not require authentication
</aside>

