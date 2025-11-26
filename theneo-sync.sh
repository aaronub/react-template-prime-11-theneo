#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Set PATH to include node and theneo (for local Mac usage)
export PATH="/Users/w512330/.nvm/versions/node/v20.19.5/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# Use relative path from script location
REACT_PUBLIC="$SCRIPT_DIR/public/api"

# Try to find theneo command (works both locally and in CI)
if command -v theneo &> /dev/null; then
    THENEO="theneo"
elif [ -f "/Users/w512330/.nvm/versions/node/v20.19.5/bin/theneo" ]; then
    THENEO="/Users/w512330/.nvm/versions/node/v20.19.5/bin/theneo"
else
    echo "Error: theneo command not found"
    exit 1
fi

echo "Using theneo at: $(which $THENEO || echo $THENEO)"
echo "Output directory: $REACT_PUBLIC"

# Export each project
echo "Exporting Wex Health..."
$THENEO export --project wex-health --dir "$REACT_PUBLIC/wex-health" --force

echo "Exporting Theneo sample project..."
$THENEO export --project theneo-sample-project --openapi --format json --dir "$REACT_PUBLIC/theneo-sample-project" --force

echo "Theneo sync complete!"
