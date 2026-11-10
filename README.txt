Instalación de la web de Catalina Coronado

1. Haz una copia de seguridad si el hosting ya tiene una web.
2. Descomprime Catalina-Coronado-web.zip y sube su contenido a la raíz pública del dominio (normalmente public_html, www o htdocs). index.html debe quedar directamente en esa carpeta.
3. Abre el dominio por HTTPS y prueba Inicio, una ficha de obra y Catálogo. El servidor debe servir index.html al abrir cada carpeta.
4. La web es estática. No requiere WordPress, PHP ni base de datos. Sus enlaces internos parten de la raíz del dominio. Para instalarla en una subcarpeta, hay que adaptar esas rutas.

Dependencias externas

Parte de las imágenes, el vídeo, los PDF y los visores del catálogo se cargan desde catalinacoronado.es. Si vas a reemplazar la web original en ese mismo dominio, conserva los recursos de /wp-content/uploads/ y mantén operativo el sistema de encargos de WordPress antes de sustituir las páginas. Si retiras WordPress, será necesario migrar el procesamiento del formulario.

Los formularios envían al WordPress original y usan su clave de reCAPTCHA. Autoriza el dominio de destino en esa configuración si hace falta y comprueba que se recibe un encargo de prueba antes de abrir la web al público.
