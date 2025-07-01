<h1 id="rms-rest-api-guests">guests</h1>

A Guest Profile is the record of guest information for a person who has booked or stayed at the property.

<a href="https://helpcentre.rmscloud.com/guests/add-guest-profiles">Find out more</a>

## updateGuest

<a id="opIdupdateGuest"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests',
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

r = requests.put('https://restapi8.rmscloud.com/guests', params={
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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests`

*Update an existing guest*

> Body parameter

```json
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
```

<h3 id="updateguest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|body|body|[guestBasic](#schemaguestbasic)|true|Guest object that needs to be added or updated|

> Example responses

> 201 Response

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

<h3 id="updateguest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updateguest-responseschema">Response Schema</h3>

Status Code **201**

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

## addGuest

<a id="opIdaddGuest"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests',
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

r = requests.post('https://restapi8.rmscloud.com/guests', params={
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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests?ignoreMandatoryFieldWarnings=false");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests`

*Add a new guest*

> Body parameter

```json
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
```

<h3 id="addguest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|body|body|[guestBasic](#schemaguestbasic)|true|Guest object that needs to be added or updated|

> Example responses

> 201 Response

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

<h3 id="addguest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="addguest-responseschema">Response Schema</h3>

Status Code **201**

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

## postGuestSearch

<a id="opIdpostGuestSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    12,
    5,
    702
  ],
  "idFrom": 6,
  "idTo": 12,
  "accountIds": [
    1242,
    5985,
    702
  ],
  "clientType": "Not Set",
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "email": "john@gmail.com",
  "email2": "apisupport@rmscloud.com",
  "guestPropertyIds": "[1]",
  "given": "steve",
  "includeReservationIds": true,
  "includeSecondaryGuests": false,
  "loyaltyNumber": 3732,
  "membershipNumber": "04903a",
  "mobile": "0412345678",
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyIds": [
    1,
    5,
    2
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "surname": "smith",
  "surnameStartsWith": "S",
  "userDefinedFieldNumber": 1,
  "userDefinedFieldValue": "married"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/search',
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

r = requests.post('https://restapi8.rmscloud.com/guests/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/search`

*Retrieve an advanced guest search*

If you recieve two records wit hthe same guest ID, the reason for this is that the guest has two different account ID's.This occurs when a guest is created within a central database so it would have an account at two or more different properties within that database. <br> <br> If you are searching for guest account ID’s within an enterprise database, we recommend you add the specific property ID (“accountPropertyIds”) to your search parameters, to get a correct result.

> Body parameter

```json
{
  "ids": [
    12,
    5,
    702
  ],
  "idFrom": 6,
  "idTo": 12,
  "accountIds": [
    1242,
    5985,
    702
  ],
  "clientType": "Not Set",
  "createdFrom": "2018-09-25 00:00:00",
  "createdTo": "2018-09-27 00:00:00",
  "email": "john@gmail.com",
  "email2": "apisupport@rmscloud.com",
  "guestPropertyIds": "[1]",
  "given": "steve",
  "includeReservationIds": true,
  "includeSecondaryGuests": false,
  "loyaltyNumber": 3732,
  "membershipNumber": "04903a",
  "mobile": "0412345678",
  "modifiedFrom": "2018-09-25 00:00:00",
  "modifiedTo": "2018-09-27 00:00:00",
  "propertyIds": [
    1,
    5,
    2
  ],
  "reservationIds": [
    9454,
    123,
    1425
  ],
  "surname": "smith",
  "surnameStartsWith": "S",
  "userDefinedFieldNumber": 1,
  "userDefinedFieldValue": "married"
}
```

<h3 id="postguestsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|modelType|query|string|false|Only these fields will be returned|
|offset|query|integer|false|The number of records to skip before returning results|
|sort|query|string|false|You can sort based on 'id', 'dateCreated' or 'dateModified'|
|body|body|[guestSearch](#schemaguestsearch)|true|Guest object that can be passed to return a search result|

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
    "id": 78,
    "abn": "012 659 65689",
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "agreementDate": "2018-09-25 17:25:00",
    "anniversary": "2015-07-29 00:00:00",
    "arrivedFrom": "San Fran",
    "auxDocumentDate": "2018-09-26 10:25:00",
    "birthday": "1991-08-22 00:00:00",
    "bookingSourceId": 8,
    "blackList": true,
    "businessSegmentId": 9,
    "cardTypeId": 0,
    "ccConsent": true,
    "cityMasterId": 87,
    "companyId": 4,
    "countryArrivalDate": "2018-09-26 10:25:00",
    "countryOfBirthId": 8,
    "countryOfIdId": 8,
    "countryId": 8,
    "createdById": 5,
    "createdDate": "2016-03-02 09:00:56",
    "discountId": 53,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "employedInCountry": false,
    "externalRefId": "v1234568",
    "fax": "03 9568 69568",
    "frequentFlyerMembershipTypeId": 0,
    "gender": "X",
    "groupName": "Westinghouse",
    "gstFree": true,
    "guestAccountId": 8,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "guestStatusId": null,
    "guestTypeId": 1,
    "identificationTypeId": 74,
    "idIssueDate": "2018-09-25 17:25:00",
    "idTypeId": 1,
    "landingPortId": 11,
    "languageSpoken": "French Canadian",
    "languageSpokenId": 2,
    "lastAreaId": 15,
    "lastRateTypeId": 12,
    "lastVisit": "26-06-2016 00:12:00",
    "licenceExpiryDate": "2018-09-25 17:25:00",
    "licenceIssuedDate": "2018-09-25 17:25:00",
    "licenceNumber": "98685p",
    "longTerm": false,
    "loyaltyLevel": "Preetty Loyal",
    "loyaltyMembershipType": "Platinum",
    "loyaltyNumber": "55d",
    "marketingOptOut": true,
    "membershipNumber": "br12345",
    "mobile": "+614 586 659 77",
    "modifiedById": 50,
    "modifiedDate": "2017-07-12 15:12:00",
    "nationalityId": 8,
    "notes": "This is a nice guest",
    "numberOfVisits": 12,
    "otherName": "Smith",
    "passportExpiry": "2018-09-25 17:25:00",
    "passportId": "PT123698",
    "phoneAH": "03 5698 5698",
    "PhoneBH": "03 8986 5458",
    "phoneOptOut": true,
    "placeOfIssue": "Ueganda",
    "position": "CEO",
    "postcode": "1234E",
    "preference": "Clean room",
    "preferredAreaGroupid": null,
    "preferredAreaId": 14,
    "preferredPrintingLanguageId": 7,
    "privacyOptIn": false,
    "proceedingTo": "New York",
    "propertyId": 7,
    "propertyName": "test property",
    "registeredInCountry": false,
    "registrationAddress": "15, urik st",
    "registrationDate": "2017-07-12 15:12:00",
    "registrationNumber": "rrg4e8y7ye",
    "registrationOffice": "Head Office",
    "resTypeId": 8,
    "retailer": false,
    "rvLengthId": 9,
    "rvSlideId": 3,
    "rvTypeId": 2,
    "rvYear": 8,
    "salesPrioritiesId": 5,
    "smsOptOut": true,
    "state": "Victoria",
    "studentId": 246,
    "subResTypeId": 6,
    "subTitleId": 4,
    "tagId": 11,
    "title": "Dr.",
    "totalIncome": 45000,
    "towingId": 2,
    "town": "Bigennsville",
    "turnAwayId": 3,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 20",
    "userDefined11": "String 20",
    "userDefined12": "String 50",
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "28-02-2019 00:00:00",
    "userDefined16": "28-02-2019 00:00:00",
    "vipCodesId": 14,
    "visaExpiry": "28-02-2019 00:00:00",
    "visaIssued": "28-02-2019 00:00:00",
    "visaNumber": "Jw123456",
    "visaIssuedPlace": "Paris",
    "visitPurposeId": 1,
    "webAddress": "www.cbf.com.au"
  }
]
```

<h3 id="postguestsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postguestsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestFull](#schemaguestfull)]|false|none|none|
|» id|integer(in32)|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» agreementDate|string(date-time)|false|none|none|
|» anniversary|string|false|none|none|
|» arrivedFrom|string|false|none|none|
|» auxDocumentDate|string(date-time)|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» blackList|boolean|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cardTypeId|integer(int32)|false|none|none|
|» ccConsent|boolean|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryArrivalDate|string(date-time)|false|none|none|
|» countryOfBirthId|integer(int32)|false|none|none|
|» countryOfIdId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» employedInCountry|boolean|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|» gender|string|false|none|none|
|» groupName|string|false|none|none|
|» gstFree|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» guestStatusId|integer(int32)|false|none|none|
|» guestTypeId|integer(int32)|false|none|none|
|» identificationTypeId|integer(int32)|false|none|none|
|» idIssueDate|string(date-time)|false|none|none|
|» idTypeId|integer(int32)|false|none|none|
|» landingPortId|integer(int32)|false|none|none|
|» languageSpoken|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» lastAreaId|integer(int32)|false|none|none|
|» lastRateTypeId|integer(int32)|false|none|none|
|» lastVisitDate|string(date-time)|false|none|none|
|» licenceExpiryDate|string(date-time)|false|none|none|
|» licenceIssuedDate|string(date-time)|false|none|none|
|» licenceNumber|string|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyLevel|string|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» loyaltyNumber|string|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» membershipNumber|string|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» otherName|string|false|none|none|
|» otaLoyaltyNumber|integer(int32)|false|none|none|
|» passportExpiry|string(date-time)|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» PhoneBH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» placeOfIssue|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» preference|string|false|none|none|
|» preferredAreaGroupid|integer(int32)|false|none|none|
|» preferredAreaId|integer(int32)|false|none|none|
|» preferredPrintingLanguageId|integer(int32)|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» proceedingTo|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» registeredInCountry|boolean|false|none|none|
|» registrationAddress|string|false|none|none|
|» registrationDate|string(date-time)|false|none|none|
|» registrationNumber|string|false|none|none|
|» registrationOffice|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» retailer|boolean|false|none|none|
|» rvLengthId|integer(int32)|false|none|none|
|» rvSlideId|integer(int32)|false|none|none|
|» rvTypeId|integer(int32)|false|none|none|
|» rvYear|integer(int32)|false|none|none|
|» salesPrioritiesId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» studentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» subTitleId|integer(int32)|false|none|none|
|» tagId|integer(int32)|false|none|none|
|» title|string|false|none|none|
|» totalIncome|integer(decimal)|false|none|none|
|» towingId|integer(int32)|false|none|none|
|» town|string|false|none|none|
|» turnAwayId|integer(int32)|false|none|none|
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
|» vipCodesId|integer(int32)|false|none|none|
|» visitPurposeId|integer(int32)|false|none|none|
|» visaExpiry|string(date-time)|false|none|none|
|» visaIssued|string(date-time)|false|none|none|
|» visaIssuedPlace|string|false|none|none|
|» visaNumber|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsById

<a id="opIdgetGuestsById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}`

<h3 id="getguestsbyid-parameters">Parameters</h3>

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
    "guestLite": false
  },
  {
    "guestBasic": false
  },
  {
    "guestFull": false
  }
]
```

<h3 id="getguestsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[inline_response_200_4](#schemainline_response_200_4)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateAGuest

<a id="opIdupdateAGuest"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/guests/{id}?ignoreMandatoryFieldWarnings=false \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/guests/{id}?ignoreMandatoryFieldWarnings=false HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 78,
  "abn": "012 659 65689",
  "addressLine1": "1540 Amsterdam Avenue",
  "addressLine2": "south",
  "addressLine3": "Westingham",
  "agreementDate": "2018-09-25 17:25:00",
  "anniversary": "2015-07-25 00:00:00",
  "arrivedFrom": "San Fran",
  "auxDocumentDate": "2018-09-26 10:25:00",
  "birthday": "1991-08-22 00:00:00",
  "bookingSourceId": 8,
  "blackList": true,
  "businessSegmentId": 9,
  "cardTypeId": 0,
  "ccConsent": true,
  "cityMasterId": 87,
  "companyId": 4,
  "countryArrivalDate": "2018-09-26 10:25:00",
  "countryOfBirthId": 8,
  "countryOfIdId": 8,
  "countryId": 8,
  "createdById": 5,
  "createdDate": "2016-03-02 09:00:56",
  "discountId": 53,
  "edmFilter1OptOut": true,
  "edmFilter2OptOut": true,
  "edmFilter3OptOut": true,
  "email": "test@rms.com.au",
  "email2": "test@rms.com.au",
  "emailOptOut": true,
  "employedInCountry": false,
  "externalRefId": "v1234568",
  "fax": "03 9568 69568",
  "frequentFlyerMembershipTypeId": 0,
  "gender": "M",
  "groupName": "Westinghouse",
  "gstFree": true,
  "guestAccountId": 8,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham",
  "guestStatusId": null,
  "guestTypeId": 1,
  "identificationTypeId": 74,
  "idIssueDate": "2018-09-25 17:25:00",
  "idTypeId": 1,
  "landingPortId": 11,
  "languageSpoken": "French Canadian",
  "languageSpokenId": 2,
  "lastAreaId": 15,
  "lastRateTypeId": 12,
  "lastVisit": "26-06-2016 00:12:00",
  "licenceExpiryDate": "2018-09-25 17:25:00",
  "licenceIssuedDate": "2018-09-25 17:25:00",
  "licenceNumber": "98685p",
  "longTerm": false,
  "loyaltyLevel": "Preetty Loyal",
  "loyaltyMembershipType": "Platinum",
  "loyaltyNumber": "55d",
  "marketingOptOut": true,
  "membershipNumber": "br12345",
  "mobile": "+614 586 659 77",
  "modifiedById": 50,
  "modifiedDate": "2017-07-12 15:12:00",
  "nationalityId": 8,
  "notes": "This is a nice guest",
  "otherName": "Smith",
  "otaLoyaltyNumber": "98413",
  "passportExpiry": "2018-09-25 17:25:00",
  "passportId": "PT123698",
  "phoneAH": "03 5698 5698",
  "PhoneBH": "03 8986 5458",
  "phoneOptOut": true,
  "placeOfIssue": "Ueganda",
  "position": "CEO",
  "postcode": "1234E",
  "preference": "Clean room",
  "preferredAreaGroupid": null,
  "preferredAreaId": 14,
  "preferredPrintingLanguageId": 7,
  "privacyOptIn": false,
  "proceedingTo": "New York",
  "propertyId": 7,
  "propertyName": "test property",
  "registeredInCountry": false,
  "registrationAddress": "15, urik st",
  "registrationDate": "2017-07-12 15:12:00",
  "registrationNumber": "rrg4e8y7ye",
  "registrationOffice": "Head Office",
  "resTypeId": 8,
  "retailer": false,
  "salesPrioritiesId": 5,
  "smsOptOut": true,
  "state": "Victoria",
  "studentId": 246,
  "subResTypeId": 6,
  "subTitleId": 4,
  "tagId": 11,
  "title": "Dr.",
  "towingId": 2,
  "town": "Bigennsville",
  "turnAwayId": 3,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 20",
  "userDefined11": "String 20",
  "userDefined12": "String 50",
  "userDefined13": true,
  "userDefined14": false,
  "userDefined15": "28-02-2019 00:00:00",
  "userDefined16": "28-02-2019 00:00:00",
  "vipCodesId": 14,
  "visaExpiry": "28-02-2019 00:00:00",
  "visaIssued": "28-02-2019 00:00:00",
  "visaNumber": "Jw123456",
  "visaIssuedPlace": "Paris",
  "visitPurposeId": 1,
  "webAddress": "www.cbf.com.au"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}?ignoreMandatoryFieldWarnings=false',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/guests/{id}',
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

r = requests.patch('https://restapi8.rmscloud.com/guests/{id}', params={
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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/guests/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}?ignoreMandatoryFieldWarnings=false");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/guests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /guests/{id}`

