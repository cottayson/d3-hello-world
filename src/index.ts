import * as d3 from 'd3';

function createSVG() {
  const size = { x: 200, y: 100 };

  let svg = d3.create('svg');
  svg.attr("width", size.x);
  svg.attr("height", size.y);
  svg.attr("fill", "red");
  svg.append("circle")
    .attr("cx", 10)
    .attr("cy", 10)
    .attr("r", 5);
    // .attr("fill", "red"); // circle inherit this attribute from svg
  svg.append("line")
    .attr("x1", 0)
    .attr("y1", 50)
    .attr("x2", size.x)
    .attr("y2", 49)
    .attr("stroke", "#0f0");

  for (let dx = 0; dx < size.x; dx += 20) {
    svg.append("rect")
      .attr("x", dx)
      .attr("y", 48 - ~~(Math.random() * 50))
      .attr("width", 10)
      .attr("height", 2)
      .attr("fill", "#0ff");
  }

  svg.style('border', 'dashed red 1px');
  svg.style('background-color', '#fff');
  d3.select('body').style('background-color', '#af0')
  
  // add svg element to body using d3 library
  d3.select('body').append(() => svg.node());

  // without d3
  // const n = svg.node();
  // if (n !== null) {
  //   document.body.appendChild(n);
  // }
  return svg;
}

window.addEventListener('load', () => {
  let elem = document.createElement('div');
  elem.innerText = "Hello Typescript!";
  document.body.appendChild(elem);
  const svg = createSVG();

  let myData = ['A', 'B', 'C'];
  let div1 = d3.select('body').append('div');
  div1.selectAll('div')
    .data(myData)
    .enter()
    .append('div');

  // svg.selectAll('circle')
  //   .data([0, 1, 2])
  //   .enter()
    // .join(
    //   enter => enter.append('circle'),
    //   update => update,
    //   exit => exit.remove()
    // )

});
