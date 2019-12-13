import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/statistics',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Statistics.vue'),
                    meta: { title: '统计分析' }
                },
                {
                    path: '/basicData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '基础数据' }
                },
                {
                    path: '/abnormalData',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '异常数据' }
                },
                {
                    path: '/researchPaper',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '研究文献' }
                },
                {
                    path: '/monitoringReport',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '检测报告' }
                },
                {
                    path: '/relatedDocuments',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '相关文件' }
                },
                {
                    path: '/maintenanceRecords',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '维护保养记录管理' }
                },
                {
                    path: '/maintenancePlan',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '维护保养计划管理' }
                },
                {
                    path: '/deviceAbnormal',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '设备异常管理' }
                },
                {
                    path: '/deviceInformation',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '设备信息管理' }
                },
                {
                    path: '/dataAbnormalAlarm',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '数据异常报警' }
                },
                {
                    path: '/extremeWeatherAlarm',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '极端天气报警' }
                },
                {
                    path: '/jobSuggestions',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '工作建议管理' }
                },
                {
                    path: '/dataDictionary',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '数据字典维护' }
                },
                {
                    path: '/dataThreshold',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '数据正常阈值管理' }
                },
                {
                    path: '/extremeWeatherThreshold',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '极端天气阈值管理' }
                },
                {
                    path: '/operationLog',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '操作日志' }
                },
                {
                    path: '/automaticRecordingLog',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '系统自动记录' }
                },
                {
                    path: '/level',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Index.vue'),
                    meta: { title: '级别管理' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
