<template>
    <div>

        <Drawer title="登录注册" :closable="true" v-model="logDrawerState">
            <div >
                <Input v-model.lazy="user.userName" prefix="md-person" placeholder="请输入用户名" style="width: auto" />
                <Input v-model.lazy="user.userPwd" class="pwd" prefix="md-key" placeholder="请输入密码" style="width: auto"/>
                <Input v-show="showRegister" v-model.lazy="user.userPwd" class="pwd" prefix="md-key" placeholder="请确认密码" style="width: auto"/>
                <Button type="primary" class="login" @click="login">{{showRegister? "注册":"登录"}}</Button>
                <Button v-show="showRegister" class="backToLogin" @click="changeRegisterState" type="dashed">返回登录</Button>
                <Divider >微信登录</Divider>
                <div class="wechat" @click="loginByWechat">
                    <img src="../assets/wechat.jpg" width="100px" alt="">
                </div>
                <span>请仔细阅读隐私协议等，登录就代表您同意该协议</span>
            </div>

        </Drawer>
    </div>
</template>


<script>
    import {mapMutations, mapActions, mapState} from 'vuex';

    export default {
        data() {
            return {
                // showRegister:false,
                state:'',
            }
        },
        methods:{
            ...mapActions(['login','loginByWechat']),
            ...mapMutations(['changeRegisterState'])
        },
        computed: {
            ...mapState(['showRegister']),
            user: {
                get() {
                    return this.$store.state.user;
                },
                set(user) {
                    this.$store.dispatch('updateUser', user);
                }
            },
            logDrawerState:{
                get() {
                    return this.$store.state.logDrawerState;
                },
                set(logDrawerState){
                    this.$store.dispatch('logDrawerState', logDrawerState)
                }
            },

        },
    }
</script>


<style scoped>
    .pwd{
        margin-top: 20px;
    }
    .login{
        text-align: center;
        margin: 20px 35%;
    }
    .backToLogin{
        margin: 0 30%;
    }
    .wechat{
        margin-top: 80px;
        text-align: center;
        cursor: pointer;
    }

</style>