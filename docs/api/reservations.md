<h1 id="rms-rest-api-reservations">reservations</h1>

Reservations provides central management of individual bookings and their guests in RMS. Fields displayed on the Reservation Screen can be customised by the RMS user.

<a href="https://helpcentre.rmscloud.com/reservations-information/reservations">Find out more</a>

## updateReservation

<a id="opIdupdateReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean',
'preventRateRecalculation' => 'boolean'
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

r = requests.put('https://restapi8.rmscloud.com/reservations', params={
  'ignoreMandatoryFieldWarnings': 'false',  'preventRateRecalculation': 'false'
}, headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations`

*Update an existing reservation*

**Note**:<br> To update the guestId for a reservation, you will need to:<br>1.Add the new guest using: PUT /reservations/{id}/addGuest <br>2.Remove the guest being replaced using: PUT /reservations/{id}/removeGuest

> Body parameter

```json
{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}
```

<h3 id="updatereservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|preventRateRecalculation|query|boolean|true|When set to true the rate will not be recalculated.|
|body|body|[reservationBasic](#schemareservationbasic)|true|Reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="updatereservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updatereservation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservation

<a id="opIdaddReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean'
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

r = requests.post('https://restapi8.rmscloud.com/reservations', params={
  'ignoreMandatoryFieldWarnings': 'false'
}, headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations`

*Add a new reservation.*

All reservations will drop in with the status 'unconfirmed', you can use the call 'PUT/reservations/{id}/status' to update this status. <br> <br> To keep our API fast we have not exposed every field in RMS when creating or making changes to reservations. If a mandatory field warning is returned where the field is not exposed in this object you can use the parameter 'ignoreMandatoryFieldWarnings'. <br><br>Rate Override Example <br> If you have a $100 package on your reservation, this is the expected behavior - <br>If you pass $500 in the base rate override, you’d have $500 in the base rate and $100 in the package.<br>If you pass $500 in the total rate override, you’d have $400 in the base rate and $100 in the package.

> Body parameter

```json
{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}
```

<h3 id="addreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|useIbeDepositRules|query|boolean|false|When set to false the ibe deposit rules will not be used.|
|body|body|[reservationBasic](#schemareservationbasic)|true|Reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="addreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateReservations

<a id="opIdupdateReservations"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationIds": [
    219970,
    219971,
    219972
  ],
  "patch": {
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "areaId": 5,
    "areaName": "Room 7",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billing": "Personal Account",
    "billingCategoryId": 0,
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountReasonId": 0,
    "dwellingTypeId": 3,
    "dwellingLengthId": 2,
    "dwellingYear": 1,
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onHold": false,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preArrivalCheckComplete": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Booking.com",
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false',
{
  method: 'PATCH',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/reservations',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean',
'preventRateRecalculation' => 'boolean'
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

r = requests.patch('https://restapi8.rmscloud.com/reservations', params={
  'ignoreMandatoryFieldWarnings': 'false',  'preventRateRecalculation': 'false'
}, headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/reservations', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/reservations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /reservations`

*Update an array of existing reservations without the need to pass a whole object*

This call allows you to update any field within the reservation record and you only need to pass the fields and values you wish to update. This can be used instead of the PUT function where you would need to retrieve and pass a whole object to make changes.

> Body parameter

```json
{
  "reservationIds": [
    219970,
    219971,
    219972
  ],
  "patch": {
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "areaId": 5,
    "areaName": "Room 7",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billing": "Personal Account",
    "billingCategoryId": 0,
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountReasonId": 0,
    "dwellingTypeId": 3,
    "dwellingLengthId": 2,
    "dwellingYear": 1,
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onHold": false,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preArrivalCheckComplete": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Booking.com",
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
}
```

<h3 id="updatereservations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|preventRateRecalculation|query|boolean|true|When set to true the rate will not be recalculated.|
|body|body|[reservationsPatch](#schemareservationspatch)|true|Reservation object that can be passed to update specified fields|

> Example responses

> 201 Response

```json
[
  {
    "id": 3681,
    "activeMealPlanId": 3,
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmetnId": 12457,
    "areaId": 5,
    "areaName": "Room 7",
    "areaNameLike": "01",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "billing": "Personal Account",
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "chargeToRoomLimit": 300,
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountId": 0,
    "discountReasonId": 0,
    "dwellingTypeId": "3,",
    "dwellingLengthId": "2,",
    "dwellingYear": "1,",
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateElementId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "repeatId": 0,
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Bopoking.com",
    "upgradeReasonId": 33,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
]
```

<h3 id="updatereservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updatereservations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationFull](#schemareservationfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» activeMealPlanId|integer(int32)|false|none|none|
|» activityId|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» additional1|integer(int32)|false|none|none|
|» additional2|integer(int32)|false|none|none|
|» additional3|integer(int32)|false|none|none|
|» additional4|integer(int32)|false|none|none|
|» additional5|integer(int32)|false|none|none|
|» additional6|integer(int32)|false|none|none|
|» additional7|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» areaName|string|false|none|none|
|» areaNameLike|string|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» attendees|string|false|none|none|
|» billing|string|false|none|none|
|» boatId|integer(int32)|false|none|none|
|» bookerContactId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» bookingSourceName|string|false|none|none|
|» businessLostId|integer(int32)|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» cancelledById|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryName|string|false|none|none|
|» chargeToRoomLimit|number(currency)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» confirmedDate|string(date-time)|false|none|none|
|» confirmedById|integer(int32)|false|none|none|
|» contactId|integer(int32)|false|none|none|
|» coordinator1Id|integer(int32)|false|none|none|
|» coordinator2Id|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» createdById|integer(int64)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» deposit|number(currency)|false|none|none|
|» depositDate|string(date-time)|false|none|none|
|» destinationCodeId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» dwellingTypeId|integer(int32)|false|none|none|
|» dwellingLengthId|integer(int32)|false|none|none|
|» eta|string|false|none|none|
|» eventFinish|string(date-time)|false|none|none|
|» eventName|string|false|none|none|
|» eventStart|string(date-time)|false|none|none|
|» externalCancelId|string|false|none|none|
|» externalReservationId|string|false|none|none|
|» fixedRes|boolean|false|none|none|
|» fixedResReasonId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupHeader|boolean|false|none|none|
|» groupReservationId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» guestSurname|string|false|none|none|
|» housekeepingNote|string|false|none|none|
|» infants|integer(int32)|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» modifiedById|integer(int64)|false|none|none|
|» notes|string|false|none|none|
|» occupantId|integer(int32)|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» originId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» paymentModeId|integer(int32)|false|none|none|
|» posOnGroupMaster|boolean|false|none|none|
|» preArrivalCheckComplete|boolean|false|none|none|
|» preAuthAmount|number(currency)|false|none|none|
|» preAuthCode|string|false|none|none|
|» preAuthExpDate|number(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» rateElementId|integer(int32)|false|none|none|
|» rateOnGroup|boolean|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» rateTypeName|string|false|none|none|
|» repeatId|integer(int123)|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» reservationType|string|false|none|none|
|» secondDeposit|number(currency)|false|none|none|
|» secondDepositDate|string(date-time)|false|none|none|
|» secondDiscountReasonId|integer(int32)|false|none|none|
|» splitReservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|
|» upgradeReasonId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesalerId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|Normal|
|reservationType|PartOfGhost|
|reservationType|Maintenance|
|reservationType|Blocking|
|reservationType|BedReservation|
|reservationType|Parked|
|reservationType|RoomMoveHeader|
|reservationType|UserDefined|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationSearch

<a id="opIdpostReservationSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountIds": [
    12,
    5,
    702
  ],
  "areaIds": [
    1,
    5,
    4
  ],
  "areaNames": [
    "207,208,209"
  ],
  "areaNameLike": "01",
  "arriveFrom": "2018-09-25 00:00:00",
  "arriveTo": "2018-09-27 00:00:00",
  "categoryIds": [
    2,
    5,
    9
  ],
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "departFrom": "2018-09-25 00:00:00",
  "departTo": "2018-09-27 00:00:00",
  "groupReservationIds": [
    1059,
    1045
  ],
  "guestSurname": [
    "Smith",
    "anderson"
  ],
  "guestIds": [
    42,
    459,
    8
  ],
  "includeGroupMasterReservations": "ExcludeGroupMasters",
  "includeInterconnecterSiblings": false,
  "includeRoomMoveHeaders": false,
  "limitProjectedRevenueToDateRange": false,
  "otaReferences": [
    "gh1232",
    "g5444"
  ],
  "propertyCodes": [
    "WCF",
    "TCG"
  ],
  "propertyIds": [
    1,
    3,
    17
  ],
  "reservationIds": [
    124,
    8699,
    2547
  ],
  "roomMoveReservationIds": [
    7589,
    12
  ],
  "listOfStatus": [
    "confirmed",
    "departed"
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "projectedRevenueFromDate": "2018-09-25 00:00:00",
  "projectedRevenueToDate": "2018-09-27 00:00:00",
  "rmsOnlineConfirmationIds": [
    1023456,
    10245985
  ],
  "regoNumbers": [
    "A7T778,ARE895"
  ],
  "reservationIdFrom": 122,
  "reservationIdTo": 125,
  "voucherIds": [
    "A984646,B.com98464564"
  ],
  "userDefined1\"": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/search`

*Perform an advanced reservation search*

When requesting room move headers, you will need to include the below parameters <br> includeRoomMoveHeaders: true <br> includeGroupMasterReservations: includeGroupMasters

> Body parameter

```json
{
  "accountIds": [
    12,
    5,
    702
  ],
  "areaIds": [
    1,
    5,
    4
  ],
  "areaNames": [
    "207,208,209"
  ],
  "areaNameLike": "01",
  "arriveFrom": "2018-09-25 00:00:00",
  "arriveTo": "2018-09-27 00:00:00",
  "categoryIds": [
    2,
    5,
    9
  ],
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "departFrom": "2018-09-25 00:00:00",
  "departTo": "2018-09-27 00:00:00",
  "groupReservationIds": [
    1059,
    1045
  ],
  "guestSurname": [
    "Smith",
    "anderson"
  ],
  "guestIds": [
    42,
    459,
    8
  ],
  "includeGroupMasterReservations": "ExcludeGroupMasters",
  "includeInterconnecterSiblings": false,
  "includeRoomMoveHeaders": false,
  "limitProjectedRevenueToDateRange": false,
  "otaReferences": [
    "gh1232",
    "g5444"
  ],
  "propertyCodes": [
    "WCF",
    "TCG"
  ],
  "propertyIds": [
    1,
    3,
    17
  ],
  "reservationIds": [
    124,
    8699,
    2547
  ],
  "roomMoveReservationIds": [
    7589,
    12
  ],
  "listOfStatus": [
    "confirmed",
    "departed"
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "projectedRevenueFromDate": "2018-09-25 00:00:00",
  "projectedRevenueToDate": "2018-09-27 00:00:00",
  "rmsOnlineConfirmationIds": [
    1023456,
    10245985
  ],
  "regoNumbers": [
    "A7T778,ARE895"
  ],
  "reservationIdFrom": 122,
  "reservationIdTo": 125,
  "voucherIds": [
    "A984646,B.com98464564"
  ],
  "userDefined1\"": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50"
}
```

<h3 id="postreservationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|
|body|body|[reservationSearch](#schemareservationsearch)|true|Reservation object that needs to be added or updated|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "id": 3681,
    "activeMealPlanId": 3,
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmetnId": 12457,
    "areaId": 5,
    "areaName": "Room 7",
    "areaNameLike": "01",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "billing": "Personal Account",
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "chargeToRoomLimit": 300,
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountId": 0,
    "discountReasonId": 0,
    "dwellingTypeId": "3,",
    "dwellingLengthId": "2,",
    "dwellingYear": "1,",
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateElementId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "repeatId": 0,
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Bopoking.com",
    "upgradeReasonId": 33,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
]
```

<h3 id="postreservationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements passed|Inline|

<h3 id="postreservationsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationFull](#schemareservationfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» activeMealPlanId|integer(int32)|false|none|none|
|» activityId|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» additional1|integer(int32)|false|none|none|
|» additional2|integer(int32)|false|none|none|
|» additional3|integer(int32)|false|none|none|
|» additional4|integer(int32)|false|none|none|
|» additional5|integer(int32)|false|none|none|
|» additional6|integer(int32)|false|none|none|
|» additional7|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» areaName|string|false|none|none|
|» areaNameLike|string|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» attendees|string|false|none|none|
|» billing|string|false|none|none|
|» boatId|integer(int32)|false|none|none|
|» bookerContactId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» bookingSourceName|string|false|none|none|
|» businessLostId|integer(int32)|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» cancelledById|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryName|string|false|none|none|
|» chargeToRoomLimit|number(currency)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» confirmedDate|string(date-time)|false|none|none|
|» confirmedById|integer(int32)|false|none|none|
|» contactId|integer(int32)|false|none|none|
|» coordinator1Id|integer(int32)|false|none|none|
|» coordinator2Id|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» createdById|integer(int64)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» deposit|number(currency)|false|none|none|
|» depositDate|string(date-time)|false|none|none|
|» destinationCodeId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» dwellingTypeId|integer(int32)|false|none|none|
|» dwellingLengthId|integer(int32)|false|none|none|
|» eta|string|false|none|none|
|» eventFinish|string(date-time)|false|none|none|
|» eventName|string|false|none|none|
|» eventStart|string(date-time)|false|none|none|
|» externalCancelId|string|false|none|none|
|» externalReservationId|string|false|none|none|
|» fixedRes|boolean|false|none|none|
|» fixedResReasonId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupHeader|boolean|false|none|none|
|» groupReservationId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» guestSurname|string|false|none|none|
|» housekeepingNote|string|false|none|none|
|» infants|integer(int32)|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» modifiedById|integer(int64)|false|none|none|
|» notes|string|false|none|none|
|» occupantId|integer(int32)|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» originId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» paymentModeId|integer(int32)|false|none|none|
|» posOnGroupMaster|boolean|false|none|none|
|» preArrivalCheckComplete|boolean|false|none|none|
|» preAuthAmount|number(currency)|false|none|none|
|» preAuthCode|string|false|none|none|
|» preAuthExpDate|number(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» rateElementId|integer(int32)|false|none|none|
|» rateOnGroup|boolean|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» rateTypeName|string|false|none|none|
|» repeatId|integer(int123)|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» reservationType|string|false|none|none|
|» secondDeposit|number(currency)|false|none|none|
|» secondDepositDate|string(date-time)|false|none|none|
|» secondDiscountReasonId|integer(int32)|false|none|none|
|» splitReservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|
|» upgradeReasonId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesalerId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|Normal|
|reservationType|PartOfGhost|
|reservationType|Maintenance|
|reservationType|Blocking|
|reservationType|BedReservation|
|reservationType|Parked|
|reservationType|RoomMoveHeader|
|reservationType|UserDefined|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationById

<a id="opIdgetReservationById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}`

*Retrieve a reservation by id*

<h3 id="getreservationbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|modelType|query|string|false|Only these fields will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "reservationLite": false
  },
  {
    "reservationBasic": false
  },
  {
    "reservationFull": false
  }
]
```

<h3 id="getreservationbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_10](#schemainline_response_200_10)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateAReservation

<a id="opIdupdateAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/reservations/{id}?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/reservations/{id}?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "activityId": 25,
  "accountId": 1259,
  "adults": 2,
  "additional1": 1,
  "additional2": 2,
  "additional3": 1,
  "additional4": 0,
  "additional5": 0,
  "additional6": 2,
  "additional7": 2,
  "allotmentAssociationID": "TravelAgent",
  "areaId": 5,
  "areaName": "Room 7",
  "arrivalDate": "2016-28-08 13:26:00",
  "attendees": "30",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billing": "Personal Account",
  "billingCategoryId": 0,
  "boatId": 6,
  "bookerContactId": 4,
  "bookingSourceId": 2,
  "bookingSourceName": "Online",
  "businessLostId": 12,
  "businessSegmentId": 9,
  "cancellationPolicyId": 1,
  "cancelledDate": "2016-08-26 12:26:00",
  "cancelledById": 6,
  "cardId": "A698659",
  "categoryId": 19,
  "categoryName": "Super Delux Queen",
  "children": 1,
  "companyId": 5,
  "confirmedDate": "2016-08-22 19:25:00",
  "confirmedById": 5,
  "contactId": 9,
  "coordinator1Id": 8,
  "coordinator2Id": 7,
  "createdDate": "2016-08-22 19:25:00",
  "createdById": 35,
  "departureDate": "2019-09-29 09:25:00",
  "deposit": 20,
  "depositDate": "2019-09-29 09:25:00",
  "destinationCodeId": 6,
  "discountReasonId": 0,
  "dwellingTypeId": "3,",
  "dwellingLengthId": "2,",
  "dwellingYear": "1,",
  "eta": "Wednesday Midnight",
  "eventFinish": "2016-08-29 09:25:00",
  "eventName": "Concert",
  "eventStart": "2019-08-29 09:25:00",
  "externalCancelId": "bcom39658965",
  "externalReservationId": "uy96598568",
  "fixedRes": true,
  "fixedResReason": 1,
  "groupAllotmentId": 7,
  "groupOptionId": 1314,
  "groupReservationId": 96598,
  "groupHeader": true,
  "guestGiven": "Smithers",
  "guestId": 65,
  "guestSurname": "Westingham",
  "housekeepingNote": "housekeeping note",
  "infants": 1,
  "longTerm": true,
  "loyaltyMembershipTypeId": 12,
  "marketSegmentId": 12,
  "mealPlanId": 16,
  "ModifiedDate": "2016-08-22 19:25:00",
  "modifiedById": 50,
  "notes": "This is a note about my reservation",
  "occupantId": 4,
  "onHold": false,
  "onlineConfirmationId": 12986985,
  "originId": 9,
  "otaNotes": "Booking.com - breakdown of pricing, etc",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "paymentModeId": 45,
  "posOnGroupMaster": false,
  "preArrivalCheckComplete": "false,",
  "preAuthAmount": 23.56,
  "preAuthCode": "2A",
  "preAuthExpDate": "2016-08-29 09:25:00",
  "propertyId": 1,
  "rateOnGroup": false,
  "rateTypeId": 3,
  "rateTypeName": "Daily",
  "resTypeId": 8,
  "reservationType": "Event",
  "secondDeposit": 15,
  "secondDepositDate": "2016-08-29 09:25:00",
  "secondDiscountReasonId": 0,
  "splitReservationId": 12358,
  "status": "Confirmed",
  "subMarketSegmentId": 9,
  "subResTypeId": 5,
  "travelAgentId": 7,
  "travelAgentName": "Bopoking.com",
  "upgradeReasonId": 33,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "voucherId": "B4569856985",
  "wholesalerId": 58
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false',
{
  method: 'PATCH',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/reservations/{id}',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean',
'preventRateRecalculation' => 'boolean'
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

r = requests.patch('https://restapi8.rmscloud.com/reservations/{id}', params={
  'ignoreMandatoryFieldWarnings': 'false',  'preventRateRecalculation': 'false'
}, headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/reservations/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}?ignoreMandatoryFieldWarnings=false&preventRateRecalculation=false");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/reservations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /reservations/{id}`

*Update an existing reservation without the need to pass a whole object*

This call allows you to update any field within the reservation record and you only need to pass the fields and values you wish to update. This can be used instead of the PUT function where you would need to retrieve and pass a whole object to make changes.<br><br>**Note**:<br> To update the guestId for a reservation, you will need to:<br>1.Add the new guest using: PUT /reservations/{id}/addGuest <br>2.Remove the guest being replaced using: PUT /reservations/{id}/removeGuest

> Body parameter

```json
{
  "activityId": 25,
  "accountId": 1259,
  "adults": 2,
  "additional1": 1,
  "additional2": 2,
  "additional3": 1,
  "additional4": 0,
  "additional5": 0,
  "additional6": 2,
  "additional7": 2,
  "allotmentAssociationID": "TravelAgent",
  "areaId": 5,
  "areaName": "Room 7",
  "arrivalDate": "2016-28-08 13:26:00",
  "attendees": "30",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billing": "Personal Account",
  "billingCategoryId": 0,
  "boatId": 6,
  "bookerContactId": 4,
  "bookingSourceId": 2,
  "bookingSourceName": "Online",
  "businessLostId": 12,
  "businessSegmentId": 9,
  "cancellationPolicyId": 1,
  "cancelledDate": "2016-08-26 12:26:00",
  "cancelledById": 6,
  "cardId": "A698659",
  "categoryId": 19,
  "categoryName": "Super Delux Queen",
  "children": 1,
  "companyId": 5,
  "confirmedDate": "2016-08-22 19:25:00",
  "confirmedById": 5,
  "contactId": 9,
  "coordinator1Id": 8,
  "coordinator2Id": 7,
  "createdDate": "2016-08-22 19:25:00",
  "createdById": 35,
  "departureDate": "2019-09-29 09:25:00",
  "deposit": 20,
  "depositDate": "2019-09-29 09:25:00",
  "destinationCodeId": 6,
  "discountReasonId": 0,
  "dwellingTypeId": "3,",
  "dwellingLengthId": "2,",
  "dwellingYear": "1,",
  "eta": "Wednesday Midnight",
  "eventFinish": "2016-08-29 09:25:00",
  "eventName": "Concert",
  "eventStart": "2019-08-29 09:25:00",
  "externalCancelId": "bcom39658965",
  "externalReservationId": "uy96598568",
  "fixedRes": true,
  "fixedResReason": 1,
  "groupAllotmentId": 7,
  "groupOptionId": 1314,
  "groupReservationId": 96598,
  "groupHeader": true,
  "guestGiven": "Smithers",
  "guestId": 65,
  "guestSurname": "Westingham",
  "housekeepingNote": "housekeeping note",
  "infants": 1,
  "longTerm": true,
  "loyaltyMembershipTypeId": 12,
  "marketSegmentId": 12,
  "mealPlanId": 16,
  "ModifiedDate": "2016-08-22 19:25:00",
  "modifiedById": 50,
  "notes": "This is a note about my reservation",
  "occupantId": 4,
  "onHold": false,
  "onlineConfirmationId": 12986985,
  "originId": 9,
  "otaNotes": "Booking.com - breakdown of pricing, etc",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "paymentModeId": 45,
  "posOnGroupMaster": false,
  "preArrivalCheckComplete": "false,",
  "preAuthAmount": 23.56,
  "preAuthCode": "2A",
  "preAuthExpDate": "2016-08-29 09:25:00",
  "propertyId": 1,
  "rateOnGroup": false,
  "rateTypeId": 3,
  "rateTypeName": "Daily",
  "resTypeId": 8,
  "reservationType": "Event",
  "secondDeposit": 15,
  "secondDepositDate": "2016-08-29 09:25:00",
  "secondDiscountReasonId": 0,
  "splitReservationId": 12358,
  "status": "Confirmed",
  "subMarketSegmentId": 9,
  "subResTypeId": 5,
  "travelAgentId": 7,
  "travelAgentName": "Bopoking.com",
  "upgradeReasonId": 33,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "voucherId": "B4569856985",
  "wholesalerId": 58
}
```

<h3 id="updateareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|preventRateRecalculation|query|boolean|true|When set to true the rate will not be recalculated.|
|body|body|[reservationPatch](#schemareservationpatch)|false|Reservation object that can be passed to update specified fields|

> Example responses

> 201 Response

```json
[
  {
    "id": 3681,
    "activeMealPlanId": 3,
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmetnId": 12457,
    "areaId": 5,
    "areaName": "Room 7",
    "areaNameLike": "01",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "billing": "Personal Account",
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "chargeToRoomLimit": 300,
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountId": 0,
    "discountReasonId": 0,
    "dwellingTypeId": "3,",
    "dwellingLengthId": "2,",
    "dwellingYear": "1,",
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateElementId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "repeatId": 0,
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Bopoking.com",
    "upgradeReasonId": 33,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
]
```

<h3 id="updateareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updateareservation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationFull](#schemareservationfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» activeMealPlanId|integer(int32)|false|none|none|
|» activityId|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» additional1|integer(int32)|false|none|none|
|» additional2|integer(int32)|false|none|none|
|» additional3|integer(int32)|false|none|none|
|» additional4|integer(int32)|false|none|none|
|» additional5|integer(int32)|false|none|none|
|» additional6|integer(int32)|false|none|none|
|» additional7|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» areaName|string|false|none|none|
|» areaNameLike|string|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» attendees|string|false|none|none|
|» billing|string|false|none|none|
|» boatId|integer(int32)|false|none|none|
|» bookerContactId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» bookingSourceName|string|false|none|none|
|» businessLostId|integer(int32)|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» cancelledById|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryName|string|false|none|none|
|» chargeToRoomLimit|number(currency)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» confirmedDate|string(date-time)|false|none|none|
|» confirmedById|integer(int32)|false|none|none|
|» contactId|integer(int32)|false|none|none|
|» coordinator1Id|integer(int32)|false|none|none|
|» coordinator2Id|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» createdById|integer(int64)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» deposit|number(currency)|false|none|none|
|» depositDate|string(date-time)|false|none|none|
|» destinationCodeId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» dwellingTypeId|integer(int32)|false|none|none|
|» dwellingLengthId|integer(int32)|false|none|none|
|» eta|string|false|none|none|
|» eventFinish|string(date-time)|false|none|none|
|» eventName|string|false|none|none|
|» eventStart|string(date-time)|false|none|none|
|» externalCancelId|string|false|none|none|
|» externalReservationId|string|false|none|none|
|» fixedRes|boolean|false|none|none|
|» fixedResReasonId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupHeader|boolean|false|none|none|
|» groupReservationId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» guestSurname|string|false|none|none|
|» housekeepingNote|string|false|none|none|
|» infants|integer(int32)|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» modifiedById|integer(int64)|false|none|none|
|» notes|string|false|none|none|
|» occupantId|integer(int32)|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» originId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» paymentModeId|integer(int32)|false|none|none|
|» posOnGroupMaster|boolean|false|none|none|
|» preArrivalCheckComplete|boolean|false|none|none|
|» preAuthAmount|number(currency)|false|none|none|
|» preAuthCode|string|false|none|none|
|» preAuthExpDate|number(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» rateElementId|integer(int32)|false|none|none|
|» rateOnGroup|boolean|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» rateTypeName|string|false|none|none|
|» repeatId|integer(int123)|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» reservationType|string|false|none|none|
|» secondDeposit|number(currency)|false|none|none|
|» secondDepositDate|string(date-time)|false|none|none|
|» secondDiscountReasonId|integer(int32)|false|none|none|
|» splitReservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|
|» upgradeReasonId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesalerId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|Normal|
|reservationType|PartOfGhost|
|reservationType|Maintenance|
|reservationType|Blocking|
|reservationType|BedReservation|
|reservationType|Parked|
|reservationType|RoomMoveHeader|
|reservationType|UserDefined|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationGroup

<a id="opIdaddReservationGroup"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/group \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/group HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "areaId": 22,
    "arrivalDate": "2020-10-02 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  },
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "areaId": 21,
    "arrivalDate": "2020-10-02 14:00:00",
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/group',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/group',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/group', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/group', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/group");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/group", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/group`

*Add a new group reservation*

> Body parameter

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "areaId": 22,
    "arrivalDate": "2020-10-02 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  },
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "areaId": 21,
    "arrivalDate": "2020-10-02 14:00:00",
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  }
]
```

<h3 id="addreservationgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|useIbeDepositRules|query|boolean|false|When set to false the ibe deposit rules will not be used.|
|body|body|[reservationBasicGroup](#schemareservationbasicgroup)|true|Group reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="addreservationgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservationgroup-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationGroupQuote

<a id="opIdaddReservationGroupQuote"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/group/quote \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/group/quote HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "areaId": 22,
    "arrivalDate": "2020-10-02 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  },
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "areaId": 21,
    "arrivalDate": "2020-10-02 14:00:00",
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/group/quote',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/group/quote',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/group/quote', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/group/quote', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/group/quote");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/group/quote", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/group/quote`

*Add a new group reservation with the status set to quote*

> Body parameter

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "areaId": 22,
    "arrivalDate": "2020-10-02 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  },
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "areaId": 21,
    "arrivalDate": "2020-10-02 14:00:00",
    "allotmentAssociationId": "travelAgent",
    "allotmentId": 12457,
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "bookingSourceId": 2,
    "categoryId": 4,
    "children": 1,
    "companyId": 5,
    "departureDate": "2020-10-04 14:00:00",
    "discountId": 0,
    "groupAllotmentId": 0,
    "groupReservationId": 0,
    "guestId": 138220,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 0,
    "otaRef1": "0",
    "otaRef2": "0",
    "otaRef3": "0",
    "rateTypeId": 1355,
    "resTypeId": 0,
    "status": "Confirmed",
    "subMarketSegmentId": 0,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "0"
  }
]
```

<h3 id="addreservationgroupquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationBasicGroup](#schemareservationbasicgroup)|true|Group reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="addreservationgroupquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservationgroupquote-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationToGroup

<a id="opIdaddReservationToGroup"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}',
{
  method: 'PUT',

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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/addReservationToGroup/{resIdToAdd}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/addReservationToGroup/{resIdToAdd}`

*To add a reservation to a new/existing group*

<h3 id="addreservationtogroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|resIdToAdd|path|integer(int32)|true|The Id of the reservation thats being added to new/existing group|

> Example responses

> 201 Response

```json
[
  {
    "id": 3681,
    "activeMealPlanId": 3,
    "activityId": 25,
    "accountId": 1259,
    "adults": 2,
    "additional1": 1,
    "additional2": 2,
    "additional3": 1,
    "additional4": 0,
    "additional5": 0,
    "additional6": 2,
    "additional7": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmetnId": 12457,
    "areaId": 5,
    "areaName": "Room 7",
    "areaNameLike": "01",
    "arrivalDate": "2016-28-08 13:26:00",
    "attendees": "30",
    "billing": "Personal Account",
    "boatId": 6,
    "bookerContactId": 4,
    "bookingSourceId": 2,
    "bookingSourceName": "Online",
    "businessLostId": 12,
    "businessSegmentId": 9,
    "cancellationPolicyId": 1,
    "cancelledDate": "2016-08-26 12:26:00",
    "cancelledById": 6,
    "cardId": "A698659",
    "categoryId": 19,
    "categoryName": "Super Delux Queen",
    "chargeToRoomLimit": 300,
    "children": 1,
    "companyId": 5,
    "confirmedDate": "2016-08-22 19:25:00",
    "confirmedById": 5,
    "contactId": 9,
    "coordinator1Id": 8,
    "coordinator2Id": 7,
    "createdDate": "2016-08-22 19:25:00",
    "createdById": 35,
    "departureDate": "2019-09-29 09:25:00",
    "deposit": 20,
    "depositDate": "2019-09-29 09:25:00",
    "destinationCodeId": 6,
    "discountId": 0,
    "discountReasonId": 0,
    "dwellingTypeId": "3,",
    "dwellingLengthId": "2,",
    "dwellingYear": "1,",
    "eta": "Wednesday Midnight",
    "eventFinish": "2016-08-29 09:25:00",
    "eventName": "Concert",
    "eventStart": "2019-08-29 09:25:00",
    "externalCancelId": "bcom39658965",
    "externalReservationId": "uy96598568",
    "fixedRes": true,
    "fixedResReason": 1,
    "groupAllotmentId": 7,
    "groupOptionId": 1314,
    "groupReservationId": 96598,
    "groupHeader": true,
    "guestGiven": "Smithers",
    "guestId": 65,
    "guestSurname": "Westingham",
    "housekeepingNote": "housekeeping note",
    "infants": 1,
    "longTerm": true,
    "loyaltyMembershipTypeId": 12,
    "marketSegmentId": 12,
    "mealPlanId": 16,
    "ModifiedDate": "2016-08-22 19:25:00",
    "modifiedById": 50,
    "notes": "This is a note about my reservation",
    "occupantId": 4,
    "onlineConfirmationId": 12986985,
    "originId": 9,
    "otaNotes": "Booking.com - breakdown of pricing, etc",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "paymentModeId": 45,
    "posOnGroupMaster": false,
    "preAuthAmount": 23.56,
    "preAuthCode": "2A",
    "preAuthExpDate": "2016-08-29 09:25:00",
    "propertyId": 1,
    "rateElementId": 1,
    "rateOnGroup": false,
    "rateTypeId": 3,
    "rateTypeName": "Daily",
    "repeatId": 0,
    "resTypeId": 8,
    "reservationType": "Event",
    "secondDeposit": 15,
    "secondDepositDate": "2016-08-29 09:25:00",
    "secondDiscountReasonId": 0,
    "splitReservationId": 12358,
    "status": "Confirmed",
    "subMarketSegmentId": 9,
    "subResTypeId": 5,
    "travelAgentId": 7,
    "travelAgentName": "Bopoking.com",
    "upgradeReasonId": 33,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "voucherId": "B4569856985",
    "wholesalerId": 58
  }
]
```

<h3 id="addreservationtogroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Elements to pass|Inline|

<h3 id="addreservationtogroup-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationFull](#schemareservationfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» activeMealPlanId|integer(int32)|false|none|none|
|» activityId|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» additional1|integer(int32)|false|none|none|
|» additional2|integer(int32)|false|none|none|
|» additional3|integer(int32)|false|none|none|
|» additional4|integer(int32)|false|none|none|
|» additional5|integer(int32)|false|none|none|
|» additional6|integer(int32)|false|none|none|
|» additional7|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» areaName|string|false|none|none|
|» areaNameLike|string|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» attendees|string|false|none|none|
|» billing|string|false|none|none|
|» boatId|integer(int32)|false|none|none|
|» bookerContactId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» bookingSourceName|string|false|none|none|
|» businessLostId|integer(int32)|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cancellationPolicyId|integer(int32)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» cancelledById|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» categoryName|string|false|none|none|
|» chargeToRoomLimit|number(currency)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» confirmedDate|string(date-time)|false|none|none|
|» confirmedById|integer(int32)|false|none|none|
|» contactId|integer(int32)|false|none|none|
|» coordinator1Id|integer(int32)|false|none|none|
|» coordinator2Id|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» createdById|integer(int64)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» deposit|number(currency)|false|none|none|
|» depositDate|string(date-time)|false|none|none|
|» destinationCodeId|integer(int32)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» discountReasonId|integer(int32)|false|none|none|
|» dwellingTypeId|integer(int32)|false|none|none|
|» dwellingLengthId|integer(int32)|false|none|none|
|» eta|string|false|none|none|
|» eventFinish|string(date-time)|false|none|none|
|» eventName|string|false|none|none|
|» eventStart|string(date-time)|false|none|none|
|» externalCancelId|string|false|none|none|
|» externalReservationId|string|false|none|none|
|» fixedRes|boolean|false|none|none|
|» fixedResReasonId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupHeader|boolean|false|none|none|
|» groupReservationId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» guestSurname|string|false|none|none|
|» housekeepingNote|string|false|none|none|
|» infants|integer(int32)|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» modifiedById|integer(int64)|false|none|none|
|» notes|string|false|none|none|
|» occupantId|integer(int32)|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» originId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» paymentModeId|integer(int32)|false|none|none|
|» posOnGroupMaster|boolean|false|none|none|
|» preArrivalCheckComplete|boolean|false|none|none|
|» preAuthAmount|number(currency)|false|none|none|
|» preAuthCode|string|false|none|none|
|» preAuthExpDate|number(date-time)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» rateElementId|integer(int32)|false|none|none|
|» rateOnGroup|boolean|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» rateTypeName|string|false|none|none|
|» repeatId|integer(int123)|false|none|none|
|» resType|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» reservationType|string|false|none|none|
|» secondDeposit|number(currency)|false|none|none|
|» secondDepositDate|string(date-time)|false|none|none|
|» secondDiscountReasonId|integer(int32)|false|none|none|
|» splitReservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
|» travelAgentName|string|false|none|none|
|» upgradeReasonId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesalerId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|Normal|
|reservationType|PartOfGhost|
|reservationType|Maintenance|
|reservationType|Blocking|
|reservationType|BedReservation|
|reservationType|Parked|
|reservationType|RoomMoveHeader|
|reservationType|UserDefined|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationQuote

<a id="opIdaddReservationQuote"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/quote?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/quote?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/quote?ignoreMandatoryFieldWarnings=false',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/quote',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean'
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

r = requests.post('https://restapi8.rmscloud.com/reservations/quote', params={
  'ignoreMandatoryFieldWarnings': 'false'
}, headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/quote', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/quote?ignoreMandatoryFieldWarnings=false");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/quote", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/quote`

*Add a new quote reservation*

> Body parameter

```json
{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}
```

<h3 id="addreservationquote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|body|body|[reservationBasic](#schemareservationbasic)|true|Reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="addreservationquote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservationquote-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationsCommissions

<a id="opIdgetReservationsCommissions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/commissions \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/commissions HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/commissions',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/commissions',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/commissions', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/commissions', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/commissions");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/commissions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/commissions`

*Retrieve a reservations commission*

<h3 id="getreservationscommissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
{
  "reservationId": 222130,
  "agentId": 2673,
  "commission": 15,
  "commissionType": "UseDailyDollarAmount",
  "description": "Daily 15.00"
}
```

<h3 id="getreservationscommissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsIdCommissions](#schemareservationsidcommissions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationPencil

<a id="opIdaddReservationPencil"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/pencil \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/pencil HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "areaId": 16,
  "arrivalDate": "2019-10-22 14:00:00",
  "categoryId": 4,
  "departureDate": "2019-10-23 11:00:00",
  "expiryDate": "2019-10-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/pencil',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/pencil',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/pencil', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/pencil', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/pencil");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/pencil", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/pencil`

*Add a new pencil reservation*

Pencil Reservations place a temporary hold on availability with minimal guest information and will automatically cancel once the expiry time is reached.<br><br>**Status Conversions**:<br><br>**Unconfirmed**– The reservation will first be updated to Unconfirmed, indicating that no pre-payment has been posted to the reservation account.<br>**Note**:Once a reservation is in Unconfirmed status, you can update key fields such as the number of adults/children, rate type, travel agent, and other required details. Charges and receipts can also be processed at this stage.<br><br>**Confirmed** – The reservation status will update to Confirmed when a receipt is created on the reservation account, signifying the guest’s verified intention to stay at the property.

> Body parameter

```json
{
  "id": 0,
  "areaId": 16,
  "arrivalDate": "2019-10-22 14:00:00",
  "categoryId": 4,
  "departureDate": "2019-10-23 11:00:00",
  "expiryDate": "2019-10-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil"
}
```

<h3 id="addreservationpencil-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationPencil](#schemareservationpencil)|true|Reservation object that needs to be added to create a pencil reservation|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "areaId": 16,
    "arrivalDate": "2019-10-22 14:00:00",
    "categoryId": 4,
    "departureDate": "2019-10-23 11:00:00",
    "expiryDate": "2019-10-18 00:00:00",
    "guestId": 1235678,
    "guestEmail": "vic@rms.com.au",
    "guestGiven": "Smithers",
    "guestMobile": "04123456987",
    "guestSurname": "French",
    "note": "This is a note about my reservation",
    "status": "Pencil"
  }
]
```

<h3 id="addreservationpencil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservationpencil-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationPencil](#schemareservationpencil)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» areaId|integer(int32)|true|none|none|
|» arrivalDate|string(date-time)|true|none|none|
|» categoryId|integer(int32)|true|none|none|
|» departureDate|string(date-time)|true|none|none|
|» expiryDate|string(date-time)|true|none|none|
|» guestId|integer(int32)|false|none|If you wish to create a pencil reservation with an existing guest, populate the guestId field and leave the other guest fields blank (If the other guest fields are populated they will be ignored). Alternatively, if you do not have an existing guestId populate the guest values i.e. guestName etc and we will create a guest for you and return the guestId in the response|
|» guestEmail|string|false|none|none|
|» guestGiven|string|false|none|none|
|» guestMobile|string|false|none|none|
|» guestSurname|string|true|none|none|
|» note|string|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGroupReservationPencil

<a id="opIdaddGroupReservationPencil"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/group/pencil \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/group/pencil HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "expiryDate": "2024-09-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil",
  "pencils": [
    {
      "id": 0,
      "areaId": 20,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    },
    {
      "id": 0,
      "areaId": 21,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/group/pencil',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/group/pencil',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/group/pencil', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/group/pencil', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/group/pencil");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/group/pencil", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/group/pencil`

*Add a new group pencil reservation*

Group Pencil Reservations call allows you to create a group (multi-reservation) in Pencil status, placing a temporary hold on availability with minimal guest information and will automatically cancel once the expiry time is reached.<br><br>**Status Conversions**:<br><br>Updating the status of the Group Pencil Reservation (groupReservationId) will automatically update the status of all associated sibling reservations.<br><br>**Unconfirmed**– The reservation will first be updated to Unconfirmed, indicating that no pre-payment has been posted to the reservation account.<br>**Note**:Once a reservation is in Unconfirmed status, you can update key fields such as the number of adults/children, rate type, travel agent, and other required details. Charges and receipts can also be processed at this stage.<br><br>**Confirmed** – The reservation status will update to Confirmed when a receipt is created on the reservation account, signifying the guest’s verified intention to stay at the property.

> Body parameter

```json
{
  "id": 0,
  "expiryDate": "2024-09-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil",
  "pencils": [
    {
      "id": 0,
      "areaId": 20,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    },
    {
      "id": 0,
      "areaId": 21,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    }
  ]
}
```

<h3 id="addgroupreservationpencil-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationGroupPencil](#schemareservationgrouppencil)|true|Reservation object that needs to be added to create a group pencil reservation|

> Example responses

> 201 Response

```json
{
  "id": 216814,
  "expiryDate": "2024-09-18 00:00:00",
  "guestId": 1235678,
  "guestEmail": "vic@rms.com.au",
  "guestGiven": "Smithers",
  "guestMobile": "04123456987",
  "guestSurname": "French",
  "note": "This is a note about my reservation",
  "status": "Pencil",
  "pencils": [
    {
      "id": 216815,
      "areaId": 20,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    },
    {
      "id": 216816,
      "areaId": 21,
      "arrivalDate": "2024-10-21 14:00:00",
      "categoryId": 4,
      "departureDate": "2024-10-22 11:00:00"
    }
  ]
}
```

<h3 id="addgroupreservationpencil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|[reservationGroupPencilResponse](#schemareservationgrouppencilresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateReservationMaintenance

<a id="opIdupdateReservationMaintenance"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/maintenance \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/maintenance HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "areaId": 13,
  "dateFrom": "2023-03-20 10:00:00",
  "dateTo": "2023-03-21 17:30:00",
  "cancelledDate": "1900-01-01",
  "categoryId": 4,
  "notes": "aircon is broken",
  "reasonId": 36
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/maintenance',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/maintenance',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/maintenance', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/maintenance', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/maintenance");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/maintenance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/maintenance`

*Update an existing maintenance reservation*

> Body parameter

```json
{
  "id": 0,
  "areaId": 13,
  "dateFrom": "2023-03-20 10:00:00",
  "dateTo": "2023-03-21 17:30:00",
  "cancelledDate": "1900-01-01",
  "categoryId": 4,
  "notes": "aircon is broken",
  "reasonId": 36
}
```

<h3 id="updatereservationmaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[maintenance](#schemamaintenance)|false|none|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "areaId": 13,
    "dateFrom": "2023-03-20 10:00:00",
    "dateTo": "2023-03-21 17:30:00",
    "cancelledDate": "1900-01-01",
    "categoryId": 4,
    "notes": "aircon is broken",
    "reasonId": 36
  }
]
```

<h3 id="updatereservationmaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updatereservationmaintenance-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[maintenance](#schemamaintenance)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» reasonId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addReservationMaintenance

<a id="opIdaddReservationMaintenance"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/maintenance \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/maintenance HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "areaId": 13,
  "dateFrom": "2023-03-20 10:00:00",
  "dateTo": "2023-03-21 17:30:00",
  "cancelledDate": "1900-01-01",
  "categoryId": 4,
  "notes": "aircon is broken",
  "reasonId": 36
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/maintenance',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/maintenance',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/maintenance', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/maintenance', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/maintenance");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/maintenance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/maintenance`

*Add a new maintenance reservation*

> Body parameter

```json
{
  "id": 0,
  "areaId": 13,
  "dateFrom": "2023-03-20 10:00:00",
  "dateTo": "2023-03-21 17:30:00",
  "cancelledDate": "1900-01-01",
  "categoryId": 4,
  "notes": "aircon is broken",
  "reasonId": 36
}
```

<h3 id="addreservationmaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[maintenance](#schemamaintenance)|false|none|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "areaId": 13,
    "dateFrom": "2023-03-20 10:00:00",
    "dateTo": "2023-03-21 17:30:00",
    "cancelledDate": "1900-01-01",
    "categoryId": 4,
    "notes": "aircon is broken",
    "reasonId": 36
  }
]
```

<h3 id="addreservationmaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addreservationmaintenance-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[maintenance](#schemamaintenance)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» reasonId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationMaintenance

<a id="opIdgetReservationMaintenance"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/maintenance/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/maintenance/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/maintenance/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/maintenance/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/maintenance/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/maintenance/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/maintenance/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/maintenance/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/maintenance/{id}`

*Retrieve a maintenance reservations information*

<h3 id="getreservationmaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "areaId": 13,
    "dateFrom": "2023-03-20 10:00:00",
    "dateTo": "2023-03-21 17:30:00",
    "cancelledDate": "1900-01-01",
    "categoryId": 4,
    "notes": "aircon is broken",
    "reasonId": 36
  }
]
```

<h3 id="getreservationmaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationmaintenance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[maintenance](#schemamaintenance)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» cancelledDate|string(date-time)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» reasonId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteReservationMaintenance

<a id="opIddeleteReservationMaintenance"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/reservations/maintenance/{id} \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/reservations/maintenance/{id} HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/maintenance/{id}',
{
  method: 'DELETE',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.delete 'https://restapi8.rmscloud.com/reservations/maintenance/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/reservations/maintenance/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/reservations/maintenance/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/maintenance/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/reservations/maintenance/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /reservations/maintenance/{id}`

