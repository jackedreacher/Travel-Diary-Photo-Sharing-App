# Travel Diary App

A React Native mobile application that lets users capture photos, attach location data, and view their travel memories on a map.

## Features

- 📸 Camera Integration
  - Take photos using device camera
  - Import photos from gallery
  - Switch between front and back cameras
  - Auto-capture location data with each photo

- 🗺️ Map Integration
  - View all photos on an interactive map
  - Photos displayed as markers at capture locations
  - Preview photo thumbnails in marker callouts
  - Current location tracking
  - "Locate me" button for quick navigation

- 🔐 Authentication
  - User registration
  - Login functionality
  - Secure navigation flow

- 💅 Modern UI
  - Clean and intuitive interface
  - NativeWind (Tailwind CSS) styling
  - Bottom tab navigation
  - Responsive layout

## Navigation Structure

The app uses a simple, two-level navigation structure:

```
Root (Stack)
├── Auth
│   ├── Welcome
│   ├── Login
│   └── Register
└── Main (Bottom Tabs)
    ├── Camera
    ├── Map
    ├── Profile
    └── Settings
```

## Tech Stack

- React Native with Expo
- TypeScript for type safety
- React Navigation v7
- Expo Camera
- React Native Maps
- Expo Location
- NativeWind (Tailwind CSS)


## Getting Started

1. Install dependencies:
```bash
npx expo install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on your device or simulator:
   - Press 'a' for Android
   - Press 'i' for iOS
   - Scan QR code with Expo Go app

## Required Permissions

The app requires the following device permissions:
- Camera access
- Photo library access
- Location services

## Project Structure

```
src/
├── navigation/
│   ├── config.ts         # Navigation configuration
│   ├── NavigatorFactory.tsx
│   ├── Navigation.tsx
│   └── utils.ts
├── screens/
│   ├── auth/
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── WelcomeScreen.tsx
│   └── main/
│       ├── CameraScreen.tsx
│       ├── MapScreen.tsx
│       ├── ProfileScreen.tsx
│       └── SettingsScreen.tsx
└── context/
    └── PhotoContext.tsx  # Shared photo state
```

## Key Features Implementation

### Camera Screen
- Uses Expo Camera for photo capture
- Integrates with device gallery
- Automatically captures location data
- Real-time camera preview
- Camera flip functionality

### Map Screen
- Interactive map display
- Photo markers with thumbnails
- Current location tracking
- Custom locate button
- Smooth animations

### Photo Context
- Centralized photo management
- Location data storage
- Shared state between screens
- Type-safe implementation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details."# Travel-Diary-Photo-Sharing-App" 
