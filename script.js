function toggleMode() {
  const html = document.documentElement.classList

  // uma forma de fazer uma condicional
  //if (html.classList.contains("light")) {
  // html.remove("light")
  //} else {
  // html.add("light")
  //}

  // outra forma de fazer 
  html.toggle("light")
}
