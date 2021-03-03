var userId = '615856';
var apiKey = '4833e72955dc35aaff5f4cfb7e886220';
var data = 'JSON Request Data';
var request = $.ajax({
    url: "https://json.astrologyapi.com/v1/" + api,
    method: "POST",
    dataType: 'json',
    headers: {
        "authorization": "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": 'application/json'
    },
    data: JSON.stringify(data)
});
// Returns a response
return (request.then(function (resp) {
    return resp;
}, function (err) {
    return err;
}));