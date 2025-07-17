var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MachineLearningClassification_Grid1km_2023_1 = new ol.format.GeoJSON();
var features_MachineLearningClassification_Grid1km_2023_1 = format_MachineLearningClassification_Grid1km_2023_1.readFeatures(json_MachineLearningClassification_Grid1km_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MachineLearningClassification_Grid1km_2023_1 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_MachineLearningClassification_Grid1km_2023_1.addFeatures(features_MachineLearningClassification_Grid1km_2023_1);
var lyr_MachineLearningClassification_Grid1km_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MachineLearningClassification_Grid1km_2023_1, 
                style: style_MachineLearningClassification_Grid1km_2023_1,
                popuplayertitle: 'Klasifikasi Kerentanan DBD (Machine Learning)_Grid 1 km_2023',
                interactive: true,
    title: 'Klasifikasi Kerentanan DBD (Machine Learning)_Grid 1 km_2023<br />\
    <img src="styles/legend/MachineLearningClassification_Grid1km_2023_1_0.png" /> Tinggi (60 - 100)<br />\
    <img src="styles/legend/MachineLearningClassification_Grid1km_2023_1_1.png" /> Sedang (30 - 60)<br />\
    <img src="styles/legend/MachineLearningClassification_Grid1km_2023_1_2.png" /> Rendah (0 - 30)<br />' });
var format_MachineLearningClassification_Desa_2023_2 = new ol.format.GeoJSON();
var features_MachineLearningClassification_Desa_2023_2 = format_MachineLearningClassification_Desa_2023_2.readFeatures(json_MachineLearningClassification_Desa_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MachineLearningClassification_Desa_2023_2 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_MachineLearningClassification_Desa_2023_2.addFeatures(features_MachineLearningClassification_Desa_2023_2);
var lyr_MachineLearningClassification_Desa_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MachineLearningClassification_Desa_2023_2, 
                style: style_MachineLearningClassification_Desa_2023_2,
                popuplayertitle: 'Klasifikasi Kerentanan DBD (Machine Learning)_Desa_2023',
                interactive: true,
    title: 'Klasifikasi Kerentanan DBD (Machine Learning)_Desa_2023<br />\
    <img src="styles/legend/MachineLearningClassification_Desa_2023_2_0.png" /> Rendah (0 - 30)<br />\
    <img src="styles/legend/MachineLearningClassification_Desa_2023_2_1.png" /> Sedang (30 - 60)<br />\
    <img src="styles/legend/MachineLearningClassification_Desa_2023_2_2.png" /> Tinggi (60 - 100)<br />' });
var format_MachineLearningClassification_Kecamatan_2023_3 = new ol.format.GeoJSON();
var features_MachineLearningClassification_Kecamatan_2023_3 = format_MachineLearningClassification_Kecamatan_2023_3.readFeatures(json_MachineLearningClassification_Kecamatan_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MachineLearningClassification_Kecamatan_2023_3 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_MachineLearningClassification_Kecamatan_2023_3.addFeatures(features_MachineLearningClassification_Kecamatan_2023_3);
var lyr_MachineLearningClassification_Kecamatan_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MachineLearningClassification_Kecamatan_2023_3, 
                style: style_MachineLearningClassification_Kecamatan_2023_3,
                popuplayertitle: 'Klasifikasi Kerentanan DBD (Machine Learning)_Kecamatan_2023',
                interactive: true,
    title: 'Klasifikasi Kerentanan DBD (Machine Learning)_Kecamatan_2023<br />\
    <img src="styles/legend/MachineLearningClassification_Kecamatan_2023_3_0.png" /> Rendah (0 - 30)<br />\
    <img src="styles/legend/MachineLearningClassification_Kecamatan_2023_3_1.png" /> Sedang (30 - 60)<br />\
    <img src="styles/legend/MachineLearningClassification_Kecamatan_2023_3_2.png" /> Tinggi (60 - 100)<br />' });
