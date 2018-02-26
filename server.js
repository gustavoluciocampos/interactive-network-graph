var express = require('express');
var D3Node = require('d3-node');
var app = express();

app.get('/', function (req, res) {
  res.send(generateSVG());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function generateSVG() {
    /*const options = { selector: '#chart', container: '<div id="container"><div id="chart"></div></div>' }
    const d3n = new D3Node(options) // initializes D3 with container element
    const d3 = d3n.d3
    d3.select(d3n.document.querySelector('#chart')).append('span') // insert span tag into #chart
    return d3n.html();   // output: <html><body><div id="container"><div id="chart"><span></span></div></div></body></html>
     // d3n.chartHTML()   // output: <div id="chart"><span></span></div>*/
     const d3n = new D3Node({styles:'.test {fill:#000;}'})
    d3n.createSVG().append('g')
    return d3n.svgString()
}