*Update an existing guest without the need to pass a whole object*

This call allows you to update any field within the guest record and you only need to pass the fields and values you wish to update. This can be used instead of the PUT function where you would need to retrieve and pass a whole object to make changes.

> Body parameter

```json
{
  "id": 78,
  "abn": "012 659 65689",
  "addressLine1": "1540 Amsterdam Avenue",
  "addressLine2": "south",
  "addressLine3": "Westingham",
  "agreementDate": "2018-09-25 17:25:00",
  "anniversary": "2015-07-25 00:00:00",
  "arrivedFrom": "San Fran",
  "auxDocumentDate": "2018-09-26 10:25:00",
  "birthday": "1991-08-22 00:00:00",
  "bookingSourceId": 8,
  "blackList": true,
  "businessSegmentId": 9,
  "cardTypeId": 0,
  "ccConsent": true,
  "cityMasterId": 87,
  "companyId": 4,
  "countryArrivalDate": "2018-09-26 10:25:00",
  "countryOfBirthId": 8,
  "countryOfIdId": 8,
  "countryId": 8,
  "createdById": 5,
  "createdDate": "2016-03-02 09:00:56",
  "discountId": 53,
  "edmFilter1OptOut": true,
  "edmFilter2OptOut": true,
  "edmFilter3OptOut": true,
  "email": "test@rms.com.au",
  "email2": "test@rms.com.au",
  "emailOptOut": true,
  "employedInCountry": false,
  "externalRefId": "v1234568",
  "fax": "03 9568 69568",
  "frequentFlyerMembershipTypeId": 0,
  "gender": "M",
  "groupName": "Westinghouse",
  "gstFree": true,
  "guestAccountId": 8,
  "guestGiven": "Smithers",
  "guestSurname": "Westingham",
  "guestStatusId": null,
  "guestTypeId": 1,
  "identificationTypeId": 74,
  "idIssueDate": "2018-09-25 17:25:00",
  "idTypeId": 1,
  "landingPortId": 11,
  "languageSpoken": "French Canadian",
  "languageSpokenId": 2,
  "lastAreaId": 15,
  "lastRateTypeId": 12,
  "lastVisit": "26-06-2016 00:12:00",
  "licenceExpiryDate": "2018-09-25 17:25:00",
  "licenceIssuedDate": "2018-09-25 17:25:00",
  "licenceNumber": "98685p",
  "longTerm": false,
  "loyaltyLevel": "Preetty Loyal",
  "loyaltyMembershipType": "Platinum",
  "loyaltyNumber": "55d",
  "marketingOptOut": true,
  "membershipNumber": "br12345",
  "mobile": "+614 586 659 77",
  "modifiedById": 50,
  "modifiedDate": "2017-07-12 15:12:00",
  "nationalityId": 8,
  "notes": "This is a nice guest",
  "otherName": "Smith",
  "otaLoyaltyNumber": "98413",
  "passportExpiry": "2018-09-25 17:25:00",
  "passportId": "PT123698",
  "phoneAH": "03 5698 5698",
  "PhoneBH": "03 8986 5458",
  "phoneOptOut": true,
  "placeOfIssue": "Ueganda",
  "position": "CEO",
  "postcode": "1234E",
  "preference": "Clean room",
  "preferredAreaGroupid": null,
  "preferredAreaId": 14,
  "preferredPrintingLanguageId": 7,
  "privacyOptIn": false,
  "proceedingTo": "New York",
  "propertyId": 7,
  "propertyName": "test property",
  "registeredInCountry": false,
  "registrationAddress": "15, urik st",
  "registrationDate": "2017-07-12 15:12:00",
  "registrationNumber": "rrg4e8y7ye",
  "registrationOffice": "Head Office",
  "resTypeId": 8,
  "retailer": false,
  "salesPrioritiesId": 5,
  "smsOptOut": true,
  "state": "Victoria",
  "studentId": 246,
  "subResTypeId": 6,
  "subTitleId": 4,
  "tagId": 11,
  "title": "Dr.",
  "towingId": 2,
  "town": "Bigennsville",
  "turnAwayId": 3,
  "userDefined1": "String 50",
  "userDefined2": "String 20",
  "userDefined3": "String 20",
  "userDefined4": "String 20",
  "userDefined5": "String 20",
  "userDefined6": "String 20",
  "userDefined7": "String 20",
  "userDefined8": "String 20",
  "userDefined9": "String 20",
  "userDefined10": "String 20",
  "userDefined11": "String 20",
  "userDefined12": "String 50",
  "userDefined13": true,
  "userDefined14": false,
  "userDefined15": "28-02-2019 00:00:00",
  "userDefined16": "28-02-2019 00:00:00",
  "vipCodesId": 14,
  "visaExpiry": "28-02-2019 00:00:00",
  "visaIssued": "28-02-2019 00:00:00",
  "visaNumber": "Jw123456",
  "visaIssuedPlace": "Paris",
  "visitPurposeId": 1,
  "webAddress": "www.cbf.com.au"
}
```