*Remove a maintenance reservations*

<h3 id="deletereservationmaintenance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

<h3 id="deletereservationmaintenance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putReservationStatus

<a id="opIdputReservationStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/status?preventRateRecalculation=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/status?preventRateRecalculation=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "status": "cancelled",
  "reasonid": 1,
  "cancellationNote": "Change Plans"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/status?preventRateRecalculation=false',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/status',
  params: {
  'preventRateRecalculation' => 'boolean'
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/status', params={
  'preventRateRecalculation': 'false'
}, headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/status', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/status?preventRateRecalculation=false");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/status`

*Change a reservation's status*

> Body parameter

```json
{
  "status": "cancelled",
  "reasonid": 1,
  "cancellationNote": "Change Plans"
}
```

<h3 id="putreservationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|preventRateRecalculation|query|boolean|true|When set to true the rate will not be recalculated.|
|body|body|[reservationStatus](#schemareservationstatus)|true|Reservation Status|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "accountId": 0,
    "adults": 2,
    "allotmentAssociationID": "TravelAgent",
    "allotmentId": 12457,
    "areaId": 3,
    "arrivalDate": "2017-11-17 14:00:00",
    "baseRateOverride": 0,
    "totalRateOverride": 0,
    "billingCategoryId": 0,
    "bookingSourceId": 2,
    "categoryId": 1,
    "children": 1,
    "companyId": 5,
    "departureDate": "2017-11-22 11:00:00",
    "discountId": 22,
    "groupAllotmentId": 0,
    "groupOptionId": 1314,
    "groupReservationId": 0,
    "guestId": 134541,
    "infants": 1,
    "notes": "This is a note about my reservation",
    "onlineConfirmationId": 12986985,
    "otaNotes": "This is a note from an OTA or Website",
    "otaRef1": "V5986985s9",
    "otaRef2": "BCOM-8976958",
    "otaRef3": "89869858896",
    "rateTypeId": 1,
    "resTypeId": 0,
    "status": "Confirmed",
    "marketSegmentId": 5,
    "mealPlanId": 5,
    "subMarketSegmentId": 5,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 50",
    "userDefined11": true,
    "userDefined12": true,
    "userDefined13": true,
    "userDefined14": "2016-08-29 09:25:00",
    "userDefined15": "2016-08-29 09:25:00",
    "travelAgentId": 1,
    "voucherId": "B4569856985"
  }
]
```

<h3 id="putreservationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Elements to pass|Inline|

<h3 id="putreservationstatus-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBasic](#schemareservationbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» adults|integer(int32)|false|none|none|
|» allotmentAssociationID|string|false|none|Required when using combinations of Travel Agent, Group Allotments and Wholesalers|
|» allotmentId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» baseRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the base rate will appear overridden and RMS will pro rata the nightly rate minus any Packages or Taxes|
|» totalRateOverride|integer(int32)|false|none|if you pass null or 0 RMS will calculate the rate breakdown for you, if you pass a value here the total rate will appear overridden and RMS will pro rata the nightly rate to include Base plus Packages. Taxes will be caculted ontop of the total rate override amount. If both baseRateOverride & totalRateOverride are passed in with a value then the totalRateOverride is used|
|» billingCategoryId|integer(int32)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» children|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» departureDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» groupAllotmentId|integer(int32)|false|none|none|
|» groupOptionId|integer(int32)|false|none|none|
|» groupReservationId|integer(int32)|false|none|This field will only be honoured on the response of a POST|
|» guestId|integer(int32)|false|none|none|
|» infants|integer(int32)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» mealPlanId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» onlineConfirmationId|integer(int32)|false|none|none|
|» otaNotes|string|false|none|none|
|» otaRef1|string|false|none|none|
|» otaRef2|string|false|none|none|
|» otaRef3|string|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» status|[reservationStatus](#schemareservationstatus)|false|none|This field is informational, any changes made will not be honoured|
|»» status|string|false|none|Valid Reservation Status|
|»» reasonId|integer(int32)|false|none|reasonId is an optional field that can be passed with the staus 'cancelled'. You can retrieve a list of cancellation related reasonIds via the call GET/reasons|
|»» cancellationNote|string|false|none|Free type note field used to add optional cancellation note|
|» subMarketSegmentId|integer(int32)|false|none|none|
|» travelAgentId|integer(int32)|false|none|none|
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
|» voucherId|string|false|none|none|
|» wholesaleId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unconfirmed|
|status|confirmed|
|status|arrived|
|status|departed|
|status|cancelled|
|status|maintenance|
|status|quote|
|status|stopSell|
|status|ownerOccupied|
|status|noShow|
|status|pencil|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestToAnExistingReservation

<a id="opIdaddGuestToAnExistingReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/addGuest \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/addGuest HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/addGuest',
{
  method: 'PUT',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/addGuest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/addGuest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/addGuest', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/addGuest");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/addGuest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/addGuest`

