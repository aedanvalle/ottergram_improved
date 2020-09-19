/*the following that are declared are constants
    all of these constants are classes of html that will be selected 
    and modified dynamically on the page
 */
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

/*these are the */
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = "is-tiny";

/*this is where the title and image names are swapped out */
function setDetails(imageUrl, titleText) {  'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;

    showDetails();
}

/*sets the file name along with the file location of the image itself*/
function imageFromThumb(thumbnail) {  'use strict';
    return thumbnail.getAttribute('data-image-url');
}

/*this grabs this specific image with the given name*/
function titleFromThumb(thumbnail) {  'use strict';
    return thumbnail.getAttribute('data-image-title');
}

/*function call to replace the image with title data*/
function setDetailsFromThumb(thumbnail) {  'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

/*this sets code that is waiting for the button to be pressed and then sets details for the thumbnail images*/
function addThumbClickHandler(thumb) {  'use strict';
    thumb.addEventListener('click', function(event) { 
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

/*returns pointer to array from the image role trigger*/
function getThumbnailsArray() {  'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

/*all the thumbnails are passed into this array*/
function initializeEvents() {  'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

/*this reverses the hidden feature and makes the picture enlarge from CSS */
function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR); 
    document.body.classList.remove(HIDDEN_DETAIL_CLASS); 
    frame.classList.add(TINY_EFFECT_CLASS); 
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

/*activating all events*/
initializeEvents();

