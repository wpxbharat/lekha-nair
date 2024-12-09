// Created by iWeb 3.0.4 local-build-20121105

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.lekhanair.com/LekhaNair/Artwork_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.lekhanair.com/LekhaNair',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.lekhanair.com/LekhaNair',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(2,new IWSize(275,275),new IWSize(275,34),new IWSize(290,324),27,27,0,new IWSize(26,28)),new IWPhotoFrame([IWCreateImage('Artwork_files/Modern_C_TL.png'),IWCreateImage('Artwork_files/Modern_S_T.png'),IWCreateImage('Artwork_files/Modern_C_TR.png'),IWCreateImage('Artwork_files/Modern_S_R.png'),IWCreateImage('Artwork_files/Modern_C_BR.png'),IWCreateImage('Artwork_files/Modern_S_B.png'),IWCreateImage('Artwork_files/Modern_C_BL.png'),IWCreateImage('Artwork_files/Modern_S_L.png')],null,2,0.707237,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Artwork_files/ArtworkMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
detectBrowser();Widget.onload();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
