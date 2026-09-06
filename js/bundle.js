(async()=>{
const inflate=async(b64)=>{
  const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  const ds=new DecompressionStream("gzip");
  const stream=new Blob([bin]).stream().pipeThrough(ds);
  const text=await new Response(stream).text();
  (0,eval)(text);
};
try {
  await inflate(window.__WP_GZ_STORE_A + window.__WP_GZ_STORE_B);
  await inflate(window.__WP_GZ_VOYAGES);
  await inflate(window.__WP_GZ_APP_A + window.__WP_GZ_APP_B);
} catch(e) {
  console.error(e);
  const v=document.getElementById("view");
  if(v)v.textContent=String(e);
}
})();
