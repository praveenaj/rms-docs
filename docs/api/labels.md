<h1 id="rms-rest-api-labels">labels</h1>

System Labels determine the core terminology displayed in RMS and can be customised to suit individual customer requirements. These custom names are refleted on the user defined fields

<a href="https://helpcentre.rmscloud.com/system-labels-all/configure-system-labels">Find out more</a>

## getAreaLabels

<a id="opIdgetAreaLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/area \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/area HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/area',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/area',
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

r = requests.get('https://restapi8.rmscloud.com/labels/area', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/area', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/area");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/area", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/area`

*Retrieve a list of labels applied to area user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Bill ID",
    "userDefined2": "Grandmas Name",
    "userDefined3": "Birth country",
    "userDefined4": "Spare key No",
    "userDefined5": "File No",
    "userDefined6": "Refrigerator id",
    "userDefined7": "Owner name",
    "userDefined8": "Ghost name",
    "userDefined9": "Pancake",
    "userDefined10": "Spoons"
  }
]
```

<h3 id="getarealabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getarealabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelArea](#schemalabelarea)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|
|» userDefined10|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAccountingLabels

<a id="opIdgetAccountingLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/accounting \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/accounting HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/accounting',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/accounting',
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

r = requests.get('https://restapi8.rmscloud.com/labels/accounting', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/accounting', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/accounting");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/accounting", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/accounting`

*Retrieve a list of labels applied to accounts*

> Example responses

> 200 Response

```json
[
  {
    "account1": "Accomm",
    "account2": "Extras",
    "gas": "Gas",
    "electricity": "Elec",
    "water": "Water",
    "eftposManual": "EFTPOS",
    "eftposPaymentGateway": "EFTPOS Machine",
    "cash2": "Other Cash",
    "cash3": "Cash 3",
    "cash4": "Cash 4",
    "cash5": "Cash 5",
    "cheque2": "Other Cheque",
    "cheque3": "Cheque 3",
    "cheque4": "Cheque 4",
    "cheque5": "Cheque 5",
    "directCredit": "direct credit",
    "directCredit2": "direct credit 2",
    "directCredit3": "direct credit 3",
    "directCredit4": "direct credit 4",
    "directCredit5": "direct credit 5",
    "tax": "GST"
  }
]
```

<h3 id="getaccountinglabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getaccountinglabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelAccounting](#schemalabelaccounting)]|false|none|none|
|» account1|string|false|none|none|
|» account2|string|false|none|none|
|» gas|string|false|none|none|
|» electricity|string|false|none|none|
|» water|string|false|none|none|
|» eftposManual|string|false|none|none|
|» eftposPaymentGateway|string|false|none|none|
|» cash2|string|false|none|none|
|» cash3|string|false|none|none|
|» cash4|string|false|none|none|
|» cash5|string|false|none|none|
|» cheque2|string|false|none|none|
|» cheque3|string|false|none|none|
|» cheque4|string|false|none|none|
|» cheque5|string|false|none|none|
|» directCredit|string|false|none|none|
|» directCredit2|string|false|none|none|
|» directCredit3|string|false|none|none|
|» directCredit4|string|false|none|none|
|» directCredit5|string|false|none|none|
|» tax|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAdditionalLabels

<a id="opIdgetAdditionalLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/additional \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/additional HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/additional',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/additional',
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

r = requests.get('https://restapi8.rmscloud.com/labels/additional', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/additional', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/additional");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/additional", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/additional`

*Retrieve a list of labels applied to additional tariff charge fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Fancy Charge 1",
    "userDefined2": "Fancy Charge 2",
    "userDefined3": "Fancy Charge 3",
    "userDefined4": "Fancy Charge 4",
    "userDefined5": "Fancy Charge 5",
    "userDefined6": "Fancy Charge 6",
    "userDefined7": "Fancy Charge 7"
  }
]
```

<h3 id="getadditionallabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getadditionallabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelAdditional](#schemalabeladditional)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getAssetLabels

<a id="opIdgetAssetLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/asset \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/asset HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/asset',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/asset',
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

r = requests.get('https://restapi8.rmscloud.com/labels/asset', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/asset', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/asset");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/asset", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/asset`

*Retrieve a list of labels applied to asset user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Computer",
    "userDefined2": "Gum",
    "userDefined3": "Phone",
    "userDefined4": "Spare keys",
    "userDefined5": "Calanders",
    "userDefined6": "Tissues",
    "userDefined7": "Bottles",
    "userDefined8": "Headsets",
    "userDefined9": "Pancake",
    "userDefined10": "Lip balm"
  }
]
```

<h3 id="getassetlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getassetlabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelAsset](#schemalabelasset)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|
|» userDefined10|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getCategoryLabels

<a id="opIdgetCategoryLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/category \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/category HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/category',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/category',
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

r = requests.get('https://restapi8.rmscloud.com/labels/category', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/category', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/category");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/category", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/category`

