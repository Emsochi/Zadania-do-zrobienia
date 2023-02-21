const chart = Highcharts.chart('container', {
    chart: {
        marginTop: 5
    },
    title: {
        text: 'Flats sold per month'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
        title: {
            text: 'Flats'
        }
    },

    series: [{
        data: [1, 3, 5, 2, 3, 9, 6, 7, 3, 5, 4, 3]
    },
    {
        data: [1, 1, 5, 2, 3, 9, 6, 7, 3, 5, 4, 3]
    },
    {
        data: [1, 3, 5, 2, 3, 13, 6, 7, 3, 5, 4, 3]
    }
]
});

$("#hideButton").click(() => {

    $("#container").fadeToggle(3000);

})

document.getElementById('series0Button').addEventListener('click', e => {
    let series = chart.series[0];
    if(series.visible) {
        series.hide();
    } else {
        series.show();
    }
})

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(54.52130680726065, 18.529986617243384),
      zoom:15,
    };
    const myLatLng = { lat: 54.52130680726065, lng: 18.529986617243384 };
    var map = new google.maps.Map(document.getElementById("myMap"),mapProp);
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      });
    }
