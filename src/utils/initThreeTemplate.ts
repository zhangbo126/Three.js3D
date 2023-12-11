
import { defineComponent, h } from 'vue'
import * as THREE from 'three' //导入整个 three.js核心库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //导入控制器模块，轨道控制器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //导入GLTF模块，模型解析器,根据文件格式来定
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { vertexShader, fragmentShader } from '@/config/constant.js'
import { mapImageList } from "@/config/model";
import { lightPosition, onlyKey, debounce } from '@/utils/utilityFunction'
import { SetModelType } from '@/config/renderOptions'
import { ElMessage } from 'element-plus'

/**
 * @describe three.js 组件数据初始化方法
 * @param config 组件参数配置信息
*/

class renderModel {
	config: any
	container: any
	camera: any
	scene: any
	renderer: any
	controls: any
	model: any
	fileLoaderMap: { [key: string]: any; }
	modelAnimation: any
	animationMixer: any
	animationColock: THREE.Clock | null
	animationFrame: any
	rotationAnimationFrame: any
	animateClipAction: any
	loopMap: { [key: string]: number }
	skeletonHelper: any
	gridHelper: any
	axesHelper: any
	planeGeometry: any
	modelMaterialList: any
	effectComposer: any
	outlinePass: any
	renderAnimation: any
	raycaster: THREE.Raycaster
	mouse: THREE.Vector2 | null
	modelTextureMap: any
	glowComposer: any
	unrealBloomPass: any
	glowMaterialList: any
	materials: { [key: string]: any }
	onWindowResizesListener: any
	onMouseMoveListener: any
	constructor(config: any, elementId: string) {
		this.config = config

		this.container = document.querySelector('#' + elementId)
		// 相机
		this.camera
		// 场景
		this.scene
		//渲染器
		this.renderer
		// 控制器
		this.controls
		// 模型
		this.model
		//文件加载器类型
		this.fileLoaderMap = {
			'glb': new GLTFLoader(),
			'fbx': new FBXLoader(),
			'gltf': new GLTFLoader(),
			'obj': new OBJLoader(),
		}
		//模型动画列表
		this.modelAnimation
		//模型动画对象
		this.animationMixer
		this.animationColock = new THREE.Clock()
		// 动画帧
		this.animationFrame
		// 轴动画帧
		this.rotationAnimationFrame
		// 动画构造器
		this.animateClipAction = null
		// 动画循环方式枚举
		this.loopMap = {
			LoopOnce: THREE.LoopOnce,
			LoopRepeat: THREE.LoopRepeat,
			LoopPingPong: THREE.LoopPingPong
		}
		// 模型骨架
		this.skeletonHelper
		// 网格辅助线
		this.gridHelper
		// 坐标轴辅助线
		this.axesHelper
		//模型平面
		this.planeGeometry
		//模型材质列表
		this.modelMaterialList
		// 效果合成器
		this.effectComposer
		this.outlinePass
		// 动画渲染器
		this.renderAnimation
		// 碰撞检测
		this.raycaster = new THREE.Raycaster()
		// 鼠标位置
		this.mouse = new THREE.Vector2()
		// 模型自带贴图
		this.modelTextureMap
		// 辉光效果合成器
		this.glowComposer
		// 辉光渲染器
		this.unrealBloomPass
		// 需要辉光的材质
		this.glowMaterialList
		this.materials = {}
		// 窗口变化监听事件
		this.onWindowResizesListener
		// 鼠标移动
		this.onMouseMoveListener
	}
	init() {
		return new Promise(async (reslove, reject) => {
			//初始化渲染器
			this.initRender()
			// //初始化相机
			this.initCamera()
			//初始化场景
			this.initScene()
			//初始化控制器，控制摄像头,控制器一定要在渲染器后
			this.initControls()

			const load = await this.loadModel(this.config.fileInfo)
			// 创建效果合成器
			this.createEffectComposer()
			// 设置背景信息
			this.setSceneBackground()
			// 设置模型材质信息
			this.setModelMeaterial()
			// 设置后期/操作信息
			this.setModelLaterStage()
			// 设置灯光信息
			this.setSceneLight()
			// 设置模型动画信息
			this.setModelAnimation()
			// 设置模型轴/辅助线信息
			this.setModelAxleLine()
			//场景渲染
			this.sceneAnimation()
			this.addEvenListMouseLisatener()
			reslove(load)
		})
	}
	// 创建渲染器
	initRender() {
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) //设置抗锯齿
		//设置屏幕像素比
		this.renderer.setPixelRatio(window.devicePixelRatio)
		//渲染的尺寸大小
		const { clientHeight, clientWidth } = this.container
		this.renderer.setSize(clientWidth, clientHeight)
		//色调映射
		this.renderer.toneMapping = THREE.ReinhardToneMapping
		this.renderer.autoClear = true
		// this.renderer.outputColorSpace = THREE.sRGBEncoding
		//曝光
		this.renderer.toneMappingExposure = 3
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
		const meshTxt = document.createElement('div')
		meshTxt.id = 'mesh-txt'
		this.container.appendChild(meshTxt)
		this.container.appendChild(this.renderer.domElement)
	}
	// 创建相机
	initCamera() {
		const { clientHeight, clientWidth } = this.container
		this.camera = new THREE.PerspectiveCamera(45, clientWidth / clientHeight, 0.25, 1000)
		this.camera.near = 0.1
		const { camera } = this.config
		if (!camera) return false
		const { x, y, z } = camera
		this.camera.position.set(x, y, z)
		this.camera.updateProjectionMatrix()
	}
	// 创建场景
	initScene() {
		this.scene = new THREE.Scene()
	}
	addEvenListMouseLisatener() {
		// 监听场景大小改变，跳转渲染尺寸
		this.onWindowResizesListener = this.onWindowResize.bind(this)
		window.addEventListener("resize", this.onWindowResizesListener)

		// 鼠标移动
		this.onMouseMoveListener = this.onMouseMoveModel.bind(this)
		this.container.addEventListener('mousemove', this.onMouseMoveListener)
	}
	// 创建控制器
	initControls() {
		this.controls = new OrbitControls(this.camera, this.renderer.domElement)
		this.controls.enablePan = true
		this.controls.enabled = true
	}
	// 更新场景
	sceneAnimation() {
		this.renderAnimation = requestAnimationFrame(() => this.sceneAnimation())
		this.controls.update()
		// 将不需要处理辉光的材质进行存储备份
		this.scene.traverse((v: { background: null; name: any; isMesh: any; uuid: string | number; material: THREE.MeshBasicMaterial }) => {
			if (v instanceof THREE.Scene) {
				this.materials.scene = v.background
				v.background = null
			}
			if (!this.glowMaterialList.includes(v.name) && v.isMesh) {
				this.materials[v.uuid] = v.material
				v.material = new THREE.MeshBasicMaterial({ color: 'black' })
			}
		})
		this.glowComposer.render()
		// 在辉光渲染器执行完之后在恢复材质原效果
		this.scene.traverse((v: { uuid: string | number; material: any; background: any }) => {
			if (this.materials[v.uuid]) {
				v.material = this.materials[v.uuid]
				delete this.materials[v.uuid]
			}
			if (v instanceof THREE.Scene) {
				v.background = this.materials.scene
				delete this.materials.scene
			}
		})
		this.effectComposer.render()
	}
	// 创建效果合成器
	createEffectComposer() {
		const { clientHeight, clientWidth } = this.container
		this.effectComposer = new EffectComposer(this.renderer)
		const renderPass = new RenderPass(this.scene, this.camera)
		this.effectComposer.addPass(renderPass)
		this.outlinePass = new OutlinePass(new THREE.Vector2(clientWidth, clientHeight), this.scene, this.camera)
		this.outlinePass.visibleEdgeColor = new THREE.Color('#FF8C00') // 可见边缘的颜色
		this.outlinePass.hiddenEdgeColor = new THREE.Color('#8a90f3') // 不可见边缘的颜色
		this.outlinePass.edgeGlow = 2.0 // 发光强度
		this.outlinePass.edgeThickness = 1 // 边缘浓度
		this.outlinePass.edgeStrength = 4 // 边缘的强度，值越高边框范围越大
		this.outlinePass.pulsePeriod = 100 // 闪烁频率，值越大频率越低
		this.effectComposer.addPass(this.outlinePass)
		let outputPass = new OutputPass()
		this.effectComposer.addPass(outputPass)

		let effectFXAA = new ShaderPass(FXAAShader)
		const pixelRatio = this.renderer.getPixelRatio()
		effectFXAA.uniforms.resolution.value.set(1 / (clientWidth * pixelRatio), 1 / (clientHeight * pixelRatio))
		effectFXAA.renderToScreen = true
		effectFXAA.needsSwap = true
		this.effectComposer.addPass(effectFXAA)

		//创建辉光效果
		this.unrealBloomPass = new UnrealBloomPass(new THREE.Vector2(clientWidth, clientHeight), 0, 0, 0)
		// this.unrealBloomPass.threshold = 0
		// this.unrealBloomPass.strength = 0
		// this.unrealBloomPass.radius = 0
		// this.unrealBloomPass.renderToScreen = false
		// 辉光合成器
		const renderTargetParameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBAFormat,
			stencilBuffer: false,
		};
		const glowRender = new THREE.WebGLRenderTarget(clientWidth * 2, clientHeight * 2, renderTargetParameters)
		this.glowComposer = new EffectComposer(this.renderer, glowRender)
		this.glowComposer.renderToScreen = false
		this.glowComposer.addPass(new RenderPass(this.scene, this.camera))
		this.glowComposer.addPass(this.unrealBloomPass)
		// 着色器
		let shaderPass = new ShaderPass(new THREE.ShaderMaterial({
			uniforms: {
				baseTexture: { value: null },
				bloomTexture: { value: this.glowComposer.renderTarget2.texture },
				tDiffuse: {
					value: null
				}
			},
			vertexShader,
			fragmentShader,
			defines: {}
		}), 'baseTexture')

		shaderPass.renderToScreen = true
		shaderPass.needsSwap = true
		this.effectComposer.addPass(shaderPass)

	}
	// 加载模型
	loadModel(modelFile: SetModelType) {
		const { filePath, fileType, scale, map, position, decomposeName } = modelFile
		return new Promise((resolve, reject) => {
			const loader = this.fileLoaderMap[fileType]
			loader.load(filePath, (result: { scene: THREE.Object3D<THREE.Object3DEventMap> | THREE.SkinnedMesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>; animations: never[] }) => {
				switch (fileType) {
					case 'glb':
						this.model = result.scene
						this.model.decomposeName = decomposeName
						this.skeletonHelper = new THREE.SkeletonHelper(result.scene)
						this.modelAnimation = result.animations || []
						this.getModelMeaterialList(map)
						break;
					case 'fbx':
						this.model = result
						break;
					case 'gltf':
						this.model = result.scene
						break;
					case 'obj':
						this.model = result
						break;
					default:
						break;
				}
				this.setModelPositionSize()
				//	设置模型大小
				if (scale) {
					this.model.scale.set(scale, scale, scale);
				}
				//设置模型位置 
				this.model.position.set(0, -.5, 0)
				if (position) {
					const { x, y, z } = position
					this.model.position.set(x, y, z)
				}
				this.glowMaterialList = this.modelMaterialList.map((v: { name: any }) => v.name)
				this.scene.add(this.model)
				resolve(true)
			}, () => {

			}, (err: any) => {
				ElMessage.error('文件错误')
				console.log(err)
				reject()
			})
		})
	}
	onWindowResize() {
		const { clientHeight, clientWidth } = this.container
		//调整屏幕大小
		this.camera.aspect = clientWidth / clientHeight //摄像机宽高比例
		this.camera.updateProjectionMatrix() //相机更新矩阵，将3d内容投射到2d面上转换
		this.renderer.setSize(clientWidth, clientHeight)
		if (this.effectComposer) this.effectComposer.setSize(clientWidth, clientHeight)
		if (this.glowComposer) this.glowComposer.setSize(clientWidth, clientHeight)
	}
	// 清除模型数据
	onClearModelData() {
		cancelAnimationFrame(this.rotationAnimationFrame)
		cancelAnimationFrame(this.renderAnimation)
		cancelAnimationFrame(this.animationFrame)
		this.scene.traverse((v: { type: string; geometry: { dispose: () => void }; material: { dispose: () => void } }) => {
			if (v.type === 'Mesh') {
				v.geometry.dispose();
				v.material.dispose();
			}
		})
		this.scene.clear()
		this.renderer.clear()
		this.renderer.dispose()
		this.camera.clear()
		if (this.gridHelper) {
			this.gridHelper.clear()
			this.gridHelper.dispose()
		}
		if (this.axesHelper) {
			this.axesHelper.clear()
			this.axesHelper.dispose()
		}
		this.effectComposer.dispose()
		this.glowComposer.dispose()
		this.container.removeEventListener('mousemove', this.onMouseMoveListener)
		window.removeEventListener("resize", this.onWindowResizesListener)
		this.config = null
		this.container = null
		// 相机
		this.camera = null
		// 场景
		this.scene = null
		//渲染器
		this.renderer = null
		// 控制器
		this.controls = null
		// 模型
		this.model = null
		//文件加载器类型
		this.fileLoaderMap = {}
		//模型动画列表
		this.modelAnimation = null
		//模型动画对象
		this.animationMixer = null
		this.animationColock = null
		// 动画帧
		this.animationFrame = null
		// 轴动画帧
		this.rotationAnimationFrame = null
		// 动画构造器
		this.animateClipAction = null
		// 动画循环方式枚举
		this.loopMap = {}
		// 模型骨架
		this.skeletonHelper = null
		// 网格辅助线
		this.gridHelper = null
		// 坐标轴辅助线
		this.axesHelper = null
		//模型平面
		this.planeGeometry = null
		//模型材质列表
		this.modelMaterialList = null
		// 效果合成器
		this.effectComposer = null
		this.outlinePass = null
		// 动画渲染器
		this.renderAnimation = null
		// 碰撞检测
		this.raycaster == null
		// 鼠标位置
		this.mouse = null
		// 模型自带贴图
		this.modelTextureMap = null
		// 辉光效果合成器
		this.glowComposer = null
		// 辉光渲染器
		this.unrealBloomPass = null
		// 需要辉光的材质
		this.glowMaterialList = null
		this.materials = {}

	}

	// 设置模型定位缩放大小
	setModelPositionSize() {
		//设置模型位置
		this.model.updateMatrixWorld()
		const box = new THREE.Box3().setFromObject(this.model);
		const size = box.getSize(new THREE.Vector3());
		const center = box.getCenter(new THREE.Vector3());
		// 计算缩放比例
		const maxSize = Math.max(size.x, size.y, size.z);
		const targetSize = 2.5; // 目标大小
		const scale = targetSize / (maxSize > 1 ? maxSize : .5);
		this.model.scale.set(scale, scale, scale)
		// 设置模型位置
		// this.model.position.sub(center.multiplyScalar(scale))
		// 设置控制器最小缩放值
		this.controls.maxDistance = size.length() * 10
		// 设置相机位置
		// this.camera.position.set(0, 2, 6)
		// 设置相机坐标系
		this.camera.lookAt(center)
		this.camera.updateProjectionMatrix();

	}
	// 获取当前模型材质
	getModelMeaterialList(map: string) {
		const isMap = map ? true : false
		this.modelMaterialList = []
		this.model.traverse((v: { isMesh: any; castShadow: boolean; frustumCulled: boolean; material: { clone?: any; map: any; name?: any; color?: any } }) => {
			if (v.isMesh) {
				v.castShadow = true
				v.frustumCulled = false
				if (v.material) {
					const { name, color, map } = v.material
					const newMaterial = v.material.clone()
					v.material = newMaterial
					this.modelMaterialList.push(v)
				}
				// 部分模型本身没有贴图需 要单独处理
				if (v.material && isMap) {
					const mapTexture = new THREE.TextureLoader().load(map)
					const newMaterial = v.material.clone()
					v.material = newMaterial
					v.material.map = mapTexture
				}
			}
		})
	}

	// 处理背景数据回填
	setSceneBackground() {
		const { background } = this.config
		if (!background) return false
		// 设置背景
		if (background.visible) {
			const { color, image, viewImg } = background
			switch (background.type) {
				case 1:
					this.scene.background = new THREE.Color(color)
					break;
				case 2:
					this.scene.background = new THREE.TextureLoader().load(image);
					break;
				case 3:
					const texture = new THREE.TextureLoader().load(viewImg);
					texture.mapping = THREE.EquirectangularReflectionMapping
					this.scene.background = texture
					this.scene.environment = texture
					break;
				default:
					break;
			}
		} else {
			this.scene.background = new THREE.Color('#000')
		}
	}
	// 处理模型材质数据回填
	setModelMeaterial() {
		const { material } = this.config
		if (!material || !material.meshList) return false
		const mapIdList = mapImageList.map(v => v.id)
		material.meshList.forEach((v: { meshName?: any; meshFrom?: any; color?: any; opacity?: any; depthWrite?: any; wireframe?: any; visible?: any; type?: any }) => {
			const mesh = this.model.getObjectByProperty('name', v.meshName)
			const { color, opacity, depthWrite, wireframe, visible, type } = v
			const { map } = mesh.material
			if (material.materialType) {
				mesh.material = new (THREE as any)[type]({
					map,
				})
			} else {
				mesh.material.map = map
			}
			// 处理修改了贴图的材质
			if (v.meshFrom) {
				// 如果使用的是系统贴图
				if (mapIdList.includes(v.meshFrom)) {
					// 找到当前的系统材质
					const mapInfo = mapImageList.find(m => m.id == v.meshFrom) || {}
					// 加载系统材质贴图
					const mapTexture = new THREE.TextureLoader().load(mapInfo.url)
					// 如果当前模型的材质类型被修改了，则使用用新的材质type
					if (material.materialType) {
						mesh.material = new (THREE as any)[type]({
							map: mapTexture,
						})
					} else {
						mesh.material.map = mapTexture
					}
				} else {
					// 如果是当前模型材质自身贴图
					const meshFrom = this.model.getObjectByProperty('name', v.meshFrom)
					const { map } = meshFrom.material
					// 如果当前模型的材质类型被修改了，则使用用新的材质type
					if (material.materialType) {
						mesh.material = new (THREE as any)[type]({
							map,
						})
					} else {
						mesh.material.map = map
					}
				}
			}
			// 设置材质显隐
			mesh.material.visible = visible
			//设置材质颜色
			mesh.material.color.set(new THREE.Color(color))
			//设置网格
			mesh.material.wireframe = wireframe
			// 设置深度写入
			mesh.material.depthWrite = depthWrite
			//设置透明度
			mesh.material.transparent = true
			mesh.material.opacity = opacity
		})

	}
	// 设置辉光和模型操作数据回填
	setModelLaterStage() {
		const { stage } = this.config
		if (!stage) return false
		const { threshold, strength, radius, toneMappingExposure, meshPositonList } = stage
		// 设置辉光效果
		if (stage.glow) {
			this.unrealBloomPass.threshold = threshold
			this.unrealBloomPass.strength = strength
			this.unrealBloomPass.radius = radius
			this.renderer.toneMappingExposure = toneMappingExposure

		} else {
			this.unrealBloomPass.threshold = 0
			this.unrealBloomPass.strength = 0
			this.unrealBloomPass.radius = 0
			this.renderer.toneMappingExposure = toneMappingExposure
		}
		// 模型材质位置
		meshPositonList.forEach((v: { name?: any; x?: any; y?: any; z?: any }) => {
			const mesh = this.model.getObjectByProperty('name', v.name)
			const { x, y, z } = v
			mesh.position.set(x, y, z)
		})
	}
	// 鼠标移入模型材质
	onMouseMoveModel(event: { clientX: number; clientY: number }) {
		if (this.modelAnimation.length) return false
		const { clientHeight, clientWidth, offsetLeft, offsetTop } = this.container
		if (!this.mouse) return false
		this.mouse.x = ((event.clientX - offsetLeft) / clientWidth) * 2 - 1
		this.mouse.y = -((event.clientY - offsetTop) / clientHeight) * 2 + 1
		this.raycaster.setFromCamera(this.mouse, this.camera)
		const intersects = this.raycaster.intersectObjects(this.scene.children).filter((item) => (item.object as THREE.Mesh).isMesh && this.glowMaterialList.includes(item.object.name))
		if (intersects.length > 0) {
			const meshTxt: HTMLElement = document.getElementById("mesh-txt") as HTMLElement;
			// TODO:动画模型不显示材质标签
			if (this.modelAnimation.length) {
				document.body.style.cursor = 'pointer';
				return false
			}
			// 判断是否开启显示材质标签
			const { hoverMeshTag } = this.config.stage
			if (hoverMeshTag) {
				// 设置材质标签位置
				const intersectedObject = intersects[0].object
				meshTxt.innerHTML = intersectedObject.name
				meshTxt.style.display = "block";
				meshTxt.style.top = event.clientY - offsetTop + 'px';
				meshTxt.style.left = event.clientX - offsetLeft + 20 + 'px';
			}
			document.body.style.cursor = 'pointer'

		} else {
			const meshTxt: HTMLElement = document.getElementById("mesh-txt") as HTMLElement;
			document.body.style.cursor = '';
			meshTxt.style.display = "none";

		}
	}
	// 处理灯光数据回填
	setSceneLight() {
		const { light } = this.config
		if (!light) return false
		// 环境光
		if (light.ambientLight) {
			// 创建环境光
			const ambientLight = new THREE.AmbientLight(light.ambientLightColor, light.ambientLightIntensity)
			ambientLight.visible = light.ambientLight
			this.scene.add(ambientLight)
		}
		// 平行光
		if (light.directionalLight) {
			const directionalLight = new THREE.DirectionalLight(light.directionalLightColor, light.directionalLightIntensity)
			const { x, y, z } = lightPosition(light.directionalHorizontal, light.directionalVertical, light.directionalSistance)
			directionalLight.position.set(x, y, z)
			directionalLight.castShadow = light.directionaShadow
			directionalLight.visible = light.directionalLight
			this.scene.add(directionalLight)
			const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, .5)
			directionalLightHelper.visible = light.directionalLightHelper
			this.scene.add(directionalLightHelper)
		}
		// 点光源
		if (light.pointLight) {
			const pointLight = new THREE.PointLight(light.pointLightColor, light.pointLightIntensity, 100)
			pointLight.visible = light.pointLight
			const { x, y, z } = lightPosition(light.pointHorizontal, light.pointVertical, light.pointSistance)
			pointLight.position.set(x, y, z)
			this.scene.add(pointLight)
			// 创建点光源辅助线
			const pointLightHelper = new THREE.PointLightHelper(pointLight, .5)
			pointLightHelper.visible = light.pointLightHelper
			this.scene.add(pointLightHelper)
		}
		// 聚光灯
		if (light.spotLight) {
			const spotLight = new THREE.SpotLight(light.spotLightColor, 900);
			spotLight.visible = light.spotLight
			spotLight.map = new THREE.TextureLoader().load(require('@/assets/image/model-bg-1.jpg'));
			spotLight.decay = 2;
			spotLight.shadow.mapSize.width = 1920;
			spotLight.shadow.mapSize.height = 1080;
			spotLight.shadow.camera.near = 1;
			spotLight.shadow.camera.far = 10;
			spotLight.intensity = light.spotLightIntensity
			spotLight.angle = light.spotAngle
			spotLight.penumbra = light.spotPenumbra
			spotLight.shadow.focus = light.spotFocus
			spotLight.castShadow = light.spotCastShadow
			spotLight.distance = light.spotDistance
			const { x, y, z } = lightPosition(light.spotHorizontal, light.spotVertical, light.spotSistance)
			spotLight.position.set(x, y, z)
			this.scene.add(spotLight);
			//创建聚光灯辅助线
			const spotLightHelper = new THREE.SpotLightHelper(spotLight);
			spotLightHelper.visible = light.spotLightHelper && light.spotLight
			this.scene.add(spotLightHelper)
		}
		// 模型平面
		if (light.planeGeometry) {
			const geometry = new THREE.PlaneGeometry(light.planeWidth, light.planeHeight);
			var groundMaterial = new THREE.MeshStandardMaterial({ color: light.planeColor });
			const planeGeometry: any = new THREE.Mesh(geometry, groundMaterial);
			planeGeometry.name = 'planeGeometry'
			planeGeometry.rotation.x = -Math.PI / 2
			planeGeometry.position.set(0, -.5, 0)
			planeGeometry.visible = light.planeGeometry
			planeGeometry.geometry.verticesNeedUpdate = true
			// 让地面接收阴影
			planeGeometry.receiveShadow = true;
			this.scene.add(planeGeometry);
		}
	}
	// 处理模型动画数据回填
	setModelAnimation() {
		const { animation } = this.config
		if (!animation) return false
		if (this.modelAnimation.length && animation && animation.visible) {
			this.animationMixer = new THREE.AnimationMixer(this.model)
			const { animationName, timeScale, weight, loop } = animation
			// 模型动画
			const clip = THREE.AnimationClip.findByName(this.modelAnimation, animationName)
			if (clip) {
				this.animateClipAction = this.animationMixer.clipAction(clip)
				this.animateClipAction.setEffectiveTimeScale(timeScale)
				this.animateClipAction.setEffectiveWeight(weight)
				this.animateClipAction.setLoop(this.loopMap[loop])
				this.animateClipAction.play()
			}
			this.animationFrameFun()
		}
		// 轴动画
		if (animation.rotationVisible) {
			const { rotationType, rotationSpeed } = animation
			this.rotationAnimationFun(rotationType, rotationSpeed)
		}
	}
	// 模型动画帧
	animationFrameFun() {
		this.animationFrame = requestAnimationFrame(() => this.animationFrameFun())
		if (this.animationMixer && this.animationColock) {
			this.animationMixer.update(this.animationColock.getDelta())
		}
	}
	// 轴动画帧
	rotationAnimationFun(rotationType: string | number, rotationSpeed: number) {
		this.rotationAnimationFrame = requestAnimationFrame(() => this.rotationAnimationFun(rotationType, rotationSpeed))
		this.model.rotation[rotationType] += rotationSpeed / 50
	}
	// 模型轴辅助线配置
	setModelAxleLine() {
		const { attribute } = this.config

		if (!attribute) return false
		const { axesHelper, axesSize, color, divisions, gridHelper, positionX, positionY, positionZ, size, skeletonHelper, visible, x, y, z, rotationX, rotationY, rotationZ } = attribute
		if (!visible) return false
		//网格辅助线
		this.gridHelper = new THREE.GridHelper(size, divisions, color, color);
		this.gridHelper.position.set(x, y, z)
		this.gridHelper.visible = gridHelper
		this.gridHelper.material.linewidth = 0.1
		this.scene.add(this.gridHelper)
		// 坐标轴辅助线
		this.axesHelper = new THREE.AxesHelper(axesSize);
		this.axesHelper.visible = axesHelper
		this.axesHelper.position.set(0, -.50, 0)
		this.scene.add(this.axesHelper);
		// 设置模型位置
		this.model.position.set(positionX, positionY, positionZ)
		// 设置模型轴位置
		this.model.rotation.set(rotationX, rotationY, rotationZ)
		// 开启阴影
		this.renderer.shadowMap.enabled = true;
		// 骨骼辅助线
		this.skeletonHelper = new THREE.SkeletonHelper(this.model)
		this.skeletonHelper = skeletonHelper
	}

}


