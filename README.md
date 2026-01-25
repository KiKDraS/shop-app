# ShopApp 🛒

> Proyecto Final para el curso de "Desarrollo de Aplicaciones" - **CoderHouse**.

**ShopApp** es una aplicación de e-commerce móvil diseñada para ofrecer una
experiencia de compra fluida y moderna. Permite a los usuarios navegar por
categorías, gestionar un carrito de compras con persistencia de datos,
autenticarse de forma segura y utilizar funciones nativas del dispositivo.

## 📱 Diseño y Prototipo (Figma)

El diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX) se
basó en el siguiente prototipo de alta fidelidad:

👉
**[VER PROTOTIPO EN FIGMA AQUÍ](https://www.figma.com/design/IVOZNsyfqPJsYnX8wAPhFc/PhoneStore?node-id=0-1&t=eBzL5q1EQFvuOQp8-1)**

---

## 🛠 Tecnologías Utilizadas

Este proyecto integra un stack moderno y escalable:

- **Core:** React Native (Expo CLI).
- **Estado Global:** Redux Toolkit (RTK).
- **Backend as a Service:** Firebase (Authentication & Realtime Database).
- **Persistencia Local:** SQLite (para guardar el carrito offline).
- **Navegación:** React Navigation (Stack & Tab Navigator).
- **Hardware:** Expo Location y Expo Camera.
- **Estilos:** StyleSheet / Estilos propios.

---

## ✨ Funcionalidades Principales

1.  **Autenticación:** Login y Registro de usuarios mediante Firebase Auth
    (Email/Password) o cuenta de Google.
2.  **Catálogo de Productos:** Navegación por categorías y visualización de
    productos con imágenes remotas.
3.  **Carrito de Compras:**
    - Agregar/Eliminar items.
    - Cálculo automático de total.
    - **Persistencia:** El carrito no se pierde si cierras la app.
4.  **Gestión de Pedidos:** Confirmación de compra que guarda la orden en
    Firebase Realtime Database.
5.  **Funciones de Dispositivo:**
    - Uso de **Cámara** para foto de perfil.
    - Uso de **Ubicación** para dirección de envío.

---

## 🚀 Cómo correr el proyecto en local

Sigue estos pasos para ejecutar la aplicación en tu entorno de desarrollo:

### 1. Clonar el repositorio

```bash
git clone [https://github.com/TU_USUARIO/ShopApp.git](https://github.com/TU_USUARIO/ShopApp.git)
cd ShopApp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de
Firebase:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=tu_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=tu_app_id
EXPO_PUBLIC_FIREBASE_DATABASE_URL=tu_database_url
```

### 4. Ejecutar la aplicación

```bash
npm run start
```

- Escanea el código QR con la app **Expo Go** en tu celular (Android/iOS).
- O presiona <code>a</code> para abrir en emulador de Android / <code>i</code>
  para simulador de iOS.

## 📲 Descargar APK (Android)

Si deseas probar la aplicación compilada directamente en tu dispositivo Android
sin necesidad de entorno de desarrollo:

📥 [DESCARGAR APK AQUÍ]()

<i>Nota: Al ser una APK no firmada por Play Store, es posible que tu teléfono
solicite permisos para "Instalar aplicaciones de fuentes desconocidas".</i>
