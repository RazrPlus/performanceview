<template>
    <div id="mainDiv">
        <section class="hs-scrollView">
            <div class="hs-palace">
                <a @click="clickType('weapon')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/weapon.png" alt="装备数据">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[dataCode=='weapon'?'selectType':'']">装备数据</h2>
                    </div>
                </a>
                <a @click="clickType('army')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/army.png" alt="部队编制">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[dataCode=='army'?'selectType':'']">部队编制</h2>
                    </div>
                </a>
                <a @click="clickType('earth')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/earth.png" alt="部署数据">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[dataCode=='earth'?'selectType':'']">部署数据</h2>
                    </div>
                </a>

            </div>
            <div class="hs-flex hs-flex-five" style="height: 55px">
                <div class="hs-flex-box">
                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                        <div>
                            <a @click="treeMenuSelect()"><img src="../../public/images/backup.png"
                                                              style="width: 40px"></a>
                        </div>
                        <div style="width: 2px;border-left: solid #b8aeae 1px"></div>
                        <div style="width: 85%">
                            <el-input style="width: 100%" placeholder="请输入内容" v-model="searchString"
                                      class="input-with-select">
                                <el-select style="width: 110px" v-model="countryType" slot="prepend"
                                           placeholder="国别/地区">
                                    <el-option label="中国" value="1"></el-option>
                                    <el-option label="美国" value="2"></el-option>
                                    <el-option label="日本" value="3"></el-option>
                                </el-select>
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </div>

                </div>
            </div>

            <div v-if="dataCode=='weapon'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>实体型号（10000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>组件模型（30000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(3)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>卫星轨道（20000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(4)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞机（20000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>水面舰艇（3000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>潜艇（4000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>地面兵力与设施（3000）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>卫星（63205）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>武器（653862）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>传感器（68963）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>通信/数据链（789653）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>推进系统（639876）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>战斗部（696853）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>弹药库（896532）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>挂载方案（696853）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>挂架（635987）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==3?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>侦察卫星（696658）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>导航定位卫星（965876）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>军用通信卫星（6965586）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==4?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>固定翼飞机（636985）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>旋转翼直升机（698653）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>飞艇类（632596）</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect('entity')" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/nodeIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>MH-60A型“黑鹰”运输机</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId=='entity'?'tab-panel-item tab-active':'tab-panel-item']">
                        <div>
                            <div style="margin: 20px;text-align: center">MH-60A型“黑鹰”运输机</div>
                            <div style="margin-bottom: 20px;text-align: center">
                                <img style="width: 300px" src="../../public/images/aircraft.jpeg">
                            </div>
                            <el-collapse v-model="activeCard">
                                <el-collapse-item name="1">
                                    <template slot="title">
                                        <P style="font-weight:700;">总体数据</P>
                                    </template>
                                    <div style="margin: 10px">
                                        <p>类别:直升机</p>
                                        <p>飞机尺寸: 中型飞机(12.1-18米长)</p>
                                        <p>类型:运输机</p>
                                        <p>灵敏性:1</p>
                                        <p>长度:15.3 米</p>
                                        <p>平均爬升率:</p>
                                        <p>翼展:2.4 米</p>
                                        <p>瞬时爬升率, S/L:16 米/秒</p>
                                        <p>高度:5.1 米</p>
                                        <p>起飞/降落距离:0米 (VTOL) TOD/LAD</p>
                                        <p>人员:4</p>
                                        <p>驾驶员视野:前面:好；侧面:中；后面:差</p>
                                        <p>空载重量: 4819千克</p>
                                        <p>装甲:机身: 无；座舱: 无；发动机: 无</p>
                                        <p>最大重量: 11113千克</p>
                                        <p>造价:0 百万￥</p>
                                        <p>最大载荷重量: 0 千克</p>
                                        <p>OODA周期: 探测: 15秒 OODA (反应时间)；
                                            瞄准: 30秒 (新手)；
                                            22.5秒 (实习)；
                                            18秒 (普通)；
                                            15秒 (老手)；
                                            12秒 (顶级)；
                                            规避: 2秒</p>

                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="2">
                                    <template slot="title">
                                        <P style="font-weight:700;">传感器/电子战</P>
                                    </template>
                                    <div>
                                        <table width='100%' align='Center' border='1' bordercolor='Silver'
                                               cellpadding='2'
                                               cellspacing='0' rules='rows'
                                               style='font-family:  Times New Roman
    ; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal;
    line-height: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal;
    widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color:
    white; border: 1px none silver; height: 10px; border-collapse: collapse;'>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;font-weight:bold;'>
                                                <td>型号</td>
                                                <td>能力</td>
                                            </tr>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;'>
                                                <td valign='top'>1x AN/AAQ-16 AESOP型红外系统</td>
                                                <td valign='top'>红外装置，第二代成像装置 (1980s/1990s, 夜间低空导航暨红外线瞄准夹舱,
                                                    格鲁曼公司的蓝亭)技术水平, 对海搜索,
                                                    对地搜索(高度), 对地搜索(机动), 测向信息
                                                </td>
                                            </tr>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;'>
                                                <td valign='top'>1x AN/APR-39(V)1型雷达告警接收机</td>
                                                <td valign='top'>1960年代晚期技术水平, 对空搜索, 对海搜索</td>
                                            </tr>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;'>
                                                <td valign='top'>1x AN/ALQ-144型红外干扰吊舱</td>
                                                <td valign='top'>1970年代晚期技术水平</td>
                                            </tr>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;'>
                                                <td valign='top'>1x 目视观察</td>
                                                <td valign='top'>对空搜索, 对海搜索, 对地搜索(高度), 对地搜索(机动), 测距信息, 测高信息, 测向信息</td>
                                            </tr>
                                        </table>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item name="3">
                                    <template slot="title">
                                        <P style="font-weight:700;">挂架/弹药储备/武器</P>
                                    </template>
                                    <div>
                                        <table width='100%' align='Center' border='1' bordercolor='Silver'
                                               cellpadding='2'
                                               cellspacing='0' rules='rows'
                                               style='font-family: Times New Roman
    ; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal;
    line-height: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal;
    widows: 2; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; background-color:
    white; border: 1px none silver; height: 10px; border-collapse: collapse;'>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;font-weight:bold;'>
                                                <td>挂架</td>
                                                <td>说明</td>
                                            </tr>
                                            <tr style='color:Black;background-color:WhiteSmoke;font-family:微软雅黑;font-size:10pt;'>
                                                <td valign='top'>2x 7.62毫米 M134型弹药速射机枪 [900发备弹]</td>
                                                <td valign='top'>可局部控制.</td>
                                            </tr>
                                        </table>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="dataCode=='army'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>亚洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>北美洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(3)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>南美洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(4)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>中国</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(10)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>日本</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>印度</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>美国</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/weapon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>加拿大</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>古巴</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==10?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(11)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>海上自卫队</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>陆上自卫队</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>航空自卫队</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==11?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(12)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>海上训练指导队群</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>第一护卫队群</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/nodeIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>LST 4003型“国东”号两栖运输舰*3</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>

                    </div>
                    <div :class="[menuId==12?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(13)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>第一训练支援队</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>第一输送队</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>

                    </div>
                    <div :class="[menuId==13?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(13)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/nodeIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>AST-4202黑部训练舰*2</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(13)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/nodeIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>AST-4203天龙训练舰*3</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>

                    </div>

                </div>
            </div>
            <div v-if="dataCode=='earth'">
                <div class="tab-panel">
                    <div :class="[menuId==0?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(1)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>亚洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(2)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>欧洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(3)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>北美洲</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==1?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(4)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>中亚</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(10)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>东亚</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>西亚</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                    <div :class="[menuId==2?'tab-panel-item tab-active':'tab-panel-item']">
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>西欧</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex b-line ">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>南欧</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                        <a @click="treeMenuSelect(180)" class="hs-flex hs-flex b-line">
                            <div class="hs-info-img">
                                <img src="../../public/images/packageIcon.png" alt="">
                            </div>
                            <div class="hs-flex-box">
                                <h2>北欧</h2>
                            </div>
                            <div class="hs-arrow"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div id="floatIcon"
             style="width:40px;height:40px;overflow: hidden;z-index: 9999;position: fixed;right: 20px;top: 150px;">
            <a @click="clickType('mapX')" v-if="dataCode=='earth'">
                <el-avatar style="width:40px;height:40px;" icon="el-icon-map-location"></el-avatar>
            </a>
            <a @click="clickType('mapX')" v-if="dataCode=='map'">
                <el-avatar style="width:40px;height:40px;" icon="el-icon-s-grid"></el-avatar>
            </a>
        </div>
        <EarthPage v-if="dataCode=='map'" style="width:100%;height: 100%"></EarthPage>
    </div>
</template>


<script>
    import EarthPage from './EarthPage.vue'

    export default {
        name: "DataPage",
        components: {
            EarthPage
        },
        data() {
            return {
                dataCode: 'weapon',
                lastMenuId: 0,
                menuId: 0,
                searchString: '',
                countryType: '',
                activeCard: '0'
            }
        },
        methods: {
            clickType(pageNode) {
                if (pageNode == 'mapX' && this.dataCode == 'earth') {
                    this.dataCode = 'map'
                } else if (pageNode == 'mapX' && this.dataCode == 'map') {
                    this.dataCode = 'earth'
                } else {
                    this.dataCode = pageNode;
                }
            },
            treeMenuSelect(nodeId) {
                if (null == nodeId || '' == nodeId || 0 == nodeId) {
                    this.menuId = this.lastMenuId;
                } else {
                    if (this.menuId == 0) {
                        this.lastMenuId = this.menuId;
                    }
                    this.menuId = nodeId;
                }

            }
        }
    }
</script>

<style scoped>
    .selectType {
        color: Crimson;
        font-weight: 700;
    }

</style>