<h3 id="updateaguest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|ignoreMandatoryFieldWarnings|query|boolean|true|When set to false this option will return any warnings prompted by blank mandatory fields in the RMS UI, restricting you from updating or creating a record|
|body|body|[guestPatch](#schemaguestpatch)|true|Guest object that can be passed to update specified fields|

> Example responses

> 201 Response

```json
[
  {
    "id": 78,
    "abn": "012 659 65689",
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "agreementDate": "2018-09-25 17:25:00",
    "anniversary": "2015-07-29 00:00:00",
    "arrivedFrom": "San Fran",
    "auxDocumentDate": "2018-09-26 10:25:00",
    "birthday": "1991-08-22 00:00:00",
    "bookingSourceId": 8,
    "blackList": true,
    "businessSegmentId": 9,
    "cardTypeId": 0,
    "ccConsent": true,
    "cityMasterId": 87,
    "companyId": 4,
    "countryArrivalDate": "2018-09-26 10:25:00",
    "countryOfBirthId": 8,
    "countryOfIdId": 8,
    "countryId": 8,
    "createdById": 5,
    "createdDate": "2016-03-02 09:00:56",
    "discountId": 53,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "employedInCountry": false,
    "externalRefId": "v1234568",
    "fax": "03 9568 69568",
    "frequentFlyerMembershipTypeId": 0,
    "gender": "X",
    "groupName": "Westinghouse",
    "gstFree": true,
    "guestAccountId": 8,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "guestStatusId": null,
    "guestTypeId": 1,
    "identificationTypeId": 74,
    "idIssueDate": "2018-09-25 17:25:00",
    "idTypeId": 1,
    "landingPortId": 11,
    "languageSpoken": "French Canadian",
    "languageSpokenId": 2,
    "lastAreaId": 15,
    "lastRateTypeId": 12,
    "lastVisit": "26-06-2016 00:12:00",
    "licenceExpiryDate": "2018-09-25 17:25:00",
    "licenceIssuedDate": "2018-09-25 17:25:00",
    "licenceNumber": "98685p",
    "longTerm": false,
    "loyaltyLevel": "Preetty Loyal",
    "loyaltyMembershipType": "Platinum",
    "loyaltyNumber": "55d",
    "marketingOptOut": true,
    "membershipNumber": "br12345",
    "mobile": "+614 586 659 77",
    "modifiedById": 50,
    "modifiedDate": "2017-07-12 15:12:00",
    "nationalityId": 8,
    "notes": "This is a nice guest",
    "numberOfVisits": 12,
    "otherName": "Smith",
    "passportExpiry": "2018-09-25 17:25:00",
    "passportId": "PT123698",
    "phoneAH": "03 5698 5698",
    "PhoneBH": "03 8986 5458",
    "phoneOptOut": true,
    "placeOfIssue": "Ueganda",
    "position": "CEO",
    "postcode": "1234E",
    "preference": "Clean room",
    "preferredAreaGroupid": null,
    "preferredAreaId": 14,
    "preferredPrintingLanguageId": 7,
    "privacyOptIn": false,
    "proceedingTo": "New York",
    "propertyId": 7,
    "propertyName": "test property",
    "registeredInCountry": false,
    "registrationAddress": "15, urik st",
    "registrationDate": "2017-07-12 15:12:00",
    "registrationNumber": "rrg4e8y7ye",
    "registrationOffice": "Head Office",
    "resTypeId": 8,
    "retailer": false,
    "rvLengthId": 9,
    "rvSlideId": 3,
    "rvTypeId": 2,
    "rvYear": 8,
    "salesPrioritiesId": 5,
    "smsOptOut": true,
    "state": "Victoria",
    "studentId": 246,
    "subResTypeId": 6,
    "subTitleId": 4,
    "tagId": 11,
    "title": "Dr.",
    "totalIncome": 45000,
    "towingId": 2,
    "town": "Bigennsville",
    "turnAwayId": 3,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 20",
    "userDefined11": "String 20",
    "userDefined12": "String 50",
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "28-02-2019 00:00:00",
    "userDefined16": "28-02-2019 00:00:00",
    "vipCodesId": 14,
    "visaExpiry": "28-02-2019 00:00:00",
    "visaIssued": "28-02-2019 00:00:00",
    "visaNumber": "Jw123456",
    "visaIssuedPlace": "Paris",
    "visitPurposeId": 1,
    "webAddress": "www.cbf.com.au"
  }
]
```

<h3 id="updateaguest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updateaguest-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestFull](#schemaguestfull)]|false|none|none|
|» id|integer(in32)|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» agreementDate|string(date-time)|false|none|none|
|» anniversary|string|false|none|none|
|» arrivedFrom|string|false|none|none|
|» auxDocumentDate|string(date-time)|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» blackList|boolean|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cardTypeId|integer(int32)|false|none|none|
|» ccConsent|boolean|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryArrivalDate|string(date-time)|false|none|none|
|» countryOfBirthId|integer(int32)|false|none|none|
|» countryOfIdId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» employedInCountry|boolean|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|» gender|string|false|none|none|
|» groupName|string|false|none|none|
|» gstFree|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» guestStatusId|integer(int32)|false|none|none|
|» guestTypeId|integer(int32)|false|none|none|
|» identificationTypeId|integer(int32)|false|none|none|
|» idIssueDate|string(date-time)|false|none|none|
|» idTypeId|integer(int32)|false|none|none|
|» landingPortId|integer(int32)|false|none|none|
|» languageSpoken|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» lastAreaId|integer(int32)|false|none|none|
|» lastRateTypeId|integer(int32)|false|none|none|
|» lastVisitDate|string(date-time)|false|none|none|
|» licenceExpiryDate|string(date-time)|false|none|none|
|» licenceIssuedDate|string(date-time)|false|none|none|
|» licenceNumber|string|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyLevel|string|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» loyaltyNumber|string|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» membershipNumber|string|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» otherName|string|false|none|none|
|» otaLoyaltyNumber|integer(int32)|false|none|none|
|» passportExpiry|string(date-time)|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» PhoneBH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» placeOfIssue|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» preference|string|false|none|none|
|» preferredAreaGroupid|integer(int32)|false|none|none|
|» preferredAreaId|integer(int32)|false|none|none|
|» preferredPrintingLanguageId|integer(int32)|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» proceedingTo|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» registeredInCountry|boolean|false|none|none|
|» registrationAddress|string|false|none|none|
|» registrationDate|string(date-time)|false|none|none|
|» registrationNumber|string|false|none|none|
|» registrationOffice|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» retailer|boolean|false|none|none|
|» rvLengthId|integer(int32)|false|none|none|
|» rvSlideId|integer(int32)|false|none|none|
|» rvTypeId|integer(int32)|false|none|none|
|» rvYear|integer(int32)|false|none|none|
|» salesPrioritiesId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» studentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» subTitleId|integer(int32)|false|none|none|
|» tagId|integer(int32)|false|none|none|
|» title|string|false|none|none|
|» totalIncome|integer(decimal)|false|none|none|
|» towingId|integer(int32)|false|none|none|
|» town|string|false|none|none|
|» turnAwayId|integer(int32)|false|none|none|
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
|» vipCodesId|integer(int32)|false|none|none|
|» visitPurposeId|integer(int32)|false|none|none|
|» visaExpiry|string(date-time)|false|none|none|
|» visaIssued|string(date-time)|false|none|none|
|» visaIssuedPlace|string|false|none|none|
|» visaNumber|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGuestGdprPrivacy

<a id="opIdupdateGuestGdprPrivacy"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn?optIn=true \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn?optIn=true HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn?optIn=true',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn',
  params: {
  'optIn' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn', params={
  'optIn': 'true'
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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn?optIn=true");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests/{id}/gdprPrivacyOptIn", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests/{id}/gdprPrivacyOptIn`

*Update an existing guests GDPR’s privacy setting - Please use the following knowledge base for more info: https://helpcentre.rmscloud.com/gdpr/privacy-policy-requirements-for-gdpr*

<h3 id="updateguestgdprprivacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|optIn|query|boolean|true|The option to update a guests gdpr Privacy|

> Example responses

> 201 Response

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

<h3 id="updateguestgdprprivacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updateguestgdprprivacy-responseschema">Response Schema</h3>

Status Code **201**

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

## postGuestAccountId

<a id="opIdpostGuestAccountId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount?propertyId=0',
{
  method: 'POST',

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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount', params={
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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount?propertyId=0");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/createPropertyAccount", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/createPropertyAccount`

*If a Guest has never charged back to their account id before at a particular property, it will not exist in RMS. This feature will allow you to create an account id for the specified Guest id at a specified property.*

<h3 id="postguestaccountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "accountClass": "Guest",
    "id": 12345,
    "propertyId": 1
  }
]
```

<h3 id="postguestaccountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="postguestaccountid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountBasic](#schemaaccountbasic)]|false|none|[Used:<br>GET /agents/{id}/accounts<br>POST /agents/{id}/createPropertyAccount<br>GET /companies/{id}/accounts<br>POST /companies/{id}/createPropertyAccount<br>GET /guests/{id}/accounts<br>POST /guests/{id}/createPropertyAccount]|
|» accountClass|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putGuestDwelling

<a id="opIdputGuestDwelling"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests/{id}/dwelling \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests/{id}/dwelling HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "lengthId": 8,
  "slideId": 7,
  "typeId": 2,
  "year": "1989",
  "towingId": 5
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/dwelling',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests/{id}/dwelling',
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

r = requests.put('https://restapi8.rmscloud.com/guests/{id}/dwelling', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests/{id}/dwelling', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/dwelling");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests/{id}/dwelling", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests/{id}/dwelling`

