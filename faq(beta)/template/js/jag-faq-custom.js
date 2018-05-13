'use strict';

/*function to toggle icon of collapse THeme 2 to 6*/
function toggleIcon(e) {
    jQuery(e.target).prev().find(".jag-faq-icon-2").toggleClass('fa-plus fa-minus');
	jQuery(e.target).prev().find(".jag-faq-icon-3").toggleClass('fa-coffee fa-minus');
}
jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);
