var Canvas = document.getElementById("canvas")
var draw = Canvas.getContext("2d")
draw.beginPath()
draw.strokeStyle = "grey"
draw.lineWidth = 1
draw.rect(150,143,430,200)
draw.stroke()
draw.beginPath()
draw.strokeStyle = "black"
draw.lineWidth = 5
draw.arc(250,210,40,0,2*Math.PI)
draw.stroke()
draw.beginPath()
draw.strokeStyle = "blue"
draw.lineWidth = 5
draw.arc(350,210,40,0,2*Math.PI)
draw.stroke()
draw.beginPath()
draw.strokeStyle = "red"
draw.lineWidth = 5
draw.arc(450,210,40,0,2*Math.PI)
draw.stroke()
draw.beginPath()
draw.strokeStyle = "orange"
draw.lineWidth = 5
draw.arc(300,250,40,0,2*Math.PI)
draw.stroke()
draw.beginPath()
draw.strokeStyle = "green"
draw.lineWidth = 5
draw.arc(400,250,40,0,2*Math.PI)
draw.stroke()
function clear(){
    draw.clearRect(0,0,800,800)
}