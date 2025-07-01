<h1 id="rms-rest-api-rmspay">rmsPay</h1>

## getRmsPayPaymentSession

<a id="opIdgetRmsPayPaymentSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment?sessionId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment?sessionId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment?sessionId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment',
  params: {
  'sessionId' => 'integer(int32)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment', params={
  'sessionId': '0'
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment?sessionId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/rmsPayPayment`

*This call allows you to retrieve the payment details for an rmsPay session*

Payment details will only be provided for successful transactions.<br> Session status will be available for 15 minutes following session creation

<h3 id="getrmspaypaymentsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|sessionId|query|integer(int32)|true|The Id of the relevant rmsPay session|

> Example responses

> 200 Response

```json
{
  "sessionId": "a62a99d521a545d5a8a4ac16e089e84e",
  "cardSummary": "8431",
  "paymentMethod": "amex",
  "merchantReference": "RMSTEST",
  "cardHolderName": "John Smith",
  "cardId": 0,
  "transactionReference": "H67QJJK27PRRVS65",
  "expiryDate": "3/2030",
  "token": "RMS_E9BCA96E1E|N5N6L8VTVC8QZ375",
  "success": true,
  "surchargeAmount": 12
}
```

<h3 id="getrmspaypaymentsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[guestsIdRMSPayPaymentSession](#schemaguestsidrmspaypaymentsession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## GuestrmsPayPayment

<a id="opIdGuestrmsPayPayment"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/rmsPayPayment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/rmsPayPayment`

*This call allows you to make a RMSPay Payment against a guest. *

Processing an RMSPay payment has to be done in 3 steps: <br> <br> 1. Use this call to process a payment via the RMSPay Gateway. <br> <br> 2. You would then need to grab the redirect URL, to obtain the payment details (card details, merchant reference, token reference etc) <br> <br> 3. Then use these details on the POST/transactions/receipt call to pass this payment into RMS. <br> <br> In the RMS Token Request, there are optional field called locale and allowPaymentMethods. <br> <br> The 'locale' field renders the payment screen in local language - The available options for locale are <br> Chinese - Simplified = zh_CN<br> Chinese - Traditional = zh_TW<br> Danish (Web SDK 1.3.1 and later) = da_DK<br> Dutch = nl_NL<br> English - US = en_US<br> French = fr_FR<br> German = it_IT<br> Italian = it_IT<br> Japanese (Web SDK 1.6.5 and later) = ja_JP<br> Norwegian (Web SDK 1.5.0 and later) = no_NO<br> Polish (Web SDK 1.3.0 and later) = pl_PL<br> Portuguese = pt_BR<br> Spanish = es_ES<br> Swedish = sv_SE<br> <br> The 'allowPaymentMethods' field restricts the card type the guest can use - The available card options for allowPaymentMethods are <br> Visa = visa<br> Mastercard = mc<br> American Express = amex<br> <br> notifyURL - If used, we will send a notification of success/failure to the URL provided in this field<br>

> Body parameter

```json
{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}
```

<h3 id="guestrmspaypayment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[rmsPayTokenRequest](#schemarmspaytokenrequest)|true|Request object that can be passed to create a RMSPay payment against a guest|

> Example responses

> 200 Response

```json
{
  "success": true,
  "redirectURL": "https://testapp8.rmscloud.com/RMSPay/?sessionId=54f654tyt98yyt8888",
  "message": "Success"
}
```

<h3 id="guestrmspaypayment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTokenResponse](#schemarmspaytokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestrmsPayToken

<a id="opIdaddGuestrmsPayToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/rmsPayToken',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/rmsPayToken', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayToken");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/rmsPayToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/rmsPayToken`

*This call allows you to add a CC Token to be associated with a guest. In order to pass RMS a token you must create the token via the same payment gateway used by the property using the credentials they provide you. The guest must be associated with a reservation to assign it a token.*

In the RMS Token Request, there are optional field called locale and allowPaymentMethods. <br> <br> The 'locale' field renders the payment screen in local language - The available options for locale are <br> Chinese - Simplified = zh_CN<br> Chinese - Traditional = zh_TW<br> Danish (Web SDK 1.3.1 and later) = da_DK<br> Dutch = nl_NL<br> English - US = en_US<br> French = fr_FR<br> German = it_IT<br> Italian = it_IT<br> Japanese (Web SDK 1.6.5 and later) = ja_JP<br> Norwegian (Web SDK 1.5.0 and later) = no_NO<br> Polish (Web SDK 1.3.0 and later) = pl_PL<br> Portuguese = pt_BR<br> Spanish = es_ES<br> Swedish = sv_SE<br> <br> The 'allowPaymentMethods' field restricts the card type the guest can use - The available card options for allowPaymentMethods are <br> Visa = visa<br> Mastercard = mc<br> American Express = amex<br> <br> notifyURL - If used, we will send a notification of success/failure to the URL provided in this field<br>

> Body parameter

```json
{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}
```

<h3 id="addguestrmspaytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[rmsPayTokenRequest](#schemarmspaytokenrequest)|true|Request object that can be passed to create a RMSPay payment against a guest|

> Example responses

> 200 Response

```json
{
  "success": true,
  "redirectURL": "https://testapp8.rmscloud.com/RMSPay/?sessionId=54f654tyt98yyt8888",
  "message": "Success"
}
```

<h3 id="addguestrmspaytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTokenResponse](#schemarmspaytokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## rmsPayTokenPreAuth

<a id="opIdrmsPayTokenPreAuth"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuth/{resId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/rmsPayToken/preAuth/{resId}`

*This call allows you to make a RMSPay Pre-auth against a reservation. *

Processing an RMSPay pre-auth has to be done in 2 steps: <br> <br> 1. Use this call to process a pre-auth via the RMSPay Gateway. <br> <br> 2. You would then need to grab the redirect URL, to obtain the payment details (card details, merchant reference, token reference etc) <br> <br> In the RMS Token Request, there are optional field called locale and allowPaymentMethods. <br> <br> The 'locale' field renders the payment screen in local language - The available options for locale are <br> Chinese - Simplified = zh_CN<br> Chinese - Traditional = zh_TW<br> Danish (Web SDK 1.3.1 and later) = da_DK<br> Dutch = nl_NL<br> English - US = en_US<br> French = fr_FR<br> German = it_IT<br> Italian = it_IT<br> Japanese (Web SDK 1.6.5 and later) = ja_JP<br> Norwegian (Web SDK 1.5.0 and later) = no_NO<br> Polish (Web SDK 1.3.0 and later) = pl_PL<br> Portuguese = pt_BR<br> Spanish = es_ES<br> Swedish = sv_SE<br> <br> The 'allowPaymentMethods' field restricts the card type the guest can use - The available card options for allowPaymentMethods are <br> Visa = visa<br> Mastercard = mc<br> American Express = amex<br> <br> notifyURL - If used, we will send a notification of success/failure to the URL provided in this field<br>

> Body parameter

```json
{
  "allowPaymentMethods": [
    "visa",
    "mc",
    "amex"
  ],
  "amount": 1,
  "currencyCode": "AUD",
  "locale": "en_US",
  "merchantReference": "REST88569",
  "notifyURL": "https://testapp8.rmscloud.com",
  "propertyId": 4,
  "redirectURL": "https://testapp8.rmscloud.com",
  "skip3DS": false,
  "disableCCsurcharge": false
}
```

<h3 id="rmspaytokenpreauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|resId|path|integer(int32)|true|The Id of the reservation|
|body|body|[rmsPayTokenRequest](#schemarmspaytokenrequest)|true|Request object that can be passed to create a RMSPay payment against a guest|

> Example responses

> 200 Response

```json
{
  "success": true,
  "redirectURL": "https://testapp8.rmscloud.com/RMSPay/?sessionId=54f654tyt98yyt8888",
  "message": "Success"
}
```

<h3 id="rmspaytokenpreauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTokenResponse](#schemarmspaytokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## rmsPayPreAuthExistingToken

<a id="opIdrmsPayPreAuthExistingToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 1,
  "merchantReference": "REST1493",
  "token": "RMS_32AFA78637|CV7P4WF9G8J96GV5",
  "amount": 3,
  "reservationId": 216974
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/preAuthExistingToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/rmsPayToken/preAuthExistingToken`

*This call enables you to generate a pre-authorization token using an existing token.*

> Body parameter

```json
{
  "propertyId": 1,
  "merchantReference": "REST1493",
  "token": "RMS_32AFA78637|CV7P4WF9G8J96GV5",
  "amount": 3,
  "reservationId": 216974
}
```

<h3 id="rmspaypreauthexistingtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestsIdRMSPayTokenPreAuthExistingToken](#schemaguestsidrmspaytokenpreauthexistingtoken)|true|This call enables you to generate a pre-authorization token using an existing token.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="rmspaypreauthexistingtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[successResult](#schemasuccessresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchGuestRmsPayToken

<a id="opIdsearchGuestRmsPayToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "merchantReference": "string",
  "propertyId": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/rmsPayToken/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/rmsPayToken/search`

*This call allows you to search a CC Token associated with a guest. In order to retrieve RMS a token you must pass the merchant reference used when the token was created*

> Body parameter

```json
{
  "merchantReference": "string",
  "propertyId": 0
}
```

<h3 id="searchguestrmspaytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[rmsPayTokenSearchRequest](#schemarmspaytokensearchrequest)|true|Request object that can be passed to search for an existing RMSPay payment against a guest, given the merchant reference used when creating the token|

> Example responses

> 200 Response

```json
[
  {
    "cardHolderName": "",
    "cardId": 1,
    "cardType": "Visa",
    "description": "Wifes Card",
    "expiryDate": "03/30",
    "lastFourDigitsOfCard": "1000",
    "propertyId": 1,
    "token": "948534hkfdhklfhkwefuhkl",
    "tokenId": 38967,
    "tokenType": "Token"
  }
]
```

<h3 id="searchguestrmspaytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchguestrmspaytoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestRMSPayToken](#schemaguestrmspaytoken)]|false|none|[Used:<br>POST guests/{id}/rmsPayToken/search]|
|» cardHolderName|string|false|none|none|
|» cardId|integer(int32)|false|none|none|
|» cardType|string|false|none|none|
|» description|string|false|none|none|
|» expiryDate|string|false|none|none|
|» lastFourDigitsOfCard|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» token|string|false|none|none|
|» tokenId|integer(int32)|false|none|none|
|» tokenType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenType|Token|
|tokenType|PreAuth|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRmsPayTerminals

<a id="opIdgetRmsPayTerminals"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rmsPay/terminals?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rmsPay/terminals?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/rmsPay/terminals',
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

r = requests.get('https://restapi8.rmscloud.com/rmsPay/terminals', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/rmsPay/terminals', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rmsPay/terminals", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rmsPay/terminals`

*This will return a list of rmsPay terminals for the property*

<h3 id="getrmspayterminals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
{
  "id": 23,
  "propertyId": "4",
  "propertyName": "(RMSPAY)- Internal DB",
  "stationNumber": "V400m-347312406",
  "description": "RMSPay Termin"
}
```

<h3 id="getrmspayterminals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminals](#schemarmspayterminals)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postRmsPayTerminalsAbort

<a id="opIdpostRmsPayTerminalsAbort"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/rmsPay/terminals/abort?propertyId=0&terminalId=0&stationNumber=string \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/rmsPay/terminals/abort?propertyId=0&terminalId=0&stationNumber=string HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals/abort?propertyId=0&terminalId=0&stationNumber=string',
{
  method: 'PATCH',

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

result = RestClient.patch 'https://restapi8.rmscloud.com/rmsPay/terminals/abort',
  params: {
  'propertyId' => 'integer(int32)',
'terminalId' => 'integer(int32)',
'stationNumber' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.patch('https://restapi8.rmscloud.com/rmsPay/terminals/abort', params={
  'propertyId': '0',  'terminalId': '0',  'stationNumber': 'string'
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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/rmsPay/terminals/abort', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals/abort?propertyId=0&terminalId=0&stationNumber=string");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/rmsPay/terminals/abort", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /rmsPay/terminals/abort`

*Cancel the in-progress terminal payment*

<h3 id="postrmspayterminalsabort-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|
|terminalId|query|integer(int32)|true|The Id of the relevant rmsPay terminal|
|stationNumber|query|string|true|The station number for the the relevant rmsPay terminal|

> Example responses

> 200 Response

```json
{
  "success": true,
  "token": "RMS_122264948|SLXC55WJRLDN2S65",
  "transactionReference": "PYgD001717721634000.SNS7HB9FBVS49W65",
  "cardType": "MasterCard",
  "cardExpiry": "02/28"
}
```

<h3 id="postrmspayterminalsabort-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminalsAbort](#schemarmspayterminalsabort)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postRmsPayTerminalsPreAuth

<a id="opIdpostRmsPayTerminalsPreAuth"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rmsPay/terminals/preauth \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rmsPay/terminals/preauth HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 4,
  "terminalId": 20,
  "merchantReference": "AB123",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100,
  "amount": 50
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals/preauth',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rmsPay/terminals/preauth',
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

r = requests.post('https://restapi8.rmscloud.com/rmsPay/terminals/preauth', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rmsPay/terminals/preauth', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals/preauth");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rmsPay/terminals/preauth", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rmsPay/terminals/preauth`

*Create a preauth using the rmspay terminal*

After a sale, post a receipt to the reservations account using the /transactions/receipt API.<br>notifyURL - If used, a notification of success/failure wil be sent to the URL provided in this field

> Body parameter

```json
{
  "propertyId": 4,
  "terminalId": 20,
  "merchantReference": "AB123",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100,
  "amount": 50
}
```

<h3 id="postrmspayterminalspreauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rmsPayTerminalsPreAuth](#schemarmspayterminalspreauth)|true|This call enables you to generate a pre-authorization token using an rmsPay terminal.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "token": "RMS_771259547|S8WKS7NPWBM6GVT5",
  "transactionReference": "Tm76001735255452007.W425T5HJ9W5X8N82",
  "cardType": "MasterCard",
  "cardHolderName": "AD YEN-JP",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB123",
  "cardExpiry": "02/28",
  "surchargeAmount": 0
}
```

<h3 id="postrmspayterminalspreauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminalsTokenResponse](#schemarmspayterminalstokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postRmsPayTerminalsSale

<a id="opIdpostRmsPayTerminalsSale"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rmsPay/terminals/sale \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rmsPay/terminals/sale HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "amount": "1",
  "stationNumber": "V400m-347312398",
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "reservationId": 100
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals/sale',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rmsPay/terminals/sale',
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

r = requests.post('https://restapi8.rmscloud.com/rmsPay/terminals/sale', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rmsPay/terminals/sale', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals/sale");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rmsPay/terminals/sale", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rmsPay/terminals/sale`

*Create a RMSPay terminal payment*

After a sale, post a receipt to the reservations account using the /transactions/receipt API.<br>notifyURL - If used, a notification of success/failure wil be sent to the URL provided in this field

> Body parameter

```json
{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "amount": "1",
  "stationNumber": "V400m-347312398",
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "reservationId": 100
}
```

<h3 id="postrmspayterminalssale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rmsPayTerminalsSale](#schemarmspayterminalssale)|true|Request object that can be passed to create a RMSPay terminal payment |

> Example responses

> 200 Response

```json
{
  "success": true,
  "token": "RMS_753796809|ZDZ4T6D7PGLF6975",
  "transactionReference": "PYgD001724643741003.K779PTXBNTGLNK82",
  "merchantReference": "testMerchantRef",
  "cardType": "MasterCard",
  "cardExpiry": "02/28",
  "cardHolderName": "rms",
  "receiptData": [
    "name=RMS%20Global&key=header1",
    "name=Harrick%20Rd%20PASSED&key=header2",
    "name=CARDHOLDER%20COPY&key=cardholderHeader",
    "key=filler",
    "name=Date&value=26%2f08%2f2024&key=txdate",
    "name=Time&value=13%3a42%3a27&key=txtime",
    "key=filler",
    "name=Card&value=%2a%2a%2a%2a9999&key=pan",
    "name=PAN%20seq.&value=33&key=panSeq",
    "name=Pref.%20name&value=mc%20en%20gbr%20gbp&key=preferredName",
    "name=Card%20type&value=mc&key=cardType",
    "name=Payment%20method&value=mc&key=paymentMethod",
    "name=Payment%20variant&value=mc&key=paymentMethodVariant",
    "name=Entry%20mode&value=Contactless%20chip&key=posEntryMode",
    "key=filler",
    "name=AID&value=A000000004101001&key=aid",
    "name=MID&value=50&key=mid",
    "name=TID&value=V400m-347312398&key=tid",
    "name=PTID&value=79973193&key=ptid",
    "key=filler",
    "name=Auth.%20code&value=123456&key=authCode",
    "name=Tender&value=PYgD001724643741003&key=txRef",
    "name=Reference&value=11207_testMerchantRef&key=mref",
    "key=filler",
    "name=Type&value=GOODS_SERVICES&key=txtype",
    "name=TOTAL&value=%24%204.06&key=totalAmount",
    "key=filler",
    "name=APPROVED&key=approved",
    "key=filler",
    "name=Retain%20for%20your%20records&key=retain",
    "name=Thank%20you&key=thanks"
  ],
  "surchargeAmount": 0,
  "lastFourDigitsOfCard": 1
}
```

<h3 id="postrmspayterminalssale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminalsSaleResponse](#schemarmspayterminalssaleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## postRmsPayTerminalsToken

<a id="opIdpostRmsPayTerminalsToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/rmsPay/terminals/token \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/rmsPay/terminals/token HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals/token',
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

result = RestClient.post 'https://restapi8.rmscloud.com/rmsPay/terminals/token',
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

r = requests.post('https://restapi8.rmscloud.com/rmsPay/terminals/token', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/rmsPay/terminals/token', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals/token");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/rmsPay/terminals/token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /rmsPay/terminals/token`

*Create a credit card token with RMSPay terminal*

A $1.00 pre-auth will be taken when creating a token with RMSpay terminal.<br> To post a receipt to the reservations account use the /transactions/receipt API.<br>notifyURL - If used, a notification of success/failure wil be sent to the URL provided in this field

> Body parameter

```json
{
  "propertyId": 4,
  "accountId": 5127,
  "terminalId": 20,
  "merchantReference": "testMerchantRef",
  "notifyURL": "https://testapp8.rmscloud.com",
  "stationNumber": "V400m-347312398",
  "guestId": 444,
  "reservationId": 100
}
```

<h3 id="postrmspayterminalstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rmsPayTerminalsToken](#schemarmspayterminalstoken)|true|Request object that can be passed to create a RMSPay terminal pre-auth for $1|

> Example responses

> 200 Response

```json
{
  "success": true,
  "token": "RMS_771259547|S8WKS7NPWBM6GVT5",
  "transactionReference": "Tm76001735255452007.W425T5HJ9W5X8N82",
  "cardType": "MasterCard",
  "cardHolderName": "AD YEN-JP",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB123",
  "cardExpiry": "02/28",
  "surchargeAmount": 0
}
```

<h3 id="postrmspayterminalstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminalsTokenResponse](#schemarmspayterminalstokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRmsPayTerminalsStatus

<a id="opIdgetRmsPayTerminalsStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/rmsPay/terminals/status?propertyId=0&terminalId=0&stationNumber=string \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/rmsPay/terminals/status?propertyId=0&terminalId=0&stationNumber=string HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/rmsPay/terminals/status?propertyId=0&terminalId=0&stationNumber=string',
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

result = RestClient.get 'https://restapi8.rmscloud.com/rmsPay/terminals/status',
  params: {
  'propertyId' => 'integer(int32)',
'terminalId' => 'integer(int32)',
'stationNumber' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.get('https://restapi8.rmscloud.com/rmsPay/terminals/status', params={
  'propertyId': '0',  'terminalId': '0',  'stationNumber': 'string'
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/rmsPay/terminals/status', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/rmsPay/terminals/status?propertyId=0&terminalId=0&stationNumber=string");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/rmsPay/terminals/status", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /rmsPay/terminals/status`

*This will return the last known status for an rmsPay terminal*

Retreive latest status of a terminal. This serves as a safeguard in case of issues with the sale or token endpoints, allowing users to retrieve the most recent transaction details from the terminal.

<h3 id="getrmspayterminalsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|
|terminalId|query|integer(int32)|true|The Id of the relevant rmsPay terminal|
|stationNumber|query|string|true|The station number for the the relevant rmsPay terminal|

> Example responses

> 200 Response

```json
{
  "success": true,
  "token": "RMS_682233020|ZBDB3J2SH5XBZX65",
  "transactionReference": "Tm76001735255452007.W425T5HJ9W5X8N82",
  "cardType": "Visa",
  "lastFourDigitsOfCard": "0001",
  "cardExpiry": "03/30",
  "surchargeAmount": 0
}
```

<h3 id="getrmspayterminalsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[rmsPayTerminalsStatus](#schemarmspayterminalsstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

