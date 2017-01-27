$(function() {
    
    $('.sandwich').on('click', function(event) {
        event.preventDefault();
        $('.left-side-bar').toggleClass('aside-shown');
    });

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    // CHART START
    
        var chartsData = {
        power: {},
        water: {},
        gas: {}
    };



    // power
    chartsData.power.chart = new SmoothieChart({
        millisPerPixel: 100,
        grid: {
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            verticalSections: 0,
            borderVisible: false
        },
        labels: {
            disabled:true
        }
    });

    chartsData.power.canvas = document.getElementById('chart-power');
    chartsData.power.series = new TimeSeries();

    setInterval(function() {
        chartsData.power.series.append(new Date().getTime(), Math.random() * 10000);
    }, 1000);

    chartsData.power.chart.addTimeSeries(chartsData.power.series, {lineWidth:2.1, strokeStyle:'#bf7c86'});
    chartsData.power.chart.streamTo(chartsData.power.canvas, 1000);

    // water
    chartsData.water.chart = new SmoothieChart({
        millisPerPixel: 100,
        grid: {
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            verticalSections: 0,
            borderVisible: false
        },
        labels: {
            disabled:true
        }
    });

    chartsData.water.canvas = document.getElementById('chart-water');
    chartsData.water.series = new TimeSeries();

    setInterval(function() {
        chartsData.water.series.append(new Date().getTime(), Math.random() * 10000);
    }, 1000);

    chartsData.water.chart.addTimeSeries(chartsData.water.series, {lineWidth:2.1, strokeStyle:'#88c69b'});
    chartsData.water.chart.streamTo(chartsData.water.canvas, 1000);

    // gas
    chartsData.gas.chart = new SmoothieChart({
        millisPerPixel: 100,
        grid: {
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
            verticalSections: 0,
            borderVisible: false
        },
        labels: {
            disabled:true
        }
    });

    chartsData.gas.canvas = document.getElementById('chart-gas');
    chartsData.gas.series = new TimeSeries();

    setInterval(function() {
        chartsData.gas.series.append(new Date().getTime(), Math.random() * 10000);
    }, 1000);

    chartsData.gas.chart.addTimeSeries(chartsData.gas.series, {lineWidth:2.1, strokeStyle:'#98afcc'});
    chartsData.gas.chart.streamTo(chartsData.gas.canvas, 1000);

    // CHART END

});