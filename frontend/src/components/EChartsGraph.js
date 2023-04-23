import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// import graphData from '../data/test.json';
import graphData from '../data/sample1.json';

const EChartsGraph = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

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
                    name: 'Les Miserables',
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
    }, []);

    return <div id="main" ref={chartRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default EChartsGraph;