*Retrieve a list of labels applied to the category user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Bill ID",
    "userDefined2": "Grandmas Name",
    "userDefined3": "Birth country",
    "userDefined4": "Spare key No",
    "userDefined5": "File No",
    "userDefined6": "Refrigerator id",
    "userDefined7": "Owner name",
    "userDefined8": "Ghost name",
    "userDefined9": "Pancake"
  }
]
```

<h3 id="getcategorylabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getcategorylabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelCategory](#schemalabelcategory)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestLabels

<a id="opIdgetGuestLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/guest \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/guest HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/guest',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/guest',
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

r = requests.get('https://restapi8.rmscloud.com/labels/guest', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/guest', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/guest");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/guest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/guest`

*Retrieve a list of labels applied to guest user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Computer IP",
    "userDefined2": "Mums address",
    "userDefined3": "Phone",
    "userDefined4": "Spare keys",
    "userDefined5": "Calanders",
    "userDefined6": "Tissues",
    "userDefined7": "Bottles",
    "userDefined8": "Headsets",
    "userDefined9": "Pancakes",
    "userDefined10": "Lip balm",
    "userDefined11": "breakfast",
    "userDefined12": "stationary kit",
    "userDefined13": false,
    "userDefined14": true,
    "userDefined15": "2018-08-25 17:25:00",
    "userDefined16": "2018-09-25 13:25:00"
  }
]
```

<h3 id="getguestlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestlabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelGuest](#schemalabelguest)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|
|» userDefined10|string|false|none|none|
|» userDefined11|string|false|none|none|
|» userDefined12|string|false|none|none|
|» userDefined13|boolean|false|none|none|
|» userDefined14|boolean|false|none|none|
|» userDefined15|string(date-time)|false|none|none|
|» userDefined16|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getIbeLabels

<a id="opIdgetIbeLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/ibe \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/ibe HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/ibe',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/ibe',
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

r = requests.get('https://restapi8.rmscloud.com/labels/ibe', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/ibe', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/ibe");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/ibe", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/ibe`

*Retrieve a list of labels applied to the IBE (Internet Booking Engine) fields*

> Example responses

> 200 Response

```json
[
  {
    "accommodation": "Cabin",
    "dock": "Jetty",
    "site": "Site"
  }
]
```

<h3 id="getibelabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getibelabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelIbe](#schemalabelibe)]|false|none|none|
|» accommodation|string|false|none|none|
|» dock|string|false|none|none|
|» site|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getpropertyLabels

<a id="opIdgetpropertyLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/property \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/property HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/property',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/property',
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

r = requests.get('https://restapi8.rmscloud.com/labels/property', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/property', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/property");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/property", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/property`

*Retrieve a list of labels applied to a properties user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Computer",
    "userDefined2": "Gum",
    "userDefined3": "Phone",
    "userDefined4": "Spare keys",
    "userDefined5": "Calanders"
  }
]
```

<h3 id="getpropertylabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpropertylabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelProperty](#schemalabelproperty)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationLabels

<a id="opIdgetReservationLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/reservation \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/reservation HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/reservation',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/reservation',
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

r = requests.get('https://restapi8.rmscloud.com/labels/reservation', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/reservation', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/reservation");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/reservation", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/reservation`

*Retrieve a list of labels applied to a reservations user defined fields*

> Example responses

> 200 Response

```json
[
  {
    "userDefined1": "Computer IP",
    "userDefined2": "Mums address",
    "userDefined3": "Phone",
    "userDefined4": "Spare keys",
    "userDefined5": "Calanders",
    "userDefined6": "Tissues",
    "userDefined7": "Bottles",
    "userDefined8": "Headsets",
    "userDefined9": "Pancakes",
    "userDefined10": "Lip balm",
    "userDefined11": false,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2018-08-25 17:25:00",
    "userDefined15": "2018-08-25 17:25:00",
    "userDefined16": "Blank"
  }
]
```

<h3 id="getreservationlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationlabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelReservation](#schemalabelreservation)]|false|none|none|
|» userDefined1|string|false|none|none|
|» userDefined2|string|false|none|none|
|» userDefined3|string|false|none|none|
|» userDefined4|string|false|none|none|
|» userDefined5|string|false|none|none|
|» userDefined6|string|false|none|none|
|» userDefined7|string|false|none|none|
|» userDefined8|string|false|none|none|
|» userDefined9|string|false|none|none|
|» userDefined10|string|false|none|none|
|» userDefined11|boolean|false|none|none|
|» userDefined12|boolean|false|none|none|
|» userDefined13|boolean|false|none|none|
|» userDefined14|string(date-time)|false|none|none|
|» userDefined15|string(date-time)|false|none|none|
|» userDefined16|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|userDefined16|Blank|
|userDefined16|true|
|userDefined16|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getSystemLabels

