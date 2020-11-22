# Basic use of Socket in HTTP protocol

Please be noted that this project will disregard security purpose, only to demonstrate use of Socket to init communication after client(s) subscription.

## Basic Idea

- The Server will create a channel for subscription (through GET endpoint)
- The Server will store IP of subscribed clients
- Server will continually send a message to clients every 2 seconds
- Client can unsubscribe from the Channel