*Add a guest to a reservation*

<h3 id="addguesttoanexistingreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|guestId|query|integer(int32)|false|The Id of the relevant guest|

<h3 id="addguesttoanexistingreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeAGuestToAnExistingReservation

<a id="opIdremoveAGuestToAnExistingReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/removeGuest \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/removeGuest HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/removeGuest',
{
  method: 'PUT',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/removeGuest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/removeGuest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/removeGuest', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/removeGuest");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/removeGuest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/removeGuest`

*Remove a guest from a reservation*

<h3 id="removeaguesttoanexistingreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|guestId|query|integer(int32)|false|The Id of the relevant guest|

<h3 id="removeaguesttoanexistingreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## setThePrimaryGuestOnAnExistingReservation

<a id="opIdsetThePrimaryGuestOnAnExistingReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest',
{
  method: 'PUT',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/setPrimaryGuest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/setPrimaryGuest`

*Set the primary guest on a reservation*

<h3 id="settheprimaryguestonanexistingreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|guestId|query|integer(int32)|false|The Id of the relevant guest|

<h3 id="settheprimaryguestonanexistingreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## autoAllocateAreas

<a id="opIdautoAllocateAreas"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/autoAllocateAreas \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/autoAllocateAreas HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationIds": [
    165654,
    5464564,
    5465465
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/autoAllocateAreas',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/autoAllocateAreas',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/autoAllocateAreas', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/autoAllocateAreas', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/autoAllocateAreas");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/autoAllocateAreas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/autoAllocateAreas`

*Automatically allocate an area to a reservation*

> Body parameter

```json
{
  "reservationIds": [
    165654,
    5464564,
    5465465
  ]
}
```

<h3 id="autoallocateareas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[autoAllocateAreaRequest](#schemaautoallocatearearequest)|true|Function to allocate areas automatically to a specified reservation|

> Example responses

> 200 Response

```json
[
  {
    "areaId": 12,
    "errorMessage": "",
    "reservationId": 162630,
    "success": true
  }
]
```

<h3 id="autoallocateareas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="autoallocateareas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[autoAllocateAreaResponse](#schemaautoallocatearearesponse)]|false|none|[Used:<br>POST /reservations/autoAllocateAreas]|
|» areaId|integer(int32)|false|none|none|
|» errorMessage|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## overrideReservationDailyRates

<a id="opIdoverrideReservationDailyRates"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reasonId": 41,
  "dailyRates": [
    {
      "theDate": "2025-03-25",
      "baseRate": 160
    },
    {
      "theDate": "2025-03-26",
      "baseRate": 180
    },
    {
      "theDate": "2025-03-27",
      "baseRate": 200
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/dailyRates/override", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/dailyRates/override`

*Override the daily rates for a reservation*

Updates the base rate only and does not include package components or taxes.<br> Requires baseRate amount greater than '0'. <br> Daily rates for reservations with departed status cannot be updated.  <br> reasonId is optional and can be included when a reason is configured for 'reasonType': 'ManualOverride'. <br>To retrieve a full list of reasonIds, use GET /reasons.

> Body parameter

```json
{
  "reasonId": 41,
  "dailyRates": [
    {
      "theDate": "2025-03-25",
      "baseRate": 160
    },
    {
      "theDate": "2025-03-26",
      "baseRate": 180
    },
    {
      "theDate": "2025-03-27",
      "baseRate": 200
    }
  ]
}
```

<h3 id="overridereservationdailyrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationsDailyRatesOverride](#schemareservationsdailyratesoverride)|true|Override daily rates for a reservation|

> Example responses

> 200 Response

```json
[
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 29.25,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 0,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215470,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  },
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 0,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 44,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215471,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  }
]
```

<h3 id="overridereservationdailyrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[dailyRateBasicArray](#schemadailyratebasicarray)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## overrideReservationDiscount

<a id="opIdoverrideReservationDiscount"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/discountOverride?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/discountOverride?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "percentage": {
    "percentage": 3,
    "noGreaterThan": 12,
    "includePackage": true,
    "includeAdditionals": true,
    "appliestoTotalRate": false
  },
  "amount": {
    "amount": 15
  }
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/discountOverride?ignoreMandatoryFieldWarnings=false',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/discountOverride',
  params: {
  'ignoreMandatoryFieldWarnings' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/discountOverride', params={
  'ignoreMandatoryFieldWarnings': 'false'
}, headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/discountOverride', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/discountOverride?ignoreMandatoryFieldWarnings=false");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/discountOverride", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/discountOverride`

*Override an existing discount on a reservation*

> Body parameter

```json
{
  "percentage": {
    "percentage": 3,
    "noGreaterThan": 12,
    "includePackage": true,
    "includeAdditionals": true,
    "appliestoTotalRate": false
  },
  "amount": {
    "amount": 15
  }
}
```

<h3 id="overridereservationdiscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|body|body|[reservationsDiscountOverride](#schemareservationsdiscountoverride)|true|Override an existing discount on a reservation|

<h3 id="overridereservationdiscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ok|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## reservationDiscountsSearch

<a id="opIdreservationDiscountsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/discounts/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/discounts/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "categoryId": 4,
  "rateId": 1416,
  "arrivalDate": "2025-08-12",
  "departureDate": "2025-08-14"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/discounts/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/discounts/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/discounts/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/discounts/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/discounts/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/discounts/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/discounts/search`

*Retrieve avaialble discounts for a reservation*

> Body parameter

```json
{
  "categoryId": 4,
  "rateId": 1416,
  "arrivalDate": "2025-08-12",
  "departureDate": "2025-08-14"
}
```

<h3 id="reservationdiscountssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelType|query|string|false|Only these fields will be returned|
|body|body|[reservationsDiscountsSearch](#schemareservationsdiscountssearch)|true|Retrieve available discounts for a reservation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "availableToMembers": false,
    "glCodeId": 238,
    "glCodeType": "UseDefault",
    "discountType": "Percentage",
    "percentage": {
      "percentage": 15,
      "noGreaterThan": 9999,
      "includePackage": false,
      "includeAdditionals": false,
      "appliesToTotalRate": false
    },
    "availableToIbe": false,
    "description": "",
    "minimumNightStay": 0,
    "maximumNightStay": 0,
    "id": 65,
    "name": "15% Discount"
  },
  {
    "availableToMembers": false,
    "glCodeId": 376,
    "glCodeType": "UseDefault",
    "discountType": "Percentage",
    "percentage": {
      "percentage": 20,
      "noGreaterThan": 99999,
      "includePackage": false,
      "includeAdditionals": false,
      "appliesToTotalRate": false
    },
    "availableToIbe": false,
    "description": "",
    "minimumNightStay": 0,
    "maximumNightStay": 0,
    "id": 121,
    "name": "Discount Without Validation Options"
  }
]
```

<h3 id="reservationdiscountssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsDiscountsSearchResponseFull](#schemareservationsdiscountssearchresponsefull)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addADocumentToReservation

<a id="opIdaddADocumentToReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/document \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/document HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "documentName": "Picture.png",
  "documentContent": "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",
  "note": "Logo"
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/document',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/document',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/document', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/document', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/document");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/document", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/document`

*Add a document to the correspondence tab on a reservation*

> Body parameter

```json
{
  "documentName": "Picture.png",
  "documentContent": "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",
  "note": "Logo"
}
```

<h3 id="addadocumenttoreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationDocumentation](#schemareservationdocumentation)|true|Reservation object that needs to be added to add a document to a reservation|

<h3 id="addadocumenttoreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getPackagesForAReservation

<a id="opIdgetPackagesForAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/packages \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/packages HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/packages',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/packages',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/packages', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/packages', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/packages");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/packages", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/packages`

*This will bring a breakdown of packages against a reservation*

<h3 id="getpackagesforareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 43196,
    "sundryId": 313,
    "sundryDescription": "Fancy Pants Package",
    "quantity": 2,
    "perAdult": 5,
    "perChild": 5,
    "perInfant": 0,
    "perAdditional1": 0,
    "perAdditional2": 0,
    "perAdditional3": 0,
    "perAdditional4": 0,
    "perAdditional5": 0,
    "showOnccount": false,
    "applyChargeDescription": "On The 1st Period (Determined by Tariff Table - Hourly, Nightly or Daily)"
  }
]
```

<h3 id="getpackagesforareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getpackagesforareservation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationPackageArray](#schemareservationpackagearray)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» sundryDescription|string|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» perAdult|integer(decimal)|false|none|none|
|» perChild|integer(decimal)|false|none|none|
|» perInfant|integer(decimal)|false|none|none|
|» perAdditional1|integer(decimal)|false|none|none|
|» perAdditional2|integer(decimal)|false|none|none|
|» perAdditional3|integer(decimal)|false|none|none|
|» perAdditional4|integer(decimal)|false|none|none|
|» perAdditional5|integer(decimal)|false|none|none|
|» showOnccount|boolean|false|none|none|
|» applyChargeDescription|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationsPackagesSearch

<a id="opIdpostReservationsPackagesSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/packages/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/packages/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    223811,
    223814
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/packages/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/packages/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/packages/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/packages/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/packages/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/packages/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/packages/search`

*This will return a breakdown of packages against a list of reservations*

There is a limit of 500 resIds per request

> Body parameter

```json
{
  "ids": [
    223811,
    223814
  ]
}
```

<h3 id="postreservationspackagessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationsPackagesSearch](#schemareservationspackagessearch)|true|Object to pass to search for a list of reservations and their packages|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 223811,
    "packages": [
      {
        "id": 43641,
        "sundryId": 1411,
        "sundryDescription": "Luxurious Robe",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 12
      },
      {
        "id": 43640,
        "sundryId": 1410,
        "sundryDescription": "Spa Visit",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 50
      }
    ]
  },
  {
    "reservationId": 223814,
    "packages": [
      {
        "id": 43658,
        "sundryId": 6,
        "sundryDescription": "Restaurant Food",
        "quantity": 1,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "On The 1st Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 120
      },
      {
        "id": 43659,
        "sundryId": 111,
        "sundryDescription": "B1 B/fast Bev",
        "quantity": 2,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 6
      },
      {
        "id": 43657,
        "sundryId": 42,
        "sundryDescription": "B1 B/Fast food",
        "quantity": 2,
        "perAdult": 0,
        "perChild": 0,
        "perInfant": 0,
        "perAdditional1": 0,
        "perAdditional2": 0,
        "perAdditional3": 0,
        "perAdditional4": 0,
        "perAdditional5": 0,
        "showOnccount": false,
        "applyChargeDescription": "Every Period (Determined by Tariff Table - Hourly, Nightly or Daily)",
        "amount": 50
      }
    ]
  }
]
```

<h3 id="postreservationspackagessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsPackagesResponse](#schemareservationspackagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addRequirementToReservation

<a id="opIdaddRequirementToReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/requirement \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/requirement HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "amount": 26.9,
  "dateFrom": "2019-10-23 00:00:00",
  "dateTo": "2019-10-21 00:00:00",
  "quantity": 2,
  "requirementId": 2,
  "secondCurrency": 0,
  "name": "Custom Description",
  "amountOverride": {
    "feeType": "PerPeriod",
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "unitPrice": 12
  }
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/requirement',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/requirement',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/requirement', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/requirement', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/requirement");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/requirement", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/requirement`

*Add a requirement to a reservation*

> Body parameter

```json
{
  "amount": 26.9,
  "dateFrom": "2019-10-23 00:00:00",
  "dateTo": "2019-10-21 00:00:00",
  "quantity": 2,
  "requirementId": 2,
  "secondCurrency": 0,
  "name": "Custom Description",
  "amountOverride": {
    "feeType": "PerPeriod",
    "perAdult": 0,
    "perChild": 0,
    "perInfant": 0,
    "unitPrice": 12
  }
}
```

<h3 id="addrequirementtoreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationRequirement](#schemareservationrequirement)|true|Requirement object that needs to be added to create a requirement against a reservation|

<h3 id="addrequirementtoreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeRequirementToReservation

<a id="opIdremoveRequirementToReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId} \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId} HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}',
{
  method: 'DELETE',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.delete 'https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/reservations/{id}/requirement/{requirementId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /reservations/{id}/requirement/{requirementId}`

*Remove a requirement to a reservation*

<h3 id="removerequirementtoreservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|requirementId|path|integer(int32)|true|The Id of the relevant requirement|

<h3 id="removerequirementtoreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRequirementForAReservation

<a id="opIdgetRequirementForAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/requirements \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/requirements HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/requirements',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/requirements',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/requirements', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/requirements', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/requirements");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/requirements", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/requirements`

*get the requirement associated to a reservation*

<h3 id="getrequirementforareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "Id": 67762,
    "dateFrom": "2024-08-28 14:00:00",
    "dateTo": "2024-08-28 14:00:00",
    "quantity": 0,
    "amount": 60,
    "name": "Requirement",
    "reservationId": 216486,
    "secondCurrency": 0,
    "masterRequirementId": 66942
  }
]
```

<h3 id="getrequirementforareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsRequirementGetResponse](#schemareservationsrequirementgetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForRequirements

<a id="opIdsearchReservationsForRequirements"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/requirements/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/requirements/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/requirements/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/requirements/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/requirements/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/requirements/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/requirements/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/requirements/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/requirements/search`

