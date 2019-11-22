/**
 * cell-chart
 *
 * @file 生成对应图表类型的配置项
 * @author 王崧
 */

export interface ChartType {
    type: string;
    title: string;
    img: string;
    active: boolean;
}

export const ChartTypeConfig = [
    {
        type: 'line',
        title: '[线形图]',
        img: '../assets/images/img-line.jpg',
        active: false
    },
    {
        type: 'bar',
        title: '[柱状图]',
        img: '../assets/images/img-bar.jpg',
        active: false
    },
    {
        type: 'pie',
        title: '[饼状图]',
        img: '../assets/images/img-pie.jpg',
        active: false
    },
    {
        type: 'radar',
        title: '[雷达图]',
        img: '../assets/images/img-radar.jpg',
        active: false
    }
];
