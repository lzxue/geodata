var fs = require('fs');
var data = require('./data/province.json');
const features = data.features;
features.map((fe)=>{
    // console.log(`curl http://xzqh.mca.gov.cn/data/${fe.properties.QUHUADAIMA}.json > ${fe.properties.QUHUADAIMA}.json`);
    console.log(`curl http://xzqh.mca.gov.cn/data/${fe.properties.QUHUADAIMA}_Line.geojson > ${fe.properties.QUHUADAIMA}_Line.json`);
    console.log(`curl http://xzqh.mca.gov.cn/data/${fe.properties.QUHUADAIMA}_Point.geojson > ${fe.properties.QUHUADAIMA}_Point.json`);
    // console.log(`curl http://xzqh.mca.gov.cn/data/${fe.properties.QUHUADAIMA}_xian.json > ${fe.properties.QUHUADAIMA}_Xian.json`); 
})