*Pass an array of reservation Id's to retrieve the associated reservations actual account information*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsforrequirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "amount": 26.9,
    "dateFrom": "2019-10-23 00:00:00",
    "dateTo": "2019-10-21 00:00:00",
    "id": 2,
    "quantity": 2,
    "name": "Early check in online. 12 noon check in.",
    "reservationId": 21548
  }
]
```

<h3 id="searchreservationsforrequirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchreservationsforrequirements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationRequirementArray](#schemareservationrequirementarray)]|false|none|none|
|» amount|integer(decimal)|false|none|none|
|» dateFrom|string(date-time)|false|none|none|
|» dateTo|string(date-time)|false|none|none|
|» id|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationArriving

<a id="opIdgetReservationArriving"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/arriving?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/arriving?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/arriving?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/arriving',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/arriving', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/arriving', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/arriving?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/arriving", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/arriving`

*Retrieve a list of the reservations that you have arriving each day, this does not include reservations that have already arrived*

<h3 id="getreservationarriving-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|areaId|query|integer(int32)|false|The Id of the area to return|
|areaName|query|string|false|The name of the area to return|
|catId|query|integer(int32)|false|The Id of the category to return|
|modelType|query|string|false|Only these fields will be returned|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "reservationLite": false
  },
  {
    "reservationBasic": false
  },
  {
    "reservationFull": false
  }
]
```

<h3 id="getreservationarriving-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_10](#schemainline_response_200_10)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationDeparting

<a id="opIdgetReservationDeparting"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/departing?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/departing?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/departing?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/departing',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/departing', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/departing', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/departing?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/departing", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/departing`