*Assign dwelling options to a guests profile.*

> Body parameter

```json
{
  "lengthId": 8,
  "slideId": 7,
  "typeId": 2,
  "year": "1989",
  "towingId": 5
}
```

<h3 id="putguestdwelling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestDwelling](#schemaguestdwelling)|true|Object that can be passed to add dwelling options to a guest record|

> Example responses

> 200 Response

```json
[
  {
    "id": 78,
    "abn": "012 659 65689",
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "agreementDate": "2018-09-25 17:25:00",
    "anniversary": "2015-07-29 00:00:00",
    "arrivedFrom": "San Fran",
    "auxDocumentDate": "2018-09-26 10:25:00",
    "birthday": "1991-08-22 00:00:00",
    "bookingSourceId": 8,
    "blackList": true,
    "businessSegmentId": 9,
    "cardTypeId": 0,
    "ccConsent": true,
    "cityMasterId": 87,
    "companyId": 4,
    "countryArrivalDate": "2018-09-26 10:25:00",
    "countryOfBirthId": 8,
    "countryOfIdId": 8,
    "countryId": 8,
    "createdById": 5,
    "createdDate": "2016-03-02 09:00:56",
    "discountId": 53,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "employedInCountry": false,
    "externalRefId": "v1234568",
    "fax": "03 9568 69568",
    "frequentFlyerMembershipTypeId": 0,
    "gender": "X",
    "groupName": "Westinghouse",
    "gstFree": true,
    "guestAccountId": 8,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "guestStatusId": null,
    "guestTypeId": 1,
    "identificationTypeId": 74,
    "idIssueDate": "2018-09-25 17:25:00",
    "idTypeId": 1,
    "landingPortId": 11,
    "languageSpoken": "French Canadian",
    "languageSpokenId": 2,
    "lastAreaId": 15,
    "lastRateTypeId": 12,
    "lastVisit": "26-06-2016 00:12:00",
    "licenceExpiryDate": "2018-09-25 17:25:00",
    "licenceIssuedDate": "2018-09-25 17:25:00",
    "licenceNumber": "98685p",
    "longTerm": false,
    "loyaltyLevel": "Preetty Loyal",
    "loyaltyMembershipType": "Platinum",
    "loyaltyNumber": "55d",
    "marketingOptOut": true,
    "membershipNumber": "br12345",
    "mobile": "+614 586 659 77",
    "modifiedById": 50,
    "modifiedDate": "2017-07-12 15:12:00",
    "nationalityId": 8,
    "notes": "This is a nice guest",
    "numberOfVisits": 12,
    "otherName": "Smith",
    "passportExpiry": "2018-09-25 17:25:00",
    "passportId": "PT123698",
    "phoneAH": "03 5698 5698",
    "PhoneBH": "03 8986 5458",
    "phoneOptOut": true,
    "placeOfIssue": "Ueganda",
    "position": "CEO",
    "postcode": "1234E",
    "preference": "Clean room",
    "preferredAreaGroupid": null,
    "preferredAreaId": 14,
    "preferredPrintingLanguageId": 7,
    "privacyOptIn": false,
    "proceedingTo": "New York",
    "propertyId": 7,
    "propertyName": "test property",
    "registeredInCountry": false,
    "registrationAddress": "15, urik st",
    "registrationDate": "2017-07-12 15:12:00",
    "registrationNumber": "rrg4e8y7ye",
    "registrationOffice": "Head Office",
    "resTypeId": 8,
    "retailer": false,
    "rvLengthId": 9,
    "rvSlideId": 3,
    "rvTypeId": 2,
    "rvYear": 8,
    "salesPrioritiesId": 5,
    "smsOptOut": true,
    "state": "Victoria",
    "studentId": 246,
    "subResTypeId": 6,
    "subTitleId": 4,
    "tagId": 11,
    "title": "Dr.",
    "totalIncome": 45000,
    "towingId": 2,
    "town": "Bigennsville",
    "turnAwayId": 3,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 20",
    "userDefined11": "String 20",
    "userDefined12": "String 50",
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "28-02-2019 00:00:00",
    "userDefined16": "28-02-2019 00:00:00",
    "vipCodesId": 14,
    "visaExpiry": "28-02-2019 00:00:00",
    "visaIssued": "28-02-2019 00:00:00",
    "visaNumber": "Jw123456",
    "visaIssuedPlace": "Paris",
    "visitPurposeId": 1,
    "webAddress": "www.cbf.com.au"
  }
]
```

<h3 id="putguestdwelling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Elements to pass|Inline|

<h3 id="putguestdwelling-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestFull](#schemaguestfull)]|false|none|none|
|» id|integer(in32)|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» agreementDate|string(date-time)|false|none|none|
|» anniversary|string|false|none|none|
|» arrivedFrom|string|false|none|none|
|» auxDocumentDate|string(date-time)|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» blackList|boolean|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cardTypeId|integer(int32)|false|none|none|
|» ccConsent|boolean|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryArrivalDate|string(date-time)|false|none|none|
|» countryOfBirthId|integer(int32)|false|none|none|
|» countryOfIdId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» employedInCountry|boolean|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|» gender|string|false|none|none|
|» groupName|string|false|none|none|
|» gstFree|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» guestStatusId|integer(int32)|false|none|none|
|» guestTypeId|integer(int32)|false|none|none|
|» identificationTypeId|integer(int32)|false|none|none|
|» idIssueDate|string(date-time)|false|none|none|
|» idTypeId|integer(int32)|false|none|none|
|» landingPortId|integer(int32)|false|none|none|
|» languageSpoken|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» lastAreaId|integer(int32)|false|none|none|
|» lastRateTypeId|integer(int32)|false|none|none|
|» lastVisitDate|string(date-time)|false|none|none|
|» licenceExpiryDate|string(date-time)|false|none|none|
|» licenceIssuedDate|string(date-time)|false|none|none|
|» licenceNumber|string|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyLevel|string|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» loyaltyNumber|string|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» membershipNumber|string|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» otherName|string|false|none|none|
|» otaLoyaltyNumber|integer(int32)|false|none|none|
|» passportExpiry|string(date-time)|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» PhoneBH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» placeOfIssue|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» preference|string|false|none|none|
|» preferredAreaGroupid|integer(int32)|false|none|none|
|» preferredAreaId|integer(int32)|false|none|none|
|» preferredPrintingLanguageId|integer(int32)|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» proceedingTo|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» registeredInCountry|boolean|false|none|none|
|» registrationAddress|string|false|none|none|
|» registrationDate|string(date-time)|false|none|none|
|» registrationNumber|string|false|none|none|
|» registrationOffice|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» retailer|boolean|false|none|none|
|» rvLengthId|integer(int32)|false|none|none|
|» rvSlideId|integer(int32)|false|none|none|
|» rvTypeId|integer(int32)|false|none|none|
|» rvYear|integer(int32)|false|none|none|
|» salesPrioritiesId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» studentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» subTitleId|integer(int32)|false|none|none|
|» tagId|integer(int32)|false|none|none|
|» title|string|false|none|none|
|» totalIncome|integer(decimal)|false|none|none|
|» towingId|integer(int32)|false|none|none|
|» town|string|false|none|none|
|» turnAwayId|integer(int32)|false|none|none|
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
|» vipCodesId|integer(int32)|false|none|none|
|» visitPurposeId|integer(int32)|false|none|none|
|» visaExpiry|string(date-time)|false|none|none|
|» visaIssued|string(date-time)|false|none|none|
|» visaIssuedPlace|string|false|none|none|
|» visaNumber|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsAccounts

<a id="opIdgetGuestsAccounts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/accounts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/accounts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/accounts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/accounts',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/accounts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/accounts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/accounts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/accounts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/accounts`

*Retrieve the account id associated with A Guest*

<h3 id="getguestsaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "accountClass": "Guest",
    "id": 12345,
    "propertyId": 1
  }
]
```

<h3 id="getguestsaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountBasic](#schemaaccountbasic)]|false|none|[Used:<br>GET /agents/{id}/accounts<br>POST /agents/{id}/createPropertyAccount<br>GET /companies/{id}/accounts<br>POST /companies/{id}/createPropertyAccount<br>GET /guests/{id}/accounts<br>POST /guests/{id}/createPropertyAccount]|
|» accountClass|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestContacts

<a id="opIdgetGuestContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/contacts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/contacts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/contacts',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/contacts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/contacts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/contacts`

*Retrieve guest contact*

<h3 id="getguestcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 16,
    "address1": "51 fake st",
    "address2": "West town",
    "address3": "South Side",
    "city": "Melbourne",
    "contactType": "Company",
    "countryId": 2,
    "createdById": 2,
    "createdDate": "2020-08-04 00:00:00",
    "email": "test@fake.com.au",
    "fax": "03 9865 8954",
    "given": "Tom",
    "groupingId": 4,
    "mobile": "0411235985",
    "modifiedById": 5,
    "modifiedDate": "2020-08-05 00:00:00",
    "pager": "265954895",
    "phoneAh": "03 9856 9856",
    "phoneBh": "02 5969 5698",
    "position": "Receptionist",
    "postcode": "3042",
    "referenceId": "20A",
    "relationshipId": 7,
    "state": "Victoria",
    "surname": "Newman",
    "title": "Mr"
  }
]
```

<h3 id="getguestcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestcontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestContacts

<a id="opIdaddGuestContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/contacts HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/contacts',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/contacts',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/contacts', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/contacts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/contacts");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/contacts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/contacts`

*Create guest contact*

> Body parameter

```json
{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}
```

