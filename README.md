# Pagautmas
Proyecto final programación V para pago de servicios


Reutilización del api de seguridad
estructura de seguridad de la conexión de base de datos aparte
simular servicios (capa de servicios)

Simular pago de servicios públicos. PAGAUTMAS 30%

•	Mobile first (subirlo en un hosting)
•	‘API (interno)
•	Seguridad (políticas de seguridad, crear password, 
•	‘BD (diagrama arquitectura, saber a qué estoy conectado)
•	Notificaciones por correo (notificación de cuando un servicio fue pagado)
•	‘Servicio de BCCR banco central (consumir un api del banco)
•	Historias de usuario
•	PWA (Aplicación Web Progresiva  icon café clase pasada).

Enrolar a clientes (pueda meterme a la app y trabajar en ello, poderme registrar)
Podrá escoger los servicios públicos disponibles a pagar (telefónico, internet, eléctrico). Sin embargo, tendrá varios proveedores en teléfono (kolbi, claro, Liberty), internet (kolbi, claro, Liberty), eléctrico (CNTEL, JASEC, SPA(servicios públicos …)) el cliente elige qué servicios se afilia.
La app puede guardar el número de teléfono, no necesariamente pagaría el servicio de internet de esa persona, sino también que ese cliente puede pagar el de otra persona.
Section favorites: donde registre lo que quiere pagar.
Por debajo tiene un api para llegar a la base de datos.
Simular un Kolbi, Claro, Liberty. Se puede usar el mismo servicio, pero se pasaría un parámetro distinto que especifique que se está pagando el internet y así sucesivamente.
El api consulta y paga.
El cliente digita un número de cuenta bancario para hacer una deducción automática del servicio. Relacionado a un banco X. Que permita saber si esa cuenta existe o no en ese banco  API Bancario
Cada proveedor tiene un servicio. Sería 7 servicios, más 1 + que es el de base de datos (PAGAUTMAS). 9= API que muestre al tipo de cambio.
Agregar el cambio de dólar que está sucediendo tanto en compra como en venta del banco central, conectarse al banco central y que lo muestre en pantalla mediante un botón.
Notificación hacia el correo del usuario para cuando el usuario hace el pago de un servicio.
Historias de usuario: (cómo enrolo un cliente, cómo hago para pagar un teléfono, consulta, si la cuenta no está disponible, las notificaciones, escoger el servicio y tratar de pagar) una UH por cada servicio


Proyecto de programación: API (diferentes lenguajes), Seguridad, BD (diagrama), notificaciones por correo, Servicio de BCCR. Características de PWA. UH

Realizar un Onboarding pensando en el UI & UX
Dos o tres pantallas. Similar al store cuando busco una aplicación. Buscaré las tres imágenes que quiero que sean las destacadas, o bien, un video introductorio.