*Retrieve a list of all reservations that are leaving today, this will not include reservations that have already left*

<h3 id="getreservationdeparting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|areaId|query|integer(int32)|false|The Id of the area to return|
|areaName|query|string|false|The name of the area to return|
|catId|query|integer(int32)|false|The Id of the category to return|
|modelType|query|string|false|Only these fields will be returned|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "reservationLite": false
  },
  {
    "reservationBasic": false
  },
  {
    "reservationFull": false
  }
]
```

<h3 id="getreservationdeparting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_10](#schemainline_response_200_10)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationInHouse

<a id="opIdgetReservationInHouse"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/inHouse?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/inHouse?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/inHouse?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/inHouse',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/inHouse', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/inHouse', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/inHouse?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/inHouse", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/inHouse`

*Retrieve a list of all reservations currently arrived*

This call returns reservations with the status arrived that have an arrival date <= 'today' and a departure date that is >= today.

<h3 id="getreservationinhouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|areaId|query|integer(int32)|false|The Id of the area to return|
|areaName|query|string|false|The name of the area to return|
|catId|query|integer(int32)|false|The Id of the category to return|
|modelType|query|string|false|Only these fields will be returned|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "reservationLite": false
  },
  {
    "reservationBasic": false
  },
  {
    "reservationFull": false
  }
]
```

<h3 id="getreservationinhouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_10](#schemainline_response_200_10)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationActualAccount

<a id="opIdgetReservationActualAccount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/actualAccount \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/actualAccount HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/actualAccount',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/actualAccount',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/actualAccount', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/actualAccount', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/actualAccount");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/actualAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/actualAccount`

*Retrieve a reservation’s financial information*

<h3 id="getreservationactualaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|includeSecondary|query|boolean|false|When set to true this option will return an the secondary currency value|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 222878,
    "accountId": 380471,
    "accountCurrencyView": "USD",
    "currencyCode": "AUD",
    "secondDepositRequiredByDate": "2024-10-02 01:08:10",
    "secondDeposit": 0,
    "arBalance": 0,
    "accommodationBalance": -75,
    "baseRate": 309,
    "billCategoryType": "",
    "createTotalRate": false,
    "depositRequiredByDate": "2024-09-25 01:08:10",
    "deposit": 116.93,
    "discountAmount": 0,
    "discountId": 0,
    "discountName": "",
    "discountReason": "",
    "electricityBalance": 0,
    "extrasBalance": 0,
    "gasBalance": 0,
    "hideRateOnCorrespondence": false,
    "package": 100,
    "travelAgentCommissionPercentage": 0,
    "travelAgentCommissionAmount": 0,
    "travelAgentCommissionType": "UseAgentCommission",
    "tax": 58.71,
    "taxExemption": "",
    "totalRate": 467.71,
    "upgradeReason": "",
    "waterBalance": 0,
    "phoneBalance": 0,
    "internetBalance": 0
  }
]
```

<h3 id="getreservationactualaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[actualAccountArray](#schemaactualaccountarray)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForActualAccount

<a id="opIdsearchReservationsForActualAccount"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/actualAccount/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/actualAccount/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/actualAccount/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/actualAccount/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/actualAccount/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/actualAccount/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/actualAccount/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/actualAccount/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/actualAccount/search`

*Pass an array of reservation Id's to retrieve the associated reservations actual account information*

When the travel agent's commissionType is set to UseAgentCommission you will need to retrieve the commission amount from the endpoint travelAgent{id}/Commissions.

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsforactualaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeSecondary|query|boolean|false|When set to true this option will return an the secondary currency value|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 222878,
    "accountId": 380471,
    "accountCurrencyView": "USD",
    "currencyCode": "AUD",
    "secondDepositRequiredByDate": "2024-10-02 01:08:10",
    "secondDeposit": 0,
    "arBalance": 0,
    "accommodationBalance": -75,
    "baseRate": 309,
    "billCategoryType": "",
    "createTotalRate": false,
    "depositRequiredByDate": "2024-09-25 01:08:10",
    "deposit": 116.93,
    "discountAmount": 0,
    "discountId": 0,
    "discountName": "",
    "discountReason": "",
    "electricityBalance": 0,
    "extrasBalance": 0,
    "gasBalance": 0,
    "hideRateOnCorrespondence": false,
    "package": 100,
    "travelAgentCommissionPercentage": 0,
    "travelAgentCommissionAmount": 0,
    "travelAgentCommissionType": "UseAgentCommission",
    "tax": 58.71,
    "taxExemption": "",
    "totalRate": 467.71,
    "upgradeReason": "",
    "waterBalance": 0,
    "phoneBalance": 0,
    "internetBalance": 0
  }
]
```

<h3 id="searchreservationsforactualaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[actualAccountArray](#schemaactualaccountarray)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateRateOnGroup

<a id="opIdupdateRateOnGroup"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "rateOnGroup": true
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/rateOnGroup", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/rateOnGroup`

*Assign tarif on master for groupMaster reservation*

> Body parameter

```json
{
  "rateOnGroup": true
}
```

<h3 id="updaterateongroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationsRateOnGroup](#schemareservationsrateongroup)|true|Assign tarif on master for groupMaster reservation|

<h3 id="updaterateongroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationReservationAddOn

<a id="opIdgetReservationReservationAddOn"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/reservationAddOn`

*Retrieve a reservation add-on information*

<h3 id="getreservationreservationaddon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 55,
    "addOn": "PK1",
    "addOnId": 1,
    "addOnType": "Car Park",
    "addOnTypeId": 3,
    "amount": 36.23,
    "aqppearOnHousekeepersReport": true,
    "chargesRequiredDaily": false,
    "fromDate": "2018-06-12 02:11:00",
    "includeToDate": false,
    "sundryId": 2,
    "useAmountFromSundry": true,
    "toDate": "2018-09-25 17:25:00"
  }
]
```

<h3 id="getreservationreservationaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationreservationaddon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationAddOn](#schemareservationaddon)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» addOnName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnId|integer(int32)|false|none|none|
|» addOnTypeName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnTypeId|integer(int32)|false|none|none|
|» amount|number(currency)|false|none|none|
|» appearOnHousekeepersReport|boolean|false|none|none|
|» chargesRequiredDaily|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» includeToDate|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|
|» toDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateAnAddOnAgainstAReservation

<a id="opIdupdateAnAddOnAgainstAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 55,
  "addOn": "PK1",
  "addOnId": 1,
  "addOnType": "Car Park",
  "addOnTypeId": 3,
  "amount": 36.23,
  "aqppearOnHousekeepersReport": true,
  "chargesRequiredDaily": false,
  "fromDate": "2018-06-12 02:11:00",
  "includeToDate": false,
  "sundryId": 2,
  "useAmountFromSundry": true,
  "toDate": "2018-09-25 17:25:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/reservationAddOn`

*Add an add-on to an existing reservation*

> Body parameter

```json
{
  "id": 55,
  "addOn": "PK1",
  "addOnId": 1,
  "addOnType": "Car Park",
  "addOnTypeId": 3,
  "amount": 36.23,
  "aqppearOnHousekeepersReport": true,
  "chargesRequiredDaily": false,
  "fromDate": "2018-06-12 02:11:00",
  "includeToDate": false,
  "sundryId": 2,
  "useAmountFromSundry": true,
  "toDate": "2018-09-25 17:25:00"
}
```

<h3 id="updateanaddonagainstareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationAddOn](#schemareservationaddon)|true|Reservation Add On|

> Example responses

> 200 Response

```json
[
  {
    "id": 55,
    "addOn": "PK1",
    "addOnId": 1,
    "addOnType": "Car Park",
    "addOnTypeId": 3,
    "amount": 36.23,
    "aqppearOnHousekeepersReport": true,
    "chargesRequiredDaily": false,
    "fromDate": "2018-06-12 02:11:00",
    "includeToDate": false,
    "sundryId": 2,
    "useAmountFromSundry": true,
    "toDate": "2018-09-25 17:25:00"
  }
]
```

<h3 id="updateanaddonagainstareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updateanaddonagainstareservation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationAddOn](#schemareservationaddon)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» addOnName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnId|integer(int32)|false|none|none|
|» addOnTypeName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnTypeId|integer(int32)|false|none|none|
|» amount|number(currency)|false|none|none|
|» appearOnHousekeepersReport|boolean|false|none|none|
|» chargesRequiredDaily|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» includeToDate|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|
|» toDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addAnAddOnToAReservation

<a id="opIdaddAnAddOnToAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 55,
  "addOn": "PK1",
  "addOnId": 1,
  "addOnType": "Car Park",
  "addOnTypeId": 3,
  "amount": 36.23,
  "aqppearOnHousekeepersReport": true,
  "chargesRequiredDaily": false,
  "fromDate": "2018-06-12 02:11:00",
  "includeToDate": false,
  "sundryId": 2,
  "useAmountFromSundry": true,
  "toDate": "2018-09-25 17:25:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/reservationAddOn", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/reservationAddOn`

*Add an add-on to an existing reservation*

> Body parameter

```json
{
  "id": 55,
  "addOn": "PK1",
  "addOnId": 1,
  "addOnType": "Car Park",
  "addOnTypeId": 3,
  "amount": 36.23,
  "aqppearOnHousekeepersReport": true,
  "chargesRequiredDaily": false,
  "fromDate": "2018-06-12 02:11:00",
  "includeToDate": false,
  "sundryId": 2,
  "useAmountFromSundry": true,
  "toDate": "2018-09-25 17:25:00"
}
```

<h3 id="addanaddontoareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationAddOn](#schemareservationaddon)|true|Reservation Add On|

> Example responses

> 200 Response

```json
[
  {
    "id": 55,
    "addOn": "PK1",
    "addOnId": 1,
    "addOnType": "Car Park",
    "addOnTypeId": 3,
    "amount": 36.23,
    "aqppearOnHousekeepersReport": true,
    "chargesRequiredDaily": false,
    "fromDate": "2018-06-12 02:11:00",
    "includeToDate": false,
    "sundryId": 2,
    "useAmountFromSundry": true,
    "toDate": "2018-09-25 17:25:00"
  }
]
```

<h3 id="addanaddontoareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="addanaddontoareservation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationAddOn](#schemareservationaddon)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» addOnName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnId|integer(int32)|false|none|none|
|» addOnTypeName|string|false|none|This field is informational, any changes made will not be honoured|
|» addOnTypeId|integer(int32)|false|none|none|
|» amount|number(currency)|false|none|none|
|» appearOnHousekeepersReport|boolean|false|none|none|
|» chargesRequiredDaily|boolean|false|none|none|
|» fromDate|string(date-time)|false|none|none|
|» includeToDate|boolean|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|
|» toDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeAnAddOnFromAReservation

<a id="opIdremoveAnAddOnFromAReservation"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn?reservationAddOnId=0 \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn?reservationAddOnId=0 HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn?reservationAddOnId=0',
{
  method: 'PUT',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn',
  params: {
  'reservationAddOnId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn', params={
  'reservationAddOnId': '0'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn?reservationAddOnId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/removeReservationAddOn", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/removeReservationAddOn`

*Remove an add-on from an existing reservation*

<h3 id="removeanaddonfromareservation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|reservationAddOnId|query|integer(int32)|true|The Id of the add on relationship with the reservation|

<h3 id="removeanaddonfromareservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationReservationAuditTrail

<a id="opIdgetReservationReservationAuditTrail"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/auditTrail \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/auditTrail HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/auditTrail',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/auditTrail',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/auditTrail', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/auditTrail', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/auditTrail");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/auditTrail", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/auditTrail`

*Retrieve a reservations audit information*

<h3 id="getreservationreservationaudittrail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "amount": 986,
    "date": "2018-09-25 17:25:00",
    "fieldModified": "Category",
    "newValue": "Deluxe Queen",
    "oldValue": "Single",
    "reason": "Incorrect Entry",
    "username": "Manager",
    "view": "reservation"
  }
]
```

<h3 id="getreservationreservationaudittrail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationreservationaudittrail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationAuditTrail](#schemareservationaudittrail)]|false|none|none|
|» amount|number(currency)|false|none|none|
|» date|string(date-time)|false|none|none|
|» fieldModified|string|false|none|none|
|» newValue|string|false|none|none|
|» oldValue|string|false|none|none|
|» reason|string|false|none|none|
|» username|string|false|none|none|
|» view|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## reservationsBedConfigurationsSearch

<a id="opIdreservationsBedConfigurationsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/bedConfigurations/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/bedConfigurations/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    228156,
    228157
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/bedConfigurations/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/bedConfigurations/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/bedConfigurations/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/bedConfigurations/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/bedConfigurations/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/bedConfigurations/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/bedConfigurations/search`

*Retrieve the bed configuration for a list of reservations*

> Body parameter

```json
{
  "ids": [
    228156,
    228157
  ]
}
```

<h3 id="reservationsbedconfigurationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationsBedConfigurationsSearch](#schemareservationsbedconfigurationssearch)|true|Retreieve the bed configurations for a list of reservations|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 228156,
    "bedConfigurations": [
      {
        "quantity": 2,
        "id": 6,
        "name": "Foldaway"
      },
      {
        "quantity": 1,
        "id": 3,
        "name": "King"
      },
      {
        "quantity": 1,
        "id": 5,
        "name": "King Split"
      },
      {
        "quantity": 2,
        "id": 4,
        "name": "Queen"
      },
      {
        "quantity": 1,
        "id": 1,
        "name": "Single"
      },
      {
        "quantity": 1,
        "id": 9,
        "name": "Sofa Bed"
      }
    ]
  },
  {
    "reservationId": 228157,
    "bedConfigurations": [
      {
        "quantity": 1,
        "id": 6,
        "name": "Foldaway"
      },
      {
        "quantity": 1,
        "id": 3,
        "name": "King"
      },
      {
        "quantity": 1,
        "id": 5,
        "name": "King Split"
      },
      {
        "quantity": 1,
        "id": 4,
        "name": "Queen"
      },
      {
        "quantity": 1,
        "id": 1,
        "name": "Single"
      },
      {
        "quantity": 1,
        "id": 9,
        "name": "Sofa Bed"
      }
    ]
  }
]
```

<h3 id="reservationsbedconfigurationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsBedConfigurationsResponse](#schemareservationsbedconfigurationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationBedConfiguration

<a id="opIdgetReservationBedConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/bedConfiguration", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/bedConfiguration`

*Retrieve a reservations bed configuration*

<h3 id="getreservationbedconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "name": "King",
    "quantity": 2
  }
]
```

<h3 id="getreservationbedconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationbedconfiguration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[bedConfiguration](#schemabedconfiguration)]|false|none|[Used:<br>GET /reservations/{id}/bedConfiguration]|
|» id|integer(int32)|false|none|none|
|» name|string|false|none|none|
|» quantity|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationBillTo

<a id="opIdgetReservationBillTo"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/billTo \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/billTo HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/billTo',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/billTo',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/billTo', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/billTo', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/billTo");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/billTo", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/billTo`

*Retrieve a reservations account mapping information*

<h3 id="getreservationbillto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 163577,
    "billToInformation": [
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Account1",
        "description": "Accommodation",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Account1",
        "description": "Extras",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Pabx",
        "description": "Pabx",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Electricity",
        "description": "Electricity",
        "invoiced": false
      }
    ]
  }
]
```

<h3 id="getreservationbillto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationbillto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBillToArray](#schemareservationbilltoarray)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» billToInformation|[reservationBillTo](#schemareservationbillto)|false|none|none|
|»» billToEntityId|integer(int32)|false|none|none|
|»» billToEntity|string|false|none|none|
|»» accountType|string|false|none|none|
|»» description|string|false|none|system label|
|»» invoiced|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForBillToInformation

<a id="opIdsearchReservationsForBillToInformation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/billTo/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/billTo/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/billTo/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/billTo/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/billTo/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/billTo/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/billTo/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/billTo/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/billTo/search`

*Pass an array of reservation Id's to retrieve the associated reservations account mapping information*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsforbilltoinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 163577,
    "billToInformation": [
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Account1",
        "description": "Accommodation",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Account1",
        "description": "Extras",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Pabx",
        "description": "Pabx",
        "invoiced": false
      },
      {
        "billToEntityId": 138452,
        "billToEntity": "Guest",
        "accountType": "Electricity",
        "description": "Electricity",
        "invoiced": false
      }
    ]
  }
]
```

<h3 id="searchreservationsforbilltoinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchreservationsforbilltoinformation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationBillToArray](#schemareservationbilltoarray)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» billToInformation|[reservationBillTo](#schemareservationbillto)|false|none|none|
|»» billToEntityId|integer(int32)|false|none|none|
|»» billToEntity|string|false|none|none|
|»» accountType|string|false|none|none|
|»» description|string|false|none|system label|
|»» invoiced|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationCorrespondence

<a id="opIdgetReservationCorrespondence"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/correspondence \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/correspondence HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/correspondence',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/correspondence',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/correspondence', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/correspondence', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/correspondence");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/correspondence", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/correspondence`

