<h1 id="rms-rest-api-cancellation-policies">cancellation policies</h1>

A Cancellation Policy determines the rules applied to a reservation when changed to 'Cancelled' status.

<a href="https://helpcentre.rmscloud.com/lookup-tables/setup-a-cancellation-policy">Find out more</a>

## getCancellationPolicies

<a id="opIdgetCancellationPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/cancellationPolicies \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/cancellationPolicies HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/cancellationPolicies',
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

result = RestClient.get 'https://restapi8.rmscloud.com/cancellationPolicies',
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

r = requests.get('https://restapi8.rmscloud.com/cancellationPolicies', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/cancellationPolicies', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/cancellationPolicies");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/cancellationPolicies", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /cancellationPolicies`

*Get a properties cancellation policies*

<h3 id="getcancellationpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "code": "c21",
    "description": "Coolangatta 21",
    "id": 1,
    "makeCancellationNoteMandatory": true,
    "nonCancellationPeriodInHours": 48,
    "shortDescription": "Coolangatta the bestest place evs"
  }
]
```

<h3 id="getcancellationpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcancellationpolicies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[cancellationPolicy](#schemacancellationpolicy)]|false|none|[Used:<br>POST /cancellationPolicies]|
|» code|string|false|none|none|
|» description|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» makeCancellationNoteMandatory|boolean|false|none|none|
|» nonCancellationPeriodInHours|integer(int32)|false|none|none|
|» shortDescription|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCancellationPolicyIdRules

<a id="opIdgetCancellationPolicyIdRules"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules',
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

r = requests.get('https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/cancellationPolicies/{cancelPolicyId}/rules", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /cancellationPolicies/{cancelPolicyId}/rules`

*Get a properties cancellation policy rules*

<h3 id="getcancellationpolicyidrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cancelPolicyId|path|integer(int32)|true|The Id of the cancellation Policy|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 1,
    "description": "Cancellation property1",
    "mandatoryCancellationNote": true,
    "voidRateCharges": true,
    "periodMethod": "DaysFromArrival",
    "rule1": {
      "feeType": "Sundry",
      "period": 15,
      "sundryId": 1431,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 0
    },
    "rule2": {
      "feeType": "FirstXNights",
      "period": 10,
      "sundryId": 0,
      "firstXNights": 1,
      "amount": 0,
      "percentage": 0
    },
    "rule3": {
      "feeType": "AmountOrPercentage",
      "period": 5,
      "sundryId": 1357,
      "firstXNights": 0,
      "amount": 25,
      "percentage": 0
    },
    "rule4": {
      "feeType": "AmountOrPercentage",
      "period": 0,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 100
    }
  },
  {
    "propertyId": 0,
    "description": "You can cancel half a day before. Cause so.",
    "mandatoryCancellationNote": false,
    "voidRateCharges": true,
    "periodMethod": "HoursFromArrival",
    "rule1": {
      "feeType": "FirstXNights",
      "period": 3,
      "sundryId": 0,
      "firstXNights": 1,
      "amount": 0,
      "percentage": 0
    },
    "rule2": {
      "feeType": "FirstXNights",
      "period": 6,
      "sundryId": 0,
      "firstXNights": 3,
      "amount": 0,
      "percentage": 0
    },
    "rule3": {
      "feeType": "AmountOrPercentage",
      "period": 9,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 50,
      "percentage": 0
    },
    "rule4": {
      "feeType": "AmountOrPercentage",
      "period": 12,
      "sundryId": 0,
      "firstXNights": 0,
      "amount": 0,
      "percentage": 20
    }
  }
]
```

<h3 id="getcancellationpolicyidrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[cancellationPoliciesRules](#schemacancellationpoliciesrules)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

