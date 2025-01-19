# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when using Express.js to parse JSON request bodies. The problem arises when the request body is empty or contains invalid JSON data.  The server may throw errors, fail silently, or return unexpected results.

## Bug Description

The provided `bug.js` file showcases an Express.js app that attempts to parse JSON from POST requests to `/data`.  However, if an empty request body is sent or the body contains invalid JSON, the application may malfunction. 

The solution `bugSolution.js` demonstrates how to gracefully handle these edge cases to prevent unexpected behavior. 

## Setup

1. Clone the repository
2. `npm install`
3. Run `node bug.js` and `node bugSolution.js` separately to see the difference. Test with a valid JSON POST request, an empty POST request, and a POST request with invalid JSON.
