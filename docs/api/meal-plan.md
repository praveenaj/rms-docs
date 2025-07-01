<h1 id="rms-rest-api-meal-plan">meal plan</h1>

Meal Plan is available as part of the base RMS subscription and allows the association of meal selection to the guest record.

<a href="https://helpcentre.rmscloud.com/lookup-tables/meal-plan">Find out more</a>

## getMealPlans

<a id="opIdgetMealPlans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/mealPlans \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/mealPlans HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/mealPlans',
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

result = RestClient.get 'https://restapi8.rmscloud.com/mealPlans',
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

r = requests.get('https://restapi8.rmscloud.com/mealPlans', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/mealPlans', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/mealPlans");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/mealPlans", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /mealPlans`

*Retrieve a list of meal plan records*

> Example responses

> 200 Response

```json
[
  {
    "id": 2,
    "description": "Breakfast",
    "code": "BFST",
    "breakfast": true,
    "lunch": false,
    "dinner": false
  }
]
```

<h3 id="getmealplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getmealplans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[mealPlan](#schemamealplan)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» code|string|false|none|none|
|» breakfast|boolean|false|none|none|
|» lunch|boolean|false|none|none|
|» dinner|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postmealPlanSchedulesSearch

<a id="opIdpostmealPlanSchedulesSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/mealPlanSchedules/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/mealPlanSchedules/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationIds": [
    17117,
    17118
  ],
  "dateFor": "2022-09-04",
  "dateFrom": "2022-09-01",
  "dateTo": "2022-09-05"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/mealPlanSchedules/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/mealPlanSchedules/search',
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

r = requests.post('https://restapi8.rmscloud.com/mealPlanSchedules/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/mealPlanSchedules/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/mealPlanSchedules/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/mealPlanSchedules/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /mealPlanSchedules/search`

*Pass res Id's to retrieve a guests meal plan schedules*

> Body parameter

```json
{
  "reservationIds": [
    17117,
    17118
  ],
  "dateFor": "2022-09-04",
  "dateFrom": "2022-09-01",
  "dateTo": "2022-09-05"
}
```

<h3 id="postmealplanschedulessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|body|body|[mealPlanSchedulesSearch](#schemamealplanschedulessearch)|true|Body to pass to return mealplan schedules|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 1234,
    "mealPlanId": 12,
    "dates": [
      {
        "theDate": "2023-02-20",
        "mealPlanUpgradeId": 14,
        "startingMeal": "Dinner"
      },
      {
        "theDate": "2023-02-21",
        "mealPlanUpgradeId": 14,
        "startingMeal": ""
      }
    ]
  }
]
```

<h3 id="postmealplanschedulessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postmealplanschedulessearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[mealPlanSchedulesSearchResponse](#schemamealplanschedulessearchresponse)]|false|none|none|
|» reservationId|integer|false|none|none|
|» mealPlanId|integer|false|none|none|
|» dates|[[mealPlanSearchResponseDates](#schemamealplansearchresponsedates)]|false|none|none|
|»» theDate|string(date)|false|none|none|
|»» mealPlanUpgradeId|integer|false|none|none|
|»» startingMeal|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|startingMeal|Breakfast|
|startingMeal|Lunch|
|startingMeal|Dinner|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