<h3 id="addguestcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[contact](#schemacontact)|true|Contact object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 16,
    "address1": "51 fake st",
    "address2": "West town",
    "address3": "South Side",
    "city": "Melbourne",
    "contactType": "Company",
    "countryId": 2,
    "createdById": 2,
    "createdDate": "2020-08-04 00:00:00",
    "email": "test@fake.com.au",
    "fax": "03 9865 8954",
    "given": "Tom",
    "groupingId": 4,
    "mobile": "0411235985",
    "modifiedById": 5,
    "modifiedDate": "2020-08-05 00:00:00",
    "pager": "265954895",
    "phoneAh": "03 9856 9856",
    "phoneBh": "02 5969 5698",
    "position": "Receptionist",
    "postcode": "3042",
    "referenceId": "20A",
    "relationshipId": 7,
    "state": "Victoria",
    "surname": "Newman",
    "title": "Mr"
  }
]
```

<h3 id="addguestcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="addguestcontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## putUpdateGuestContacts

<a id="opIdputUpdateGuestContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests/{id}/contacts/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests/{id}/contacts/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/contacts/{id}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests/{id}/contacts/{id}',
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

r = requests.put('https://restapi8.rmscloud.com/guests/{id}/contacts/{id}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests/{id}/contacts/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/contacts/{id}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests/{id}/contacts/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests/{id}/contacts/{id}`

*Update guest contacts*

> Body parameter

```json
{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}
```

<h3 id="putupdateguestcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[contact](#schemacontact)|true|Contact object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 16,
    "address1": "51 fake st",
    "address2": "West town",
    "address3": "South Side",
    "city": "Melbourne",
    "contactType": "Company",
    "countryId": 2,
    "createdById": 2,
    "createdDate": "2020-08-04 00:00:00",
    "email": "test@fake.com.au",
    "fax": "03 9865 8954",
    "given": "Tom",
    "groupingId": 4,
    "mobile": "0411235985",
    "modifiedById": 5,
    "modifiedDate": "2020-08-05 00:00:00",
    "pager": "265954895",
    "phoneAh": "03 9856 9856",
    "phoneBh": "02 5969 5698",
    "position": "Receptionist",
    "postcode": "3042",
    "referenceId": "20A",
    "relationshipId": 7,
    "state": "Victoria",
    "surname": "Newman",
    "title": "Mr"
  }
]
```

<h3 id="putupdateguestcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="putupdateguestcontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## patchUpdateGuestContacts

<a id="opIdpatchUpdateGuestContacts"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH https://restapi8.rmscloud.com/guests/{id}/contacts/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PATCH https://restapi8.rmscloud.com/guests/{id}/contacts/{id} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/contacts/{id}',
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

result = RestClient.patch 'https://restapi8.rmscloud.com/guests/{id}/contacts/{id}',
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

r = requests.patch('https://restapi8.rmscloud.com/guests/{id}/contacts/{id}', headers = headers)

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
    $response = $client->request('PATCH','https://restapi8.rmscloud.com/guests/{id}/contacts/{id}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/contacts/{id}");
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
    req, err := http.NewRequest("PATCH", "https://restapi8.rmscloud.com/guests/{id}/contacts/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /guests/{id}/contacts/{id}`

*Update guest contacts without the need to pass a whole object*

> Body parameter

```json
{
  "id": 16,
  "address1": "51 fake st",
  "address2": "West town",
  "address3": "South Side",
  "city": "Melbourne",
  "contactType": "Company",
  "countryId": 2,
  "createdById": 2,
  "createdDate": "2020-08-04 00:00:00",
  "email": "test@fake.com.au",
  "fax": "03 9865 8954",
  "given": "Tom",
  "groupingId": 4,
  "mobile": "0411235985",
  "modifiedById": 5,
  "modifiedDate": "2020-08-05 00:00:00",
  "pager": "265954895",
  "phoneAh": "03 9856 9856",
  "phoneBh": "02 5969 5698",
  "position": "Receptionist",
  "postcode": "3042",
  "referenceId": "20A",
  "relationshipId": 7,
  "state": "Victoria",
  "surname": "Newman",
  "title": "Mr"
}
```

<h3 id="patchupdateguestcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[contact](#schemacontact)|true|Contact object that needs to be added or updated|

> Example responses

> 200 Response

```json
[
  {
    "id": 16,
    "address1": "51 fake st",
    "address2": "West town",
    "address3": "South Side",
    "city": "Melbourne",
    "contactType": "Company",
    "countryId": 2,
    "createdById": 2,
    "createdDate": "2020-08-04 00:00:00",
    "email": "test@fake.com.au",
    "fax": "03 9865 8954",
    "given": "Tom",
    "groupingId": 4,
    "mobile": "0411235985",
    "modifiedById": 5,
    "modifiedDate": "2020-08-05 00:00:00",
    "pager": "265954895",
    "phoneAh": "03 9856 9856",
    "phoneBh": "02 5969 5698",
    "position": "Receptionist",
    "postcode": "3042",
    "referenceId": "20A",
    "relationshipId": 7,
    "state": "Victoria",
    "surname": "Newman",
    "title": "Mr"
  }
]
```

<h3 id="patchupdateguestcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="patchupdateguestcontacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[contact](#schemacontact)]|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» address3|string|false|none|none|
|» city|string|false|none|none|
|» contactType|string|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» fax|string|false|none|none|
|» given|string|false|none|none|
|» groupingId|integer(int32)|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» pager|string|false|none|none|
|» phoneAh|string|false|none|none|
|» phoneBh|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» referenceId|string|false|none|none|
|» relationship|integer(int32)|false|none|none|
|» state|string|false|none|none|
|» surname|string|false|none|none|
|» title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsContracts

<a id="opIdgetGuestsContracts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/contracts \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/contracts HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/contracts',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/contracts',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/contracts', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/contracts', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/contracts");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/contracts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/contracts`

*Retrieve the contracts associated with A Guest/Owner*

<h3 id="getguestscontracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "accountId": 64984,
    "areaId": 4,
    "categoryId": 4,
    "contractNumber": 265,
    "contractType": "Standard",
    "dwellingSalesNumber": 15,
    "ownedFromDate": "2018-09-26 10:25:00",
    "ownedToDate": "2020-09-26 10:25:00",
    "percentageShare": 100,
    "propertyId": 1
  }
]
```

<h3 id="getguestscontracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestscontracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestContract](#schemaguestcontract)]|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» areaId|integer(int32)|false|none|none|
|» categoryId|integer(int32)|false|none|none|
|» contractId|integer(int32)|false|none|none|
|» contractType|string|false|none|none|
|» dwellingSalesNumber|integer(int32)|false|none|none|
|» ownedFromDate|string(date-time)|false|none|none|
|» ownedToDate|string(date-time)|false|none|none|
|» percentageShare|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsLoyaltyPoints

<a id="opIdgetGuestsLoyaltyPoints"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/loyaltyPoints", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/loyaltyPoints`

*Retrieve the loyalty points associated with A Guest*

<h3 id="getguestsloyaltypoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "guestId": 31,
    "points": "500",
    "enrolled": true
  }
]
```

<h3 id="getguestsloyaltypoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsloyaltypoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestLoyaltyPoints](#schemaguestloyaltypoints)]|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» points|string|false|none|none|
|» enrolled|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateGuestsLoyaltyEnrollment

<a id="opIdupdateGuestsLoyaltyEnrollment"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment?enroll=true \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment?enroll=true HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment?enroll=true',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment',
  params: {
  'enroll' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'authtoken': 'API_KEY'
}

r = requests.put('https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment', params={
  'enroll': 'true'
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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment?enroll=true");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests/{id}/loyaltyEnrollment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests/{id}/loyaltyEnrollment`

*Update an existing guests profile to be enrolled in the RMS loyalt program. Please use the following knowledge base for more info: https://helpcentre.rmscloud.com/guest-rewards-module/enrol-a-guest-onto-guest-rewards*

<h3 id="updateguestsloyaltyenrollment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|enroll|query|boolean|true|The option to enrol a guest in the loyalty program|

> Example responses

> 201 Response

