import * as THREE from 'three';
class telefoneObjeto extends HTMLElement{
    connectedCallback(){
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.appendChild(renderer.domElement);

        // implementar celular
        

        scene.add(cube);

        
        function animate() {
            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    };
};
customElements.define('telefone-objeto', telefoneObjeto);
