<h1 id="rms-rest-api-mandatory-fields">mandatory fields</h1>

Retrieve the mandatory fields associated with the guest and reservation objects (This will be configured by the client). Fields setup as Mandatory on Save will require a partner to enter information prior to being able to save changes to new or existing reservations.

<a href="https://helpcentre.rmscloud.com/field-maintenance-info/field-maintenance-overview">Find out more</a>

## getMandatoryFields

<a id="opIdgetMandatoryFields"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/mandatoryFields \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/mandatoryFields HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/mandatoryFields',
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

result = RestClient.get 'https://restapi8.rmscloud.com/mandatoryFields',
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

r = requests.get('https://restapi8.rmscloud.com/mandatoryFields', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/mandatoryFields', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/mandatoryFields");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/mandatoryFields", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /mandatoryFields`

*Retrieve the mandatory fields associated with your user profile for a client*

> Example responses

> 200 Response

```json
[
  [
    {
      "entity": "Guest",
      "name": "Given",
      "onCheckin": false,
      "onSave": true
    },
    {
      "entity": "Reservation",
      "name": "Company",
      "onCheckin": true,
      "onSave": true
    }
  ]
]
```

<h3 id="getmandatoryfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getmandatoryfields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[mandatoryField](#schemamandatoryfield)]|false|none|none|
|» entity|string|false|none|none|
|» name|string|false|none|none|
|» onCheckin|boolean|false|none|none|
|» onSave|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|entity|Guest|
|entity|Reservation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

