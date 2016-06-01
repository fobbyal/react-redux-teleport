# Tracker data analysis prototype

# D3 notes
* svg uses .attr instead of css style propety for width ,height, x and y
* chained .enter does not update data. only creates new data if it's not there. It will leave stale data in the graph
Eample for only creating data
```javascript
      svg.selectAll('rect')
        .data(d) 
        .enter()
        .append('rect')
        .attr('x',scale)
        .attr('y',50)
        .attr('width',20)
        .attr('height',20)
        .attr('fill',color);
```
Eample for updating data
```javascript 
      const baseComponent=svg.selectAll('rect')
        .data(d);

      //Enter phase: to create all elemnts with all static attributes set
      baseComponent
        .enter()
        .append('rect')
        .attr('y',50)
        .attr('width',20)
        .attr('height',20);

      //Update phase: to update each element with the upadted data
      baseComponent.attr('x',scale)
        .attr('fill',color);
      //Exit Phase: remove elements that are not specificed in d
      baseComponent.exit().remove();
```
* Rule of thumb is that to setup staic attributes in enter phase and to update variable data with the update phase

