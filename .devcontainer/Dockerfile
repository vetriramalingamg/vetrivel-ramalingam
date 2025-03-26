FROM node:20-bullseye

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

WORKDIR /workspace

# Install global npm packages
RUN npm install -g npm@latest vite typescript

USER node

# Set up command history
RUN echo "export HISTFILE=/workspace/.bash_history" >> ~/.bashrc