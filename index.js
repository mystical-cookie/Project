function myFunction(e) {
    var length = 8,
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
retVal += charset.charAt(Math.floor(Math.random() * n));
}
  document.getElementById("fname").value = retVal;
  e.preventDefault()
 
}