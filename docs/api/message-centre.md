<h1 id="rms-rest-api-message-centre">message centre</h1>

The Message Centre enables REST API partners to send messages to the RMS message centre to notify guest or users

<a href="https://helpcentre.rmscloud.com/message-centre-info/message-centre">Find out more</a>

## post__messagecentre_guestportal_acknowledgement

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "Body": "An additonal Guest was added to this reservation",
  "guestId": 138500,
  "header1": "COVID-19 Declaration",
  "propertyId": 1,
  "reservationId": 163706,
  "subject": "COVID-19 Warning"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement',
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

result = RestClient.post 'https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement',
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

r = requests.post('https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/messagecentre/guestportal/acknowledgement", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /messagecentre/guestportal/acknowledgement`

*Create a notifcation against the guest portal within the RMS message centre*

> Body parameter

```json
{
  "Body": "An additonal Guest was added to this reservation",
  "guestId": 138500,
  "header1": "COVID-19 Declaration",
  "propertyId": 1,
  "reservationId": 163706,
  "subject": "COVID-19 Warning"
}
```

<h3 id="post__messagecentre_guestportal_acknowledgement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[messageCentreGuestPortalNotification](#schemamessagecentreguestportalnotification)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 15,
    "message": "<p class=\"bold rmsRow\">COVID-19 Declaration</p><br/>An additonal Guest was added to this reservation<br/>",
    "propertyId": 1,
    "subject": "COVID-19 Warning"
  }
]
```

<h3 id="post__messagecentre_guestportal_acknowledgement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="post__messagecentre_guestportal_acknowledgement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[messageCentreGuestPortalNotificationResponse](#schemamessagecentreguestportalnotificationresponse)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» message|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» subject|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

