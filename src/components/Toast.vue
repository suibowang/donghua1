<template>
        <div class="toast-wrapper">
            <div class="toast">
                您必须输入内容
            </div>
        </div>
</template>
<style lang="less" scoped>
.toast-wrapper{
    position: fixed;
    width:100%;
    top: 20px;
    .toast{
        padding: 20px;
		color: white;
		background-color: #ff0062;
		border-radius: 10px;
		box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
		max-width: 400px;
		margin: 0 auto;
    }
}

</style>