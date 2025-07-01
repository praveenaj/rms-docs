<h1 id="rms-rest-api-payment-modes">payment modes</h1>

A Payment Mode identifies the method of payment on a reservation and determines the Bill To options for each Reservation Account Type.

<a href="https://helpcentre.rmscloud.com/accounts-recievable-all-setup/payment-mode?">Find out more</a>

## getPaymentModes

<a id="opIdgetPaymentModes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/paymentModes \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/paymentModes HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/paymentModes',
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

result = RestClient.get 'https://restapi8.rmscloud.com/paymentModes',
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

r = requests.get('https://restapi8.rmscloud.com/paymentModes', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/paymentModes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/paymentModes");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/paymentModes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /paymentModes`

*Retrieve a list of payment modes*

<h3 id="getpaymentmodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  {
    "billTo": {
      "account1": "company",
      "account2": "client",
      "phone": "company",
      "electricty": "company",
      "gas": "company",
      "water": "company"
    },
    "kiosk": {
      "payAtArrival": "LocalTaxesOnly",
      "payAtDeparture": "NoCharge"
    },
    "inactive": false,
    "id": 7,
    "code": "Accom To Company Pay Own Extras",
    "description": "GREAT PAYMENT MODE"
  }
]
```

<h3 id="getpaymentmodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpaymentmodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[paymentModes](#schemapaymentmodes)]|false|none|none|
|» billTo|[[paymentModesBillTo](#schemapaymentmodesbillto)]|false|none|none|
|»» account1|string|false|none|none|
|»» account2|string|false|none|none|
|»» phone|string|false|none|none|
|»» electricty|string|false|none|none|
|»» gas|string|false|none|none|
|»» water|string|false|none|none|
|» kiosk|[[paymentModesKiosk](#schemapaymentmodeskiosk)]|false|none|none|
|»» payAtArrival|string|false|none|none|
|»» payAtDeparture|string|false|none|none|
|» inactive|boolean|false|none|none|
|» id|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payAtArrival|NoCharge|
|payAtArrival|LocalTaxesOnly|
|payAtArrival|FullRateIncAllTaxes|
|payAtDeparture|NoCharge|
|payAtDeparture|AllBalances|
|payAtDeparture|UseBillTo|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

