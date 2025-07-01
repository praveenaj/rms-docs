<h1 id="rms-rest-api-availability-push">availability push</h1>

This section of the documentation describes the PUSH ARI (Availability, Rates and Inventory) feature offered by RMS to REST API Partners. This call is for Informational purposes only; you will need to raise an SR to activate this feature.

<a href="https://helpcentre.rmscloud.com/channel-management/setup-ota-connection">Find out more</a>

## availabilityPushInfo

<a id="opIdavailabilityPushInfo"></a>

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://restapi8.rmscloud.com/availabilityPush \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
OPTIONS https://restapi8.rmscloud.com/availabilityPush HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availabilityPush',
{
  method: 'OPTIONS',

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

result = RestClient.options 'https://restapi8.rmscloud.com/availabilityPush',
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

r = requests.options('https://restapi8.rmscloud.com/availabilityPush', headers = headers)

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
    $response = $client->request('OPTIONS','https://restapi8.rmscloud.com/availabilityPush', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/availabilityPush");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
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
    req, err := http.NewRequest("OPTIONS", "https://restapi8.rmscloud.com/availabilityPush", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /availabilityPush`

*Allow RMS to provide you with Live availability, rates and inventory. - This is not a working API call and is for documentational purposes only*

This call is for documentation purposes only. Please review the details below.<br><br>
If your integration needs to show more than 14 days of availability to customers, RMS recommends listing you as a channel to enable Live ARI (Availability, Rates, Inventory). To achieve this, you'll need to build a local cache to host the data we provide.<br><br>
**How it works:**<br> Customers will connect to your channel listing in the RMS channel manager using a username/password provided by you. They will complete mapping, specifying the rates and categories to be included in the ARI update.<br><br>
RMS will maintain a 365-day rolling ARI sync. Changes to ARI in RMS will trigger real-time updates to your specified endpoint.<br><br>
**Steps:**<br> 1. Submit a ticket via the partner portal to request ARI PUSH.<br> 2. Specify the endpoint for receiving ARI updates (note- this endpoint will be used for all customer connections).

> Example responses

> 200 Response

```json
{
  "areaId": null,
  "clientId": 11282,
  "categories": [
    {
      "categoryId": 1,
      "rates": [
        {
          "rateId": 1159,
          "personBase": 2,
          "dayBreakdown": [
            {
              "availableAreas": 0,
              "closedOnArrival": false,
              "closedOnDeparture": false,
              "dailyRate": 395,
              "dateFrom": "2024-06-29",
              "dateTo": "2024-06-29",
              "minStay": 0,
              "minStayOnArrival": 0,
              "maxStay": 0,
              "stopSell": false
            }
          ],
          "additionals": {
            "adults": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "children": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "infants": [
              {
                "additionalCount": 1,
                "amount": 60
              },
              {
                "additionalCount": 2,
                "amount": 60
              }
            ],
            "adultsBase": {
              "includeInBase": true,
              "personBase": 2
            },
            "childrenBase": {
              "includeInBase": false,
              "personBase": 0
            },
            "infantsBase": {
              "includeInBase": false,
              "personBase": 0
            }
          }
        }
      ]
    }
  ]
}
```

<h3 id="availabilitypushinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rateGridARIPushResponse](#schemarategridaripushresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## availabilityPushInfoVersion2

<a id="opIdavailabilityPushInfoVersion2"></a>

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://restapi8.rmscloud.com/availabilityPushVersion2 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
OPTIONS https://restapi8.rmscloud.com/availabilityPushVersion2 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/availabilityPushVersion2',
{
  method: 'OPTIONS',

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

result = RestClient.options 'https://restapi8.rmscloud.com/availabilityPushVersion2',
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

r = requests.options('https://restapi8.rmscloud.com/availabilityPushVersion2', headers = headers)

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
    $response = $client->request('OPTIONS','https://restapi8.rmscloud.com/availabilityPushVersion2', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/availabilityPushVersion2");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
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
    req, err := http.NewRequest("OPTIONS", "https://restapi8.rmscloud.com/availabilityPushVersion2", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /availabilityPushVersion2`

*Allow RMS to provide you with Live availability, rates and inventory. - This is not a working API call and is for documentational purposes only*

In version 2 of the availabilityPushInfo endpoint, the key update is the support for multiple periods in both additionals configuration and person base pricing.<br><br> Here’s a quick breakdown of the changes:<br><br>
Multiple Periods for Additionals<br> In version 1, additionals (extra person charges) were defined with a single set of pricing rules.<br> In version 2, you can configure different pricing for additionals across multiple date ranges, allowing more granular control over extra person fees.<br><br>
Multiple Periods for Person Base Pricing<br> In version 1, the base price for a category was static per rate setup.<br> In version 2, base pricing can now vary across different periods, enabling more flexible rate structures depending on the season, promotions, or specific date-based pricing strategies.<br><br>    **How it works:**<br> Customers will connect to your channel listing in the RMS channel manager using a username/password provided by you. They will complete mapping, specifying the rates and categories to be included in the ARI update.<br><br>
RMS will maintain a 365-day rolling ARI sync. Changes to ARI in RMS will trigger real-time updates to your specified endpoint.<br><br>
**Steps:**<br> 1. Submit a ticket via the partner portal to request ARI PUSH.<br> 2. Specify the endpoint for receiving ARI updates (note- this endpoint will be used for all customer connections).

> Example responses

> 200 Response

```json
{
  "areaId": null,
  "clientId": 11282,
  "timestamp": "2025-02-11 23:58:50Z",
  "categoryRates": [
    {
      "categoryId": 1,
      "rateId": 1447,
      "dayBreakdown": [
        {
          "personBase": 3,
          "availableAreas": 5,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 333,
          "dateFrom": "2025-02-15",
          "dateTo": "2025-02-15",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 1
        },
        {
          "personBase": 5,
          "availableAreas": 5,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 320,
          "dateFrom": "2025-02-16",
          "dateTo": "2025-02-16",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 0
        },
        {
          "personBase": 4,
          "availableAreas": 3,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-17",
          "dateTo": "2025-02-17",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        },
        {
          "personBase": 4,
          "availableAreas": 1,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-18",
          "dateTo": "2025-02-18",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        },
        {
          "personBase": 4,
          "availableAreas": 0,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 200,
          "dateFrom": "2025-02-19",
          "dateTo": "2025-02-19",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 2
        }
      ]
    },
    {
      "categoryId": 2,
      "rateId": 1447,
      "dayBreakdown": [
        {
          "personBase": 3,
          "availableAreas": 1,
          "closedOnArrival": false,
          "closedOnDeparture": false,
          "dailyRate": 333,
          "dateFrom": "2025-02-15",
          "dateTo": "2025-02-19",
          "minStay": 0,
          "minStayOnArrival": 0,
          "maxStay": 0,
          "stopSell": false,
          "additionalId": 3
        }
      ]
    }
  ],
  "additionals": [
    {
      "additionalId": 1,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3.33
        },
        {
          "additionalCount": 2,
          "amount": 3.34
        },
        {
          "additionalCount": 3,
          "amount": 3.35
        },
        {
          "additionalCount": 4,
          "amount": 3.36
        },
        {
          "additionalCount": 5,
          "amount": 3.37
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 1.11
        },
        {
          "additionalCount": 2,
          "amount": 1.12
        },
        {
          "additionalCount": 3,
          "amount": 1.13
        },
        {
          "additionalCount": 4,
          "amount": 1.14
        },
        {
          "additionalCount": 5,
          "amount": 1.15
        }
      ],
      "infants": [],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 3
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": null
    },
    {
      "additionalId": 2,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3
        },
        {
          "additionalCount": 2,
          "amount": 6
        },
        {
          "additionalCount": 3,
          "amount": 9
        },
        {
          "additionalCount": 4,
          "amount": 12
        },
        {
          "additionalCount": 5,
          "amount": 15
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 2
        },
        {
          "additionalCount": 2,
          "amount": 4
        },
        {
          "additionalCount": 3,
          "amount": 6
        },
        {
          "additionalCount": 4,
          "amount": 8
        },
        {
          "additionalCount": 5,
          "amount": 10
        }
      ],
      "infants": [
        {
          "additionalCount": 1,
          "amount": 1
        },
        {
          "additionalCount": 2,
          "amount": 1
        },
        {
          "additionalCount": 3,
          "amount": 1
        },
        {
          "additionalCount": 4,
          "amount": 1
        },
        {
          "additionalCount": 5,
          "amount": 20
        }
      ],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 4
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": {
        "includeInBase": false,
        "personBase": 0
      }
    },
    {
      "additionalId": 3,
      "adults": [
        {
          "additionalCount": 1,
          "amount": 3.33
        },
        {
          "additionalCount": 2,
          "amount": 3.34
        },
        {
          "additionalCount": 3,
          "amount": 3.35
        },
        {
          "additionalCount": 4,
          "amount": 3.36
        },
        {
          "additionalCount": 5,
          "amount": 3.37
        }
      ],
      "children": [
        {
          "additionalCount": 1,
          "amount": 1.11
        },
        {
          "additionalCount": 2,
          "amount": 1.12
        },
        {
          "additionalCount": 3,
          "amount": 1.13
        },
        {
          "additionalCount": 4,
          "amount": 1.14
        },
        {
          "additionalCount": 5,
          "amount": 1.15
        }
      ],
      "infants": [],
      "adultsBase": {
        "includeInBase": true,
        "personBase": 3
      },
      "childrenBase": {
        "includeInBase": false,
        "personBase": 0
      },
      "infantsBase": null
    }
  ]
}
```

<h3 id="availabilitypushinfoversion2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rateGridARIPushResponseVersion2](#schemarategridaripushresponseversion2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

