(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-chart\">\n  <h2>类Cell表格插入Chart图表Demo</h2>\n  <div *ngIf=\"tableStatus !== 'normal'\" class=\"table-create-operation\">\n      请输入：生成 \n      <input #row class=\"ipt-create-cell\" type=\"text\">行\n      x <input #column class=\"ipt-create-cell\" type=\"text\">列 的cell表格\n      <button class=\"btn-chart\" (click)=\"generateTable(table, row.value, column.value)\">生成表格</button>\n  </div>\n  <div *ngIf=\"errorMsg\" class=\"table-operation-error\">{{errorMsg}}</div>\n  <div *ngIf=\"tableStatus === 'origin'\" class=\"table-operation-desc\">\n      <p>表格使用说明：</p>\n      <p>1.表格支持自定义行、列数量，即生成 m行 * n列 的cell表格</p>\n      <p>2.表格录入数据用于生成图表，对非法数据（字母、汉字、特殊字符）均当做0来处理</p>\n      <p>3.表格支持线性图、柱状图、饼状图、雷达图四种图表类型的生成</p>\n      <p>4.<s>表格暂不支持键盘移动focus单元格的操作</s></p>\n      <p>5.<s>表格暂不支持拖拽选中某区域数据的操作</s></p>\n  </div>\n  \n  <!-- table占位符 -->\n  <table #table class=\"table\"></table>\n  \n  <div *ngIf=\"tableStatus === 'normal'\">\n      <!-- 插入图表button -->\n      <button class=\"btn-chart\" (click)=\"insertChart()\">插入图表</button>\n      <!-- 重新生成表格button -->\n      <button class=\"btn-chart\" (click)=\"reGenerateTable()\">重新生成表格</button>\n  </div>\n  \n  <!-- chart占位符 -->\n  <div #chart class=\"echarts\"></div>\n  \n  <!-- dialog -->\n  <div *ngIf=\"showDialog\" class=\"type-select-mask-layer\"></div>\n  <div *ngIf=\"showDialog\" class=\"type-select-layer\">\n      <div class=\"layer-title\">选择图表类型</div>\n      <div class=\"layer-body\">\n          <div \n              *ngFor=\"let chatType of chartTypes\" \n              class=\"chart-type-container\"\n              [class.chart-type-container-active]=\"chatType.active\" \n              (click)=\"selectChartType(chatType)\">\n              <div class=\"chart-type-title\">{{chatType.title}}</div>\n              <div class=\"chart-type-{{chatType.type}}\"></div>\n          </div>\n      </div>\n      <div class=\"layer-footer\">\n          <button class=\"btn-chart\" (click)=\"confirmInsert()\">确 定</button>\n          <button class=\"btn-chart\" (click)=\"cancelInsert()\">取 消</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cell-chart-demo'
    },
    {
        path: 'cell-chart-demo',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-chart {\n  padding: 0 10px 10px 10px;\n  color: #333;\n}\n.table-create-operation .btn-chart {\n  margin-left: 10px;\n}\n.table-operation-error {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #f00;\n}\n.table-operation-desc {\n  margin-top: 10px;\n}\n.table-operation-desc p {\n  margin: 0;\n  line-height: 24px;\n  font-size: 14px;\n}\n.ipt-create-cell {\n  width: 80px;\n  padding: 5px;\n  outline: 0 none;\n}\n.table {\n  border-collapse: collapse;\n  border: 1px solid #eee;\n}\n.btn-chart {\n  padding: 5px 20px;\n  margin-right: 10px;\n  margin-top: 10px;\n  border-radius: 3px;\n  outline: 0 none;\n  cursor: pointer;\n}\n.btn-chart:hover {\n  background-color: #f5f5f5;\n}\n.btn-chart:active {\n  border-style: dotted;\n  background-color: #e5e5e5;\n}\n.echarts {\n  width: 800px;\n  height: 600px;\n  margin: 0 auto;\n}\n.type-select-mask-layer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #666;\n  opacity: 0.5;\n}\n.type-select-layer {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2%;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px #eee;\n}\n.layer-title {\n  margin-left: 10px;\n  font-weight: bold;\n}\n.layer-body {\n  width: 600px;\n}\n.layer-body::after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.layer-footer {\n  margin: 10px 0 10px 10px;\n}\n.chart-type-container {\n  float: left;\n  width: 240px;\n  padding: 20px;\n  margin: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.chart-type-container:hover {\n  background-color: #f5f5f5;\n}\n.chart-type-container-active {\n  background-color: #eee;\n}\n.chart-type-line {\n  background: url('/cell-chart-demo/img-line.jpg');\n}\n.chart-type-bar {\n  background: url('/cell-chart-demo/img-bar.jpg');\n}\n.chart-type-pie {\n  background: url('/cell-chart-demo/img-pie.jpg');\n}\n.chart-type-radar {\n  background: url('/cell-chart-demo/img-radar.jpg');\n}\n.chart-type-line,\n.chart-type-bar,\n.chart-type-pie,\n.chart-type-radar {\n  width: 240px;\n  height: 180px;\n  background-size: contain;\n}\n.chart-type-title {\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nc29uZzA5L0RvY3VtZW50cy93b3Jrc3BhY2UvY2VsbC1jaGFydC1kZW1vL2NlbGwtY2hhcnQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFFSSxpQkFBQTtBQ0ROO0FES0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0FDSko7QURHRTtFQUlJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKTjtBRFFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTko7QURTRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUNQSjtBRFVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEVUk7RUFDRSx5QkFBQTtBQ1JOO0FEV0k7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0FDVE47QURhRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ1hKO0FEY0U7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1pKO0FEZUU7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ2RKO0FEaUJFO0VBQ0UsWUFBQTtBQ2ZKO0FEaUJJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDZk47QURtQkU7RUFDRSx3QkFBQTtBQ2pCSjtBRG9CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQko7QURvQkk7RUFDRSx5QkFBQTtBQ2xCTjtBRHNCRTtFQUNFLHNCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsZ0RBQUE7QUNyQko7QUR3QkU7RUFDRSwrQ0FBQTtBQ3RCSjtBRHlCRTtFQUNFLCtDQUFBO0FDdkJKO0FEMEJFO0VBQ0UsaURBQUE7QUN4Qko7QUQyQkU7Ozs7RUFJRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDekJKO0FENEJFO0VBQ0UsbUJBQUE7QUMxQkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY2hhcnQge1xuICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC50YWJsZS1jcmVhdGUtb3BlcmF0aW9uIHtcbiAgICAuYnRuLWNoYXJ0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRhYmxlLW9wZXJhdGlvbi1lcnJvciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmMDA7XG4gIH1cbiAgXG4gIC50YWJsZS1vcGVyYXRpb24tZGVzYyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pcHQtY3JlYXRlLWNlbGwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBvdXRsaW5lOiAwIG5vbmU7XG4gIH1cbiAgXG4gIC50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICB9XG4gIFxuICAuYnRuLWNoYXJ0IHtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3V0bGluZTogMCBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgXG4gICAgJjphY3RpdmUge1xuICAgICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICAgIH1cbiAgfVxuICBcbiAgLmVjaGFydHMge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAudHlwZS1zZWxlY3QtbWFzay1sYXllciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLnR5cGUtc2VsZWN0LWxheWVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNlZWU7XG4gIH1cbiAgXG4gIC5sYXllci10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5sYXllci1ib2R5IHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxuICBcbiAgLmxheWVyLWZvb3RlciB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xuICB9XG4gIFxuICAuY2hhcnQtdHlwZS1jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuICB9XG4gIFxuICAuY2hhcnQtdHlwZS1jb250YWluZXItYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG4gIFxuICAuY2hhcnQtdHlwZS1saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvaW1nLWxpbmUuanBnJyk7XG4gIH1cbiAgXG4gIC5jaGFydC10eXBlLWJhciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZy1iYXIuanBnJyk7XG4gIH1cbiAgXG4gIC5jaGFydC10eXBlLXBpZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZy1waWUuanBnJyk7XG4gIH1cbiAgXG4gIC5jaGFydC10eXBlLXJhZGFyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvaW1nLXJhZGFyLmpwZycpO1xuICB9XG4gIFxuICAuY2hhcnQtdHlwZS1saW5lLFxuICAuY2hhcnQtdHlwZS1iYXIsXG4gIC5jaGFydC10eXBlLXBpZSxcbiAgLmNoYXJ0LXR5cGUtcmFkYXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxuICBcbiAgLmNoYXJ0LXR5cGUtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgIiwiLnRhYmxlLWNoYXJ0IHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgY29sb3I6ICMzMzM7XG59XG4udGFibGUtY3JlYXRlLW9wZXJhdGlvbiAuYnRuLWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGFibGUtb3BlcmF0aW9uLWVycm9yIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2YwMDtcbn1cbi50YWJsZS1vcGVyYXRpb24tZGVzYyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udGFibGUtb3BlcmF0aW9uLWRlc2MgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pcHQtY3JlYXRlLWNlbGwge1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiAwIG5vbmU7XG59XG4udGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuLmJ0bi1jaGFydCB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMCBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLWNoYXJ0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5idG4tY2hhcnQ6YWN0aXZlIHtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4uZWNoYXJ0cyB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udHlwZS1zZWxlY3QtbWFzay1sYXllciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAwLjU7XG59XG4udHlwZS1zZWxlY3QtbGF5ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWVlO1xufVxuLmxheWVyLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxheWVyLWJvZHkge1xuICB3aWR0aDogNjAwcHg7XG59XG4ubGF5ZXItYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBjbGVhcjogYm90aDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxheWVyLWZvb3RlciB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcbn1cbi5jaGFydC10eXBlLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hhcnQtdHlwZS1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmNoYXJ0LXR5cGUtY29udGFpbmVyLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4uY2hhcnQtdHlwZS1saW5lIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZy1saW5lLmpwZycpO1xufVxuLmNoYXJ0LXR5cGUtYmFyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZy1iYXIuanBnJyk7XG59XG4uY2hhcnQtdHlwZS1waWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvaW1nLXBpZS5qcGcnKTtcbn1cbi5jaGFydC10eXBlLXJhZGFyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZy1yYWRhci5qcGcnKTtcbn1cbi5jaGFydC10eXBlLWxpbmUsXG4uY2hhcnQtdHlwZS1iYXIsXG4uY2hhcnQtdHlwZS1waWUsXG4uY2hhcnQtdHlwZS1yYWRhciB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLmNoYXJ0LXR5cGUtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chart_option_generate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-option-generate */ "./src/app/chart-option-generate.ts");
/* harmony import */ var _chart_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart.config */ "./src/app/chart.config.ts");
/**
 * cell-chart
 *
 * @file cell生成表格与插入chart图表
 * @author 王崧
 */





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // 图表类型-弹窗显示标志位
        this.showDialog = false;
        // 图表类型-配置项
        this.chartTypes = _chart_config__WEBPACK_IMPORTED_MODULE_4__["ChartTypeConfig"];
        // 表格状态 'origin' | 'normal'
        this.tableStatus = 'origin';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initChart();
    };
    /**
     * 生成表格
     * @param table 生成表格
     * @param m 生成表格行数
     * @param n 生成表格列数
     */
    AppComponent.prototype.generateTable = function (table, m, n) {
        // 清空上一次生成的表格
        table.innerHTML = '';
        // 判断行、列数是否均大于0，如果
        if (!+m || !+n) {
            this.errorMsg = '温馨提示：请输入的行数、列数均大于0';
            return false;
        }
        // 表格渲染
        for (var i = 0; i < +m + 1; i++) {
            var row = table.insertRow(-1);
            for (var j = 0; j < +n + 1; j++) {
                var letter = String.fromCharCode("A".charCodeAt(0) + j - 1);
                if (i && j) {
                    var cell = row.insertCell(-1);
                    cell.setAttribute('style', 'padding: 5px; border: 1px solid #eee;');
                    cell.append(document.createElement('input'));
                    cell.children[0].setAttribute('style', 'border: 0 none; outline: 0 none;');
                }
                else {
                    var cell = row.insertCell(-1);
                    cell.setAttribute('style', 'padding: 5px; border: 1px solid #eee;');
                    cell.innerHTML = i === 0 ? letter : i + '';
                }
            }
        }
        // 表格创建成功work状态
        this.tableStatus = 'normal';
        this.errorMsg = '';
    };
    /**
     * 初始化图表
     */
    AppComponent.prototype.initChart = function () {
        this.chartInstance = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.chartRef.nativeElement);
    };
    /**
     * 点击“插入图表”按钮
     */
    AppComponent.prototype.insertChart = function () {
        // 显示“选择图表类型”弹窗
        this.showDialog = true;
    };
    /**
     * 重新生成表格
     */
    AppComponent.prototype.reGenerateTable = function () {
        this.tableStatus = 'origin';
        this.tableRef.nativeElement.innerHTML = '';
        this.chartInstance.setOption({}, true);
    };
    /**
     * 遍历表格，并生成图表元数据
     */
    AppComponent.prototype.generateData = function () {
        var data = [];
        var table = document.getElementsByTagName('table')[0];
        for (var i = 0, rows = table.rows.length; i < rows; i++) {
            for (var j = 0, cells = table.rows[i].cells.length; j < cells; j++) {
                if (!data[i]) {
                    data[i] = new Array();
                }
                if (i === 0 || j === 0) {
                    data[i][j] = table.rows[i].cells[j].innerHTML;
                }
                else {
                    var child = table.rows[i].cells[j].children[0];
                    data[i][j] = child ? (isNaN(+child['value']) ? 0 : +child['value']) : 0;
                }
            }
        }
        var dims = data[0].slice(1, data[0].length);
        var datasource = data.slice(1, data.length);
        this.setChart(dims, datasource);
    };
    /**
     * 设置图表option
     */
    AppComponent.prototype.setChart = function (dims, datasource) {
        var data = {
            dims: dims,
            datasource: datasource
        };
        var options;
        switch (this.currentType) {
            case 'line':
                options = Object(_chart_option_generate__WEBPACK_IMPORTED_MODULE_3__["getLineOptions"])(data);
                break;
            case 'bar':
                options = Object(_chart_option_generate__WEBPACK_IMPORTED_MODULE_3__["getBarOptions"])(data);
                break;
            case 'pie':
                options = Object(_chart_option_generate__WEBPACK_IMPORTED_MODULE_3__["getPieOptions"])(data);
                break;
            case 'radar':
                options = Object(_chart_option_generate__WEBPACK_IMPORTED_MODULE_3__["getRadarOptions"])(data);
                break;
            default:
                options = Object(_chart_option_generate__WEBPACK_IMPORTED_MODULE_3__["getLineOptions"])(data);
                break;
        }
        this.chartInstance.setOption(options, true);
    };
    /**
     * 选择表格类型
     * @param chartType 表格类型配置
     */
    AppComponent.prototype.selectChartType = function (chartType) {
        this.chartTypes.forEach(function (item) { return item.active = false; });
        chartType.active = true;
        this.currentType = chartType.type;
    };
    /**
     * 确定生成chart图表
     */
    AppComponent.prototype.confirmInsert = function () {
        this.generateData();
        this.cancelInsert();
    };
    /**
     * 取消生成chart图表
     */
    AppComponent.prototype.cancelInsert = function () {
        this.chartTypes.forEach(function (item) { return item.active = false; });
        this.showDialog = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: true })
    ], AppComponent.prototype, "tableRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true })
    ], AppComponent.prototype, "chartRef", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-option-generate.ts":
