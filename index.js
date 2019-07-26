var nasa_key = "FDgeoE9W3TcXDfpVHOG2jvf59D1BHbaNyulJ6ITg"

function apiRequest(){
  var api_url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`
  // console.log(api_url)

  fetch(api_url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      //console.log(json);
      // console.log(json["data"][0]["images"]["fixed_height"]["url"])
      //var img = document.createElement("img");
      // img.src=json["image"]
      // console.log(img)
      //document.body.appendChild(img)
      // console.log(json["copyright"])
      var copyright = document.createElement("p")
      copyright.setAttribute("class", "fish")
      copyright.innerText = "Copyrighted by "+json["copyright"]
      document.body.appendChild(copyright)

      var date = document.createElement("p")
      date.setAttribute("class", "fish")
      date.innerText = "Accesed on "+json["date"]
      document.body.appendChild(date)

      var explanation = document.createElement("p")
      explanation.setAttribute("class", "fish")
      explanation.innerText = "Picture Explanation: "+json["explanation"]
      document.body.appendChild(explanation)

      var image = document.createElement("img")
      image.src=json["hdurl"]
      document.body.appendChild(image)

      var media_type = document.createElement("p")
      media_type.setAttribute("class", "fish")
      media_type.innerText = "Type of media: "+json["media_type"]
      document.body.appendChild(media_type)

      var service = document.createElement("p")
      service.setAttribute("class", "fish")
      service.innerText = "Service Version: "+json["service_version"]
      document.body.appendChild(service)

      var title = document.createElement("p")
      title.setAttribute("class", "fish")
      title.innerText = "Image Title: "+json["title"]
      document.body.appendChild(title)

      var url = document.createElement("p")
      url.setAttribute("class", "fish")
      url.innerText = "URL: "+json["url"]
      document.body.appendChild(url)


    })
}
apiRequest()

//document.getElementsByTagName("p").style.color = "0C4E9A"