*Retrieve a reservations correspondence information*

<h3 id="getreservationcorrespondence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 2564,
    "attachment": "consent form.pdf",
    "code": "15a",
    "correspondenceType": "Email",
    "description": "CC Registration",
    "guestId": 103,
    "readDate": "2018-09-25 17:25:00",
    "reservationId": 3503,
    "sentDate": "2018-09-25 17:25:00",
    "userId": 7,
    "userName": "*hp"
  }
]
```

<h3 id="getreservationcorrespondence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationcorrespondence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[correspondence](#schemacorrespondence)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» attachment|string|false|none|none|
|» code|string|false|none|none|
|» correspondenceType|string|false|none|none|
|» description|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» readDate|string(date-time)|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» sentDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» userName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForCorrespondenceInformation

<a id="opIdsearchReservationsForCorrespondenceInformation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/correspondence/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/correspondence/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/correspondence/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/correspondence/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/correspondence/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/correspondence/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/correspondence/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/correspondence/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/correspondence/search`

*Pass an array of reservation Id's to retrieve the associated reservations correspondence information*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsforcorrespondenceinformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "id": 2564,
    "attachment": "consent form.pdf",
    "code": "15a",
    "correspondenceType": "Email",
    "description": "CC Registration",
    "guestId": 103,
    "readDate": "2018-09-25 17:25:00",
    "reservationId": 3503,
    "sentDate": "2018-09-25 17:25:00",
    "userId": 7,
    "userName": "*hp"
  }
]
```

<h3 id="searchreservationsforcorrespondenceinformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchreservationsforcorrespondenceinformation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[correspondence](#schemacorrespondence)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» attachment|string|false|none|none|
|» code|string|false|none|none|
|» correspondenceType|string|false|none|none|
|» description|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» readDate|string(date-time)|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» sentDate|string(date-time)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» userName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationExistingToken

<a id="opIdgetReservationExistingToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/existingToken \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/existingToken HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/existingToken',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/existingToken',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/existingToken', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/existingToken', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/existingToken");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/existingToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/existingToken`

*Identify if a reservation has a CC token associated with it*

<h3 id="getreservationexistingtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 198654,
    "existingToken": true
  }
]
```

<h3 id="getreservationexistingtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationexistingtoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[existingToken](#schemaexistingtoken)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» existingToken|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationGuests

<a id="opIdgetReservationGuests"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/guests \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/guests HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/guests',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/guests',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/guests', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/guests', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/guests");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/guests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/guests`

*Retrieve a reservations guest information*

<h3 id="getreservationguests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "birthday": "1999-07-24 00:00:00",
    "companyId": 1,
    "countryId": 1,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "guestAccountId": 1234,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "languageSpoken": "French Canadian",
    "marketingOptOut": true,
    "mobile": "+614 586 659 77",
    "nationalityId": 7,
    "notes": "This is a nice guest",
    "passportId": "E1234569",
    "phoneAH": "03 1245 6564",
    "phoneOptOut": true,
    "postcode": "1234E",
    "privacyOptIn": true,
    "propertyId": "1",
    "smsOptOut": true,
    "state": "Victoria",
    "title": "Dr.",
    "town": "Diggers",
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
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "2018-08-25 17:25:00",
    "userDefined16": "2018-09-25 13:25:00"
  }
]
```

<h3 id="getreservationguests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationguests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestBasic](#schemaguestbasic)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» mobile|string|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» postcode|string|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» title|string|false|none|none|
|» town|string|false|none|none|
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

## postGuestMovementSearch

<a id="opIdpostGuestMovementSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/guestMovements/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/guestMovements/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "guestIds": [
    194076
  ],
  "reservationIds": [],
  "dateFrom": "2023-01-01",
  "dateTo": "2024-09-05"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/guestMovements/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/guestMovements/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/guestMovements/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/guestMovements/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/guestMovements/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/guestMovements/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/guestMovements/search`

*Retrieve a Reservations Guest Movements Advanced Search*

This endpoint provides two functionalities- <br> 1.Retrieve a list of all guests associated with a reservation.<br> 2.Search for reservations by primary and secondary guests.<br><br> You can specify the model type as either basic or full.

> Body parameter

```json
{
  "guestIds": [
    194076
  ],
  "reservationIds": [],
  "dateFrom": "2023-01-01",
  "dateTo": "2024-09-05"
}
```

<h3 id="postguestmovementsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|modelType|query|string|false|Only these fields will be returned|
|body|body|[guestMovementsSearch](#schemaguestmovementssearch)|true|Retrieve guest movements by reservationId or guestId|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "guestMovementBasic": false
  },
  {
    "guestMovementFull": false
  }
]
```

<h3 id="postguestmovementsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_11](#schemainline_response_200_11)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsMovement

<a id="opIdgetGuestsMovement"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/guestMovement \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/guestMovement HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/guestMovement',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/guestMovement',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/guestMovement', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/guestMovement', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/guestMovement");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/guestMovement", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/guestMovement`

*Retrieve a Reservations Guest Movements*

<h3 id="getguestsmovement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|modelType|query|string|false|Only these fields will be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|modelType|basic|
|modelType|lite|
|modelType|full|

> Example responses

> 200 Response

```json
[
  {
    "guestMovementBasic": false
  },
  {
    "guestMovementFull": false
  }
]
```

<h3 id="getguestsmovement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_11](#schemainline_response_200_11)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationHolds

<a id="opIdgetReservationHolds"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/holds \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/holds HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/holds',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/holds',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/holds', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/holds', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/holds");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/holds", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/holds`

*Retrieve a reservations hold information*

<h3 id="getreservationholds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 5,
    "holdExpired": true,
    "dateFrom": "2020-10-23 00:00:00",
    "rateId": 1277,
    "dateTo": "2020-10-27 00:00:00"
  }
]
```

<h3 id="getreservationholds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationholds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationHold](#schemareservationhold)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» holdExpired|boolean|false|none|none|
|» dateFrom|string(date)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» dateTo|string(date)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putReservationHolds

<a id="opIdputReservationHolds"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/holds \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/holds HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 5,
  "holdExpired": true,
  "dateFrom": "2020-10-23 00:00:00",
  "rateId": 1277,
  "dateTo": "2020-10-27 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/holds',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/holds',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/holds', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/holds', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/holds");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/holds", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/holds`

*Update a Hold record against a reservation*

> Body parameter

```json
{
  "id": 5,
  "holdExpired": true,
  "dateFrom": "2020-10-23 00:00:00",
  "rateId": 1277,
  "dateTo": "2020-10-27 00:00:00"
}
```

<h3 id="putreservationholds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationHold](#schemareservationhold)|true|Reservation hold object|

> Example responses

> 200 Response

```json
[
  {
    "id": 5,
    "holdExpired": true,
    "dateFrom": "2020-10-23 00:00:00",
    "rateId": 1277,
    "dateTo": "2020-10-27 00:00:00"
  }
]
```

<h3 id="putreservationholds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="putreservationholds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationHold](#schemareservationhold)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» holdExpired|boolean|false|none|none|
|» dateFrom|string(date)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» dateTo|string(date)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationHolds

<a id="opIdpostReservationHolds"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/holds \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/holds HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 5,
  "holdExpired": true,
  "dateFrom": "2020-10-23 00:00:00",
  "rateId": 1277,
  "dateTo": "2020-10-27 00:00:00"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/holds',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/holds',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/holds', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/holds', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/holds");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/holds", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/holds`

*Create a Hold record against a reservation*

> Body parameter

```json
{
  "id": 5,
  "holdExpired": true,
  "dateFrom": "2020-10-23 00:00:00",
  "rateId": 1277,
  "dateTo": "2020-10-27 00:00:00"
}
```

<h3 id="postreservationholds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[reservationHold](#schemareservationhold)|true|Reservation hold object|

> Example responses

> 200 Response

```json
[
  {
    "id": 5,
    "holdExpired": true,
    "dateFrom": "2020-10-23 00:00:00",
    "rateId": 1277,
    "dateTo": "2020-10-27 00:00:00"
  }
]
```

<h3 id="postreservationholds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postreservationholds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationHold](#schemareservationhold)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» holdExpired|boolean|false|none|none|
|» dateFrom|string(date)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» dateTo|string(date)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationHoldsSearch

<a id="opIdpostReservationHoldsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/holds/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/holds/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/holds/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/holds/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/holds/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/holds/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/holds/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/holds/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/holds/search`

*Retrieve a the hold information with reservations*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="postreservationholdssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 124356,
    "holds": [
      {
        "id": 5,
        "holdExpired": true,
        "dateFrom": "2020-10-23 00:00:00",
        "rateId": 1277,
        "dateTo": "2020-10-27 00:00:00"
      }
    ]
  }
]
```

<h3 id="postreservationholdssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postreservationholdssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationHoldArray](#schemareservationholdarray)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» holds|[reservationHold](#schemareservationhold)|false|none|none|
|»» id|integer(int32)|false|none|none|
|»» holdExpired|boolean|false|none|none|
|»» dateFrom|string(date)|false|none|none|
|»» rateId|integer(int32)|false|none|none|
|»» dateTo|string(date)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationHouskeepingsSearch

<a id="opIdpostReservationHouskeepingsSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/housekeeping/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/housekeeping/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "fromDate": "2023-04-20",
  "reservationIds": [
    213691,
    213296
  ],
  "toDate": "2023-04-20"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/housekeeping/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/housekeeping/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/housekeeping/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/housekeeping/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/housekeeping/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/housekeeping/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/housekeeping/search`

*Retrieve housekeeping information with reservations*

> Body parameter

```json
{
  "fromDate": "2023-04-20",
  "reservationIds": [
    213691,
    213296
  ],
  "toDate": "2023-04-20"
}
```

<h3 id="postreservationhouskeepingssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[reservationHousekeepingSearch](#schemareservationhousekeepingsearch)|true|Reservation Housekeeping Search object to search|

> Example responses

> 200 Response

```json
[
  {
    "departureClean": false,
    "housekeeperId": 45,
    "housekeeperName": "Hayden Paterson",
    "id": 7,
    "linenChange": true,
    "note": "",
    "taskDate": "2023-04-20 00:00:00",
    "taskName": "Linen Change",
    "taskMinutes": 30,
    "reservationId": 213691
  }
]
```

<h3 id="postreservationhouskeepingssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="postreservationhouskeepingssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[reservationHousekeepingArray](#schemareservationhousekeepingarray)]|false|none|none|
|» departureClean|boolean|false|none|none|
|» housekeeperId|integer(int32)|false|none|none|
|» housekeeperName|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» linenChange|boolean|false|none|none|
|» note|string|false|none|none|
|» taskDate|string(date-time)|false|none|none|
|» taskName|string|false|none|none|
|» taskMinutes|any|false|none|none|
|» reservationId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationHousekeeping

<a id="opIdgetReservationHousekeeping"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/housekeeping \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/housekeeping HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/housekeeping',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/housekeeping',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/housekeeping', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/housekeeping', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/housekeeping");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/housekeeping", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/housekeeping`

*Retrieve a reservations housekeeping information*

<h3 id="getreservationhousekeeping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "departureClean": true,
    "housekeeperId": 8,
    "housekeeperName": "Jan",
    "id": 8,
    "linenChange": true,
    "note": "dont tuck bed to tight",
    "taskDate": "2020-05-26 00:00:00",
    "taskName": "Departure",
    "taskMinutes": 5,
    "reservationId": 213296
  }
]
```

<h3 id="getreservationhousekeeping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationhousekeeping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[housekeeping](#schemahousekeeping)]|false|none|none|
|» departureClean|boolean|false|none|none|
|» housekeeperId|integer(int32)|false|none|none|
|» housekeeperName|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» linenChange|boolean|false|none|none|
|» note|string|false|none|none|
|» taskDate|string(date-time)|false|none|none|
|» taskName|string|false|none|none|
|» taskMinutes|integer(int32)|false|none|none|
|» reservationId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationHousekeepingResetSchedule

<a id="opIdpostReservationHousekeepingResetSchedule"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationId": 0,
  "resetBedConfig": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/housekeeping/resetSchedule", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/housekeeping/resetSchedule`

*to reset a reservations housekeeping schedule*

> Body parameter

```json
{
  "reservationId": 0,
  "resetBedConfig": true
}
```

<h3 id="postreservationhousekeepingresetschedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[resetHousekeepingRequest](#schemaresethousekeepingrequest)|true|Bedding Configuration Reset|

> Example responses

> 200 Response

```json
{
  "Success": true
}
```

<h3 id="postreservationhousekeepingresetschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|[inline_response_200_12](#schemainline_response_200_12)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## reservationsLinensSearch

<a id="opIdreservationsLinensSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/linens/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/linens/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    228156,
    228157
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/linens/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/linens/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/linens/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/linens/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/linens/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/linens/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/linens/search`

*Retrieve the linens configuration for a list of reservations*

> Body parameter

```json
{
  "ids": [
    228156,
    228157
  ]
}
```

<h3 id="reservationslinenssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationsLinensSearch](#schemareservationslinenssearch)|true|Retreieve the linens configurations for a list of reservations|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 228156,
    "linens": [
      {
        "linenId": 5,
        "linen": "Bath Mat",
        "quantity": 3
      },
      {
        "linenId": 4,
        "linen": "Bath towel",
        "quantity": 6
      },
      {
        "linenId": 7,
        "linen": "Face Washer",
        "quantity": 4
      },
      {
        "linenId": 8,
        "linen": "Hand Towel",
        "quantity": 2
      },
      {
        "linenId": 6,
        "linen": "King Sheet",
        "quantity": 1
      },
      {
        "linenId": 9,
        "linen": "KING SINGLE SHEET",
        "quantity": 1
      },
      {
        "linenId": 3,
        "linen": "Pillow Slip",
        "quantity": 1
      },
      {
        "linenId": 10,
        "linen": "Pool towel",
        "quantity": 2
      },
      {
        "linenId": 2,
        "linen": "Single Sheet",
        "quantity": 2
      }
    ]
  },
  {
    "reservationId": 228157,
    "linens": [
      {
        "linenId": 5,
        "linen": "Bath Mat",
        "quantity": 2
      },
      {
        "linenId": 4,
        "linen": "Bath towel",
        "quantity": 4
      },
      {
        "linenId": 7,
        "linen": "Face Washer",
        "quantity": 3
      },
      {
        "linenId": 8,
        "linen": "Hand Towel",
        "quantity": 2
      },
      {
        "linenId": 6,
        "linen": "King Sheet",
        "quantity": 1
      },
      {
        "linenId": 9,
        "linen": "KING SINGLE SHEET",
        "quantity": 1
      },
      {
        "linenId": 3,
        "linen": "Pillow Slip",
        "quantity": 1
      },
      {
        "linenId": 10,
        "linen": "Pool towel",
        "quantity": 2
      },
      {
        "linenId": 2,
        "linen": "Single Sheet",
        "quantity": 1
      }
    ]
  }
]
```

<h3 id="reservationslinenssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsLinensResponse](#schemareservationslinensresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationLinen

<a id="opIdgetReservationLinen"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/linen \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/linen HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/linen',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/linen',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/linen', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/linen', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/linen");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/linen", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/linen`

*Retrieve a reservations linen information*

<h3 id="getreservationlinen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "linenId": 4,
    "linen": "Bath towel",
    "quantity": 1
  }
]
```

<h3 id="getreservationlinen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationlinen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[resLinen](#schemareslinen)]|false|none|none|
|» linenId|integer(int32)|false|none|none|
|» linen|string|false|none|none|
|» quantity|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationProjectedAccount

<a id="opIdgetReservationProjectedAccount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/projectedAccount \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/projectedAccount HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/projectedAccount',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/projectedAccount',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/projectedAccount', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/projectedAccount', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/projectedAccount");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/projectedAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/projectedAccount`

*Retrieve a reservations projected account information*

This call calculates projected revenue minus posted credits but excludes add-ons, transfers, and charge redirections.<br><br>For the full projected balance as displayed in RMS, use:<br>GET /reservations/{id}/projectedBalance

<h3 id="getreservationprojectedaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 72,
    "tax": null,
    "total": null,
    "totalTaxExcludingGST": null
  }
]
```

