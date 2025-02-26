var dataset = [
                {Like:0.1,Dislike:0.8,Category:"0"},
               {Like:0.2,Dislike:0.3,Category:"0"},
               {Like:0.3,Dislike:0.2,Category:"0"},
               {Like:0.1,Dislike:0.8,Category:"0"},
               {Like:0.3,Dislike:0.2,Category:"1"},
               {Like:0.3,Dislike:0.6,Category:"1"},
               {Like:0.8,Dislike:0.4,Category:"1"},
               {Like:0.2,Dislike:0.2,Category:"1"},
               {Like:0.2,Dislike:0.2,Category:"1"},
               {Like:0.2,Dislike:0.2,Category:"1"},
               {Like:0.8,Dislike:0.4,Category:"2"},
               {Like:0.2,Dislike:0.2,Category:"2"},
               {Like:0.2,Dislike:0.2,Category:"2"},
               {Like:0.2,Dislike:0.2,Category:"2"},
               {Like:0.4,Dislike:0.2,Category:"2"},
               {Like:0.4,Dislike:0.1,Category:"2"},
               {Like:0.3,Dislike:0.6,Category:"2"},
               {Like:0.2,Dislike:0.2,Category:"2"},
               {Like:0.4,Dislike:0.5,Category:"3"},
               {Like:0.3,Dislike:0.6,Category:"3"},
               {Like:0.8,Dislike:0.4,Category:"3"},
               {Like:0.5,Dislike:0.2,Category:"3"},      
               {Like:0.2,Dislike:0.2,Category:"3"},
               {Like:0.2,Dislike:0.2,Category:"3"},
               {Like:0.4,Dislike:0.2,Category:"3"},
               {Like:0.4,Dislike:0.7,Category:"3"},
               {Like:0.3,Dislike:0.6,Category:"4"},
               {Like:0.3,Dislike:0.3,Category:"4"},
               {Like:0.3,Dislike:0.6,Category:"4"},
               {Like:0.8,Dislike:0.2,Category:"4"},
               {Like:0.2,Dislike:0.2,Category:"4"},
               {Like:0.4,Dislike:0.2,Category:"4"},
               {Like:0.2,Dislike:0.3,Category:"4"},
               {Like:0.3,Dislike:0.2,Category:"5"},
               {Like:0.1,Dislike:0.8,Category:"5"},
               {Like:0.3,Dislike:0.2,Category:"5"},
               {Like:0.3,Dislike:0.6,Category:"5"},
               {Like:0.8,Dislike:0.4,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.8,Dislike:0.4,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.4,Dislike:0.2,Category:"5"},
               {Like:0.4,Dislike:0.1,Category:"5"},
               {Like:0.3,Dislike:0.6,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.4,Dislike:0.5,Category:"5"},
               {Like:0.3,Dislike:0.6,Category:"5"},
               {Like:0.8,Dislike:0.4,Category:"5"},
               {Like:0.5,Dislike:0.2,Category:"5"},      
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.2,Dislike:0.2,Category:"5"},
               {Like:0.4,Dislike:0.2,Category:"5"},
               {Like:0.4,Dislike:0.7,Category:"6"},
               {Like:0.3,Dislike:0.6,Category:"6"},
               {Like:0.3,Dislike:0.3,Category:"6"},
               {Like:0.3,Dislike:0.6,Category:"6"},
               {Like:0.8,Dislike:0.2,Category:"6"},
               {Like:0.2,Dislike:0.2,Category:"6"},
               {Like:0.4,Dislike:0.2,Category:"6"},
               {Like:0.2,Dislike:0.3,Category:"6"},
               {Like:0.3,Dislike:0.2,Category:"6"}
              ];
    //[0.1, 0.2, 0.5 , 0.9, 0.2, 0.4, 0.5];

var svgWidth = 360, svgHeight = 300, barPadding = 0;



var barWidth = (svgWidth / dataset.length); //an angle for an element


var svg = d3.select('svg')
  .attr('width',svgHeight)
  .attr('height',svgHeight);
 // .attr('transform','translate(100,0)');


var yScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, svgHeight]);

var LikeBars = svg.append('g').attr('class','Likebar');
var DislikeBars = svg.append('g').attr('class','Dislikebar');
var categoryArcs = svg.append('g').attr('class','Categories');

var barChart_n = DislikeBars.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d){
    return svgHeight - yScale(d.Dislike)
  })
  .attr('height', function(d){
    return  yScale(d.Dislike);
  })
  .attr('width', barWidth - barPadding)
  .attr('class','Dislikebar')
  .attr('transform', function(d,i){
    var translate = [barWidth * i, 0];
    var rot = barWidth * i;
    var height = svgHeight/2;
    return "translate("+height+","+height+")rotate("+rot+")scale(0.3)";
  })

;

var barChart_p = LikeBars.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d){
    return svgHeight+5 // 5 for gap between pos and neg graph
  })
  .attr('height', function(d){
    return  yScale(d.Like);
  })
  .attr('width', barWidth - barPadding)
  .attr('class','Likebar')
  .attr('transform', function(d,i){
    var translate = [barWidth * i, 0];
        var rot = barWidth * i;
    var height = svgHeight/2;
    return "translate("+height+","+height+")rotate("+rot+")scale(0.3)";
  });