<a id="opIdgetSystemLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/labels/system \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/labels/system HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/labels/system',
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

result = RestClient.get 'https://restapi8.rmscloud.com/labels/system',
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

r = requests.get('https://restapi8.rmscloud.com/labels/system', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/labels/system', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/labels/system");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/labels/system", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /labels/system`

*Retrieve a list of labels applied to system term e.g. Category = Room Type*

> Example responses

> 200 Response

```json
[
  {
    "abn": "ABN",
    "activity": "Exercise",
    "addOn": "Add Ons",
    "adult": "Adults",
    "area": "Room",
    "arrive": "Arrival",
    "bannedList": "Black List",
    "boat": "Jet Ski",
    "bookingSource": "bkg source",
    "businessSegment": "Business Segment",
    "category": "Room Type",
    "child": "Kids",
    "clientStatus": "Guest Status",
    "client": "Guest",
    "company": "Company",
    "companyUnknown": "Unknown",
    "coordinator1": "Coordinator 1",
    "coordinator2": "Coordinator 2",
    "depart": "Departing",
    "dwelling": "RV",
    "edmFilter1OptOut": "EDM Filter 1 Opt Out",
    "edmFilter2OptOut": "EDM Filter 2 Opt Out",
    "edmFilter3OptOut": "EDM Filter 3 Opt Out",
    "eventName": "Event Name",
    "given": "First",
    "groupName": "Group",
    "hold": "Reserve",
    "housekeeperNote": "Cleaning Note",
    "housekeepingUnitOfTime": "Min",
    "infant": "Infants",
    "loyalty": "Loyalty",
    "maintenance": "Out Of Order",
    "mealPlan": "Meal Plan",
    "occupant": "Occupant",
    "otaRef1": "Online Number",
    "otaRef2": "Customer number",
    "otaRef3": "Channel manager number",
    "postcode": "Zip Code",
    "postalCode": "Postal Sort",
    "privacyOptIn": "Privacy Opt In",
    "rate": "Rate",
    "resNote": "Reservation Notes",
    "resType": "Reservation Type",
    "reservation": "Reservation",
    "state": "State",
    "sundry": "Charges",
    "surname": "Last Name",
    "town": "City",
    "travelAgent": "Agent",
    "voucherNo.": "Voucher Number",
    "wholesaler": "Wholesaler"
  }
]
```

<h3 id="getsystemlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getsystemlabels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[labelSystem](#schemalabelsystem)]|false|none|none|
|» abn|string|false|none|none|
|» activity|string|false|none|none|
|» addOn|string|false|none|none|
|» adult|string|false|none|none|
|» area|string|false|none|none|
|» arrive|string|false|none|none|
|» bannedList|string|false|none|none|
|» boat|string|false|none|none|
|» bookingSource|string|false|none|none|
|» businessSegment|string|false|none|none|
|» category|string|false|none|none|
|» child|string|false|none|none|
|» clientStatus|string|false|none|none|
|» client|string|false|none|none|
|» company|string|false|none|none|
|» companyUnknown|string|false|none|none|
|» coordinator1|string|false|none|none|
|» coordinator2|string|false|none|none|
|» depart|string|false|none|none|
|» dwelling|string|false|none|none|
|» edmFilter1OptOut|string|false|none|none|
|» edmFilter2OptOut|string|false|none|none|
|» edmFilter3OptOut|string|false|none|none|
|» eventName|string|false|none|none|
|» given|string|false|none|none|
|» groupName|string|false|none|none|
|» hold|string|false|none|none|
|» housekeeperNote|string|false|none|none|
|» housekeepingUnitOfTime|string|false|none|none|
|» infant|string|false|none|none|
|» loyalty|string|false|none|none|
|» maintenance|string|false|none|none|
|» mealPlan|string|false|none|none|
|» occupant|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» postcode|string|false|none|none|
|» postalCode|string|false|none|none|
|» privacyOptIn|string|false|none|none|
|» rate|string|false|none|none|
|» resNote|string|false|none|none|
|» resType|string|false|none|none|
|» reservation|string|false|none|none|
|» state|string|false|none|none|
|» sundry|string|false|none|none|
|» surname|string|false|none|none|
|» town|string|false|none|none|
|» travelAgent|string|false|none|none|
|» voucherNo.|string|false|none|none|
|» wholesaler|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

