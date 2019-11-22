/**
 * cell-chart
 *
 * @file 生成对应图表类型的option
 * @author 王崧
 */

/**
 * 生成线性图表option
 * @param data 元数据
 */
export function getLineOptions(data) {
    const xAxis = data.dims;
    const legend = data.datasource.map(item => item[0]);
    const series = data.datasource.map(item => {
        return {
            name: item[0],
            type: 'line',
            stack: '总量',
            data: item.slice(1, item.length)
        }
    });

    const options = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis
        },
        yAxis: {
            type: 'value'
        },
        series: series
    };
    return options;
}

/**
 * 生成柱状图表option
 * @param data 元数据
 */
export function getBarOptions(data) {
    const xAxis = data.dims;
    const legend = data.datasource.map(data => data[0]);
    const series = data.datasource.map(data => {
        return {
            name: data[0],
            type: 'bar',
            data: data.slice(1, data.length)
        }
    });

    const options = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xAxis
        },
        yAxis: {
            type: 'value'
        },
        series: series
    };
    return options;
}

/**
 * 生成饼状图表option
 * @param data 元数据
 */
export function getPieOptions(data) {
    const dims = data.dims;
    const datasource = data.datasource;
    const size = Math.floor(100 / datasource.length);
    const series = datasource.map((item, idx) => {
        return {
            name: item[0],
            type: 'pie',
            radius: [size * idx + '%', size * (idx + 1) + '%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: item.slice(1, item.length).map((element, index) => {
                return {
                    value: element,
                    name: dims[index]
                }
            })
        }
    });

    const options = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: series
    };
    return options;
}

/**
 * 生成雷达图表option
 * @param data 元数据
 */
export function getRadarOptions(data) {
    const dims = data.dims;
    const datasource = data.datasource;
    const legend = datasource.map(item => item[0]);
    const seriesData = datasource.map(item => {
        return {
            name: item[0],
            value: item.slice(1, item.length)
        }
    });
    // 二维数组行列互换
    const rotateArr = [];
    let col = 1;
    while (col <= dims.length) {
        const column = [];
        for (let i = 0, len = datasource.length; i < len; i++) {
            column.push(datasource[i][col]);
        }
        rotateArr.push(column);
        col++;
    }
    const indicator = rotateArr.map((arr, index) => {
        return {
            name: dims[index],
            max: Math.max.apply(null, arr)
        }
    });

    const options = {
        tooltip: {},
        legend: {
            data: legend
        },
        radar: {
            name: {
                textStyle: {
                    color: '#333'
                }
            },
            indicator: indicator
        },
        series: [{
            type: 'radar',
            data: seriesData
        }]
    };
    return options;
}