```json
[
  {
    "id": 78,
    "abn": "012 659 65689",
    "addressLine1": "1540 Amsterdam Avenue",
    "addressLine2": "south",
    "addressLine3": "Westingham",
    "agreementDate": "2018-09-25 17:25:00",
    "anniversary": "2015-07-29 00:00:00",
    "arrivedFrom": "San Fran",
    "auxDocumentDate": "2018-09-26 10:25:00",
    "birthday": "1991-08-22 00:00:00",
    "bookingSourceId": 8,
    "blackList": true,
    "businessSegmentId": 9,
    "cardTypeId": 0,
    "ccConsent": true,
    "cityMasterId": 87,
    "companyId": 4,
    "countryArrivalDate": "2018-09-26 10:25:00",
    "countryOfBirthId": 8,
    "countryOfIdId": 8,
    "countryId": 8,
    "createdById": 5,
    "createdDate": "2016-03-02 09:00:56",
    "discountId": 53,
    "edmFilter1OptOut": true,
    "edmFilter2OptOut": true,
    "edmFilter3OptOut": true,
    "email": "test@rms.com.au",
    "email2": "test@rms.com.au",
    "emailOptOut": true,
    "employedInCountry": false,
    "externalRefId": "v1234568",
    "fax": "03 9568 69568",
    "frequentFlyerMembershipTypeId": 0,
    "gender": "X",
    "groupName": "Westinghouse",
    "gstFree": true,
    "guestAccountId": 8,
    "guestGiven": "Smithers",
    "guestSurname": "Westingham",
    "guestStatusId": null,
    "guestTypeId": 1,
    "identificationTypeId": 74,
    "idIssueDate": "2018-09-25 17:25:00",
    "idTypeId": 1,
    "landingPortId": 11,
    "languageSpoken": "French Canadian",
    "languageSpokenId": 2,
    "lastAreaId": 15,
    "lastRateTypeId": 12,
    "lastVisit": "26-06-2016 00:12:00",
    "licenceExpiryDate": "2018-09-25 17:25:00",
    "licenceIssuedDate": "2018-09-25 17:25:00",
    "licenceNumber": "98685p",
    "longTerm": false,
    "loyaltyLevel": "Preetty Loyal",
    "loyaltyMembershipType": "Platinum",
    "loyaltyNumber": "55d",
    "marketingOptOut": true,
    "membershipNumber": "br12345",
    "mobile": "+614 586 659 77",
    "modifiedById": 50,
    "modifiedDate": "2017-07-12 15:12:00",
    "nationalityId": 8,
    "notes": "This is a nice guest",
    "numberOfVisits": 12,
    "otherName": "Smith",
    "passportExpiry": "2018-09-25 17:25:00",
    "passportId": "PT123698",
    "phoneAH": "03 5698 5698",
    "PhoneBH": "03 8986 5458",
    "phoneOptOut": true,
    "placeOfIssue": "Ueganda",
    "position": "CEO",
    "postcode": "1234E",
    "preference": "Clean room",
    "preferredAreaGroupid": null,
    "preferredAreaId": 14,
    "preferredPrintingLanguageId": 7,
    "privacyOptIn": false,
    "proceedingTo": "New York",
    "propertyId": 7,
    "propertyName": "test property",
    "registeredInCountry": false,
    "registrationAddress": "15, urik st",
    "registrationDate": "2017-07-12 15:12:00",
    "registrationNumber": "rrg4e8y7ye",
    "registrationOffice": "Head Office",
    "resTypeId": 8,
    "retailer": false,
    "rvLengthId": 9,
    "rvSlideId": 3,
    "rvTypeId": 2,
    "rvYear": 8,
    "salesPrioritiesId": 5,
    "smsOptOut": true,
    "state": "Victoria",
    "studentId": 246,
    "subResTypeId": 6,
    "subTitleId": 4,
    "tagId": 11,
    "title": "Dr.",
    "totalIncome": 45000,
    "towingId": 2,
    "town": "Bigennsville",
    "turnAwayId": 3,
    "userDefined1": "String 50",
    "userDefined2": "String 20",
    "userDefined3": "String 20",
    "userDefined4": "String 20",
    "userDefined5": "String 20",
    "userDefined6": "String 20",
    "userDefined7": "String 20",
    "userDefined8": "String 20",
    "userDefined9": "String 20",
    "userDefined10": "String 20",
    "userDefined11": "String 20",
    "userDefined12": "String 50",
    "userDefined13": true,
    "userDefined14": false,
    "userDefined15": "28-02-2019 00:00:00",
    "userDefined16": "28-02-2019 00:00:00",
    "vipCodesId": 14,
    "visaExpiry": "28-02-2019 00:00:00",
    "visaIssued": "28-02-2019 00:00:00",
    "visaNumber": "Jw123456",
    "visaIssuedPlace": "Paris",
    "visitPurposeId": 1,
    "webAddress": "www.cbf.com.au"
  }
]
```

<h3 id="updateguestsloyaltyenrollment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="updateguestsloyaltyenrollment-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestFull](#schemaguestfull)]|false|none|none|
|» id|integer(in32)|false|none|none|
|» abn|string|false|none|Australian Business Number|
|» addressLine1|string|false|none|none|
|» addressLine2|string|false|none|none|
|» addressLine3|string|false|none|none|
|» agreementDate|string(date-time)|false|none|none|
|» anniversary|string|false|none|none|
|» arrivedFrom|string|false|none|none|
|» auxDocumentDate|string(date-time)|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» bookingSourceId|integer(int32)|false|none|none|
|» blackList|boolean|false|none|none|
|» businessSegmentId|integer(int32)|false|none|none|
|» cardTypeId|integer(int32)|false|none|none|
|» ccConsent|boolean|false|none|none|
|» cityMasterId|integer(int32)|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» countryArrivalDate|string(date-time)|false|none|none|
|» countryOfBirthId|integer(int32)|false|none|none|
|» countryOfIdId|integer(int32)|false|none|none|
|» countryId|integer(int32)|false|none|none|
|» createdById|integer(int32)|false|none|none|
|» createdDate|string(date-time)|false|none|none|
|» discountId|integer(int32)|false|none|none|
|» edmFilter1OptOut|boolean|false|none|none|
|» edmFilter2OptOut|boolean|false|none|none|
|» edmFilter3OptOut|boolean|false|none|none|
|» email|string|false|none|none|
|» email2|string|false|none|none|
|» emailOptOut|boolean|false|none|none|
|» employedInCountry|boolean|false|none|none|
|» externalRefId|string|false|none|none|
|» fax|string|false|none|none|
|» frequentFlyerMembershipTypeId|integer(int32)|false|none|none|
|» gender|string|false|none|none|
|» groupName|string|false|none|none|
|» gstFree|boolean|false|none|none|
|» guestAccountId|integer(int32)|false|none|none|
|» guestGiven|string|false|none|none|
|» guestSurname|string|false|none|none|
|» guestStatusId|integer(int32)|false|none|none|
|» guestTypeId|integer(int32)|false|none|none|
|» identificationTypeId|integer(int32)|false|none|none|
|» idIssueDate|string(date-time)|false|none|none|
|» idTypeId|integer(int32)|false|none|none|
|» landingPortId|integer(int32)|false|none|none|
|» languageSpoken|string|false|none|none|
|» languageSpokenId|integer(int32)|false|none|none|
|» lastAreaId|integer(int32)|false|none|none|
|» lastRateTypeId|integer(int32)|false|none|none|
|» lastVisitDate|string(date-time)|false|none|none|
|» licenceExpiryDate|string(date-time)|false|none|none|
|» licenceIssuedDate|string(date-time)|false|none|none|
|» licenceNumber|string|false|none|none|
|» longTerm|boolean|false|none|none|
|» loyaltyLevel|string|false|none|none|
|» loyaltyMembershipTypeId|integer(int32)|false|none|none|
|» loyaltyNumber|string|false|none|none|
|» marketingOptOut|boolean|false|none|none|
|» membershipNumber|string|false|none|none|
|» mobile|string|false|none|none|
|» modifiedById|integer(int32)|false|none|none|
|» modifiedDate|string(date-time)|false|none|none|
|» nationalityId|integer(int32)|false|none|none|
|» notes|string|false|none|none|
|» numberOfVisits|integer(int32)|false|none|none|
|» otherName|string|false|none|none|
|» otaLoyaltyNumber|integer(int32)|false|none|none|
|» passportExpiry|string(date-time)|false|none|none|
|» passportId|string|false|none|none|
|» phoneAH|string|false|none|none|
|» PhoneBH|string|false|none|none|
|» phoneOptOut|boolean|false|none|none|
|» placeOfIssue|string|false|none|none|
|» position|string|false|none|none|
|» postcode|string|false|none|none|
|» preference|string|false|none|none|
|» preferredAreaGroupid|integer(int32)|false|none|none|
|» preferredAreaId|integer(int32)|false|none|none|
|» preferredPrintingLanguageId|integer(int32)|false|none|none|
|» privacyOptIn|boolean|false|none|none|
|» proceedingTo|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» propertyName|string|false|none|none|
|» registeredInCountry|boolean|false|none|none|
|» registrationAddress|string|false|none|none|
|» registrationDate|string(date-time)|false|none|none|
|» registrationNumber|string|false|none|none|
|» registrationOffice|string|false|none|none|
|» resTypeId|integer(int32)|false|none|none|
|» retailer|boolean|false|none|none|
|» rvLengthId|integer(int32)|false|none|none|
|» rvSlideId|integer(int32)|false|none|none|
|» rvTypeId|integer(int32)|false|none|none|
|» rvYear|integer(int32)|false|none|none|
|» salesPrioritiesId|integer(int32)|false|none|none|
|» smsOptOut|boolean|false|none|none|
|» state|string|false|none|none|
|» studentId|integer(int32)|false|none|none|
|» subResTypeId|integer(int32)|false|none|none|
|» subTitleId|integer(int32)|false|none|none|
|» tagId|integer(int32)|false|none|none|
|» title|string|false|none|none|
|» totalIncome|integer(decimal)|false|none|none|
|» towingId|integer(int32)|false|none|none|
|» town|string|false|none|none|
|» turnAwayId|integer(int32)|false|none|none|
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
|» vipCodesId|integer(int32)|false|none|none|
|» visitPurposeId|integer(int32)|false|none|none|
|» visaExpiry|string(date-time)|false|none|none|
|» visaIssued|string(date-time)|false|none|none|
|» visaIssuedPlace|string|false|none|none|
|» visaNumber|string|false|none|none|
|» webAddress|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchGuestsContracts

<a id="opIdsearchGuestsContracts"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/contracts/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/contracts/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    6548,
    2243,
    9879
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/contracts/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/contracts/search',
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

r = requests.post('https://restapi8.rmscloud.com/guests/contracts/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/contracts/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/contracts/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/contracts/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/contracts/search`

*Pass an array of guest Id's to retrieve the contracts associated with A Guest/Owner*

> Body parameter

```json
{
  "ids": [
    6548,
    2243,
    9879
  ]
}
```

<h3 id="searchguestscontracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[guestArraySearch](#schemaguestarraysearch)|true|The Guest id's to be passed in an array search|

> Example responses

> 200 Response

```json
[
  {
    "guestId": 564566,
    "contracts": [
      {
        "accountId": 64984,
        "areaId": 4,
        "categoryId": 4,
        "contractNumber": 265,
        "contractType": "Standard",
        "dwellingSalesNumber": 15,
        "ownedFromDate": "2018-09-26 10:25:00",
        "ownedToDate": "2020-09-26 10:25:00",
        "percentageShare": 100,
        "propertyId": 1
      }
    ]
  }
]
```

<h3 id="searchguestscontracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchguestscontracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestContracts](#schemaguestcontracts)]|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» contracts|[[guestContract](#schemaguestcontract)]|false|none|none|
|»» accountId|integer(int32)|false|none|none|
|»» areaId|integer(int32)|false|none|none|
|»» categoryId|integer(int32)|false|none|none|
|»» contractId|integer(int32)|false|none|none|
|»» contractType|string|false|none|none|
|»» dwellingSalesNumber|integer(int32)|false|none|none|
|»» ownedFromDate|string(date-time)|false|none|none|
|»» ownedToDate|string(date-time)|false|none|none|
|»» percentageShare|integer(int32)|false|none|none|
|»» propertyId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsCorrespondenceSignature

<a id="opIdgetGuestsCorrespondenceSignature"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/correspondenceSignature", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/correspondenceSignature`

*Retrieve the signature associated with A Guest from the guest portal*

<h3 id="getguestscorrespondencesignature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "caption": "Signature",
    "id": 5,
    "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
  }
]
```

<h3 id="getguestscorrespondencesignature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestscorrespondencesignature-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[correspondenceSignature](#schemacorrespondencesignature)]|false|none|none|
|» caption|string|false|none|none|
|» id|integer(int32)|false|none|none|
|» url:|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsImage

<a id="opIdgetGuestsImage"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/image \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/image HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/image',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/image',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/image', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/image', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/image");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/image", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/image`

