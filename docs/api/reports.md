<h1 id="rms-rest-api-reports">reports</h1>

Reports provide users with in depth breakdown of the relevant selected data

<a href="https://rms-help-centre.helpjuice.com/reports">Find out more</a>

## getTheAreaIncomeSummaryReport

<a id="opIdgetTheAreaIncomeSummaryReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/areaIncomeSummary \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/areaIncomeSummary HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "areaIds": [
    1,
    2
  ],
  "reservationStatusIds": [
    0,
    1,
    2,
    3
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/areaIncomeSummary',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/areaIncomeSummary',
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

r = requests.post('https://restapi8.rmscloud.com/reports/areaIncomeSummary', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/areaIncomeSummary', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/areaIncomeSummary");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/areaIncomeSummary", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/areaIncomeSummary`

*Build the Area Income Summary report*

Please note below Reservation Status values:
- 0 = Unconfirmed
- 1 = Confirmed
- 2 = Arrived
- 3 = Departed
- 4 = Cancelled
- 5 = Maintenance
- 6 = Quote
- 7 = StopSell
- 8 = OwnerOccupied
- 9 = NoShow
- 10 = Pencil

> Body parameter

```json
{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "areaIds": [
    1,
    2
  ],
  "reservationStatusIds": [
    0,
    1,
    2,
    3
  ]
}
```

<h3 id="gettheareaincomesummaryreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportAreaIncomeSummaryBuild](#schemareportareaincomesummarybuild)|true|Area income summary report build options|

> Example responses

> 200 Response

```json
[
  {
    "category": "UPC/3 Bedroom",
    "areaId": 38,
    "area": "BUB/UPC/3207/3BR",
    "numberOfReservations": 16,
    "numberOfAdults": 59,
    "numberOfChildren": 4,
    "nights": 203,
    "actualNights": 196,
    "grossRevenue": "126,658.20",
    "nettRevenue": "115,164.11",
    "grossOther": "10,907.90",
    "nettOther": "10,895.42",
    "totalGrossRevenue": "137,566.10",
    "totalNettRevenue": "126,059.53",
    "averageGrossRevenue": "7,916.14",
    "averageNettRevenue": "7,197.76",
    "averageDiscount": "0.00",
    "averageGrossOther": "681.74",
    "averageNettOther": "680.96",
    "averageDailyGrossRevenue": "646.22",
    "averageDailyNettRevenue": "587.57",
    "occupancy": "0.64"
  }
]
```

<h3 id="gettheareaincomesummaryreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettheareaincomesummaryreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportAreaIncomeSummaryResponse](#schemareportareaincomesummaryresponse)]|false|none|none|
|» category|string|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» area|string|false|none|none|
|» numberOfReservations|integer(int32)|false|none|none|
|» numberOfAdults|integer(int32)|false|none|none|
|» numberOfChildren|integer(int32)|false|none|none|
|» nights|integer(int32)|false|none|none|
|» actualNights|integer(int32)|false|none|none|
|» grossRevenue|string|false|none|none|
|» nettRevenue|string|false|none|none|
|» grossOther|string|false|none|none|
|» nettOther|string|false|none|none|
|» totalGrossRevenue|string|false|none|none|
|» totalNettRevenue|string|false|none|none|
|» averageGrossRevenue|string|false|none|none|
|» averageNettRevenue|string|false|none|none|
|» averageDiscount|string|false|none|none|
|» averageGrossOther|string|false|none|none|
|» averageNettOther|string|false|none|none|
|» averageDailyGrossRevenue|string|false|none|none|
|» averageDailyNettRevenue|string|false|none|none|
|» occupancy|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTheAuditTrailReport

<a id="opIdgetTheAuditTrailReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/auditTrail \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/auditTrail HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyIds": [
    1
  ],
  "accountClassifications": [
    "Reservation"
  ],
  "glCodeIds": [],
  "byPostingDate": true,
  "groupBy": "NoGrouping",
  "transactionOption": "ByDate",
  "fromDate": "2023-10-05 00:00:00",
  "toDate": "2023-10-05 23:23:59",
  "transactionIdFrom": 0,
  "transactionIdTo": 0,
  "sortBy": "reservationId"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/auditTrail',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/auditTrail',
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

r = requests.post('https://restapi8.rmscloud.com/reports/auditTrail', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/auditTrail', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/auditTrail");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/auditTrail", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/auditTrail`

*Build the Audit Trail report*

> Body parameter

```json
{
  "propertyIds": [
    1
  ],
  "accountClassifications": [
    "Reservation"
  ],
  "glCodeIds": [],
  "byPostingDate": true,
  "groupBy": "NoGrouping",
  "transactionOption": "ByDate",
  "fromDate": "2023-10-05 00:00:00",
  "toDate": "2023-10-05 23:23:59",
  "transactionIdFrom": 0,
  "transactionIdTo": 0,
  "sortBy": "reservationId"
}
```

<h3 id="gettheaudittrailreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportsAuditTrail](#schemareportsaudittrail)|true|Audit Trail report build options|

> Example responses

> 200 Response

```json
[
  {
    "Data": [
      {
        "propertyId": 1,
        "propertyName": "Test property 1",
        "glCodeId": 40,
        "glCod": "Toni1",
        "postingDate": "2023-10-05 00:00:00",
        "createdDate": "2023-10-05 18:26:08",
        "transactionId": 2492469,
        "reservationId": 216865,
        "accountId": 362486,
        "areaId": 287,
        "guestSurname": "",
        "guestGiven": "",
        "transactionDescription": "Currency Adjustment",
        "taxInvoiceId": 0,
        "userId": 186,
        "debit": 0,
        "credit": 0,
        "loyaltyMembershipType": "",
        "group": ""
      }
    ]
  }
]
```

<h3 id="gettheaudittrailreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettheaudittrailreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportsAuditTrailResponse](#schemareportsaudittrailresponse)]|false|none|none|
|» data|[[reportsAuditTrailResponseData](#schemareportsaudittrailresponsedata)]|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» propertyName|string|false|none|none|
|»» glCodeId|integer(int32)|false|none|none|
|»» postingDate|string(date-time)|false|none|none|
|»» createDate|string(date-time)|false|none|none|
|»» transactionId|integer(int32)|false|none|none|
|»» reservationId|integer(int32)|false|none|none|
|»» accountId|integer(int32)|false|none|none|
|»» areaId|integer(int32)|false|none|none|
|»» guestSurname|string|false|none|none|
|»» guestGiven|string|false|none|none|
|»» transactionDescription|string|false|none|none|
|»» taxInvoiceId|integer(int32)|false|none|none|
|»» userId|integer(int32)|false|none|none|
|»» debits|integer(decimal)|false|none|none|
|»» credits|integer(decimal)|false|none|none|
|»» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|»» group|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTheCashReport

<a id="opIdgetTheCashReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/cash \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/cash HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dateFrom": "2022-06-01",
  "dateTo": "2022-06-21",
  "groupBy": "Category",
  "propertyIds": [
    1,
    3,
    4
  ],
  "categoryIds": [
    0
  ],
  "groupByProperty": true,
  "excludeOwnerAccountingCharges": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/cash',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/cash',
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

r = requests.post('https://restapi8.rmscloud.com/reports/cash', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/cash', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/cash");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/cash", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/cash`

*Build the Cash summary report*

> Body parameter

```json
{
  "dateFrom": "2022-06-01",
  "dateTo": "2022-06-21",
  "groupBy": "Category",
  "propertyIds": [
    1,
    3,
    4
  ],
  "categoryIds": [
    0
  ],
  "groupByProperty": true,
  "excludeOwnerAccountingCharges": true
}
```

<h3 id="getthecashreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportsCashChargeBuild](#schemareportscashchargebuild)|true|Cash Charge report build options|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 1,
    "glCode": "4-1000",
    "glCodeId": 33,
    "description": "Accommodation",
    "totalCharge": 53.1,
    "totalGST": 4.82,
    "gstExclusive": 48.28,
    "gstFreeCharge": 0,
    "fullGSTGST": 4.82,
    "fullGSTCharge": 53.1,
    "concessionalGSTCharge": 0,
    "concessionalGSTGST": 0
  }
]
```

<h3 id="getthecashreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getthecashreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportsCashChargeResponse](#schemareportscashchargeresponse)]|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» glCode|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» totalCharge|integer(decimal)|false|none|none|
|» totalGST|integer(decimal)|false|none|none|
|» gstExclusive|integer(decimal)|false|none|none|
|» gstFreeCharge|integer(decimal)|false|none|none|
|» fullGSTGST|integer(decimal)|false|none|none|
|» fullGSTCharge|integer(decimal)|false|none|none|
|» concessionalGSTCharge|integer(decimal)|false|none|none|
|» concessionalGSTGST|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTheChargeReport

<a id="opIdgetTheChargeReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/charge \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/charge HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dateFrom": "2022-06-01",
  "dateTo": "2022-06-21",
  "groupBy": "Category",
  "propertyIds": [
    1,
    3,
    4
  ],
  "categoryIds": [
    0
  ],
  "groupByProperty": true,
  "excludeOwnerAccountingCharges": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/charge',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/charge',
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

r = requests.post('https://restapi8.rmscloud.com/reports/charge', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/charge', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/charge");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/charge", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/charge`

*Build the Charge summary report*

> Body parameter

```json
{
  "dateFrom": "2022-06-01",
  "dateTo": "2022-06-21",
  "groupBy": "Category",
  "propertyIds": [
    1,
    3,
    4
  ],
  "categoryIds": [
    0
  ],
  "groupByProperty": true,
  "excludeOwnerAccountingCharges": true
}
```

<h3 id="getthechargereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportsCashChargeBuild](#schemareportscashchargebuild)|true|Cash Charge report build options|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 1,
    "glCode": "4-1000",
    "glCodeId": 33,
    "description": "Accommodation",
    "totalCharge": 53.1,
    "totalGST": 4.82,
    "gstExclusive": 48.28,
    "gstFreeCharge": 0,
    "fullGSTGST": 4.82,
    "fullGSTCharge": 53.1,
    "concessionalGSTCharge": 0,
    "concessionalGSTGST": 0
  }
]
```

<h3 id="getthechargereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getthechargereport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportsCashChargeResponse](#schemareportscashchargeresponse)]|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» glCode|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» totalCharge|integer(decimal)|false|none|none|
|» totalGST|integer(decimal)|false|none|none|
|» gstExclusive|integer(decimal)|false|none|none|
|» gstFreeCharge|integer(decimal)|false|none|none|
|» fullGSTGST|integer(decimal)|false|none|none|
|» fullGSTCharge|integer(decimal)|false|none|none|
|» concessionalGSTCharge|integer(decimal)|false|none|none|
|» concessionalGSTGST|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTheDebtorsLedgerReport

<a id="opIdgetTheDebtorsLedgerReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/debtorsLedger \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/debtorsLedger HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "asOfDate": "2022-06-21",
  "groupByProperty": false,
  "groupBy": "Category",
  "propertyIds": [
    1
  ],
  "categoryIds": [],
  "balance": "AgedYDays",
  "balanceAgeX": 12,
  "balanceAgeY": 15,
  "balanceAgeZ": 33,
  "accountClassIds": null,
  "accountTypes": [],
  "includeLongTerm": true,
  "includeNonLongTerm": true,
  "onlyCompanies": false,
  "onlyTravelAgents": false,
  "onlyWholesalers": false,
  "creditDebit": "Both",
  "accountIds": [],
  "excludeFutureReservations": false,
  "clientClassId": 0,
  "excludeTrustChargesForReservationAccounts": false,
  "invoicedTransactionsOnly": false,
  "clientStatusIds": [],
  "onlyNonARDebtors": false,
  "includeTrustBreakdown": false,
  "compareOldAndNew": false,
  "excludeNonInvoicedRepeatCharges": false,
  "includeManagementExpensesBreakdown": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/debtorsLedger',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/debtorsLedger',
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

r = requests.post('https://restapi8.rmscloud.com/reports/debtorsLedger', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/debtorsLedger', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/debtorsLedger");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/debtorsLedger", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/debtorsLedger`

*Build the Debtors Ledger report*

> Body parameter

```json
{
  "asOfDate": "2022-06-21",
  "groupByProperty": false,
  "groupBy": "Category",
  "propertyIds": [
    1
  ],
  "categoryIds": [],
  "balance": "AgedYDays",
  "balanceAgeX": 12,
  "balanceAgeY": 15,
  "balanceAgeZ": 33,
  "accountClassIds": null,
  "accountTypes": [],
  "includeLongTerm": true,
  "includeNonLongTerm": true,
  "onlyCompanies": false,
  "onlyTravelAgents": false,
  "onlyWholesalers": false,
  "creditDebit": "Both",
  "accountIds": [],
  "excludeFutureReservations": false,
  "clientClassId": 0,
  "excludeTrustChargesForReservationAccounts": false,
  "invoicedTransactionsOnly": false,
  "clientStatusIds": [],
  "onlyNonARDebtors": false,
  "includeTrustBreakdown": false,
  "compareOldAndNew": false,
  "excludeNonInvoicedRepeatCharges": false,
  "includeManagementExpensesBreakdown": true
}
```

<h3 id="getthedebtorsledgerreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportsDebtorsLedgerBuild](#schemareportsdebtorsledgerbuild)|true|Debtors Ledger report build options|

> Example responses

> 200 Response

```json
[
  {
    "reportData": [
      {
        "accountId": 1,
        "propertyId": 1,
        "reservationId": 0,
        "guestId": 0,
        "credits": 0,
        "current": 0,
        "debits": 8883.18,
        "ageZ": 8751.74,
        "ageY": 0,
        "ageX": 0,
        "total": 8751.74,
        "trustTotal": 0,
        "nonTrustTotal": 0,
        "accountHasIssues": false,
        "group": "",
        "invoiceId": 0,
        "recordType": "NonAR",
        "arCompanyId": 0,
        "arTravelAgentId": 0,
        "managementExpenses": 0,
        "notionalExpenses": 0,
        "sundryExpenses": 8797.89,
        "ownerIncome": -46.15,
        "managementExpensesBreakdown": [
          {
            "breakdownType": "Sundry",
            "reservationId": 0,
            "accountId": 1,
            "amount": 148.5,
            "gst": 13.5
          },
          {
            "breakdownType": "Sundry",
            "reservationId": 0,
            "accountId": 1,
            "amount": 148.5,
            "gst": 13.5
          }
        ]
      }
    ]
  }
]
```

<h3 id="getthedebtorsledgerreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getthedebtorsledgerreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportsDebtorsLedgerResponse](#schemareportsdebtorsledgerresponse)]|false|none|none|
|» reportData|[[reportsDebtorsLedgerResponseData](#schemareportsdebtorsledgerresponsedata)]|false|none|none|
|»» accountId|integer(int32)|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» reservationId|integer(int32)|false|none|none|
|»» guestId|integer(int32)|false|none|none|
|»» credits|integer(decimal)|false|none|none|
|»» current|integer(decimal)|false|none|none|
|»» debits|integer(decimal)|false|none|none|
|»» ageZ|integer(decimal)|false|none|none|
|»» ageY|integer(decimal)|false|none|none|
|»» ageX|integer(decimal)|false|none|none|
|»» total|integer(decimal)|false|none|none|
|»» trustTotal|integer(decimal)|false|none|none|
|»» nonTrustTotal|integer(decimal)|false|none|none|
|»» accountHasIssues|boolean|false|none|none|
|»» group|string|false|none|none|
|»» invoiceId|integer(int32)|false|none|none|
|»» recordType|string|false|none|none|
|»» arCompanyId|integer(int32)|false|none|none|
|»» arTravelAgentId|integer(int32)|false|none|none|
|»» managementExpenses|integer(decimal)|false|none|none|
|»» notionalExpenses|integer(decimal)|false|none|none|
|»» sundryExpenses|integer(decimal)|false|none|none|
|»» ownerIncome|integer(decimal)|false|none|none|
|»» managementExpensesBreakdown|[[reportsDebtorsLedgerResponseDailyBreakdown](#schemareportsdebtorsledgerresponsedailybreakdown)]|false|none|none|
|»»» breakdownType|string|false|none|none|
|»»» reservationId|integer(int32)|false|none|none|
|»»» accountId|integer(int32)|false|none|none|
|»»» amount|integer(decimal)|false|none|none|
|»»» gst|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTheExpensesAreaSummaryReport

<a id="opIdgetTheExpensesAreaSummaryReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/expensesAreaSummary \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/expensesAreaSummary HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dateFrom": "2021-11-01 00:00:00",
  "dateTo": "2021-12-01 00:00:00",
  "categoryIds": [
    12,
    13
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/expensesAreaSummary',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/expensesAreaSummary',
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

r = requests.post('https://restapi8.rmscloud.com/reports/expensesAreaSummary', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/expensesAreaSummary', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/expensesAreaSummary");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/expensesAreaSummary", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/expensesAreaSummary`

*Build the Expense Summary by area report*

> Body parameter

```json
{
  "dateFrom": "2021-11-01 00:00:00",
  "dateTo": "2021-12-01 00:00:00",
  "categoryIds": [
    12,
    13
  ]
}
```

<h3 id="gettheexpensesareasummaryreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportExpensesAreaSummaryBuild](#schemareportexpensesareasummarybuild)|true|Expenses Area Summary report build options|

> Example responses

> 200 Response

```json
[
  {
    "reportData": [
      {
        "area": "Amazing Grace",
        "ownerName": "Cannon Graham",
        "description": "Income",
        "amount": "422.00"
      },
      {
        "area": "Amazing Grace",
        "ownerName": "Cannon Graham",
        "description": "Management Fee",
        "amount": "-84.36"
      }
    ]
  }
]
```

<h3 id="gettheexpensesareasummaryreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettheexpensesareasummaryreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportExpensesAreaSummaryResponse](#schemareportexpensesareasummaryresponse)]|false|none|none|
|» reportData|[[reportExpensesAreaSummaryResponseReportData](#schemareportexpensesareasummaryresponsereportdata)]|false|none|none|
|»» area|string|false|none|none|
|»» ownerName|string|false|none|none|
|»» description|string|false|none|none|
|»» amount|string(number)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReportsFlash

<a id="opIdpostReportsFlash"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/flash \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/flash HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyIds": [
    1,
    3
  ],
  "runDate": "2025-01-03"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/flash',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/flash',
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

r = requests.post('https://restapi8.rmscloud.com/reports/flash', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/flash', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/flash");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/flash", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/flash`

*Build the Flash Report*

> Body parameter

```json
{
  "propertyIds": [
    1,
    3
  ],
  "runDate": "2025-01-03"
}
```

<h3 id="postreportsflash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportsFlash](#schemareportsflash)|true|Build the Flash Report|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "grouping": "Income",
      "data": [
        {
          "grouping": "",
          "description": "",
          "dayBudget": 0,
          "dayActual": 120,
          "dayLastYear": 48.75,
          "monthBudget": 0,
          "monthActual": 240,
          "monthLastYear": 48.75,
          "yearBudget": 0,
          "yearActual": 14790.27,
          "yearLastYear": 65566.92,
          "glCodeId": 367,
          "glCode": "Some Tax GL Code",
          "glGroupId": 0,
          "todayOnly": false
        }
      ]
    }
  ]
}
```

<h3 id="postreportsflash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reportsFlashResponse](#schemareportsflashresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## gethistoryForecastReport

<a id="opIdgethistoryForecastReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/historyForecast \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/historyForecast HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "categoryIds": [
    8,
    9
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "operationalRevenue": "gross",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/historyForecast',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/historyForecast',
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

r = requests.post('https://restapi8.rmscloud.com/reports/historyForecast', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/historyForecast', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/historyForecast");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/historyForecast", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/historyForecast`

*Build History and Forecast reporting*

> Body parameter

```json
{
  "categoryIds": [
    8,
    9
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "operationalRevenue": "gross",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore"
}
```

<h3 id="gethistoryforecastreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportHistoryForecastBuild](#schemareporthistoryforecastbuild)|true|History and forecast report build options|

> Example responses

> 200 Response

```json
[
  {
    "accommodationRevenue": 925.88,
    "arrivingRooms": 5,
    "averageRate": 370.24,
    "complementaryRooms": 0,
    "dayUseRooms": 0,
    "departingRooms": 6,
    "foodBeverageRevenue": 0,
    "houseUse": 0,
    "noShow": 0,
    "occupancyPercentage": 16.67,
    "otherRevenue": 668.48,
    "outOfOrderRooms": 1,
    "theDate": "2020-02-25 00:00:00",
    "totalOccupancy": 25
  }
]
```

<h3 id="gethistoryforecastreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gethistoryforecastreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportHistoryForecast](#schemareporthistoryforecast)]|false|none|none|
|» accommodationRevenue|integer(decimal)|false|none|none|
|» arrivingRooms|integer(int32)|false|none|none|
|» averageRate|integer(decimal)|false|none|none|
|» complementaryRooms|integer(int32)|false|none|none|
|» dayUseRooms|integer(int32)|false|none|none|
|» departingRooms|integer(int32)|false|none|none|
|» foodBeverageRevenue|integer(decimal)|false|none|none|
|» houseUse|integer(int32)|false|none|none|
|» noShow|integer(int32)|false|none|none|
|» occupancyPercentage|integer(decimal)|false|none|none|
|» otherRevenue|integer(decimal)|false|none|none|
|» outOfOrderRooms|integer(int32)|false|none|none|
|» theDate|string(date-time)|false|none|none|
|» totalOccupancy|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## npsResultsReport

<a id="opIdnpsResultsReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/npsResults \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/npsResults HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "categoryIds": [
    4,
    6
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "npsRating": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "propertyIds": [
    1,
    2
  ],
  "reportBy": "surveyDate"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/npsResults',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/npsResults',
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

r = requests.post('https://restapi8.rmscloud.com/reports/npsResults', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/npsResults', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/npsResults");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/npsResults", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/npsResults`

*Build the NPS Results report*

> Body parameter

```json
{
  "categoryIds": [
    4,
    6
  ],
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "npsRating": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "propertyIds": [
    1,
    2
  ],
  "reportBy": "surveyDate"
}
```

<h3 id="npsresultsreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportNpnResultsBuild](#schemareportnpnresultsbuild)|true|NPS report build options|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 1,
    "totalResponses": 3,
    "responsesRate": 9.68,
    "netPromoterStore": 66.76,
    "service": 9.33,
    "standardOfFacilities": 7.67,
    "site": 9.33,
    "valueForMoney": 8.33,
    "surveyDeatils": [
      {
        "arrivalDate": "2020-06-28 16:37:00",
        "departureDate": "2020-07-01 08:52:50",
        "npsRating": 7,
        "serviceRating": 8,
        "facilityRating": 3,
        "siteRating": 8,
        "valueRating": 8,
        "categoryId": 5,
        "reservationId": 4585654,
        "comments": "Not being allowed to have access to a toilet and shower was very disappointing. Although we are self contained a good size shower would have been wonderful at least once"
      },
      {
        "arrivalDate": "2020-07-01 15:28:00",
        "departureDate": "2020-07-03 10:34:43",
        "npsRating": 10,
        "serviceRating": 10,
        "facilityRating": 10,
        "siteRating": 10,
        "valueRating": 7,
        "categoryId": 4,
        "reservationId": 4215468,
        "comments": "Very comfortable accommodation. Just loved it. Will be back again. Just a bit expensive."
      }
    ]
  }
]
```

<h3 id="npsresultsreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="npsresultsreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportNpnResults](#schemareportnpnresults)]|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» totalResponses|integer(int32)|false|none|none|
|» responsesRate|integer(int32)|false|none|This value represents a percentage of the response rate.|
|» netPromoterStore|integer(decimal)|false|none|none|
|» service|integer(decimal)|false|none|none|
|» standardOfFacilities|integer(decimal)|false|none|none|
|» site|integer(decimal)|false|none|none|
|» valueForMoney|integer(decimal)|false|none|none|
|» surveyDeatils|[[reportNpnResultsSurveyDeatils](#schemareportnpnresultssurveydeatils)]|false|none|none|
|»» arrivalDate|string(date-time)|false|none|none|
|»» departureDate|string(date-time)|false|none|none|
|»» npsRating|integer(int32)|false|none|none|
|»» serviceRating|integer(int32)|false|none|none|
|»» facilityRating|integer(int32)|false|none|none|
|»» siteRating|integer(int32)|false|none|none|
|»» valueRating|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» reservationId|integer(int32)|false|none|none|
|»» comments|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## nightAuditReport

<a id="opIdnightAuditReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/nightAudit \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/nightAudit HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 1,
  "rundate": "2023-01-01"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/nightAudit',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/nightAudit',
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

r = requests.post('https://restapi8.rmscloud.com/reports/nightAudit', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/nightAudit', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/nightAudit");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/nightAudit", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/nightAudit`

*Build the 1st page of the Night Audit report*

> Body parameter

```json
{
  "propertyId": 1,
  "rundate": "2023-01-01"
}
```

<h3 id="nightauditreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportNightAudit](#schemareportnightaudit)|true|Night Audit 1st Page report build options|

> Example responses

> 200 Response

```json
[
  {
    "outstandingGuestBalance": 0,
    "summary": [
      {
        "transactions": [
          {
            "cash": 0,
            "cheque": 0,
            "creditCard": 0,
            "directCredit": 0,
            "directDebit": 0,
            "journal": 0,
            "cashExpense": 0,
            "refund": 0,
            "eftPos": 0
          }
        ],
        "debtorsAnalysis": [
          {
            "advancesLedger": [
              {
                "openingBalance": 0,
                "plusNewCredits": 0,
                "lessCreditsUsed": 0,
                "lessCreditsRefunded": 0,
                "closingBalance": 0
              }
            ],
            "guestLedger": [
              {
                "openingBalance": 0,
                "plusNewReservationCharges": 0,
                "lessPaidBalances": 0,
                "closingBalance": 0
              }
            ],
            "cityLedger": [
              {
                "openingBalance": 0,
                "plusNewCredits": 0,
                "lessCreditsUsed": 0,
                "lessCreditsRefunded": 0,
                "plusNewTransfers": 0,
                "lessPaidBalances": 0,
                "closingBalance": 0
              }
            ]
          }
        ]
      }
    ]
  }
]
```

<h3 id="nightauditreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="nightauditreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportNightAuditReport](#schemareportnightauditreport)]|false|none|none|
|» outstandingGuestBalance|integer(decimal)|false|none|none|
|» summary|[[reportNightAuditReportSummary](#schemareportnightauditreportsummary)]|false|none|none|
|»» transactions|[[reportNightAuditTransactions](#schemareportnightaudittransactions)]|false|none|none|
|»»» cash|integer(decimal)|false|none|none|
|»»» cheque|integer(decimal)|false|none|none|
|»»» creditCard|integer(decimal)|false|none|none|
|»»» directCredit|integer(decimal)|false|none|none|
|»»» directDebit|integer(decimal)|false|none|none|
|»»» journal|integer(decimal)|false|none|none|
|»»» cashExpense|integer(decimal)|false|none|none|
|»»» refund|integer(decimal)|false|none|none|
|»»» eftPos|integer(decimal)|false|none|none|
|»» debtorsAnalysis|[[reportNightAuditDebtorAnalysis](#schemareportnightauditdebtoranalysis)]|false|none|none|
|»»» advancesLedger|[[reportNightAuditAdvancesLedger](#schemareportnightauditadvancesledger)]|false|none|none|
|»»»» openingBalance|integer(decimal)|false|none|none|
|»»»» plusNewCredits|integer(decimal)|false|none|none|
|»»»» lessCreditsUsed|integer(decimal)|false|none|none|
|»»»» lessCreditsRefunded|integer(decimal)|false|none|none|
|»»»» closingBalance|integer(decimal)|false|none|none|
|»»» guestLedger|[[reportNightAuditGuestLedger](#schemareportnightauditguestledger)]|false|none|none|
|»»»» openingBalance|integer(decimal)|false|none|none|
|»»»» plusNewReservationCharges|integer(decimal)|false|none|none|
|»»»» lessPaidBalances|integer(decimal)|false|none|none|
|»»»» closingBalance|integer(decimal)|false|none|none|
|»»» cityLedger|[[reportNightAuditCityLedger](#schemareportnightauditcityledger)]|false|none|none|
|»»»» openingBalance|integer(decimal)|false|none|none|
|»»»» plusNewCredits|integer(decimal)|false|none|none|
|»»»» lessCreditsUsed|integer(decimal)|false|none|none|
|»»»» lessCreditsRefunded|integer(decimal)|false|none|none|
|»»»» plusNewTransfers|integer(decimal)|false|none|none|
|»»»» lessPaidBalances|integer(decimal)|false|none|none|
|»»»» closingBalance|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## occupancyReport

<a id="opIdoccupancyReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/occupancy \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/occupancy HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    2,
    3,
    4
  ],
  "dailyBreakdown": false,
  "dateFrom": "2025-03-18T00:00:00Z",
  "dateTo": "2025-03-23T00:00:00Z",
  "dayOfTheWeek": [
    "all"
  ],
  "includeInfantsInOccupantsTotal": true,
  "includeReservationIds": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1
  ],
  "replaceOccupantsWithGuestNights": false,
  "roomStatistics": true,
  "groupBy1": "category",
  "groupBy2": "property"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/occupancy',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/occupancy',
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

r = requests.post('https://restapi8.rmscloud.com/reports/occupancy', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/occupancy', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/occupancy");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/occupancy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/occupancy`

*Build occupancy reporting*

> Body parameter

```json
{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    2,
    3,
    4
  ],
  "dailyBreakdown": false,
  "dateFrom": "2025-03-18T00:00:00Z",
  "dateTo": "2025-03-23T00:00:00Z",
  "dayOfTheWeek": [
    "all"
  ],
  "includeInfantsInOccupantsTotal": true,
  "includeReservationIds": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1
  ],
  "replaceOccupantsWithGuestNights": false,
  "roomStatistics": true,
  "groupBy1": "category",
  "groupBy2": "property"
}
```

<h3 id="occupancyreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportOccupancyBuild](#schemareportoccupancybuild)|true|Occupancy report build options|

> Example responses

> 200 Response

```json
{
  "Breakdown": [
    {
      "categoryId": 2,
      "description": "This value is dependent on the values passed in grouping1 and grouping2",
      "discount": 0,
      "grossAverageRevPOR": 1023.5,
      "netAverageRevPOR": 1023.5,
      "numberOfAreasAvailable": 6,
      "numberOfAreasInMaintenance": 0,
      "numberOfAreasUnused": 2,
      "numberOfAreasUsed": 4,
      "numberOfAreasTotal": 1,
      "occupancyPercentage": 0.666667,
      "occupants": 3,
      "period": "Days",
      "revPar": 682.33,
      "netRevPar": 682.33,
      "totalGrossRevenue": 4094,
      "totalNetRevenue": 4094,
      "theDate": "2025-03-29T08:14:00Z",
      "groupBy1": "Deluxe 002",
      "groupBy2": "Test property 1",
      "propertyId": 1,
      "reservationIds": [
        225989
      ],
      "occupantsBreakdown": "2A 2I"
    },
    {
      "categoryId": 3,
      "description": "Deluxe 003",
      "discount": 0,
      "grossAverageRevPOR": 0,
      "netAverageRevPOR": 0,
      "numberOfAreasAvailable": 66,
      "numberOfAreasInMaintenance": 0,
      "numberOfAreasUnused": 62,
      "numberOfAreasUsed": 4,
      "numberOfAreasTotal": 11,
      "occupancyPercentage": 0.060606,
      "occupants": 4,
      "period": "Days",
      "revPar": 0,
      "netRevPar": 0,
      "totalGrossRevenue": 0,
      "totalNetRevenue": 0,
      "theDate": "2025-03-29T08:14:00Z",
      "groupBy1": "Deluxe 003",
      "groupBy2": "Test property 1",
      "propertyId": 1,
      "reservationIds": [
        226657
      ],
      "occupantsBreakdown": "13A 0.5C 1.5I"
    }
  ]
}
```

<h3 id="occupancyreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reportOccupancy](#schemareportoccupancy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## occupancyReportbyArea

<a id="opIdoccupancyReportbyArea"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/occupancyByArea \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/occupancyByArea HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    4,
    6
  ],
  "dailyBreakdown": false,
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy1": "Category",
  "groupBy2": "Property",
  "includeInfantsInOccupantsTotal": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1,
    2
  ],
  "replaceOccupantsWithGuestNights": true,
  "roomStatistics": "ignore",
  "excludeOwnerStays": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/occupancyByArea',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/occupancyByArea',
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

r = requests.post('https://restapi8.rmscloud.com/reports/occupancyByArea', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/occupancyByArea', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/occupancyByArea");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/occupancyByArea", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/occupancyByArea`

*Build occupancy reporting with a break down by area*

> Body parameter

```json
{
  "breakdownAdultChildInfants": true,
  "categoryIds": [
    4,
    6
  ],
  "dailyBreakdown": false,
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy1": "Category",
  "groupBy2": "Property",
  "includeInfantsInOccupantsTotal": true,
  "includeUniqueGuestCount": false,
  "propertyIds": [
    1,
    2
  ],
  "replaceOccupantsWithGuestNights": true,
  "roomStatistics": "ignore",
  "excludeOwnerStays": false
}
```

<h3 id="occupancyreportbyarea-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportOccupancyByAreaBuild](#schemareportoccupancybyareabuild)|true|Occupancy by area report build options|

> Example responses

> 200 Response

```json
[
  {
    "areaId": 1,
    "categroyId": 4,
    "numberOfAreasAvailable": 14,
    "numberOfAreasUnused": 3,
    "numberOfAreasUsed": 11,
    "occupancyPercentage": 21.43,
    "period": "Days",
    "propertyId": 1,
    "totalGrossRevenue": 826.8,
    "totalNetRevenue": 751.93
  }
]
```

<h3 id="occupancyreportbyarea-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="occupancyreportbyarea-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportOccupancyByArea](#schemareportoccupancybyarea)]|false|none|none|
|» areaId|integer(decimal)|false|none|none|
|» categoryId|integer(int32)|false|none|This value is returned based on your grouping options|
|» numberOfAreasAvailable|integer(int32)|false|none|none|
|» numberOfAreasUnused|integer(int32)|false|none|none|
|» numberOfAreasUsed|integer(int32)|false|none|none|
|» occupancyPercentage|integer(decimal)|false|none|none|
|» period|string|false|none|none|
|» propertyId|integer(int32)|false|none|This value is returned based on your grouping options|
|» totalGrossRevenue|integer(decimal)|false|none|none|
|» totalNetRevenue|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## occupancyRevenueComparisonReport

<a id="opIdoccupancyRevenueComparisonReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/occupancyRevenueComparison \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/occupancyRevenueComparison HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allReservationsBetween": [
    {
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "allReservationsPriorTo": [
    {
      "reservationsMadePriorToDate": "1900-00-00 00:00:00",
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsMadePriorToDate": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "categoryIds": [
    4,
    5
  ],
  "categoryGroupingIds": [
    1
  ],
  "excludeReservationWithStatusOfOwnerOccupied": false,
  "groupByProperty": false,
  "groupByTravelAgent": true,
  "includeLongTermReservation": true,
  "propertyIds": [
    1
  ],
  "replaceTotalArrivalsAndAvailsNightsWithNettRevPARAndNetRevPOR": false,
  "roomStatistics": "ignore",
  "travelAgentIds": [
    45,
    12
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/occupancyRevenueComparison',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/occupancyRevenueComparison',
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

r = requests.post('https://restapi8.rmscloud.com/reports/occupancyRevenueComparison', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/occupancyRevenueComparison', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/occupancyRevenueComparison");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/occupancyRevenueComparison", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/occupancyRevenueComparison`

*Build the occupancy revenue comparison report*

> Body parameter

```json
{
  "allReservationsBetween": [
    {
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "allReservationsPriorTo": [
    {
      "reservationsMadePriorToDate": "1900-00-00 00:00:00",
      "reservationsBetweenStart": "1900-00-00 00:00:00",
      "reservationsBetweenEnd": "1900-00-00 00:00:00",
      "comparedToReservationsMadePriorToDate": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenStart": "1900-00-00 00:00:00",
      "comparedToReservationsBetweenEnd": "1900-00-00 00:00:00"
    }
  ],
  "categoryIds": [
    4,
    5
  ],
  "categoryGroupingIds": [
    1
  ],
  "excludeReservationWithStatusOfOwnerOccupied": false,
  "groupByProperty": false,
  "groupByTravelAgent": true,
  "includeLongTermReservation": true,
  "propertyIds": [
    1
  ],
  "replaceTotalArrivalsAndAvailsNightsWithNettRevPARAndNetRevPOR": false,
  "roomStatistics": "ignore",
  "travelAgentIds": [
    45,
    12
  ]
}
```

<h3 id="occupancyrevenuecomparisonreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportOccupancyRevenueComparisonBuild](#schemareportoccupancyrevenuecomparisonbuild)|true|Occupancy revenue comparison report build options|

> Example responses

> 200 Response

```json
[
  {
    "title": "string"
  }
]
```

<h3 id="occupancyrevenuecomparisonreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="occupancyrevenuecomparisonreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportOccupancyRevenueComparison](#schemareportoccupancyrevenuecomparison)]|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## paceReport

<a id="opIdpaceReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/pace \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/pace HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "categoryIds": [
    4,
    6
  ],
  "compareTo": "lastYear",
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy": "Category",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-02-27 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/pace',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/pace',
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

r = requests.post('https://restapi8.rmscloud.com/reports/pace', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/pace', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/pace");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/pace", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/pace`

*Build the pace report*

> Body parameter

```json
{
  "categoryIds": [
    4,
    6
  ],
  "compareTo": "lastYear",
  "dateFrom": "2020-02-25 00:00:00",
  "dateTo": "2020-02-26 00:00:00",
  "groupBy": "Category",
  "propertyIds": [
    1,
    2
  ],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-02-27 00:00:00"
}
```

<h3 id="pacereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportPaceBuild](#schemareportpacebuild)|true|pace report build options|

> Example responses

> 200 Response

```json
[
  {
    "title": "Pace Report",
    "report": [
      {
        "propertyId": 1,
        "propertyName": "Test property 1",
        "categoryName": "Deluxe 004",
        "categoryId": 4,
        "categoryGroupType": "",
        "categoryGroupTypeId": 0,
        "current": [
          {
            "reservation": 3,
            "nights": 5,
            "grossRevenue": 1048,
            "nettRevenue": 953.33,
            "averageDailyRateGross": 209.6,
            "averageDailyRateNett": 190.67,
            "occupancyPercent": 17.86
          }
        ],
        "previous": [
          {
            "reservation": 19,
            "nights": 27,
            "grossRevenue": 9704,
            "nettRevenue": 8821.81,
            "averageDailyRateGross": 359.41,
            "averageDailyRateNett": 326.73,
            "occupancyPercent": 96.43
          }
        ],
        "variance": [
          {
            "reservation": -16,
            "reservationPercent": -84.2105263157895,
            "nights": 22,
            "nightsPercent": -81.4814814814815,
            "grossRevenue": -8656,
            "grossRevenuePercent": -89.20032976092332,
            "nettRevenue": -7868.48,
            "nettRevenuePercent": -89.193487504265,
            "averageDailyRateGross": -149.81,
            "averageDailyRateGrossPercent": -41.68220138560419,
            "averageDailyRateNett": -136.06,
            "averageDailyRateNettPercent": -41.642946775625134,
            "occupancyPercent": -78.57
          }
        ]
      }
    ]
  }
]
```

<h3 id="pacereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="pacereport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportPace](#schemareportpace)]|false|none|none|
|» title|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» categoryName|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryGroupType|string|false|none|none|
|» categoryGroupTypeId|integer(int32)|false|none|none|
|» current|[[reportPaceCurrentPrevious](#schemareportpacecurrentprevious)]|false|none|none|
|»» reservation|integer(int32)|false|none|none|
|»» nights|integer(int32)|false|none|none|
|»» grossRevenue|integer(int32)|false|none|none|
|»» nettRevenue|integer(decimal)|false|none|none|
|»» averageDailyRateGross|integer(decimal)|false|none|none|
|»» averageDailyRateNett|integer(decimal)|false|none|none|
|»» occupancyPercent|integer(decimal)|false|none|none|
|» previous|[[reportPaceCurrentPrevious](#schemareportpacecurrentprevious)]|false|none|none|
|» variance|[[reportPaceVariance](#schemareportpacevariance)]|false|none|none|
|»» reservation|integer(int32)|false|none|none|
|»» reservationPercent|integer(decimal)|false|none|none|
|»» nights|integer(int32)|false|none|none|
|»» nightsPercent|integer(decimal)|false|none|none|
|»» grossRevenue|integer(int32)|false|none|none|
|»» grossRevenuePercent|integer(decimal)|false|none|none|
|»» nettRevenue|integer(decimal)|false|none|none|
|»» nettRevenuePercent|integer(decimal)|false|none|none|
|»» averageDailyRateGross|integer(decimal)|false|none|none|
|»» averageDailyRateGrossPercent|integer(decimal)|false|none|none|
|»» averageDailyRateNett|integer(decimal)|false|none|none|
|»» averageDailyRateNettPercent|integer(decimal)|false|none|none|
|»» occupancyPercent|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## pathfinderReport

<a id="opIdpathfinderReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/pathfinder \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/pathfinder HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "propertyId": 2,
  "reportDate": "2022-01-11"
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/pathfinder',
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
  'authtoken' => 'API_KEY'
}

result = RestClient.post 'https://restapi8.rmscloud.com/reports/pathfinder',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.post('https://restapi8.rmscloud.com/reports/pathfinder', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/pathfinder', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/pathfinder");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/pathfinder", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/pathfinder`

*Build the pathfinder report*

> Body parameter

```json
{
  "propertyId": 2,
  "reportDate": "2022-01-11"
}
```

<h3 id="pathfinderreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportParthfinderBuild](#schemareportparthfinderbuild)|true|Object to pass to search forpathFinder report|

<h3 id="pathfinderreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## performanceIIReport

<a id="opIdperformanceIIReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/performanceII \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/performanceII HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "categoryIds": [],
  "comparisonAgainstSameTimeLastYear": true,
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "groupBy": "Category",
  "monthlyBreakdownBy": "grossRevenue",
  "performanceBasedOn": "revenue",
  "propertyIds": [
    1,
    3,
    4
  ],
  "replaceCancellationAndNoShowPercentageWithNettRevPercentage": false,
  "reportType": "company",
  "reportTypeOptionIds": [],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-06-12 00:00:00",
  "showOnlyTop": 10
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/performanceII',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/performanceII',
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

r = requests.post('https://restapi8.rmscloud.com/reports/performanceII', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/performanceII', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/performanceII");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/performanceII", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/performanceII`

*Build the performance II report*

> Body parameter

```json
{
  "categoryIds": [],
  "comparisonAgainstSameTimeLastYear": true,
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "groupBy": "Category",
  "monthlyBreakdownBy": "grossRevenue",
  "performanceBasedOn": "revenue",
  "propertyIds": [
    1,
    3,
    4
  ],
  "replaceCancellationAndNoShowPercentageWithNettRevPercentage": false,
  "reportType": "company",
  "reportTypeOptionIds": [],
  "roomStatistics": "ignore",
  "reservationDatePriorTo": "2020-06-12 00:00:00",
  "showOnlyTop": 10
}
```

<h3 id="performanceiireport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportPerformanceIIBuild](#schemareportperformanceiibuild)|true|PerformanceII report build options|

> Example responses

> 200 Response

```json
[
  {
    "title": "Pace Report",
    "report": [
      {
        "propertyId": 1,
        "propertyName": "Test property 1",
        "categoryName": "",
        "categoryId": 0,
        "categoryGroupType": "B1 Rooms",
        "categoryGroupTypeId": 22,
        "reportTypeEntity": "company",
        "current": [
          {
            "reservation": 7,
            "cancellationPercent": 0,
            "noShowPercent": 0,
            "averageLeadTime": -0.43,
            "averageLengthOfStay": 1,
            "nights": 7,
            "grossRevenue": 0,
            "nettRevenue": 0,
            "averageDailyRateGross": 0,
            "averageDailyRateNett": 0
          }
        ],
        "previous": [
          {
            "reservation": 0,
            "cancellationPercent": 0,
            "noShowPercent": 0,
            "averageLeadTime": 0,
            "averageLengthOfStay": 0,
            "nights": 0,
            "grossRevenue": 0,
            "nettRevenue": 0,
            "averageDailyRateGross": 0,
            "averageDailyRateNett": 0
          }
        ],
        "variance": [
          {
            "reservation": 7,
            "reservationPercent": 0,
            "cancellationPercent": 0,
            "noShowPercent": 0,
            "averageLeadTime": -0.43,
            "averageLeadTimePercent": 0,
            "averageLengthOfStay": 1,
            "averageLengthOfStayPercent": 0,
            "nights": 7,
            "nightsPercent": 0,
            "grossRevenue": 0,
            "grossRevenuePercent": 0,
            "nettRevenue": 0,
            "nettRevenuePercent": 0,
            "averageDailyRateGross": 0,
            "averageDailyRateGrossPercent": 0,
            "averageDailyRateNett": 0,
            "averageDailyRateNettPercent": 0
          }
        ]
      }
    ]
  }
]
```

<h3 id="performanceiireport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="performanceiireport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reportPerformanceII](#schemareportperformanceii)]|false|none|none|
|» title|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» categoryName|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryGroupType|string|false|none|none|
|» categoryGroupTypeId|integer(int32)|false|none|none|
|» reportTypeEntity|string|false|none|none|
|» current|[[reportPerformanceIICurrentPrevious](#schemareportperformanceiicurrentprevious)]|false|none|none|
|»» reservation|integer(int32)|false|none|none|
|»» cancellationPercent|integer(int32)|false|none|none|
|»» noShowPercent|integer(int32)|false|none|none|
|»» averageLeadTime|integer(decimal)|false|none|none|
|»» averageLengthOfStay|integer(int32)|false|none|none|
|»» nights|integer(int32)|false|none|none|
|»» grossRevenue|integer(int32)|false|none|none|
|»» nettRevenue|integer(decimal)|false|none|none|
|»» averageDailyRateGross|integer(decimal)|false|none|none|
|»» averageDailyRateNett|integer(decimal)|false|none|none|
|» previous|[[reportPerformanceIICurrentPrevious](#schemareportperformanceiicurrentprevious)]|false|none|none|
|» variance|[[reportPerformanceIIVariance](#schemareportperformanceiivariance)]|false|none|none|
|»» reservation|integer(int32)|false|none|none|
|»» reservationPercent|integer(decimal)|false|none|none|
|»» cancellationPercent|integer(decimal)|false|none|none|
|»» noShowPercent|integer(decimal)|false|none|none|
|»» averageLeadTime|integer(decimal)|false|none|none|
|»» averageLeadTimePercent|integer(decimal)|false|none|none|
|»» averageLengthOfStay|integer(decimal)|false|none|none|
|»» averageLengthOfStayPercent|integer(decimal)|false|none|none|
|»» nights|integer(int32)|false|none|none|
|»» nightsPercent|integer(decimal)|false|none|none|
|»» grossRevenue|integer(int32)|false|none|none|
|»» grossRevenuePercent|integer(decimal)|false|none|none|
|»» nettRevenue|integer(decimal)|false|none|none|
|»» nettRevenuePercent|integer(decimal)|false|none|none|
|»» averageDailyRateGross|integer(decimal)|false|none|none|
|»» averageDailyRateGrossPercent|integer(decimal)|false|none|none|
|»» averageDailyRateNett|integer(decimal)|false|none|none|
|»» averageDailyRateNettPercent|integer(decimal)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## revenueAndExpenseReport

<a id="opIdrevenueAndExpenseReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reports/revenueAndExpense \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reports/revenueAndExpense HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "propertyIds": [
    1,
    2
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reports/revenueAndExpense',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reports/revenueAndExpense',
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

r = requests.post('https://restapi8.rmscloud.com/reports/revenueAndExpense', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reports/revenueAndExpense', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reports/revenueAndExpense");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reports/revenueAndExpense", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reports/revenueAndExpense`

*Build the revenue and expense report. This report is specific to Owner/Trust accounting properties in the United Arab Emirates*

NOTE - This report is specific to Owner/Trust accounting properties in the United Arab Emirates and reports on trust/owner income and expenses

> Body parameter

```json
{
  "dateFrom": "2020-05-01 00:00:00",
  "dateTo": "2020-05-31 00:00:00",
  "propertyIds": [
    1,
    2
  ]
}
```

<h3 id="revenueandexpensereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reportRevenueAndExpenseBuild](#schemareportrevenueandexpensebuild)|true|Revenue And Expense report build options|

> Example responses

> 200 Response

```json
[
  {
    "netDueToOwner": "0.00",
    "totalPaymentsOnBehalfOfOwner": "0.00",
    "paymentsOnBehalfOfOwner": [],
    "totalPayouts": "0.00",
    "ownerShare": "0.00",
    "netRevenue": "0.00",
    "totalOperationalExpenses": "0.00",
    "operationalExpenses": [],
    "grossRevenue": "0.00",
    "averageRate": "0.00",
    "occupancyPercent": "0.00",
    "occupancyOwnerStay": 0,
    "occupancyUsed": 0,
    "occupancyAvailable": 0,
    "occupancyMaintenance": 0,
    "occupancyTotalAvailable": 0,
    "ownerId": 22,
    "propertyId": 1,
    "area": "BUB/MAJ/1106/STU",
    "areaId": 34,
    "accountId": 59,
    "holdAmount": "0.00",
    "paidToOwner": "0.00"
  }
]
```

<h3 id="revenueandexpensereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="revenueandexpensereport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[revenueAndExpenseResponse](#schemarevenueandexpenseresponse)]|false|none|none|
|» reportData|[[revenueAndExpenseResponseBody](#schemarevenueandexpenseresponsebody)]|false|none|none|
|»» netDueToOwner|string(number)|false|none|none|
|»» totalPaymentsOnBehalfOfOwner|string(number)|false|none|none|
|»» paymentsOnBehalfOfOwner|string(array)|false|none|none|
|»» totalPayouts|string(number)|false|none|none|
|»» ownerShare|string(number)|false|none|none|
|»» netRevenue|string(number)|false|none|none|
|»» totalOperationalExpenses|string(number)|false|none|none|
|»» operationalExpenses|string(array)|false|none|none|
|»» grossRevenue|string(number)|false|none|none|
|»» averageRate|string(number)|false|none|none|
|»» occupancyPercent|string(number)|false|none|none|
|»» occupancyOwnerStay|integer(int32)|false|none|none|
|»» occupancyUsed|integer(int32)|false|none|none|
|»» occupancyAvailable|integer(int32)|false|none|none|
|»» occupancyMaintenance|integer(int32)|false|none|none|
|»» occupancyTotalAvailable|integer(int32)|false|none|none|
|»» ownerId|integer(int32)|false|none|none|
|»» propertyId|integer(int32)|false|none|none|
|»» area|string|false|none|none|
|»» areaId|integer(int32)|false|none|none|
|»» accountId|integer(int32)|false|none|none|
|»» holdAmount|string(number)|false|none|none|
|»» paidToOwner|string(number)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

