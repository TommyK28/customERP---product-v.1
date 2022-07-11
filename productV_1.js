const showfilter = document.querySelector('.js-filter-toggle');
const modalSearchFilter = document.querySelector('.modal.modal__search-filter');

const btnExport = document.querySelector('.js-btn-export');
const introExportWrapper = document.querySelector('.intro__export-wrapper');
const introExportDropdown = document.querySelector('.intro__export-dropdown');

showfilter.addEventListener('click', filterToggle);
btnExport.addEventListener('click', exportDropDownToggle);


function filterToggle() {
    modalSearchFilter.classList.toggle('open');
    console.log('Modal open');
    if (modalSearchFilter && modalSearchFilter.classList.contains('open')) {

        const modalRSWrapperWidth = document.querySelector('.modal__range-slider-wrapper').offsetWidth; 

        rangeSliderInit();

        console.log('Range slider init');
        
        var mySlider = new rSlider({
            target: '#sampleSlider',
            values: {min: 1, max: 10},
            range: true,
            step: 1,
            tooltip: false,
            scale: true,
            labels: true,
           // width: modalRSWrapperWidth - 15,
            set: [500, 5500]
        });
    } else {
        const rsContainer = document.querySelector('.rs-container');

        rsContainer.remove();
    }
}

function exportDropDownToggle() {
    introExportDropdown.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.js-btn-export')) {
        introExportDropdown.classList.remove('open');
    } else {
        return;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        if ( introExportDropdown.classList.contains('open')) {
            introExportDropdown.classList.remove('open');
        }
    }
});


