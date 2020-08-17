function changeRadius() {
  let square = document.getElementById('square')
  let value = document.getElementById('radiusValue').value

  square.style.borderRadius = `${value}px`
}

function changeBorder() {
  let square = document.getElementById('square')
  let borderValue = document.getElementById('borderValue').value
  let borderColor = document.getElementById('borderColor').value

  square.style.border = `${borderValue}px solid ${borderColor}`
}

function changeColor() {
  let square = document.getElementById('square')
  let color = document.getElementById('squareColor').value

  square.style.backgroundColor = `${color}`
}

function changeWidth() {
  let square = document.getElementById('square')
  let value = document.getElementById('widthValue').value

  square.style.width = `${value}px`
}

function changeHeight() {
  let square = document.getElementById('square')
  let value = document.getElementById('heightValue').value

  square.style.height = `${value}px`
}

function changeText() {
  let square = document.getElementById('square')
  let value = document.getElementById('textValue').value

  square.innerHTML = value
}

function changeTextColor() {
  let square = document.getElementById('square')
  let value = document.getElementById('textColor').value

  square.style.color = `${value}`

}