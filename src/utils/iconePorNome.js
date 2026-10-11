export function iconePorNome(nome,raw = false){
    let svgs;
    if(raw){
        svgs = import.meta.glob('/src/assets/icones/*.svg', {
        eager: true,
        query: '?raw',
        import: 'default',
        });
        
    }else{
        svgs = import.meta.glob('/src/assets/icones/*{.svg,.png,.jpg}', {
        eager: true,
        import: 'default',
        });
    }
    
    const achar = (mapa, nome) =>
    Object.entries(mapa).find(([caminho]) => caminho.includes(`/${nome}.`))?.[1];
    const svg = achar(svgs, nome);
    return svg? svg:false;
    
};
