// Created by iWeb 3.0.4 local-build-20121106

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.lekhanair.com/LekhaNair/A_Capella/A_Capella_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.lekhanair.com/LekhaNair/A_Capella',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget3'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.lekhanair.com/LekhaNair/A_Capella',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(258,193),new IWSize(258,44),new IWSize(309,252),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('A_Capella_files/ul.png'),IWCreateImage('A_Capella_files/top.png'),IWCreateImage('A_Capella_files/ur.png'),IWCreateImage('A_Capella_files/right.png'),IWCreateImage('A_Capella_files/lr.png'),IWCreateImage('A_Capella_files/bottom.png'),IWCreateImage('A_Capella_files/ll.png'),IWCreateImage('A_Capella_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget3',null,'widget4',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('A_Capella_files/Watercolor_iweb_01.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_02.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_04.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_08.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_16.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_14.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_13.png'),IWCreateImage('A_Capella_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('A_Capella_files/A_CapellaMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
