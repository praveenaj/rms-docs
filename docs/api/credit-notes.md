<h1 id="rms-rest-api-credit-notes">credit notes</h1>

Credit Notes are a type of Sundry Charge that can be used to apply a credit to an account unrelated to the exchange of money.

<a href="https://helpcentre.rmscloud.com/sundry-info/credit-notes-overview">Find out more</a>

## getCreditNotes

<a id="opIdgetCreditNotes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/creditNotes?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/creditNotes?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/creditNotes?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/creditNotes',
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

r = requests.get('https://restapi8.rmscloud.com/creditNotes', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/creditNotes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/creditNotes?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/creditNotes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /creditNotes`

*Retrieve a list of credit notes*

<h3 id="getcreditnotes-parameters">Parameters</h3>

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
    "assigned": true,
    "costPrice": 1,
    "currencyView": "Local Currency",
    "gLCodeName": "Accommodation Revenue",
    "gLCodeId": 0,
    "grouping": "Group 1",
    "groupingId": 1,
    "hasTaxes": true,
    "inactive": false,
    "secondCurrency": 0,
    "unitPrice": 2.5
  }
]
```

<h3 id="getcreditnotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcreditnotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[creditNote](#schemacreditnote)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» assigned|boolean|false|none|none|
|» costPrice|number(currency)|false|none|none|
|» currencyView|string|false|none|none|
|» gLCodeName|string|false|none|none|
|» gLCodeId|integer(int32)|false|none|none|
|» grouping|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» hasTaxes|boolean|false|none|none|
|» inactive|boolean|false|none|none|
|» secondCurrency|number(currency)|false|none|none|
|» unitPrice|number(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