*Retrieve the image associated with A Guest*

<h3 id="getguestsimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|expiry|query|string(date-time)|false|The expiry date you pass here will set the expirey dte/time against the link returned. (This time is set in UTC). Format example: "2020-02-25 00:00:00"|

> Example responses

> 200 Response

```json
[
  {
    "caption": "Bathroom",
    "displayOrder": 5,
    "url": "https://images.rmscloud.com/rmsoimages/6880/rmswin/rmsonlineimages/00000090.jpg"
  }
]
```

<h3 id="getguestsimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsimage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[image](#schemaimage)]|false|none|none|
|» caption|string|false|none|none|
|» displayOrder|integer(int32)|false|none|none|
|» url:|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsMealCard

<a id="opIdgetGuestsMealCard"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/mealCard \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/mealCard HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/mealCard',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/mealCard',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/mealCard', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/mealCard', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/mealCard");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/mealCard", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/mealCard`

*Retrieve a guests meal card information*

<h3 id="getguestsmealcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "id": 72,
    "cardId": "99986a",
    "companyId": 8,
    "expiryDate": "2018-09-25 17:25:00",
    "guestId": 11457,
    "mealsAllowed": "Both",
    "mealsCustom": "Breakfast",
    "propertyId": 1,
    "startingDate": "2018-08-25 17:25:00"
  }
]
```

<h3 id="getguestsmealcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsmealcard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[mealCard](#schemamealcard)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» guestId|integer|false|none|none|
|» mealsAllowed|string|false|none|none|
|» mealsCustom|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» startingDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## searchGuestsMealCard

<a id="opIdsearchGuestsMealCard"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/mealCard/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/mealCard/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "guestIds": [
    6548,
    2243,
    9879
  ],
  "dateFrom": "2019-01-01",
  "dateTo": "2021-08-01"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/mealCard/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/mealCard/search',
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

r = requests.post('https://restapi8.rmscloud.com/guests/mealCard/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/mealCard/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/mealCard/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/mealCard/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/mealCard/search`

*Pass an array of guest Id's to retrieve a guests meal card information*

> Body parameter

```json
{
  "guestIds": [
    6548,
    2243,
    9879
  ],
  "dateFrom": "2019-01-01",
  "dateTo": "2021-08-01"
}
```

<h3 id="searchguestsmealcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of records to skip before returning results|
|limit|query|integer|false|Limit the results to this number of records|
|body|body|[guestIdArraySearch](#schemaguestidarraysearch)|true|The Guest id's to be passed in an array search|

> Example responses

> 200 Response

```json
[
  {
    "id": 72,
    "cardId": "99986a",
    "companyId": 8,
    "expiryDate": "2018-09-25 17:25:00",
    "guestId": 11457,
    "mealsAllowed": "Both",
    "mealsCustom": "Breakfast",
    "propertyId": 1,
    "startingDate": "2018-08-25 17:25:00"
  }
]
```

<h3 id="searchguestsmealcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="searchguestsmealcard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[mealCard](#schemamealcard)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» cardId|string|false|none|none|
|» companyId|integer(int32)|false|none|none|
|» expiryDate|string(date-time)|false|none|none|
|» guestId|integer|false|none|none|
|» mealsAllowed|string|false|none|none|
|» mealsCustom|string|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» startingDate|string(date-time)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestSagePayToken

<a id="opIdaddGuestSagePayToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/sagePayToken \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/sagePayToken HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "relatedSecurityKey": "XXXXXXXXX",
  "relatedTxAuthno": "5555555555",
  "relatedVendorTxCode": "XXXPAYMENT-1556613026-815551635",
  "relatedVPSTxId": "9C7AC5AB-XXXX-XXXX-35B6-DECB9E946D59",
  "token": "erer78er9+er3er6r3fedfr"
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/sagePayToken',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/sagePayToken',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/sagePayToken', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/sagePayToken', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/sagePayToken");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/sagePayToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/sagePayToken`

*This call allows you to add a CC Token to be associated with a guest. In order to pass RMS a token you must create the token via the same payment gateway used by the property using the credentials they provide you. The guest must be associated with a reservation to assign it a token.*

> Body parameter

```json
{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "relatedSecurityKey": "XXXXXXXXX",
  "relatedTxAuthno": "5555555555",
  "relatedVendorTxCode": "XXXPAYMENT-1556613026-815551635",
  "relatedVPSTxId": "9C7AC5AB-XXXX-XXXX-35B6-DECB9E946D59",
  "token": "erer78er9+er3er6r3fedfr"
}
```

<h3 id="addguestsagepaytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestTokenSagePay](#schemaguesttokensagepay)|true|Token object that can be passed to create a sage pay token against a guest|

<h3 id="addguestsagepaytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestToken

<a id="opIdaddGuestToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/token \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/token HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "merchantReference": "AB12",
  "propertyId": 1,
  "token": "erer78er9+er3er6r3fedfr"
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/token',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/token',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/token', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/token', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/token");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/token`

*This call allows you to add a CC Token to be associated with a guest. In order to pass RMS a token you must create the token via the same payment gateway used by the property using the credentials they provide you. The guest must be associated with a reservation to assign it a token.*

> Body parameter

```json
{
  "cardHolderName": "John Johnson",
  "cardType": "VISA",
  "description": "Customers Wifes card",
  "expiryDate": "08/20",
  "lastFourDigitsOfCard": 4589,
  "merchantReference": "AB12",
  "propertyId": 1,
  "token": "erer78er9+er3er6r3fedfr"
}
```

<h3 id="addguesttoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestToken](#schemaguesttoken)|true|Token object that can be passed to create a token against a guest|

<h3 id="addguesttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addGuestTokenPreAuth

<a id="opIdaddGuestTokenPreAuth"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/token/preAuth \
  -H 'Content-Type: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/token/preAuth HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json

```

```javascript
const inputBody = '{
  "cardType": "Visa",
  "cardHolderName": "AD YEN",
  "expiryDate": "03/30",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB12",
  "token": "RMS_XXXXX",
  "propertyId": 1,
  "reservationId": 225540,
  "preAuthAmount": 120,
  "transactionReference": "XXXXXX"
}';
const headers = {
  'Content-Type':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/token/preAuth',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/token/preAuth',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/token/preAuth', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/token/preAuth', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/token/preAuth");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/token/preAuth", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/token/preAuth`

*This call allows you to add a pre-auth CC Token to be associated with a reservation. In order to pass RMS a token you must create the token via the same payment gateway used by the property using the credentials they provide you. The guest must be associated with a reservation to assign it a token.*

> Body parameter

```json
{
  "cardType": "Visa",
  "cardHolderName": "AD YEN",
  "expiryDate": "03/30",
  "lastFourDigitsOfCard": "0001",
  "merchantReference": "AB12",
  "token": "RMS_XXXXX",
  "propertyId": 1,
  "reservationId": 225540,
  "preAuthAmount": 120,
  "transactionReference": "XXXXXX"
}
```

<h3 id="addguesttokenpreauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestsTokenPreAuth](#schemagueststokenpreauth)|true|Token object that can be passed to add a pre-auth token against a reservation|

<h3 id="addguesttokenpreauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## enrollGuestNightsLoyalty

<a id="opIdenrollGuestNightsLoyalty"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment',
{
  method: 'POST',

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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/loyaltyNightsEnrollment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/loyaltyNightsEnrollment`

*Enroll a guest in the RMS loyalty by Nights program*

<h3 id="enrollguestnightsloyalty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 201 Response

```json
{
  "guestId": 155,
  "loyaltyNumber": "4569"
}
```

<h3 id="enrollguestnightsloyalty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|[guestsLoyaltyNightsEnrollment](#schemaguestsloyaltynightsenrollment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## enrollGuestSpendLoyalty

<a id="opIdenrollGuestSpendLoyalty"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment',
{
  method: 'POST',

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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/loyaltySpendEnrollment", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/loyaltySpendEnrollment`

*Enroll a guest in the RMS loyalty spend program*

<h3 id="enrollguestspendloyalty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 201 Response

```json
[
  {
    "guestId": 155,
    "address1": "15",
    "address2": "somthing rd",
    "given": "Steven",
    "surname": "Peters",
    "postCode": "3045",
    "town": "keilor",
    "state": "Vic",
    "mobile": 61458596548,
    "birthday": "2018-09-27 00:00:00",
    "email": "apisupport@rmscloud.com",
    "loyaltyNumber": "4569"
  }
]
```

<h3 id="enrollguestspendloyalty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|Inline|

<h3 id="enrollguestspendloyalty-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestLoyaltySpendEnrolment](#schemaguestloyaltyspendenrolment)]|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» address1|string|false|none|none|
|» address2|string|false|none|none|
|» given|string|false|none|none|
|» surname|string|false|none|none|
|» postCode|string|false|none|none|
|» town|string|false|none|none|
|» state|string|false|none|none|
|» mobile|string|false|none|none|
|» birthday|string(date-time)|false|none|none|
|» email|string|false|none|none|
|» loyaltyNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsLoyaltySpendHistory

<a id="opIdgetGuestsLoyaltySpendHistory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/loyaltySpendHistory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/loyaltySpendHistory`

*Retrieve a guests Loyalty Spend History information*

<h3 id="getguestsloyaltyspendhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "activity": "sign up credit",
    "amount": -25,
    "date": "2018-09-27",
    "description": "Credit note 2",
    "totalSpendForCalanderYear": 12632,
    "username": "*hp"
  }
]
```

<h3 id="getguestsloyaltyspendhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsloyaltyspendhistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestLoyaltySpend](#schemaguestloyaltyspend)]|false|none|none|
|» activity|string|false|none|none|
|» amount|number|false|none|none|
|» date|string(date-time)|false|none|none|
|» description|string|false|none|none|
|» totalSpendForCalanderYear|number|false|none|none|
|» username|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsLoyaltySpendBalance

<a id="opIdgetGuestsLoyaltySpendBalance"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/loyaltySpendBalance", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/loyaltySpendBalance`

*Retrieve a guests meal card information*

<h3 id="getguestsloyaltyspendbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "guestId": 150595,
    "loyaltyNumber": 150595,
    "currentCredit": 0,
    "currentSpend": 0,
    "remainingSpend": 1818.5
  }
]
```

<h3 id="getguestsloyaltyspendbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsloyaltyspendbalance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestLoyaltySpendBalance](#schemaguestloyaltyspendbalance)]|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» loyaltyNumber|integer(int32)|false|none|none|
|» currentCredit|number(currency)|false|none|none|
|» currentSpend|number(currency)|false|none|none|
|» remainingSpend|number(currency)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsgiftcards

<a id="opIdgetGuestsgiftcards"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/giftcards?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/giftcards?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/giftcards?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/giftcards',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/giftcards', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/giftcards', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/giftcards?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/giftcards", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/giftcards`

