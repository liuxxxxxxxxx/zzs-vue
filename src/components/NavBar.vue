<template>
    <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="logo" to="/" class="home">
            <img src="../assets/sprite_logo.png" alt="" height="80%">
        </MenuItem>
        <MenuItem name="1" to="/" class="home">
            <Icon type="ios-paper"/>
            首页
        </MenuItem>
        <MenuItem name="2" to="/sail">
            <Icon type="ios-people"/>
            文件上传
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats"/>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4" @click="test">
            <Icon type="ios-construct"/>
            综合设置
        </MenuItem>

        <Row type="flex" justify="end">
            <Col span="8"><MenuItem name="5" class="user">
                <Badge dot :offset=[18,8]>
                    <Icon type="ios-contact-outline" size="40" @click="changeLogDrawerState"/>
                </Badge>
            </MenuItem>
            </Col>
        </Row>
    </Menu>

</template>

<script>
    import {mapMutations, mapState} from 'vuex';

    export default {
        name: "NavBar",
        computed: {

        },
        methods: {
            ...mapMutations(['changeLogDrawerState']),
            test(){
                this.$router.push({path:'/userInfo'})
            }
        }
    }
</script>

<style scoped>
    .user{
       margin-left: auto;
    }
    .home{
        margin-left: 50px;
    }
</style>