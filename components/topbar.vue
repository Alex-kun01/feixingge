<template>
	<view class="topbar-container">
		<uni-nav-bar left-icon="back" :title="topbarData.title"></uni-nav-bar>
	</view>
</template>

<script>
	import {
		uniNavBar
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {

			};
		},
		props: ["topbarData"],
		components: {
			uniNavBar
		}
	}
</script>

<style lang="less">
	.topbar-container {}
</style>
