var dataset = [
  { Like: 0.1, Dislike: 0.8, Category: "0" },
  { Like: 0.2, Dislike: 0.3, Category: "0" },
  { Like: 0.3, Dislike: 0.2, Category: "0" },
  { Like: 0.1, Dislike: 0.8, Category: "0" },
  { Like: 0.3, Dislike: 0.2, Category: "1" },
  { Like: 0.3, Dislike: 0.6, Category: "1" },
  { Like: 0.8, Dislike: 0.4, Category: "1" },
  { Like: 0.2, Dislike: 0.2, Category: "1" },
  { Like: 0.2, Dislike: 0.2, Category: "1" },
  { Like: 0.2, Dislike: 0.2, Category: "1" },
  { Like: 0.8, Dislike: 0.4, Category: "2" },
  { Like: 0.2, Dislike: 0.2, Category: "2" },
  { Like: 0.2, Dislike: 0.2, Category: "2" },
  { Like: 0.2, Dislike: 0.2, Category: "2" },
  { Like: 0.4, Dislike: 0.2, Category: "2" },
  { Like: 0.4, Dislike: 0.1, Category: "2" },
  { Like: 0.3, Dislike: 0.6, Category: "2" },
  { Like: 0.2, Dislike: 0.2, Category: "2" },
  { Like: 0.4, Dislike: 0.5, Category: "3" },
  { Like: 0.3, Dislike: 0.6, Category: "3" },
  { Like: 0.8, Dislike: 0.4, Category: "3" },
  { Like: 0.5, Dislike: 0.2, Category: "3" },
  { Like: 0.2, Dislike: 0.2, Category: "3" },
  { Like: 0.2, Dislike: 0.2, Category: "3" },
  { Like: 0.4, Dislike: 0.2, Category: "3" },
  { Like: 0.4, Dislike: 0.7, Category: "3" },
  { Like: 0.3, Dislike: 0.6, Category: "4" },
  { Like: 0.3, Dislike: 0.3, Category: "4" },
  { Like: 0.3, Dislike: 0.6, Category: "4" },
  { Like: 0.8, Dislike: 0.2, Category: "4" },
  { Like: 0.2, Dislike: 0.2, Category: "4" },
  { Like: 0.4, Dislike: 0.2, Category: "4" },
  { Like: 0.2, Dislike: 0.3, Category: "4" },
  { Like: 0.3, Dislike: 0.2, Category: "5" },
  { Like: 0.1, Dislike: 0.8, Category: "5" },
  { Like: 0.3, Dislike: 0.2, Category: "5" },
  { Like: 0.3, Dislike: 0.6, Category: "5" },
  { Like: 0.8, Dislike: 0.4, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.8, Dislike: 0.4, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.4, Dislike: 0.2, Category: "5" },
  { Like: 0.4, Dislike: 0.1, Category: "5" },
  { Like: 0.3, Dislike: 0.6, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.4, Dislike: 0.5, Category: "5" },
  { Like: 0.3, Dislike: 0.6, Category: "5" },
  { Like: 0.8, Dislike: 0.4, Category: "5" },
  { Like: 0.5, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.2, Dislike: 0.2, Category: "5" },
  { Like: 0.4, Dislike: 0.2, Category: "5" },
  { Like: 0.4, Dislike: 0.7, Category: "6" },
  { Like: 0.3, Dislike: 0.6, Category: "6" },
  { Like: 0.3, Dislike: 0.3, Category: "6" },
  { Like: 0.3, Dislike: 0.6, Category: "6" },
  { Like: 0.8, Dislike: 0.2, Category: "6" },
  { Like: 0.2, Dislike: 0.2, Category: "6" },
  { Like: 0.4, Dislike: 0.2, Category: "6" },
  { Like: 0.2, Dislike: 0.3, Category: "6" },
  { Like: 0.3, Dislike: 0.2, Category: "6" },
];

var svgWidth = 360, svgHeight = 300, barPadding = 0;
var barWidth = svgWidth / dataset.length;

var svg = d3.select('svg')
  .attr('width', svgHeight)
  .attr('height', svgHeight);

var yScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, svgHeight]);

var LikeBars = svg.append('g').attr('class', 'Likebar');
var DislikeBars = svg.append('g').attr('class', 'Dislikebar');
var categoryArcs = svg.append('g').attr('class', 'Categories');

function updateData() {
  dataset.forEach(function (d) {
    d.Like = Math.max(0, Math.min(1, d.Like + (Math.random() - 0.5) * 0.1));
    d.Dislike = Math.max(0, Math.min(1, d.Dislike + (Math.random() - 0.5) * 0.1));
  });
}

function updateChart() {
    updateData(); //update data 

  // Data join for dislike bars
  var barChart_n = DislikeBars.selectAll('rect').data(dataset);

    // Exit
    barChart_n.exit().remove();

    // Enter + Update
    barChart_n.enter()
    .append('rect')
    .merge(barChart_n)
    .transition()
    .duration(1000) 
    .attr('y', function(d){
        return svgHeight - yScale(d.Dislike);
    })
    .attr('height', function(d){
      return  yScale(d.Dislike);
    })
    .attr('width', barWidth - barPadding)
    .attr('class','Dislikebar')
    .attr('transform', function(d,i){
      var height = svgHeight/2;
      return "translate("+height+","+height+")rotate("+(barWidth * i)+")scale(0.3)";
    });

  // Data join for like bars
  var barChart_p = LikeBars.selectAll('rect').data(dataset);
  
    // Exit
    barChart_p.exit().remove();

    // Enter + Update
    barChart_p.enter()
      .append('rect')
      .merge(barChart_p)
      .transition()
      .duration(1000)
      .attr('y', function(d){
        return svgHeight+5;
      })
      .attr('height', function(d){
        return  yScale(d.Like);
      })
      .attr('width', barWidth - barPadding)
      .attr('class','Likebar')
      .attr('transform', function(d,i){
        var height = svgHeight/2;
        return "translate("+height+","+height+")rotate("+(barWidth * i)+")scale(0.3)";
      });
}
// initial Draw
updateChart();

// Update chart every 2 seconds
setInterval(updateChart, 2000);