var format_MachineLearningClassification_Kabupaten_2023_4 = new ol.format.GeoJSON();
var features_MachineLearningClassification_Kabupaten_2023_4 = format_MachineLearningClassification_Kabupaten_2023_4.readFeatures(json_MachineLearningClassification_Kabupaten_2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MachineLearningClassification_Kabupaten_2023_4 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_MachineLearningClassification_Kabupaten_2023_4.addFeatures(features_MachineLearningClassification_Kabupaten_2023_4);
var lyr_MachineLearningClassification_Kabupaten_2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MachineLearningClassification_Kabupaten_2023_4, 
                style: style_MachineLearningClassification_Kabupaten_2023_4,
                popuplayertitle: 'Klasifikasi Kerentanan DBD (Machine Learning)_Kabupaten_2023',
                interactive: true,
    title: 'Klasifikasi Kerentanan DBD (Machine Learning)_Kabupaten_2023<br />\
    <img src="styles/legend/MachineLearningClassification_Kabupaten_2023_4_0.png" /> Rendah (0 - 30)<br />\
    <img src="styles/legend/MachineLearningClassification_Kabupaten_2023_4_1.png" /> Sedang (30 - 60)<br />\
    <img src="styles/legend/MachineLearningClassification_Kabupaten_2023_4_2.png" /> Tinggi (60 - 100)<br />' });

    var format_WSMCorrelation_Grid_2018_5 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2018_5 = format_WSMCorrelation_Grid_2018_5.readFeatures(json_WSMCorrelation_Grid_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2018_5.addFeatures(features_WSMCorrelation_Grid_2018_5);
var lyr_WSMCorrelation_Grid_2018_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2018_5, 
                style: style_WSMCorrelation_Grid_2018_5,
                popuplayertitle: 'SGDVI_Grid 1 km_2018',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2018<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2018_5_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2018_5_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2018_5_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2018_6 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2018_6 = format_WSMCorrelation_Desa_2018_6.readFeatures(json_WSMCorrelation_Desa_2018_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2018_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2018_6.addFeatures(features_WSMCorrelation_Desa_2018_6);
var lyr_WSMCorrelation_Desa_2018_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2018_6, 
                style: style_WSMCorrelation_Desa_2018_6,
                popuplayertitle: 'SGDVI_Desa_2018',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2018<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2018_6_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2018_6_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2018_6_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2018_7 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2018_7 = format_WSMCorrelation_Kecamatan_2018_7.readFeatures(json_WSMCorrelation_Kecamatan_2018_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2018_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2018_7.addFeatures(features_WSMCorrelation_Kecamatan_2018_7);
var lyr_WSMCorrelation_Kecamatan_2018_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2018_7, 
                style: style_WSMCorrelation_Kecamatan_2018_7,
                popuplayertitle: 'SGDVI_Kecamatan_2018',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2018<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2018_7_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2018_7_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2018_7_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2018_8 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2018_8 = format_WSMCorrelation_Kabupaten_2018_8.readFeatures(json_WSMCorrelation_Kabupaten_2018_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2018_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2018_8.addFeatures(features_WSMCorrelation_Kabupaten_2018_8);
var lyr_WSMCorrelation_Kabupaten_2018_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2018_8, 
                style: style_WSMCorrelation_Kabupaten_2018_8,
                popuplayertitle: 'SGDVI_Kabupaten_2018',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2018<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2018_8_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2018_8_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2018_8_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Grid_2019_9 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2019_9 = format_WSMCorrelation_Grid_2019_9.readFeatures(json_WSMCorrelation_Grid_2019_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2019_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2019_9.addFeatures(features_WSMCorrelation_Grid_2019_9);
var lyr_WSMCorrelation_Grid_2019_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2019_9, 
                style: style_WSMCorrelation_Grid_2019_9,
                popuplayertitle: 'SGDVI_Grid 1 km_2019',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2019<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2019_9_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2019_9_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2019_9_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2019_10 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2019_10 = format_WSMCorrelation_Desa_2019_10.readFeatures(json_WSMCorrelation_Desa_2019_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2019_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2019_10.addFeatures(features_WSMCorrelation_Desa_2019_10);
var lyr_WSMCorrelation_Desa_2019_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2019_10, 
                style: style_WSMCorrelation_Desa_2019_10,
                popuplayertitle: 'SGDVI_Desa_2019',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2019<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2019_10_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2019_10_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2019_10_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2019_11 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2019_11 = format_WSMCorrelation_Kecamatan_2019_11.readFeatures(json_WSMCorrelation_Kecamatan_2019_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2019_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2019_11.addFeatures(features_WSMCorrelation_Kecamatan_2019_11);
var lyr_WSMCorrelation_Kecamatan_2019_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2019_11, 
                style: style_WSMCorrelation_Kecamatan_2019_11,
                popuplayertitle: 'SGDVI_Kecamatan_2019',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2019<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2019_11_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2019_11_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2019_11_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2019_12 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2019_12 = format_WSMCorrelation_Kabupaten_2019_12.readFeatures(json_WSMCorrelation_Kabupaten_2019_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2019_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2019_12.addFeatures(features_WSMCorrelation_Kabupaten_2019_12);
var lyr_WSMCorrelation_Kabupaten_2019_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2019_12, 
                style: style_WSMCorrelation_Kabupaten_2019_12,
                popuplayertitle: 'SGDVI_Kabupaten_2019',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2019<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2019_12_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2019_12_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2019_12_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Grid_2020_13 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2020_13 = format_WSMCorrelation_Grid_2020_13.readFeatures(json_WSMCorrelation_Grid_2020_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2020_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2020_13.addFeatures(features_WSMCorrelation_Grid_2020_13);
var lyr_WSMCorrelation_Grid_2020_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2020_13, 
                style: style_WSMCorrelation_Grid_2020_13,
                popuplayertitle: 'SGDVI_Grid 1 km_2020',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2020<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2020_13_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2020_13_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2020_13_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2020_14 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2020_14 = format_WSMCorrelation_Desa_2020_14.readFeatures(json_WSMCorrelation_Desa_2020_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2020_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2020_14.addFeatures(features_WSMCorrelation_Desa_2020_14);
var lyr_WSMCorrelation_Desa_2020_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2020_14, 
                style: style_WSMCorrelation_Desa_2020_14,
                popuplayertitle: 'SGDVI_Desa_2020',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2020<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2020_14_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2020_14_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2020_14_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2020_15 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2020_15 = format_WSMCorrelation_Kecamatan_2020_15.readFeatures(json_WSMCorrelation_Kecamatan_2020_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2020_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2020_15.addFeatures(features_WSMCorrelation_Kecamatan_2020_15);
var lyr_WSMCorrelation_Kecamatan_2020_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2020_15, 
                style: style_WSMCorrelation_Kecamatan_2020_15,
                popuplayertitle: 'SGDVI_Kecamatan_2020',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2020<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2020_15_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2020_15_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2020_15_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2020_16 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2020_16 = format_WSMCorrelation_Kabupaten_2020_16.readFeatures(json_WSMCorrelation_Kabupaten_2020_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2020_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2020_16.addFeatures(features_WSMCorrelation_Kabupaten_2020_16);
var lyr_WSMCorrelation_Kabupaten_2020_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2020_16, 
                style: style_WSMCorrelation_Kabupaten_2020_16,
                popuplayertitle: 'SGDVI_Kabupaten_2020',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2020<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2020_16_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2020_16_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2020_16_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Grid_2021_17 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2021_17 = format_WSMCorrelation_Grid_2021_17.readFeatures(json_WSMCorrelation_Grid_2021_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2021_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2021_17.addFeatures(features_WSMCorrelation_Grid_2021_17);
var lyr_WSMCorrelation_Grid_2021_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2021_17, 
                style: style_WSMCorrelation_Grid_2021_17,
                popuplayertitle: 'SGDVI_Grid 1 km_2021',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2021<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2021_17_0.png" /> 0,1 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2021_17_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2021_17_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2021_18 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2021_18 = format_WSMCorrelation_Desa_2021_18.readFeatures(json_WSMCorrelation_Desa_2021_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2021_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2021_18.addFeatures(features_WSMCorrelation_Desa_2021_18);
var lyr_WSMCorrelation_Desa_2021_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2021_18, 
                style: style_WSMCorrelation_Desa_2021_18,
                popuplayertitle: 'SGDVI_Desa_2021',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2021<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2021_18_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2021_18_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2021_18_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2021_19 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2021_19 = format_WSMCorrelation_Kecamatan_2021_19.readFeatures(json_WSMCorrelation_Kecamatan_2021_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2021_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2021_19.addFeatures(features_WSMCorrelation_Kecamatan_2021_19);
var lyr_WSMCorrelation_Kecamatan_2021_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2021_19, 
                style: style_WSMCorrelation_Kecamatan_2021_19,
                popuplayertitle: 'SGDVI_Kecamatan_2021',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2021<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2021_19_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2021_19_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2021_19_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2021_20 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2021_20 = format_WSMCorrelation_Kabupaten_2021_20.readFeatures(json_WSMCorrelation_Kabupaten_2021_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2021_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2021_20.addFeatures(features_WSMCorrelation_Kabupaten_2021_20);
var lyr_WSMCorrelation_Kabupaten_2021_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2021_20, 
                style: style_WSMCorrelation_Kabupaten_2021_20,
                popuplayertitle: 'SGDVI_Kabupaten_2021',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2021<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2021_20_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2021_20_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2021_20_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Grid_2022_21 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2022_21 = format_WSMCorrelation_Grid_2022_21.readFeatures(json_WSMCorrelation_Grid_2022_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2022_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2022_21.addFeatures(features_WSMCorrelation_Grid_2022_21);
var lyr_WSMCorrelation_Grid_2022_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2022_21, 
                style: style_WSMCorrelation_Grid_2022_21,
                popuplayertitle: 'SGDVI_Grid 1 km_2022',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2022<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2022_21_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2022_21_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2022_21_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2022_22 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2022_22 = format_WSMCorrelation_Desa_2022_22.readFeatures(json_WSMCorrelation_Desa_2022_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2022_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2022_22.addFeatures(features_WSMCorrelation_Desa_2022_22);
var lyr_WSMCorrelation_Desa_2022_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2022_22, 
                style: style_WSMCorrelation_Desa_2022_22,
                popuplayertitle: 'SGDVI_Desa_2022',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2022<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2022_22_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2022_22_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2022_22_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2022_23 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2022_23 = format_WSMCorrelation_Kecamatan_2022_23.readFeatures(json_WSMCorrelation_Kecamatan_2022_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2022_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2022_23.addFeatures(features_WSMCorrelation_Kecamatan_2022_23);
var lyr_WSMCorrelation_Kecamatan_2022_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2022_23, 
                style: style_WSMCorrelation_Kecamatan_2022_23,
                popuplayertitle: 'SGDVI_Kecamatan_2022',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2022<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2022_23_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2022_23_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2022_23_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2022_24 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2022_24 = format_WSMCorrelation_Kabupaten_2022_24.readFeatures(json_WSMCorrelation_Kabupaten_2022_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2022_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2022_24.addFeatures(features_WSMCorrelation_Kabupaten_2022_24);
var lyr_WSMCorrelation_Kabupaten_2022_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2022_24, 
                style: style_WSMCorrelation_Kabupaten_2022_24,
                popuplayertitle: 'SGDVI_Kabupaten_2022',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2022<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2022_24_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2022_24_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2022_24_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Grid_2023_25 = new ol.format.GeoJSON();
var features_WSMCorrelation_Grid_2023_25 = format_WSMCorrelation_Grid_2023_25.readFeatures(json_WSMCorrelation_Grid_2023_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Grid_2023_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Grid_2023_25.addFeatures(features_WSMCorrelation_Grid_2023_25);
var lyr_WSMCorrelation_Grid_2023_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Grid_2023_25, 
                style: style_WSMCorrelation_Grid_2023_25,
                popuplayertitle: 'SGDVI_Grid 1 km_2023',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Grid 1 km_2023<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2023_25_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2023_25_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Grid_2023_25_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Desa_2023_26 = new ol.format.GeoJSON();
var features_WSMCorrelation_Desa_2023_26 = format_WSMCorrelation_Desa_2023_26.readFeatures(json_WSMCorrelation_Desa_2023_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Desa_2023_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Desa_2023_26.addFeatures(features_WSMCorrelation_Desa_2023_26);
var lyr_WSMCorrelation_Desa_2023_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Desa_2023_26, 
                style: style_WSMCorrelation_Desa_2023_26,
                popuplayertitle: 'SGDVI_Desa_2023',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Desa_2023<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2023_26_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2023_26_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Desa_2023_26_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kecamatan_2023_27 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kecamatan_2023_27 = format_WSMCorrelation_Kecamatan_2023_27.readFeatures(json_WSMCorrelation_Kecamatan_2023_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kecamatan_2023_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kecamatan_2023_27.addFeatures(features_WSMCorrelation_Kecamatan_2023_27);
var lyr_WSMCorrelation_Kecamatan_2023_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kecamatan_2023_27, 
                style: style_WSMCorrelation_Kecamatan_2023_27,
                popuplayertitle: 'SGDVI_Kecamatan_2023',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kecamatan_2023<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2023_27_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2023_27_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kecamatan_2023_27_2.png" /> 0,6 - 1<br />' });
var format_WSMCorrelation_Kabupaten_2023_28 = new ol.format.GeoJSON();
var features_WSMCorrelation_Kabupaten_2023_28 = format_WSMCorrelation_Kabupaten_2023_28.readFeatures(json_WSMCorrelation_Kabupaten_2023_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSMCorrelation_Kabupaten_2023_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSMCorrelation_Kabupaten_2023_28.addFeatures(features_WSMCorrelation_Kabupaten_2023_28);
var lyr_WSMCorrelation_Kabupaten_2023_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSMCorrelation_Kabupaten_2023_28, 
                style: style_WSMCorrelation_Kabupaten_2023_28,
                popuplayertitle: 'SGDVI_Kabupaten_2023',
                interactive: true,
    title: 'Spatial Granularity Dengue Vulnerability Index_Kabupaten_2023<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2023_28_0.png" /> 0 - 0,3<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2023_28_1.png" /> 0,3 - 0,6<br />\
    <img src="styles/legend/WSMCorrelation_Kabupaten_2023_28_2.png" /> 0,6 - 1<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MachineLearningClassification_Grid1km_2023_1.setVisible(false);lyr_MachineLearningClassification_Desa_2023_2.setVisible(false);lyr_MachineLearningClassification_Kecamatan_2023_3.setVisible(false);lyr_MachineLearningClassification_Kabupaten_2023_4.setVisible(false);lyr_WSMCorrelation_Grid_2018_5.setVisible(false);lyr_WSMCorrelation_Desa_2018_6.setVisible(false);lyr_WSMCorrelation_Kecamatan_2018_7.setVisible(false);lyr_WSMCorrelation_Kabupaten_2018_8.setVisible(false);lyr_WSMCorrelation_Grid_2019_9.setVisible(false);lyr_WSMCorrelation_Desa_2019_10.setVisible(false);lyr_WSMCorrelation_Kecamatan_2019_11.setVisible(false);lyr_WSMCorrelation_Kabupaten_2019_12.setVisible(false);lyr_WSMCorrelation_Grid_2020_13.setVisible(false);lyr_WSMCorrelation_Desa_2020_14.setVisible(false);lyr_WSMCorrelation_Kecamatan_2020_15.setVisible(false);lyr_WSMCorrelation_Kabupaten_2020_16.setVisible(false);lyr_WSMCorrelation_Grid_2021_17.setVisible(false);lyr_WSMCorrelation_Desa_2021_18.setVisible(false);lyr_WSMCorrelation_Kecamatan_2021_19.setVisible(false);lyr_WSMCorrelation_Kabupaten_2021_20.setVisible(false);lyr_WSMCorrelation_Grid_2022_21.setVisible(false);lyr_WSMCorrelation_Desa_2022_22.setVisible(false);lyr_WSMCorrelation_Kecamatan_2022_23.setVisible(false);lyr_WSMCorrelation_Kabupaten_2022_24.setVisible(false);lyr_WSMCorrelation_Grid_2023_25.setVisible(true);lyr_WSMCorrelation_Desa_2023_26.setVisible(false);lyr_WSMCorrelation_Kecamatan_2023_27.setVisible(false);lyr_WSMCorrelation_Kabupaten_2023_28.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_MachineLearningClassification_Grid1km_2023_1,lyr_MachineLearningClassification_Desa_2023_2,lyr_MachineLearningClassification_Kecamatan_2023_3,lyr_MachineLearningClassification_Kabupaten_2023_4,lyr_WSMCorrelation_Grid_2018_5,lyr_WSMCorrelation_Desa_2018_6,lyr_WSMCorrelation_Kecamatan_2018_7,lyr_WSMCorrelation_Kabupaten_2018_8,lyr_WSMCorrelation_Grid_2019_9,lyr_WSMCorrelation_Desa_2019_10,lyr_WSMCorrelation_Kecamatan_2019_11,lyr_WSMCorrelation_Kabupaten_2019_12,lyr_WSMCorrelation_Grid_2020_13,lyr_WSMCorrelation_Desa_2020_14,lyr_WSMCorrelation_Kecamatan_2020_15,lyr_WSMCorrelation_Kabupaten_2020_16,lyr_WSMCorrelation_Grid_2021_17,lyr_WSMCorrelation_Desa_2021_18,lyr_WSMCorrelation_Kecamatan_2021_19,lyr_WSMCorrelation_Kabupaten_2021_20,lyr_WSMCorrelation_Grid_2022_21,lyr_WSMCorrelation_Desa_2022_22,lyr_WSMCorrelation_Kecamatan_2022_23,lyr_WSMCorrelation_Kabupaten_2022_24,lyr_WSMCorrelation_Grid_2023_25,lyr_WSMCorrelation_Desa_2023_26,lyr_WSMCorrelation_Kecamatan_2023_27,lyr_WSMCorrelation_Kabupaten_2023_28];
lyr_MachineLearningClassification_Grid1km_2023_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'kabkot': 'Kabupaten/Kota', 'kecamatan': 'Kecamatan', 'tahun': 'Tahun', 'prediksi_y': 'Klasifikasi Kerentanan DBD', });
lyr_MachineLearningClassification_Desa_2023_2.set('fieldAliases', {'KODE_DESA': 'KODE_DESA', 'DESA': 'Desa', 'KAB_KOTA': 'Kabupaten/Kota', 'KECAMATAN': 'Kecamatan', 'tahun': 'Tahun', 'prediksi_y': 'Klasifikasi Kerentanan DBD', });
lyr_MachineLearningClassification_Kecamatan_2023_3.set('fieldAliases', {'No': 'No', 'Objek': 'Objek', 'Kode_Kab': 'Kode_Kab', 'Kode_Kec': 'Kode_Kec', 'Provinsi': 'Provinsi', 'Kab_Kota': 'Kabupaten/Kota', 'Kecamatan': 'Kecamatan', 'tahun': 'Tahun', 'predicted_label': 'Klasifikasi Kerentanan DBD', });
lyr_MachineLearningClassification_Kabupaten_2023_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'tahun': 'Tahun', 'prediksi_y': 'Klasifikasi Kerentanan DBD', });
lyr_WSMCorrelation_Grid_2023_25.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'kabkot': 'Kabupaten/Kota', 'kecamatan': 'Kecamatan', 'tahun': 'Tahun', 'equal': 'equal', 'corr': 'corr', 'corr_no': 'corr_no', 'pca': 'pca', 'entropy': 'SGDVI', 'entropy_no': 'entropy_no', });
lyr_WSMCorrelation_Desa_2023_26.set('fieldAliases', {'KODE_DESA': 'KODE_DESA', 'DESA': 'Desa', 'KAB_KOTA': 'Kabupaten/Kota', 'KECAMATAN': 'Kecamatan', 'tahun_mean': 'Tahun', 'equal_mean': 'equal_mean', 'corr_mean': 'corr_mean', 'corr_no_me': 'corr_no_mean', 'pca_mean': 'pca_mean', 'entropy_me': 'SGDVI', 'entropy_no': 'entropy_no_mean',});
lyr_WSMCorrelation_Kecamatan_2023_27.set('fieldAliases', {'No': 'No', 'Objek': 'Objek', 'Kode_Kab': 'Kode_Kab', 'Kode_Kec': 'Kode_Kec', 'Provinsi': 'Provinsi', 'Kab_Kota': 'Kabupaten/Kota', 'Kecamatan': 'Kecamatan', 'tahun_mean': 'Tahun', 'equal_mean': 'equal_mean', 'corr_mean': 'corr_mean', 'corr_no_mean': 'corr_no_mean', 'pca_mean': 'pca_mean', 'entropy_mean': 'SGDVI', 'entropy_no_mean': 'entropy_no_mean',});
lyr_WSMCorrelation_Kabupaten_2023_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'tahun_mean': 'Tahun', 'equal_mean': 'equal_mean', 'corr_mean': 'corr_mean', 'corr_no_mean': 'corr_no_mean', 'pca_mean': 'pca_mean', 'entropy_mean': 'SGDVI', 'entropy_no_mean': 'entropy_no_mean',});
lyr_MachineLearningClassification_Grid1km_2023_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'kabkot': 'TextEdit', 'kecamatan': 'TextEdit', 'tahun': 'Range', 'prediksi_y': 'Range', });
lyr_MachineLearningClassification_Desa_2023_2.set('fieldImages', {'KODE_DESA': 'TextEdit', 'DESA': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'tahun': 'Range', 'prediksi_y': 'Range', });
lyr_MachineLearningClassification_Kecamatan_2023_3.set('fieldImages', {'No': 'TextEdit', 'Objek': 'TextEdit', 'Kode_Kab': 'TextEdit', 'Kode_Kec': 'TextEdit', 'Provinsi': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'tahun': 'Range', 'predicted_label': 'Range', });
lyr_MachineLearningClassification_Kabupaten_2023_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'tahun': 'Range', 'prediksi_y': 'Range', });
lyr_WSMCorrelation_Grid_2023_25.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'kabkot': 'TextEdit', 'kecamatan': 'TextEdit', 'tahun': 'Range', 'equal': 'TextEdit', 'corr': 'TextEdit', 'corr_no': 'TextEdit', 'pca': 'TextEdit', 'entropy': 'TextEdit', 'entropy_no': 'TextEdit', });
lyr_WSMCorrelation_Desa_2023_26.set('fieldImages', {'KODE_DESA': 'TextEdit', 'DESA': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'tahun_mean': 'Range', 'equal_mean': 'TextEdit', 'corr_mean': 'TextEdit', 'corr_no_mean': 'TextEdit', 'pca_mean': 'TextEdit', 'entropy_mean': 'TextEdit', 'entropy_no_mean': 'TextEdit', 'minmax_corr_no_mean': 'TextEdit', 'minmax_entropy_no_mean': 'TextEdit', });
lyr_WSMCorrelation_Kecamatan_2023_27.set('fieldImages', {'No': 'TextEdit', 'Objek': 'TextEdit', 'Kode_Kab': 'TextEdit', 'Kode_Kec': 'TextEdit', 'Provinsi': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'tahun_mean': 'Range', 'equal_mean': 'TextEdit', 'corr_mean': 'TextEdit', 'corr_no_mean': 'TextEdit', 'pca_mean': 'TextEdit', 'entropy_mean': 'TextEdit', 'entropy_no_mean': 'TextEdit', 'minmax_corr_no_mean': 'TextEdit', 'minmax_entropy_no_mean': 'TextEdit', 'prevalensi_dbd_per40.000pend': 'TextEdit', });
lyr_WSMCorrelation_Kabupaten_2023_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'tahun_mean': 'Range', 'equal_mean': 'TextEdit', 'corr_mean': 'TextEdit', 'corr_no_mean': 'TextEdit', 'pca_mean': 'TextEdit', 'entropy_mean': 'TextEdit', 'entropy_no_mean': 'TextEdit', 'minmax_corr_no_mean': 'TextEdit', 'minmax_entropy_no_mean': 'TextEdit', 'prevalensi_dbd_per40.000pend': 'TextEdit', });
lyr_MachineLearningClassification_Grid1km_2023_1.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'kabkot': 'inline label - visible with data', 'kecamatan': 'inline label - visible with data', 'tahun': 'inline label - visible with data', 'prediksi_y': 'inline label - visible with data', });
lyr_MachineLearningClassification_Desa_2023_2.set('fieldLabels', {'KODE_DESA': 'hidden field', 'DESA': 'inline label - visible with data', 'KAB_KOTA': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'tahun': 'inline label - visible with data', 'prediksi_y': 'inline label - visible with data', });
lyr_MachineLearningClassification_Kecamatan_2023_3.set('fieldLabels', {'No': 'hidden field', 'Objek': 'hidden field', 'Kode_Kab': 'hidden field', 'Kode_Kec': 'hidden field', 'Provinsi': 'hidden field', 'Kab_Kota': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'tahun': 'inline label - visible with data', 'predicted_label': 'inline label - visible with data', });
lyr_MachineLearningClassification_Kabupaten_2023_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'tahun': 'inline label - visible with data', 'prediksi_y': 'inline label - visible with data', });
lyr_WSMCorrelation_Grid_2023_25.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'kabkot': 'inline label - visible with data', 'kecamatan': 'inline label - visible with data', 'tahun': 'inline label - visible with data', 'equal': 'hidden field', 'corr': 'hidden field', 'corr_no': 'hidden field', 'pca': 'hidden field', 'entropy': 'inline label - visible with data', 'entropy_no': 'hidden field', });
lyr_WSMCorrelation_Desa_2023_26.set('fieldLabels', {'KODE_DESA': 'hidden field', 'DESA': 'inline label - visible with data', 'KAB_KOTA': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'tahun_mean': 'inline label - visible with data', 'equal_mean': 'hidden field', 'corr_mean': 'hidden field', 'corr_no_me': 'hidden field', 'pca_mean': 'hidden field', 'entropy_me': 'inline label - visible with data', 'entropy_no': 'hidden field', });
lyr_WSMCorrelation_Kecamatan_2023_27.set('fieldLabels', {'No': 'hidden field', 'Objek': 'hidden field', 'Kode_Kab': 'hidden field', 'Kode_Kec': 'hidden field', 'Provinsi': 'hidden field', 'Kab_Kota': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'tahun_mean': 'inline label - visible with data', 'equal_mean': 'hidden field', 'corr_mean': 'hidden field', 'corr_no_mean': 'hidden field', 'pca_mean': 'hidden field', 'entropy_mean': 'inline label - visible with data', 'entropy_no_mean': 'hidden field', 'prevalensi_dbd_per40.000pend': 'hidden field', });
lyr_WSMCorrelation_Kabupaten_2023_28.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'tahun_mean': 'inline label - visible with data', 'equal_mean': 'hidden field', 'corr_mean': 'hidden field', 'corr_no_mean': 'hidden field', 'pca_mean': 'hidden field', 'entropy_mean': 'inline label - visible with data', 'entropy_no_mean': 'hidden field', 'prevalensi_dbd_per40.000pend': 'hidden field', });
lyr_WSMCorrelation_Kabupaten_2023_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});