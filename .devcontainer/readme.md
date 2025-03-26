# Development Container for Vite React ShadCN UI Project

This directory contains configuration for using Visual Studio Code's Development Containers feature with this project.

## What's Included

- Node.js 20 (Bullseye)
- NPM with the latest version
- Vite and TypeScript installed globally
- Pre-configured VS Code extensions for React, TypeScript, TailwindCSS, and ESLint
- Port forwarding for Vite's development server (5173)

## How to Use

1. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code.

2. Open the command palette (F1 or Ctrl+Shift+P / Cmd+Shift+P on Mac) and run the "Remote-Containers: Reopen in Container" command.

3. VS Code will build the container and open the project in it. This might take a few minutes the first time.

4. Once inside the container, you can run:
   ```bash
   npm run dev
   ```
   
   The development server will start on port 5173, which is forwarded to your local machine.

## Customization

To customize this setup:

- Modify `.devcontainer/devcontainer.json` to add or remove VS Code extensions and settings.
- Modify `.devcontainer/Dockerfile` to change the container's configuration.

## Troubleshooting

If you encounter any issues:

1. Ensure Docker is running on your machine.
2. Try rebuilding the container from the command palette with "Remote-Containers: Rebuild Container".
3. Check VS Code's "Remote - Containers" output panel for error messages.
