# React Native Image Capture and Watermarking

This project demonstrates how to capture a portion of the screen in a React Native application and add a watermark to the captured image. It utilizes `react-native-view-shot` for capturing the screen and `react-native-photo-manipulator` for overlaying a watermark image.

## Features

- Capture a specific area of the screen.
- Add a watermark to the captured image.
- Save the watermarked image with high quality.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your system.
- React Native environment set up for either iOS or Android.
- An Android or iOS device or emulator for testing.

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/begouravdev/capture-and-and-watermark.git
```

2. Navigate to the project directory:

```bash
cd your-project-name
```

3. Install the required dependencies:

```bash
npm install
```

4. For iOS, run the following command to install pod dependencies:

```bash
cd ios && pod install && cd ..
```

## Usage

To run the project on an Android or iOS device/emulator, use the following commands:

- For Android:

```bash
npm run android
```

- for iOS:

```bash
npm run ios
```

Once the application is running, you will see a screen with a "Capture and Add Watermark" button. Pressing this button will capture the specified area of the screen and add a predefined watermark to the bottom right corner of the captured image. The URI of the watermarked image will be displayed in an alert.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/AmazingFeature).
3. Make your changes and commit them (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.
