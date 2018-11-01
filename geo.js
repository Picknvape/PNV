var getLocationButton = document.getElementById('get-location-button');
var prevCountry = null;

getLocationButton.addEventListener('click', RequestLocation);

let countryData = {};

function RequestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(PositionRequestOK);
  } else {
    // Если гонять иннертекст или текстконтент, меняется чайлд
    getLocationButton.childNodes[0].nodeValue = "❌ Service down. Try entering manually";
  }
}
var countryButtons = document.getElementsByName('country');

function PositionRequestOK(position) {
  loadJSON("https://geocode-maps.yandex.ru/1.x/?format=json&lang=en_US&geocode=" + position.coords.longitude + "," + position.coords.latitude, function(data) {
        let response = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address;
        console.log(response.Components[0].name);
        let countryFound = false;
        for (i = 0; i < countryButtons.length; i++) {
          console.log((response.Components[0].name.toLowerCase()).replace([ ], '') + ' vs ' + countryButtons[i].value.toLowerCase())
          if (response.Components[0].name.toLowerCase().replace(/[ ]/g, '') == countryButtons[i].value.toLowerCase()) {
          countryFound = true;
          countryButtons[i].checked = true;
        }
      }
      if (countryFound) {
        document.getElementById('address-input').value = response.formatted;
        document.getElementById('zip-code-input').value = response.postal_code;
        countryData.country = response.Components[0].name;
        // индекс работает не всегда (скорее, работает иногда)
        countryData.zip = response.postal_code;
        countryData.address = response.formatted;
        reflectChoiceOnMap();

      } else if (response.country_code == 'RU' || response.country_code == 'BY') {
        getLocationButton.childNodes[0].nodeValue = "Seems like you're in " + response.Components[0].name + ". Click to visit local version of Pick&Vape or enter european address manually.";
        getLocationButton.removeEventListener('click', RequestLocation);
        getLocationButton.addEventListener('click', function() {
          window.open('https:\\picknvape.ru','_blank');
        }, false);
      } else {
        //cleanup, just for development
        document.getElementById('address-input').value = response.formatted;
        document.getElementById('zip-code-input').value = response.postal_code;
        console.log(response.postal_code);
        countryData.country = response.country_code;
        countryData.zip = response.postal_code;
        countryData.address = response.formatted;
        //

        getLocationButton.childNodes[0].nodeValue = "❓ Seems you're not in Europe. Try again or enter european address manually";
      }
    },
    function() {
      console.log('error');
    });

}

function GetCountryData() {
  //countryData.country = response.country_code;
  countryData.zip = document.getElementById('zip-code-input').value
  countryData.address = document.getElementById('address-input').value;
  countryData.country
  countryRadioList = document.getElementsByName('country');
  for (let i = 0; i < countryRadioList.length; i++) {
    if (countryRadioList[i].checked) {
      countryData.country = countryRadioList[i].value;
      return countryData;
    }
  }
  console.log(countryData);
  return countryData;
}

function loadJSON(filePath, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", filePath, true);
  xhr.send();
}

function reflectChoiceOnMap() {
  let countryToLightUp = '';
  let map = document.getElementsByName('country');
  for (let i = 0; i < map.length; i++) {
    if (map[i].checked) {
      countryToLightUp = map[i].value;
    }
  }
  if (prevCountry != countryToLightUp) {
    console.log(countryToLightUp + " new!");
    document.getElementById('path-' + countryToLightUp.toLowerCase()).classList.add('checked');
    if (prevCountry != null) {
      document.getElementById('path-' + prevCountry.toLowerCase()).classList.remove('checked');
    }
  }
  prevCountry = countryToLightUp;
}
