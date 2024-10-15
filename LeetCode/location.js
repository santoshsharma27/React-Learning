if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lattitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(lattitude, longitude);
    },
    function () {
      alert("Could not get your current position");
    }
  );
}