<h3 id="getreservationprojectedaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationprojectedaccount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[projectedAccount](#schemaprojectedaccount)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» tax|number(currency)|false|none|none|
|» total|number(currency)|false|none|none|
|» totalTaxExcludingGST|number(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationProjectedBalance

<a id="opIdgetReservationProjectedBalance"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/projectedBalance \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/projectedBalance HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/projectedBalance',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/projectedBalance',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/projectedBalance', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/projectedBalance', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/projectedBalance");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/projectedBalance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/projectedBalance`

*Retrieve a reservations projected balance*

The Projected Balanace includes the Total Rate, Requirements, Add-Ons, and Transfers, while accounting for any Receipts or Credit Notes on the Reservation Account. This balance aligns with the Proforma Tax Invoice.

<h3 id="getreservationprojectedbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "projectedBalance": -133.7
  }
]
```

<h3 id="getreservationprojectedbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationprojectedbalance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[projectedBalance](#schemaprojectedbalance)]|false|none|none|
|» projectedBalance|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationDailyRates

<a id="opIdgetReservationDailyRates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/dailyRates \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/dailyRates HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/dailyRates',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/dailyRates',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/dailyRates', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/dailyRates', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/dailyRates");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/dailyRates", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/dailyRates`

*Retrieve a reservations daily rate information*

<h3 id="getreservationdailyrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 3678,
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 29.25,
    "dynamicAmount": 0,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 0,
    "rateAmount": 292.5,
    "rateId": 12,
    "ratePeriod": 7,
    "rateTable": 15,
    "rateTypeId": 15,
    "stayDate": "28-04-2019 12:00:00",
    "totalRateAmount": 800.25,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  }
]
```

<h3 id="getreservationdailyrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationdailyrates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[dailyRate](#schemadailyrate)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» additionalsAmount|number(currency)|false|none|none|
|» currency|string|false|none|none|
|» discountAmount|number(currency)|false|none|none|
|» dynamicAmount|number(currency)|false|none|none|
|» exclusiveTax|number(currency)|false|none|none|
|» linkedRateAdjustmentAmount|number(currency)|false|none|none|
|» marketSegmentId|integer(int32)|false|none|none|
|» packageAmount|number(currency)|false|none|none|
|» packageAmountIncludedInRateAmount|number(currency)|false|none|none|
|» rateAmount|number(currency)|false|none|none|
|» rateId|integer(int32)|false|none|none|
|» ratePeriod|integer(int32)|false|none|none|
|» rateTable|integer(int32)|false|none|none|
|» rateTypeId|integer(int32)|false|none|none|
|» stayDate|string(date-time)|false|none|none|
|» totalRateAmount|number(currency)|false|none|none|
|» xNightsDiscount|number(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForDailyRates

<a id="opIdsearchReservationsForDailyRates"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/dailyRates/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/dailyRates/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/dailyRates/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/dailyRates/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/dailyRates/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/dailyRates/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/dailyRates/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/dailyRates/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/dailyRates/search`

*Retrieve the daily Rates associated with reservations*

Daily breakdown of sibling reservations will be returned when request is made using Res Master ID.<br>Res Master ID will not be included in response body.

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsfordailyrates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 29.25,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 0,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215470,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  },
  {
    "additionalsAmount": 0,
    "currency": "AUD",
    "discountAmount": 0,
    "dynamicAmount": 800,
    "exclusiveTax": 0,
    "linkedRateAdjustmentAmount": 0,
    "marketSegmentId": 1,
    "packageAmount": 44,
    "rateAmount": 800,
    "rateElement": "",
    "ratePeriod": "",
    "rateTable": "CD PH Winter hols",
    "rateTypeId": 1416,
    "reservationId": 215471,
    "stayDate": "2023-06-01 00:00:00",
    "totalRateAmount": 844,
    "xNightsDiscount": 0,
    "packageAmountIncludedInRateAmount": 20
  }
]
```

<h3 id="searchreservationsfordailyrates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[dailyRateBasicArray](#schemadailyratebasicarray)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postReservationsRatequotes

<a id="opIdpostReservationsRatequotes"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/rateQuotes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/rateQuotes HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationIds": [
    222898,
    226542
  ],
  "includeTaxBreakdown": true,
  "includeAdditionalsBreakdown": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/rateQuotes',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/rateQuotes',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/rateQuotes', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/rateQuotes', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/rateQuotes");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/rateQuotes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/rateQuotes`

*Retrieve the rates breakdown for a list of reservations*

The list of reservation IDs is limited to a maximum of 15. <br> Res Master ID is not supported and may return discrepancies.

> Body parameter

```json
{
  "reservationIds": [
    222898,
    226542
  ],
  "includeTaxBreakdown": true,
  "includeAdditionalsBreakdown": true
}
```

<h3 id="postreservationsratequotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationsRateQuotes](#schemareservationsratequotes)|true|Retrieve the rates breakdown for a reservation|

> Example responses

> 200 Response

```json
[
  {
    "baseRate": 620,
    "baseRateDiscountAmount": 0,
    "baseRateRentalReductionAmount": 0,
    "baseRateTax": 155,
    "categoryId": 52,
    "deposit1Amount": 712,
    "deposit1RequiredBy": "2024-09-26 03:51:51",
    "deposit2Amount": 100,
    "deposit2RequiredBy": "2024-09-26 03:51:51",
    "discountAmount": 0,
    "firstNightRate": 356,
    "package": 92,
    "packageTax": 0,
    "rateBreakdown": [
      {
        "theDate": "2028-10-01 00:00:00",
        "baseRateAmount": 310,
        "baseRateRaw": 300,
        "rateType": "BAR USD",
        "rateTypeId": 1433,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 46,
        "packageHiddenAmount": 46,
        "packageShownAmount": 0,
        "displayBaseRate": 300,
        "displayTotalPackage": 46,
        "displayTotalRate": 356,
        "displayTotalTax": 77.5,
        "packageBreakdown": [
          {
            "amount": 40,
            "baseIncludesPackageAmount": false,
            "glCodeId": 24,
            "packageFeeType": 0,
            "packageId": 19400,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 42,
            "sundryName": "B1 B/Fast food",
            "totalTax": 0,
            "theDate": "2028-10-01 00:00:00"
          },
          {
            "amount": 6,
            "baseIncludesPackageAmount": false,
            "glCodeId": 68,
            "packageFeeType": 0,
            "packageId": 19401,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 21,
            "sundryName": "Restaurant Beverages",
            "totalTax": 0,
            "theDate": "2028-10-01 00:00:00"
          }
        ],
        "totalExtras": 10,
        "totalPackage": 46,
        "totalPackageIncludedInBase": 0,
        "totalPackageNotIncludedInBase": 46,
        "totalRate": 356,
        "taxBreakdown": [
          {
            "amount": 31,
            "description": "10% State Tax"
          },
          {
            "amount": 31,
            "description": "Service Charge 10"
          },
          {
            "amount": 15.5,
            "description": "VAT"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 10
          },
          {
            "additionalType": "Child",
            "amount": 0
          }
        ]
      },
      {
        "theDate": "2028-10-02 00:00:00",
        "baseRateAmount": 310,
        "baseRateRaw": 300,
        "rateType": "BAR USD",
        "rateTypeId": 1433,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 46,
        "packageHiddenAmount": 46,
        "packageShownAmount": 0,
        "displayBaseRate": 300,
        "displayTotalPackage": 46,
        "displayTotalRate": 356,
        "displayTotalTax": 77.5,
        "packageBreakdown": [
          {
            "amount": 40,
            "baseIncludesPackageAmount": false,
            "glCodeId": 24,
            "packageFeeType": 0,
            "packageId": 19400,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 42,
            "sundryName": "B1 B/Fast food",
            "totalTax": 0,
            "theDate": "2028-10-02 00:00:00"
          },
          {
            "amount": 6,
            "baseIncludesPackageAmount": false,
            "glCodeId": 68,
            "packageFeeType": 0,
            "packageId": 19401,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 2,
            "sundryId": 21,
            "sundryName": "Restaurant Beverages",
            "totalTax": 0,
            "theDate": "2028-10-02 00:00:00"
          }
        ],
        "totalExtras": 10,
        "totalPackage": 46,
        "totalPackageIncludedInBase": 0,
        "totalPackageNotIncludedInBase": 46,
        "totalRate": 356,
        "taxBreakdown": [
          {
            "amount": 31,
            "description": "10% State Tax"
          },
          {
            "amount": 31,
            "description": "Service Charge 10"
          },
          {
            "amount": 15.5,
            "description": "VAT"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 10
          },
          {
            "additionalType": "Child",
            "amount": 0
          }
        ]
      }
    ],
    "secondDiscountAmount": 0,
    "useResDiscountNightly": false,
    "cancellationPolicyId": 3,
    "reservationId": 222898
  },
  {
    "baseRate": 400,
    "baseRateDiscountAmount": 0,
    "baseRateRentalReductionAmount": 0,
    "baseRateTax": 40,
    "categoryId": 7,
    "deposit1Amount": 0,
    "deposit1RequiredBy": "2025-03-12 12:47:00",
    "deposit2Amount": 0,
    "deposit2RequiredBy": "2025-03-13 06:47:21",
    "discountAmount": 0,
    "firstNightRate": 550,
    "package": 100,
    "packageTax": 10,
    "rateBreakdown": [
      {
        "theDate": "2025-03-18 00:00:00",
        "baseRateAmount": 400,
        "baseRateRaw": 500,
        "rateType": "BAR AUD Exclusive Tax",
        "rateTypeId": 1447,
        "currencyCode": "AUD",
        "currencySymbol": "$",
        "packageAmount": 100,
        "packageHiddenAmount": 100,
        "packageShownAmount": 0,
        "displayBaseRate": 400,
        "displayTotalPackage": 100,
        "displayTotalRate": 550,
        "displayTotalTax": 50,
        "packageBreakdown": [
          {
            "amount": 100,
            "baseIncludesPackageAmount": true,
            "glCodeId": 176,
            "packageFeeType": 0,
            "packageId": 43673,
            "perAdultFee": 0,
            "perChildFee": 0,
            "perExtra4Fee": 0,
            "perExtra5Fee": 0,
            "perExtra6Fee": 0,
            "perExtra7Fee": 0,
            "perExtra8Fee": 0,
            "perInfantFee": 0,
            "quantity": 1,
            "sundryId": 318,
            "sundryName": "Food",
            "totalTax": 10,
            "theDate": "2025-03-18 00:00:00"
          }
        ],
        "totalExtras": 0,
        "totalPackage": 100,
        "totalPackageIncludedInBase": 100,
        "totalPackageNotIncludedInBase": 0,
        "totalRate": 500,
        "taxBreakdown": [
          {
            "amount": 40,
            "description": "10% State Tax"
          }
        ],
        "additionalsBreakdown": [
          {
            "additionalType": "Adult",
            "amount": 0
          },
          {
            "additionalType": "Child",
            "amount": 0
          },
          {
            "additionalType": "Infant",
            "amount": 0
          }
        ]
      }
    ],
    "secondDiscountAmount": 0,
    "useResDiscountNightly": false,
    "cancellationPolicyId": 0,
    "reservationId": 226542
  }
]
```

<h3 id="postreservationsratequotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[reservationsRateQuotesResponse](#schemareservationsratequotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationDailyRevenue

<a id="opIdgetReservationDailyRevenue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/dailyRevenue", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/dailyRevenue`

*Retrieve a reservations daily revenue information*

<h3 id="getreservationdailyrevenue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "accommodation": 20,
    "accommodationGst": 2,
    "accommodationTax": 0,
    "foodAndBeverage": 10,
    "foodAndBeverageGst": 1,
    "foodAndBeverageTax": 0,
    "other": 15,
    "otherGst": 1.5,
    "otherTax": 0,
    "theDate": "2019-09-12"
  }
]
```

<h3 id="getreservationdailyrevenue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationdailyrevenue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[dailyRevenue](#schemadailyrevenue)]|false|none|none|
|» accommodation|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|» accommodationGst|number(currency)|false|none|none|
|» accommodationTax|number(currency)|false|none|none|
|» foodAndBeverage|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|» foodAndBeverageGst|number(currency)|false|none|none|
|» foodAndBeverageTax|number(currency)|false|none|none|
|» other|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|» otherGst|number(currency)|false|none|none|
|» otherTax|number(currency)|false|none|none|
|» theDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationsForDailyRevenue

<a id="opIdsearchReservationsForDailyRevenue"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/dailyRevenue/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/dailyRevenue/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/dailyRevenue/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/dailyRevenue/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/dailyRevenue/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/dailyRevenue/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/dailyRevenue/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/dailyRevenue/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/dailyRevenue/search`

*Retrieve the daily revenue associated with reservations*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationsfordailyrevenue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 163577,
    "dailyRevenue": [
      {
        "theDate": "2020-12-10 00:00:00",
        "accommodation": 360,
        "accommodationTax": 0,
        "accommodationGST": 32.72,
        "foodAndBeverage": 0,
        "foodAndBeverageTax": 0,
        "foodAndBeverageGST": 0,
        "other": 50,
        "otherTax": 0,
        "otherGST": 4.55
      },
      {
        "theDate": "2020-12-11 00:00:00",
        "accommodation": 0,
        "accommodationTax": 0,
        "accommodationGST": 0,
        "foodAndBeverage": 0,
        "foodAndBeverageTax": 0,
        "foodAndBeverageGST": 0,
        "other": 0,
        "otherTax": 0,
        "otherGST": 0
      }
    ]
  }
]
```

<h3 id="searchreservationsfordailyrevenue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchreservationsfordailyrevenue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[dailyRevenueArray](#schemadailyrevenuearray)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» dailyRevenue|[dailyRevenue](#schemadailyrevenue)|false|none|none|
|»» accommodation|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|»» accommodationGst|number(currency)|false|none|none|
|»» accommodationTax|number(currency)|false|none|none|
|»» foodAndBeverage|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|»» foodAndBeverageGst|number(currency)|false|none|none|
|»» foodAndBeverageTax|number(currency)|false|none|none|
|»» other|number(currency)|false|none|This value is tax inclusive for tax inclusive properties|
|»» otherGst|number(currency)|false|none|none|
|»» otherTax|number(currency)|false|none|none|
|»» theDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationRegoAccess

<a id="opIdgetReservationRegoAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/regoAccess \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/regoAccess HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/regoAccess', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/regoAccess', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/regoAccess");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/regoAccess", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/regoAccess`

*Retrieve a reservations registration access information*

<h3 id="getreservationregoaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 383,
    "accessNumber": "5265",
    "accessZone": "All",
    "areaId": 95,
    "zoneId": 0,
    "createdDate": "2018-08-02 04:22:00",
    "expiryDate": "2018-09-25 17:25:00",
    "modifiedDate": "2018-09-05 13:25:00",
    "note": "Car is Nice",
    "regoNumber": "698-IOU",
    "reservationId": 211897,
    "status": "In"
  }
]
```

<h3 id="getreservationregoaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationregoaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[regoAccess](#schemaregoaccess)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accessNumber|string|false|none|none|
|» accessZone|string|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» zoneId|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» note|string|false|none|none|
|» regoNumber|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateReservationRegistrationAccess

<a id="opIdupdateReservationRegistrationAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/regoAccess \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/regoAccess HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "areaId": 95,
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "reservationId": 211897,
  "status": "In"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/regoAccess', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/regoAccess', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/regoAccess");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/regoAccess", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/regoAccess`

*Update a reservations registration access information*

> Body parameter

```json
{
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "areaId": 95,
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "reservationId": 211897,
  "status": "In"
}
```

<h3 id="updatereservationregistrationaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[regoAccess](#schemaregoaccess)|true|Reservation rego access|

> Example responses

> 200 Response

```json
[
  {
    "id": 383,
    "accessNumber": "5265",
    "accessZone": "All",
    "areaId": 95,
    "zoneId": 0,
    "createdDate": "2018-08-02 04:22:00",
    "expiryDate": "2018-09-25 17:25:00",
    "modifiedDate": "2018-09-05 13:25:00",
    "note": "Car is Nice",
    "regoNumber": "698-IOU",
    "reservationId": 211897,
    "status": "In"
  }
]
```

