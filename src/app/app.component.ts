/**
 * cell-chart
 *
 * @file cell生成表格与插入chart图表
 * @author 王崧
 */

import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as echarts from 'echarts';
import { getLineOptions, getBarOptions, getPieOptions, getRadarOptions } from './chart-option-generate';
import { ChartType, ChartTypeConfig } from './chart.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    // 表格 引用变量
    @ViewChild('table', { static: true }) tableRef: ElementRef<HTMLElement>;
    // 图表 引用变量
    @ViewChild('chart', { static: true }) chartRef: ElementRef<HTMLElement>;
    // 图表 实例
    chartInstance: any;
    // 图表类型-弹窗显示标志位
    showDialog: boolean = false;
    // 图表类型-配置项
    chartTypes: ChartType[] = ChartTypeConfig;
    // 当前选中图表类型
    currentType: string;
    // 表格状态 'origin' | 'normal'
    tableStatus: string = 'origin';
    // 表格错误提示信息
    errorMsg: string;

    constructor() { }

    ngOnInit() {
        this.initChart();
    }

    /**
     * 生成表格
     * @param table 生成表格
     * @param m 生成表格行数
     * @param n 生成表格列数
     */
    generateTable(table, m: string, n: string) {
        // 清空上一次生成的表格
        table.innerHTML = '';
        // 判断行、列数是否均大于0，如果
        if (!+m || !+n) {
            this.errorMsg = '温馨提示：请输入的行数、列数均大于0';
            return false;
        }
        // 表格渲染
        for (let i = 0; i < +m + 1; i++) {
            const row = table.insertRow(-1);
            for (let j = 0; j < +n + 1; j++) {
                const letter = String.fromCharCode("A".charCodeAt(0) + j - 1);
                if (i && j) {
                    const cell = row.insertCell(-1);
                    cell.setAttribute('style', 'padding: 5px; border: 1px solid #eee;');
                    cell.append(document.createElement('input'));
                    cell.children[0].setAttribute('style', 'border: 0 none; outline: 0 none;');
                } else {
                    const cell = row.insertCell(-1);
                    cell.setAttribute('style', 'padding: 5px; border: 1px solid #eee;');
                    cell.innerHTML = i === 0 ? letter : i + '';
                }
            }
        }
        // 表格创建成功work状态
        this.tableStatus = 'normal';
        this.errorMsg = '';
    }

    /**
     * 初始化图表
     */
    initChart() {
        this.chartInstance = echarts.init(this.chartRef.nativeElement);
    }

    /**
     * 点击“插入图表”按钮
     */
    insertChart() {
        // 显示“选择图表类型”弹窗
        this.showDialog = true;
    }

    /**
     * 重新生成表格
     */
    reGenerateTable() {
        this.tableStatus = 'origin';
        this.tableRef.nativeElement.innerHTML = '';
        this.chartInstance.setOption({}, true);
    }

    /**
     * 遍历表格，并生成图表元数据
     */
    generateData() {
        const data = [];
        const table = document.getElementsByTagName('table')[0];
        for (let i = 0, rows = table.rows.length; i < rows; i++) {
            for (let j = 0, cells = table.rows[i].cells.length; j < cells; j++) {
                if (!data[i]) {
                    data[i] = new Array();
                }
                if (i === 0 || j === 0) {
                    data[i][j] = table.rows[i].cells[j].innerHTML;
                } else {
                    const child = table.rows[i].cells[j].children[0];
                    data[i][j] = child ? (isNaN(+child['value']) ? 0 : +child['value']) : 0;
                }
            }
        }

        const dims = data[0].slice(1, data[0].length);
        const datasource = data.slice(1, data.length);
        this.setChart(dims, datasource);
    }

    /**
     * 设置图表option
     */
    setChart(dims, datasource) {
        const data = {
            dims: dims,
            datasource: datasource
        };
        let options;
        switch (this.currentType) {
            case 'line':
                options = getLineOptions(data);
                break;
            case 'bar':
                options = getBarOptions(data);
                break;
            case 'pie':
                options = getPieOptions(data);
                break;
            case 'radar':
                options = getRadarOptions(data);
                break;
            default:
                options = getLineOptions(data);
                break;
        }

        this.chartInstance.setOption(options, true);
    }

    /**
     * 选择表格类型
     * @param chartType 表格类型配置
     */
    selectChartType(chartType: ChartType) {
        this.chartTypes.forEach(item => item.active = false);
        chartType.active = true;
        this.currentType = chartType.type;
    }

    /**
     * 确定生成chart图表
     */
    confirmInsert() {
        this.generateData();
        this.cancelInsert();
    }

    /**
     * 取消生成chart图表
     */
    cancelInsert() {
        this.chartTypes.forEach(item => item.active = false);
        this.showDialog = false;
    }
}
