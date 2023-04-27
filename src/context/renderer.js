

const information = document.getElementById('info');
information.innerText = ' This app chro (v${versions.chrome()}), onn (v${versions.node()}) , Etron (v${versions.electron()}) ' ;

 console.log(versions.chrome());
 console.log(versions.node());
 console.log(versions.electron());
 console.log(window.mjAPI.desktop);

/*
const func = async () => {
   const response = await window.version.ping()
   console.log(response)
}
*/

