<h1 id="rms-rest-api-inventory-grouping">inventory grouping</h1>

## postInventoryGroupingsSearch

<a id="opIdpostInventoryGroupingsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/inventoryGroupings/Search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/inventoryGroupings/Search HTTP/1.1
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

fetch('https://restapi8.rmscloud.com/inventoryGroupings/Search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/inventoryGroupings/Search',
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

r = requests.post('https://restapi8.rmscloud.com/inventoryGroupings/Search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/inventoryGroupings/Search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/inventoryGroupings/Search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/inventoryGroupings/Search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /inventoryGroupings/Search`

*Retrieve a list of inventory groupings*

> Body parameter

```json
{
  "propertyId": 3
}
```

<h3 id="postinventorygroupingssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inventoryGroupingsSearch](#schemainventorygroupingssearch)|true|Ability to search for Inventory Groupings|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "billingCategoryId": 29,
    "categories": [
      {
        "categoryId": 28,
        "order": 1
      },
      {
        "categoryId": 29,
        "order": 2
      }
    ],
    "description": "Kings & Queens",
    "categoryId": 58,
    "propertyId": 3
  }
]
```

<h3 id="postinventorygroupingssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postinventorygroupingssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[inventoryGroupings](#schemainventorygroupings)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» billingCategoryId|integer(int32)|false|none|none|
|» categories|[[inventoryGroupingsCategories](#schemainventorygroupingscategories)]|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» order|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

