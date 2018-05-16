'use strict';

function toggleIcon(e) {
    $(e.target).prev().find(".jag-faq-icon-2").toggleClass('fa-plus fa-minus');
	$(e.target).prev().find(".jag-faq-icon-3").toggleClass('fa-coffee fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
