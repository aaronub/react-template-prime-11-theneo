#!/bin/bash

# Set PATH to include node and theneo
export PATH="/Users/w512330/.nvm/versions/node/v20.19.5/bin:/usr/local/bin:/usr/bin:/bin"

# Directory where your React app is located:
REACT_PUBLIC="/Users/w512330/Desktop/wex/theme/react-template-prime-11-theneo/public/api"

# Full path to theneo command
THENEO="/Users/w512330/.nvm/versions/node/v20.19.5/bin/theneo"

# Export each project
echo "Exporting Wex Health..."
$THENEO export --project wex-health --dir "$REACT_PUBLIC/wex-health" --force

echo "Exporting Theneo sample project..."
$THENEO export --project theneo-sample-project --openapi --format json --dir "$REACT_PUBLIC/theneo-sample-project" --force

echo "Theneo sync complete!"