/*!******************************************!*\
  !*** ./src/app/chart-option-generate.ts ***!
  \******************************************/
/*! exports provided: getLineOptions, getBarOptions, getPieOptions, getRadarOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineOptions", function() { return getLineOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarOptions", function() { return getBarOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieOptions", function() { return getPieOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRadarOptions", function() { return getRadarOptions; });
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
function getLineOptions(data) {
    var xAxis = data.dims;
    var legend = data.datasource.map(function (item) { return item[0]; });
    var series = data.datasource.map(function (item) {
        return {
            name: item[0],
            type: 'line',
            stack: '总量',
            data: item.slice(1, item.length)
        };
    });
    var options = {
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
function getBarOptions(data) {
    var xAxis = data.dims;
    var legend = data.datasource.map(function (data) { return data[0]; });
    var series = data.datasource.map(function (data) {
        return {
            name: data[0],
            type: 'bar',
            data: data.slice(1, data.length)
        };
    });
    var options = {
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
function getPieOptions(data) {
    var dims = data.dims;
    var datasource = data.datasource;
    var size = Math.floor(100 / datasource.length);
    var series = datasource.map(function (item, idx) {
        return {
            name: item[0],
            type: 'pie',
            radius: [size * idx + '%', size * (idx + 1) + '%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: item.slice(1, item.length).map(function (element, index) {
                return {
                    value: element,
                    name: dims[index]
                };
            })
        };
    });
    var options = {
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
function getRadarOptions(data) {
    var dims = data.dims;
    var datasource = data.datasource;
    var legend = datasource.map(function (item) { return item[0]; });
    var seriesData = datasource.map(function (item) {
        return {
            name: item[0],
            value: item.slice(1, item.length)
        };
    });
    // 二维数组行列互换
    var rotateArr = [];
    var col = 1;
    while (col <= dims.length) {
        var column = [];
        for (var i = 0, len = datasource.length; i < len; i++) {
            column.push(datasource[i][col]);
        }
        rotateArr.push(column);
        col++;
    }
    var indicator = rotateArr.map(function (arr, index) {
        return {
            name: dims[index],
            max: Math.max.apply(null, arr)
        };
    });
    var options = {
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


/***/ }),

/***/ "./src/app/chart.config.ts":
/*!*********************************!*\
  !*** ./src/app/chart.config.ts ***!
  \*********************************/
/*! exports provided: ChartTypeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTypeConfig", function() { return ChartTypeConfig; });
/**
 * cell-chart
 *
 * @file 生成对应图表类型的配置项
 * @author 王崧
 */
var ChartTypeConfig = [
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


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wangsong09/Documents/workspace/cell-chart-demo/cell-chart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map