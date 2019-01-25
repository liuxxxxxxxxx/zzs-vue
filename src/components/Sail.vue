<template>
    <div class="main">
        <div class="back-photo">
            <img src="../assets/sail/photo.jpg" alt="photo" width="100%">
        </div>
        <div class="file-up">
            <Upload
                    multiple
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或者拖拽文件到此上传</p>
                </div>
            </Upload>
        </div>
        <div class="file-list">
            <Table :data="fileData" :columns="columns">

            </Table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sail",
        data() {
            return {
                fileData: [
                    {
                      title:"文件1"
                    }
                ],
                columns: [
                    {
                        title: "文件名称",
                        key: 'title',
                    },
                    {
                        title: "文件大小",
                        key: 'title',
                    },
                    {
                        title: "文件名称",
                        key: 'title',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .main {
        margin: 0 auto;
        width: 1000px;
    }

    .back-photo {
        /*float: left;*/
        width: 300px;
        height: content-box;
        box-shadow: 1px 2px 3px black;
    }

    .file-up {
        /*float: left;*/
        width: 400px;
    }

    .center-icon {
        margin: 0 auto;
        text-align: center;
    }
</style>