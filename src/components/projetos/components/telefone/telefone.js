import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './telefone.css';
class telefoneObjeto extends HTMLElement{
    connectedCallback(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('#191414');

        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.appendChild(this.renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        this.scene.add(directionalLight);
        
        const loader = new GLTFLoader();

        loader.load(
        '/portfolio-2026/cellphoneModel/appleIphoneModel/source/apple_iphone_18_pro_silver.glb',
        (gltf) => {
            this.model = gltf.scene;

            // criar video screen (videoTexture)

            // this.model.traverse((child) => {
            // if (child.isMesh) {
            //     if (child.material.name === 'iPhone_18_Pro_Screen_Silver.jpg_9.jpeg') {
            //     child.material.map = videoTexture;
            //     child.material.needsUpdate = true;
            //     }
            // }
            // });

            // 1. FORÇA O PROCESSO DE CENTRALIZAÇÃO AUTOMÁTICA
            const box = new THREE.Box3().setFromObject(this.model);
            const center = box.getCenter(new THREE.Vector3());

            this.model.position.sub(center);
            

            this.scene.add(this.model);
            

            // 2. DIRECIONA A CÂMERA DIRETAMENTE PARA O CENTRO DO OBJETO
            if (this.camera) {
                // Diminua o Z para aproximar o objeto (tente 3, 2.5 ou até menos se ele for pequeno)
                this.camera.position.set(0, 0, 0.14); 
                this.camera.lookAt(0, 0, 0); // Garante que a câmera mire perfeitamente no centro
            }
        });
        this.resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                if (width === 0 || height === 0) return;
                
                this.renderer.setSize(width, height);
                this.camera.aspect = width / height;
                this.camera.updateProjectionMatrix();
                
            }
            });

            this.resizeObserver.observe(this);
            this.renderer.setAnimationLoop(()=> this.animar());
            this.animar();

    };
    animar() {
        if(this.model){
            this.model.rotation.y += 0.009;
        }

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    };
};
customElements.define('telefone-objeto', telefoneObjeto);