<h3 id="updatereservationregistrationaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatereservationregistrationaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[regoAccess](#schemaregoaccess)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accessNumber|string|false|none|none|
|» accessZone|string|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» zoneId|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» note|string|false|none|none|
|» regoNumber|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## createReservationRegistrationAccess

<a id="opIdcreateReservationRegistrationAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/regoAccess \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/regoAccess HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "areaId": 95,
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "reservationId": 211897,
  "status": "In"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/regoAccess',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/regoAccess', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/regoAccess', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/regoAccess");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/regoAccess", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/regoAccess`

*Create a reservations registration access information*

> Body parameter

```json
{
  "id": 383,
  "accessNumber": "5265",
  "accessZone": "All",
  "areaId": 95,
  "zoneId": 0,
  "createdDate": "2018-08-02 04:22:00",
  "expiryDate": "2018-09-25 17:25:00",
  "modifiedDate": "2018-09-05 13:25:00",
  "note": "Car is Nice",
  "regoNumber": "698-IOU",
  "reservationId": 211897,
  "status": "In"
}
```

<h3 id="createreservationregistrationaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[regoAccess](#schemaregoaccess)|true|Reservation rego access|

> Example responses

> 200 Response

```json
[
  {
    "id": 383,
    "accessNumber": "5265",
    "accessZone": "All",
    "areaId": 95,
    "zoneId": 0,
    "createdDate": "2018-08-02 04:22:00",
    "expiryDate": "2018-09-25 17:25:00",
    "modifiedDate": "2018-09-05 13:25:00",
    "note": "Car is Nice",
    "regoNumber": "698-IOU",
    "reservationId": 211897,
    "status": "In"
  }
]
```

<h3 id="createreservationregistrationaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="createreservationregistrationaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[regoAccess](#schemaregoaccess)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accessNumber|string|false|none|none|
|» accessZone|string|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» zoneId|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» note|string|false|none|none|
|» regoNumber|string|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchReservationRegoAccess

<a id="opIdsearchReservationRegoAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/regoAccess/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/regoAccess/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    215469
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/regoAccess/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/regoAccess/search',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/regoAccess/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/regoAccess/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/regoAccess/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/regoAccess/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/regoAccess/search`

*Perform and advanced search for reservations rego access*

> Body parameter

```json
{
  "ids": [
    215469
  ]
}
```

<h3 id="searchreservationregoaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationArraySearch](#schemareservationarraysearch)|true|Array of reservation Id's to pass to return daily revenue|

> Example responses

> 200 Response

```json
[
  {
    "reservationId": 163577,
    "regoAccess": null,
    "id": 383,
    "accessNumber": "5265",
    "accessZone": "All",
    "area_id": 34,
    "arrivalDate": "2018-09-22 14:00:00",
    "zoneId": 0,
    "createdDate": "2018-08-02 04:22:00",
    "expiryDate": "2018-09-25 17:25:00",
    "modifiedDate": "2018-09-05 13:25:00",
    "note": "Car is Nice",
    "regoNumber": "698-IOU",
    "status": "In"
  }
]
```

<h3 id="searchreservationregoaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchreservationregoaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[regoAccessArrayResponse](#schemaregoaccessarrayresponse)]|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» id|integer|false|none|none|
|» accessNumber|string|false|none|none|
|» accessZone|string|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» arrivalDate|string(date-time)|false|none|none|
|» zoneId|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» note|string|false|none|none|
|» regoNumber|string|false|none|none|
|» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|notSet|
|status|in|
|status|out|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getReservationTransfers

<a id="opIdgetReservationTransfers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/reservations/{id}/transfers \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/reservations/{id}/transfers HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/transfers',
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

result = RestClient.get 'https://restapi8.rmscloud.com/reservations/{id}/transfers',
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

r = requests.get('https://restapi8.rmscloud.com/reservations/{id}/transfers', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/reservations/{id}/transfers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/transfers");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/reservations/{id}/transfers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /reservations/{id}/transfers`

*Retrieve a reservations transfer information*

<h3 id="getreservationtransfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 2654698,
    "amount": 10,
    "carrier": "Big Rigs",
    "confirmationNumber": "ty45986",
    "dropOffLocationId": 1,
    "note": "This is for notes",
    "pax": 10,
    "pickupLocationId": 1,
    "shipFlightNumber": "JQ1234",
    "sundryId": 6,
    "reservationId": 1,
    "theDate": "2020-09-25 17:25:00",
    "transportTypeId": 1,
    "type": "dropOff",
    "useAmountFromSundry": false
  }
]
```

<h3 id="getreservationtransfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getreservationtransfers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transfer](#schematransfer)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» amount|integer(currency)|false|none|none|
|» carrier|string|false|none|none|
|» confirmationNumber|string|false|none|none|
|» dropOffLocationId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» pax|integer(int32)|false|none|none|
|» pickupLocationId|integer(int32)|false|none|none|
|» shipFlightNumber|string|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» theDate|string(date-time)|false|none|none|
|» transportTypeId|integer(int32)|false|none|none|
|» type|string|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pickUp|
|type|dropOff|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateReservationTransfers

<a id="opIdupdateReservationTransfers"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/transfers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/transfers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 2654698,
  "amount": 10,
  "carrier": "Big Rigs",
  "confirmationNumber": "ty45986",
  "dropOffLocationId": 1,
  "note": "This is for notes",
  "pax": 10,
  "pickupLocationId": 1,
  "shipFlightNumber": "JQ1234",
  "sundryId": 6,
  "reservationId": 1,
  "theDate": "2020-09-25 17:25:00",
  "transportTypeId": 1,
  "type": "dropOff",
  "useAmountFromSundry": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/transfers',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/transfers',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/transfers', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/transfers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/transfers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/transfers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/transfers`

*Retrieve a reservations transfer information*

> Body parameter

```json
{
  "id": 2654698,
  "amount": 10,
  "carrier": "Big Rigs",
  "confirmationNumber": "ty45986",
  "dropOffLocationId": 1,
  "note": "This is for notes",
  "pax": 10,
  "pickupLocationId": 1,
  "shipFlightNumber": "JQ1234",
  "sundryId": 6,
  "reservationId": 1,
  "theDate": "2020-09-25 17:25:00",
  "transportTypeId": 1,
  "type": "dropOff",
  "useAmountFromSundry": false
}
```

<h3 id="updatereservationtransfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[transfer](#schematransfer)|true|Transfer object that can be passed to create or edit a reservation transfer|

> Example responses

> 200 Response

```json
[
  {
    "id": 2654698,
    "amount": 10,
    "carrier": "Big Rigs",
    "confirmationNumber": "ty45986",
    "dropOffLocationId": 1,
    "note": "This is for notes",
    "pax": 10,
    "pickupLocationId": 1,
    "shipFlightNumber": "JQ1234",
    "sundryId": 6,
    "reservationId": 1,
    "theDate": "2020-09-25 17:25:00",
    "transportTypeId": 1,
    "type": "dropOff",
    "useAmountFromSundry": false
  }
]
```

<h3 id="updatereservationtransfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="updatereservationtransfers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transfer](#schematransfer)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» amount|integer(currency)|false|none|none|
|» carrier|string|false|none|none|
|» confirmationNumber|string|false|none|none|
|» dropOffLocationId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» pax|integer(int32)|false|none|none|
|» pickupLocationId|integer(int32)|false|none|none|
|» shipFlightNumber|string|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» theDate|string(date-time)|false|none|none|
|» transportTypeId|integer(int32)|false|none|none|
|» type|string|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pickUp|
|type|dropOff|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## createReservationTransfers

<a id="opIdcreateReservationTransfers"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/transfers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/transfers HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 2654698,
  "amount": 10,
  "carrier": "Big Rigs",
  "confirmationNumber": "ty45986",
  "dropOffLocationId": 1,
  "note": "This is for notes",
  "pax": 10,
  "pickupLocationId": 1,
  "shipFlightNumber": "JQ1234",
  "sundryId": 6,
  "reservationId": 1,
  "theDate": "2020-09-25 17:25:00",
  "transportTypeId": 1,
  "type": "dropOff",
  "useAmountFromSundry": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/transfers',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/transfers',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/transfers', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/transfers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/transfers");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/transfers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/transfers`

*Retrieve a reservations transfer information*

> Body parameter

```json
{
  "id": 2654698,
  "amount": 10,
  "carrier": "Big Rigs",
  "confirmationNumber": "ty45986",
  "dropOffLocationId": 1,
  "note": "This is for notes",
  "pax": 10,
  "pickupLocationId": 1,
  "shipFlightNumber": "JQ1234",
  "sundryId": 6,
  "reservationId": 1,
  "theDate": "2020-09-25 17:25:00",
  "transportTypeId": 1,
  "type": "dropOff",
  "useAmountFromSundry": false
}
```

<h3 id="createreservationtransfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[transfer](#schematransfer)|true|Transfer object that can be passed to create or edit a reservation transfer|

> Example responses

> 200 Response

```json
[
  {
    "id": 2654698,
    "amount": 10,
    "carrier": "Big Rigs",
    "confirmationNumber": "ty45986",
    "dropOffLocationId": 1,
    "note": "This is for notes",
    "pax": 10,
    "pickupLocationId": 1,
    "shipFlightNumber": "JQ1234",
    "sundryId": 6,
    "reservationId": 1,
    "theDate": "2020-09-25 17:25:00",
    "transportTypeId": 1,
    "type": "dropOff",
    "useAmountFromSundry": false
  }
]
```

<h3 id="createreservationtransfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="createreservationtransfers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transfer](#schematransfer)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» amount|integer(currency)|false|none|none|
|» carrier|string|false|none|none|
|» confirmationNumber|string|false|none|none|
|» dropOffLocationId|integer(int32)|false|none|none|
|» note|string|false|none|none|
|» pax|integer(int32)|false|none|none|
|» pickupLocationId|integer(int32)|false|none|none|
|» shipFlightNumber|string|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» reservationId|integer(int32)|false|none|none|
|» theDate|string(date-time)|false|none|none|
|» transportTypeId|integer(int32)|false|none|none|
|» type|string|false|none|none|
|» useAmountFromSundry|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pickUp|
|type|dropOff|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteReservationTransfers

<a id="opIddeleteReservationTransfers"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/reservations/{id}/transfers?TransferId=0 \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/reservations/{id}/transfers?TransferId=0 HTTP/1.1
Host: restapi8.rmscloud.com

```

```javascript

const headers = {
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/transfers?TransferId=0',
{
  method: 'DELETE',

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
  'authtoken' => 'API_KEY'
}

result = RestClient.delete 'https://restapi8.rmscloud.com/reservations/{id}/transfers',
  params: {
  'TransferId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'authtoken': 'API_KEY'
}

r = requests.delete('https://restapi8.rmscloud.com/reservations/{id}/transfers', params={
  'TransferId': '0'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'authtoken' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/reservations/{id}/transfers', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/transfers?TransferId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
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
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/reservations/{id}/transfers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /reservations/{id}/transfers`

*Retrieve a reservations transfer information*

<h3 id="deletereservationtransfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|TransferId|query|integer(int32)|true|The Id of the relevant transfer record|

<h3 id="deletereservationtransfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## transferBalance

<a id="opIdtransferBalance"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/{id}/transferBalance \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/{id}/transferBalance HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "reservationAccountId": 355494,
  "transferType": "toGuestAccount"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/transferBalance',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/{id}/transferBalance',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/{id}/transferBalance', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/{id}/transferBalance', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/transferBalance");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/{id}/transferBalance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/{id}/transferBalance`

*To transfer reservation balance to guest account*

> Body parameter

```json
{
  "reservationAccountId": 355494,
  "transferType": "toGuestAccount"
}
```

<h3 id="transferbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[transferBalance](#schematransferbalance)|true|Transfer object that can be passed to create or edit a reservation transfer|

> Example responses

> 200 Response

```json
{
  "accommodationBalance": 26.09,
  "accountCurrencyView": "AUD",
  "accountId": 3168,
  "activeAccounts": 1,
  "arBalance": 300.12,
  "baseRate": 551.67,
  "billCategoryType": "Deluxe Queen",
  "createTotalRate": true,
  "currencyCode": "AUD",
  "deposit": 200,
  "depositRequiredByDate": "2017-08-25 17:30:00",
  "discountAmount": 20,
  "discountId": 7,
  "discountName": "10% Off",
  "discountReason": "Return customer",
  "electricityBalance": 32.58,
  "extrasBalance": 89.36,
  "gasBalance": 45.36,
  "hideRateOnCorrespondence": false,
  "internetBalance": 10,
  "package": 98.32,
  "phoneBalance": 12,
  "reservationId": 123459,
  "secondaryCurrency": {
    "accommodationBalance": 10,
    "arBalance": 0,
    "currencyCode": "USD",
    "electricityBalance": 10,
    "extrasBalance": 15.25,
    "gasBalance": 13.25,
    "internetBalance": 55,
    "phoneBalance": 89.56,
    "waterBalance": 17.26
  },
  "secondDepositRequiredByDate": "25-08-2016 13:26:00",
  "secondDeposit": 100.1,
  "tax": 16.33,
  "taxExemption": "Goverment Official",
  "totalRate": 800,
  "upgradeReason": "He's a good guy",
  "waterBalance": 81.02
}
```

<h3 id="transferbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[actualAccountBasic](#schemaactualaccountbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## mealPlanSchedulesUpgrade

<a id="opIdmealPlanSchedulesUpgrade"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "dates": [
    {
      "theDate": "2019-08-24",
      "mealPlanUpgradeId": 0,
      "startingMeal": "Breakfast"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules',
{
  method: 'PUT',
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

result = RestClient.put 'https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules',
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

r = requests.put('https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/reservations/{id}/mealPlanSchedules", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /reservations/{id}/mealPlanSchedules`

*To upgrade meal plan schedules*

> Body parameter

```json
{
  "dates": [
    {
      "theDate": "2019-08-24",
      "mealPlanUpgradeId": 0,
      "startingMeal": "Breakfast"
    }
  ]
}
```

<h3 id="mealplanschedulesupgrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[mealPlanSchedulesUpgrade](#schemamealplanschedulesupgrade)|true|Body to pass to upgrade mealplan schedules|

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

<h3 id="mealplanschedulesupgrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="mealplanschedulesupgrade-responseschema">Response Schema</h3>

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

## getReservationsWarnings

<a id="opIdgetReservationsWarnings"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/reservations/warnings \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/reservations/warnings HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/reservations/warnings',
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

result = RestClient.post 'https://restapi8.rmscloud.com/reservations/warnings',
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

r = requests.post('https://restapi8.rmscloud.com/reservations/warnings', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/reservations/warnings', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/reservations/warnings");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/reservations/warnings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /reservations/warnings`

*Retrieve warnings related to a specific reservation*

This call is useful to retrieve RMS configuration that manage reservations and need to inform users about potential conflicts or issues that could affect the booking process.

> Body parameter

```json
{
  "id": 0,
  "accountId": 0,
  "adults": 2,
  "allotmentAssociationID": "TravelAgent",
  "allotmentId": 12457,
  "areaId": 3,
  "arrivalDate": "2017-11-17 14:00:00",
  "baseRateOverride": 0,
  "totalRateOverride": 0,
  "billingCategoryId": 0,
  "bookingSourceId": 2,
  "categoryId": 1,
  "children": 1,
  "companyId": 5,
  "departureDate": "2017-11-22 11:00:00",
  "discountId": 22,
  "groupAllotmentId": 0,
  "groupOptionId": 1314,
  "groupReservationId": 0,
  "guestId": 134541,
  "infants": 1,
  "notes": "This is a note about my reservation",
  "onlineConfirmationId": 12986985,
  "otaNotes": "This is a note from an OTA or Website",
  "otaRef1": "V5986985s9",
  "otaRef2": "BCOM-8976958",
  "otaRef3": "89869858896",
  "rateTypeId": 1,
  "resTypeId": 0,
  "status": "Confirmed",
  "marketSegmentId": 5,
  "mealPlanId": 5,
  "subMarketSegmentId": 5,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 50",
  "userDefined11": true,
  "userDefined12": true,
  "userDefined13": true,
  "userDefined14": "2016-08-29 09:25:00",
  "userDefined15": "2016-08-29 09:25:00",
  "travelAgentId": 1,
  "voucherId": "B4569856985"
}
```

<h3 id="getreservationswarnings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[reservationBasic](#schemareservationbasic)|true|Reservation object that needs to be added or updated|

> Example responses

> 201 Response

```json
{
  "warnings": [
    {
      "code": "GuestStayOverlap"
    }
  ]
}
```

<h3 id="getreservationswarnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|[reservationsWarnings](#schemareservationswarnings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