/**
 * @describe 动态创建3d模型组件的方法
 * @param config 组件参数配置信息
*/

function createThreeDComponent(config: any) {

	// 创建一个元素ID 
	const elementId = 'answer' + onlyKey(5, 10)
	let modelApi: any = null
	return defineComponent({
		data() {
			return {
				loading: false,
			}
		},
		props: {
			width: {
				type: Number,
				required: false,
			},
			height: {
				type: Number,
				required: false,
			},
		},
		watch: {
			$props: {
				handler() {
					if (modelApi) {
						debounce(modelApi.onWindowResize(), 200)
					}
				},
				immediate: false,
				deep: true
			}
		},
		render() {
			if (this.width && this.height) {
				return h('div', {
					vBind: {
						zLoading: this.loading,
					},
					style: {
						width: this.width - 10 + 'px',
						height: this.height - 10 + 'px',
						pointerEvents: 'none',
					},
					id: elementId,
				});
			} else {
				return h('div', {
					vBind: {
						zLoading: this.loading,
					},
					style: {
						width: '100%',
						height: '100%',
					},
					id: elementId,
				});
			}
		},
		async mounted() {
			this.loading = true
			modelApi = new renderModel(config, elementId);
			const load = await modelApi.init()
			if (load) {
				this.loading = false
			}
		},
		beforeUnmount() {
			modelApi.onClearModelData()
		}
	})
}


export default createThreeDComponent