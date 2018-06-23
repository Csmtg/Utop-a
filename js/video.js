var video = document.querySelector( '#the-video' ),
    container = document.querySelector( '#video-container' );
 
var setVideoDimensions = function () {
    var w = video.videoWidth,
        h = video.videoHeight,
        videoRatio = ( w / h ).toFixed( 2 ),
        containerStyles = window.getComputedStyle( container ),
        minW = parseInt( containerStyles.getPropertyValue( 'width' ) ),
        minH = parseInt( containerStyles.getPropertyValue( 'height' ) ),
        widthRatio  = minW / w,
        heightRatio = minH / h,
        newWidth  = 0,
        newHeight = 0;
 
    if ( widthRatio > heightRatio ) {
        newWidth  = minW,
        newHeight = Math.ceil( newWidth / videoRatio );
    }else{
        newHeight = minH,
        newWidth  = Math.ceil( newHeight * videoRatio );
    }
 
    video.style.width  = newWidth  + 'px';
    video.style.height = newHeight + 'px';
};
 
video.addEventListener( 'loadedmetadata', setVideoDimensions, false );
window.addEventListener( 'resize', setVideoDimensions, false );