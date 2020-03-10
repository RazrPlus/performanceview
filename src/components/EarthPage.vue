<template>
        <div id="cesiumContainer" style="position:fixed;display: inline-block;width: 100%;height: 100%;"></div>
</template>

<script>
    export default {

        name: "EarthPage",
        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
        mounted() {
            var container = document.getElementById("cesiumContainer");
            var map = new window.FeMap(container);
            map.loadConfig(this.publicPath+"js/femap/Data/json/SDKconfig.json");
            //绘制线
            // var optLine = {
            //     positions: [[102,39,0],[105,39,0],[105,45,0]],
            //     showKeyPoints: true,
            //     clampToGround: true,
            //     color:"rgb(89,249,255)",
            //     alpha:0.8,
            //     keyPointColor:"rgb(89,249,255)"
            // };
            // var line = new window.FeLine(optLine);
            // map.addFeature(line);

            //绘制面
            // var optPolygon = {
            //     positions: [[112,39,0],[115,39,0],[115,45,0]],
            //     showKeyPoints: true,
            //     clampToGround: true,
            //     color:"rgb(89,249,255)",
            //     alpha:0.3,
            //     keyPointColor:"rgb(89,249,255)",
            //     outlineColor:"rgb(0,49,255)",
            //     outlineWidth: 3
            // };
            // var polygon = new window.FePolygon(optPolygon);
            // map.addFeature(polygon);
        },
        methods: {

        }
    }
</script>

<style scoped>
</style>