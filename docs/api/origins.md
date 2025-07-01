<h1 id="rms-rest-api-origins">origins</h1>

Origin is a Lookup Table that can be included as an option on the reservation record.

## getOrigins

<a id="opIdgetOrigins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/origins \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/origins HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/origins',
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

result = RestClient.get 'https://restapi8.rmscloud.com/origins',
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

r = requests.get('https://restapi8.rmscloud.com/origins', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/origins', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/origins");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/origins", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /origins`

*Retrieve a list of origin records*

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "code": "AMO",
    "description": "Austrian Main Office on level 3",
    "shortDescription": "Coolangatta the bestest place evs"
  }
]
```

<h3 id="getorigins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getorigins-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[origin](#schemaorigin)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» code|string|false|none|none|
|» description|string|false|none|none|
|» shortDescription|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

