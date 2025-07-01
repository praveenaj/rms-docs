<h1 id="rms-rest-api-transactions">transactions</h1>

Retrieve and create transactions

<a href="https://helpcentre.rmscloud.com/accounting">Find out more</a>

## postTransactionSearch

<a id="opIdpostTransactionSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "idFrom": 6,
  "idTo": 12,
  "accountType": "extras",
  "accountIds": [
    1242,
    5985,
    702
  ],
  "alwaysReturnReservationId": true,
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "guestIds": [
    78945,
    61478
  ],
  "invoiceIds": [
    89984,
    987978
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyId": 1,
  "receiptIds": [
    222586,
    222587
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "transactionIds": [
    1886832,
    1886833,
    1886834
  ],
  "transDateFrom": "2018-10-25 00:00:00",
  "TransDateTo": "2018-10-27 00:00:00",
  "transactionType": "charge",
  "voidTransaction": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/search',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/search`

*Retrieve an advanced transaction search*

> Body parameter

```json
{
  "idFrom": 6,
  "idTo": 12,
  "accountType": "extras",
  "accountIds": [
    1242,
    5985,
    702
  ],
  "alwaysReturnReservationId": true,
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "guestIds": [
    78945,
    61478
  ],
  "invoiceIds": [
    89984,
    987978
  ],
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyId": 1,
  "receiptIds": [
    222586,
    222587
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "transactionIds": [
    1886832,
    1886833,
    1886834
  ],
  "transDateFrom": "2018-10-25 00:00:00",
  "TransDateTo": "2018-10-27 00:00:00",
  "transactionType": "charge",
  "voidTransaction": true
}
```

<h3 id="posttransactionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|
|body|body|[transactionSearch](#schematransactionsearch)|true|Transaction object that can be passed to return a search result|

> Example responses

> 200 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="posttransactionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="posttransactionsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postTransactionsAllocationSearch

<a id="opIdpostTransactionsAllocationSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/allocations/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/allocations/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "transactionIds": [
    2474929,
    2474927
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/allocations/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/allocations/search',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/allocations/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/allocations/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/allocations/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/allocations/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/allocations/search`

*Retrieve a receipts transaction allocation data*

This endpoint is used to retrieve the allocation details of a receipt transaction.<br><br>**Notes**:<br>RMS automatically allocates receipts to charges based on the accounting date, prioritizing older charges before newer ones.<br>RMS users also have the option to manually allocate receipts to specific charges.<br>glCodeId: 1 refers to the suspense receipt. It identifies the posted receipt and represents the total amount received. To determine if there is any remaining credit, subtract the total of the allocated transaction amounts from the suspense receipt total.<br><br>**Parameters**:<br>transactionsId: The ID of the transaction of type 'receipt'.<br>destinationTransactionId: The ID of the transaction to which the receipt has been allocated.<br><br>To retrieve full transaction details, use the transactions/search endpoint.

> Body parameter

```json
{
  "transactionIds": [
    2474929,
    2474927
  ]
}
```

<h3 id="posttransactionsallocationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|
|body|body|[transactionsAllocationsSearch](#schematransactionsallocationssearch)|true|Object to pass for transaction allocation Data|

> Example responses

> 200 Response

```json
[
  [
    {
      "receiptTransactionId": 2474927,
      "destinationTransactionId": 2474921,
      "allocatedDate": "2022-12-15 00:00:00",
      "amount": 1000,
      "glCodeId": 154,
      "allocationType": "NotSet"
    },
    {
      "receiptTransactionId": 2474927,
      "destinationTransactionId": 2474921,
      "allocatedDate": "2022-12-15 00:00:00",
      "amount": -1000,
      "glCodeId": 154,
      "allocationType": "DeAllocateCharge"
    }
  ]
]
```

<h3 id="posttransactionsallocationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="posttransactionsallocationsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionsAllocation](#schematransactionsallocation)]|false|none|none|
|» receiptTransactionId|integer(int32)|false|none|none|
|» destinationTransactionId|integer(int32)|false|none|none|
|» allocatedDate|string(date-time)|false|none|none|
|» glCode|integer(int32)|false|none|none|
|» allocationType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allocationType|NotSet|
|allocationType|Alloc_Internal|
|allocationType|Refund|
|allocationType|Expense|
|allocationType|DeAllocateCharge|
|allocationType|DeAllocateReverseReceipt|
|allocationType|DeAllocateOther|
|allocationType|ThirdParty|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getTransactionsById

<a id="opIdgetTransactionsById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/transactions/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/transactions/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/transactions/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/transactions/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/transactions/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/transactions/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /transactions/{id}`

*Retrieve a list of transactions by id*

<h3 id="gettransactionsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="gettransactionsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|full successful operation|Inline|

<h3 id="gettransactionsbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsCharge

<a id="opIdaddTransactionsCharge"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/charge \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/charge HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "amount": 26.02,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "originPropertyId": 1,
  "overrideExchangeRate": 22.2,
  "source": "Standard",
  "sundryId": 7,
  "thirdPartyClientId": 0,
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/charge',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/charge',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/charge', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/charge', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/charge");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/charge", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/charge`

*Create a new charge*

The amount posted to an account that has not yet been paid is a 'charge'; for example, if $100 bottle of wine is charged back to room, you will use POST/transactions/charge. This would create a $100 charge on the account, which means the amount owed on the account becomes -$100

> Body parameter

```json
{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "amount": 26.02,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "originPropertyId": 1,
  "overrideExchangeRate": 22.2,
  "source": "Standard",
  "sundryId": 7,
  "thirdPartyClientId": 0,
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}
```

<h3 id="addtransactionscharge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionCharge](#schematransactioncharge)|true|Transaction object that can be created|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionscharge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionscharge-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsCharges

<a id="opIdaddTransactionsCharges"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/charges \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/charges HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '[
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 5.7,
    "comment": "Beer",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  },
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 25.2,
    "comment": "Pie",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/charges',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/charges',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/charges', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/charges', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/charges");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/charges", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/charges`

*Post an array of charges*

> Body parameter

```json
[
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 5.7,
    "comment": "Beer",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  },
  {
    "accountId": 7,
    "accountTypeOverride": "notSet",
    "amount": 25.2,
    "comment": "Pie",
    "dateOfTransaction": "2019-11-28 00:00:00",
    "originPropertyId": 0,
    "overrideExchangeRate": 22.2,
    "source": "Standard",
    "sundryId": 7,
    "thirdPartyClientId": 0,
    "useRmsAccountingDateForPostingDate": true,
    "useSecondaryCurrency": "default"
  }
]
```

<h3 id="addtransactionscharges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionCharges](#schematransactioncharges)|true|Transaction object that can be created|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionscharges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionscharges-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateTransactionsComments

<a id="opIdupdateTransactionsComments"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/transactions/{id}/comments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/transactions/{id}/comments HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "comments": "Updated Comment"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/{id}/comments',
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

result = RestClient.put 'https://restapi8.rmscloud.com/transactions/{id}/comments',
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

r = requests.put('https://restapi8.rmscloud.com/transactions/{id}/comments', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/transactions/{id}/comments', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/{id}/comments");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/transactions/{id}/comments", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /transactions/{id}/comments`

*Update comments for a transaction*

> Body parameter

```json
{
  "comments": "Updated Comment"
}
```

<h3 id="updatetransactionscomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[transactionsComments](#schematransactionscomments)|true|Update the comments for a transaction|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="updatetransactionscomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[successResult](#schemasuccessresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsCreditNote

<a id="opIdaddTransactionsCreditNote"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/creditNote \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/creditNote HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 7,
  "amount": 26.02,
  "assignedTransactionId": 7,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "sundryId": 7,
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/creditNote',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/creditNote',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/creditNote', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/creditNote', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/creditNote");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/creditNote", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/creditNote`

*Create a new credit note*

> Body parameter

```json
{
  "accountId": 7,
  "amount": 26.02,
  "assignedTransactionId": 7,
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "sundryId": 7,
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}
```

<h3 id="addtransactionscreditnote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionCreditNote](#schematransactioncreditnote)|true|Transaction object that can be created|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionscreditnote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionscreditnote-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsGiftCard

<a id="opIdaddTransactionsGiftCard"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/giftCard \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/giftCard HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "giftCardId": 89,
  "guestAccountId": 30247,
  "reservationId": 23508
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/giftCard',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/giftCard',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/giftCard', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/giftCard', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/giftCard");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/giftCard", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/giftCard`

*Redeem a guests gift card*

> Body parameter

```json
{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "giftCardId": 89,
  "guestAccountId": 30247,
  "reservationId": 23508
}
```

<h3 id="addtransactionsgiftcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionGuestCreditAndGiftCard](#schematransactionguestcreditandgiftcard)|true|Transaction object to redeem guest credit or a gift card|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsgiftcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsgiftcard-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsGuestCredit

<a id="opIdaddTransactionsGuestCredit"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/guestCredit \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/guestCredit HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "transactionId": 2519489,
  "guestAccountId": 30247,
  "reservationId": 23508
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/guestCredit',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/guestCredit',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/guestCredit', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/guestCredit', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/guestCredit");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/guestCredit", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/guestCredit`

*Redeem a guests credit*

> Body parameter

```json
{
  "accountId": 31477,
  "accountType": "accomm",
  "amount": 5,
  "transactionId": 2519489,
  "guestAccountId": 30247,
  "reservationId": 23508
}
```

<h3 id="addtransactionsguestcredit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionGuestCredit](#schematransactionguestcredit)|true|Transaction object to redeem guest credit or a gift card|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsguestcredit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsguestcredit-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsGuestCredits

<a id="opIdaddTransactionsGuestCredits"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/guestCredits \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/guestCredits HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 378082,
  "accountType": "accomm",
  "reservationId": 221517,
  "creditTransactions": [
    {
      "amount": 10,
      "transactionId": 2520399,
      "guestAccountId": 378301
    },
    {
      "amount": 27,
      "transactionId": 2520400,
      "guestAccountId": 378301
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/guestCredits',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/guestCredits',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/guestCredits', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/guestCredits', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/guestCredits");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/guestCredits", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/guestCredits`

*Redeem an array of guests credit*

> Body parameter

```json
{
  "accountId": 378082,
  "accountType": "accomm",
  "reservationId": 221517,
  "creditTransactions": [
    {
      "amount": 10,
      "transactionId": 2520399,
      "guestAccountId": 378301
    },
    {
      "amount": 27,
      "transactionId": 2520400,
      "guestAccountId": 378301
    }
  ]
}
```

<h3 id="addtransactionsguestcredits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionGuestCredits](#schematransactionguestcredits)|true|Transaction object to redeem an array of guest credits|

> Example responses

> 201 Response

```json
[
  [
    {
      "accountingDate": "2024-07-18 00:00:00",
      "creditCardType": "",
      "creditCardMasked": "",
      "currencyCode": "AUD",
      "createdDate": "2024-07-18 05:33:35",
      "fullGst": 0,
      "glCodeGrouping": "Suspense",
      "glCodeDescription": "Suspense Charge",
      "glCodeId": 2,
      "originalReceiptId": 0,
      "propertyId": 1,
      "rateTransactionReservationId": 0,
      "taxAmount": 0,
      "transactionType": "CreditNote",
      "voidTransaction": false,
      "linkPointer": 2520402,
      "linkPointerType": "CreditTransfer",
      "unpaidBalance": -10,
      "isHiddenPackage": false,
      "userId": 186,
      "secondaryCurrency": -10,
      "exchangeRate": 0,
      "modifiedDate": "1900-01-01 00:00:00",
      "id": 2520401,
      "accountId": 378082,
      "accountType": "Accommodation",
      "amount": -10,
      "comment": "",
      "dateOfTransaction": "2024-07-18 00:00:00",
      "sundryId": 0,
      "description": "Transfer Credit from Acc No: 378301",
      "quantity": 0,
      "invoiceId": 0
    },
    {
      "accountingDate": "2024-07-18 00:00:00",
      "creditCardType": "",
      "creditCardMasked": "",
      "currencyCode": "AUD",
      "createdDate": "2024-07-18 05:33:35",
      "fullGst": 0,
      "glCodeGrouping": "Suspense",
      "glCodeDescription": "Suspense Charge",
      "glCodeId": 2,
      "originalReceiptId": 0,
      "propertyId": 1,
      "rateTransactionReservationId": 0,
      "taxAmount": 0,
      "transactionType": "Charge",
      "voidTransaction": false,
      "linkPointer": 2520401,
      "linkPointerType": "CreditTransfer",
      "unpaidBalance": 0,
      "isHiddenPackage": false,
      "userId": 186,
      "secondaryCurrency": 10,
      "exchangeRate": 0,
      "modifiedDate": "1900-01-01 00:00:00",
      "id": 2520402,
      "accountId": 378301,
      "accountType": "Accommodation",
      "amount": 10,
      "comment": "",
      "dateOfTransaction": "2024-07-18 00:00:00",
      "sundryId": 0,
      "description": "Transfer Credit to Res No: 221517 - (Account1)",
      "quantity": 0,
      "invoiceId": 0
    },
    {
      "accountingDate": "2024-07-18 00:00:00",
      "creditCardType": "",
      "creditCardMasked": "",
      "currencyCode": "AUD",
      "createdDate": "2024-07-18 05:33:35",
      "fullGst": 0,
      "glCodeGrouping": "Suspense",
      "glCodeDescription": "Suspense Charge",
      "glCodeId": 2,
      "originalReceiptId": 0,
      "propertyId": 1,
      "rateTransactionReservationId": 0,
      "taxAmount": 0,
      "transactionType": "CreditNote",
      "voidTransaction": false,
      "linkPointer": 2520404,
      "linkPointerType": "CreditTransfer",
      "unpaidBalance": -27,
      "isHiddenPackage": false,
      "userId": 186,
      "secondaryCurrency": -27,
      "exchangeRate": 0,
      "modifiedDate": "1900-01-01 00:00:00",
      "id": 2520403,
      "accountId": 378082,
      "accountType": "Accommodation",
      "amount": -27,
      "comment": "",
      "dateOfTransaction": "2024-07-18 00:00:00",
      "sundryId": 0,
      "description": "Transfer Credit from Acc No: 378301",
      "quantity": 0,
      "invoiceId": 0
    },
    {
      "accountingDate": "2024-07-18 00:00:00",
      "creditCardType": "",
      "creditCardMasked": "",
      "currencyCode": "AUD",
      "createdDate": "2024-07-18 05:33:35",
      "fullGst": 0,
      "glCodeGrouping": "Suspense",
      "glCodeDescription": "Suspense Charge",
      "glCodeId": 2,
      "originalReceiptId": 0,
      "propertyId": 1,
      "rateTransactionReservationId": 0,
      "taxAmount": 0,
      "transactionType": "Charge",
      "voidTransaction": false,
      "linkPointer": 2520403,
      "linkPointerType": "CreditTransfer",
      "unpaidBalance": 0,
      "isHiddenPackage": false,
      "userId": 186,
      "secondaryCurrency": 27,
      "exchangeRate": 0,
      "modifiedDate": "1900-01-01 00:00:00",
      "id": 2520404,
      "accountId": 378301,
      "accountType": "Accommodation",
      "amount": 27,
      "comment": "",
      "dateOfTransaction": "2024-07-18 00:00:00",
      "sundryId": 0,
      "description": "Transfer Credit to Res No: 221517 - (Account1)",
      "quantity": 0,
      "invoiceId": 0
    }
  ]
]
```

<h3 id="addtransactionsguestcredits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsguestcredits-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionGuestCreditsResponse](#schematransactionguestcreditsresponse)]|false|none|none|
|» accountingDate|string(date-time)|false|none|none|
|» creditCardType|string(string)|false|none|none|
|» creditCardMasked|string(string)|false|none|none|
|» currencyCode|string(string)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» fullGst|number(number)|false|none|none|
|» glCodeGrouping|string(string)|false|none|none|
|» glCodeDescription|string(string)|false|none|none|
|» glCodeId|integer(number)|false|none|none|
|» originalReceiptId|integer(number)|false|none|none|
|» propertyId|integer(number)|false|none|none|
|» rateTransactionReservationId|integer(number)|false|none|none|
|» taxAmount|number(number)|false|none|none|
|» transactionType|string(string)|false|none|none|
|» voidTransaction|boolean(boolean)|false|none|none|
|» linkPointer|integer(number)|false|none|none|
|» linkPointerType|string(string)|false|none|none|
|» unpaidBalance|number(number)|false|none|none|
|» isHiddenPackage|boolean(boolean)|false|none|none|
|» userId|integer(number)|false|none|none|
|» secondaryCurrency|number(number)|false|none|none|
|» exchangeRate|number(number)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» id|integer(number)|false|none|none|
|» accountId|integer(number)|false|none|none|
|» accountType|string(string)|false|none|none|
|» amount|number(number)|false|none|none|
|» comment|string(string)|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» sundryId|integer(number)|false|none|none|
|» description|string(string)|false|none|none|
|» quantity|integer(number)|false|none|none|
|» invoiceId|integer(number)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsReceipt

<a id="opIdaddTransactionsReceipt"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/receipt \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/receipt HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "allowOnlinePayment": false,
  "amount": 26.02,
  "cardId": 2,
  "creditCardAuthorization": "yes",
  "creditCardExpiry": "22/25",
  "creditCardName": "Peter Branden",
  "creditCardNumber": 4569,
  "creditCardTransactionFee": 1,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "exchangeRateId": 0,
  "invoiceId": 23673,
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "receiptType": "CreditCard",
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default",
  "token": "erer78er9+er3er6r3fedfr",
  "transactionReference": "Tr6464g65"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/receipt',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/receipt',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/receipt', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/receipt', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/receipt");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/receipt", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/receipt`

*Create a new receipt*

This call should be used when payment is received to show that payment on an account<br><br>NOTE -<br> This can also be used to pay off A/R invoices by passing the “invoiceId” with the A/R invoice number<br> The receipt date cannot be less than the system accounting date

> Body parameter

```json
{
  "accountId": 7,
  "accountTypeOverride": "notSet",
  "allowOnlinePayment": false,
  "amount": 26.02,
  "cardId": 2,
  "creditCardAuthorization": "yes",
  "creditCardExpiry": "22/25",
  "creditCardName": "Peter Branden",
  "creditCardNumber": 4569,
  "creditCardTransactionFee": 1,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "exchangeRateId": 0,
  "invoiceId": 23673,
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 2.22,
  "receiptType": "CreditCard",
  "source": "Standard",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default",
  "token": "erer78er9+er3er6r3fedfr",
  "transactionReference": "Tr6464g65"
}
```

<h3 id="addtransactionsreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionReceipt](#schematransactionreceipt)|true|Transaction object that can be created|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsreceipt-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsRefund

<a id="opIdaddTransactionsRefund"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/refund \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/refund HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "accountId": 544545,
  "amount": 26.02,
  "allowOnlinePayment": true,
  "assignedTransactionId": 2481628,
  "cardId": 2,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 22.2,
  "receiptType": "CreditCard",
  "source": "Standard",
  "transactionReference": "SSVPQR52TGNG5S82",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/refund',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/refund',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/refund', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/refund', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/refund");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/refund", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/refund`

*Process a refund*

  This call is used when refunding payments to a customer. For the refund to process, the original account charge must first be voided to put the account in credit. <br> If refunding a credit card receipt that interacts with an integrated payment gateway, the following properties are required:<br> - accountId<br> - cardId<br> - amount<br> - receiptType: CreditCard<br> - source<br> - useRmsAccountingDateForPostingDate: true<br> - transactionReference<br> - assignedTransactionId<br> - allowOnlinePayment: true<br> <br> This call can also be used for RMSPay Refunds.

> Body parameter

```json
{
  "accountId": 544545,
  "amount": 26.02,
  "allowOnlinePayment": true,
  "assignedTransactionId": 2481628,
  "cardId": 2,
  "chequeNo": "G88392",
  "comment": "Extra Sheets",
  "dateOfTransaction": "2016-11-28 00:00:00",
  "description": "Cost of the Extra Sheets",
  "journalId": "u7838yt",
  "originPropertyId": 0,
  "overrideExchangeRate": 22.2,
  "receiptType": "CreditCard",
  "source": "Standard",
  "transactionReference": "SSVPQR52TGNG5S82",
  "useRmsAccountingDateForPostingDate": true,
  "useSecondaryCurrency": "default"
}
```

<h3 id="addtransactionsrefund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionRefund](#schematransactionrefund)|true|Transaction object that can be created|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsrefund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsrefund-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsReverseReceipt

<a id="opIdaddTransactionsReverseReceipt"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/reverseReceipt \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/reverseReceipt HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 12345,
  "accountId": 254696,
  "originpropertyId": 0,
  "reasonId": 5
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/reverseReceipt',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/reverseReceipt',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/reverseReceipt', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/reverseReceipt', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/reverseReceipt");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/reverseReceipt", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/reverseReceipt`

*Reverse a receipt*

This call is used when you are required to remove a reciept without wanting to void the original charge

> Body parameter

```json
{
  "id": 12345,
  "accountId": 254696,
  "originpropertyId": 0,
  "reasonId": 5
}
```

<h3 id="addtransactionsreversereceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionreverseReceipt](#schematransactionreversereceipt)|true|Transaction object to reverse a receipt|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsreversereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsreversereceipt-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsVoid

<a id="opIdaddTransactionsVoid"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/void \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/void HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 12345,
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/void',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/void',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/void', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/void', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/void");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/void", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/void`

*Mark a transaction as void*

If the wrong account was charged and needs to be reversed, you will use POST /transactions/void; this will void the incorrect charge.

> Body parameter

```json
{
  "id": 12345,
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}
```

<h3 id="addtransactionsvoid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionVoid](#schematransactionvoid)|true|Transaction object that can be marked as void|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsvoid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsvoid-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addTransactionsVoids

<a id="opIdaddTransactionsVoids"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/transactions/voids \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/transactions/voids HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    2491311,
    2491312
  ],
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/transactions/voids',
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

result = RestClient.post 'https://restapi8.rmscloud.com/transactions/voids',
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

r = requests.post('https://restapi8.rmscloud.com/transactions/voids', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/transactions/voids', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/transactions/voids");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/transactions/voids", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transactions/voids`

*Mark an array of transactions as void*

If more than one charge was posted to the wrong account and needs to be reversed, you will use POST /transactions/voids; this will void the incorrect charges.

> Body parameter

```json
{
  "ids": [
    2491311,
    2491312
  ],
  "comment": "Accidental charge",
  "originPropertyId": 0,
  "reasonId": 5
}
```

<h3 id="addtransactionsvoids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[transactionsVoids](#schematransactionsvoids)|true|Transaction object that can be marked as void|

> Example responses

> 201 Response

```json
[
  {
    "id": 9,
    "accountId": 328,
    "accountingDate": "2019-02-16 00:00:00",
    "accountType": "Accommodation",
    "amount": 53.26,
    "comment": "Cleaning",
    "createdDate": "2016-11-28 00:00:00",
    "creditCardMasked": "XXXX-XXXX-XXXX-5322",
    "creditCardType": "Visa",
    "currencyCode": "AUD",
    "dateOfTransaction": "2016-11-28 00:00:00",
    "dollarAction": 0,
    "description": "Direct Credit Receipt #1, RMSOnline Booking #6920394",
    "exchangeRate": 12.2,
    "fullGst": 86.25,
    "glCodeDescription": "On going",
    "gLCodeGrouping": "Full time stays",
    "glCodeId": 986,
    "invoiceId": 154546,
    "isHiddenPackage": false,
    "linkPointer": 7,
    "linkPointerType": "Ppppp",
    "modifiedDate": "2016-11-28 00:00:00",
    "originalReceiptId": 0,
    "originPropertyId": 1,
    "propertyId": 1,
    "quantity": 1,
    "rateTransactionReservationId": 122354,
    "receiptCurrencyCode": "AUD",
    "receiptType": "CreditCard",
    "sundryId": 9,
    "taxAmount": 0,
    "transactionType": "Receipt",
    "userId": 5,
    "voidTransaction": true
  }
]
```

<h3 id="addtransactionsvoids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addtransactionsvoids-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[transactionFull](#schematransactionfull)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» accountingDate|string(date-time)|false|none|The accounting day that is set in RMS.|
|» accountType|string|false|none|none|
|» amount|number(currency)|false|none|none|
|» comment|string|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» creditCardMasked|string|false|none|none|
|» creditCardType|string|false|none|none|
|» currencyCode|string|false|none|none|
|» dateOfTransaction|string(date-time)|false|none|none|
|» dollarAction|number(currency)|false|none|none|
|» exchangeRate|number(decimal)|false|none|none|
|» description|string|false|none|none|
|» fullGst|number(currency)|false|none|none|
|» glCodeDescription|string|false|none|none|
|» glCodeGrouping|string|false|none|none|
|» glCodeId|integer(int32)|false|none|none|
|» invoiceId|integer(int32)|false|none|none|
|» isHiddenPackage|boolean|false|none|none|
|» linkPointer|integer(int32)|false|none|none|
|» linkPointerType|string|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» originalReceiptId|integer(int32)|false|none|The original receipt ID for a refund.|
|» originPropertyId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» quantity|integer(int32)|false|none|none|
|» rateTransactionReservationId|integer(int32)|false|none|For a reservation transaction that has been moved to another account (Group Master, Company, etc.), this represents the Reservation ID the transaction was created for.|
|» receiptCurrencyCode|string|false|none|none|
|» receiptType|string|false|none|none|
|» secondaryCurrency|number(currency)|false|none|none|
|» sundryId|integer(int32)|false|none|none|
|» taxAmount|number(currency)|false|none|none|
|» transactionType|string|false|none|none|
|» unpaidBalance|number(currency)|false|none|none|
|» userId|integer(int32)|false|none|none|
|» voidTransaction|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

