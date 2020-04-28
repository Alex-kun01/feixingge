
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/order/order","pages/mine/mine","pages/pointsmall/pointsmall","pages/pointsrecord/pointsrecord","pages/orderfill/orderfill","pages/keysearch/keysearch","pages/person/person","pages/verifyphone/verifyphone","pages/addressadd/addressadd","pages/myaddress/myaddress","pages/modify/modify","pages/hotelsearch/hotelsearch","pages/ticketselect/ticketselect","pages/viewpointlist/viewpointlist","pages/hotellist/hotellist","pages/hoteldetail/hoteldetail","pages/ticket/ticket","pages/gaotiesearch/gaotiesearch","pages/feijisearch/feijisearch","pages/chosevister/chosevister","pages/addback/addback","pages/addvister/addvister","pages/chosedate/chosedate","pages/hangbanxuanze/hangbanxuanze","pages/jipiaoyuding/jipiaoyuding","pages/qichepiaolist/qichepiaolist","pages/gtorderconfirm/gtorderconfirm","pages/choseCity/choseCity","pages/getcartic/getcartic","pages/qicheorderconfirm/qicheorderconfirm","pages/qicheorderperchanse/qicheorderperchanse","pages/setvister/setvister","pages/gaotielist/gaotielist","pages/qichesearch/qichesearch","pages/login/login","pages/modifyperson/modifyperson","pages/register/register","pages/signin/signin","pages/hangbanlist/flyList","pages/bancixuanze/bancixuanze","pages/hangbanlist/qichelist","pages/viewpointlist/attrdetails","pages/viewpointlist/toPaid","pages/mine/feedback","pages/viewpointlist/ticketorder"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#8a8a8a","selectedColor":"#FAAF05","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/public/home@2x0.png","selectedIconPath":"static/public/home@3x.png"},{"pagePath":"pages/order/order","text":"订单","iconPath":"static/public/order@3x.png","selectedIconPath":"static/public/order@2.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/public/mine@3x.png","selectedIconPath":"static/public/wode@2x.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"feixingge","compilerVersion":"2.6.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"飞行鸽"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/pointsmall/pointsmall","meta":{},"window":{"navigationBarTitleText":"积分商城"}},{"path":"/pages/pointsrecord/pointsrecord","meta":{},"window":{"navigationBarTitleText":"积分记录"}},{"path":"/pages/orderfill/orderfill","meta":{},"window":{"navigationBarTitleText":"填写订单"}},{"path":"/pages/keysearch/keysearch","meta":{},"window":{"navigationBarTitleText":"关键字搜索"}},{"path":"/pages/person/person","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/verifyphone/verifyphone","meta":{},"window":{"navigationBarTitleText":"换绑手机号"}},{"path":"/pages/addressadd/addressadd","meta":{},"window":{"navigationBarTitleText":"添加地址"}},{"path":"/pages/myaddress/myaddress","meta":{},"window":{"navigationBarTitleText":"我的地址"}},{"path":"/pages/modify/modify","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/hotelsearch/hotelsearch","meta":{},"window":{"navigationBarTitleText":"酒店搜索"}},{"path":"/pages/ticketselect/ticketselect","meta":{},"window":{"navigationBarTitleText":"门票选择"}},{"path":"/pages/viewpointlist/viewpointlist","meta":{},"window":{"navigationBarTitleText":"景区列表"}},{"path":"/pages/hotellist/hotellist","meta":{},"window":{"navigationBarTitleText":"酒店列表"}},{"path":"/pages/hoteldetail/hoteldetail","meta":{},"window":{"navigationBarTitleText":"酒店详情"}},{"path":"/pages/ticket/ticket","meta":{},"window":{}},{"path":"/pages/gaotiesearch/gaotiesearch","meta":{},"window":{"navigationBarTitleText":"火车票搜索"}},{"path":"/pages/feijisearch/feijisearch","meta":{},"window":{"navigationBarTitleText":"飞机票搜索"}},{"path":"/pages/chosevister/chosevister","meta":{},"window":{"navigationBarTitleText":"选择常用旅客"}},{"path":"/pages/addback/addback","meta":{},"window":{"navigationBarTitleText":"添加返程"}},{"path":"/pages/addvister/addvister","meta":{},"window":{"navigationBarTitleText":"新增常用旅客"}},{"path":"/pages/chosedate/chosedate","meta":{},"window":{"navigationBarTitleText":"选择日期"}},{"path":"/pages/hangbanxuanze/hangbanxuanze","meta":{},"window":{"navigationBarTitleText":"航班选择"}},{"path":"/pages/jipiaoyuding/jipiaoyuding","meta":{},"window":{"navigationBarTitleText":"机票预定"}},{"path":"/pages/qichepiaolist/qichepiaolist","meta":{},"window":{"navigationBarTitleText":"班次列表"}},{"path":"/pages/gtorderconfirm/gtorderconfirm","meta":{},"window":{"navigationBarTitleText":"确认订单"}},{"path":"/pages/choseCity/choseCity","meta":{},"window":{"navigationBarTitleText":"选择城市"}},{"path":"/pages/getcartic/getcartic","meta":{},"window":{"navigationBarTitleText":"汽车票选择"}},{"path":"/pages/qicheorderconfirm/qicheorderconfirm","meta":{},"window":{"navigationBarTitleText":"汽车票订单"}},{"path":"/pages/qicheorderperchanse/qicheorderperchanse","meta":{},"window":{"navigationBarTitleText":"汽车票订单支付"}},{"path":"/pages/setvister/setvister","meta":{},"window":{"navigationBarTitleText":"修改旅客信息"}},{"path":"/pages/gaotielist/gaotielist","meta":{},"window":{"navigationBarTitleText":"火车票列表"}},{"path":"/pages/qichesearch/qichesearch","meta":{},"window":{"navigationBarTitleText":"汽车票搜索"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"会员登录/注册"}},{"path":"/pages/modifyperson/modifyperson","meta":{},"window":{"navigationBarTitleText":"修改个人信息"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"用户注册"}},{"path":"/pages/signin/signin","meta":{},"window":{"navigationBarTitleText":"用户登录"}},{"path":"/pages/hangbanlist/flyList","meta":{},"window":{"navigationBarTitleText":"航班列表"}},{"path":"/pages/bancixuanze/bancixuanze","meta":{},"window":{"navigationBarTitleText":"班次选择"}},{"path":"/pages/hangbanlist/qichelist","meta":{},"window":{"navigationBarTitleText":"班次列表"}},{"path":"/pages/viewpointlist/attrdetails","meta":{},"window":{"navigationBarTitleText":"景点详情"}},{"path":"/pages/viewpointlist/toPaid","meta":{},"window":{"navigationBarTitleText":"待支付"}},{"path":"/pages/mine/feedback","meta":{},"window":{"navigationBarTitleText":"反馈意见"}},{"path":"/pages/viewpointlist/ticketorder","meta":{},"window":{"navigationBarTitleText":"门票"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
