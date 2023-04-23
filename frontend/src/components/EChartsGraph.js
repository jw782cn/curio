import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
// import graphData from '../data/test.json';
// import graphData from '../data/sample1.json';

const EChartsGraph = () => {
    const chartRef = useRef(null);
    const [graphData, setGraphData] = useState(null);


    const fetchGraphData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/create_graph', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic: 'finance' }),
          });
    
          const graphResponse = await fetch('http://127.0.0.1:5000/get_graph', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "graph_id" : "0" }),
          });
    
          const graphData = await graphResponse.json();
          console.log('graphData', graphData);
          setGraphData(graphData);
        } catch (error) {
          console.error('Error fetching graph data:', error);
        }
      };

    useEffect(() => {
        fetchGraphData();
    }, []);

    useEffect(() => {
        if (!chartRef.current || !graphData) return;

        const myChart = echarts.init(chartRef.current);

        myChart.showLoading();
        // Use the imported JSON data directly
        const graph = graphData;
        myChart.hideLoading();
        const option = {
            tooltip: {},
            legend: [
                {
                    data: graph.categories.map(function (a) {
                        return a.name;
                    }),
                },
            ],
            series: [
                {
                    name: 'Finance',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                    },
                    labelLayout: {
                        hideOverlap: true,
                    },
                    scaleLimit: {
                        min: 0.4,
                        max: 2,
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3,
                    },
                },
            ],
        };
        myChart.setOption(option);
    }, [graphData]);

    return <div id="main" ref={chartRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default EChartsGraph;