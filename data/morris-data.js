$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2018 Jan',
            iphone: 2334,
            ipad: null,
            itouch: 3434
        }, {
            period: '2018 Feb',
            iphone: 3434,
            ipad: 3434,
            itouch: 3434
        }, {
            period: '2018 Mar',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2018 Apr',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2018 May',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2018 Jun',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2018 Jul',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2018 Aug',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2018 Sep',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2018 Oct',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Online Purchases",
            value: 120
        }, {
            label: "In-Store Purchases",
            value: 300
        }, {
            label: "Other Purchases",
            value: 76
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
