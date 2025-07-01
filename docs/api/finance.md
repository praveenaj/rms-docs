<h1 id="rms-rest-api-finance">finance</h1>

Calls to retrieve financial mapping data

## postFinancialInterfaceSetup

<a id="opIdpostFinancialInterfaceSetup"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/financialInterface/setup \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/financialInterface/setup HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 3
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/financialInterface/setup',
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

result = RestClient.post 'https://restapi8.rmscloud.com/financialInterface/setup',
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

r = requests.post('https://restapi8.rmscloud.com/financialInterface/setup', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/financialInterface/setup', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/financialInterface/setup");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/financialInterface/setup", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /financialInterface/setup`

*To Retrieve Financial Interface Mapping Setup*

> Body parameter

```json
{
  "propertyId": 3
}
```

<h3 id="postfinancialinterfacesetup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[financialInterfaceSetup](#schemafinancialinterfacesetup)|false|Body to pass to look up the Financial Interface Mapping Setup|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 0,
    "additionalInterface": [
      {
        "interface1": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "interface2": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "interface3": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "interface4": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "advancesLedger": [
      {
        "lessCreditsRefunded": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "lessCreditsUsed": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "plusNewCredits": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "guestLedger": [
      {
        "plusNewReservationCharges": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "lessPaidBalances": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "cityLedger": [
      {
        "lessCreditsUsed": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "lessPaidBalances": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "plusNewBalances": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "plusNewCredits": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "receipts": [
      {
        "cash": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "cheque": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "directCredit": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "directCredit2": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "otherCash": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "stats": [
      {
        "availableRooms": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "noShowRooms": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "occupiedRooms": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "outOfOrderRooms": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "totalRoomsInProperty": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "options": [
      {
        "amortiseTaxes": true,
        "serviceChargeNonTaxable": true
      }
    ],
    "cards": [
      {
        "cardId": 0,
        "name": "string",
        "card": [
          {
            "code": "string",
            "description": "string"
          }
        ],
        "eftPos": [
          {
            "code": "string",
            "description": "string"
          }
        ]
      }
    ],
    "periods": [
      {
        "fromDate": "2019-08-24T14:15:22Z",
        "toDate": "2019-08-24T14:15:22Z",
        "postingDate": "2019-08-24T14:15:22Z",
        "period": 0,
        "year": 0
      }
    ]
  }
]
```

<h3 id="postfinancialinterfacesetup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postfinancialinterfacesetup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[financialInterfaceSetupResponse](#schemafinancialinterfacesetupresponse)]|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» additionalInterface|[[financialInterfaceAdditional](#schemafinancialinterfaceadditional)]|false|none|none|
|»» interface1|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»»» code|string|false|none|none|
|»»» description|string|false|none|none|
|»» interface2|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» interface3|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» interface4|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» advancesLedger|[[financialInterfaceAdvancesLedger](#schemafinancialinterfaceadvancesledger)]|false|none|none|
|»» lessCreditsRefunded|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» lessCreditsUsed|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» plusNewCredits|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» guestLedger|[[financialInterfaceGuestLedger](#schemafinancialinterfaceguestledger)]|false|none|none|
|»» plusNewReservationCharges|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» lessPaidBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» cityLedger|[[financialInterfaceCityLedger](#schemafinancialinterfacecityledger)]|false|none|none|
|»» lessCreditsUsed|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» lessPaidBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» plusNewBalances|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» plusNewCredits|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» receipts|[[financialInterfaceReceipts](#schemafinancialinterfacereceipts)]|false|none|none|
|»» cash|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» cheque|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» directCredit|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» directCredit2|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» otherCash|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» stats|[[financialInterfaceStats](#schemafinancialinterfacestats)]|false|none|none|
|»» availableRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» noShowRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» occupiedRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» outOfOrderRooms|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» totalRoomsInProperty|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» options|[[financialInterfaceOptionsTaxes](#schemafinancialinterfaceoptionstaxes)]|false|none|none|
|»» amortiseTaxes|boolean|false|none|none|
|»» serviceChargeNonTaxable|boolean|false|none|none|
|» cards|[[financialInterfaceCardDetail](#schemafinancialinterfacecarddetail)]|false|none|none|
|»» cardId|integer(int32)|false|none|none|
|»» name|string|false|none|none|
|»» card|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|»» eftPos|[[financialInterfaceCodeDesc](#schemafinancialinterfacecodedesc)]|false|none|none|
|» periods|[[financialInterfacePeriods](#schemafinancialinterfaceperiods)]|false|none|none|
|»» fromDate|string(date-time)|false|none|none|
|»» toDate|string(date-time)|false|none|none|
|»» postingDate|string(date-time)|false|none|none|
|»» period|integer(int32)|false|none|none|
|»» year|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postFinancialInterfaceTcodes

<a id="opIdpostFinancialInterfaceTcodes"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/financialInterface/tcodes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/financialInterface/tcodes HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 3,
  "entityType": "eftpos"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/financialInterface/tcodes',
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

result = RestClient.post 'https://restapi8.rmscloud.com/financialInterface/tcodes',
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

r = requests.post('https://restapi8.rmscloud.com/financialInterface/tcodes', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/financialInterface/tcodes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/financialInterface/tcodes");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/financialInterface/tcodes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /financialInterface/tcodes`

*To Retrieve Financial TCode Mapping Setup*

> Body parameter

```json
{
  "propertyId": 3,
  "entityType": "eftpos"
}
```

<h3 id="postfinancialinterfacetcodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[financialInterfaceTcodes](#schemafinancialinterfacetcodes)|false|Body to pass to look up the Financial TCode Mapping Setup|

> Example responses

> 200 Response

```json
[
  {
    "entityTypeId": 6,
    "entityType": "EFTPos",
    "entityId": 3,
    "entity": "Amex",
    "propertyId": 3,
    "t0": "AmexEFTT0",
    "t1": "AmexEFTT1",
    "t2": "AmexEFTT2",
    "t3": "AmexEFTT3",
    "t4": "AmexEFTT4",
    "t5": "AmexEFTT5",
    "t6": "AmexEFTT6",
    "t7": "AmexEFTT7",
    "t8": "AmexEFTT8",
    "t9": "AmexEFTT9"
  }
]
```

<h3 id="postfinancialinterfacetcodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postfinancialinterfacetcodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[financialInterfaceTcodesResponse](#schemafinancialinterfacetcodesresponse)]|false|none|none|
|» entityTypeId|integer(int32)|false|none|none|
|» entityType|string|false|none|none|
|» entityId|integer(int32)|false|none|none|
|» entity|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» t0|string|false|none|none|
|» t1|string|false|none|none|
|» t2|string|false|none|none|
|» t3|string|false|none|none|
|» t4|string|false|none|none|
|» t5|string|false|none|none|
|» t6|string|false|none|none|
|» t7|string|false|none|none|
|» t8|string|false|none|none|
|» t9|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|notSet|
|entityType|glCode|
|entityType|marketSegment|
|entityType|mappings|
|entityType|receipts|
|entityType|creditCards|
|entityType|eftpos|
|entityType|statistics|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

