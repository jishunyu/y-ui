<template>
      <div class="home">
          <div class="content">
        <div style="min-width:262px;height:100%;padding-top: 42px; ">
          <div>前端工程师</div>
          <div class="img" style="">
            <img src="../assets/wo.jpg" alt="" class="image">
          </div>
          <div style="font-size:12px;">给我一个机会，还你一份惊喜</div>
          <div class="jiben">基本信息</div>
          <div class="lable">
            <div class="lable-text">年龄：23</div>
            <div class="lable-text">学历：大专</div>
            <div class="lable-text">手机：17681371015</div>
            <div class="lable-text">邮箱：443239423@qq.com</div>
            <div class="lable-text">github：https://github.com/jishunyu</div>
            <div class="lable-text">vue开源组件库：https://github.com/jishunyu</div>
            <div class="lable-text"></div>
          </div>
          <div class="jiben">技能简介</div>
          <div class="lable">
            <div class="lable-text">熟悉原生javascript,vue,es6</div>
            <div class="lable-text">熟悉微信小程序，混合app开发</div>
          </div>
          <div class="jiben">个人介绍</div>
          <div class="lable">
            <div class="lable-text">喜欢计算机</div>
            <div class="lable-text">业余时间喜欢刷算法题</div>
            <div class="lable-text">对新技术有探索精神</div>
          </div>
        </div>
       
        <div class="center" style="">
          <div class="center-radio"></div>
          <div class="center-radio" style="top:253px"></div>
          <div class="center-radio" style="top:433px"></div>
          <div class="center-radio" style="top:528px"></div>
        </div>

        <div style="width:380px;padding: 42px 50px 0 50px;text-align: left;">
          <div>
            <div class="jiben" style="margin-top:0;">工作经历</div>
            <div class="lable">
              <div class="lable-text" style="font-weight: bold;margin-top:20px;">2020-7 ~ 至今</div>
              <div class="lable-text">北京鼎智诚科技发展有限公司</div>
              <div class="lable-text">主要职责：公司内部社群小程序及外包小程序，app的开发与上架。</div>
              <div class="lable-text">1.参与公司需求评审及ui界面的设定。 </div>
              <div class="lable-text">2.根据设计图进行前端页面的开发并设计编写业务交互脚本。 </div>
              <div class="lable-text">3.实现前端常见页面特效，优化页面性能。</div>
              <div class="lable-text">3.处理接口数据。</div>
            </div>
            
            <div class="lable">
              <div class="lable-text" style="font-weight: bold;margin-top:20px;">2018-5 ~ 2020-6</div>
              <div class="lable-text">河北睿云网络科技有限公司</div>
              <div class="lable-text">主要职责：公司内部的多商户电商app开发</div>
            </div>
            <div class="jiben" style="margin-top:20px;">项目经历</div>
            <div class="lable">
              <div class="lable-text" style="font-weight: 500;margin-top:20px;">修习场（社群）（目前）</div>
              <div class="lable-text">微信小程序</div>
              <div class="lable-text">技术栈：vue,uni</div>
              <div class="lable-text">主要功能：音视频发布上传播放，社群成员权限管理，评论，动画交互，数据处理。</div>
              <div class="lable-text" style="font-weight: 500;margin-top:20px;">京合陶集（电商后台）（苹果、安卓商店）</div>
              <div class="lable-text">混合APP</div>
              <div class="lable-text">技术栈：vue,uni,weex</div>
              <div class="lable-text">主要职责：购物车，电商通用流程。</div>
              <div class="lable-text" style="font-weight: 500;margin-top:20px;">云小店（电商后台）（安卓商店）</div>
              <div class="lable-text">混合APP</div>
              <div class="lable-text">技术栈：vue,uni</div>
              <div class="lable-text">主要功能：商品管理等功能。</div>
              <div class="lable-text">......</div>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>

<style lang="scss">
    .home{
  display: flex;
  justify-content: center;
}
.lable{
  font-size: 12px;
  .lable-text{
    margin-top: 10px;
  }
}
.content{
  width: 595px;
  height: 930px;
  background: #f7f7f7!important;
  -webkit-print-color-adjust: exact;
  display: flex;
}
.img{
width:100px;height:100px;overflow:hidden;position:relative;margin:20px auto;border-radius: 50%;
border:5px solid #ffffff;

}
.image{
  width: 100%;
	position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}
.center{
  width: 5px;
  height: 100%;
  background: $color;
  position: relative;
  margin-right: 20px;
  .center-radio{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $color;
    top: 42px;
    left: -9px;
  }
}
.jiben{
  font-weight: bold;
  margin-top: 20px;
}
</style>