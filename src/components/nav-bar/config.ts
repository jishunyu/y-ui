export default [
    {
        title:'引导',
        children:[
            {
                children:[
                    {
                        path : '/',
                        text:'安装'
                    }
                ]
            }
        ]
    },
    {
        title:'组件',
        children:[
        {
            lable:'基础组件',
            children:[
                {
                    path : '/case/button',
                    text:'Button 按钮'
                }
            ],
        },
        {
            lable:'表单组件',
            children:[
                {
                    path : '/case/input',
                    text:'Input 输入框'
                },
                {
                    path : '/case/calendar',
                    text:'Calendar 日历'
                },
                {
                    path : '/case/numberBox',
                    text:'NumberBox 步进器'
                }
            ],
        },
        {
            lable:'数据组件',
            children:[
                {
                    path : '/case/line-progress',
                    text:'LineProgress 线形进度条'
                },
                {
                    path : '/case/circular-progress',
                    text:'cricularProgress 圆形进度条'
                }
            ],
        },
        {
            lable:'反馈组件',
            children:[
                {
                    path : '/case/toast',
                    text:'Toast 消息提示'
                },
                {
                    path : '/case/noticeBar',
                    text:'NoticeBar 滚动通知 '
                }
            ],
        },
        {
            lable:'导航组件',
            children:[
                {
                    path : '/case/tabs',
                    text:'Tabs 标签页 '
                },
                {
                    path : '/case/steps',
                    text:'Steps 步骤条 '
                },
                {
                    path : '/case/dropdown',
                    text:'Dropdown 下拉菜单'
                },
            ],
        },
        {
            lable:'其他组件',
            children:[
                {
                    path : '/case/loading',
                    text:'Loading 数据加载'
                },
                {
                    path : '/case/loadimg',
                    text:'Loadimg 图片懒加载'
                }
            ],
        }
        ]
    },
    {
        title:'指令',
        children:[
            {
                lable:'基础指令',
                children:[
                    {
                        path : '/',
                        text:'v-shakeProof 防抖'
                    },
                    {
                        path : '/',
                        text:'v-throttle 节流'
                    }
                ]
            }
        ]
    },
]