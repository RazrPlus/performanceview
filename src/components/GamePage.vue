<template>
    <div id="mainDiv">
        <section class="hs-scrollView">
            <div class="hs-palace">
                <a @click="clickType('gameCenter')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon ">
                        <img src="../../public/images/game.png" alt="当前赛事">
                    </div>
                    <div class="hs-palace-grid-text ">
                        <h2 :class="[gameCode=='gameCenter'?'selectType':'']">推演大厅</h2>
                    </div>
                </a>
                <a @click="clickType('ranging')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/rank.png" alt="排名信息">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[gameCode=='ranging'?'selectType':'']">排行榜</h2>
                    </div>
                </a>
                <a @click="clickType('report')" class="hs-palace-grid">
                    <div class="hs-palace-grid-icon">
                        <img src="../../public/images/report.png" alt="战报信息">
                    </div>
                    <div class="hs-palace-grid-text">
                        <h2 :class="[gameCode=='report'?'selectType':'']">优秀战报</h2>
                    </div>
                </a>

            </div>
            <div id="gameCenter" v-if="gameCode=='gameCenter'">
                <div class="hs-flex hs-flex-five">
                    <div class="hs-flex-box">
                        <p>正在进行</p>
                    </div>
                    <div class="hs-arrow">
                        <span></span>
                    </div>
                </div>
                <div class="hs-six-list">
                    <a href="javascript:;" class="hs-flex b-line">
                        <div class="hs-flex-box"
                             style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                            <div style="display: flex;flex-direction: row;justify-content: space-around">
                                <div>
                                    <img src="../../public/images/user1.jpg"
                                         style="position: relative;width: 25px;left: 25%;">
                                    <p>王浩铭</p>
                                </div>
                                <div>
                                    <img src="../../public/images/pk.png" style="width: 30px;">
                                </div>
                                <div>
                                    <img src="../../public/images/user2.png"
                                         style="position: relative;width: 25px;left: 25%;">
                                    <p>王龙</p>
                                </div>
                            </div>
                            <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                            <div style="margin: 3px;">
                                <p>想定名称：战地飞云-决赛版</p>
                                <p>开始时间：2020/02/18 16:50</p>
                            </div>
                        </div>
                        <div class="hs-arrow">
                        </div>
                    </a>
                    <a href="javascript:;" class="hs-flex b-line">
                        <div class="hs-flex-box"
                             style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                            <div style="display: flex;flex-direction: row;justify-content: space-around">
                                <div>
                                    <img src="../../public/images/user1.jpg"
                                         style="position: relative;width: 25px;left: 25%;">
                                    <p>王浩铭</p>
                                </div>
                                <div>
                                    <img src="../../public/images/pk.png" style="width: 30px;">
                                </div>
                                <div>
                                    <img src="../../public/images/user2.png"
                                         style="position: relative;width: 25px;left: 25%;">
                                    <p>王龙</p>
                                </div>
                            </div>
                            <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                            <div style="margin: 3px;">
                                <p>想定名称：战地飞云-决赛版</p>
                                <p>开始时间：2020/02/18 16:50</p>
                            </div>
                        </div>
                        <div class="hs-arrow">
                        </div>
                    </a>
                </div>
                <div class="hs-flex hs-flex-five">
                    <div class="hs-flex-box">
                        <p>今日战况</p>
                    </div>
                </div>
                <div class="hs-six-list changeone">
                    <ul>
                        <li>
                            <a href="javascript:;" class="hs-flex b-line">
                                <div class="hs-flex-box"
                                     style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                                        <div>
                                            <img src="../../public/images/user1.jpg"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王浩铭</p>
                                        </div>
                                        <div>
                                            <p style="font-size: 20px">8:5</p>
                                        </div>
                                        <div>
                                            <img src="../../public/images/user2.png"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王龙</p>
                                        </div>
                                    </div>
                                    <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                                    <div style="margin: 3px;">
                                        <p>想定名称：战地飞云-决赛版</p>
                                        <p>开始时间：2020/02/18 16:50</p>
                                    </div>
                                </div>
                                <div class="hs-arrow">
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="hs-flex b-line">
                                <div class="hs-flex-box"
                                     style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                                        <div>
                                            <img src="../../public/images/user1.jpg"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王浩铭</p>
                                        </div>
                                        <div>
                                            <p style="font-size: 20px">8:5</p>
                                        </div>
                                        <div>
                                            <img src="../../public/images/user2.png"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王龙</p>
                                        </div>
                                    </div>
                                    <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                                    <div style="margin: 3px;">
                                        <p>想定名称：战地飞云-决赛版</p>
                                        <p>开始时间：2020/02/18 16:50</p>
                                    </div>
                                </div>
                                <div class="hs-arrow">
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="hs-flex b-line">
                                <div class="hs-flex-box"
                                     style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                                        <div>
                                            <img src="../../public/images/user1.jpg"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王浩铭</p>
                                        </div>
                                        <div>
                                            <p style="font-size: 20px">8:5</p>
                                        </div>
                                        <div>
                                            <img src="../../public/images/user2.png"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王龙</p>
                                        </div>
                                    </div>
                                    <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                                    <div style="margin: 3px;">
                                        <p>想定名称：战地飞云-决赛版</p>
                                        <p>开始时间：2020/02/18 16:50</p>
                                    </div>
                                </div>
                                <div class="hs-arrow">
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="hs-flex b-line">
                                <div class="hs-flex-box"
                                     style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                                        <div>
                                            <img src="../../public/images/user1.jpg"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王浩铭</p>
                                        </div>
                                        <div>
                                            <p style="font-size: 20px">8:5</p>
                                        </div>
                                        <div>
                                            <img src="../../public/images/user2.png"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王龙</p>
                                        </div>
                                    </div>
                                    <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                                    <div style="margin: 3px;">
                                        <p>想定名称：战地飞云-决赛版</p>
                                        <p>开始时间：2020/02/18 16:50</p>
                                    </div>
                                </div>
                                <div class="hs-arrow">
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="hs-flex b-line">
                                <div class="hs-flex-box"
                                     style="display: flex;flex-direction: row ;justify-content: space-around;  ">
                                    <div style="display: flex;flex-direction: row;justify-content: space-around">
                                        <div>
                                            <img src="../../public/images/user1.jpg"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王浩铭</p>
                                        </div>
                                        <div>
                                            <p style="font-size: 20px">8:5</p>
                                        </div>
                                        <div>
                                            <img src="../../public/images/user2.png"
                                                 style="position: relative;width: 25px;left: 25%;">
                                            <p>王龙</p>
                                        </div>
                                    </div>
                                    <div style="width:2px;border-left: solid #b8aeae 1px"></div>
                                    <div style="margin: 3px;">
                                        <p>想定名称：战地飞云-决赛版</p>
                                        <p>开始时间：2020/02/18 16:50</p>
                                    </div>
                                </div>
                                <div class="hs-arrow">
                                </div>
                            </a>
                        </li>
                    </ul>


                </div>
                <div style="height:52px;"></div>
            </div>
            <div id="ranging" v-if="gameCode=='ranging'">
                <section class="aui-scrollView">
                    <div class="aui-tab" data-ydui-tab>
                        <ul class="tab-nav b-line">
                            <li :class="[rangCode=='person'?'tab-nav-item tab-active':'tab-nav-item']">
                                <a @click="rangType('person')">
                                    <span>个人赛</span>
                                </a>
                            </li>
                            <li :class="[rangCode=='team'?'tab-nav-item tab-active':'tab-nav-item']">
                                <a @click="rangType('team')">
                                    <span>团体赛</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-panel">
                            <div :class="[rangCode=='person'?'tab-panel-item tab-active':'tab-panel-item']">
                                <div v-for="(person,index) in personRange" v-bind:key="person.account">
                                    <a href="javascript:;" class="aui-flex b-line">
                                        <div class="aui-flex-car-img">
                                            <img v-if="person.sex=='男'" src="../../public/images/user2.png"
                                                 style="position: relative; width: 55px;left: 20%;">
                                            <img v-if="person.sex=='女'" src="../../public/images/girl.png"
                                                 style="position: relative; width: 55px;left: 20%;">
                                            <h2 style="text-align: center;font-size: 20px">{{person.name}}</h2>
                                        </div>
                                        <div class="aui-flex-box">
                                            <p>天梯积分：{{person.grade}}</p>
                                            <p>天梯等级：LV&nbsp;{{person.level}}</p>
                                            <p>比赛场次：{{person.total}}</p>
                                            <p>比赛胜率：{{person.winpercent}}</p>
                                        </div>
                                        <div class="aui-flex-top">
                                            <h2>{{index+1}}</h2>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div :class="[rangCode=='team'?'tab-panel-item tab-active':'tab-panel-item']">
                                <div v-for="(team,index) in teamRange" v-bind:key="team.account">
                                    <a href="javascript:;" class="aui-flex b-line">
                                        <div class="aui-flex-car-img">
                                            <img src="../../public/images/team.png"
                                                 style="position: relative; width: 55px;left: 20%;">
                                            <h2 style="text-align: center;font-size: 20px">{{team.name}}</h2>
                                        </div>
                                        <div class="aui-flex-box">
                                            <p>天梯积分：{{team.grade}}</p>
                                            <p>天梯等级：LV&nbsp;{{team.level}}</p>
                                            <p>比赛场次：{{team.total}}</p>
                                            <p>比赛胜率：{{team.winpercent}}</p>
                                        </div>
                                        <div class="aui-flex-top">
                                            <h2>{{index+1}}</h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="report" v-if="gameCode=='report'">
                <div>
                    <p style="margin: 30%">功能开发中，请稍后。。。</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {getData} from "../utils/httpUtils";

    export default {
        name: "GamePage",
        mounted() {
            this.getRangeInfo('person');
        },
        data() {
            return {
                gameCode: 'gameCenter',
                rangCode: 'person',
                personRange: '',
                teamRange: '',
            }
        },
        methods: {
            getRangeInfo(cellType) {
                let cesType = cellType == 'person' ? '个人排位' : '编队排位';
                let _this = this;
                let params = new URLSearchParams();
                params.append('gameTypeCN', cesType);
                params.append('cellType', cellType);
                getData('range/infos', 'GET', params).then((response) => {
                    if (response.code == 200 && response.obj.length > 0) {
                        if (cellType == 'person') {
                            _this.personRange = response.obj;
                        } else {
                            _this.teamRange = response.obj;
                        }
                    } else {
                        _this.personRange = '';
                    }
                });
            },
            clickType(pageNode) {
                this.gameCode = pageNode;
            },
            rangType(pageNode) {
                this.rangCode = pageNode;
                this.getRangeInfo(pageNode);
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