var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ULB_Boundary_1 = new ol.format.GeoJSON();
var features_ULB_Boundary_1 = format_ULB_Boundary_1.readFeatures(json_ULB_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULB_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULB_Boundary_1.addFeatures(features_ULB_Boundary_1);
var lyr_ULB_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULB_Boundary_1, 
                style: style_ULB_Boundary_1,
                popuplayertitle: "ULB_Boundary",
                interactive: true,
                title: '<img src="styles/legend/ULB_Boundary_1.png" /> ULB_Boundary'
            });
var format_STPs_2 = new ol.format.GeoJSON();
var features_STPs_2 = format_STPs_2.readFeatures(json_STPs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STPs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_2.addFeatures(features_STPs_2);
var lyr_STPs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_2, 
                style: style_STPs_2,
                popuplayertitle: "STPs",
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_2_0.png" /> NSTP<br />\
    <img src="styles/legend/STPs_2_1.png" /> STP<br />\
    <img src="styles/legend/STPs_2_2.png" /> <br />'
        });
var format_AP_3 = new ol.format.GeoJSON();
var features_AP_3 = format_AP_3.readFeatures(json_AP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_3.addFeatures(features_AP_3);
var lyr_AP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_3, 
                style: style_AP_3,
                popuplayertitle: "AP",
                interactive: true,
                title: '<img src="styles/legend/AP_3.png" /> AP'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ULB_Boundary_1.setVisible(true);lyr_STPs_2.setVisible(true);lyr_AP_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ULB_Boundary_1,lyr_STPs_2,lyr_AP_3];
lyr_ULB_Boundary_1.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULB', 'Total_ulb': 'Total No. of Projects (STP+NSTP)', 'No_STP': 'No of STP', 'No_NSTP': 'No of NSTP', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of STP', 'Total_Pop': 'Total_Pop', });
lyr_STPs_2.set('fieldAliases', {'UN_ID': 'UN_ID', 'DIST_NAME': 'District Name', 'ULB_NAME': 'Name of ULB', 'LOCATION': 'STP Location', 'CAPACITY_M': 'Proposed  STP Capacity (MLD)', 'TYPE': 'TYPE', 'TECHNOLOGY': 'TECHNOLOGY', 'LAND_OWNER': 'Land Ownership', 'LAND_REQ': 'Land Required(AC)', 'STATUS_POS': 'Status of Land Possession', 'PROJ_ST_1': 'Status of Construction(20-09-2024)', 'PROJ_ST_2': 'Status of Construction(25-09-2024)', 'Proj_Cost': 'Proj_Cost', });
lyr_AP_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_ULB_Boundary_1.set('fieldImages', {'Shape_Area': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'TextEdit', });
lyr_STPs_2.set('fieldImages', {'UN_ID': 'Range', 'DIST_NAME': 'TextEdit', 'ULB_NAME': 'TextEdit', 'LOCATION': 'TextEdit', 'CAPACITY_M': 'TextEdit', 'TYPE': 'TextEdit', 'TECHNOLOGY': 'TextEdit', 'LAND_OWNER': 'TextEdit', 'LAND_REQ': 'TextEdit', 'STATUS_POS': 'TextEdit', 'PROJ_ST_1': 'TextEdit', 'PROJ_ST_2': 'TextEdit', 'Proj_Cost': 'TextEdit', });
lyr_AP_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ULB_Boundary_1.set('fieldLabels', {'Shape_Area': 'inline label - always visible', 'UN_ID': 'inline label - always visible', 'Name_ULB': 'inline label - always visible', 'Total_ulb': 'inline label - always visible', 'No_STP': 'inline label - always visible', 'No_NSTP': 'inline label - always visible', 'Status_con': 'inline label - always visible', 'Status_STP': 'inline label - always visible', 'Total_Pop': 'inline label - always visible', });
lyr_STPs_2.set('fieldLabels', {'UN_ID': 'inline label - always visible', 'DIST_NAME': 'inline label - always visible', 'ULB_NAME': 'inline label - always visible', 'LOCATION': 'inline label - always visible', 'CAPACITY_M': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'TECHNOLOGY': 'inline label - always visible', 'LAND_OWNER': 'inline label - always visible', 'LAND_REQ': 'inline label - always visible', 'STATUS_POS': 'inline label - always visible', 'PROJ_ST_1': 'inline label - always visible', 'PROJ_ST_2': 'inline label - always visible', 'Proj_Cost': 'inline label - always visible', });
lyr_AP_3.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_AP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});