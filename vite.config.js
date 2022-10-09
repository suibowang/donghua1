import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import postcsspxtoviewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/four/',
  plugins: [
	  vue(),
    Pages({
      dirs: "src/pages", // 需要生成路由的文件目录，默认就是识别src下面的pages文件
      exclude: ["**/components/*.vue"], 
    }),
    // Layouts({
    //   layoutsDirs: 'src/pages',  // 布局文件存放目录
    //   defaultLayout: 'home'  // 默认布局，对应 src/layout/index.vue
// 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
  // }),
  ],
  css:{
	  postcss: {
	        plugins: [
	          postcsspxtoviewport({
	            unitToConvert: 'px', // 要转化的单位
	            viewportWidth: 375, // UI设计稿的宽度
	            unitPrecision: 6, // 转换后的精度，即小数点位数
	            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
	            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
	            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
	            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
	            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
	            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
	            replace: true, // 是否转换后直接更换属性值
	            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
	            exclude: [],
	            landscape: false, // 是否处理横屏情况
				// landscapeUnit: 'vw', //横屏时使用的单位
				// landscapeWidth: 300 //横屏时使用的视口宽度
	          })
	        ]
	      }
  }
})