*Retrieve a guests gift card information*

<h3 id="getguestsgiftcards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "amount": 10,
    "giftCardId": 2,
    "guestId": 150595,
    "propertId": 1,
    "remainingAmount": 5
  }
]
```

<h3 id="getguestsgiftcards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsgiftcards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestGiftCard](#schemaguestgiftcard)]|false|none|none|
|» amount|integer(number)|false|none|none|
|» giftCardId|integer(int32)|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» propertId|integer(int32)|false|none|none|
|» remainingAmount|integer(number)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## guestCreditSearch

<a id="opIdguestCreditSearch"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/guestCredit/search \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/guestCredit/search HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "ids": [
    141029,
    149503,
    150595
  ],
  "propertId": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/guestCredit/search',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/guestCredit/search',
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

r = requests.post('https://restapi8.rmscloud.com/guests/guestCredit/search', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/guestCredit/search', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/guestCredit/search");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/guestCredit/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/guestCredit/search`

*Pass an array of guestsIds for guests credit information*

> Body parameter

```json
{
  "ids": [
    141029,
    149503,
    150595
  ],
  "propertId": 1
}
```

<h3 id="guestcreditsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[guestCreditSearch](#schemaguestcreditsearch)|true|Pass an array of guestsIds for guests credit information|

> Example responses

> 200 Response

```json
[
  {
    "propertyId": 1,
    "guestId": 141029,
    "amount": 7,
    "remainingAmount": 7,
    "description": "Receipt #283826",
    "accountId": 386,
    "transactionId": 11
  }
]
```

<h3 id="guestcreditsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="guestcreditsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestCreditSearchResponse](#schemaguestcreditsearchresponse)]|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» amount|integer(int32)|false|none|none|
|» remainingAmount|integer(int32)|false|none|none|
|» description|string|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» transactionId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsCreditBalance

<a id="opIdgetGuestsCreditBalance"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/guestCredit?propertyId=0 \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/guestCredit?propertyId=0 HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/guestCredit?propertyId=0',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/guestCredit',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/guestCredit', params={
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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/guestCredit', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/guestCredit?propertyId=0");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/guestCredit", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/guestCredit`

*Retrieve a guests credit information*

<h3 id="getguestscreditbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|propertyId|query|integer(int32)|true|Only records referencing this property ID will be returned|

> Example responses

> 200 Response

```json
[
  {
    "accountId": 346613,
    "amount": -50,
    "description": "Credit Note 2022",
    "guestId": 150595,
    "propertId": 1,
    "remainingAmount": -50,
    "transactionId": 223
  }
]
```

<h3 id="getguestscreditbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestscreditbalance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestCredit](#schemaguestcredit)]|false|none|none|
|» accountId|integer(int32)|false|none|none|
|» amount|integer(number)|false|none|none|
|» description|string|false|none|none|
|» guestId|integer(int32)|false|none|none|
|» propertyId|integer(int32)|false|none|none|
|» remainingAmount|integer(number)|false|none|none|
|» transactionId|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getGuestsMembrshipById

<a id="opIdgetGuestsMembrshipById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/guests/{id}/memberships \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/guests/{id}/memberships HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/memberships',
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

result = RestClient.get 'https://restapi8.rmscloud.com/guests/{id}/memberships',
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

r = requests.get('https://restapi8.rmscloud.com/guests/{id}/memberships', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/guests/{id}/memberships', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/memberships");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/guests/{id}/memberships", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /guests/{id}/memberships`

*Get list of memberships for a guest*

<h3 id="getguestsmembrshipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|

> Example responses

> 200 Response

```json
[
  {
    "guestId": 1384706,
    "id": 38824,
    "inactive": false,
    "level": 1,
    "membershipTypeId": 2,
    "membershipTypeName": "",
    "number": "ABC123"
  }
]
```

<h3 id="getguestsmembrshipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getguestsmembrshipbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[guestMembershipBasic](#schemaguestmembershipbasic)]|false|none|[Used:<br>GET /guests/{id}/memberships<br>POST /guests/{id}/memberships<br>]|
|» guestId|integer(int32)|false|none|none|
|» id|integer(int32)|false|none|none|
|» inactive|boolean|false|none|none|
|» level|integer(int32)|false|none|none|
|» membershipTypeId|integer(int32)|false|none|none|
|» membershipTypeName|string|false|none|none|
|» number|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## createAGuestMembership

<a id="opIdcreateAGuestMembership"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://restapi8.rmscloud.com/guests/{id}/memberships \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
POST https://restapi8.rmscloud.com/guests/{id}/memberships HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/memberships',
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

result = RestClient.post 'https://restapi8.rmscloud.com/guests/{id}/memberships',
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

r = requests.post('https://restapi8.rmscloud.com/guests/{id}/memberships', headers = headers)

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
    $response = $client->request('POST','https://restapi8.rmscloud.com/guests/{id}/memberships', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/memberships");
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
    req, err := http.NewRequest("POST", "https://restapi8.rmscloud.com/guests/{id}/memberships", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /guests/{id}/memberships`

*Create Guest Membership info associated with an Guest*

> Body parameter

```json
{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}
```

<h3 id="createaguestmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|body|body|[guestMembershipBasic](#schemaguestmembershipbasic)|true|Guest Membership object that can be passed to create a Membership against a guest|

> Example responses

> 201 Response

```json
{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}
```

<h3 id="createaguestmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|[guestMembershipBasic](#schemaguestmembershipbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateAGuestMembership

<a id="opIdupdateAGuestMembership"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
PUT https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId} HTTP/1.1
Host: restapi8.rmscloud.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}',
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

result = RestClient.put 'https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}',
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

r = requests.put('https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}', headers = headers)

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
    $response = $client->request('PUT','https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}");
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
    req, err := http.NewRequest("PUT", "https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /guests/{id}/memberships/{membershipId}`

*Update Guest Membership info associated with an Guest*

> Body parameter

```json
{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}
```

<h3 id="updateaguestmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|membershipId|path|integer(int32)|true|The Id of the membership record|
|body|body|[guestMembershipBasic](#schemaguestmembershipbasic)|true|Guest Membership object that can be passed to create a Membership against a guest|

> Example responses

> 201 Response

```json
{
  "guestId": 1384706,
  "id": 38824,
  "inactive": false,
  "level": 1,
  "membershipTypeId": 2,
  "membershipTypeName": "",
  "number": "ABC123"
}
```

<h3 id="updateaguestmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|successful operation|[guestMembershipBasic](#schemaguestmembershipbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## deleteGuestsMembership

<a id="opIddeleteGuestsMembership"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId} \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
DELETE https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId} HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}',
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
  'Accept' => 'application/json',
  'authtoken' => 'API_KEY'
}

result = RestClient.delete 'https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}',
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

r = requests.delete('https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}', headers = headers)

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
    $response = $client->request('DELETE','https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}");
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
        "Accept": []string{"application/json"},
        "authtoken": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://restapi8.rmscloud.com/guests/{id}/memberships/{membershipId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /guests/{id}/memberships/{membershipId}`

*Delete a guests membership*

<h3 id="deleteguestsmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The Id of the relevant record|
|membershipId|path|integer(int32)|true|The Id of the membership record|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deleteguestsmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[successResult](#schemasuccessresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## getRoles

<a id="opIdgetRoles"></a>

> Code samples

```shell
# You can also use wget
curl -X GET https://restapi8.rmscloud.com/roles \
  -H 'Accept: application/json' \
  -H 'authtoken: API_KEY'

```

```http
GET https://restapi8.rmscloud.com/roles HTTP/1.1
Host: restapi8.rmscloud.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'authtoken':'API_KEY'
};

fetch('https://restapi8.rmscloud.com/roles',
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

result = RestClient.get 'https://restapi8.rmscloud.com/roles',
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

r = requests.get('https://restapi8.rmscloud.com/roles', headers = headers)

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
    $response = $client->request('GET','https://restapi8.rmscloud.com/roles', array(
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
URL obj = new URL("https://restapi8.rmscloud.com/roles");
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
    req, err := http.NewRequest("GET", "https://restapi8.rmscloud.com/roles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /roles`

*Retrieve a list of Roles*

<h3 id="getroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limit the results to this number of records|
|offset|query|integer|false|The number of records to skip before returning results|

> Example responses

> 200 Response

```json
[
  [
    {
      "id": 1,
      "description": "Capitain"
    },
    {
      "id": 2,
      "description": "Crew"
    },
    {
      "id": 3,
      "description": "Cleaners"
    }
  ]
]
```

<h3 id="getroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[roles](#schemaroles)]|false|none|none|
|» id|integer(int32)|false|none|none|
|» description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

